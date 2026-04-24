import { useState } from 'react';
import { GraduationCap, Mail, Linkedin, Award, BookOpen, UserPlus } from 'lucide-react';

import mentor1 from '../assets/images/Advisor/Mentor1.jpeg';
import mentor2 from '../assets/images/Advisor/Mentor2.jpeg';
import mentor3 from '../assets/images/Advisor/Mentor3.jpeg';
import vcImage from '../assets/images/Advisor/VC.jpg';

/* ── Data ─────────────────────────────────────────────────────────────────── */
const featured = [
  {
    id: 'vc-advisor',
    name: 'Dr. Md. Abul Kashem Mia',
    role: 'ADVISOR',
    category: 'advisor' as const,
    department: 'Vice Chancellor, UIU',
    image: vcImage,
    bio: 'Providing visionary leadership and institutional support to foster innovation and excellence within the UART Robotics Team.',
    email: 'akmia@cse.uiu.ac.bd',
    linkedin: 'https://www.linkedin.com/in/abul-kashem-mia-45136814',
    gradient: 'from-[#ea580c] to-[#dc2626]',
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
    gradient: 'from-primary to-[#ea580c]',
  },
];

const mentors = [
  {
    id: 'mentor-1',
    name: 'Dr. Riasat Azim',
    role: 'MENTOR',
    category: 'mentor' as const,
    department: 'Assistant Professor, Dept. of CSE',
    image: mentor2,
    bio: 'Specializing in computer vision and machine learning applications for autonomous drone navigation and control.',
    email: 'riasat@cse.uiu.ac.bd',
    linkedin: 'https://www.linkedin.com/in/riasat-azim-23812356',
    gradient: 'from-[#0ea5e9] to-[#2563eb]',
  },
  {
    id: 'mentor-2',
    name: 'Mr. Azizur Rahman Anik',
    role: 'MENTOR',
    category: 'mentor' as const,
    department: 'Lecturer, Dept. of CSE',
    image: mentor3,
    bio: 'Expert in embedded systems and flight controller firmware development for specialized robotics platforms.',
    email: 'azizur@cse.uiu.ac.bd',
    linkedin: 'https://www.linkedin.com/in/azizur-rahman-anik-056220260',
    gradient: 'from-[#8b5cf6] to-[#06b6d4]',
  },
];

const LeadershipCard = ({ person }: { person: any }) => (
  <div className="group relative">
    {/* Glow */}
    <div className={`absolute inset-0 bg-gradient-to-r ${person.gradient || 'from-primary to-accent'} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition duration-500`} />

    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/[0.08] bg-[rgba(15,23,42,0.8)] backdrop-blur-md">
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
          <div className="relative overflow-hidden bg-[#020617]" style={{ minHeight: '380px' }}>
            {/* Unified background glow for leadership cards */}
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,${person.id.includes('mentor') ? '#1e3a8a' : '#1e3a8a'} 0%,transparent_75%)] opacity-30`} />

            <img
              src={person.image}
              alt={person.name}
              className={`ju-reveal w-full h-full absolute inset-0 transition-transform duration-700 ${person.id === 'director' || person.id === 'vc-advisor'
                ? 'object-contain scale-[0.85] group-hover:scale-[0.9] translate-y-2'
                : 'object-cover object-top group-hover:scale-105'
                }`}
              style={{
                objectPosition: (person.id === 'director' || person.id === 'vc-advisor') ? 'center center' : 'center 0%',
                maskImage: (person.id === 'director' || person.id === 'vc-advisor')
                  ? 'radial-gradient(circle at 50% 45%, black 20%, transparent 90%)'
                  : 'none',
                WebkitMaskImage: (person.id === 'director' || person.id === 'vc-advisor')
                  ? 'radial-gradient(circle at 50% 45%, black 20%, transparent 90%)'
                  : 'none',
              }}
            />
          </div>
        )}

        {/* ── Right: Content ── */}
        <div className="p-8 md:p-12 flex flex-col justify-center text-white">
          {/* Role badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${person.gradient || 'from-primary to-accent'} backdrop-blur-sm rounded-full text-sm font-bold mb-4 w-fit`}>
            <Award className="w-4 h-4" />
            {person.role}
          </div>

          {person.isPlaceholder ? (
            <>
              <h3 className="ju-reveal text-2xl md:text-3xl font-black mb-3 text-white/60 italic">
                To Be Announced
              </h3>
              <p className="ju-reveal text-white/50 leading-relaxed">
                We are actively seeking an experienced advisor to join our team. Stay tuned for updates.
              </p>
            </>
          ) : (
            <>
              <h3 className="ju-reveal text-2xl md:text-3xl font-black mb-3">
                {person.name}
              </h3>
              <div className="flex items-center text-white/80 mb-4">
                <GraduationCap className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="font-medium">{person.department}</span>
              </div>
              {person.bio && (
                <p className="ju-reveal text-white/75 leading-relaxed mb-6">
                  {person.bio}
                </p>
              )}
              <div className="flex gap-3">
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-primary transition-all duration-300"
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
);

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
    <section id="mentors" className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-transparent">
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="section-label mb-3">Our Advisors &amp; Mentors</div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            <div className="mask-container">
              <span className="mask-reveal ju-visible">Guided By Excellence</span>
            </div>
          </h2>
          <p className="ju-reveal text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The guiding minds behind our success — providing knowledge, direction, and invaluable experience.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex bg-surface/60 backdrop-blur-xl border border-surface-2/50 rounded-full p-1 gap-1">
            {tabs.map(tab => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-5 sm:px-7 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === tab.value
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            ── ADVISORS & DIRECTORS ──
            ════════════════════════════════════════════════════════════ */}
        {showFeatured && (
          <div className="flex flex-col gap-6 mb-10">
            {visibleFeatured.map(person => (
              <LeadershipCard key={person.id} person={person} />
            ))}
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════
            ── MENTORS ──
            ═══════════════════════════════════════════════════════════ */}
        {showMentors && (
          <div className="flex flex-col gap-6">
            {filter === 'all' && (
              <h3 className="ju-reveal text-center text-white/50 text-xs font-bold tracking-widest uppercase mb-6">
                — Mentors —
              </h3>
            )}
            {mentors.map(mentor => (
              <LeadershipCard key={mentor.id} person={mentor} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Mentors;
