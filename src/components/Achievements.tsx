import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import uaImage from '../assets/images/UA1.jpeg'; // using as placeholder

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: '2nd Runner-Up Position',
            event: 'BEAR Summit and National Semiconductor Symposium 2025',
            desc: 'At the BEAR Summit 2025, the team achieved remarkable success, securing the 2nd Runner Up position. United International University proudly showcased its cutting-edge innovation. The rover earned the title in the Robotics Demonstration segment.',
            tag: 'Best Science Team Award',
            date: 'July 2025',
            icon: <Award className="w-6 h-6" />
        },
        {
            id: 2,
            title: '3rd Place at ARC 2025',
            event: 'Anatolian Rover Challenge (ARC) 2025, Turkey',
            desc: 'At ARC 2025, the team proudly secured 3rd place overall, along with two prestigious recognitions: the Best Science Award and the Best Autonomous Driving and Control System Award. Showcased cutting edge AI navigation.',
            tag: 'Best Autonomous Driving',
            date: 'July 2025',
            icon: <Trophy className="w-6 h-6" />
        },
        {
            id: 3,
            title: '3rd Place Globally at ARC 2023',
            event: 'Anatolian Rover Challenge (ARC) 2023',
            desc: 'Achieved an impressive result, securing 3rd place overall out of 30 teams from 15 countries. This highlights the team\'s continuous growth and technical excellence in planetary exploration and autonomous navigation.',
            tag: 'Featured Globally',
            date: 'August 2023',
            icon: <Star className="w-6 h-6" />
        }
    ];

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-block mb-4">
                    <span className="px-4 py-2 bg-orange-500/20 border border-orange-400/50 rounded-full text-orange-300 text-sm font-semibold">
                        RECOGNITIONS
                    </span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Our Achievements</h2>
                <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-orange-400 to-red-600 mx-auto rounded-full mb-6"></div>
                <p className="text-slate-400 mb-16">Celebrating milestones that define our journey in robotics.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {achievements.map((item) => (
                        <div key={item.id} className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-500/80 transition-all duration-300 h-full flex flex-col">
                                <img src={uaImage} alt={item.title} className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 mb-3 bg-orange-400/10 px-2 py-1 rounded">
                                        {item.icon} Rover Team
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-400 mb-4 font-medium">{item.event}</p>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>

                                    <div className="flex justify-between items-end border-t border-slate-700/50 pt-4 mt-auto">
                                        <span className="text-orange-400 font-bold">{item.date}</span>
                                        <span className="text-slate-400 text-xs max-w-[50%] text-right">{item.tag}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
