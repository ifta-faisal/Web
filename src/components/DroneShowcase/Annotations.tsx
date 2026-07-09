import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface AnnotationsProps {
  scrollYProgress: MotionValue<number>;
}

// Reusable component for a glowing dot and label
const AnnotationPoint = ({ 
  progress, 
  showRange, 
  hideRange, 
  x, 
  y, 
  title, 
  description 
}: { 
  progress: MotionValue<number>;
  showRange: [number, number];
  hideRange?: [number, number];
  x: string;
  y: string;
  title: string;
  description: string;
}) => {
  
  // Construct monotonic arrays for useTransform
  const opacityInput = hideRange 
    ? [showRange[0], showRange[1], hideRange[0], hideRange[1]] 
    : [showRange[0], showRange[1]];
  
  const opacityOutput = hideRange 
    ? [0, 1, 1, 0] 
    : [0, 1];

  const opacity = useTransform(progress, opacityInput, opacityOutput);

  const scaleInput = hideRange 
    ? [showRange[0], showRange[1], hideRange[0], hideRange[1]] 
    : [showRange[0], showRange[1]];

  const scaleOutput = hideRange 
    ? [0.8, 1, 1, 0.8] 
    : [0.8, 1];

  const scale = useTransform(progress, scaleInput, scaleOutput);

  const yOffset = useTransform(
    progress,
    [showRange[0], showRange[1]],
    [20, 0]
  );

  return (
    <motion.div 
      className="absolute flex items-start space-x-4 pointer-events-auto"
      style={{ left: x, top: y, opacity, scale, y: yOffset }}
    >
      <div className="relative mt-2">
        <div className="w-3 h-3 bg-[#FF7A00] rounded-full" />
        <div className="absolute top-0 left-0 w-3 h-3 bg-[#FF7A00] rounded-full animate-ping" />
        {/* Connection line */}
        <div className="absolute top-1.5 left-3 w-16 h-[1px] bg-gradient-to-r from-[#FF7A00] to-transparent" />
      </div>
      <div className="backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-xl max-w-xs shadow-2xl">
        <h3 className="text-white font-medium text-lg tracking-wide">{title}</h3>
        <p className="text-white/70 text-sm mt-1 leading-relaxed font-light">{description}</p>
      </div>
    </motion.div>
  );
};

export const Annotations: React.FC<AnnotationsProps> = ({ scrollYProgress }) => {
  // 15% - Title
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.15, 0.2, 0.25], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.15], [50, 0]);

  // 25% - Subtitle
  const subtitleOpacity = useTransform(scrollYProgress, [0.2, 0.25, 0.3, 0.35], [0, 1, 1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0.2, 0.25], [30, 0]);

  // General fade for all labels to appear together at the end (100%)
  // The individual hide ranges drop the labels off before the end, 
  // but we want them all to show up at 100%. 
  // For simplicity, we'll map their individual show/hide ranges according to the user request.
  
  // Note: Coordinates (x, y) need to be adjusted based on the actual video framing.
  // These are estimated positions for a standard drone shot.

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      
      {/* Title (15%) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight drop-shadow-2xl">
          Autonomous UAV Platform
        </h1>
      </motion.div>

      {/* Subtitle (25%) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: subtitleOpacity, y: subtitleY }}
      >
        <h2 className="text-2xl md:text-4xl font-extralight text-white/90 tracking-wide drop-shadow-lg">
          Designed for Intelligence. Engineered for Precision.
        </h2>
      </motion.div>

      {/* Flight Controller (35%) */}
      <AnnotationPoint 
        progress={scrollYProgress}
        showRange={[0.3, 0.35]}
        hideRange={[0.4, 0.45]}
        x="55%" y="45%"
        title="Cube Flight Controller"
        description="Triple-redundant IMUs for maximum stability in GPS-denied environments."
      />

      {/* GPS Modules (45%) */}
      <AnnotationPoint 
        progress={scrollYProgress}
        showRange={[0.4, 0.45]}
        hideRange={[0.5, 0.55]}
        x="45%" y="30%"
        title="Dual RTK GPS"
        description="Centimeter-level positioning accuracy for precise autonomous waypoint navigation."
      />

      {/* Telemetry System (55%) */}
      <AnnotationPoint 
        progress={scrollYProgress}
        showRange={[0.5, 0.55]}
        hideRange={[0.6, 0.65]}
        x="30%" y="60%"
        title="Long-Range Telemetry"
        description="Encrypted 900MHz data link providing real-time system monitoring up to 10km."
      />

      {/* Camera System (65%) */}
      <AnnotationPoint 
        progress={scrollYProgress}
        showRange={[0.6, 0.65]}
        hideRange={[0.7, 0.75]}
        x="50%" y="70%"
        title="Payload & Vision"
        description="High-resolution gimbal-stabilized camera for real-time target detection and mapping."
      />

      {/* Communication Devices (75%) */}
      <AnnotationPoint 
        progress={scrollYProgress}
        showRange={[0.7, 0.75]}
        hideRange={[0.8, 0.85]}
        x="65%" y="35%"
        title="Edge AI Companion"
        description="Onboard NVIDIA Jetson processing neural networks and computer vision with zero latency."
      />

      {/* Motors (85%) */}
      <AnnotationPoint 
        progress={scrollYProgress}
        showRange={[0.8, 0.85]}
        hideRange={[0.9, 0.95]}
        x="20%" y="45%"
        title="High-Efficiency Motors"
        description="T-Motor MN6007 paired with carbon fiber props for heavy-lift endurance."
      />

      {/* 100% - All Labels Visible Overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          opacity: useTransform(scrollYProgress, [0.95, 1], [0, 1]) 
        }}
      >
        <AnnotationPoint progress={scrollYProgress} showRange={[0.95, 1]} x="55%" y="45%" title="Flight Controller" description="Cube Pilot" />
        <AnnotationPoint progress={scrollYProgress} showRange={[0.95, 1]} x="45%" y="30%" title="RTK GPS" description="Centimeter Precision" />
        <AnnotationPoint progress={scrollYProgress} showRange={[0.95, 1]} x="30%" y="60%" title="Telemetry" description="10km Range" />
        <AnnotationPoint progress={scrollYProgress} showRange={[0.95, 1]} x="50%" y="70%" title="Camera" description="Target Detection" />
        <AnnotationPoint progress={scrollYProgress} showRange={[0.95, 1]} x="65%" y="35%" title="Compute" description="Edge AI" />
        <AnnotationPoint progress={scrollYProgress} showRange={[0.95, 1]} x="20%" y="45%" title="Propulsion" description="Heavy-Lift Motors" />
      </motion.div>

    </div>
  );
};
