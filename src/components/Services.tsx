'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  Bot, 
  Smartphone, 
  Globe, 
  TabletSmartphone, 
  Workflow, 
  Brain,
  RefreshCcw,
  Handshake,
  Search,
  ShieldCheck,
  FileText,
  Eye,
  Cloud,
  Rocket,
  BarChart3,
  Wrench,
  GitBranch,
  Plug,
  Lightbulb,
  GraduationCap,
  HeadphonesIcon
} from 'lucide-react';
import ServiceCard from './ServiceCard';
import { usePathname } from 'next/navigation';

export default function Services() {
  const t = useTranslations('services');

  const pathname = usePathname();
  const pathSegments = pathname ? pathname.split('/') : [];
  const currentLocale = pathSegments[1] || 'en';

  const services = [
    // Стратегические услуги
    { key: 'digital-reboot', icon: <Rocket size={26} className="md:w-7 md:h-7" /> },
    { key: 'turnkey', icon: <Handshake size={26} className="md:w-7 md:h-7" /> },
    { key: 'research', icon: <BarChart3 size={26} className="md:w-7 md:h-7" /> },
    { key: 'discovery', icon: <Lightbulb size={26} className="md:w-7 md:h-7" /> },
    // Инфраструктура
    { key: 'cloud', icon: <Cloud size={26} className="md:w-7 md:h-7" /> },
    { key: 'modernization', icon: <Wrench size={26} className="md:w-7 md:h-7" /> },
    { key: 'devops', icon: <GitBranch size={26} className="md:w-7 md:h-7" /> },
    { key: 'automation', icon: <Workflow size={26} className="md:w-7 md:h-7" /> },
    { key: 'integration', icon: <Plug size={26} className="md:w-7 md:h-7" /> },
    // Разработка
    { key: 'websites', icon: <Globe size={26} className="md:w-7 md:h-7" /> },
    { key: 'mobile', icon: <TabletSmartphone size={26} className="md:w-7 md:h-7" /> },
    { key: 'telegram-bots', icon: <Bot size={26} className="md:w-7 md:h-7" /> },
    { key: 'telegram-apps', icon: <Smartphone size={26} className="md:w-7 md:h-7" /> },
    // ИИ и безопасность
    { key: 'ai', icon: <Brain size={26} className="md:w-7 md:h-7" /> },
    { key: 'security', icon: <ShieldCheck size={26} className="md:w-7 md:h-7" /> },
    // Сопровождение и обучение
    { key: 'maintenance', icon: <HeadphonesIcon size={26} className="md:w-7 md:h-7" /> },
    { key: 'training', icon: <GraduationCap size={26} className="md:w-7 md:h-7" /> },
    { key: 'documentation', icon: <FileText size={26} className="md:w-7 md:h-7" /> },
    { key: 'accessibility', icon: <Eye size={26} className="md:w-7 md:h-7" /> },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-purple/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-mono text-laser-cyan border border-laser-cyan/30 bg-laser-cyan/5 mb-4 md:mb-6 tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {'<services />'}
          </motion.span>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mist-100 mb-4 md:mb-6 px-2">
            {t('title')}
          </h2>
          
          <p className="text-sm md:text-lg text-mist-400 max-w-xl md:max-w-2xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Services grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const slug = service.key;
            const href = `/${currentLocale}/services/${slug}`;
            return (
              <ServiceCard
                key={service.key}
                title={t(`${service.key.replace(/-/g, '_')}.title`)}
                description={t(`${service.key.replace(/-/g, '_')}.description`)}
                icon={service.icon}
                index={index}
                href={href}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-blue/20 to-transparent" />
    </section>
  );
}
