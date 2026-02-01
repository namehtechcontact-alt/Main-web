import { motion } from 'framer-motion';

export const FooterNavItem = () => {
  return (
    <motion.li 
      whileHover={{ backgroundColor: 'rgb(250, 204, 21)' }}
      transition={{ duration: 0.3 }}
      className="text-[15.1297px] bg-black border-b-zinc-800 border-l-stone-50 border-r-stone-50 border-t-neutral-600 box-border caret-transparent flex flex-col tracking-[-0.302594px] leading-[21.1816px] list-none border-b md:text-[15.2873px] md:border-t-stone-50 md:tracking-[-0.305746px] md:leading-[21.4022px]"
    >
      <motion.a
        whileHover={{ color: 'rgb(0, 0, 0)' }}
        href="https://www.creativegiants.art/"
        className="relative text-[15.1297px] font-normal items-center box-border caret-transparent gap-x-[11.3473px] flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-between tracking-[-0.302594px] leading-[21.1816px] max-w-full gap-y-[11.3473px] overflow-hidden px-[15.1297px] py-[30.2594px] md:text-[15.2873px] md:gap-x-[11.4655px] md:justify-start md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[11.4655px] md:p-[30.5746px] hover:text-black"
      >
        <div className="absolute text-[15.1297px] bg-black box-border caret-transparent h-full tracking-[-0.302594px] leading-[21.1816px] w-full left-0 top-0 md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"></div>
        <div className="absolute text-[15.1297px] box-border caret-transparent h-full tracking-[-0.302594px] leading-[21.1816px] w-full overflow-hidden left-0 top-0 md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
          <div className="absolute text-[15.1297px] bg-yellow-400 box-border caret-transparent h-[0%] tracking-[-0.302594px] leading-[21.1816px] pointer-events-none w-full overflow-hidden bottom-[0%] inset-x-[0%] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"></div>
        </div>
        <div className="relative text-[15.1297px] items-center box-border caret-transparent flex justify-start tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
          <p className="text-[15.1297px] box-border caret-transparent tracking-[normal] leading-[15.1297px] uppercase text-nowrap pb-[0.756485px] md:text-[15.2873px] md:leading-[15.2873px] md:pb-[0.764365px]">
            Home
          </p>
        </div>
        <div className="relative text-[15.1297px] box-border caret-transparent h-[11.3473px] tracking-[-0.302594px] leading-[21.1816px] w-[11.3473px] md:text-[15.2873px] md:h-[11.4655px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:w-[11.4655px]">
          <img
            src="https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-25.svg"
            alt="Icon"
            className="text-[15.1297px] items-center box-border caret-transparent flex h-full justify-center tracking-[-0.302594px] leading-[21.1816px] w-full md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
          />
        </div>
      </motion.a>
    </motion.li>
  );
};