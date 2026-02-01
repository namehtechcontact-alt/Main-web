import { motion } from 'framer-motion';

export const HeroText = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="text-stone-50 text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] px-[15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[30.5746px]"
    >
      <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] max-w-[1815.56px] w-full mx-auto py-[22.6946px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:max-w-[1834.48px] md:py-[30.5746px]">
        <div className="text-[15.1297px] box-border caret-transparent flex flex-col tracking-[-0.302594px] leading-[21.1816px] max-w-[588.219px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:max-w-[594.301px]">
          <div className="text-[15.1297px] items-start box-border caret-transparent gap-x-[15.1297px] flex flex-col justify-start tracking-[-0.302594px] leading-[21.1816px] gap-y-[15.1297px] md:text-[15.2873px] md:gap-x-[22.9309px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[22.9309px]">
            <div className="text-[15.1297px] font-normal items-center box-border caret-transparent gap-x-[5.74929px] flex justify-start tracking-[-0.302594px] leading-[15.1297px] gap-y-[5.74929px] uppercase text-nowrap overflow-hidden md:text-[15.2873px] md:gap-x-[5.80917px] md:tracking-[-0.305746px] md:leading-[15.2873px] md:gap-y-[5.80917px]">
              <div className="text-[15.1297px] aspect-square bg-stone-50 box-border caret-transparent hidden h-[4.69021px] tracking-[-0.302594px] leading-[15.1297px] text-nowrap w-[4.69021px] rounded-[375px] md:text-[15.2873px] md:h-[4.73906px] md:tracking-[-0.305746px] md:leading-[15.2873px] md:w-[4.73906px] md:rounded-[1280px]"></div>
              <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[15.1297px] text-nowrap md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[15.2873px]">
                Gurugram, India
              </div>
            </div>
            <h1 className="text-[22.6946px] box-border caret-transparent tracking-[-0.907782px] leading-[22.6946px] md:text-[51.5946px] md:tracking-[-2.06379px] md:leading-[51.5946px]">
              Transform Your Brand with Strategic Digital Solutions
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};