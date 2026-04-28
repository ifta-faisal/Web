import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Cpu, Wind, Radio, Eye, Shield, Zap, ChevronRight, MapPin, Navigation, CloudRain, Layers, Activity, Gauge } from "lucide-react";
import img1 from "../assets/images/drone1.jpeg";
import jetson from "../assets/images/DetailedFeatures/jetson.png";
import lidar from "../assets/images/DetailedFeatures/lidar.png";
import droneImg from "../assets/images/drone.png";
import missionPlanningImg from "../assets/images/DetailedFeatures/map.jpeg";
import sysArchImg from "../assets/images/DetailedFeatures/system_architecture.png";
import batteryImg from "../assets/images/Project/battery.png";

/* ── Intersection-observer hook for scroll-reveal ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("df-visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Reusable reveal wrapper ── */
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string; id?: string }> = ({
  children, delay = 0, className = "", id
}) => {
  const ref = useReveal();
  return (
    <div id={id} ref={ref} className={`df-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

/* ── Spec row ── */
const SpecRow: React.FC<{ label: string; value: string; unit?: string }> = ({ label, value, unit }) => (
  <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-0 group">
    <span className="text-slate-400 text-sm font-mono tracking-widest uppercase group-hover:text-slate-200 transition-colors">{label}</span>
    <span className="text-white font-bold text-lg tabular-nums">
      {value}
      {unit && <span className="text-accent text-sm font-normal ml-1">{unit}</span>}
    </span>
  </div>
);

/* ── Feature section (alternating) ── */
interface FeatureSectionProps {
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  reverse?: boolean;
  delay?: number;
}
const FeatureSection: React.FC<FeatureSectionProps & { id?: string }> = ({
  tag, title, description, bullets, icon: Icon, image, id, reverse = false, delay = 0
}) => (
  <Reveal id={id} delay={delay} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
    {/* Text side */}
    <div className={reverse ? "lg:order-2" : ""}>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-accent text-xs font-bold tracking-[0.25em] uppercase font-mono">{tag}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">{title}</h2>
      <p className="text-slate-400 text-base leading-relaxed mb-6">{description}</p>

      {/* Key Benefits card */}
      <div className="rounded-2xl border border-white/[0.08] bg-[rgba(15,23,42,0.8)] backdrop-blur-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon className="w-4 h-4 text-accent" />
          <span className="text-white text-sm font-semibold">Key Benefits</span>
        </div>
        <ul className="space-y-2.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
              <ChevronRight className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Image side */}
    <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl scale-110" />
      <img
        src={image}
        alt={title}
        className="relative z-10 w-full rounded-3xl object-cover aspect-[4/3] shadow-2xl border border-white/10 group-hover:scale-[1.01] transition-transform duration-700"
      />
    </div>
  </Reveal>
);

/* ── 360° Drone Viewer ── */
const Drone360Viewer: React.FC<{ src: string; alt?: string }> = ({ src, alt = "360 view" }) => {
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(0);
  const angleAtDrag = useRef(0);
  const isDraggingRef = useRef(false);

  const startDrag = useCallback((clientX: number) => {
    isDraggingRef.current = true;
    setDragging(true);
    dragStart.current = clientX;
    angleAtDrag.current = angle;
  }, [angle]);

  const moveDrag = useCallback((clientX: number) => {
    if (!isDraggingRef.current) return;
    const delta = clientX - dragStart.current;
    setAngle(angleAtDrag.current + delta * 0.6);
  }, []);

  const endDrag = useCallback(() => {
    isDraggingRef.current = false;
    setDragging(false);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{ cursor: dragging ? 'grabbing' : 'grab' }}
      onMouseDown={e => startDrag(e.clientX)}
      onMouseMove={e => moveDrag(e.clientX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={e => startDrag(e.touches[0].clientX)}
      onTouchMove={e => moveDrag(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >
      {/* Drone image with rotateY */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="relative z-10 w-full"
        style={{
          transform: `rotateY(${angle}deg)`,
          filter: 'drop-shadow(0 24px 48px rgba(249,115,22,0.35))',
          transition: dragging ? 'none' : 'transform 0.04s linear',
          perspective: '900px',
        }}
      />

      {/* Dashed elliptical orbit ring (Hyundai-style) */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ bottom: '-12px', width: '85%' }}>
        <svg viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <ellipse cx="150" cy="30" rx="148" ry="26"
            stroke="rgba(249,115,22,0.35)" strokeWidth="1.5"
            strokeDasharray="6 5"
          />
        </svg>
      </div>



      {/* 360° label */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full pointer-events-none shadow-lg"
        style={{ background: 'rgba(15,23,42,0.85)', border: '1px solid rgba(249,115,22,0.4)', backdropFilter: 'blur(12px)' }}>
        <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />
        <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: '#f97316', fontFamily: "'Inter', sans-serif" }}>Interactive 360°</span>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════ */
/*                  MAIN COMPONENT                     */
/* ═══════════════════════════════════════════════════ */
const DetailedFeatures = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const targetId = searchParams.get('id');
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  }, [searchParams]);

  const specs = [
    { label: "Max Takeoff Weight", value: "4.2", unit: "kg" },
    { label: "UAS Volume (disassembled)", value: "18 x 14 x 8", unit: "in" },
    { label: "Flight Endurance", value: "35", unit: "min" },
    { label: "Telemetry Range", value: "10", unit: "km" },
    { label: "Camera Resolution", value: "2K", unit: "HD" },
    { label: "Cruise Speed", value: "18", unit: "m/s" },
    { label: "Tested Max Altitude", value: "400", unit: "m AGL" },
    { label: "MAXIMUM Payload Capacity", value: "800", unit: "g" },
  ];

  const features: FeatureSectionProps[] = [
    {
      id: "structural-engineering",
      tag: "Structural Engineering",
      title: "Lightweight Carbon Fiber Airframe",
      description:
        "Our drone is built around a precision-engineered carbon fiber monocoque structure — delivering exceptional rigidity and strength at a fraction of the weight of conventional aluminium builds. Every gram is optimized.",
      bullets: [
        "330g total structural weight",
        "Modular arm design for rapid field assembly",
        "IP52-rated electronics bay",
        "Vibration-isolated motor mounts",
      ],
      icon: Shield,
      image: img1,
      reverse: false,
      delay: 0,
    },
    {
      id: "autonomy-navigation",
      tag: "Autonomy & Navigation",
      title: "AI-Powered Flight Intelligence",
      description:
        "Dual-redundant flight controller with onboard Jetson-class AI processing enables real-time path planning, dynamic obstacle avoidance, and mission-adaptive re-routing — entirely on the edge with no cloud dependency.",
      bullets: [
        "Visual SLAM for GPS-denied environments",
        "Sub-50ms obstacle detection latency",
        "400Hz IMU update rate",
        "Fully autonomous waypoint missions",
      ],
      icon: Cpu,
      image: jetson,
      reverse: true,
      delay: 100,
    },
    {
      id: "sensing-perception",
      tag: "Sensing & Perception",
      title: "Multi-Sensor Fusion Suite",
      description:
        "Tightly fused RGB, depth, and LIDAR data streams feed a custom Kalman filter stack that provides precise state estimation and rich 3D environmental awareness under all lighting and weather conditions.",
      bullets: [
        "Stereo depth sensing at 30fps",
        "360° LIDAR point-cloud mapping",
        "Thermal imaging payload ready",
        "Real-time HD video downlink",
      ],
      icon: Eye,
      image: lidar,
      reverse: false,
      delay: 200,
    },
    {
      id: "battery-power",
      tag: "Power Systems",
      title: "Battery: Power House of Drone",
      description:
        "The centralized energy hub of our UAS. We utilize customized high-density LiPo power houses engineered specifically for the extreme electrical demands of high-torque motors and continuous AI computation.",
      bullets: [
        "Customize 3S Battery Configuration",
        "High-discharge (100C) Power house",
        "Integrated Smart BMS monitoring",
        "Rapid-swap modular battery bay",
      ],
      icon: Zap,
      image: batteryImg,
      reverse: true,
      delay: 300,
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-white pt-32 pb-24 overflow-x-hidden">

      {/* Standard Atmosphere Blobs — matched with other pages */}
      <div className="absolute top-0 right-0 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />


      {/* ── Features Grid ── */}

      {/* ── HERO BAND ── */}
      <header className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto pb-20">
        <Reveal className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase font-mono">UART · Aircraft Systems</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
              Engineered<br />
              <span className="bg-gradient-to-r from-primary via-accent to-accent text-transparent bg-clip-text">For Precision</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
              Every subsystem of our fixed-wing UAV is purpose-built for autonomous operations — from the carbon fiber skeleton to the AI compute stack.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Autonomous", "SUAS 2026", "Open-Source Stack"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-slate-300 bg-white/5 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Drone 360° interactive viewer */}
          <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0" style={{ perspective: '900px' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl scale-125" />
            <Drone360Viewer src={droneImg} alt="UART Drone 360° View" />
          </div>
        </Reveal>
      </header>

      {/* ── SPECS TABLE ── */}
      <section id="specs" className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto py-16">
        <Reveal className="rounded-3xl border border-white/10 bg-[rgba(15,23,42,0.8)] backdrop-blur-md overflow-hidden">
          <div className="px-8 py-6 border-b border-white/10 flex items-center gap-3">
            <Zap className="w-5 h-5 text-accent" />
            <h2 className="text-white font-bold text-xl">Technical Specifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 px-8 py-4">
            {specs.map((s, i) => <SpecRow key={i} {...s} />)}
          </div>
        </Reveal>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto py-8">
        <Reveal className="grid grid-cols-3 gap-4">
          {[img1, img1,].map((src, i) => (
            <div key={i} className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={src} alt={`drone-${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </Reveal>
      </section>

      {/* ── ALTERNATING FEATURE SECTIONS ── */}
      <section className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto py-16 space-y-28">
        {features.map((f, i) => (
          <FeatureSection key={i} id={f.id} {...f} />
        ))}
      </section>

      {/* ── CAPABILITIES GRID ── */}
      <section id="capabilities" className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto py-20">
        <div className="text-center mb-14">
          <div className="section-label mb-3">What We Built</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-1">
            <div className="mask-container">
              <span className="mask-reveal ju-visible">Mission Capabilities</span>
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Wind, title: "Aerodynamic Efficiency", desc: "Optimized airfoil geometry and composite layup for maximum L/D ratio at cruise." },
            { icon: Cpu, title: "Edge AI Compute", desc: "Jetson-class NPU delivers 21 TOPS of inference power for real-time perception." },
            { icon: Radio, title: "Long-Range Telemetry", desc: "Encrypted FHSS datalink maintains bi-directional control at up to 10 km range." },
            { icon: Eye, title: "HD Stabilized Imagery", desc: "2K 2-axis gimbal camera captures smooth broadcast-quality footage in flight." },
            { icon: Shield, title: "Redundant Safety Systems", desc: "Triple-redundant IMUs and auto-land failsafe ensure safe recovery in all scenarios." },
            { icon: Zap, title: "Rapid Payload Swap", desc: "Tool-free modular bay supports mission-specific payloads in under 90 seconds." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-white/[0.08] bg-[rgba(15,23,42,0.8)] backdrop-blur-md p-6 hover:border-accent/40 hover:bg-[rgba(15,23,42,0.9)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
           MISSION PLANNING SECTION
      ══════════════════════════════════════════════════ */}
      <section id="mission-planning" className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto py-24">
        {/* Section header – centred */}
        <Reveal className="text-center mb-16">
          <div className="section-label mb-3">Ground Control</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-1 mb-4">
            <div className="mask-container">
              <span className="mask-reveal ju-visible">Mission Planning</span>
            </div>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Advanced flight planning software with real-time telemetry and autonomous navigation
          </p>
        </Reveal>

        {/* Big image left, features right */}
        <Reveal className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Screenshot */}
          <div className="relative flex-1 w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl scale-105" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Fake laptop bezel */}
              <div className="bg-[#111827] px-4 pt-3 pb-1 flex items-center gap-2 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="flex-1 ml-4 bg-white/10 rounded h-4 max-w-xs" />
              </div>
              <img src={missionPlanningImg} alt="Mission Planning UI" className="w-full object-cover" />
            </div>
          </div>

          {/* Feature list */}
          <div className="flex-shrink-0 w-full lg:max-w-xs xl:max-w-sm space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">Intelligent Route Optimization</h3>
            {[
              { icon: Navigation, text: "Automated waypoint generation" },
              { icon: CloudRain, text: "Real-time weather integration" },
              { icon: Layers, text: "No-fly zone compliance" },
              { icon: Cpu, text: "Multi-aircraft coordination" },
              { icon: MapPin, text: "Precision landing zone marking" },
              { icon: Radio, text: "Live telemetry overlay on map" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════
           SYSTEM ARCHITECTURE SECTION
      ══════════════════════════════════════════════════ */}
      <section id="system-architecture" className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto py-24">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-3">Under The Hood</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-1 mb-4">
            <div className="mask-container">
              <span className="mask-reveal ju-visible">System Architecture</span>
            </div>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Enterprise-grade software integration with NVIDIA Jetson at its core, connecting
            advanced sensors, flight controllers, and communication systems
          </p>
        </Reveal>

        <Reveal className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
          {/* Hardware list */}
          <div className="flex-shrink-0 w-full lg:max-w-xs xl:max-w-sm">
            <h3 className="text-white font-black text-xl mb-5">Integrated Hardware Ecosystem</h3>
            <div className="space-y-3">
              {[
                { icon: Cpu, name: "NVIDIA Jetson Orin Nano", desc: "AI Brain & Mission Computer with onboard processing" },
                { icon: Radio, name: "Multi-Band Communications", desc: "4G/LTE VPN Gateway and RFD900x Long Range Radio" },
                { icon: Eye, name: "Advanced Sensors", desc: "LiDAR, RTK GNSS, Camera, and Airspeed sensors" },
                { icon: Shield, name: "Flight Controller", desc: "Cube Orange+ for stability & navigation" },
              ].map(({ icon: Icon, name, desc }, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.08] bg-[rgba(15,23,42,0.8)] hover:border-accent/30 hover:bg-[rgba(15,23,42,0.9)] transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{name}</p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture diagram */}
          <div className="relative flex-1 w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl blur-2xl scale-105" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="bg-[#111827] px-4 pt-3 pb-1 flex items-center gap-2 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-slate-500 text-xs ml-4 font-mono">uart-system-architecture.svg</span>
              </div>
              <img src={sysArchImg} alt="System Architecture" className="w-full object-contain bg-[#020617]" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════
           PERFORMANCE COMPARISON TABLE
      ══════════════════════════════════════════════════ */}
      <section id="performance" className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto py-24">
        <Reveal className="text-center mb-14">
          <div className="section-label mb-3">How We Stack Up</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-1 mb-4">
            <div className="mask-container">
              <span className="mask-reveal ju-visible">Performance Comparison</span>
            </div>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            See how UART's UAV platform competes against commercial off-the-shelf alternatives
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-[rgba(15,23,42,0.8)] backdrop-blur-md overflow-hidden transition-all duration-500">
            {/* Desktop Header (hidden on mobile) */}
            <div className="hidden md:grid grid-cols-4 text-xs font-bold font-mono tracking-widest uppercase bg-[rgba(15,23,42,0.9)] border-b border-white/10">
              <div className="col-span-1 px-6 py-5 text-slate-400">Metric</div>
              <div className="px-6 py-5 text-center text-accent bg-accent/10">UART UAV</div>
              <div className="px-6 py-5 text-center text-slate-400">DJI Matrice 30</div>
              <div className="px-6 py-5 text-center text-slate-400">Autel EVO II</div>
            </div>

            {/* Content Rows */}
            <div className="divide-y divide-white/10">
              {[
                { metric: "Flight Endurance", uart: "35 min", dji: "41 min", autel: "40 min", uartBetter: false },
                { metric: "Telemetry Range", uart: "10 km", dji: "8 km", autel: "9 km", uartBetter: true },
                { metric: "Autonomous AI", uart: "On-board", dji: "Cloud", autel: "Limited", uartBetter: true },
                { metric: "GPS-Denied Ops", uart: "✓ SLAM", dji: "✗ No", autel: "✗ No", uartBetter: true },
                { metric: "Max Takeoff Weight", uart: "4.2 kg", dji: "3.77 kg", autel: "3.5 kg", uartBetter: false },
                { metric: "Open Source", uart: "✓ Full", dji: "✗ Closed", autel: "✗ Closed", uartBetter: true },
                { metric: "Payload System", uart: "Modular", dji: "Fixed", autel: "Fixed", uartBetter: true },
                { metric: "Camera Resolution", uart: "2K HD", dji: "4K", autel: "6K", uartBetter: false },
              ].map(({ metric, uart, dji, autel, uartBetter }, i) => (
                <div key={i} className="flex flex-col md:grid md:grid-cols-4 hover:bg-white/[0.03] transition-colors overflow-hidden">
                  {/* Metric Label (Mobile: Small header, Desktop: Column 1) */}
                  <div className="px-6 py-4 md:py-5 text-slate-400 text-xs md:text-sm font-mono uppercase md:normal-case bg-white/[0.02] md:bg-transparent border-b md:border-b-0 border-white/5">
                    {metric}
                  </div>

                  {/* Values */}
                  <div className="grid grid-cols-3 md:contents">
                    {/* UART Value */}
                    <div className={`px-4 py-3 md:px-6 md:py-5 flex flex-col md:block items-center justify-center text-center font-bold text-sm bg-accent/5 ${uartBetter ? 'text-accent' : 'text-white'} border-r md:border-r-0 border-white/5 md:bg-accent/10`}>
                      <span className="md:hidden text-[10px] text-slate-500 font-mono mb-1">UART</span>
                      <span className="inline-flex items-center gap-1.5">
                        {uartBetter && <Activity className="w-3.5 h-3.5 hidden md:inline" />}
                        {uart}
                      </span>
                    </div>

                    {/* DJI Value */}
                    <div className="px-4 py-3 md:px-6 md:py-5 flex flex-col md:block items-center justify-center text-center text-slate-400 text-sm border-r md:border-r-0 border-white/5">
                      <span className="md:hidden text-[10px] text-slate-600 font-mono mb-1 uppercase">DJI M30</span>
                      {dji}
                    </div>

                    {/* Autel Value */}
                    <div className="px-4 py-3 md:px-6 md:py-5 flex flex-col md:block items-center justify-center text-center text-slate-400 text-sm">
                      <span className="md:hidden text-[10px] text-slate-600 font-mono mb-1 uppercase">EVO II</span>
                      {autel}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="px-6 py-5 bg-accent/5 border-t border-accent/20 flex items-center gap-2">
              <Activity className="w-4 h-4 text-accent flex-shrink-0" />
              <p className="text-xs text-slate-400 font-mono">Highlighted metrics indicate where UART leads.</p>
            </div>
          </div>
        </Reveal>
      </section>
      {/* ══════════════════════════════════════════════════
           OPERATIONAL PROCEDURES (NEW MANTADORY SECTION)
      ══════════════════════════════════════════════════ */}
      <section id="procedures" className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto py-24 border-t border-white/5" role="region" aria-labelledby="mission-procedures-title">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-3">Safety & Logistics</div>
          <h2 id="mission-procedures-title" className="text-4xl sm:text-5xl font-black text-white mt-1 mb-4">
            <div className="mask-container">
              <span className="mask-reveal ju-visible">Mission Procedures</span>
            </div>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Standardized checklists ensuring flight safety and operational excellence during SUAS 2026.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Procedure 1 */}
          <Reveal delay={100} className="rounded-3xl border border-white/10 bg-[rgba(15,23,42,0.8)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-black">01</div>
              <h3 className="text-xl font-bold">Pre-Flight Inspection</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3"><span className="text-accent">•</span> Verify carbon fiber structural integrity & motor mounts.</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Confirm RTK GPS lock (Min 12 satellites).</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Battery voltage check (Target: 4.2V per cell).</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Datalink signal strength verification (&gt; -80dBm).</li>
            </ul>
          </Reveal>

          {/* Procedure 2 */}
          <Reveal delay={200} className="rounded-3xl border border-white/10 bg-[rgba(15,23,42,0.8)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black">02</div>
              <h3 className="text-xl font-bold">Launch & Recovery</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3"><span className="text-primary">•</span> CATAPULT: Clear launch vector & check bungee tension.</li>
              <li className="flex gap-3"><span className="text-primary">•</span> IN-FLIGHT: Monitor current draw & airspeed stability.</li>
              <li className="flex gap-3"><span className="text-primary">•</span> RECOVERY: Trigger descent on glideslope (15° path).</li>
              <li className="flex gap-3"><span className="text-primary">•</span> POST-FLIGHT: Log telemetry & thermally scan motors.</li>
            </ul>
          </Reveal>

          {/* Procedure 3 */}
          <Reveal delay={300} className="rounded-3xl border border-white/10 bg-[rgba(15,23,42,0.8)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-black">03</div>
              <h3 className="text-xl font-bold">Emergency Failsafes</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3"><span className="text-red-500">•</span> SIGNAL LOSS: Auto RTL (Return To Launch) at 60m.</li>
              <li className="flex gap-3"><span className="text-red-500">•</span> LOW BATTERY: Trigger immediate landing zone priority.</li>
              <li className="flex gap-3"><span className="text-red-500">•</span> GEOFENCE: Instant kill-switch on perimeter breach.</li>
              <li className="flex gap-3"><span className="text-red-500">•</span> OBSTACLE: Neural-net overrides waypoint for avoidance.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
           DESIGN RATIONALE (TECHNICAL "WHY")
      ══════════════════════════════════════════════════ */}
      <section id="rationale" className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto py-24 border-t border-white/5 bg-white/[0.01]">
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-3">Engineering Insight</div>
            <h2 className="text-4xl font-black text-white mb-6">Design Rationale</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-accent font-bold mb-2 uppercase tracking-widest text-xs">System: Materials</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We chose 3K Twill Carbon Fiber for the primary fuselage to achieve a 220% increase in strength-to-weight ratio compared to 3D-printed filaments. This allows for an 800g payload without compromising wing stability.
                </p>
              </div>
              <div>
                <h4 className="text-accent font-bold mb-2 uppercase tracking-widest text-xs">System: Edge Intelligence</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Moving AI processing to the NVIDIA Jetson Orin Nano (on-board) removes latency issues caused by LTE jitter. Sub-100ms inference is required for high-speed obstacle avoidance at 18m/s cruise.
                </p>
              </div>
              <div>
                <h4 className="text-accent font-bold mb-2 uppercase tracking-widest text-xs">System: Aerodynamics</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The Clark-Y airfoil profile was selected for its high lift coefficient at low Reynolds numbers, ensuring stable slow-flight during autonomous package delivery landing phases.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-[#111827] px-4 py-2 flex items-center justify-between border-b border-white/10">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Analysis: CFD Simulation v4.2</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-accent/50" />
                </div>
              </div>
              <img src={missionPlanningImg} alt="Technical Analysis" className="w-full h-80 object-cover opacity-80" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020617] p-6">
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-12 bg-accent" />
                  <p className="text-[10px] font-mono text-accent uppercase tracking-widest">Optimized Pressure Vector Distribution</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── OUTCOME / BRIDGING THE GAP ── */}
      <section className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto py-16">
        <Reveal>
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Bridging the Capability Gap</h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Most student UAV platforms compromise between endurance and autonomy. UART's platform delivers both — tactical range with strategic intelligence, purpose-built for SUAS and beyond.
            </p>
            <Link to="/projects">
              <button className="btn-primary btn-pill group px-10 py-4">
                <span>See Our Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Bottom padding ── */}
      <div className="h-24" />

      {/* Inject page-scoped CSS (avoids global css collision) */}
      <style>{`
        .df-reveal {
          opacity: 0;
          transform: translateY(2.5rem);
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
        .df-visible {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </div>
  );
};

export default DetailedFeatures;
