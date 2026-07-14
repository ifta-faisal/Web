import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, Linkedin, Twitter, Facebook, Mail, Link2 } from 'lucide-react';
import { posts } from '../data/blogData';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === Number(id));

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-transparent">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="btn-primary px-6 py-2 rounded-full">Return to Blog</Link>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/20 border border-primary/30 text-primary text-[11px] font-bold tracking-[0.2em] uppercase rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                <img src={post.authorImg} alt={post.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-wide">{post.author}</p>
                <p className="text-slate-400 text-xs">{post.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-slate-400 font-mono">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {post.date}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {post.readTime}</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="aspect-[21/9] w-full">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Content Layout */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 relative">
          
          {/* Social Sidebar (Sticky) */}
          <div className="hidden lg:block w-16 flex-shrink-0">
            <div className="sticky top-32 flex flex-col items-center gap-4">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2" style={{ writingMode: 'vertical-rl' }}>Share</div>
              <div className="w-px h-8 bg-white/10 mb-2"></div>
              
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all group">
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
              
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all group">
                <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
              
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all group">
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
              
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500 hover:border-red-500 transition-all group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>

              <button onClick={handleCopyLink} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all group mt-2">
                <Link2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Main Article Content */}
          <article className="flex-grow max-w-3xl prose prose-invert prose-lg prose-headings:font-bold prose-headings:text-white prose-a:text-primary hover:prose-a:text-orange-400 prose-img:rounded-xl prose-hr:border-white/10">
            {/* AI Summary Block Aesthetic styling is embedded in the content HTML using classes. 
                We will inject some CSS here to format it specifically. */}
            <style dangerouslySetInnerHTML={{__html: `
              .ai-summary-block {
                background: rgba(15, 23, 42, 0.6);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-left: 4px solid #f97316;
                padding: 1.5rem 2rem;
                border-radius: 0.75rem;
                margin: 2.5rem 0;
                backdrop-filter: blur(10px);
              }
              .ai-summary-block h3 {
                margin-top: 0;
                color: #f97316;
                font-size: 1.1rem;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                display: flex;
                align-items: center;
                gap: 0.5rem;
              }
              .ai-summary-block h3::before {
                content: '✨';
              }
              .ai-summary-block ul {
                margin-bottom: 1rem;
              }
              .ai-summary-block li {
                color: #e2e8f0;
                font-size: 1rem;
                line-height: 1.6;
              }
              .summary-disclaimer {
                font-size: 0.8rem;
                color: #64748b;
                margin: 0;
                font-style: italic;
              }
              article pre {
                background: #0f172a !important;
                border: 1px solid rgba(255,255,255,0.1);
                border-radius: 0.75rem;
                padding: 1.5rem;
                overflow-x: auto;
              }
              article h2 {
                color: #f1f5f9;
                font-size: 1.8rem;
                margin-top: 2.5rem;
                margin-bottom: 1.25rem;
              }
              article h3 {
                color: #cbd5e1;
                font-size: 1.4rem;
                margin-top: 2rem;
              }
              article p {
                color: #94a3b8;
                line-height: 1.8;
                margin-bottom: 1.5rem;
                font-family: 'Inter', sans-serif;
              }
              article ul {
                list-style-type: disc;
                margin-left: 1.5rem;
                margin-bottom: 1.5rem;
              }
              article li {
                color: #94a3b8;
                line-height: 1.7;
                margin-bottom: 0.5rem;
              }
              article li::marker {
                color: #f97316;
              }
              .blog-section-img {
                width: 100%;
                height: auto;
                object-fit: contain;
                border-radius: 0.75rem;
                margin: 1.5rem 0 2rem;
                border: 1px solid rgba(255, 255, 255, 0.08);
                display: block;
              }
              .about-authors-section {
                margin-top: 3.5rem;
                padding-top: 2.5rem;
                border-top: 2px solid rgba(249, 115, 22, 0.3);
              }
              .about-authors-section h2 {
                color: #f1f5f9;
                font-size: 1.8rem;
                margin-bottom: 2rem;
                margin-top: 0;
              }
              .author-card {
                display: flex;
                align-items: flex-start;
                gap: 1.5rem;
                padding: 1.5rem 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.07);
              }
              .author-card:last-child {
                border-bottom: none;
              }
              .author-photo {
                width: 90px;
                height: 90px;
                border-radius: 0.5rem;
                object-fit: cover;
                object-position: top;
                flex-shrink: 0;
                border: 2px solid rgba(249, 115, 22, 0.4);
              }
              .author-info h4 {
                color: #f1f5f9;
                font-size: 1rem;
                font-weight: 700;
                margin: 0 0 0.5rem;
                font-family: 'Inter', sans-serif;
              }
              .author-info p {
                color: #94a3b8;
                font-size: 0.9rem;
                line-height: 1.7;
                margin: 0;
              }
            `}} />
            
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
