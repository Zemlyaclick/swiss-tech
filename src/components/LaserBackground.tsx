'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LaserBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Only track mouse on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  // Reduced particles count for mobile
  const particleCount = isMobile ? 10 : 30;
  const lineCount = isMobile ? 3 : 5;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-void-950 via-void-900 to-void-950" />
      
      {/* Interactive gradient - only on desktop */}
      {!isMobile && (
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(65, 105, 225, 0.15) 0%, transparent 70%)',
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      
      {/* Static radial glow spots - simplified for mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-radial from-laser-blue/8 via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[1000px] h-[300px] md:h-[600px] bg-gradient-radial from-laser-purple/8 via-transparent to-transparent opacity-50" />
      
      {/* Animated horizontal laser lines - fewer on mobile */}
      {[...Array(lineCount)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 w-full h-px"
          style={{
            top: `${15 + i * (isMobile ? 25 : 20)}%`,
            background: `linear-gradient(90deg, transparent 0%, rgba(0, 245, 255, ${0.1 + i * 0.05}) 20%, rgba(65, 105, 225, ${0.15 + i * 0.03}) 50%, rgba(139, 92, 246, ${0.1 + i * 0.04}) 80%, transparent 100%)`,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Vertical laser beams - only on desktop */}
      {!isMobile && [...Array(4)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 h-full w-px"
          style={{
            left: `${20 + i * 20}%`,
            background: `linear-gradient(to bottom, transparent 0%, rgba(139, 92, 246, ${0.08 + i * 0.02}) 30%, rgba(65, 105, 225, ${0.1 + i * 0.02}) 50%, rgba(0, 245, 255, ${0.08 + i * 0.02}) 70%, transparent 100%)`,
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        />
      ))}
      
      {/* Floating particles - reduced for mobile */}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 3 === 0 
              ? 'rgba(0, 245, 255, 0.4)' 
              : i % 3 === 1 
                ? 'rgba(65, 105, 225, 0.4)'
                : 'rgba(139, 92, 246, 0.4)',
          }}
          animate={{
            y: [0, -30 - Math.random() * 20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Grid overlay - hidden on mobile for performance */}
      <div 
        className="absolute inset-0 opacity-[0.02] hidden md:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(65, 105, 225, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(65, 105, 225, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)',
        }}
      />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(3, 3, 8, 0.5) 100%)',
        }}
      />
    </div>
  );
}
