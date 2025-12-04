'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, Info, ChevronRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

type ProjectType = 'webapp' | 'mobile' | 'telegram' | 'ai' | 'automation';
type Complexity = 'simple' | 'medium' | 'complex';

// Функция форматирования чисел без зависимости от локали
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
};

interface Feature {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface ProjectTypeConfig {
  id: string;
  name: string;
  icon: string;
}

interface ComplexityLevel {
  id: string;
  name: string;
  description: string;
}

interface FeatureConfig {
  id: string;
  name: string;
  description: string;
}

const basePrices: Record<string, number> = {
  webapp: 15000,
  mobile: 25000,
  telegram: 8000,
  ai: 12000,
  automation: 10000,
};

const multipliers: Record<string, number> = {
  simple: 0.7,
  medium: 1,
  complex: 1.8,
};

const featurePrices: Record<string, number> = {
  auth: 2000,
  payments: 3000,
  analytics: 2500,
  multilang: 1500,
  admin: 4000,
  notifications: 1500,
  integrations: 3000,
  security: 3500,
};

export default function PriceCalculator() {
  const t = useTranslations('price_calculator');
  const params = useParams();
  const locale = params.locale as string;
  const [projectType, setProjectType] = useState<ProjectType>('webapp');
  const [complexity, setComplexity] = useState<Complexity>('medium');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const projectTypes = t.raw('project_types') as ProjectTypeConfig[];
  const complexityLevels = t.raw('complexity_levels') as ComplexityLevel[];
  const featuresConfig = t.raw('features') as FeatureConfig[];

  const features: Feature[] = featuresConfig.map(f => ({
    ...f,
    price: featurePrices[f.id] || 0,
  }));

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const estimate = useMemo(() => {
    const basePrice = basePrices[projectType] || 15000;
    const multiplier = multipliers[complexity] || 1;
    
    const baseTotal = basePrice * multiplier;
    const featuresPrice = selectedFeatures.reduce((sum, featureId) => {
      return sum + (featurePrices[featureId] || 0);
    }, 0);

    const total = baseTotal + featuresPrice;
    
    // Time estimate based on price
    let time = '';
    if (total < 15000) time = t('time_2_4_weeks');
    else if (total < 30000) time = t('time_1_2_months');
    else if (total < 50000) time = t('time_2_3_months');
    else time = t('time_3_6_months');

    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.1),
      time,
    };
  }, [projectType, complexity, selectedFeatures, t]);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-void-900/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 to-void-900" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-laser-purple/5 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-laser-purple/10 border border-laser-purple/30 text-laser-purple text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            {t('badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-mist-400 text-lg max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Type */}
            <motion.div
              className="p-6 rounded-2xl bg-void-950/60 border border-mist-800/30"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">{t('step1')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id as ProjectType)}
                    className={`p-3 rounded-xl text-center transition-all ${
                      projectType === type.id
                        ? 'bg-laser-cyan/20 border-2 border-laser-cyan text-white'
                        : 'bg-void-800/50 border border-mist-700/30 text-mist-400 hover:border-mist-600'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{type.icon}</span>
                    <span className="text-xs">{type.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Complexity */}
            <motion.div
              className="p-6 rounded-2xl bg-void-950/60 border border-mist-800/30"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">{t('step2')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {complexityLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setComplexity(level.id as Complexity)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      complexity === level.id
                        ? 'bg-laser-cyan/20 border-2 border-laser-cyan'
                        : 'bg-void-800/50 border border-mist-700/30 hover:border-mist-600'
                    }`}
                  >
                    <span className={`block font-medium mb-1 ${complexity === level.id ? 'text-white' : 'text-mist-300'}`}>
                      {level.name}
                    </span>
                    <span className="text-xs text-mist-500">{level.description}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="p-6 rounded-2xl bg-void-950/60 border border-mist-800/30"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">{t('step3')}</h3>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-laser-cyan text-sm flex items-center gap-1"
                >
                  {isExpanded ? t('collapse') : t('show_all')}
                  <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </button>
              </div>
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${!isExpanded ? 'max-h-[200px] overflow-hidden' : ''}`}>
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`p-3 rounded-xl text-left transition-all ${
                      selectedFeatures.includes(feature.id)
                        ? 'bg-laser-cyan/20 border-2 border-laser-cyan'
                        : 'bg-void-800/50 border border-mist-700/30 hover:border-mist-600'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <span className={`text-sm font-medium ${selectedFeatures.includes(feature.id) ? 'text-white' : 'text-mist-300'}`}>
                        {feature.name}
                      </span>
                      {selectedFeatures.includes(feature.id) && (
                        <Check className="w-4 h-4 text-laser-cyan flex-shrink-0" />
                      )}
                    </div>
                    <span className="text-xs text-mist-500 block">{feature.description}</span>
                    <span className="text-xs text-laser-cyan mt-1 block">+CHF {formatNumber(feature.price)}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Estimate */}
          <motion.div
            className="lg:sticky lg:top-24 h-fit"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-void-900 to-void-950 border border-laser-cyan/30 shadow-lg shadow-laser-cyan/10">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-laser-cyan" />
                {t('estimate_title')}
              </h3>
              
              <div className="mb-6">
                <div className="text-mist-400 text-sm mb-1">{t('cost_label')}</div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white">
                  CHF {formatNumber(estimate.min)} - {formatNumber(estimate.max)}
                </div>
              </div>

              <div className="mb-6 p-3 rounded-lg bg-void-800/50">
                <div className="text-mist-400 text-sm mb-1">{t('time_label')}</div>
                <div className="text-white font-medium">{estimate.time}</div>
              </div>

              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-center gap-2 text-mist-400">
                  <Check className="w-4 h-4 text-laser-cyan" />
                  <span>{t('fixed_price')}</span>
                </div>
                <div className="flex items-center gap-2 text-mist-400">
                  <Check className="w-4 h-4 text-laser-cyan" />
                  <span>{t('support_60')}</span>
                </div>
                <div className="flex items-center gap-2 text-mist-400">
                  <Check className="w-4 h-4 text-laser-cyan" />
                  <span>{t('nda_included')}</span>
                </div>
              </div>

              <Link
                href={`/${locale}/contact`}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-laser-cyan hover:bg-laser-cyan/90 text-void-950 font-semibold rounded-xl transition-colors"
              >
                {t('get_exact')}
                <ChevronRight className="w-4 h-4" />
              </Link>

              <p className="text-mist-500 text-xs text-center mt-4 flex items-center justify-center gap-1">
                <Info className="w-3 h-3" />
                {t('preliminary_note')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
