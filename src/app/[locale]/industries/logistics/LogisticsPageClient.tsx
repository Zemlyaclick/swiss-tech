'use client';

import { motion } from 'framer-motion';
import { 
  Truck, Package, MapPin, Clock, 
  BarChart3, Zap, Globe, Warehouse,
  Award, ArrowRight, Route, Settings
} from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

interface LogisticsPageClientProps {
  locale: Locale;
}

interface Challenge {
  title: string;
  description: string;
}

interface Solution {
  title: string;
  description: string;
  features: string[];
}

interface CaseResult {
  metric: string;
  label: string;
}

interface CaseStudy {
  client: string;
  challenge: string;
  solution: string;
  results: CaseResult[];
}

export default function LogisticsPageClient({ locale }: LogisticsPageClientProps) {
  const t = useTranslations('industry_logistics');
  
  const challengeIcons = [Route, MapPin, Warehouse, Settings];
  const challenges = (t.raw('challenges') as Challenge[]).map((challenge, index) => ({
    ...challenge,
    icon: challengeIcons[index],
  }));

  const solutions = t.raw('solutions') as Solution[];
  const caseStudy = t.raw('case_study') as CaseStudy;
  const techStack = t.raw('tech_stack') as string[];

  return (
    <main className="relative min-h-screen bg-void-950">
      <Navigation locale={locale} />
      
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-void-950 to-void-950" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Truck className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-orange-400 font-medium">{t('badge')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {t('hero_title_1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                {t('hero_title_2')}
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 mb-8 max-w-2xl">
              {t('hero_description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-500/90 text-white font-semibold rounded-xl transition-colors"
              >
                {t('discuss_project')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#case-study"
                className="inline-flex items-center gap-2 px-6 py-3 border border-mist-700 hover:border-orange-500 text-white rounded-xl transition-colors"
              >
                {t('view_case')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('challenges_title')}
            </h2>
            <p className="text-mist-400 max-w-2xl mx-auto">
              {t('challenges_subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                className="p-6 rounded-2xl bg-void-900/60 border border-mist-800/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{challenge.title}</h3>
                <p className="text-mist-400 text-sm">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24 bg-void-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('solutions_title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="p-6 md:p-8 rounded-2xl bg-void-950/60 border border-mist-800/30 hover:border-orange-500/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl text-white font-semibold mb-3">{solution.title}</h3>
                <p className="text-mist-400 mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-void-900 to-void-950 border border-orange-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-medium text-sm">{t('case_study_label')}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              {caseStudy.client}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-mist-400 text-sm uppercase tracking-wider mb-2">{t('case_challenge')}</h4>
                <p className="text-white">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-mist-400 text-sm uppercase tracking-wider mb-2">{t('case_solution')}</h4>
                <p className="text-white">{caseStudy.solution}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.results.map((result) => (
                <div key={result.label} className="p-4 rounded-xl bg-void-800/50">
                  <div className="text-2xl md:text-3xl font-display font-bold text-orange-400 mb-1">
                    {result.metric}
                  </div>
                  <div className="text-mist-400 text-sm">{result.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24 bg-void-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              {t('tech_title')}
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 rounded-lg bg-void-950/60 border border-mist-800/30 text-mist-300 text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('cta_title')}
            </h2>
            <p className="text-mist-400 mb-8 max-w-2xl mx-auto">
              {t('cta_description')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-500/90 text-white font-semibold rounded-xl transition-colors"
            >
              {t('cta_button')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
