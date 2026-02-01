import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
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
                            About Us
                        </span>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
                            We build websites
                            <span className="block font-medium mt-2">that make an impact</span>
                        </h1>

                        <p className="text-lg text-neutral-500 max-w-2xl font-light leading-relaxed">
                            Nameh.co is a remote-first web development agency dedicated to creating exceptional digital experiences. We combine technical expertise with creative vision to build websites that truly stand out.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="px-6 md:px-12 lg:px-16 py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { value: '5+', label: 'Years of experience building modern websites' },
                            { value: '50+', label: 'Websites launched for clients worldwide' },
                            { value: '100%', label: 'Client satisfaction with our deliverables' },
                            { value: '24/7', label: 'Support for ongoing maintenance needs' }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-5xl font-light mb-4">{stat.value}</div>
                                <div className="text-sm text-neutral-400 leading-relaxed">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="px-6 md:px-12 lg:px-16 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Our Mission</h2>
                            <p className="text-2xl md:text-3xl font-light leading-relaxed">
                                To build stunning, high-performance websites that captivate users and convert visitors into customers.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Our Vision</h2>
                            <p className="text-2xl md:text-3xl font-light leading-relaxed">
                                To be the go-to web development partner for businesses seeking premium, results-driven digital solutions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="px-6 md:px-12 lg:px-16 py-24 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Our Values</h2>
                        <p className="text-3xl md:text-4xl font-light max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
                        {[
                            { title: 'Excellence', desc: 'Every detail matters. We craft with meticulous attention to quality.' },
                            { title: 'Performance', desc: 'Fast, optimized websites that deliver exceptional experiences.' },
                            { title: 'Partnership', desc: 'Your success is our success. We build lasting relationships.' },
                            { title: 'Innovation', desc: 'Staying ahead with cutting-edge technologies and trends.' }
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10"
                            >
                                <span className="text-4xl font-extralight text-neutral-200 block mb-6">0{index + 1}</span>
                                <h3 className="text-lg font-medium mb-3">{value.title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="px-6 md:px-12 lg:px-16 py-24">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Technologies</h2>
                        <p className="text-3xl md:text-4xl font-light max-w-2xl mx-auto">
                            We work with the best tools in the industry
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel', 'Figma', 'GSAP', 'Framer Motion'].map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -3 }}
                                className="px-6 py-3 border border-neutral-200 text-neutral-600 font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                            >
                                {tech}
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
                            Let's work together
                        </h2>
                        <p className="text-lg text-neutral-400 mb-12 font-light">
                            Ready to build something exceptional? We'd love to hear from you.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-5 bg-white text-black font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300 flex items-center gap-4 mx-auto"
                            >
                                Get in Touch
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
