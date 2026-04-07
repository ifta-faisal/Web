import React from "react";
import img1 from "../assets/images/drone1.jpeg";
import img2 from "../assets/images/drone2.jpeg";
import img3 from "../assets/images/drone3.jpeg";

const DetailedFeatures = () => {
  const features = [
    "Lightweight carbon fiber frame designed for durability",
    "AI-powered flight navigation and stability algorithms",
    "Obstacle avoidance system with real-time sensor fusion",
    "Modular payload support for multiple missions",
    "Telemetry system for long-range communication",
  ];

  return (
    <section className="py-20 bg-transparent text-white min-h-screen px-6">

      {/* === Title === */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">Detailed Features</h1>
        <div className="w-28 h-2 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 mx-auto"></div>
      </div>

      {/* === Photos Section === */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        <img src={img1} alt="drone1" className="rounded-xl shadow-lg" />
        <img src={img2} alt="drone2" className="rounded-xl shadow-lg" />
        <img src={img3} alt="drone3" className="rounded-xl shadow-lg" />
      </div>

      {/* === Features Section === */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold mb-2">Key Features</h2>
        <div className="w-28 h-2 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 mx-auto"></div>
      </div>

      <ul className="max-w-3xl mx-auto space-y-3 text-lg text-slate-300">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-orange-400 text-xl">-</span>
            {f}
          </li>
        ))}
      </ul>

      {/* === Outcome Section === */}
      <div className="text-center mt-16 mb-6">
        <h2 className="text-3xl font-semibold mb-2">Outcome</h2>
        <div className="w-28 h-2 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 mx-auto"></div>
      </div>

      <p className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
        The developed drone system achieves significant improvements in both
        performance and reliability. Its optimized aerodynamics and stable flight
        algorithms ensure smoother operation even in challenging environments.
        Advanced sensor fusion enhances obstacle detection accuracy, resulting in
        safer and more efficient navigation. The system also delivers better
        mapping precision, enabling the drone to capture clearer environmental
        data for mission analysis. With increased flight endurance, improved
        control responsiveness, and stronger communication links, the overall
        mission success rate is greatly enhanced, providing users with a highly
        dependable and capable aerial platform.
      </p>
    </section>
  );
};

export default DetailedFeatures;
