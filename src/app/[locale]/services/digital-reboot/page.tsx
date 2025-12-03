import { Metadata } from 'next';
import { Rocket, TrendingUp, Clock, Users, Zap, ShieldCheck, ArrowRight, X, Check } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

export const metadata: Metadata = {
  title: 'Цифровая перезагрузка бизнеса | SwissTech',
  description: 'Полная трансформация устаревшего бизнеса в современную цифровую экосистему. Редизайн, автоматизация, интеграции — результат с первого дня.'
};

export default function DigitalRebootPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const benefits = [
    {
      icon: <TrendingUp size={24} className="text-laser-cyan" />,
      title: 'Рост конверсии до 3×',
      description: 'Современный UX, быстрая загрузка и чёткие CTA превращают посетителей в клиентов.'
    },
    {
      icon: <Clock size={24} className="text-laser-cyan" />,
      title: 'Экономия 20+ часов в неделю',
      description: 'Автоматизация рутины: отчёты, уведомления, синхронизация данных — всё работает без вас.'
    },
    {
      icon: <Users size={24} className="text-laser-cyan" />,
      title: 'Команда работает эффективнее',
      description: 'Единая система вместо десятка разрозненных инструментов. Меньше хаоса, больше результата.'
    },
    {
      icon: <Zap size={24} className="text-laser-cyan" />,
      title: 'Запуск за 4-8 недель',
      description: 'Не годы разработки, а быстрый результат. Итеративный подход: первые улучшения видны сразу.'
    },
    {
      icon: <ShieldCheck size={24} className="text-laser-cyan" />,
      title: 'Безопасность и GDPR',
      description: 'Соответствие европейским стандартам защиты данных. Шифрование, аудит, контроль доступа.'
    },
    {
      icon: <ArrowRight size={24} className="text-laser-cyan" />,
      title: 'Масштабируемость',
      description: 'Архитектура, которая растёт вместе с бизнесом. Добавляйте функции без переделки основы.'
    }
  ];

  const beforeAfter = {
    before: [
      'Устаревший сайт с низкой конверсией',
      'Ручная обработка заявок в Excel',
      'Клиенты ждут ответа часами',
      'Данные разбросаны по разным системам',
      'Сотрудники тратят время на рутину',
      'Нет аналитики — решения на интуиции',
      'Каждое изменение — боль и затраты'
    ],
    after: [
      'Современный сайт с конверсией выше рынка',
      'CRM автоматически обрабатывает лиды',
      'Бот отвечает клиентам мгновенно 24/7',
      'Единая экосистема с синхронизацией',
      'Автоматизация освобождает 20+ ч/нед',
      'Дашборды с метриками в реальном времени',
      'Гибкая система — изменения за часы'
    ]
  };

  return (
    <main className="relative min-h-screen bg-void-950">
      <Navigation locale={locale} />
      
      {/* Hero */}
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-cyan/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-laser-cyan/30 bg-laser-cyan/5 mb-6">
            <Rocket size={28} className="text-laser-cyan" />
            <span className="font-display font-bold text-lg text-mist-100">Цифровая перезагрузка</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mist-100 mb-6 leading-tight">
            Превратите устаревший бизнес<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">в цифровую машину роста</span>
          </h1>
          
          <p className="text-mist-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Полный ребут: от древнего сайта и хаоса в процессах — к современной экосистеме, 
            которая продаёт, автоматизирует и масштабируется. Клиенты видят разницу с первого клика.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#benefits" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-laser-cyan to-laser-blue text-void-900 font-semibold hover:opacity-90 transition-opacity">
              Узнать подробнее
              <ArrowRight size={18} />
            </a>
            <a href="#before-after" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-mist-300 hover:text-mist-100 hover:border-white/20 transition-colors">
              Смотреть До / После
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-6">
            Знакомо?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {[
              'Сайт выглядит как из 2010 года',
              'Конкуренты забирают ваших клиентов',
              'Менеджеры тонут в рутине',
              'Нет понимания, что работает, а что нет',
              'Каждое изменение стоит времени и денег',
              'Клиенты уходят, не дождавшись ответа'
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <X size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-mist-300">{problem}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-mist-400 text-lg">
            Это не приговор. Это точка, с которой начинается трансформация.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Что вы получите
            </h2>
            <p className="text-mist-400 text-lg max-w-2xl mx-auto">
              Не просто новый сайт — полноценную цифровую экосистему, которая работает на ваш бизнес
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

      {/* Before / After */}
      <section id="before-after" className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              До и После
            </h2>
            <p className="text-mist-400 text-lg">
              Реальная разница, которую видят наши клиенты
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium">
                До
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-red-500/20">
                <ul className="space-y-4">
                  {beforeAfter.before.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X size={18} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-mist-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* After */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-laser-cyan/20 border border-laser-cyan/30 text-laser-cyan text-sm font-medium">
                После
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-laser-cyan/20">
                <ul className="space-y-4">
                  {beforeAfter.after.map((item, i) => (
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

      {/* What's Included */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Что входит в перезагрузку
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Редизайн сайта', desc: 'Современный UI/UX, быстрая загрузка, мобильная версия, SEO' },
              { title: 'CRM-система', desc: 'Автоматизация продаж, воронки, задачи, интеграции' },
              { title: 'Telegram-бот', desc: 'Поддержка клиентов 24/7, уведомления, приём заявок' },
              { title: 'Аналитика', desc: 'Дашборды, метрики, отчёты в реальном времени' },
              { title: 'Автоматизация', desc: 'Email-цепочки, напоминания, синхронизация данных' },
              { title: 'Интеграции', desc: 'Платёжные системы, доставка, внешние сервисы' },
              { title: 'Обучение', desc: 'Видео-гайды и документация для вашей команды' },
              { title: 'Поддержка', desc: 'Техническая поддержка и обновления после запуска' }
            ].map((item, i) => (
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
              Как это работает
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Аудит', desc: 'Анализируем текущее состояние: сайт, процессы, инструменты, болевые точки' },
              { step: '02', title: 'Стратегия', desc: 'Составляем план трансформации с приоритетами и сроками' },
              { step: '03', title: 'Реализация', desc: 'Поэтапное внедрение: сначала критичное, затем улучшения' },
              { step: '04', title: 'Запуск', desc: 'Тестирование, обучение команды, мониторинг и оптимизация' }
            ].map((item, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-void-950 border border-white/5">
                <span className="font-mono text-4xl font-bold text-laser-cyan/20">{item.step}</span>
                <h3 className="font-display text-lg font-semibold text-mist-100 mt-2 mb-2">{item.title}</h3>
                <p className="text-mist-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Результаты клиентов
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '3×', label: 'рост конверсии' },
              { value: '-60%', label: 'времени на рутину' },
              { value: '24/7', label: 'поддержка клиентов' },
              { value: '4-8', label: 'недель до запуска' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-void-900/60 border border-laser-cyan/10">
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
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-4">
              Частые вопросы
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'Сколько это стоит?', a: 'Зависит от масштаба: от простого редизайна до полной экосистемы. Мы оцениваем после аудита и предлагаем варианты под ваш бюджет. Первичная консультация бесплатна.' },
              { q: 'Как долго займёт трансформация?', a: 'Базовая перезагрузка — 4-8 недель. Комплексная экосистема — 2-4 месяца. Мы работаем итерациями: первые результаты вы увидите уже через 2-3 недели.' },
              { q: 'Что если у нас нет технической команды?', a: 'Это не проблема. Мы берём на себя всю техническую часть и обучаем вашу команду работе с новыми инструментами. После запуска — поддержка и консультации.' },
              { q: 'Можно ли начать с малого?', a: 'Да, мы рекомендуем начинать с самого болезненного участка. Например, сначала сайт, затем CRM, затем автоматизация. Поэтапный подход снижает риски и распределяет бюджет.' }
            ].map((faq, i) => (
              <details key={i} className="group p-5 rounded-2xl bg-void-950 border border-white/5 hover:border-laser-cyan/20 transition-colors">
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
