import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Check, 
  X, 
  ArrowRight, 
  Zap, 
  Star,
  HelpCircle,
  Clock,
  Users,
  Shield,
  Rocket,
  Calculator
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Цены и тарифы | Swiss Made IT',
  description: 'Прозрачное ценообразование на IT-услуги. Фиксированная цена, никаких скрытых платежей. От 3 000 CHF за проект.',
  keywords: ['цены', 'тарифы', 'стоимость разработки', 'IT услуги цены'],
};

export default async function PricingPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;

  const packages = [
    {
      name: 'Starter',
      description: 'Для небольших проектов и MVP',
      price: 'от 5 000',
      period: 'CHF',
      popular: false,
      features: [
        { text: 'Landing page или простой сайт', included: true },
        { text: 'До 5 страниц', included: true },
        { text: 'Адаптивный дизайн', included: true },
        { text: 'Базовое SEO', included: true },
        { text: 'Контактная форма', included: true },
        { text: 'SSL сертификат', included: true },
        { text: 'CMS-система', included: false },
        { text: 'Интеграции с внешними сервисами', included: false },
        { text: 'Индивидуальный дизайн', included: false },
      ],
      timeline: '2-3 недели',
      support: '3 месяца'
    },
    {
      name: 'Business',
      description: 'Для растущего бизнеса',
      price: 'от 15 000',
      period: 'CHF',
      popular: true,
      features: [
        { text: 'Корпоративный сайт или веб-приложение', included: true },
        { text: 'До 20 страниц/экранов', included: true },
        { text: 'Индивидуальный дизайн', included: true },
        { text: 'CMS-система', included: true },
        { text: 'Интеграции (CRM, платёжки)', included: true },
        { text: 'Продвинутое SEO', included: true },
        { text: 'Аналитика и отчёты', included: true },
        { text: 'Telegram-бот', included: true },
        { text: 'Приоритетная поддержка', included: false },
      ],
      timeline: '4-8 недель',
      support: '6 месяцев'
    },
    {
      name: 'Enterprise',
      description: 'Комплексные решения',
      price: 'от 50 000',
      period: 'CHF',
      popular: false,
      features: [
        { text: 'Сложные платформы и системы', included: true },
        { text: 'Неограниченный функционал', included: true },
        { text: 'Микросервисная архитектура', included: true },
        { text: 'Интеграция с enterprise-системами', included: true },
        { text: 'AI/ML интеграции', included: true },
        { text: 'Высокая нагрузка и масштабирование', included: true },
        { text: 'Выделенная команда', included: true },
        { text: 'SLA гарантии', included: true },
        { text: 'Приоритетная поддержка 24/7', included: true },
      ],
      timeline: '3-12 месяцев',
      support: 'Бессрочная'
    }
  ];

  const services = [
    { name: 'Telegram-бот (базовый)', price: 'от 3 000 CHF', time: '1-2 нед.' },
    { name: 'Telegram-бот (с AI)', price: 'от 8 000 CHF', time: '2-4 нед.' },
    { name: 'Telegram Mini App', price: 'от 10 000 CHF', time: '3-6 нед.' },
    { name: 'Landing page', price: 'от 3 000 CHF', time: '1-2 нед.' },
    { name: 'Корпоративный сайт', price: 'от 10 000 CHF', time: '3-6 нед.' },
    { name: 'Интернет-магазин', price: 'от 20 000 CHF', time: '6-10 нед.' },
    { name: 'Мобильное приложение', price: 'от 30 000 CHF', time: '8-16 нед.' },
    { name: 'Веб-приложение (SaaS)', price: 'от 40 000 CHF', time: '10-20 нед.' },
    { name: 'Аудит безопасности', price: 'от 5 000 CHF', time: '1-2 нед.' },
    { name: 'Консультация (час)', price: '200 CHF', time: '—' },
  ];

  const faqs = [
    {
      question: 'Почему «от» в ценах?',
      answer: 'Каждый проект уникален. Финальная цена зависит от сложности, объёма работы и требований к интеграциям. После обсуждения вашего проекта мы даём точную фиксированную оценку — без сюрпризов в процессе.'
    },
    {
      question: 'Есть ли скрытые платежи?',
      answer: 'Нет. Мы называем полную стоимость до начала работы. Хостинг, домен и внешние сервисы (Stripe, SMS и т.д.) оплачиваются отдельно по их тарифам, но мы всегда предупреждаем об этом заранее.'
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Стандартная схема: 30% предоплата, 40% после согласования дизайна/MVP, 30% при сдаче проекта. Для крупных проектов возможна помесячная оплата по milestone-модели.'
    },
    {
      question: 'Что входит в поддержку?',
      answer: 'Базовая поддержка включает: исправление багов, мелкие доработки, консультации, обновления безопасности. Крупные изменения и новый функционал обсуждаются отдельно.'
    },
    {
      question: 'Можно ли начать с MVP?',
      answer: 'Да, это наш рекомендуемый подход. Запускаем базовую версию за 4-8 недель, собираем обратную связь, развиваем. Это снижает риски и позволяет проверить гипотезы до больших инвестиций.'
    }
  ];

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        {/* Hero */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-blue/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-laser-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-laser-purple/10 rounded-full blur-3xl" />
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="inline-block px-4 py-2 bg-laser-cyan/10 border border-laser-cyan/30 rounded-full text-laser-cyan text-sm mb-6">
              Прозрачное ценообразование
            </span>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-white">Фиксированная цена. </span>
              <span className="bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple bg-clip-text text-transparent">
                Никаких сюрпризов.
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 max-w-2xl mx-auto">
              Мы называем точную стоимость до начала работы. Без скрытых платежей, 
              без почасовой оплаты, без «это будет стоить дополнительно».
            </p>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl border ${
                    pkg.popular 
                      ? 'bg-gradient-to-b from-laser-cyan/10 to-void-900/50 border-laser-cyan/30' 
                      : 'bg-void-900/50 border-mist-800/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-laser-cyan text-void-950 text-xs font-bold rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Популярный
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-mist-400">{pkg.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-mist-400 ml-2">{pkg.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-1 text-mist-400">
                      <Clock className="w-4 h-4" />
                      {pkg.timeline}
                    </div>
                    <div className="flex items-center gap-1 text-mist-400">
                      <Shield className="w-4 h-4" />
                      {pkg.support}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-laser-cyan flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-mist-600 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-mist-300' : 'text-mist-600'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`/${locale}/contact`}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-laser-cyan to-laser-blue text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25'
                        : 'border border-mist-700 text-mist-300 hover:border-laser-cyan hover:text-laser-cyan'
                    }`}
                  >
                    Обсудить проект
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Price List */}
        <section className="py-16 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">Прайс-лист</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Стоимость отдельных услуг
              </h2>
            </div>

            <div className="bg-void-900/50 border border-mist-800/50 rounded-xl overflow-hidden">
              {/* Desktop table header */}
              <div className="hidden md:grid grid-cols-3 gap-4 p-4 bg-void-800/50 text-sm font-semibold text-mist-400">
                <div>Услуга</div>
                <div className="text-right">Стоимость</div>
                <div className="text-right">Срок</div>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-4 border-t border-mist-800/30 hover:bg-void-800/30 transition-colors"
                >
                  {/* Mobile layout */}
                  <div className="md:hidden">
                    <div className="text-white font-medium mb-2">{service.name}</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-laser-cyan font-semibold">{service.price}</span>
                      <span className="text-mist-400">{service.time}</span>
                    </div>
                  </div>
                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-3 gap-4 items-center">
                    <div className="text-white">{service.name}</div>
                    <div className="text-right text-laser-cyan font-semibold">{service.price}</div>
                    <div className="text-right text-mist-400">{service.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-mist-500 text-sm mt-6">
              * Цены указаны ориентировочно. Точная стоимость определяется после обсуждения требований.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Что включено в каждый проект
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Пожизненная поддержка',
                  description: 'Исправление багов и консультации навсегда'
                },
                {
                  icon: Users,
                  title: 'Выделенный менеджер',
                  description: 'Один контакт для всех вопросов по проекту'
                },
                {
                  icon: Rocket,
                  title: 'Документация',
                  description: 'Техническая документация и гайды'
                },
                {
                  icon: Zap,
                  title: 'Исходный код',
                  description: 'Полные права на код без ограничений'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-void-900/50 border border-mist-800/50 rounded-xl text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-laser-cyan/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-laser-cyan" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-mist-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Вопросы о ценах
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
                      <p className="text-mist-400">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 bg-gradient-to-r from-laser-cyan/10 via-laser-blue/10 to-laser-purple/10 border border-laser-cyan/20 rounded-2xl">
              <Calculator className="w-16 h-16 text-laser-cyan mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Нужна точная оценка?
              </h2>
              <p className="text-mist-300 mb-8 max-w-xl mx-auto">
                Опишите ваш проект — мы подготовим детальное коммерческое предложение 
                с фиксированной ценой и сроками. Бесплатно и без обязательств.
              </p>
              <a 
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue rounded-lg font-semibold text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25 transition-all duration-300"
              >
                Получить оценку проекта
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
