import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Websites', 'Web Apps', 'E-commerce', 'Landing Pages'];

const projects = [
    {
        id: 1,
        title: 'TechStart India Dashboard',
        category: 'Web Apps',
        description: 'A comprehensive SaaS dashboard with real-time analytics and user management.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        tags: ['React', 'Node.js', 'MongoDB'],
        featured: true
    },
    {
        id: 2,
        title: 'Wellness Hub E-commerce',
        category: 'E-commerce',
        description: 'Premium wellness e-commerce platform with subscription services.',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop',
        tags: ['Next.js', 'Stripe', 'Prisma'],
        featured: true
    },
    {
        id: 3,
        title: 'EduLearn Platform',
        category: 'Web Apps',
        description: 'Interactive online learning platform with video courses and progress tracking.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
        tags: ['React', 'Firebase', 'Video'],
        featured: true
    },
    {
        id: 4,
        title: 'BrandCo Agency Portfolio',
        category: 'Websites',
        description: 'Creative agency portfolio with stunning animations.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
        tags: ['Next.js', 'GSAP', 'CMS'],
        featured: false
    },
    {
        id: 5,
        title: 'FinanceFlow Landing Page',
        category: 'Landing Pages',
        description: 'High-converting landing page for a fintech startup.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        tags: ['React', 'Analytics'],
        featured: false
    },
    {
        id: 6,
        title: 'Restaurant Booking System',
        category: 'Web Apps',
        description: 'Complete restaurant management with online reservations.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
        tags: ['Vue.js', 'Node.js'],
        featured: false
    },
    {
        id: 7,
        title: 'Real Estate Listings',
        category: 'Websites',
        description: 'Modern real estate website with property listings.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        tags: ['Next.js', 'MapBox'],
        featured: false
    },
    {
        id: 8,
        title: 'Fitness App Landing',
        category: 'Landing Pages',
        description: 'Dynamic landing page for a fitness application.',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
        tags: ['React', 'GSAP'],
        featured: false
    }
];

export const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const featuredProjects = projects.filter(p => p.featured);

    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero Section */}
            <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '60px' }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-[1px] bg-black mb-8"
                        />

                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
                            Our Work
                        </span>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
                            Projects that
                            <span className="block font-medium mt-2">speak excellence</span>
                        </h1>

                        <p className="text-lg text-neutral-500 max-w-xl font-light">
                            From startups to enterprises, we've helped businesses build stunning digital experiences.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-12 md:gap-20 pb-16 border-b border-neutral-200"
                    >
                        {[
                            { value: '50+', label: 'Projects Completed' },
                            { value: '30+', label: 'Happy Clients' },
                            { value: '5+', label: 'Years Experience' },
                            { value: '100%', label: 'Client Satisfaction' }
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-3xl md:text-4xl font-light">{stat.value}</div>
                                <div className="text-xs uppercase tracking-[0.2em] text-neutral-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="px-6 md:px-12 lg:px-16 pb-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500">Featured Projects</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-px bg-neutral-200">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className="group relative bg-white overflow-hidden cursor-pointer"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />

                                    {/* Hover Content */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            className="px-6 py-3 bg-white text-black font-medium tracking-wide"
                                        >
                                            View Project
                                        </motion.button>
                                    </motion.div>
                                </div>

                                <div className="p-6 border-t border-neutral-100">
                                    <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-lg font-medium text-black mb-2 group-hover:underline">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-500 text-sm line-clamp-2">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Projects */}
            <section className="px-6 md:px-12 lg:px-16 py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
                    >
                        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 md:mb-0">All Projects</h2>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    whileHover={{ scale: 1.02 }}
                                    className={`px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${activeCategory === category
                                            ? 'bg-black text-white'
                                            : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                                        }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group bg-white overflow-hidden cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                    />
                                </div>
                                <div className="p-5">
                                    <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-1 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-base font-medium text-black mb-2 group-hover:underline">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 2).map((tag) => (
                                            <span key={tag} className="px-2 py-1 border border-neutral-200 text-neutral-500 text-xs">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
                            Want to be our
                            <span className="block font-medium mt-2">next success story?</span>
                        </h2>
                        <p className="text-lg text-neutral-400 mb-12 max-w-lg mx-auto font-light">
                            Let's create something exceptional together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-10 py-5 bg-white text-black font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300 flex items-center gap-4 justify-center"
                                >
                                    Start Your Project
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.button>
                            </Link>
                            <motion.a
                                href="mailto:Nameh.tech.contact@gmail.com"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-5 border border-white/30 text-white font-medium tracking-wide hover:bg-white/5 transition-all duration-300 text-center"
                            >
                                Nameh.tech.contact@gmail.com
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technologies */}
            <section className="px-6 md:px-12 lg:px-16 py-20 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500">Technologies We Use</h3>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel', 'Figma'].map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
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
        </div>
    );
};
