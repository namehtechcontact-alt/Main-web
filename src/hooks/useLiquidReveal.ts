import { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LiquidRevealOptions {
    /** Starting fill level (0-1), allows slight variations between cards */
    initialFill?: number;
    /** Trigger start position relative to viewport */
    start?: string;
    /** Trigger end position relative to viewport */
    end?: string;
    /** Scrub smoothness (higher = more lag, heavier feel) */
    scrub?: number;
}

/**
 * Creates a liquid reveal effect on a card element.
 * The liquid drains downward on scroll down and fills back on scroll up.
 * 
 * @param options Configuration for the liquid reveal effect
 * @returns Ref to attach to the card element
 */
export const useLiquidReveal = <T extends HTMLElement = HTMLDivElement>(
    options: LiquidRevealOptions = {}
): RefObject<T> => {
    const {
        initialFill = 1,
        start = 'top 85%',
        end = 'top 25%',
        scrub = 1.2,
    } = options;

    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Respect prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) {
            // Instantly reveal content for users who prefer reduced motion
            element.style.setProperty('--liquid-level', '0%');
            return;
        }

        // Set initial fill level (allows variation between cards)
        const startLevel = `${initialFill * 100}%`;

        // Create the scroll-triggered animation
        const animation = gsap.fromTo(
            element,
            { '--liquid-level': startLevel },
            {
                '--liquid-level': '0%',
                ease: 'power1.inOut', // Heavy, calm motion
                scrollTrigger: {
                    trigger: element,
                    start,
                    end,
                    scrub,
                    // Reverse when scrolling up
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Cleanup on unmount
        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        };
    }, [initialFill, start, end, scrub]);

    return ref;
};

/**
 * Hook to apply liquid reveal to multiple cards with staggered initial fills.
 * 
 * @param count Number of cards
 * @param options Base options (initialFill will be varied per card)
 * @returns Array of refs to attach to card elements
 */
export const useLiquidRevealMultiple = <T extends HTMLElement = HTMLDivElement>(
    count: number,
    options: Omit<LiquidRevealOptions, 'initialFill'> = {}
): RefObject<T>[] => {
    const {
        start = 'top 85%',
        end = 'top 25%',
        scrub = 1.2,
    } = options;

    const refsArray = useRef<(T | null)[]>([]);

    // Ensure array has correct length
    if (refsArray.current.length !== count) {
        refsArray.current = Array(count).fill(null);
    }

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        const animations: gsap.core.Tween[] = [];

        refsArray.current.forEach((element, index) => {
            if (!element) return;

            if (prefersReducedMotion) {
                element.style.setProperty('--liquid-level', '0%');
                return;
            }

            // Slight variation in initial fill for visual interest (0.95 - 1.0)
            const initialFill = 0.95 + (index % 3) * 0.025;
            const startLevel = `${initialFill * 100}%`;

            const animation = gsap.fromTo(
                element,
                { '--liquid-level': startLevel },
                {
                    '--liquid-level': '0%',
                    ease: 'power1.inOut',
                    scrollTrigger: {
                        trigger: element,
                        start,
                        end,
                        scrub,
                    },
                }
            );

            animations.push(animation);
        });

        return () => {
            animations.forEach((anim) => {
                anim.scrollTrigger?.kill();
                anim.kill();
            });
        };
    }, [count, start, end, scrub]);

    // Return refs that can be attached to elements
    return Array.from({ length: count }, (_, i) => ({
        get current() {
            return refsArray.current[i];
        },
        set current(el: T | null) {
            refsArray.current[i] = el;
        },
    })) as RefObject<T>[];
};

export default useLiquidReveal;
