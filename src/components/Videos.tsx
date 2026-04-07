import React, { useState } from 'react';
import { Youtube, Play, Eye, Clock, TrendingUp, ExternalLink } from 'lucide-react';

// Helper component for a single video card
const VideoCard = ({ videoId, title, description, views, duration, featured }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-400/20 ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 bg-orange-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          <TrendingUp className="w-3 h-3" />
          <span>FEATURED</span>
        </div>
      )}

      {/* Video Container */}
      <div className={`relative ${featured ? 'h-96' : 'h-64'} overflow-hidden`}>
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}${isHovered ? '?autoplay=0' : ''}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Overlay with play icon (hidden when hovered) */}
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration Badge */}
        {duration && (
          <div className="absolute bottom-4 right-4 z-10 flex items-center space-x-1 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-semibold">
            <Clock className="w-3 h-3" />
            <span>{duration}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-gray-900/95 backdrop-blur-sm">
        <h3 className={`font-bold text-white mb-2 group-hover:text-orange-400 transition-colors ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Stats Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center space-x-1 text-gray-500 text-xs">
            <Eye className="w-4 h-4" />
            <span>{views || '1.2K'} views</span>
          </div>
          <a 
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors"
          >
            <span>Watch</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const Videos = () => {
  const videoData = [
    {
      videoId: "_EaZ3xg4thI",
      title: "Competition Flight Highlights 2024",
      description: "Watch our UAV perform autonomous tasks at the latest competition, showcasing precision navigation and mission execution.",
      views: "2.5K",
      duration: "5:42",
      featured: true
    },
    {
      videoId: "N1-3eb-vTw0",
      title: "Project Ikar: First Flight Test",
      description: "The successful maiden flight of our Project Ikar research platform with autonomous capabilities.",
      views: "1.8K",
      duration: "3:15",
      featured: false
    },
    {
      videoId: "N1-3eb-vTw0",
      title: "Advanced Navigation System Demo",
      description: "Demonstrating our AI-powered navigation system in real-world conditions.",
      views: "1.2K",
      duration: "4:30",
      featured: false
    },
    {
      videoId: "_EaZ3xg4thI",
      title: "Team Behind The Scenes",
      description: "Meet the team and see how we design, build, and test our innovative UAVs.",
      views: "3.1K",
      duration: "6:20",
      featured: false
    },
  ];

  const stats = [
    { label: 'Total Videos', value: '24+', icon: Play },
    { label: 'Flight Hours', value: '100+', icon: Clock },
    { label: 'Total Views', value: '50K+', icon: Eye },
    { label: 'Subscribers', value: '2.5K+', icon: TrendingUp }
  ];

  return (
    <section id="videos" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full text-red-400 text-sm font-semibold mb-6">
            <Youtube className="w-4 h-4" />
            <span>Video Gallery</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Flight <span className="text-orange-400">Videos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See our UAVs in action! Watch highlights from test flights, competitions, and behind-the-scenes development.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-orange-400/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-400/10 rounded-full mb-3">
                <stat.icon className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {videoData.map((video, index) => (
            <VideoCard
              key={index}
              videoId={video.videoId}
              title={video.title}
              description={video.description}
              views={video.views}
              duration={video.duration}
              featured={video.featured}
            />
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="relative bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <Youtube className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Want More Content?
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our YouTube channel for exclusive flight tests, tutorials, and behind-the-scenes content!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <Youtube className="mr-3 w-6 h-6" />
                <span>Visit Our Channel</span>
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-800 border-2 border-white/30 text-white font-bold rounded-full hover:bg-red-900 transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                <span>Watch Playlist</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;