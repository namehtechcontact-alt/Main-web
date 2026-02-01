import { motion } from 'framer-motion';

export const HeroContent = () => {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      className="relative text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
    >
      <div className="relative text-[15.1297px] items-stretch bg-transparent box-border caret-transparent flex flex-col h-full justify-end tracking-[-0.302594px] leading-[21.1816px] z-[3] overflow-hidden pt-[151.297px] pb-[15.1297px] px-[15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:pt-[152.873px] md:pb-[30.5746px] md:px-[30.5746px]">
        <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] max-w-[1815.56px] w-full overflow-hidden mx-auto md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:max-w-[1834.48px]">
          <img
            src="https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-11.svg"
            alt="Icon"
            className="relative text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] w-full z-[2] brightness-0 invert md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
          />
        </div>
      </div>
      <div className="absolute text-[15.1297px] backdrop-blur-[20px] bg-black/50 box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] z-[1] inset-[0%] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"></div>
    </motion.div>
  );
};