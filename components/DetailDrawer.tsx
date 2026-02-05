"use client";

import { X, ArrowRight } from 'lucide-react';

interface DetailDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    category: any;
    onBook?: () => void;
}

const DetailDrawer = ({ isOpen, onClose, category, onBook }: DetailDrawerProps) => {
    if (!isOpen || !category) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative w-full md:w-[600px] h-full bg-white shadow-2xl animate-drawer flex flex-col">
                <div className="p-8 md:p-12 border-b border-stone-100 flex justify-between items-center">
                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-[#d4c5b0] mb-2 block">{category.subtitle}</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 italic">{category.title}</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                        <X size={24} className="text-stone-900" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 md:p-12">
                    <div className="space-y-12">
                        {category.items.map((item: any, idx: number) => (
                            <div key={idx} className="group cursor-default">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-xs font-mono text-stone-300">0{idx + 1}</span>
                                        <h3 className="font-serif text-2xl text-stone-800">{item.name}</h3>
                                    </div>
                                </div>
                                <p className="text-xs uppercase tracking-widest text-[#d4c5b0] mb-3 pl-8">{item.detail}</p>
                                <p className="text-stone-500 font-light leading-relaxed pl-8 text-sm">
                                    {item.description}
                                </p>
                                <div className="mt-6 pl-8">
                                    <button className="text-[10px] uppercase tracking-widest border-b border-stone-200 pb-1 hover:border-stone-900 transition-colors flex items-center gap-2">
                                        Details <ArrowRight size={12} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-8 border-t border-stone-100 bg-stone-50">
                    <button
                        onClick={onBook}
                        className="w-full py-4 bg-stone-900 text-white uppercase tracking-widest text-xs hover:bg-[#d4c5b0] transition-colors block text-center"
                    >
                        Book Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailDrawer;
