// import mentor1 from '../assets/images/Advisor/Mentor1.jpeg';
// import vcImage from '../assets/images/Advisor/VC.jpg';
// import projectImg from '../assets/images/Project/project1.jpeg';

import missionImg from '../assets/images/DetailedFeatures/mission_planning_ui.png';
import mapImg from '../assets/images/DetailedFeatures/map.png';
// import suasImg from '../assets/images/logo/suas.png';
import israfilImg from '../assets/images/Team/israfil.png';
import biplobImg from '../assets/images/Team/alfi.png';
import faisalImg from '../assets/images/Team/member4.png';
import member5 from '../assets/images/Team/member5.png';
import member9 from '../assets/images/Team/member9.png';
import adnan from '../assets/images/Team/adnan.png';
import member3 from '../assets/images/Team/member3.png';
import nusrat from '../assets/images/Team/nusrat.jpeg';
import arpon from '../assets/images/Team/arpon.png';
import member1 from '../assets/images/Team/member1.png';
import member2 from '../assets/images/Team/member2.png';
import member7 from '../assets/images/Team/member7.png';
import probinImg from '../assets/images/Team/probin.png';

// Images for new Blog 10
import propHero from '../assets/images/Blog/blog/dronetopcover.jpeg';
import motorComp from '../assets/images/Blog/blog/motor.jpeg';
import motorProp from '../assets/images/Blog/blog/prop.jpeg';
import batteryDist from '../assets/images/DetailedFeatures/Battery.jpeg';

// ─── Blog 1 Imports ───
import blog1Cover from '../assets/images/Blog/Blog_1/Blog_1cover.jpeg';
import bolg1 from '../assets/images/Blog/Blog_1/Bolg1.jpeg';
import blog2 from '../assets/images/Blog/Blog_1/Blog2.jpeg';
import blog3 from '../assets/images/Blog/Blog_1/Blog3.jpeg';
import blog4 from '../assets/images/Blog/Blog_1/Blog4.jpeg';
import blog5 from '../assets/images/Blog/Blog_1/Blog5.jpeg';
import blog6 from '../assets/images/Blog/Blog_1/Blog6.jpeg';

// ─── Blog 2 Imports ───
import blog2Cover from '../assets/images/Blog/Blog_2/Blog_2cover.jpeg';
import b2Blog2 from '../assets/images/Blog/Blog_2/Blog2.jpeg';
import b2Blog4 from '../assets/images/Blog/Blog_2/Blog4.png';
import b2Blog5 from '../assets/images/Blog/Blog_2/Blog5.jpeg';

// ─── Blog 3 Imports ───
import blog3Cover from '../assets/images/Blog/3/Blog_3cover.png';
import b3Blog3 from '../assets/images/Blog/3/Blog3.png';

// ─── Blog 6 Imports ───
import blog6Cover from '../assets/images/Blog/6/cover.jpeg';
import b6OnBoard from '../assets/images/Blog/6/On_Board.jpeg';
import b6Tele from '../assets/images/Blog/6/Tele.jpeg';
import b6Groundstation from '../assets/images/Blog/6/groundstation.jpeg';

// ─── Blog 7 Imports ───
import blog7Cover from '../assets/images/Blog/7/cover.jpeg';
import b7Blog1 from '../assets/images/Blog/7/blog1.png';
import b7Blog2 from '../assets/images/Blog/7/blog2.jpeg';
import b7Blog3 from '../assets/images/Blog/7/blog3.jpeg';

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
  <h3>Summary</h3>
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

const postsRaw: BlogPost[] = [
  {
    id: 7,
    title: "Introducing Our SUAS 2026 Autonomous UAV",
    excerpt: "Discover the engineering decisions, autonomous technologies, and multidisciplinary collaboration behind UART's next-generation UAV developed for the SUAS 2026 competition.",
    content: `
<h2>Every Mission Begins with a Clear Vision</h2>
<p>Autonomous aerial systems are becoming increasingly important in disaster response, environmental monitoring, precision agriculture, infrastructure inspection, and search-and-rescue operations. These real-world applications demand aircraft that can operate with minimal human intervention while making reliable decisions in dynamic environments.
At the UIU Aerial Robotics Team (UART), we view the SUAS competition as more than a robotics challenge. It is an opportunity to design, integrate, and validate an autonomous system that combines mechanical engineering, embedded systems, computer vision, artificial intelligence, and software engineering into a single platform.
Our 2026 UAV represents months of research, design iterations, hardware testing, software development, and interdisciplinary collaboration. Every subsystem was developed with a single objective:
<strong>Build a reliable autonomous aircraft capable of completing complex missions safely and efficiently.</strong></p>

<h2>The Challenge</h2>
<p>The SUAS mission is significantly more demanding than conventional waypoint navigation.
Throughout a single autonomous flight, the aircraft must:</p>
<ul>
  <li>Navigate a predefined mission route</li>
  <li>Generate a geo-referenced aerial map</li>
  <li>Detect mission targets using onboard AI</li>
  <li>Avoid unexpected obstacles</li>
  <li>Deliver payloads accurately</li>
  <li>Maintain safe autonomous operation</li>
</ul>
<p>Each capability depends on every other subsystem working together. Success is determined not by one individual component, but by the reliability of the complete system.</p>
<img src="${bolg1}" alt="Competition Mission Illustration" class="blog-section-img" />

<h2>Designing Around Reliability</h2>
<p>One of the first engineering decisions we made was to prioritize reliability over complexity.
Rather than maximizing speed or aggressive flight performance, we focused on creating an aircraft capable of completing the entire mission without failures or safety violations.
This philosophy influenced nearly every design decision—from airframe selection and power distribution to onboard computing and mission software.
<strong>Reliability became our primary design metric.</strong></p>
<img src="${blog2}" alt="Airframe Photograph" class="blog-section-img" />

<h2>A Modular System</h2>
<p>Instead of treating navigation, perception, mapping, and obstacle avoidance as isolated features, the aircraft was designed as a unified autonomous platform.</p>
Several independent subsystems continuously exchange information during flight.
These include:</p>
<ul>
  <li>Flight Control</li>
  <li>Navigation</li>
  <li>Computer Vision</li>
  <li>Mapping</li>
  <li>Obstacle Avoidance</li>
  <li>Mission Planning</li>
  <li>Ground Control Station</li>
  <li>Payload Delivery</li>
</ul>
<p>Each subsystem performs a specialized task while contributing to the overall mission.</p>
<img src="${blog4}" alt="System Architecture Diagram" class="blog-section-img" />

<h2>AI at the Center of Perception</h2>
<p>Traditional object detection systems often require thousands of labeled images before they can recognize a new object.
Our approach explores a different direction.
The UAV employs a zero-shot vision-language detection pipeline powered by Grounding DINO V2, allowing the system to identify mission targets using natural language prompts instead of task-specific training.
This significantly reduces development time while increasing flexibility for future missions.</p>


<h2>Mapping the Mission Environment</h2>
<p>Situational awareness is essential for autonomous decision-making.</p>
During flight, the UAV continuously captures overlapping aerial imagery together with GPS metadata.
These images are processed to generate a high-resolution orthographic map of the mission area, providing an accurate representation of the operational environment.
The mapping pipeline is designed to minimize distortion while preserving spatial accuracy.<p>
<img src="${blog3}" alt="Mapping Result" class="blog-section-img" />

<h2>Safe Navigation</h2>
<p>Autonomy is only valuable if it remains safe.
To improve operational reliability, the aircraft integrates LiDAR-based obstacle detection into the navigation pipeline.
The system continuously monitors nearby obstacles and adjusts its flight path whenever necessary, allowing the UAV to safely continue its mission without manual intervention.
This capability becomes particularly important in dynamic or partially unknown environments.</p>


<h2>Software Behind the Aircraft</h2>
<p>The hardware is only one part of the system.
Mission planning, monitoring, telemetry, and subsystem communication are coordinated through a custom web-based Ground Control Station developed by the team.
The architecture separates mission management, perception, mapping, and flight control into independent services, making the platform easier to maintain, expand, and test.</p>
<img src="${blog5}" alt="GCS Screenshot" class="blog-section-img" />

<h2>Engineering as a Team</h2>
<p>Developing an autonomous UAV requires expertise from multiple engineering disciplines.</p>
<ul>
  <li>Mechanical engineers design lightweight structures.</li>
  <li>Electrical engineers develop reliable power systems.</li>
  <li>Software engineers build mission infrastructure.</li>
  <li>AI researchers develop perception algorithms.</li>
  <li>Integration engineers ensure every subsystem works together.</li>
</ul>
<p>Our UAV is the result of continuous collaboration across these domains.</p>
<img src="${blog6}" alt="Team Working Photograph" class="blog-section-img" />

<h2>Looking Ahead</h2>
<p>The 2026 platform represents an important milestone in UART's ongoing research into autonomous aerial systems.
Future work will focus on expanding onboard intelligence, improving mission robustness, enhancing perception capabilities, and developing custom electronic subsystems for next-generation aircraft.
The lessons learned throughout this project will guide the evolution of future UART platforms.</p>

<div class="about-authors-section">
  <h2>About the Authors</h2>
  <div class="author-card">
    <img src="${member1}" alt="T M AL Anam" class="author-photo" />
    <div class="author-info">
      <h4>T M AL Anam</h4>
      <p>T M AL Anam is the Team Lead of the UIU Aerial Robotics Team (UART), heading the Electrical Team and overseeing the system architecture for our SUAS 2026 UAV.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${member2}" alt="Ahmed Junaed" class="author-photo" />
    <div class="author-info">
      <h4>Ahmed Junaed</h4>
      <p>Ahmed Junaed is the Co-Team Lead of the UIU Aerial Robotics Team (UART), specializing in Software &amp; Navigation integration for autonomous missions.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${member7}" alt="Maysoon Zahir" class="author-photo" />
    <div class="author-info">
      <h4>Maysoon Zahir</h4>
      <p>Maysoon Zahir is a Sub Team Lead of the PR &amp; Marketing Team and R&amp;D Team at the UIU Aerial Robotics Team (UART), managing team outreach and research initiatives.</p>
    </div>
  </div>
</div>
`,
    author: "T M AL Anam • Ahmed Junaed • Maysoon Zahir",
    role: "Leadership Team, UIU Aerial Robotics Team",
    authorImg: member1,
    date: "July 10, 2026",
    readTime: "8 min read",
    category: "Leadership",
    image: blog1Cover, // Updated with actual UAV hero image
  },
  {
    id: 8,
    title: "Engineering the Flight Platform: Airframe, Propulsion & Power",
    excerpt: "A reliable autonomous mission starts with a reliable aircraft. Discover how UART designed a lightweight, modular, and efficient flight platform for the SUAS 2026 competition.",
    content: `
<h2>Building the Foundation of Autonomous Flight</h2>
<p>Every successful autonomous UAV begins with a strong foundation. Before artificial intelligence can detect objects or navigation algorithms can guide the aircraft, the drone itself must provide a stable, efficient, and reliable flight platform.
For the SUAS 2026 competition, our objective was not simply to build a drone that could fly. We wanted to engineer a platform capable of carrying multiple subsystems while maintaining stability, endurance, and ease of deployment in the field.
Every component—from the airframe to the battery configuration—was selected with reliability and mission performance in mind.</p>

<h2>Defining Our Design Goals</h2>
<p>Before selecting hardware, we established a set of engineering goals that would guide every design decision.
Our primary objectives included:</p>
<ul>
  <li>Lightweight construction for improved endurance</li>
  <li>High structural rigidity to reduce vibration</li>
  <li>Modular design for easy maintenance</li>
  <li>Rapid field assembly</li>
  <li>Stable autonomous flight</li>
  <li>Compliance with SUAS transportation requirements</li>
</ul>
<p>Rather than optimizing for a single metric, we aimed to achieve a balanced platform capable of supporting the complete autonomous mission.</p>
<img src="${b2Blog2}" alt="Design Sketch or CAD Model" class="blog-section-img" />

<h2>Choosing the Airframe</h2>
<p>The aircraft adopts a quadrotor X-configuration built around a carbon fiber frame. This configuration provides a balance between maneuverability, stability, and mechanical simplicity while offering sufficient payload capacity for onboard sensors and computing hardware.
Carbon fiber was selected because it offers:</p>
<ul>
  <li>High strength-to-weight ratio</li>
  <li>Excellent structural rigidity</li>
  <li>Reduced vibration during flight</li>
  <li>Improved durability</li>
  <li>Lightweight construction</li>
</ul>
<p>The modular frame design also simplifies transportation, maintenance, and future hardware upgrades.</p>


<h2>Designing the Propulsion System</h2>
<p>Selecting the propulsion system required balancing efficiency and performance.
Instead of focusing solely on maximum thrust, we evaluated components that could deliver consistent flight performance during mapping, object detection, and autonomous navigation.
Our propulsion system is designed to provide:</p>
<ul>
  <li>Stable hover performance</li>
  <li>Efficient power consumption</li>
  <li>Smooth control response</li>
  <li>Reliable operation during long-duration missions</li>
</ul>
<p>This balance allows the aircraft to perform multiple mission tasks without compromising flight stability.</p>


<h2>Hardware Integration Analysis</h2>
<p>Looking closely at our flight platform, several critical components work together to ensure mission success. Based on our hardware integration:</p>
<ul>
  <li><strong>MN6007 Motors:</strong> These high-efficiency motors are chosen specifically for heavy-lift endurance, ensuring the UAV can carry its payload without excessive battery drain.</li>
  <li><strong>Carbon Fiber Propellers:</strong> Paired with the MN6007 motors, carbon props offer maximum rigidity. This prevents blade flexing under heavy loads, translating to immediate and precise control responses.</li>
  <li><strong>Cube Flight Controller:</strong> At the heart of the system is the Cube. It acts as the brain of the drone, featuring redundant IMUs to guarantee stable flight even in unpredictable conditions.</li>
  <li><strong>Custom Mounting & Antenna Placement:</strong> The custom 3D-printed vibration-isolated mounts (visible in orange) securely house the Cube and dual GPS antennas, ensuring clear signal reception and protecting sensitive sensors from motor vibrations.</li>
</ul>
<p>This deliberate combination of premium off-the-shelf components and custom engineering ensures the platform exceeds SUAS requirements.</p>

<h2>Powering the Aircraft</h2>
<p>A reliable aircraft depends on a reliable power system.
To maximize endurance while satisfying competition transportation requirements, we designed a battery configuration using lithium-ion cells arranged to remain within the allowable energy limits.
Our power system was developed with the following priorities:</p>
<ul>
  <li>Long flight endurance</li>
  <li>Safe transportation</li>
  <li>Balanced weight distribution</li>
  <li>Stable power delivery</li>
  <li>Simplified electrical architecture</li>
</ul>
<p>Careful battery placement also improves the aircraft's center of gravity, contributing to smoother autonomous flight.</p>
<img src="${b2Blog4}" alt="Battery Configuration Diagram" class="blog-section-img" />

<h2>Electrical Integration</h2>
<p>The power architecture extends beyond the batteries.
Dedicated power regulation circuits ensure that sensitive onboard electronics receive stable voltage throughout the mission, reducing electrical noise and improving overall system reliability.
The integrated electrical system supplies power to:</p>
<ul>
  <li>Flight Controller</li>
  <li>Companion Computer</li>
  <li>Camera System</li>
  <li>Telemetry Modules</li>
  <li>Electronic Speed Controllers (ESCs)</li>
</ul>
<p>A clean power distribution strategy helps maintain consistent performance across all onboard subsystems.</p>
<img src="${b2Blog5}" alt="Electrical Integration" class="blog-section-img" />

<h2>Engineering for Reliability</h2>
<p>Every hardware decision was made with one question in mind:
<strong>Will this improve mission reliability?</strong>
Instead of chasing maximum performance numbers, we prioritized a platform that could consistently complete autonomous missions under real operating conditions.
This philosophy influenced our choices in materials, propulsion, battery configuration, and electrical design.
A dependable aircraft forms the foundation upon which every intelligent subsystem operates.</p>

<h2>Looking Ahead</h2>
<p>While the current platform has demonstrated reliable performance, development continues beyond the 2026 competition.
Future iterations will focus on:</p>
<ul>
  <li>Custom battery management systems (BMS)</li>
  <li>In-house electronic speed controllers (ESCs)</li>
  <li>Custom power regulation hardware</li>
  <li>PCB-based electrical integration</li>
  <li>Further weight optimization</li>
</ul>
<p>These developments will support UART's long-term vision of building increasingly capable autonomous aerial systems.</p>

<div class="about-authors-section">
  <h2>About the Authors</h2>
  <div class="author-card">
    <img src="${israfilImg}" alt="MD. Israfil Hossain" class="author-photo" />
    <div class="author-info">
      <h4>MD. Israfil Hossain</h4>
      <p>MD. Israfil Hossain is a Research Member at the UIU Aerial Robotics Team (UART), contributing to  computer vision research, and AI integration for the SUAS 2026 competition platform.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${biplobImg}" alt="Md. Biplob" class="author-photo" />
    <div class="author-info">
      <h4>Md. Biplob</h4>
      <p>Md. Biplob is a Research Member at the UIU Aerial Robotics Team (UART), researching on  mission-critical subsystem integration for next-generation UAV platforms.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${probinImg}" alt="Probin Chandra Nath" class="author-photo" />
    <div class="author-info">
      <h4>Probin Chandra Nath</h4>
      <p>Probin Chandra Nath is a Electrical Team Member  at the UIU Aerial Robotics Team (UART), contributing to electrical subsytem and power distribution sysytem for the SUAS 2026 competition platform.</p>
    </div>
  </div>
</div
`,
    author: "MD. Israfil Hossain • Md. Biplob • Ifta Faisal",
    role: "Research Members, UIU Aerial Robotics Team",
    authorImg: "",
    date: "July 10, 2026",
    readTime: "9 min read",
    category: "Electrical",
    image: blog2Cover, // Updated with actual airframe hero image
  },
  {
    id: 9,
    title: "Teaching Our UAV to See: Zero-Shot Object Detection with Grounding DINO",
    excerpt: "Traditional object detection requires thousands of labeled images. Discover how UART leverages Grounding DINO V2 to recognize mission targets using natural language prompts instead of task-specific training.",
    content: `
<h2>A Different Approach to Computer Vision</h2>
<p>One of the most challenging aspects of autonomous flight is enabling the UAV to understand what it sees. During the SUAS mission, the aircraft must identify specific ground targets while navigating through a dynamic environment.</p>

<p>Traditional computer vision systems typically rely on supervised learning, where thousands of annotated images are required to train a model for a limited set of objects. While effective, this approach demands significant time and effort to collect, label, and maintain datasets.</p>

<p>For our 2026 UAV, we explored a more flexible solution by adopting Grounding DINO V2, a zero-shot vision-language model capable of detecting objects from natural language descriptions.</p>

<h2>Why Zero-Shot Detection?</h2>
<p>Unlike conventional object detection models, zero-shot detection does not require training for every new object.
Instead, the model uses descriptive text prompts to identify objects within an image.
This approach provides several advantages:</p>
<ul>
  <li>No need for large labeled datasets</li>
  <li>Faster development cycle</li>
  <li>Greater flexibility for new mission requirements</li>
  <li>Better adaptability to changing environments</li>
  <li>Reduced model retraining</li>
</ul>
<p>These benefits make zero-shot detection particularly suitable for research and rapidly evolving autonomous systems.</p>


<h2>Selecting Grounding DINO V2</h2>
<p>After evaluating different approaches, we selected Grounding DINO V2 because of its strong performance in open-vocabulary object detection.
Rather than recognizing only predefined classes, the model understands relationships between images and natural language, allowing it to detect a much wider variety of objects.
Some of the reasons behind our selection include:</p>
<ul>
  <li>Open-vocabulary object detection</li>
  <li>Strong detection accuracy</li>
  <li>Efficient deployment on edge computing hardware</li>
  <li>Compatibility with NVIDIA Jetson platforms</li>
  <li>Continuous improvements from the research community</li>
</ul>
<p>Its flexibility aligns well with the unpredictable nature of autonomous missions.</p>
<img src="${b3Blog3}" alt="Grounding DINO Architecture or Workflow" class="blog-section-img" />

<h2>Detecting Mission Targets</h2>
<p>During the SUAS mission, the UAV processes images captured by the onboard camera in real time.
Instead of searching for a fixed class label, the model receives carefully designed text prompts that describe the mission targets.
Some examples include:</p>
<ul>
  <li>"Mannequin"</li>
  <li>"Human dummy"</li>
  <li>"Person lying on the ground"</li>
  <li>"Tent"</li>
  <li>"Camping tent"</li>
  <li>"Pop-up tent"</li>
</ul>
<p>The model evaluates how closely different regions of the image match each prompt and generates bounding boxes around the most relevant detections.</p>
<p>This prompt-based approach allows the system to adapt without requiring additional model training.</p>


<h2>Improving Detection Reliability</h2>
<p>Real-world environments introduce numerous challenges, including varying lighting conditions, shadows, occlusions, and background clutter.
To improve reliability, the detection pipeline incorporates several filtering techniques before confirming a target.
These include:</p>
<ul>
  <li>Confidence score thresholding</li>
  <li>Non-Maximum Suppression (NMS)</li>
  <li>Multi-prompt detection</li>
  <li>Temporal consistency across consecutive frames</li>
</ul>
<p>These additional validation steps help reduce false positives while increasing confidence in the final detection results.</p>


<h2>From Detection to Decision</h2>
<p>Object detection is only one part of the perception pipeline.
Once a target is identified, its location is combined with GPS and flight data to support mission planning and autonomous decision-making.
The detected information can then be used for:</p>
<ul>
  <li>Mission target localization</li>
  <li>Navigation updates</li>
  <li>Risk mapping</li>
  <li>Payload delivery planning</li>
  <li>Mission reporting</li>
</ul>
<p>This integration transforms computer vision from a standalone capability into a core component of the UAV's autonomous workflow.</p>


<h2>Looking Ahead</h2>
<p>Zero-shot detection represents an exciting direction for autonomous aerial systems, but there is still room for improvement.</p>
<p>Future development will focus on:</p>
<ul>
  <li>Faster onboard inference</li>
  <li>Improved prompt engineering</li>
  <li>Enhanced detection under challenging weather conditions</li>
  <li>Multi-object tracking</li>
  <li>Integration with additional perception sensors</li>
</ul>
<p>As vision-language models continue to evolve, they offer new opportunities to build UAVs that are more adaptable, intelligent, and capable of understanding complex environments.</p>

<div class="about-authors-section">
  <h2>About the Authors</h2>
  <div class="author-card">
    <img src="${member3}" alt="Fahad Rahaman" class="author-photo" />
    <div class="author-info">
      <h4>Fahad Rahaman</h4>
      <p>Fahad Rahaman is the Sub Team Lead of the Software &amp; Navigation Team and R&amp;D Team at the UIU Aerial Robotics Team (UART), contributing to autonomous systems development and mission software.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${member2}" alt="Ahmed Junaed" class="author-photo" />
    <div class="author-info">
      <h4>Ahmed Junaed</h4>
      <p>Ahmed Junaed is the Co-Team Lead of the UIU Aerial Robotics Team (UART), specializing in Software &amp; Navigation integration for autonomous missions.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${arpon}" alt="Md Shazan Mahmud Arpon" class="author-photo" />
    <div class="author-info">
      <h4>Md Shazan Mahmud Arpon</h4>
      <p>Md Shazan Mahmud Arpon is a Research Member of the Software &amp; Navigation Team at the UIU Aerial Robotics Team (UART), contributing to computer vision and embedded software integration.</p>
    </div>
  </div>
</div>
`,
    author: "Fahad Rahaman • Ahmed Junaed • Md Shazan Mahmud Arpon",
    role: "Software & Navigation Team, UIU Aerial Robotics Team",
    authorImg: member3,
    date: "July 10, 2026",
    readTime: "10 min read",
    category: "Software",
    image: blog3Cover, // Updated with actual detection hero image
  },
  {
    id: 10,
    title: "From Design to Flight: Engineering the Propulsion System",
    excerpt: "A UAV's performance depends on the harmony between its motors, propellers, and power system. Learn how UART engineered an efficient propulsion system for stable autonomous flight.",
    content: `
<h2>Turning Electrical Energy into Flight</h2>
<p>The propulsion system is responsible for generating the thrust that keeps a UAV airborne. Every motor, propeller, and battery contributes to the aircraft's stability, efficiency, and endurance.
For the SUAS 2026 platform, our objective was not simply to maximize thrust. Instead, we focused on achieving a balanced propulsion system capable of supporting autonomous navigation, aerial mapping, and onboard computing throughout the mission.</p>

<h2>Finding the Right Balance</h2>
<p>Selecting propulsion components requires balancing several competing factors.
Larger motors can generate more thrust, while smaller motors often improve agility. Similarly, propeller size influences both efficiency and flight characteristics.
When evaluating different configurations, we considered:</p>
<ul>
  <li>Flight endurance</li>
  <li>Stable hovering</li>
  <li>Payload capacity</li>
  <li>Power efficiency</li>
  <li>Control responsiveness</li>
</ul>
<p>Rather than optimizing for a single parameter, we selected components that provide reliable overall performance.</p>

<img src="${motorComp}" alt="Motor Comparison" class="blog-section-img" />

<h2>Selecting Motors and Propellers</h2>
<p>The propulsion system combines brushless motors with large propellers to provide smooth and efficient flight.
This combination offers several advantages:</p>
<ul>
  <li>High thrust efficiency</li>
  <li>Lower power consumption</li>
  <li>Stable autonomous hovering</li>
  <li>Reduced vibration</li>
  <li>Improved flight endurance</li>
</ul>
<p>Careful component matching ensures that the propulsion system operates efficiently under varying mission conditions.</p>

<img src="${motorProp}" alt="Motor and Propeller Setup" class="blog-section-img" />

<h2>Managing Power Efficiently</h2>
<p>Efficient propulsion is not only about generating thrust—it is also about using energy wisely.
Battery capacity, motor efficiency, and propeller selection all influence how long the UAV can remain airborne.
Our power strategy focuses on:</p>
<ul>
  <li>Efficient energy usage</li>
  <li>Balanced weight distribution</li>
  <li>Reliable power delivery</li>
  <li>Consistent flight performance</li>
  <li>Safe operation</li>
</ul>
<p>This integrated approach helps maximize mission duration while maintaining stable flight.</p>

<img src="${batteryDist}" alt="Battery and Power Distribution" class="blog-section-img" />

<h2>Testing for Reliable Performance</h2>
<p>Every propulsion system must be validated before deployment.
Ground testing allows us to verify system performance under controlled conditions before autonomous flight begins.
Our testing process includes:</p>
<ul>
  <li>Motor performance testing</li>
  <li>Propeller balancing</li>
  <li>Thrust verification</li>
  <li>Power consumption analysis</li>
  <li>Flight stability evaluation</li>
</ul>
<p>These tests provide valuable insights that help improve reliability and overall flight performance.</p>

<h2>Looking Ahead</h2>
<p>Mechanical engineering is a continuous process of refinement.
Future improvements to the propulsion system will explore:</p>
<ul>
  <li>Higher-efficiency motors</li>
  <li>Improved propeller optimization</li>
  <li>Lightweight structural integration</li>
  <li>Advanced vibration reduction</li>
  <li>Better aerodynamic performance</li>
</ul>
<p>These developments will support longer flight times and more capable autonomous missions in future UART platforms.</p>

<div class="about-authors-section">
  <h2>About the Authors</h2>
  <div class="author-card">
    <img src="${israfilImg}" alt="MD. Israfil Hossain" class="author-photo" />
    <div class="author-info">
      <h4>MD. Israfil Hossain</h4>
      <p>Research Member, UIU Aerial Robotics Team</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${biplobImg}" alt="Md. Biplob" class="author-photo" />
    <div class="author-info">
      <h4>Md. Biplob</h4>
      <p>Research Member, UIU Aerial Robotics Team</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${faisalImg}" alt="Ifta Faisal" class="author-photo" />
    <div class="author-info">
      <h4>Ifta Faisal</h4>
      <p>Research Member, UIU Aerial Robotics Team</p>
    </div>
  </div>
</div>
`,
    author: "MD. Israfil Hossain • Md. Biplob • Ifta Faisal",
    role: "Research Members, UIU Aerial Robotics Team",
    authorImg: "",
    date: "August 28, 2026",
    readTime: "9 min read",
    category: "Mechanical",
    image: propHero,
  },
  {
    id: 11,
    title: "Building the Airframe: Designing a Lightweight and Reliable UAV",
    excerpt: "Every successful UAV starts with a strong foundation. Explore how UART designed a lightweight, durable, and modular airframe capable of supporting autonomous missions in the SUAS 2026 competition.",
    content: `
<h2>The Backbone of Every UAV</h2>
<p>An autonomous UAV is only as reliable as the structure that supports it. While artificial intelligence and navigation systems often receive the most attention, the airframe plays an equally important role in ensuring safe and stable flight.</p>
<p>For the SUAS 2026 platform, our goal was to design an airframe that could carry multiple onboard systems while remaining lightweight, durable, and easy to maintain. Every design decision was made with long-term reliability and mission performance in mind.</p>

<h2>Defining Our Design Goals</h2>
<p>Before selecting materials or components, we identified the characteristics required for a competition-ready aircraft.
Our design objectives included:</p>
<ul>
  <li>Lightweight construction</li>
  <li>High structural strength</li>
  <li>Easy transportation</li>
  <li>Rapid assembly</li>
  <li>Stable flight characteristics</li>
  <li>Modular component installation</li>
</ul>
<p>These goals became the foundation for every mechanical design decision throughout the project.</p>
<img src="${b7Blog1}" alt="Initial CAD Design" class="blog-section-img" />

<h2>Why Carbon Fiber?</h2>
<p>Material selection has a significant impact on UAV performance.
After evaluating different options, we selected carbon fiber because it offers excellent strength while keeping the aircraft lightweight.
Some of the advantages include:</p>
<ul>
  <li>High strength-to-weight ratio</li>
  <li>Excellent rigidity</li>
  <li>Low vibration</li>
  <li>Corrosion resistance</li>
  <li>Long service life</li>
</ul>
<p>These properties help maintain stable flight while supporting sensitive onboard electronics.</p>
<img src="${b7Blog2}" alt="Carbon Fiber Frame" class="blog-section-img" />

<h2>Choosing the X-Frame Configuration</h2>
<p>The UAV uses a quadrotor X-frame configuration, a design widely adopted in autonomous aerial systems due to its balance between stability and maneuverability.
The symmetrical layout offers several benefits:</p>
<ul>
  <li>Balanced thrust distribution</li>
  <li>Improved flight stability</li>
  <li>Simplified control algorithms</li>
  <li>Better weight distribution</li>
  <li>Easier maintenance</li>
</ul>
<p>This configuration also provides sufficient space for sensors, batteries, and onboard computing hardware.</p>
<img src="${b7Blog3}" alt="X-Frame Configuration" class="blog-section-img" />

<h2>Designing for Easy Maintenance</h2>
<p>A competition aircraft should not only fly well but also be easy to repair and transport.
To simplify field operations, the airframe was designed with a modular structure that allows components to be replaced without rebuilding the entire aircraft.
This modular approach provides:</p>
<ul>
  <li>Faster maintenance</li>
  <li>Easier upgrades</li>
  <li>Reduced repair time</li>
  <li>Better accessibility</li>
  <li>Improved transportation</li>
</ul>
<p>These features are especially valuable during competitions where preparation time is limited.</p>

<h2>Looking Ahead</h2>
<p>The current airframe provides a strong foundation for autonomous flight, but mechanical development never truly stops.</p>
<p>Future improvements will focus on:</p>
<ul>
  <li>Additional weight reduction</li>
  <li>Improved vibration isolation</li>
  <li>Custom-designed mechanical components</li>
  <li>Better cable management</li>
  <li>Enhanced modularity</li>
</ul>
<p>These improvements will continue to increase the reliability and efficiency of future UART UAV platforms.</p>

<div class="about-authors-section">
  <h2>About the Authors</h2>
  <div class="author-card">
    <img src="${member5}" alt="Muktaderul Islam" class="author-photo" />
    <div class="author-info">
      <h4>Muktaderul Islam</h4>
      <p>Muktaderul Islam is the Sub Team Lead of the Mechanical Team at the UIU Aerial Robotics Team (UART), specializing in airframe design, structural integrity, and hardware development for the SUAS 2026 competition platform.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${member9}" alt="Digonta Karmaker" class="author-photo" />
    <div class="author-info">
      <h4>Digonta Karmaker</h4>
      <p>Digonta Karmaker is a Research Member of the Mechanical  Team at the UIU Aerial Robotics Team (UART), focusing on mechanical integration and structural optimization.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${adnan}" alt="Adnan Mohammad Salauddin" class="author-photo" />
    <div class="author-info">
      <h4>Adnan Mohammad Salauddin</h4>
      <p>Adnan Mohammad Salauddin is a Research Member of the Mechanical Team at the UIU Aerial Robotics Team (UART), contributing to mechanical design.</p>
    </div>
  </div>
</div>
`,
    author: "Muktaderul Islam • Digonta Karmaker • Adnan Mohammad Salauddin",
    role: "Mechanical Team, UIU Aerial Robotics Team",
    authorImg: member5,
    date: "August 21, 2026",
    readTime: "8 min read",
    category: "Mechanical",
    image: blog7Cover,
  },
  {
    id: 12,
    title: "The Software Behind Every Autonomous Flight",
    excerpt: "Autonomous flight depends on more than powerful hardware. Discover how UART built a modular software ecosystem that connects navigation, computer vision, mapping, telemetry, and mission control into one intelligent platform.",
    content: `
<h2>Software as the Brain of the UAV</h2>
<p>A modern autonomous UAV is much more than motors, batteries, and sensors. While the hardware enables the aircraft to fly, it is the software that transforms individual components into a coordinated autonomous system.
For the SUAS 2026 platform, our software architecture was designed to manage mission planning, onboard intelligence, telemetry, and communication while ensuring that every subsystem operates together efficiently.
Rather than developing a single large application, we adopted a modular software architecture that simplifies development, testing, and future expansion.</p>

<h2>Building a Custom Ground Control Station</h2>
<p>The Ground Control Station (GCS) acts as the central interface between the UAV and the ground team.
It provides real-time information throughout the mission and allows operators to monitor the aircraft while autonomous tasks are being performed.
The Ground Control Station supports:</p>
<ul>
  <li>Mission planning</li>
  <li>Live telemetry</li>
  <li>Flight monitoring</li>
  <li>System status visualization</li>
  <li>Mission progress tracking</li>
</ul>
<p>A web-based interface also allows the platform to remain flexible and accessible across different devices.</p>
<img src="${b6Groundstation}" alt="Ground Control Station Screenshot" class="blog-section-img" />

<h2>A Modular Software Architecture</h2>
<p>Instead of combining every feature into a single application, each major subsystem operates independently while communicating through a shared architecture.
This approach improves system reliability and makes it easier to maintain and upgrade individual components.
Our software architecture includes:</p>
<ul>
  <li>Navigation Module</li>
  <li>Computer Vision Module</li>
  <li>Mapping Module</li>
  <li>Telemetry Module</li>
  <li>Mission Management Module</li>
  <li>Ground Control Station</li>
</ul>
<p>Each module performs a dedicated task while contributing to the overall mission.</p>


<h2>Communication Between Systems</h2>
<p>Reliable communication is essential during autonomous flight.
The UAV continuously exchanges information between the flight controller, companion computer, and Ground Control Station.
This communication enables the aircraft to:</p>
<ul>
  <li>Receive mission commands</li>
  <li>Send telemetry data</li>
  <li>Report system health</li>
  <li>Share detection results</li>
  <li>Update mission progress</li>
</ul>
<p>By maintaining continuous communication, operators remain informed throughout every stage of the mission.</p>
<img src="${b6Tele}" alt="Communication Flow Diagram" class="blog-section-img" />

<h2>Onboard Processing</h2>
<p>Some tasks require immediate decision-making during flight.
To reduce workload on the flight controller, computationally intensive processes are handled by the onboard companion computer.
These include:</p>
<ul>
  <li>Object detection</li>
  <li>Image processing</li>
  <li>Mapping</li>
  <li>LiDAR data processing</li>
  <li>Autonomous decision support</li>
</ul>
<p>Separating high-level processing from flight control improves both stability and overall system performance.</p>
<img src="${b6OnBoard}" alt="Companion Computer Photograph" class="blog-section-img" />

<h2>Testing Before Flight</h2>
<p>Reliable software is built through continuous testing.
Before deploying the UAV in the field, individual modules are verified using simulation environments and controlled experiments.
Our testing process includes:</p>
<ul>
  <li>Software integration testing</li>
  <li>Mission simulation</li>
  <li>Flight controller validation</li>
  <li>Telemetry verification</li>
  <li>Ground station testing</li>
</ul>
<p>This approach allows potential issues to be identified and resolved before actual flight operations.</p>


<h2>Building for the Future</h2>
<p>One of the biggest advantages of a modular architecture is scalability.
As new technologies become available, individual modules can be upgraded without redesigning the entire system.
Future software improvements may include:</p>
<ul>
  <li>Advanced mission planning</li>
  <li>AI-assisted decision making</li>
  <li>Multi-UAV coordination</li>
  <li>Cloud-based mission monitoring</li>
  <li>Enhanced operator interface</li>
</ul>
<p>These improvements will continue to strengthen the software foundation of future UART autonomous platforms.</p>

<h2>Looking Ahead</h2>
<p>Software is the bridge that connects every subsystem of an autonomous UAV.
By combining navigation, perception, mapping, and communication into a unified platform, UART has developed a flexible architecture capable of supporting increasingly complex autonomous missions.
As our research continues, the software ecosystem will evolve alongside new hardware and artificial intelligence technologies, enabling more capable and reliable autonomous systems.</p>

<div class="about-authors-section">
  <h2>About the Authors</h2>
  <div class="author-card">
    <img src="${member3}" alt="Fahad Rahaman" class="author-photo" />
    <div class="author-info">
      <h4>Fahad Rahaman</h4>
      <p>Fahad Rahaman is the Sub Team Lead of the Software &amp; Navigation Team and R&amp;D Team at the UIU Aerial Robotics Team (UART), contributing to autonomous systems development and mission software.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${nusrat}" alt="Nusrat Jahan" class="author-photo" />
    <div class="author-info">
      <h4>Nusrat Jahan</h4>
      <p>Nusrat Jahan is a Research Member of the Autonomous &amp; Navigation Team at the UIU Aerial Robotics Team (UART), working on mission planning and autonomous flight systems.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${arpon}" alt="Md Shazan Mahmud Arpon" class="author-photo" />
    <div class="author-info">
      <h4>Md Shazan Mahmud Arpon</h4>
      <p>Md Shazan Mahmud Arpon is a Research Member of the Software &amp; Navigation Team at the UIU Aerial Robotics Team (UART), contributing to computer vision and embedded software integration.</p>
    </div>
  </div>
</div>
`,
    author: "Fahad Rahaman • Nusrat Jahan • Md Shazan Mahmud Arpon",
    role: "Software & Navigation Team, UIU Aerial Robotics Team",
    authorImg: member3,
    date: "August 14, 2026",
    readTime: "10 min read",
    category: "Software",
    image: blog6Cover, // Updated with actual GCS hero image
  },
];

export const posts: BlogPost[] = [...postsRaw].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
