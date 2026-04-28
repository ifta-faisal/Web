import { Mail, Zap, Globe, Heart, Shield, Star, Trophy, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SponsorPage = () => {
    const benefits = [
        {
            icon: <Zap className="w-6 h-6 text-white" />,
            title: 'Cutting-edge Innovation',
            desc: 'Associate your brand with the latest breakthroughs in aerial robotics and autonomous systems.',
        },
        {
            icon: <Globe className="w-6 h-6 text-white" />,
            title: 'Industry Visibility',
            desc: 'Gain exposure across competitions, publications, social media, and our growing community.',
        },
        {
            icon: <Heart className="w-6 h-6 text-white" />,
            title: 'Sustainable Impact',
            desc: 'Support research that shapes the future of sustainable aviation and drone technology.',
        },
    ];

    const tiers = [
        {
            name: 'Bronze Partner',
            icon: <Star className="w-7 h-7" />,
            color: 'from-amber-700 to-yellow-800',
            border: 'border-amber-700/40',
            glow: 'from-amber-600/20 to-yellow-700/20',
            perks: [
                'Logo on website',
                'Social media mention',
                'Certificate of partnership',
            ],
        },
        {
            name: 'Silver Partner',
            icon: <Trophy className="w-7 h-7" />,
            color: 'from-slate-400 to-slate-600',
            border: 'border-slate-400/40',
            glow: 'from-slate-400/20 to-slate-600/20',
            featured: true,
            perks: [
                'Logo on website & events',
                'Social media features',
                'Project updates & newsletter',
                'Team presentation access',
            ],
        },
        {
            name: 'Gold Partner',
            icon: <Shield className="w-7 h-7" />,
            color: 'from-primary to-accent',
            border: 'border-primary/40',
            glow: 'from-primary/20 to-accent/20',
            perks: [
                'Prominent logo placement',
                'Social media & press coverage',
                'Meet & greet with the team',
                'Named in all publications',
                'Exclusive sponsor events',
            ],
        },
    ];

    const stats = [
        { value: '20+', label: 'Team Members' },
        { value: '6+', label: 'Projects Completed' },
        { value: '2+', label: 'Competitions' },
        { value: '100%', label: 'Dedication' },
    ];

    return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-24 relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-5 animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
                <section className="text-center mb-20 ">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs sm:text-sm font-semibold mb-6">
                        <Shield className="w-3.5 h-3.5" /> Partnership Opportunities
                    </span>
                    <h1 className="ju-reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Become a{' '}
                        <span className="bg-gradient-to-r from-primary via-[#f97316] to-primary text-transparent bg-clip-text">
                            Strategic Partner
                        </span>
                    </h1>
                    <p className="ju-reveal text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Support the future of sustainable aviation and position your organization at the forefront of aerospace innovation. By partnering with us, you'll help shape the next generation of drone-powered aircraft.
                    </p>
                </section>

                {/* ══ BENEFITS CARDS ════════════════════════════════════════════════════ */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16 " style={{ animationDelay: '0.1s' }}>
                    {benefits.map((b, i) => (
                        <div key={i} className="group relative h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
                            <div className="relative h-full bg-[rgba(15,23,42,0.8)] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 text-center flex flex-col items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                                    {b.icon}
                                </div>
                                <h3 className="ju-reveal text-white font-bold text-base">{b.title}</h3>
                                <p className="ju-reveal text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* ══ STATS ══════════════════════════════════════════════════════════════ */}
                <section className="bg-[rgba(15,23,42,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 mb-16 " style={{ animationDelay: '0.2s' }}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                        {stats.map((s, i) => (
                            <div key={i}>
                                <p className="ju-reveal text-3xl sm:text-4xl font-black bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">{s.value}</p>
                                <p className="ju-reveal text-slate-400 text-sm mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ══ SPONSORSHIP TIERS ═════════════════════════════════════════════════ */}
                <section className="mb-16 " style={{ animationDelay: '0.3s' }}>
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold mb-4">
                            <Trophy className="w-3.5 h-3.5" /> Sponsorship Tiers
                        </span>
                        <h2 className="ju-reveal text-3xl sm:text-4xl font-extrabold text-white">
                            Choose Your{' '}
                            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Partnership Level</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {tiers.map((tier, i) => (
                            <div key={i} className={`group relative ${tier.featured ? 'sm:-mt-4 sm:mb-4' : ''}`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${tier.glow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`} />
                                <div className={`relative h-full bg-[rgba(15,23,42,0.8)] backdrop-blur-xl border ${tier.border} rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col ${tier.featured ? 'border-2' : ''}`}>
                                    {tier.featured && (
                                        <div className="bg-gradient-to-r from-slate-300 to-slate-400 text-center py-1.5 text-xs font-bold text-slate-900 tracking-widest uppercase">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className={`bg-gradient-to-br ${tier.color} p-6 flex items-center gap-3`}>
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            {tier.icon}
                                        </div>
                                        <h3 className="ju-reveal text-xl font-extrabold text-white">{tier.name}</h3>
                                    </div>
                                    <div className="p-6 flex flex-col gap-3 flex-1">
                                        {tier.perks.map((perk, j) => (
                                            <div key={j} className="flex items-start gap-2.5 text-slate-300 text-sm">
                                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                {perk}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="px-6 pb-6">
                                        <a
                                            href="mailto:aerialrobotics@project.uiu.ac.bd?subject=Sponsorship Inquiry"
                                            className={`w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 bg-gradient-to-r ${tier.color} text-white hover:opacity-90 hover:shadow-lg`}
                                        >
                                            <Mail className="w-4 h-4" /> Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ══ PARTNER WITH US CTA ══════════════════════════════════════════════ */}
                <section className="" style={{ animationDelay: '0.4s' }}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                        <div className="relative bg-[rgba(15,23,42,0.8)] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 sm:p-14 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/30">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="ju-reveal text-2xl sm:text-3xl font-extrabold text-white mb-4">Partner With Us</h2>
                            <p className="ju-reveal text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
                                Whether you're interested in financial sponsorship, in-kind support, or technical collaboration, we'd love to discuss how we can work together to drive innovation in aerial robotics.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:aerialrobotics@project.uiu.ac.bd?subject=Partnership Inquiry"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                                >
                                    <Mail className="w-4 h-4" /> Start Partnership <ArrowRight className="w-4 h-4" />
                                </a>
                                <Link
                                    to="/sponsor-proposal"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-surface-2/60 border border-surface-2/50 text-white font-bold rounded-xl hover:border-primary/40 hover:bg-surface-2 transition-all duration-300"
                                >
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default SponsorPage;