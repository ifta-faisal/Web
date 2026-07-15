import workshop from '../assets/images/news/workshop.jpeg';
import ovtidose from '../assets/images/news/ovtidose.jpg';
import handson from '../assets/images/news/handson.jpeg';
import loopinc from '../assets/images/news/loopinc.jpg';
import ua from '../assets/images/news/UA1.jpeg';
import recruit2 from '../assets/images/news/Recruit2.jpeg';
import recruit1 from '../assets/images/news/Recruit1.jpeg';
import vcvist from '../assets/images/news/VC_Vist_21_May.jpeg';
import amprius from '../assets/images/News/amprius_news.jpeg';
import autodesk from '../assets/images/news/autodesk_1.jpg';
import solidworks from '../assets/images/news/solidworks.jpg';
import poster from '../assets/images/news/poster.png';
import puku from '../assets/images/news/puku.jpeg';
import mayy23 from '../assets/images/news/mayy_23.jpeg';

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
    id: 13,
    title: 'Welcome Puku AI — Our Official AI Partner',
    date: '15 July 2026',
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
    date: '27 May 2026',
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
];
