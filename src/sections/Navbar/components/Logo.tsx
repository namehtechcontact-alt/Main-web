import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LogoProps {
  isOnLightBg?: boolean;
}

export const Logo = ({ isOnLightBg = false }: LogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative pointer-events-auto z-10"
    >
      <Link to="/" className="flex items-center gap-3 no-underline group">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 flex items-center justify-center overflow-hidden bg-white rounded-sm"
        >
          <img
            src="/logo.jpg"
            alt="Nameh Logo"
            className="w-8 h-8 object-contain"
          />
        </motion.div>
        <div className="hidden md:block">
          <span className={`font-medium text-lg tracking-[0.1em] transition-colors duration-300 ${isOnLightBg
              ? 'text-black group-hover:text-neutral-600'
              : 'text-white group-hover:text-neutral-300'
            }`}>
            NAMEH<span className="font-light opacity-60">.CO</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};