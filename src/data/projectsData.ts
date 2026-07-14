import project10 from "../assets/images/Project/D_1.jpg";
import swarm1 from "../assets/images/Project/D_1.jpg";
import swarm2 from "../assets/images/Project/D_2.jpg";
import swarm3 from "../assets/images/Project/D_3.jpg";
import swarm4 from "../assets/images/Project/D_4.jpg";
import swarm5 from "../assets/images/Project/D_5.jpg";
import swarm6 from "../assets/images/Project/D_6.jpg";
import swarm7 from "../assets/images/Project/D_7.jpg";
import swarm8 from "../assets/images/Project/D_8.jpg";
import swarm9 from "../assets/images/Project/D_9.jpg";
import swarm10 from "../assets/images/Project/D_10.jpg";

import aether1 from "../assets/images/Project/Aether_1.jpg";
import aether2 from "../assets/images/Project/Aether_2.JPG";
import aether3 from "../assets/images/Project/Aether_3.JPG";
import aether4 from "../assets/images/Project/Aether_4.jpg";
import aether5 from "../assets/images/Project/Aether_5.jpg";
import aetherVideo from "../assets/video/projrct_video/eather.mp4";

import raven1 from "../assets/images/Project/B1.jpeg";
import raven2 from "../assets/images/Project/B2.jpeg";
import raven3 from "../assets/images/Project/B3.jpg";
import raven4 from "../assets/images/Project/B4.jpg";
import raven6 from "../assets/images/Project/B6.jpg";
import raven12 from "../assets/images/Project/B12.jpg";
import raven8 from "../assets/images/Project/B8.jpg";
import raven9 from "../assets/images/Project/B9.jpg";
import raven10 from "../assets/images/Project/B10.jpg";
import raven11 from "../assets/images/Project/B11.jpg";

export interface ProjectSpec { label: string; value: string; }
export interface ProjectDoc { title: string; url: string; }
export interface ProjectData {
  id: number; name: string; description: string; longDescription?: string;
  image: string; category: string; year: string; status: string; tags: string[];
  isLatest?: boolean; isPrototype?: boolean; specs?: ProjectSpec[]; media?: string[]; docs?: ProjectDoc[];
  videoUrl?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 11, name: "Raven 1.0",
    description: "Advanced tactical drone system named Raven 1.0.",
    longDescription: "The Raven 1.0 project is an advanced tactical drone system featuring high maneuverability and reconnaissance capabilities.",
    image: raven12, category: "reconnaissance", year: "2026", status: "Active", isLatest: true,
    tags: ["Tactical", "Reconnaissance"],
    specs: [
      { label: "Weight", value: "13 kg" },
      { label: "Dimensions(Unfolded)", value: "14×23×23 (L × W × H)" },
      { label: "Maximum Speed", value: "15 m/s (Tested)" },
      { label: "Flight Endurance", value: "Up to 50 minutes" },
      { label: "Propulsion System", value: "Electric Brushless Motors" },
      { label: "Power System", value: "Lithium-ion Battery" },
      { label: "Communication Links", value: "900 MHz, 2.4 GHz, 5.8 GHz" },
      { label: "Onboard Computer", value: "NVIDIA Jetson Orin NX 16GB" },
      { label: "Flight Controller", value: "Cube Orange+" },
      { label: "Navigation System", value: "GNSS (GPS), IMU, Magnetometer, Barometer" },
      { label: "Autopilot Software", value: "ArduPilot" },
      { label: "Perception Sensors", value: "Siyi A8 Mini" },
      { label: "Software Environment", value: "Python,c++,Bash script" }
    ],
    media: [raven1, raven2, raven3, raven4, raven6, raven8, raven9, raven10, raven11, raven12],
    docs: [
      { title: "Aircraft", url: "#" },
      { title: "Payload", url: "#" },
      { title: "Avionics", url: "#" },
      { title: "Electrical", url: "https://drive.google.com/file/d/1usASKTKMacqBOxYKuqVPRMzcr5WAGc_z/view?usp=sharing" },
      { title: "Communication", url: "#" },
      { title: "Software & Navigation", url: "#" },
      { title: "Technical Design Report", url: "#" }
    ],
    videoUrl: "https://www.youtube.com/embed/I8id3VY7Vdg"
  },
  {
    id: 10, name: " Raven",
    description: "Next-generation, visually guided UAV prototype engineered for cutting edge autonomous flight research..",
    longDescription: "Our design philosophy is not just about the vehicle itself, but about the mission it must serve. We believe a truly innovative aerial platform must be Built for adaptation.",
    image: project10, category: "ai", year: "2026", status: "Active", isPrototype: true,
    tags: ["AI", "Autonomous"],
    specs: [
      { label: "Weight", value: "2.5 kg" },
      { label: "Communication", value: "900 MHz, 2.4 GHz, 5.8 GHz" },
      { label: "Endurance", value: "35 minutes" },
      { label: "Onboard Computer", value: "Jetson Orin NX 16GB" },
      { label: "Flight Controller", value: "CUAV X7+ Pro" },
      { label: "Power System", value: "Lithium-ion Battery" },
    ],
    media: [swarm1, swarm2, swarm3, swarm4, swarm5, swarm6, swarm7, swarm8, swarm9, swarm10],
    docs: [{ title: "Raven System Details Report", url: "#" },],
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
    videoUrl: aetherVideo
  },
];
