import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getTranslations } from 'next-intl/server';
import { 
  GraduationCap, 
  Users, 
  Code,
  Presentation,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Monitor,
  Zap,
  Target
} from 'lucide-react';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'services_training' });
  return {
    title: t('meta_title'),
    description: t('meta_description')
  };
}

export default async function TrainingPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'services_training' });

  const programIcons = [Code, Monitor, Zap, Target, BookOpen, Users];
  const programs = [0, 1, 2, 3, 4, 5].map((i) => ({
    icon: programIcons[i],
    title: t(`programs.${i}.title`),
    description: t(`programs.${i}.description`)
  }));

  const formats = [0, 1, 2, 3].map((i) => ({
    title: t(`formats.${i}.title`),
    description: t(`formats.${i}.description`),
    duration: t(`formats.${i}.duration`)
  }));

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-void-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm">
                {t('badge_training')}
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                {t('badge_workshops')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {t('title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                {t('title_gradient')}
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t('cta_primary')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              {t('programs_title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-emerald-500/30 transition-colors"
                >
                  <program.icon className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{program.title}</h3>
                  <p className="text-mist-400">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              {t('formats_title')}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {formats.map((format, index) => (
                <div key={index} className="p-6 bg-void-900 border border-void-800 rounded-xl text-center">
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{format.title}</h3>
                  <p className="text-mist-400 text-sm mb-3">{format.description}</p>
                  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">
                    {format.duration}
                  </span>
                </div>
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <GraduationCap className="w-5 h-5" />
              {t('cta_button')}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
