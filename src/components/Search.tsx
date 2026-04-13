import React, { useState, useEffect, useCallback } from 'react';
import { Search as SearchIcon, X, ArrowRight, FileText, User, Shield, Zap, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  category: 'Page' | 'Feature' | 'Blog' | 'Advisor';
  link: string;
  icon: React.ElementType;
  description: string;
}

const SEARCH_DATA: SearchResult[] = [
  { id: '1', title: 'Detailed Features', category: 'Page', link: '/DetailedFeatures', icon: Zap, description: 'Technical specifications and aircraft systems.' },
  { id: '2', title: 'Advisors & Mentors', category: 'Page', link: '/advisors', icon: User, description: 'Our team leadership and advisory board.' },
  { id: '3', title: 'Autonomous Navigation', category: 'Feature', link: '/DetailedFeatures', icon: Cpu, description: 'AI-powered flight intelligence on the edge.' },
  { id: '4', title: 'Carbon Fiber Airframe', category: 'Feature', link: '/DetailedFeatures', icon: Shield, description: 'Structural engineering and monocoque design.' },
  { id: '5', title: 'Join the Team', category: 'Page', link: '/joinus', icon: FileText, description: 'Recruitment and membership information.' },
  { id: '6', title: 'UAV Research Blog', category: 'Page', link: '/blog', icon: FileText, description: 'Historical build progress and technical insights.' },
  { id: '7', title: 'Sponsorships', category: 'Page', link: '/sponsor', icon: Zap, description: 'Support our mission and become a partner.' },
  { id: '8', title: 'Contact Us', category: 'Page', link: '/contact', icon: FileText, description: 'Get in touch for inquiries or collaborations.' },
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
      item.description.toLowerCase().includes(val.toLowerCase())
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
