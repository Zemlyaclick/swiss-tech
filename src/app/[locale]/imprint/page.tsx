import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Building, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'imprint' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function ImprintPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'imprint' });

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        <section className="pt-32 pb-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-laser-cyan" />
              <span className="text-laser-cyan text-sm">{t('badge')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              {t('title')}
            </h1>

            <div className="space-y-8">
              
              {/* Company Info */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Building className="w-6 h-6 text-laser-cyan" />
                  {t('company_title')}
                </h2>
                <div className="space-y-4 text-mist-300">
                  <div>
                    <p className="text-white text-xl font-semibold">Swiss Tech Solutions GmbH</p>
                    <p className="text-mist-400">{t('company_type')}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div>
                      <p className="text-mist-500 text-sm mb-1">{t('legal_address')}</p>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-laser-cyan mt-1 flex-shrink-0" />
                        <div>
                          <p>Bahnhofstrasse 1</p>
                          <p>8001 Zürich</p>
                          <p>Switzerland</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-mist-500 text-sm mb-1">{t('registration_data')}</p>
                      <div className="space-y-1">
                        <p><span className="text-mist-500">UID:</span> CHE-123.456.789</p>
                        <p><span className="text-mist-500">{t('trade_register')}:</span> Zürich</p>
                        <p><span className="text-mist-500">{t('entry_number')}:</span> CH-020.1.234.567-8</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">{t('contact_title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-mist-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-laser-cyan/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-laser-cyan" />
                    </div>
                    <div>
                      <p className="text-mist-500 text-sm">{t('email')}</p>
                      <a href="mailto:hello@swissmade.it" className="text-white hover:text-laser-cyan">
                        hello@swissmade.it
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-laser-cyan/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-laser-cyan" />
                    </div>
                    <div>
                      <p className="text-mist-500 text-sm">{t('phone')}</p>
                      <a href="tel:+41441234567" className="text-white hover:text-laser-cyan">
                        +41 44 123 45 67
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-laser-cyan/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-laser-cyan" />
                    </div>
                    <div>
                      <p className="text-mist-500 text-sm">{t('website')}</p>
                      <a href="https://swissmade.it" className="text-white hover:text-laser-cyan">
                        swissmade.it
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Management */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">{t('management_title')}</h2>
                <div className="text-mist-300">
                  <p><span className="text-mist-500">{t('managing_director')}:</span></p>
                  <p className="text-white">{t('director_name')}</p>
                </div>
              </div>

              {/* VAT */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">{t('tax_title')}</h2>
                <div className="text-mist-300 space-y-2">
                  <p><span className="text-mist-500">{t('vat_number')}:</span> CHE-123.456.789 MWST</p>
                  <p><span className="text-mist-500">{t('tax_authority')}:</span> Kanton Zürich</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">{t('disclaimer_title')}</h2>
                <div className="text-mist-300 space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2">{t('disclaimer_content')}</h3>
                    <p className="text-sm">{t('disclaimer_content_text')}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-2">{t('disclaimer_links')}</h3>
                    <p className="text-sm">{t('disclaimer_links_text')}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-2">{t('disclaimer_copyright')}</h3>
                    <p className="text-sm">{t('disclaimer_copyright_text')}</p>
                  </div>
                </div>
              </div>

              {/* Data Protection */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">{t('data_protection_title')}</h2>
                <div className="text-mist-300">
                  <p className="mb-4">
                    {t('data_protection_text')}{' '}
                    <a href={`/${locale}/privacy`} className="text-laser-cyan hover:underline">
                      {t('data_protection_link')}
                    </a>.
                  </p>
                  <p>
                    <span className="text-mist-500">{t('data_protection_officer')}:</span><br />
                    <a href="mailto:privacy@swissmade.it" className="text-laser-cyan hover:underline">
                      privacy@swissmade.it
                    </a>
                  </p>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">{t('dispute_title')}</h2>
                <div className="text-mist-300 text-sm space-y-4">
                  <p>
                    {t('dispute_text_1')}{' '}
                    <a 
                      href="https://ec.europa.eu/consumers/odr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-laser-cyan hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                  <p>{t('dispute_text_2')}</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
