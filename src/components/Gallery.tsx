import React from "react";

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


const galleryItems = [
  {
    image: img1,
    title: "Drone 3D Design",
    description: "Building the carbon fiber frame.",
  },
  {
    image: img2,
    title: "Drone Engine ",
    description: "A long Range Drone Engine.",
  },
  {
    image: img3,
    title: "Multifunctional Long range Drone",
    description: "A long rang multifunctional drone.",
  },
  {
    image: img4,
    title: "VTOL",
    description: "Currently Working on this.",
  },
  {
    image: img5,
    title: "Cinewhoop",
    description: "High-speed indoor FPV drone & Video Graphy",
  },
  {
    image: img6,
    title: "Mario 8",
    description: "Compact FPV racing drone.",
  },
  {
    image: img7,
    title: "FPV",
    description: "FPV drone for flying practice.",
  },
  {
    image: img8,
    title: "FIxed Wing",
    description: "Long-range Customize drone.",
  },
  {
    image: img9,
    title: "Engine",
    description: "A Customize Drone Engine.",
  },

];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-transparent text-white py-20 px-6">

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold">Photo Gallery</h1>

        {/* Gradient underline */}
        <div className="w-32 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-600"></div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Square Image */}
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Title + Description */}
            <h3 className="mt-3 text-lg font-semibold text-orange-400">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
