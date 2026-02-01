import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Nameh.co delivered exactly what we needed — a clean, professional, and easy-to-manage website. The entire process was smooth, timely, and well-communicated.",
    author: "Rahul Sharma",
    role: "CEO, TechStart India"
  },
  {
    id: 2,
    quote: "We are extremely pleased with the website design and functionality. It's user-friendly, professional, and perfectly showcases our services.",
    author: "Priya Patel",
    role: "Founder, Wellness Hub"
  },
  {
    id: 3,
    quote: "The team at Nameh.co exceeded our expectations. They brought our vision to life with stunning design and flawless functionality.",
    author: "Amit Verma",
    role: "Marketing Director, BrandCo"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[1px] bg-white/40 mb-8"
            />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              What our clients
              <span className="block font-medium mt-2">say about us</span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonial */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-12 gap-12"
            >
              {/* Quote */}
              <div className="md:col-span-8">
                <svg className="w-12 h-12 text-white/10 mb-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
                  "{currentTestimonial.quote}"
                </blockquote>
              </div>

              {/* Author */}
              <div className="md:col-span-4 flex flex-col justify-end">
                <div className="border-t border-white/10 pt-8">
                  <div className="text-lg font-medium mb-1">{currentTestimonial.author}</div>
                  <div className="text-sm text-neutral-500">{currentTestimonial.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[2px] transition-all duration-500 ${index === currentIndex ? 'w-12 bg-white' : 'w-6 bg-white/20'
                }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-white/10"
        >
          {[
            { value: '50+', label: 'Happy Clients' },
            { value: '100+', label: 'Projects Delivered' },
            { value: '5+', label: 'Years Experience' },
            { value: '98%', label: 'Client Satisfaction' }
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-light mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
