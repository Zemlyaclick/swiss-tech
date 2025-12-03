'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef, useState, useEffect } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
  href?: string;
}

export default function ServiceCard({ title, description, icon, index, href }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (href) {
    return (
      <Link href={href} aria-label={title} className="block h-full">
        <motion.div
          ref={ref}
          className="relative group h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: isMobile ? 0 : rotateX,
            rotateY: isMobile ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="cursor-target relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-void-800/80 to-void-900/80 border border-white/5 backdrop-blur-sm overflow-hidden h-full touch-manipulation active:scale-[0.98] transition-transform">
            {/* Top laser line */}
            <motion.div 
              className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple w-0 group-hover:w-full transition-all duration-500"
            />
            
            {/* Glow on hover */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-laser-cyan/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Icon */}
            <motion.div 
              className="relative mb-5 md:mb-6"
              style={{ transform: isMobile ? "none" : "translateZ(40px)" }}
            >
              <motion.div 
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-laser-blue/20 via-laser-purple/20 to-laser-cyan/10 flex items-center justify-center text-laser-cyan border border-laser-cyan/20 group-hover:border-laser-cyan/40 transition-colors"
              >
                {icon}
              </motion.div>
              
              {/* Icon glow */}
              <div className="absolute inset-0 w-14 h-14 md:w-16 md:h-16 bg-laser-cyan/20 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            
            {/* Title */}
            <motion.h3 
              className="font-display text-lg md:text-xl font-semibold text-mist-100 mb-2 md:mb-3 group-hover:text-laser-cyan transition-colors duration-300"
              style={{ transform: isMobile ? "none" : "translateZ(30px)" }}
            >
              {title}
            </motion.h3>
            
            {/* Description */}
            <motion.p 
              className="text-mist-400 leading-relaxed text-sm md:text-base"
              style={{ transform: isMobile ? "none" : "translateZ(20px)" }}
            >
              {description}
            </motion.p>
            
            {/* Bottom decorative line */}
            <div className="absolute bottom-0 right-0 h-[2px] bg-gradient-to-l from-laser-purple via-laser-blue to-transparent w-0 group-hover:w-full transition-all duration-700 delay-100" />

            {/* Corner accent */}
            <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-6 h-6 md:w-8 md:h-8 border-r border-b border-laser-blue/20 group-hover:border-laser-cyan/40 transition-colors duration-300" />
          </div>
        </motion.div>
      </Link>
    );
  }
  // Если href не передан, просто рендерим карточку без ссылки
  return (
    <motion.div
      ref={ref}
      className="relative group h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="cursor-target relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-void-800/80 to-void-900/80 border border-white/5 backdrop-blur-sm overflow-hidden h-full touch-manipulation active:scale-[0.98] transition-transform">
        {/* Top laser line */}
        <motion.div 
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple w-0 group-hover:w-full transition-all duration-500"
        />
        
        {/* Glow on hover */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-laser-cyan/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Icon */}
        <motion.div 
          className="relative mb-5 md:mb-6"
          style={{ transform: isMobile ? "none" : "translateZ(40px)" }}
        >
          <motion.div 
            className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-laser-blue/20 via-laser-purple/20 to-laser-cyan/10 flex items-center justify-center text-laser-cyan border border-laser-cyan/20 group-hover:border-laser-cyan/40 transition-colors"
          >
            {icon}
          </motion.div>
          
          {/* Icon glow */}
          <div className="absolute inset-0 w-14 h-14 md:w-16 md:h-16 bg-laser-cyan/20 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
        
        {/* Title */}
        <motion.h3 
          className="font-display text-lg md:text-xl font-semibold text-mist-100 mb-2 md:mb-3 group-hover:text-laser-cyan transition-colors duration-300"
          style={{ transform: isMobile ? "none" : "translateZ(30px)" }}
        >
          {title}
        </motion.h3>
        
        {/* Description */}
        <motion.p 
          className="text-mist-400 leading-relaxed text-sm md:text-base"
          style={{ transform: isMobile ? "none" : "translateZ(20px)" }}
        >
          {description}
        </motion.p>
        
        {/* Bottom decorative line */}
        <div className="absolute bottom-0 right-0 h-[2px] bg-gradient-to-l from-laser-purple via-laser-blue to-transparent w-0 group-hover:w-full transition-all duration-700 delay-100" />

        {/* Corner accent */}
        <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-6 h-6 md:w-8 md:h-8 border-r border-b border-laser-blue/20 group-hover:border-laser-cyan/40 transition-colors duration-300" />
      </div>
    </motion.div>
  );
}
