import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
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

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'services_automation' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function AutomationPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'services_automation' });

  const problemIcons = [Clock, Users, Database, RefreshCw, Calculator, TrendingUp];
  const benefitIcons = [Zap, Shield, Plug, Clock, BarChart3, TrendingUp];
  const automationIcons = [Mail, FileText, Database, BarChart3, Bot, Workflow];

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

  const automationTypes = automationIcons.map((icon, index) => ({
    icon,
    title: t(`automation_types.${index}.title`),
    description: t(`automation_types.${index}.description`),
    examples: [
      t(`automation_types.${index}.examples.0`),
      t(`automation_types.${index}.examples.1`),
      t(`automation_types.${index}.examples.2`),
      t(`automation_types.${index}.examples.3`)
    ]
  }));

  const techStack = [
    { name: 'n8n', category: 'Workflow' },
    { name: 'Zapier', category: 'Integrations' },
    { name: 'Make (Integromat)', category: 'Integrations' },
    { name: 'Power Automate', category: 'Microsoft' },
    { name: 'Python', category: 'Scripts' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Apache Airflow', category: 'ETL' },
    { name: 'RabbitMQ', category: 'Queues' },
    { name: 'Redis', category: 'Cache' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'REST API', category: 'Integrations' },
    { name: 'Webhooks', category: 'Events' }
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

  const cases = [0, 1, 2].map(index => ({
    title: t(`cases.${index}.title`),
    before: t(`cases.${index}.before`),
    after: t(`cases.${index}.after`),
    result: t(`cases.${index}.result`)
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
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-laser-cyan/10 border border-laser-cyan/30 rounded-full text-laser-cyan text-sm">
                {t('badge1')}
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                {t('badge2')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {t('hero_title_1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">
                {t('hero_title_2')}
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              {t('hero_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t('cta_audit')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-void-700 text-mist-200 rounded-lg hover:bg-void-800 transition-colors"
              >
                {t('cta_cases')}
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
              {t('automation_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('automation_subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              {t('cases_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('cases_subtitle')}
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
                      <div className="text-sm text-red-400 mb-1">{t('before_label')}</div>
                      <p className="text-mist-300">{caseItem.before}</p>
                    </div>
                    <div className="p-4 bg-laser-cyan/10 border border-laser-cyan/20 rounded-lg">
                      <div className="text-sm text-laser-cyan mb-1">{t('after_label')}</div>
                      <p className="text-mist-300">{caseItem.after}</p>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="text-sm text-green-400 mb-1">{t('result_label')}</div>
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
              {t('tech_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('tech_subtitle')}
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
              {t('process_title')}
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              {t('process_subtitle')}
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
              {t('results_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
              {t('pricing_title')}
            </h2>
            <p className="text-mist-400 mb-8">
              {t('pricing_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Cog className="w-5 h-5" />
              {t('cta_button')}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
