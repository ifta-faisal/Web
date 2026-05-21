import React, { useState } from "react";
import { Rocket, Zap, MapPin, Eye, ChevronRight, Calendar, Award, ArrowLeft, Users, X, Play } from "lucide-react";
import { useSearchParams } from 'react-router-dom';
import BackToHome from './BackToHome';
import { projectsData } from '../data/projectsData';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [videoModal, setVideoModal] = useState<{ url: string; name: string } | null>(null);

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

  const handleVideoClick = (e: React.MouseEvent, project) => {
    if (project.videoUrl) {
      e.preventDefault();
      e.stopPropagation();
      setVideoModal({ url: project.videoUrl, name: project.name });
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
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-5">
                <h3 className="ju-reveal text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="ju-reveal text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>

                {/* Tags + YouTube Icon Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[8px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-700/50 text-gray-300 rounded border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* YouTube Icon */}
                  <div
                    onClick={(e) => handleVideoClick(e, project)}
                    title={project.videoUrl ? 'Watch project video' : 'No video available'}
                    className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all duration-300 shadow-md
                      ${project.videoUrl
                        ? 'bg-[#FF0000]/90 border-red-400/40 hover:bg-[#FF0000] hover:scale-110 cursor-pointer'
                        : 'bg-white/5 border-white/10 cursor-default opacity-40'
                      }`}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="white"/>
                      <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#FF0000"/>
                    </svg>
                  </div>
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

      {/* ── Video Modal ── */}
      {videoModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: 'rgba(2,6,23,0.92)', backdropFilter: 'blur(16px)' }}
          onClick={() => setVideoModal(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-black/60 border-b border-white/10">
              <div className="flex items-center gap-3">
                {/* YouTube Icon in header */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FF0000] rounded-md">
                  <svg viewBox="0 0 28 20" className="h-4 w-auto" fill="white">
                    <path d="M27.9727 3.12324C27.6435 1.89289 26.6768 0.926871 25.4464 0.597804C23.2043 0 14.2298 0 14.2298 0C14.2298 0 5.25527 0 3.01317 0.597804C1.78283 0.926871 0.816104 1.89289 0.486793 3.12324C0 5.36534 0 10.0075 0 10.0075C0 10.0075 0 14.6496 0.486793 16.8918C0.816104 18.1221 1.78283 19.0881 3.01317 19.4172C5.25527 20.015 14.2298 20.015 14.2298 20.015C14.2298 20.015 23.2043 20.015 25.4464 19.4172C26.6768 19.0881 27.6435 18.1221 27.9727 16.8918C28.4595 14.6496 28.4595 10.0075 28.4595 10.0075C28.4595 10.0075 28.4595 5.36534 27.9727 3.12324Z"/>
                    <path d="M11.4336 14.3173L18.8084 10.0075L11.4336 5.69775V14.3173Z" fill="#FF0000"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-sm uppercase tracking-wider">{videoModal.name}</span>
              </div>
              <button
                onClick={() => setVideoModal(null)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Video Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`${videoModal.url}?autoplay=1&rel=0`}
                title={videoModal.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
