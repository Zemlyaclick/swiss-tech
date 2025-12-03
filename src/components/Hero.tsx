'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import LaserButton from './LaserButton';
import LightRays from './LightRays';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const title = t('title');
  const subtitle = t('subtitle');
  const titleWords = title.split(' ');
  const subtitleWords = subtitle.split(' ');

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-void-950">
      {/* LightRays effect - background */}
      {!isMobile && (
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00f5ff"
            raysSpeed={0.5}
            lightSpread={2.0}
            rayLength={2.0}
            pulsating={true}
            fadeDistance={1.5}
            saturation={1.0}
            followMouse={true}
            mouseInfluence={0.12}
            noiseAmount={0.02}
            distortion={0}
          />
        </div>
      )}

      {/* Mobile: Simple gradient background instead of WebGL */}
      {isMobile && (
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[60%] bg-gradient-to-b from-laser-cyan/20 via-laser-cyan/5 to-transparent blur-[100px]" />
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[150%] h-[40%] bg-gradient-to-b from-laser-blue/15 via-transparent to-transparent blur-[80px]" />
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-void-950/60 via-transparent to-transparent" />
      </div>

      <motion.div 
        style={{ opacity: isMobile ? 1 : opacity, scale: isMobile ? 1 : scale }} 
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center pt-16 md:pt-20"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-laser-cyan/30 bg-void-900/60 backdrop-blur-sm mb-6 md:mb-10"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={14} className="text-laser-cyan" />
          </motion.div>
          <span className="text-xs md:text-sm text-mist-200 font-medium tracking-wide">{t('badge')}</span>
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] mb-4 md:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="block text-mist-100 mb-2 md:mb-3">
            {isMobile ? (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {title}
              </motion.span>
            ) : (
              <span className="flex flex-wrap justify-center gap-x-[0.3em]">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            )}
          </span>
          <span className="block relative">
            {isMobile ? (
              <motion.span
                className="bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {subtitle}
              </motion.span>
            ) : (
              <span className="flex flex-wrap justify-center gap-x-[0.3em]">
                {subtitleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i + titleWords.length}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block whitespace-nowrap bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple bg-clip-text text-transparent"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            )}
            {/* Underline effect */}
            <motion.div
              className="absolute -bottom-1 md:-bottom-2 left-1/2 -translate-x-1/2 h-0.5 md:h-1 bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg lg:text-xl text-mist-300 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-14 leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {t('description')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <LaserButton variant="primary" className="w-full sm:w-auto justify-center">
              {t('cta')}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </LaserButton>
          </motion.div>
          
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <LaserButton variant="secondary" className="w-full sm:w-auto justify-center">
              {t('explore')}
            </LaserButton>
          </motion.div>
        </motion.div>

        {/* Tech stack preview */}
        <motion.div
          className="mt-12 md:mt-20 hidden sm:flex items-center justify-center gap-4 md:gap-8 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8 }}
        >
          {['React', 'Node.js', 'Python', 'AI/ML', 'Cloud'].map((tech, i) => (
            <motion.span
              key={tech}
              className="text-[10px] md:text-xs font-mono text-mist-400 tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-[10px] md:text-xs text-mist-500 font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-laser-cyan" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-cyan/50 to-transparent z-10" />
    </section>
  );
}
