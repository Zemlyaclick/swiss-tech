import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
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

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'services_integration' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function IntegrationPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'services_integration' });

  const serviceIcons = [FileJson, Link2, Database, Zap, Cloud, Workflow];
  const services = serviceIcons.map((icon, index) => ({
    icon,
    title: t(`services.${index}.title`),
    description: t(`services.${index}.description`)
  }));

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
                {t('badge1')}
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                {t('badge2')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {t('title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-blue via-laser-cyan to-laser-purple">
                {t('title_gradient')}
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-blue to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t('cta_primary')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              {t('services_title')}
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
              {t('tech_title')}
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
              {t('cta_title')}
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              {t('cta_description')}
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-blue to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Plug className="w-5 h-5" />
              {t('cta_button')}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
