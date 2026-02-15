import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

// Budget range options
const budgetRanges = [
  { value: '10k-25k', label: '₹10K', fullLabel: '₹10,000 - ₹25,000' },
  { value: '25k-50k', label: '₹25K', fullLabel: '₹25,000 - ₹50,000' },
  { value: '50k-1L', label: '₹50K', fullLabel: '₹50,000 - ₹1,00,000' },
  { value: '1L-2L', label: '₹1L', fullLabel: '₹1,00,000 - ₹2,00,000' },
  { value: '2L+', label: '₹2L+', fullLabel: '₹2,00,000+' }
];

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const [budgetIndex, setBudgetIndex] = useState(2); // Default to middle
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update budget when index changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      budget: budgetRanges[budgetIndex].value
    }));
  }, [budgetIndex]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newIndex = Math.round(percentage * (budgetRanges.length - 1));
    setBudgetIndex(Math.max(0, Math.min(budgetRanges.length - 1, newIndex)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newIndex = Math.round(percentage * (budgetRanges.length - 1));
    setBudgetIndex(Math.max(0, Math.min(budgetRanges.length - 1, newIndex)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = x / rect.width;
    const newIndex = Math.round(percentage * (budgetRanges.length - 1));
    setBudgetIndex(Math.max(0, Math.min(budgetRanges.length - 1, newIndex)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyYgIxZDrh4zr0CyTndCOVKGvcmkOCt5tPD7tTf6pmsrIW5FOd53dcllpN4TV3kQNUf9Q/exec';
      
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        budget: budgetRanges[budgetIndex].fullLabel,
        message: formData.message,
        timestamp: new Date().toLocaleString()
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend)
      });

      // no-cors mode doesn't allow reading response, so we assume success
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
      setBudgetIndex(2);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[1px] bg-black mb-8"
            />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
              Get in Touch
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8">
              Let's build
              <span className="block font-medium mt-2">something great</span>
            </h2>

            <p className="text-lg text-neutral-500 font-light mb-12 max-w-md leading-relaxed">
              Have a project in mind? Fill out the form and we'll get back to you within 24 hours.
            </p>

            {/* Process Steps */}
            <div className="space-y-8 mb-12">
              {[
                { step: '01', title: 'Discovery Call', desc: 'Discuss your goals and requirements' },
                { step: '02', title: 'Proposal', desc: 'Detailed timeline and cost estimate' },
                { step: '03', title: 'Kickoff', desc: 'Start building your project' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-3xl font-extralight text-neutral-300">{item.step}</span>
                  <div>
                    <h4 className="font-medium text-black mb-1">{item.title}</h4>
                    <p className="text-neutral-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="border-t border-neutral-200 pt-8">
              <p className="text-neutral-500 text-sm mb-2">Prefer to email directly?</p>
              <a href="mailto:Nameh.tech.contact@gmail.com" className="text-lg font-medium text-black hover:underline">
                Nameh.tech.contact@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
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
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-300 focus:border-black focus:outline-none transition-colors duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Budget Slider */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">Budget Range</label>

                    {/* Selected Budget Display */}
                    <div className="text-center mb-4">
                      <motion.span
                        key={budgetIndex}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lg font-medium text-black"
                      >
                        {budgetRanges[budgetIndex].fullLabel}
                      </motion.span>
                    </div>

                    {/* Slider Track */}
                    <div
                      ref={sliderRef}
                      className="relative h-12 cursor-pointer select-none"
                      onClick={handleSliderClick}
                      onMouseDown={handleMouseDown}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                      onMouseMove={handleMouseMove}
                      onTouchMove={handleTouchMove}
                    >
                      {/* Track Background */}
                      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-neutral-300 -translate-y-1/2" />

                      {/* Active Track */}
                      <motion.div
                        className="absolute top-1/2 left-0 h-[2px] bg-black -translate-y-1/2"
                        style={{ width: `${(budgetIndex / (budgetRanges.length - 1)) * 100}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />

                      {/* Step Markers */}
                      {budgetRanges.map((range, index) => (
                        <div
                          key={range.value}
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                          style={{ left: `${(index / (budgetRanges.length - 1)) * 100}%` }}
                        >
                          <motion.div
                            className={`w-3 h-3 rounded-full border-2 transition-colors duration-200 ${index <= budgetIndex
                                ? 'bg-black border-black'
                                : 'bg-white border-neutral-300'
                              }`}
                            whileHover={{ scale: 1.2 }}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              setBudgetIndex(index);
                            }}
                          />
                        </div>
                      ))}

                      {/* Draggable Thumb */}
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center"
                        style={{ left: `${(budgetIndex / (budgetRanges.length - 1)) * 100}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </motion.div>
                    </div>

                    {/* Labels */}
                    <div className="flex justify-between mt-2">
                      {budgetRanges.map((range, index) => (
                        <button
                          key={range.value}
                          type="button"
                          onClick={() => setBudgetIndex(index)}
                          className={`text-xs transition-colors duration-200 ${index === budgetIndex
                              ? 'text-black font-medium'
                              : 'text-neutral-400 hover:text-neutral-600'
                            }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
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
  );
};