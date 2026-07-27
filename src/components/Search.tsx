import React, { useState, useEffect, useCallback } from 'react';
import { Search as SearchIcon, X, ArrowRight, FileText, User, Shield, Zap, Cpu, Users, Settings, Activity, Gauge, MapPin, Navigation, Award, Rocket, Eye, Wind } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { teamMembers } from '../data/teamData';
import { projectsData } from '../data/projectsData';
import { featured, mentors } from '../data/advisorsData';
import workshop from "../assets/images/news/workshop.webp";

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

const STATIC_PAGES: SearchResult[] = [
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
  { id: 'pr8', title: 'UAV Workshop Conducted', category: 'Blog', image: workshop, link: '/news', icon: Users, description: 'One of our core team members successfully conducted an intensive, hands-on workshop on UAV design, hardware integration, and autonomous flight controls.', tags: ['training', 'education', 'workshop', 'news'] }
];

const SEARCH_DATA: SearchResult[] = [
  ...STATIC_PAGES,
  ...teamMembers.map((m) => ({
    id: m.id,
    title: m.name,
    category: 'Member' as const,
    image: m.image,
    link: `/team?id=${m.id}`,
    icon: User,
    description: `${m.role} • ${m.team} • ${m.department}`,
    tags: [m.name, m.role, m.team, m.department].map(t => t.toLowerCase()),
  })),
  ...projectsData.map((p) => ({
    id: `pr${p.id}`,
    title: p.name,
    category: 'Project' as const,
    image: p.image,
    link: `/projects?id=${p.id}`,
    icon: Cpu,
    description: p.description,
    tags: [
      p.name, p.category, 
      ...(p.tags || []), 
      ...(p.specs?.map(s => s.value) || []),
      p.longDescription || ''
    ].map(t => t.toLowerCase()),
  })),
  ...featured.map((f) => ({
    id: f.id,
    title: f.name,
    category: f.category === 'director' ? 'Director' as const : 'Advisor' as const,
    image: f.image,
    link: `/advisors?id=${f.id}`,
    icon: Award,
    description: `${f.role} • ${f.department}`,
    tags: [f.name, f.role, f.department, f.bio].map(t => t.toLowerCase()),
  })),
  ...mentors.map((m) => ({
    id: m.id,
    title: m.name,
    category: 'Mentor' as const,
    image: m.image,
    link: `/advisors?id=${m.id}`,
    icon: User,
    description: `${m.role} • ${m.department}`,
    tags: [m.name, m.role, m.department, m.bio].map(t => t.toLowerCase()),
  }))
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

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

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
