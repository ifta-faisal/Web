import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToHome: React.FC = () => (
  <div style={{ marginBottom: '2rem' }}>
    <Link
      to="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#64748b',
        textDecoration: 'none',
        transition: 'color 0.2s',
        fontFamily: "'Inter', sans-serif",
      }}
      onMouseEnter={e => (e.currentTarget.style.color = '#f97316')}
      onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
    >
      <ArrowLeft size={14} />
      Back to Home
    </Link>
  </div>
);

export default BackToHome;
