import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Eye, 
  Keyboard, 
  Volume2, 
  Users, 
  CheckCircle2, 
  FileCheck, 
  Target, 
  TrendingUp, 
  ArrowRight, 
  Zap, 
  Award, 
  Globe,
  Scale,
  Heart,
  Search,
  Code,
  TestTube,
  FileText,
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Доступность и инклюзивный дизайн | Swiss Made IT',
  description: 'Аудит доступности, соответствие WCAG 2.1 AA/AAA, инклюзивный дизайн. Сделаем ваш продукт доступным для всех пользователей и соответствующим законодательству.',
  keywords: ['accessibility', 'доступность', 'WCAG', 'инклюзивный дизайн', 'a11y', 'аудит доступности', 'ARIA', 'screen reader'],
};

export default async function AccessibilityPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;

  const problems = [
    {
      icon: Scale,
      title: 'Юридические риски',
      description: 'В ЕС и Швейцарии законы о доступности ужесточаются. Иски за недоступные сайты становятся реальностью'
    },
    {
      icon: Users,
      title: 'Потеря 15% аудитории',
      description: '15% населения имеют ограничения по здоровью. Недоступный сайт просто теряет этих клиентов'
    },
    {
      icon: Eye,
      title: 'Проблемы со зрением',
      description: 'Слабый контраст, мелкий шрифт, неработающий зум — пожилые пользователи не могут работать с сайтом'
    },
    {
      icon: Keyboard,
      title: 'Мышь не для всех',
      description: 'Навигация только мышкой исключает пользователей с моторными нарушениями'
    },
    {
      icon: Volume2,
      title: 'Контент без альтернатив',
      description: 'Видео без субтитров, изображения без описаний, аудио без транскриптов'
    },
    {
      icon: Code,
      title: 'Сломанная семантика',
      description: 'Screen readers не могут прочитать сайт: div вместо button, нет заголовков, неправильные ARIA-роли'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Больше клиентов',
      description: 'Доступный сайт работает для всех — расширяете аудиторию и повышаете конверсию',
      color: 'from-laser-cyan to-laser-blue'
    },
    {
      icon: Scale,
      title: 'Соответствие законам',
      description: 'WCAG 2.1 AA/AAA, ADA, Section 508, EN 301 549 — защита от исков и штрафов',
      color: 'from-laser-blue to-laser-purple'
    },
    {
      icon: Search,
      title: 'Лучшее SEO',
      description: 'Семантический HTML, alt-тексты, структурированный контент — то, что любят поисковики',
      color: 'from-laser-purple to-laser-cyan'
    },
    {
      icon: Heart,
      title: 'Репутация бренда',
      description: 'Инклюзивность — это ценность. Клиенты выбирают компании, которые заботятся обо всех',
      color: 'from-laser-cyan to-laser-blue'
    },
    {
      icon: TrendingUp,
      title: 'Лучший UX для всех',
      description: 'Крупные кнопки, понятная навигация, читаемые тексты улучшают опыт каждого пользователя',
      color: 'from-laser-blue to-laser-purple'
    },
    {
      icon: Globe,
      title: 'Мобильность и контексты',
      description: 'Доступный сайт работает на улице при ярком солнце, в шумном метро, одной рукой',
      color: 'from-laser-purple to-laser-cyan'
    }
  ];

  const services = [
    {
      icon: Search,
      title: 'Аудит доступности',
      description: 'Комплексная проверка сайта по WCAG 2.1: автоматическое тестирование + ручной анализ + тестирование с реальными пользователями'
    },
    {
      icon: FileCheck,
      title: 'Отчёт о соответствии',
      description: 'Детальный отчёт с каждой найденной проблемой, её влиянием, приоритетом и конкретным решением'
    },
    {
      icon: Code,
      title: 'Исправление проблем',
      description: 'Не просто отчёт — мы сами исправляем код: семантика, ARIA, фокус, контрасты, альтернативные тексты'
    },
    {
      icon: TestTube,
      title: 'Тестирование со screen readers',
      description: 'Проверка с NVDA, JAWS, VoiceOver, TalkBack — как реально работает ваш сайт для незрячих'
    },
    {
      icon: Keyboard,
      title: 'Keyboard-only навигация',
      description: 'Полноценная работа с сайтом без мыши: фокус, порядок табуляции, skip links, keyboard traps'
    },
    {
      icon: FileText,
      title: 'Документация и обучение',
      description: 'Гайдлайны для дизайнеров и разработчиков: как сохранять доступность при развитии продукта'
    }
  ];

  const wcagLevels = [
    {
      level: 'A',
      title: 'Минимальный уровень',
      description: 'Базовые требования: alt-тексты, управление с клавиатуры, нет мерцающего контента',
      criteria: '25 критериев'
    },
    {
      level: 'AA',
      title: 'Рекомендуемый уровень',
      description: 'Стандарт для бизнеса: контраст 4.5:1, resize до 200%, субтитры для видео',
      criteria: '13 критериев'
    },
    {
      level: 'AAA',
      title: 'Продвинутый уровень',
      description: 'Максимальная доступность: контраст 7:1, язык жестов, расширенное аудиоописание',
      criteria: '23 критерия'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Аудит',
      description: 'Автоматическое сканирование axe/WAVE + ручное тестирование + проверка с assistive technologies',
      duration: '3-5 дней'
    },
    {
      step: '02',
      title: 'Отчёт',
      description: 'Структурированный отчёт: проблема → влияние → приоритет → решение → WCAG-критерий',
      duration: '2-3 дня'
    },
    {
      step: '03',
      title: 'Исправление',
      description: 'Устраняем проблемы в порядке приоритета. Критические — сначала, косметические — в конце',
      duration: '1-4 недели'
    },
    {
      step: '04',
      title: 'Валидация',
      description: 'Повторное тестирование, проверка исправлений, сертификат соответствия WCAG',
      duration: '2-3 дня'
    }
  ];

  const tools = [
    { name: 'axe DevTools', category: 'Автотесты' },
    { name: 'WAVE', category: 'Анализ' },
    { name: 'Lighthouse', category: 'Аудит' },
    { name: 'NVDA', category: 'Screen reader' },
    { name: 'VoiceOver', category: 'Screen reader' },
    { name: 'Color Contrast Analyzer', category: 'Контраст' },
    { name: 'Accessibility Insights', category: 'Тестирование' },
    { name: 'Pa11y', category: 'CI/CD' }
  ];

  const faqs = [
    {
      question: 'Какой уровень WCAG нам нужен?',
      answer: 'Для большинства коммерческих сайтов — WCAG 2.1 AA. Это требование законодательства ЕС и Швейцарии, оптимальный баланс между доступностью и затратами. AAA нужен для госсервисов и медицинских приложений.'
    },
    {
      question: 'Сколько времени занимает аудит?',
      answer: 'Экспресс-аудит главных страниц — 3-5 дней. Полный аудит среднего сайта (50-100 страниц) — 2-3 недели. Для крупных порталов составляем индивидуальный план.'
    },
    {
      question: 'Можно ли сделать сайт на 100% доступным?',
      answer: 'Идеальная доступность — это процесс, не результат. Мы добиваемся соответствия выбранному уровню WCAG и даём инструменты для поддержания доступности при развитии продукта.'
    },
    {
      question: 'Как это повлияет на дизайн сайта?',
      answer: 'Доступность ≠ скучный дизайн. Современные техники позволяют сохранить креативность и бренд. Часто доступные решения даже улучшают общий UX для всех пользователей.'
    }
  ];

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-laser-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-laser-purple/10 rounded-full blur-3xl" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-laser-cyan/10 border border-laser-cyan/30 rounded-full text-laser-cyan text-sm">
                WCAG 2.1
              </span>
              <span className="px-3 py-1 bg-laser-blue/10 border border-laser-blue/30 rounded-full text-laser-blue text-sm">
                Инклюзивный дизайн
              </span>
              <span className="px-3 py-1 bg-laser-purple/10 border border-laser-purple/30 rounded-full text-laser-purple text-sm">
                Screen reader friendly
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-white">Сайт для </span>
              <span className="bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple bg-clip-text text-transparent">
                каждого
              </span>
              <span className="text-white"> пользователя</span>
            </h1>
            
            <p className="text-xl text-mist-300 max-w-3xl mb-8 leading-relaxed">
              15% людей имеют ограничения по здоровью. Законы ужесточаются, иски растут. 
              Мы делаем ваш продукт доступным для всех и соответствующим WCAG 2.1 AA/AAA.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-laser-cyan to-laser-blue rounded-lg font-semibold text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25 transition-all duration-300"
              >
                Заказать аудит
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#wcag"
                className="inline-flex items-center gap-2 px-6 py-3 border border-mist-700 rounded-lg text-mist-300 hover:border-laser-cyan hover:text-laser-cyan transition-colors"
              >
                Уровни WCAG
              </a>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">Проблемы</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Почему доступность — это не опция
              </h2>
              <p className="text-mist-400 mt-4 max-w-2xl mx-auto">
                Недоступный сайт — это потерянные клиенты, репутационные риски и юридические проблемы
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="group p-6 bg-void-900/50 border border-mist-800/50 rounded-xl hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                    <problem.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                  <p className="text-mist-400 text-sm leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">Преимущества</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Доступность — это бизнес-преимущество
              </h2>
              <p className="text-mist-400 mt-4 max-w-2xl mx-auto">
                Инвестиции в доступность окупаются расширением аудитории, улучшением SEO и защитой от рисков
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-6 bg-void-900/50 border border-mist-800/50 rounded-xl hover:border-laser-cyan/30 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} p-[1px] mb-4`}>
                    <div className="w-full h-full bg-void-900 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-laser-cyan" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-mist-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WCAG Levels */}
        <section id="wcag" className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">WCAG 2.1</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Уровни соответствия
              </h2>
              <p className="text-mist-400 mt-4 max-w-2xl mx-auto">
                Web Content Accessibility Guidelines — международный стандарт доступности веб-контента
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {wcagLevels.map((item, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-xl border ${
                    item.level === 'AA' 
                      ? 'bg-gradient-to-b from-laser-cyan/10 to-void-900/50 border-laser-cyan/30' 
                      : 'bg-void-900/50 border-mist-800/50'
                  }`}
                >
                  {item.level === 'AA' && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-laser-cyan text-void-950 text-xs font-bold rounded-full">
                      Рекомендуем
                    </div>
                  )}
                  <div className={`text-5xl font-bold mb-4 ${
                    item.level === 'AA' ? 'text-laser-cyan' : 'text-mist-500'
                  }`}>
                    {item.level}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-mist-400 text-sm mb-4">{item.description}</p>
                  <div className="text-mist-500 text-sm">{item.criteria}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">Услуги</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Полный цикл работы с доступностью
              </h2>
              <p className="text-mist-400 mt-4 max-w-2xl mx-auto">
                От аудита до исправления и сертификации — берём на себя всю работу
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-6 bg-void-900/50 border border-mist-800/50 rounded-xl hover:border-laser-cyan/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-laser-cyan/10 flex items-center justify-center mb-4 group-hover:bg-laser-cyan/20 transition-colors">
                    <service.icon className="w-6 h-6 text-laser-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-mist-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">Инструменты</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Профессиональный инструментарий
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-void-900/50 border border-mist-800/50 rounded-lg hover:border-laser-cyan/30 transition-colors"
                >
                  <span className="text-white font-medium">{tool.name}</span>
                  <span className="text-mist-500 text-sm ml-2">/ {tool.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">Процесс</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                От аудита до сертификата
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-void-800 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-mist-400 text-sm mb-3">{item.description}</p>
                  <div className="text-laser-cyan text-sm font-medium">{item.duration}</div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-3 text-mist-700">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">Результаты</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Что вы получите
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: '100%', label: 'Соответствие WCAG', sublabel: 'выбранного уровня' },
                { value: '+15%', label: 'Новая аудитория', sublabel: 'потенциальных клиентов' },
                { value: '0', label: 'Юридических рисков', sublabel: 'защита от исков' },
                { value: '↑SEO', label: 'Поисковые позиции', sublabel: 'семантический HTML' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-void-900/50 border border-mist-800/50 rounded-xl">
                  <div className="text-4xl font-bold bg-gradient-to-r from-laser-cyan to-laser-blue bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium">{stat.label}</div>
                  <div className="text-mist-500 text-sm">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 bg-gradient-to-r from-laser-cyan/10 via-laser-blue/10 to-laser-purple/10 border border-laser-cyan/20 rounded-2xl text-center">
              <Award className="w-16 h-16 text-laser-cyan mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Сертифицированная доступность
              </h2>
              <p className="text-mist-300 mb-6 max-w-2xl mx-auto">
                Стоимость зависит от размера сайта и текущего состояния. 
                Экспресс-аудит от 1 500 CHF, полный аудит + исправление от 5 000 CHF.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue rounded-lg font-semibold text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25 transition-all"
                >
                  Получить оценку
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Частые вопросы
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-void-900/50 border border-mist-800/50 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-laser-cyan flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                      <p className="text-mist-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Сделайте свой продукт доступным для всех
            </h2>
            <p className="text-mist-300 mb-8 text-lg">
              Начните с бесплатной экспресс-проверки главной страницы. 
              Узнайте, насколько ваш сайт доступен прямо сейчас.
            </p>
            <a 
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue rounded-lg font-semibold text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25 transition-all duration-300"
            >
              Заказать аудит доступности
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
