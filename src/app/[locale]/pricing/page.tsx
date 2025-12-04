import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Check, 
  X, 
  ArrowRight, 
  Zap, 
  Star,
  HelpCircle,
  Clock,
  Users,
  Shield,
  Rocket,
  Calculator
} from 'lucide-react';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'pricing' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

interface Feature {
  text: string;
  included: boolean;
}

interface Package {
  name: string;
  description: string;
  price: string;
  period: string;
  popular?: boolean;
  timeline: string;
  support: string;
  features: Feature[];
}

interface Service {
  name: string;
  price: string;
  time: string;
}

interface Included {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default async function PricingPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'pricing' });

  const packages = t.raw('packages') as Package[];
  const services = t.raw('services') as Service[];
  const faqs = t.raw('faqs') as FAQ[];
  const included = t.raw('included') as Included[];

  const icons = [Shield, Users, Rocket, Zap];

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        {/* Hero */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-blue/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-laser-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-laser-purple/10 rounded-full blur-3xl" />
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="inline-block px-4 py-2 bg-laser-cyan/10 border border-laser-cyan/30 rounded-full text-laser-cyan text-sm mb-6">
              {t('badge')}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-white">{t('hero_title_1')} </span>
              <span className="bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple bg-clip-text text-transparent">
                {t('hero_title_2')}
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 max-w-2xl mx-auto">
              {t('hero_description')}
            </p>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl border ${
                    pkg.popular 
                      ? 'bg-gradient-to-b from-laser-cyan/10 to-void-900/50 border-laser-cyan/30' 
                      : 'bg-void-900/50 border-mist-800/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-laser-cyan text-void-950 text-xs font-bold rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {t('popular')}
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-mist-400">{pkg.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-mist-400 ml-2">{pkg.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-1 text-mist-400">
                      <Clock className="w-4 h-4" />
                      {pkg.timeline}
                    </div>
                    <div className="flex items-center gap-1 text-mist-400">
                      <Shield className="w-4 h-4" />
                      {pkg.support}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-laser-cyan flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-mist-600 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-mist-300' : 'text-mist-600'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`/${locale}/contact`}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-laser-cyan to-laser-blue text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25'
                        : 'border border-mist-700 text-mist-300 hover:border-laser-cyan hover:text-laser-cyan'
                    }`}
                  >
                    {t('discuss_project')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Price List */}
        <section className="py-16 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('price_list_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('price_list_title')}
              </h2>
            </div>

            <div className="bg-void-900/50 border border-mist-800/50 rounded-xl overflow-hidden">
              {/* Desktop table header */}
              <div className="hidden md:grid grid-cols-3 gap-4 p-4 bg-void-800/50 text-sm font-semibold text-mist-400">
                <div>{t('service')}</div>
                <div className="text-right">{t('cost')}</div>
                <div className="text-right">{t('timeline')}</div>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-4 border-t border-mist-800/30 hover:bg-void-800/30 transition-colors"
                >
                  {/* Mobile layout */}
                  <div className="md:hidden">
                    <div className="text-white font-medium mb-2">{service.name}</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-laser-cyan font-semibold">{service.price}</span>
                      <span className="text-mist-400">{service.time}</span>
                    </div>
                  </div>
                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-3 gap-4 items-center">
                    <div className="text-white">{service.name}</div>
                    <div className="text-right text-laser-cyan font-semibold">{service.price}</div>
                    <div className="text-right text-mist-400">{service.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-mist-500 text-sm mt-6">
              {t('price_note')}
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                {t('included_title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {included.map((item, index) => {
                const IconComponent = icons[index] || Shield;
                return (
                  <div
                    key={index}
                    className="p-6 bg-void-900/50 border border-mist-800/50 rounded-xl text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-laser-cyan/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-laser-cyan" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-mist-400 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
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
                      <p className="text-mist-400">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 bg-gradient-to-r from-laser-cyan/10 via-laser-blue/10 to-laser-purple/10 border border-laser-cyan/20 rounded-2xl">
              <Calculator className="w-16 h-16 text-laser-cyan mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                {t('cta_title')}
              </h2>
              <p className="text-mist-300 mb-8 max-w-xl mx-auto">
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
