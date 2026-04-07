import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import droneVideo from '../assets/video/Drone_Fotage_1.mp4';
import unitedGroupLogo from '../assets/images/united_group.png';
import uiuLogo from '../assets/images/UIU_Logo.png';
import droneImage from '../assets/images/drone.png';
import suaslogo from '../assets/images/suas.png';
import recruit1 from '../assets/images/Recruit1.jpeg';
import recruit2 from '../assets/images/Recruit2.jpeg';
import ua from '../assets/images/UA1.jpeg';
import soildwork from '../assets/images/solidworks.png';
import mathlab from '../assets/images/matlab.png';
import autodesk from '../assets/images/autodesk.png';

// Import New Sections
import DroneParts from './DroneParts';
import Achievements from './Achievements';
import MissionTimeline from './MissionTimeline';
import GalleryVideo from './GalleryVideo';
import GalleryGrid from './GalleryGrid';

const Hero = () => {
  const aboutStats = [
    { value: '8+', label: 'Years of Experience' },
    { value: '25+', label: 'Team Members' },
    { value: '6+', label: 'Completed Projects' },
    { value: '2+', label: 'Awards Won' },
  ];

  const whatWeDoCards = [
    { id: 1, title: "Designing High-Efficiency Aerial Platforms", description: "We design and build custom carbon fiber structures and aerodynamic composites for lightweight, durable, and performance-optimized aircraft." },
    { id: 2, title: "Intelligent Sensing and Environmental Awareness", description: "We integrate advanced sensors with onboard processing to enable real-time tracking, mapping, and situational understanding." },
    { id: 3, title: "Advanced Flight Control and Obstacle Avoidance", description: "We develop precise control algorithms that enhance flight stability, energy efficiency, and autonomous safety in dynamic environments." },
    { id: 4, title: "Modular Payload Systems and Functionality", description: "We design and test adaptable payload systems that expand mission capabilities and operational versatility." },
    { id: 5, title: "Custom Avionics and Control Solutions", description: "We build reliable, high-performance avionics systems to ensure seamless control, navigation, and mission execution." },
    { id: 6, title: "Driven by Innovation", description: "Innovation defines our approach — we continuously explore new ideas to push the boundaries of aerial robotics." }
  ];

  const sponsors = [
    { name: 'United Group', logo: unitedGroupLogo },
    { name: 'Sponsor 2', logo: uiuLogo },
     { name: 'Sponsor 3', logo: soildwork },
     { name: 'Sponsor 4', logo: mathlab },
     { name: 'Sponsor 5', logo: autodesk },
  ];

  const vehicleFeatures = [
    { text: 'Lightweight carbon fiber frame engineered for strength and endurance' },
    { text: 'Extended flight duration of up to 35 minutes per mission' },
    { text: 'AI-driven flight controller for intelligent navigation and stability' },
    { text: '2K HD camera with 2-axis gimbal for smooth and stable imaging' },
    { text: 'Real-time telemetry and video transmission over a 10km range' },
    { text: 'Modular architecture allowing customizable mission payloads' },
  ];

  // Recent Updates Carousel
  const achievements = [
    {
      id: 1,
      title: 'Recruiting',
      date: '12 November 2025',
      source: 'UART',
      description: 'We are looking For new Members.',
      link: '#',
      image: recruit1
    },
    {
      id: 2,
      title: 'Recruiting',
      date: '19 November 2025',
      source: 'UART',
      description: 'This is your last chance to join -24 HOURS LEFT',
      link: '#',
      image: recruit2
    },
    {
      id: 3,
      title: 'Meet UART',
      date: '28 November 2025',
      source: 'UART',
      description: 'A group of enthusiasts from UIU taking innovation to new heights.',
      link: '#',
      image: ua
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? achievements.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex(prev => (prev === achievements.length - 1 ? 0 : prev + 1));
  const goToSlide = (idx: number) => setCurrentIndex(idx);

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={droneVideo}
          autoPlay
          muted
          loop
          playsInline
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-6 tracking-tight">
              UIU Aerial
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 text-transparent bg-clip-text">
                {' '}
                Robotics Team
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light mb-8">
              United International University
            </p>

            <div className="space-y-3 mb-12">
              <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto">
                Student research team developing innovative UAVs for competitions and atmospheric research
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <button className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold text-base sm:text-lg rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50">
                  <span>OUR PROJECTS</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link to="/sponsor">
                <button className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-400 text-white font-semibold text-base sm:text-lg rounded-lg hover:bg-slate-700/50 hover:border-slate-300 transition-all duration-300 backdrop-blur-sm">
                  <span>Want to Sponsor Us?</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* 1. ===== About Section ===== */}
      <section id="about" className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-orange-500/20 border border-orange-400/50 rounded-full text-orange-300 text-sm font-semibold">
                About Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">About Us</h2>
            <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-orange-400 to-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Who We Are</h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                UIU Aerial Robotics Team was founded in 2024 by a group of engineering
                students with a passion for aerial robotics and UAV technologies. Our
                team has grown steadily and now includes members from a variety of
                engineering disciplines.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                We focus on developing autonomous UAV technologies for participation
                in both national and international competitions. Leveraging our skills
                and experience in robotics, we are also exploring innovative solutions
                and entrepreneurial opportunities in the field.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-xl p-4 sm:p-6 text-center hover:border-slate-500/80 transition duration-300">
                    <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text mb-2">
                      {stat.value}
                    </span>
                    <span className="text-sm sm:text-lg font-medium text-slate-300">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRIMARY OBJECTIVE SECTION */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-orange-500/20 border border-orange-400/50 rounded-full text-orange-300 text-sm font-semibold">
                Our Primary Objective
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Primary Objective
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-400 to-red-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-10 shadow-xl transition duration-300 group-hover:border-orange-500/60">
                <img
                  src={suaslogo}
                  alt="SUAS Logo"
                  className={`object-contain mx-auto w-56 h-56`}
                />
                <a
                  href="https://suas-competition.org/competitions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-8 py-3 mt-4 border-2 border-orange-400 text-orange-300 rounded-lg hover:bg-orange-500/20 transition-all duration-300 font-semibold"
                >
                  Visit SUAS Competition
                </a>
              </div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed md:text-xl">
              UART’s annual objective is to achieve top performance in the SUAS 2026 competition,
              the primary focus is on providing undergraduate students with an opportunity to apply their engineering and computer science skills to solve a complex,
              real-world problem. The competition acts as a platform for hands-on engineering experience, autonomous system development,
              innovation, and collaborative, multidisciplinary teamwork.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Drone image displaying different part using animation */}
      <DroneParts />

      {/* 4. ===== What We Do Section (Our Vision) ===== */}
      <section id="what-we-do" className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-orange-500/20 border border-orange-400/50 rounded-full text-orange-300 text-sm font-semibold">
              Our Vision
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Our Vision</h2>
          <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-orange-400 to-red-600 mx-auto rounded-full mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDoCards.map((card, index) => (
              <div key={card.id} className="ju-reveal group relative border border-cyan-400/40 rounded-xl p-6 sm:p-8 bg-gradient-to-br from-slate-800/50 to-blue-900/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-orange-500/80 hover:shadow-2xl hover:shadow-orange-500/30" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-orange-500"></div>
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-orange-500"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-orange-500"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-orange-500"></div>

                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg font-bold text-orange-400 mb-3">{card.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Achievements */}
      <Achievements />

      {/* 6. Mission Timeline */}
      <MissionTimeline />

      {/* 7. ===== Featured Vehicle Section ===== */}
      <section id="featured-vehicle" className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-orange-500/20 border border-orange-400/50 rounded-full text-orange-300 text-sm font-semibold">
              Our Featured Vehicle
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Featured Vehicle</h2>
          <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-orange-400 to-red-600 mx-auto rounded-full mb-16"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 sm:p-10 shadow-2xl hover:border-slate-600 transition-colors duration-300">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">UIU Aerial Robotics Team</h3>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
                {vehicleFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <span className="text-sm sm:text-lg text-slate-300">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <Link to="/DetailedFeatures">
                <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
                  See Detailed Features
                </button>
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full blur-3xl opacity-20"></div>
                <img
                  src={droneImage}
                  alt="UART"
                  className="w-full max-w-md h-auto relative z-10 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 Gallery Grid */}
      <GalleryGrid />

      {/* 8. ===== Sponsors Section ===== */}
      <section id="sponsors" className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-orange-500/20 border border-orange-400/50 rounded-full text-orange-300 text-sm font-semibold">
                Our Supporters
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Sponsors</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-red-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We are grateful to all our sponsors who support our research and development efforts.
              Their contributions make our innovations possible.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="group flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 group-hover:border-slate-500/80 transition duration-300">
                    <img
                      className="h-12 md:h-16 object-contain transition-all duration-300 group-hover:scale-110"
                      src={sponsor.logo}
                      alt={sponsor.name}
                      style={{ filter: 'grayscale(100%)', opacity: 0.6 }}
                      onMouseOver={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; }}
                      onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.6'; }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Gallery and Video */}
      <GalleryVideo />

      {/* 10. ===== LATEST NEWS & UPDATES ===== */}
      <section id="recent-updates" className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">

          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tighter mb-16">
            LATEST NEWS &amp; UPDATES
          </h2>

          <div className="relative flex items-center justify-center group/slider">

            {/* Left Desktop Arrow */}
            <button
              onClick={prevSlide}
              className="hidden lg:flex w-12 h-12 absolute -left-16 border border-slate-700 bg-slate-800 items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shadow-sm rounded"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Carousel / Grid Wrapper */}
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out gap-8"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {/* For demo mapping all achievements in a row. They take up 1/3 width each. */}
                {achievements.concat(achievements).map((achieve, idx) => (
                  <div key={`${achieve.id}-${idx}`} className="flex-none w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] text-left flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300 bg-slate-800/50 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 pb-6">

                    {/* Image Block with Tag */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900">
                      <img
                        src={achieve.image}
                        alt={achieve.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Using the source or 'UART' as the mockup tag. Dark-theme friendly colors. */}
                      <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-500 to-red-600 px-4 py-1.5 text-xs font-bold text-white tracking-wider rounded border border-orange-400/50">
                        {achieve.source.toUpperCase()}
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className="pt-6 px-6 flex flex-col flex-1">
                      <h3 className="text-xl font-extrabold text-white uppercase leading-snug mb-3 line-clamp-3 group-hover:text-orange-400 transition-colors duration-300">
                        {achieve.title}
                      </h3>

                      <p className="text-sm text-slate-400 italic mb-5">
                        {achieve.date} / By admin
                      </p>

                      <p className="text-slate-400 font-light text-base leading-relaxed line-clamp-3">
                        {achieve.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Desktop Arrow */}
            <button
              onClick={nextSlide}
              className="hidden lg:flex w-12 h-12 absolute -right-16 border border-slate-700 bg-slate-800 items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shadow-sm rounded"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Mobile UI Arrows if needed (hidden on lg, visible below) */}
          <div className="flex lg:hidden justify-center gap-4 mt-12">
            <button onClick={prevSlide} className="w-12 h-12 border border-slate-700 bg-slate-800 rounded flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 border border-slate-700 bg-slate-800 rounded flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Hero;
