import { Hero } from '@/sections/Hero';
import { WhatWeDo } from '@/sections/WhatWeDo';
import { ProjectsCarousel } from '@/sections/ProjectsCarousel';
import { VideoGrid } from '@/sections/VideoGrid';
import { Testimonials } from '@/sections/Testimonials';
import { NewsSection } from '@/sections/NewsSection';
import { ContactForm } from '@/sections/ContactForm';

export const HomePage = () => {
    return (
        <>
            <Hero />

            {/* Content Sections */}
            <div className="relative z-10">
                <WhatWeDo />
                <ProjectsCarousel />
                <VideoGrid />
                <Testimonials />
                <NewsSection />
                <ContactForm />
            </div>
        </>
    );
};
