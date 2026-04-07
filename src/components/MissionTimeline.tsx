import React from 'react';

const MissionTimeline = () => {
    const events = [
        { title: 'Team Formation', date: 'September 2024', desc: 'UART was established with a vision to advance rescue robotics in Bangladesh.' },
        { title: 'First Prototype ', date: 'January 2025', desc: 'Completed our first rescue drone with basic mobility and sensor systems.' },
        { title: 'SUAS 2026', date: 'Upcoming', desc: 'Preparing to represent Bangladesh at RoboCup Rescue 2026 in South Korea.' },
        { title: 'Final Flying', date: 'January 2026', desc: 'Fully Workable.' },
        { title: 'Preparing TDR ', date: '3rd March', desc: 'Ready paper for Team Description and completing the team participation form.' }
    ];

    return (
        <section className="py-24 bg-transparent relative overflow-hidden ju-reveal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16 uppercase tracking-wider">Mission Timeline</h2>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[30px] sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ea580c] via-[#dc2626] to-[#ea580c] sm:-translate-x-1/2 rounded-full"></div>

                    <div className="space-y-12">
                        {events.map((evt, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={idx} className={`relative flex items-center sm:justify-between ju-reveal ${!isEven ? 'sm:flex-row-reverse' : ''}`} style={{ animationDelay: `${idx * 0.15}s` }}>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-[30px] sm:left-1/2 w-4 h-4 rounded-full bg-[#f97316] border-4 border-[#090d18] sm:-translate-x-1/2 transform -translate-x-[6px] z-10 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>

                                    {/* Empty space for alternating layout on desktop */}
                                    <div className="hidden sm:block sm:w-[45%]"></div>

                                    {/* Card */}
                                    <div className="ml-[60px] sm:ml-0 sm:w-[45%] w-full">
                                        <div className="bg-[rgba(15,23,42,0.8)] border border-[rgba(255,255,255,0.08)] backdrop-blur-xl p-6 rounded-xl hover:border-[#f97316]/50 transition duration-300 hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(234,88,12,0.15)]">
                                            <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">{evt.title}</h3>
                                            <p className="text-[#f97316] text-sm font-semibold mb-3">{evt.date}</p>
                                            <p className="text-[#94a3b8] text-sm">{evt.desc}</p>
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
