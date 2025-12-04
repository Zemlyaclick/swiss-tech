import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  Shield,
  Zap
} from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'contact' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function ContactPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  const benefitIcons = [Clock, Calendar, Shield, Zap];
  const benefits = (t.raw('benefits') as Array<{ title: string; description: string }>).map((b, i) => ({
    ...b,
    icon: benefitIcons[i]
  }));
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact_email_label'),
      value: 'hello@swissmade.it',
      href: 'mailto:hello@swissmade.it',
      description: t('contact_email_description')
    },
    {
      icon: Phone,
      label: t('contact_phone_label'),
      value: '+41 44 123 45 67',
      href: 'tel:+41441234567',
      description: t('contact_phone_description')
    },
    {
      icon: MapPin,
      label: t('contact_office_label'),
      value: 'Zürich, Switzerland',
      href: 'https://maps.google.com/?q=Zurich,Switzerland',
      description: t('contact_office_description')
    },
    {
      icon: Send,
      label: t('contact_telegram_label'),
      value: '@swissmadeit',
      href: 'https://t.me/swissmadeit',
      description: t('contact_telegram_description')
    }
  ];

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-laser-cyan/10 rounded-full blur-3xl" />
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

        {/* Main Content */}
        <section className="py-12 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-void-900/50 border border-mist-800/50 rounded-2xl p-5 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                    {t('form_title')}
                  </h2>
                  <p className="text-mist-400 mb-8">
                    {t('form_subtitle')}
                  </p>
                  
                  <ContactForm locale={locale} />
                </div>
              </div>

              {/* Contact Info */}
              <div className="order-1 lg:order-2 space-y-8">
                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group p-5 bg-void-900/50 border border-mist-800/50 rounded-xl hover:border-laser-cyan/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-laser-cyan/10 flex items-center justify-center group-hover:bg-laser-cyan/20 transition-colors">
                          <item.icon className="w-5 h-5 text-laser-cyan" />
                        </div>
                        <div>
                          <div className="text-mist-500 text-sm">{item.label}</div>
                          <div className="text-white font-medium">{item.value}</div>
                          <div className="text-mist-500 text-xs mt-1">{item.description}</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Benefits */}
                <div className="p-6 bg-gradient-to-br from-laser-cyan/5 to-laser-purple/5 border border-laser-cyan/20 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-4">{t('benefits_title')}</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-laser-cyan/10 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-4 h-4 text-laser-cyan" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{benefit.title}</div>
                          <div className="text-mist-400 text-sm">{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-6 bg-void-900/50 border border-mist-800/50 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-laser-cyan" />
                    {t('hours_title')}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-mist-400">{t('hours_weekdays')}</span>
                      <span className="text-white">{t('hours_weekdays_time')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-mist-400">{t('hours_weekend')}</span>
                      <span className="text-mist-500">{t('hours_weekend_time')}</span>
                    </div>
                    <div className="pt-2 mt-2 border-t border-mist-800/50">
                      <div className="flex items-center gap-2 text-laser-cyan">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm">{t('hours_support')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('faq_label')}</span>
              <h2 className="text-3xl font-display font-bold text-white mt-4">
                {t('faq_title')}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-void-900/50 border border-mist-800/50 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-mist-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-void-900/50 border border-mist-800/50 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-mist-800/50">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-laser-cyan" />
                  {t('map_title')}
                </h3>
                <p className="text-mist-400 mt-1">
                  {t('map_subtitle')}
                </p>
              </div>
              <div className="aspect-[2/1] bg-void-800 flex items-center justify-center">
                <div className="text-center text-mist-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Zürich, Switzerland</p>
                  <a 
                    href="https://maps.google.com/?q=Zurich,Switzerland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-laser-cyan/10 border border-laser-cyan/30 rounded-lg text-laser-cyan text-sm hover:bg-laser-cyan/20 transition-colors"
                  >
                    {t('map_button')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 bg-gradient-to-r from-laser-cyan/10 via-laser-blue/10 to-laser-purple/10 border border-laser-cyan/20 rounded-2xl">
              <MessageSquare className="w-12 h-12 text-laser-cyan mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                {t('messenger_title')}
              </h2>
              <p className="text-mist-300 mb-6 max-w-xl mx-auto">
                {t('messenger_description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://t.me/swissmadeit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0088cc] rounded-lg font-semibold text-white hover:bg-[#0077b5] transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Telegram
                </a>
                <a 
                  href="https://wa.me/41441234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] rounded-lg font-semibold text-white hover:bg-[#20bd5a] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
