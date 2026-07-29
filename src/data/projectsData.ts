import project10 from "../assets/images/Project/ThunderBird/D_1.webp";
import swarm1 from "../assets/images/Project/ThunderBird/D_1.webp";
import swarm2 from "../assets/images/Project/ThunderBird/D_2.webp";
import swarm3 from "../assets/images/Project/ThunderBird/D_3.webp";
import swarm4 from "../assets/images/Project/ThunderBird/D_4.webp";
import swarm5 from "../assets/images/Project/ThunderBird/D_5.webp";
import swarm6 from "../assets/images/Project/ThunderBird/D_6.webp";
import swarm7 from "../assets/images/Project/ThunderBird/D_7.webp";
import swarm8 from "../assets/images/Project/ThunderBird/D_8.webp";
import swarm9 from "../assets/images/Project/ThunderBird/D_9.webp";
import swarm10 from "../assets/images/Project/ThunderBird/D_10.webp";

import aether1 from "../assets/images/Project/Aether/Aether_1.webp";
import aether2 from "../assets/images/Project/Aether/Aether_2.webp";
import aether3 from "../assets/images/Project/Aether/Aether_3.webp";
import aether4 from "../assets/images/Project/Aether/Aether_4.webp";
import aether5 from "../assets/images/Project/Aether/Aether_5.webp";
import aetherVideo from "../assets/video/projrct_video/eather.mp4";

import raven1 from "../assets/images/Project/Raven1.0/B1.webp";
import raven2 from "../assets/images/Project/Raven1.0/B2.webp";
import raven3 from "../assets/images/Project/Raven1.0/B3.webp";
import raven4 from "../assets/images/Project/Raven1.0/B4.webp";
import raven6 from "../assets/images/Project/Raven1.0/B6.webp";
import raven12 from "../assets/images/Project/Raven1.0/B12.webp";
import raven8 from "../assets/images/Project/Raven1.0/B8.webp";
import raven9 from "../assets/images/Project/Raven1.0/B9.webp";
import raven10 from "../assets/images/Project/Raven1.0/B10.webp";
import raven11 from "../assets/images/Project/Raven1.0/B11.webp";
import raven14 from "../assets/images/Project/Raven1.0/B14.webp";
import raven16 from "../assets/images/Project/Raven1.0/B16.jpg";
import raven17 from "../assets/images/Project/Raven1.0/B17.jpg";
import raven18 from "../assets/images/Project/Raven1.0/B18.jpg";
import raven19 from "../assets/images/Project/Raven1.0/B19.jpg";
import raven20 from "../assets/images/Project/Raven1.0/B20.jpg";
import raven21 from "../assets/images/Project/Raven1.0/B21.jpg";
import raven22 from "../assets/images/Project/Raven1.0/B22.jpg";
import raven23 from "../assets/images/Project/Raven1.0/B23.jpg";
import raven24 from "../assets/images/Project/Raven1.0/B24.jpg";
import raven25 from "../assets/images/Project/Raven1.0/B25.jpg";
import raven26 from "../assets/images/Project/Raven1.0/B26.jpg";

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
    description: " An autonomous Unmanned Aerial Vehicle (UAV) developed for the SUAS 2026 competition.",
    longDescription: "The UART UAV is designed around a simple philosophy: build a reliable, modular, and intelligent autonomous aerial platform. Every component is selected and integrated to maximize endurance, adaptability, and mission performance while remaining easy to maintain and upgrade.",
    image: raven19, category: "reconnaissance", year: "2026", status: "Active", isLatest: true,
    tags: ["Tactical", "Reconnaissance"],
    specs: [
      { label: "Weight", value: "7 kg" },
      { label: "Max Takeoff Weight", value: "13 kg" },
      { label: "Dimensions(Unfolded)", value: "23×23×14 in (L × W × H)" },
      { label: "Maximum Speed", value: "20 m/s (Tested)" },
      { label: "Cruise Speed", value: "12 m/s" },
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
    media: [raven1, raven2, raven3, raven4, raven6, raven8, raven9, raven10, raven11, raven12, raven14, raven16, raven17, raven18, raven19, raven20, raven21, raven22, raven23, raven24, raven25, raven26],
    docs: [
      { title: "Mechanical", url: "https://drive.google.com/file/d/1hQJqwpcT2bh652FQ4aKtwyOmYRSgaJOY/view?usp=sharing" },
      { title: "Payload", url: "https://drive.google.com/file/d/18nwj1fJJucFo0JwKT4CIrr6Ujio__ce3/view?usp=sharing" },
      // { title: "Avionics", url: "#" },
      { title: "Electrical", url: "https://drive.google.com/file/d/1tn8LY9Dd8Gigprah1qoVBM8gkHYNQjVX/view?usp=sharing" },
      { title: "Communication", url: "https://drive.google.com/file/d/1PMgTPjvQkaNT2IRrN_VkESb19cUwfBTH/view?usp=sharing" },
      { title: "Software & Navigation", url: "https://drive.google.com/file/d/1PwHOi7NPTePAvZb7EpsY1nCwab-812k_/view?usp=sharing" },
      { title: "Technical Design Report", url: "#" }
    ],
    videoUrl: "https://www.youtube.com/embed/I8id3VY7Vdg"
  },
  {
    id: 10, name: " ThunderBird",
    description: "Next-generation, visually guided UAV prototype engineered for cutting edge autonomous flight research..",
    longDescription: "Our design philosophy is not just about the vehicle itself, but about the mission it must serve. We believe a truly innovative aerial platform must be Built for adaptation.",
    image: project10, category: "ai", year: "2026", status: "Completed", isPrototype: true,
    tags: ["AI", "Autonomous"],
    specs: [
      { label: "Weight", value: "2.5 kg" },
      { label: "Communication", value: "900 MHz, 2.4 GHz, 5.8 GHz" },
      { label: "Endurance", value: "35 minutes" },
      { label: "Onboard Computer", value: "NVIDIA Jetson Orin NX 16GB" },
      { label: "Flight Controller", value: "CUAV X7+ Pro" },
      { label: "Power System", value: "Lithium-ion Battery" },
    ],
    media: [swarm1, swarm2, swarm3, swarm4, swarm5, swarm6, swarm7, swarm8, swarm9, swarm10],
    docs: [{ title: "ThunderBird System Details Report", url: "https://drive.google.com/file/d/1C1HlujV0kDY662_shUc4lJbijL9GGbxn/view?usp=sharing" },],
    videoUrl: "https://www.youtube.com/embed/Ie_odSa6jW0"
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
