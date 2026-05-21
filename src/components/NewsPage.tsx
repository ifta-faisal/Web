import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, Calendar, ArrowLeft, X, SlidersHorizontal, User, Tag, Sparkles } from 'lucide-react';
import { newsItems, NewsItem } from '../data/newsData';

const CATEGORIES = ['All', 'Workshop', 'Collaboration', 'Training', 'Visit', 'Recruiting', 'General'];

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedNews(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter & Search news items
  const filteredNews = newsItems.filter((item) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* ── Inline keyframe for card fade-in ── */}
      <style>{`
        @keyframes card-fade-in {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .news-card-enter {
          animation: card-fade-in 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }
      `}</style>

      <div
        style={{
          minHeight: '100vh',
          background: 'transparent',
          color: '#fff',
          paddingTop: '7rem',
          paddingBottom: '5rem',
          position: 'relative',
        }}
      >

        {/* ── Page Content ── */}
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>

          {/* Back link */}
          <div style={{ marginBottom: '2rem' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#64748b',
                textDecoration: 'none', transition: 'color 0.2s',
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f97316')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </div>

          {/* ── Hero Header ── */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 1rem', borderRadius: '999px',
              background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)',
              color: '#f97316', fontSize: '0.65rem', fontWeight: 800,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              marginBottom: '1.2rem', fontFamily: "'Inter', sans-serif",
            }}>
              <Sparkles size={13} />
              Live UART Broadcasts
            </div>

            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.8rem, 8vw, 5rem)',
              fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em',
              textTransform: 'uppercase', margin: '0 0 1rem',
              background: 'linear-gradient(180deg, #ffffff 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              News &amp; Updates
            </h1>

            <p style={{
              maxWidth: '36rem', margin: '0 auto', color: '#94a3b8',
              fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.7,
              fontFamily: "'Inter', sans-serif",
            }}>
              Stay connected with the latest design breakthroughs, international collaborations, workshop achievements, and team milestones at UART.
            </p>

            <div style={{
              width: '100px', height: '3px', margin: '2rem auto 0',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, #f97316, #dc2626)',
              boxShadow: '0 0 16px rgba(249,115,22,0.4)',
            }} />
          </div>

          {/* ── Search & Filters ── */}
          <div style={{ marginBottom: '3rem' }}>
            {/* Top row: search + count */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
              {/* Search */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '28rem' }}>
                <span style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b', display: 'flex' }}>
                  <SearchIcon size={16} />
                </span>
                <input
                  type="text"
                  placeholder="Search news, tags, topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    padding: '0.75rem 2.5rem 0.75rem 2.5rem',
                    background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0.75rem', color: '#fff', fontSize: '0.85rem',
                    outline: 'none', fontFamily: "'Inter', sans-serif",
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(249,115,22,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    style={{
                      position: 'absolute', right: '0.75rem', top: '50%',
                      transform: 'translateY(-50%)', background: 'none', border: 'none',
                      color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center',
                    }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Count */}
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#475569', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                Showing {filteredNews.length} of {newsItems.length} publications
              </span>
            </div>

            {/* Category pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#475569', fontWeight: 700, marginRight: '0.5rem', fontFamily: "'Inter', sans-serif" }}>
                <SlidersHorizontal size={13} /> Filter:
              </span>
              {CATEGORIES.map(cat => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.45rem 1rem',
                      fontSize: '0.65rem', fontWeight: 700,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      borderRadius: '0.5rem', cursor: 'pointer',
                      fontFamily: "'Inter', sans-serif",
                      transition: 'all 0.25s',
                      border: active ? '1px solid rgba(249,115,22,0.5)' : '1px solid rgba(255,255,255,0.1)',
                      background: active ? 'linear-gradient(135deg, #f97316, #dc2626)' : 'rgba(255,255,255,0.02)',
                      color: active ? '#fff' : '#94a3b8',
                      transform: active ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: active ? '0 4px 14px rgba(249,115,22,0.25)' : 'none',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Cards Grid ── */}
          {filteredNews.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))',
              gap: '2rem',
            }}>
              {filteredNews.map((item, idx) => (
                <div
                  key={item.id}
                  className="news-card-enter"
                  onClick={() => setSelectedNews(item)}
                  style={{
                    animationDelay: `${idx * 70}ms`,
                    cursor: 'pointer',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    background: 'rgba(15,23,42,0.6)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex', flexDirection: 'column',
                    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.35s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(-6px)';
                    el.style.borderColor = 'rgba(249,115,22,0.3)';
                    el.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,115,22,0.1)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(0)';
                    el.style.borderColor = 'rgba(255,255,255,0.07)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#050911' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,9,17,0.7) 0%, transparent 60%)', pointerEvents: 'none' }} />
                    {/* Category badge */}
                    <div style={{
                      position: 'absolute', top: '0.9rem', left: '0.9rem',
                      padding: '0.3rem 0.75rem', borderRadius: '0.4rem',
                      background: 'rgba(5,9,17,0.85)', border: '1px solid rgba(249,115,22,0.4)',
                      fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: '#fff',
                      fontFamily: "'Inter', sans-serif",
                    }}>
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Meta */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: '#64748b', fontFamily: "'Inter', sans-serif" }}>
                        <Calendar size={13} color="#f97316" /> {item.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.65rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>
                        <User size={11} /> {item.source}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.3rem', fontWeight: 900, letterSpacing: '0.04em',
                      textTransform: 'uppercase', lineHeight: 1.25,
                      color: '#fff', margin: '0 0 0.75rem',
                      display: '-webkit-box', WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.83rem', color: '#94a3b8', lineHeight: 1.65,
                      fontWeight: 300, margin: '0 0 1.5rem',
                      display: '-webkit-box', WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical', overflow: 'hidden',
                      fontFamily: "'Inter', sans-serif",
                    }}>
                      {item.description}
                    </p>

                    {/* Footer CTA */}
                    <div style={{
                      marginTop: 'auto', paddingTop: '1rem',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: '#f97316',
                      fontFamily: "'Inter', sans-serif",
                    }}>
                      <span>Read More</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div style={{
              textAlign: 'center', padding: '5rem 2rem',
              border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '1rem',
              background: 'rgba(15,23,42,0.3)',
            }}>
              <p style={{ color: '#64748b', marginBottom: '1rem', fontFamily: "'Inter', sans-serif" }}>
                No updates found matching your criteria.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                style={{
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: '#f97316', background: 'none',
                  border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* ── Detail Modal ── */}
        {selectedNews && (
          <div
            onClick={() => setSelectedNews(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem',
              background: 'rgba(2,6,23,0.85)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{
                position: 'relative', width: '100%', maxWidth: '48rem',
                maxHeight: '90vh', borderRadius: '1.25rem', overflow: 'hidden',
                background: 'rgba(10,15,35,0.97)',
                border: '1px solid rgba(249,115,22,0.2)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
                display: 'flex', flexDirection: 'column',
              }}
            >
              {/* Close btn */}
              <button
                onClick={() => setSelectedNews(null)}
                style={{
                  position: 'absolute', top: '1rem', right: '1rem', zIndex: 10,
                  width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                  background: 'rgba(2,6,23,0.8)', border: '1px solid rgba(255,255,255,0.15)',
                  color: '#fff', cursor: 'pointer', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}
              >
                <X size={18} />
              </button>

              {/* Scrollable body */}
              <div style={{ overflowY: 'auto' }}>
                {/* Banner */}
                <div style={{ position: 'relative', aspectRatio: '16/9', background: '#050911' }}>
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,35,0.9) 0%, transparent 50%)' }} />
                  {/* Badges */}
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{
                      padding: '0.35rem 0.9rem', borderRadius: '0.5rem',
                      background: 'linear-gradient(135deg,#f97316,#dc2626)',
                      fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: '#fff',
                      fontFamily: "'Inter', sans-serif",
                    }}>
                      {selectedNews.category}
                    </span>
                    <span style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.35rem 0.9rem', borderRadius: '0.5rem',
                      background: 'rgba(5,9,17,0.85)', border: '1px solid rgba(255,255,255,0.12)',
                      fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: '#cbd5e1',
                      fontFamily: "'Inter', sans-serif",
                    }}>
                      <Calendar size={12} color="#f97316" /> {selectedNews.date}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '2rem 2rem 2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748b', fontFamily: "'Inter', sans-serif" }}>
                    <span>Official Release</span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316' }} />
                    <span>By {selectedNews.source} Admin</span>
                  </div>

                  <h2 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
                    fontWeight: 900, textTransform: 'uppercase',
                    letterSpacing: '0.04em', color: '#fff',
                    lineHeight: 1.1, margin: '0 0 1.5rem',
                  }}>
                    {selectedNews.title}
                  </h2>

                  <div style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, fontFamily: "'Inter', sans-serif", marginBottom: '2rem' }}>
                    <p style={{ marginBottom: '1rem' }}>{selectedNews.description}</p>
                    <p>Our team is actively involved in pushing the boundaries of autonomous aerospace navigation, intelligent pathfinding algorithms, and hardware-software integration. This update represents an important milestone in our mission timeline, fostering collaborative engineering education and next-generation autonomous flight systems.</p>
                  </div>

                  {/* Tags */}
                  {selectedNews.tags.length > 0 && (
                    <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#475569', fontFamily: "'Inter', sans-serif" }}>
                        <Tag size={13} /> Tags:
                      </span>
                      {selectedNews.tags.map(tag => (
                        <span key={tag} style={{
                          padding: '0.3rem 0.75rem', borderRadius: '0.4rem',
                          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                          fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em',
                          textTransform: 'uppercase', color: '#94a3b8',
                          fontFamily: "'Inter', sans-serif",
                        }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsPage;
