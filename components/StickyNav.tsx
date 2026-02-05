const StickyNav = () => {
    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 mix-blend-difference text-white">
            {['01', '02', '03', '04'].map((num, i) => (
                <div key={i} className="text-[10px] font-mono opacity-50 hover:opacity-100 cursor-pointer">{num}</div>
            ))}
        </div>
    );
};

export default StickyNav;
