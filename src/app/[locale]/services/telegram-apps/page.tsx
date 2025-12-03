import { Metadata } from 'next';
import { Smartphone, Zap, CreditCard, Users, Globe, Gauge, ArrowRight, X, Check, ShoppingCart, Calendar, Ticket, Gamepad2, Wallet, LayoutGrid } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

export const metadata: Metadata = {
  title: 'Telegram Mini Apps | SwissTech',
  description: 'Разработка Telegram Mini Apps: интернет-магазины, сервисы бронирования, личные кабинеты. 900+ млн пользователей без установки из App Store.'
};

export default function TelegramAppsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const benefits = [
    {
      icon: <Zap size={24} className="text-laser-cyan" />,
      title: 'Без установки',
      description: 'Приложение открывается прямо в Telegram — не нужно скачивать из App Store или Google Play.'
    },
    {
      icon: <Users size={24} className="text-laser-cyan" />,
      title: '900+ млн аудитория',
      description: 'Доступ к огромной базе пользователей Telegram. Ваше приложение там, где уже есть клиенты.'
    },
    {
      icon: <CreditCard size={24} className="text-laser-cyan" />,
      title: 'Встроенные платежи',
      description: 'Telegram Payments, криптовалюты, Stars — пользователи платят в пару кликов без ввода карты.'
    },
    {
      icon: <Gauge size={24} className="text-laser-cyan" />,
      title: 'Мгновенный запуск',
      description: 'Разработка быстрее и дешевле, чем нативное приложение. MVP за 2-4 недели.'
    },
    {
      icon: <Globe size={24} className="text-laser-cyan" />,
      title: 'Кроссплатформенность',
      description: 'Работает на iOS, Android, Desktop и Web — один код для всех платформ.'
    },
    {
      icon: <Smartphone size={24} className="text-laser-cyan" />,
      title: 'Нативные функции',
      description: 'Доступ к камере, геолокации, контактам, биометрии — как в обычном приложении.'
    }
  ];

  const useCases = [
    { icon: <ShoppingCart size={20} className="text-laser-cyan" />, title: 'E-commerce', desc: 'Полноценные интернет-магазины с каталогом, корзиной и оплатой' },
    { icon: <Calendar size={20} className="text-laser-cyan" />, title: 'Бронирование', desc: 'Запись на услуги, бронирование столиков, билетов, консультаций' },
    { icon: <Wallet size={20} className="text-laser-cyan" />, title: 'Финансы', desc: 'Кошельки, p2p-переводы, инвестиционные платформы' },
    { icon: <Ticket size={20} className="text-laser-cyan" />, title: 'Лояльность', desc: 'Программы лояльности, бонусные карты, скидочные купоны' },
    { icon: <Gamepad2 size={20} className="text-laser-cyan" />, title: 'Игры', desc: 'Казуальные игры, квизы, конкурсы с призами' },
    { icon: <LayoutGrid size={20} className="text-laser-cyan" />, title: 'Личные кабинеты', desc: 'Управление подписками, история заказов, настройки профиля' }
  ];

  const features = [
    'Полноэкранный режим и нативные жесты',
    'Авторизация через Telegram (без регистрации)',
    'Push-уведомления и напоминания',
    'Telegram Payments и TON/криптовалюты',
    'Интеграция с ботами и каналами',
    'Геолокация и карты',
    'Офлайн-режим и кэширование',
    'Тёмная тема и адаптивный дизайн'
  ];

  const comparison = {
    native: [
      'Разработка 3-6 месяцев',
      'Отдельные команды iOS + Android',
      'Модерация App Store/Google Play',
      'Сложность с обновлениями',
      'Нужно убедить скачать',
      'Высокая стоимость: $50K+'
    ],
    miniapp: [
      'Разработка 2-8 недель',
      'Одна команда, один код',
      'Без модерации магазинов',
      'Мгновенные обновления',
      'Уже установлен у клиентов',
      'Стоимость от 5K CHF'
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
            <Smartphone size={28} className="text-laser-cyan" />
            <span className="font-display font-bold text-lg text-mist-100">Telegram Mini Apps</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mist-100 mb-6 leading-tight">
            Приложение без App Store<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">в кармане 900 млн человек</span>
          </h1>
          
          <p className="text-mist-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Telegram Mini Apps — полноценные приложения внутри мессенджера. Интернет-магазины, 
            сервисы бронирования, игры, финансовые инструменты. Без скачивания, без модерации, 
            с мгновенными платежами. Ваш бизнес там, где уже есть клиенты.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#benefits" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-laser-cyan to-laser-blue text-void-900 font-semibold hover:opacity-90 transition-opacity">
              Преимущества Mini Apps
              <ArrowRight size={18} />
            </a>
            <a href="#comparison" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-mist-300 hover:text-mist-100 hover:border-white/20 transition-colors">
              Сравнить с нативным
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-6">
            Зачем делать нативное приложение?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {[
              'Месяцы разработки и десятки тысяч $',
              'Пользователи не хотят ничего скачивать',
              'Модерация App Store затягивается',
              '80% приложений удаляют после первого использования',
              'Нужны отдельные команды iOS и Android',
              'Сложно конкурировать с гигантами в сторах'
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <X size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-mist-300">{problem}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-mist-400 text-lg">
            Mini App решает все эти проблемы — и запускается в разы быстрее.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Почему Mini Apps
            </h2>
            <p className="text-mist-400 text-lg max-w-2xl mx-auto">
              Все преимущества мобильного приложения без его недостатков
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
      <section id="comparison" className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Нативное vs Mini App
            </h2>
            <p className="text-mist-400 text-lg">
              Сравните и выберите оптимальный путь
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Native */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium">
                Нативное приложение
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-red-500/20">
                <ul className="space-y-4">
                  {comparison.native.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X size={18} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-mist-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Mini App */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-laser-cyan/20 border border-laser-cyan/30 text-laser-cyan text-sm font-medium">
                Telegram Mini App
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-laser-cyan/20">
                <ul className="space-y-4">
                  {comparison.miniapp.map((item, i) => (
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

      {/* Use Cases */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Что можно создать
            </h2>
            <p className="text-mist-400 text-lg">
              Примеры успешных Mini Apps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <div key={i} className="p-5 rounded-xl bg-void-900/60 border border-white/5 hover:border-laser-cyan/20 transition-colors">
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
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Возможности платформы
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-void-950 border border-white/5">
                <Check size={20} className="text-laser-cyan flex-shrink-0" />
                <span className="text-mist-100">{feature}</span>
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
              Как мы создаём Mini Apps
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Концепция', desc: 'Определяем функции, UX-флоу и монетизацию' },
              { step: '02', title: 'Дизайн', desc: 'Создаём интерфейс под гайдлайны Telegram' },
              { step: '03', title: 'Разработка', desc: 'React/Vue + Telegram SDK, интеграции и платежи' },
              { step: '04', title: 'Запуск', desc: 'Тестирование, деплой и продвижение в Telegram' }
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
              Результаты Mini Apps
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10×', label: 'дешевле нативного' },
              { value: '2-8', label: 'недель до запуска' },
              { value: '70%', label: 'выше retention' },
              { value: '0', label: 'комиссии App Store' }
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

      {/* Pricing */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-4">
            Стоимость разработки
          </h2>
          <p className="text-mist-400 text-lg mb-8 max-w-2xl mx-auto">
            MVP Mini App — от 5000 CHF, средняя сложность с платежами — от 10000 CHF, 
            комплексное решение с интеграциями — от 20000 CHF.
          </p>
          <p className="text-laser-cyan">
            В 5-10 раз дешевле нативного приложения при сопоставимой функциональности.
          </p>
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
              { q: 'Чем Mini App отличается от бота?', a: 'Бот — это текстовый интерфейс с кнопками. Mini App — полноценное графическое приложение с любым UI. Можно комбинировать: бот для простых действий, Mini App для сложных.' },
              { q: 'Нужен ли отдельный сервер?', a: 'Да, Mini App — это веб-приложение, которому нужен бэкенд. Мы разворачиваем на облачных серверах с автоматическим масштабированием.' },
              { q: 'Как продвигать Mini App?', a: 'Через Telegram-каналы, ботов, рекламу в Telegram Ads. Также работает виральность — пользователи делятся приложениями с друзьями.' },
              { q: 'Можно ли принимать оплату в рублях?', a: 'Да, через Telegram Payments с подключением российских провайдеров. Также доступны криптовалюты и TON — универсальные способы для любых регионов.' }
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
