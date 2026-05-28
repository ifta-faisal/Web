import project1 from "../assets/images/Project/project1.jpeg";
import project6 from "../assets/images/Project/project6.jpeg";
import project7 from "../assets/images/Project/project7.jpeg";
import project10 from "../assets/images/DetailedFeatures/Drone.jpg";
import swarm1 from "../assets/images/DetailedFeatures/D_1.jpg";
import swarm2 from "../assets/images/DetailedFeatures/D_2.jpg";
import swarm3 from "../assets/images/DetailedFeatures/D_3.jpg";
import swarm4 from "../assets/images/DetailedFeatures/D_4.jpg";
import swarm5 from "../assets/images/DetailedFeatures/D_5.jpg";
import aether1 from "../assets/images/Project/Aether_1.jpg";
import aether2 from "../assets/images/Project/Aether_2.JPG";
import aether3 from "../assets/images/Project/Aether_3.JPG";
import aether4 from "../assets/images/Project/Aether_4.jpg";
import aether5 from "../assets/images/Project/Aether_5.jpg";
import aetherPdf from "../assets/Documnet/Aether.pdf";
import deadcat1 from "../assets/images/Project/Deadcat_1.jpg";
import deadcat2 from "../assets/images/Project/Deadcat_2.jpg";
import deadcat3 from "../assets/images/Project/Deadcat_3.jpg";
import deadcat4 from "../assets/images/Project/Deadcat_4.jpg";
import deadcat5 from "../assets/images/Project/Deadcat_5.jpeg";
import raven1 from "../assets/images/Project/B1.jpeg";
import raven2 from "../assets/images/Project/B2.jpeg";
import raven3 from "../assets/images/Project/B3.jpg";
import raven4 from "../assets/images/Project/B4.jpg";
import raven5 from "../assets/images/Project/B5.jpg";
import raven6 from "../assets/images/Project/B6.jpg";
import raven7 from "../assets/images/Project/B7.jpg";

export interface ProjectSpec { label: string; value: string; }
export interface ProjectDoc { title: string; url: string; }
export interface ProjectData {
  id: number; name: string; description: string; longDescription?: string;
  image: string; category: string; year: string; status: string; tags: string[];
  isLatest?: boolean; specs?: ProjectSpec[]; media?: string[]; docs?: ProjectDoc[];
  videoUrl?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 11, name: "Raven",
    description: "Advanced tactical drone system named Raven.",
    longDescription: "The Raven project is an advanced tactical drone system featuring high maneuverability and reconnaissance capabilities.",
    image: raven3, category: "reconnaissance", year: "2026", status: "Active", isLatest: true,
    tags: ["Tactical", "Reconnaissance"],
    specs: [
      { label: "Endurance", value: "1 hour" },
      { label: "Top Speed", value: "40 mph" },
      { label: "Range", value: "5-10 km" },
      { label: "Payload Capacity", value: "5 kg" },
      { label: "Navigation", value: "GPS + Vision System" },
      { label: "Communication", value: "Encrypted Data Link (2.4GHz / 5.8GHz)" }
    ],
    media: [raven1, raven2, raven3, raven4, raven5, raven6, raven7],
    docs: [
      { title: "Raven Technical Specifications", url: "#" }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 10, name: " UAV",
    description: "Next-gen AI-powered swarm drone system for coordinated multi-agent missions.",
    longDescription: "The Autonomous Swarm UAV project represents the cutting edge of multi-agent aerial robotics. A fleet of coordinated drones communicates via mesh networking and onboard AI to autonomously plan, execute, and adapt to complex missions.",
    image: project10, category: "ai", year: "2026", status: "Active", isLatest: true,
    tags: ["Swarm", "AI", "Autonomous"],
    specs: [
      { label: "Swarm Size", value: "Up to 12 units" },
      { label: "Communication", value: "Mesh Network (900MHz)" },
      { label: "Endurance", value: "35 minutes" },
      { label: "AI Processor", value: "Jetson Orin NX 16GB" },
      { label: "Navigation", value: "RTK GPS + Visual Odometry" },
      { label: "Payload", value: "500g per unit" }
    ],
    media: [project10, swarm1, swarm2, swarm3, swarm4, swarm5],
    docs: [{ title: "TDR", url: "#" },],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 9, name: "AETHER",
    description: "Advanced Electronic Tactical Hybrid Emergency Reconnaissance UAV.",
    longDescription: "Project AETHER is designed as a resilient, modular UAV platform for disaster response and autonomous reconnaissance, integrating real-time sensing, communication, and environmental awareness. Its architecture emphasizes scalability, redundancy, and reliable operation in harsh conditions through multi-channel communication and sensor fusion. Built for future autonomy, it supports upgrades like AI-based navigation and mission adaptability using onboard edge computing.",
    image: aether1, category: "Rescue", year: "2025", status: "Completed",
    tags: ["Rescue", "Long Range"],
    specs: [
      { label: "Range", value: "8–12 km" },
      { label: "Payload Capacity", value: "0.5 – 1.4 kg" },
      { label: "Endurance", value: "up to ~35 minutes" }
    ],
    media: [aether1, aether2, aether3, aether4, aether5],
    docs: [
      { title: "AETHER Systems Manual", url: aetherPdf },
    ],
    videoUrl: "https://www.youtube.com/embed/R9LzS1dUryI?si=S05b4yigzyW1e7Pf"
  },
  {
    id: 1, name: "Endurance UAV",
    description: "A high-performance UAV designed for endurance missions.",
    longDescription: "Our inspiration comes from the need for long-lasting flight times in critical missions.",
    image: project1, category: "research", year: "2024", status: "Active",
    tags: ["Mapping", "Autonomous"],
    specs: [
      { label: "Weight", value: "7300g (~16 lbs)" },
      { label: "Dimensions", value: "30.7 in x 24 in x 14.2 in" },
      { label: "Top Speed", value: "41mph (18.3m/s)" },
      { label: "Endurance", value: "45 minutes @ hover" },
      { label: "Propulsion System", value: "KDE 4215 – 465 KV" },
      { label: "Power System", value: "6S8P Custom LiOn Pack" }
    ],
    media: [project1],
    docs: [{ title: "Aircraft Specs", url: "#" }],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4, name: "Project Dead Cat: DIY FPV Drone",
    description: "The primary objective of this project is to design a lightweight, modular, and upgradeable drone platform that balances performance, stability, and extensibility.",
    longDescription: "Project Dead Cat is a lightweight, Dead Cat–frame FPV drone designed for stable,  efficient power usage and extended endurance. It integrates GPS-assisted navigation, modular hardware architecture, and CRSF-based long-range control for reliable performance in both manual and semi-autonomous modes.",
    image: deadcat1, category: "environmental", year: "2024", status: "Completed",
    tags: ["Environmental", "Monitoring"],
    specs: [
      { label: "Range", value: "2–5 km" },
      { label: "Endurance", value: "up to ~40 minutes" }
    ],
    media: [deadcat1, deadcat2, deadcat3, deadcat4, deadcat5],
    docs: [
      { title: "Dead Cat Systems Manual", url: "https://drive.google.com/file/d/1gAf_FV3DuQHDXwpTMfXwGkugqm9GQWEA/view?usp=sharing" },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6, name: "Defensive Drone",
    description: "AI-integrated drone for real-time data processing.",
    longDescription: "Equipped with advanced neural network processors, the Defensive Drone processes sensory data in real-time.",
    image: project6, category: "ai", year: "2024", status: "Completed",
    tags: ["AI", "Real-time"],
    specs: [
      { label: "Processors", value: "Jetson Orin Nano 8GB" },
      { label: "Perception Sensors", value: "Arducam IMX219" }
    ],
    media: [project6],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 7, name: "Fixed Wing",
    description: "Fixed-wing UAV optimized for long-range surveillance.",
    longDescription: "Our classic Fixed Wing platform is highly optimized for lift-to-drag ratio with an endurance of over two hours.",
    image: project7, category: "surveillance", year: "2023", status: "Completed",
    tags: ["Fixed-wing", "Surveillance"],
    specs: [
      { label: "Top Speed", value: "60mph" },
      { label: "Endurance", value: "120 minutes" }
    ],
    media: [project7],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];
