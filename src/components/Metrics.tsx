'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { Zap, TrendingDown, Clock, Rocket, Info } from 'lucide-react';

export default function Metrics() {
  const t = useTranslations('metrics');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const metrics = [
    {
      key: 'speed',
      icon: <Zap className="w-5 h-5" />,
    },
    {
      key: 'cost',
      icon: <TrendingDown className="w-5 h-5" />,
    },
    {
      key: 'uptime',
      icon: <Clock className="w-5 h-5" />,
    },
    {
      key: 'efficiency',
      icon: <Rocket className="w-5 h-5" />,
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-900/50 to-void-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-mist-100 mb-3">
            {t('title')}
          </h2>
          <p className="text-mist-400 text-sm md:text-base max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.key}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <div className="cursor-target relative p-6 md:p-8 rounded-2xl bg-void-900/60 border border-mist-800/30 backdrop-blur-sm text-center hover:border-laser-cyan/30 transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-laser-cyan/10 text-laser-cyan mb-4">
                  {metric.icon}
                </div>
                
                {/* Value */}
                <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {t(`${metric.key}.value`)}
                </div>
                
                {/* Label */}
                <div className="text-mist-400 text-xs md:text-sm">
                  {t(`${metric.key}.label`)}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-laser-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          className="mt-8 md:mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-void-900/60 border border-mist-800/30">
            <Info className="w-4 h-4 text-mist-500" />
            <p className="text-mist-500 text-xs md:text-sm">
              {t('disclaimer')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

