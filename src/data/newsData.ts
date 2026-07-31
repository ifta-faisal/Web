import workshop from '../assets/images/news/workshop.webp';
import ovtidose from '../assets/images/news/ovtidose.webp';
import handson from '../assets/images/news/handson.webp';
import loopinc from '../assets/images/news/loopinc.webp';
import ua from '../assets/images/news/UA1.webp';
import recruit2 from '../assets/images/news/Recruit2.webp';
import recruit1 from '../assets/images/news/Recruit1.webp';
import vcvist from '../assets/images/news/VC_Vist_21_May.webp';
import amprius from '../assets/images/news/amprius_news.webp';
import autodesk from '../assets/images/news/autodesk_1.webp';
import solidworks from '../assets/images/news/solidworks.webp';
import poster from '../assets/images/news/poster.webp';
import puku from '../assets/images/news/puku.webp';
import mayy23 from '../assets/images/news/mayy_23.webp';
import jan19 from '../assets/images/news/jan_19.webp';
import july10 from '../assets/images/news/july_10.webp';
import upgrades from '../assets/images/news/Upgradesssss.png';
import aboutEnergy from '../assets/images/news/About energy.png';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  source: string;
  description: string;
  link: string;
  image: string;
  category: string;
  tags: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: 18,
    title: 'About Energy',
    date: '30 July 2026',
    source: 'UART',
    description: 'Welcome to Our Valued Sponsor\n\nWe are proud to welcome our newest sponsor to the UIU Aerial Robotics Team (UART). Your support empowers our mission to innovate, build, and inspire the next generation of autonomous aerial systems.\n\nAt UART, we are committed to advancing autonomous aerospace navigation, intelligent pathfinding algorithms, and seamless hardware-software integration. With your partnership, we can continue transforming ambitious ideas into real-world engineering solutions while providing students with invaluable hands-on experience in cutting-edge robotics and aviation technologies.\n\nYour contribution is more than sponsorship—it is an investment in innovation, education, and the future of autonomous flight. Together, we look forward to achieving new milestones, driving technological excellence, and shaping the future of aerospace engineering.\n\nThank you for joining us on this exciting journey. Welcome to the UART family.',
    link: '#',
    image: aboutEnergy,
    category: 'Sponsorship',
    tags: ['energy', 'information']
  },
  {
    id: 17,
    title: 'Welcome Upgrade Energy — Our Official Technology Partner',
    date: '31 July 2026',
    source: 'UART',
    description: 'We are proud to welcome Upgrade Energy as our official technology partner. This collaboration will help us integrate advanced energy solutions into our platforms, further strengthening our autonomous systems.\n\nOur team is actively involved in pushing the boundaries of autonomous aerospace navigation, intelligent pathfinding algorithms, and hardware-software integration. This update represents an important milestone in our mission timeline, fostering collaborative engineering education and next-generation autonomous flight systems.',
    link: '#',
    image: upgrades,
    category: 'Sponsorship',
    tags: ['partnership', 'technology', 'energy', 'collaboration', 'upgrade-energy']
  },
  {
    id: 13,
    title: 'Welcome Puku AI — Our Official AI Partner',
    date: '25 May 2026',
    source: 'UART',
    description: 'We are excited to welcome Puku AI as our official AI partner. This partnership will empower us to integrate advanced artificial intelligence capabilities into our platforms, pushing the boundaries of autonomous innovation.',
    link: '#',
    image: puku,
    category: 'Sponsorship',
    tags: ['partnership', 'ai', 'collaboration', 'puku-ai']
  },
  {
    id: 12,
    title: 'Selected for SUAS 2026',
    date: '29 July 2026',
    source: 'UART',
    description: 'We are thrilled to announce we are selected for SUAS 2026!',
    link: '#',
    image: poster,
    category: 'General',
    tags: ['suas', 'competition', 'achievement']
  },
  {
    id: 16,
    title: 'Visit from Professor Dr. Syafii, Universitas Andalas',
    date: '10 July 2026',
    source: 'UART',
    description: 'We were highly honored to host Professor Dr. Syafii from Universitas Andalas, Indonesia. He visited our UIU Aerial Robotics Team and had a great time seeing our facilities and discussing our progress in autonomous aerial robotics.',
    link: '#',
    image: july10,
    category: 'Visit',
    tags: ['visit', 'international', 'university', 'collaboration']
  },
  {
    id: 11,
    title: 'Autodesk — Official Sponsorship',
    date: '4 June 2026',
    source: 'UART',
    description: 'We are thrilled to announce that Autodesk has officially sponsored our team. Their state-of-the-art design and engineering software will empower our members to innovate and build the next generation of UAV platforms.',
    link: '#',
    image: autodesk,
    category: 'Sponsorship',
    tags: ['sponsorship', 'software', 'design', 'autodesk']
  },
  {
    id: 10,
    title: 'SolidWorks — Official Sponsorship',
    date: '3 June 2026',
    source: 'UART',
    description: 'We are proud to announce our new sponsorship with SolidWorks. This partnership will provide our team with access to industry-leading 3D CAD design software, greatly accelerating our hardware development process.',
    link: '#',
    image: solidworks,
    category: 'Sponsorship',
    tags: ['sponsorship', 'software', 'design', 'solidworks']
  },
  {
    id: 9,
    title: 'Amprius — Official Technology Partner',
    date: '17 june 2026',
    source: 'UART',
    description: 'We are proud to announce that Amprius Technologies has officially joined UART as our technology partner. Amprius brings cutting-edge silicon anode lithium-ion battery technology that will power the next generation of our UAV platforms with superior energy density and performance.',
    link: '#',
    image: amprius,
    category: 'Sponsorship',
    tags: ['partnership', 'technology', 'battery', 'collaboration', 'amprius']
  },
  {
    id: 14,
    title: 'Presentation to Honorable VC & Faculty',
    date: '23 May 2026',
    source: 'UART',
    description: 'UIU Aerial Robotics Team had the opportunity to present our UAV prototype and full-scale aerial platform to our Honorable Vice Chancellor of United International University Prof. Dr. Md. Abul Kashem Mia Sir, Prof Dr. A.K.M. Muzahidul Islam Sir, and Lecturer Azizur Rahman Anik Sir. We also conducted a successful test run, demonstrating the progress and performance of our system through practical implementation and live flight testing. The positive feedback and support truly motivates us to keep pushing forward and achieving even greater milestones in autonomous aerial robotics and engineering innovation.',
    link: '#',
    image: mayy23,
    category: 'General',
    tags: ['visit', 'presentation', 'uav', 'test-run']
  },
  {
    id: 8,
    title: 'Honourable VC Sir Visited Our Field Test',
    date: '21 May 2026',
    source: 'UART',
    description: 'Our honourable VC sir visited our field test with our Director of UART.',
    link: '#',
    image: vcvist,
    category: 'Visit',
    tags: ['visit', 'testing', 'field-test', 'leadership']
  },
  {
    id: 7,
    title: 'UAV Workshop Conducted',
    date: '18 May 2026',
    source: 'UART',
    description: 'One of our core team members successfully conducted an intensive, hands-on workshop on UAV design, hardware integration, and autonomous flight controls.',
    link: '#',
    image: workshop,
    category: 'Workshop',
    tags: ['training', 'education', 'workshop', 'hardware']
  },
  {
    id: 5,
    title: 'Invitation from Ovitidose, Bangladesh',
    date: '6 April 2026',
    source: 'UART',
    description: 'Our team was formally invited by Ovitidose, a Bangladesh-based drone company.',
    link: '#',
    image: ovtidose,
    category: 'Collaboration',
    tags: ['invitation', 'industry', 'collaboration', 'visit']
  },
  {
    id: 6,
    title: 'Hands-on Training Session',
    date: '20 March 2026',
    source: 'UART',
    description: 'A hands-on training session was conducted by one of our team members.',
    link: '#',
    image: handson,
    category: 'Training',
    tags: ['training', 'flight-control', 'hands-on']
  },
  {
    id: 15,
    title: 'Interview Sessions for Recruitment 2026 Concluded',
    date: '19 January 2026',
    source: 'UART',
    description: 'Our interview sessions for new member recruitment 2026 have finally come to an end! It was great meeting so many passionate and curious minds, hearing your ideas, and seeing the enthusiasm you bring to robotics and innovation. A special thanks to our guiding lights, Professor Dr. A.K.M. Muzahidul Islam, Assistant Professor Dr. Riasat Azim, and Lecturer Mr. Azizur Rahman Anik sir, for inspiring and supporting us throughout the interview sessions. We\'re excited to move forward with the selection process and can\'t wait to welcome new members who share our vision. Selected candidates will receive their confirmation email within the next two days. Stay tuned for updates on the next steps and upcoming events!',
    link: '#',
    image: jan19,
    category: 'General',
    tags: ['recruitment', 'interview', 'team', 'hiring']
  },
  {
    id: 4,
    title: 'Official Visit of Loop Inc',
    date: '28 November 2025',
    source: 'UART',
    description: 'A group of representatives from Loop Inc., Japan, visited us.',
    link: '#',
    image: loopinc,
    category: 'Visit',
    tags: ['visit', 'international', 'industry']
  },
  {
    id: 3,
    title: 'Meet UART',
    date: '28 November 2025',
    source: 'UART',
    description: 'A group of enthusiasts from UIU taking innovation to new heights.',
    link: '#',
    image: ua,
    category: 'General',
    tags: ['meetup', 'introduction', 'team']
  },
  {
    id: 2,
    title: 'Recruiting',
    date: '19 November 2025',
    source: 'UART',
    description: 'This is your last chance to join — 24 HOURS LEFT',
    link: '#',
    image: recruit2,
    category: 'Recruiting',
    tags: ['recruitment', 'hiring', 'joinus']
  },
  {
    id: 1,
    title: 'Recruiting',
    date: '12 November 2025',
    source: 'UART',
    description: 'We are looking for new Members.',
    link: '#',
    image: recruit1,
    category: 'Recruiting',
    tags: ['recruitment', 'hiring', 'joinus']
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
