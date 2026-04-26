import project1 from "../assets/images/Project/project1.jpeg";
import project2 from "../assets/images/Project/project2.jpeg";
import project3 from "../assets/images/Project/project3.jpeg";
import project4 from "../assets/images/Project/project4.jpeg";
import project5 from "../assets/images/Project/project5.jpeg";
import project6 from "../assets/images/Project/project6.jpeg";
import project7 from "../assets/images/Project/project7.jpeg";
import project8 from "../assets/images/Project/project8.jpeg";
import project9 from "../assets/images/drone2.jpeg";

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectDoc {
  title: string;
  url: string;
}

export interface ProjectData {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  year: string;
  status: string;
  tags: string[];
  specs?: ProjectSpec[];
  media?: string[];
  docs?: ProjectDoc[];
  videoUrl?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    name: "Endurance UAV",
    description: "A high-performance UAV designed for endurance missions.",
    longDescription: "Our inspiration comes from the need for long-lasting flight times in critical missions. Much like our drone, long endurance missions require a disproportionately large energy capacity—a trait echoed in our design by the prominent custom battery pack that maximizes airtime without sacrificing payload capabilities.",
    image: project1,
    category: "research",
    year: "2024",
    status: "Active",
    tags: ["Mapping", "Autonomous"],
    specs: [
      { label: "Weight", value: "7300g (~16 lbs)" },
      { label: "Dimensions", value: "30.7 in x 24 in x 14.2 in" },
      { label: "Top Speed", value: "41mph (18.3m/s)" },
      { label: "Endurance", value: "45 minutes @ hover" },
      { label: "Propulsion System", value: "KDE 4215 – 465 KV" },
      { label: "Power System", value: "6S8P Custom LiOn Pack" },
    ],
    media: [project1, project2, project3],
    docs: [
      { title: "Aircraft Specs", url: "#" },
      { title: "Payload Details", url: "#" },
      { title: "Avionics Guide", url: "#" }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    name: "Racing Drone",
    description: "Compact and efficient aerial system for research purposes.",
    longDescription: "Built for speed and agility, the Racing Drone represents the pinnacle of our aerodynamic research. This lightweight frame combined with powerful motors ensures extreme acceleration and maneuverability, ideal for competitive drone racing and rapid response scenarios.",
    image: project2,
    category: "research",
    year: "2024",
    status: "Active",
    tags: ["Racing", "Video Graphy"],
    specs: [
      { label: "Weight", value: "500g" },
      { label: "Dimensions", value: "250mm wheelbase" },
      { label: "Top Speed", value: "90mph+" },
      { label: "Power System", value: "6S 1300mAh LiPo" },
    ],
    media: [project2],
    docs: [
      { title: "Build Log", url: "#" }
    ]
  },
  {
    id: 3,
    name: "Long Range Drone",
    description: "Autonomous mapping drone with advanced navigation.",
    longDescription: "Designed for expansive mapping operations, the Long Range Drone uses state-of-the-art AI navigation to cover vast areas efficiently. Its aerodynamic efficiency and high-capacity batteries make it perfect for prolonged autonomous flights over challenging terrain.",
    image: project3,
    category: "mapping",
    year: "2023",
    status: "Completed",
    tags: ["AI Navigation", "Long Range"],
    specs: [
      { label: "Endurance", value: "90 minutes" },
      { label: "Range", value: "15 miles" },
      { label: "Navigation System", value: "Here4 GPS + RTK" }
    ],
    media: [project3]
  },
  {
    id: 4,
    name: "Customize Dead Cat",
    description: "Lightweight drone built for environmental monitoring.",
    longDescription: "The Dead Cat frame design ensures that the propellers stay out of the camera's view, providing an unobstructed field of vision. This makes it highly suitable for environmental monitoring, aerial photography, and cinematic video capture.",
    image: project4,
    category: "environmental",
    year: "2024",
    status: "Active",
    tags: ["Environmental", "Monitoring"],
    specs: [
      { label: "Camera", value: "4K Gimbal-stabilized" },
      { label: "Endurance", value: "30 minutes" }
    ],
    media: [project4]
  },
  {
    id: 5,
    name: "Surveillance UAV",
    description: "Experimental VTOL platform for vertical take-off operations.",
    longDescription: "Combining the efficiency of fixed-wing flight with the versatility of vertical take-off and landing (VTOL), this Surveillance UAV can operate in environments where traditional runways are unavailable, offering unparalleled flexibility for long-range missions.",
    image: project5,
    category: "experimental",
    year: "2023",
    status: "Testing",
    tags: ["Long Range", "Experimental"],
    specs: [
      { label: "Wingspan", value: "2.5m" },
      { label: "Take-off", value: "VTOL" }
    ],
    media: [project5]
  },
  {
    id: 6,
    name: "Defensive Drone",
    description: "AI-integrated drone for real-time data processing.",
    longDescription: "Equipped with advanced neural network processors, the Defensive Drone processes sensory data in real-time. It is capable of object detection, tracking, and autonomous threat assessment, making it a powerful tool for modern security applications.",
    image: project6,
    category: "ai",
    year: "2024",
    status: "Active",
    tags: ["AI", "Real-time"],
    specs: [
      { label: "Processors", value: "Jetson Orin Nano 8GB" },
      { label: "Perception Sensors", value: "Arducam IMX219" }
    ],
    media: [project6]
  },
  {
    id: 7,
    name: "Fixed Wing",
    description: "Fixed-wing UAV optimized for long-range surveillance.",
    longDescription: "Our classic Fixed Wing platform is highly optimized for lift-to-drag ratio. With an endurance of over two hours, it is the workhorse for extensive surveillance and agricultural monitoring.",
    image: project7,
    category: "surveillance",
    year: "2023",
    status: "Completed",
    tags: ["Fixed-wing", "Surveillance"],
    specs: [
      { label: "Top Speed", value: "60mph" },
      { label: "Endurance", value: "120 minutes" }
    ],
    media: [project7]
  },
  {
    id: 8,
    name: "Workshop",
    description: "UART member taking Workshop about UAV.",
    longDescription: "A comprehensive workshop covering the fundamentals of UAV design, assembly, and piloting. The session includes hands-on experience with drone prototypes, teaching members about the intricate electronics and aerodynamics involved.",
    image: project8,
    category: "Workshop",
    year: "2024",
    status: "Testing",
    tags: ["Competition", "Prototype"],
    specs: [
      { label: "Duration", value: "2 Days" },
      { label: "Participants", value: "30+" }
    ],
    media: [project8]
  },
  {
    id: 9,
    name: "Multifunctional Long range Drone",
    description: "Compact prototype drone for competition testing.",
    longDescription: "A versatile platform designed for search and rescue operations. It features modular payload bays, allowing it to carry medical supplies, thermal cameras, or communication relays depending on the mission requirements.",
    image: project9,
    category: "Rescue",
    year: "2025",
    status: "Completed",
    tags: ["Rescue", "Long Range"],
    specs: [
      { label: "Range", value: "20 miles" },
      { label: "Payload Capacity", value: "2kg" }
    ],
    media: [project9]
  }
];
