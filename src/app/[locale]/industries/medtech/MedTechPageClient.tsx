'use client';

import { motion } from 'framer-motion';
import { 
  Heart, Shield, FileCheck, Database, 
  Activity, Stethoscope, Brain, Pill,
  Award, ArrowRight, Lock, Users
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

interface MedTechPageClientProps {
  locale: Locale;
}

export default function MedTechPageClient({ locale }: MedTechPageClientProps) {
  const challenges = [
    {
      icon: Shield,
      title: 'HIPAA & GDPR',
      description: 'Соответствие строгим требованиям по защите медицинских данных пациентов.',
    },
    {
      icon: FileCheck,
      title: 'MDR/IVDR сертификация',
      description: 'Подготовка ПО как медицинского изделия к европейской сертификации.',
    },
    {
      icon: Database,
      title: 'Интероперабельность',
      description: 'Интеграция с HL7 FHIR, DICOM и другими медицинскими стандартами.',
    },
    {
      icon: Activity,
      title: 'Надёжность 24/7',
      description: 'Критически важные системы должны работать без сбоев круглосуточно.',
    },
  ];

  const solutions = [
    {
      title: 'Телемедицина',
      description: 'Платформы для удалённых консультаций с видеосвязью и интеграцией EHR.',
      features: ['Video calls', 'E-prescriptions', 'Patient portal'],
    },
    {
      title: 'Медицинские IoT',
      description: 'Сбор и анализ данных с носимых устройств и медицинского оборудования.',
      features: ['Real-time monitoring', 'Alert systems', 'Data analytics'],
    },
    {
      title: 'AI-диагностика',
      description: 'Системы компьютерного зрения для анализа медицинских изображений.',
      features: ['Image analysis', 'Radiology AI', 'Pathology'],
    },
    {
      title: 'Клинические системы',
      description: 'EHR/EMR системы, управление клиникой, расписание и биллинг.',
      features: ['HL7 FHIR', 'Scheduling', 'Billing'],
    },
  ];

  const caseStudy = {
    client: 'Swiss Digital Health Startup',
    challenge: 'Разработка платформы для мониторинга хронических заболеваний',
    solution: 'Мобильное приложение + облачная платформа с AI-аналитикой и интеграцией с устройствами',
    results: [
      { metric: '15K', label: 'активных пациентов' },
      { metric: '40%', label: 'снижение госпитализаций' },
      { metric: 'CE Mark', label: 'сертификация получена' },
      { metric: '98%', label: 'удовлетворённость врачей' },
    ],
  };

  const techStack = [
    'Python', 'TensorFlow', 'PyTorch', 'PostgreSQL', 'MongoDB', 
    'HL7 FHIR', 'DICOM', 'AWS HealthLake', 'Docker', 'Kubernetes'
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
                <Heart className="w-6 h-6 text-laser-purple" />
              </div>
              <span className="text-laser-purple font-medium">MedTech & Healthcare</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              IT-решения для{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-purple to-laser-cyan">
                здравоохранения
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 mb-8 max-w-2xl">
              Разрабатываем медицинское ПО с соблюдением всех регуляторных требований. 
              От телемедицины до AI-диагностики.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-laser-purple hover:bg-laser-purple/90 text-white font-semibold rounded-xl transition-colors"
              >
                Обсудить проект
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#case-study"
                className="inline-flex items-center gap-2 px-6 py-3 border border-mist-700 hover:border-laser-purple text-white rounded-xl transition-colors"
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
              Специфика медицинской IT-разработки
            </h2>
            <p className="text-mist-400 max-w-2xl mx-auto">
              Мы знаем все нюансы и требования отрасли здравоохранения
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
                <div className="w-12 h-12 rounded-xl bg-laser-purple/10 flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-laser-purple" />
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
              Наши решения для MedTech
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="p-6 md:p-8 rounded-2xl bg-void-950/60 border border-mist-800/30 hover:border-laser-purple/30 transition-colors"
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
                      className="px-3 py-1 rounded-full bg-laser-purple/10 text-laser-purple text-xs"
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
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-void-900 to-void-950 border border-laser-purple/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-laser-purple" />
              <span className="text-laser-purple font-medium text-sm">Case Study</span>
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
                  <div className="text-2xl md:text-3xl font-display font-bold text-laser-purple mb-1">
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
              Технологии для MedTech
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
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-mist-400 mb-8 max-w-2xl mx-auto">
              Бесплатная консультация с экспертом по медицинским IT-системам. 
              Обсудим регуляторику, архитектуру и сертификацию.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-laser-purple hover:bg-laser-purple/90 text-white font-semibold rounded-xl transition-colors"
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
