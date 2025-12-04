'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { XCircle, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NotForEveryone() {
  const t = useTranslations('not_for_everyone');
  const params = useParams();
  const locale = params.locale as string;
  
  const notFor = t.raw('not_for') as Array<{ text: string; detail: string }>;
  const perfectFor = t.raw('perfect_for') as Array<{ text: string; detail: string }>;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-900/50 to-void-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            {t('badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-mist-400 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* NOT for */}
          <motion.div
            className="p-6 md:p-8 rounded-2xl bg-red-500/5 border border-red-500/20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              {t('not_for_title')}
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{item.text}</p>
                    <p className="text-mist-500 text-sm mt-1">{item.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Perfect for */}
          <motion.div
            className="p-6 md:p-8 rounded-2xl bg-laser-cyan/5 border border-laser-cyan/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-laser-cyan mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              {t('perfect_for_title')}
            </h3>
            <ul className="space-y-4">
              {perfectFor.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-laser-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{item.text}</p>
                    <p className="text-mist-500 text-sm mt-1">{item.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-mist-400 mb-4">
            {t('cta_text')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-laser-cyan hover:bg-laser-cyan/90 text-void-950 font-semibold rounded-xl transition-colors"
          >
            {t('cta_button')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
