import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ChevronLeft, ChevronRight, Calendar, CheckCircle2 } from 'lucide-react';
import droneVideo from '../assets/video/Faysal2.mp4';
import vid2 from '../assets/video/vid_2.mp4';
import aboutenergy from '../assets/images/Sponsor/aboutenergy.png';
import uiuLogo from '../assets/images/Sponsor/UIU_Logo.webp';
import droneImage from '../assets/images/DetailedFeatures/B6_png.webp';
import suaslogo from '../assets/images/logo/suas.webp';
import soildwork from '../assets/images/Sponsor/solidworks.webp';
import mathlab from '../assets/images/Sponsor/matlab.webp';
import autodesk from '../assets/images/Sponsor/autodesk.webp';
import amprius from '../assets/images/Sponsor/amprius.webp';
import puku from '../assets/images/Sponsor/puku.webp';
import { newsItems } from '../data/newsData';
import ScrollLazy from './ScrollLazy';

// Import New Sections — lazy loaded (below the fold, not needed for initial paint)
const DroneParts = React.lazy(() => import('./DroneParts'));
const MissionTimeline = React.lazy(() => import('./MissionTimeline'));
const GalleryVideo = React.lazy(() => import('./GalleryVideo'));
const GalleryGrid = React.lazy(() => import('./GalleryGrid'));

// ─── Stat Counter Hook ──────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const numericTarget = parseInt(String(target).replace(/\D/g, ''), 10);
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Animated Stat Card ─────────────────────────────
const StatCard = ({ value, label }: { value: string; label: string }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const suffix = value.replace(/\d/g, '');
  const numericVal = parseInt(value.replace(/\D/g, ''), 10);
  const count = useCountUp(numericVal, 1600, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="relative p-5 sm:p-7 text-center rounded-xl border border-white/[0.08] bg-[rgba(15,23,42,0.8)] backdrop-blur-md">
        <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          {visible ? `${count}${suffix}` : '0+'}
        </span>
        <span className="text-sm sm:text-base font-medium text-slate-400">{label}</span>
      </div>
    </div>
  );
};

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const video2ContainerRef = useRef<HTMLDivElement>(null);
  const [isVideo2Visible, setIsVideo2Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVideo2Visible(true);
        observer.disconnect();
      }
    }, { rootMargin: '400px 0px' });
    if (video2ContainerRef.current) observer.observe(video2ContainerRef.current);
    return () => observer.disconnect();
  }, []);
  // Parallax video on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || !heroRef.current) return;
      const scrollY = window.scrollY;
      const heroH = heroRef.current.offsetHeight;
      if (scrollY <= heroH) {
        const scale = 1 + (scrollY / heroH) * 0.08;
        const translateY = scrollY * 0.25;
        videoRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutStats = [
    { value: '3+', label: 'Years of Experience' },
    { value: '20+', label: 'Team Members' },
    { value: '6+', label: 'Completed Projects' },
    { value: '2+', label: 'Awards Won' },
  ];

  const whatWeDoCards = [
    { id: 1, num: '01', title: 'Advancing Autonomous Aerial Robotics', description: 'We develop intelligent UAV systems capable of executing complex missions with minimal human intervention through advanced autonomy, artificial intelligence, and reliable flight control.' },
    { id: 2, num: '02', title: 'Innovating Through Research', description: 'We bridge academic research and real-world engineering by designing, testing, and validating next-generation aerial robotics technologies for practical applications.' },
    { id: 3, num: '03', title: 'Building Intelligent Autonomous Systems', description: 'By integrating onboard AI, computer vision, and autonomous navigation, we create UAV platforms capable of perception, decision-making, and mission execution in dynamic environments.' },
    { id: 4, num: '04', title: 'Engineering Modular UAV Platforms', description: 'We design scalable and modular aerial systems that can be rapidly adapted for mapping, inspection, surveillance, environmental monitoring, and payload delivery.' },
    { id: 5, num: '05', title: 'Educating the Next Generation', description: 'Beyond building drones, we cultivate future engineers by providing hands-on experience in aerospace engineering, embedded systems, robotics, AI, and autonomous flight technologies.' },
    { id: 6, num: '06', title: 'Representing Bangladesh Globally', description: 'Our mission is to establish Bangladesh as a recognized contributor to autonomous aerial robotics by competing in international competitions, advancing research, and fostering global collaboration.' },
  ];

  const sponsors = [
    { name: 'Amprius', logo: amprius },
    { name: 'About Energy', logo: aboutenergy },
    { name: 'UIU', logo: uiuLogo },
    { name: 'SolidWorks', logo: soildwork },
    { name: 'MATLAB', logo: mathlab },
    { name: 'Autodesk', logo: autodesk },
    { name: 'Puku', logo: puku },
  ];

  const vehicleFeatures = [
    { text: 'Hybrid aluminum & carbon fiber airframe engineered for strength, modularity, and lightweight performance.' },
    { text: 'Up to 50 minutes of autonomous flight endurance powered by a custom 6S2P Amprius lithium-ion battery system.' },
    { text: 'NVIDIA Jetson Orin NX 16GB enables real-time onboard AI, object detection, and autonomous decision-making.' },
    { text: 'Fully autonomous navigation using ArduPilot with waypoint missions, survey mapping, and precision payload delivery.' },
    { text: 'Long-range communications via 900 MHz telemetry, 2.4 GHz command & control, and 5.8 GHz HD video transmission.' },
    { text: 'Modular architecture supporting interchangeable payloads, rapid maintenance, and future hardware expansion.' },
  ];

  // Recent Updates Carousel (sorted by most recent date first from shared data)
  const achievements = newsItems;

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? achievements.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex(prev => (prev === achievements.length - 1 ? 0 : prev + 1));

  // Removed auto-play interval
  return (
    <React.Suspense fallback={null}>
    <div>
      {/* ===== 1. Hero Section – Cinematic Aerospace ===== */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: 'transparent' }}>

        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ transformOrigin: 'center center', willChange: 'transform' }}
          src={droneVideo}
          autoPlay muted loop playsInline
         
        />

        {/* Atmospheric grid overlay */}
        <div className="absolute inset-0 z-[1] bg-radial-warm pointer-events-none" />

        {/* Multi-layer cinematic overlay — lightened for higher video clarity */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#020617] via-[rgba(2,6,23,0.35)] to-[rgba(2,6,23,0.1)]" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[rgba(2,6,23,0.65)] via-transparent to-transparent" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[rgba(2,6,23,0.3)] to-transparent pointer-events-none" />

        {/* Ambient glow bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 z-[3] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 100% at 30% 100%, rgba(249,115,22,0.12) 0%, transparent 70%)' }}
        />

        {/* Content – Centered on all screens */}
        <div className="relative z-20 flex flex-col my-auto pt-20 pb-12 px-5 sm:px-10 md:px-14 lg:px-20 max-w-7xl mx-auto w-full">

          {/* Mission tag */}
          <div className="hero-animate-tag flex items-center gap-3 mb-3">
            {/* <span className="block w-2 h-2 rounded-full" style={{ background: '#FFD4A3', boxShadow: '0 0 10px #f97316, 0 0 20px rgba(249, 115, 22, 0.4)' }} />
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase" style={{ color: '#f97316', fontFamily: "'Inter', sans-serif" }}>
              UIU Aerial Robotics Team&nbsp;
            </span> */}
          </div>

          {/* Main headline */}
          <h1
            className="text-[clamp(2.5rem,5vw,5rem)] text-white leading-[1.05] mb-2 max-w-5xl"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            <div className="block w-full mb-1">
              <div className="mask-container">
                <span className="mask-reveal ju-visible pb-1">Engineering</span>
              </div>
            </div>
            <div className="block w-full">
              <div className="mask-container">
                <span className="mask-reveal ju-visible pb-1">
                  <span className="text-primary italic-ish mr-4">Tomorrow's</span>
                  <span className="text-white">Sky</span>
                </span>
              </div>
            </div>
          </h1>

          {/* Animated rule */}
          <div className="hero-animate-line mb-4 flex items-center gap-3">
            <div className="h-[3px] w-20 sm:w-32 bg-primary" style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 0 100%)' }} />
            <div className="h-[3px] w-4" style={{ background: 'rgba(249,115,22,0.4)' }} />
          </div>

          {/* Sub-headline */}
          <p className="hero-animate-sub text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mb-6 sm:mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Student-led aerospace engineering team at United International University —
            designing, building, and flying next-generation autonomous UAVs.
          </p>

          {/* Telemetry-style meta badges */}
          <div className="hero-animate-meta flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-xs sm:text-sm font-mono">
            {[
              { label: 'MEMBERS', value: '20+' },
              { label: 'PROJECTS', value: '6+' },
              { label: 'AWARDS', value: '2+' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 py-2 rounded"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  animation: 'float-y-slow 5s ease-in-out infinite',
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                <span className="tracking-widest" style={{ color: 'rgba(249,115,22,0.8)', fontSize: '0.65rem' }}>{item.label}</span>
                <span className="text-white font-bold">{item.value}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-animate-btns flex flex-col sm:flex-row gap-4">
            <Link to="/projects">
              <button className="btn-primary btn-pill group">
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/sponsor">
              <button className="btn-outline btn-pill group">
                <span>Become a Sponsor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-8 sm:right-12 z-20 flex flex-col items-center gap-2 hero-scroll-cue">
          <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase" style={{ writingMode: 'vertical-rl', marginBottom: '8px' }}>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="cinematic-divider-h" />
        </div>
      </section>

      {/* ===== 2. About Section ===== */}
      <section id="about" className="py-14 sm:py-20 md:py-24 bg-transparent relative overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute inset-0 bg-radial-warm opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ea580c, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="section-label mb-5">About Us</div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              <div className="mask-container">
                <span className="mask-reveal ju-visible">About Us</span>
              </div>
            </h2>
            {/* Animated shimmer bar */}
            <div className="shimmer-line mx-auto rounded-full mb-3" style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #f97316, #dc2626)' }} />
          </div>

          {/* WHO WE ARE — full-width heading row */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8">Who We Are</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text column — slides from left */}
            <div className="space-y-6 ju-reveal-left">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                UIU Aerial Robotics Team was founded by a group of engineering
                students with a passion for aerial robotics and UAV technologies. Our
                team has grown steadily and now includes members from a variety of
                engineering disciplines.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                We focus on developing autonomous UAV technologies for participation
                in both national and international competitions. Leveraging our skills
                and experience in robotics, we are also exploring innovative solutions
                and entrepreneurial opportunities in the field.
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { title: '6 sub-teams', desc: 'Web & Communication, Software & Navigation, Electrical, Mechanical, R&D, PR & Marketing' },
                  { title: '20+ members', desc: 'Students from various engineering disciplines' },
                  { title: '2 annual intakes', desc: 'Our recruitment opens in January and November' },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="p-4 rounded-xl border border-white/[0.08] bg-[rgba(15,23,42,0.7)] backdrop-blur-md hover:border-primary/40 transition-colors duration-300 last:col-span-2 sm:last:col-span-1"
                  >
                    <p className="text-base font-bold mb-1" style={{ color: '#f97316', fontFamily: "'Inter', sans-serif" }}>
                      {card.title}
                    </p>
                    <p className="text-sm text-slate-400 leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats grid — slides from right */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 ju-reveal-right">
              {aboutStats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Featured Vehicle Section (Moved) ===== */}
      <section id="featured-vehicle" className="py-14 sm:py-20 md:py-24 bg-transparent relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #dc2626, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── 1. Centered Header ── */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#f97316' }} />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#f97316', fontFamily: "'Inter', sans-serif" }}>Our Featured Vehicle</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}>
              <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #f97316 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Engineering <span className="whitespace-nowrap">Meets Precision</span>
              </span>
            </h2>
            <div className="w-24 h-[3px] mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #f97316, #dc2626)' }} />
          </div>



          {/* ── 3. Below: Video + Description (no cards) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT — smaller looping video (same, no chrome) */}
            <div className="ju-reveal-left relative" ref={video2ContainerRef}>
              <div className="absolute -inset-6 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} />
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                {isVideo2Visible ? (
                  <video
                    src={vid2}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full rounded-xl object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full rounded-xl bg-slate-900/50 flex items-center justify-center border border-white/10" />
                )}
                <div className="absolute top-0 left-0 w-7 h-7 pointer-events-none z-10" style={{ borderTop: '2px solid rgba(249,115,22,0.6)', borderLeft: '2px solid rgba(249,115,22,0.6)' }} />
                <div className="absolute top-0 right-0 w-7 h-7 pointer-events-none z-10" style={{ borderTop: '2px solid rgba(249,115,22,0.6)', borderRight: '2px solid rgba(249,115,22,0.6)' }} />
                <div className="absolute bottom-0 left-0 w-7 h-7 pointer-events-none z-10" style={{ borderBottom: '2px solid rgba(249,115,22,0.6)', borderLeft: '2px solid rgba(249,115,22,0.6)' }} />
                <div className="absolute bottom-0 right-0 w-7 h-7 pointer-events-none z-10" style={{ borderBottom: '2px solid rgba(249,115,22,0.6)', borderRight: '2px solid rgba(249,115,22,0.6)' }} />
              </div>
            </div>

            {/* RIGHT — Description + feature list + CTA (no card) */}
            <div className="ju-reveal-right space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] rounded-full" style={{ background: '#f97316' }} />
                <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#f97316', fontFamily: "'Inter', sans-serif" }}>UART</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}>
                UIU Aerial Robotics Team
              </h3>

              <p className="text-slate-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Designed and built by the UIU Aerial Robotics Team, the UART UAV is a research-grade autonomous platform developed for long-endurance, AI-powered, and mission-critical operations. Every subsystem—from the hybrid airframe and modular power system to the onboard edge AI and autonomous flight software—is engineered for reliability, adaptability, and high-performance autonomous missions.
              </p>

              {/* Feature list — no card, clean */}
              <ul className="space-y-4">
                {vehicleFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <span className="flex-shrink-0 text-xs font-black pt-1 tabular-nums"
                      style={{ color: '#f97316', fontFamily: "'Inter', sans-serif", minWidth: '1.5rem' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm sm:text-base text-slate-300 leading-relaxed group-hover/item:text-white transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>


            </div>

          </div>
        </div>
      </section>

      {/* ===== Drone Specs Showcase ===== */}
      <section className="py-12 sm:py-16 md:py-20 bg-transparent relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Title + subtitle (centred, reference-exact) ── */}
          <div className="text-center mb-10 ju-reveal">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.08em' }}>
              BUILT TO DOMINATE THE SKY
            </h2>
            <p className="italic text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Every gram optimized for endurance. Every line of code written for autonomy.
              UART's drone is engineered to lead both in the air and on the scoreboard.
            </p>
          </div>

          {/* ── Top divider ── */}
          <div className="w-full h-px mb-0" style={{ background: 'rgba(255,255,255,0.08)' }} />

          {/* ── Main row: LEFT stats | DRONE | RIGHT stats ── */}
          <div className="flex items-stretch min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]">

            {/* LEFT stats column */}
            <div className="hidden lg:flex flex-col justify-around py-10 pr-10 border-r ju-reveal-left"
              style={{ borderColor: 'rgba(255,255,255,0.08)', minWidth: '220px', flex: '0 0 220px' }}>

              {/* Stat 0 */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}>Weight</p>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>
                  <span className="text-5xl" style={{ color: '#f97316' }}>7</span>
                  <span className="text-2xl text-white ml-1">Kg</span>
                </p>
              </div>

              {/* Stat 1 */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}>Max Takeoff Weight</p>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>
                  <span className="text-5xl" style={{ color: '#f97316' }}>13</span>
                  <span className="text-2xl text-white ml-1">Kg</span>
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}>Wheelbase</p>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>
                  <span className="text-5xl" style={{ color: '#f97316' }}>32</span>
                  <span className="text-2xl text-white ml-1">cm</span>
                </p>
              </div>

              {/* Bottom row — stats side by side (like reference) */}
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}>Cruise Speed</p>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>
                    <span className="text-4xl" style={{ color: '#f97316' }}>12</span>
                    <span className="text-xl text-white ml-1">m/s</span>
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}>Payload</p>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>
                    <span className="text-4xl" style={{ color: '#f97316' }}>4</span>
                    <span className="text-xl text-white ml-1">kg</span>
                  </p>
                </div>
              </div>

            </div>

            {/* CENTER — Drone image */}
            <div className="relative flex-1 flex flex-col items-center justify-center ju-reveal">
              {/* Soft radial glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 55%, rgba(249,115,22,0.14) 0%, transparent 68%)', filter: 'blur(24px)' }} />

              {/* Drone Name Tag */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap text-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-white drop-shadow-lg" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em' }}>
                  RAVEN 1.0
                </span>
              </div>

              <img
                src={droneImage}
                alt="UART Drone Specs View"
                className="relative z-10 w-full"
                style={{
                  maxWidth: '520px',
                  filter: 'drop-shadow(0 20px 50px rgba(249,115,22,0.25))',
                  animation: 'float-y-slow 7s ease-in-out infinite',
                }}
              />
              {/* Elliptical shadow ring */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-0" style={{ width: '55%' }}>
                <svg viewBox="0 0 300 30" fill="none" className="w-full">
                  <ellipse cx="150" cy="15" rx="148" ry="10"
                    stroke="rgba(249,115,22,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>

            {/* RIGHT stats column */}
            <div className="hidden lg:flex flex-col justify-around py-10 pl-10 items-end text-right border-l ju-reveal-right"
              style={{ borderColor: 'rgba(255,255,255,0.08)', minWidth: '220px', flex: '0 0 220px' }}>

              {/* Stat 1 */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}>Telemetry Range</p>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>
                  <span className="text-5xl" style={{ color: '#f97316' }}>20</span>
                  <span className="text-2xl text-white ml-1">km</span>
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}>Flight Endurance</p>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>
                  <span className="text-5xl" style={{ color: '#f97316' }}>50</span>
                  <span className="text-2xl text-white ml-1">min</span>
                </p>
              </div>

              {/* Bottom row — stats side by side */}
              <div className="flex gap-8 justify-end w-full">
                <div className="text-right">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}>Top Speed</p>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>
                    <span className="text-4xl" style={{ color: '#f97316' }}>20</span>
                    <span className="text-xl text-white ml-1">m/s</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}>Max Altitude(Tested)</p>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>
                    <span className="text-4xl" style={{ color: '#f97316' }}>120</span>
                    <span className="text-xl text-white ml-1">m AGL</span>
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ── Bottom divider ── */}
          <div className="w-full h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />

          {/* ── See More button ── */}
          <div className="flex justify-center mt-10">
            <Link to="/DetailedFeatures">
              <button className="btn-primary btn-pill group px-10 py-4">
                <span>See More Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>


          {/* Mobile stats (small screens) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-10 lg:hidden ju-reveal">
            {[
              { label: 'Weight', value: '7', unit: 'Kg' },
              { label: 'Max Takeoff Weight', value: '13', unit: 'Kg' },
              { label: 'Telemetry Range', value: '20', unit: 'km' },
              { label: 'Endurance', value: '50', unit: 'min' },
              { label: 'Cruise Speed', value: '12', unit: 'm/s' },
              { label: 'Payload', value: '4', unit: 'kg' },
              { label: 'Top Speed', value: '20', unit: 'm/s' },
              { label: 'Max Altitude(Tested)', value: '120', unit: 'm' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}>{s.label}</p>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>
                  <span className="text-3xl" style={{ color: '#f97316' }}>{s.value}</span>
                  <span className="text-lg text-white ml-0.5">{s.unit}</span>
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 3. PRIMARY OBJECTIVE SECTION ===== */}
      <section className="py-14 sm:py-20 md:py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-[0.07] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="section-label mb-5">Our Primary Objective</div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              <div className="mask-container">
                <span className="mask-reveal ju-visible">Primary Objective</span>
              </div>
            </h2>
            <div className="shimmer-line mx-auto rounded-full" style={{ width: '100px', height: '3px', background: 'linear-gradient(90deg, #f97316, #dc2626)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* SUAS Logo Card — zoom-in scale reveal + float */}
            <div className="ju-reveal-scale">
              <div className="relative p-10 text-center rounded-2xl border border-white/[0.08] bg-[rgba(15,23,42,0.8)] backdrop-blur-md" style={{ animation: 'float-y-slow 6s ease-in-out infinite' }}>
                <img src={suaslogo} alt="SUAS Logo" className="object-contain mx-auto w-56 h-56" />
                <a
                  href="https://suas-competition.org/competitions"
                  target="_blank" rel="noopener noreferrer"
                  className="block text-center px-8 py-3 mt-6 rounded-lg font-semibold transition-all duration-300"
                  style={{ border: '2px solid #f97316', color: '#f97316' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(249,115,22,0.2)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#f97316'; }}
                >
                  Visit SUAS Competition →
                </a>
              </div>
            </div>

            {/* Text — fade up with stagger */}
            <p className="ju-reveal text-slate-300 text-lg leading-relaxed md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              The UIU Aerial Robotics Team (UART) is dedicated to developing intelligent autonomous aerial systems through innovation, engineering excellence, and hands-on research. Our current focus is competing in the Student Unmanned Aerial Systems (SUAS) 2026 competition, where we design, build, and validate advanced UAV technologies for complex real-world autonomous missions.
              Beyond competition, UART provides students with practical experience in aerospace engineering, embedded systems, artificial intelligence, computer vision, and autonomous flight while driving innovation in aerial robotics and representing Bangladesh on the global stage.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Drone Parts ===== */}
      <ScrollLazy minHeight="800px">
        <DroneParts />
      </ScrollLazy>

      {/* ===== 4. What We Do / Vision ===== */}
      <section id="what-we-do" className="py-14 sm:py-20 md:py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)', filter: 'blur(70px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="section-label mb-5">Our Vision</div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            <div className="mask-container">
              <span className="mask-reveal ju-visible">Our Vision</span>
            </div>
          </h2>
          <div className="shimmer-line mx-auto rounded-full mb-16" style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #f97316, #dc2626)' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDoCards.map((card, index) => {
              const delayClass = ['ju-delay-1', 'ju-delay-2', 'ju-delay-3', 'ju-delay-4', 'ju-delay-5', 'ju-delay-6'][index] || '';
              return (
                <div key={card.id} className={`ju-reveal relative p-6 sm:p-8 text-left rounded-2xl border border-white/[0.08] bg-[rgba(15,23,42,0.8)] backdrop-blur-md group ${delayClass}`}>
                  {/* Number badge */}
                  <div
                    className="text-5xl font-bold mb-4 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", color: 'rgba(249,115,22,0.25)', transition: 'color 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(249,115,22,0.6)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(249,115,22,0.25)'}
                  >
                    {card.num}
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity" />

                  <h3 className="text-base sm:text-lg font-bold text-primary mb-3 group-hover:text-cyan-200 transition-colors" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.06em' }}>
                    {card.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ===== 6. Mission Timeline ===== */}
      <ScrollLazy minHeight="600px">
        <MissionTimeline />
      </ScrollLazy>



      {/* ===== Gallery Grid ===== */}
      <ScrollLazy minHeight="800px">
        <GalleryGrid />
      </ScrollLazy>

      {/* ===== 8. Sponsors Section — Marquee Ticker ===== */}
      <section id="sponsors" className="py-14 sm:py-20 md:py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="section-label mb-5">Our Supporters</div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              <div className="mask-container">
                <span className="mask-reveal ju-visible">Our Sponsors</span>
              </div>
            </h2>
            <div className="shimmer-line mx-auto rounded-full mb-6" style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #f97316, #dc2626)' }} />
            <p className="ju-reveal text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              We are grateful to all our sponsors who support our research and development efforts.
            </p>
          </div>

          {/* Infinite Marquee Ticker */}
          <div className="marquee-wrap py-4">
            <div className="marquee-track">
              {sponsors.concat(sponsors).map((sponsor, i) => (
                <div
                  key={`${sponsor.name}-${i}`}
                  className="flex-shrink-0 mx-10 flex items-center justify-center group cursor-pointer"
                >
                  <div
                    className="relative p-6 rounded-xl transition-all duration-400"
                    style={{
                      background: 'rgba(15,23,42,0.8)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
                      e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(15,23,42,0.8)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                  >
                    <img
                      className="h-12 md:h-20 object-contain transition-all duration-300"
                      src={sponsor.logo}
                      alt={sponsor.name}
                      style={{ opacity: 0.9 }}
                      onMouseOver={e => { e.currentTarget.style.opacity = '1'; }}
                      onMouseOut={e => { e.currentTarget.style.opacity = '0.9'; }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Gallery Video ===== */}
      <ScrollLazy minHeight="500px">
        <GalleryVideo />
      </ScrollLazy>

      {/* ===== 9. Latest News ===== */}
      <section id="recent-updates" className="py-14 sm:py-20 md:py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="section-label mb-5 mx-auto" style={{ display: 'inline-flex' }}>Latest Updates</div>
          <h2 className="ju-reveal text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
            Latest News &amp; Updates
          </h2>
          <div className="shimmer-line mx-auto rounded-full mb-14" style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #f97316, #dc2626)' }} />

          <div className="relative flex items-center justify-center">


            {/* Carousel */}
            <div className="w-full overflow-hidden">


              <div
                className="flex items-stretch transition-transform duration-700 ease-spring"
                style={{
                  transform: `translateX(calc(-100% / ${achievements.length * 2} * ${currentIndex}))`,
                } as React.CSSProperties}
              >
                {achievements.concat(achievements).map((achieve, idx) => (
                  <div
                    key={`${achieve.id}-${idx}`}
                    className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 lg:px-4"
                  >
                    <div className="text-left flex flex-col h-full card-modern card-shimmer group cursor-pointer">
                      {/* Image */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ background: '#0d0b0a' }}>
                        <img
                          src={achieve.image}
                          alt={achieve.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Colored overlay on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                          style={{ background: 'linear-gradient(to top, rgba(249,115,22,0.5) 0%, transparent 60%)' }}
                        />
                        {/* Tag badge */}
                        <div
                          className="absolute bottom-4 left-4 px-3 py-1.5 text-xs font-bold text-white tracking-wider"
                          style={{
                            background: 'linear-gradient(135deg, #f97316, #dc2626)',
                            borderRadius: '4px',
                            border: '1px solid rgba(249,115,22,0.5)',
                            fontFamily: "'Inter', sans-serif",
                            transform: 'translateX(-4px)',
                            transition: 'transform 0.3s ease',
                          }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'translateX(0)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'translateX(-4px)'}
                        >
                          {achieve.source.toUpperCase()}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-6 px-6 pb-6 flex flex-col flex-1">
                        <h3 className="text-xl font-extrabold text-white uppercase leading-snug mb-3 line-clamp-3 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
                          {achieve.title}
                        </h3>
                        <p className="text-sm text-slate-500 italic mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {achieve.date} / By admin
                        </p>
                        <p className="text-slate-400 font-light text-sm leading-relaxed line-clamp-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {achieve.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>



          {/* View All Button */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/news"
              className="relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest text-white uppercase overflow-hidden group transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "'Inter', sans-serif",
                borderRadius: '8px',
                border: '1px solid rgba(249,115,22,0.4)',
                background: 'rgba(10,15,35,0.6)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="relative flex items-center gap-2">
                View All News & Updates
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 text-primary" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </React.Suspense>
  );
};

export default Hero;
