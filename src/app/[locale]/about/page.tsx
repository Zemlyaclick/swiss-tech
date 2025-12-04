import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Award, 
  Heart, 
  Zap,
  Globe,
  Clock,
  ArrowRight,
  MapPin,
  Handshake,
  Lightbulb,
  Linkedin
} from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'about' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function AboutPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'about' });

  const valueIcons = [Shield, Heart, Lightbulb, Zap];
  const values = (t.raw('values') as Array<{ title: string; description: string }>).map((v, i) => ({
    ...v,
    icon: valueIcons[i]
  }));

  const stats = t.raw('stats') as Array<{ value: string; label: string; sublabel: string }>;
  const milestones = t.raw('milestones') as Array<{ year: string; title: string; description: string }>;
  const team = t.raw('team_members') as Array<{ name: string; role: string; description: string; initials: string }>;
  const certifications = t.raw('certifications') as Array<{ name: string; description: string }>;

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-blue/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-laser-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-laser-purple/10 rounded-full blur-3xl" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-laser-cyan/10 border border-laser-cyan/30 rounded-full text-laser-cyan text-sm">
                {t('badge_since')}
              </span>
              <span className="px-3 py-1 bg-laser-blue/10 border border-laser-blue/30 rounded-full text-laser-blue text-sm">
                {t('badge_location')}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-white">{t('hero_title_1')} </span>
              <span className="bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple bg-clip-text text-transparent">
                {t('hero_title_2')}
              </span>
              <br />
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
                {t('cta_discuss')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={`/${locale}/cases`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-mist-700 rounded-lg text-mist-300 hover:border-laser-cyan hover:text-laser-cyan transition-colors"
              >
                {t('cta_cases')}
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-void-900/50 border border-mist-800/50 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-laser-cyan to-laser-blue bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium">{stat.label}</div>
                  <div className="text-mist-500 text-sm">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('mission_label')}</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4 mb-6">
                  {t('mission_title')}
                </h2>
                <p className="text-mist-300 leading-relaxed mb-6">
                  {t('mission_p1')}
                </p>
                <p className="text-mist-300 leading-relaxed">
                  {t('mission_p2')}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="p-5 bg-void-900/50 border border-mist-800/50 rounded-xl"
                  >
                    <value.icon className="w-8 h-8 text-laser-cyan mb-3" />
                    <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                    <p className="text-mist-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('history_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('history_title')}
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-mist-800 md:-translate-x-px" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="p-4 md:p-6 bg-void-900/50 border border-mist-800/50 rounded-xl inline-block max-w-[calc(100vw-5rem)] md:max-w-none">
                        <div className="text-laser-cyan font-mono text-sm mb-1">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-mist-400">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-void-900 border-2 border-laser-cyan flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-laser-cyan" />
                    </div>
                    
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('team_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('team_title')}
              </h2>
              <p className="text-mist-400 mt-4 max-w-2xl mx-auto">
                {t('team_subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group p-6 bg-void-900/50 border border-mist-800/50 rounded-xl hover:border-laser-cyan/30 transition-all duration-300 text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-laser-cyan/20 to-laser-purple/20 flex items-center justify-center overflow-hidden">
                      <span className="text-2xl font-bold text-laser-cyan">{member.initials}</span>
                    </div>
                    <a 
                      href="https://linkedin.com/in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center hover:bg-[#004182] transition-colors shadow-lg"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <div className="text-laser-cyan text-sm mb-3">{member.role}</div>
                  <p className="text-mist-400 text-sm">{member.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-laser-cyan/5 to-laser-purple/5 border border-laser-cyan/20 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-white mb-2">{t('join_title')}</h3>
              <p className="text-mist-400 mb-4">
                {t('join_description')}
              </p>
              <a 
                href={`/${locale}/careers`}
                className="inline-flex items-center gap-2 text-laser-cyan hover:underline"
              >
                {t('join_link')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('certs_label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                {t('certs_title')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-void-900/50 border border-mist-800/50 rounded-xl text-center"
                >
                  <Award className="w-10 h-10 text-laser-cyan mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-1">{cert.name}</h3>
                  <p className="text-mist-500 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">{t('location_label')}</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4 mb-6">
                  {t('location_title')}
                </h2>
                <p className="text-mist-300 leading-relaxed mb-6">
                  {t('location_description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-laser-cyan" />
                    <span className="text-mist-300">{t('location_address')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-laser-cyan" />
                    <span className="text-mist-300">{t('location_global')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-laser-cyan" />
                    <span className="text-mist-300">{t('location_timezone')}</span>
                  </div>
                </div>
              </div>
              <div className="bg-void-900/50 border border-mist-800/50 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-mist-600 mx-auto mb-4" />
                  <p className="text-mist-500">{t('location_address')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <Handshake className="w-16 h-16 text-laser-cyan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              {t('cta_title')}
            </h2>
            <p className="text-mist-300 mb-8 text-lg max-w-2xl mx-auto">
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
