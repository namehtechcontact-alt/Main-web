import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business, goals, and target audience to understand what makes you unique."
  },
  {
    number: "02",
    title: "Strategy",
    description: "We create a comprehensive plan with clear milestones, timelines, and success metrics."
  },
  {
    number: "03",
    title: "Design",
    description: "Beautiful, user-centered designs that align with your brand and convert visitors."
  },
  {
    number: "04",
    title: "Develop",
    description: "Clean, efficient code built with modern technologies for speed and scalability."
  },
  {
    number: "05",
    title: "Test",
    description: "Rigorous testing across devices and browsers to ensure a flawless experience."
  },
  {
    number: "06",
    title: "Launch",
    description: "Seamless deployment with ongoing support and optimization to ensure success."
  }
];

/**
 * Calculate wave offset based on grid position.
 * Creates diagonal flow from top-left to bottom-right.
 */
const getWaveOffset = (index: number, columns: number = 3): number => {
  const row = Math.floor(index / columns);
  const col = index % columns;
  return row * 0.15 + col * 0.08;
};

export const VideoGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wait for refs to be populated
    const cards = cardRefs.current.filter(Boolean);
    if (cards.length === 0) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Create ScrollTrigger for the container
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      end: 'bottom 15%',
      scrub: 0.8,
      onUpdate: (self) => {
        const progress = self.progress;

        cards.forEach((element, index) => {
          if (!element) return;

          const offset = getWaveOffset(index);

          // Calculate wave intensity based on scroll progress and offset
          // Wave passes through each card at different times
          const waveWidth = 0.35; // Narrower wave for sharper effect
          const cardProgress = (progress - offset) / waveWidth;

          // Create a smooth wave that rises and falls
          let intensity = 0;
          if (cardProgress > 0 && cardProgress < 1) {
            // Sine wave for smooth rise and fall
            intensity = Math.sin(cardProgress * Math.PI);
          }

          // Apply visual effects directly - MORE VISIBLE
          const lift = intensity * 16; // Increased from 8 to 16
          const shadowBlur = intensity * 40; // Larger shadow
          const shadowOpacity = intensity * 0.25; // More visible shadow
          const bgDarken = intensity * 0.08; // Slightly darker overlay
          const scale = 1 + (intensity * 0.02); // Subtle scale for depth

          element.style.transform = `translateY(${-lift}px) scale(${scale})`;
          element.style.boxShadow = `0 ${lift}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity})`;
          element.style.zIndex = intensity > 0.1 ? '5' : '1';

          // Background darkening via overlay
          const overlay = element.querySelector('.wave-overlay') as HTMLElement;
          if (overlay) {
            overlay.style.opacity = String(bgDarken);
          }
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section className="relative bg-white text-black py-24 md:py-32 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[1px] bg-black mx-auto mb-8"
          />

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
            Our Process
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            How We Build
            <span className="block font-medium mt-2">Excellence</span>
          </h2>

          <p className="text-lg text-neutral-500 max-w-xl mx-auto font-light">
            A proven methodology that ensures every project exceeds expectations.
          </p>
        </motion.div>

        {/* Process Grid with Wave Animation */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              ref={(el) => { cardRefs.current[index] = el; }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="wave-card group relative bg-white p-10 md:p-12 hover:bg-black transition-colors duration-500 cursor-pointer"
              style={{ willChange: 'transform, box-shadow' }}
            >
              {/* Wave overlay for darkening effect */}
              <div
                className="wave-overlay absolute inset-0 bg-black pointer-events-none z-0"
                style={{ opacity: 0 }}
              />

              {/* Step Number */}
              <div className="relative z-10 flex items-start justify-between mb-8">
                <span className="text-6xl md:text-7xl font-extralight text-neutral-200 group-hover:text-white/20 transition-colors duration-500">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl md:text-2xl font-medium text-black group-hover:text-white mb-4 transition-colors duration-500">
                {step.title}
              </h3>
              <p className="relative z-10 text-neutral-500 group-hover:text-neutral-400 text-sm leading-relaxed transition-colors duration-500">
                {step.description}
              </p>

              {/* Arrow */}
              <div className="relative z-10 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white font-medium tracking-wide hover:bg-neutral-900 transition-all duration-300"
          >
            Start Your Project
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};