import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Search as SearchIcon } from 'lucide-react';
import Search from './Search';
import { projectsData } from '../data/projectsData';
import logoUrl from '../assets/images/logo/Logo UART SVG.svg';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };


  const navItems = [
    { name: 'Projects', to: '/projects', hasDropdown: true },
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
            <Link to="/" className="flex items-center space-x-2 group shrink-0">
              <img
                src={logoUrl}
                alt="UART Logo"
                loading="lazy"
                className="w-32 sm:w-40 lg:w-44 xl:w-52 h-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(249,115,22,0.6)]"
                style={{ background: 'transparent', mixBlendMode: 'screen' }}
              />
            </Link>

            {/* Desktop Navigation & Search */}
            <div className="hidden xl:flex items-center space-x-4">
              <nav className="flex items-center space-x-3 xl:space-x-5">
                {navItems.map((item) =>
                  item.hasDropdown ? (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={openDropdown}
                      onMouseLeave={scheduleClose}
                    >
                      <NavLink
                        to={item.to}
                        onClick={() => setDropdownOpen(false)}
                        className={({ isActive }) =>
                          `relative flex items-center gap-1 tracking-[0.1em] xl:tracking-[0.18em] font-medium transition-all duration-300 text-[11px] xl:text-[12px] whitespace-nowrap pb-1 uppercase
                          ${isActive ? 'text-primary' : 'text-slate-300 hover:text-white'}`
                        }
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {({ isActive }) => (
                          <>
                            {item.name}
                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            <span
                              className={`absolute bottom-0 h-[2px] transition-all duration-300 ease-out rounded-full ${
                                isActive ? 'left-0 right-0' : 'left-1/2 right-1/2'
                              }`}
                              style={{ background: '#f97316' }}
                            />
                          </>
                        )}
                      </NavLink>
                      {/* Dropdown */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          marginTop: '12px',
                          width: '224px',
                          background: 'rgba(10,15,35,0.97)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(249,115,22,0.2)',
                          borderRadius: '12px',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                          zIndex: 100,
                          opacity: dropdownOpen ? 1 : 0,
                          transform: dropdownOpen ? 'translateY(0)' : 'translateY(8px)',
                          pointerEvents: dropdownOpen ? 'auto' : 'none',
                          transition: 'opacity 0.25s ease, transform 0.25s ease',
                        }}
                      >
                        <div className="p-2">
                          <Link
                            to="/projects"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-primary font-bold uppercase tracking-widest hover:bg-primary/10 transition-colors mb-1"
                            style={{ fontFamily: "'Inter', sans-serif", borderBottom: '1px solid rgba(249,115,22,0.15)' }}
                          >
                            All Projects
                          </Link>
                          {projectsData.map((project) => (
                            <Link
                              key={project.id}
                              to={`/project/${project.id}`}
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] text-slate-300 hover:text-white hover:bg-white/5 transition-colors group/item"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors flex-shrink-0" />
                              <span className="truncate">{project.name}</span>
                              <span className="ml-auto text-[9px] text-slate-500 flex-shrink-0">{project.year}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      `relative group tracking-[0.1em] xl:tracking-[0.18em] font-medium transition-all duration-300 text-[11px] xl:text-[12px] whitespace-nowrap pb-1 uppercase
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
                  )
                )}
              </nav>

              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                aria-label="Open Search"
                title="Search"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex xl:hidden items-center gap-2">
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
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
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
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
              <span className="font-black text-2xl text-primary uppercase tracking-tighter" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                UART
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              style={{ border: '1px solid rgba(249,115,22,0.3)' }}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Items — staggered slide-in (Mirrors Desktop Navbar) */}
          <nav className="p-4 sm:p-6 space-y-1 text-sm sm:text-base overflow-y-auto">
            {navItems.map((item, index) =>
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setProjectsOpen(!projectsOpen)}
                    className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl uppercase tracking-wide font-bold transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/5"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      animation: isMenuOpen ? `hero-fade-up 0.4s cubic-bezier(0.16,1,0.3,1) ${index * 50 + 100}ms both` : 'none',
                      borderLeft: '2px solid transparent',
                    }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${projectsOpen ? 'rotate-180 text-primary' : 'opacity-60'}`} />
                  </button>
                  {projectsOpen && (
                    <div className="ml-4 mt-1 space-y-0.5" style={{ borderLeft: '2px solid rgba(249,115,22,0.3)' }}>
                      <NavLink
                        to="/projects"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-xs text-primary font-bold uppercase tracking-widest hover:bg-primary/10 rounded-lg transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        All Projects
                      </NavLink>
                      {projectsData.map((project) => (
                        <NavLink
                          key={project.id}
                          to={`/project/${project.id}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <span>{project.name}</span>
                          <span className="text-[10px] text-slate-500">{project.year}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between p-3.5 sm:p-4 rounded-xl uppercase tracking-wide font-bold transition-all duration-300
                  ${isActive
                    ? 'text-white bg-gradient-to-r from-primary/80 to-accent/80 shadow-lg shadow-primary/20'
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
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
