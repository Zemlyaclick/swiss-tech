import { Metadata } from 'next';
import { Wrench, TrendingUp, Shield, Zap, Clock, Users, ArrowRight, X, Check, Code2, RefreshCcw, Layers, Bug, Gauge, GitMerge } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

export const metadata: Metadata = {
  title: 'Модернизация систем | SwissTech',
  description: 'Превратите устаревший легаси-код в современную масштабируемую систему. Рефакторинг, апгрейд платформы, улучшение производительности.'
};

export default function ModernizationPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const benefits = [
    {
      icon: <Zap size={24} className="text-laser-cyan" />,
      title: 'Ускорение разработки в 3×',
      description: 'Чистый код, модульная архитектура и автотесты — новые фичи выходят быстрее и без страха сломать старое.'
    },
    {
      icon: <TrendingUp size={24} className="text-laser-cyan" />,
      title: 'Снижение затрат на поддержку',
      description: 'Меньше багов, проще онбординг новых разработчиков, документация и понятная структура.'
    },
    {
      icon: <Gauge size={24} className="text-laser-cyan" />,
      title: 'Рост производительности',
      description: 'Оптимизация запросов, кэширование, современные фреймворки — система работает быстрее.'
    },
    {
      icon: <Shield size={24} className="text-laser-cyan" />,
      title: 'Безопасность и compliance',
      description: 'Обновление зависимостей, устранение уязвимостей, соответствие современным стандартам.'
    },
    {
      icon: <Users size={24} className="text-laser-cyan" />,
      title: 'Привлекательность для талантов',
      description: 'Разработчики хотят работать с современным стеком. Легче нанимать и удерживать команду.'
    },
    {
      icon: <RefreshCcw size={24} className="text-laser-cyan" />,
      title: 'Готовность к масштабированию',
      description: 'Архитектура, которая растёт вместе с бизнесом. Микросервисы, контейнеры, облако.'
    }
  ];

  const comparison = {
    legacy: [
      'Каждое изменение — риск сломать всё',
      'Новые фичи занимают месяцы',
      'Разработчики боятся трогать код',
      'Документация устарела или отсутствует',
      'Уязвимости в старых зависимостях',
      'Невозможно масштабировать',
      'Сложно найти специалистов'
    ],
    modern: [
      'Уверенный деплой с автотестами',
      'Релизы каждую неделю',
      'Код понятен и предсказуем',
      'Актуальная документация и типизация',
      'Современные безопасные зависимости',
      'Горизонтальное масштабирование',
      'Привлекательный стек для найма'
    ]
  };

  const services = [
    { icon: <Code2 size={20} className="text-laser-cyan" />, title: 'Рефакторинг кода', desc: 'Улучшение структуры без изменения функциональности' },
    { icon: <Layers size={20} className="text-laser-cyan" />, title: 'Модернизация архитектуры', desc: 'От монолита к микросервисам или модульному монолиту' },
    { icon: <RefreshCcw size={20} className="text-laser-cyan" />, title: 'Апгрейд платформы', desc: 'Обновление языка, фреймворка, базы данных' },
    { icon: <Bug size={20} className="text-laser-cyan" />, title: 'Покрытие тестами', desc: 'Unit, integration, e2e тесты для безопасных изменений' },
    { icon: <GitMerge size={20} className="text-laser-cyan" />, title: 'CI/CD пайплайны', desc: 'Автоматизация сборки, тестирования и деплоя' },
    { icon: <Shield size={20} className="text-laser-cyan" />, title: 'Security hardening', desc: 'Аудит безопасности и устранение уязвимостей' }
  ];

  const scenarios = [
    { title: 'PHP 5 → PHP 8 / Laravel', desc: 'Обновление legacy WordPress или custom PHP до современного стека' },
    { title: 'jQuery → React / Vue', desc: 'Миграция фронтенда на компонентную архитектуру' },
    { title: 'Монолит → Микросервисы', desc: 'Декомпозиция большой системы на управляемые сервисы' },
    { title: 'On-premise → Cloud', desc: 'Перенос в облако с контейнеризацией' },
    { title: 'Python 2 → Python 3', desc: 'Миграция с устаревшей версии языка' },
    { title: '.NET Framework → .NET 8', desc: 'Модернизация Windows-приложений' }
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
            <Wrench size={28} className="text-laser-cyan" />
            <span className="font-display font-bold text-lg text-mist-100">Модернизация систем</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mist-100 mb-6 leading-tight">
            Превратите легаси<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">в конкурентное преимущество</span>
          </h1>
          
          <p className="text-mist-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Устаревший код тормозит бизнес? Мы модернизируем системы без остановки работы: 
            рефакторинг, апгрейд платформы, улучшение архитектуры. Результат — быстрая, 
            безопасная и масштабируемая система.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#benefits" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-laser-cyan to-laser-blue text-void-900 font-semibold hover:opacity-90 transition-opacity">
              Зачем модернизировать
              <ArrowRight size={18} />
            </a>
            <a href="#scenarios" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-mist-300 hover:text-mist-100 hover:border-white/20 transition-colors">
              Примеры миграций
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-6">
            Знакомые симптомы?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {[
              '«Не трогай, оно работает» — девиз команды',
              'Простая фича занимает недели',
              'Разработчики увольняются из-за легаси',
              'Баги возвращаются снова и снова',
              'Страх перед каждым деплоем',
              'Невозможно обновить зависимости'
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <X size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-mist-300">{problem}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-mist-400 text-lg">
            Технический долг накапливается годами, но расплачиваться приходится каждый день.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Зачем модернизировать
            </h2>
            <p className="text-mist-400 text-lg max-w-2xl mx-auto">
              Инвестиция в модернизацию окупается быстрее, чем кажется
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

      {/* Comparison */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Легаси vs Модерн
            </h2>
            <p className="text-mist-400 text-lg">
              Как меняется разработка после модернизации
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Legacy */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium">
                Легаси
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-red-500/20">
                <ul className="space-y-4">
                  {comparison.legacy.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X size={18} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-mist-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Modern */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-laser-cyan/20 border border-laser-cyan/30 text-laser-cyan text-sm font-medium">
                После модернизации
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-laser-cyan/20">
                <ul className="space-y-4">
                  {comparison.modern.map((item, i) => (
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

      {/* Services */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Что мы делаем
            </h2>
            <p className="text-mist-400 text-lg">
              Комплексный подход к модернизации
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

      {/* Migration Scenarios */}
      <section id="scenarios" className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Примеры миграций
            </h2>
            <p className="text-mist-400 text-lg">
              Типичные сценарии модернизации
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, i) => (
              <div key={i} className="p-5 rounded-xl bg-void-950 border border-white/5 hover:border-laser-cyan/20 transition-colors">
                <h3 className="font-display text-base font-semibold text-laser-cyan mb-2">{scenario.title}</h3>
                <p className="text-mist-400 text-sm">{scenario.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Как мы модернизируем
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Аудит', desc: 'Анализ кода, архитектуры, зависимостей и технического долга' },
              { step: '02', title: 'Стратегия', desc: 'Выбор подхода: strangler fig, big bang или поэтапная миграция' },
              { step: '03', title: 'Реализация', desc: 'Итеративная модернизация с сохранением работоспособности' },
              { step: '04', title: 'Передача', desc: 'Документация, обучение команды, поддержка после запуска' }
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
              Результаты модернизации
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '3×', label: 'скорость разработки' },
              { value: '-60%', label: 'багов в продакшене' },
              { value: '80%', label: 'покрытие тестами' },
              { value: '0', label: 'downtime при миграции' }
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
              { q: 'Можно ли модернизировать без остановки бизнеса?', a: 'Да, мы используем паттерн Strangler Fig — новые части системы запускаются параллельно со старыми, трафик переключается постепенно. Бизнес работает без перерывов.' },
              { q: 'Сколько времени займёт модернизация?', a: 'Зависит от размера и сложности системы. Небольшие проекты — 1-2 месяца, крупные enterprise-системы — 6-12 месяцев. Мы работаем итерациями, первые улучшения видны через 2-4 недели.' },
              { q: 'Что если команда не знает новый стек?', a: 'Мы обучаем вашу команду в процессе модернизации: pair programming, code review, воркшопы. После передачи проекта команда уверенно работает с новым кодом.' },
              { q: 'Не проще ли написать с нуля?', a: 'Переписывание с нуля — это годы разработки, потеря бизнес-логики и высокие риски. Модернизация сохраняет накопленные знания и даёт результат быстрее.' }
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
