import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  FileText, 
  BookOpen, 
  Code,
  Users,
  CheckCircle,
  ArrowRight,
  Search,
  Layers,
  GitBranch,
  Terminal,
  Lightbulb,
  Clock,
  Shield,
  Zap,
  Globe,
  Video
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Техническая документация | Swiss IT',
  description: 'Техническая документация, API-референсы, гайды для пользователей. Документация, которую читают, а не игнорируют.',
};

export default async function DocumentationPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;

  const problems = [
    {
      icon: Clock,
      title: 'Нет документации',
      description: 'Только разработчик знает, как работает система. Уйдёт он — уйдут и знания'
    },
    {
      icon: Users,
      title: 'Долгий онбординг',
      description: 'Новые сотрудники неделями разбираются в системе, отвлекая коллег вопросами'
    },
    {
      icon: Search,
      title: 'Невозможно найти',
      description: 'Документация есть, но разбросана по Confluence, Google Docs, Notion и головам людей'
    },
    {
      icon: GitBranch,
      title: 'Устаревшая информация',
      description: 'Документация написана год назад, с тех пор система изменилась до неузнаваемости'
    },
    {
      icon: Code,
      title: 'Непонятный API',
      description: 'Интеграторы не могут подключиться без созвона с вашими разработчиками'
    },
    {
      icon: Shield,
      title: 'Риски безопасности',
      description: 'Без документации невозможен аудит, сертификация, compliance'
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: 'Самодостаточная команда',
      description: 'Разработчики находят ответы сами, без созвонов и ожидания. Скорость разработки растёт'
    },
    {
      icon: Users,
      title: 'Быстрый онбординг',
      description: 'Новый сотрудник становится продуктивным за дни, а не месяцы. Экономия на обучении'
    },
    {
      icon: Zap,
      title: 'Ускорение интеграций',
      description: 'Партнёры подключаются по документации без вашего участия. Больше интеграций — больше роста'
    },
    {
      icon: Shield,
      title: 'Снижение рисков',
      description: 'Знания не теряются при смене команды. Бизнес-критичные системы защищены'
    },
    {
      icon: Search,
      title: 'Единый источник правды',
      description: 'Вся документация в одном месте с версионированием и поиском'
    },
    {
      icon: Globe,
      title: 'Масштабирование',
      description: 'Один раз написали — используют сотни людей. Документация масштабируется бесплатно'
    }
  ];

  const docTypes = [
    {
      icon: Code,
      title: 'API-документация',
      description: 'Интерактивные референсы для разработчиков',
      features: ['OpenAPI/Swagger', 'Примеры кода', 'Try it out', 'Автогенерация']
    },
    {
      icon: Terminal,
      title: 'Техническое описание',
      description: 'Архитектура, деплой, администрирование',
      features: ['Диаграммы архитектуры', 'Runbook\'ы', 'Troubleshooting', 'Конфигурация']
    },
    {
      icon: BookOpen,
      title: 'Пользовательские гайды',
      description: 'Инструкции для конечных пользователей',
      features: ['Пошаговые гайды', 'Скриншоты/GIF', 'FAQ', 'Видеоинструкции']
    },
    {
      icon: Lightbulb,
      title: 'Онбординг',
      description: 'Быстрый старт для новых членов команды',
      features: ['Getting Started', 'Tutorials', 'Best Practices', 'Code Examples']
    },
    {
      icon: Layers,
      title: 'Продуктовая документация',
      description: 'Описание функциональности продукта',
      features: ['Release Notes', 'Feature Specs', 'Roadmap', 'Changelog']
    },
    {
      icon: GitBranch,
      title: 'Процессная документация',
      description: 'Описание рабочих процессов команды',
      features: ['Definition of Done', 'Code Review', 'CI/CD', 'Branching Strategy']
    }
  ];

  const tools = [
    { name: 'Docusaurus', category: 'SSG' },
    { name: 'GitBook', category: 'Platform' },
    { name: 'Notion', category: 'Wiki' },
    { name: 'Confluence', category: 'Enterprise' },
    { name: 'ReadMe', category: 'API Docs' },
    { name: 'Swagger/OpenAPI', category: 'API Spec' },
    { name: 'Storybook', category: 'Components' },
    { name: 'Mermaid', category: 'Diagrams' },
    { name: 'Draw.io', category: 'Diagrams' },
    { name: 'Loom', category: 'Video' },
    { name: 'Markdown', category: 'Format' },
    { name: 'MDX', category: 'Interactive' }
  ];

  const process = [
    {
      step: '01',
      title: 'Аудит знаний',
      duration: '1 неделя',
      description: 'Анализируем существующую документацию, выявляем пробелы, интервьюируем ключевых людей.',
      deliverables: ['Карта знаний', 'Gap-анализ', 'Приоритеты', 'Структура']
    },
    {
      step: '02',
      title: 'Архитектура документации',
      duration: '1 неделя',
      description: 'Проектируем структуру, выбираем инструменты, настраиваем платформу и процессы.',
      deliverables: ['Information Architecture', 'Платформа', 'Шаблоны', 'Style Guide']
    },
    {
      step: '03',
      title: 'Создание контента',
      duration: '2-6 недель',
      description: 'Пишем документацию, создаём диаграммы, записываем видео. Итеративно с ревью.',
      deliverables: ['API Reference', 'Гайды', 'Tutorials', 'Диаграммы']
    },
    {
      step: '04',
      title: 'Поддержка и обновление',
      duration: 'Постоянно',
      description: 'Интегрируем документацию в CI/CD, настраиваем процесс обновления, обучаем команду.',
      deliverables: ['Docs-as-Code', 'Review Process', 'Метрики', 'Обучение']
    }
  ];

  const results = [
    { metric: '70%', label: 'Меньше вопросов в Slack' },
    { metric: '3x', label: 'Быстрее онбординг' },
    { metric: '50%', label: 'Быстрее интеграции' },
    { metric: '0', label: 'Потерянных знаний' }
  ];

  const faq = [
    {
      question: 'Документация устареет через месяц. Зачем её писать?',
      answer: 'Docs-as-Code: документация живёт рядом с кодом, обновляется вместе с ним, проходит ревью. Автогенерация API-доков из кода. Процессы, которые делают обновление частью разработки, а не отдельной задачей.'
    },
    {
      question: 'У нас нет времени на документацию',
      answer: 'Время на документацию окупается многократно: меньше созвонов, быстрее онбординг, меньше багов из-за недопонимания. Мы пишем документацию сами — вам нужно только ревьюить и отвечать на вопросы.'
    },
    {
      question: 'Какой формат документации лучше?',
      answer: 'Зависит от аудитории. Для разработчиков — Markdown в репозитории или Docusaurus. Для пользователей — интерактивные гайды с видео. Для enterprise — Confluence или GitBook. Поможем выбрать.'
    },
    {
      question: 'Можете написать документацию к чужому коду?',
      answer: 'Да, это наша специализация. Проведём code review, поговорим с разработчиками, разберёмся в логике. Документируем legacy-системы, которые писали 10 лет назад люди, которых уже нет.'
    }
  ];

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-void-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-blue/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-laser-blue/10 border border-laser-blue/30 rounded-full text-laser-blue text-sm">
                Docs-as-Code
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                API & User Guides
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Документация —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-blue via-laser-cyan to-laser-purple">
                знания, которые не теряются
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              Создаём техническую документацию, которую читают. API-референсы, гайды, 
              онбординг — всё, чтобы ваша команда и партнёры работали эффективно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-blue to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Заказать документацию
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#types"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-void-700 text-mist-200 rounded-lg hover:bg-void-800 transition-colors"
              >
                Виды документации
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
              Цена отсутствия документации выше, чем кажется
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
              Что даёт хорошая документация
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Инвестиция, которая окупается многократно
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-void-900 to-void-950 border border-void-800 rounded-xl hover:border-laser-blue/30 transition-colors"
                >
                  <benefit.icon className="w-10 h-10 text-laser-blue mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{benefit.title}</h3>
                  <p className="text-mist-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doc Types Section */}
        <section id="types" className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Виды документации
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Создаём документацию для любой аудитории
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docTypes.map((type, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-laser-cyan/30 transition-colors"
                >
                  <type.icon className="w-10 h-10 text-laser-cyan mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{type.title}</h3>
                  <p className="text-mist-400 mb-4">{type.description}</p>
                  <ul className="space-y-1">
                    {type.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-mist-300">
                        <CheckCircle className="w-4 h-4 text-laser-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Инструменты
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Выбираем оптимальный стек под ваши задачи
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-void-900 border border-void-800 rounded-lg hover:border-laser-blue/30 transition-colors"
                >
                  <span className="text-mist-200">{tool.name}</span>
                  <span className="text-mist-500 text-sm ml-2">({tool.category})</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Как мы создаём документацию
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Системный подход к сохранению знаний
            </p>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 bg-void-900 border border-void-800 rounded-xl hover:border-laser-blue/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-laser-blue to-laser-cyan rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-void-950">{step.step}</span>
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
                          className="px-2 py-1 bg-laser-blue/10 border border-laser-blue/20 rounded text-sm text-laser-blue"
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
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Типичные результаты
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-laser-blue to-laser-cyan mb-2">
                    {result.metric}
                  </div>
                  <div className="text-mist-400">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Стоимость документации
            </h2>
            <p className="text-mist-400 mb-8">
              API-документация — от 3 000 CHF. Комплексная документация проекта — от 8 000 CHF. 
              Цена зависит от объёма системы и требуемой глубины. Аудит существующей документации — бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-blue to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Бесплатный аудит
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-6">
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
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Готовы сохранить знания?
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              Не теряйте экспертизу команды. Документация — это инвестиция в будущее проекта.
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-blue to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <FileText className="w-5 h-5" />
              Обсудить документацию
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
