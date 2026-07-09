import React, { useState, useEffect, useRef } from 'react';
import { PlayCircle, Youtube, ExternalLink } from 'lucide-react';

import droneVideo from '../assets/video/Drone_Fotage_1.mp4';
import droneImage from '../assets/images/drone.png';
import uaImage from '../assets/images/UA1.jpeg';

const GalleryVideo = () => {
    const youtubeVideos = [
        // Paste the 11-character video IDs here (the part after v= or youtu.be/):
        { id: "I8id3VY7Vdg", title: "Drone Action" },
        { id: "kzlitmbiOUE", title: "Latest Drone Action" },
        { id: "ObORVT5EFPo", title: "Flight Readiness Overview" },
        { id: "m0vT2T1jra4", title: "Proof of Flight Readiness" },
        { id: "_EaZ3xg4thI", title: "Team Behind The Scenes" },
        { id: "N1-3eb-vTw0", title: "Advanced Navigation Demo" },
    ];

    const [activeVideoId, setActiveVideoId] = useState(youtubeVideos[0].id);
    const [isMuted, setIsMuted] = useState(true);
    const [isIntersecting, setIsIntersecting] = useState(false);

    const iframeRef = useRef<HTMLIFrameElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
                if (!iframeRef.current || !iframeRef.current.contentWindow) return;
                
                if (entry.isIntersecting) {
                    // Play the video (resumes from where it left off)
                    iframeRef.current.contentWindow.postMessage(
                        '{"event":"command","func":"playVideo","args":""}', '*'
                    );
                } else {
                    // Pause the video when out of view
                    iframeRef.current.contentWindow.postMessage(
                        '{"event":"command","func":"pauseVideo","args":""}', '*'
                    );
                }
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className=" py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 text-left">

                    {/* Left Column - Video Grid */}
                    <div className="flex flex-col justify-center">
                        <h2 className="ju-reveal text-3xl font-black text-white mb-4 uppercase tracking-wide">Flying Drones</h2>
                        <p className="ju-reveal text-slate-400 text-sm mb-10 leading-relaxed font-light">
                            Fast, smart, and always evolving—drones are changing the sky. From capturing stunning visuals to executing autonomous missions, they bring innovation to life. The future is airborne.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {youtubeVideos.map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => {
                                        setActiveVideoId(item.id);
                                        setIsMuted(false);
                                        // Force play when clicked if it was paused
                                        if (iframeRef.current?.contentWindow) {
                                            iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                                        }
                                    }}
                                    className={`aspect-[4/3] bg-surface relative group overflow-hidden cursor-pointer transition-all duration-300 ${activeVideoId === item.id ? 'scale-[0.98]' : ''}`}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                                        alt={item.title}
                                        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${activeVideoId === item.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'}`}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                        <PlayCircle className={`w-10 h-10 transition-all duration-300 stroke-[1] ${activeVideoId === item.id ? 'text-primary scale-110' : 'text-white/80 group-hover:text-yellow-400 group-hover:scale-110'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Embedded YouTube Video */}
                    <div ref={videoRef} className="relative flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-[600px] overflow-hidden rounded-xl shadow-2xl bg-slate-900/50 aspect-video flex items-center justify-center">
                            {/* YouTube Embed - Playable Inline */}
                            <div className="relative w-full h-full block">
                                <iframe
                                    ref={iframeRef}
                                    src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=0&mute=${isMuted ? 1 : 0}&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                                    title="Drone Action"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full rounded-xl"
                                    onLoad={() => {
                                        if (isIntersecting && iframeRef.current?.contentWindow) {
                                            iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        {/* Text below the video */}
                        <div className="mt-6 text-center">
                            <h2 className="ju-reveal text-2xl font-black text-white mb-3 tracking-wide uppercase">
                                Drone Action
                            </h2>
                            <p className="ju-reveal text-slate-400 text-sm max-w-xs mx-auto font-light leading-relaxed">
                                Taking control of the skies with speed, precision, and purpose. Every flight brings ideas closer to reality.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default GalleryVideo;
