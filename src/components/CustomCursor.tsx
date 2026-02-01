import { motion } from 'framer-motion';
import { useCursorFollow } from '@/hooks/useCursorFollow';

export const CustomCursor = () => {
  const { x, y } = useCursorFollow();

  return (
    <motion.div
      className="fixed pointer-events-none z-[1000] mix-blend-difference"
      animate={{ x: x - 4, y: y - 4 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="w-2 h-2 bg-stone-50 rounded-full" />
    </motion.div>
  );
};
