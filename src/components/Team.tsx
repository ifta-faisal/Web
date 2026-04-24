import React, { useState, useEffect } from 'react';
import { GraduationCap, Mail, Linkedin, Award, Users, Trophy, ChevronRight, User } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import member1 from '../assets/images/Team/member1.jpeg';
import member2 from '../assets/images/Team/member2.jpg';
import member3 from '../assets/images/Team/member3.jpeg';
import member4 from '../assets/images/Team/member4.jpg';
import member5 from '../assets/images/Team/member5.jpg';
import member7 from '../assets/images/Team/member7.jpeg';
import member8 from '../assets/images/Team/member8.jpeg';
import member9 from '../assets/images/Team/member9.jpeg';
import adnan from '../assets/images/Team/adnan.jpeg';
import alfi from '../assets/images/Team/alfi.png';
import israfil from '../assets/images/Team/israfil.jpg';
import ratul from '../assets/images/Team/ratul.jpg';
import anika from '../assets/images/Team/orthy.jpeg';
import jarin from '../assets/images/Team/jahrin.jpg';
import rashed from '../assets/images/Team/rashed.jpg';
import talha from '../assets/images/Team/talha.png';
import alif from '../assets/images/Team/alif.jpg';
import probin from '../assets/images/Team/probin.jpeg';
import shahad from '../assets/images/Team/shahad.jpg';
import arpon from '../assets/images/Team/arpon.jpg';
import nazifa from '../assets/images/Team/nazifa.jpg';
import sumaiya from '../assets/images/Team/sumaiya.jpg';

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

  const teamMembers = [
    { id: 'm1', name: 'T M AL Anam', role: 'TEAM LEAD', team: 'Electrical Team', department: 'Department of CSE', image: member1, category: 'leadership', email: 'tmukit@gmail.com', linkedin: 'https://www.linkedin.com/in/tmalanam?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { id: 'm2', name: 'Ahmed Junaed', role: 'CO-TEAM LEAD', team: 'Software & Navigation Team', department: 'Department of CSE', image: member2, category: 'leadership', email: 'ajunaed.work@gmail.com', linkedin: 'https://www.linkedin.com/in/ajunaed/' },
    { id: 'm3', name: 'Fahad Rahaman', role: 'SUB TEAM LEAD', team: 'Software & Navigation Team', department: 'Department of CSE', image: member3, category: 'leadership', email: 'fahadrahman020@gmail.com', linkedin: 'https://www.linkedin.com/in/fahad-rahman-ovi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 'm4', name: 'MD Ifta Faisal', role: 'SUB TEAM LEAD', team: 'Web & Communication Team', department: 'Department of CSE', image: member4, category: 'leadership', email: 'iftafaisal759@gmail.com', linkedin: 'https://www.linkedin.com/in/ifta-faisal-030738255?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { id: 'm5', name: 'Muktaderul Islam', role: 'SUB TEAM LEAD', team: 'Mechanical Team', department: 'Department of CSE', image: member5, category: 'leadership', email: 'mislam222147@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/muktaderul-islam-17a714357/' },
    { id: 'm6', name: 'Maysoon Zahir', role: 'MEMBER', team: 'PR & Marketing Team', department: 'Department of CSE', image: member7, category: 'member', email: 'mzahir2520045@bsds.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/maysoon-zahir-79b643242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { id: 'm7', name: 'Digonta Karmaker', role: 'MEMBER', team: 'Electrical Team', department: 'Department of EEE', image: member9, category: 'member', email: ' dkarmaker2330144@bseee.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/digonta-karmaker-72930a37b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 'm8', name: 'Khalid Hasan Talha', role: 'MEMBER', team: 'Electrical & Mechanical Team', department: 'Department of EEE', image: talha, category: 'member', email: 'ktalha181034@bseee.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/khalid-hasan-talha-81597018b' },
    { id: 'm9', name: 'Adnan Mohammad Salauddin', role: 'MEMBER', team: 'Mechanical Team', department: 'Department of CSE', image: adnan, category: 'member', email: 'adnanmohammad546@gmail.com', linkedin: 'https://www.linkedin.com/in/adnan-sohag-76b376276?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { id: 'm10', name: 'Probin Chandra Nath', role: 'MEMBER', team: 'Electrical and Mechanical Team', department: 'Department of EEE', image: probin, category: 'member', email: 'pnath2330014', linkedin: 'https://www.linkedin.com/in/probin-nath-032985343?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { id: 'm11', name: 'Ratul Ghosh', role: 'MEMBER', team: 'R&P Team', department: 'Department of CSE', image: ratul, category: 'member', email: 'rghosh2410038@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/ratul-ghosh-7bb172377?' },
    { id: 'm12', name: 'Chowdhury Wayez Kurunee Alif', role: 'MEMBER', team: 'Nav & Soft Team', department: 'Department of CSE', image: alif, category: 'member', email: 'calif221474@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/wayezkurunee-alif-4a4b14227?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { id: 'm13', name: 'Md. Israfil Hossain', role: 'MEMBER', team: 'R&D Team', department: 'Department of CSE', image: israfil, category: 'member', email: 'mhossain223585@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/md-israfil-hossain-869851193' },
    { id: 'm14', name: 'Abdur Rahman', role: 'MEMBER', team: 'Electrical & Mechanical Team', department: 'Department of EEE', image: rashed, category: 'member', email: 'rashedur2545@gmail.com', linkedin: 'https://www.linkedin.com/in/abdur-rahman-rashed' },
    { id: 'm15', name: 'Md. Biplob', role: 'MEMBER', team: 'R&D Team', department: 'Department of CSE', image: alfi, category: 'member', email: 'mbiplob223592@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/mdbiplob' },
    { id: 'm16', name: 'Anika Noyshin Orthy', role: 'MEMBER', team: 'Electrical Team', department: 'Department of EEE', image: anika, category: 'member', email: 'aorthy2330060@bseee.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/anika-noyshin-orthy-280680242?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { id: 'm17', name: 'Jahrin Binte Zahid', role: 'MEMBER', team: 'Autonomous & Navigation Team', department: 'Department of CSE', image: jarin, category: 'member', email: 'jzahid2330034@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/jahrin-binte-zahid-28bb09352?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { id: 'm18', name: 'Bahar Shahriyar', role: 'MEMBER', team: 'Web & Communication Team', department: 'Department of CSE', image: member8, category: 'member', email: ' bhr.shkh@gmail.com', linkedin: 'https://www.linkedin.com/in/bahauddin-sheik-bahar-6776ba152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 'm19', name: 'Sumaiya Sadika', role: 'MEMBER', team: 'R&D Team', department: 'Department of CSE', image: sumaiya, category: 'member', email: 'ssadika2330926@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/sumaiya-sadika-a48b54293' },
    { id: 'm20', name: 'Mobassir Hossain Shahad', role: 'MEMBER', team: 'Electrical Team', department: 'Department of EEE', image: shahad, category: 'member', email: 'mshahad2330059@bseee.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/mobassir-hossain-shahad-367871392' },
    { id: 'm21', name: 'Md Shazan Mahmud Arpon', role: 'MEMBER', team: 'Software & Navigation Team', department: 'Department of CSE', image: arpon, category: 'member', email: 'marpon2410351@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/md-shazan-mahmud-arpon' },
    { id: 'm22', name: 'Najifa Nawar', role: 'MEMBER', team: 'R&D Team', department: 'Department of CSE', image: nazifa, category: 'member', email: 'nawarnajifa32@gmail.com', linkedin: 'https://www.linkedin.com/in/najifa-nawar-b21137403?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  ];

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
      return member.role;
    };

    return (rolePriority[getDisplayRole(a)] || 99) - (rolePriority[getDisplayRole(b)] || 99);
  });

  return (
    <section id="team" className="min-h-screen pt-32 pb-24 bg-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#f97316] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#dc2626] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <div className="section-label mb-3">Our Core Team</div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
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
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 flex flex-wrap justify-center items-center gap-2 max-w-5xl">
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
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${searchParams.get('id') === member.id ? 'ju-visible' : 'ju-reveal'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full shadow-lg">
                      {(() => {
                        if (member.name === 'T M AL Anam' && filter === 'electronics') return 'SUB TEAM LEAD';
                        if (member.name === 'Ahmed Junaed' && filter === 'software') return 'MEMBER';
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
