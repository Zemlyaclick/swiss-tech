'use client';

import { motion } from 'framer-motion';
import { 
  Zap, FileText, Lightbulb, Code, Clock, 
  CheckCircle, ArrowRight, Calendar, Users,
  Target, Layers, Shield, Award
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

interface DiscoverySprintClientProps {
  locale: Locale;
}

export default function DiscoverySprintClient({ locale }: DiscoverySprintClientProps) {
  const deliverables = [
    {
      icon: FileText,
      title: 'Техническое задание',
      description: 'Детальное описание функциональности, user stories, acceptance criteria',
    },
    {
      icon: Layers,
      title: 'Архитектура решения',
      description: 'Схема компонентов, база данных, интеграции, технологический стек',
    },
    {
      icon: Target,
      title: 'Прототип / Wireframes',
      description: 'Кликабельный прототип ключевых экранов в Figma',
    },
    {
      icon: Calendar,
      title: 'План разработки',
      description: 'Этапы, сроки, милестоуны, критический путь',
    },
    {
      icon: Shield,
      title: 'Оценка рисков',
      description: 'Технические риски, зависимости, план митигации',
    },
    {
      icon: Code,
      title: 'Фиксированная смета',
      description: 'Точная стоимость разработки, которая не изменится',
    },
  ];

  const process = [
    {
      day: 'День 1-2',
      title: 'Брифинг и анализ',
      activities: [
        'Интервью с ключевыми стейкхолдерами',
        'Анализ текущих процессов и болей',
        'Определение целей и KPI',
        'Изучение конкурентов',
      ],
    },
    {
      day: 'День 3-4',
      title: 'Проектирование',
      activities: [
        'Создание user flow и wireframes',
        'Проектирование архитектуры',
        'Выбор технологического стека',
        'Планирование интеграций',
      ],
    },
    {
      day: 'День 5',
      title: 'Документация и смета',
      activities: [
        'Финализация технического задания',
        'Расчёт детальной сметы',
        'Составление плана разработки',
        'Презентация результатов',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Минимальный риск',
      description: 'Инвестируете только CHF 3,500, получаете полную ясность по проекту',
    },
    {
      title: 'Документы — ваши',
      description: 'Даже если не продолжите с нами, все материалы останутся у вас',
    },
    {
      title: 'Фиксированная цена',
      description: 'Смета после Discovery Sprint не изменится в процессе разработки',
    },
    {
      title: 'Быстрый старт',
      description: 'Можем начать Discovery Sprint уже на следующей неделе',
    },
  ];

  return (
    <main className="relative min-h-screen bg-void-950">
      <Navigation locale={locale} />
      
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-laser-purple/5 via-void-950 to-void-950" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-laser-purple/10 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-laser-purple/20">
                <Zap className="w-6 h-6 text-laser-purple" />
              </div>
              <span className="text-laser-purple font-medium">Entry-level offer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Discovery Sprint:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-purple to-laser-cyan">
                5 дней до ясности
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 mb-8 max-w-2xl">
              Не уверены в требованиях? Не знаете точную стоимость? 
              За 5 рабочих дней мы подготовим полный план вашего проекта.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5 text-laser-cyan" />
                <span className="font-semibold">5 рабочих дней</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Target className="w-5 h-5 text-laser-cyan" />
                <span className="font-semibold">Фиксированная цена</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-laser-purple hover:bg-laser-purple/90 text-white font-semibold rounded-xl transition-colors"
              >
                Заказать Discovery Sprint
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Price badge */}
          <motion.div
            className="absolute top-32 right-8 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-6 rounded-2xl bg-void-900/80 border border-laser-purple/30 backdrop-blur-sm">
              <div className="text-mist-400 text-sm mb-1">Стоимость</div>
              <div className="text-4xl font-display font-bold text-white">
                CHF 3,500
              </div>
              <div className="text-laser-purple text-sm mt-1">фиксированная цена</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile price */}
      <div className="lg:hidden px-4 -mt-8 mb-8">
        <div className="p-4 rounded-xl bg-void-900/80 border border-laser-purple/30 text-center">
          <div className="text-mist-400 text-sm mb-1">Стоимость</div>
          <div className="text-3xl font-display font-bold text-white">
            CHF 3,500
          </div>
          <div className="text-laser-purple text-sm mt-1">фиксированная цена</div>
        </div>
      </div>

      {/* What you get */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Что вы получите
            </h2>
            <p className="text-mist-400 max-w-2xl mx-auto">
              Полный пакет документации для старта разработки
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl bg-void-900/60 border border-mist-800/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-laser-purple/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-laser-purple" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-mist-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-void-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Как проходит Discovery Sprint
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {process.map((phase, index) => (
              <motion.div
                key={phase.title}
                className="relative p-6 rounded-2xl bg-void-950/60 border border-mist-800/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-laser-purple text-white text-xs font-semibold">
                  {phase.day}
                </div>
                <h3 className="text-white font-semibold text-lg mt-4 mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2 text-mist-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-laser-cyan flex-shrink-0 mt-0.5" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Почему это выгодно
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="p-6 rounded-xl bg-laser-cyan/5 border border-laser-cyan/20"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-laser-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-mist-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16 md:py-24 bg-void-900/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-void-900 to-void-950 border border-laser-purple/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Lightbulb className="w-12 h-12 text-laser-purple mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Что дальше после Discovery Sprint?
            </h2>
            <p className="text-mist-400 mb-6 max-w-2xl mx-auto">
              Вы получаете полный пакет документов и можете:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-void-800/50">
                <span className="text-white text-sm">Продолжить с нами по фиксированной цене</span>
              </div>
              <div className="p-4 rounded-xl bg-void-800/50">
                <span className="text-white text-sm">Передать документы другому подрядчику</span>
              </div>
              <div className="p-4 rounded-xl bg-void-800/50">
                <span className="text-white text-sm">Использовать для поиска инвестиций</span>
              </div>
            </div>
            <p className="text-laser-cyan text-sm mb-8">
              * При заказе разработки у нас стоимость Discovery Sprint вычитается из общей суммы
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-laser-purple hover:bg-laser-purple/90 text-white font-semibold rounded-xl transition-colors"
            >
              Забронировать Discovery Sprint
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
