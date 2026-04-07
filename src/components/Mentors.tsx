import { useState } from 'react';
import { GraduationCap, Mail, Linkedin, Award, BookOpen, UserPlus } from 'lucide-react';

import mentor1 from '../assets/images/Mentor1.jpeg';
import mentor2 from '../assets/images/mentor2.jpeg';
import mentor3 from '../assets/images/mentor3.jpeg';

/* ── Data ─────────────────────────────────────────────────────────────────── */
const featured = [
  {
    id: 'advisor-tbd',
    role: 'ADVISOR',
    category: 'advisor' as const,
    isPlaceholder: true,
    gradient: 'from-violet-600 to-purple-700',
  },
  {
    id: 'director',
    name: 'Dr. A.K.M. Muzahidul Islam',
    role: 'DIRECTOR',
    category: 'director' as const,
    department: 'Professor, Dept. of CSE',
    image: mentor1,
    bio: 'Leading our research initiatives with decades of experience in aerospace engineering and robotics systems.',
    email: 'muzahid@cse.uiu.ac.bd',
    linkedin: 'https://www.linkedin.com/in/profdrmuzahid',
    gradient: 'from-orange-600 to-red-700',
  },
];

const mentors = [
  {
    id: 'mentor-1',
    name: 'Dr. Riasat Azim',
    role: 'MENTOR',
    department: 'Assistant Professor, Dept. of CSE',
    image: mentor2,
    email: 'riasat@cse.uiu.ac.bd',
    linkedin: 'https://www.linkedin.com/in/riasat-azim-23812356',
  },
  {
    id: 'mentor-2',
    name: 'Mr. Azizur Rahman Anik',
    role: 'MENTOR',
    department: 'Lecturer, Dept. of CSE',
    image: mentor3,
    email: 'azizur@cse.uiu.ac.bd',
    linkedin: 'https://www.linkedin.com/in/azizur-rahman-anik-056220260',
  },
];

const Mentors = () => {
  const [filter, setFilter] = useState<'all' | 'advisor' | 'director' | 'mentor'>('all');

  const tabs = [
    { label: 'All', value: 'all' },
    { label: 'Advisor', value: 'advisor' },
    { label: 'Director', value: 'director' },
    { label: 'Mentor', value: 'mentor' },
  ] as const;

  /* decide which sections to show based on filter */
  const showFeatured = filter === 'all' || filter === 'advisor' || filter === 'director';
  const showMentors = filter === 'all' || filter === 'mentor';

  const visibleFeatured = filter === 'all'
    ? featured
    : featured.filter(p => p.category === filter);

  return (
    <section
      className="min-h-screen py-20 sm:py-28 bg-transparent relative overflow-hidden"
    >
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/15 border border-orange-400/40 rounded-full text-orange-300 text-xs sm:text-sm font-semibold mb-5">
            <BookOpen className="w-4 h-4" /> Our Advisors &amp; Mentors
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            Guided By{' '}
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 text-transparent bg-clip-text">
              Excellence
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The guiding minds behind our success — providing knowledge, direction, and invaluable experience.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-full p-1 gap-1">
            {tabs.map(tab => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-5 sm:px-7 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === tab.value
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/30'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            ── FEATURED: Advisor + Director (wide horizontal cards) ──
            ════════════════════════════════════════════════════════════ */}
        {showFeatured && (
          <div className="flex flex-col gap-6 mb-10">
            {visibleFeatured.map(person => (
              <div key={person.id} className="group relative">
                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${person.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition duration-500`} />

                <div className={`relative bg-gradient-to-br ${person.gradient} rounded-3xl overflow-hidden shadow-2xl`}>
                  <div className="grid md:grid-cols-2">

                    {/* ── Left: Photo or Placeholder ── */}
                    {person.isPlaceholder ? (
                      <div className="relative h-64 md:h-80 flex flex-col items-center justify-center bg-black/20">
                        <div className="w-28 h-28 rounded-full border-4 border-dashed border-white/30 flex items-center justify-center mb-4">
                          <UserPlus className="w-12 h-12 text-white/50" />
                        </div>
                        <p className="text-white/60 text-sm font-semibold tracking-widest uppercase">Position Open</p>
                      </div>
                    ) : (
                      <div className="relative overflow-hidden" style={{ minHeight: '380px' }}>
                        <img
                          src={(person as typeof featured[1]).image}
                          alt={person.name}
                          className="w-full h-full object-cover object-top absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                          style={{ objectPosition: 'center 0%' }}
                        />
                      </div>
                    )}

                    {/* ── Right: Content ── */}
                    <div className="p-8 md:p-12 flex flex-col justify-center text-white">
                      {/* Role badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 w-fit">
                        <Award className="w-4 h-4" />
                        {person.role}
                      </div>

                      {person.isPlaceholder ? (
                        <>
                          <h3 className="text-2xl md:text-3xl font-black mb-3 text-white/60 italic">
                            To Be Announced
                          </h3>
                          <p className="text-white/50 leading-relaxed">
                            We are actively seeking an experienced advisor to join our team. Stay tuned for updates.
                          </p>
                        </>
                      ) : (
                        <>
                          <h3 className="text-2xl md:text-3xl font-black mb-3">
                            {person.name}
                          </h3>
                          <div className="flex items-center text-white/80 mb-4">
                            <GraduationCap className="w-5 h-5 mr-2 flex-shrink-0" />
                            <span className="font-medium">{(person as typeof featured[1]).department}</span>
                          </div>
                          {(person as typeof featured[1]).bio && (
                            <p className="text-white/75 leading-relaxed mb-6">
                              {(person as typeof featured[1]).bio}
                            </p>
                          )}
                          <div className="flex gap-3">
                            {(person as typeof featured[1]).email && (
                              <a
                                href={`mailto:${(person as typeof featured[1]).email}`}
                                target="_blank" rel="noopener noreferrer"
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
                              >
                                <Mail className="w-5 h-5" />
                              </a>
                            )}
                            {(person as typeof featured[1]).linkedin && (
                              <a
                                href={(person as typeof featured[1]).linkedin}
                                target="_blank" rel="noopener noreferrer"
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
                              >
                                <Linkedin className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════
            ── MENTORS: Portrait card grid (unchanged style) ──
            ═══════════════════════════════════════════════════════════ */}
        {showMentors && (
          <>
            {filter === 'all' && (
              <h3 className="text-center text-white/50 text-xs font-bold tracking-widest uppercase mb-6">
                — Mentors —
              </h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {mentors.map(mentor => (
                <div key={mentor.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative bg-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-2xl overflow-hidden hover:border-slate-500/80 transition duration-300">

                    {/* Photo */}
                    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                          {mentor.role}
                        </span>
                      </div>

                      {/* Social icons */}
                      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <a href={`mailto:${mentor.email}`} target="_blank" rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white hover:text-orange-600 text-white transition-all">
                          <Mail className="w-4 h-4" />
                        </a>
                        <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white hover:text-orange-600 text-white transition-all">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                        {mentor.name}
                      </h3>
                      <div className="flex items-center text-slate-400 text-sm pt-3 border-t border-slate-600">
                        <GraduationCap className="w-4 h-4 mr-2 flex-shrink-0" />
                        {mentor.department}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default Mentors;
