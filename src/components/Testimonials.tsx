'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      quote: 'Swiss Made IT полностью изменили наш подход к технологиям. За 6 месяцев мы автоматизировали 80% рутины и увеличили выручку на 40%. Это лучшие инвестиции, которые мы сделали.',
      author: 'Маркус Хофер',
      role: 'CEO',
      company: 'FinanceHub AG',
      rating: 5,
      image: null
    },
    {
      quote: 'Профессионализм и внимание к деталям — вот что отличает эту команду. Наш Telegram-бот обрабатывает 5000+ запросов в день, и ни одного сбоя за 2 года. Рекомендую всем.',
      author: 'Анна Мюллер',
      role: 'Head of Digital',
      company: 'TravelSmart GmbH',
      rating: 5,
      image: null
    },
    {
      quote: 'Мы перепробовали 3 агентства, прежде чем нашли Swiss Made IT. Наконец-то получили не просто исполнителей, а партнёров, которые думают о нашем бизнесе как о своём.',
      author: 'Дмитрий Козлов',
      role: 'Founder',
      company: 'MedTech Solutions',
      rating: 5,
      image: null
    },
    {
      quote: 'Редизайн сайта и интеграция с нашей CRM заняли всего 2 месяца. Конверсия выросла с 1.2% до 4.5%. Теперь планируем с ними мобильное приложение.',
      author: 'Лаура Шмидт',
      role: 'Marketing Director',
      company: 'Alpine Retail',
      rating: 5,
      image: null
    },
    {
      quote: 'Особенно ценю их честность. Когда я хотел добавить ненужную функцию, они отговорили меня и предложили более простое решение. Сэкономили мне 30% бюджета.',
      author: 'Томас Вебер',
      role: 'Product Owner',
      company: 'CloudServices AG',
      rating: 5,
      image: null
    },
    {
      quote: 'Поддержка 24/7 — это не маркетинговый трюк. Когда в субботу ночью упал сервер, они починили всё за 20 минут. Такой сервис я встречал только в enterprise-компаниях.',
      author: 'Сергей Иванов',
      role: 'CTO',
      company: 'LogiTrans',
      rating: 5,
      image: null
    }
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-void-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-purple/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-mono text-laser-purple border border-laser-purple/30 bg-laser-purple/5 mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {'<testimonials />'}
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-mist-100 mb-3 md:mb-4 px-2">
            {t('title')}
          </h2>
          <p className="text-sm md:text-lg text-mist-400 max-w-xl md:max-w-2xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl bg-void-900/50 border border-mist-800/30 hover:border-laser-purple/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-laser-purple" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-mist-300 text-sm md:text-base leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-laser-cyan/20 to-laser-purple/20 flex items-center justify-center">
                  <span className="text-mist-300 font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{testimonial.author}</div>
                  <div className="text-mist-500 text-xs">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { value: '98%', label: 'клиентов рекомендуют нас' },
            { value: '4.9', label: 'средняя оценка проектов' },
            { value: '80%', label: 'возвращаются с новыми проектами' },
            { value: '0', label: 'проектов сдано с опозданием' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 md:p-6 rounded-xl bg-void-900/30 border border-mist-800/20"
            >
              <div className="text-2xl md:text-3xl font-bold text-laser-cyan mb-1">
                {stat.value}
              </div>
              <div className="text-mist-500 text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-cyan/20 to-transparent" />
    </section>
  );
}
