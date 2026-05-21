import project1 from "../assets/images/Project/project1.jpeg";
import project2 from "../assets/images/Project/project2.jpeg";
import project3 from "../assets/images/Project/project3.jpeg";
import project4 from "../assets/images/Project/project4.jpeg";
import project5 from "../assets/images/Project/project5.jpeg";
import project6 from "../assets/images/Project/project6.jpeg";
import project7 from "../assets/images/Project/project7.jpeg";
import project9 from "../assets/images/drone2.jpeg";
import project10 from "../assets/images/drone3.jpeg";

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
    id: 10, name: "Autonomous Swarm UAV",
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
    media: [project10, project9],
    docs: [{ title: "Swarm Architecture", url: "#" }, { title: "AI System Guide", url: "#" }, { title: "Mission Planning", url: "#" }],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
    id: 2, name: "Racing Drone",
    description: "Compact and efficient aerial system for research purposes.",
    longDescription: "Built for speed and agility, the Racing Drone represents the pinnacle of our aerodynamic research.",
    image: project2, category: "research", year: "2024", status: "Active",
    tags: ["Racing", "Video Graphy"],
    specs: [
      { label: "Weight", value: "500g" },
      { label: "Dimensions", value: "250mm wheelbase" },
      { label: "Top Speed", value: "90mph+" },
      { label: "Power System", value: "6S 1300mAh LiPo" }
    ],
    media: [project2],
    docs: [{ title: "Build Log", url: "#" }],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3, name: "Long Range Drone",
    description: "Autonomous mapping drone with advanced navigation.",
    longDescription: "Designed for expansive mapping operations, the Long Range Drone uses state-of-the-art AI navigation to cover vast areas efficiently.",
    image: project3, category: "mapping", year: "2023", status: "Completed",
    tags: ["AI Navigation", "Long Range"],
    specs: [
      { label: "Endurance", value: "90 minutes" },
      { label: "Range", value: "15 miles" },
      { label: "Navigation System", value: "Here4 GPS + RTK" }
    ],
    media: [project3],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4, name: "Customize Dead Cat",
    description: "Lightweight drone built for environmental monitoring.",
    longDescription: "The Dead Cat frame design ensures that the propellers stay out of the camera view, providing an unobstructed field of vision.",
    image: project4, category: "environmental", year: "2024", status: "Active",
    tags: ["Environmental", "Monitoring"],
    specs: [
      { label: "Camera", value: "4K Gimbal-stabilized" },
      { label: "Endurance", value: "30 minutes" }
    ],
    media: [project4],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5, name: "Surveillance UAV",
    description: "Experimental VTOL platform for vertical take-off operations.",
    longDescription: "Combining the efficiency of fixed-wing flight with the versatility of vertical take-off and landing (VTOL).",
    image: project5, category: "experimental", year: "2023", status: "Testing",
    tags: ["Long Range", "Experimental"],
    specs: [
      { label: "Wingspan", value: "2.5m" },
      { label: "Take-off", value: "VTOL" }
    ],
    media: [project5],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6, name: "Defensive Drone",
    description: "AI-integrated drone for real-time data processing.",
    longDescription: "Equipped with advanced neural network processors, the Defensive Drone processes sensory data in real-time.",
    image: project6, category: "ai", year: "2024", status: "Active",
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
  },
  {
    id: 9, name: "Multifunctional Long range Drone",
    description: "Compact prototype drone for competition testing.",
    longDescription: "A versatile platform designed for search and rescue operations.",
    image: project9, category: "Rescue", year: "2025", status: "Completed",
    tags: ["Rescue", "Long Range"],
    specs: [
      { label: "Range", value: "20 miles" },
      { label: "Payload Capacity", value: "2kg" }
    ],
    media: [project9],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];
