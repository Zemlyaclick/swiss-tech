'use client';

import { motion } from 'framer-motion';
import { 
  Shield, Lock, FileCheck, Server, Eye, 
  UserCheck, Database, 
  CheckCircle, ArrowRight, Download, Globe
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';
import { useTranslations } from 'next-intl';

interface SecurityPageClientProps {
  locale: Locale;
}

interface NDAType {
  title: string;
  description: string;
  useCase: string;
}

interface Measure {
  title: string;
  items: string[];
}

interface Certification {
  name: string;
  description: string;
  status: string;
}

export default function SecurityPageClient({ locale }: SecurityPageClientProps) {
  const t = useTranslations('security');

  const ndaTypes = t.raw('nda_types') as NDAType[];
  const measures = t.raw('measures') as Measure[];
  const certifications = t.raw('certifications') as Certification[];
  const practices = t.raw('practices') as string[];

  const ndaIcons = [FileCheck, Database, UserCheck];
  const measureIcons = [Lock, Server, UserCheck, Eye];

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return t('confirmed');
      case 'in_progress': return t('in_progress');
      case 'planned': return t('planned');
      default: return status;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500/20 text-green-400';
      default: return 'bg-yellow-500/20 text-yellow-400';
    }
  };

  return (
    <main className="relative min-h-screen bg-void-950">
      <Navigation locale={locale} />
      
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-void-950 to-void-950" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-laser-cyan/10 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-laser-cyan/20">
                <Shield className="w-6 h-6 text-laser-cyan" />
              </div>
              <span className="text-laser-cyan font-medium">{t('badge')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {t('hero_title_1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan to-laser-blue">
                {t('hero_title_2')}
              </span>
            </h1>
            
            <p className="text-xl text-mist-300 mb-8 max-w-2xl">
              {t('hero_description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-laser-cyan hover:bg-laser-cyan/90 text-void-950 font-semibold rounded-xl transition-colors"
              >
                {t('request_nda')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#security"
                className="inline-flex items-center gap-2 px-6 py-3 border border-mist-700 hover:border-laser-cyan text-white rounded-xl transition-colors"
              >
                {t('about_security')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NDA Types */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('nda_title')}
            </h2>
            <p className="text-mist-400 max-w-2xl mx-auto">
              {t('nda_description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {ndaTypes.map((nda, index) => {
              const IconComponent = ndaIcons[index] || FileCheck;
              return (
                <motion.div
                  key={nda.title}
                  className="p-6 rounded-2xl bg-void-900/60 border border-mist-800/30 hover:border-laser-cyan/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-laser-cyan/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-laser-cyan" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{nda.title}</h3>
                  <p className="text-mist-400 text-sm mb-4">{nda.description}</p>
                  <p className="text-mist-500 text-xs">
                    <span className="text-laser-cyan">{t('application')}:</span> {nda.useCase}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button className="inline-flex items-center gap-2 px-4 py-2 text-laser-cyan hover:text-white transition-colors">
              <Download className="w-4 h-4" />
              {t('download_nda')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
      <section id="security" className="py-16 md:py-24 bg-void-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('security_title')}
            </h2>
            <p className="text-mist-400 max-w-2xl mx-auto">
              {t('security_description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {measures.map((measure, index) => {
              const IconComponent = measureIcons[index] || Lock;
              return (
                <motion.div
                  key={measure.title}
                  className="p-6 md:p-8 rounded-2xl bg-void-950/60 border border-mist-800/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-laser-cyan/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-laser-cyan" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">{measure.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {measure.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-mist-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-laser-cyan flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('certs_title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="p-5 rounded-xl bg-void-900/60 border border-mist-800/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-laser-cyan font-mono font-bold text-lg mb-2">{cert.name}</div>
                <p className="text-mist-400 text-sm mb-3">{cert.description}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusClass(cert.status)}`}>
                  {getStatusText(cert.status)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-16 md:py-24 bg-void-900/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('practices_title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-void-950/40"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <CheckCircle className="w-5 h-5 text-laser-cyan flex-shrink-0 mt-0.5" />
                <span className="text-mist-300 text-sm">{practice}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 md:py-24 border-t border-mist-800/20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-void-900 to-void-950 border border-laser-cyan/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe className="w-12 h-12 text-laser-cyan mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              {t('insurance_title')}
            </h2>
            <p className="text-mist-400 mb-6 max-w-2xl mx-auto">
              {t('insurance_description')}
            </p>
            <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-void-800/50">
              <Shield className="w-8 h-8 text-laser-cyan" />
              <div className="text-left">
                <div className="text-2xl font-display font-bold text-white">€5M</div>
                <div className="text-mist-400 text-sm">Professional Liability Insurance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-void-900/30">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-laser-cyan hover:bg-laser-cyan/90 text-void-950 font-semibold rounded-xl transition-colors"
            >
              {t('request_nda')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
