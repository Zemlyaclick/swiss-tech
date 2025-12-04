'use client';

import { motion } from 'framer-motion';
import { 
  Check, X, Minus, ArrowRight, Scale, 
  Clock, Shield, Users, Coins, Award,
  AlertTriangle, Zap, Building2
} from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

interface ComparePageClientProps {
  locale: Locale;
}

type ComparisonValue = 'yes' | 'no' | 'partial' | string;

interface ComparisonRow {
  feature: string;
  inhouse: ComparisonValue;
  freelancer: ComparisonValue;
  offshore: ComparisonValue;
  swissdev: ComparisonValue;
}

interface OptionData {
  title: string;
  pros: string[];
  cons: string[];
  bestFor: string;
}

export default function ComparePageClient({ locale }: ComparePageClientProps) {
  const t = useTranslations('compare');

  const comparisonData: ComparisonRow[] = t.raw('comparison');
  const optionsData: OptionData[] = t.raw('options');
  const whenItems: string[] = t.raw('when_items');

  const renderValue = (value: ComparisonValue) => {
    if (value === 'yes') {
      return <Check className="w-5 h-5 text-green-400" />;
    }
    if (value === 'no') {
      return <X className="w-5 h-5 text-red-400" />;
    }
    if (value === 'partial') {
      return <Minus className="w-5 h-5 text-yellow-400" />;
    }
    return <span className="text-mist-300 text-sm font-mono">{value}</span>;
  };

  const optionIcons = [Building2, Users, Scale, Award];

  return (
    <main className="relative min-h-screen bg-void-950">
      <Navigation locale={locale} />
      
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-void-950 to-void-950" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-laser-cyan/10 border border-laser-cyan/30 text-laser-cyan text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              {t('badge')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              {t('hero_title_1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan to-laser-blue">
                {t('hero_title_2')}
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 max-w-2xl mx-auto">
              {t('hero_description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-mist-800/30">
                  <th className="text-left py-4 px-4 text-mist-400 font-medium">{t('criteria')}</th>
                  <th className="text-center py-4 px-4 text-mist-400 font-medium">In-house</th>
                  <th className="text-center py-4 px-4 text-mist-400 font-medium">Freelancer</th>
                  <th className="text-center py-4 px-4 text-mist-400 font-medium">Offshore</th>
                  <th className="text-center py-4 px-4 text-laser-cyan font-semibold bg-laser-cyan/5 rounded-t-xl">Swiss Dev</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr 
                    key={row.feature}
                    className="border-b border-mist-800/20"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <td className="py-4 px-4 text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-center">{renderValue(row.inhouse)}</td>
                    <td className="py-4 px-4 text-center">{renderValue(row.freelancer)}</td>
                    <td className="py-4 px-4 text-center">{renderValue(row.offshore)}</td>
                    <td className="py-4 px-4 text-center bg-laser-cyan/5">{renderValue(row.swissdev)}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-mist-400">{t('legend_yes')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="w-4 h-4 text-yellow-400" />
              <span className="text-mist-400">{t('legend_partial')}</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-400" />
              <span className="text-mist-400">{t('legend_no')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Options Detail */}
      <section className="py-16 md:py-20 bg-void-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('detailed_title')}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {optionsData.map((option, index) => {
              const Icon = optionIcons[index];
              const isSwissAgency = index === 3;
              
              return (
                <motion.div
                  key={option.title}
                  className={`p-6 md:p-8 rounded-2xl border ${
                    isSwissAgency 
                      ? 'bg-laser-cyan/5 border-laser-cyan/30' 
                      : 'bg-void-950/60 border-mist-800/30'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${isSwissAgency ? 'bg-laser-cyan/20' : 'bg-void-800'}`}>
                      <Icon className={`w-5 h-5 ${isSwissAgency ? 'text-laser-cyan' : 'text-mist-400'}`} />
                    </div>
                    <h3 className={`text-xl font-semibold ${isSwissAgency ? 'text-laser-cyan' : 'text-white'}`}>
                      {option.title}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-green-400 text-sm font-medium mb-2 flex items-center gap-1">
                      <Check className="w-4 h-4" /> {t('advantages')}
                    </h4>
                    <ul className="space-y-1">
                      {option.pros.map((pro) => (
                        <li key={pro} className="text-mist-300 text-sm flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-red-400 text-sm font-medium mb-2 flex items-center gap-1">
                      <X className="w-4 h-4" /> {t('disadvantages')}
                    </h4>
                    <ul className="space-y-1">
                      {option.cons.map((con) => (
                        <li key={con} className="text-mist-300 text-sm flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-mist-800/30">
                    <span className="text-mist-500 text-xs uppercase tracking-wider">{t('best_for')}:</span>
                    <p className="text-white text-sm mt-1">{option.bestFor}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When to choose us */}
      <section className="py-16 md:py-20 border-t border-mist-800/20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              {t('when_title')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[Shield, Clock, Coins].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-void-900/50 border border-mist-800/30"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-8 h-8 text-laser-cyan mx-auto mb-3" />
                  <p className="text-mist-300 text-sm">{whenItems[index]}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-laser-cyan hover:bg-laser-cyan/90 text-void-950 font-semibold rounded-xl transition-colors"
            >
              {t('discuss_project')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
