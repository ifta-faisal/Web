import React, { useState } from "react";
import { Rocket, Zap, MapPin, Eye, ChevronRight, Calendar, Award, ArrowLeft, Users, Video } from "lucide-react";
import { useSearchParams } from 'react-router-dom';
import BackToHome from './BackToHome';

// ===== Import Local Images =====
// Moved to src/data/projectsData.ts
import { projectsData } from '../data/projectsData';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const targetId = searchParams.get('id');
  const isFocused = !!targetId;

  const projects = projectsData;

  const categories = [
    { id: 'top', name: 'Top Projects' },
    { id: 'all', name: 'All Projects' },
  ];

  const filteredProjects = targetId
    ? projects.filter(project => project.id === parseInt(targetId))
    : selectedCategory === 'top'
      ? projects.filter(project => project.isLatest || project.status === 'Active')
      : selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':    return 'bg-green-500';
      case 'Testing':   return 'bg-primary';
      case 'Completed': return 'bg-primary';
      default:          return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 relative overflow-hidden bg-transparent">
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BackToHome />
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

        {/* ── Filter Bar ── */}
        <div className="mb-10 sm:mb-14">
          {!isFocused ? (
            <div>
              {/* Divider + Filter label row */}
              <div className="flex flex-wrap gap-2 items-center pt-2 border-t border-white/5 mb-1">
                <div className="flex items-center gap-2 mr-2 text-slate-500 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="4" x2="7" y2="4"/><line x1="17" y1="12" x2="3" y2="12"/><line x1="15" y1="20" x2="3" y2="20"/><circle cx="5" cy="4" r="2"/><circle cx="21" cy="12" r="2"/><circle cx="19" cy="20" r="2"/></svg>
                  Filter:
                </div>
                {categories.map((cat) => {
                  const active = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      style={{
                        padding: '0.45rem 1.1rem',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.10em',
                        textTransform: 'uppercase',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.25s',
                        border: active ? '1px solid rgba(249,115,22,0.5)' : '1px solid rgba(255,255,255,0.1)',
                        background: active ? 'linear-gradient(135deg, #f97316, #dc2626)' : 'rgba(255,255,255,0.02)',
                        color: active ? '#fff' : '#94a3b8',
                        transform: active ? 'scale(1.05)' : 'scale(1)',
                        boxShadow: active ? '0 4px 14px rgba(249,115,22,0.25)' : 'none',
                      }}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>

              {/* Live count */}
              <p className="text-right text-xs text-slate-500 tracking-widest uppercase mt-2 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={() => setSearchParams({})}
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all font-bold tracking-widest uppercase text-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                Show All Projects
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group block bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 sm:hover:-translate-y-2"
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
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col items-end gap-1.5">
                  <div className="flex items-center space-x-1 bg-primary/20 backdrop-blur-sm border border-primary/30 px-2 py-1 rounded text-primary text-[9px] sm:text-xs font-semibold">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                  {project.isLatest && (
                    <div
                      className="flex items-center gap-1 px-2 py-1 rounded text-[9px] sm:text-xs font-bold tracking-wide"
                      style={{
                        background: 'linear-gradient(135deg, #f97316, #dc2626)',
                        color: '#fff',
                        boxShadow: '0 0 12px rgba(249,115,22,0.7)',
                        animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
                      }}
                    >
                      ✦ LATEST
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                {/* Video Icon */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary/90 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>
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
            </Link>
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
