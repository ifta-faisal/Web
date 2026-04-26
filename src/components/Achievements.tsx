import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import uaImage from '../assets/images/UA1.jpeg';
import soildwork from '../assets/images/Sponsor/solidworks.png';
import mathlab from '../assets/images/Sponsor/matlab.png';
import autodesk from '../assets/images/Sponsor/autodesk.png';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'SolidWorks Engineering Partner',
      event: 'Dassault Systèmes Sponsorship',
      desc: 'Secured professional sponsorship from Dassault Systèmes, granting the team full access to the SolidWorks ecosystem. This partnership enables high-fidelity 3D modeling and complex structural simulations for our next-generation UAV platforms.',
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

  const delayClasses = ['ju-delay-1', 'ju-delay-2', 'ju-delay-3'];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Cinematic atmosphere */}
      <div className="absolute inset-0 bg-radial-deep opacity-40 pointer-events-none" />

      {/* Ambient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={`ju-reveal-scale ${delayClasses[i]} group relative`}>
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(249,115,22,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }}
                />
                <div
                  className="relative overflow-hidden h-full flex flex-col transition-all duration-400 rounded-2xl"
                  style={{
                    background: 'rgba(15,23,42,0.8)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(249,115,22,0.1), 0 20px 60px rgba(0,0,0,0.5)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(249,115,22,0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-white/5 flex items-center justify-center p-8">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                    {/* Gradient overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                      style={{ background: 'linear-gradient(to bottom, transparent 70%, rgba(249,115,22,0.2) 100%)' }}
                    />
                    {/* Glowing icon in corner */}
                    <div
                      className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(249,115,22,0.2)',
                        border: '1px solid rgba(249,115,22,0.5)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 0 16px rgba(249,115,22,0.4)',
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: '#f97316' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Tag — slides in on hover */}
                    <div
                      className="inline-flex items-center gap-2 text-xs font-bold mb-4 px-3 py-1.5 rounded self-start"
                      style={{
                        color: '#f97316',
                        background: 'rgba(249,115,22,0.12)',
                        border: '1px solid rgba(249,115,22,0.3)',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'transform 0.3s ease, background 0.3s ease',
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {item.tag}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.event}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.desc}
                    </p>

                    <div className="flex justify-between items-end pt-4 mt-auto" style={{ borderTop: '1px solid rgba(249,115,22,0.15)' }}>
                      <span className="text-primary font-bold text-sm" style={{ fontFamily: "'Inter', sans-serif", color: '#f97316' }}>{item.date}</span>
                      <span className="text-slate-500 text-xs max-w-[55%] text-right" style={{ fontFamily: "'Inter', sans-serif" }}>{item.tag}</span>
                    </div>
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
