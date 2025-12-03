import { Metadata } from 'next';
import { BarChart3, Target, TrendingUp, Search, FileSearch, Users, Lightbulb, ArrowRight, X, Check, PieChart, MapPin, Shield, Compass } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

export const metadata: Metadata = {
  title: 'Аналитика и стратегия | SwissTech',
  description: 'Принимайте решения на основе данных. Анализ рынка, конкурентов, аудит систем — готовый план действий с прогнозом результатов.'
};

export default function ResearchPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const services = [
    {
      icon: <Target size={24} className="text-laser-cyan" />,
      title: 'Анализ конкурентов',
      description: 'Детальное изучение сильных и слабых сторон конкурентов, их стратегий, цен и позиционирования.'
    },
    {
      icon: <PieChart size={24} className="text-laser-cyan" />,
      title: 'Исследование рынка',
      description: 'Оценка объёма рынка, трендов, целевой аудитории и потенциала для вашего продукта или услуги.'
    },
    {
      icon: <FileSearch size={24} className="text-laser-cyan" />,
      title: 'Технологический аудит',
      description: 'Анализ текущих систем: архитектура, безопасность, производительность, технический долг.'
    },
    {
      icon: <MapPin size={24} className="text-laser-cyan" />,
      title: 'Стратегия выхода на рынок',
      description: 'План запуска продукта: каналы, позиционирование, ценообразование, первые 100 клиентов.'
    },
    {
      icon: <Compass size={24} className="text-laser-cyan" />,
      title: 'Дорожная карта развития',
      description: 'Пошаговый план цифровой трансформации с приоритетами, сроками и бюджетом.'
    },
    {
      icon: <Shield size={24} className="text-laser-cyan" />,
      title: 'Оценка рисков',
      description: 'Идентификация технических, рыночных и регуляторных рисков с планом митигации.'
    }
  ];

  const deliverables = [
    { title: 'Отчёт с данными', desc: 'Структурированный анализ с графиками, таблицами и источниками' },
    { title: 'Выводы и инсайты', desc: 'Ключевые находки, которые влияют на ваши решения' },
    { title: 'Рекомендации', desc: 'Конкретные шаги: что делать, в каком порядке, с какими ресурсами' },
    { title: 'План действий', desc: 'Готовая дорожная карта с этапами, сроками и KPI' },
    { title: 'Презентация', desc: 'Материалы для презентации инвесторам или команде' },
    { title: 'Консультация', desc: '2 часа обсуждения результатов с экспертом' }
  ];

  const comparison = {
    intuition: [
      'Решения на основе «чувства рынка»',
      'Копирование конкурентов без понимания',
      'Затраты на неработающие гипотезы',
      'Пропущенные возможности роста',
      'Сюрпризы от регуляторов и рынка',
      'Сложно убедить инвесторов'
    ],
    data: [
      'Решения подкреплены цифрами',
      'Понимание своей уникальной позиции',
      'Инвестиции в проверенные направления',
      'Системный поиск точек роста',
      'Готовность к изменениям рынка',
      'Убедительные аргументы для стейкхолдеров'
    ]
  };

  const process = [
    { step: '01', title: 'Бриф', desc: 'Определяем цели исследования, вопросы, на которые нужно ответить' },
    { step: '02', title: 'Сбор данных', desc: 'Анализ открытых источников, интервью, опросы, технический аудит' },
    { step: '03', title: 'Анализ', desc: 'Структурируем данные, находим паттерны и инсайты' },
    { step: '04', title: 'Отчёт', desc: 'Готовим документ с выводами, рекомендациями и планом действий' }
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
            <BarChart3 size={28} className="text-laser-cyan" />
            <span className="font-display font-bold text-lg text-mist-100">Аналитика и стратегия</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mist-100 mb-6 leading-tight">
            Решения на основе данных,<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">а не догадок</span>
          </h1>
          
          <p className="text-mist-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Хватит гадать. Мы проводим исследования, которые дают ответы: что происходит на рынке, 
            чем занимаются конкуренты, куда двигаться вашему бизнесу. Вы получаете не просто отчёт — 
            готовый план действий с прогнозом результатов.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-laser-cyan to-laser-blue text-void-900 font-semibold hover:opacity-90 transition-opacity">
              Виды исследований
              <ArrowRight size={18} />
            </a>
            <a href="#deliverables" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-mist-300 hover:text-mist-100 hover:border-white/20 transition-colors">
              Что вы получите
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-6">
            Знакомые ситуации?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {[
              'Запускаете продукт, но не знаете рынок',
              'Конкуренты растут, а вы не понимаете почему',
              'Инвесторы требуют данные, а их нет',
              'Системы устарели, но непонятно с чего начать',
              'Много идей, но нет критериев выбора',
              'Тратите бюджет на неэффективные каналы'
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <X size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-mist-300">{problem}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-mist-400 text-lg">
            Аналитика превращает неопределённость в понятный план действий.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Виды исследований
            </h2>
            <p className="text-mist-400 text-lg max-w-2xl mx-auto">
              Выберите то, что нужно вашему бизнесу сейчас
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="p-6 rounded-2xl bg-void-900/60 border border-laser-cyan/10 hover:border-laser-cyan/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-laser-cyan/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-mist-100 mb-2">{service.title}</h3>
                <p className="text-mist-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Интуиция vs Данные
            </h2>
            <p className="text-mist-400 text-lg">
              Как меняется бизнес с аналитикой
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Intuition */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium">
                Без аналитики
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-red-500/20">
                <ul className="space-y-4">
                  {comparison.intuition.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X size={18} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-mist-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Data */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-laser-cyan/20 border border-laser-cyan/30 text-laser-cyan text-sm font-medium">
                С аналитикой
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-laser-cyan/20">
                <ul className="space-y-4">
                  {comparison.data.map((item, i) => (
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

      {/* Deliverables */}
      <section id="deliverables" className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Что вы получите
            </h2>
            <p className="text-mist-400 text-lg">
              Результат исследования — не папка с файлами, а инструмент для принятия решений
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-void-900/60 border border-white/5 hover:border-laser-cyan/20 transition-colors">
                <h3 className="font-display text-base font-semibold text-laser-cyan mb-2">{item.title}</h3>
                <p className="text-mist-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Как проходит исследование
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-void-950 border border-white/5">
                <span className="font-mono text-4xl font-bold text-laser-cyan/20">{item.step}</span>
                <h3 className="font-display text-lg font-semibold text-mist-100 mt-2 mb-2">{item.title}</h3>
                <p className="text-mist-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Когда нужна аналитика
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Запуск нового продукта', desc: 'Понять рынок, конкурентов и целевую аудиторию до старта разработки' },
              { title: 'Выход на новый рынок', desc: 'Оценить потенциал, регуляторику и локальную специфику' },
              { title: 'Привлечение инвестиций', desc: 'Подготовить data room с рыночной аналитикой для инвесторов' },
              { title: 'Цифровая трансформация', desc: 'Провести аудит текущих систем и составить план модернизации' },
              { title: 'Оптимизация маркетинга', desc: 'Найти эффективные каналы и перераспределить бюджет' },
              { title: 'Стратегическое планирование', desc: 'Определить приоритеты развития на основе данных' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-void-900/60 border border-white/5 hover:border-laser-cyan/20 transition-colors">
                <h3 className="font-display text-base font-semibold text-mist-100 mb-2">{item.title}</h3>
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
              Результаты наших исследований
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'проведённых исследований' },
              { value: '2-4', label: 'недели на проект' },
              { value: '85%', label: 'рекомендаций внедрено' },
              { value: '3×', label: 'ROI в среднем' }
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
              { q: 'Сколько стоит исследование?', a: 'Зависит от глубины и объёма: экспресс-анализ конкурентов от 2000 CHF, комплексное исследование рынка от 8000 CHF. Точную стоимость назовём после обсуждения задачи.' },
              { q: 'Какие источники данных вы используете?', a: 'Открытые данные (Statista, отраслевые отчёты), парсинг конкурентов, интервью с экспертами рынка, опросы целевой аудитории, технический аудит систем.' },
              { q: 'Вы работаете с конфиденциальной информацией?', a: 'Да, подписываем NDA. Вся информация хранится безопасно, доступ только у участников проекта. После завершения — удаление по запросу.' },
              { q: 'Можно ли получить только часть исследования?', a: 'Да, мы делаем модульные исследования. Например, только анализ конкурентов или только технический аудит. Комплекс обычно выгоднее, но не обязателен.' }
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
