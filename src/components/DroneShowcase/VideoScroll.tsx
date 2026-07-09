import React from 'react';
import droneVideo from '../../assets/video/Drone_Details.mp4';

interface VideoScrollProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

export const VideoScroll: React.FC<VideoScrollProps> = ({ videoRef }) => {
  return (
    <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#050505]">
      {/* 
        We use playsInline and muted to allow background rendering and 
        prevent mobile browsers from hijacking the video. 
      */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        src={droneVideo}
        playsInline
        muted
        preload="auto"
      />
      
      {/* Subtle overlay for better text readability and cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      
      {/* Grid overlay for a futuristic feel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};
