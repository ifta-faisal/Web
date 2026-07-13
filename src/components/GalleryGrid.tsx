import React from 'react';
import { Link } from 'react-router-dom';

// Import images from assets
import img1 from "../assets/gallery/drone.png";
import img2 from '../assets/gallery/Engine1.jpeg';
import img3 from "../assets/gallery/drone2.jpeg";
import img4 from '../assets/gallery/drone3.jpeg';
import img5 from '../assets/gallery/project5.jpeg';
import img6 from '../assets/gallery/Vitol_1.jpeg';
import img7 from '../assets/gallery/project2.jpeg';
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

const row1 = [
  { image: img1,      title: "Drone 3D Design" },
  { image: img2,      title: "Drone Engine" },
  { image: img3,      title: "Long Range Drone" },
  { image: img4,      title: "Autonomous Drone" },
  { image: meeting_1, title: "Training Session" },
  { image: meeting_2, title: "Mentorship Session" },
  { image: b1, title: "Field Test at UIU" },
  { image: b2, title: "Drone on Field" },
  { image: b8, title: "Project Raven" },
  { image: b9, title: "Flight Preparation" },
];

const row2 = [
  { image: img5,      title: "FPV practice" },
  { image: img6,      title: "VTOL design" },
  { image: img7,      title: "Cinewhoop drone" },
  { image: img8,      title: "Fixed Wing custom" },
  { image: img9,      title: "Engine module" },
  { image: ramadan,   title: "Iftar Gathering" },
  { image: team,      title: "Team Meeting" },
  { image: b3, title: "Flight Test" },
  { image: b4, title: "UIU Campus Flight" },
  { image: b5, title: "Sky Flight" },
  { image: b10, title: "Team Inspection" },
  { image: b11, title: "Field Operation" },
];

/* Duplicate arrays so the marquee loops seamlessly */
const track1 = [...row1, ...row1];
const track2 = [...row2, ...row2];

const GalleryGrid = () => {
  return (
    <section className="bg-transparent w-full overflow-hidden py-2 relative">
      
      {/* ── Row 1 → slides LEFT ── */}
      <div className="gallery-marquee-row gallery-edge-fade overflow-hidden mb-4 relative z-10 w-full">
        <div className="gallery-marquee-track-left">
          {track1.map((item, i) => (
            <Link
              to="/gallery"
              className="gallery-card-marquee block"
              key={i}
              style={{ background: '#0d0b0a' }}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="gallery-card-caption">
                <h3 style={{ fontFamily: "'Inter', sans-serif" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif" }}>Click to view full photo gallery</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Row 2 → slides RIGHT ── */}
      <div className="gallery-marquee-row gallery-edge-fade overflow-hidden relative z-10 w-full">
        <div className="gallery-marquee-track-right">
          {track2.map((item, i) => (
            <Link
              to="/gallery"
              className="gallery-card-marquee block"
              key={i}
              style={{ background: '#0d0b0a' }}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="gallery-card-caption">
                <h3 style={{ fontFamily: "'Inter', sans-serif" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif" }}>Click to view full photo gallery</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
