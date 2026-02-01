import { MobileMenuFooter } from "@/sections/MobileMenu/components/MobileMenuFooter";
import { MobileMenuNav } from "@/sections/MobileMenu/components/MobileMenuNav";
import { MobileMenuShowreel } from "@/sections/MobileMenu/components/MobileMenuShowreel";

export const MobileMenuContent = () => {
  return (
    <div className="relative text-[15.1297px] items-stretch box-border caret-transparent gap-x-[11.3473px] flex flex-col auto-cols-[1fr] grid-cols-[1fr_auto] grid-rows-[auto] h-full justify-between justify-items-stretch tracking-[-0.302594px] leading-[21.1816px] gap-y-[11.3473px] w-full z-[1] overflow-auto md:text-[15.2873px] md:gap-x-[11.4655px] md:grid md:grid-cols-[1fr_2fr_1fr] md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[11.4655px]">
      <MobileMenuFooter />
      <MobileMenuNav />
      <MobileMenuShowreel />
    </div>
  );
};