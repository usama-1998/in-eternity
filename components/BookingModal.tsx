"use client";

import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Widget } from '@typeform/embed-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div
            className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className={`relative w-full max-w-2xl bg-[#fffbf2] shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-500 ease-out ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>

                {/* Header */}
                <div className="flex justify-between items-center p-6 md:p-8 border-b border-stone-100 bg-white/50">
                    <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-stone-400 block mb-1">Begin Your Journey</span>
                        <h2 className="font-serif text-2xl md:text-3xl text-stone-900 italic">Book Consultation</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-stone-100 rounded-full transition-colors group"
                    >
                        <X size={24} className="text-stone-400 group-hover:text-stone-900 transition-colors" />
                    </button>
                </div>

                {/* Content - Embedding Typeform or providing contact options */}
                <div className="h-[60vh] bg-white relative">
                    <Widget id="tVjkhN" style={{ width: '100%', height: '100%' }} className="w-full h-full" />
                </div>

            </div>
        </div>
    );
};

export default BookingModal;
