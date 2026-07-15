import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data/blogData';

const categories = ['All', 'Leadership', 'Mechanical', 'Software', 'Artificial Intelligence', 'Research'];

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("access_key", "b658eaef-4208-4192-9479-0cf129ab75bd");
    formData.append("email", email);
    formData.append("subject", "New Blog Newsletter Subscription");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Error: " + data.message);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-5 mx-auto" style={{ display: 'inline-flex' }}>UART INSIGHTS</div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight">
            Knowledge <span className="text-primary italic pr-2 lg:pr-3">&</span> Vision
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Thought leadership and technical breakthroughs from our team, exploring the frontiers of autonomous robotics.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-widest font-semibold mr-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filter:
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-transparent border-white/10 text-slate-400 hover:border-primary/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Count */}
        <div className="text-right text-xs uppercase tracking-widest text-slate-500 font-semibold mb-8">
          Showing {filtered.length} of {posts.length} posts
        </div>

        {/* Blog List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-5 mb-20">
          {filtered.map((post, index) => {
            const isEven = index % 2 === 0;
            return (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className="group block"
              >
                <div className="card-modern rounded-xl overflow-hidden flex flex-col md:flex-row group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">

                  {/* Image — left for even, right for odd */}
                  <div
                    className={`relative w-full md:w-56 lg:w-64 shrink-0 overflow-hidden ${
                      isEven ? 'md:order-first' : 'md:order-last'
                    }`}
                    style={{ minHeight: '170px' }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 absolute inset-0"
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-primary text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-full">
                        {post.category}
                      </span>
                    </div>
                    {/* Latest badge for newest */}
                    {index === 0 && (
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="px-3 py-1 bg-accent text-white text-[10px] font-black tracking-[0.15em] uppercase rounded-full">
                          + Latest
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-4 md:p-6 flex-grow min-w-0">
                    {/* Title & Excerpt */}
                    <div className="mb-3">
                      <h2 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Spec Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="bg-white/5 border border-white/8 rounded-md px-3 py-1.5">
                        <p className="text-slate-500 text-[8px] uppercase tracking-widest font-bold mb-0.5">Date</p>
                        <p className="text-white text-[11px] font-bold">{post.date}</p>
                      </div>
                      <div className="bg-white/5 border border-white/8 rounded-md px-3 py-1.5">
                        <p className="text-slate-500 text-[8px] uppercase tracking-widest font-bold mb-0.5">Read Time</p>
                        <p className="text-white text-[11px] font-bold">{post.readTime}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-end">
                      <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest whitespace-nowrap shrink-0 group-hover:gap-3 transition-all duration-200">
                        Read Article
                        <div className="bg-primary/15 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-200">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

          {filtered.length === 0 && (
            <div className="text-center py-24 text-slate-500 text-sm uppercase tracking-widest">
              No posts found for this category.
            </div>
          )}
        </div>

        {/* Newsletter */}
        <div className="card-modern rounded-[2.5rem] p-6 sm:p-10 md:p-12 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-3 uppercase tracking-wider">Stay Informed</h3>
            <p className="text-slate-400 max-w-lg mx-auto mb-8">Join our mailing list to receive monthly technical deep-dives and team updates directly in your inbox.</p>
            {submitted ? (
              <div className="flex flex-col items-center gap-2 text-primary">
                <CheckCircle className="w-10 h-10 mb-2 animate-bounce" />
                <span className="font-bold text-xl uppercase tracking-widest">Subscription Successful!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto w-full">
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white focus:outline-none focus:border-primary transition-colors text-sm" required />
                <button type="submit" disabled={isSubmitting} className={`btn-primary px-8 py-4 whitespace-nowrap ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
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
