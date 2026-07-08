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
      { title: "Aircraft", url: "#" },
      { title: "Payload", url: "#" },
      { title: "Avionics", url: "#" },
      { title: "Electrical", url: "#" },
      { title: "Communication", url: "#" },
      { title: "Software & Navigation", url: "#" },
      { title: "Technical Design Report >", url: "#" }
    ],
    videoUrl: "https://www.youtube.com/embed/I8id3VY7Vdg"
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
      { title: "AETHER Systems Manual", url: "https://drive.google.com/file/d/1DhEqMxO5iuOlhus2vQK1eWrgj9lGsEJs/view?usp=sharing" },
    ],
    videoUrl: "https://www.youtube.com/embed/R9LzS1dUryI?si=S05b4yigzyW1e7Pf"
  },
];
