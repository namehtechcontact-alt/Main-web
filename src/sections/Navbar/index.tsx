import { useState, useEffect } from 'react';
import { Logo } from "@/sections/Navbar/components/Logo";
import { MenuButton } from "@/sections/Navbar/components/MenuButton";

export const Navbar = () => {
  const [isLightBackground, setIsLightBackground] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      // Check scroll position to determine which section we're in
      const scrollY = window.scrollY;

      // Find all sections and check which one is at the top of viewport
      const sections = document.querySelectorAll('section');

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        // If this section is at the top of the viewport (within navbar height)
        if (rect.top <= 60 && rect.bottom > 60) {
          const computedStyle = window.getComputedStyle(section);
          const bgColor = computedStyle.backgroundColor;

          // Check if it's a light background
          const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (rgbMatch) {
            const r = parseInt(rgbMatch[1]);
            const g = parseInt(rgbMatch[2]);
            const b = parseInt(rgbMatch[3]);

            // Light if RGB values are high (white/light gray)
            const isLight = r > 200 && g > 200 && b > 200;
            setIsLightBackground(isLight);
            return;
          }
        }
      }

      // Default: dark background at top of page (Hero)
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Logo isOnLightBg={isLightBackground} />
        <MenuButton />
      </div>
    </nav>
  );
};