import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Eye, 
  Keyboard, 
  Volume2, 
  Users, 
  CheckCircle2, 
  FileCheck, 
  Target, 
  TrendingUp, 
  ArrowRight, 
  Zap, 
  Award, 
  Globe,
  Scale,
  Heart,
  Search,
  Code,
  TestTube,
  FileText,
  HelpCircle
} from 'lucide-react';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'services_accessibility' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function AccessibilityPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'services_accessibility' });

  const problemIcons = [Scale, Users, Eye, Keyboard, Volume2, Code];
  const benefitIcons = [Users, Scale, Search, Heart, TrendingUp, Globe];
  const serviceIcons = [Search, FileCheck, Code, TestTube, Keyboard, FileText];

  const problems = problemIcons.map((icon, index) => ({
    icon,
    title: t(`problems.${index}.title`),
    description: t(`problems.${index}.description`)
  }));

  const benefitColors = [
    'from-laser-cyan to-laser-blue',
    'from-laser-blue to-laser-purple',
    'from-laser-purple to-laser-cyan',
    'from-laser-cyan to-laser-blue',
    'from-laser-blue to-laser-purple',
    'from-laser-purple to-laser-cyan'
  ];

  const benefits = benefitIcons.map((icon, index) => ({
    icon,
    title: t(`benefits.${index}.title`),
    description: t(`benefits.${index}.description`),
    color: benefitColors[index]
  }));

  const services = serviceIcons.map((icon, index) => ({
    icon,
    title: t(`services.${index}.title`),
    description: t(`services.${index}.description`)
  }));

  const wcagLevels = [0, 1, 2].map(index => ({
    level: t(`wcag_levels.${index}.level`),
    title: t(`wcag_levels.${index}.title`),
    description: t(`wcag_levels.${index}.description`),
    criteria: t(`wcag_levels.${index}.criteria`)
  }));

  const process = [0, 1, 2, 3].map(index => ({
    step: t(`process.${index}.step`),
    title: t(`process.${index}.title`),
    description: t(`process.${index}.description`),
    duration: t(`process.${index}.duration`)
  }));

  const tools = [
    { name: 'axe DevTools', category: 'Autotests' },
    { name: 'WAVE', category: 'Analysis' },
    { name: 'Lighthouse', category: 'Audit' },
    { name: 'NVDA', category: 'Screen reader' },
    { name: 'VoiceOver', category: 'Screen reader' },
    { name: 'Color Contrast Analyzer', category: 'Contrast' },
    { name: 'Accessibility Insights', category: 'Testing' },
    { name: 'Pa11y', category: 'CI/CD' }
  ];

  const results = [0, 1, 2, 3].map(index => ({
    value: t(`results.${index}.value`),
    label: t(`results.${index}.label`),
    sublabel: t(`results.${index}.sublabel`)
  }));

  const faqs = [0, 1, 2, 3].map(index => ({
    question: t(`faq.${index}.question`),
    answer: t(`faq.${index}.answer`)
  }));

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-laser-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-laser-purple/10 rounded-full blur-3xl" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-laser-cyan/10 border border-laser-cyan/30 rounded-full text-laser-cyan text-sm">
                {t('badge_1')}
              </span>
              <span className="px-3 py-1 bg-laser-blue/10 border border-laser-blue/30 rounded-full text-laser-blue text-sm">
                {t('badge_2')}
              </span>
              <span className="px-3 py-1 bg-laser-purple/10 border border-laser-purple/30 rounded-full text-laser-purple text-sm">
                {t('badge_3')}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-white">{t('hero_title_1')}</span>
              <span className="bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple bg-clip-text text-transparent">
                {t('hero_title_2')}
              </span>
              <span className="text-white">{t('hero_title_3')}</span>
            </h1>
            
            <p className="text-xl text-mist-300 max-w-3xl mb-8 leading-relaxed">
              {t('hero_description')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-laser-cyan to-laser-blue rounded-lg font-semibold text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25 transition-all duration-300"
              >
                {t('cta_audit')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#wcag"
                className="inline-flex items-center gap-2 px-6 py-3 border border-mist-700 rounded-lg text-mist-300 hover:border-laser-cyan hover:text-laser-cyan transition-colors"
              >
                {t('cta_wcag')}
              </a>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('problems_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('problems_title')}
              </h2>
              <p className="text-mist-400 mt-4 max-w-2xl mx-auto">
                {t('problems_subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="group p-6 bg-void-900/50 border border-mist-800/50 rounded-xl hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                    <problem.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                  <p className="text-mist-400 text-sm leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('benefits_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('benefits_title')}
              </h2>
              <p className="text-mist-400 mt-4 max-w-2xl mx-auto">
                {t('benefits_subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-6 bg-void-900/50 border border-mist-800/50 rounded-xl hover:border-laser-cyan/30 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} p-[1px] mb-4`}>
                    <div className="w-full h-full bg-void-900 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-laser-cyan" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-mist-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WCAG Levels */}
        <section id="wcag" className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('wcag_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('wcag_title')}
              </h2>
              <p className="text-mist-400 mt-4 max-w-2xl mx-auto">
                {t('wcag_subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wcagLevels.map((item, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-xl border ${
                    item.level === 'AA' 
                      ? 'bg-gradient-to-b from-laser-cyan/10 to-void-900/50 border-laser-cyan/30' 
                      : 'bg-void-900/50 border-mist-800/50'
                  }`}
                >
                  {item.level === 'AA' && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-laser-cyan text-void-950 text-xs font-bold rounded-full">
                      {t('wcag_recommended')}
                    </div>
                  )}
                  <div className={`text-5xl font-bold mb-4 ${
                    item.level === 'AA' ? 'text-laser-cyan' : 'text-mist-500'
                  }`}>
                    {item.level}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-mist-400 text-sm mb-4">{item.description}</p>
                  <div className="text-mist-500 text-sm">{item.criteria}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('services_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('services_title')}
              </h2>
              <p className="text-mist-400 mt-4 max-w-2xl mx-auto">
                {t('services_subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-6 bg-void-900/50 border border-mist-800/50 rounded-xl hover:border-laser-cyan/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-laser-cyan/10 flex items-center justify-center mb-4 group-hover:bg-laser-cyan/20 transition-colors">
                    <service.icon className="w-6 h-6 text-laser-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-mist-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('tools_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('tools_title')}
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-void-900/50 border border-mist-800/50 rounded-lg hover:border-laser-cyan/30 transition-colors"
                >
                  <span className="text-white font-medium">{tool.name}</span>
                  <span className="text-mist-500 text-sm ml-2">/ {tool.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('process_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('process_title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-void-800 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-mist-400 text-sm mb-3">{item.description}</p>
                  <div className="text-laser-cyan text-sm font-medium">{item.duration}</div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-3 text-mist-700">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('results_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('results_title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {results.map((stat, index) => (
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

        {/* Pricing */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 bg-gradient-to-r from-laser-cyan/10 via-laser-blue/10 to-laser-purple/10 border border-laser-cyan/20 rounded-2xl text-center">
              <Award className="w-16 h-16 text-laser-cyan mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                {t('pricing_title')}
              </h2>
              <p className="text-mist-300 mb-6 max-w-2xl mx-auto">
                {t('pricing_description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue rounded-lg font-semibold text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25 transition-all"
                >
                  {t('pricing_cta')}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('faq_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('faq_title')}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-void-900/50 border border-mist-800/50 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-laser-cyan flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                      <p className="text-mist-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              {t('cta_title')}
            </h2>
            <p className="text-mist-300 mb-8 text-lg">
              {t('cta_description')}
            </p>
            <a 
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue rounded-lg font-semibold text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25 transition-all duration-300"
            >
              {t('cta_button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
