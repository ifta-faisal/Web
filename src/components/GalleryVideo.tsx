import React from 'react';
import { PlayCircle } from 'lucide-react';

import droneVideo from '../assets/video/Drone_Fotage_1.mp4';
import droneImage from '../assets/images/drone.png';
import uaImage from '../assets/images/UA1.jpeg';

const GalleryVideo = () => {
    // Array of mock videos for the left column grid
    const videos = Array(6).fill({ poster: droneImage, video: droneVideo });
    // Add some variety to the thumbnails
    videos[1] = { poster: uaImage, video: droneVideo };
    videos[4] = { poster: uaImage, video: droneVideo };

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
                            {videos.map((item, i) => (
                                <div
                                    key={i}
                                    className="aspect-[4/3] bg-surface relative group overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={item.poster}
                                        alt={`Video ${i + 1}`}
                                        className="ju-reveal w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                        <PlayCircle className="w-10 h-10 text-white/90 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300 stroke-[1]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Embedded YouTube Video */}
                    <div className="relative flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-[600px] overflow-hidden rounded-xl shadow-2xl">
                            {/* YouTube Embed */}
                            <div className="relative w-full aspect-video">
                                <iframe
                                    src="https://www.youtube.com/embed/I8id3VY7Vdg?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1"
                                    title="Drone Action"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full rounded-xl pointer-events-none"
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
