import React from 'react';
import { Link } from 'react-router-dom';

// import img2 from '../assets/gallery/Engine1.jpeg';
// import img3 from "../assets/gallery/drone2.jpeg";
// import img4 from '../assets/gallery/drone3.jpeg';
// import img5 from '../assets/gallery/project5.jpeg';
// import img6 from '../assets/gallery/Vitol_1.jpeg';
// import img7 from '../assets/gallery/project2.jpeg';
// import img8 from "../assets/gallery/project7.jpeg";
// import img9 from "../assets/gallery/Engine2.jpeg";
import meeting_1 from "../assets/gallery/meeting_1.jpg";
import meeting_2 from "../assets/gallery/meeting_2.jpg";
import ramadan from "../assets/gallery/ramadan.jpeg";
import team from "../assets/gallery/team.jpeg";
import b1 from "../assets/gallery/B1.jpeg";
import b2 from "../assets/gallery/B2.jpeg";
import b3 from "../assets/gallery/B3.jpg";
import b4 from "../assets/gallery/B4.jpg";
import b5 from "../assets/gallery/B5.jpg";
import b8 from "../assets/images/Project/Raven1.0/B8.jpg";
import b9 from "../assets/images/Project/Raven1.0/B9.jpg";
import b10 from "../assets/images/Project/Raven1.0/B10.jpg";
import b11 from "../assets/images/Project/Raven1.0/B11.jpg";
import b14 from "../assets/images/Project/Raven1.0/B14.jpeg";
// import aether1 from "../assets/images/Project/Aether/Aether_1.jpg";
// import aether2 from "../assets/images/Project/Aether/Aether_2.jpg";
// import aether3 from "../assets/images/Project/Aether/Aether_3.jpg";
// import aether4 from "../assets/images/Project/Aether/Aether_4.jpg";
// import aether5 from "../assets/images/Project/Aether/Aether_5.jpg";
import b6 from "../assets/images/Project/Raven1.0/B6.jpg";
import b7 from "../assets/images/Project/Raven1.0/B7.jpg";
import b12 from "../assets/images/Project/Raven1.0/B12.jpg";
import d1 from "../assets/images/Project/ThunderBird/D_1.jpg";
import d2 from "../assets/images/Project/ThunderBird/D_2.jpg";
import d3 from "../assets/images/Project/ThunderBird/D_3.jpg";
import d4 from "../assets/images/Project/ThunderBird/D_4.jpg";
import d5 from "../assets/images/Project/ThunderBird/D_5.jpg";
import d6 from "../assets/images/Project/ThunderBird/D_6.jpg";
import d7 from "../assets/images/Project/ThunderBird/D_7.jpg";
import d8 from "../assets/images/Project/ThunderBird/D_8.jpg";
import d9 from "../assets/images/Project/ThunderBird/D_9.jpg";
import d10 from "../assets/images/Project/ThunderBird/D_10.jpg";

const row1 = [
  // { image: img2,      title: "Drone Engine" },
  // { image: img3,      title: "Long Range Drone" },
  // { image: img4,      title: "Autonomous Drone" },
  { image: b14, title: "Raven 1.0 Operations" },
  { image: d10, title: "Night Flight" },
  { image: b1, title: "Field Test at UIU" },
  { image: b2, title: "Drone on Field" },
  { image: b8, title: "Project ThunderBird" },
  { image: b9, title: "Flight Preparation" },
  // { image: aether1, title: "Project Aether" },
  // { image: aether2, title: "Aether Setup" },
  // { image: aether3, title: "Aether Ready" },
  // { image: aether4, title: "Aether Flight" },
  // { image: aether5, title: "Aether Display" },
  { image: b6, title: "ThunderBird Hardware" },
  { image: b7, title: "ThunderBird Testing" },
  { image: b12, title: "ThunderBird Showcase" },
  { image: d1, title: "Prototype Testing" },
  { image: d2, title: "ThunderBird Prototype" },
];

const row2 = [
  // { image: img5,      title: "FPV practice" },
  // { image: img6,      title: "VTOL design" },
  // { image: img7,      title: "Cinewhoop drone" },
  // { image: img8,      title: "Fixed Wing custom" },
  // { image: img9,      title: "Engine module" },
  { image: ramadan,   title: "Iftar Gathering" },
  { image: team,      title: "Team Meeting" },
  { image: b3, title: "Flight Test" },
  { image: b4, title: "UIU Campus Flight" },
  { image: b5, title: "Sky Flight" },
  { image: b10, title: "Team Inspection" },
  { image: b11, title: "Field Operation" },
  { image: d3, title: "Prototype Field Test" },
  { image: d4, title: "Prototype Prep" },
  { image: d5, title: "Prototype Formation" },
  { image: d6, title: "Prototype Flight" },
  { image: d7, title: "Prototype Action" },
  { image: d8, title: "Prototype Mission" },
  { image: d9, title: "Prototype Test" },
  { image: d10, title: "Prototype Close-up" },
];

const allImages = [...row1, ...row2];

const GalleryGrid = () => {
  return (
    <section className="bg-transparent w-full py-8 px-4 sm:px-6 relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {allImages.slice(0, 8).map((item, i) => (
          <Link
            to="/gallery"
            className="w-full aspect-video relative group overflow-hidden rounded-xl border border-white/5 hover:border-primary/30 shadow-lg transition-all duration-300"
            key={i}
            style={{ background: '#0d0b0a' }}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <Link
          to="/gallery"
          className="inline-block px-6 py-2.5 rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/30 hover:bg-[#f97316]/20 hover:border-[#f97316]/50 transition-all font-semibold"
        >
          See More Images
        </Link>
      </div>
    </section>
  );
};

export default GalleryGrid;
