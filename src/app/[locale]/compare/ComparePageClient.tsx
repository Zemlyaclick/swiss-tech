'use client';

import { motion } from 'framer-motion';
import { 
  Check, X, Minus, ArrowRight, Scale, 
  Clock, Shield, Users, Coins, Award,
  AlertTriangle, Zap, Building2
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

interface ComparePageClientProps {
  locale: Locale;
}

type ComparisonValue = 'yes' | 'no' | 'partial' | string;

interface ComparisonRow {
  feature: string;
  inhouse: ComparisonValue;
  freelancer: ComparisonValue;
  offshore: ComparisonValue;
  swissdev: ComparisonValue;
}

export default function ComparePageClient({ locale }: ComparePageClientProps) {
  const comparisonData: ComparisonRow[] = [
    {
      feature: 'Стоимость',
      inhouse: '€€€€€',
      freelancer: '€',
      offshore: '€€',
      swissdev: '€€€',
    },
    {
      feature: 'Качество кода',
      inhouse: 'yes',
      freelancer: 'partial',
      offshore: 'partial',
      swissdev: 'yes',
    },
    {
      feature: 'Надёжность / SLA',
      inhouse: 'yes',
      freelancer: 'no',
      offshore: 'partial',
      swissdev: 'yes',
    },
    {
      feature: 'Скорость старта',
      inhouse: 'no',
      freelancer: 'yes',
      offshore: 'yes',
      swissdev: 'yes',
    },
    {
      feature: 'Масштабирование команды',
      inhouse: 'no',
      freelancer: 'no',
      offshore: 'yes',
      swissdev: 'yes',
    },
    {
      feature: 'GDPR / Swiss DPA',
      inhouse: 'yes',
      freelancer: 'partial',
      offshore: 'no',
      swissdev: 'yes',
    },
    {
      feature: 'Коммуникация',
      inhouse: 'yes',
      freelancer: 'partial',
      offshore: 'no',
      swissdev: 'yes',
    },
    {
      feature: 'Часовой пояс',
      inhouse: 'yes',
      freelancer: 'partial',
      offshore: 'no',
      swissdev: 'yes',
    },
    {
      feature: 'Долгосрочная поддержка',
      inhouse: 'yes',
      freelancer: 'no',
      offshore: 'partial',
      swissdev: 'yes',
    },
    {
      feature: 'Без HR/найма',
      inhouse: 'no',
      freelancer: 'yes',
      offshore: 'yes',
      swissdev: 'yes',
    },
    {
      feature: 'Фиксированная цена',
      inhouse: 'no',
      freelancer: 'partial',
      offshore: 'partial',
      swissdev: 'yes',
    },
    {
      feature: 'Страхование ответственности',
      inhouse: 'partial',
      freelancer: 'no',
      offshore: 'no',
      swissdev: 'yes',
    },
  ];

  const renderValue = (value: ComparisonValue) => {
    if (value === 'yes') {
      return <Check className="w-5 h-5 text-green-400" />;
    }
    if (value === 'no') {
      return <X className="w-5 h-5 text-red-400" />;
    }
    if (value === 'partial') {
      return <Minus className="w-5 h-5 text-yellow-400" />;
    }
    return <span className="text-mist-300 text-sm font-mono">{value}</span>;
  };

  const options = [
    {
      title: 'In-house команда',
      icon: Building2,
      pros: [
        'Полный контроль',
        'Глубокое погружение в продукт',
        'Доступность 24/7',
      ],
      cons: [
        'Высокие затраты (зарплаты, офис, налоги)',
        'Долгий найм (3-6 месяцев)',
        'Риски текучки кадров',
        'Нужен технический менеджмент',
      ],
      bestFor: 'Крупные компании с постоянной IT-нагрузкой',
    },
    {
      title: 'Фрилансеры',
      icon: Users,
      pros: [
        'Низкая стоимость',
        'Быстрый старт',
        'Гибкость',
      ],
      cons: [
        'Непредсказуемое качество',
        'Риск пропадания',
        'Нет гарантий и SLA',
        'Сложно с NDA и compliance',
      ],
      bestFor: 'Мелкие задачи, прототипы, личные проекты',
    },
    {
      title: 'Offshore агентства',
      icon: Scale,
      pros: [
        'Низкая стоимость',
        'Большие команды',
        'Опыт в разных проектах',
      ],
      cons: [
        'Проблемы с коммуникацией',
        'Разница часовых поясов',
        'GDPR риски',
        'Культурные различия',
      ],
      bestFor: 'Стартапы с ограниченным бюджетом',
    },
    {
      title: 'Swiss Dev Agency',
      icon: Award,
      color: 'laser-cyan',
      pros: [
        'Швейцарское качество и compliance',
        'Европейский часовой пояс',
        'Фиксированные цены и гарантии',
        'Долгосрочное партнёрство',
      ],
      cons: [
        'Выше стоимость, чем offshore',
        'Ограниченная ёмкость',
      ],
      bestFor: 'Средний бизнес, работающий на европейском рынке',
    },
  ];

  return (
    <main className="relative min-h-screen bg-void-950">
      <Navigation locale={locale} />
      
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-void-950 to-void-950" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-laser-cyan/10 border border-laser-cyan/30 text-laser-cyan text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Честное сравнение
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              In-house vs Freelance vs Offshore vs{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan to-laser-blue">
                Swiss Agency
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 max-w-2xl mx-auto">
              Выбор подрядчика — стратегическое решение. 
              Мы собрали объективное сравнение всех вариантов.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-mist-800/30">
                  <th className="text-left py-4 px-4 text-mist-400 font-medium">Критерий</th>
                  <th className="text-center py-4 px-4 text-mist-400 font-medium">In-house</th>
                  <th className="text-center py-4 px-4 text-mist-400 font-medium">Фрилансер</th>
                  <th className="text-center py-4 px-4 text-mist-400 font-medium">Offshore</th>
                  <th className="text-center py-4 px-4 text-laser-cyan font-semibold bg-laser-cyan/5 rounded-t-xl">Swiss Dev</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr 
                    key={row.feature}
                    className="border-b border-mist-800/20"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <td className="py-4 px-4 text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-center">{renderValue(row.inhouse)}</td>
                    <td className="py-4 px-4 text-center">{renderValue(row.freelancer)}</td>
                    <td className="py-4 px-4 text-center">{renderValue(row.offshore)}</td>
                    <td className="py-4 px-4 text-center bg-laser-cyan/5">{renderValue(row.swissdev)}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-mist-400">Да / Хорошо</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="w-4 h-4 text-yellow-400" />
              <span className="text-mist-400">Частично / Зависит</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-400" />
              <span className="text-mist-400">Нет / Проблема</span>
            </div>
          </div>
        </div>
      </section>

      {/* Options Detail */}
      <section className="py-16 md:py-20 bg-void-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Подробный разбор каждого варианта
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {options.map((option, index) => (
              <motion.div
                key={option.title}
                className={`p-6 md:p-8 rounded-2xl border ${
                  option.color 
                    ? 'bg-laser-cyan/5 border-laser-cyan/30' 
                    : 'bg-void-950/60 border-mist-800/30'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${option.color ? 'bg-laser-cyan/20' : 'bg-void-800'}`}>
                    <option.icon className={`w-5 h-5 ${option.color ? 'text-laser-cyan' : 'text-mist-400'}`} />
                  </div>
                  <h3 className={`text-xl font-semibold ${option.color ? 'text-laser-cyan' : 'text-white'}`}>
                    {option.title}
                  </h3>
                </div>

                <div className="mb-4">
                  <h4 className="text-green-400 text-sm font-medium mb-2 flex items-center gap-1">
                    <Check className="w-4 h-4" /> Преимущества
                  </h4>
                  <ul className="space-y-1">
                    {option.pros.map((pro) => (
                      <li key={pro} className="text-mist-300 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-red-400 text-sm font-medium mb-2 flex items-center gap-1">
                    <X className="w-4 h-4" /> Недостатки
                  </h4>
                  <ul className="space-y-1">
                    {option.cons.map((con) => (
                      <li key={con} className="text-mist-300 text-sm flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-mist-800/30">
                  <span className="text-mist-500 text-xs uppercase tracking-wider">Лучше всего для:</span>
                  <p className="text-white text-sm mt-1">{option.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to choose us */}
      <section className="py-16 md:py-20 border-t border-mist-800/20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Когда Swiss Dev Agency — правильный выбор?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Shield, text: 'Важна безопасность и compliance' },
                { icon: Clock, text: 'Нужен надёжный партнёр, а не разовый исполнитель' },
                { icon: Coins, text: 'Бюджет от €15,000 на проект' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-void-900/50 border border-mist-800/30"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-8 h-8 text-laser-cyan mx-auto mb-3" />
                  <p className="text-mist-300 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-laser-cyan hover:bg-laser-cyan/90 text-void-950 font-semibold rounded-xl transition-colors"
            >
              Обсудить ваш проект
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
