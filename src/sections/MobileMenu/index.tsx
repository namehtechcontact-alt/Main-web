import { motion, AnimatePresence } from 'framer-motion';
import { useMenu } from '@/context/MenuContext';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const MobileMenu = () => {
  const { isMenuOpen, closeMenu } = useMenu();
  const location = useLocation();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-black z-50 overflow-auto"
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeMenu}
                className="w-12 h-12 bg-white flex items-center justify-center"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6L18 18M6 18L18 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col justify-between h-full px-8 md:px-12 py-24">
              {/* Navigation Links */}
              <nav className="flex flex-col">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`group block py-5 border-b border-white/10 transition-colors duration-300 ${location.pathname === item.path ? 'border-white' : 'hover:border-white/30'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <span className="text-xs text-neutral-600 font-light">0{index + 1}</span>
                          <span className={`text-3xl md:text-5xl font-light transition-colors duration-300 ${location.pathname === item.path
                              ? 'text-white'
                              : 'text-neutral-400 group-hover:text-white'
                            }`}>
                            {item.label}
                          </span>
                        </div>
                        <motion.svg
                          className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer Info */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-12 border-t border-white/10 pt-8"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-neutral-600 mb-2">Email</p>
                    <a href="mailto:Nameh.tech.contact@gmail.com" className="text-white text-sm hover:underline">
                      Nameh.tech.contact@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-neutral-600 mb-2">Phone</p>
                    <a href="tel:+918569942414" className="text-white text-sm hover:underline">
                      +91 85699 42414
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  {['Li', 'Ig', 'X'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 border border-white/20 flex items-center justify-center text-white text-xs font-medium hover:bg-white hover:text-black transition-all duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};