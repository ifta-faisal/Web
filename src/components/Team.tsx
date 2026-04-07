import React, { useState } from 'react';
import { GraduationCap, Mail, Linkedin, Award, Users2 } from 'lucide-react';
import member1 from '../assets/images/member1.jpeg';
import member2 from '../assets/images/member2.jpg';
import member3 from '../assets/images/member3.jpeg';
import member4 from '../assets/images/member4.jpg';
import member5 from '../assets/images/member5.jpg';
import member6 from '../assets/images/member6.jpg';
import member7 from '../assets/images/member7.jpeg';
import member8 from '../assets/images/member8.jpeg';
import member9 from '../assets/images/member9.jpeg';

const Team = () => {
  const [filter, setFilter] = useState('all');

  const teamMembers = [
    { name: 'T M AL Anam', role: 'TEAM LEAD', team: 'Electrical Team', department: 'Department of CSE', image: member1, category: 'leadership', email: 'tmukit@gmail.com', linkedin: 'https://www.linkedin.com/in/tmalanam?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { name: 'Ahmed Junaed', role: 'CO-TEAM LEAD', team: 'Software & Navigation Team', department: 'Department of CSE', image: member2, category: 'leadership', email: 'ajunaed.work@gmail.com', linkedin: 'https://www.linkedin.com/in/ajunaed/' },
    { name: 'Fahad Rahaman', role: 'SUB TEAM LEAD', team: 'Software & Navigation Team', department: 'Department of CSE', image: member3, category: 'leadership', email: 'fahadrahman020@gmail.com', linkedin: 'https://www.linkedin.com/in/fahad-rahman-ovi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'MD Ifta Faisal', role: 'SUB TEAM LEAD', team: 'Communication Team', department: 'Department of CSE', image: member4, category: 'leadership', email: 'iftafaisal759@gmail.com', linkedin: 'https://www.linkedin.com/in/ifta-faisal-030738255?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { name: 'Muktaderul Islam', role: 'SUB TEAM LEAD', team: 'Mechanical Team', department: 'Department of CSE', image: member5, category: 'leadership', email: 'mislam222147@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/muktaderul-islam-17a714357/'},
    { name: 'Saraban Tohura', role: 'SUB TEAM LEAD', team: 'PR & Marketing Team', department: 'Department of CSE', image: member6, category: 'leadership', email: 'prokrity2199@gmail.com ', linkedin: 'https://bd.linkedin.com/in/saraban-tohura' },
    { name: 'Maysoon Zahir', role: 'MEMBER', team: 'PR & Marketing Team', department: 'Department of CSE', image: member7, category: 'member', email: 'mzahir2520045@bsds.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/maysoon-zahir-79b643242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Bahar Shahriyar', role: 'MEMBER', team: 'Communication & PR Team', department: 'Department of CSE', image: member8, category: 'member', email: ' bhr.shkh@gmail.com', linkedin: 'https://www.linkedin.com/in/bahauddin-sheik-bahar-6776ba152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Digonta Karmaker', role: 'MEMBER', team: 'Electrical Team', department: 'Department of EEE', image: member9, category: 'member', email: ' dkarmaker2330144@bseee.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/digonta-karmaker-72930a37b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  ];

  const filteredMembers = filter === 'all'
    ? teamMembers
    : teamMembers.filter(member => member.category === filter);

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block mb-2 sm:mb-4">
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-500/20 border border-orange-400/50 rounded-full text-orange-300 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <Users2 className="w-4 h-4" />
              Our Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Meet The
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 text-transparent bg-clip-text"> Innovators</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-xl sm:max-w-3xl mx-auto leading-relaxed">
            Passionate engineers, researchers, and innovators working together to revolutionize sustainable aviation technology.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex bg-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-full p-1 gap-1">
            {[
              { label: 'All Team', value: 'all' },
              { label: 'Leadership', value: 'leadership' },
              { label: 'Members', value: 'member' }
            ].map(tab => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-5 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === tab.value
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/30'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-2xl overflow-hidden hover:border-slate-500/80 transition duration-300">
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                      {member.role}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={`mailto:${member.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Email ${member.name}`}
                      className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white hover:text-orange-600 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn`}
                      className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white hover:text-orange-600 transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-slate-300 font-medium mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-orange-400" />
                    {member.team}
                  </p>
                  <div className="flex items-center text-slate-400 text-sm sm:text-base pt-2 sm:pt-3 border-t border-slate-600">
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
