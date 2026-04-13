import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

import team from "../assets/gallery/team.jpeg";
import img2 from '../assets/gallery/Engine1.jpeg';
import meeting_1 from "../assets/gallery/meeting_1.jpg";
import img4 from '../assets/gallery/drone3.jpeg';
import img5 from '../assets/gallery/project5.jpeg';
import img6 from '../assets/gallery/Vitol_1.jpeg';
import img7 from '../assets/gallery/project2.jpeg';
import ramadan from "../assets/gallery/ramadan.jpeg";

const images = [team, img2, meeting_1, img4, img5, img6, img7, ramadan];

const GalleryGrid = () => {
  return (
    <section className="bg-transparent w-full overflow-hidden">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {images.map((src, i) => {
          const delay = i * 80;
          return (
            <Link
              to="/gallery"
              key={i}
              className="w-full aspect-video relative group overflow-hidden block"
              style={{ background: '#0d0b0a' }}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="ju-reveal w-full h-full object-cover transition-transform duration-700 ease-spring group-hover:scale-110"
                style={{ transitionDelay: `${delay}ms` }}
                loading="lazy"
              />

              {/* Hover overlay — gradient + icon + label */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(17,15,14,0.85) 0%, rgba(17,15,14,0.4) 50%, transparent 100%)' }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-2 transform scale-50 group-hover:scale-100 transition-transform duration-400"
                  style={{ background: 'rgba(192,86,42,0.25)', border: '1px solid rgba(192,86,42,0.6)', backdropFilter: 'blur(8px)' }}
                >
                  <Plus className="w-5 h-5 stroke-[1.5]" style={{ color: '#fff' }} />
                </div>
                <span className="text-white/70 text-xs tracking-widest uppercase font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  View Gallery
                </span>
              </div>

              {/* Subtle border on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(192,86,42,0.3)' }}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default GalleryGrid;
