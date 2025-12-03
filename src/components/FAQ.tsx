'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Сколько стоят ваши услуги?',
      answer: 'Стоимость зависит от сложности проекта. Небольшой Telegram-бот — от 3 000 CHF, веб-сайт — от 8 000 CHF, сложная платформа — от 30 000 CHF. Мы даём точную оценку после обсуждения требований. Первая консультация бесплатна.'
    },
    {
      question: 'Как долго длится разработка?',
      answer: 'MVP обычно готов за 4-8 недель. Полноценный продукт — 2-4 месяца. Сложные enterprise-решения — 6-12 месяцев. Работаем по Agile с еженедельными демо, так что вы видите прогресс на каждом этапе.'
    },
    {
      question: 'Работаете ли вы с клиентами не из Швейцарии?',
      answer: 'Да, 40% наших клиентов — из других стран: Германия, Австрия, страны СНГ. Работаем удалённо, общаемся на русском, английском и немецком. Часовой пояс CET удобен для Европы.'
    },
    {
      question: 'Что если проект не понравится?',
      answer: 'Работаем по milestone-модели: вы оплачиваете этапы по мере их завершения и утверждения. Если на каком-то этапе что-то не так — переделываем за свой счёт до полного согласования.'
    },
    {
      question: 'Предоставляете ли вы поддержку после запуска?',
      answer: 'Да, пожизненная поддержка включена в каждый проект. Это не маркетинг — мы реально отвечаем на вопросы и помогаем с мелкими доработками. Для крупных изменений обсуждаем отдельно.'
    },
    {
      question: 'Можно ли начать с небольшого проекта?',
      answer: 'Конечно. Многие клиенты начинают с MVP или пилотного проекта, чтобы оценить качество работы. 80% из них возвращаются с более масштабными задачами.'
    },
    {
      question: 'Как вы обеспечиваете безопасность данных?',
      answer: 'Работаем по стандартам ISO 27001 и OWASP. Все проекты проходят security review. При необходимости привлекаем сертифицированных партнёров для penetration testing. GDPR и Swiss DPA compliant.'
    },
    {
      question: 'Что включает техническая документация?',
      answer: 'Полный комплект: архитектурная документация, API-референс, гайды для разработчиков, инструкции по развёртыванию и обслуживанию. Ваша команда сможет поддерживать систему самостоятельно.'
    }
  ];

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
            Не нашли ответ на свой вопрос?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-laser-cyan hover:underline"
          >
            Напишите нам — ответим в течение 2 часов
          </a>
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-purple/20 to-transparent" />
    </section>
  );
}
