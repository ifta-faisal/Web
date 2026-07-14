import mentor1 from '../assets/images/Advisor/Mentor1.jpeg';
import vcImage from '../assets/images/Advisor/VC.jpg';
import projectImg from '../assets/images/Project/project1.jpeg';
import droneImg from '../assets/images/drone1.jpeg';
import missionImg from '../assets/images/DetailedFeatures/mission_planning_ui.png';
import suasImg from '../assets/images/suas.png';
import israfilImg from '../assets/images/Team/israfil.png';
import biplobImg from '../assets/images/Team/alfi.png';
import faisalImg from '../assets/images/Team/member4.png';
import OnBoard from '../assets/images/Blog/On_Board.jpeg';  
import Tele from '../assets/images/Blog/Tele.jpeg';  

// ─── Blog 1 Imports ───
import blog1Cover from '../assets/images/Blog/Blog_1/Blog_1cover.jpeg';
import bolg1 from '../assets/images/Blog/Blog_1/Bolg1.jpeg';
import blog2 from '../assets/images/Blog/Blog_1/Blog2.jpeg';
import blog3 from '../assets/images/Blog/Blog_1/Blog3.jpeg';
import blog4 from '../assets/images/Blog/Blog_1/Blog4.jpeg';
import blog5 from '../assets/images/Blog/Blog_1/Blog5.jpeg';
import blog6 from '../assets/images/Blog/Blog_1/Blog6.jpeg';

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
    <img src="${israfilImg}" alt="MD. Israfil Hossain" class="author-photo" />
    <div class="author-info">
      <h4>MD. Israfil Hossain</h4>
      <p>MD. Israfil Hossain is a Research Member at the UIU Aerial Robotics Team (UART), contributing to autonomous systems development, computer vision research, and AI integration for the SUAS 2026 competition platform.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${biplobImg}" alt="Md. Biplob" class="author-photo" />
    <div class="author-info">
      <h4> Md. Biplob</h4>
      <p>Md. Biplob is a Research Member at the UIU Aerial Robotics Team (UART), working on autonomous flight systems, embedded software, and mission-critical subsystem integration for next-generation UAV platforms.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${faisalImg}" alt="Ifta Faisal" class="author-photo" />
    <div class="author-info">
      <h4>Ifta Faisal</h4>
      <p>Ifta Faisal is a Research Member and Sub Team Lead of the Web &amp; Communication Team at the UIU Aerial Robotics Team (UART), contributing to mission software, ground control systems, and team communication infrastructure.</p>
    </div>
  </div>
</div>
`,
    author: "MD. Israfil Hossain • Md. Biplob • Ifta Faisal",
    role: "Research Members, UIU Aerial Robotics Team",
    authorImg: suasImg,
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
<p>Every successful autonomous UAV begins with a strong foundation. Before artificial intelligence can detect objects or navigation algorithms can guide the aircraft, the drone itself must provide a stable, efficient, and reliable flight platform.</p>

<p>For the SUAS 2026 competition, our objective was not simply to build a drone that could fly. We wanted to engineer a platform capable of carrying multiple subsystems while maintaining stability, endurance, and ease of deployment in the field.</p>

<p>Every component—from the airframe to the battery configuration—was selected with reliability and mission performance in mind.</p>

<h2>Defining Our Design Goals</h2>
<p>Before selecting hardware, we established a set of engineering goals that would guide every design decision.</p>
<p>Our primary objectives included:</p>
<ul>
  <li>Lightweight construction for improved endurance</li>
  <li>High structural rigidity to reduce vibration</li>
  <li>Modular design for easy maintenance</li>
  <li>Rapid field assembly</li>
  <li>Stable autonomous flight</li>
  <li>Compliance with SUAS transportation requirements</li>
</ul>
<p>Rather than optimizing for a single metric, we aimed to achieve a balanced platform capable of supporting the complete autonomous mission.</p>
<img src="${droneImg}" alt="Design Sketch or CAD Model" class="blog-section-img" />

<h2>Choosing the Airframe</h2>
<p>The aircraft adopts a quadrotor X-configuration built around a carbon fiber frame. This configuration provides a balance between maneuverability, stability, and mechanical simplicity while offering sufficient payload capacity for onboard sensors and computing hardware.</p>
<p>Carbon fiber was selected because it offers:</p>
<ul>
  <li>High strength-to-weight ratio</li>
  <li>Excellent structural rigidity</li>
  <li>Reduced vibration during flight</li>
  <li>Improved durability</li>
  <li>Lightweight construction</li>
</ul>
<p>The modular frame design also simplifies transportation, maintenance, and future hardware upgrades.</p>
<img src="${suasImg}" alt="Airframe Photograph" class="blog-section-img" />

<h2>Designing the Propulsion System</h2>
<p>Selecting the propulsion system required balancing efficiency and performance.</p>
<p>Instead of focusing solely on maximum thrust, we evaluated components that could deliver consistent flight performance during mapping, object detection, and autonomous navigation.</p>
<p>Our propulsion system is designed to provide:</p>
<ul>
  <li>Stable hover performance</li>
  <li>Efficient power consumption</li>
  <li>Smooth control response</li>
  <li>Reliable operation during long-duration missions</li>
</ul>
<p>This balance allows the aircraft to perform multiple mission tasks without compromising flight stability.</p>
<img src="${droneImg}" alt="Motor and Propeller Image" class="blog-section-img" />

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
<p>A reliable aircraft depends on a reliable power system.</p>
<p>To maximize endurance while satisfying competition transportation requirements, we designed a battery configuration using lithium-ion cells arranged to remain within the allowable energy limits.</p>
<p>Our power system was developed with the following priorities:</p>
<ul>
  <li>Long flight endurance</li>
  <li>Safe transportation</li>
  <li>Balanced weight distribution</li>
  <li>Stable power delivery</li>
  <li>Simplified electrical architecture</li>
</ul>
<p>Careful battery placement also improves the aircraft's center of gravity, contributing to smoother autonomous flight.</p>
<img src="${missionImg}" alt="Battery Configuration Diagram" class="blog-section-img" />

<h2>Electrical Integration</h2>
<p>The power architecture extends beyond the batteries.</p>
<p>Dedicated power regulation circuits ensure that sensitive onboard electronics receive stable voltage throughout the mission, reducing electrical noise and improving overall system reliability.</p>
<p>The integrated electrical system supplies power to:</p>
<ul>
  <li>Flight Controller</li>
  <li>Companion Computer</li>
  <li>Camera System</li>
  <li>Telemetry Modules</li>
  <li>Electronic Speed Controllers (ESCs)</li>
</ul>
<p>A clean power distribution strategy helps maintain consistent performance across all onboard subsystems.</p>
<img src="${missionImg}" alt="Wiring Diagram or PCB Layout" class="blog-section-img" />

<h2>Engineering for Reliability</h2>
<p>Every hardware decision was made with one question in mind:</p>
<p><strong>Will this improve mission reliability?</strong></p>
<p>Instead of chasing maximum performance numbers, we prioritized a platform that could consistently complete autonomous missions under real operating conditions.</p>
<p>This philosophy influenced our choices in materials, propulsion, battery configuration, and electrical design.</p>
<p>A dependable aircraft forms the foundation upon which every intelligent subsystem operates.</p>

<h2>Looking Ahead</h2>
<p>While the current platform has demonstrated reliable performance, development continues beyond the 2026 competition.</p>
<p>Future iterations will focus on:</p>
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
      <p>MD. Israfil Hossain is a Research Member at the UIU Aerial Robotics Team (UART), contributing to autonomous systems development, computer vision research, and AI integration for the SUAS 2026 competition platform.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${biplobImg}" alt="Md. Biplob" class="author-photo" />
    <div class="author-info">
      <h4>Md. Biplob</h4>
      <p>Md. Biplob is a Research Member at the UIU Aerial Robotics Team (UART), working on autonomous flight systems, embedded software, and mission-critical subsystem integration for next-generation UAV platforms.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${faisalImg}" alt="Ifta Faisal" class="author-photo" />
    <div class="author-info">
      <h4>Ifta Faisal</h4>
      <p>Ifta Faisal is a Research Member and Sub Team Lead of the Web &amp; Communication Team at the UIU Aerial Robotics Team (UART), contributing to mission software, ground control systems, and team communication infrastructure.</p>
    </div>
  </div>
</div>
`,
    author: "MD. Israfil Hossain • Md. Biplob • Ifta Faisal",
    role: "Research Members, UIU Aerial Robotics Team",
    authorImg: droneImg,
    date: "July 10, 2026",
    readTime: "9 min read",
    category: "Technology",
    image: droneImg, // TODO: Replace with actual airframe hero image
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
<p>Unlike conventional object detection models, zero-shot detection does not require training for every new object.</p>
<p>Instead, the model uses descriptive text prompts to identify objects within an image.</p>
<p>This approach provides several advantages:</p>
<ul>
  <li>No need for large labeled datasets</li>
  <li>Faster development cycle</li>
  <li>Greater flexibility for new mission requirements</li>
  <li>Better adaptability to changing environments</li>
  <li>Reduced model retraining</li>
</ul>
<p>These benefits make zero-shot detection particularly suitable for research and rapidly evolving autonomous systems.</p>
<img src="${missionImg}" alt="Comparison Diagram: Traditional Detection vs. Zero-Shot Detection" class="blog-section-img" />

<h2>Selecting Grounding DINO V2</h2>
<p>After evaluating different approaches, we selected Grounding DINO V2 because of its strong performance in open-vocabulary object detection.</p>
<p>Rather than recognizing only predefined classes, the model understands relationships between images and natural language, allowing it to detect a much wider variety of objects.</p>
<p>Some of the reasons behind our selection include:</p>
<ul>
  <li>Open-vocabulary object detection</li>
  <li>Strong detection accuracy</li>
  <li>Efficient deployment on edge computing hardware</li>
  <li>Compatibility with NVIDIA Jetson platforms</li>
  <li>Continuous improvements from the research community</li>
</ul>
<p>Its flexibility aligns well with the unpredictable nature of autonomous missions.</p>
<img src="${droneImg}" alt="Grounding DINO Architecture or Workflow" class="blog-section-img" />

<h2>Detecting Mission Targets</h2>
<p>During the SUAS mission, the UAV processes images captured by the onboard camera in real time.</p>
<p>Instead of searching for a fixed class label, the model receives carefully designed text prompts that describe the mission targets.</p>
<p>Some examples include:</p>
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
<img src="${missionImg}" alt="Detection Result with Bounding Boxes" class="blog-section-img" />

<h2>Improving Detection Reliability</h2>
<p>Real-world environments introduce numerous challenges, including varying lighting conditions, shadows, occlusions, and background clutter.</p>
<p>To improve reliability, the detection pipeline incorporates several filtering techniques before confirming a target.</p>
<p>These include:</p>
<ul>
  <li>Confidence score thresholding</li>
  <li>Non-Maximum Suppression (NMS)</li>
  <li>Multi-prompt detection</li>
  <li>Temporal consistency across consecutive frames</li>
</ul>
<p>These additional validation steps help reduce false positives while increasing confidence in the final detection results.</p>
<img src="${droneImg}" alt="Detection Pipeline Illustration" class="blog-section-img" />

<h2>From Detection to Decision</h2>
<p>Object detection is only one part of the perception pipeline.</p>
<p>Once a target is identified, its location is combined with GPS and flight data to support mission planning and autonomous decision-making.</p>
<p>The detected information can then be used for:</p>
<ul>
  <li>Mission target localization</li>
  <li>Navigation updates</li>
  <li>Risk mapping</li>
  <li>Payload delivery planning</li>
  <li>Mission reporting</li>
</ul>
<p>This integration transforms computer vision from a standalone capability into a core component of the UAV's autonomous workflow.</p>
<img src="${missionImg}" alt="Diagram Showing Detection to Mission Workflow" class="blog-section-img" />

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
    <img src="${israfilImg}" alt="MD. Israfil Hossain" class="author-photo" />
    <div class="author-info">
      <h4>MD. Israfil Hossain</h4>
      <p>MD. Israfil Hossain is a Research Member at the UIU Aerial Robotics Team (UART), contributing to autonomous systems development, computer vision research, and AI integration for the SUAS 2026 competition platform.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${biplobImg}" alt="Md. Biplob" class="author-photo" />
    <div class="author-info">
      <h4>Md. Biplob</h4>
      <p>Md. Biplob is a Research Member at the UIU Aerial Robotics Team (UART), working on autonomous flight systems, embedded software, and mission-critical subsystem integration for next-generation UAV platforms.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${faisalImg}" alt="Ifta Faisal" class="author-photo" />
    <div class="author-info">
      <h4>Ifta Faisal</h4>
      <p>Ifta Faisal is a Research Member and Sub Team Lead of the Web &amp; Communication Team at the UIU Aerial Robotics Team (UART), contributing to mission software, ground control systems, and team communication infrastructure.</p>
    </div>
  </div>
</div>
`,
    author: "MD. Israfil Hossain • Md. Biplob • Ifta Faisal",
    role: "Research Members, UIU Aerial Robotics Team",
    authorImg: missionImg,
    date: "July 10, 2026",
    readTime: "10 min read",
    category: "Artificial Intelligence",
    image: missionImg, // TODO: Replace with actual detection hero image
  },
  {
    id: 10,
    title: "Creating High-Resolution Aerial Maps for Autonomous Missions",
    excerpt: "Accurate mapping is essential for mission awareness. Learn how UART generates geo-referenced aerial maps by combining onboard imagery, GPS data, and image stitching techniques.",
    content: `
<h2>Seeing the Bigger Picture</h2>
<p>During an autonomous mission, a single aerial image only captures a small portion of the environment. To fully understand the operational area, the UAV must continuously collect and combine multiple images into one complete map.</p>

<p>For the SUAS 2026 mission, mapping is more than just taking photographs. It enables operators to visualize the mission area, analyze potential risks, and support autonomous decision-making throughout the flight.</p>

<p>Our mapping system was designed to create a seamless aerial view while maintaining geographical accuracy.</p>

<h2>Why Mapping Matters</h2>
<p>A high-quality aerial map provides valuable information before, during, and after a mission.</p>
<p>Rather than relying on isolated images, the mapping system creates a unified representation of the entire search area.</p>
<p>This supports several mission objectives, including:</p>
<ul>
  <li>Better situational awareness</li>
  <li>Accurate target localization</li>
  <li>Efficient mission planning</li>
  <li>Post-flight mission analysis</li>
  <li>Improved operational safety</li>
</ul>
<p>By combining multiple images into a single map, the UAV provides a clearer understanding of its surroundings.</p>
<img src="${missionImg}" alt="Example of Individual Images vs Final Map" class="blog-section-img" />

<h2>Capturing the Mission Area</h2>
<p>As the UAV follows its autonomous flight path, the onboard camera continuously captures high-resolution images of the ground below.</p>
<p>Each image is recorded together with important flight information such as:</p>
<ul>
  <li>GPS coordinates</li>
  <li>Flight altitude</li>
  <li>Camera orientation</li>
  <li>Timestamp</li>
</ul>
<p>This additional information allows every image to be placed in its correct geographical position during the mapping process.</p>
<img src="${droneImg}" alt="Camera Capturing During Flight" class="blog-section-img" />

<h2>Building the Map</h2>
<p>Once the images have been collected, they are processed through an image stitching pipeline.</p>
<p>Instead of treating each photograph separately, the system identifies overlapping regions between consecutive images and combines them into a single continuous map.</p>
<p>The mapping process includes:</p>
<ul>
  <li>Feature detection</li>
  <li>Image alignment</li>
  <li>Homography estimation</li>
  <li>Image blending</li>
  <li>Exposure correction</li>
</ul>
<p>These steps help produce a smooth and visually consistent aerial map with minimal distortion.</p>
<img src="${missionImg}" alt="Image Stitching Pipeline Diagram" class="blog-section-img" />

<h2>Maintaining Geographic Accuracy</h2>
<p>Creating a visually appealing map is important, but maintaining positional accuracy is equally critical.</p>
<p>To improve map reliability, GPS information is incorporated throughout the mapping process. This allows the generated map to represent real-world locations more accurately and supports future mission planning.</p>
<p>Our approach focuses on:</p>
<ul>
  <li>Consistent image overlap</li>
  <li>Stable camera positioning</li>
  <li>GPS-assisted alignment</li>
  <li>Reduced geometric distortion</li>
  <li>Reliable map projection</li>
</ul>
<p>These considerations ensure the final map can be used confidently during mission analysis.</p>
<img src="${droneImg}" alt="Geo-Referenced Mapping Example" class="blog-section-img" />

<h2>Supporting Autonomous Operations</h2>
<p>The generated aerial map is more than a visual output—it becomes a valuable source of information for the overall autonomous system.</p>
<p>The completed map can support:</p>
<ul>
  <li>Mission monitoring</li>
  <li>Target verification</li>
  <li>Search area analysis</li>
  <li>Route planning</li>
  <li>Operational reporting</li>
</ul>
<p>By integrating mapping with navigation and perception, the UAV gains a more comprehensive understanding of its operating environment.</p>
<img src="${missionImg}" alt="Final Orthographic Map" class="blog-section-img" />

<h2>Looking Ahead</h2>
<p>As onboard computing continues to improve, aerial mapping will become increasingly capable of supporting real-time autonomous operations.</p>
<p>Future development will explore:</p>
<ul>
  <li>Faster onboard map generation</li>
  <li>Higher-resolution mapping</li>
  <li>Improved stitching accuracy</li>
  <li>Real-time map visualization</li>
  <li>Integration with additional perception sensors</li>
</ul>
<p>These improvements will further enhance the UAV's ability to operate safely and efficiently in complex environments.</p>

<div class="about-authors-section">
  <h2>About the Authors</h2>
  <div class="author-card">
    <img src="${israfilImg}" alt="MD. Israfil Hossain" class="author-photo" />
    <div class="author-info">
      <h4>MD. Israfil Hossain</h4>
      <p>MD. Israfil Hossain is a Research Member at the UIU Aerial Robotics Team (UART), contributing to autonomous systems development, computer vision research, and AI integration for the SUAS 2026 competition platform.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${biplobImg}" alt="Md. Biplob" class="author-photo" />
    <div class="author-info">
      <h4>Md. Biplob</h4>
      <p>Md. Biplob is a Research Member at the UIU Aerial Robotics Team (UART), working on autonomous flight systems, embedded software, and mission-critical subsystem integration for next-generation UAV platforms.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${faisalImg}" alt="Ifta Faisal" class="author-photo" />
    <div class="author-info">
      <h4>Ifta Faisal</h4>
      <p>Ifta Faisal is a Research Member and Sub Team Lead of the Web &amp; Communication Team at the UIU Aerial Robotics Team (UART), contributing to mission software, ground control systems, and team communication infrastructure.</p>
    </div>
  </div>
</div>
`,
    author: "MD. Israfil Hossain • Md. Biplob • Ifta Faisal",
    role: "Research Members, UIU Aerial Robotics Team",
    authorImg: droneImg,
    date: "July 10, 2026",
    readTime: "9 min read",
    category: "Research",
    image: droneImg, // TODO: Replace with actual mapping hero image
  },
  {
    id: 11,
    title: "Designing Safe Navigation: LiDAR-Based Obstacle Avoidance",
    excerpt: "Autonomous flight is only successful when it is safe. Learn how UART integrates LiDAR-based obstacle avoidance to help the UAV navigate complex environments while maintaining mission reliability.",
    content: `
<h2>Safety Comes First</h2>
<p>An autonomous UAV must do more than follow a predefined flight path. It must continuously observe its surroundings and react to unexpected obstacles without human intervention.
Whether operating near trees, poles, buildings, or other aerial objects, the aircraft should be capable of making safe decisions while continuing its mission.
For our SUAS 2026 platform, obstacle avoidance was designed as a core safety feature rather than an optional capability.</p>

<h2>Why Obstacle Avoidance Matters</h2>
<p>Unexpected obstacles can appear at any stage of an autonomous mission.
Without an effective avoidance system, a single collision could lead to mission failure or even damage the aircraft.
Our obstacle avoidance system helps the UAV:</p>
<ul>
  <li>Detect nearby obstacles</li>
  <li>Maintain a safe flight distance</li>
  <li>Adjust its flight path automatically</li>
  <li>Continue the mission safely</li>
  <li>Improve overall mission reliability</li>
</ul>
<p>Obstacle avoidance allows the aircraft to operate more confidently in dynamic environments.</p>
<img src="${droneImg}" alt="Example of Obstacles During Flight" class="blog-section-img" />

<h2>Selecting LiDAR Technology</h2>
<p>To detect surrounding objects, our UAV uses a 2D LiDAR sensor.
Unlike traditional cameras, LiDAR measures distance directly by emitting laser pulses and calculating the time required for the reflected signal to return.
This allows the system to estimate the distance between the UAV and nearby obstacles with high accuracy.</p>
<p>Some advantages of LiDAR include:</p>
<ul>
  <li>Accurate distance measurement</li>
  <li>Reliable obstacle detection</li>
  <li>Fast response time</li>
  <li>Lightweight design</li>
  <li>Independence from lighting conditions</li>
</ul>
<p>These characteristics make LiDAR well suited for autonomous navigation.</p>
<img src="${suasImg}" alt="LiDAR Sensor Photograph" class="blog-section-img" />

<h2>Integrating LiDAR with the Flight Controller</h2>
<p>The LiDAR continuously scans the environment while the UAV is in flight.
Sensor data is transmitted to the flight controller, where it is processed to determine whether any obstacle is within a predefined safety distance.
If an obstacle is detected, the navigation system responds by adjusting the aircraft's trajectory before continuing toward the next waypoint.
<p>This process occurs automatically throughout the mission without requiring pilot intervention.</p>
<img src="${missionImg}" alt="LiDAR Data Flow Diagram" class="blog-section-img" />

<h2>Improving Detection Reliability</h2>
<p>Real-world environments often introduce sensor noise and unexpected measurements.
To improve the accuracy of obstacle detection, multiple validation techniques are incorporated into the navigation pipeline.
These include:</p>
<ul>
  <li>Continuous distance monitoring</li>
  <li>Consecutive scan validation</li>
  <li>Safety distance thresholds</li>
  <li>Noise filtering</li>
  <li>Stable trajectory adjustment</li>
</ul>
<p>Together, these techniques reduce false detections while improving overall flight safety.</p>
<img src="${droneImg}" alt="Obstacle Detection Visualization" class="blog-section-img" />

<h2>Supporting Autonomous Missions</h2>
<p>Obstacle avoidance does not operate independently.
It works together with navigation, mapping, and computer vision to help the UAV complete its mission safely and efficiently.
This integrated approach allows the aircraft to:</p>
<ul>
  <li>Continue waypoint navigation</li>
  <li>Avoid unexpected obstacles</li>
  <li>Protect onboard hardware</li>
  <li>Reduce mission risk</li>
  <li>Increase operational confidence</li>
</ul>
<p>Safe navigation is one of the key building blocks of a fully autonomous UAV.</p>
<img src="${suasImg}" alt="Flight Test Photograph" class="blog-section-img" />

<h2>Looking Ahead</h2>
<p>Obstacle avoidance technology continues to evolve as autonomous systems become more capable.
Future development will focus on:</p>
<ul>
  <li>Three-dimensional obstacle detection</li>
  <li>Sensor fusion with cameras</li>
  <li>Improved avoidance algorithms</li>
  <li>Dynamic path planning</li>
  <li>Enhanced real-time navigation</li>
</ul>
<p>These improvements will help UART develop increasingly intelligent UAVs capable of operating safely in more challenging environments.</p>

<div class="about-authors-section">
  <h2>About the Authors</h2>
  <div class="author-card">
    <img src="${israfilImg}" alt="MD. Israfil Hossain" class="author-photo" />
    <div class="author-info">
      <h4>MD. Israfil Hossain</h4>
      <p>MD. Israfil Hossain is a Research Member at the UIU Aerial Robotics Team (UART), contributing to autonomous systems development, computer vision research, and AI integration for the SUAS 2026 competition platform.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${biplobImg}" alt="Md. Biplob" class="author-photo" />
    <div class="author-info">
      <h4>Md. Biplob</h4>
      <p>Md. Biplob is a Research Member at the UIU Aerial Robotics Team (UART), working on autonomous flight systems, embedded software, and mission-critical subsystem integration for next-generation UAV platforms.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${faisalImg}" alt="Ifta Faisal" class="author-photo" />
    <div class="author-info">
      <h4>Ifta Faisal</h4>
      <p>Ifta Faisal is a Research Member and Sub Team Lead of the Web &amp; Communication Team at the UIU Aerial Robotics Team (UART), contributing to mission software, ground control systems, and team communication infrastructure.</p>
    </div>
  </div>
</div>
`,
    author: "MD. Israfil Hossain • Md. Biplob • Ifta Faisal",
    role: "Research Members, UIU Aerial Robotics Team",
    authorImg: suasImg,
    date: "August 7, 2026",
    readTime: "9 min read",
    category: "Technology",
    image: suasImg, // TODO: Replace with actual LiDAR/obstacle avoidance hero image
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
<img src="${missionImg}" alt="Ground Control Station Screenshot" class="blog-section-img" />

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
<img src="${droneImg}" alt="Software Architecture Diagram" class="blog-section-img" />

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
<img src="${Tele}" alt="Communication Flow Diagram" class="blog-section-img" />

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
<img src="${OnBoard}" alt="Companion Computer Photograph" class="blog-section-img" />

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
<img src="${droneImg}" alt="Simulation Screenshot" class="blog-section-img" />

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
    <img src="${israfilImg}" alt="MD. Israfil Hossain" class="author-photo" />
    <div class="author-info">
      <h4>MD. Israfil Hossain</h4>
      <p>MD. Israfil Hossain is a Research Member at the UIU Aerial Robotics Team (UART), contributing to autonomous systems development, computer vision research, and AI integration for the SUAS 2026 competition platform.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${biplobImg}" alt="Md. Biplob" class="author-photo" />
    <div class="author-info">
      <h4>Md. Biplob</h4>
      <p>Md. Biplob is a Research Member at the UIU Aerial Robotics Team (UART), working on autonomous flight systems, embedded software, and mission-critical subsystem integration for next-generation UAV platforms.</p>
    </div>
  </div>
  <div class="author-card">
    <img src="${faisalImg}" alt="Ifta Faisal" class="author-photo" />
    <div class="author-info">
      <h4>Ifta Faisal</h4>
      <p>Ifta Faisal is a Research Member and Sub Team Lead of the Web &amp; Communication Team at the UIU Aerial Robotics Team (UART), contributing to mission software, ground control systems, and team communication infrastructure.</p>
    </div>
  </div>
</div>
`,
    author: "MD. Israfil Hossain • Md. Biplob • Ifta Faisal",
    role: "Research Members, UIU Aerial Robotics Team",
    authorImg: missionImg,
    date: "August 14, 2026",
    readTime: "10 min read",
    category: "Software",
    image: missionImg, // TODO: Replace with actual GCS hero image
  },
];

export const posts: BlogPost[] = [...postsRaw].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
