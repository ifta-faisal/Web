import React, { useState } from "react";
import { Rocket, Zap, MapPin, Eye, ChevronRight, Calendar, Award, ArrowLeft, Users } from "lucide-react";
import { useSearchParams } from 'react-router-dom';
import BackToHome from './BackToHome';

// ===== Import Local Images =====
import project1 from "../assets/images/Project/project1.jpeg";
import project2 from "../assets/images/Project/project2.jpeg";
import project3 from "../assets/images/Project/project3.jpeg";
import project4 from "../assets/images/Project/project4.jpeg";
import project5 from "../assets/images/Project/project5.jpeg";
import project6 from "../assets/images/Project/project6.jpeg";
import project7 from "../assets/images/Project/project7.jpeg";
import project8 from "../assets/images/Project/project8.jpeg";
import project9 from "../assets/images/drone2.jpeg";

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const targetId = searchParams.get('id');
  const isFocused = !!targetId;

  const projects = [
    {
      id: 1,
      name: "Endurance UAV",
      description: "A high-performance UAV designed for endurance missions.",
      image: project1,
      category: "research",
      year: "2024",
      status: "Active",
      tags: ["Mapping", "Autonomous"]
    },
    {
      id: 2,
      name: "Racing Drone",
      description: "Compact and efficient aerial system for research purposes.",
      image: project2,
      category: "research",
      year: "2024",
      status: "Active",
      tags: ["Racing", "Video Graphy"]
    },
    {
      id: 3,
      name: "Long Range Drone",
      description: "Autonomous mapping drone with advanced navigation.",
      image: project3,
      category: "mapping",
      year: "2023",
      status: "Completed",
      tags: ["AI Navigation", "Long Range"]
    },
    {
      id: 4,
      name: "Customize Dead Cat",
      description: "Lightweight drone built for environmental monitoring.",
      image: project4,
      category: "environmental",
      year: "2024",
      status: "Active",
      tags: ["Environmental", "Monitoring"]
    },
    {
      id: 5,
      name: "Surveillance UAV",
      description: "Experimental VTOL platform for vertical take-off operations.",
      image: project5,
      category: "experimental",
      year: "2023",
      status: "Testing",
      tags: ["Long Range", "Experimental"]
    },
    {
      id: 6,
      name: "Defensive Drone",
      description: "AI-integrated drone for real-time data processing.",
      image: project6,
      category: "ai",
      year: "2024",
      status: "Active",
      tags: ["AI", "Real-time"]
    },
    {
      id: 7,
      name: "Fixed Wing ",

      description: "Fixed-wing UAV optimized for long-range surveillance.",
      image: project7,
      category: "surveillance",
      year: "2023",
      status: "Completed",
      tags: ["Fixed-wing", "Surveillance"]
    },
    {
      id: 8,
      name: "Workshop",
      description: "UART member taking Workshop about UAV.",
      image: project8,
      category: "Workshop",
      year: "2024",
      status: "Testing",
      tags: ["Competition", "Prototype"]
    },
    {
      id: 9,
      name: "Multifunctional Long range Drone",
      description: "Compact prototype drone for competition testing.",
      image: project9,
      category: "Rescue",
      year: "2025",
      status: "Completed",
      tags: ["Rescue", "Long Range"]
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Rocket },
    { id: 'research', name: 'Research', icon: Eye },
    { id: 'competition', name: 'Competition', icon: Award },
    { id: 'ai', name: 'AI Systems', icon: Zap },
  ];

  const filteredProjects = targetId 
    ? projects.filter(project => project.id === parseInt(targetId))
    : (selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory));

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'Testing': return 'bg-primary';
      case 'Completed': return 'bg-primary';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-transparent">
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1 sm:py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Our Innovation Lab</span>
          </div>
          <h2 className="ju-reveal text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="ju-reveal text-sm sm:text-lg text-gray-300 max-w-xl sm:max-w-3xl mx-auto leading-relaxed">
            Showcasing our innovative drone projects designed for research,
            competition, and real-world applications.
          </p>
        </div>

        {/* Category Filter / Focus Back Button */}
        <div className="flex justify-center mb-8 sm:mb-12">
          {!isFocused ? (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-primary text-gray-900 shadow-lg shadow-primary/50'
                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 border border-gray-700 hover:border-primary/50 hover:text-primary'
                    }`}
                >
                  <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          ) : (
            <button
              onClick={() => setSearchParams({})}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all font-bold tracking-widest uppercase text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              Show All Projects
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="ju-reveal w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>

                {/* Status Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center space-x-1 sm:space-x-2">
                  <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${getStatusColor(project.status)} animate-pulse`}></div>
                  <span className="text-[9px] sm:text-xs font-bold text-white bg-black/50 backdrop-blur-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                    {project.status}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="flex items-center space-x-1 bg-primary/20 backdrop-blur-sm border border-primary/30 px-2 py-1 rounded text-primary text-[9px] sm:text-xs font-semibold">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-5">
                <h3 className="ju-reveal text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="ju-reveal text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[8px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-700/50 text-gray-300 rounded border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#f97316] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-20 pt-12 sm:pt-16 border-t border-gray-700">
          {[
            { label: 'Total Projects', value: projects.length, icon: Rocket },
            { label: 'Active Projects', value: projects.filter(p => p.status === 'Active').length, icon: Zap },
            { label: 'Completed', value: projects.filter(p => p.status === 'Completed').length, icon: Award },
            { label: 'In Testing', value: projects.filter(p => p.status === 'Testing').length, icon: Eye }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full mb-2 sm:mb-3 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white mb-0.5 sm:mb-1">{stat.value}</div>
              <div className="text-[9px] sm:text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
