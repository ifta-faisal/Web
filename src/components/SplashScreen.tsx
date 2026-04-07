import React, { useState } from 'react';
import bgVideoUrl from '../assets/video/Drone_Fotage_1.mp4';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [isExiting, setIsExiting] = useState(false);

    // Fade out on click
    const handleClick = () => {
        setIsExiting(true);
        setTimeout(() => {
            onComplete();
        }, 1000); // 1000ms duration for screen to fade
    };

    return (
        <div
            onClick={handleClick}
            className={`fixed inset-0 z-[9999] bg-[#090d18] flex flex-col items-center justify-center transition-opacity duration-[1000ms] ease-in-out cursor-pointer ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
            >
                <source src={bgVideoUrl} type="video/mp4" />
            </video>

            {/* Dark Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-[rgba(9,13,24,0.4)] to-transparent pointer-events-none"></div>

            {/* Main Content Overlay */}
            <div className="relative z-10 flex flex-col items-center mt-auto mb-24 px-4 w-full">
                <h1 className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mb-6 text-center">
                    SYSTEM INITIALIZATION<span className="animate-pulse text-orange-500">...</span>
                </h1>

                <p className="text-gray-300 font-mono tracking-[0.15em] text-xs md:text-sm text-center mb-8 bg-black/40 px-6 py-2 rounded-full border border-gray-700/50 backdrop-blur-md">
                    <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse mr-3 shadow-[0_0_8px_rgba(249,115,22,1)]"></span>
                    ESTABLISHING SECURE CONNECTION
                </p>

                <div className="mt-8 group relative overflow-hidden rounded-full p-[1px]">
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
                    <div className="relative px-8 py-3 bg-[rgba(9,13,24,0.8)] rounded-full backdrop-blur-sm border border-orange-500/30 group-hover:border-orange-500/80 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                        <p className="text-orange-400 font-mono text-sm tracking-[0.3em] uppercase transition-colors duration-300 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                            [ Click Anywhere To Launch ]
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
