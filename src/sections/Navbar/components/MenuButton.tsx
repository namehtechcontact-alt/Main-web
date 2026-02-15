import { motion } from 'framer-motion';
import { useMenu } from '@/context/MenuContext';

interface MenuButtonProps {
  isOnLightBg?: boolean;
}

export const MenuButton = ({ isOnLightBg = false }: MenuButtonProps) => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={toggleMenu}
      role="button"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      className={`px-6 py-3 font-medium tracking-wide transition-all duration-300 pointer-events-auto flex items-center gap-4 ${isOnLightBg ? 'bg-black text-white hover:bg-neutral-800 shadow-xl shadow-black/10' : 'bg-white text-black hover:bg-neutral-100'}`}
    >
      <span className="text-sm uppercase tracking-[0.15em]">{isMenuOpen ? 'Close' : 'Menu'}</span>
      <div className="flex flex-col gap-1.5 w-5">
        <motion.span
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? 7 : 0,
            backgroundColor: isOnLightBg ? '#fff' : '#000'
          }}
          className="w-full h-[1px] origin-left"
        />
        <motion.span
          animate={{
            opacity: isMenuOpen ? 0 : 1,
            scaleX: isMenuOpen ? 0 : 1,
            backgroundColor: isOnLightBg ? '#fff' : '#000'
          }}
          className="w-full h-[1px]"
        />
        <motion.span
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? -7 : 0,
            backgroundColor: isOnLightBg ? '#fff' : '#000'
          }}
          className="w-full h-[1px] origin-left"
        />
      </div>
    </motion.button>
  );
};