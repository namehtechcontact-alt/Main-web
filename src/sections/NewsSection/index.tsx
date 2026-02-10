import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeLiquidCard } from '../../components/ThemeLiquidCard';

const services = [
  {
    number: "01",
    title: "Website Development",
    description: "Custom websites built with modern technologies. Responsive, fast, and SEO-optimized.",
    features: ["React/Next.js", "Responsive Design", "SEO Ready"]
  },
  {
    number: "02",
    title: "Web Applications",
    description: "Full-stack web applications that power your business operations and scale with you.",
    features: ["Real-time Features", "Scalable APIs", "Cloud Ready"]
  },
  {
    number: "03",
    title: "E-commerce Solutions",
    description: "Complete online stores with secure payments, inventory management, and analytics.",
    features: ["Payment Integration", "Inventory Mgmt", "Analytics"]
  },
  {
    number: "04",
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive conversions.",
    features: ["A/B Testing", "Lead Capture", "Fast Loading"]
  },
  {
    number: "05",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love. From wireframes to polished designs.",
    features: ["User Research", "Prototyping", "Design System"]
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description: "Ongoing care for your website with updates, security patches, and optimization.",
    features: ["24/7 Support", "Security Updates", "Backups"]
  }
];

export const NewsSection = () => {
  return (
    <section className="relative bg-neutral-50 overflow-hidden py-24 md:py-32">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[1px] bg-black mx-auto mb-8"
          />

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Solutions that
            <span className="block font-medium mt-2">drive results</span>
          </h2>

          <p className="text-lg text-neutral-500 max-w-xl mx-auto font-light">
            Comprehensive web development services that help your business thrive.
          </p>
        </motion.div>

        {/* Services Grid with Liquid Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {services.map((service, index) => (
            <ThemeLiquidCard
              key={service.title}
              initialFill={0.93 + (index % 3) * 0.035}
              className="group cursor-pointer hover:bg-neutral-50"
            >
              <div className="p-8 md:p-10 h-full flex flex-col">
                {/* Number */}
                <span className="text-4xl font-extralight opacity-30 block mb-6">
                  {service.number}
                </span>

                {/* Content */}
                <h3 className="text-lg font-medium mb-3">
                  {service.title}
                </h3>
                <p className="opacity-60 text-sm leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 border border-current opacity-60 text-xs tracking-wide"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </ThemeLiquidCard>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-black text-white font-medium tracking-wide hover:bg-neutral-900 transition-all duration-300 flex items-center gap-4"
            >
              View All Services
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 border border-black text-black font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300"
            >
              Get a Quote
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};