'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { locales, localeNames, Locale } from '@/i18n/request';

interface NavigationProps {
  locale: Locale;
}

export default function Navigation({ locale }: NavigationProps) {
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(3, 3, 8, 0)', 'rgba(3, 3, 8, 0.9)']
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ['rgba(65, 105, 225, 0)', 'rgba(65, 105, 225, 0.1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setIsLangOpen(false);
  };

  const navItems = [
    { key: 'home', href: `/${locale}` },
    { key: 'services', href: `/${locale}#services` },
    { key: 'about', href: `/${locale}/about` },
    { key: 'contact', href: `/${locale}/contact` },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Dynamic backdrop */}
      <motion.div 
        className="absolute inset-0 backdrop-blur-xl"
        style={{ 
          backgroundColor: headerBg,
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: headerBorder,
        }}
      />
      
      <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href={`/${locale}`}
          className="cursor-target flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="relative"
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-laser-cyan via-laser-blue to-laser-purple flex items-center justify-center relative overflow-hidden">
              <span className="font-display font-bold text-white text-lg relative z-10">S</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <motion.div 
              className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-br from-laser-cyan to-laser-purple blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"
            />
          </motion.div>
          <div className="hidden sm:block">
            <span className="font-display font-semibold text-mist-100 text-lg">
              Swiss<span className="text-laser-cyan">Tech</span>
            </span>
            <motion.div 
              className="h-0.5 bg-gradient-to-r from-laser-cyan to-laser-purple rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.key}
              href={item.href}
              className="cursor-target relative px-4 py-2 text-mist-300 hover:text-mist-100 transition-colors text-sm font-medium tracking-wide group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              {t(item.key)}
              <motion.span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-laser-cyan to-laser-purple rounded-full group-hover:w-1/2 transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <motion.button
              className="cursor-target flex items-center gap-2 px-3 py-2 rounded-xl border border-white/5 bg-void-800/50 text-mist-300 hover:border-laser-cyan/30 hover:text-mist-100 transition-all text-sm"
              onClick={() => setIsLangOpen(!isLangOpen)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Globe size={16} className="text-laser-cyan" />
              <span className="font-medium">{locale.toUpperCase()}</span>
              <motion.div
                animate={{ rotate: isLangOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={14} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isLangOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    className="fixed inset-0 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsLangOpen(false)}
                  />
                  
                  <motion.div
                    className="absolute top-full right-0 mt-2 py-2 bg-void-800/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden min-w-[180px] z-50 shadow-2xl"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {locales.map((loc, i) => (
                      <motion.button
                        key={loc}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-all flex items-center justify-between ${
                          loc === locale 
                            ? 'text-laser-cyan bg-laser-cyan/10' 
                            : 'text-mist-300 hover:text-mist-100 hover:bg-void-700/50'
                        }`}
                        onClick={() => switchLocale(loc)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <span>{localeNames[loc]}</span>
                        {loc === locale && (
                          <motion.div
                            className="w-2 h-2 rounded-full bg-laser-cyan"
                            layoutId="activeLang"
                          />
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button - Desktop */}
          <motion.a
            href={`/${locale}/contact`}
            className="cursor-target hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-laser-blue/20 to-laser-purple/20 border border-laser-purple/30 text-mist-100 text-sm font-medium hover:border-laser-purple/50 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('cta')}
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-mist-300 hover:text-mist-100"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-void-900/98 backdrop-blur-xl border-b border-laser-blue/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="text-mist-200 hover:text-laser-cyan transition-colors py-3 text-lg font-medium border-b border-white/5 flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {t(item.key)}
                  <span className="w-2 h-2 rounded-full bg-laser-blue/30" />
                </motion.a>
              ))}
              
              <motion.a
                href={`/${locale}/contact`}
                className="mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-laser-cyan/20 to-laser-purple/20 border border-laser-cyan/30 text-mist-100 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsMobileOpen(false)}
              >
                {t('cta')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
