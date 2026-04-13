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
                            They really are a scream the Addams Family! Their house is a museum where people come to see 'em. They really are a addams family.
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

                    {/* Right Column - Video Section */}
                    <div className="relative group flex items-center justify-center">
                        {/* 
                            Container for the video block. 
                            Uses dark background to match the page, and the poster image overlaid.
                        */}
                        <div className="relative w-full aspect-square max-w-[600px] overflow-hidden bg-transparent">
                            {/* Poster Image with Bottom Fade */}
                            <div className="absolute inset-0 bottom-32">
                                <img
                                    src={droneImage}
                                    className="ju-reveal w-full h-full object-cover opacity-60"
                                    alt="Video Poster"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b0f1a] to-transparent"></div>
                            </div>

                            {/* Technical Frame removed for a cleaner look */}

                            {/* Centered Content */}
                            <div className="relative w-full h-full flex flex-col justify-between items-center z-20">

                                {/* Play Button Area (shifted up slightly) */}
                                <div className="flex-1 flex items-center justify-center w-full relative -top-8">
                                    <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center bg-transparent cursor-pointer hover:bg-white/10 transition-colors group">
                                        <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-white ml-1 group-hover:scale-110 transition-transform"></div>
                                    </div>
                                    <video
                                        src={droneVideo}
                                        className="absolute inset-0 w-0 h-0 opacity-0" // hidden video to prevent layout breaking but exist for interactivity if added later
                                        controls
                                    />
                                </div>

                                {/* Text sitting perfectly on the gap of the bottom frame border */}
                                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full text-center">
                                    <h2 className="ju-reveal text-2xl font-black text-white mb-4 tracking-wide uppercase inline-block bg-[#0b0f1a] px-4 -translate-y-6">
                                        Drone Action
                                    </h2>
                                    <p className="ju-reveal text-slate-400 text-sm max-w-xs mx-auto font-light leading-relaxed">
                                        And we'll do it our way yes our way. Make all our dreams come true me and you.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GalleryVideo;
