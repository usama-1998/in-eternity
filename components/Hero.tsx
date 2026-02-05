"use client";

import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

interface HeroProps {
    onBook?: () => void;
}

const Hero = ({ onBook }: HeroProps) => {
    const [showVideo, setShowVideo] = useState(false);

    // Typing Effect State
    const [headlineText, setHeadlineText] = useState("");
    const [isHeadlineDone, setIsHeadlineDone] = useState(false);

    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["Redefined", "Elevated", "Reimagined"];

    useEffect(() => {
        // Stage 1: Type 'Beauty'
        if (!isHeadlineDone) {
            const target = "Beauty";
            if (headlineText.length < target.length) {
                const timeout = setTimeout(() => {
                    setHeadlineText(target.substring(0, headlineText.length + 1));
                }, 150);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => setIsHeadlineDone(true), 500);
                return () => clearTimeout(timeout);
            }
        }

        // Stage 2: Cycle Subtitle words
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setCurrentText(isDeleting
                ? fullText.substring(0, currentText.length - 1)
                : fullText.substring(0, currentText.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [headlineText, isHeadlineDone, currentText, isDeleting, loopNum, typingSpeed]);

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
                        className="text-white font-serif text-6xl md:text-8xl italic animate-text-slide opacity-0 leading-[0.9] mb-6"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <span className="inline-flex items-center">
                            {headlineText}
                            {!isHeadlineDone && <span className="ml-1 w-[2px] h-[0.8em] bg-white animate-pulse"></span>}
                        </span>
                        <br />
                        <span className="flex items-center mt-4 min-h-[1em]">
                            {currentText}
                            {isHeadlineDone && <span className="ml-1 w-[2px] h-[0.8em] bg-white animate-pulse"></span>}
                        </span>
                    </h1>
                    <p
                        className="text-white/80 text-lg md:text-xl font-light max-w-lg mb-10 animate-text-slide opacity-0 leading-relaxed"
                        style={{ animationDelay: '0.4s' }}
                    >
                        Where medical precision meets artistic vision. We create results that are as timeless as they are natural.
                    </p>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 animate-text-slide opacity-0" style={{ animationDelay: '0.6s' }}>
                        <div className="flex items-center gap-6">
                            <button onClick={() => setShowVideo(true)} className="group flex items-center gap-3 text-white hover:text-[#d4c5b0] transition-colors relative cursor-pointer">
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#d4c5b0] group-hover:bg-white/5 transition-all relative pulse-ring">
                                    <Play size={16} fill="currentColor" className="ml-1" />
                                </div>
                                <span className="uppercase text-xs tracking-widest font-medium">Our Story</span>
                            </button>
                            <button
                                onClick={onBook}
                                className="bg-white text-stone-900 px-8 py-4 uppercase text-xs tracking-widest hover:bg-[#d4c5b0] hover:text-white transition-colors cursor-pointer"
                            >
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showVideo && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-500 p-8">
                    <div className="relative w-full max-w-4xl aspect-video bg-black flex items-center justify-center shadow-2xl border border-white/10">
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute -top-12 left-0 text-white hover:text-[#d4c5b0] transition-colors z-[60] cursor-pointer flex items-center gap-2 group"
                        >
                            <X size={24} strokeWidth={1} />
                            <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                        </button>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/TlLmve5I67o?autoplay=1"
                            title="Nature"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Hero;
