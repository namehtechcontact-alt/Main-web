import { motion } from 'framer-motion';

export const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                style={{
                    backgroundImage: `url('/hero-bg.png')`,
                }}
            />

            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Animated gradient orbs - subtle and monochromatic */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
            >
                {/* Primary gradient orb - very subtle */}
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-white/[0.03] via-neutral-500/[0.02] to-transparent blur-3xl"
                />

                {/* Secondary gradient orb */}
                <motion.div
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-white/[0.02] via-neutral-600/[0.01] to-transparent blur-3xl"
                />
            </motion.div>

            {/* Floating dots - subtle animation */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: [0, 0.4, 0],
                            y: ['100%', '-100%'],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 15,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear"
                        }}
                        className="absolute rounded-full bg-white/30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                        }}
                    />
                ))}
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/5" />
            <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/5" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/5" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/5" />

            {/* Vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </div>
    );
};
