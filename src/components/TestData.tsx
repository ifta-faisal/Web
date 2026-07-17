import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Activity, Battery, MapPin, Radio, Cpu, ChevronRight } from "lucide-react";

import motorImg from "../assets/images/Project/Raven1.0/TestData/motortest.webp";
import batteryImg from "../assets/images/Project/Raven1.0/TestData/Battery_voltage.webp";
import flightPathImg from "../assets/images/Project/Raven1.0/TestData/Flight_Path_Overview.webp";
import commImg from "../assets/images/Project/Raven1.0/TestData/com_test.webp";
import cpuImg from "../assets/images/Project/Raven1.0/TestData/cputest.webp";

/* ── Scroll-reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("td-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = ""
}) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`td-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

/* ── Stat badge ── */
const StatBadge: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 text-center">
    <span className="text-accent font-black text-xl tabular-nums">{value}</span>
    <span className="text-slate-400 text-xs font-mono mt-1 uppercase tracking-widest">{label}</span>
  </div>
);

/* ── Test section card ── */
interface TestSectionProps {
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stats?: { label: string; value: string }[];
  reverse?: boolean;
  delay?: number;
  accent?: string;
}
const TestSection: React.FC<TestSectionProps> = ({
  icon: Icon, tag, title, description, image, imageAlt, stats, reverse = false, delay = 0, accent = "text-accent"
}) => (
  <Reveal delay={delay} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "" : ""}`}>
    {/* Text side */}
    <div className={reverse ? "lg:order-2" : ""}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
          <Icon className={`w-4 h-4 ${accent}`} />
        </div>
        <span className={`text-xs font-bold tracking-[0.25em] uppercase font-mono ${accent}`}>{tag}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">{title}</h2>
      <p className="text-slate-400 text-base leading-relaxed mb-6">{description}</p>

      {stats && (
        <div className={`grid grid-cols-2 sm:grid-cols-${stats.length > 2 ? '3' : '2'} gap-3`}>
          {stats.map((s, i) => (
            <StatBadge key={i} label={s.label} value={s.value} />
          ))}
        </div>
      )}
    </div>

    {/* Image side */}
    <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl scale-110" />
      <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#020617]">
        {/* Fake terminal header */}
        <div className="bg-[#0d1117] px-4 pt-3 pb-2 flex items-center gap-2 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="text-slate-500 text-xs ml-4 font-mono">{imageAlt.toLowerCase().replace(/ /g, '_')}.log</span>
        </div>
        <img
          src={image}
          alt={imageAlt}
         
          className="w-full object-contain"
        />
      </div>
    </div>
  </Reveal>
);

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
const TestData: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-transparent text-white pt-32 pb-24 overflow-x-hidden">

      {/* Atmosphere blobs */}
      <div className="absolute top-0 right-0 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-1/3 left-0 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto">

        {/* ── HERO ── */}
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase font-mono">Raven 1.0 · Test Flight</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
            Flight Test<br />
            <span className="bg-gradient-to-r from-primary via-accent to-accent text-transparent bg-clip-text">
              Data
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Comprehensive telemetry and performance data recorded during Raven 1.0's autonomous test flights. Each graph represents real onboard sensor readings captured during live missions.
          </p>
        </Reveal>

        {/* ── Summary Stats Bar ── */}
        <Reveal delay={100} className="mb-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 rounded-3xl border border-white/10 bg-[rgba(15,23,42,0.8)] backdrop-blur-md p-6">
            {[
              { label: "Avg CPU Load", value: "33%" },
              { label: "Peak CPU", value: "35%" },
              { label: "Motor PWM Range", value: "1350–1550µs" },
              { label: "Altitude", value: "20–31m" },
              { label: "RX Errors", value: "203" },
            ].map((s, i) => (
              <div key={i} className="text-center py-2">
                <div className="text-2xl font-black text-accent tabular-nums">{s.value}</div>
                <div className="text-slate-400 text-xs font-mono uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Test Data Sections ── */}
        <div className="space-y-28">

          {/* 1. Motor PWM */}
          <TestSection
            icon={Activity}
            tag="Propulsion System"
            title="Motor PWM Outputs"
            description="This graph shows the PWM signals sent by the flight controller to each motor throughout the flight. After arming (≈55 s), all four motors maintain PWM values between approximately 1350–1550 µs, with small variations due to attitude stabilization and flight control corrections. Short spikes correspond to maneuvering or disturbance rejection, while the simultaneous reduction to idle PWM at the end indicates a controlled landing and motor disarming."
            image={motorImg}
            imageAlt="Motor PWM Output Graph"
            stats={[
              { label: "Arm Time", value: "≈55s" },
              { label: "PWM Range", value: "1350–1550µs" },
              { label: "Motors", value: "4" },
            ]}
            delay={0}
          />

          {/* 2. Battery */}
          <TestSection
            icon={Battery}
            tag="Power Systems"
            title="Battery Electrical Performance"
            description="The battery performance remained stable throughout the flight. Battery voltage gradually decreased from approximately 22 V to 20.5 V under load, which is expected during normal discharge. Battery current remained mostly between 25–40 A, with brief peaks during higher thrust demands. Consequently, battery power varied between approximately 500–1000 W, demonstrating consistent power delivery without abnormal voltage collapse or excessive current draw. Overall, the electrical system operated within its expected performance range during the mission."
            image={batteryImg}
            imageAlt="Battery Electrical Performance Graph"
            stats={[
              { label: "Voltage Drop", value: "22→20.5V" },
              { label: "Current", value: "25–40A" },
              { label: "Power", value: "500–1000W" },
            ]}
            reverse={true}
            delay={100}
          />

          {/* 3. Flight Path */}
          <TestSection
            icon={MapPin}
            tag="Navigation & Trajectory"
            title="Flight Path Overview"
            description="The figure presents the trajectory recorded during a test flight conducted to evaluate the UAV's flight performance and system stability. After takeoff, the aircraft climbed to an operating altitude of approximately 20–31 m and performed a series of controlled maneuvers under normal flight conditions. The recorded flight path demonstrates stable operation, smooth altitude transitions, and a controlled landing, confirming satisfactory flight controller performance and overall airframe stability."
            image={flightPathImg}
            imageAlt="Flight Path Overview"
            stats={[
              { label: "Altitude", value: "20–31m" },
              { label: "Landing", value: "Controlled" },
              { label: "Stability", value: "✓ Pass" },
            ]}
            delay={200}
          />

          {/* 4. Communication */}
          <TestSection
            icon={Radio}
            tag="Telemetry & RF Link"
            title="Communication Link Health"
            description="The telemetry link remained stable throughout the test flight, maintaining consistently high RSSI values that stayed well above the measured noise floor, indicating a reliable wireless connection. The transmitter buffer occupancy remained above 85% for the duration of the flight, ensuring continuous data transmission. Although 203 cumulative RX errors were recorded, they did not affect telemetry performance or result in any communication loss, demonstrating robust and reliable communication throughout the test flight."
            image={commImg}
            imageAlt="Communication Link Health"
            stats={[
              { label: "TX Buffer", value: ">85%" },
              { label: "RX Errors", value: "203" },
              { label: "Link Loss", value: "0" },
            ]}
            reverse={true}
            delay={300}
          />

          {/* 5. CPU Load */}
          <TestSection
            icon={Cpu}
            tag="Compute Performance"
            title="Flight Controller CPU Load"
            description="The flight controller maintained a consistently low CPU load throughout the autonomous mission, which included autonomous navigation, aerial mapping, and real-time mannequin and tent detection. CPU utilization remained stable with an average load of 33% and a peak load of 35%, indicating that the flight controller had substantial processing headroom while executing autonomous flight tasks. The low and consistent CPU usage demonstrates that the onboard control system was able to reliably manage flight stabilization, navigation, sensor processing, and communication without approaching its computational limits."
            image={cpuImg}
            imageAlt="Flight Controller CPU Load"
            stats={[
              { label: "Avg Load", value: "33%" },
              { label: "Peak Load", value: "35%" },
              { label: "Headroom", value: "65%" },
            ]}
            delay={400}
          />

        </div>

        {/* ── CTA ── */}
        <Reveal delay={200} className="mt-28">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore Full Technical Details</h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Dive deeper into every subsystem — from the carbon fiber airframe to the onboard AI stack powering Raven 1.0.
            </p>
            <a
              href="YOUR_GOOGLE_DRIVE_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary btn-pill group px-10 py-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.187 8.5L2 15.5 5.813 22h12.375L22 15.5 17.813 8.5H6.187zm5.813 9a2 2 0 110-4 2 2 0 010 4z"/>
                <path d="M15.5 8.5L12 3 8.5 8.5h7zM12 3L6.187 8.5h11.626L12 3z"/>
              </svg>
              <span>View Technical Paper</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Page-scoped CSS */}
      <style>{`
        .td-reveal {
          opacity: 0;
          transform: translateY(2.5rem);
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
        .td-visible {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </div>
  );
};

export default TestData;
