"use client";

import { useState } from 'react';
import { Play, X } from 'lucide-react';

interface HeroProps {
    onBook?: () => void;
}

const Hero = ({ onBook }: HeroProps) => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <header className="relative w-full h-screen bg-black overflow-hidden z-20">
            <div className="absolute inset-0 opacity-70">
                <video
                    src="/hero-new.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-24 pb-16">
                <div className="max-w-4xl">
                    <h1
                        className="text-white font-serif text-6xl md:text-9xl italic animate-text-slide opacity-0 leading-[0.9] mb-8"
                        style={{ animationDelay: '0.2s' }}
                    >
                        Eternity
                    </h1>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 animate-text-slide opacity-0" style={{ animationDelay: '0.6s' }}>
                        <div className="flex items-center gap-4 text-white/70">
                            <div className="h-px w-12 md:w-20 bg-white/50"></div>
                            <p className="uppercase text-xs tracking-[0.4em]">Medical Aesthetics</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <button onClick={() => setShowVideo(true)} className="group flex items-center gap-3 text-white hover:text-[#d4c5b0] transition-colors relative">
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#d4c5b0] group-hover:bg-white/5 transition-all relative pulse-ring">
                                    <Play size={16} fill="currentColor" className="ml-1" />
                                </div>
                                <span className="uppercase text-xs tracking-widest font-medium">Watch Film</span>
                            </button>
                            <button
                                onClick={onBook}
                                className="bg-white text-stone-900 px-8 py-4 uppercase text-xs tracking-widest hover:bg-[#d4c5b0] hover:text-white transition-colors"
                            >
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showVideo && (
                <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-in fade-in duration-500">
                    <button onClick={() => setShowVideo(false)} className="absolute top-8 right-8 text-white hover:text-[#d4c5b0] transition-colors z-50">
                        <X size={40} strokeWidth={1} />
                    </button>
                    <div className="w-full h-full max-w-7xl max-h-[80vh] aspect-video bg-black flex items-center justify-center">
                        <div className="relative w-full h-full overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2670&auto=format&fit=crop" alt="Brand Film" className="w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 flex items-center justify-center"><Play size={80} className="text-white opacity-50" /></div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Hero;
