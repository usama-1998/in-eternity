"use client";

import { useIntersection } from '@/lib/hooks';

const Intro = () => {
    const [ref, isVisible] = useIntersection();
    return (
        <section id="the-architect" className="relative py-32 md:py-48 px-6 md:px-20 bg-white text-stone-900 z-20 overflow-hidden">
            <div className="absolute inset-0 opacity-30 animate-ken-burns">
                <img src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="texture" />
            </div>
            <div className="absolute inset-0 bg-white/80"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center" ref={ref}>
                <p className={`text-sm tracking-[0.3em] text-stone-500 uppercase mb-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    The Philosophy
                </p>
                <p className={`font-serif text-4xl md:text-6xl leading-tight text-stone-800 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    "We move away from the 'Magician' persona. We adopt the precision of a surgeon and the eye of a sculptor."
                </p>
                <div className={`mt-16 flex justify-center items-center gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop" alt="Dr Sin Yong" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover grayscale shadow-xl" />
                    <div className="text-left">
                        <p className="font-serif text-3xl italic text-stone-900">Dr. Sin Yong</p>
                        <p className="text-xs uppercase tracking-wider text-stone-500 mt-2">Medical Director • MRCS (Edin)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
