'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Zap, Mail, Phone, MapPin } from 'lucide-react';
import LaserButton from './LaserButton';

export default function CTASection() {
  const t = useTranslations('cta_section');

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[300px] md:h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.08) 0%, rgba(65, 105, 225, 0.04) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 hidden sm:block">
        <div className="absolute top-0 left-0 w-20 md:w-32 h-px bg-gradient-to-r from-laser-cyan to-transparent" />
        <div className="absolute top-0 left-0 h-20 md:h-32 w-px bg-gradient-to-b from-laser-cyan to-transparent" />
      </div>
      
      <div className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 hidden sm:block">
        <div className="absolute bottom-0 right-0 w-20 md:w-32 h-px bg-gradient-to-l from-laser-purple to-transparent" />
        <div className="absolute bottom-0 right-0 h-20 md:h-32 w-px bg-gradient-to-t from-laser-purple to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-void-800/60 to-void-900/60 border border-white/5 backdrop-blur-sm p-6 sm:p-10 md:p-12 lg:p-16 text-center">
          {/* Animated icon */}
          <motion.div
            className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-laser-cyan/20 via-laser-blue/20 to-laser-purple/20 mb-6 md:mb-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <Zap size={28} className="md:w-9 md:h-9 text-laser-cyan" />
            <motion.div
              className="absolute inset-0 rounded-xl md:rounded-2xl bg-laser-cyan/20 blur-xl hidden md:block"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-mist-100 via-laser-cyan to-mist-100 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-sm md:text-lg text-mist-400 max-w-md md:max-w-xl mx-auto mb-8 md:mb-10 px-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('description')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 md:mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <LaserButton variant="primary" className="w-full sm:w-auto justify-center">
                {t('button')}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </LaserButton>
            </motion.div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 text-mist-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href="mailto:hello@swisstech.ch" className="cursor-target flex items-center gap-2 hover:text-laser-cyan transition-colors group touch-manipulation py-2">
              <Mail size={16} className="group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-sm">hello@swisstech.ch</span>
            </a>
            <a href="tel:+41123456789" className="cursor-target flex items-center gap-2 hover:text-laser-cyan transition-colors group touch-manipulation py-2">
              <Phone size={16} className="group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-sm">+41 12 345 67 89</span>
            </a>
            <span className="flex items-center gap-2 py-2">
              <MapPin size={16} className="flex-shrink-0" />
              <span className="text-sm">Zürich, Switzerland</span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
