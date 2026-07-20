import israfil from '../assets/images/Team/israfil.webp';
import alfi from '../assets/images/Team/alfi.webp';
import member4 from '../assets/images/Team/member4.webp';
import member1 from '../assets/images/Team/member1.webp';
import probin from '../assets/images/Team/probin.webp';
import shahad from '../assets/images/Team/shahad.webp';
import anika from '../assets/images/Team/orthy.webp';
import rashed from '../assets/images/Team/rashed.webp';
import nusrat from '../assets/images/Team/nusrat.webp';
import member2 from '../assets/images/Team/member2.webp';
import member3 from '../assets/images/Team/member3.webp';
import member9 from '../assets/images/Team/member9.webp';
import arpon from '../assets/images/Team/arpon.webp';
// Imports auto-generated from docs

// ─── Blog 1 Imports ───
import blog1_img7 from '../assets/images/Blog/blog-01/blogimages1/image1.png';
import blog1_img1 from '../assets/images/Blog/blog-01/blogimages1/image5.png';
import blog1_img2 from '../assets/images/Blog/blog-01/blogimages1/image6.png';
import blog1_img3 from '../assets/images/Blog/blog-01/blogimages1/image7.jpg';
import blog1_img4 from '../assets/images/Blog/blog-01/blogimages1/image10.jpg';
import blog1_img5 from '../assets/images/Blog/blog-01/blogimages1/image15.jpg';
import blog1_img6 from '../assets/images/Blog/blog-01/blogimages1/image17.jpg';

// ─── Blog 2 Imports ───
import blog2_img0 from '../assets/images/Blog/blog-02/blogimages2/image7.jpeg';
import blog2_img1 from '../assets/images/Blog/blog-02/blogimages2/image8.png';
import blog2_img2 from '../assets/images/Blog/blog-02/blogimages2/image13.jpg';
import blog2_img3 from '../assets/images/Blog/blog-02/blogimages2/image18.jpg';
import blog2_img4 from '../assets/images/Blog/blog-02/blogimages2/photo_motor_closeup.jpeg';
import blog2_img5 from '../assets/images/Blog/blog-02/blogimages2/photo_motor_mount_1.jpeg';

// ─── Blog 3 Imports ───
import blog3_img0 from '../assets/images/Blog/blog-03/blogimages3/image2.png';
import blog3_img1 from '../assets/images/Blog/blog-03/blogimages3/image3.png';

// ─── Blog 4 Imports ───
import blog4_img0 from '../assets/images/Blog/blog-04/blogimages4/image10.jpg';

// ─── Blog 5 Imports ───
import blog5_img0 from '../assets/images/Blog/blog-05/blogimages5/photo_uav_top_gcs.jpeg';

// ─── Blog 6 Imports ───
import blog6_img0 from '../assets/images/Blog/blog-06/blogimages6/image4.png';
import blog6_img1 from '../assets/images/Blog/blog-06/blogimages6/image5.png';
import blog6_img2 from '../assets/images/Blog/blog-06/blogimages6/image16.jpg';

// ─── Blog 7 Imports ───
import blog7_img0 from '../assets/images/Blog/blog-07/blogimages7/bms_board_v1.png';
import blog7_img1 from '../assets/images/Blog/blog-07/blogimages7/image9.jpg';
import blog7_img2 from '../assets/images/Blog/blog-07/blogimages7/photo_motor_mount_2.jpeg';
import blog7_img3 from '../assets/images/Blog/blog-07/blogimages7/photo_motor_wiring.jpeg';

// ─── Blog 8 Imports ───
import blog8_img0 from '../assets/images/Blog/blog-08/blogimages8/diagram_interconnection.jpeg';
import blog8_img1 from '../assets/images/Blog/blog-08/blogimages8/photo_uav_top_gcs.jpeg';


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

export const postsRaw: BlogPost[] = [
  {
    id: 1,
    title: "Introducing Our SUAS 2026 Autonomous UAV",
    excerpt: "An inside look at the engineering decisions, autonomous technologies, and cross-disciplinary collaboration behind UART's UAV for the SUAS 2026 competition.",
    content: `
<p><img src="${blog1_img5}" alt="Blog Image" class="blog-section-img" /></p><h1><strong>Why We Build Toward Real Missions, Not Just a Competition Run</strong></h1><p>Autonomous aerial systems are steadily moving from research demonstrations into operational use — disaster response teams use them to survey collapsed structures before sending in people, agricultural operations use them to track crop health across thousands of acres, and search-and-rescue teams use them to cover terrain a ground team would take hours to walk. What all of these applications share is a simple requirement: the aircraft has to make good decisions with very little human input, often in conditions nobody planned for in advance.</p><p>The Student UAS (SUAS) competition is built around that same requirement, which is exactly why our team treats it as more than a yearly robotics challenge. Every subsystem on our aircraft — the frame, the power system, the perception pipeline, the mapping software, the obstacle-avoidance logic — has to work together well enough that the aircraft can complete an entire mission with no one touching the controls after takeoff. That is a considerably harder problem than getting a drone to fly in a straight line, and it's the problem this year's platform was built to solve.</p><p>This post is the first in a series where we're documenting the engineering behind the 2026 aircraft in detail — not just what we built, but why we made the choices we made, what worked, and what we're still not fully happy with. If you're on a similar team, or just curious how a small university club approaches a problem this size, we hope some of this is useful.</p><h1><strong>What the Mission Actually Demands</strong></h1><p>On paper, the SUAS mission reads like a checklist: fly a route, map the area, find some objects, avoid whatever gets in the way, and drop a payload where it's needed. In practice, each of those items depends on the others working correctly at the same time, under the same battery, on the same aircraft. A mapping pipeline that produces a beautiful orthomosaic is not much use if the aircraft's navigation drifted off course while capturing the images. A detection model that identifies targets with near-perfect accuracy on a bench is not much use if the companion computer it's running on overheats twenty minutes into a flight.</p><p>That interdependence is really the central engineering challenge of the whole competition, and it's why we spent as much time on integration and system-level testing as we did on any individual subsystem. A flight is only as reliable as its weakest link, and weak links tend to hide until several subsystems are running at once, under real battery drain, in real weather.</p><p><img src="${blog1_img6}" alt="Blog Image" class="blog-section-img" /></p><h1><strong>Reliability Over Raw Capability</strong></h1><p>Early in the design process we had to decide what we were actually optimizing for. It would have been easy to chase the most aggressive flight envelope, the fastest possible mapping pipeline, or the largest detection model we could get running on the hardware. We chose a different priority: an aircraft that finishes the mission it starts, every time, without needing a safety pilot to bail it out.</p><p>That decision shaped almost everything downstream — which airframe we picked, how conservatively we sized the battery, how much margin we built into the obstacle-avoidance logic, and even how we structured the software so that a fault in one service couldn't silently take down another. None of these choices are the most exciting thing to write about individually, but together they're the reason the aircraft behaves the same way on its fiftieth test flight as it did on its first.</p><p><img src="${blog1_img3}" alt="Blog Image" class="blog-section-img" /></p><h1><strong>How the Subsystems Talk to Each Other</strong></h1><p>Rather than bolting navigation, perception, mapping, and obstacle avoidance onto the airframe as separate afterthoughts, we designed the aircraft from the start as a set of subsystems that continuously share data during flight. The flight controller handles low-level stabilization and safety limits. The companion computer runs perception and mapping. The ground control station keeps a human in the loop without being in the control path. Each of these pieces has a clearly defined job, and each one depends on the others reporting honestly and on time.</p><p>The diagram below shows roughly how information moves between these pieces on our aircraft — GPS and IMU data flowing into the flight controller, camera and LiDAR data flowing into the companion computer, and telemetry flowing back down to the ground station over the radio link.</p><p><img src="${blog1_img7}" alt="Blog Image" class="blog-section-img" /></p><p><em>How the flight controller, companion computer, sensors, and ground link are connected on the current airframe.</em></p><h1><strong>Perception Without a Training Dataset</strong></h1><p>One of the more unusual choices on this year's aircraft is how it recognizes ground targets. Most object detection systems need a large, hand-labeled dataset before they can reliably recognize even one new object class — which is a real problem when your mission targets can change from one competition year to the next, or even one practice run to the next. Instead, our perception pipeline is built around a zero-shot vision-language model, which can be pointed at a new target simply by changing the text prompt it's given, with no retraining involved.</p><p>We go into this in much more depth in a later post, but it's worth flagging here because it changes how the whole team works. Adding a new mission target used to mean weeks of data collection; now it means editing a string.</p><h1><strong>Turning Flight Data into a Map</strong></h1><p>Detection only matters if the team — and the aircraft — knows where a detected object actually is. During flight, the aircraft logs overlapping images together with precise GPS position for every frame, and that data is later assembled into a single geo-referenced map of the mission area. Getting this pipeline to produce a map that's both visually clean and positionally accurate turned out to be one of the more time-consuming parts of the whole project, and it's the subject of its own post later in this series.</p><p><img src="${blog1_img4}" alt="Blog Image" class="blog-section-img" /></p><h1><strong>Flying Safely Around the Unexpected</strong></h1><p>No mission area is ever fully known in advance, so the aircraft carries a LiDAR-based obstacle detection system that runs independently of the mission software. If something enters the aircraft's safety margin — a tree branch, a temporary structure, another aircraft — the flight controller adjusts course on its own and resumes the original mission once the obstacle has cleared. Keeping this system fast enough to matter, without being so twitchy that it interrupts the mission constantly, took a fair amount of tuning that we'll walk through later in this series.</p><h1><strong>The Software Holding Everything Together</strong></h1><p>None of the hardware capabilities above are useful without software to coordinate them, and that's a bigger undertaking than it might sound. We built a custom, web-based ground control station and a set of independent onboard services for mission management, perception, and mapping, rather than one large program trying to do everything at once. That separation has made the system considerably easier to debug — when something goes wrong, we can usually tell which service caused it within minutes rather than combing through one monolithic log.</p><p><img src="${blog1_img1}" alt="Blog Image" class="blog-section-img" /></p><p><em>The ground control station mid pre-flight check, ahead of a test flight.</em></p><h1><strong>A Team Effort, Not a One-Person Project</strong></h1><p>It's worth being upfront that nothing in this series was built by one person. Mechanical members handled the airframe and propulsion; electrical members handled the power system and wiring; software and AI members handled perception, mapping, and the ground station; and everyone spent time on the bench together during integration testing. The photo below is from one of our airframe assembly sessions — the kind of session that happens a lot more often than the flight-test footage suggests.</p><p><img src="${blog1_img2}" alt="Blog Image" class="blog-section-img" /></p><p><em>Team members assembling the airframe ahead of a test flight.</em></p><h1><strong>What Comes Next in This Series</strong></h1><p>Over the next several posts, we're going to go subsystem by subsystem: the airframe, propulsion, and power system as one combined engineering story; the zero-shot perception pipeline; the aerial mapping pipeline; LiDAR-based obstacle avoidance; the ground control station and mission software; the electrical architecture and our early work on custom power electronics; and finally, how all of it comes together during integration testing.</p><p>This platform is a step in an ongoing project rather than a finished product, and we'll be honest in these posts about what still needs work — that's usually the more useful part to read anyway.</p><div class="mt-12 pt-8 border-t border-white/10">
  <h2 class="text-2xl font-bold text-white mb-6 uppercase tracking-wider" style="font-family: 'Bebas Neue', sans-serif">About the Authors</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${israfil}" alt="MD. Israfil Hossain" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">MD. Israfil Hossain</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${alfi}" alt="Md. Biplob" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Md. Biplob</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${member4}" alt="Ifta Faisal" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Ifta Faisal</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
  </div>
</div>
`,
    author: "MD. Israfil Hossain • Md. Biplob • Ifta Faisal",
    role: "Research Member, UIU Aerial Robotics Team",
    authorImg: "",
    date: "July 10, 2026",
    readTime: "10 min read",
    category: "Leadership",
    image: blog1_img5,
  },
  {
    id: 2,
    title: "Engineering the Flight Platform: Airframe, Propulsion, and Power",
    excerpt: "Before any autonomy software runs, the aircraft itself has to fly reliably. Here's how UART chose the airframe, propulsion system, and battery configuration for the SUAS 2026 platform — and what we'd reconsider next time.",
    content: `
<p><img src="${blog2_img2}" alt="Blog Image" class="blog-section-img" /></p><h1><strong>The Part of the Aircraft Nobody Notices When It Works</strong></h1><p>It's easy for a flight platform to become an afterthought on a team focused on autonomy and AI — after all, a quadrotor is a quadrotor, right up until the moment vibration is corrupting your IMU readings, or the battery configuration is fifty grams too heavy to meet the competition's transport requirements. We learned to treat the airframe, propulsion, and power system as engineering problems in their own right, not just a platform to bolt sensors onto, and this post is about the reasoning behind those decisions.</p><p>Nothing here was chosen for the spec sheet. Every decision was made against a specific question: does this help the aircraft complete a full autonomous mission reliably, or does it just look good in a table of numbers?</p><h1><strong>Setting Goals Before Buying Parts</strong></h1><p>Before any hardware was ordered, we wrote down what we actually needed the platform to do well: stay light enough for reasonable endurance, be rigid enough that vibration wouldn't corrupt sensor data, be modular enough to repair in the field without a full rebuild, assemble quickly at a competition site, fly stably enough for autonomous mapping and detection, and stay within the competition's transport and weight rules. None of these goals point toward the single 'best' motor or the stiffest possible frame — they point toward a balanced platform, and balance is a much harder thing to design for than a single impressive number.</p><p><img src="${blog2_img0}" alt="Blog Image" class="blog-section-img" /></p><h1><strong>Why We Landed on a Quadrotor X-Frame</strong></h1><p>We considered a few multirotor layouts before settling on a quadrotor in an X-configuration. Hexacopters and octocopters offer redundancy if a motor fails mid-flight, but they add weight, complexity, and more failure points in the wiring harness than we wanted to manage on a student team with limited maintenance time between test sessions. A quadrotor X-frame is mechanically simple, well understood by the flight controller firmware we're running, and easy enough to repair that a damaged arm doesn't take the aircraft out of commission for a week.</p><p>The frame itself is built from carbon fiber, chosen mainly for its strength-to-weight ratio and stiffness. A frame that flexes under load doesn't just waste energy — it also shows up as noise in the IMU and camera data, which is the last thing a perception pipeline needs to deal with. Carbon fiber's rigidity keeps that noise down without adding the weight that a comparably stiff aluminum frame would.</p><p><img src="${blog2_img3}" alt="Blog Image" class="blog-section-img" /></p><p><em>The quadrotor X-configuration on the bench, arms can be  folded for transport.</em></p><h1><strong>Designed to Come Apart</strong></h1><p>Competition days rarely go the way you rehearsed them, and neither does travel to a test site. A frame that can be broken down into its arms and central plate, packed into a case, and reassembled in the field in a matter of minutes has already saved us more than once — both from transport damage and from the kind of last-minute repair that would otherwise end a day of testing early. That modularity was a deliberate design constraint from the beginning, not something we added after the fact.</p><h1><strong>Choosing Motors and Propellers for the Mission, Not the Spec Sheet</strong></h1><p>It would have been simple to pick the motor-propeller combination with the highest thrust-to-weight ratio on paper. We didn't, because raw thrust isn't what the mission actually asks for. Most of a SUAS flight is spent in sustained hover and cruise — capturing mapping imagery, running detection, holding a stable platform for the camera — not in aggressive maneuvering. A motor that's slightly oversized relative to its propeller runs cooler and more efficiently at that cruise power setting, which matters far more over a fifteen-minute mission than a few extra grams of peak thrust.</p><p>We tested several motor-propeller pairings on the bench before settling on the current configuration, comparing hover efficiency in thrust per watt, motor temperature after sustained runs, and how responsive the pairing felt during manual control inputs. The photos below are from that testing — the same motor and propeller assembly mounted on the arm, and a closer look at the motor itself.</p><p><img src="${blog2_img4}" alt="Blog Image" class="blog-section-img" /></p><p><em>One of the brushless motor and carbon-fiber propeller assemblies used on the current airframe.</em></p><h1><strong>A Closer Look at the Mount</strong></h1><p>Vibration isolation between the motor and the arm turned out to matter more than we initially expected. Even a well-balanced propeller transmits some vibration into the frame, and if that vibration reaches the flight controller or camera mount unfiltered, it shows up downstream as noisy attitude estimates or blurred mapping imagery. Our current mount is a straightforward rigid clamp, which has worked well enough for the missions we've flown so far, but it's one of the components we're actively looking at improving — more on that at the end of this post.</p><p><img src="${blog2_img5}" alt="Blog Image" class="blog-section-img" /></p><p><em>Motor and propeller assembly mounted on the carbon-fiber arm during ground testing.</em></p><h1><strong>Powering the Aircraft: Battery Configuration</strong></h1><p>The aircraft runs on a lithium-ion battery pack arranged in a 6S2P configuration — six groups of cells in series for voltage, with two cells in parallel within each group for extra capacity. That arrangement gives us a nominal voltage in the low 20s and enough capacity for a full mission with a reasonable safety margin, while staying within the pack weight the competition's transport rules allow. Battery placement also has a real effect on flight quality: keeping the pack's weight centered close to the aircraft's center of gravity noticeably improves how predictably the aircraft responds to control inputs, especially during the slower, more deliberate maneuvers mapping and detection require.</p><p><img src="${blog2_img1}" alt="Blog Image" class="blog-section-img" /></p><p><em>The battery pack used on the current airframe, alongside its measured specifications.</em></p><h1><strong>From Battery to Everything Else</strong></h1><p>Raw battery voltage isn't something you can hand directly to a companion computer or a camera — different subsystems on the aircraft need different, cleanly regulated voltages, and they need those voltages to stay stable even as the propulsion system's current draw swings around during flight. Our power architecture routes battery power through dedicated regulation stages before it reaches the flight controller, companion computer, camera system, and telemetry radio, so that a current spike from the motors doesn't show up as a voltage dip on a sensitive sensor line. Getting this separation right early saved us a number of hard-to-diagnose glitches later in development — the kind where a subsystem intermittently resets and nobody can immediately say why.</p><h1><strong>Trade-offs We're Still Weighing</strong></h1><p>None of this is finished. We're currently weighing a stiffer, slightly heavier motor mount against the vibration-isolation benefits it would bring to the camera and IMU. We're also looking at whether a marginally larger propeller, paired with a lower KV motor, would improve cruise efficiency further without hurting control authority during obstacle-avoidance maneuvers — a trade we haven't fully tested yet. And longer term, the propulsion electronics themselves are a target for in-house development, which we cover in more depth in the electrical systems post later in this series.</p><p>None of these are dramatic changes, and that's somewhat the point — at this stage in the platform's development, most of the remaining gains are in refinement rather than redesign.</p><div class="mt-12 pt-8 border-t border-white/10">
  <h2 class="text-2xl font-bold text-white mb-6 uppercase tracking-wider" style="font-family: 'Bebas Neue', sans-serif">About the Authors</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${member1}" alt="T M AL Anam" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">T M AL Anam</div>
        <div class="text-xs text-slate-400">Team Lead, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${probin}" alt="Probin Chandra Nath" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Probin Nath</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${shahad}" alt="Mobassir Hossain Shahad" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Mobassir Hossain Shahad</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
  </div>
</div>
`,
    author: "T M AL Anam • Probin Nath • Mobassir Hossain Shahad",
    role: "Research Member, UIU Aerial Robotics Team",
    authorImg: "",
    date: "July 10, 2026",
    readTime: "13 min read",
    category: "Electrical",
    image: blog2_img2,
  },
  {
    id: 3,
    title: "Teaching Our UAV to See: Zero-Shot Object Detection",
    excerpt: "Traditional object detection needs thousands of labeled images per target. Here's why UART built its perception pipeline around zero-shot, language-guided detection instead — and where that approach still falls short.",
    content: `
<p><img src="${blog3_img1}" alt="Blog Image" class="blog-section-img" /></p><p><em>Live onboard detection output — the model locates mission targets directly from a text prompt, with no fixed set of trained classes.</em></p><h1><strong>The Problem with Training a Model for a Competition</strong></h1><p>The SUAS mission asks the aircraft to identify specific ground targets, and the obvious way to do that is to train an object detector on labeled examples of those targets. The trouble is timing: mission targets and their exact appearance are often finalized close to competition day, which leaves little room for the weeks of data collection and labeling a conventional detector needs before it's reliable. Retraining from scratch every time a target changes is a real cost, not just an inconvenience, for a small student team with limited compute and limited time between practice flights.</p><p>We wanted a perception system that could adapt to a new or refined target description in the time it takes to edit a line of text, not the time it takes to collect and label a new dataset. That requirement is what led us to zero-shot, language-guided detection instead of a conventional trained classifier.</p><h1><strong>How Zero-Shot Detection Actually Works</strong></h1><p>Rather than learning a fixed set of object categories from labeled examples, a zero-shot detector is trained to understand the relationship between images and natural-language descriptions in general, and then applies that understanding to whatever prompt it's given at inference time. Give it the word 'tent,' and it looks for image regions that match the visual concept of a tent — without ever having seen a single labeled example of a tent during its own training. That's a meaningfully different capability from a conventional detector, which can only recognize the exact categories it was trained on.</p><p>We settled on Grounding DINO V2 for this role after comparing it against a few alternatives, largely because of its strong open-vocabulary detection accuracy and because it runs efficiently enough on our companion computer's Jetson-class hardware to keep up with live video during a mission, rather than requiring us to batch-process footage after the flight.</p><p><img src="${blog3_img0}" alt="Blog Image" class="blog-section-img" /></p><p><em>The Grounding DINO architecture — a text backbone and image backbone feed a shared feature enhancer and cross-modality decoder, producing detections directly from a language prompt rather than a fixed class list. (Figure adapted from the Grounding DINO paper.)</em></p><h1><strong>Writing Prompts That Actually Work in the Field</strong></h1><p>Prompt design turned out to be less trivial than we expected. A prompt like 'person' is often too broad and picks up background clutter; something overly specific like 'person lying face-down wearing a red shirt' can miss the target entirely if the actual scene differs even slightly from the wording. We ended up iterating on prompts the same way you'd tune any other model parameter — testing variations like 'mannequin,' 'human dummy,' and 'person lying on the ground' against the same footage, and keeping whichever phrasing produced the most consistent detections across different lighting and angles. It's a strange kind of engineering work, closer to writing careful documentation than to traditional model tuning, but it has a very real effect on detection reliability.</p><h1><strong>Filtering Out the Noise</strong></h1><p>A raw detection isn't automatically a trustworthy one. Outdoor lighting changes constantly, shadows can look uncomfortably similar to real objects from directly overhead, and a single frame can produce a confident-looking false positive that the very next frame contradicts. We apply confidence thresholding to drop low-certainty detections, non-maximum suppression to collapse duplicate boxes around the same object, and a temporal consistency check across consecutive frames so that a detection has to persist for more than an instant before the mission software treats it as real. None of these techniques are novel on their own, but combined they've noticeably reduced the false-positive rate we were seeing in early field tests.</p><h1><strong>Turning a Detection into a Decision</strong></h1><p>Finding an object in a video frame is only useful once its location is tied back to something the mission software can act on. Every confirmed detection is paired with the aircraft's GPS position and camera orientation at the moment of capture, which lets us place the target on the mission map, feed it into payload-delivery planning, and include it in the final mission report — turning a bounding box on a screen into a real-world coordinate the rest of the system can use.</p><h1><strong>Where the Model Still Struggles</strong></h1><p>We want to be honest about the limits of this approach rather than presenting it as a solved problem. Detection accuracy still drops noticeably in low-contrast conditions like overcast midday light with minimal shadow definition, and the model occasionally confuses visually similar objects when a prompt is ambiguous — a folded tarp has, on more than one test flight, been flagged with moderate confidence as a tent. Inference speed on the companion computer is workable but not fast enough yet for us to run detection at full camera frame rate without dropping frames, which is a real constraint during faster passes over the mission area.</p><p>Our next round of work focuses on faster onboard inference, more disciplined prompt testing across a wider range of lighting conditions, and combining detection confidence over multiple frames more rigorously rather than relying on a simple persistence check. Zero-shot detection has already saved us a huge amount of dataset work, but it isn't a shortcut around careful testing — if anything, it moves the hard work from data labeling to prompt and pipeline validation.</p><div class="mt-12 pt-8 border-t border-white/10">
  <h2 class="text-2xl font-bold text-white mb-6 uppercase tracking-wider" style="font-family: 'Bebas Neue', sans-serif">About the Authors</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${member3}" alt="Fahad Rahaman" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Fahad Rahaman</div>
        <div class="text-xs text-slate-400">Sub Team Lead, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${member2}" alt="Ahmed Junaed" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Ahmed Junaed</div>
        <div class="text-xs text-slate-400">Co-Team Lead, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${member9}" alt="Digonta Karmaker" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Digonta Karmaker</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
  </div>
</div>
`,
    author: "Fahad Rahaman • Ahmed Junaed • Digonta Karmaker",
    role: "Research Member, UIU Aerial Robotics Team",
    authorImg: "",
    date: "July 10, 2026",
    readTime: "11 min read",
    category: "Software",
    image: blog3_img0,
  },
  {
    id: 4,
    title: "Creating High-Resolution Aerial Maps for Autonomous Missions",
    excerpt: "Situational awareness starts with a good map. Here's how UART's UAV turns hundreds of overlapping aerial photos into one geo-referenced map of the mission area — and the real-world conditions that make that harder than it sounds.",
    content: `
<p><img src="${blog4_img0}" alt="Blog Image" class="blog-section-img" /></p><p><em>An overlapping aerial frame captured mid-mission — the raw material every stitched map is built from.</em></p><h1><strong>A Map Is a Prerequisite, Not a Deliverable</strong></h1><p>It's tempting to think of the mission map as an output the team hands in at the end — a nice picture to include in the final report. In practice, it's closer to a prerequisite: the ground control station, the payload-delivery planning, and the mission review all depend on having an accurate, unified picture of the area the aircraft just flew over. If the map is distorted or misaligned, every decision built on top of it inherits that error.</p><p>During flight, the aircraft captures overlapping frames continuously while logging precise GPS position for each one. The real engineering work happens afterward, turning that stack of individually unremarkable photos into a single, geometrically accurate map.</p><h1><strong>From Overlapping Frames to One Continuous Image</strong></h1><p>A single aerial photo only shows a small slice of the mission area, and adjacent photos rarely line up perfectly on their own — slight changes in altitude, heading, and camera angle between frames mean the raw images need real geometric correction before they can be joined. Our pipeline detects matching visual features between neighboring frames, uses those matches to figure out how each image needs to be warped and aligned relative to its neighbors, and then blends the results together so the seams between original photos aren't visible in the final map.</p><p>The genuinely hard part isn't any single step in that process — feature matching and image warping are well-studied problems — it's making the whole chain hold together reliably across a fifteen-minute flight with variable lighting, without a human manually correcting bad matches partway through.</p><h1><strong>Why GPS Tagging Matters as Much as the Stitching Itself</strong></h1><p>A visually seamless map that isn't positioned correctly in the real world is close to useless for mission planning — it might look right, but a point on the map wouldn't correspond to an actual GPS coordinate on the ground. We anchor every frame to its logged GPS position before stitching, which lets the final map preserve real-world coordinates rather than just visual continuity. That geo-referencing step is really what separates a mission-usable map from a nice-looking photo collage, and it's the piece we've spent the most time validating against known survey points on our test field.</p><h1><strong>What Actually Breaks in the Field</strong></h1><p>Aerial imagery captured outdoors is rarely as clean as the test data we develop against indoors. Shifting cloud cover changes exposure mid-flight; low sun angles create long, moving shadows that confuse feature matching between frames; and even small amounts of motion blur from wind gusts can throw off alignment in ways that are hard to notice until the final map shows a visible seam. We've had to build in exposure normalization across frames, automatic rejection of badly blurred images before they enter the stitching pipeline, and extra weighting in overlap regions specifically to avoid visible seams where two frames meet.</p><p>None of these fixes were obvious in advance — most came from looking at a bad map after a test flight, tracing the artifact back to a specific frame or lighting condition, and adjusting the pipeline accordingly. That iterative, mostly reactive process is a fairly accurate description of how most of this pipeline was actually built.</p><h1><strong>Where the Map Goes From Here</strong></h1><p>Once generated, the map becomes the shared reference point for the rest of the mission — the ground control station displays it, detected targets from the perception pipeline get placed on it by coordinate, and it becomes the basis for the mission summary at the end of a flight. Right now this happens as a post-processing step after landing rather than in real time, which is the single biggest limitation we're working to remove.</p><h1><strong>Limitations We're Working Through</strong></h1><p>The current pipeline runs after the aircraft has landed, largely because in-flight stitching at this resolution is more computationally demanding than our companion computer can currently sustain alongside detection and obstacle avoidance running at the same time. Moving toward incremental, in-flight stitching — even a lower-resolution live version, with the full-resolution map generated afterward — is our next major goal for this part of the system. We're also looking at whether RTK-corrected GPS would tighten our geo-referencing accuracy enough to justify the added hardware complexity, which is something we haven't fully tested yet.</p><div class="mt-12 pt-8 border-t border-white/10">
  <h2 class="text-2xl font-bold text-white mb-6 uppercase tracking-wider" style="font-family: 'Bebas Neue', sans-serif">About the Authors</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${member9}" alt="Digonta Karmaker" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Digonta Karmaker</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${nusrat}" alt="Nusrat Jahan" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Nusrat Jahan</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${arpon}" alt="Md Shazan Mahmud Arpon" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Md Shazan Mahmud Arpon</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
  </div>
</div>
`,
    author: "Digonta Karmaker • Nusrat Jahan • Md Shazan Mahmud Arpon",
    role: "Research Member, UIU Aerial Robotics Team",
    authorImg: "",
    date: "July 10, 2026",
    readTime: "9 min read",
    category: "Software",
    image: blog4_img0,
  },
  {
    id: 5,
    title: "Designing Safe Navigation: LiDAR-Based Obstacle Avoidance",
    excerpt: "Autonomy is only valuable if it's safe. Here's how UART's UAV uses LiDAR to detect obstacles in real time and adjust its own flight path — and the tuning process behind getting that balance right.",
    content: `
<p><img src="${blog5_img0}" alt="Blog Image" class="blog-section-img" /></p><p><em>The fully assembled quadrotor on the bench, alongside its ground station controller, ahead of a test session.</em></p><h1><strong>Why We Couldn't Assume a Clear Flight Path</strong></h1><p>A fully autonomous mission can't rely on the assumption that the flight area is perfectly clear of obstacles. Trees grow, temporary structures get put up between practice sessions, and mission areas at a competition site are rarely surveyed as thoroughly as we'd like in advance. If the aircraft is going to fly without a safety pilot correcting its path in real time, it needs its own way to sense what's immediately around it and react — without waiting on a command from the ground.</p><h1><strong>Why LiDAR Over a Camera-Based Approach</strong></h1><p>We considered camera-based obstacle detection before settling on a dedicated 2D LiDAR sensor, and the deciding factor was consistency. A camera-based approach is sensitive to lighting — exactly the kind of shifting outdoor conditions our mapping pipeline already has to work around — while LiDAR returns direct, reliable distance measurements regardless of whether the sky is clear or overcast. For a safety-critical system that has to work the same way at 9 a.m. and 3 p.m., that consistency mattered more to us than the richer semantic information a camera could theoretically provide.</p><p>The sensor continuously scans the space immediately around the aircraft and feeds distance and angle measurements directly into the flight controller's safety logic — a path deliberately kept short and simple, since this is the one subsystem on the aircraft we didn't want depending on the companion computer staying responsive under load.</p><h1><strong>The Logic Behind the Reaction</strong></h1><p>The avoidance behavior itself follows a straightforward, safety-first rule: if anything enters the aircraft's defined safety margin, the flight controller adjusts the current trajectory immediately, re-checks the surrounding space, and only resumes toward the original waypoint once the obstacle has cleared. Keeping this logic simple was a deliberate choice — a safety system is not the place to introduce complexity that's hard to verify.</p><h1><strong>Getting the Sensitivity Right Took Longer Than Expected</strong></h1><p>An obstacle-avoidance system that reacts too cautiously will interrupt a mission constantly over obstacles that were never actually a threat, while one that reacts too late defeats the entire purpose of having it. Tuning that balance took considerably more iteration than we initially budgeted for. We started by bench-testing the sensor's actual range and refresh rate against the manufacturer's stated specifications, which weren't quite identical in practice. From there we ran a series of simulated obstacle encounters before ever testing with a real obstacle in the aircraft's path, and only gradually reduced the safety margin as we built confidence in the system's response time — logging every avoidance event along the way so we could review exactly how the aircraft reacted after each test flight, rather than relying on our impression of what happened in the moment.</p><h1><strong>Tuning Still in Progress</strong></h1><p>The current 2D LiDAR configuration gives the aircraft awareness in a single scanning plane, which is a meaningful limitation — an obstacle slightly above or below that plane won't be detected until it's much closer than we'd like. Moving to a 3D LiDAR configuration, or fusing the existing 2D data with the onboard camera for out-of-plane awareness, is the next real step for this subsystem. We're also still working on predictive path planning for obstacles that are themselves moving, which the current reactive-only logic doesn't handle particularly well. Safe autonomy isn't something we consider finished at any point — every test flight gives us another data point to refine the system against.</p><div class="mt-12 pt-8 border-t border-white/10">
  <h2 class="text-2xl font-bold text-white mb-6 uppercase tracking-wider" style="font-family: 'Bebas Neue', sans-serif">About the Authors</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${member2}" alt="Ahmed Junaed" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Ahmed Junaed</div>
        <div class="text-xs text-slate-400">Co-Team Lead, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${nusrat}" alt="Nusrat Jahan" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Nusrat Jahan</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${arpon}" alt="Md Shazan Mahmud Arpon" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Md Shazan Mahmud Arpon</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
  </div>
</div>
`,
    author: "Ahmed Junaed • Nusrat Jahan • Md Shazan Mahmud Arpon",
    role: "Research Member, UIU Aerial Robotics Team",
    authorImg: "",
    date: "July 10, 2026",
    readTime: "8 min read",
    category: "Software",
    image: blog5_img0,
  },
  {
    id: 6,
    title: "Software Behind the Aircraft: Mission Planning and Ground Control",
    excerpt: "Hardware is only half the story. Here's the custom ground control station and mission software that coordinates every subsystem of UART's autonomous UAV — and why we built it as several small services instead of one large program.",
    content: `
<p><img src="${blog6_img2}" alt="Blog Image" class="blog-section-img" /></p><h1><strong>The Part of the Project That Doesn't Show Up in Flight Footage</strong></h1><p>Flight control, perception, mapping, and communication all have to work together in real time during a mission, and someone on the ground needs a clear, immediate view of what the aircraft is actually doing at any given moment — not a view that's five minutes stale or buried in a raw log file. For SUAS 2026, we built a custom, web-based ground control station alongside the onboard mission software that ties every other subsystem together, and this post is about the reasoning behind how it's structured.</p><h1><strong>Designing for a Stressful Ten Minutes</strong></h1><p>During an actual competition run, the people at the ground station need information at a glance, not a screen full of scrolling logs they have to parse under time pressure. That constraint shaped the entire interface — telemetry, mission status, and detection results are surfaced together in a single, deliberately uncluttered view, with the more detailed logs available but tucked out of the way unless something specifically needs investigating.</p><p><img src="${blog6_img1}" alt="Blog Image" class="blog-section-img" /></p><p><em>The ground control station mid pre-flight data check.</em></p><h1><strong>Why We Split the System Into Several Services</strong></h1><p>Rather than writing one large program responsible for mission management, perception, mapping, and the flight-control interface all at once, we split those responsibilities into independent services that talk to each other over well-defined interfaces: a mission management service that tracks waypoints and mission state, a perception service that runs the zero-shot detection pipeline, a mapping service that handles image stitching and geo-referencing, and a flight-control interface that bridges software commands to the actual flight controller. The direct benefit of this separation is that when something breaks — and things do break, regularly, during development — we can usually isolate which service caused it within minutes, rather than combing through one undifferentiated log trying to guess where a problem originated.</p></p><p><em>Bench-testing the companion computer and mission software ahead of a flight.</em></p><h1><strong>Rehearsing Before Risking a Real Flight</strong></h1><p>No software change reaches an actual flight without first being exercised against simulated telemetry. Running mission logic in simulation lets us catch integration issues, tune timing parameters, and deliberately trigger edge cases — like a simulated LiDAR obstacle appearing mid-waypoint, or a dropped telemetry packet during a detection event — without the cost or risk of testing those scenarios on a real aircraft. It's a slower way to develop than testing directly in the field, but it has caught problems that would have been considerably more expensive to discover mid-flight.</p><h1><strong>What We'd Change Next Time</strong></h1><p>The current software stack has held up well through testing, but there are a few things we'd do differently starting from scratch. Our automated pre-flight checks currently catch obvious configuration errors but miss some of the more subtle timing issues between services that only show up under real load. Failure recovery — what happens when one service crashes mid-mission rather than at startup — is an area we're actively hardening rather than one we consider solved. And our simulation environment, while useful, doesn't yet model sensor noise realistically enough to catch every issue that later shows up in the field. These are the priorities for the next development cycle, roughly in that order.</p><div class="mt-12 pt-8 border-t border-white/10">
  <h2 class="text-2xl font-bold text-white mb-6 uppercase tracking-wider" style="font-family: 'Bebas Neue', sans-serif">About the Authors</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${member3}" alt="Fahad Rahaman" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Fahad Rahaman</div>
        <div class="text-xs text-slate-400">Sub Team Lead, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${nusrat}" alt="Nusrat Jahan" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Nusrat Jahan</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${arpon}" alt="Md Shazan Mahmud Arpon" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Md Shazan Mahmud Arpon</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
  </div>
</div>
`,
    author: "Fahad Rahaman • Nusrat Jahan • Md Shazan Mahmud Arpon",
    role: "Research Member, UIU Aerial Robotics Team",
    authorImg: "",
    date: "July 10, 2026",
    readTime: "9 min read",
    category: "Software",
    image: blog6_img2,
  },
  {
    id: 7,
    title: "Powering Intelligence: The Electrical System, and Why We're Building Our Own BMS",
    excerpt: "Every sensor, computer, and radio onboard depends on clean, reliable power. Here's how UART engineered the aircraft's electrical backbone, and the reasoning behind our decision to start designing a battery management system in-house.",
    content: `
<p><img src="${blog7_img3}" alt="Blog Image" class="blog-section-img" /></p><p><em>Wiring harness on the motor arm — one small, visible part of a much larger electrical system.</em></p><h1><strong>The System That Has to Work Even When Nobody's Watching It</strong></h1><p>Flight control, perception, mapping, and communication all quietly depend on one thing operating flawlessly in the background: power. A brownout at the wrong moment can silently reset a companion computer mid-mission, or cause a sensor to drop offline in a way that's genuinely difficult to diagnose after the fact, because the symptom you see rarely points directly back to the electrical cause. We've come to treat the electrical system as a first-class engineering problem — one that gets designed deliberately alongside the airframe and software, rather than assembled from whatever off-the-shelf parts happen to fit after everything else is finished.</p><h1><strong>Principles We Didn't Want to Compromise On</strong></h1><p>Our electrical design was guided by a short list of priorities we tried not to trade away for convenience: stable voltage delivery even as propulsion current draw swings during flight, real isolation between noisy power electronics and the sensitive sensor lines sitting nearby, wiring that's clear and serviceable enough to inspect quickly in the field rather than requiring a full teardown, and enough headroom in the design to add a new subsystem later without redesigning the whole power architecture from scratch. That last point mattered more than we expected once the custom BMS project (more on that below) needed its own connection into the system.</p><p><img src="${blog7_img1}" alt="Blog Image" class="blog-section-img" /></p><p><em>The aircraft's power distribution architecture, from the 6S2P battery pack through to each onboard subsystem.</em></p><h1><strong>Battery Configuration and Why It's Arranged This Way</strong></h1><p>The aircraft runs on a 6S2P lithium-ion pack — six series groups of two parallel cells each — a configuration chosen to balance voltage, usable capacity, and physical layout within the airframe, while keeping the pack modular enough that an individual cell group can be serviced or swapped without disassembling the entire battery. That modularity turned out to matter for reasons beyond convenience: it's also what makes per-group monitoring practical, which brings us to the part of this project we're least finished with.</p><h1><strong>Distributing Power Without Cross-Contaminating It</strong></h1><p>From the battery, power is routed through a dedicated distribution board out to every subsystem onboard — flight controller, companion computer, camera, telemetry radio, and the propulsion electronics — with each branch regulated to the specific voltage that subsystem needs, rather than sharing one raw rail across very different classes of hardware. Getting this separation right early in the design avoided a category of intermittent, hard-to-reproduce faults that we've heard about from other teams running less isolated architectures — the kind where a subsystem resets under load and nobody can say with confidence why.</p><h1><strong>Wiring Discipline, in Practice</strong></h1><p>It's easy to underestimate wiring quality until it fails mid-flight in a way that's nearly impossible to diagnose afterward. We standardized connector types across the aircraft, color-coded harnesses by function so a fault can be traced visually rather than with a multimeter, and routed cabling away from motors and ESCs wherever the airframe geometry allowed, specifically to reduce electromagnetic interference reaching sensitive sensor lines nearby.</p><p><img src="${blog7_img2}" alt="Blog Image" class="blog-section-img" /></p><p><em>Wiring routed along the arm, kept clear of the motor housing to reduce electromagnetic interference.</em></p><h1><strong>Why We're Building This Ourselves</strong></h1><p>Off-the-shelf power electronics got us to a flying, reliable aircraft, and we don't want to undersell that — they work, and they're well tested by people with far more resources than a student team. But they weren't designed around our specific pack configuration or our specific mission profile, and that gap is exactly where we've chosen to start doing in-house electronics design, beginning with a custom battery management system.</p><p>The board we're prototyping is designed to monitor each of the six 2S cell groups in the pack individually, with a dedicated connector for every group and an onboard microcontroller handling data logging and communication back to the flight stack over a simple UART interface. The current prototype, shown below, is still in an early, unvalidated stage — we're not presenting this as a finished, flight-proven component, and we want to be upfront about that.</p><h1><strong>What This Actually Buys Us</strong></h1><p>The motivation behind building this ourselves is fairly simple: off-the-shelf BMS hardware typically reports pack-level health, not per-cell-group detail, and per-cell-group visibility is exactly what would let us catch an early imbalance before it becomes a problem for whatever's drawing power downstream — in our case, that includes the ESCs driving the propulsion system. We'd rather find that kind of imbalance on the bench, with time to react, than discover it mid-flight.</p><p>Before this board goes anywhere near a real flight, it has to earn that trust the same way every other subsystem on the aircraft did — through deliberate bench testing against simulated load and imbalance conditions, not just a visual inspection of the layout. That validation work is ongoing, and we'll report back on it honestly, including if it doesn't go as planned.</p><div class="mt-12 pt-8 border-t border-white/10">
  <h2 class="text-2xl font-bold text-white mb-6 uppercase tracking-wider" style="font-family: 'Bebas Neue', sans-serif">About the Authors</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${probin}" alt="Probin Nath" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Probin Nath</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${anika}" alt="Anika Orthy" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Anika Orthy</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${rashed}" alt="Abdur Rahman" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Abdur Rahman</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
  </div>
</div>
`,
    author: "Probin Nath • Anika Orthy • Abdur Rahman",
    role: "Research Member, UIU Aerial Robotics Team",
    authorImg: "",
    date: "July 10, 2026",
    readTime: "12 min read",
    category: "Electrical",
    image: blog7_img3,
  },
  {
    id: 8,
    title: "Systems Integration: Bringing Every Subsystem Together",
    excerpt: "A UAV is more than the sum of its parts. Here's how UART integrates flight control, perception, mapping, and communication into one coordinated aircraft — and why integration testing has caught more real problems than any single-subsystem test.",
    content: `
<p><img src="${blog8_img0}" alt="Blog Image" class="blog-section-img" /></p><p><em>The full system interconnection diagram — how the flight controller, companion computer, sensors, and ground station are wired and linked together on the current aircraft.</em></p><h1><strong>Where Individually Good Components Either Click or Don't</strong></h1><p>Every subsystem covered elsewhere in this series — the airframe, propulsion, electrical system, perception, mapping, and obstacle avoidance — has to operate correctly at the same time, on the same battery, during an actual mission. Integration is the point where subsystems that each passed their own tests either come together into a genuinely reliable aircraft, or expose gaps between them that no individual test would have caught. In our experience, it's also where most of the hard-won lessons on this project actually came from.</p><h1><strong>How the Pieces Are Actually Wired Together</strong></h1><p>At a hardware level, the flight controller and companion computer sit at the center of the aircraft's architecture, exchanging data with the GPS module, LiDAR, camera, and telemetry radio over a mix of UART, CAN, and Ethernet links, depending on what each connection needs in terms of bandwidth and latency. The diagram above is the actual interconnection map we work from during integration — not a simplified illustration, but the reference the team uses when tracing a wiring or communication issue back to its source.</p><h1><strong>Keeping the Ground Station Honestly in the Loop</strong></h1><p>Throughout a mission, the aircraft and the ground control station exchange a continuous stream of telemetry, health data, and detection results in one direction, and mission commands and updates in the other. Neither side can afford to be more than a few seconds out of date with the other — a ground station showing stale telemetry is arguably worse than showing none, since it can give a false sense of confidence during exactly the moment something needs attention. Keeping that link fast and consistently reliable turned out to require as much testing effort as any individual onboard subsystem did.</p><h1><strong>One Continuous Loop, Not a Sequence of Isolated Tasks</strong></h1><p>From takeoff to payload delivery, the aircraft's subsystems function as a single continuous loop rather than a series of separate stages that happen to run one after another: navigation data feeds perception, perception feeds the mapping and obstacle-avoidance logic, and every stage reports its status back to the ground station in something close to real time. Treating it this way — rather than as independent modules that just happen to share a battery — has meaningfully changed how we test the system, pushing us toward running the whole loop together far earlier in development than we originally planned.</p><h1><strong>Testing the Whole Aircraft, Not Just Its Parts</strong></h1><p>Individually reliable subsystems don't automatically add up to a reliable aircraft, which is exactly why integration testing — running every subsystem together on the bench first, then in the field — has been where we've caught the majority of our real problems: timing conflicts between services, shared resource contention on the companion computer, and edge cases that simply never appear when a component is tested in isolation. The photo below is from one of those integration sessions, the full aircraft on the bench next to its ground station controller, mid pre-flight check.</p><p><img src="${blog8_img1}" alt="Blog Image" class="blog-section-img" /></p><p><em>The fully integrated aircraft during a bench test, with the ground station controller alongside.</em></p><h1><strong>Closing the Loop</strong></h1><p>Integration is never really finished — every new subsystem we add, from the custom BMS discussed in the previous post to whatever comes after it, has to earn its place within this same tested architecture before it flies. That ongoing process, more than any single piece of hardware or software, is what has actually kept this aircraft improving from one test flight to the next, and it's the note we wanted to end this series on for now. We'll be back with more once we've gathered further field data to write about.</p>
<div class="mt-12 pt-8 border-t border-white/10">
  <h2 class="text-2xl font-bold text-white mb-6 uppercase tracking-wider" style="font-family: 'Bebas Neue', sans-serif">About the Authors</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${member4}" alt="Ifta Faisal" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Ifta Faisal</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${israfil}" alt="MD. Israfil Hossain" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">MD. Israfil Hossain</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="${alfi}" alt="Md. Biplob" class="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-base leading-tight mb-0.5">Md. Biplob</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
  </div>
</div>
`,
    author: "Ifta Faisal • MD. Israfil Hossain • Md. Biplob",
    role: "Research Member, UIU Aerial Robotics Team",
    authorImg: "",
    date: "July 10, 2026",
    readTime: "9 min read",
    category: "Communication",
    image: blog8_img0,
  }
];

export const posts: BlogPost[] = [...postsRaw].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
