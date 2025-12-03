'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = t.raw('items') as Array<{ question: string; answer: string }>;

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-void-900/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-blue/20 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-mono text-laser-blue border border-laser-blue/30 bg-laser-blue/5 mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <HelpCircle className="w-3 h-3" />
            {'FAQ'}
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-mist-100 mb-3 md:mb-4 px-2">
            {t('title')}
          </h2>
          <p className="text-sm md:text-lg text-mist-400 max-w-xl md:max-w-2xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-xl bg-void-900/50 border border-mist-800/30 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-void-800/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white text-sm md:text-base">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-mist-400" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-mist-400 text-sm md:text-base leading-relaxed border-t border-mist-800/30 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-mist-400 mb-4">
            {t('cta_text')}
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-laser-cyan hover:underline"
          >
            {t('cta_link')}
          </a>
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-purple/20 to-transparent" />
    </section>
  );
}
