import { Metadata } from 'next';
import { Bot, MessageSquare, CreditCard, Zap, Clock, Users, ArrowRight, X, Check, Bell, ShoppingCart, BarChart3, Headphones, Webhook, Brain } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

export const metadata: Metadata = {
  title: 'Telegram-боты | SwissTech',
  description: 'Разработка Telegram-ботов для бизнеса: автоматизация продаж, поддержка клиентов 24/7, интеграция с CRM и платёжными системами.'
};

export default function TelegramBotsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const benefits = [
    {
      icon: <Clock size={24} className="text-laser-cyan" />,
      title: 'Поддержка 24/7 без персонала',
      description: 'Бот отвечает клиентам мгновенно в любое время. Выходные, праздники, ночь — всегда на связи.'
    },
    {
      icon: <Zap size={24} className="text-laser-cyan" />,
      title: 'Автоматизация рутины',
      description: 'Приём заявок, ответы на FAQ, уведомления, напоминания — бот делает это без участия менеджеров.'
    },
    {
      icon: <CreditCard size={24} className="text-laser-cyan" />,
      title: 'Приём платежей',
      description: 'Интеграция с платёжными системами: клиенты покупают прямо в Telegram без перехода на сайт.'
    },
    {
      icon: <Users size={24} className="text-laser-cyan" />,
      title: '900+ млн пользователей',
      description: 'Telegram — один из самых популярных мессенджеров. Ваши клиенты уже там.'
    },
    {
      icon: <BarChart3 size={24} className="text-laser-cyan" />,
      title: 'Аналитика и метрики',
      description: 'Отслеживайте конверсии, популярные запросы, время ответа — принимайте решения на основе данных.'
    },
    {
      icon: <Brain size={24} className="text-laser-cyan" />,
      title: 'ИИ и NLP',
      description: 'Умные боты с GPT-интеграцией понимают естественный язык и ведут осмысленные диалоги.'
    }
  ];

  const useCases = [
    { icon: <Headphones size={20} className="text-laser-cyan" />, title: 'Клиентская поддержка', desc: 'Ответы на FAQ, маршрутизация запросов, эскалация на живого оператора' },
    { icon: <ShoppingCart size={20} className="text-laser-cyan" />, title: 'Продажи и заказы', desc: 'Каталог товаров, корзина, оформление и оплата без выхода из Telegram' },
    { icon: <Bell size={20} className="text-laser-cyan" />, title: 'Уведомления', desc: 'Статусы заказов, напоминания, алерты для команды' },
    { icon: <Users size={20} className="text-laser-cyan" />, title: 'HR и рекрутинг', desc: 'Приём резюме, скрининг кандидатов, онбординг сотрудников' },
    { icon: <Webhook size={20} className="text-laser-cyan" />, title: 'Интеграции', desc: 'Связь с CRM, ERP, Google Sheets, платёжками и любыми API' },
    { icon: <BarChart3 size={20} className="text-laser-cyan" />, title: 'Опросы и сбор данных', desc: 'Формы обратной связи, NPS, анкетирование клиентов' }
  ];

  const features = [
    'Многоуровневые меню и inline-кнопки',
    'Персонализация по данным пользователя',
    'Мультиязычность',
    'Интеграция с ChatGPT / Claude',
    'Webhook и API интеграции',
    'Приём платежей (Stripe, криптовалюты)',
    'Админ-панель для управления',
    'Аналитика и отчёты'
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
            <Bot size={28} className="text-laser-cyan" />
            <span className="font-display font-bold text-lg text-mist-100">Telegram-боты</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mist-100 mb-6 leading-tight">
            Ваш бизнес в кармане<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">каждого клиента</span>
          </h1>
          
          <p className="text-mist-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Telegram-боты, которые продают, поддерживают и автоматизируют. Мгновенные ответы 24/7, 
            приём платежей, интеграция с вашими системами. Клиенты получают сервис там, 
            где им удобно — в любимом мессенджере.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#benefits" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-laser-cyan to-laser-blue text-void-900 font-semibold hover:opacity-90 transition-opacity">
              Зачем нужен бот
              <ArrowRight size={18} />
            </a>
            <a href="#usecases" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-mist-300 hover:text-mist-100 hover:border-white/20 transition-colors">
              Примеры применения
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
              'Клиенты пишут ночью — ответа нет до утра',
              'Менеджеры тратят время на одинаковые вопросы',
              'Заявки теряются между каналами',
              'Клиенты уходят к конкурентам с быстрым ответом',
              'Сложно отслеживать все обращения',
              'Нет продаж в выходные и праздники'
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <X size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-mist-300">{problem}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-mist-400 text-lg">
            Telegram-бот решает эти проблемы автоматически и работает без перерывов.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Зачем бизнесу Telegram-бот
            </h2>
            <p className="text-mist-400 text-lg max-w-2xl mx-auto">
              Автоматизация, которая окупается с первого месяца
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

      {/* Use Cases */}
      <section id="usecases" className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Что умеют наши боты
            </h2>
            <p className="text-mist-400 text-lg">
              Типичные сценарии использования
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <div key={i} className="p-5 rounded-xl bg-void-950 border border-white/5 hover:border-laser-cyan/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  {useCase.icon}
                  <h3 className="font-display text-base font-semibold text-mist-100">{useCase.title}</h3>
                </div>
                <p className="text-mist-400 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Возможности ботов
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-void-900/60 border border-white/5">
                <Check size={20} className="text-laser-cyan flex-shrink-0" />
                <span className="text-mist-100">{feature}</span>
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
              Как мы создаём ботов
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Анализ', desc: 'Изучаем ваши процессы и определяем, что автоматизировать' },
              { step: '02', title: 'Проектирование', desc: 'Создаём схему диалогов, меню и интеграций' },
              { step: '03', title: 'Разработка', desc: 'Программируем бота, подключаем API и платежи' },
              { step: '04', title: 'Запуск', desc: 'Тестирование, обучение команды, поддержка' }
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
              Результаты наших ботов
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '-60%', label: 'нагрузки на поддержку' },
              { value: '24/7', label: 'доступность' },
              { value: '<3 сек', label: 'время ответа' },
              { value: '+40%', label: 'конверсия в продажи' }
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

      {/* Pricing hint */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-4">
            Стоимость
          </h2>
          <p className="text-mist-400 text-lg mb-8 max-w-2xl mx-auto">
            Цена зависит от сложности: простой бот для FAQ — от 1500 CHF, 
            бот с платежами и интеграциями — от 4000 CHF, 
            enterprise-решение с ИИ — индивидуально.
          </p>
          <div className="inline-flex items-center gap-2 text-laser-cyan">
            <MessageSquare size={20} />
            <span>Бесплатная консультация — расскажем, что нужно именно вам</span>
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
              { q: 'Сколько времени занимает разработка?', a: 'Простой бот — 1-2 недели, средней сложности с интеграциями — 3-4 недели, сложный enterprise — 1-2 месяца. Первую рабочую версию показываем через неделю.' },
              { q: 'Можно ли подключить к нашей CRM?', a: 'Да, интегрируем с любыми системами через API: amoCRM, Bitrix24, Salesforce, HubSpot, 1С, Google Sheets и кастомные решения.' },
              { q: 'Как бот понимает разные формулировки?', a: 'Используем NLP и интеграцию с ChatGPT/Claude для понимания естественного языка. Бот распознаёт намерения даже при опечатках.' },
              { q: 'Что если бот не знает ответ?', a: 'Настраиваем эскалацию на живого оператора. Бот передаёт контекст разговора, чтобы клиенту не пришлось повторять.' }
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
