import React, { useState, useEffect, useRef } from 'react';

// ─── Sub-team data ─────────────────────────────────────────────────────────────
const subTeams = [
  {
    id: 'communication',
    icon: '📡',
    label: 'WEB & COMMUNICATION SUB-TEAM',
    shortDesc: 'Build and maintain team website & all drone radio frequency (RF) devices',
    priority: 'OPEN',
    skills: [
      {
        category: 'Web & RF Systems',
        categoryIcon: '🌐',
        tags: ['React', 'RF Systems', 'Telemetry'],
        bullets: [
          'Design, build, and maintain the team\'s official website.',
          'Manage and optimize long-range radio frequency (RF) communication links.',
          'Optimize real-time telemetry and data downlink for the UAV.',
          'Ensure reliable connection between ground station and aircraft.',
        ],
      },
    ],
  },
  {
    id: 'mechanical',
    icon: '⚙️',
    label: 'MECHANICAL SUB-TEAM',
    shortDesc: '3D design, fabrication & structural engineering',
    priority: 'OPEN',
    skills: [
      {
        category: '3D Design',
        categoryIcon: '🖨️',
        tags: ['SolidWorks', 'Fusion 360', 'Blender3D'],
        bullets: [],
      },
      {
        category: 'Fabrication',
        categoryIcon: '🔧',
        tags: [],
        bullets: ['Basic mechanical knowledge (materials/instruments) is preferred.'],
      },
    ],
  },
  {
    id: 'electronics',
    icon: '⚡',
    label: 'ELECTRONICS SUB-TEAM',
    shortDesc: 'PCB design, circuits & embedded hardware',
    priority: 'OPEN',
    skills: [
      {
        category: 'Circuit Design',
        categoryIcon: '🔌',
        tags: ['KiCad', 'Eagle', 'Altium'],
        bullets: ['Experience with PCB design is a plus.', 'Knowledge of sensors and actuators.'],
      },
    ],
  },
  {
    id: 'software',
    icon: '💻',
    label: 'SOFTWARE SUB-TEAM',
    shortDesc: 'Robotics programming, control systems & AI',
    priority: 'OPEN',
    skills: [
      {
        category: 'Programming',
        categoryIcon: '🖥️',
        tags: ['Python', 'C++', 'ROS'],
        bullets: ['Experience with embedded systems.', 'Interest in computer vision or AI.'],
      },
    ],
  },
  {
    id: 'media',
    icon: '📸',
    label: 'MEDIA & PR SUB-TEAM',
    shortDesc: 'Branding, video production & social media',
    priority: 'OPEN',
    skills: [
      {
        category: 'Content Creation',
        categoryIcon: '🎨',
        tags: ['Photoshop', 'Premiere Pro', 'Figma'],
        bullets: [
          'Photography and videography skills.',
          'Graphic design experience is preferred.',
          'Social media management skills.',
        ],
      },
    ],
  },
  {
    id: 'rd',
    icon: '🎙️',
    label: 'RESEARCH & DEVELOPMENT SUB-TEAM',
    shortDesc: 'Sponsorships, partnerships & external relations',
    priority: 'OPEN',
    skills: [
      {
        category: 'Outreach & Partnerships',
        categoryIcon: '🤝',
        tags: ['Networking', 'Sponsorship', 'Event Planning'],
        bullets: [
          'Ability to communicate and negotiate with sponsors and partners.',
          'Experience in event coordination or campus outreach is a plus.',
          'Strong interpersonal and presentation skills.',
        ],
      },
    ],
  },
];

const benefits = [
  { icon: '🚀', title: 'Real-World Experience', desc: 'Hands-on engineering on systems that compete internationally.' },
  { icon: '🌍', title: 'International Competitions', desc: 'Represent UIU .' },
  { icon: '🤝', title: 'Diverse Collaboration', desc: 'Work alongside students from all departments and disciplines.' },
  { icon: '📚', title: 'Skill Development', desc: 'Gain technical and soft skills that employers value most.' },
  { icon: '🏆', title: 'Trophy Cabinet', desc: 'Be part of a team with a proven record of achievement.' },
  { icon: '🔗', title: 'Industry Network', desc: 'Connect with professionals, mentors, and sponsors.' },
];

const timeline = [
  { step: '01', title: 'Apply Online', desc: 'Fill in the application form with your interests and background.' },
  { step: '02', title: 'Review', desc: 'Our team reviews your application within 5 business days.' },
  { step: '03', title: 'Interview', desc: 'Selected candidates are invited for a brief technical interview.' },
  { step: '04', title: 'Welcome Aboard!', desc: 'Successful applicants join sub-team orientation sessions.' },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const JoinUs = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "b658eaef-4208-4192-9479-0cf129ab75bd");
    formData.append("subject", `Recruitment: ${formData.get('preferred_team')}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
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
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  const toggle = (id: string) => setExpandedId(prev => prev === id ? null : id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeroVisible(true); },
      { threshold: 0.1 }
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.ju-reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('ju-visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Reset & base ── */
        .ju-page { background: transparent; color: #e2e8f0; font-family: 'Inter', 'Segoe UI', sans-serif; position: relative; overflow-x: hidden; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
        .section-padding { padding: 6rem 0; }

        /* ── Reveal animation ── */
        .ju-reveal { opacity: 0; transform: translateY(2rem); transition: opacity .7s ease, transform .7s ease; }
        .ju-visible { opacity: 1; transform: none; }

        /* ══ HERO ══════════════════════════════════════════════════════ */
        .ju-hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding-top: 8rem;    /* standardized pt-32 offset */
          padding-bottom: 6rem; 
          background: radial-gradient(circle at 80% 20%, rgba(249,115,22,0.08) 0%, transparent 60%),
                      radial-gradient(circle at 20% 80%, rgba(220,38,38,0.08) 0%, transparent 60%);
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .ju-hero {
            min-height: auto;
            padding-top: 7rem;
            padding-bottom: 8rem;
          }
        }
        /* Particle dots */
        .ju-hero-particles { position: absolute; inset: 0; pointer-events: none; }
        .ju-particle {
          position: absolute; border-radius: 50%;
          background: rgba(249,115,22,0.25);
          animation: floatUp linear infinite;
        }
        @keyframes floatUp {
          0%   { transform: translateY(100vh) scale(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-10vh) scale(1); opacity: 0; }
        }
        /* Hero content */
        .ju-hero-content {
          position: relative; z-index: 2; text-align: center;
          opacity: 0; transform: translateY(2.5rem);
          transition: opacity 1s ease, transform 1s ease;
        }
        .ju-hero-animate { opacity: 1; transform: none; }
        .ju-hero-eyebrow {
          display: inline-block; margin-bottom: 1rem;
          padding: .35rem 1rem; border-radius: 999px;
          background: rgba(249,115,22,0.15); border: 1px solid rgba(249,115,22,0.4);
          color: #fb923c; font-size: .78rem; font-weight: 600; letter-spacing: .06em;
        }
        .ju-hero-title {
          font-size: clamp(2rem, 5.5vw, 4rem);
          font-weight: 900; line-height: 1.08; margin-bottom: 1rem;
          text-transform: uppercase; letter-spacing: -.01em; color: #fff;
        }
        .ju-hero-highlight {
          display: block;
          background: linear-gradient(90deg, #f97316, #ef4444);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ju-hero-desc {
          max-width: 680px; margin: 0 auto 2rem;
          font-size: clamp(.85rem, 1.4vw, .98rem); color: #94a3b8; line-height: 1.75;
        }
        .ju-hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .ju-btn-primary {
          display: inline-flex; align-items: center; gap: .5rem;
          padding: .85rem 2.2rem; border-radius: 8px;
          background: linear-gradient(135deg, #ea580c, #dc2626);
          color: #fff; font-weight: 700; font-size: 1rem; letter-spacing: .05em; text-transform: uppercase;
          text-decoration: none; transition: transform .2s, box-shadow .2s;
          box-shadow: 0 4px 24px rgba(234,88,12,0.35);
        }
        .ju-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(234,88,12,0.5); }
        .ju-btn-outline {
          display: inline-flex; align-items: center; gap: .5rem;
          padding: .85rem 2.2rem; border-radius: 8px;
          border: 2px solid rgba(255,255,255,0.25); color: #fff;
          font-weight: 700; font-size: 1rem; letter-spacing: .05em; text-transform: uppercase;
          text-decoration: none; transition: border-color .2s, background .2s;
        }
        .ju-btn-outline:hover { border-color: rgba(249,115,22,0.6); background: rgba(249,115,22,0.08); }
        .ju-hero-scroll {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: .4rem;
        }
        .ju-hero-scroll-mouse {
          width: 24px; height: 40px;
          border: 2px solid rgba(255,255,255,0.45);
          border-radius: 999px;
          display: flex; justify-content: center; padding-top: 6px;
          animation: mouseBob 1.6s ease-in-out infinite;
        }
        .ju-hero-scroll-dot {
          width: 4px; height: 8px;
          background: #f97316;
          border-radius: 999px;
          animation: dotBob 1.6s ease-in-out infinite;
        }
        @keyframes dotBob {
          0%,100% { transform: translateY(0); opacity: 1; }
          50%      { transform: translateY(6px); opacity: .5; }
        }
        @keyframes mouseBob {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(5px); }
        }

        /* ══ SECTION HEADER ══════════════════════════════════════════ */
        .ju-section-header { text-align: center; margin-bottom: 4rem; }
        .ju-section-tag {
          display: inline-block; padding: .35rem 1rem; border-radius: 999px;
          background: rgba(249,115,22,0.15); border: 1px solid rgba(249,115,22,0.4);
          color: #fb923c; font-size: .78rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .ju-section-title {
          font-size: clamp(1.8rem, 4.5vw, 3rem); font-weight: 900; color: #fff;
          text-transform: uppercase; letter-spacing: .01em; line-height: 1.15; margin-bottom: .75rem;
        }
        .ju-section-sub { color: #64748b; font-size: 1rem; max-width: 560px; margin: 0 auto; }

        /* ══ WHY JOIN ════════════════════════════════════════════════ */
        .ju-why { background: transparent; }
        .ju-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) { .ju-benefits-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .ju-benefits-grid { grid-template-columns: 1fr; } }
        .ju-benefit-card {
          background: rgba(15,23,42,0.8); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; padding: 2rem 1.75rem;
          transition: transform .25s, border-color .25s, box-shadow .25s;
        }
        .ju-benefit-card:hover {
          transform: translateY(-4px); border-color: rgba(249,115,22,0.35);
          box-shadow: 0 12px 40px rgba(234,88,12,0.12);
        }
        .ju-benefit-icon { font-size: 2.2rem; margin-bottom: 1rem; }
        .ju-benefit-title { font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #fff; margin-bottom: .5rem; }
        .ju-benefit-desc { color: #64748b; font-size: .9rem; line-height: 1.65; }

        /* ══ MISSION CTA ═════════════════════════════════════════════ */
        .ju-mission-cta {
          background:
            radial-gradient(ellipse at 50% 60%, rgba(234,88,12,0.22) 0%, rgba(220,38,38,0.08) 45%, transparent 70%),
            transparent;
          padding: 5rem 0;
        }
        .ju-mission-inner {
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; gap: 2rem; text-align: center;
        }
        .ju-mission-inner h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 900;
          text-transform: uppercase; color: #fff; letter-spacing: .04em;
        }
        .ju-btn-cta {
          display: inline-flex; align-items: center; gap: .5rem;
          padding: .9rem 2.8rem; border-radius: 999px;
          background: linear-gradient(135deg, #f97316, #ef4444);
          color: #fff; font-weight: 700; font-size: 1rem; letter-spacing: .05em; text-transform: uppercase;
          text-decoration: none; white-space: nowrap;
          transition: transform .2s, box-shadow .2s;
          box-shadow: 0 4px 24px rgba(249,115,22,0.45);
        }
        .ju-btn-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 36px rgba(249,115,22,0.6); }

        /* ══ ACCORDION (OPEN POSITIONS) ══════════════════════════════ */
        .ju-teams { background: transparent; }
        .ju-accord-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(520px, 1fr)); gap: 1rem;
        }
        @media(max-width: 600px) { .ju-accord-grid { grid-template-columns: 1fr; } }

        /* Entry animation */
        .ju-accord-entry {
          opacity: 0; transform: translateY(1.5rem);
          animation: accordIn .55s ease forwards;
        }
        @keyframes accordIn { to { opacity:1; transform:none; } }

        .ju-accord-card {
          position: relative; border-radius: 14px; overflow: hidden;
          background: rgba(15,23,42,0.85); border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer; transition: border-color .25s, box-shadow .25s, background .25s;
        }
        .ju-accord-card:hover { background: rgba(15,23,42,0.95); }

        /* Left accent bar */
        .ju-accord-bar {
          position: absolute; top: 0; left: 0; bottom: 0; width: 4px;
          border-radius: 14px 0 0 14px;
          transition: opacity .3s;
        }

        /* Header row */
        .ju-accord-header {
          display: flex; align-items: center; gap: 1rem; padding: 1.25rem 1.5rem;
        }
        .ju-accord-icon-box {
          flex-shrink: 0; width: 46px; height: 46px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(249,115,22,0.2);
          transition: background .3s;
        }
        .ju-accord-icon { font-size: 1.3rem; }
        .ju-accord-meta { flex: 1; min-width: 0; }
        .ju-accord-name {
          font-size: .95rem; font-weight: 800; text-transform: uppercase;
          letter-spacing: .06em; color: #fff; margin-bottom: .2rem;
        }
        .ju-accord-short { font-size: .8rem; color: #475569; margin-bottom: .5rem; }
        .ju-accord-tool-row { display: flex; gap: .4rem; flex-wrap: wrap; }
        .ju-accord-pill {
          padding: .2rem .65rem; border-radius: 999px; font-size: .72rem; font-weight: 600;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
          color: #94a3b8; letter-spacing: .04em;
        }
        .ju-accord-right-col { display: flex; flex-direction: column; align-items: flex-end; gap: .5rem; flex-shrink: 0; }
        .ju-accord-badge {
          padding: .25rem .7rem; border-radius: 999px; font-size: .7rem;
          font-weight: 700; letter-spacing: .08em; text-transform: uppercase; white-space: nowrap;
        }
        .ju-accord-chevron {
          font-size: 1.4rem; font-weight: 900; line-height: 1;
          transition: transform .3s, color .3s;
          display: flex; align-items: center; justify-content: center;
        }

        /* Expandable body */
        .ju-accord-body { max-height: 0; overflow: hidden; transition: max-height .4s ease, opacity .3s ease; opacity: 0; }
        .ju-accord-body-open { max-height: 600px; opacity: 1; }
        .ju-accord-divider { height: 1px; margin: 0 1.5rem; }
        .ju-accord-skill-block { padding: 1.2rem 1.5rem 0; }
        .ju-accord-cat {
          font-size: .78rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          display: flex; align-items: center; gap: .5rem; margin-bottom: .75rem;
        }
        .ju-accord-tags { display: flex; gap: .5rem; flex-wrap: wrap; margin-bottom: .75rem; }
        .ju-skill-tag {
          padding: .3rem .8rem; border-radius: 8px; font-size: .78rem; font-weight: 600;
          background: rgba(249,115,22,0.12); border: 1px solid rgba(249,115,22,0.25);
          color: #fb923c;
        }
        .ju-accord-bullets { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .5rem; }
        .ju-accord-bullets li {
          display: flex; align-items: flex-start; gap: .6rem;
          font-size: .88rem; color: #94a3b8; line-height: 1.55;
        }
        .ju-accord-check { flex-shrink: 0; margin-top: .1rem; font-weight: 700; }
        .ju-accord-footer { padding: 1.25rem 1.5rem 1.5rem; }
        .ju-accord-apply-btn {
          display: inline-block; padding: .6rem 1.4rem; border-radius: 8px;
          font-size: .85rem; font-weight: 700; letter-spacing: .04em; text-decoration: none;
          transition: opacity .2s, transform .2s;
        }
        .ju-accord-apply-btn:hover { opacity: .85; transform: translateX(3px); }

        /* ══ TIMELINE ════════════════════════════════════════════════ */
        .ju-timeline { background: rgba(2,6,23,0.95); }

        /* Outer wrapper: positions the line relative to the circles */
        .ju-timeline-track {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-top: 3rem; /* space for circles above */
        }

        /* The continuous horizontal line */
        .ju-timeline-track::before {
          content: '';
          position: absolute;
          top: calc(3rem + 28px); /* vertically centered through circle midpoint */
          left: calc(100% / 8);  /* start from center of first circle */
          right: calc(100% / 8); /* end at center of last circle */
          height: 2px;
          background: linear-gradient(90deg, #f97316, #ef4444);
          z-index: 0;
        }

        /* Each step column */
        .ju-timeline-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          position: relative;
          z-index: 1;
        }

        /* Circle badge */
        .ju-tl-circle {
          width: 56px; height: 56px; border-radius: 50%;
          background: linear-gradient(135deg, #ea580c, #dc2626);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 0 4px rgba(234,88,12,0.2), 0 4px 20px rgba(234,88,12,0.4);
          margin-bottom: 1.5rem;
          flex-shrink: 0;
        }
        .ju-tl-num {
          font-size: 1.1rem; font-weight: 900; letter-spacing: .02em;
          color: #fff; font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        /* Text below circle */
        .ju-tl-content { padding: 0 0.5rem; }
        .ju-tl-content h4 {
          font-size: .9rem; font-weight: 900; text-transform: uppercase;
          letter-spacing: .08em; color: #fff; margin-bottom: .5rem;
        }
        .ju-tl-content p { font-size: .82rem; color: #64748b; line-height: 1.6; }

        /* Mobile: stack vertically */
        @media (max-width: 640px) {
          .ju-timeline-track { flex-direction: column; align-items: center; gap: 2.5rem; padding-top: 0; }
          .ju-timeline-track::before { display: none; }
          .ju-timeline-step { flex-direction: row; text-align: left; gap: 1.25rem; width: 100%; max-width: 340px; }
          .ju-tl-circle { margin-bottom: 0; flex-shrink: 0; }
          .ju-tl-content { padding: 0; }
        }

        /* ══ APPLY FORM ══════════════════════════════════════════════ */
        .ju-apply { background: transparent; }
        .ju-apply-inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 4rem; align-items: start; }
        @media(max-width: 900px) { .ju-apply-inner { grid-template-columns: 1fr; gap: 2.5rem; } }
        .ju-apply-title {
          font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 900; text-transform: uppercase;
          line-height: 1.1; color: #fff; margin: 1rem 0 1rem;
        }
        .ju-apply-title span {
          background: linear-gradient(135deg, #f97316, #ef4444);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ju-apply-desc { color: #64748b; font-size: 1rem; line-height: 1.7; margin-bottom: 2.5rem; }
        .ju-apply-facts { display: flex; gap: 2rem; }
        .ju-fact { display: flex; flex-direction: column; align-items: center; }
        .ju-fact-num {
          font-size: 2.5rem; font-weight: 900; line-height: 1;
          background: linear-gradient(135deg, #f97316, #ef4444);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ju-fact-label { font-size: .75rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: #475569; margin-top: .25rem; }

        /* Form */
        .ju-apply-form {
          background: rgba(15,23,42,0.7); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px; padding: 2.5rem; display: flex; flex-direction: column; gap: 1.25rem;
          backdrop-filter: blur(20px);
        }
        .ju-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media(max-width: 520px) { .ju-form-row { grid-template-columns: 1fr; } }
        .ju-form-group { display: flex; flex-direction: column; gap: .4rem; }
        .ju-form-group label { font-size: .78rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #94a3b8; }
        .ju-form-group input,
        .ju-form-group select,
        .ju-form-group textarea {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px; padding: .75rem 1rem; color: #e2e8f0;
          font-size: .95rem; outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .ju-form-group input:focus,
        .ju-form-group select:focus,
        .ju-form-group textarea:focus {
          border-color: rgba(249,115,22,0.6);
          box-shadow: 0 0 0 3px rgba(249,115,22,0.12);
        }
        .ju-form-group input::placeholder,
        .ju-form-group textarea::placeholder { color: #334155; }
        .ju-form-group select { appearance: none; cursor: pointer; }
        .ju-form-group select option { background: #1e293b; }
        .ju-btn-submit {
          display: inline-flex; align-items: center; justify-content: center; gap: .6rem;
          padding: 1rem; border-radius: 10px; border: none; cursor: pointer;
          background: linear-gradient(135deg, #ea580c, #dc2626);
          color: #fff; font-size: 1rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase;
          transition: transform .2s, box-shadow .2s, opacity .2s;
          box-shadow: 0 4px 20px rgba(234,88,12,0.4);
        }
        .ju-btn-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(234,88,12,0.55); }
      `}</style>

      <div className="ju-page">

        {/* ── HERO ── */}
        <section className=" ju-hero" ref={heroRef} id="join-us">
          <div className="ju-hero-particles">
            {[...Array(30)].map((_, i) => (
              <span key={i} className="ju-particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }} />
            ))}
          </div>
          <div className={`ju-hero-content container ${heroVisible ? 'ju-hero-animate' : ''}`}>
            <p className="ju-reveal ju-hero-eyebrow">🚀 UIU AERIAL ROBOTICS TEAM RECRUITMENT 2025</p>
            <h1 className="ju-reveal ju-hero-title">
              UIU AERIAL ROBOTICS TEAM<br />
              <span className="ju-hero-highlight">IS RECRUITING!</span>
            </h1>
            <p className="ju-reveal ju-hero-desc">
              Are you passionate about Aerial Robotics, Drone Technology, Autonomous Systems, and Research? Curious about shaping the future of aerial innovation? This is your chance to get involved!
              We are looking for dedicated and motivated individuals to join our team and contribute to the continuous development of advanced aerial robotics platforms. Together, we design, build, and optimize cutting-edge drones for research, innovation, and competitive challenges.
            </p>
            <div className="ju-hero-actions">
              <a href="#apply" className="ju-btn-primary"><span>🚀</span> APPLY NOW</a>
              <a href="#teams" className="ju-btn-outline">LEARN MORE ↓</a>
            </div>
          </div>
          <div className="ju-hero-scroll">
            <div className="ju-hero-scroll-mouse">
              <div className="ju-hero-scroll-dot" />
            </div>
          </div>
        </section>

        {/* ── WHY JOIN ── */}
        <section className=" ju-why section-padding" id="why-join">
          <div className="container">
            <div className="ju-section-header ju-reveal">
              <span className="ju-section-tag">WHY JOIN US?</span>
              <h2 className="ju-reveal ju-section-title">Build. Compete. Inspire.</h2>
              <p className="ju-reveal ju-section-sub">
                Join a family of passionate engineers, scientists, and creators pushing the boundaries of what's possible.
              </p>
            </div>
            <div className="ju-benefits-grid">
              {benefits.map((b, i) => (
                <div className="ju-benefit-card ju-reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="ju-benefit-icon">{b.icon}</div>
                  <h3 className="ju-reveal ju-benefit-title">{b.title}</h3>
                  <p className="ju-reveal ju-benefit-desc">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION CTA ── */}
        <section className="ju-mission-cta ">
          <div className="container ju-mission-inner">
            <h2 className="ju-reveal">READY TO JOIN THE MISSION?</h2>
            <a href="#apply" className="ju-btn-cta"><span>🚀</span> APPLY NOW</a>
          </div>
        </section>

        {/* ── OPEN POSITIONS (Accordion) ── */}
        <section className=" ju-teams section-padding" id="teams">
          <div className="container">
            <div className="ju-section-header ju-reveal">
              <span className="ju-section-tag">OPEN POSITIONS</span>
              <h2 className="ju-reveal ju-section-title">WE ARE LOOKING FOR MEMBERS<br />WITH THE FOLLOWING SKILLS</h2>
              <p className="ju-reveal ju-section-sub">Click any sub-team card to see what we're looking for. All UIU departments welcome.</p>
            </div>

            <div className="ju-accord-grid">
              {subTeams.map((team, i) => {
                const isOpen = expandedId === team.id;
                // Orange accent for all OPEN positions
                const accent = '#f97316';

                return (
                  <div
                    key={team.id}
                    className="ju-accord-card ju-accord-entry"
                    style={{
                      animationDelay: `${i * 0.09}s`,
                      borderColor: isOpen ? 'rgba(249,115,22,0.45)' : 'rgba(255,255,255,0.08)',
                      boxShadow: isOpen ? '0 0 0 1px rgba(249,115,22,0.12), 0 20px 50px rgba(0,0,0,0.55)' : 'none',
                    }}
                    onClick={() => toggle(team.id)}
                  >
                    {/* Left accent bar */}
                    <div className="ju-accord-bar" style={{ background: accent, opacity: isOpen ? 1 : 0 }} />

                    {/* Card header */}
                    <div className="ju-accord-header">
                      <div className="ju-accord-icon-box" style={{ background: 'rgba(249,115,22,0.1)' }}>
                        <span className="ju-accord-icon">{team.icon}</span>
                      </div>

                      <div className="ju-accord-meta">
                        <h3 className="ju-reveal ju-accord-name">{team.label}</h3>
                        <p className="ju-reveal ju-accord-short">{team.shortDesc}</p>
                        <div className="ju-accord-tool-row">
                          {team.skills.flatMap(s => s.tags || []).slice(0, 3).map((tag, ti) => (
                            <span className="ju-accord-pill" key={ti}>{tag}</span>
                          ))}
                          {team.skills.flatMap(s => s.tags || []).length === 0 && (
                            <span className="ju-accord-pill">Research & Docs</span>
                          )}
                        </div>
                      </div>

                      <div className="ju-accord-right-col">
                        {/* OPEN badge — orange bordered */}
                        <span className="ju-accord-badge" style={{
                          background: 'transparent',
                          color: '#fb923c',
                          border: '1px solid rgba(249,115,22,0.45)',
                        }}>
                          ✅ OPEN
                        </span>
                        {/* Chevron */}
                        <div className="ju-accord-chevron" style={{
                          transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
                          color: isOpen ? accent : '#444',
                        }}>›</div>
                      </div>
                    </div>

                    {/* Expandable body */}
                    <div className={`ju-accord-body ${isOpen ? 'ju-accord-body-open' : ''}`}>
                      <div className="ju-accord-divider" style={{ background: 'rgba(249,115,22,0.2)' }} />

                      {team.skills.map((skill, si) => (
                        <div className="ju-accord-skill-block" key={si}>
                          {skill.category && (
                            <p className="ju-reveal ju-accord-cat" style={{ color: accent }}>
                              <span>{skill.categoryIcon}</span> {skill.category}
                            </p>
                          )}
                          {skill.tags && skill.tags.length > 0 && (
                            <div className="ju-accord-tags">
                              {skill.tags.map((tag, ti) => (
                                <span className="ju-skill-tag" key={ti}>{tag}</span>
                              ))}
                            </div>
                          )}
                          {skill.bullets && skill.bullets.length > 0 && (
                            <ul className="ju-accord-bullets">
                              {skill.bullets.map((b, bi) => (
                                <li key={bi} className="ju-reveal">
                                  <span className="ju-accord-check" style={{ color: accent }}>✓</span>
                                  {b}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}

                      <div className="ju-accord-footer">
                        <a
                          href="#apply"
                          className="ju-accord-apply-btn"
                          style={{ background: 'linear-gradient(135deg, #ea580c, #dc2626)', color: '#fff' }}
                          onClick={e => e.stopPropagation()}
                        >
                          APPLY FOR THIS TEAM →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── HOW TO APPLY ── */}
        <section className=" ju-timeline section-padding" id="how-to-apply">
          <div className="container">
            <div className="ju-section-header ju-reveal">
              <span className="ju-section-tag">APPLICATION PROCESS</span>
              <h2 className="ju-reveal ju-section-title">HOW TO APPLY</h2>
            </div>
            <div className="ju-timeline-track ju-reveal">
              {timeline.map((step, i) => (
                <div className="ju-timeline-step" key={i}>
                  <div className="ju-tl-circle">
                    <span className="ju-tl-num">{step.step}</span>
                  </div>
                  <div className="ju-tl-content">
                    <h4>{step.title}</h4>
                    <p className="ju-reveal">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPLY FORM ── */}
        <section className=" ju-apply section-padding" id="apply">
          <div className="container">
            <div className="ju-apply-inner ju-reveal">
              <div className="ju-apply-left">
                <span className="ju-section-tag">JOIN THE CREW</span>
                <h2 className="ju-reveal ju-apply-title">READY TO MAKE<br /><span>HISTORY?</span></h2>
                <p className="ju-reveal ju-apply-desc">
                  Fill out the form and one of our team leads will reach out to you within
                  5 business days. Open to all UIU students regardless of department.
                </p>
                <div className="ju-apply-facts">
                  <div className="ju-fact">
                    <span className="ju-fact-num">6</span>
                    <span className="ju-fact-label">Sub-Teams</span>
                  </div>
                  <div className="ju-fact">
                    <span className="ju-fact-num">3</span>
                    <span className="ju-fact-label">Competitions</span>
                  </div>
                  <div className="ju-fact">
                    <span className="ju-fact-num">∞</span>
                    <span className="ju-fact-label">Possibilities</span>
                  </div>
                </div>
              </div>
              <form className="ju-apply-form" onSubmit={handleSubmit}>
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Application Sent!</h3>
                    <p className="text-slate-400">Thank you for your interest. We will review your application and contact you soon.</p>
                  </div>
                ) : (
                  <>
                    <div className="ju-form-row">
                      <div className="ju-form-group">
                        <label htmlFor="ju-fname">FIRST NAME *</label>
                        <input id="ju-fname" name="first_name" type="text" placeholder="e.g. Mariam" required />
                      </div>
                      <div className="ju-form-group">
                        <label htmlFor="ju-lname">LAST NAME *</label>
                        <input id="ju-lname" name="last_name" type="text" placeholder="e.g. Khan" required />
                      </div>
                    </div>
                    <div className="ju-form-group">
                      <label htmlFor="ju-email">UIU EMAIL *</label>
                      <input id="ju-email" name="email" type="email" placeholder="student@uiu.ac.bd" required />
                    </div>
                    <div className="ju-form-group">
                      <label htmlFor="ju-dept">DEPARTMENT *</label>
                      <input id="ju-dept" name="department" type="text" placeholder="e.g. Computer Science & Engineering" required />
                    </div>
                    <div className="ju-form-group">
                      <label htmlFor="ju-team">PREFERRED SUB-TEAM *</label>
                      <select id="ju-team" name="preferred_team" required>
                        <option value="">Select a sub-team...</option>
                        {subTeams.map(t => (
                          <option key={t.id} value={t.id}>{t.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="ju-form-group">
                      <label htmlFor="ju-why">WHY DO YOU WANT TO JOIN? *</label>
                      <textarea id="ju-why" name="statement" rows={4} placeholder="Tell us what drives you..." required />
                    </div>
                    <button type="submit" disabled={isSubmitting} className={`ju-btn-submit ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                      {isSubmitting ? "Sending..." : (
                        <>
                          <span>🚀</span> SUBMIT APPLICATION
                        </>
                      )}
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default JoinUs;
