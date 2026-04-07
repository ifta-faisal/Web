import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);

  // State for scroll hide/show
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const logoUrl = new URL('../assets/images/Logo UART SVG.svg', import.meta.url).href;

  const navItems = [
    { name: 'Projects', to: '/projects' },
    { name: 'Advisors', to: '/advisors' },
    { name: 'Team', to: '/team' },
    { name: 'Join us', to: '/joinus' },
    { name: 'Contact us', to: '/contact' },
    { name: 'Blog', to: '/blog' },
    { name: 'Become a sponsor', to: '/sponsor' },
  ];

  // Effect to handle scroll direction and hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        // Determine if at the absolute top
        if (currentScrollY < 20) {
          setIsTop(true);
        } else {
          setIsTop(false);
        }

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          // Scrolling down
          setShowNavbar(false);
        } else {
          // Scrolling up
          setShowNavbar(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Header with smart scroll hiding & transparency */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${isTop ? 'bg-transparent py-2 shadow-none' : 'bg-gray-900 shadow-lg py-0'}`}>
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src={logoUrl}
                alt="Logo UART SVG"
                loading="lazy"
                className="w-60 h-60 object-contain"
              />

              <span className="font-bold text-xl sm:text-2xl text-orange-400 uppercase tracking-wide">
              </span>
            </Link>

            {/* Desktop Navigation - Increased spacing to match screenshot */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-10 relative">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `uppercase tracking-wide font-bold transition-all duration-300 text-sm whitespace-nowrap
                    ${isActive
                      ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                      : 'text-gray-300 hover:text-orange-500'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-4/5 max-w-xs sm:max-w-sm h-full bg-gray-900 shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="p-6 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={logoUrl}
                alt="Logo UART SVG"
                loading="lazy"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm object-cover"
              />
              <span className="font-bold text-lg sm:text-xl text-orange-400 uppercase tracking-wide">UART</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="p-6 space-y-2 text-sm sm:text-base">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between p-4 rounded uppercase tracking-wide font-bold transition-all duration-300
                  ${isActive
                    ? 'text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-red-600'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-5 h-5" />
              </NavLink>
            ))}

            {/* Mobile Team Dropdown */}
            <div className="mt-2">
              <button
                onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
                className="w-full flex justify-between items-center p-4 rounded uppercase tracking-wide font-bold text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-red-600 transition-all duration-300"
              >
                <span>Team</span>
                <ChevronRight
                  className={`w-5 h-5 transform transition-transform duration-300 ${isTeamDropdownOpen ? 'rotate-90' : ''
                    }`}
                />
              </button>

              {isTeamDropdownOpen && (
                <div className="ml-4 mt-1 space-y-1 text-sm sm:text-base">
                  <NavLink
                    to="/team"
                    className="block px-4 py-2 rounded uppercase tracking-wide font-bold text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Members
                  </NavLink>
                  <NavLink
                    to="/mentor"
                    className="block px-4 py-2 rounded uppercase tracking-wide font-bold text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mentor
                  </NavLink>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
