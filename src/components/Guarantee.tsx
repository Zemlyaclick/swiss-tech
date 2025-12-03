'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, RefreshCw, FileCheck, Lock, BadgeCheck } from 'lucide-react';

export default function Guarantee() {
  const guarantees = [
    {
      icon: Clock,
      title: 'Гарантия сроков',
      description: 'Опоздали с дедлайном? Скидка 10% за каждую неделю задержки. Мы уверены в своих оценках.',
      highlight: '10% / неделя',
    },
    {
      icon: RefreshCw,
      title: 'Бесплатные правки',
      description: '60 дней бесплатной поддержки после запуска. Любые баги — за наш счёт.',
      highlight: '60 дней',
    },
    {
      icon: FileCheck,
      title: 'Фиксированная цена',
      description: 'После утверждения ТЗ цена не изменится. Никаких скрытых платежей или допработ.',
      highlight: 'Без сюрпризов',
    },
    {
      icon: Lock,
      title: 'NDA с первого дня',
      description: 'Подписываем соглашение о конфиденциальности ещё до обсуждения деталей проекта.',
      highlight: 'Ваши идеи защищены',
    },
    {
      icon: BadgeCheck,
      title: 'Код — ваш',
      description: 'Полная передача прав на исходный код. Документация, доступы, обучение команды.',
      highlight: '100% ownership',
    },
    {
      icon: Shield,
      title: 'Страхование €5M',
      description: 'Профессиональная ответственность застрахована. Ваш бизнес под надёжной защитой.',
      highlight: 'Swiss insurance',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-900/50 to-void-950" />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-laser-cyan/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-laser-cyan/10 border border-laser-cyan/30 text-laser-cyan text-sm font-medium mb-4">
            Zero Risk
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Гарантии, которые работают
          </h2>
          <p className="text-mist-400 text-lg max-w-2xl mx-auto">
            Мы берём риски на себя, чтобы вы могли сфокусироваться на бизнесе. 
            Каждое обещание закреплено в контракте.
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              className="group relative p-6 rounded-2xl bg-void-900/60 border border-mist-800/30 hover:border-laser-cyan/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Highlight badge */}
              <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-laser-cyan/10 border border-laser-cyan/30 text-laser-cyan text-xs font-mono">
                {guarantee.highlight}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-laser-cyan/20 to-laser-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <guarantee.icon className="w-6 h-6 text-laser-cyan" />
              </div>
              
              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-2">
                {guarantee.title}
              </h3>
              <p className="text-mist-400 text-sm leading-relaxed">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-mist-500 text-sm mb-4">
            Все гарантии включены в стандартный договор. Без мелкого шрифта.
          </p>
          <div className="inline-flex items-center gap-2 text-laser-cyan">
            <FileCheck className="w-4 h-4" />
            <span className="text-sm font-medium">Скачать образец договора</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
