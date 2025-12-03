'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LaserButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function LaserButton({ 
  children, 
  variant = 'secondary', 
  onClick,
  className = ''
}: LaserButtonProps) {
  return (
    <motion.button
      className={`
        cursor-target
        relative px-6 py-3.5 md:px-8 md:py-4
        bg-transparent
        border rounded-xl
        text-mist-100
        font-display font-semibold
        text-sm md:text-base
        tracking-wide
        overflow-hidden
        transition-all duration-300
        touch-manipulation
        active:scale-[0.98]
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-laser-blue/20 to-laser-purple/20 border-laser-purple/40 hover:border-laser-purple/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]' 
          : 'border-laser-cyan/30 hover:border-laser-cyan/50 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]'
        }
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hover gradient overlay */}
      <div className={`
        absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300
        ${variant === 'primary'
          ? 'bg-gradient-to-r from-laser-purple/10 to-laser-blue/10'
          : 'bg-gradient-to-r from-laser-cyan/5 to-transparent'
        }
      `} />
      
      {/* Laser scan effect - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <motion.div
          className={`
            absolute top-0 left-0 w-full h-full
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            -translate-x-full
          `}
          whileHover={{
            translateX: '100%',
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
        />
      </div>
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
