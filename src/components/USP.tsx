'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { 
  Award, 
  Unlock, 
  HeartHandshake, 
  Boxes,
  CheckCircle2
} from 'lucide-react';

export default function USP() {
  const t = useTranslations('usp');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const usps = [
    {
      key: 'quality',
      icon: <Award className="w-7 h-7" />,
    },
    {
      key: 'security',
      icon: <Unlock className="w-7 h-7" />,
    },
    {
      key: 'support',
      icon: <HeartHandshake className="w-7 h-7" />,
    },
    {
      key: 'ecosystem',
      icon: <Boxes className="w-7 h-7" />,
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-void-950"
    >
      {/* Background effects - отключаем blur на мобильных */}
      <div className="absolute inset-0">
        <div className="hidden sm:block absolute top-1/4 left-1/4 w-96 h-96 bg-laser-cyan/5 rounded-full blur-[120px]" />
        <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-laser-purple/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Accent line */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-laser-cyan" />
            <span className="text-xs font-mono text-laser-cyan tracking-[0.3em] uppercase">Why us</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-laser-cyan" />
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mist-100 mb-6 px-2">
            {t('title')}
          </h2>
          
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-mist-300 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.key}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {/* Card */}
              <div className="cursor-target relative h-full p-8 md:p-10 rounded-2xl bg-void-900/50 border border-mist-800/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-laser-cyan/30 hover:bg-void-900/70">
                {/* Hover glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-laser-cyan/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-void-800/80 border border-laser-cyan/20 group-hover:border-laser-cyan/40 transition-colors">
                    <div className="text-laser-cyan">
                      {usp.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-mist-100 mb-4 group-hover:text-white transition-colors">
                  {t(`${usp.key}.title`)}
                </h3>
                
                <p className="text-mist-400 leading-relaxed text-base md:text-lg group-hover:text-mist-300 transition-colors">
                  {t(`${usp.key}.description`)}
                </p>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden rounded-br-2xl">
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-laser-cyan to-laser-blue opacity-[0.03] group-hover:opacity-[0.08] transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom guarantee banner */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-r from-void-900 via-void-900/80 to-void-900 border border-laser-cyan/20 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-laser-cyan/5 via-laser-blue/5 to-laser-purple/5" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-laser-cyan/10 border border-laser-cyan/30">
                  <CheckCircle2 className="w-7 h-7 text-laser-cyan" />
                </div>
                <div>
                  <p className="text-lg md:text-xl font-bold text-mist-100 mb-1">
                    {t('guarantee.title')}
                  </p>
                  <p className="text-mist-400">
                    {t('guarantee.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-laser-cyan">
                <span className="text-sm font-mono tracking-wider">{t('guarantee.badge')}</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-laser-cyan"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-purple/30 to-transparent" />
    </section>
  );
}

