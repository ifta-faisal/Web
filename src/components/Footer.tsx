import React from 'react';
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram, ChevronRight } from 'lucide-react';
import Logo from '../assets/images/logo/UART_Logo.png';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

// Particle config for footer atmosphere
const FOOTER_PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  size: Math.random() * 2 + 1,
  left: Math.random() * 100,
  bottom: Math.random() * 40,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 6,
  opacity: Math.random() * 0.3 + 0.1,
}));

const Footer = () => {
  const quickLinks = [
    { name: 'Team', href: '/team' },
    { name: 'Projects', href: '/projects' },
    { name: 'Join Us', href: '/joinus' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  // Use first 5 projects from projectsData with correct deep-link hrefs
  const projects = projectsData.slice(0, 5).map(p => ({
    name: p.name,
    href: `/project/${p.id}`,
  }));

  return (
    <footer style={{ background: '#020617' }} className="text-white relative overflow-hidden">
      {/* Horizontal grid divider at footer start */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="cinematic-divider-h" />
      </div>

      {/* Atmospheric particles */}
      {FOOTER_PARTICLES.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            background: p.id % 4 === 0 ? '#f97316' : 'rgba(255,255,255,0.5)',
            opacity: p.opacity,
            animation: `particle-drift-2 ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Corner glow blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      {/* Animated shimmer border line at top */}
      <div className="w-full h-[2px] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #f97316 20%, #FFFFFF 50%, #f97316 80%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'border-shimmer 3s ease infinite',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div className="lg:col-span-1 ju-reveal-left">
            <div className="flex items-center space-x-3 mb-6">
              <img src={Logo} alt="UIU Aerial Robotics Logo" className="w-24 h-24 object-contain" />
              <div>
                <h3
                  className="text-xl font-bold text-white tracking-[0.2em]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  UIU Aerial Robotics Team
                </h3>
                <p className="text-sm mt-1" style={{ color: '#f97316', fontFamily: "'Inter', sans-serif" }}>
                  United International University
                </p>
              </div>
            </div>
            <p className="text-sm mb-7 leading-relaxed" style={{ color: '#7A6E68', fontFamily: "'Inter', sans-serif" }}>
              Pioneering sustainable aviation through innovative UAV design and cutting-edge aerospace research.
            </p>

            {/* Social Icons — with ripple effect */}
            <div className="flex space-x-3">
              {[
                { href: 'https://www.facebook.com/uiuaerialrobotics', Icon: Facebook, label: 'Facebook' },
                { href: 'https://www.instagram.com/uiuaerialrobotics', Icon: Instagram, label: 'Instagram' },
                { href: 'https://youtube.com/@uiuaerialrobotics?si=DlAOChShO2_kzuYe', Icon: Youtube, label: 'YouTube' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="social-ripple w-10 h-10 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(249,115,22,0.1)',
                    border: '1px solid rgba(249,115,22,0.3)',
                    borderRadius: '999px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#f97316';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(249,115,22,0.5)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="ju-reveal ju-delay-2">
            <h4
              className="text-lg font-bold mb-6 text-white uppercase tracking-widest pb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif", borderBottom: '1px solid rgba(249,115,22,0.3)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-sm transition-all duration-300 group"
                    style={{ color: '#7A6E68', fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                    onMouseLeave={e => e.currentTarget.style.color = '#7A6E68'}
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -ml-1 transition-all" style={{ color: '#f97316' }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="ju-reveal ju-delay-3">
            <h4
              className="text-lg font-bold mb-6 text-white uppercase tracking-widest pb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif", borderBottom: '1px solid rgba(249,115,22,0.3)' }}
            >
              Our Projects
            </h4>
            <ul className="space-y-3">
              {projects.map((project, idx) => (
                <li key={idx}>
                  <Link
                    to={project.href}
                    className="flex items-center gap-2 text-sm transition-all duration-300 group"
                    style={{ color: '#7A6E68', fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                    onMouseLeave={e => e.currentTarget.style.color = '#7A6E68'}
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -ml-1 transition-all" style={{ color: '#f97316' }} />
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="ju-reveal ju-delay-4">
            <h4
              className="text-lg font-bold mb-6 text-white uppercase tracking-widest pb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif", borderBottom: '1px solid rgba(249,115,22,0.3)' }}
            >
              Contact Info
            </h4>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#f97316' }} />
                <div className="text-sm leading-relaxed" style={{ color: '#7A6E68', fontFamily: "'Inter', sans-serif" }}>
                  <p>United International University</p>
                  <p>United City, Madani Ave 100ft, Dhaka</p>
                  <a
                    href="https://maps.app.goo.gl/GYa86SyjURtjzo6S7?g_st=aw"
                    target="_blank" rel="noopener noreferrer"
                    className="mt-1.5 inline-block text-xs underline transition-colors"
                    style={{ color: '#f97316' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#f97316'}
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#f97316' }} />
                <a
                  href="mailto:aerialrobotics@project.uiu.ac.bd"
                  className="text-sm transition-colors"
                  style={{ color: '#7A6E68', fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={e => e.currentTarget.style.color = '#7A6E68'}
                >
                  aerialrobotics@project.uiu.ac.bd
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#f97316' }} />
                <a
                  href="tel:+8801521461598"
                  className="text-sm transition-colors"
                  style={{ color: '#7A6E68', fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={e => e.currentTarget.style.color = '#7A6E68'}
                >
                  +880 1521-461598
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-7 ju-reveal ju-delay-5"
          style={{ borderTop: '1px solid rgba(249,115,22,0.2)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm" style={{ color: '#4A4038', fontFamily: "'Inter', sans-serif" }}>
              © 2024–2025 UIU Aerial Robotics Team. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {[
                { to: '/PrivacyPolicy', label: 'Privacy Policy' },
                { to: '/TermsofService', label: 'Terms of Service' },
                { to: '/CookiePolicy', label: 'Cookie Policy' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="transition-colors duration-300"
                  style={{ color: '#4A4038', fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={e => e.currentTarget.style.color = '#4A4038'}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
