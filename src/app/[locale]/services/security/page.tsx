import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getTranslations } from 'next-intl/server';
import { 
  Shield, 
  Lock, 
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Key,
  FileSearch,
  Server,
  Users,
  Globe,
  Fingerprint,
  ShieldCheck,
  Bug,
  Database,
  Wifi,
  FileWarning,
  Activity
} from 'lucide-react';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'services_security' });
  return {
    title: t('meta_title'),
    description: t('meta_description')
  };
}

export default async function SecurityPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'services_security' });

  const threatIcons = [Bug, Key, Database, Wifi, Server, Users];
  const threats = [0, 1, 2, 3, 4, 5].map((i) => ({
    icon: threatIcons[i],
    title: t(`threats.${i}.title`),
    description: t(`threats.${i}.description`)
  }));

  const serviceIcons = [FileSearch, Bug, Shield, Lock, Fingerprint, Activity];
  const services = [0, 1, 2, 3, 4, 5].map((i) => ({
    icon: serviceIcons[i],
    title: t(`services.${i}.title`),
    description: t(`services.${i}.description`),
    features: [0, 1, 2, 3].map((j) => t(`services.${i}.features.${j}`))
  }));

  const compliance = [0, 1, 2, 3, 4, 5].map((i) => ({
    name: t(`compliance.${i}.name`),
    description: t(`compliance.${i}.description`)
  }));

  const process = [0, 1, 2, 3].map((i) => ({
    step: t(`process.${i}.step`),
    title: t(`process.${i}.title`),
    duration: t(`process.${i}.duration`),
    description: t(`process.${i}.description`),
    deliverables: [0, 1, 2, 3].map((j) => t(`process.${i}.deliverables.${j}`))
  }));

  const results = [0, 1, 2, 3].map((i) => ({
    metric: t(`results.${i}.metric`),
    label: t(`results.${i}.label`)
  }));

  const faq = [0, 1, 2, 3].map((i) => ({
    question: t(`faq.${i}.question`),
    answer: t(`faq.${i}.answer`)
  }));

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-void-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm">
                {t('badge_owasp')}
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                {t('badge_gdpr')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {t('title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                {t('title_gradient')}
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t('cta_primary')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-void-700 text-mist-200 rounded-lg hover:bg-void-800 transition-colors"
              >
                {t('cta_secondary')}
              </a>
            </div>
          </div>
        </section>

        {/* Threats Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              {t('threats_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('threats_subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {threats.map((threat, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-red-500/30 transition-colors"
                >
                  <threat.icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{threat.title}</h3>
                  <p className="text-mist-400">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              {t('services_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('services_subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-void-900 to-void-950 border border-void-800 rounded-xl hover:border-orange-500/30 transition-colors"
                >
                  <service.icon className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{service.title}</h3>
                  <p className="text-mist-400 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-mist-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              {t('compliance_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('compliance_subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compliance.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-green-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="w-8 h-8 text-green-400" />
                    <h3 className="text-xl font-bold text-mist-100">{item.name}</h3>
                  </div>
                  <p className="text-mist-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              {t('process_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('process_subtitle')}
            </p>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 bg-void-900 border border-void-800 rounded-xl hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
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
                          className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-sm text-orange-400"
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
              {t('results_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-2">
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
              {t('pricing_title')}
            </h2>
            <p className="text-mist-400 mb-8">
              {t('pricing_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t('pricing_cta')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              {t('faq_title')}
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
              {t('cta_title')}
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              {t('cta_description')}
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Shield className="w-5 h-5" />
              {t('cta_button')}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
