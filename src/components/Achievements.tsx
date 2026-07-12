import React from 'react';
import { Award, Trophy, Star, Zap } from 'lucide-react';
import soildwork from '../assets/images/Sponsor/solidworks.png';
import mathlab from '../assets/images/Sponsor/matlab.png';
import autodesk from '../assets/images/Sponsor/autodesk.png';
import amprius from '../assets/images/Sponsor/amprius.png';

const Achievements = () => {
  const achievements = [
    {
      id: 4,
      title: 'Amprius Technology Partnership',
      event: 'Official Technology Partner - May 2026',
      desc: 'Amprius Technologies has officially partnered with UART as our technology partner. Amprius is a leader in silicon anode lithium-ion battery technology, providing exceptional energy density that will significantly extend the flight endurance of our UAV platforms.',
      tag: 'Energy Technology',
      date: 'May 27, 2026',
      icon: Zap,
      image: amprius,
    },
    {
      id: 1,
      title: 'SolidWorks Engineering Partner',
      event: 'Dassault Systemes Sponsorship',
      desc: 'Secured professional sponsorship from Dassault Systemes, granting the team full access to the SolidWorks ecosystem. This partnership enables high-fidelity 3D modeling and complex structural simulations for our next-generation UAV platforms.',
      tag: 'Mechanical Design',
      date: 'January 2026',
      icon: Award,
      image: soildwork,
    },
    {
      id: 2,
      title: 'MathWorks Research Grant',
      event: 'MATLAB & Simulink Partnership',
      desc: 'Partnered with MathWorks to integrate MATLAB and Simulink into our flight control development. This sponsorship provides industry-leading tools for control system design, signal processing, and comprehensive flight physics simulations.',
      tag: 'Control Systems',
      date: 'March 2026',
      icon: Trophy,
      image: mathlab,
    },
    {
      id: 3,
      title: 'Autodesk Innovation Support',
      event: 'Fusion 360 & Generative Design',
      desc: 'Awarded an educational sponsorship from Autodesk, providing access to Fusion 360 and advanced generative design tools. This collaboration allows us to optimize airframe weight-to-strength ratios through state-of-the-art AI-driven design.',
      tag: 'Design Innovation',
      date: 'June 2025',
      icon: Star,
      image: autodesk,
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-transparent relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="section-label mb-5 mx-auto" style={{ display: 'inline-flex' }}>RECOGNITIONS</div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4">
          <div className="mask-container">
            <span className="mask-reveal ju-visible">Our Achievements</span>
          </div>
        </h2>
        <div className="shimmer-line mx-auto rounded-full mb-5" style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #f97316, #dc2626)' }} />
        <p className="ju-reveal text-slate-400 mb-16 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
          Celebrating milestones that define our journey in robotics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  background: 'rgba(15,23,42,0.85)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(249,115,22,0.4)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 40px rgba(249,115,22,0.1), 0 20px 60px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                {/* Logo panel */}
                <div
                  className="relative flex items-center justify-center h-44 px-8"
                  style={{ background: 'rgba(10,16,35,0.9)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {/* Subtle glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 max-w-[160px] max-h-[80px] w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: 'brightness(1.05)' }}
                  />
                  {/* Icon badge */}
                  <div
                    className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(249,115,22,0.15)',
                      border: '1px solid rgba(249,115,22,0.4)',
                      boxShadow: '0 0 12px rgba(249,115,22,0.3)',
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: '#f97316' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Tag pill */}
                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-bold mb-4 px-3 py-1.5 rounded self-start"
                    style={{
                      color: '#f97316',
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.25)',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <Icon className="w-3 h-3" />
                    {item.tag}
                  </div>

                  <h3
                    className="text-base font-bold text-white mb-1 leading-tight"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em', fontSize: '1.1rem' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.event}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed flex-grow" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.desc}
                  </p>

                  {/* Footer */}
                  <div
                    className="flex items-center justify-between mt-5 pt-4"
                    style={{ borderTop: '1px solid rgba(249,115,22,0.12)' }}
                  >
                    <span className="text-sm font-bold" style={{ color: '#f97316', fontFamily: "'Inter', sans-serif" }}>
                      {item.date}
                    </span>
                    <span className="text-slate-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
