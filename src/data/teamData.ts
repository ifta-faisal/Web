import member1 from '../assets/images/Team/member1.webp';
import member2 from '../assets/images/Team/member2.webp';
import member3 from '../assets/images/Team/member3.webp';
import member4 from '../assets/images/Team/member4.webp';
import member5 from '../assets/images/Team/member5.webp';
import member7 from '../assets/images/Team/member7.webp';
import member8 from '../assets/images/Team/member8.webp';
import member9 from '../assets/images/Team/member9.webp';
import adnan from '../assets/images/Team/adnan.webp';
import alfi from '../assets/images/Team/alfi.webp';
import israfil from '../assets/images/Team/israfil.webp';
import anika from '../assets/images/Team/orthy.webp';
import jarin from '../assets/images/Team/dip.webp';
import rashed from '../assets/images/Team/rashed.webp';
import talha from '../assets/images/Team/talha.webp';
import probin from '../assets/images/Team/probin.webp';
import shahad from '../assets/images/Team/shahad.webp';
import arpon from '../assets/images/Team/arpon.webp';
import nazifa from '../assets/images/Team/nazifa.webp';
import sumaiya from '../assets/images/Team/sumaiya.webp';
import nusrat from '../assets/images/Team/nusrat.webp';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  team: string;
  department: string;
  image: string;
  category: string;
  email: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  { id: 'm1', name: 'T M AL Anam', role: 'TEAM LEAD', team: 'Electrical Team', department: 'Department of CSE', image: member1, category: 'leadership', email: 'tmukit@gmail.com', linkedin: 'https://www.linkedin.com/in/tmalanam?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { id: 'm2', name: 'Ahmed Junaed', role: 'CO-TEAM LEAD', team: 'Software & Navigation Team', department: 'Department of CSE', image: member2, category: 'leadership', email: 'ajunaed.work@gmail.com', linkedin: 'https://www.linkedin.com/in/ajunaed/' },
  { id: 'm3', name: 'Fahad Rahaman', role: 'SUB TEAM LEAD', team: 'Software & Navigation Team & R&D Team', department: 'Department of CSE', image: member3, category: 'leadership', email: 'fahadrahman020@gmail.com', linkedin: 'https://www.linkedin.com/in/fahad-rahman-ovi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { id: 'm4', name: 'MD Ifta Faisal', role: 'SUB TEAM LEAD', team: 'Web & Communication Team', department: 'Department of CSE', image: member4, category: 'leadership', email: 'iftafaisal759@gmail.com', linkedin: 'https://www.linkedin.com/in/ifta-faisal-030738255?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { id: 'm5', name: 'Muktaderul Islam', role: 'SUB TEAM LEAD', team: 'Mechanical Team', department: 'Department of CSE', image: member5, category: 'leadership', email: 'mislam222147@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/muktaderul-islam-17a714357/' },
  { id: 'm23', name: 'Dip Adhikary', role: 'MEMBER', team: 'PR & Marketing Team', department: 'Department of EEE', image: jarin, category: 'member', email: 'adhdip10@gmail.com', linkedin: 'https://www.linkedin.com/in/dip-adhikary-141917335?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { id: 'm7', name: 'Digonta Karmaker', role: 'MEMBER', team: 'Mechanical Team & Software & Navigation Team', department: 'Department of EEE', image: member9, category: 'member', email: ' dkarmaker2330144@bseee.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/digonta-karmaker-72930a37b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { id: 'm8', name: 'Khalid Hasan Talha', role: 'MEMBER', team: 'Mechanical Team', department: 'Department of EEE', image: talha, category: 'member', email: 'ktalha181034@bseee.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/khalid-hasan-talha-81597018b' },
  { id: 'm9', name: 'Adnan Mohammad Salauddin', role: 'MEMBER', team: 'Mechanical Team', department: 'Department of CSE', image: adnan, category: 'member', email: 'adnanmohammad546@gmail.com', linkedin: 'https://www.linkedin.com/in/adnan-sohag-76b376276?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { id: 'm10', name: 'Probin Chandra Nath', role: 'MEMBER', team: 'Electrical and Mechanical Team', department: 'Department of EEE', image: probin, category: 'member', email: 'pnath2330014', linkedin: 'https://www.linkedin.com/in/probin-nath-032985343?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { id: 'm13', name: 'Md. Israfil Hossain', role: 'MEMBER', team: 'R&D Team & Web & Communication Team', department: 'Department of CSE', image: israfil, category: 'member', email: 'mhossain223585@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/md-israfil-hossain-869851193' },
  { id: 'm14', name: 'Abdur Rahman', role: 'MEMBER', team: 'Electrical', department: 'Department of EEE', image: rashed, category: 'member', email: 'rashedur2545@gmail.com', linkedin: 'https://www.linkedin.com/in/abdur-rahman-rashed' },
  { id: 'm15', name: 'Md. Biplob', role: 'MEMBER', team: 'R&D Team & Web & Communication Team', department: 'Department of CSE', image: alfi, category: 'member', email: 'mbiplob223592@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/mdbiplob' },
  { id: 'm6', name: 'Maysoon Zahir', role: 'SUB TEAM LEAD', team: 'PR & Marketing Team & R&D Team', department: 'Department of Data Science', image: member7, category: 'leadership', email: 'mzahir2520045@bsds.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/maysoon-zahir-79b643242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { id: 'm16', name: 'Anika Noyshin Orthy', role: 'MEMBER', team: 'Electrical Team & PR & Marketing Team', department: 'Department of EEE', image: anika, category: 'member', email: 'aorthy2330060@bseee.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/anika-noyshin-orthy-280680242?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { id: 'm17', name: 'Nusrat Jahan Ananya', role: 'MEMBER', team: 'Software & Navigation Team', department: 'Department of CSE', image: nusrat, category: 'member', email: 'nananya2430669@bscse.uiu.ac.bd', linkedin: '' },
  { id: 'm18', name: 'MD Bahauddin Sheik Bahar', role: 'MEMBER', team: 'Web & Communication Team & PR & Marketing Team', department: 'Department of CSE', image: member8, category: 'member', email: ' mbahar223291@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/bahauddin-sheik-bahar-6776ba152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { id: 'm19', name: 'Sumaiya Sadika', role: 'MEMBER', team: 'R&D Team', department: 'Department of CSE', image: sumaiya, category: 'member', email: 'ssadika2330926@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/sumaiya-sadika-a48b54293' },
  { id: 'm20', name: 'Mobassir Hossain Shahad', role: 'MEMBER', team: 'Electrical Team', department: 'Department of EEE', image: shahad, category: 'member', email: 'mshahad2330059@bseee.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/mobassir-hossain-shahad-367871392' },
  { id: 'm21', name: 'Md Shazan Mahmud Arpon', role: 'MEMBER', team: 'Software & Navigation Team', department: 'Department of CSE', image: arpon, category: 'member', email: 'marpon2410351@bscse.uiu.ac.bd', linkedin: 'https://www.linkedin.com/in/md-shazan-mahmud-arpon' },
  { id: 'm22', name: 'Najifa Nawar', role: 'MEMBER', team: 'R&D Team', department: 'Department of CSE', image: nazifa, category: 'member', email: 'nawarnajifa32@gmail.com', linkedin: 'https://www.linkedin.com/in/najifa-nawar-b21137403?utm_source=share_via&utm_content=profile&utm_medium=member_android' }
];
