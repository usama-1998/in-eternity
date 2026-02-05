"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center text-white ${scrolled ? 'bg-black/10 backdrop-blur-md' : 'bg-transparent'
                    }`}
            >
                <div className="font-serif text-2xl tracking-widest font-semibold uppercase">
                    IN Eternity
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="group flex items-center gap-3 uppercase text-xs tracking-[0.2em]"
                >
                    <span className="hidden md:block group-hover:tracking-[0.3em] transition-all">Menu</span>
                    <Menu size={24} strokeWidth={1} />
                </button>
            </nav>

            <div className={`fixed inset-0 bg-[#000] z-[60] text-white transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 md:top-12 md:right-12 hover:rotate-90 transition-transform duration-500">
                    <X size={32} strokeWidth={1} />
                </button>

                <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
                    {['The Architect', 'The Face', 'The Skin', 'The Body', 'The Lab', 'Contact'].map((item, idx) => (
                        <a
                            key={idx}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setIsOpen(false)}
                            className="font-serif text-4xl md:text-6xl italic hover:text-[#d4c5b0] transition-colors cursor-pointer"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
