import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play, FileText, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {project.isLatest && (
            <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wider">
              Our Latest Vehicle
            </div>
          )}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 uppercase tracking-tight">
            {project.name}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light mb-8 max-w-2xl mx-auto">
            {project.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#details" className="px-8 py-3 bg-primary text-gray-900 font-bold rounded-full hover:bg-orange-500 transition-colors">
              Explore
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="details" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">

        {/* Description Section */}
        <div className="mb-20">
          <h4 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">About</h4>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase">The Design Philosophy</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            {project.longDescription || "This innovative drone platform pushes the boundaries of aerospace engineering. By integrating lightweight materials with state-of-the-art propulsion and navigation systems, we have created a vehicle capable of exceeding performance expectations in its category."}
          </p>
        </div>

        {/* Technical Specs */}
        {project.specs && project.specs.length > 0 && (
          <div id="techspecs" className="mb-20">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-10 uppercase border-l-4 border-primary pl-4">
              Technical Specs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.specs.map((spec, index) => (
                <div key={index} className="flex flex-col justify-center items-center px-6 py-3 bg-transparent border border-primary rounded text-white hover:bg-primary/10 transition-all">
                  <h4 className="text-gray-300 font-semibold uppercase tracking-wider text-xs mb-1 text-center">{spec.label}</h4>
                  <p className="text-white font-bold text-center">{spec.value}</p>
                </div>
              ))}
            </div>
            {project.docs && project.docs.length > 0 && (
              <div className="mt-8">
                <a href="#docs" className="inline-flex items-center gap-2 text-primary hover:text-orange-400 transition-colors font-bold group">
                  Want To Know Even More? <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Video / FRR Section */}
        {project.videoUrl && (
          <div className="mb-20">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-8 uppercase text-center">
              Watch Our Flight Readiness Review
            </h2>
            <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">Something exciting is on the horizon.</p>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-gray-700/50 group bg-gray-900/50">
              {project.videoUrl.includes('dQw4w9WgXcQ') ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <Play className="w-16 h-16 text-primary/30 mb-4" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Video Coming Soon</h3>
                  <p className="text-gray-400 max-w-md">This video is currently being updated and will be uploaded soon. Stay tuned!</p>
                </div>
              ) : (
                <iframe
                  src={`${project.videoUrl}${project.videoUrl.includes('?') ? '&' : '?'}autoplay=1&mute=1&rel=0`}
                  title={`${project.name} Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover"
                ></iframe>
              )}
            </div>
          </div>
        )}

        {/* Media Library */}
        {project.media && project.media.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-10 uppercase border-l-4 border-primary pl-4">
              Media Library
            </h2>
            {(() => {
              // Ensure we have a decent number of unique cards in our single loop sequence
              // so that the marquee fills the screen and loops nicely
              let sequence = [...project.media];
              while (sequence.length < 8) {
                sequence = [...sequence, ...project.media];
              }
              const marqueeImages = [...sequence, ...sequence];
              return (
                <div className="gallery-marquee-row gallery-edge-fade overflow-hidden relative z-10 w-full py-4">
                  <div className="gallery-marquee-track-left">
                    {marqueeImages.map((imgUrl, i) => {
                      const index = i % project.media.length;
                      return (
                        <div
                          key={i}
                          className="gallery-card-marquee block"
                          style={{ background: '#0d0b0a' }}
                        >
                          <img
                            src={imgUrl}
                            alt={`${project.name} Media ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Documentation Section */}
        {project.docs && project.docs.length > 0 && (
          <div id="docs" className="mb-20">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-10 uppercase text-center">
              Read Our Full Documentation!
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {project.docs.map((doc, index) => {
                const isInternal = doc.url.startsWith('/');
                const isPlaceholder = doc.url.startsWith('#');
                if (isInternal || isPlaceholder) {
                  return (
                    <Link
                      key={index}
                      to={doc.url}
                      className="flex items-center gap-2 px-6 py-2 bg-transparent border border-primary rounded text-white hover:bg-primary/10 transition-all"
                    >
                      <span className="font-semibold">{doc.title}</span>
                    </Link>
                  );
                }
                return (
                  <a
                    key={index}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-transparent border border-primary rounded text-white hover:bg-primary/10 transition-all"
                  >
                    <span className="font-semibold">{doc.title}</span>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                  </a>
                );
              })}
              {/* <Link to="/blog" className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white hover:border-primary hover:bg-primary/10 transition-all">
                <FileText className="w-5 h-5 text-primary" />
                <span className="font-semibold">Blogs!</span>
              </Link> */}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;
