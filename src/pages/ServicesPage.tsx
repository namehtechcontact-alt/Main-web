import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        number: "01",
        title: "Website Development",
        description: "Custom websites built with precision. We create responsive, fast-loading sites that look stunning on every device and are optimized for search engines.",
        features: ["Custom Design", "SEO Optimization", "Mobile Responsive", "Fast Loading", "CMS Integration"]
    },
    {
        number: "02",
        title: "Web Applications",
        description: "Full-stack web applications that power your business operations. Built with modern technologies for scalability and performance.",
        features: ["React/Next.js", "Node.js Backend", "Database Design", "API Development", "Real-time Features"]
    },
    {
        number: "03",
        title: "E-commerce Solutions",
        description: "Complete online stores that convert visitors into customers. From product catalogs to secure checkout, we build it all.",
        features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard", "Mobile Checkout"]
    },
    {
        number: "04",
        title: "Landing Pages",
        description: "High-converting landing pages designed specifically for marketing campaigns and lead generation.",
        features: ["Conversion Optimized", "A/B Testing Ready", "Lead Capture", "Fast Performance", "Analytics Integration"]
    },
    {
        number: "05",
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces that users love. We design with purpose, creating experiences that drive engagement.",
        features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"]
    },
    {
        number: "06",
        title: "Maintenance & Support",
        description: "Ongoing care for your website with regular updates, security patches, and performance optimization.",
        features: ["24/7 Support", "Security Updates", "Performance Monitoring", "Content Updates", "Backup Management"]
    }
];

export const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero Section */}
            <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '60px' }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-[1px] bg-black mb-8"
                        />

                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
                            Our Services
                        </span>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
                            Premium solutions
                            <span className="block font-medium mt-2">for digital excellence</span>
                        </h1>

                        <p className="text-lg text-neutral-500 max-w-xl font-light mb-12">
                            From concept to launch, we provide comprehensive web development services that help your business thrive.
                        </p>

                        <div className="flex flex-wrap gap-12 pb-16 border-b border-neutral-200">
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
            </section>

            {/* Services Grid */}
            <section className="px-6 md:px-12 lg:px-16 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-px bg-neutral-200">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group bg-white p-10 md:p-12 hover:bg-black transition-all duration-500"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <span className="text-5xl font-extralight text-neutral-200 group-hover:text-white/20 transition-colors duration-500">
                                        {service.number}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-medium text-black group-hover:text-white mb-4 transition-colors duration-500">
                                    {service.title}
                                </h3>

                                <p className="text-neutral-500 group-hover:text-neutral-400 leading-relaxed mb-8 transition-colors duration-500">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-3 py-1 border border-neutral-200 text-neutral-500 text-xs tracking-wide group-hover:border-white/20 group-hover:text-white/60 transition-colors duration-500"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="px-6 md:px-12 lg:px-16 py-24 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Our Process</h2>
                        <p className="text-3xl md:text-4xl font-light max-w-2xl mx-auto">
                            A streamlined approach to delivering exceptional results
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: '01', title: 'Discover', desc: 'Understanding your business, goals, and target audience' },
                            { step: '02', title: 'Design', desc: 'Creating wireframes and visual designs aligned with your brand' },
                            { step: '03', title: 'Develop', desc: 'Building with clean, optimized, and scalable code' },
                            { step: '04', title: 'Test', desc: 'Rigorous testing across all devices and browsers' },
                            { step: '05', title: 'Launch', desc: 'Seamless deployment with minimal downtime' },
                            { step: '06', title: 'Support', desc: 'Ongoing maintenance and optimization' }
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-8"
                            >
                                <span className="text-4xl font-extralight text-neutral-300">{item.step}</span>
                                <h4 className="text-lg font-medium mt-4 mb-2">{item.title}</h4>
                                <p className="text-neutral-500 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
                            Ready to get started?
                        </h2>
                        <p className="text-lg text-neutral-400 mb-12 font-light">
                            Let's discuss how we can help bring your vision to life.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-5 bg-white text-black font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300 flex items-center gap-4 mx-auto"
                            >
                                Get a Quote
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
