import { motion } from 'framer-motion';

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
  return (
    <section className="bg-[#050505] text-white py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background number */}
      <div className="absolute top-10 right-10 text-[20vw] font-bold text-white/[0.02] leading-none pointer-events-none select-none">
        03
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[1px] bg-white opacity-40 mb-8"
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Happy <span className="text-white/40">Clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 bg-neutral-900/40 border border-white/5 backdrop-blur-sm flex flex-col justify-between min-h-[350px] ${
                index % 2 === 0 ? 'rounded-tl-[60px] rounded-br-[60px]' : 'rounded-tr-[60px] rounded-bl-[60px]'
              }`}
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg font-light leading-relaxed text-neutral-300">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold border border-white/10">
                  {t.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-medium text-white">{t.author}</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats bar at bottom of testimonials */}
        <div className="mt-24 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50+', label: 'Happy Clients' },
            { value: '100+', label: 'Projects Delivered' },
            { value: '5+', label: 'Years Experience' },
            { value: '98%', label: 'Success Rate' }
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-light mb-2">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
