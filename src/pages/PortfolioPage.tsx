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

// 3D Tilt Card Component
const PerspectiveCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glarePos, setGlarePos] = useState({ x: 0, y: 0, opacity: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Adjust these values to increase/decrease tilt intensity
        const rotateYVal = ((x - centerX) / centerX) * 12;
        const rotateXVal = ((centerY - y) / centerY) * 12;

        setRotateX(rotateXVal);
        setRotateY(rotateYVal);
        setGlarePos({ 
            x: (x / rect.width) * 100, 
            y: (y / rect.height) * 100,
            opacity: 0.2
        });
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setGlarePos(prev => ({ ...prev, opacity: 0 }));
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1200,
                transformStyle: 'preserve-3d',
            }}
            animate={{
                rotateX,
                rotateY,
                boxShadow: rotateX === 0 ? '0 10px 30px rgba(0,0,0,0.1)' : `${-rotateY * 2}px ${rotateX * 2}px 40px rgba(0,0,0,0.3)`
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className={className}
        >
            <div 
                className="relative h-full w-full overflow-hidden rounded-[inherit]"
                style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
            >
                {/* Glare/Shine Effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none z-20"
                    animate={{
                        background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}), transparent 40%)`
                    }}
                />
                {children}
            </div>
        </motion.div>
    );
};

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
            className="w-full h-full object-cover rounded-2xl"
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
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
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
        <div className="min-h-screen bg-[#fafafa] relative overflow-hidden selection:bg-black selection:text-white">
            {/* Soft Ambient Orbs */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <motion.div 
                    animate={{ 
                        x: [0, 100, 0], 
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1] 
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/30 blur-[150px]" 
                />
                <motion.div 
                    animate={{ 
                        x: [0, -80, 0], 
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1] 
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-orange-50/40 blur-[130px]" 
                />
                <motion.div 
                    animate={{ 
                        x: [0, 120, 0], 
                        y: [0, -40, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 5 }}
                    className="absolute -bottom-[20%] left-[10%] w-[70%] h-[70%] rounded-full bg-neutral-200/20 blur-[180px]" 
                />
            </div>

            {/* Subtle Noise Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]" 
                 style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

            {/* Hero Section */}
            <section className="relative px-6 md:px-12 lg:px-24 pt-40 pb-32 md:pt-56 md:pb-48 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-4xl"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-400 mb-8 block mb-4">
                                Experience × Innovation
                            </span>

                            <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-light tracking-tight leading-[0.85] mb-12">
                                <motion.span 
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="inline-block"
                                >
                                    Modern
                                </motion.span>
                                <motion.span 
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="block font-medium text-neutral-900"
                                >
                                    Digitalia.
                                </motion.span>
                            </h1>

                            <p className="text-2xl md:text-3xl text-neutral-500 max-w-2xl font-light leading-snug tracking-tight">
                                We craft distinctive digital signatures through <span className="text-neutral-900 font-normal">bold aesthetics</span> and precise engineering.
                            </p>
                        </motion.div>

                        {/* Minimalist Stats */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="flex gap-16 md:gap-24"
                        >
                            {[
                                { value: '50+', label: 'projects' },
                                { value: '003', label: 'awards' }
                            ].map((stat) => (
                                <div key={stat.label} className="group relative">
                                    <div className="text-5xl md:text-6xl font-medium tracking-tight mb-2 group-hover:-translate-y-1 transition-transform duration-500">{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-[0.4em] text-neutral-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects - Layered Airy Layout */}
            <section className="px-6 md:px-12 lg:px-24 py-32 z-10 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-8 mb-32">
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-400 whitespace-nowrap">
                            Selected Works
                        </h2>
                        <div className="w-full h-[1px] bg-neutral-200/50" />
                    </div>

                    <div className="grid gap-32 md:gap-56">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true, margin: "-100px" }}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className={`group relative grid md:grid-cols-12 gap-12 md:gap-20 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`md:col-span-7 relative ${index % 2 === 0 ? '' : 'md:order-2'}`}>
                                    {/* Glass Backing for Card */}
                                    <div className="absolute -inset-4 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] -z-10 shadow-2xl shadow-neutral-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    
                                    <PerspectiveCard className="overflow-hidden rounded-[2rem] bg-white border border-neutral-100 aspect-[16/10] relative shadow-xl shadow-neutral-100 ring-1 ring-neutral-200/50">
                                        <div className="w-full h-full transform group-hover:scale-[1.03] transition-transform duration-[2000ms] ease-out">
                                            {project.type === 'video' ? (
                                                <VideoPlayer src={project.video!} isHovered={hoveredProject === project.id} />
                                            ) : (
                                                <ImageCarousel images={project.images!} isHovered={hoveredProject === project.id} />
                                            )}
                                        </div>
                                        <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-1000" />
                                    </PerspectiveCard>
                                </div>

                                <div className={`md:col-span-5 ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                                    <div className="flex items-center gap-3 mb-8">
                                        <span className="w-6 h-[1px] bg-neutral-300" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-10 leading-[0.9] tracking-tight text-neutral-900">
                                        {project.title.split(' ').map((word, i) => (
                                            <span key={i} className="block">{word}</span>
                                        ))}
                                    </h3>
                                    <p className="text-xl text-neutral-500 mb-12 font-light leading-relaxed max-w-md">
                                        {project.description}
                                    </p>
                                    <motion.button
                                        whileHover={{ x: 15 }}
                                        className="inline-flex items-center gap-6 group/btn"
                                    >
                                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-black">Case Study</span>
                                        <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover/btn:bg-black group-hover/btn:border-black transition-all duration-500">
                                            <svg className="w-5 h-5 text-neutral-400 group-hover/btn:text-white transition-colors" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Projects - Modern Airy Archive */}
            <section className="px-6 md:px-12 lg:px-24 py-40 bg-white relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
                        <div className="max-w-2xl">
                            <h2 className="text-6xl md:text-8xl font-light tracking-tight mb-12 text-neutral-900">
                                Archive <span className="italic block font-serif">Selection.</span>
                            </h2>
                            
                            {/* Modern Category Filter */}
                            <div className="flex flex-wrap gap-4">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-500 relative overflow-hidden group/btn ${activeCategory === category
                                                ? 'text-white'
                                                : 'text-neutral-500 hover:text-black border border-neutral-100 hover:border-black'
                                            }`}
                                    >
                                        <span className="relative z-10">{category}</span>
                                        {activeCategory === category && (
                                            <motion.div 
                                                layoutId="activeFilter"
                                                className="absolute inset-0 bg-black"
                                                transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <p className="text-neutral-400 md:text-right max-w-xs text-sm font-light leading-relaxed tracking-wide">
                            A curated index of specialized solutions across technical and creative domains.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-12 md:gap-y-20">
                        {filteredProjects.map((project) => (
                            <PerspectiveCard
                                key={project.id}
                                className="group bg-white rounded-[2rem] overflow-hidden border border-neutral-100 hover:border-neutral-200 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-neutral-200/50"
                            >
                                <div className="relative h-72 overflow-hidden bg-neutral-50"
                                     onMouseEnter={() => setHoveredProject(project.id)}
                                     onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <div className="w-full h-full transform group-hover:scale-110 transition-transform duration-1000">
                                        {project.type === 'video' ? (
                                            <VideoPlayer src={project.video!} isHovered={hoveredProject === project.id} />
                                        ) : (
                                            <ImageCarousel images={project.images!} isHovered={hoveredProject === project.id} />
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-neutral-100/10 group-hover:bg-transparent transition-opacity rounded-3xl pointer-events-none" />
                                    
                                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] uppercase font-bold tracking-[0.2em] text-black border border-neutral-100 shadow-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-3 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                            </PerspectiveCard>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section - Minimalist Airy Layout */}
            <section className="px-6 md:px-12 lg:px-24 py-40 overflow-hidden relative border-t border-neutral-100">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2 
                            animate={{ rotateX: [0, 4, -4, 0], rotateY: [0, -4, 4, 0] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-16 text-neutral-900"
                        >
                            Start your 
                            <span className="italic block mt-4 font-serif">narrative.</span>
                        </motion.h2>
                        
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-16 py-7 bg-black text-white rounded-full font-bold uppercase tracking-[0.4em] text-xs shadow-2xl shadow-black/20 hover:shadow-black/40 transition-all"
                                >
                                    Collaborate
                                </motion.button>
                            </Link>
                            <a href="mailto:Nameh.tech.contact@gmail.com" className="text-neutral-400 hover:text-black transition-colors font-medium tracking-wide text-sm py-2">
                                Nameh.tech.contact@gmail.com
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
