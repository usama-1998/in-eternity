import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-montserrat)', 'sans-serif'],
                serif: ['var(--font-cormorant)', 'serif'],
            },
            colors: {
                primary: '#1a1a1a',
                secondary: '#f4f4f4',
                accent: '#d4c5b0',
            },
            animation: {
                'fade-up': 'fadeInUp 0.8s ease-out forwards',
                'ken-burns': 'kenBurns 25s ease-out infinite alternate',
                'pulse-ring': 'pulseRing 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
                'text-slide': 'textSlideIn 1.2s ease-out forwards',
                'drawer': 'drawerSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                kenBurns: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.15)' },
                },
                pulseRing: {
                    '0%': { transform: 'scale(0.33)' },
                    '80%, 100%': { opacity: '0' },
                },
                textSlideIn: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                drawerSlide: {
                    'from': { transform: 'translateX(100%)' },
                    'to': { transform: 'translateX(0)' },
                },
                modalIn: {
                    'from': { opacity: '0', transform: 'translateY(50px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                }
            },
        },
    },
    plugins: [],
};
export default config;
