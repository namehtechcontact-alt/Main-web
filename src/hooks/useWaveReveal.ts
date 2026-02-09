import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WaveRevealOptions {
    /** Number of columns in the grid */
    columns?: number;
    /** Delay multiplier per column (horizontal wave speed) */
    columnDelay?: number;
    /** Delay multiplier per row (vertical wave speed) */
    rowDelay?: number;
    /** Scroll trigger start position */
    start?: string;
    /** Scroll trigger end position */
    end?: string;
    /** Scrub smoothness */
    scrub?: number;
}

/**
 * Calculates wave offset based on grid position.
 * Creates a diagonal flow from top-left to bottom-right.
 */
const getWaveOffset = (
    index: number,
    columns: number,
    columnDelay: number,
    rowDelay: number
): number => {
    const row = Math.floor(index / columns);
    const col = index % columns;
    return row * rowDelay + col * columnDelay;
};

/**
 * Creates a wave reveal effect across a grid of cards.
 * The wave flows horizontally across each row, then continues to the next row.
 * 
 * @param count Number of cards in the grid
 * @param options Wave configuration options
 * @returns Array of refs to attach to card elements
 */
export const useWaveReveal = <T extends HTMLElement = HTMLDivElement>(
    count: number,
    options: WaveRevealOptions = {}
) => {
    const {
        columns = 3,
        columnDelay = 0.08,
        rowDelay = 0.15,
        start = 'top 80%',
        end = 'bottom 20%',
        scrub = 1,
    } = options;

    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(T | null)[]>([]);

    // Ensure array has correct length
    if (cardRefs.current.length !== count) {
        cardRefs.current = Array(count).fill(null);
    }

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Respect prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) {
            // No wave animation for users who prefer reduced motion
            cardRefs.current.forEach((el) => {
                if (el) el.style.setProperty('--wave-intensity', '0');
            });
            return;
        }

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start,
                end,
                scrub,
            },
        });

        // Create wave animation for each card with phase offset
        cardRefs.current.forEach((element, index) => {
            if (!element) return;

            const offset = getWaveOffset(index, columns, columnDelay, rowDelay);

            // Wave passes through: 0 → 1 → 0
            timeline.fromTo(
                element,
                { '--wave-intensity': 0 },
                {
                    '--wave-intensity': 1,
                    duration: 0.3,
                    ease: 'power1.in',
                },
                offset
            );

            timeline.to(
                element,
                {
                    '--wave-intensity': 0,
                    duration: 0.3,
                    ease: 'power1.out',
                },
                offset + 0.3
            );
        });

        return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
        };
    }, [count, columns, columnDelay, rowDelay, start, end, scrub]);

    return {
        containerRef,
        getCardRef: (index: number) => (el: T | null) => {
            cardRefs.current[index] = el;
        },
    };
};

export default useWaveReveal;
