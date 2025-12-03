'use client';

import { motion } from 'framer-motion';
import { 
  Truck, Package, MapPin, Clock, 
  BarChart3, Zap, Globe, Warehouse,
  Award, ArrowRight, Route, Settings
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

interface LogisticsPageClientProps {
  locale: Locale;
}

export default function LogisticsPageClient({ locale }: LogisticsPageClientProps) {
  const challenges = [
    {
      icon: Route,
      title: 'Оптимизация маршрутов',
      description: 'Снижение затрат на логистику через умное планирование доставки.',
    },
    {
      icon: MapPin,
      title: 'Real-time трекинг',
      description: 'Отслеживание грузов и транспорта в реальном времени.',
    },
    {
      icon: Warehouse,
      title: 'Управление складом',
      description: 'Автоматизация учёта, инвентаризации и комплектации заказов.',
    },
    {
      icon: Settings,
      title: 'Интеграции',
      description: 'Связь с ERP, TMS, курьерскими службами и маркетплейсами.',
    },
  ];

  const solutions = [
    {
      title: 'TMS системы',
      description: 'Управление транспортом: планирование, диспетчеризация, аналитика.',
      features: ['Route optimization', 'Fleet management', 'Driver app'],
    },
    {
      title: 'WMS системы',
      description: 'Автоматизация склада: приёмка, хранение, комплектация, отгрузка.',
      features: ['Barcode/RFID', 'Pick & pack', 'Inventory'],
    },
    {
      title: 'Last-mile delivery',
      description: 'Решения для курьерской доставки: оптимизация, трекинг, нотификации.',
      features: ['Route planning', 'POD', 'Customer app'],
    },
    {
      title: 'Supply Chain',
      description: 'Управление цепочкой поставок: прогнозирование, закупки, аналитика.',
      features: ['Demand forecast', 'Supplier portal', 'Analytics'],
    },
  ];

  const caseStudy = {
    client: 'Swiss Logistics Provider',
    challenge: 'Цифровизация логистических операций и переход от бумажного документооборота',
    solution: 'Кастомная TMS с мобильным приложением для водителей и порталом для клиентов',
    results: [
      { metric: '-25%', label: 'затраты на топливо' },
      { metric: '+40%', label: 'производительность' },
      { metric: '100%', label: 'real-time visibility' },
      { metric: '-80%', label: 'бумажных документов' },
    ],
  };

  const techStack = [
    'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 
    'Google Maps', 'HERE', 'IoT sensors', 'Kafka', 'Kubernetes'
  ];

  return (
    <main className="relative min-h-screen bg-void-950">
      <Navigation locale={locale} />
      
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-void-950 to-void-950" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Truck className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-orange-400 font-medium">Logistics & Supply Chain</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              IT-решения для{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                логистики
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 mb-8 max-w-2xl">
              Автоматизируем транспорт, склад и цепочки поставок. 
              Real-time трекинг, оптимизация маршрутов, аналитика.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-500/90 text-white font-semibold rounded-xl transition-colors"
              >
                Обсудить проект
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#case-study"
                className="inline-flex items-center gap-2 px-6 py-3 border border-mist-700 hover:border-orange-500 text-white rounded-xl transition-colors"
              >
                Смотреть кейс
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Вызовы логистического бизнеса
            </h2>
            <p className="text-mist-400 max-w-2xl mx-auto">
              Мы помогаем оптимизировать операции и снижать затраты
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                className="p-6 rounded-2xl bg-void-900/60 border border-mist-800/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{challenge.title}</h3>
                <p className="text-mist-400 text-sm">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24 bg-void-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Наши решения для логистики
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="p-6 md:p-8 rounded-2xl bg-void-950/60 border border-mist-800/30 hover:border-orange-500/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl text-white font-semibold mb-3">{solution.title}</h3>
                <p className="text-mist-400 mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-void-900 to-void-950 border border-orange-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-medium text-sm">Case Study</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              {caseStudy.client}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-mist-400 text-sm uppercase tracking-wider mb-2">Задача</h4>
                <p className="text-white">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-mist-400 text-sm uppercase tracking-wider mb-2">Решение</h4>
                <p className="text-white">{caseStudy.solution}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.results.map((result) => (
                <div key={result.label} className="p-4 rounded-xl bg-void-800/50">
                  <div className="text-2xl md:text-3xl font-display font-bold text-orange-400 mb-1">
                    {result.metric}
                  </div>
                  <div className="text-mist-400 text-sm">{result.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24 bg-void-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Технологии для логистики
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 rounded-lg bg-void-950/60 border border-mist-800/30 text-mist-300 text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Готовы оптимизировать логистику?
            </h2>
            <p className="text-mist-400 mb-8 max-w-2xl mx-auto">
              Бесплатная консультация по автоматизации ваших логистических процессов. 
              Покажем потенциал экономии.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-500/90 text-white font-semibold rounded-xl transition-colors"
            >
              Запланировать звонок
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
