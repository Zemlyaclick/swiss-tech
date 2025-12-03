import { Metadata } from 'next';
import { Handshake, Wallet, Clock, Users, Zap, ShieldCheck, ArrowRight, X, Check, HeartHandshake, Code2, Headphones, Lightbulb } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

export const metadata: Metadata = {
  title: 'IT-партнёр под ключ | SwissTech',
  description: 'Ваш внешний IT-отдел без найма в штат. Разработка, поддержка, консультации — один партнёр для всех технических задач. Платите только за результат.'
};

export default function TurnkeyPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const benefits = [
    {
      icon: <Wallet size={24} className="text-laser-cyan" />,
      title: 'Экономия до 70% на IT',
      description: 'Никаких затрат на найм, офис, налоги, отпуска и больничные. Платите только за выполненную работу.'
    },
    {
      icon: <Users size={24} className="text-laser-cyan" />,
      title: 'Целая команда, а не один человек',
      description: 'Дизайнеры, разработчики, DevOps, аналитики — все компетенции в одном контракте. Без поиска фрилансеров.'
    },
    {
      icon: <Clock size={24} className="text-laser-cyan" />,
      title: 'Мгновенный старт',
      description: 'Не нужно месяцами искать и онбордить сотрудников. Начинаем работу в течение 48 часов.'
    },
    {
      icon: <Zap size={24} className="text-laser-cyan" />,
      title: 'Гибкость масштабирования',
      description: 'Больше задач — больше ресурсов. Меньше задач — меньше затрат. Адаптируемся к вашим потребностям.'
    },
    {
      icon: <ShieldCheck size={24} className="text-laser-cyan" />,
      title: 'Ответственность и гарантии',
      description: 'Договор, SLA, фиксированные сроки. Мы несём финансовую ответственность за результат.'
    },
    {
      icon: <HeartHandshake size={24} className="text-laser-cyan" />,
      title: 'Долгосрочное партнёрство',
      description: 'Мы погружаемся в ваш бизнес и становимся частью команды. Понимаем контекст, знаем историю решений.'
    }
  ];

  const comparison = {
    inhouse: [
      'Поиск и найм: 2-6 месяцев',
      'Зарплата + налоги + офис + оборудование',
      'Отпуска, больничные, текучка',
      'Один специалист ≠ все компетенции',
      'Риск увольнения в неподходящий момент',
      'Нужно управлять и мотивировать',
      'Сложно масштабировать быстро'
    ],
    partner: [
      'Старт работы: 48 часов',
      'Фиксированная стоимость за задачи',
      'Непрерывность — всегда кто-то на связи',
      'Целая команда: dev, design, DevOps, QA',
      'Договорные обязательства и SLA',
      'Мы сами управляем процессами',
      'Масштабируемся под ваши задачи'
    ]
  };

  const services = [
    { icon: <Code2 size={20} className="text-laser-cyan" />, title: 'Разработка', desc: 'Сайты, приложения, боты, интеграции — любые технические задачи' },
    { icon: <Headphones size={20} className="text-laser-cyan" />, title: 'Поддержка', desc: 'Мониторинг, обновления, исправление багов, оптимизация' },
    { icon: <Lightbulb size={20} className="text-laser-cyan" />, title: 'Консалтинг', desc: 'Выбор технологий, аудит систем, стратегия развития' },
    { icon: <ShieldCheck size={20} className="text-laser-cyan" />, title: 'Безопасность', desc: 'Аудит, защита данных, соответствие GDPR' },
    { icon: <Zap size={20} className="text-laser-cyan" />, title: 'Автоматизация', desc: 'Оптимизация процессов, интеграция систем' },
    { icon: <Users size={20} className="text-laser-cyan" />, title: 'Усиление команды', desc: 'Временные специалисты для ваших проектов' }
  ];

  const models = [
    {
      title: 'Пакет часов',
      description: 'Фиксированное количество часов в месяц. Идеально для постоянной поддержки и небольших доработок.',
      features: ['10-40 часов/месяц', 'Приоритетная поддержка', 'Неиспользованные часы переносятся']
    },
    {
      title: 'Проектная работа',
      description: 'Фиксированная стоимость за конкретный проект. Чёткое ТЗ, сроки и бюджет.',
      features: ['Фиксированная цена', 'Этапные платежи', 'Гарантия результата']
    },
    {
      title: 'Выделенная команда',
      description: 'Команда специалистов, работающая только на вас. Для масштабных долгосрочных проектов.',
      features: ['Full-time специалисты', 'Полное погружение в проект', 'Максимальная эффективность']
    }
  ];

  return (
    <main className="relative min-h-screen bg-void-950">
      <Navigation locale={locale} />
      
      {/* Hero */}
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-cyan/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-laser-cyan/30 bg-laser-cyan/5 mb-6">
            <Handshake size={28} className="text-laser-cyan" />
            <span className="font-display font-bold text-lg text-mist-100">IT-партнёр под ключ</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mist-100 mb-6 leading-tight">
            Ваш IT-отдел<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">без найма в штат</span>
          </h1>
          
          <p className="text-mist-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Забудьте о поиске разработчиков и управлении фрилансерами. Мы становимся вашим постоянным 
            техническим партнёром: от простых задач до сложных проектов. Один контракт — все IT-компетенции.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#benefits" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-laser-cyan to-laser-blue text-void-900 font-semibold hover:opacity-90 transition-opacity">
              Узнать подробнее
              <ArrowRight size={18} />
            </a>
            <a href="#comparison" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-mist-300 hover:text-mist-100 hover:border-white/20 transition-colors">
              Сравнить с наймом
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-6">
            Знакомые проблемы?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {[
              'Нужен разработчик, но найм слишком дорог',
              'Фрилансеры исчезают в неподходящий момент',
              'Нет экспертизы для оценки технических решений',
              'IT-задачи копятся, а заниматься некому',
              'Штатный программист не покрывает все задачи',
              'Сложно понять, за что платите агентствам'
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <X size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-mist-300">{problem}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-mist-400 text-lg">
            Есть решение: надёжный IT-партнёр, который работает как ваша собственная команда.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Почему это работает
            </h2>
            <p className="text-mist-400 text-lg max-w-2xl mx-auto">
              Вы получаете все преимущества собственного IT-отдела без его недостатков
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 rounded-2xl bg-void-900/60 border border-laser-cyan/10 hover:border-laser-cyan/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-laser-cyan/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-mist-100 mb-2">{benefit.title}</h3>
                <p className="text-mist-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: In-house vs Partner */}
      <section id="comparison" className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Найм vs IT-партнёр
            </h2>
            <p className="text-mist-400 text-lg">
              Сравните и примите взвешенное решение
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* In-house */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium">
                Найм в штат
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-red-500/20">
                <ul className="space-y-4">
                  {comparison.inhouse.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X size={18} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-mist-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Partner */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-laser-cyan/20 border border-laser-cyan/30 text-laser-cyan text-sm font-medium">
                IT-партнёр
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-laser-cyan/20">
                <ul className="space-y-4">
                  {comparison.partner.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-laser-cyan mt-1 flex-shrink-0" />
                      <span className="text-mist-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Что мы закрываем
            </h2>
            <p className="text-mist-400 text-lg">
              Все технические задачи — от простых до сложных
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="p-5 rounded-xl bg-void-900/60 border border-white/5 hover:border-laser-cyan/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  {service.icon}
                  <h3 className="font-display text-base font-semibold text-mist-100">{service.title}</h3>
                </div>
                <p className="text-mist-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Модели сотрудничества
            </h2>
            <p className="text-mist-400 text-lg">
              Выберите формат, который подходит вашему бизнесу
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((model, i) => (
              <div key={i} className="p-6 rounded-2xl bg-void-950 border border-white/5 hover:border-laser-cyan/20 transition-colors">
                <h3 className="font-display text-xl font-semibold text-laser-cyan mb-3">{model.title}</h3>
                <p className="text-mist-400 text-sm mb-4">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-mist-300 text-sm">
                      <Check size={16} className="text-laser-cyan flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Как начать
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Знакомство', desc: 'Бесплатный звонок: обсуждаем ваши задачи и потребности' },
              { step: '02', title: 'Аудит', desc: 'Анализируем текущую ситуацию и предлагаем план' },
              { step: '03', title: 'Договор', desc: 'Выбираем модель сотрудничества, фиксируем условия' },
              { step: '04', title: 'Работа', desc: 'Начинаем решать задачи. Первые результаты — в течение недели' }
            ].map((item, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-void-900/60 border border-white/5">
                <span className="font-mono text-4xl font-bold text-laser-cyan/20">{item.step}</span>
                <h3 className="font-display text-lg font-semibold text-mist-100 mt-2 mb-2">{item.title}</h3>
                <p className="text-mist-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Результаты партнёрства
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '-70%', label: 'экономия vs найм' },
              { value: '48ч', label: 'старт работы' },
              { value: '5+', label: 'специалистов в команде' },
              { value: '24/7', label: 'мониторинг систем' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-void-950 border border-laser-cyan/10">
                <div className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan to-laser-blue">
                  {stat.value}
                </div>
                <div className="text-mist-400 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-4">
              Частые вопросы
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'Чем вы отличаетесь от обычного агентства?', a: 'Мы строим долгосрочные отношения и погружаемся в ваш бизнес. Знаем контекст, историю решений, специфику. Это не разовые проекты, а постоянное партнёрство.' },
              { q: 'Что если мне нужна только одна задача?', a: 'Без проблем. Мы работаем и с разовыми проектами. Но многие клиенты после первой задачи переходят на постоянное сотрудничество — так удобнее и выгоднее.' },
              { q: 'Как быстро вы можете начать?', a: 'Обычно в течение 48 часов после согласования. Для срочных задач — ещё быстрее. У нас всегда есть свободные ресурсы для новых партнёров.' },
              { q: 'Что если я недоволен результатом?', a: 'У нас есть SLA и гарантии в договоре. Если работа не соответствует требованиям — переделываем за свой счёт. Репутация для нас важнее краткосрочной выгоды.' }
            ].map((faq, i) => (
              <details key={i} className="group p-5 rounded-2xl bg-void-900/60 border border-white/5 hover:border-laser-cyan/20 transition-colors">
                <summary className="font-medium text-mist-100 cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <span className="ml-4 text-laser-cyan group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-mist-400 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
