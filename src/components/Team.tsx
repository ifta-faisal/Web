import React, { useState, useEffect } from 'react';
import { GraduationCap, Mail, Linkedin, Award, Users, Trophy, ChevronRight, User } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { teamMembers } from '../data/teamData';
const Team = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    const qFilter = searchParams.get('filter');
    if (qFilter) {
      setFilter(qFilter);
    }
  }, [searchParams]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ju-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll('.ju-reveal:not(.ju-visible)').forEach((el) => {
        observer.observe(el);
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [filter, searchParams]);


  const targetId = searchParams.get('id');
  const isFocused = !!targetId;

  const filteredMembers = teamMembers.filter(member => {
    if (targetId) return member.id === targetId;
    if (filter === 'all') return true;
    if (filter === 'leadership' || filter === 'member') {
      return member.category === filter;
    }
    
    const team = member.team.toLowerCase();
    switch (filter) {
      case 'electronics':
        return team.includes('electrical') || team.includes('electronics');
      case 'mechanical':
        return team.includes('mechanical');
      case 'software':
        return team.includes('software') || team.includes('nav') || team.includes('autonomous');
      case 'communication':
        return team.includes('communication');
      case 'media':
        return team.includes('pr') || team.includes('marketing');
      case 'rd':
        return team.includes('r&d') || team.includes('r&p');
      default:
        return true;
    }
  });

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    const rolePriority: { [key: string]: number } = {
      'TEAM LEAD': 1,
      'CO-TEAM LEAD': 2,
      'SUB TEAM LEAD': 3,
      'MEMBER': 4
    };

    const getDisplayRole = (member: any) => {
      if (member.name === 'T M AL Anam' && filter === 'electronics') return 'SUB TEAM LEAD';
      if (member.name === 'Ahmed Junaed' && filter === 'software') return 'MEMBER';
      if (member.name === 'Maysoon Zahir' && filter === 'rd') return 'MEMBER';
      return member.role;
    };

    return (rolePriority[getDisplayRole(a)] || 99) - (rolePriority[getDisplayRole(b)] || 99);
  });

  return (
    <section id="team" className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#f97316] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#dc2626] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <div className="section-label mb-3">Our Core Team</div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <div className="mask-container">
              <span className="mask-reveal ju-visible">Architects of Flight</span>
            </div>
          </h1>
          <p className="ju-reveal text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A diverse group of engineers, researchers, and innovators working together to define the future of autonomous systems.
          </p>
        </div>

        {/* Filter Tabs / Back Button */}
        <div className="flex justify-center mb-16">
          {!isFocused ? (
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 sm:p-2.5 flex flex-wrap justify-center items-center gap-2 max-w-5xl">
              {[
                { id: 'all', label: 'All Team' },
                { id: 'leadership', label: 'Leadership' },
                { id: 'electronics', label: 'Electrical' },
                { id: 'mechanical', label: 'Mechanical' },
                { id: 'software', label: 'Software & Nav' },
                { id: 'rd', label: 'R&D' },
                { id: 'communication', label: 'Web & Communication' },
                { id: 'media', label: 'PR & Marketing' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setFilter(tab.id);
                    setSearchParams({ filter: tab.id });
                  }}
                  className={`
                    px-6 sm:px-8 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-500 relative
                    ${filter === tab.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          ) : (
            <button
              onClick={() => setSearchParams({})}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all font-bold tracking-widest uppercase text-xs"
            >
              <Users className="w-4 h-4" />
              Show All Team Members
            </button>
          )}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sortedMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="card-modern rounded-2xl w-full h-full">
                <div className="relative aspect-[6/7] sm:aspect-auto sm:h-80 md:h-[400px] overflow-hidden rounded-t-2xl bg-transparent">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ${searchParams.get('id') === member.id ? 'ju-visible' : 'ju-reveal'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full shadow-lg">
                      {(() => {
                        if (member.name === 'T M AL Anam' && filter === 'electronics') return 'SUB TEAM LEAD';
                        if (member.name === 'Ahmed Junaed' && filter === 'software') return 'MEMBER';
                        if (member.name === 'Maysoon Zahir' && filter === 'rd') return 'MEMBER';
                        return member.role;
                      })()}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={`mailto:${member.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white hover:text-primary transition-all"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white hover:text-primary transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-slate-300 font-medium mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-primary" />
                    {member.team}
                  </p>
                  <div className="flex items-center text-slate-400 text-sm sm:text-base pt-2 sm:pt-3 border-t border-surface-2">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {member.department}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
