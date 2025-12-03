import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Plug, 
  Database, 
  RefreshCcw,
  FileJson,
  Server,
  Shield,
  CheckCircle,
  ArrowRight,
  Cloud,
  Zap,
  Link2,
  Workflow
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Интеграции и API | Swiss IT',
  description: 'Разработка и интеграция API. Связываем системы между собой: CRM, ERP, платёжные системы, внешние сервисы.',
};

export default async function IntegrationPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;

  const services = [
    {
      icon: FileJson,
      title: 'Разработка API',
      description: 'REST, GraphQL, gRPC — выбираем подход под задачу. Документация, версионирование, тестирование.'
    },
    {
      icon: Link2,
      title: 'Интеграция систем',
      description: 'Связываем ваши системы между собой. Синхронизация данных, единый источник правды.'
    },
    {
      icon: Database,
      title: 'CRM и ERP',
      description: 'Salesforce, HubSpot, 1C, SAP — интегрируем с вашими бизнес-системами.'
    },
    {
      icon: Zap,
      title: 'Платёжные системы',
      description: 'Stripe, PayPal, Twint — приём платежей и финансовая интеграция.'
    },
    {
      icon: Cloud,
      title: 'Внешние сервисы',
      description: 'Маркетплейсы, логистика, банки, государственные системы — любые внешние API.'
    },
    {
      icon: Workflow,
      title: 'ETL и синхронизация',
      description: 'Автоматический обмен данными между системами. Трансформация, валидация, мониторинг.'
    }
  ];

  const techStack = [
    'REST API', 'GraphQL', 'gRPC', 'WebSocket',
    'OpenAPI/Swagger', 'Postman', 'API Gateway',
    'Zapier', 'n8n', 'Apache Kafka', 'RabbitMQ',
    'OAuth 2.0', 'JWT', 'API Keys'
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
                API
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                Интеграции
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Интеграции и API —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-blue via-laser-cyan to-laser-purple">
                связанная экосистема
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              Разрабатываем API и интегрируем системы. CRM, ERP, платёжные шлюзы, внешние сервисы — 
              ваши данные синхронизированы и доступны там, где нужно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-blue to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Обсудить интеграцию
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Что мы делаем
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-laser-blue/30 transition-colors"
                >
                  <service.icon className="w-10 h-10 text-laser-blue mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{service.title}</h3>
                  <p className="text-mist-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Технологии и протоколы
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-void-900 border border-void-800 rounded-lg text-mist-300 hover:border-laser-blue/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Нужна интеграция?
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              Расскажите, какие системы нужно связать — предложим решение
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-blue to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Plug className="w-5 h-5" />
              Обсудить проект
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
