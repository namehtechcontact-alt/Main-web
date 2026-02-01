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
    features: ["User Research", "Prototyping", "Design Systems"]
  }
];

export const WhatWeDo = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[1px] bg-black mb-8"
            />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              Premium web development
              <span className="block font-medium mt-2">that drives growth</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end"
          >
            <p className="text-lg text-neutral-500 font-light leading-relaxed mb-8">
              We specialize in crafting digital experiences that captivate users and drive conversions. Every pixel is purposeful, every interaction is intentional.
            </p>
            <div className="flex gap-12">
              {[
                { value: '50+', label: 'Projects' },
                { value: '5+', label: 'Years' },
                { value: '100%', label: 'Quality' }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-light">{stat.value}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-neutral-200">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-10 md:p-12 hover:bg-black transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-5xl font-extralight text-neutral-200 group-hover:text-white/20 transition-colors duration-500">
                  {service.number}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-medium text-black group-hover:text-white mb-4 transition-colors duration-500">
                {service.title}
              </h3>

              <p className="text-neutral-500 group-hover:text-neutral-400 text-sm leading-relaxed mb-6 transition-colors duration-500">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 border border-neutral-200 text-neutral-500 text-xs tracking-wide group-hover:border-white/20 group-hover:text-white/60 transition-colors duration-500"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white font-medium tracking-wide hover:bg-neutral-900 transition-all duration-300"
            >
              Explore All Services
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};