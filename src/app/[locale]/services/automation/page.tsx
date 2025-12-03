import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Cog, 
  Zap, 
  Clock,
  TrendingUp,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Database,
  Mail,
  FileText,
  RefreshCw,
  Bot,
  Workflow,
  Calculator,
  BarChart3,
  Plug,
  Settings
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Автоматизация процессов | Swiss IT',
  description: 'Автоматизация бизнес-процессов, интеграция систем, RPA. Сокращение рутины на 80%, уменьшение ошибок, ускорение процессов.',
};

export default async function AutomationPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;

  const problems = [
    {
      icon: Clock,
      title: 'Часы на рутину',
      description: 'Сотрудники тратят 40% времени на повторяющиеся задачи вместо работы, требующей мозгов'
    },
    {
      icon: Users,
      title: 'Человеческие ошибки',
      description: 'Ручной ввод данных = ошибки. Опечатки, забытые письма, потерянные заявки'
    },
    {
      icon: Database,
      title: 'Разрозненные системы',
      description: 'Данные в Excel, CRM, 1C, почте — и нигде нет полной картины'
    },
    {
      icon: RefreshCw,
      title: 'Медленные процессы',
      description: 'Согласование занимает дни, клиенты ждут ответа, сделки срываются'
    },
    {
      icon: Calculator,
      title: 'Ручные отчёты',
      description: 'Каждый месяц — мучительный сбор данных из разных источников в Excel'
    },
    {
      icon: TrendingUp,
      title: 'Невозможно масштабировать',
      description: 'Рост бизнеса = рост штата. Каждый новый клиент требует больше рук'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Экономия 80% времени',
      description: 'Задачи, занимавшие часы, выполняются за секунды. Сотрудники фокусируются на важном'
    },
    {
      icon: Shield,
      title: 'Ноль ошибок',
      description: 'Автоматизация исключает человеческий фактор. Данные всегда корректны и актуальны'
    },
    {
      icon: Plug,
      title: 'Единая экосистема',
      description: 'Интеграция всех систем: CRM, ERP, почта, мессенджеры, банки, маркетплейсы'
    },
    {
      icon: Clock,
      title: 'Мгновенная реакция',
      description: 'Заявка → ответ клиенту за секунды. Уведомления, статусы, документы — автоматически'
    },
    {
      icon: BarChart3,
      title: 'Аналитика в реальном времени',
      description: 'Дашборды обновляются автоматически. Решения на основе данных, а не интуиции'
    },
    {
      icon: TrendingUp,
      title: 'Масштабирование без найма',
      description: 'Обрабатывайте в 10 раз больше заказов тем же составом. Рост без роста затрат'
    }
  ];

  const automationTypes = [
    {
      icon: Mail,
      title: 'Обработка заявок',
      description: 'Автоматическая обработка входящих заявок из всех каналов',
      examples: ['Парсинг email и форм', 'Создание сделок в CRM', 'Распределение по менеджерам', 'Уведомления клиентам']
    },
    {
      icon: FileText,
      title: 'Документооборот',
      description: 'Генерация, согласование и отправка документов',
      examples: ['Счета и договоры', 'Акты и накладные', 'Электронная подпись', 'Архивирование']
    },
    {
      icon: Database,
      title: 'Синхронизация данных',
      description: 'Обмен данными между системами в реальном времени',
      examples: ['CRM ↔ 1C', 'Сайт ↔ Склад', 'Маркетплейсы', 'Банковские выписки']
    },
    {
      icon: BarChart3,
      title: 'Отчётность',
      description: 'Автоматическое формирование отчётов и дашбордов',
      examples: ['Ежедневные сводки', 'KPI менеджеров', 'Финансовые отчёты', 'Прогнозы']
    },
    {
      icon: Bot,
      title: 'Чат-боты и ассистенты',
      description: 'Автоматическая обработка типовых запросов',
      examples: ['Ответы на FAQ', 'Приём заказов', 'Запись на услуги', 'Статус доставки']
    },
    {
      icon: Workflow,
      title: 'Бизнес-процессы',
      description: 'Оркестрация сложных многошаговых процессов',
      examples: ['Онбординг клиентов', 'Согласования', 'Тендерные процедуры', 'HR-процессы']
    }
  ];

  const techStack = [
    { name: 'n8n', category: 'Workflow' },
    { name: 'Zapier', category: 'Интеграции' },
    { name: 'Make (Integromat)', category: 'Интеграции' },
    { name: 'Power Automate', category: 'Microsoft' },
    { name: 'Python', category: 'Скрипты' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Apache Airflow', category: 'ETL' },
    { name: 'RabbitMQ', category: 'Очереди' },
    { name: 'Redis', category: 'Кэш' },
    { name: 'PostgreSQL', category: 'База данных' },
    { name: 'REST API', category: 'Интеграции' },
    { name: 'Webhooks', category: 'События' }
  ];

  const process = [
    {
      step: '01',
      title: 'Аудит процессов',
      duration: '1-2 недели',
      description: 'Анализируем текущие процессы, находим узкие места и точки автоматизации. Считаем ROI каждой интеграции.',
      deliverables: ['Карта процессов', 'Список узких мест', 'ROI-калькуляция', 'Приоритеты']
    },
    {
      step: '02',
      title: 'Проектирование',
      duration: '1-2 недели',
      description: 'Проектируем архитектуру интеграций, выбираем инструменты, описываем сценарии автоматизации.',
      deliverables: ['Архитектура', 'Сценарии', 'Технические требования', 'План внедрения']
    },
    {
      step: '03',
      title: 'Разработка',
      duration: '2-6 недель',
      description: 'Создаём интеграции, настраиваем автоматизации, тестируем на реальных данных. Запуск в пилотном режиме.',
      deliverables: ['Готовые интеграции', 'Документация', 'Мониторинг', 'Пилот']
    },
    {
      step: '04',
      title: 'Масштабирование',
      duration: 'Постоянно',
      description: 'Расширяем автоматизацию на новые процессы, оптимизируем существующие, добавляем новые интеграции.',
      deliverables: ['Новые сценарии', 'Оптимизация', 'Обучение', 'Поддержка']
    }
  ];

  const cases = [
    {
      title: 'Интернет-магазин',
      before: 'Менеджеры вручную переносили заказы с сайта в 1C, отправляли статусы клиентам',
      after: 'Полная автоматизация: заказ → 1C → склад → доставка → уведомление клиента',
      result: 'Обработка 500 заказов/день вместо 50, без увеличения штата'
    },
    {
      title: 'Логистическая компания',
      before: 'Ежедневные отчёты собирались вручную из 5 систем по 3 часа',
      after: 'Автоматический сбор данных, дашборд обновляется каждые 15 минут',
      result: 'Экономия 60 часов/месяц, решения на основе актуальных данных'
    },
    {
      title: 'Юридическая фирма',
      before: 'Договоры готовились вручную, согласование через email занимало дни',
      after: 'Генерация документов из шаблонов, маршрутизация согласований, ЭЦП',
      result: 'Подготовка договора за 5 минут вместо 2 часов'
    }
  ];

  const results = [
    { metric: '80%', label: 'Сокращение рутины' },
    { metric: '95%', label: 'Уменьшение ошибок' },
    { metric: '10x', label: 'Рост производительности' },
    { metric: '< 6 мес', label: 'Окупаемость' }
  ];

  const faq = [
    {
      question: 'С какими системами вы интегрируетесь?',
      answer: 'Практически с любыми: 1C, Bitrix24, amoCRM, Salesforce, SAP, банковские API, маркетплейсы (Ozon, Wildberries), службы доставки, мессенджеры, Google/Microsoft сервисы. Если у системы есть API — мы интегрируемся.'
    },
    {
      question: 'Что если у нас старая система без API?',
      answer: 'Используем RPA (роботизация) — программные роботы работают с интерфейсом как человек. Или создаём прослойку через базу данных, файловый обмен, парсинг экранов.'
    },
    {
      question: 'Сколько времени займёт внедрение?',
      answer: 'Простая интеграция двух систем — 1-2 недели. Комплексная автоматизация отдела — 1-2 месяца. Трансформация всей компании — 3-6 месяцев поэтапно.'
    },
    {
      question: 'Что если автоматизация сломается?',
      answer: 'Настраиваем мониторинг и алерты — узнаем о проблеме раньше вас. Критичные интеграции дублируем. Обеспечиваем SLA на поддержку и быстрое восстановление.'
    }
  ];

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-void-950">
        
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-laser-cyan/10 border border-laser-cyan/30 rounded-full text-laser-cyan text-sm">
                RPA & Интеграции
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                No-code & Custom
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Автоматизируйте рутину —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">
                освободите людей для важного
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              Интегрируем системы, автоматизируем процессы, избавляем от ручного труда. 
              Ваши сотрудники занимаются бизнесом, а не копированием данных.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Аудит процессов
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-void-700 text-mist-200 rounded-lg hover:bg-void-800 transition-colors"
              >
                Примеры автоматизаций
              </a>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Знакомые проблемы?
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Типичные признаки того, что пора автоматизировать
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-red-500/30 transition-colors"
                >
                  <problem.icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{problem.title}</h3>
                  <p className="text-mist-400">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Что даёт автоматизация
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Результаты, которые вы увидите в первый месяц
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-void-900 to-void-950 border border-void-800 rounded-xl hover:border-laser-cyan/30 transition-colors"
                >
                  <benefit.icon className="w-10 h-10 text-laser-cyan mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{benefit.title}</h3>
                  <p className="text-mist-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Что мы автоматизируем
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Типовые сценарии, которые приносят максимальный эффект
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automationTypes.map((type, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-laser-blue/30 transition-colors"
                >
                  <type.icon className="w-10 h-10 text-laser-blue mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{type.title}</h3>
                  <p className="text-mist-400 mb-4">{type.description}</p>
                  <ul className="space-y-1">
                    {type.examples.map((example, eIndex) => (
                      <li key={eIndex} className="flex items-center gap-2 text-sm text-mist-300">
                        <CheckCircle className="w-4 h-4 text-laser-cyan" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section id="cases" className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Примеры внедрений
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Реальные кейсы автоматизации
            </p>
            <div className="space-y-6">
              {cases.map((caseItem, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-mist-100 mb-4">{caseItem.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <div className="text-sm text-red-400 mb-1">Было</div>
                      <p className="text-mist-300">{caseItem.before}</p>
                    </div>
                    <div className="p-4 bg-laser-cyan/10 border border-laser-cyan/20 rounded-lg">
                      <div className="text-sm text-laser-cyan mb-1">Стало</div>
                      <p className="text-mist-300">{caseItem.after}</p>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="text-sm text-green-400 mb-1">Результат</div>
                      <p className="text-mist-300">{caseItem.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Инструменты
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Выбираем оптимальный стек под ваши задачи
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-void-900 border border-void-800 rounded-lg hover:border-laser-cyan/30 transition-colors"
                >
                  <span className="text-mist-200">{tech.name}</span>
                  <span className="text-mist-500 text-sm ml-2">({tech.category})</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Как мы внедряем автоматизацию
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Поэтапный подход с быстрыми победами
            </p>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-void-900 border border-void-800 rounded-xl hover:border-laser-cyan/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-laser-cyan to-laser-blue rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-void-950">{step.step}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-mist-100">{step.title}</h3>
                      <span className="px-2 py-1 bg-void-800 rounded text-sm text-mist-400">{step.duration}</span>
                    </div>
                    <p className="text-mist-400 mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable, dIndex) => (
                        <span 
                          key={dIndex}
                          className="px-2 py-1 bg-laser-cyan/10 border border-laser-cyan/20 rounded text-sm text-laser-cyan"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Типичные результаты
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan to-laser-blue mb-2">
                    {result.metric}
                  </div>
                  <div className="text-mist-400">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Стоимость автоматизации
            </h2>
            <p className="text-mist-400 mb-8">
              Простая интеграция двух систем — от 2 000 CHF. Комплексная автоматизация отдела — 
              от 10 000 CHF. Аудит процессов бесплатно при заказе внедрения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Бесплатный аудит
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Частые вопросы
            </h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-mist-100 mb-3">{item.question}</h3>
                  <p className="text-mist-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Готовы избавиться от рутины?
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              Покажите нам свои процессы — мы покажем, где прячется 80% экономии
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Cog className="w-5 h-5" />
              Запросить аудит
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
