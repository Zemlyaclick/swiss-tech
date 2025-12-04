import { Metadata } from 'next';
import { Globe, Zap, Search, TrendingUp, Smartphone, Shield, ArrowRight, X, Check, Layout, ShoppingCart, Building2, Newspaper, Palette, Code2 } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'services_websites' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function WebsitesPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: 'services_websites' });

  const benefitIcons = [
    <Zap key="zap" size={24} className="text-laser-cyan" />,
    <Search key="search" size={24} className="text-laser-cyan" />,
    <TrendingUp key="trending" size={24} className="text-laser-cyan" />,
    <Smartphone key="phone" size={24} className="text-laser-cyan" />,
    <Shield key="shield" size={24} className="text-laser-cyan" />,
    <Code2 key="code" size={24} className="text-laser-cyan" />
  ];

  const benefits = [0, 1, 2, 3, 4, 5].map((i) => ({
    icon: benefitIcons[i],
    title: t(`benefits.${i}.title`),
    description: t(`benefits.${i}.description`)
  }));

  const typeIcons = [
    <Layout key="layout" size={20} className="text-laser-cyan" />,
    <Building2 key="building" size={20} className="text-laser-cyan" />,
    <ShoppingCart key="cart" size={20} className="text-laser-cyan" />,
    <Newspaper key="news" size={20} className="text-laser-cyan" />,
    <Globe key="globe" size={20} className="text-laser-cyan" />,
    <Palette key="palette" size={20} className="text-laser-cyan" />
  ];

  const types = [0, 1, 2, 3, 4, 5].map((i) => ({
    icon: typeIcons[i],
    title: t(`types.${i}.title`),
    desc: t(`types.${i}.description`)
  }));

  const problems = [0, 1, 2, 3, 4, 5].map((i) => t(`problems.${i}`));
  const comparisonTemplate = [0, 1, 2, 3, 4, 5].map((i) => t(`comparison_template.${i}`));
  const comparisonCustom = [0, 1, 2, 3, 4, 5].map((i) => t(`comparison_custom.${i}`));

  const stack = [0, 1, 2, 3].map((i) => ({
    category: t(`stack.${i}.category`),
    items: t.raw(`stack.${i}.items`) as string[]
  }));

  const process = [0, 1, 2, 3].map((i) => ({
    step: t(`process.${i}.step`),
    title: t(`process.${i}.title`),
    desc: t(`process.${i}.description`)
  }));

  const results = [0, 1, 2, 3].map((i) => ({
    value: t(`results.${i}.value`),
    label: t(`results.${i}.label`)
  }));

  const faq = [0, 1, 2, 3].map((i) => ({
    q: t(`faq.${i}.question`),
    a: t(`faq.${i}.answer`)
  }));

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
            <span className="font-display font-bold text-lg text-mist-100">{t('badge')}</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mist-100 mb-6 leading-tight">
            {t('hero_title_1')}<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">{t('hero_title_2')}</span>
          </h1>
          
          <p className="text-mist-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            {t('hero_description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#benefits" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-laser-cyan to-laser-blue text-void-900 font-semibold hover:opacity-90 transition-opacity">
              {t('cta_benefits')}
              <ArrowRight size={18} />
            </a>
            <a href="#types" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-mist-300 hover:text-mist-100 hover:border-white/20 transition-colors">
              {t('cta_types')}
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-6">
            {t('problems_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {problems.map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <X size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-mist-300">{problem}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-mist-400 text-lg">
            {t('problems_solution')}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              {t('benefits_title')}
            </h2>
            <p className="text-mist-400 text-lg max-w-2xl mx-auto">
              {t('benefits_subtitle')}
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
              {t('comparison_title')}
            </h2>
            <p className="text-mist-400 text-lg">
              {t('comparison_subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Template */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium">
                {t('comparison_template_label')}
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-red-500/20">
                <ul className="space-y-4">
                  {comparisonTemplate.map((item, i) => (
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
                {t('comparison_custom_label')}
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-laser-cyan/20">
                <ul className="space-y-4">
                  {comparisonCustom.map((item, i) => (
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
              {t('types_title')}
            </h2>
            <p className="text-mist-400 text-lg">
              {t('types_subtitle')}
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
              {t('stack_title')}
            </h2>
            <p className="text-mist-400 text-lg">
              {t('stack_subtitle')}
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
              {t('process_title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, i) => (
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
              {t('results_title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((stat, i) => (
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
            {t('pricing_title')}
          </h2>
          <p className="text-mist-400 text-lg mb-8 max-w-2xl mx-auto">
            {t('pricing_description')}
          </p>
          <p className="text-laser-cyan">
            {t('pricing_hint')}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-4">
              {t('faq_title')}
            </h2>
          </div>
          
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="group p-5 rounded-2xl bg-void-950 border border-white/5 hover:border-laser-cyan/20 transition-colors">
                <summary className="font-medium text-mist-100 cursor-pointer flex items-center justify-between">
                  {item.q}
                  <span className="ml-4 text-laser-cyan group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-mist-400 text-sm leading-relaxed">{item.a}</p>
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
