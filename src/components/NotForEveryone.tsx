'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NotForEveryone() {
  const notFor = [
    {
      text: 'Ищете самый дешёвый вариант',
      detail: 'Мы не конкурируем с фрилансерами из Индии или Украины по цене',
    },
    {
      text: 'Нужно \"вчера\"',
      detail: 'Качественная разработка требует времени. Минимум 2-4 недели для MVP',
    },
    {
      text: 'Хотите контролировать каждую строку кода',
      detail: 'Мы ценим доверие и автономию. Микроменеджмент — не наш стиль',
    },
    {
      text: 'Проект без бюджета',
      detail: 'Мы не работаем за equity или \"когда получим инвестиции\"',
    },
  ];

  const perfectFor = [
    {
      text: 'Цените качество и надёжность',
      detail: 'Готовы инвестировать в решение, которое прослужит годы',
    },
    {
      text: 'Важна безопасность данных',
      detail: 'GDPR, Swiss DPA, финансовые или медицинские данные',
    },
    {
      text: 'Работаете на европейский рынок',
      detail: 'Швейцарское качество и compliance имеют значение',
    },
    {
      text: 'Нужен надёжный долгосрочный партнёр',
      detail: 'Не разовый проект, а партнёрство на годы',
    },
  ];

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
            Честность прежде всего
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Мы подходим не всем
          </h2>
          <p className="text-mist-400 text-lg max-w-2xl mx-auto">
            И это нормально. Мы предпочитаем быть честными с вами с самого начала, 
            чтобы сэкономить время обеим сторонам.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* NOT for */}
          <motion.div
            className="p-6 md:p-8 rounded-2xl bg-red-500/5 border border-red-500/20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Мы не подойдём, если вы...
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
              Мы идеально подойдём, если вы...
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
            Узнали себя справа? Давайте поговорим.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-laser-cyan hover:bg-laser-cyan/90 text-void-950 font-semibold rounded-xl transition-colors"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
