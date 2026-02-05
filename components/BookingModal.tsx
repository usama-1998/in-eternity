"use client";

import { X, ArrowRight, Check } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        concern: ''
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setFormState('success');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (!isMounted) return null;

    return (
        <div
            className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className={`relative w-full max-w-lg bg-[#fffbf2] shadow-2xl rounded-sm overflow-hidden transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-12 opacity-0'}`}>

                {/* Header */}
                <div className="flex justify-between items-start p-8 pb-0">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-2">Begin Your Journey</span>
                        <h2 className="font-serif text-3xl text-stone-800 italic">Consultation</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 hover:bg-stone-100 rounded-full transition-colors group cursor-pointer"
                    >
                        <X size={20} className="text-stone-400 group-hover:text-stone-900 transition-colors" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-8">
                    {formState === 'success' ? (
                        <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-6">
                                <Check size={32} className="text-stone-900" />
                            </div>
                            <h3 className="font-serif text-2xl text-stone-800 italic mb-2">Request Received</h3>
                            <p className="text-stone-500 font-light text-sm leading-relaxed max-w-xs mx-auto">
                                Thank you, {formData.name}. Our concierge team will contact you shortly to confirm your appointment.
                            </p>
                            <button
                                onClick={onClose}
                                className="mt-8 text-[10px] uppercase tracking-widest border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors cursor-pointer"
                            >
                                Close Window
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-6">
                                <div className="group">
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder:text-stone-400 focus:border-stone-800 focus:outline-none transition-colors font-serif text-lg"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="group">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:outline-none transition-colors text-sm"
                                        />
                                    </div>
                                    <div className="group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:outline-none transition-colors text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <textarea
                                        name="concern"
                                        rows={2}
                                        placeholder="Primary Concern (Optional)"
                                        value={formData.concern}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-800 placeholder:text-stone-400 focus:border-stone-800 focus:outline-none transition-colors text-sm resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={formState === 'submitting'}
                                    className="w-full bg-stone-900 text-white py-4 px-6 uppercase tracking-widest text-[10px] hover:bg-[#d4c5b0] hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {formState === 'submitting' ? 'Processing...' : (
                                        <>
                                            Request Appointment <ArrowRight size={14} />
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-[10px] text-stone-400 mt-4 tracking-wide">
                                    Secure & Confidential
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
