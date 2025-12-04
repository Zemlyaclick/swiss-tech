'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Github, Linkedin, Twitter, Send, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Send size={18} />, href: 'https://t.me', label: 'Telegram' },
  ];

  const serviceLinks = [
    { name: 'Telegram Bots', href: `/${locale}/services/telegram-bots` },
    { name: 'Mini Apps', href: `/${locale}/services/telegram-apps` },
    { name: 'Web Development', href: `/${locale}/services/websites` },
    { name: 'Mobile Apps', href: `/${locale}/services/mobile` },
    { name: 'AI Integration', href: `/${locale}/services/ai` },
  ];

  const companyLinks = [
    { name: 'About Us', href: `/${locale}/about` },
    { name: 'Cases', href: `/${locale}/cases` },
    { name: 'Pricing', href: `/${locale}/pricing` },
    { name: 'Contact', href: `/${locale}/contact` },
  ];

  return (
    <footer className="relative pt-12 md:pt-20 pb-6 md:pb-8 border-t border-laser-blue/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] h-[250px] md:h-[400px] bg-gradient-radial from-laser-blue/5 via-transparent to-transparent opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Mobile: Simplified layout */}
        <div className="md:hidden">
          {/* Logo and social */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-laser-cyan via-laser-blue to-laser-purple flex items-center justify-center">
                <span className="font-display font-bold text-white">S</span>
              </div>
              <span className="font-display font-semibold text-mist-100 text-lg">
                Swiss<span className="text-laser-cyan">Tech</span>
              </span>
            </div>
            <p className="text-sm text-mist-500 mb-5">{t('tagline')}</p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="cursor-target w-11 h-11 rounded-xl border border-white/5 bg-void-800/50 flex items-center justify-center text-mist-400 hover:text-laser-cyan hover:border-laser-cyan/30 transition-all touch-manipulation active:scale-95"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links in accordion style */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-display font-semibold text-mist-100 mb-3 text-sm tracking-wider uppercase">
                Services
              </h4>
              <ul className="space-y-2">
                {serviceLinks.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="cursor-target text-sm text-mist-400 hover:text-laser-cyan transition-colors touch-manipulation py-1 block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-mist-100 mb-3 text-sm tracking-wider uppercase">
                Company
              </h4>
              <ul className="space-y-2">
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="cursor-target text-sm text-mist-400 hover:text-laser-cyan transition-colors touch-manipulation py-1 block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop: Full layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="relative"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-laser-cyan via-laser-blue to-laser-purple flex items-center justify-center">
                  <span className="font-display font-bold text-white text-lg">S</span>
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-br from-laser-cyan to-laser-purple blur-lg opacity-50" />
              </motion.div>
              <span className="font-display font-semibold text-mist-100 text-lg">
                Swiss<span className="text-laser-cyan">Tech</span>
              </span>
            </div>
            <p className="text-sm text-mist-500 mb-6 leading-relaxed">
              {t('tagline')}. Premium digital solutions for businesses across Switzerland and Europe.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="cursor-target w-10 h-10 rounded-xl border border-white/5 bg-void-800/50 flex items-center justify-center text-mist-400 hover:text-laser-cyan hover:border-laser-cyan/30 hover:bg-laser-cyan/5 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-mist-100 mb-5 text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="cursor-target text-sm text-mist-400 hover:text-laser-cyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-laser-blue/50 group-hover:bg-laser-cyan transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-mist-100 mb-5 text-sm tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="cursor-target text-sm text-mist-400 hover:text-laser-cyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-laser-purple/50 group-hover:bg-laser-cyan transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display font-semibold text-mist-100 mb-5 text-sm tracking-wider uppercase">
              Stay Updated
            </h4>
            <p className="text-sm text-mist-500 mb-4">
              Subscribe for tech insights and company news.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                className="cursor-target w-full px-4 py-3 rounded-xl bg-void-800/50 border border-white/5 text-mist-200 placeholder:text-mist-600 focus:outline-none focus:border-laser-cyan/30 focus:bg-void-800 transition-all text-sm"
              />
              <button className="cursor-target absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-r from-laser-cyan to-laser-blue flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Mail size={14} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-laser-blue/20 to-transparent mb-6 md:mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 text-center sm:text-left">
          <p className="text-[11px] md:text-xs text-mist-600">
            © {year} {t('company')}. {t('rights')}.
          </p>
          
          <div className="flex items-center gap-4 md:gap-6 text-[11px] md:text-xs text-mist-600">
            <Link href={`/${locale}/privacy`} className="cursor-target hover:text-mist-400 transition-colors touch-manipulation py-1">Privacy</Link>
            <Link href={`/${locale}/terms`} className="cursor-target hover:text-mist-400 transition-colors touch-manipulation py-1">Terms</Link>
            <Link href={`/${locale}/imprint`} className="cursor-target hover:text-mist-400 transition-colors touch-manipulation py-1">Imprint</Link>
            <Link href={`/${locale}/security`} className="cursor-target hover:text-mist-400 transition-colors touch-manipulation py-1">Security</Link>
          </div>
        </div>
      </div>

      {/* Bottom laser line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.3), rgba(139, 92, 246, 0.3), transparent)',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}
