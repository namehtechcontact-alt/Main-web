import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    number: "01",
    title: "Website Development",
    description: "Custom websites built with precision. Responsive, fast, and designed to convert visitors into customers.",
    features: ["Custom Design", "SEO Optimized", "Mobile First"]
  },
  {
    number: "02",
    title: "Web Applications",
    description: "Full-stack applications that power your business. Scalable, secure, and built for performance.",
    features: ["React/Next.js", "Scalable APIs", "Real-time"]
  },
  {
    number: "03",
    title: "E-commerce Solutions",
    description: "Complete online stores with seamless checkout and inventory management systems.",
    features: ["Secure Payments", "Inventory", "Analytics"]
  },
  {
    number: "04",
    title: "UI/UX Design",
    description: "Beautiful interfaces that users love. From wireframes to polished, production-ready designs.",
    features: ["User Research", "Prototyping"]
  }
];

export const WhatWeDo = () => {
  return (
    <section className="bg-white text-black py-24 md:py-32 relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-[1px] bg-black opacity-20 mb-8"
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
              We Are A <span className="text-neutral-400">Creative</span>
              <br />Digital Agency
            </h2>
            <p className="text-lg text-neutral-600 font-light leading-relaxed mb-10 max-w-lg">
              We don't just build websites; we craft digital ecosystems. Our approach combines 
              radical creativity with deep technical expertise to move your business forward.
              <br /><br />
              From strategic design to flawless implementation, we are your partners 
              in the digital evolution.
            </p>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 bg-black text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-neutral-900 transition-all rounded-sm"
              >
                Contact Us
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Image Grid (Asymmetrical) */}
          <div className="grid grid-cols-2 gap-4 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                alt="Our Team" 
                className="w-full h-[250px] md:h-[300px] object-cover rounded-tl-[80px] shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
                alt="Modern Office" 
                className="w-full h-[250px] md:h-[300px] object-cover rounded-tr-[80px] shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600" 
                alt="Detail Work" 
                className="w-full h-[250px] md:h-[300px] object-cover shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="-mt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600" 
                alt="Professional Collaboration" 
                className="w-full h-[250px] md:h-[300px] object-cover rounded-br-[80px] shadow-2xl"
              />
            </motion.div>

            {/* Decorative Floating Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-8 -right-8 w-32 h-32 border border-black/5 rounded-full flex items-center justify-center pointer-events-none"
            >
              <div className="w-24 h-24 border border-black/5 rounded-full" />
              <div className="absolute text-[8px] uppercase tracking-[0.4em] font-medium text-black/20 whitespace-nowrap">
                Creative • Digital • Strategy
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="mt-32 pt-16 border-t border-neutral-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
              Our <span className="text-neutral-400">Services</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-8 border-[0.5px] border-black/10 bg-white transition-all duration-700 hover:border-black hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] min-h-[420px] flex flex-col justify-between ${
                  index % 2 === 0 ? 'rounded-tl-[80px] rounded-br-[80px]' : 'rounded-tr-[80px] rounded-bl-[80px]'
                }`}
              >
                {/* Overlapping Numbered Circle */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold z-20 shadow-xl shadow-black/20 group-hover:scale-110 transition-transform duration-500">
                  {service.number}
                </div>

                {/* Subtle Gradient Highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Bottom Highlight Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none" />

                {/* Background Number */}
                <div className="absolute -top-6 -right-6 text-[140px] font-bold text-neutral-50 pointer-events-none group-hover:text-neutral-100/50 transition-colors duration-700 leading-none select-none">
                  {service.number}
                </div>

                {/* Technical Corner Markers */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-6 h-6 relative">
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-black" />
                    <div className="absolute top-0 right-0 h-full w-[1px] bg-black" />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-medium mb-3 leading-tight max-w-[90%] transition-colors group-hover:text-black">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-neutral-500 text-xs leading-relaxed mb-6 group-hover:text-neutral-700 transition-colors flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map(f => (
                        <span key={f} className="text-[8px] uppercase font-bold tracking-[0.15em] text-neutral-400 border border-black/5 px-2.5 py-1 rounded-full group-hover:border-black/20 group-hover:text-neutral-600 transition-all">
                          {f}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] group cursor-pointer"
                    >
                      <span className="border-b border-black/0 group-hover:border-black transition-all pb-0.5">Enquire Now</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
