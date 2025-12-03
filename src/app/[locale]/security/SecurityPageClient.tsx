'use client';

import { motion } from 'framer-motion';
import { 
  Shield, Lock, FileCheck, Server, Eye, 
  UserCheck, Database, Key, AlertTriangle,
  CheckCircle, ArrowRight, Download, Globe
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

interface SecurityPageClientProps {
  locale: Locale;
}

export default function SecurityPageClient({ locale }: SecurityPageClientProps) {
  const securityMeasures = [
    {
      icon: Lock,
      title: 'Шифрование данных',
      items: [
        'AES-256 для данных в покое',
        'TLS 1.3 для данных в транзите',
        'End-to-end шифрование для чувствительных данных',
        'HSM для криптографических ключей',
      ],
    },
    {
      icon: Server,
      title: 'Инфраструктура',
      items: [
        'Швейцарские дата-центры (Tier III+)',
        'AWS / Azure / GCP в европейских регионах',
        'Изолированные VPC для каждого проекта',
        'Регулярное резервное копирование',
      ],
    },
    {
      icon: UserCheck,
      title: 'Контроль доступа',
      items: [
        'Принцип минимальных привилегий',
        'Двухфакторная аутентификация (2FA)',
        'Регулярный аудит доступов',
        'Логирование всех действий',
      ],
    },
    {
      icon: Eye,
      title: 'Мониторинг',
      items: [
        'SIEM системы',
        '24/7 мониторинг угроз',
        'Автоматическое обнаружение аномалий',
        'Incident response процедуры',
      ],
    },
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Международный стандарт информационной безопасности',
      status: 'В процессе сертификации',
    },
    {
      name: 'GDPR Compliant',
      description: 'Полное соответствие требованиям защиты данных ЕС',
      status: 'Подтверждено',
    },
    {
      name: 'Swiss DPA',
      description: 'Соответствие швейцарскому закону о защите данных',
      status: 'Подтверждено',
    },
    {
      name: 'SOC 2 Type II',
      description: 'Аудит безопасности, доступности и конфиденциальности',
      status: 'Планируется Q4 2024',
    },
  ];

  const ndaTypes = [
    {
      title: 'Mutual NDA',
      description: 'Двустороннее соглашение о конфиденциальности',
      useCase: 'Для обсуждения проекта и обмена идеями',
      icon: FileCheck,
    },
    {
      title: 'Project NDA',
      description: 'Расширенное NDA с техническими деталями',
      useCase: 'Для передачи технической документации',
      icon: Database,
    },
    {
      title: 'Employee NDA',
      description: 'NDA для всех сотрудников, работающих над проектом',
      useCase: 'Защита на уровне каждого разработчика',
      icon: UserCheck,
    },
  ];

  const practices = [
    'Все сотрудники проходят обучение по информационной безопасности',
    'Код-ревью с проверкой на уязвимости (OWASP Top 10)',
    'Регулярные пентесты и сканирование уязвимостей',
    'Политика чистого стола и экрана',
    'Шифрование рабочих устройств',
    'Безопасная утилизация данных после завершения проекта',
  ];

  return (
    <main className="relative min-h-screen bg-void-950">
      <Navigation locale={locale} />
      
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-void-950 to-void-950" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-laser-cyan/10 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-laser-cyan/20">
                <Shield className="w-6 h-6 text-laser-cyan" />
              </div>
              <span className="text-laser-cyan font-medium">Security & Compliance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              NDA и безопасность:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan to-laser-blue">
                швейцарский стандарт
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 mb-8 max-w-2xl">
              Мы защищаем ваши идеи и данные с первого дня. NDA подписывается 
              ещё до обсуждения деталей проекта.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-laser-cyan hover:bg-laser-cyan/90 text-void-950 font-semibold rounded-xl transition-colors"
              >
                Запросить NDA
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#security"
                className="inline-flex items-center gap-2 px-6 py-3 border border-mist-700 hover:border-laser-cyan text-white rounded-xl transition-colors"
              >
                О безопасности
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NDA Types */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Типы NDA
            </h2>
            <p className="text-mist-400 max-w-2xl mx-auto">
              Подписываем NDA ещё до первого звонка. Ваши идеи защищены с самого начала.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {ndaTypes.map((nda, index) => (
              <motion.div
                key={nda.title}
                className="p-6 rounded-2xl bg-void-900/60 border border-mist-800/30 hover:border-laser-cyan/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-laser-cyan/10 flex items-center justify-center mb-4">
                  <nda.icon className="w-6 h-6 text-laser-cyan" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{nda.title}</h3>
                <p className="text-mist-400 text-sm mb-4">{nda.description}</p>
                <p className="text-mist-500 text-xs">
                  <span className="text-laser-cyan">Применение:</span> {nda.useCase}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button className="inline-flex items-center gap-2 px-4 py-2 text-laser-cyan hover:text-white transition-colors">
              <Download className="w-4 h-4" />
              Скачать образец NDA
            </button>
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
      <section id="security" className="py-16 md:py-24 bg-void-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Меры безопасности
            </h2>
            <p className="text-mist-400 max-w-2xl mx-auto">
              Комплексный подход к защите данных на всех уровнях
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                className="p-6 md:p-8 rounded-2xl bg-void-950/60 border border-mist-800/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-laser-cyan/10 flex items-center justify-center">
                    <measure.icon className="w-5 h-5 text-laser-cyan" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{measure.title}</h3>
                </div>
                <ul className="space-y-2">
                  {measure.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-mist-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-laser-cyan flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Сертификаты и compliance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="p-5 rounded-xl bg-void-900/60 border border-mist-800/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-laser-cyan font-mono font-bold text-lg mb-2">{cert.name}</div>
                <p className="text-mist-400 text-sm mb-3">{cert.description}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  cert.status === 'Подтверждено' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-16 md:py-24 bg-void-900/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Наши практики безопасности
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-void-950/40"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <CheckCircle className="w-5 h-5 text-laser-cyan flex-shrink-0 mt-0.5" />
                <span className="text-mist-300 text-sm">{practice}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-void-900 to-void-950 border border-laser-cyan/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe className="w-12 h-12 text-laser-cyan mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Страхование профессиональной ответственности
            </h2>
            <p className="text-mist-400 mb-6 max-w-2xl mx-auto">
              Наша деятельность застрахована на сумму до €5,000,000. 
              Это дополнительная гарантия защиты ваших интересов.
            </p>
            <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-void-800/50">
              <Shield className="w-8 h-8 text-laser-cyan" />
              <div className="text-left">
                <div className="text-2xl font-display font-bold text-white">€5M</div>
                <div className="text-mist-400 text-sm">Professional Liability Insurance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-void-900/30">
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
              Отправим NDA в течение часа после заявки. Ваши идеи будут защищены 
              ещё до первого разговора.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-laser-cyan hover:bg-laser-cyan/90 text-void-950 font-semibold rounded-xl transition-colors"
            >
              Запросить NDA
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
