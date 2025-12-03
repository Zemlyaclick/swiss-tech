'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Shield, Clock, FileCheck, Lock, BadgeCheck, ArrowRight } from 'lucide-react';

const guaranteeIcons = [FileCheck, Clock, Shield, Lock, BadgeCheck];

export default function Guarantee() {
  const t = useTranslations('guarantee');
  
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient - упрощённый */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-900/50 to-void-950" />
      
      {/* Accent glow - уменьшен blur и размер */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-laser-cyan/3 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-laser-cyan/10 border border-laser-cyan/30 text-laser-cyan text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-mist-400 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = guaranteeIcons[index % guaranteeIcons.length];
            return (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl bg-void-900/60 border border-mist-800/30 hover:border-laser-cyan/40 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-laser-cyan/20 to-laser-purple/20 flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-laser-cyan" />
                </div>
                
                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-mist-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-void-900 via-void-900/80 to-void-900 border border-laser-cyan/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {t('cta_title')}
              </h3>
              <p className="text-mist-400">
                {t('cta_description')}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-laser-cyan to-laser-blue text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {t('cta_button')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
