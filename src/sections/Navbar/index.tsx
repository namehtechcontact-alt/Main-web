import { Logo } from "@/sections/Navbar/components/Logo";
import { MenuButton } from "@/sections/Navbar/components/MenuButton";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Logo />
        <MenuButton />
      </div>
    </nav>
  );
};