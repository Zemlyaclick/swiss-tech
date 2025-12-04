import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  TrendingUp,
  Clock,
  Wallet,
  Stethoscope,
  ShoppingCart,
  Plane,
  Building
} from 'lucide-react';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'cases' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

interface Result {
  value: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: Result[];
  technologies: string[];
  duration: string;
}

interface Industry {
  name: string;
  count: number;
}

interface Stat {
  value: string;
  label: string;
  sublabel: string;
}

const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Finance': Wallet,
  'Finanzen': Wallet,
  'Finanze': Wallet,
  'Финансы': Wallet,
  'Healthcare': Stethoscope,
  'Gesundheit': Stethoscope,
  'Gsundheit': Stethoscope,
  'Santé': Stethoscope,
  'Sanità': Stethoscope,
  'Медицина': Stethoscope,
  'E-commerce': ShoppingCart,
  'E-Commerce': ShoppingCart,
  'Retail': ShoppingCart,
  'Commerce': ShoppingCart,
  'Einzelhandel': ShoppingCart,
  'Ритейл': ShoppingCart,
  'Travel': Plane,
  'Reisen': Plane,
  'Reise': Plane,
  'Voyage': Plane,
  'Viaggi': Plane,
  'Туризм': Plane,
  'Manufacturing': Building,
  'Fertigung': Building,
  'Fertigig': Building,
  'Industrie': Building,
  'Manifattura': Building,
  'Производство': Building,
};

const industryColors: Record<string, string> = {
  'fintech-platform': 'from-green-500 to-emerald-600',
  'medical-saas': 'from-blue-500 to-cyan-600',
  'telegram-ecommerce': 'from-purple-500 to-pink-600',
  'travel-automation': 'from-orange-500 to-red-600',
  'corporate-portal': 'from-indigo-500 to-violet-600',
};

export default async function CasesPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'cases' });

  const projects = t.raw('projects') as Project[];
  const industries = t.raw('industries') as Industry[];
  const stats = t.raw('stats') as Stat[];

  const industryIconsList = [Wallet, Stethoscope, ShoppingCart, Plane, Building];

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-purple/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-laser-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-laser-cyan/10 rounded-full blur-3xl" />
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="inline-block px-4 py-2 bg-laser-purple/10 border border-laser-purple/30 rounded-full text-laser-purple text-sm mb-6">
              {t('badge')}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-white">{t('hero_title_1')}</span>
              <span className="bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple bg-clip-text text-transparent">
                {t('hero_title_2')}
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 max-w-2xl mx-auto">
              {t('hero_description')}
            </p>
          </div>
        </section>

        {/* Industries */}
        <section className="py-8 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => {
                const IconComponent = industryIconsList[index] || Building;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-void-900/50 border border-mist-800/50 rounded-lg"
                  >
                    <IconComponent className="w-4 h-4 text-laser-cyan" />
                    <span className="text-mist-300">{industry.name}</span>
                    <span className="text-mist-500 text-sm">({industry.count})</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-20">
            {projects.map((project, index) => {
              const IconComponent = industryIcons[project.industry] || Building;
              const colorClass = industryColors[project.id] || 'from-gray-500 to-gray-600';
              
              return (
                <div 
                  key={project.id}
                  className="relative"
                >
                  {/* Case Card */}
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className={`aspect-video rounded-2xl bg-gradient-to-br ${colorClass} p-1`}>
                        <div className="w-full h-full bg-void-900 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-20 h-20 text-mist-600" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${colorClass} text-white`}>
                          {project.industry}
                        </span>
                        <span className="text-mist-500 text-sm flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {project.duration}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                        {project.title}
                      </h2>
                      <p className="text-mist-400 mb-4">{project.client}</p>
                      <p className="text-mist-300 mb-6">{project.description}</p>

                      {/* Results */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="text-center p-3 bg-void-900/50 border border-mist-800/50 rounded-lg">
                            <div className="text-xl font-bold text-laser-cyan">{result.value}</div>
                            <div className="text-mist-500 text-xs">{result.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-void-800 border border-mist-700 rounded text-mist-400 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expandable details */}
                      <details className="group">
                        <summary className="cursor-pointer text-laser-cyan hover:underline flex items-center gap-2">
                          {t('project_details')}
                          <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                        </summary>
                        <div className="mt-4 space-y-4 text-sm">
                          <div>
                            <h4 className="text-white font-semibold mb-1">{t('challenge')}</h4>
                            <p className="text-mist-400">{project.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">{t('solution')}</h4>
                            <p className="text-mist-400">{project.solution}</p>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>

                  {/* Separator */}
                  {index < projects.length - 1 && (
                    <div className="mt-20 h-px bg-gradient-to-r from-transparent via-mist-800 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Stats Summary */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                {t('stats_title')}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
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

        {/* CTA */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 bg-gradient-to-r from-laser-cyan/10 via-laser-blue/10 to-laser-purple/10 border border-laser-cyan/20 rounded-2xl">
              <TrendingUp className="w-16 h-16 text-laser-cyan mx-auto mb-6" />
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
