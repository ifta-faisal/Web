import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import sponsorImageRight from '../assets/images/drone.png';
import sponsorImageLeft from '../assets/images/drone.png';

const SponsorProposal = () => {
    const GradientUnderline = () => (
        <div className="w-28 h-2 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 mx-auto mt-2"></div>
    );

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const parallaxStrengthLeft = -0.1;
    const parallaxStrengthRight = 0.05;

    return (
        <div className="min-h-screen bg-transparent text-white font-sans relative overflow-hidden">
            <div className="absolute top-20 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hidden md:block"></div>
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hidden md:block" style={{ animationDelay: '2s' }}></div>

            <img
                src={sponsorImageRight}
                alt="Sponsor Right"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 sm:w-96 opacity-90 hidden md:block"
                style={{ transform: `translateY(calc(-50% + ${scrollY * parallaxStrengthRight}px))` }}
            />

            <img
                src={sponsorImageLeft}
                alt="Sponsor Left"
                className="absolute left-0 top-[15%] transform -translate-y-1/2 w-64 sm:w-80 opacity-90 hidden md:block"
                style={{ transform: `translateY(calc(-50% + ${scrollY * parallaxStrengthLeft}px))` }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <section className="text-center py-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Sponsor Our Project</h1>
                    <GradientUnderline />
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6">
                        Join us in our journey to innovate and make an impact. Become a sponsor and be part of something extraordinary.
                    </p>
                </section>

                <section className="py-16 max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-2">About Our Project</h2>
                    <GradientUnderline />
                    <p className="text-gray-300 mt-6 mb-4">
                        Our project focuses on developing advanced aerial robotics solutions that address real-world challenges. With a team of talented and passionate individuals, we aim to deliver impactful solutions in aerial technology, renewable energy, and robotics applications.
                    </p>
                    <p className="text-gray-300">
                        We have achieved significant milestones, including [list key achievements, e.g., national/international competitions, prototype developments, research breakthroughs], and continue to push the boundaries of innovation to create solutions that make a tangible difference.
                    </p>
                </section>

                <section className="py-16 max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-2">Why Sponsor Us?</h2>
                    <GradientUnderline />
                    <ul className="list-disc list-inside space-y-3 text-gray-300 max-w-3xl mx-auto mt-6 text-left">
                        <li>Brand Exposure: Gain visibility among our growing audience, supporters, and community.</li>
                        <li>Collaborative Opportunities: Work alongside cutting-edge technology projects and contribute to their development.</li>
                        <li>Recognition: Be acknowledged on all project media, promotional materials, and events.</li>
                        <li>Impactful Contribution: Support a team dedicated to innovation, research, and making a positive difference in the field of robotics.</li>
                    </ul>
                </section>

                <section className="py-16 max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-2">Sponsorship Packages</h2>
                    <GradientUnderline />
                    <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
                        <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 shadow-md hover:shadow-xl transition">
                            <h3 className="text-xl font-bold mb-4">Bronze Sponsor</h3>
                            <p className="mb-4 text-gray-300">Support our project with basic sponsorship.</p>
                            <ul className="list-disc list-inside mb-4 text-gray-300">
                                <li>Logo on website</li>
                                <li>Social media mention</li>
                            </ul>
                            <p className="font-bold text-lg">Budget</p>
                        </div>
                        <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 shadow-md hover:shadow-xl transition">
                            <h3 className="text-xl font-bold mb-4">Silver Sponsor</h3>
                            <p className="mb-4 text-gray-300">Mid-tier sponsorship for better visibility.</p>
                            <ul className="list-disc list-inside mb-4 text-gray-300">
                                <li>Logo on website & events</li>
                                <li>Social media features</li>
                                <li>Project updates & newsletter mention</li>
                            </ul>
                            <p className="font-bold text-lg">Budget</p>
                        </div>
                        <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 shadow-md hover:shadow-xl transition">
                            <h3 className="text-xl font-bold mb-4">Gold Sponsor</h3>
                            <p className="mb-4 text-gray-300">Premium sponsorship for maximum exposure.</p>
                            <ul className="list-disc list-inside mb-4 text-gray-300">
                                <li>Prominent logo placement</li>
                                <li>Social media & press coverage</li>
                                <li>Meet & greet with the team</li>
                            </ul>
                            <p className="font-bold text-lg">Budget</p>
                        </div>
                    </div>
                </section>

                <section className="text-center py-16">
                    <h2 className="text-3xl font-semibold mb-2">Get in Touch</h2>
                    <GradientUnderline />
                    <p className="text-gray-300 mt-6 mb-6">
                        Interested in sponsoring us? Send us an email and let's discuss partnership opportunities.
                    </p>
                    <a
                        href="mailto:aerialrobotics@project.uiu.ac.bd"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold rounded-xl hover:from-orange-700 hover:to-yellow-700 transition"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Email Us</span>
                    </a>
                </section>
            </div>
        </div>
    );
};

export default SponsorProposal;
