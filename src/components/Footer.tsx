import React from 'react';
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram } from 'lucide-react';
import Logo from "../assets/images/UART_Logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Team', href: '/team' },
    { name: 'Projects', href: '/projects' },
    { name: 'Join Us', href: '/joinus' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/Gallery' },

  ];

  const projects = [
    { name: 'Endurance UAV', href: '/projects' },
    { name: 'Long Range Drone', href: '/projects' },
    { name: 'Surveillance UAV', href: '/projects' },
    { name: 'Defensive Drone', href: '/projects' }
  ];

  return (
    <footer className="bg-[rgba(9,13,24,0.6)] border-t border-[rgba(255,255,255,0.08)] text-[#e2e8f0] relative overflow-hidden">
      {/* Decorative gradient blur based on JoinUs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ea580c] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#dc2626] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-1 ju-reveal">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={Logo}
                alt="UIU Aerial Robotics Logo"
                className="w-32 h-32 md:w-32 md:h-32 object-contain"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold">UIU Aerial Robotics Team</h3>
                <p className="text-gray-400 text-sm">United International University</p>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm mb-6 leading-relaxed">
              Pioneering sustainable aviation through innovative solar-powered aircraft design and cutting-edge renewable energy research.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/uiuaerialrobotics" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] rounded-lg flex items-center justify-center hover:bg-[#ea580c] hover:border-[#ea580c] transition duration-300 transform hover:scale-105 shadow-[0_4px_14px_rgba(0,0,0,0.1)]">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/uiuaerialrobotics" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] rounded-lg flex items-center justify-center hover:bg-[#ea580c] hover:border-[#ea580c] transition duration-300 transform hover:scale-105 shadow-[0_4px_14px_rgba(0,0,0,0.1)]">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://youtube.com/@uiuaerialrobotics?si=DlAOChShO2_kzuYe" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] rounded-lg flex items-center justify-center hover:bg-[#ea580c] hover:border-[#ea580c] transition duration-300 transform hover:scale-105 shadow-[0_4px_14px_rgba(0,0,0,0.1)]">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ju-reveal" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-[#94a3b8] hover:text-[#f97316] transition duration-300 hover:translate-x-1 inline-block text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="ju-reveal" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Our Projects</h4>
            <ul className="space-y-3">
              {projects.map((project, idx) => (
                <li key={idx}>
                  <Link to={project.href} className="text-[#94a3b8] hover:text-[#f97316] transition duration-300 hover:translate-x-1 inline-block text-sm font-medium">
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="ju-reveal" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#f97316] mt-1 flex-shrink-0" />
                <div className="text-[#94a3b8] text-sm font-medium">
                  <p>United International University</p>
                  <p>United City</p>
                  <p>Madani Ave 100ft, Dhaka</p>
                  <a href="https://maps.app.goo.gl/GYa86SyjURtjzo6S7?g_st=aw" target="_blank" rel="noopener noreferrer" className="text-[#fb923c] hover:text-white underline mt-2 inline-block">
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#f97316] flex-shrink-0" />
                <a href="mailto:aerialrobotics@project.uiu.ac.bd" className="text-[#94a3b8] hover:text-[#f97316] text-sm transition duration-300 font-medium">
                  aerialrobotics@project.uiu.ac.bd
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#f97316] flex-shrink-0" />
                <a href="tel:+8801521461598" className="text-[#94a3b8] hover:text-[#f97316] text-sm transition duration-300 font-medium">
                  +880 1521-461598
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-[rgba(255,255,255,0.08)] mt-12 pt-8 ju-reveal" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#64748b] text-sm font-semibold tracking-wide">
              © 2024-2025 UIU Aerial Robotics Team.<br className="md:hidden" /> All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm font-medium">
              <Link to="/PrivacyPolicy" className="text-[#64748b] hover:text-white transition duration-300">
                Privacy Policy
              </Link>
              <Link to="/TermsofService" className="text-[#64748b] hover:text-white transition duration-300">
                Terms of Service
              </Link>
              <Link to="/CookiePolicy" className="text-[#64748b] hover:text-white transition duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
