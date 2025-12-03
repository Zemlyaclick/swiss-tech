import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Brain, 
  Zap, 
  MessageSquare,
  TrendingUp,
  Search,
  FileText,
  CheckCircle,
  ArrowRight,
  Bot,
  Sparkles,
  Eye,
  BarChart3,
  Shield,
  Clock,
  Users,
  Target,
  Cpu,
  Database
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ИИ-интеграции | Swiss IT',
  description: 'Внедрение искусственного интеллекта в бизнес-процессы. ChatGPT, Claude, собственные модели. Чат-боты, анализ данных, автоматизация.',
};

export default async function AIPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;

  const problems = [
    {
      icon: Clock,
      title: 'Рутинные задачи',
      description: 'Сотрудники тратят часы на ответы на типовые вопросы, обработку документов, составление отчётов'
    },
    {
      icon: Users,
      title: 'Нехватка экспертов',
      description: 'Дорогие специалисты заняты рутиной вместо стратегических задач'
    },
    {
      icon: Search,
      title: 'Потеря информации',
      description: 'Знания разбросаны по документам, чатам, головам сотрудников — найти нужное невозможно'
    },
    {
      icon: TrendingUp,
      title: 'Упущенные возможности',
      description: 'Данные есть, но нет времени и инструментов для их анализа и извлечения инсайтов'
    },
    {
      icon: MessageSquare,
      title: 'Медленная поддержка',
      description: 'Клиенты ждут ответа часами, а ночью и в выходные поддержка недоступна'
    },
    {
      icon: Target,
      title: 'Нет персонализации',
      description: 'Все клиенты получают одинаковый опыт, хотя данные для персонализации есть'
    }
  ];

  const benefits = [
    {
      icon: Bot,
      title: 'ИИ-ассистенты 24/7',
      description: 'Умные боты отвечают на вопросы, помогают с выбором, обрабатывают заявки. Мгновенно, без выходных, на любом языке'
    },
    {
      icon: FileText,
      title: 'Умная обработка документов',
      description: 'ИИ извлекает данные из договоров, счетов, резюме. Классифицирует, суммаризирует, находит аномалии'
    },
    {
      icon: Search,
      title: 'Семантический поиск',
      description: 'Поиск по смыслу, а не по словам. Находит релевантное в базе знаний, документах, переписках'
    },
    {
      icon: BarChart3,
      title: 'Предиктивная аналитика',
      description: 'Прогнозирование спроса, оттока клиентов, рисков. Принимайте решения на основе данных, а не интуиции'
    },
    {
      icon: Sparkles,
      title: 'Генерация контента',
      description: 'Автоматическое создание описаний товаров, ответов на отзывы, маркетинговых текстов в вашем стиле'
    },
    {
      icon: Eye,
      title: 'Компьютерное зрение',
      description: 'Распознавание товаров, дефектов, лиц, документов. Автоматизация визуального контроля'
    }
  ];

  const useCases = [
    {
      icon: MessageSquare,
      title: 'Умная поддержка',
      description: 'Чат-бот, который понимает контекст, помнит историю, решает 80% вопросов без человека',
      results: ['80% вопросов без оператора', 'Ответ за 2 секунды', 'Работа 24/7/365', 'Любые языки']
    },
    {
      icon: FileText,
      title: 'Обработка документов',
      description: 'Извлечение данных из PDF, сканов, фото. Заполнение форм, проверка соответствия',
      results: ['95% точность OCR', '-90% ручной работы', 'Проверка за секунды', 'Интеграция с CRM']
    },
    {
      icon: Search,
      title: 'Корпоративный поиск',
      description: 'Поиск по всем источникам: документы, почта, Slack, Confluence. Ответы на вопросы по базе знаний',
      results: ['Поиск по смыслу', 'Ответы на вопросы', 'Ранжирование по релевантности', 'Учёт прав доступа']
    },
    {
      icon: TrendingUp,
      title: 'Бизнес-аналитика',
      description: 'Прогнозы продаж, анализ трендов, обнаружение аномалий, рекомендации по ценообразованию',
      results: ['Прогноз спроса', 'Анализ оттока', 'Сегментация клиентов', 'Динамическое ценообразование']
    },
    {
      icon: Sparkles,
      title: 'Контент и маркетинг',
      description: 'Генерация описаний, персонализация рассылок, A/B тесты текстов, анализ отзывов',
      results: ['Описания товаров', 'Email-персонализация', 'Анализ тональности', 'SEO-оптимизация']
    },
    {
      icon: Eye,
      title: 'Визуальный контроль',
      description: 'Проверка качества продукции, распознавание дефектов, контроль безопасности',
      results: ['99% точность', 'Реальное время', 'Интеграция с линией', 'Отчёты и алерты']
    }
  ];

  const techStack = [
    { name: 'OpenAI GPT-4', category: 'LLM' },
    { name: 'Claude', category: 'LLM' },
    { name: 'LLaMA', category: 'Open Source' },
    { name: 'Mistral', category: 'Open Source' },
    { name: 'LangChain', category: 'Framework' },
    { name: 'LlamaIndex', category: 'RAG' },
    { name: 'Pinecone', category: 'Vector DB' },
    { name: 'Weaviate', category: 'Vector DB' },
    { name: 'Hugging Face', category: 'ML' },
    { name: 'PyTorch', category: 'ML' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'Python', category: 'Язык' }
  ];

  const process = [
    {
      step: '01',
      title: 'Аудит и стратегия',
      duration: '1-2 недели',
      description: 'Анализируем процессы, находим точки применения ИИ с максимальным ROI. Формируем дорожную карту внедрения.',
      deliverables: ['Карта процессов', 'Оценка ROI', 'Выбор моделей', 'Roadmap']
    },
    {
      step: '02',
      title: 'Proof of Concept',
      duration: '2-4 недели',
      description: 'Создаём рабочий прототип на реальных данных. Доказываем ценность до полномасштабного внедрения.',
      deliverables: ['Рабочий прототип', 'Метрики качества', 'Оценка затрат', 'Go/No-Go решение']
    },
    {
      step: '03',
      title: 'Разработка и интеграция',
      duration: '4-8 недель',
      description: 'Разрабатываем production-решение. Интегрируем с вашими системами. Настраиваем мониторинг.',
      deliverables: ['Production API', 'Интеграции', 'Мониторинг', 'Документация']
    },
    {
      step: '04',
      title: 'Оптимизация',
      duration: 'Постоянно',
      description: 'Fine-tuning моделей на ваших данных, улучшение качества, расширение сценариев использования.',
      deliverables: ['Fine-tuned модели', 'Улучшение метрик', 'Новые сценарии', 'Обучение команды']
    }
  ];

  const results = [
    { metric: '80%', label: 'Автоматизация поддержки' },
    { metric: '10x', label: 'Ускорение обработки' },
    { metric: '95%', label: 'Точность распознавания' },
    { metric: '< 2 сек', label: 'Время ответа ИИ' }
  ];

  const faq = [
    {
      question: 'Какую модель выбрать: GPT-4, Claude или open-source?',
      answer: 'GPT-4 — лучший выбор для сложных задач и общения на русском. Claude — отлично для анализа длинных документов. Open-source (LLaMA, Mistral) — когда важна приватность данных или нужно fine-tuning. Часто используем комбинацию: open-source для простых задач, GPT-4 для сложных.'
    },
    {
      question: 'Как обеспечить безопасность данных при использовании ИИ?',
      answer: 'Несколько уровней защиты: использование API с гарантиями приватности (данные не используются для обучения), развёртывание open-source моделей на вашей инфраструктуре, анонимизация данных перед отправкой, шифрование при передаче и хранении.'
    },
    {
      question: 'Сколько данных нужно для обучения ИИ?',
      answer: 'Для RAG (поиск по документам) — достаточно ваших существующих документов. Для fine-tuning нужно 100-1000 примеров качественной разметки. Для обучения с нуля — миллионы примеров. В 90% случаев хватает RAG + промпт-инжиниринг.'
    },
    {
      question: 'ИИ будет галлюцинировать и давать неправильные ответы?',
      answer: 'Риск есть, но мы минимизируем его: RAG привязывает ответы к вашим документам, настраиваем температуру модели, добавляем проверки фактов, показываем источники. Для критичных сценариев добавляем человека в контур.'
    }
  ];

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-void-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-purple/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-laser-purple/10 border border-laser-purple/30 rounded-full text-laser-purple text-sm">
                GPT-4 & Claude
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                LLM & ML
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Искусственный интеллект —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-purple via-laser-cyan to-laser-blue">
                ваше конкурентное преимущество
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              Внедряем ИИ в ваши бизнес-процессы. Умные ассистенты, анализ документов, 
              предиктивная аналитика — технологии OpenAI и Claude на службе вашего бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-purple to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Обсудить внедрение ИИ
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#use-cases"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-void-700 text-mist-200 rounded-lg hover:bg-void-800 transition-colors"
              >
                Примеры использования
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
              ИИ решает эти задачи лучше и дешевле людей
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
              Что даёт ИИ вашему бизнесу
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Конкретные решения, которые мы внедряем
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-void-900 to-void-950 border border-void-800 rounded-xl hover:border-laser-purple/30 transition-colors"
                >
                  <benefit.icon className="w-10 h-10 text-laser-purple mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{benefit.title}</h3>
                  <p className="text-mist-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Сценарии использования
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Типовые решения с доказанным ROI
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-laser-cyan/30 transition-colors"
                >
                  <useCase.icon className="w-10 h-10 text-laser-cyan mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{useCase.title}</h3>
                  <p className="text-mist-400 mb-4">{useCase.description}</p>
                  <ul className="space-y-1">
                    {useCase.results.map((result, rIndex) => (
                      <li key={rIndex} className="flex items-center gap-2 text-sm text-mist-300">
                        <CheckCircle className="w-4 h-4 text-laser-purple" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Технологии
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Используем лучшие модели и фреймворки
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-void-900 border border-void-800 rounded-lg hover:border-laser-purple/30 transition-colors"
                >
                  <span className="text-mist-200">{tech.name}</span>
                  <span className="text-mist-500 text-sm ml-2">({tech.category})</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Как мы внедряем ИИ
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              От идеи до production за 2-3 месяца
            </p>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 bg-void-900 border border-void-800 rounded-xl hover:border-laser-purple/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-laser-purple to-laser-cyan rounded-xl flex items-center justify-center">
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
                          className="px-2 py-1 bg-laser-purple/10 border border-laser-purple/20 rounded text-sm text-laser-purple"
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
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-laser-purple to-laser-cyan mb-2">
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
              Стоимость внедрения ИИ
            </h2>
            <p className="text-mist-400 mb-8">
              Proof of Concept — от 5 000 CHF. Production-решение — от 15 000 CHF. 
              Стоимость зависит от сложности интеграции и объёма данных. Плюс расходы на API моделей (обычно $100-500/мес).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-purple to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Получить оценку
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
              Готовы внедрить ИИ?
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              Расскажите о своих процессах — мы найдём точки применения ИИ с максимальным ROI
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-purple to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Brain className="w-5 h-5" />
              Обсудить проект
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
