import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  useEffect(() => {
    // Refresh ScrollTrigger on mount to fix any offset issues
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

export const useFadeInUp = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
          refreshPriority: -1,
        },
      }
    );
  }, [delay]);

  return ref;
};

export const useParallax = (speed = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        refreshPriority: -1,
      },
    });
  }, [speed]);

  return ref;
};