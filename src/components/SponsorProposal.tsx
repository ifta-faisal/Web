import React, { useState, useEffect } from 'react';
import { Mail, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';


const SponsorProposal = () => {
    const GradientUnderline = () => (
        <div className="w-28 h-2 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mt-2"></div>
    );

    const budgetUAV = [
        { name: 'Phase 1', qty: 78, bdt: '586,084', usd: '4,793', pct: '18.46%' },
        { name: 'Phase 2', qty: 65, bdt: '2,589,583', usd: '21,176', pct: '81.55%' },
    ];

    const budgetAdmin = [
        { name: 'Flight Fare', bdt: '3,200,000', usd: '25,600', pct: '41.29%' },
        { name: 'Hotel Fare', bdt: '2,500,000', usd: '20,000', pct: '32.26%' },
        { name: 'Vehicle', bdt: '1,000,000', usd: '8,000', pct: '12.90%' },
        { name: 'Food', bdt: '700,000', usd: '5,600', pct: '9.03%' },
        { name: 'Cargo-Cost', bdt: '350,000', usd: '2,800', pct: '4.52%' },
    ];

    const sponsorshipTiers = [
        {
            name: 'Titanium',
            amountBDT: '10,00,000',
            amountUSD: '8,176',
            color: 'from-[#38bdf8] to-[#0ea5e9]',
            facilities: [
                'Logo featured in all official media releases for SUAS 2026',
                'Prominent logo display on rover body (front and top) for SUAS 2026',
                'Inclusion on official souvenirs (T-shirts, mugs, etc.)',
                'Recognition in seminars and workshops hosted by UART',
                'Highlighted on official website and social media platforms',
                'Acknowledged in media press releases related to SUAS 2026'
            ]
        },
        {
            name: 'Platinum',
            amountBDT: '7,00,000',
            amountUSD: '5,723',
            color: 'from-[#94a3b8] to-[#64748b]',
            facilities: [
                'Logo featured on official media releases for SUAS 2026',
                'Prominent logo display on top of the drone for SUAS 2026',
                'Inclusion on official souvenirs (T-shirts, mugs, etc.)',
                'Recognition in seminars and workshops hosted by UART',
                'Highlighted in website & media press releases related to SUAS 2026'
            ]
        },
        {
            name: 'Gold',
            amountBDT: '5,00,000',
            amountUSD: '4,088',
            color: 'from-[#fbbf24] to-[#f59e0b]',
            facilities: [
                'Company logo on drone body (left/right) for SUAS 2026',
                'Company logo on official souvenirs (T-shirt, mug)',
                'Mentioned in seminars and workshops',
                'Mentioned in website & every media press release for SUAS 2026'
            ]
        },
        {
            name: 'Silver',
            amountBDT: '3,00,000',
            amountUSD: '2,400',
            color: 'from-[#cbd5e1] to-[#94a3b8]',
            facilities: [
                'Company logo on drone body (left/right) for SUAS 2026',
                'Company logo on official souvenirs (T-shirt, mug)',
                'Will be mentioned in the seminars & workshops'
            ]
        },
        {
            name: 'Bronze',
            amountBDT: '2,00,000',
            amountUSD: '1,600',
            color: 'from-[#b45309] to-[#92400e]',
            facilities: [
                'Company logo on official souvenirs (T-shirt) for SUAS 2026',
                'Will be mentioned in the seminars',
                'Will be mentioned on the website & media'
            ]
        }
    ];

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
        <div className="min-h-screen bg-transparent text-white pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
            <div className="absolute top-20 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#f97316] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hidden md:block"></div>
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#dc2626] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hidden md:block" style={{ animationDelay: '2s' }}></div>



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <section className=" text-center py-20">
                    <div className="section-label mb-3">Partnership</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <div className="mask-container">
                            <span className="mask-reveal ju-visible text-white">Sponsor Our Project</span>
                        </div>
                    </h1>
                    <p className="ju-reveal text-lg md:text-xl max-w-2xl mx-auto mt-6 text-slate-400">
                        Join us in our journey to innovate and make an impact. Become a sponsor and be part of something extraordinary.
                    </p>
                </section>

                <section className=" py-16 max-w-5xl mx-auto text-center">
                    <div className="section-label mb-3">Our Mission</div>
                    <h2 className="text-3xl font-semibold mb-4 uppercase tracking-[0.2em] text-white">
                        About Our Project
                    </h2>
                    <p className="ju-reveal text-slate-400 mt-6 mb-4 leading-relaxed">
                        Our project focuses on developing advanced aerial robotics solutions that address real-world challenges. With a team of talented and passionate individuals, we aim to deliver impactful solutions in aerial technology, renewable energy, and robotics applications.
                    </p>
                    <p className="ju-reveal text-slate-400 leading-relaxed">
                        We have achieved significant milestones, including successful flight tests, national/international competition participation, and research breakthroughs, and continue to push the boundaries of innovation to create solutions that make a tangible difference.
                    </p>
                </section>

                {/* ══ FINANCIAL BUDGET ═════════════════════════════════════════════════ */}
                <section className="py-20 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="section-label mb-3 px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold inline-block">Estimated Costing</div>
                        <h2 className="text-4xl font-bold mb-4 text-white uppercase tracking-wider">PROJECT BUDGET</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* UAV Fabrication Budget */}
                        <div className="card-modern rounded-2xl overflow-hidden border border-white/[0.08]">
                            <div className="bg-slate-800/50 p-6 border-b border-white/[0.08]">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    Drone Fabrication (UAV) with R&D
                                </h3>
                            </div>
                            <div className="relative group/table overflow-x-auto hide-scrollbar">
                                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-900/40 to-transparent pointer-events-none md:hidden z-10" />
                                <table className="w-full text-left min-w-[600px]">
                                    <thead>
                                        <tr className="bg-slate-900/50 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                                            <th className="px-6 py-4">Name</th>
                                            <th className="px-6 py-4">Qty</th>
                                            <th className="px-6 py-4">Total (BDT)</th>
                                            <th className="px-6 py-4">Total (USD)</th>
                                            <th className="px-6 py-4">Pct%</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/[0.05]">
                                        {budgetUAV.map((item, i) => (
                                            <tr key={i} className="text-sm text-slate-300">
                                                <td className="px-6 py-4 font-semibold text-white">{item.name}</td>
                                                <td className="px-6 py-4">{item.qty}</td>
                                                <td className="px-6 py-4">{item.bdt}</td>
                                                <td className="px-6 py-4">${item.usd}</td>
                                                <td className="px-6 py-4">{item.pct}</td>
                                            </tr>
                                        ))}
                                        <tr className="bg-primary/5 text-sm font-bold text-primary">
                                            <td className="px-6 py-4" colSpan={2}>Total: 143 items</td>
                                            <td className="px-6 py-4">3,175,667</td>
                                            <td className="px-6 py-4">$25,969</td>
                                            <td className="px-6 py-4">100%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Admin Budget */}
                        <div className="card-modern rounded-2xl overflow-hidden border border-white/[0.08]">
                            <div className="bg-slate-800/50 p-6 border-b border-white/[0.08]">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    Administrative Budget (SUAS 2026)
                                </h3>
                            </div>
                            <div className="relative group/table overflow-x-auto hide-scrollbar">
                                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-900/40 to-transparent pointer-events-none md:hidden z-10" />
                                <table className="w-full text-left min-w-[600px]">
                                    <thead>
                                        <tr className="bg-slate-900/50 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                                            <th className="px-6 py-4">Item Name</th>
                                            <th className="px-6 py-4">Amount (BDT)</th>
                                            <th className="px-6 py-4">Amount (USD)</th>
                                            <th className="px-6 py-4">Pct%</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/[0.05]">
                                        {budgetAdmin.map((item, i) => (
                                            <tr key={i} className="text-sm text-slate-300">
                                                <td className="px-6 py-4 font-semibold text-white">{item.name}</td>
                                                <td className="px-6 py-4">{item.bdt}</td>
                                                <td className="px-6 py-4">${item.usd}</td>
                                                <td className="px-6 py-4">{item.pct}</td>
                                            </tr>
                                        ))}
                                        <tr className="bg-accent/5 text-sm font-bold text-accent">
                                            <td className="px-6 py-4">Total Expenditure</td>
                                            <td className="px-6 py-4">7,750,000</td>
                                            <td className="px-6 py-4">$62,000</td>
                                            <td className="px-6 py-4">100%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Funding Progress */}
                    <div className="card-modern rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-50"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-widest">Funding Progress</h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-3">
                                        <span className="text-primary font-bold">University Contribution</span>
                                        <span className="text-primary">3,175,667 BDT</span>
                                    </div>
                                    <div className="h-4 bg-slate-900/50 border border-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[30%] shadow-[0_0_15px_rgba(234,88,12,0.5)]"></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-3">
                                        <span className="text-accent font-bold">Remaining Support Needed</span>
                                        <span className="text-accent">7,750,000 BDT</span>
                                    </div>
                                    <div className="h-4 bg-slate-900/50 border border-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-accent w-[70%] shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-10 text-slate-400 text-center italic text-sm leading-relaxed max-w-3xl mx-auto">
                                "Our university has already contributed 3,175,667 BDT toward the project. The total required administrative budget is 7,750,000 BDT, so we still need support from sponsors to participate in SUAS 2026."
                            </p>
                        </div>
                    </div>
                </section>

                {/* ══ SPONSORSHIP TIERS ═════════════════════════════════════════════════ */}
                <section className="py-20 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="section-label mb-3 px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold inline-block">Sponsorship Packages</div>
                        <h2 className="text-4xl font-bold mb-4 text-white uppercase tracking-wider">CHOOSE YOUR PARTNERSHIP</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sponsorshipTiers.map((tier, i) => (
                            <div key={i} className={`group relative ${i === 0 ? 'lg:scale-105 z-20' : ''}`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity rounded-2xl`}></div>
                                <div className={`card-modern rounded-2xl overflow-hidden h-full flex flex-col border border-white/[0.08] group-hover:border-primary/40 transition-all duration-500 ${i === 0 ? 'shadow-2xl shadow-primary/10' : ''}`}>
                                    <div className={`bg-gradient-to-br ${tier.color} p-8 text-center`}>
                                        <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/60 mb-2">{tier.name} Package</h3>
                                        <div className="text-3xl font-black text-white">{tier.amountBDT} <span className="text-sm font-medium opacity-70">BDT</span></div>
                                        <div className="text-sm text-white/50 mt-1">($ {tier.amountUSD} USD)</div>
                                    </div>
                                    <div className="p-8 flex-grow">
                                        <ul className="space-y-4">
                                            {tier.facilities.map((fac, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                                    <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                                    {fac}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="px-8 pb-8">
                                        <a href="mailto:aerialrobotics@project.uiu.ac.bd" className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 text-center block ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                                            Select Package
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ══ INFORMATION SECTION ═══════════════════════════════════════════════ */}
                <section className="py-20 max-w-5xl mx-auto">
                    <div className="card-modern rounded-[3rem] overflow-hidden border border-white/[0.08] relative">
                        <div className="absolute top-0 right-0 p-8">
                             <div className="bg-primary/20 p-4 rounded-3xl border border-primary/20 backdrop-blur-md">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1">Institution</h4>
                                <p className="text-sm font-bold text-white">United International University</p>
                             </div>
                        </div>

                        <div className="p-10 sm:p-16">
                            <div className="section-label mb-6">Contact Presence</div>
                            <h2 className="text-3xl sm:text-4xl font-black text-white mb-10 sm:mb-12 uppercase tracking-tight">Information Section</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-10">
                                    <div>
                                        <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Participating Team</h4>
                                        <p className="text-lg font-bold text-white">UIU Aerial Robotic Team (UART)</p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Major Competitions</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">Student Unmanned Aerial Systems (SUAS) 2026 | Oklahoma, USA</p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Leadership & Mentors</h4>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-white font-bold text-sm">Prof. Dr. A.K.M. Muzahidul Islam</p>
                                                <p className="text-slate-500 text-xs mt-1">Director & Lead Mentor | muzahid@cse.uiu.ac.bd</p>
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm">Dr. Riasat Azim</p>
                                                <p className="text-slate-500 text-xs mt-1">Mentor | riasat@cse.uiu.ac.bd</p>
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm">Mr. Azizur Rahman Anik</p>
                                                <p className="text-slate-500 text-xs mt-1">Mentor | azizur@cse.uiu.ac.bd</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-10">
                                    <div>
                                        <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Team Representatives</h4>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-white font-bold text-sm">TM Al Anam</p>
                                                <p className="text-slate-500 text-xs mt-1">Representative | tmukit@gmail.com</p>
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm">Maysoon Zahir</p>
                                                <p className="text-slate-500 text-xs mt-1">Media & PR Rep | mzahair2520045@bsds.uiu.ac.bd</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/5">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 p-2 flex items-center justify-center">
                                                <span className="text-[10px] font-black text-slate-500 uppercase rotate-90">QR Link</span>
                                            </div>
                                            <div>
                                                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 text-white">Join the Community</h4>
                                                <div className="flex gap-4">
                                                    <a href="https://www.facebook.com/uiuaerialrobotics" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all">
                                                        <Facebook className="w-4 h-4" />
                                                    </a>
                                                    <a href="https://youtube.com/@uiuaerialrobotics?si=DlAOChShO2_kzuYe" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all">
                                                        <Youtube className="w-4 h-4" />
                                                    </a>
                                                    <a href="https://www.instagram.com/uiuaerialrobotics" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all">
                                                        <Instagram className="w-4 h-4" />
                                                    </a>
                                                    <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all">
                                                        <Linkedin className="w-4 h-4" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══ PARTNER CATEGORIES ═══════════════════════════════════════════════ */}
                <section className="py-20 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="section-label mb-3 px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold inline-block">Partner Ecosystem</div>
                        <h2 className="text-4xl font-bold mb-4 text-white uppercase tracking-wider">SPECIALIZED PARTNERSHIPS</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">We are seeking dedicated partners in key industries to help us scale our impact and ensure operational excellence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Industry & Tech */}
                        <div className="card-modern rounded-2xl p-8 border border-white/[0.08] hover:border-primary/40 transition-all">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                <span className="font-black">01</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Industry & Tech Partners</h3>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></div> Ack. in all official media releases</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></div> Logo prominently on drone body</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></div> Logo on souvenirs (T-shirts, mugs)</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></div> Highlighted in industry seminars</li>
                            </ul>
                        </div>

                        {/* Media & Outreach */}
                        <div className="card-modern rounded-2xl p-8 border border-white/[0.08] hover:border-accent/40 transition-all">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                                <span className="font-black">02</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Media & Outreach Partners</h3>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0"></div> Doc. project journey through articles</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0"></div> Provide photo/video support</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0"></div> Assist with media outreach events</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0"></div> Content collaboration features</li>
                            </ul>
                        </div>

                        {/* Logistics */}
                        <div className="card-modern rounded-2xl p-8 border border-white/[0.08] hover:border-white/40 transition-all">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6">
                                <span className="font-black">03</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Logistics & Infra Partners</h3>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0"></div> Seamless UAV trans. to USA</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0"></div> Customs handling & overall support</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0"></div> Exclusive branding opportunities</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0"></div> Featured on official website</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ══ LOGO PLACEMENTS ══════════════════════════════════════════════════ */}
                <section className="py-20 max-w-6xl mx-auto">
                    <div className="card-modern rounded-[3rem] p-12 sm:p-20 bg-slate-900/50 border border-white/[0.08]">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Logo Placements</h2>
                            <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em]">Visual Identification Guide</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Apparel */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-black text-[10px]">A</div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-widest">Team Apparel</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-[4/5] bg-slate-800/50 rounded-2xl border border-white/5 p-6 flex flex-col justify-center items-center text-center">
                                        <div className="w-16 h-1 bg-primary/40 rounded-full mb-4"></div>
                                        <p className="text-xs font-bold text-white uppercase">Front View</p>
                                        <p className="text-[10px] text-slate-500 mt-2">Chest & Sleeve Logos</p>
                                    </div>
                                    <div className="aspect-[4/5] bg-slate-800/50 rounded-2xl border border-white/5 p-6 flex flex-col justify-center items-center text-center">
                                        <div className="w-20 h-8 bg-primary/20 rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                                            <span className="text-[8px] font-black text-primary">YOUR LOGO</span>
                                        </div>
                                        <p className="text-xs font-bold text-white uppercase">Back View</p>
                                        <p className="text-[10px] text-slate-500 mt-2">Prominent Center Logo</p>
                                    </div>
                                </div>
                            </div>

                            {/* UAV */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-black text-[10px]">B</div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-widest">UAV Body</h3>
                                </div>
                                <div className="bg-slate-800/50 rounded-3xl border border-white/5 p-12 relative overflow-hidden flex flex-col items-center">
                                     {/* Simple Drone Silhouette SVG or Placeholder */}
                                     <div className="w-full max-w-[280px] h-40 border-2 border-dashed border-white/10 rounded-full flex items-center justify-center relative">
                                        <div className="absolute top-0 px-4 py-1 bg-primary text-[8px] font-black text-white rounded-full -translate-y-1/2">TOP PLACEMENT</div>
                                        <div className="absolute left-0 -translate-x-1/2 px-4 py-1 bg-accent text-[8px] font-black text-white rounded-full rotate-90">LEFT BODY</div>
                                        <div className="absolute right-0 translate-x-1/2 px-4 py-1 bg-accent text-[8px] font-black text-white rounded-full -rotate-90">RIGHT BODY</div>
                                        <span className="text-slate-600 font-mono text-[10px] uppercase">UART SUAS 2026 UAV</span>
                                     </div>
                                     <p className="mt-8 text-center text-sm text-slate-400">Logos will be applied using high-durability aerospace grade vinyl to ensure visibility in all flight conditions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" text-center py-20">
                    <div className="section-label mb-3">Collaborate</div>
                    <h2 className="text-3xl font-semibold mb-4">
                        <div className="mask-container">
                            <span className="mask-reveal ju-visible text-white uppercase tracking-[0.2em]">Get in Touch</span>
                        </div>
                    </h2>
                    <p className="ju-reveal text-slate-400 mt-6 mb-6">
                        Interested in sponsoring us? Send us an email and let's discuss partnership opportunities.
                    </p>
                    <a
                        href="mailto:aerialrobotics@project.uiu.ac.bd"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:opacity-90 hover:shadow-lg transition-all"
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
