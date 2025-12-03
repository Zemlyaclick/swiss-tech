'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageSquare, Lightbulb, Code2, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  { icon: MessageSquare, key: 'discovery', color: '#00f5ff' },
  { icon: Lightbulb, key: 'planning', color: '#4169e1' },
  { icon: Code2, key: 'development', color: '#8b5cf6' },
  { icon: Rocket, key: 'launch', color: '#ec4899' },
  { icon: HeartHandshake, key: 'support', color: '#10b981' },
];

export default function Process() {
  const t = useTranslations('process');
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-void-950" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-mono text-laser-green border border-laser-green/30 bg-laser-green/5 mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {'<workflow />'}
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-mist-100 mb-3 md:mb-4 px-2">
            {t('title')}
          </h2>
          <p className="text-sm md:text-lg text-mist-400 max-w-xl md:max-w-2xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-void-700 md:-translate-x-px">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-laser-cyan via-laser-blue to-laser-purple"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              const nextColor = steps[(index + 1) % steps.length].color;
              
              return (
                <motion.div
                  key={step.key}
                  className={`relative flex items-start md:items-center ${isMobile ? '' : isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-16 md:pl-0 ${isMobile ? '' : isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      className="cursor-target p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-void-800/60 to-void-900/60 border border-white/5 backdrop-blur-sm inline-block touch-manipulation active:scale-[0.98] transition-transform"
                      whileHover={{ scale: isMobile ? 1 : 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span 
                        className="text-[10px] md:text-xs font-mono mb-1 md:mb-2 block"
                        style={{ color: step.color }}
                      >
                        0{index + 1}
                      </span>
                      <h3 className="font-display text-lg md:text-xl lg:text-2xl font-semibold text-mist-100 mb-1 md:mb-2">
                        {t(`${step.key}.title`)}
                      </h3>
                      <p className="text-mist-400 text-sm md:text-base leading-relaxed">
                        {t(`${step.key}.description`)}
                      </p>
                    </motion.div>
                  </div>

                  {/* Icon node */}
                  <motion.div
                    className="absolute left-0 md:relative md:left-auto top-0 md:top-auto z-10 flex-shrink-0"
                    whileHover={{ scale: isMobile ? 1 : 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20, ${nextColor}20)`,
                      }}
                    >
                      <Icon size={isMobile ? 20 : 24} style={{ color: step.color }} />
                    </div>
                    
                    {/* Pulse effect */}
                    {!isMobile && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{ backgroundColor: step.color }}
                        animate={{
                          scale: [1, 1.4],
                          opacity: [0.3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Empty space for opposite side */}
                  {!isMobile && <div className="hidden md:block flex-1" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
