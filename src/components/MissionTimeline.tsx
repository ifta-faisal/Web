import React, { useRef, useEffect, useState } from 'react';

const MissionTimeline = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  const events = [
    { title: 'Team Formation', date: 'September 2024', desc: 'UART was established with a vision to advance rescue robotics in Bangladesh.', status: 'done' },
    { title: 'First Prototype', date: 'January 2025', desc: 'Completed our first rescue drone with basic mobility and sensor systems.', status: 'done' },
    { title: 'Final Flying', date: 'January 2026', desc: 'Fully workable autonomous system ready for competition.', status: 'done' },
    { title: 'Preparing TDR', date: '3rd March 2026', desc: 'Ready paper for Team Description and completing the team participation form.', status: 'done' },
    { title: 'SUAS 2026', date: 'Upcoming', desc: 'Preparing to represent Bangladesh at SUAS 2026.', status: 'upcoming' },
  ];

  // Trigger the timeline line animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLineVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-transparent relative overflow-hidden">
      {/* Cinematic atmosphere */}
      <div className="absolute inset-0 bg-radial-deep opacity-40 pointer-events-none" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="section-label mb-5 mx-auto" style={{ display: 'inline-flex' }}>Our Journey</div>
          <h2 className="text-4xl sm:text-5xl text-white uppercase tracking-wider">
            <div className="mask-container">
              <span className="mask-reveal ju-visible">Mission Timeline</span>
            </div>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line — animated height grow */}
          <div className="absolute left-[30px] sm:left-1/2 top-0 bottom-0 w-[1.5px] sm:-translate-x-1/2 overflow-hidden" style={{ background: 'rgba(249,115,22,0.1)' }}>
            <div
              ref={lineRef}
              className="w-full transition-all duration-[1800ms] ease-spring"
              style={{
                height: lineVisible ? '100%' : '0%',
                background: 'linear-gradient(to bottom, #f97316, #dc2626, #f97316)',
                boxShadow: '0 0 8px rgba(249,115,22,0.4)',
              }}
            />
          </div>

          <div className="space-y-10">
            {events.map((evt, idx) => {
              const isEven = idx % 2 === 0;
              const delayClass = ['ju-delay-1','ju-delay-2','ju-delay-3','ju-delay-4','ju-delay-5'][idx] || '';
              const isUpcoming = evt.status === 'upcoming';

              return (
                <div
                  key={idx}
                  className={`relative flex items-center sm:justify-between ju-reveal ${delayClass} ${!isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot with ping ring */}
                  <div
                    className="absolute left-[30px] sm:left-1/2 w-4 h-4 rounded-full sm:-translate-x-1/2 transform -translate-x-[6px] z-10 ping-ring"
                    style={{
                      background: isUpcoming ? '#FFFFFF' : '#f97316',
                      border: '3px solid #010101',
                      boxShadow: `0 0 12px ${isUpcoming ? 'rgba(255,255,255,0.7)' : 'rgba(249,115,22,0.7)'}`,
                    }}
                  />

                  {/* Spacer */}
                  <div className="hidden sm:block sm:w-[44%]" />

                  {/* Card */}
                  <div className="ml-[60px] sm:ml-0 sm:w-[44%] w-full">
                    <div
                      className="p-6 rounded-xl transition-all duration-400 group"
                      style={{
                        background: 'rgba(15,23,42,0.75)',
                        backdropFilter: 'blur(16px)',
                        border: `1px solid ${isUpcoming ? 'rgba(255,255,255,0.25)' : 'rgba(249,115,22,0.15)'}`,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = isUpcoming ? 'rgba(255,255,255,0.6)' : 'rgba(249,115,22,0.5)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = `0 12px 40px ${isUpcoming ? 'rgba(255,255,255,0.12)' : 'rgba(249,115,22,0.12)'}`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = isUpcoming ? 'rgba(255,255,255,0.25)' : 'rgba(249,115,22,0.15)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Date chip */}
                      <div
                        className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          background: isUpcoming ? 'rgba(255,255,255,0.15)' : 'rgba(249,115,22,0.12)',
                          color: isUpcoming ? '#FFFFFF' : '#f97316',
                          border: `1px solid ${isUpcoming ? 'rgba(255,255,255,0.4)' : 'rgba(249,115,22,0.3)'}`,
                          animation: isUpcoming ? 'glow-pulse 2s ease-in-out infinite' : 'none',
                        }}
                      >
                        {evt.date}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.08em' }}>
                        {evt.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {evt.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionTimeline;
