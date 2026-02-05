"use client";

import { useIntersection } from '@/lib/hooks';
import { ArrowRight } from 'lucide-react';

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
}

const CinematicStackingSection = ({ data, onOpenDrawer }: CinematicStackingSectionProps) => {
    const [ref, isVisible] = useIntersection(0.3);

    return (
        <div className="sticky top-0 w-full h-screen overflow-hidden border-t border-white/10 z-20 bg-black shadow-[0_-50px_100px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover animate-ken-burns opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20">
                <div
                    ref={ref as any}
                    className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-white/90 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2">
                            {data.id} • {data.subtitle}
                        </span>
                    </div>

                    <h2 className="font-serif text-7xl md:text-[8rem] leading-[0.8] text-white italic mb-8">
                        {data.title}
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <p className="text-white/80 font-light text-lg max-w-md leading-relaxed">
                            {data.description}
                        </p>

                        <button
                            onClick={() => onOpenDrawer(data)}
                            className="group flex items-center gap-4 bg-white text-black px-8 py-4 uppercase text-xs tracking-widest hover:bg-[#d4c5b0] hover:text-white transition-all shadow-xl"
                        >
                            Explore Collection
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CinematicStackingSection;
