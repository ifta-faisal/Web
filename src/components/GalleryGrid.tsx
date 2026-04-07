import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

import img1 from '../assets/gallery/drone1.jpeg';
import img2 from '../assets/gallery/Engine1.jpeg';
import img3 from '../assets/gallery/drone2.jpeg';
import img4 from '../assets/gallery/drone3.jpeg';
import img5 from '../assets/gallery/project5.jpeg';
import img6 from '../assets/gallery/Vitol_1.jpeg';
import img7 from '../assets/gallery/project2.jpeg';
import img8 from '../assets/gallery/project7.jpeg';

const GalleryGrid = () => {
    // 8 images exactly for the 4x2 grid layout
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <section className="bg-transparent w-full overflow-hidden">
            {/* Exactly 4 columns on desktop, 16:9 aspect blocks with no gaps */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                {images.map((src, i) => (
                    <Link
                        to="/gallery"
                        key={i}
                        className="w-full aspect-video bg-slate-100 relative group overflow-hidden cursor-pointer block"
                    >
                        <img
                            src={src}
                            alt={`Gallery image ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                        {/* Hover Overlay with precise thin Plus icon */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                            <Plus className="w-12 h-12 text-white/90 stroke-[1]" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default GalleryGrid;
