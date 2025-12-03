'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const technologies = [
  { name: 'React', color: '#61DAFB', category: 'frontend' },
  { name: 'Next.js', color: '#ffffff', category: 'frontend' },
  { name: 'TypeScript', color: '#3178C6', category: 'frontend' },
  { name: 'Node.js', color: '#339933', category: 'backend' },
  { name: 'Python', color: '#3776AB', category: 'backend' },
  { name: 'PostgreSQL', color: '#4169E1', category: 'backend' },
  { name: 'MongoDB', color: '#47A248', category: 'backend' },
  { name: 'Redis', color: '#DC382D', category: 'backend' },
  { name: 'Docker', color: '#2496ED', category: 'devops' },
  { name: 'AWS', color: '#FF9900', category: 'devops' },
  { name: 'OpenAI', color: '#00A67E', category: 'ai' },
  { name: 'TensorFlow', color: '#FF6F00', category: 'ai' },
];

export default function TechStack() {
  const t = useTranslations('tech');

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-900 via-void-950 to-void-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-mono text-laser-purple border border-laser-purple/30 bg-laser-purple/5 mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {'<tech_stack />'}
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-mist-100 mb-3 md:mb-4 px-2">
            {t('title')}
          </h2>
          <p className="text-sm md:text-lg text-mist-400 max-w-xl md:max-w-2xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.03,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.div
                className="cursor-target relative aspect-square rounded-xl md:rounded-2xl bg-void-800/50 border border-white/5 backdrop-blur-sm flex flex-col items-center justify-center p-2 md:p-4 overflow-hidden touch-manipulation active:scale-95 transition-transform"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: tech.color,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)`,
                  }}
                />
                
                {/* Tech icon placeholder */}
                <motion.div
                  className="relative w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-1 md:mb-3"
                  style={{ 
                    backgroundColor: `${tech.color}15`,
                    border: `1px solid ${tech.color}30`,
                  }}
                >
                  <span 
                    className="font-display font-bold text-xs md:text-lg"
                    style={{ color: tech.color }}
                  >
                    {tech.name.slice(0, 2)}
                  </span>
                </motion.div>
                
                {/* Tech name */}
                <span className="text-[10px] md:text-sm text-mist-300 font-medium group-hover:text-mist-100 transition-colors text-center leading-tight">
                  {tech.name}
                </span>

                {/* Bottom line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] hidden md:block"
                  style={{ background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)` }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          className="text-center mt-8 md:mt-12 text-xs md:text-sm text-mist-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {t('more')}
        </motion.p>
      </div>
    </section>
  );
}
