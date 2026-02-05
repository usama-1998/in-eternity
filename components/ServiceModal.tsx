"use client";

import { X, Clock, Activity, Check } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: any; // Using any for flexibility as we just updated data structure
    onBook?: () => void;
}

const ServiceModal = ({ isOpen, onClose, service, onBook }: ServiceModalProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted || !service) return null;

    return (
        <div
            className={`fixed inset-0 z-[150] flex items-center justify-center p-4 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className={`relative w-full max-w-3xl bg-[#fffbf2] shadow-2xl rounded-sm overflow-hidden transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-12 opacity-0'}`}>

                {/* Close Button - Top Right */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 hover:bg-stone-100/50 rounded-full transition-colors z-20 cursor-pointer group"
                >
                    <X size={24} className="text-stone-400 group-hover:text-stone-900 transition-colors" />
                </button>

                <div className="flex flex-col md:flex-row h-full max-h-[85vh]">

                    {/* Content Side */}
                    <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4c5b0] block mb-3">
                            {service.detail}
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 italic mb-6 leading-tight">
                            {service.name}
                        </h2>

                        <div className="w-12 h-[1px] bg-stone-200 mb-8"></div>

                        <p className="text-stone-600 font-light leading-relaxed mb-8">
                            {service.fullDescription || service.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/50 p-4 rounded-sm border border-stone-100">
                                <div className="flex items-center gap-2 mb-2 text-stone-400">
                                    <Clock size={14} />
                                    <span className="text-[10px] uppercase tracking-widest">Duration</span>
                                </div>
                                <p className="text-stone-800 font-medium">{service.duration || "Consultation"}</p>
                            </div>
                            <div className="bg-white/50 p-4 rounded-sm border border-stone-100">
                                <div className="flex items-center gap-2 mb-2 text-stone-400">
                                    <Activity size={14} />
                                    <span className="text-[10px] uppercase tracking-widest">Downtime</span>
                                </div>
                                <p className="text-stone-800 font-medium">{service.downtime || "Minimal"}</p>
                            </div>
                        </div>

                        {service.benefits && (
                            <div className="mb-10">
                                <h4 className="font-serif text-lg text-stone-800 mb-4">Key Benefits</h4>
                                <ul className="space-y-3">
                                    {service.benefits.map((benefit: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-stone-600 font-light">
                                            <Check size={16} className="text-[#d4c5b0] mt-0.5 shrink-0" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <button
                            onClick={() => {
                                onClose();
                                if (onBook) onBook();
                            }}
                            className="w-full py-4 bg-stone-900 text-white uppercase tracking-widest text-[10px] hover:bg-[#d4c5b0] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
                        >
                            Book This Treatment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
