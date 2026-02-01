import { HeroBackground } from "@/sections/Hero/components/HeroBackground";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-black text-white overflow-hidden"
    >
      <HeroBackground />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full flex flex-col px-6 md:px-12 lg:px-16"
      >
        {/* Spacer for navbar */}
        <div className="h-24" />

        {/* Main content area */}
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
          {/* Top Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-white/40 mb-6"
          />

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Web Development Agency
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.1] mb-6"
          >
            <span className="block">We craft</span>
            <span className="block font-medium">exceptional</span>
            <span className="block text-neutral-500">websites</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-neutral-400 max-w-xl mb-8 font-light leading-relaxed"
          >
            Premium web development for businesses that demand excellence.
            We build digital experiences that captivate and convert.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-white text-black font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Start a Project</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border border-white/30 text-white font-medium tracking-wide hover:border-white/50 transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div className="pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-7xl mx-auto w-full"
          >
            <div className="flex flex-wrap gap-8 md:gap-16 border-t border-white/10 pt-6">
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '5+', label: 'Years Experience' },
                { value: '100%', label: 'Client Satisfaction' }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-light mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-6 md:right-12 lg:right-16 hidden md:flex flex-col items-center gap-4 z-20"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 writing-vertical">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};
