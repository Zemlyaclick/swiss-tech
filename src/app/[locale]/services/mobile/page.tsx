import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Smartphone, 
  Zap, 
  Shield, 
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Code,
  Layers,
  Bell,
  MapPin,
  Camera,
  Wifi,
  Star,
  Download,
  Globe,
  Cpu
} from 'lucide-react';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'services_mobile' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function MobilePage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'services_mobile' });

  const problemIcons = [Clock, Users, Zap, Shield, TrendingUp, Globe];
  const benefitIcons = [Smartphone, Zap, Shield, Bell, Wifi, TrendingUp];
  const appTypeIcons = [Users, Layers, MapPin, Camera, Bell, TrendingUp];

  const problems = problemIcons.map((icon, index) => ({
    icon,
    title: t(`problems.${index}.title`),
    description: t(`problems.${index}.description`)
  }));

  const benefits = benefitIcons.map((icon, index) => ({
    icon,
    title: t(`benefits.${index}.title`),
    description: t(`benefits.${index}.description`)
  }));

  const comparison = [0, 1, 2, 3, 4, 5, 6].map(index => ({
    feature: t(`comparison.${index}.feature`),
    web: t(`comparison.${index}.web`),
    native: t(`comparison.${index}.native`),
    cross: t(`comparison.${index}.cross`)
  }));

  const appTypes = appTypeIcons.map((icon, index) => ({
    icon,
    title: t(`app_types.${index}.title`),
    description: t(`app_types.${index}.description`),
    features: [
      t(`app_types.${index}.features.0`),
      t(`app_types.${index}.features.1`),
      t(`app_types.${index}.features.2`),
      t(`app_types.${index}.features.3`)
    ]
  }));

  const techStack = [
    { name: 'React Native', category: 'Cross-platform' },
    { name: 'Flutter', category: 'Cross-platform' },
    { name: 'Expo', category: 'Cross-platform' },
    { name: 'Swift', category: 'iOS Native' },
    { name: 'SwiftUI', category: 'iOS Native' },
    { name: 'Kotlin', category: 'Android Native' },
    { name: 'Jetpack Compose', category: 'Android Native' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Redux/MobX', category: 'State' },
    { name: 'CodePush', category: 'Updates' },
    { name: 'Fastlane', category: 'CI/CD' }
  ];

  const process = [0, 1, 2, 3].map(index => ({
    step: t(`process.${index}.step`),
    title: t(`process.${index}.title`),
    duration: t(`process.${index}.duration`),
    description: t(`process.${index}.description`),
    deliverables: [
      t(`process.${index}.deliverables.0`),
      t(`process.${index}.deliverables.1`),
      t(`process.${index}.deliverables.2`),
      t(`process.${index}.deliverables.3`)
    ]
  }));

  const results = [0, 1, 2, 3].map(index => ({
    metric: t(`results.${index}.metric`),
    label: t(`results.${index}.label`)
  }));

  const faq = [0, 1, 2, 3].map(index => ({
    question: t(`faq.${index}.question`),
    answer: t(`faq.${index}.answer`)
  }));

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
                {t('badge_1')}
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                {t('badge_2')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {t('hero_title_1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-purple via-laser-cyan to-laser-blue">
                {t('hero_title_2')}
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              {t('hero_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-purple to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t('cta_primary')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-void-700 text-mist-200 rounded-lg hover:bg-void-800 transition-colors"
              >
                {t('cta_secondary')}
              </a>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              {t('problems_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('problems_subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              {t('benefits_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('benefits_subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Comparison Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              {t('comparison_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('comparison_subtitle')}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-void-700">
                    <th className="text-left p-4 text-mist-300 font-medium">{t('comparison_header_feature')}</th>
                    <th className="text-center p-4 text-mist-300 font-medium">{t('comparison_header_pwa')}</th>
                    <th className="text-center p-4 text-mist-300 font-medium">{t('comparison_header_native')}</th>
                    <th className="text-center p-4 text-laser-purple font-medium">{t('comparison_header_cross')}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-void-800">
                      <td className="p-4 text-mist-200">{row.feature}</td>
                      <td className="p-4 text-center text-mist-400">{row.web}</td>
                      <td className="p-4 text-center text-mist-400">{row.native}</td>
                      <td className="p-4 text-center text-laser-cyan font-medium">{row.cross}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* App Types Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              {t('app_types_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('app_types_subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appTypes.map((type, index) => (
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
                        <CheckCircle className="w-4 h-4 text-laser-purple" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              {t('tech_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('tech_subtitle')}
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
        <section id="process" className="py-20 px-4 md:px-6">
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
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              {t('results_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-purple to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-purple to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Smartphone className="w-5 h-5" />
              {t('cta_button')}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
