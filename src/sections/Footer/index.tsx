import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' }
    ],
    services: [
      { label: 'Website Development', href: '/services' },
      { label: 'Web Applications', href: '/services' },
      { label: 'E-commerce', href: '/services' },
      { label: 'Maintenance', href: '/services' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Li', href: 'https://www.linkedin.com/' },
    { name: 'Instagram', icon: 'Ig', href: 'https://www.instagram.com/' },
    { name: 'Twitter', icon: 'X', href: 'https://twitter.com/' }
  ];

  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-end"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
                Ready to build
                <span className="block font-medium mt-2">something great?</span>
              </h2>
            </div>
            <div className="flex flex-col md:items-end gap-6">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white text-black font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300 flex items-center gap-4"
                >
                  Start a Project
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </Link>
              <a href="mailto:Nameh.tech.contact@gmail.com" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">
                Nameh.tech.contact@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden bg-white rounded-sm">
                <img
                  src="/logo.jpg"
                  alt="Nameh Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-white font-medium tracking-[0.1em] group-hover:text-neutral-300 transition-colors duration-300">
                NAMEH<span className="font-light opacity-60">.CO</span>
              </span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-xs">
              Premium web development for businesses that demand excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white text-xs font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:Nameh.tech.contact@gmail.com" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Nameh.tech.contact@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918569942414" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  +91 85699 42414
                </a>
              </li>
              <li className="text-neutral-400 text-sm">
                Remote-First Agency
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Nameh.co. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};