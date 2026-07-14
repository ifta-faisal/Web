import mentor1 from '../assets/images/Advisor/Mentor1.jpeg';
import mentor2 from '../assets/images/Advisor/Mentor2.png';
import mentor3 from '../assets/images/Advisor/Mentor3.jpeg';
import vcImage from '../assets/images/Advisor/VC.png';

export interface Advisor {
  id: string;
  name: string;
  role: string;
  category: 'advisor' | 'director' | 'mentor';
  department: string;
  image: string;
  bio: string;
  email: string;
  linkedin: string;
  gradient: string;
}

export const featured: Advisor[] = [
  {
    id: 'vc-advisor',
    name: 'Dr. Md. Abul Kashem Mia',
    role: 'ADVISOR',
    category: 'advisor',
    department: 'Vice Chancellor, UIU',
    image: vcImage,
    bio: 'Providing visionary leadership and institutional support to foster innovation and excellence within the UART Robotics Team.',
    email: 'akmia@cse.uiu.ac.bd',
    linkedin: 'https://www.linkedin.com/in/abul-kashem-mia-45136814',
    gradient: 'from-[#ea580c] to-[#dc2626]',
  },
  {
    id: 'director',
    name: 'Dr. A.K.M. Muzahidul Islam',
    role: 'DIRECTOR',
    category: 'director',
    department: 'Professor, Dept. of CSE',
    image: mentor1,
    bio: 'Leading comprehensive research strategies grounded in decades of specialized experience.',
    email: 'muzahid@cse.uiu.ac.bd',
    linkedin: 'https://www.linkedin.com/in/profdrmuzahid',
    gradient: 'from-primary to-[#ea580c]',
  },
];

export const mentors: Advisor[] = [
  {
    id: 'mentor-1',
    name: 'Dr. Riasat Azim',
    role: 'MENTOR',
    category: 'mentor',
    department: 'Assistant Professor, Dept. of CSE',
    image: mentor2,
    bio: 'Specializing in designing and deploying computer vision and machine learning solutions for complex, dynamic environments.',
    email: 'riasat@cse.uiu.ac.bd',
    linkedin: 'https://www.linkedin.com/in/riasat-azim-23812356',
    gradient: 'from-primary to-[#ea580c]',
  },
  {
    id: 'mentor-2',
    name: 'Mr. Azizur Rahman Anik',
    role: 'MENTOR',
    category: 'mentor',
    department: 'Lecturer, Dept. of CSE',
    image: mentor3,
    bio: 'Expert in applied machine learning and computer vision for real-time spatial analysis and object recognition.',
    email: 'azizur@cse.uiu.ac.bd',
    linkedin: 'https://www.linkedin.com/in/azizur-rahman-anik-056220260',
    gradient: 'from-primary to-[#ea580c]',
  },
];
