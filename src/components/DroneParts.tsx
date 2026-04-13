import React, { useState, useEffect } from 'react';
import droneImage from '../assets/images/drone.png';

const DroneParts = () => {
    const parts = [
        { id: 1, label: 'EASY DISASSEMBLY', dotTop: '18%', dotLeft: '72%', textTop: '15%', desc: "Here's the story of a man named Brady who was busy with three boys of his own." },
        { id: 2, label: 'ROBUST STRUCTURE', dotTop: '38%', dotLeft: '58%', textTop: '35%', desc: "Here's the story of a man named Brady who was busy with three boys of his own." },
        { id: 3, label: 'MOTORS', dotTop: '50%', dotLeft: '50%', textTop: '55%', desc: "Here's the story of a man named Brady who was busy with three boys of his own." },
        { id: 4, label: 'ADVANCED TECHNOLOGY', dotTop: '65%', dotLeft: '40%', textTop: '75%', desc: "Here's the story of a man named Brady who was busy with three boys of his own." },
        { id: 5, label: 'HD VIDEO RECORDING', dotTop: '85%', dotLeft: '48%', textTop: '95%', desc: "Here's the story of a man named Brady who was busy with three boys of his own." },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % parts.length);
        }, 3000); // Highlight next part every 3 seconds
        return () => clearInterval(interval);
    }, [parts.length]);

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Cinematic atmosphere */}
            <div className="absolute inset-0 bg-radial-warm opacity-30 pointer-events-none" />
            
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#f97316] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ju-reveal">
                <div className="text-center mb-16">
                    <div className="section-label mb-3">Anatomy</div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        <div className="mask-container">
                            <span className="mask-reveal ju-visible">Inside Our Drone</span>
                        </div>
                    </h2>
                    <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"></div>
                </div>

                <div className="relative flex flex-col md:flex-row h-auto md:h-[700px] overflow-hidden ju-reveal" style={{ animationDelay: '0.2s' }}>

                    {/* Drone Image Area (Left) */}
                    <div className="w-full md:w-2/3 h-[400px] md:h-full relative flex items-center justify-center">
                        <img
                            src={droneImage}
                            alt="Drone Anatomy"
                            className="ju-reveal w-full max-h-full object-contain relative z-10"
                        />

                        {/* Dots on Drone */}
                        {parts.map((part, i) => (
                            <div
                                key={part.id}
                                className="absolute z-20 transition-all duration-700"
                                style={{ top: part.dotTop, left: part.dotLeft }}
                            >
                                <div className="relative flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                                    {/* Active Glow */}
                                    <div className={`absolute w-8 h-8 bg-[#f97316] rounded-full transition-all duration-700 ${activeIndex === i ? 'animate-ping opacity-60' : 'opacity-0 scale-0'}`}></div>
                                    <div className={`absolute w-12 h-12 border border-[#f97316] rounded-full transition-all duration-1000 ${activeIndex === i ? 'opacity-40 scale-100' : 'opacity-0 scale-50'}`}></div>
                                    {/* Core Dot */}
                                    <div className={`relative w-3 h-3 rounded-full border-2 border-[#020617] shadow-md transition-all duration-500 ${activeIndex === i ? 'bg-[#f97316] scale-150' : 'bg-[#94a3b8] scale-100'}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* SVG Connecting Lines (Desktop Only) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-20">
                        {parts.map((p, i) => {
                            const isActive = activeIndex === i;
                            // The image container is 66.66% wide. The dotLeft is a percentage of that 66.66%.
                            // The text starts at 66.66% width.
                            return (
                                <line
                                    key={i}
                                    x1={`calc(${p.dotLeft} * 0.6666)`}
                                    y1={p.dotTop}
                                    x2="66.66%"
                                    y2={`calc(${p.textTop} - 16px)`} // slightly offset to align with text
                                    stroke={isActive ? "#f97316" : "#475569"} // #f97316 or slate-600
                                    strokeWidth={isActive ? "2" : "1"}
                                    strokeDasharray={isActive ? "none" : "4 4"}
                                    className={`transition-all duration-1000 ease-in-out ${isActive ? 'opacity-80' : 'opacity-30'}`}
                                />
                            );
                        })}
                    </svg>

                    {/* Text Descriptions Area (Right) */}
                    <div className="w-full md:w-1/3 relative mt-12 md:mt-0 flex flex-col justify-between md:block z-30">
                        {parts.map((part, i) => {
                            const isActive = activeIndex === i;
                            return (
                                <div
                                    key={part.id}
                                    className="md:absolute w-full mb-8 md:mb-0 transition-all duration-700 md:-translate-y-1/2"
                                    style={{ top: part.textTop }}
                                >
                                    <h4 className={`font-bold text-sm md:text-base tracking-[0.2em] uppercase transition-colors duration-500 ${isActive ? 'text-[#f97316] scale-105 origin-left' : 'text-[#e2e8f0]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {part.label}
                                    </h4>
                                    <p className={`text-[#94a3b8] text-xs sm:text-sm mt-2 font-light leading-relaxed transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                                        {part.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DroneParts;
