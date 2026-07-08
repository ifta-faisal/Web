import mentor1 from '../assets/images/Advisor/Mentor1.jpeg';
import vcImage from '../assets/images/Advisor/VC.jpg';
import projectImg from '../assets/images/Project/project1.jpeg';
import droneImg from '../assets/images/drone1.jpeg';
import missionImg from '../assets/images/DetailedFeatures/mission_planning_ui.png';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  role: string;
  authorImg: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const placeholderContent = `
<h2>Introduction</h2>
<p>In this technical deep dive, we explore the cutting-edge methodologies and rigorous testing required to push the boundaries of autonomous robotics. As mission complexity scales, so do the challenges surrounding low-latency inference, dynamic path planning, and structural integrity under stress.</p>

<p>Our recent trials have demonstrated that integrating <strong>Jetson-class edge compute</strong> natively into the flight control loop yields unprecedented reaction times, allowing the UAV to process complex sensory data directly onboard.</p>

<div class="ai-summary-block">
  <h3>AI-Generated Summary</h3>
  <ul>
    <li>Edge computing significantly reduces telemetry latency for dynamic pathfinding.</li>
    <li>New carbon fiber monocoque designs increase torsional rigidity by 15% without adding weight.</li>
    <li>System integration tests reveal that custom mesh networking enables reliable 10km+ bi-directional communication.</li>
  </ul>
  <p class="summary-disclaimer">AI-generated content may summarize information incompletely. Verify important information.</p>
</div>

<h2>Architectural Overview</h2>
<p>The core philosophy driving this iteration of our UAV platform revolves around redundancy and distributed processing. By separating the low-level flight control operations from high-level computer vision tasks, we ensure that a failure in the vision pipeline does not compromise the aircraft's stability.</p>

<h3>Key Hardware Advancements</h3>
<ul>
  <li><strong>Compute:</strong> NVIDIA Jetson Orin NX for high-throughput sensor fusion.</li>
  <li><strong>Sensors:</strong> Dual RTK GPS modules paired with Arducam IMX219 modules for stereo depth estimation.</li>
  <li><strong>Airframe:</strong> 3K Twill Carbon Fiber layup, baked at precisely controlled temperatures for maximum tensile strength.</li>
</ul>

<h2>Software Stack and Path Planning</h2>
<p>The transition from tethered PC simulations to embedded onboard processing was our most significant hurdle. The neural network, originally designed for high-power desktop GPUs, had to be aggressively quantized using TensorRT.</p>

<pre><code>// Example of optimized inference initialization
auto builder = nvinfer1::createInferBuilder(gLogger);
auto network = builder->createNetworkV2(0U);
auto config = builder->createBuilderConfig();
config->setFlag(nvinfer1::BuilderFlag::kFP16); // Enabling Half-Precision
</code></pre>

<p>By shifting to FP16 precision, we reduced the inference time from ~210ms to a blistering 82ms, well within the threshold required for high-speed obstacle avoidance.</p>

<h2>Conclusion</h2>
<p>The journey from concept to a flight-ready autonomous system is fraught with engineering trade-offs. However, the data collected during these field tests validates our approach. The integration of high-performance edge compute is not just an incremental upgrade—it is a paradigm shift in aerial robotics capabilities.</p>
<p>We look forward to pushing these systems even further in the upcoming SUAS 2026 competition. Stay tuned for further build logs and technical breakdowns.</p>
`;

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Empowering the Next Generation: The UART Mission",
    excerpt: "University laboratories are the birthplaces of tomorrow industry leaders. At UART, we provide more than just technical training; we foster a culture of leadership and visionary engineering.",
    content: placeholderContent,
    author: "Dr. Md. Abul Kashem Mia",
    role: "Vice Chancellor, UIU",
    authorImg: vcImage,
    date: "April 11, 2026",
    readTime: "6 min read",
    category: "Leadership",
    image: projectImg,
  },
  {
    id: 2,
    title: "The Future of Autonomous Flight: AI and Edge Systems",
    excerpt: "The convergence of Jetson-class compute and advanced aerospace geometry is redefining UAV capabilities. We explore the roadmap for GPS-denied navigation and real-time obstacle avoidance.",
    content: placeholderContent,
    author: "Dr. A.K.M. Muzahidul Islam",
    role: "Director, UART",
    authorImg: mentor1,
    date: "April 08, 2026",
    readTime: "8 min read",
    category: "Technology",
    image: droneImg,
  },
  {
    id: 3,
    title: "SUAS 2026: The Path to Global Excellence",
    excerpt: "Competing on the international stage requires more than just a working drone. It demands rigorous systems engineering, redundant fail-safes, and a commitment to data-driven mission planning.",
    content: placeholderContent,
    author: "Dr. A.K.M. Muzahidul Islam",
    role: "Director, UART",
    authorImg: mentor1,
    date: "April 05, 2026",
    readTime: "5 min read",
    category: "Research",
    image: missionImg,
  },
  {
    id: 4,
    title: "Telemetry Records: Breaking the 10km Barrier",
    excerpt: "Technical Log: Field testing the RFD900x link at maximum gain. Achievement of stable 10.2km bi-directional telemetry with packet loss under 5% on encrypted FHSS channels.",
    content: placeholderContent,
    author: "UART Engineering Lab",
    role: "Build Log v3.1",
    authorImg: projectImg,
    date: "December 14, 2025",
    readTime: "4 min read",
    category: "Build Log",
    image: projectImg,
  },
  {
    id: 5,
    title: "Edge AI Breakthrough: Jetson Integration",
    excerpt: "Milestone: Successfully migrated mission-critical neural networks from PC-tethered testing to the onboard NVIDIA Jetson. Real-time inference latency reduced to 82ms.",
    content: placeholderContent,
    author: "UART Engineering Lab",
    role: "Build Log v2.4",
    authorImg: droneImg,
    date: "October 20, 2024",
    readTime: "7 min read",
    category: "Build Log",
    image: droneImg,
  },
  {
    id: 6,
    title: "Pioneering the Monocoque: Early Stress Tests",
    excerpt: "Foundational Record: Initial structural loading tests of the 3K Twill Carbon Fiber fuselage. Analysis shows 15% better torsional rigidity than target specs.",
    content: placeholderContent,
    author: "UART Engineering Lab",
    role: "Build Log v1.0",
    authorImg: projectImg,
    date: "February 12, 2024",
    readTime: "5 min read",
    category: "Build Log",
    image: projectImg,
  }
];
