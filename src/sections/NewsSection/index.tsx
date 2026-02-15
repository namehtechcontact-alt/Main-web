import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const insights = [
  {
    id: 1,
    title: "The Future of Minimalist Web Design in 2024",
    date: "MAR 12, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "How to Scale Your Web App for Global Traffic",
    date: "FEB 28, 2024",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "The Role of AI in Creative Digital Agencies",
    date: "JAN 15, 2024",
    category: "AI & Innovation",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600"
  }
];

export const NewsSection = () => {
  return (
    <section className="bg-white text-black py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background text */}
      <div className="absolute bottom-10 left-10 text-[15vw] font-bold text-black/[0.01] leading-none pointer-events-none select-none">
        INSIGHTS
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[1px] bg-black opacity-20 mb-8"
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Team <span className="text-neutral-300">Insights</span>
            </h2>
          </motion.div>

          <Link to="/blog">
            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] mt-8 md:mt-0 group"
            >
              All Articles
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative mb-8 overflow-hidden rounded-sm transition-all duration-500">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className={`w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index % 2 === 0 ? 'rounded-tl-[60px]' : 'rounded-tr-[60px]'
                  }`}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 text-[10px] uppercase font-bold tracking-[0.2em] shadow-sm">
                  {insight.category}
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-neutral-400 tracking-[0.2em]">
                {insight.date}
                <div className="w-1 h-1 bg-neutral-300 rounded-full" />
                5 MIN READ
              </div>

              <h3 className="text-2xl font-medium leading-tight mb-6 group-hover:text-neutral-600 transition-colors">
                {insight.title}
              </h3>

              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border-b border-black pb-1"
              >
                Read More
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
