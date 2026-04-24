import React, { useState, useEffect, useCallback } from 'react';
import { Search as SearchIcon, X, ArrowRight, FileText, User, Shield, Zap, Cpu, Users, Settings, Activity, Gauge, MapPin, Navigation, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  category: 'Page' | 'Feature' | 'Blog' | 'Advisor' | 'Member' | 'Sub-Team' | 'Spec';
  link: string;
  icon: React.ElementType;
  description: string;
  tags?: string[]; // Added tags for better searching
}

const SEARCH_DATA: SearchResult[] = [
  // ─── Pages ───
  { id: 'p1', title: 'Detailed Features', category: 'Page', link: '/DetailedFeatures', icon: Settings, description: 'Technical specifications and aircraft systems.', tags: ['specs', 'vehicle', 'drone', 'weight', 'endurance'] },
  { id: 'p2', title: 'Advisors & Mentors', category: 'Page', link: '/advisors', icon: User, description: 'Our team leadership and advisory board.', tags: ['leadership', 'mentors', 'teachers'] },
  { id: 'p3', title: 'Join the Team', category: 'Page', link: '/joinus', icon: FileText, description: 'Recruitment and membership information.', tags: ['apply', 'recruitment', 'jobs', 'hiring'] },
  { id: 'p4', title: 'UAV Research Blog', category: 'Page', link: '/blog', icon: FileText, description: 'Historical build progress and technical insights.', tags: ['news', 'updates', 'research'] },
  { id: 'p5', title: 'Sponsorships', category: 'Page', link: '/sponsor', icon: Zap, description: 'Support our mission and become a partner.', tags: ['help', 'donate', 'partner'] },
  { id: 'p6', title: 'Contact Us', category: 'Page', link: '/contact', icon: MapPin, description: 'Get in touch for inquiries or collaborations.', tags: ['email', 'location', 'reach us'] },
  { id: 'p7', title: 'Projects', category: 'Page', link: '/projects', icon: Activity, description: 'Our flagship UAV projects and technical milestones.', tags: ['drone', 'aircraft', 'work'] },
  { id: 'p8', title: 'Our Team', category: 'Page', link: '/team', icon: Users, description: 'Meet the engineers behind UART.', tags: ['members', 'people', 'staff'] },

  // ─── Technical Specs ───
  { id: 's1', title: 'Max Takeoff Weight: 4.2kg', category: 'Spec', link: '/DetailedFeatures', icon: Gauge, description: 'Optimized carbon fiber structure for high payload capacity.', tags: ['weight', 'kg', 'capacity'] },
  { id: 's2', title: 'Flight Endurance: 35min', category: 'Spec', link: '/DetailedFeatures', icon: Activity, description: 'High-density LiPo battery power for extended missions.', tags: ['time', 'battery', 'duration'] },
  { id: 's3', title: 'Telemetry Range: 10km', category: 'Spec', link: '/DetailedFeatures', icon: Navigation, description: 'Long-range RFD900x communication link.', tags: ['distance', 'range', 'signal'] },
  { id: 's4', title: 'NVIDIA Jetson AI', category: 'Spec', link: '/DetailedFeatures', icon: Cpu, description: 'Onboard edge AI processing (Jetson Orin Nano).', tags: ['brain', 'computer', 'autonomous', 'ai'] },
  { id: 's5', title: 'Carbon Fiber Frame', category: 'Spec', link: '/DetailedFeatures', icon: Shield, description: 'Lightweight monocoque airframe design.', tags: ['structure', 'materials', 'build'] },

  // ─── Sub-Teams ───
  { id: 'st1', title: 'Electrical Team', category: 'Sub-Team', link: '/team?filter=electronics', icon: Zap, description: 'PCB design, power distribution, and avionics integration.', tags: ['avionics', 'circuits', 'power'] },
  { id: 'st2', title: 'Software & Navigation Team', category: 'Sub-Team', link: '/team?filter=software', icon: Cpu, description: 'Autonomous flight control, GCS, and AI development.', tags: ['coding', 'algorithms', 'ai', 'soft'] },
  { id: 'st3', title: 'Mechanical Team', category: 'Sub-Team', link: '/team?filter=mechanical', icon: Settings, description: 'Airframe design, aerodynamics, and structural testing.', tags: ['structure', 'cad', 'build'] },
  { id: 'st4', title: 'Web & Communication Team', category: 'Sub-Team', link: '/team?filter=web', icon: FileText, description: 'Website development and public communications.', tags: ['site', 'it', 'media'] },
  { id: 'st5', title: 'Research & Development (R&D)', category: 'Sub-Team', link: '/team?filter=rd', icon: Activity, description: 'Long-term innovation and new technology scouting.', tags: ['future', 'innovation'] },

  // ─── Members ───
  { id: 'm1', title: 'T M AL Anam', category: 'Member', link: '/team', icon: User, description: 'Team Lead • Electrical Team', tags: ['mukit', 'leader', 'electronics'] },
  { id: 'm2', title: 'Ahmed Junaed', category: 'Member', link: '/team', icon: User, description: 'Co-Team Lead • Software & Nav Team', tags: ['junaid', 'leader', 'coding'] },
  { id: 'm3', title: 'Fahad Rahaman', category: 'Member', link: '/team', icon: User, description: 'Sub Team Lead • Software & Nav Team', tags: ['ovi', 'coding'] },
  { id: 'm4', title: 'MD Ifta Faisal', category: 'Member', link: '/team', icon: User, description: 'Sub Team Lead • Web & Communication', tags: ['web', 'ifta'] },
  { id: 'm5', title: 'Muktaderul Islam', category: 'Member', link: '/team', icon: User, description: 'Sub Team Lead • Mechanical Team', tags: ['mechanical', 'cad'] },

  // ─── Leadership & Advisors ───
  { id: 'l1', title: 'Dr. Md. Abul Kashem Mia', category: 'Advisor', link: '/advisors', icon: Award, description: 'Official Advisor • Vice Chancellor, UIU', tags: ['vc', 'leader', 'kashem'] },
  { id: 'l2', title: 'Dr. A.K.M. Muzahidul Islam', category: 'Advisor', link: '/advisors?filter=director', icon: Award, description: 'Director • Professor, Dept. of CSE', tags: ['director', 'muzahid', 'leader'] },
  { id: 'l3', title: 'Dr. Riasat Azim', category: 'Advisor', link: '/advisors?filter=mentor', icon: User, description: 'Mentor • Assistant Professor, Dept. of CSE', tags: ['riasat', 'ml', 'vision'] },
  { id: 'l4', title: 'Mr. Azizur Rahman Anik', category: 'Advisor', link: '/advisors?filter=mentor', icon: User, description: 'Mentor • Lecturer, Dept. of CSE', tags: ['anik', 'firmware', 'embedded'] },
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
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
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
