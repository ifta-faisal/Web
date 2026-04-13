import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronRight, Search as SearchIcon } from 'lucide-react';
import Search from './Search';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const logoUrl = new URL('../assets/images/logo/Logo UART SVG.svg', import.meta.url).href;

  const navItems = [
    { name: 'Projects', to: '/projects' },
    { name: 'Advisors', to: '/advisors' },
    { name: 'Team', to: '/team' },
    { name: 'Join us', to: '/joinus' },
    { name: 'Contact us', to: '/contact' },
    { name: 'Blog', to: '/blog' },
    { name: 'Become a sponsor', to: '/sponsor' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY <= 20);
      setLastScrollY(currentScrollY);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-spring ${
          isTop
            ? 'bg-transparent py-3 shadow-none'
            : 'py-2 shadow-2xl'
        }`}
        style={
          !isTop ? {
            background: 'rgba(2,6,23,0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          } : {}
        }
      >
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src={logoUrl}
                alt="UART Logo"
                loading="lazy"
                className="w-56 h-56 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(249,115,22,0.6)]"
              />
            </Link>

            {/* Desktop Navigation & Search */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex items-center space-x-4 lg:space-x-7 xl:space-x-9">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      `relative group tracking-[0.25em] font-medium transition-all duration-300 text-[11px] xl:text-[12px] whitespace-nowrap pb-1 uppercase
                      ${isActive ? 'text-primary' : 'text-slate-300 hover:text-white'}`
                    }
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <span
                          className={`absolute bottom-0 h-[2px] transition-all duration-300 ease-out rounded-full ${
                            isActive ? 'left-0 right-0' : 'left-1/2 right-1/2 group-hover:left-0 group-hover:right-0'
                          }`}
                          style={{ background: '#f97316' }}
                        />
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                aria-label="Open Search (Ctrl+K)"
                title="Search (Ctrl+K)"
              >
                <kbd className="hidden lg:block text-[10px] font-mono border border-white/10 px-1.5 py-0.5 rounded bg-white/5 opacity-40 group-hover:opacity-100 transition-opacity">K</kbd>
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded text-gray-300 hover:text-white"
                aria-label="Open Search"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded text-gray-300 hover:text-white transition-colors relative"
                style={{ border: '1px solid rgba(249,115,22,0.3)' }}
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Global Search Overlay */}
        <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(2,6,23,0.7)', backdropFilter: 'blur(8px)' }}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Slide-in panel */}
        <div
          className={`fixed top-0 right-0 w-4/5 max-w-xs sm:max-w-sm h-full shadow-2xl transform transition-transform duration-400 ease-spring`}
          style={{
            background: 'rgba(15,23,42,0.96)',
            backdropFilter: 'blur(24px)',
            borderLeft: '1px solid rgba(249,115,22,0.2)',
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="p-6 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(249,115,22,0.15)' }}>
            <div className="flex items-center space-x-3">
              <img src={logoUrl} alt="UART" loading="lazy" className="w-9 h-9 rounded-sm object-cover" />
              <span className="font-bold text-lg text-primary uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                UART
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Items — staggered slide-in (Mirrors Desktop Navbar) */}
          <nav className="p-5 space-y-1 text-sm sm:text-base overflow-y-auto">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between p-4 rounded uppercase tracking-wide font-bold transition-all duration-300
                  ${isActive
                    ? 'text-white bg-gradient-to-r from-primary/80 to-accent/80'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  animation: isMenuOpen ? `hero-fade-up 0.4s cubic-bezier(0.16,1,0.3,1) ${index * 50 + 100}ms both` : 'none',
                  borderLeft: '2px solid transparent',
                }}
                onMouseEnter={e => e.currentTarget.style.borderLeftColor = '#f97316'}
                onMouseLeave={e => e.currentTarget.style.borderLeftColor = 'transparent'}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
