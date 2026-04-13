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
import meeting_1 from "../assets/gallery/meeting_1.jpg";
import meeting_2 from "../assets/gallery/meeting_2.jpg";
import ramadan from "../assets/gallery/ramadan.jpeg";
import team from "../assets/gallery/team.jpeg";



const galleryItems = [
  {
    image: img1,
    title: "Drone 3D Design",
    description: "Building the carbon fiber frame.",
  },
  {
    image: img2,
    title: "Drone Engine ",
    description: "Long Range Drone Engine.",
  },
  {
    image: img3,
    title: "Multifunctional Long range Drone",
    description: "Long rang multifunctional drone.",
  },
  {
    image: img4,
    title: "VTOL",
    description: "3D-printed VTOL drone design.",
  },
  {
    image: img5,
    title: "Cinewhoop",
    description: "For high-speed indoor FPV drone & Video Graphy",
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
    title: "FIxed Wing",
    description: "Long-range Customize fixed wing.",
  },
  {
    image: img9,
    title: "Engine",
    description: "Customize Drone Engine.",
  },
{
  image: meeting_1,
  title: "Training Session",
  description: "Our director is conducting a hands-on session with our interns.",
},

{
  image: meeting_2,
  title: "Mentorship Session",
  description: "Our mentor is guiding and sharing insights with the interns during a focused learning session.",
},

{
  image: ramadan,
  title: "Annual Iftar Gathering",
  description: "Our team came together for an annual iftar, sharing moments of unity, reflection, and celebration.",
},

{
  image: team,
  title: "Annual Team Meeting",
  description: "An annual team meeting where members discussed progress, goals, and future plans collaboratively.",
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
        <h1 className="ju-reveal text-4xl sm:text-5xl font-bold">Photo Gallery</h1>

        {/* Gradient underline */}
        <div className="w-32 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary"></div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-surface/40 backdrop-blur-md p-3 rounded-xl border border-white/5 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Square Image */}
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="ju-reveal w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title + Description */}
            <h3 className="ju-reveal mt-3 text-lg font-semibold text-primary">
              {item.title}
            </h3>
            <p className="ju-reveal text-gray-400 text-sm mt-1">{item.description}</p>
          </div>
        ))}
        </div>
      </div>
  );
};

export default Gallery;
