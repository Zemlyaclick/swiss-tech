'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Shield, Award, Building2, Briefcase } from 'lucide-react';

const trustIcons = [Shield, Award, Briefcase];

export default function TrustBadges() {
  const t = useTranslations('trust_badges');
  
  const indicators = t.raw('indicators') as string[];

  const clients = [
    { name: 'UBS', categoryKey: 'banking' },
    { name: 'Swiss Re', categoryKey: 'insurance' },
    { name: 'Novartis', categoryKey: 'pharma' },
    { name: 'Migros', categoryKey: 'retail' },
    { name: 'SBB', categoryKey: 'transport' },
    { name: 'Swisscom', categoryKey: 'telecom' },
  ];

  const partners = [
    { name: 'AWS', fullKey: 'aws_full' },
    { name: 'GCP', fullKey: 'gcp_full' },
    { name: 'Azure', fullKey: 'azure_full' },
    { name: 'Stripe', fullKey: 'stripe_full' },
  ];

  const certifications = [
    { name: 'ISO 27001', descKey: 'iso_desc' },
    { name: 'GDPR', descKey: 'gdpr_desc' },
    { name: 'Swiss DPA', descKey: 'swiss_dpa_desc' },
    { name: 'OWASP', descKey: 'owasp_desc' },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden border-t border-b border-mist-800/20">
      {/* Background */}
      <div className="absolute inset-0 bg-void-900/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Clients Row */}
        <div className="mb-10 md:mb-12">
          <motion.p 
            className="text-center text-mist-500 text-xs md:text-sm uppercase tracking-wider mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('clients_title')}
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                className="group flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-laser-cyan font-display font-bold text-lg md:text-xl drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all duration-300">
                  {client.name}
                </span>
                <span className="text-mist-600 text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t(`clients.${client.categoryKey}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cloud Partners */}
          <motion.div
            className="p-6 rounded-xl bg-void-900/50 border border-mist-800/30"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-laser-cyan" />
              <h3 className="text-white font-semibold">{t('partners_title')}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="p-3 rounded-lg bg-void-800/50 border border-mist-700/20 hover:border-laser-cyan/30 transition-colors"
                >
                  <div className="text-white font-mono font-bold text-sm">{partner.name}</div>
                  <div className="text-mist-500 text-xs">{t('partners.tier')}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="p-6 rounded-xl bg-void-900/50 border border-mist-800/30"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-laser-cyan" />
              <h3 className="text-white font-semibold">{t('certifications_title')}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-3 rounded-lg bg-void-800/50 border border-mist-700/20 hover:border-laser-cyan/30 transition-colors"
                >
                  <div className="text-white font-mono font-bold text-sm">{cert.name}</div>
                  <div className="text-mist-500 text-xs">{t(`certifications.${cert.descKey}`)}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {indicators.map((text, index) => {
            const Icon = trustIcons[index % trustIcons.length];
            return (
              <div key={index} className="flex items-center gap-2 text-mist-400 text-sm">
                <Icon className="w-4 h-4 text-laser-cyan" />
                <span>{text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
