import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Its Pure Vit",
    category: "Health & Wellness",
    videoUrl: "/itspurevit.mp4",
    tags: ["Branding", "Marketing", "Video Production"],
    description: "Complete brand identity and marketing campaign for a premium health supplements company."
  },
  {
    number: "02",
    title: "Maharaja Palace",
    category: "Hospitality",
    videoUrl: "/maharaja-palace.mp4",
    tags: ["Web Design", "SEO", "Social Media"],
    description: "Luxury hotel digital presence with stunning visuals and seamless booking experience."
  },
  {
    number: "03",
    title: "Indus School",
    category: "Education",
    videoUrl: "/indus.mp4",
    tags: ["Web Development", "UI/UX", "Content"],
    description: "Modern educational platform showcasing excellence in academics and extracurricular activities."
  },
  {
    number: "04",
    title: "Hitech Homes",
    category: "Real Estate",
    videoUrl: "/hitech.mp4",
    tags: ["Branding", "Web Design", "Marketing"],
    description: "Premium real estate developer with cutting-edge digital presence and virtual property tours."
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

              {/* Center - Video */}
              <div className="col-span-12 md:col-span-4 relative">
                <div className="aspect-video w-full max-w-[550px] mx-auto overflow-hidden rounded-lg">
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
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
