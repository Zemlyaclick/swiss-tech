import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'privacy' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function PrivacyPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  const sections = t.raw('sections') as Array<{ title: string; content: string }>;

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        <section className="pt-32 pb-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-laser-cyan" />
              <span className="text-laser-cyan text-sm">{t('last_update')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              {t('title')}
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-mist-300">
                {sections.map((section, index) => (
                  <section key={index}>
                    <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
                    <div className="whitespace-pre-line">{section.content}</div>
                  </section>
                ))}
              </div>
            </div>

            {/* Contact Box */}
            <div className="mt-12 p-6 bg-void-900/50 border border-mist-800/50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-laser-cyan" />
                <h3 className="text-lg font-semibold text-white">{t('contact_title')}</h3>
              </div>
              <p className="text-mist-400 mb-4">
                {t('contact_text')}
              </p>
              <a 
                href="mailto:privacy@swissmade.it"
                className="inline-flex items-center gap-2 text-laser-cyan hover:underline"
              >
                privacy@swissmade.it
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
