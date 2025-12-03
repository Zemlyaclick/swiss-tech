import { Metadata } from 'next';
import { Globe, Zap, Search, TrendingUp, Smartphone, Shield, ArrowRight, X, Check, Layout, ShoppingCart, Building2, Newspaper, Palette, Code2 } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

export const metadata: Metadata = {
  title: 'Веб-разработка | SwissTech',
  description: 'Создаём сайты, которые продают. Скорость загрузки <2 сек, конверсия выше рынка, SEO из коробки. От лендингов до сложных платформ.'
};

export default function WebsitesPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const benefits = [
    {
      icon: <Zap size={24} className="text-laser-cyan" />,
      title: 'Скорость <2 секунд',
      description: 'Оптимизация Core Web Vitals, lazy loading, CDN. Быстрый сайт = больше конверсий и выше позиции в Google.'
    },
    {
      icon: <Search size={24} className="text-laser-cyan" />,
      title: 'SEO из коробки',
      description: 'Семантическая разметка, мета-теги, sitemap, schema.org. Ваш сайт находят с первого дня.'
    },
    {
      icon: <TrendingUp size={24} className="text-laser-cyan" />,
      title: 'Конверсия выше рынка',
      description: 'UX-дизайн на основе данных, чёткие CTA, A/B тестирование. Превращаем посетителей в клиентов.'
    },
    {
      icon: <Smartphone size={24} className="text-laser-cyan" />,
      title: 'Mobile-first',
      description: '60%+ трафика с мобильных. Проектируем сначала для телефонов, потом адаптируем для десктопа.'
    },
    {
      icon: <Shield size={24} className="text-laser-cyan" />,
      title: 'Безопасность',
      description: 'HTTPS, защита от XSS/CSRF, регулярные обновления. Соответствие GDPR для европейского рынка.'
    },
    {
      icon: <Code2 size={24} className="text-laser-cyan" />,
      title: 'Чистый код',
      description: 'Современный стек, документация, простота поддержки. Ваша команда сможет развивать сайт самостоятельно.'
    }
  ];

  const types = [
    { icon: <Layout size={20} className="text-laser-cyan" />, title: 'Лендинги', desc: 'Одностраничники для запуска продуктов, акций, сбора лидов' },
    { icon: <Building2 size={20} className="text-laser-cyan" />, title: 'Корпоративные сайты', desc: 'Представительство компании с каталогом услуг и портфолио' },
    { icon: <ShoppingCart size={20} className="text-laser-cyan" />, title: 'E-commerce', desc: 'Интернет-магазины с корзиной, оплатой и интеграцией с 1С/ERP' },
    { icon: <Newspaper size={20} className="text-laser-cyan" />, title: 'Контентные платформы', desc: 'Блоги, медиа, базы знаний с удобной CMS' },
    { icon: <Globe size={20} className="text-laser-cyan" />, title: 'SaaS и веб-приложения', desc: 'Сложные продукты с личными кабинетами и API' },
    { icon: <Palette size={20} className="text-laser-cyan" />, title: 'Редизайн', desc: 'Обновление устаревших сайтов с сохранением SEO' }
  ];

  const stack = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
    { category: 'CMS', items: ['Strapi', 'Sanity', 'WordPress', 'Contentful'] },
    { category: 'Инфраструктура', items: ['Vercel', 'AWS', 'Cloudflare', 'Docker'] }
  ];

  const comparison = {
    template: [
      'Шаблонный дизайн как у тысяч сайтов',
      'Медленная загрузка из-за лишнего кода',
      'Ограниченная кастомизация',
      'Проблемы с SEO и доступностью',
      'Сложно масштабировать',
      'Зависимость от конструктора'
    ],
    custom: [
      'Уникальный дизайн под ваш бренд',
      'Оптимизация до миллисекунд',
      'Любая функциональность',
      'SEO и accessibility с нуля',
      'Архитектура для роста',
      'Полный контроль над кодом'
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
            <Globe size={28} className="text-laser-cyan" />
            <span className="font-display font-bold text-lg text-mist-100">Веб-разработка</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mist-100 mb-6 leading-tight">
            Сайты, которые<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">продают, а не просто существуют</span>
          </h1>
          
          <p className="text-mist-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Создаём веб-продукты, которые работают на бизнес: быстрые, красивые, конверсионные. 
            От лендинга за неделю до сложной платформы. Каждый проект заточен под ваши цели, 
            а не под шаблон из конструктора.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#benefits" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-laser-cyan to-laser-blue text-void-900 font-semibold hover:opacity-90 transition-opacity">
              Почему мы
              <ArrowRight size={18} />
            </a>
            <a href="#types" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-mist-300 hover:text-mist-100 hover:border-white/20 transition-colors">
              Типы сайтов
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
              'Сайт на Tilda, но выглядит как у всех',
              'Медленная загрузка — клиенты уходят',
              'Нет заявок, хотя трафик есть',
              'Сайт не находят в Google',
              'Неудобно редактировать контент',
              'Мобильная версия выглядит криво'
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <X size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-mist-300">{problem}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-mist-400 text-lg">
            Профессиональная разработка решает эти проблемы системно.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Почему наши сайты работают
            </h2>
            <p className="text-mist-400 text-lg max-w-2xl mx-auto">
              Не просто красивая картинка — инструмент для бизнеса
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
              Конструктор vs Разработка
            </h2>
            <p className="text-mist-400 text-lg">
              Когда нужен профессиональный сайт
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Template */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium">
                Конструктор / Шаблон
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-red-500/20">
                <ul className="space-y-4">
                  {comparison.template.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X size={18} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-mist-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Custom */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-laser-cyan/20 border border-laser-cyan/30 text-laser-cyan text-sm font-medium">
                Профессиональная разработка
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-laser-cyan/20">
                <ul className="space-y-4">
                  {comparison.custom.map((item, i) => (
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

      {/* Types */}
      <section id="types" className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Что мы создаём
            </h2>
            <p className="text-mist-400 text-lg">
              От простого лендинга до сложной платформы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((type, i) => (
              <div key={i} className="p-5 rounded-xl bg-void-900/60 border border-white/5 hover:border-laser-cyan/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  {type.icon}
                  <h3 className="font-display text-base font-semibold text-mist-100">{type.title}</h3>
                </div>
                <p className="text-mist-400 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Технологии
            </h2>
            <p className="text-mist-400 text-lg">
              Современный стек для максимальной производительности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stack.map((group, i) => (
              <div key={i} className="p-5 rounded-xl bg-void-950 border border-white/5">
                <h3 className="font-display text-sm font-semibold text-laser-cyan mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <span key={j} className="px-3 py-1 rounded-lg bg-void-900/60 text-mist-300 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
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
              Как мы работаем
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Аналитика', desc: 'Изучаем бизнес, аудиторию, конкурентов. Формируем ТЗ.' },
              { step: '02', title: 'Дизайн', desc: 'Прототипы, UI-kit, адаптивные макеты. Согласовываем.' },
              { step: '03', title: 'Разработка', desc: 'Вёрстка, программирование, интеграции, тесты.' },
              { step: '04', title: 'Запуск', desc: 'Деплой, настройка аналитики, обучение, поддержка.' }
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
              Результаты наших проектов
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '<2 сек', label: 'загрузка страницы' },
              { value: '90+', label: 'PageSpeed Score' },
              { value: '+150%', label: 'рост конверсии' },
              { value: 'Top 10', label: 'Google за 3 месяца' }
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
            Стоимость
          </h2>
          <p className="text-mist-400 text-lg mb-8 max-w-2xl mx-auto">
            Лендинг — от 3000 CHF, корпоративный сайт — от 8000 CHF, 
            интернет-магазин — от 15000 CHF, сложная платформа — индивидуально.
          </p>
          <p className="text-laser-cyan">
            Точную стоимость назовём после обсуждения задачи — первая консультация бесплатна.
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
              { q: 'Сколько времени займёт разработка?', a: 'Лендинг — 1-2 недели, корпоративный сайт — 3-6 недель, интернет-магазин — 6-10 недель, сложная платформа — 2-4 месяца. Показываем промежуточные результаты каждую неделю.' },
              { q: 'Смогу ли я сам редактировать контент?', a: 'Да, подключаем удобную CMS (Strapi, Sanity, WordPress). Обучаем вашу команду, даём видео-инструкции. Редактирование — как в Word.' },
              { q: 'Что с хостингом и доменом?', a: 'Помогаем выбрать и настроить. Обычно используем Vercel или AWS — быстро, надёжно, масштабируемо. Можем разместить на ваших серверах.' },
              { q: 'Есть ли поддержка после запуска?', a: 'Да, предлагаем пакеты поддержки: обновления, бэкапы, мониторинг, мелкие доработки. Также можем передать проект вашей команде с документацией.' }
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
