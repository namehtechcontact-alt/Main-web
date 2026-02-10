import React, { ReactNode } from 'react';
import { useLiquidReveal } from '../hooks/useLiquidReveal';

interface ThemeLiquidCardProps {
    children: ReactNode;
    className?: string;
    initialFill?: number;
    onClick?: () => void;
}

/**
 * A card component that features a liquid scroll-reveal effect.
 * Renders two layers:
 * 1. Base Layer: Light theme (White bg, Black text)
 * 2. Reveal Layer: Dark theme (Black bg, White text) - clipped by liquid mask
 * 
 * Ensures text is always visible by using a dual-layer approach rather than an overlay.
 */
export const ThemeLiquidCard: React.FC<ThemeLiquidCardProps> = ({
    children,
    className = '',
    initialFill = 1,
    onClick
}) => {
    // Use the hook to animate the --liquid-level variable on this element
    const cardRef = useLiquidReveal<HTMLDivElement>({ initialFill });

    return (
        <div
            ref={cardRef}
            className={`liquid-reveal-card relative isolate overflow-hidden bg-white ${className}`}
            onClick={onClick}
        >
            {/* Base Layer (Light Theme) */}
            {/* Visible when liquid drains/reveals */}
            <div className="relative z-0 h-full w-full bg-white text-black transition-colors duration-500">
                {children}
            </div>

            {/* Reveal Layer (Dark Theme) */}
            {/* Clipped by liquid mask. Flows in from top, drains down */}
            <div
                className="liquid-reveal-layer absolute inset-0 z-10 h-full w-full bg-black text-white pointer-events-none select-none transition-colors duration-500"
                aria-hidden="true" // Hide duplicate content from screen readers
            >
                {children}
            </div>
        </div>
    );
};
