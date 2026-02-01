import { motion } from 'framer-motion';
import { useState } from 'react';

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', budget: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

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
                            Contact Us
                        </span>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
                            Let's build
                            <span className="block font-medium mt-2">something together</span>
                        </h1>

                        <p className="text-lg text-neutral-500 max-w-xl font-light">
                            Have a project in mind? We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="px-6 md:px-12 lg:px-16 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Left - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-12">
                                {/* Email */}
                                <div>
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">Email</h3>
                                    <a href="mailto:Nameh.tech.contact@gmail.com" className="text-2xl font-light hover:underline">
                                        Nameh.tech.contact@gmail.com
                                    </a>
                                </div>

                                {/* Phone */}
                                <div>
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">Phone</h3>
                                    <a href="tel:+918569942414" className="text-2xl font-light hover:underline">
                                        +91 85699 42414
                                    </a>
                                </div>

                                {/* Location */}
                                <div>
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">Location</h3>
                                    <p className="text-2xl font-light">
                                        Remote-First Agency
                                    </p>
                                    <p className="text-neutral-500 mt-2">Working with clients worldwide</p>
                                </div>

                                {/* Hours */}
                                <div>
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">Business Hours</h3>
                                    <p className="text-lg font-light">Monday - Friday: 10:00 AM - 7:00 PM IST</p>
                                    <p className="text-lg font-light text-neutral-500">Saturday: 10:00 AM - 4:00 PM IST</p>
                                </div>

                                {/* Social */}
                                <div>
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Follow Us</h3>
                                    <div className="flex gap-3">
                                        {['Li', 'Ig', 'X'].map((social) => (
                                            <motion.a
                                                key={social}
                                                href="#"
                                                whileHover={{ scale: 1.1 }}
                                                className="w-12 h-12 border border-neutral-200 flex items-center justify-center text-black font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                                            >
                                                {social}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-neutral-50 p-8 md:p-12">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-16"
                                    >
                                        <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-medium text-black mb-2">Message Sent</h3>
                                        <p className="text-neutral-500">We'll get back to you within 24 hours.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-black focus:outline-none transition-colors duration-300"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-black focus:outline-none transition-colors duration-300"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">Company</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-black focus:outline-none transition-colors duration-300"
                                                    placeholder="Company name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">Budget</label>
                                                <select
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-black focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select budget range</option>
                                                    <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                                                    <option value="100k-300k">₹1,00,000 - ₹3,00,000</option>
                                                    <option value="300k-500k">₹3,00,000 - ₹5,00,000</option>
                                                    <option value="500k+">₹5,00,000+</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">Message *</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-black focus:outline-none transition-colors duration-300 resize-none"
                                                placeholder="Tell us about your project..."
                                            ></textarea>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                            className={`w-full py-5 font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-3 mt-8 ${isSubmitting
                                                    ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                                                    : 'bg-black text-white hover:bg-neutral-900'
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-6 md:px-12 lg:px-16 py-24 bg-neutral-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">FAQ</h2>
                        <p className="text-3xl md:text-4xl font-light">Frequently asked questions</p>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            { q: 'How long does it take to build a website?', a: 'Typically 4-8 weeks depending on complexity. We provide detailed timelines during the proposal phase.' },
                            { q: 'What is your pricing structure?', a: 'We offer project-based pricing. Costs vary based on requirements, typically ranging from ₹50,000 to ₹5,00,000+.' },
                            { q: 'Do you provide ongoing support?', a: 'Yes, we offer maintenance packages that include updates, security patches, and technical support.' },
                            { q: 'What technologies do you use?', a: 'We primarily use React, Next.js, Node.js, and modern web technologies to build fast, scalable solutions.' }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 border-l-2 border-black"
                            >
                                <h3 className="font-medium mb-3">{faq.q}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
