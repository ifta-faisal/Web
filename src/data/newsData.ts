import workshop from '../assets/images/news/workshop.jpeg';
import ovtidose from '../assets/images/news/ovtidose.jpg';
import handson from '../assets/images/news/handson.jpeg';
import loopinc from '../assets/images/news/loopinc.jpg';
import ua from '../assets/images/UA1.jpeg';
import recruit2 from '../assets/images/news/Recruit2.jpeg';
import recruit1 from '../assets/images/news/Recruit1.jpeg';

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
