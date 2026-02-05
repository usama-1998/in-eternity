"use client";

import { useState, useEffect } from 'react';
import { useIntersection } from '@/lib/hooks';

const Intro = () => {
    const [ref, isVisible] = useIntersection();

    // Typing Effect State
    const [headlineText, setHeadlineText] = useState("");
    const [isHeadlineDone, setIsHeadlineDone] = useState(false);
    const [subText, setSubText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["Refinement.", "Elegance.", "Precision."];

    useEffect(() => {
        if (!isVisible) return;

        // Stage 1: Type 'The Art of'
        if (!isHeadlineDone) {
            const target = "The Art of";
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

        // Stage 2: Cycle Sub Words
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setSubText(isDeleting
                ? fullText.substring(0, subText.length - 1)
                : fullText.substring(0, subText.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && subText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && subText === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [isVisible, headlineText, isHeadlineDone, subText, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="the-architect" className="relative py-32 md:py-48 px-6 md:px-20 bg-white text-stone-900 z-20 overflow-hidden">
            <div className="absolute inset-0 opacity-30 animate-ken-burns">
                <img src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="texture" />
            </div>
            <div className="absolute inset-0 bg-white/80"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center" ref={ref}>
                <p className={`text-sm tracking-[0.3em] text-stone-500 uppercase mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    The Philosophy
                </p>
                <h2 className={`font-serif text-5xl md:text-7xl text-stone-900 mb-6 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-flex items-center">
                        {headlineText}
                        {!isHeadlineDone && <span className="ml-1 w-[2px] h-[0.8em] bg-stone-900 animate-pulse"></span>}
                    </span>
                    <br />
                    <span className="italic inline-flex items-center mt-2 min-h-[1em]">
                        {subText}
                        {isHeadlineDone && <span className="ml-1 w-[2px] h-[0.8em] bg-stone-900 animate-pulse"></span>}
                    </span>
                </h2>
                <p className={`text-stone-600 max-w-2xl mx-auto leading-relaxed mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    True elegance is found in the details. We combine medical expertise with an artistic eye to enhance your natural features, creating results that are sophisticated and undetectable.
                </p>

                <div className={`mt-4 flex justify-center items-center gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <img src="/images/dr-sin-yong.jpg" alt="Dr Sin Yong" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-xl" />
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
