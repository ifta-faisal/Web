import React from 'react';
import { Link } from 'react-router-dom';

// import img2 from '../assets/gallery/Engine1.webp';
// import img3 from "../assets/gallery/drone2.webp";
// import img4 from '../assets/gallery/drone3.webp';
// import img5 from '../assets/gallery/project5.webp';
// import img6 from '../assets/gallery/Vitol_1.webp';
// import img7 from '../assets/gallery/project2.webp';
// import img8 from "../assets/gallery/project7.webp";
// import img9 from "../assets/gallery/Engine2.webp";
import meeting_1 from "../assets/gallery/meeting_1.webp";
import meeting_2 from "../assets/gallery/meeting_2.webp";
import ramadan from "../assets/gallery/ramadan.webp";
import team from "../assets/gallery/team.webp";
import b1 from "../assets/gallery/B1.webp";
import b2 from "../assets/gallery/B2.webp";
import b3 from "../assets/gallery/B3.webp";
import b4 from "../assets/gallery/B4.webp";
import b5 from "../assets/gallery/B5.webp";
import b8 from "../assets/images/Project/Raven1.0/B8.webp";
import b9 from "../assets/images/Project/Raven1.0/B9.webp";
import b10 from "../assets/images/Project/Raven1.0/B10.webp";
import b11 from "../assets/images/Project/Raven1.0/B11.webp";
import b14 from "../assets/images/Project/Raven1.0/B14.webp";
// import aether1 from "../assets/images/Project/Aether/Aether_1.webp";
// import aether2 from "../assets/images/Project/Aether/Aether_2.webp";
// import aether3 from "../assets/images/Project/Aether/Aether_3.webp";
// import aether4 from "../assets/images/Project/Aether/Aether_4.webp";
// import aether5 from "../assets/images/Project/Aether/Aether_5.webp";
import b6 from "../assets/images/Project/Raven1.0/B6.webp";
import b7 from "../assets/images/Project/Raven1.0/B7.webp";
import b12 from "../assets/images/Project/Raven1.0/B12.webp";
import d1 from "../assets/images/Project/ThunderBird/D_1.webp";
import d2 from "../assets/images/Project/ThunderBird/D_2.webp";
import d3 from "../assets/images/Project/ThunderBird/D_3.webp";
import d4 from "../assets/images/Project/ThunderBird/D_4.webp";
import d5 from "../assets/images/Project/ThunderBird/D_5.webp";
import d6 from "../assets/images/Project/ThunderBird/D_6.webp";
import d7 from "../assets/images/Project/ThunderBird/D_7.webp";
import d8 from "../assets/images/Project/ThunderBird/D_8.webp";
import d9 from "../assets/images/Project/ThunderBird/D_9.webp";
import d10 from "../assets/images/Project/ThunderBird/D_10.webp";

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
            className="w-full aspect-video relative overflow-hidden rounded-xl border border-white/5 shadow-lg transition-all duration-300"
            key={i}
            style={{ background: '#0d0b0a' }}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </Link>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <Link
          to="/gallery"
          className="inline-block px-6 py-2.5 rounded-full bg-[#dc2626]/10 text-[#dc2626] border border-[#dc2626]/30 hover:bg-[#dc2626]/20 hover:border-[#dc2626]/50 transition-all font-semibold"
        >
          See More Images
        </Link>
      </div>
    </section>
  );
};

export default GalleryGrid;
