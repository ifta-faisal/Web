import { Link } from 'react-router-dom';
import { Mail, Zap, Globe, Heart, Shield, Star, Trophy, Users, ArrowRight, CheckCircle } from 'lucide-react';

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
            color: 'from-orange-500 to-red-600',
            border: 'border-orange-500/40',
            glow: 'from-orange-500/20 to-red-600/20',
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
        { value: '50+', label: 'Team Members' },
        { value: '10+', label: 'Projects Completed' },
        { value: '5+', label: 'Competitions' },
        { value: '100%', label: 'Dedication' },
    ];

    return (
        <div className="min-h-screen bg-transparent text-white font-sans relative overflow-hidden">
            {/* Glow blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '4s' }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-20">

                {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
                <section className="text-center mb-20 ju-reveal">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/20 border border-orange-400/40 rounded-full text-orange-300 text-xs sm:text-sm font-semibold mb-6">
                        <Shield className="w-3.5 h-3.5" /> Partnership Opportunities
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Become a{' '}
                        <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 text-transparent bg-clip-text">
                            Strategic Partner
                        </span>
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Support the future of sustainable aviation and position your organization at the forefront of aerospace innovation. By partnering with us, you'll help shape the next generation of drone-powered aircraft.
                    </p>
                </section>

                {/* ══ BENEFITS CARDS ════════════════════════════════════════════════════ */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16 ju-reveal" style={{ animationDelay: '0.1s' }}>
                    {benefits.map((b, i) => (
                        <div key={i} className="group relative h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/15 to-red-600/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
                            <div className="relative h-full bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 text-center flex flex-col items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                    {b.icon}
                                </div>
                                <h3 className="text-white font-bold text-base">{b.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* ══ STATS ══════════════════════════════════════════════════════════════ */}
                <section className="bg-[rgba(15,23,42,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 mb-16 ju-reveal" style={{ animationDelay: '0.2s' }}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                        {stats.map((s, i) => (
                            <div key={i}>
                                <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">{s.value}</p>
                                <p className="text-slate-400 text-sm mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ══ SPONSORSHIP TIERS ═════════════════════════════════════════════════ */}
                <section className="mb-16 ju-reveal" style={{ animationDelay: '0.3s' }}>
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/20 border border-orange-400/40 rounded-full text-orange-300 text-xs font-semibold mb-4">
                            <Trophy className="w-3.5 h-3.5" /> Sponsorship Tiers
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Choose Your{' '}
                            <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">Partnership Level</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {tiers.map((tier, i) => (
                            <div key={i} className={`group relative ${tier.featured ? 'sm:-mt-4 sm:mb-4' : ''}`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${tier.glow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`} />
                                <div className={`relative h-full bg-slate-800/70 backdrop-blur-xl border ${tier.border} rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col ${tier.featured ? 'border-2' : ''}`}>
                                    {tier.featured && (
                                        <div className="bg-gradient-to-r from-slate-400 to-slate-500 text-center py-1.5 text-xs font-bold text-slate-900 tracking-widest uppercase">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className={`bg-gradient-to-br ${tier.color} p-6 flex items-center gap-3`}>
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            {tier.icon}
                                        </div>
                                        <h3 className="text-xl font-extrabold text-white">{tier.name}</h3>
                                    </div>
                                    <div className="p-6 flex flex-col gap-3 flex-1">
                                        {tier.perks.map((perk, j) => (
                                            <div key={j} className="flex items-start gap-2.5 text-slate-300 text-sm">
                                                <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
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
                <section className="ju-reveal" style={{ animationDelay: '0.4s' }}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-3xl blur-2xl" />
                        <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-10 sm:p-14 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/30">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Partner With Us</h2>
                            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
                                Whether you're interested in financial sponsorship, in-kind support, or technical collaboration, we'd love to discuss how we can work together to drive innovation in aerial robotics.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:aerialrobotics@project.uiu.ac.bd?subject=Partnership Inquiry"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                                >
                                    <Mail className="w-4 h-4" /> Start Partnership <ArrowRight className="w-4 h-4" />
                                </a>
                                <Link
                                    to="/sponsor-proposal"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-slate-700/60 border border-slate-600/50 text-white font-bold rounded-xl hover:border-orange-500/40 hover:bg-slate-700 transition-all duration-300"
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