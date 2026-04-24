import React, { useState, useEffect, useCallback } from 'react';
import { Search as SearchIcon, X, ArrowRight, FileText, User, Shield, Zap, Cpu, Users, Settings, Activity, Gauge, MapPin, Navigation, Award, Rocket, Eye, Wind } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ─── Advisor Imports ───
import mentor1 from '../assets/images/Advisor/Mentor1.jpeg';
import mentor2 from '../assets/images/Advisor/Mentor2.jpeg';
import mentor3 from '../assets/images/Advisor/Mentor3.jpeg';
import vcImage from '../assets/images/Advisor/VC.jpg';

// ─── Project Imports ───
import project1 from "../assets/images/Project/project1.jpeg";
import project2 from "../assets/images/Project/project2.jpeg";
import project3 from "../assets/images/Project/project3.jpeg";
import project4 from "../assets/images/Project/project4.jpeg";
import project5 from "../assets/images/Project/project5.jpeg";
import project6 from "../assets/images/Project/project6.jpeg";
import project7 from "../assets/images/Project/project7.jpeg";
import project8 from "../assets/images/Project/project8.jpeg";
import project9 from "../assets/images/drone2.jpeg";

// ─── Team Member Imports ───
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

interface SearchResult {
  id: string;
  title: string;
  category: 'Page' | 'Feature' | 'Blog' | 'Advisor' | 'Member' | 'Sub-Team' | 'Spec' | 'Project' | 'Mentor' | 'Director';
  link: string;
  icon: React.ElementType;
  image?: string; // Optional image for members/mentors
  description: string;
  tags?: string[];
}

const SEARCH_DATA: SearchResult[] = [
  // ─── Pages ───
  { id: 'p1', title: 'Detailed Features', category: 'Page', link: '/DetailedFeatures', icon: Settings, description: 'Technical specifications and aircraft systems.', tags: ['specs', 'vehicle', 'drone', 'weight', 'endurance', 'technical'] },
  { id: 'p2', title: 'Advisors & Mentors', category: 'Page', link: '/advisors', icon: User, description: 'Our team leadership and advisory board.', tags: ['leadership', 'mentors', 'teachers', 'advisors'] },
  { id: 'p3', title: 'Join the Team', category: 'Page', link: '/joinus', icon: FileText, description: 'Recruitment and membership information.', tags: ['apply', 'recruitment', 'jobs', 'hiring'] },
  { id: 'p4', title: 'UAV Research Blog', category: 'Page', link: '/blog', icon: FileText, description: 'Historical build progress and technical insights.', tags: ['news', 'updates', 'research'] },
  { id: 'p5', title: 'Sponsorships', category: 'Page', link: '/sponsor', icon: Zap, description: 'Support our mission and become a partner.', tags: ['help', 'donate', 'partner'] },
  { id: 'p6', title: 'Contact Us', category: 'Page', link: '/contact', icon: MapPin, description: 'Get in touch for inquiries or collaborations.', tags: ['email', 'location', 'reach us'] },
  { id: 'p7', title: 'Projects', category: 'Page', link: '/projects', icon: Activity, description: 'Our flagship UAV projects and technical milestones.', tags: ['drone', 'aircraft', 'work'] },
  { id: 'p8', title: 'Our Team', category: 'Page', link: '/team', icon: Users, description: 'Meet the engineers behind UART.', tags: ['members', 'people', 'staff'] },

  // ─── Technical Specs & Features ───
  { id: 's1', title: 'Max Takeoff Weight: 4.2kg', category: 'Spec', link: '/DetailedFeatures?id=specs', icon: Gauge, description: 'Optimized carbon fiber structure for high payload capacity.', tags: ['weight', 'kg', 'capacity', 'spec'] },
  { id: 's2', title: 'Battery: Power House of Drone', category: 'Spec', link: '/DetailedFeatures?id=battery-power', icon: Zap, description: 'Customized LiPo power houses for high-demand UAS operations.', tags: ['battery', 'power', 'lipo', 'energy', 'voltage', 'bms', 'customize', '3s'] },
  { id: 's3', title: 'Flight Endurance: 35min', category: 'Spec', link: '/DetailedFeatures?id=specs', icon: Activity, description: 'High-density LiPo battery power for extended missions.', tags: ['time', 'battery', 'duration', 'spec'] },
  { id: 's4', title: 'Telemetry Range: 10km', category: 'Spec', link: '/DetailedFeatures?id=specs', icon: Navigation, description: 'Long-range RFD900x communication link.', tags: ['distance', 'range', 'signal', 'spec'] },
  { id: 's5', title: 'NVIDIA Jetson AI', category: 'Spec', link: '/DetailedFeatures?id=autonomy-navigation', icon: Cpu, description: 'Onboard edge AI processing (Jetson Orin Nano).', tags: ['brain', 'computer', 'autonomous', 'ai', 'spec'] },
  { id: 's6', title: 'Carbon Fiber Frame', category: 'Spec', link: '/DetailedFeatures?id=structural-engineering', icon: Shield, description: 'Lightweight monocoque airframe design.', tags: ['structure', 'materials', 'build', 'carbon'] },
  { id: 's7', title: 'Mission Planning', category: 'Feature', link: '/DetailedFeatures?id=mission-planning', icon: MapPin, description: 'Advanced route optimization and telemetry.', tags: ['gcs', 'ground', 'control', 'map'] },
  { id: 's8', title: 'LIDAR Fusion Suite', category: 'Spec', link: '/DetailedFeatures?id=sensing-perception', icon: Eye, description: '360° LIDAR and multi-sensor fusion for obstacle avoidance.', tags: ['lidar', 'sensor', 'perception', '3d', 'mapping'] },
  { id: 's9', title: 'System Architecture', category: 'Feature', link: '/DetailedFeatures?id=system-architecture', icon: Cpu, description: 'Electronic and software integration overview.', tags: ['hardware', 'diagram', 'electronics'] },

  // ─── Sub-Teams ───
  { id: 'st1', title: 'Electrical Team', category: 'Sub-Team', link: '/team?filter=electronics', icon: Zap, description: 'PCB design, power distribution, and avionics.', tags: ['avionics', 'circuits', 'power', 'electronics'] },
  { id: 'st2', title: 'Software & Navigation Team', category: 'Sub-Team', link: '/team?filter=software', icon: Cpu, description: 'Flight control, AI development, and software stack.', tags: ['coding', 'algorithms', 'ai', 'soft', 'navigation'] },
  { id: 'st3', title: 'Mechanical Team', category: 'Sub-Team', link: '/team?filter=mechanical', icon: Settings, description: 'Airframe design, aerodynamics, and CAD.', tags: ['structure', 'cad', 'build', 'mechanical'] },
  { id: 'st4', title: 'Web & Communication Team', category: 'Sub-Team', link: '/team?filter=communication', icon: FileText, description: 'Website development and public relations.', tags: ['site', 'it', 'media', 'comms', 'ifta', 'bahar'] },
  { id: 'st5', title: 'Research & Development (R&D)', category: 'Sub-Team', link: '/team?filter=rd', icon: Activity, description: 'Long-term innovation and tech research.', tags: ['future', 'innovation', 'rd', 'ratul', 'israfil', 'biplob', 'sumaiya', 'nazifa'] },

  // ─── Team Members (ALL 22) ───
  { id: 'm1', title: 'T M AL Anam', category: 'Member', image: member1, link: '/team?id=m1', icon: User, description: 'Team Lead • Electrical Team', tags: ['leader', 'mukit', 'anam'] },
  { id: 'm2', title: 'Ahmed Junaed', category: 'Member', image: member2, link: '/team?id=m2', icon: User, description: 'Co-Team Lead • Software & Nav', tags: ['leader', 'junaid'] },
  { id: 'm3', title: 'Fahad Rahaman', category: 'Member', image: member3, link: '/team?id=m3', icon: User, description: 'Sub Team Lead • Software & Nav', tags: ['ovi', 'coding'] },
  { id: 'm4', title: 'MD Ifta Faisal', category: 'Member', image: member4, link: '/team?id=m4', icon: User, description: 'Sub Team Lead • Web & Comms', tags: ['web', 'ifta'] },
  { id: 'm5', title: 'Muktaderul Islam', category: 'Member', image: member5, link: '/team?id=m5', icon: User, description: 'Sub Team Lead • Mechanical Team', tags: ['mechanical', 'cad'] },
  { id: 'm6', title: 'Maysoon Zahir', category: 'Member', image: member7, link: '/team?id=m6', icon: User, description: 'Member • PR & Marketing Team', tags: ['marketing', 'pr', 'zahir'] },
  { id: 'm7', title: 'Digonta Karmaker', category: 'Member', image: member9, link: '/team?id=m7', icon: User, description: 'Member • Electrical Team', tags: ['electronics', 'eee'] },
  { id: 'm8', title: 'Khalid Hasan Talha', category: 'Member', image: talha, link: '/team?id=m8', icon: User, description: 'Member • Electrical & Mechanical', tags: ['talha', 'eee'] },
  { id: 'm9', title: 'Adnan Mohammad Salauddin', category: 'Member', image: adnan, link: '/team?id=m9', icon: User, description: 'Member • Mechanical Team', tags: ['adnan', 'sohag'] },
  { id: 'm10', title: 'Probin Chandra Nath', category: 'Member', image: probin, link: '/team?id=m10', icon: User, description: 'Member • Electrical and Mechanical', tags: ['probin', 'eee'] },
  { id: 'm11', title: 'Ratul Ghosh', category: 'Member', image: ratul, link: '/team?id=m11', icon: User, description: 'Member • R&P Team', tags: ['ratul'] },
  { id: 'm12', title: 'Chowdhury Wayez Kurunee Alif', category: 'Member', image: alif, link: '/team?id=m12', icon: User, description: 'Member • Nav & Soft Team', tags: ['alif', 'alif'] },
  { id: 'm13', title: 'Md. Israfil Hossain', category: 'Member', image: israfil, link: '/team?id=m13', icon: User, description: 'Member • R&D Team', tags: ['israfil'] },
  { id: 'm14', title: 'Abdur Rahman', category: 'Member', image: rashed, link: '/team?id=m14', icon: User, description: 'Member • Electrical & Mechanical', tags: ['rashed', 'rahman'] },
  { id: 'm15', title: 'Md. Biplob', category: 'Member', image: alfi, link: '/team?id=m15', icon: User, description: 'Member • R&D Team', tags: ['biplob', 'alfi'] },
  { id: 'm16', title: 'Anika Noyshin Orthy', category: 'Member', image: anika, link: '/team?id=m16', icon: User, description: 'Member • Electrical Team', tags: ['orthy', 'anika'] },
  { id: 'm17', title: 'Jahrin Binte Zahid', category: 'Member', image: jarin, link: '/team?id=m17', icon: User, description: 'Member • Autonomous & Navigation', tags: ['jarin', 'zahid'] },
  { id: 'm18', title: 'Bahar Shahriyar', category: 'Member', image: member8, link: '/team?id=m18', icon: User, description: 'Member • Web & Communication', tags: ['bahar', 'sheik'] },
  { id: 'm19', title: 'Sumaiya Sadika', category: 'Member', image: sumaiya, link: '/team?id=m19', icon: User, description: 'Member • R&D Team', tags: ['sumaiya', 'sadika'] },
  { id: 'm20', title: 'Mobassir Hossain Shahad', category: 'Member', image: shahad, link: '/team?id=m20', icon: User, description: 'Member • Electrical Team', tags: ['shahad'] },
  { id: 'm21', title: 'Md Shazan Mahmud Arpon', category: 'Member', image: arpon, link: '/team?id=m21', icon: User, description: 'Member • Software & Navigation', tags: ['arpon'] },
  { id: 'm22', title: 'Najifa Nawar', category: 'Member', image: nazifa, link: '/team?id=m22', icon: User, description: 'Member • R&D Team', tags: ['nazifa', 'nawar'] },

  // ─── Projects (ALL 9) ───
  { id: 'pr1', title: 'Endurance UAV', category: 'Project', image: project1, link: '/projects?id=1', icon: Rocket, description: 'High-performance endurance UAV.', tags: ['research', 'mapping', 'drone'] },
  { id: 'pr2', title: 'Racing Drone', category: 'Project', image: project2, link: '/projects?id=2', icon: Zap, description: 'Compact system for high-speed flight.', tags: ['racing', 'fpv', 'research'] },
  { id: 'pr3', title: 'Long Range Drone', category: 'Project', image: project3, link: '/projects?id=3', icon: Navigation, description: 'Autonomous mapping drone.', tags: ['mapping', 'nav', 'ai'] },
  { id: 'pr4', title: 'Customize Dead Cat', category: 'Project', image: project4, link: '/projects?id=4', icon: Shield, description: 'Environmental monitoring drone.', tags: ['monitoring', 'deadcat'] },
  { id: 'pr5', title: 'Surveillance UAV', category: 'Project', image: project5, link: '/projects?id=5', icon: Eye, description: 'Experimental VTOL platform.', tags: ['vtol', 'experimental', 'surveillance'] },
  { id: 'pr6', title: 'Defensive Drone', category: 'Project', image: project6, link: '/projects?id=6', icon: Shield, description: 'AI-integrated defensive system.', tags: ['defense', 'ai', 'real-time'] },
  { id: 'pr7', title: 'Fixed Wing', category: 'Project', image: project7, link: '/projects?id=7', icon: Wind, description: 'Long-range surveillance aircraft.', tags: ['fixed-wing', 'plane'] },
  { id: 'pr8', title: 'Workshop', category: 'Project', image: project8, link: '/projects?id=8', icon: Users, description: 'Member training and UAV workshops.', tags: ['training', 'education', 'workshop'] },
  { id: 'pr9', title: 'Multifunctional Drone', category: 'Project', image: project9, link: '/projects?id=9', icon: Award, description: 'Rescue operational drone for SUAS.', tags: ['rescue', 'competition', 'suas'] },

  // ─── Leadership & Advisors ───
  { id: 'l1', title: 'Dr. Md. Abul Kashem Mia', category: 'Advisor', image: vcImage, link: '/advisors?id=vc-advisor', icon: Award, description: 'Official Advisor • Vice Chancellor, UIU', tags: ['vc', 'leader', 'kashem'] },
  { id: 'l2', title: 'Dr. A.K.M. Muzahidul Islam', category: 'Director', image: mentor1, link: '/advisors?id=director', icon: Award, description: 'Director • Professor, Dept. of CSE', tags: ['director', 'muzahid', 'leader'] },
  { id: 'l3', title: 'Dr. Riasat Azim', category: 'Mentor', image: mentor2, link: '/advisors?id=mentor-1', icon: User, description: 'Assistant Professor, Dept. of CSE', tags: ['riasat', 'ml', 'vision', 'mentor'] },
  { id: 'l4', title: 'Mr. Azizur Rahman Anik', category: 'Mentor', image: mentor3, link: '/advisors?id=mentor-2', icon: User, description: 'Lecturer, Dept. of CSE', tags: ['anik', 'firmware', 'embedded', 'mentor'] },
];

const Search = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  const handleSearch = useCallback((val: string) => {
    setQuery(val);
    if (val.trim() === '') {
      setResults([]);
      return;
    }
    const filtered = SEARCH_DATA.filter(item => 
      item.title.toLowerCase().includes(val.toLowerCase()) ||
      item.category.toLowerCase().includes(val.toLowerCase()) ||
      item.description.toLowerCase().includes(val.toLowerCase()) ||
      item.tags?.some(tag => tag.toLowerCase().includes(val.toLowerCase()))
    );
    setResults(filtered);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        isOpen ? onClose() : null; // Handled by parent but K-shortcut is standard
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Search Panel */}
      <div className="relative w-full max-w-2xl bg-[#0f172a]/80 border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-scale-up backdrop-blur-2xl">
        <div className="flex items-center px-6 py-5 border-b border-white/5">
          <SearchIcon className="w-5 h-5 text-primary mr-4" />
          <input
            autoFocus
            type="text"
            placeholder="Search documentation, features, advisors... (Esc to close)"
            className="flex-1 bg-transparent border-none text-white placeholder-slate-500 focus:outline-none text-lg"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
          {query === '' ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchIcon className="w-8 h-8 text-primary opacity-40" />
              </div>
              <p className="text-slate-400 text-sm">Type to begin searching the UART knowledge base</p>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.link);
                    onClose();
                  }}
                  className="w-full flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    ) : (
                      <item.icon className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-bold text-base truncate">{item.title}</span>
                      <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] uppercase tracking-widest text-slate-400 font-bold border border-white/5">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs truncate">{item.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all mt-3" />
                </button>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-slate-400 italic">No results found for "{query}"</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/5 bg-black/20 flex justify-between items-center text-[10px] text-slate-500 font-mono">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↵</kbd> select</span>
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">esc</kbd> close</span>
          </div>
          <span className="text-primary/60 tracking-widest">UART SEARCH ENGINE</span>
        </div>
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-up { 
          from { opacity: 0; transform: scale(0.95); } 
          to { opacity: 1; transform: scale(1); } 
        }
        .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
        .animate-scale-up { animation: scale-up 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.1); }
      `}</style>
    </div>
  );
};

export default Search;
