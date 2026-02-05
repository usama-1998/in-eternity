const FooterReveal = () => {
    return (
        <>
            <div className="h-[80vh] w-full pointer-events-none bg-transparent"></div>

            <div className="footer-reveal h-[80vh] bg-[#0a0a0a] flex items-center justify-center text-white">
                <div className="w-full h-full relative">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518005052357-e984701812a0?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>

                    <div className="relative z-10 container mx-auto px-6 md:px-20 h-full flex flex-col justify-center">
                        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                            <h2 className="font-serif text-6xl md:text-9xl mb-8 md:mb-0">Find<br />Eternity.</h2>
                            <div className="text-right">
                                <p className="text-xl font-serif italic mb-4">Pacific Plaza</p>
                                <p className="text-white/50 leading-loose text-sm">
                                    9 Scotts Road, #12-01<br />Singapore 228210<br />+65 8815 3008
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-8 flex justify-between text-xs uppercase tracking-widest text-white/40">
                            <p>© {new Date().getFullYear()} IN Eternity.</p>
                            <div className="flex gap-8"><a href="#">Insta</a><a href="#">Email</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterReveal;
