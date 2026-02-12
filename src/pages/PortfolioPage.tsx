import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Video Projects', 'Web Apps', 'Websites'];

const projects = [
    // Video Projects
    {
        id: 1,
        title: 'HiTech Solutions',
        category: 'Video Projects',
        description: 'High-tech industry showcase with modern design and interactive elements.',
        video: '/hitech.mp4',
        thumbnail: '/project1.png',
        type: 'video',
        tags: ['Video', 'Industrial', 'Tech'],
        featured: true
    },
    {
        id: 2,
        title: 'Industrial Manufacturing',
        category: 'Video Projects',
        description: 'Industrial manufacturing process visualization and company profile.',
        video: '/indus.mp4',
        thumbnail: '/project2.png',
        type: 'video',
        tags: ['Video', 'Manufacturing', 'Industrial'],
        featured: true
    },
    {
        id: 3,
        title: 'Pure Vitamin Products',
        category: 'Video Projects',
        description: 'Health and wellness product showcase with engaging visuals.',
        video: '/itspurevit.mp4',
        thumbnail: '/project3.png',
        type: 'video',
        tags: ['Video', 'Health', 'E-commerce'],
        featured: true
    },
    {
        id: 4,
        title: 'Maharaja Palace Heritage',
        category: 'Video Projects',
        description: 'Cultural heritage and tourism promotion video project.',
        video: '/maharaja-palace.mp4',
        thumbnail: '/project1.png',
        type: 'video',
        tags: ['Video', 'Tourism', 'Heritage'],
        featured: false
    },
    // Image Gallery Projects
    {
        id: 5,
        title: 'Placement Management System',
        category: 'Web Apps',
        description: 'Comprehensive placement management system for educational institutions.',
        images: [
            '/projects/placement-management/Screenshot (1456).png',
            '/projects/placement-management/Screenshot (1457).png',
            '/projects/placement-management/Screenshot (1458).png',
            '/projects/placement-management/Screenshot (1459).png',
            '/projects/placement-management/Screenshot (1460).png',
            '/projects/placement-management/Screenshot (1461).png',
            '/projects/placement-management/Screenshot (1462).png'
        ],
        type: 'gallery',
        tags: ['React', 'Node.js', 'MongoDB'],
        featured: false
    },
    {
        id: 6,
        title: 'Student Dropout Analysis',
        category: 'Web Apps',
        description: 'Data analytics platform for student dropout prediction and analysis.',
        images: [
            '/projects/student-dropout-analysis/Screenshot (1470).png',
            '/projects/student-dropout-analysis/Screenshot (1471).png',
            '/projects/student-dropout-analysis/Screenshot (1472).png',
            '/projects/student-dropout-analysis/Screenshot (1473).png',
            '/projects/student-dropout-analysis/Screenshot (1474).png',
            '/projects/student-dropout-analysis/Screenshot (1475).png',
            '/projects/student-dropout-analysis/Screenshot (1476).png',
            '/projects/student-dropout-analysis/Screenshot (1477).png'
        ],
        type: 'gallery',
        tags: ['Python', 'ML', 'Analytics'],
        featured: false
    },
    {
        id: 7,
        title: 'Charitable Organization Site',
        category: 'Websites',
        description: 'Non-profit organization website with donation and volunteer management.',
        images: [
            '/projects/charitable-site/Screenshot (1495).png',
            '/projects/charitable-site/Screenshot (1496).png',
            '/projects/charitable-site/Screenshot (1497).png',
            '/projects/charitable-site/Screenshot (1498).png',
            '/projects/charitable-site/Screenshot (1499).png'
        ],
        type: 'gallery',
        tags: ['React', 'Charity', 'CMS'],
        featured: false
    },
    {
        id: 8,
        title: 'Yummy Food Restaurant',
        category: 'Websites',
        description: 'Restaurant website with online ordering and menu management system.',
        images: [
            '/projects/yummy food/Screenshot (1463).png',
            '/projects/yummy food/Screenshot (1464).png',
            '/projects/yummy food/Screenshot (1465).png',
            '/projects/yummy food/Screenshot (1466).png',
            '/projects/yummy food/Screenshot (1467).png'
        ],
        type: 'gallery',
        tags: ['React', 'E-commerce', 'Food'],
        featured: false
    }
];

// Video Player Component - Only plays on hover
const VideoPlayer = ({ src, isHovered }: { src: string; isHovered: boolean }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isHovered) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isHovered]);

    return (
        <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
        />
    );
};

// Image Carousel Component - Only animates on hover
const ImageCarousel = ({ images, isHovered }: { images: string[]; isHovered: boolean }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!isHovered) {
            setCurrentIndex(0);
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [isHovered, images.length]);

    return (
        <div className="relative w-full h-full">
            {images.map((image, index) => (
                <motion.img
                    key={image}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: index === 0 ? 1 : 0 }}
                    animate={{ opacity: currentIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                />
            ))}
            {/* Carousel Indicators - Only show on hover */}
            {isHovered && images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

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
                                <div className="relative h-72 overflow-hidden bg-neutral-100">
                                    {project.type === 'video' ? (
                                        <VideoPlayer src={project.video!} isHovered={hoveredProject === project.id} />
                                    ) : (
                                        <ImageCarousel images={project.images!} isHovered={hoveredProject === project.id} />
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

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
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className="group bg-white overflow-hidden cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden bg-neutral-100">
                                    {project.type === 'video' ? (
                                        <VideoPlayer src={project.video!} isHovered={hoveredProject === project.id} />
                                    ) : (
                                        <ImageCarousel images={project.images!} isHovered={hoveredProject === project.id} />
                                    )}
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
