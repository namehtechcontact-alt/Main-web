import { motion } from 'framer-motion';

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business, goals, and target audience to understand what makes you unique."
  },
  {
    number: "02",
    title: "Strategy",
    description: "We create a comprehensive plan with clear milestones, timelines, and success metrics."
  },
  {
    number: "03",
    title: "Design",
    description: "Beautiful, user-centered designs that align with your brand and convert visitors."
  },
  {
    number: "04",
    title: "Develop",
    description: "Clean, efficient code built with modern technologies for speed and scalability."
  },
  {
    number: "05",
    title: "Test",
    description: "Rigorous testing across devices and browsers to ensure a flawless experience."
  },
  {
    number: "06",
    title: "Launch",
    description: "Seamless deployment with ongoing support and optimization to ensure success."
  }
];

export const VideoGrid = () => {
  return (
    <section className="relative bg-white text-black py-24 md:py-32 overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[15vw] font-bold text-neutral-50/50 pointer-events-none select-none z-0">
        WORK PROCESS
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-black/20" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-neutral-500">
              Our Work Process
            </span>
            <div className="w-12 h-[1px] bg-black/20" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Our Proven <span className="text-neutral-400">Work Process</span>
          </h2>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Dash Connector Line (Desktop) */}
          <div 
            className="absolute top-12 left-[8.3%] right-[8.3%] h-[1px] hidden lg:block z-0" 
            style={{
              backgroundImage: 'linear-gradient(to right, black 40%, transparent 40%)',
              backgroundSize: '15px 1px',
              backgroundRepeat: 'repeat-x'
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  {/* Black Circle */}
                  <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-white shadow-xl shadow-black/10 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    {/* Add simple icons based on step index */}
                    {index === 0 && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                    {index === 1 && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" /></svg>}
                    {index === 2 && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
                    {index === 3 && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                    {index === 4 && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    {index === 5 && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                  </div>
                  
                  {/* Overlapping Black Number */}
                  <div className="absolute top-0 -right-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold z-20 border-2 border-white">
                    {step.number}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-medium mb-4 group-hover:text-neutral-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Black Marquee Banner */}
      <div className="mt-32 bg-black py-8 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              <span className="text-white text-2xl font-medium uppercase tracking-wider">Website Development</span>
              <span className="text-neutral-700 text-2xl font-light">✱</span>
              <span className="text-white text-2xl font-medium uppercase tracking-wider">UX/UI Design</span>
              <span className="text-neutral-700 text-2xl font-light">✱</span>
              <span className="text-white text-2xl font-medium uppercase tracking-wider">Graphics Design</span>
              <span className="text-neutral-700 text-2xl font-light">✱</span>
              <span className="text-white text-2xl font-medium uppercase tracking-wider">Mobile Apps</span>
              <span className="text-neutral-700 text-2xl font-light">✱</span>
              <span className="text-white text-2xl font-medium uppercase tracking-wider">Digital Marketing</span>
              <span className="text-neutral-700 text-2xl font-light">✱</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
};