import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, BookOpen, Share2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Asset Imports
import mentor1 from '../assets/images/Advisor/Mentor1.jpeg';
import vcImage from '../assets/images/Advisor/VC.jpg';
import projectImg from '../assets/images/Project/project1.jpeg';
import droneImg from '../assets/images/drone1.jpeg';
import missionImg from '../assets/images/DetailedFeatures/mission_planning_ui.png';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "b658eaef-4208-4192-9479-0cf129ab75bd");
    formData.append("email", email);
    formData.append("subject", "New Blog Newsletter Subscription");
    formData.append("from_newsletter", "true");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const logoUrl = new URL('../assets/images/logo/Logo UART SVG.svg', import.meta.url).href;

  const posts = [
    {
      id: 1,
      title: "Empowering the Next Generation: The UART Mission",
      excerpt: "University laboratories are the birthplaces of tomorrow's industry leaders. At UART, we provide more than just technical training; we foster a culture of leadership and visionary engineering.",
      author: "Dr. Md. Abul Kashem Mia",
      role: "Vice Chancellor, UIU",
      authorImg: vcImage,
      date: "April 11, 2026",
      readTime: "6 min read",
      category: "Leadership",
      image: projectImg,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      id: 2,
      title: "The Future of Autonomous Flight: AI & Edge Systems",
      excerpt: "The convergence of Jetson-class compute and advanced aerospace geometry is redefining UAV capabilities. We explore the roadmap for GPS-denied navigation and real-time obstacle avoidance.",
      author: "Dr. A.K.M. Muzahidul Islam",
      role: "Director, UART",
      authorImg: mentor1,
      date: "April 08, 2026",
      readTime: "8 min read",
      category: "Technology",
      image: droneImg,
      gradient: "from-accent/20 to-primary/20"
    },
    {
      id: 3,
      title: "SUAS 2026: The Path to Global Excellence",
      excerpt: "Competing on the international stage requires more than just a working drone. It demands rigorous systems engineering, redundant fail-safes, and a commitment to data-driven mission planning.",
      author: "Dr. A.K.M. Muzahidul Islam",
      role: "Director, UART",
      authorImg: mentor1,
      date: "April 05, 2026",
      readTime: "5 min read",
      category: "Research",
      image: missionImg,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      id: 4,
      title: "Telemetry Records: Breaking the 10km Barrier",
      excerpt: "Technical Log: Field testing the RFD900x link at maximum gain. Achievement of stable 10.2km bi-directional telemetry with <5% packet loss on encrypted FHSS channels.",
      author: "UART Engineering Lab",
      role: "Build Log v3.1",
      authorImg: logoUrl,
      date: "December 14, 2025",
      readTime: "4 min read",
      category: "Build Log",
      image: projectImg,
      gradient: "from-accent/10 to-primary/10"
    },
    {
      id: 5,
      title: "Edge AI Breakthrough: Jetson Integration",
      excerpt: "Milestone: Successfully migrated mission-critical neural networks from PC-tethered testing to the onboard NVIDIA Jetson. Real-time inference latency reduced to 82ms.",
      author: "UART Engineering Lab",
      role: "Build Log v2.4",
      authorImg: logoUrl,
      date: "October 20, 2024",
      readTime: "7 min read",
      category: "Build Log",
      image: droneImg,
      gradient: "from-primary/10 to-accent/10"
    },
    {
      id: 6,
      title: "Pioneering the Monocoque: Early Stress Tests",
      excerpt: "Foundational Record: Initial structural loading tests of the 3K Twill Carbon Fiber fuselage. Analysis shows 15% better torsional rigidity than target specs.",
      author: "UART Engineering Lab",
      role: "Build Log v1.0",
      authorImg: logoUrl,
      date: "February 12, 2024",
      readTime: "5 min read",
      category: "Build Log",
      image: projectImg,
      gradient: "from-accent/5 to-primary/5"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-24 relative overflow-hidden">

      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="section-label mb-5 mx-auto" style={{ display: 'inline-flex' }}>UART INSIGHTS</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
            Knowledge <span className="text-primary italic">&amp;</span> Vision
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Thought leadership and technical breakthroughs from our advisors, exploring the frontiers of autonomous robotics.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className="group relative flex flex-col h-full ju-reveal-scale"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Backglow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none`} />

              <div className="card-modern rounded-3xl overflow-hidden h-full flex flex-col group-hover:border-primary/30 transition-all duration-300">
                {/* Article Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-5 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</div>
                    <div className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Author Footer */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/30">
                        <img src={post.authorImg} alt={post.author} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-xs uppercase tracking-wide">{post.author}</p>
                        <p className="text-slate-500 text-[10px] font-medium">{post.role}</p>
                      </div>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / Call to Action */}
        <div className="card-modern rounded-[2.5rem] p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-3 uppercase tracking-wider">Stay Informed</h3>
            <p className="text-slate-400 max-w-lg mx-auto mb-8">
              Join our mailing list to receive monthly technical deep-dives and team updates directly in your inbox.
            </p>
            {submitted ? (
              <div className="flex flex-col items-center gap-2 text-primary">
                <CheckCircle className="w-10 h-10 mb-2 animate-bounce" />
                <span className="font-bold text-xl uppercase tracking-widest">Subscription Successful!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white focus:outline-none focus:border-primary transition-colors text-sm"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`btn-primary px-8 py-4 whitespace-nowrap ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? "Sending..." : "Subscribe Now"}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
