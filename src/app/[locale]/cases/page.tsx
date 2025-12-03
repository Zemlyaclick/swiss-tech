import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  ExternalLink,
  TrendingUp,
  Clock,
  Users,
  Zap,
  Globe,
  Smartphone,
  Bot,
  ShoppingCart,
  Building,
  Stethoscope,
  Wallet,
  Plane
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Кейсы и портфолио | Swiss Made IT',
  description: 'Реальные проекты наших клиентов. Telegram-боты, веб-платформы, мобильные приложения, автоматизация. Результаты в цифрах.',
  keywords: ['портфолио', 'кейсы', 'проекты', 'примеры работ', 'IT проекты'],
};

export default async function CasesPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;

  const cases = [
    {
      id: 'fintech-platform',
      title: 'Платформа для инвестиций',
      client: 'Швейцарский финтех-стартап',
      industry: 'Финансы',
      industryIcon: Wallet,
      description: 'Полнофункциональная платформа для розничных инвестиций с интеграцией банковских API, KYC-верификацией и реальными котировками.',
      challenge: 'Клиент хотел создать простой способ инвестировать для людей без финансового образования. Нужна была надёжная платформа, соответствующая швейцарским регуляторным требованиям.',
      solution: 'Разработали веб-платформу с мобильным приложением. Интегрировали банковские API, систему KYC, торговый движок. Обеспечили соответствие FINMA.',
      results: [
        { value: '10 000+', label: 'активных пользователей' },
        { value: '50M CHF', label: 'под управлением' },
        { value: '99.99%', label: 'uptime платформы' },
        { value: '4.8', label: 'рейтинг в App Store' }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Kubernetes'],
      duration: '8 месяцев',
      image: '/cases/fintech.jpg',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'medical-saas',
      title: 'SaaS для клиник',
      client: 'Сеть медицинских центров',
      industry: 'Медицина',
      industryIcon: Stethoscope,
      description: 'Система управления клиникой: расписание врачей, электронные карты пациентов, телемедицина, интеграция с лабораториями.',
      challenge: 'Клиника работала с 5 разными системами, данные дублировались, врачи тратили время на рутину. Нужно было объединить всё в одну платформу.',
      solution: 'Создали единую SaaS-платформу с модулями для всех процессов клиники. Интегрировали видеоконсультации, электронные рецепты, автоматические напоминания.',
      results: [
        { value: '-40%', label: 'административной нагрузки' },
        { value: '+25%', label: 'пропускная способность' },
        { value: '15 мин', label: 'экономия на пациенте' },
        { value: '12', label: 'клиник подключено' }
      ],
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'WebRTC', 'HL7 FHIR'],
      duration: '12 месяцев',
      image: '/cases/medical.jpg',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'telegram-ecommerce',
      title: 'Telegram Mini App для e-commerce',
      client: 'Сеть магазинов электроники',
      industry: 'Ритейл',
      industryIcon: ShoppingCart,
      description: 'Полноценный интернет-магазин внутри Telegram с каталогом, корзиной, оплатой и отслеживанием заказов.',
      challenge: 'Клиент хотел выйти на аудиторию Telegram без затрат на разработку отдельного приложения. Нужен был быстрый запуск с минимальным бюджетом.',
      solution: 'Разработали Telegram Mini App с полным функционалом e-commerce. Интеграция с 1С, онлайн-оплата, push-уведомления о статусе заказа.',
      results: [
        { value: '+35%', label: 'рост продаж' },
        { value: '50 000+', label: 'пользователей' },
        { value: '3 мин', label: 'среднее время заказа' },
        { value: '2 недели', label: 'до запуска MVP' }
      ],
      technologies: ['React', 'Telegram API', 'Node.js', '1С интеграция', 'Stripe'],
      duration: '6 недель',
      image: '/cases/telegram.jpg',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'travel-automation',
      title: 'Автоматизация турагентства',
      client: 'Туристическое агентство',
      industry: 'Туризм',
      industryIcon: Plane,
      description: 'Комплексная автоматизация: CRM, бронирования, документооборот, интеграция с GDS-системами, чат-бот для клиентов.',
      challenge: 'Менеджеры тратили 70% времени на рутину: ручной поиск туров, оформление документов, ответы на типовые вопросы. Бизнес не масштабировался.',
      solution: 'Внедрили CRM с автоматизацией воронки продаж. Создали Telegram-бота для первичной консультации. Автоматизировали документооборот и интеграцию с поставщиками.',
      results: [
        { value: '-70%', label: 'рутинной работы' },
        { value: '+200%', label: 'обработка заявок' },
        { value: '24/7', label: 'бот отвечает клиентам' },
        { value: '3 месяца', label: 'окупаемость' }
      ],
      technologies: ['Python', 'Telegram Bot API', 'Amadeus API', 'PostgreSQL', 'n8n'],
      duration: '3 месяца',
      image: '/cases/travel.jpg',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'corporate-portal',
      title: 'Корпоративный портал',
      client: 'Международная производственная компания',
      industry: 'Производство',
      industryIcon: Building,
      description: 'Внутренний портал для 500+ сотрудников: документооборот, задачи, база знаний, HR-процессы, интеграция с SAP.',
      challenge: 'Информация была разбросана по 10+ системам. Сотрудники не знали, где искать документы. HR-процессы занимали недели вместо дней.',
      solution: 'Создали единый портал с SSO-авторизацией. Централизовали документы, автоматизировали HR-заявки, внедрили систему управления задачами.',
      results: [
        { value: '500+', label: 'сотрудников' },
        { value: '-60%', label: 'время на HR-заявки' },
        { value: '1 день', label: 'вместо недели' },
        { value: '95%', label: 'adoption rate' }
      ],
      technologies: ['React', 'Node.js', 'SAP интеграция', 'Elasticsearch', 'Keycloak'],
      duration: '6 месяцев',
      image: '/cases/portal.jpg',
      color: 'from-indigo-500 to-violet-600'
    }
  ];

  const industries = [
    { name: 'Финансы', icon: Wallet, count: 12 },
    { name: 'Медицина', icon: Stethoscope, count: 8 },
    { name: 'E-commerce', icon: ShoppingCart, count: 25 },
    { name: 'Туризм', icon: Plane, count: 6 },
    { name: 'Производство', icon: Building, count: 10 }
  ];

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-purple/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-laser-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-laser-cyan/10 rounded-full blur-3xl" />
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="inline-block px-4 py-2 bg-laser-purple/10 border border-laser-purple/30 rounded-full text-laser-purple text-sm mb-6">
              100+ успешных проектов
            </span>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-white">Проекты, которые </span>
              <span className="bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple bg-clip-text text-transparent">
                говорят за нас
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 max-w-2xl mx-auto">
              Реальные кейсы наших клиентов с измеримыми результатами. 
              От стартапов до enterprise — каждый проект уникален.
            </p>
          </div>
        </section>

        {/* Industries */}
        <section className="py-8 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-void-900/50 border border-mist-800/50 rounded-lg"
                >
                  <industry.icon className="w-4 h-4 text-laser-cyan" />
                  <span className="text-mist-300">{industry.name}</span>
                  <span className="text-mist-500 text-sm">({industry.count})</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-20">
            {cases.map((caseItem, index) => (
              <div 
                key={caseItem.id}
                className="relative"
              >
                {/* Case Card */}
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`aspect-video rounded-2xl bg-gradient-to-br ${caseItem.color} p-1`}>
                      <div className="w-full h-full bg-void-900 rounded-xl flex items-center justify-center">
                        <caseItem.industryIcon className="w-20 h-20 text-mist-600" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${caseItem.color} text-white`}>
                        {caseItem.industry}
                      </span>
                      <span className="text-mist-500 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {caseItem.duration}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                      {caseItem.title}
                    </h2>
                    <p className="text-mist-400 mb-4">{caseItem.client}</p>
                    <p className="text-mist-300 mb-6">{caseItem.description}</p>

                    {/* Results */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      {caseItem.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 bg-void-900/50 border border-mist-800/50 rounded-lg">
                          <div className="text-xl font-bold text-laser-cyan">{result.value}</div>
                          <div className="text-mist-500 text-xs">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseItem.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-void-800 border border-mist-700 rounded text-mist-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable details */}
                    <details className="group">
                      <summary className="cursor-pointer text-laser-cyan hover:underline flex items-center gap-2">
                        Подробнее о проекте
                        <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="mt-4 space-y-4 text-sm">
                        <div>
                          <h4 className="text-white font-semibold mb-1">Задача</h4>
                          <p className="text-mist-400">{caseItem.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Решение</h4>
                          <p className="text-mist-400">{caseItem.solution}</p>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>

                {/* Separator */}
                {index < cases.length - 1 && (
                  <div className="mt-20 h-px bg-gradient-to-r from-transparent via-mist-800 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stats Summary */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Результаты в цифрах
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '100+', label: 'проектов', sublabel: 'успешно запущено' },
                { value: '50+', label: 'клиентов', sublabel: 'доверяют нам' },
                { value: '12', label: 'стран', sublabel: 'география проектов' },
                { value: '98%', label: 'клиентов', sublabel: 'рекомендуют нас' }
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

        {/* CTA */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 bg-gradient-to-r from-laser-cyan/10 via-laser-blue/10 to-laser-purple/10 border border-laser-cyan/20 rounded-2xl">
              <TrendingUp className="w-16 h-16 text-laser-cyan mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Хотите такие же результаты?
              </h2>
              <p className="text-mist-300 mb-8 max-w-xl mx-auto">
                Расскажите о своём проекте — мы подготовим индивидуальное решение 
                и покажем, каких результатов можете достичь.
              </p>
              <a 
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue rounded-lg font-semibold text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25 transition-all duration-300"
              >
                Обсудить проект
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
