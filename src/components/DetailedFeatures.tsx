import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Cpu, Wind, Radio, Eye, Shield, Zap, ChevronRight, MapPin, Navigation, CloudRain, Layers, Activity, Gauge, Map, Brain, Target } from "lucide-react";
import img1 from "../assets/images/DetailedFeatures/B6.jpg";
import jetson from "../assets/images/DetailedFeatures/jetson.png";
import lidar from "../assets/images/DetailedFeatures/lidar.png";
import droneImg from "../assets/images/DetailedFeatures/B6_png.png";
import missionPlanningImg from "../assets/images/DetailedFeatures/map.png";
import sysArchImg from "../assets/images/DetailedFeatures/system_architecture.png";
import batteryImg from "../assets/images/DetailedFeatures/Battery.jpeg";

// Slideshow Images
import imgD1 from "../assets/images/DetailedFeatures/B9.jpg";
import imgD2 from "../assets/images/DetailedFeatures/B8.jpg";
import imgD3 from "../assets/images/DetailedFeatures/B7.jpg";
import imgD4 from "../assets/images/DetailedFeatures/B10.jpg";


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
  id?: string;
  tag: string;
  title: string;
  description: string;
  bullets?: string[];
  specs?: { label: string; value: string }[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  reverse?: boolean;
  delay?: number;
  imageClassName?: string;
}
const FeatureSection: React.FC<FeatureSectionProps & { id?: string }> = ({
  tag, title, description, bullets, specs, icon: Icon, image, id, reverse = false, delay = 0, imageClassName
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

      {/* Dynamic Benefits / Specs card */}
      {(bullets || specs) && (
        <div className="rounded-2xl border border-white/[0.08] bg-[rgba(15,23,42,0.8)] backdrop-blur-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Icon className="w-4 h-4 text-accent" />
            <span className="text-white text-sm font-semibold">{specs ? "Specification" : "Key Benefits"}</span>
          </div>
          
          {specs ? (
            <div className="flex flex-col gap-2">
              {specs.map((s, i) => (
                <div key={i} className="flex justify-between items-center text-sm py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-slate-400 font-medium">{s.label}</span>
                  <span className="text-white font-bold text-right">{s.value}</span>
                </div>
              ))}
            </div>
          ) : bullets ? (
            <ul className="space-y-2.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <ChevronRight className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      )}
    </div>

    {/* Image side */}
    <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl scale-110" />
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={`relative z-10 w-full rounded-3xl shadow-2xl border border-white/10 group-hover:scale-[1.01] transition-transform duration-700 ${imageClassName || 'object-cover aspect-[4/3]'}`}
      />
    </div>
  </Reveal>
);

/* ── Static Drone Viewer ── */
const Drone360Viewer: React.FC<{ src: string; alt?: string }> = ({ src, alt = "Drone view" }) => {
  // Keep hooks around to avoid unused import warnings, but they aren't used for dragging anymore
  const [angle] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative select-none pointer-events-none">
      {/* Static Drone image */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full"
        style={{
          filter: 'drop-shadow(0 24px 48px rgba(249,115,22,0.35))',
        }}
      />
    </div>
  );
};

const slideshowImages = [
  imgD1,
  imgD2,
  imgD3,
  imgD4
];

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
    { label: "Max Takeoff Weight", value: "13", unit: "kg" },
    { label: "UAS Volume (Unfolded)", value: "14 x 23 x 23", unit: "in" },
    { label: "Flight Endurance", value: "50", unit: "min" },
    { label: "Telemetry Range", value: "20", unit: "km" },
    { label: "Camera Resolution", value: "4K", unit: "HD" },
    { label: "Cruise Speed", value: "12", unit: "m/s" },
    { label: "Tested Max Altitude", value: "120", unit: "m AGL" },
    { label: "MAXIMUM Payload Capacity", value: "4", unit: "kg" },
  ];

  const features: FeatureSectionProps[] = [
    {
      id: "structural-engineering",
      tag: "Structural Engineering",
      title: "HYBRID ALUMINUM & CARBON FIBER AIRFRAME",
      description:
        "The UART UAV features a hybrid structural architecture combining a precision-machined aluminum center frame with carbon fiber arms and structural plates. Designed for high strength, low weight, and modularity, the airframe supports both long-endurance autonomous missions and heavy-payload operations while maintaining exceptional rigidity and reliability.",
      bullets: [
        "Operating Weight For SUAS: 6.8 kg",
        "Maximum Takeoff Weight (MTOW): 13 kg",
        "Precision-machined aluminum center frame",
        "Carbon fiber arms, top & bottom plates",
        "Carbon fiber tube structure for maximum strength-to-weight ratio",
        "Modular arm design for rapid maintenance",
        "High structural rigidity with low vibration",
        "Optimized for autonomous and payload missions",
      ],
      icon: Shield,
      image: img1,
      reverse: false,
      delay: 0,
    },
    {
      id: "autonomy-navigation",
      tag: "Autonomy & Edge AI",
      title: "Intelligent Autonomous Flight",
      description:
        "The UART UAV combines the Cube Orange+ flight controller with the NVIDIA Jetson Orin NX 16GB to create a powerful autonomous flight platform. While the flight controller delivers reliable and precise aircraft control, the onboard AI computer processes computer vision, object detection, mapping, and mission intelligence in real time—without relying on cloud connectivity.",
      bullets: [
        "NVIDIA Jetson Orin NX 16GB Edge AI Computer",
        "Cube Orange+ running ArduPilot",
        "Real-time AI Object Detection & Target Recognition",
        "Autonomous Waypoint Navigation",
        "Polygon Survey & Mapping Missions",
        "Modular AI Software Architecture",
        "MAVLink-based AI & Flight Controller Integration",
        "Fully Onboard Edge Computing",
      ],
      icon: Cpu,
      image: jetson,
      imageClassName: "object-contain p-8 bg-[rgba(15,23,42,0.4)] aspect-[4/3]",
      reverse: true,
      delay: 100,
    },
    {
      id: "sensing-perception",
      tag: "Sensing & Perception",
      title: "Intelligent Perception System",
      description:
        "The UART UAV combines advanced vision sensors, ranging technologies, and precision navigation into a unified perception system. Powered by onboard edge AI, the platform continuously interprets its surroundings, enabling autonomous navigation, environmental awareness, and intelligent mission execution in complex operating environments.",
      bullets: [
        "AI-powered Object Detection & Classification",
        "360° Environmental Awareness",
        "Real-time Distance & Obstacle Detection",
        "Precision Target Localization",
        "Autonomous Survey & Mapping",
        "GPS, IMU & Vision Sensor Fusion",
        "Onboard Edge AI Processing",
        "Modular Multi-Sensor Architecture",
      ],
      icon: Eye,
      image: lidar,
      imageClassName: "object-contain p-8 bg-[rgba(15,23,42,0.4)] aspect-[4/3]",
      reverse: false,
      delay: 200,
    },
    {
      id: "battery-power",
      tag: "Power Systems",
      title: "Battery: Power House of Drone",
      description:
        "The UART UAV is powered by a modular 6S2P lithium-ion battery system utilizing Amprius SiCore SA08 high-energy-density cells. Its six interchangeable 2S battery modules deliver 451 Wh of energy, up to 108 A continuous and 172.8 A peak output, providing exceptional endurance while supporting high-performance propulsion and on-board AI computing.",
      specs: [
        { label: "Battery Architecture", value: "6S2P (6 × 2S Modules)" },
        { label: "Cell Technology", value: "Amprius SiCore SA08" },
        { label: "Battery Chemistry", value: "Lithium-ion" },
        { label: "Nominal Voltage", value: "20.4 V" },
        { label: "Maximum Voltage", value: "25.2 V" },
        { label: "Capacity", value: "22.1 Ah" },
        { label: "Energy", value: "451 Wh" },
        { label: "Continuous Output", value: "108 A" },
        { label: "Peak Output", value: "172.8 A" },
        { label: "Peak Power", value: "3.5 kW" },
        { label: "Energy Density", value: "345 Wh/kg" },
        { label: "Battery Design", value: "Modular & Field Replaceable" }
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
              Every subsystem of Raven 1.0 is purpose-built for autonomous operations — from the carbon fiber skeleton to the AI compute stack.
            </p>
            <Link to="/TestData">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent/10 border border-accent/40 text-accent font-bold text-sm hover:bg-accent/20 hover:border-accent/70 transition-all duration-300 group">
                <Activity className="w-4 h-4" />
                See Test Data
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
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

      {/* ── PHOTO SLIDESHOW (Continuous Infinite Marquee) ── */}
      <section className="relative z-10 w-full py-8 overflow-hidden">
        <Reveal>
          <div className="gallery-marquee-row gallery-edge-fade overflow-hidden relative z-10 w-full">
            <div className="gallery-marquee-track-left">
              {[...slideshowImages, ...slideshowImages].map((src, i) => {
                const index = i % slideshowImages.length;
                return (
                  <div
                    className="gallery-card-marquee block"
                    key={i}
                    style={{ background: '#0d0b0a' }}
                  >
                    <img
                      src={src}
                      alt={`Aircraft Subsystem ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
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
            { icon: Navigation, title: "Autonomous Navigation", desc: "Execute fully autonomous waypoint missions with precision takeoff, landing, and intelligent flight control using ArduPilot." },
            { icon: Brain, title: "On-board Edge AI", desc: "Powered by the NVIDIA Jetson Orin NX 16GB, enabling real-time object detection, target recognition, and autonomous decision-making." },
            { icon: Radio, title: "Long-Range Communications", desc: "900 MHz telemetry, 2.4 GHz command & control, and 5.8 GHz HD video transmission for reliable long-range operations." },
            { icon: Map, title: "Autonomous Survey Mapping", desc: "Generate high-overlap aerial imagery through polygon survey missions for accurate orthomosaic and geospatial mapping." },
            { icon: Target, title: "Precision Payload Delivery", desc: "Designed for autonomous payload deployment with mission-specific release mechanisms and high positional accuracy." },
            { icon: Zap, title: "Long-Endurance Flight", desc: "High-energy 6S2P Amprius lithium-ion battery system delivers up to 50 minutes of flight endurance under mission configuration." },
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
              <img src={missionPlanningImg} alt="Mission Planning UI" loading="lazy" className="w-full object-cover" />
            </div>
          </div>

          {/* Feature list */}
          <div className="flex-shrink-0 w-full lg:max-w-xs xl:max-w-sm space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">AUTONOMOUS MISSION PLANNING</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
              Designed using Mission Planner, the UART UAV executes fully autonomous waypoint and survey missions. Optimized endurance routes and polygon-based mapping ensure maximum area coverage while supporting real-time AI perception and autonomous payload operations.
            </p>
            {[
              { icon: Navigation, text: "Long-Endurance Waypoint Missions" },
              { icon: Map, text: "Polygon Survey Planning" },
              { icon: Layers, text: "Optimized Mapping Coverage" },
              { icon: Cpu, text: "Autonomous Mission Execution" },
              { icon: Brain, text: "AI-assisted Mission Operations" },
              { icon: Target, text: "Precision Flight Path Control" },
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
                { icon: Radio, name: "Multi-Band Communications", desc: "900 MHz / 2.4 GHz / 5.8 GHz Long Range Radio" },
                { icon: Eye, name: "Advanced Sensors", desc: "LiDAR, GPS and Camera sensors" },
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
              <img src={sysArchImg} alt="System Architecture" loading="lazy" className="w-full object-contain bg-[#020617]" />
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
              <div className="px-6 py-5 text-center text-accent bg-accent/10">Raven 1.0</div>
              <div className="px-6 py-5 text-center text-slate-400">DJI Matrice 350 RTK</div>
              <div className="px-6 py-5 text-center text-slate-400">Freefly Astro</div>
            </div>

            {/* Content Rows */}
            <div className="divide-y divide-white/10">
              {[
                { metric: "Flight Endurance", uart: "50 min", dji: "55 min", autel: "38 min", uartBetter: false },
                { metric: "Max Takeoff Weight", uart: "13 kg", dji: "9.2 kg", autel: "2.95 kg", uartBetter: false },
                { metric: "Autonomous AI", uart: "On-board Edge AI", dji: "Optional AI Payload", autel: "Companion Computer", uartBetter: true },
                { metric: "Companion Computer", uart: "NVIDIA Jetson Orin NX 16GB", dji: "Optional", autel: "Optional", uartBetter: true },
                { metric: "GPS-Denied Navigation", uart: "✓ Visual SLAM / VIO", dji: "Limited", autel: "Custom Integration", uartBetter: true },
                { metric: "Mission Planning", uart: "ArduPilot + Mission Planner / QGC", dji: "DJI Pilot 2", autel: "QGroundControl", uartBetter: true },
                { metric: "Software Stack", uart: "Fully Open Source", dji: "Closed Ecosystem", autel: "Mostly Open", uartBetter: true },
                { metric: "Payload System", uart: "Modular", dji: "Modular", autel: "Modular", uartBetter: false },
                { metric: "Payload Integration", uart: "Fully Customizable", dji: "DJI Ecosystem", autel: "Open Payload Interface", uartBetter: true },
                { metric: "Communication", uart: "900 MHz / 2.4 GHz / 5.8 GHz", dji: "O3 Enterprise", autel: "Herelink / Custom Radios", uartBetter: false },
                { metric: "Camera System", uart: "4K UHD (Interchangeable)", dji: "Zenmuse Series", autel: "Sony Mapping Camera", uartBetter: false },
                { metric: "Research & Development", uart: "Designed for Research & Competition", dji: "Enterprise", autel: "Industrial / Research", uartBetter: true },
                { metric: "Competition Ready", uart: "✓ SUAS Optimized", dji: "×", autel: "×", uartBetter: true },
                { metric: "Source Code Access", uart: "✓ Full", dji: "×", autel: "Partial", uartBetter: true },
                { metric: "Hardware Customization", uart: "✓ Unlimited", dji: "Limited", autel: "High", uartBetter: true },
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
                      <span className="md:hidden text-[10px] text-slate-500 font-mono mb-1">RAVEN 1.0</span>
                      <span className="inline-flex items-center gap-1.5">
                        {uartBetter && <Activity className="w-3.5 h-3.5 hidden md:inline" />}
                        {uart}
                      </span>
                    </div>

                    {/* DJI Value */}
                    <div className="px-4 py-3 md:px-6 md:py-5 flex flex-col md:block items-center justify-center text-center text-slate-400 text-sm border-r md:border-r-0 border-white/5">
                      <span className="md:hidden text-[10px] text-slate-600 font-mono mb-1 uppercase">M350 RTK</span>
                      {dji}
                    </div>

                    {/* Autel Value */}
                    <div className="px-4 py-3 md:px-6 md:py-5 flex flex-col md:block items-center justify-center text-center text-slate-400 text-sm">
                      <span className="md:hidden text-[10px] text-slate-600 font-mono mb-1 uppercase">ASTRO</span>
                      {autel}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="px-6 py-5 bg-accent/5 border-t border-accent/20 flex items-center gap-2">
              <Activity className="w-4 h-4 text-accent flex-shrink-0" />
              <p className="text-xs text-slate-400 font-mono">Highlighted metrics indicate where Raven 1.0 leads.</p>
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
            A standardized autonomous operational sequence designed to ensure safety, mission efficiency, and reliable execution from takeoff to landing.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Procedure 1 */}
          <Reveal delay={100} className="rounded-3xl border border-white/10 bg-[rgba(15,23,42,0.8)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-black">01</div>
              <h3 className="text-xl font-bold uppercase">Mission Preparation</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Every successful mission begins with a comprehensive pre-flight inspection to ensure the UAV is fully operational and ready for autonomous deployment.
            </p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3"><span className="text-accent">•</span> Airframe & propulsion system inspection</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Battery health and power system verification</li>
              <li className="flex gap-3"><span className="text-accent">•</span> GPS, IMU & compass status confirmation</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Telemetry, RC & video link verification</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Mission upload & parameter validation</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Payload and camera system check</li>
            </ul>
          </Reveal>

          {/* Procedure 2 */}
          <Reveal delay={200} className="rounded-3xl border border-white/10 bg-[rgba(15,23,42,0.8)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black">02</div>
              <h3 className="text-xl font-bold uppercase">Autonomous Mission Execution</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Once armed, the UART UAV autonomously performs the assigned mission with minimal operator intervention while continuously monitoring system health and mission progress.
            </p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3"><span className="text-primary">•</span> Autonomous takeoff and climb</li>
              <li className="flex gap-3"><span className="text-primary">•</span> Waypoint navigation</li>
              <li className="flex gap-3"><span className="text-primary">•</span> Polygon survey & aerial mapping</li>
              <li className="flex gap-3"><span className="text-primary">•</span> Real-time AI object detection</li>
              <li className="flex gap-3"><span className="text-primary">•</span> Precision payload delivery (mission dependent)</li>
              <li className="flex gap-3"><span className="text-primary">•</span> Autonomous Return-to-Launch (RTL) & landing</li>
            </ul>
          </Reveal>

          {/* Procedure 3 */}
          <Reveal delay={300} className="rounded-3xl border border-white/10 bg-[rgba(15,23,42,0.8)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-black">03</div>
              <h3 className="text-xl font-bold uppercase">Safety & Failsafe Systems</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Multiple safety layers continuously monitor the aircraft and automatically respond to abnormal conditions, ensuring reliable operation throughout every mission.
            </p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3"><span className="text-red-500">•</span> Automatic Return-to-Launch (RTL)</li>
              <li className="flex gap-3"><span className="text-red-500">•</span> Intelligent low-battery protection</li>
              <li className="flex gap-3"><span className="text-red-500">•</span> Geofence boundary enforcement</li>
              <li className="flex gap-3"><span className="text-red-500">•</span> GPS & EKF health monitoring</li>
              <li className="flex gap-3"><span className="text-red-500">•</span> Manual flight mode override</li>
              <li className="flex gap-3"><span className="text-red-500">•</span> Emergency failsafe procedures</li>
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
                <h4 className="text-accent font-bold mb-2 uppercase tracking-widest text-xs">System: Mission Planning</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Every mission begins with meticulous planning using Mission Planner, where autonomous waypoint routes and polygon survey missions are optimized for maximum endurance, complete area coverage, and efficient flight execution. This workflow minimizes energy consumption while ensuring reliable autonomous operation throughout the mission.
                </p>
              </div>
              <div>
                <h4 className="text-accent font-bold mb-2 uppercase tracking-widest text-xs">System: On-Board Edge AI</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  All mission-critical AI processing is performed onboard using the NVIDIA Jetson Orin NX 16GB. Running computer vision and autonomous decision-making locally eliminates cloud dependency, reduces latency, and enables reliable real-time object detection and target localization during flight.
                </p>
              </div>
              <div>
                <h4 className="text-accent font-bold mb-2 uppercase tracking-widest text-xs">System: Modular Power Architecture</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The UAV is powered by a custom 6S2P modular lithium-ion battery system built with Amprius SiCore SA08 high-energy-density cells. Its six interchangeable 2S battery modules provide 451 Wh of energy while allowing rapid field replacement, simplified maintenance, and extended mission endurance.
                </p>
              </div>
              <div>
                <h4 className="text-accent font-bold mb-2 uppercase tracking-widest text-xs">System: Structural Engineering</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A hybrid aluminum and carbon fiber airframe combines a precision-machined aluminum center frame with carbon fiber arms and structural plates. This design delivers exceptional rigidity, low vibration, and a high strength-to-weight ratio while supporting a 6.8–7.0 kg operating configuration and a 13 kg maximum takeoff weight (MTOW).
                </p>
              </div>
              <div>
                <h4 className="text-accent font-bold mb-2 uppercase tracking-widest text-xs">System: Autonomous Flight Control</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Built on the ArduPilot ecosystem, the UART UAV autonomously executes waypoint navigation, survey mapping, payload delivery, and return-to-launch procedures with minimal operator intervention. The open-source architecture enables rapid software development, mission customization, and continuous system improvements.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <img src={imgD4} alt="Technical Analysis" loading="lazy" className="w-full h-80 object-cover opacity-80" />
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
