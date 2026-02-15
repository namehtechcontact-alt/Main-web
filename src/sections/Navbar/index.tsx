import { useState, useEffect } from 'react';
import { Logo } from "@/sections/Navbar/components/Logo";
import { MenuButton } from "@/sections/Navbar/components/MenuButton";

export const Navbar = () => {
  const [isLightBackground, setIsLightBackground] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      const sections = document.querySelectorAll('section');

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 60 && rect.bottom > 60) {
          let current: HTMLElement | null = section as HTMLElement;
          let bgColor = 'rgba(0, 0, 0, 0)';

          // Traverse up to find first non-transparent background
          while (current && (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent')) {
            bgColor = window.getComputedStyle(current).backgroundColor;
            current = current.parentElement;
          }

          const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (rgbMatch) {
            const r = parseInt(rgbMatch[1]);
            const g = parseInt(rgbMatch[2]);
            const b = parseInt(rgbMatch[3]);

            const isLight = r > 220 && g > 220 && b > 220;
            setIsLightBackground(isLight);
            return;
          }
        }
      }

      setIsLightBackground(false);
    };

    checkBackground();

    window.addEventListener('scroll', checkBackground, { passive: true });
    window.addEventListener('resize', checkBackground);

    return () => {
      window.removeEventListener('scroll', checkBackground);
      window.removeEventListener('resize', checkBackground);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Logo isOnLightBg={isLightBackground} />
        <MenuButton isOnLightBg={isLightBackground} />
      </div>
    </nav>
  );
};