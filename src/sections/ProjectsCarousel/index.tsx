import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "TechStart India",
    category: "SaaS Dashboard",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    description: "A comprehensive SaaS dashboard with real-time analytics, user management, and seamless integrations."
  },
  {
    number: "02",
    title: "Wellness Hub",
    category: "E-commerce",
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=800&fit=crop",
    tags: ["Next.js", "Stripe", "Prisma"],
    description: "Premium wellness e-commerce platform with subscription services and personalized recommendations."
  },
  {
    number: "03",
    title: "EduLearn Platform",
    category: "Web Application",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=800&fit=crop",
    tags: ["React", "Firebase", "Video"],
    description: "Interactive online learning platform with video courses, quizzes, and progress tracking."
  },
  {
    number: "04",
    title: "BrandCo Agency",
    category: "Portfolio Website",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=800&fit=crop",
    tags: ["Next.js", "GSAP", "CMS"],
    description: "Creative agency portfolio with stunning animations and smooth transitions."
  }
];

export const ProjectsCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState(1);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const section = sectionRef.current;
    const projectPanels = gsap.utils.toArray<HTMLElement>('.project-panel');
    const totalWidth = (projectPanels.length - 1) * window.innerWidth;

    const scrollTween = gsap.to(projectPanels, {
      xPercent: -100 * (projectPanels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectPanels.length - 1),
          duration: { min: 0.2, max: 0.5 },
          ease: 'power1.inOut'
        },
        end: () => `+=${totalWidth}`,
        onUpdate: (self) => {
          const progress = self.progress;
          const projectIndex = Math.round(progress * (projectPanels.length - 1)) + 1;
          setCurrentProject(projectIndex);
        }
      },
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scrollTween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white h-screen overflow-hidden"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Header */}
      <div className="absolute top-8 left-0 right-0 px-8 md:px-16 lg:px-24 z-10">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Featured Work</span>
            <h2 className="text-xl md:text-2xl font-medium mt-1">Our Projects</h2>
          </div>
          <span className="text-neutral-600 text-sm hidden md:block">Scroll to explore →</span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex h-full w-full"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-panel flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16 lg:px-24"
          >
            <div className="grid grid-cols-12 gap-6 w-full max-w-[1400px] items-center">
              {/* Left - Info */}
              <div className="col-span-12 md:col-span-4 z-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-extralight text-neutral-700">
                      {project.number}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Center - Image */}
              <div className="col-span-12 md:col-span-4 relative">
                <div className="aspect-square w-full max-w-[450px] mx-auto overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right - Details */}
              <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 text-xs uppercase tracking-wider border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
                <motion.button
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-white text-sm font-medium group w-fit"
                >
                  View Project
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 px-8 md:px-16 lg:px-24">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          {/* Progress */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-light">{String(currentProject).padStart(2, '0')}</span>
            <span className="text-neutral-600"> / {String(projects.length).padStart(2, '0')}</span>
          </div>

          {/* Progress Bar */}
          <div className="hidden md:block flex-1 mx-12 h-[1px] bg-white/10 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white"
              animate={{ width: `${(currentProject / projects.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* View All */}
          <Link
            to="/portfolio"
            className="flex items-center gap-3 px-6 py-3 border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
