'use client';

import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  const t = useTranslations('stats');

  const stats = [
    { value: 150, suffix: '+', label: t('projects'), color: '#00f5ff' },
    { value: 98, suffix: '%', label: t('satisfaction'), color: '#4169e1' },
    { value: 12, suffix: '+', label: t('years'), color: '#8b5cf6' },
    { value: 24, suffix: '/7', label: t('support'), color: '#10b981' },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-900 to-void-950" />
      
      {/* Decorative line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-cyan/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center py-6 md:py-8 px-4 rounded-2xl bg-void-800/30 border border-white/5 backdrop-blur-sm">
                <motion.div
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span 
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${stat.color}, ${stats[(index + 1) % stats.length].color})`,
                    }}
                  >
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </span>
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 blur-2xl md:blur-3xl rounded-full hidden sm:block"
                    style={{ backgroundColor: stat.color }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.15 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  />
                </motion.div>
                
                <p className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-mist-400 font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-24 md:w-32 h-24 md:h-32 hidden md:block">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-laser-cyan/50 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-laser-cyan/50 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 hidden md:block">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-laser-purple/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-laser-purple/50 to-transparent" />
      </div>
    </section>
  );
}
