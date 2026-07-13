import React from "react";
import { Eye } from 'lucide-react';

// Import images from assets
import img1 from "../assets/gallery/drone.png";
import img2 from "../assets/gallery/Engine1.jpeg";
import img3 from "../assets/gallery/drone2.jpeg";
import img4 from "../assets/gallery/Vitol_1.jpeg";
import img5 from "../assets/gallery/project2.jpeg";
import img6 from "../assets/gallery/project3.jpeg";
import img7 from "../assets/gallery/project5.jpeg";
import img8 from "../assets/gallery/project7.jpeg";
import img9 from "../assets/gallery/Engine2.jpeg";
import meeting_1 from "../assets/gallery/meeting_1.jpg";
import meeting_2 from "../assets/gallery/meeting_2.jpg";
import ramadan from "../assets/gallery/ramadan.jpeg";
import team from "../assets/gallery/team.jpeg";
import b1 from "../assets/gallery/B1.jpeg";
import b2 from "../assets/gallery/B2.jpeg";
import b3 from "../assets/gallery/B3.jpg";
import b4 from "../assets/gallery/B4.jpg";
import b5 from "../assets/gallery/B5.jpg";
import b8 from "../assets/images/Project/B8.jpg";
import b9 from "../assets/images/Project/B9.jpg";
import b10 from "../assets/images/Project/B10.jpg";
import b11 from "../assets/images/Project/B11.jpg";

const galleryItems = [
  {
    image: img1,
    title: "Drone 3D Design",
    description: "Building the carbon fiber frame.",
  },
  {
    image: img2,
    title: "Drone Engine",
    description: "Long Range Drone Engine.",
  },
  {
    image: img3,
    title: "Long Range Drone",
    description: "Long range multifunctional drone.",
  },
  {
    image: img4,
    title: "VTOL",
    description: "3D-printed VTOL drone design.",
  },
  {
    image: img5,
    title: "Cinewhoop",
    description: "For high-speed indoor FPV drone & Video Graphy.",
  },
  {
    image: img6,
    title: "Mario 8",
    description: "Compact FPV long range drone.",
  },
  {
    image: img7,
    title: "FPV",
    description: "FPV drone for flying practice.",
  },
  {
    image: img8,
    title: "Fixed Wing",
    description: "Long-range customized fixed wing.",
  },
  {
    image: img9,
    title: "Engine",
    description: "Customized Drone Engine.",
  },
  {
    image: meeting_1,
    title: "Training Session",
    description: "Our director is conducting a hands-on session with our interns.",
  },
  {
    image: meeting_2,
    title: "Mentorship Session",
    description: "Our mentor is guiding and sharing insights with the interns.",
  },
  {
    image: ramadan,
    title: "Annual Iftar Gathering",
    description: "Our team came together for an annual iftar, sharing moments of unity.",
  },
  {
    image: team,
    title: "Annual Team Meeting",
    description: "An annual team meeting where members discussed progress and goals.",
  },
  {
    image: b1,
    title: "Field Test at UIU",
    description: "Drone test flight near UIU campus.",
  },
  {
    image: b2,
    title: "Drone on Field",
    description: "Preparing for takeoff on the field.",
  },
  {
    image: b3,
    title: "Flight Test",
    description: "Drone flying near the building.",
  },
  {
    image: b4,
    title: "UIU Campus Flight",
    description: "Drone hovering near UIU building.",
  },
  {
    image: b5,
    title: "Sky Flight",
    description: "Drone soaring high in the sky.",
  },
  {
    image: b8,
    title: "Project Raven",
    description: "Raven on the grassy field.",
  },
  {
    image: b9,
    title: "Flight Preparation",
    description: "Preparing Raven drone for flight.",
  },
  {
    image: b10,
    title: "Team Inspection",
    description: "Team inspecting the drone setup.",
  },
  {
    image: b11,
    title: "Field Operation",
    description: "Operating the drone in the field.",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDelay: '2s' }} />



      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold mb-4">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          Photo Gallery
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold">
          Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Moments</span>
        </h1>

        {/* Gradient underline */}
        <div className="w-32 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary"></div>
      </div>

      {/* Gallery Grid - same style as GalleryGrid on the homepage */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="w-full aspect-video relative group overflow-hidden rounded-xl border border-white/5 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            style={{ background: '#0d0b0a' }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="ju-reveal w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              loading="lazy"
            />

            {/* Hover overlay — gradient + icon + detailed texts (same hover interaction as hero GalleryGrid) */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center p-4 text-center pointer-events-none z-10"
              style={{ background: 'linear-gradient(to top, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.6) 60%, transparent 100%)' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transform scale-50 group-hover:scale-100 transition-transform duration-400"
                style={{ background: 'rgba(249,115,22,0.25)', border: '1px solid rgba(249,115,22,0.6)', backdropFilter: 'blur(8px)' }}
              >
                <Eye className="w-5 h-5 stroke-[1.5] text-white" />
              </div>
              <h3 className="text-white font-bold text-base mb-1 tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed max-w-[90%]" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.description}
              </p>
            </div>

            {/* Subtle inner accent border on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-20 rounded-xl"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(249,115,22,0.4)' }}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Gallery;
