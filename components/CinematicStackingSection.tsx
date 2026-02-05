"use client";

import { useIntersection } from '@/lib/hooks';
import { ArrowRight, Plus } from 'lucide-react';
import React, { useState } from 'react';

interface ServiceItem {
    name: string;
    detail: string;
    description: string;
}

interface ServiceData {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    items: ServiceItem[];
}

interface CinematicStackingSectionProps {
    data: ServiceData;
    onOpenDrawer: (data: ServiceData) => void;
    onSelectService?: (item: ServiceItem) => void;
    onBook?: () => void;
    index?: number;
}

const CinematicStackingSection = ({ data, onOpenDrawer, onSelectService, onBook, index = 0 }: CinematicStackingSectionProps) => {
    const [ref, isVisible] = useIntersection(0.2);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const isEven = index % 2 === 0;

    return (
        <div id={data.title.toLowerCase().replace(' ', '-')} ref={ref as any} className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-[#fffbf2]">
            {/* Decorative Background Number */}
            <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-0 translate-x-[10%]' : 'left-0 -translate-x-[10%]'} select-none pointer-events-none z-0`}>
                <span className="text-[30rem] lg:text-[40rem] font-serif text-neutral-900/5 leading-[0.8] font-thin tracking-tighter block">
                    {data.id}
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}>

                    {/* Visual Side - Arched Window Design */}
                    <div className={`relative group ${isEven ? 'lg:order-1' : 'lg:order-2'} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        {/* The Arch Frame */}
                        <div className="relative aspect-[3/4] rounded-t-[500px] overflow-hidden shadow-2xl z-10 bg-[#fffbf2]">
                            {data.image.endsWith('.mp4') ? (
                                <video
                                    src={data.image}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] transform scale-100 group-hover:scale-110"
                                />
                            ) : (
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] transform scale-100 group-hover:scale-110"
                                />
                            )}
                            {/* Inner Shadow for depth */}
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                        </div>

                        {/* Decorative Offset Border */}
                        <div className="absolute inset-0 border border-neutral-300 rounded-t-[500px] -translate-x-4 translate-y-4 -z-10 transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2"></div>

                        {/* Interactive Floating Card (Refined) */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-white/40 px-8 py-4 shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 min-w-[200px] text-center z-20">
                            <div className="text-neutral-900 text-xs tracking-[0.2em] uppercase font-medium">
                                {data.subtitle}
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'} transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-12 bg-neutral-400"></span>
                            <span className="text-neutral-500 text-xs tracking-[0.4em] uppercase font-sans">
                                {data.subtitle}
                            </span>
                        </div>

                        <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-neutral-900 mb-8 leading-[0.9]">
                            {data.title}
                        </h2>

                        <p className="text-neutral-600 text-lg leading-relaxed max-w-md mb-10 font-light">
                            {data.description}
                        </p>

                        <div className="border-t border-neutral-200 mb-10">
                            {data.items.slice(0, 3).map((item, idx) => (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setHoveredItem(idx)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onClick={() => onSelectService && onSelectService(item)}
                                    className="border-b border-neutral-200 py-5 group/item cursor-pointer transition-all duration-300 hover:bg-neutral-100/50 px-4 -mx-4"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl text-neutral-800 font-light group-hover/item:text-black transition-colors">{item.name}</span>
                                        <Plus className={`text-neutral-400 transition-transform duration-300 ${hoveredItem === idx ? 'rotate-90 text-neutral-900' : ''}`} size={18} />
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredItem === idx ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-sm text-neutral-500 leading-relaxed max-w-[90%] font-light">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                            <button
                                onClick={() => onOpenDrawer(data)}
                                className="w-fit flex items-center gap-4 text-neutral-900 uppercase tracking-[0.2em] text-xs font-bold group hover:text-neutral-600 transition-colors cursor-pointer"
                            >
                                <span className="border-b border-neutral-900 pb-1 group-hover:border-neutral-600 transition-colors">View All Services</span>
                                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={14} />
                            </button>
                            <button
                                onClick={onBook}
                                className="bg-neutral-900 text-white px-6 py-3 uppercase text-xs tracking-widest hover:bg-[#d4c5b0] transition-colors cursor-pointer"
                            >
                                Book Consultation
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CinematicStackingSection;
