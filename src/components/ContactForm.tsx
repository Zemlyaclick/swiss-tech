'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru';
}

export default function ContactForm({ locale }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    { value: 'digital-reboot', label: 'Цифровая перезагрузка' },
    { value: 'turnkey', label: 'IT-партнёр под ключ' },
    { value: 'websites', label: 'Веб-разработка' },
    { value: 'mobile', label: 'Мобильные приложения' },
    { value: 'telegram', label: 'Telegram боты/Mini Apps' },
    { value: 'automation', label: 'Автоматизация' },
    { value: 'ai', label: 'ИИ-интеграции' },
    { value: 'cloud', label: 'Облачная миграция' },
    { value: 'security', label: 'Кибербезопасность' },
    { value: 'other', label: 'Другое' }
  ];

  const budgets = [
    { value: 'under-5k', label: 'До 5 000 CHF' },
    { value: '5k-15k', label: '5 000 — 15 000 CHF' },
    { value: '15k-50k', label: '15 000 — 50 000 CHF' },
    { value: '50k-100k', label: '50 000 — 100 000 CHF' },
    { value: 'over-100k', label: 'Более 100 000 CHF' },
    { value: 'not-sure', label: 'Нужна консультация' }
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Укажите ваше имя';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Укажите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Опишите вашу задачу';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setStatus('loading');
    
    // Simulate form submission
    // In production, replace with actual API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would send data to your backend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
        <p className="text-mist-400 mb-6">
          Мы свяжемся с вами в течение 2 часов в рабочее время.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-laser-cyan hover:underline"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-400 font-medium">Ошибка отправки</p>
            <p className="text-red-400/80 text-sm">Попробуйте ещё раз или напишите нам напрямую на hello@swissmade.it</p>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-mist-300 mb-2">
            Имя <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-void-800 border rounded-lg text-white placeholder:text-mist-600 focus:outline-none focus:border-laser-cyan transition-colors ${
              errors.name ? 'border-red-500' : 'border-mist-700'
            }`}
            placeholder="Ваше имя"
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-mist-300 mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-void-800 border rounded-lg text-white placeholder:text-mist-600 focus:outline-none focus:border-laser-cyan transition-colors ${
              errors.email ? 'border-red-500' : 'border-mist-700'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-mist-300 mb-2">
            Компания
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-void-800 border border-mist-700 rounded-lg text-white placeholder:text-mist-600 focus:outline-none focus:border-laser-cyan transition-colors"
            placeholder="Название компании"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-mist-300 mb-2">
            Телефон
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-void-800 border border-mist-700 rounded-lg text-white placeholder:text-mist-600 focus:outline-none focus:border-laser-cyan transition-colors"
            placeholder="+41 12 345 67 89"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-mist-300 mb-2">
            Интересующая услуга
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-void-800 border border-mist-700 rounded-lg text-white focus:outline-none focus:border-laser-cyan transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-void-800">Выберите услугу</option>
            {services.map(service => (
              <option key={service.value} value={service.value} className="bg-void-800">
                {service.label}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-mist-300 mb-2">
            Примерный бюджет
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-void-800 border border-mist-700 rounded-lg text-white focus:outline-none focus:border-laser-cyan transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-void-800">Выберите диапазон</option>
            {budgets.map(budget => (
              <option key={budget.value} value={budget.value} className="bg-void-800">
                {budget.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-mist-300 mb-2">
          Опишите вашу задачу <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 bg-void-800 border rounded-lg text-white placeholder:text-mist-600 focus:outline-none focus:border-laser-cyan transition-colors resize-none ${
            errors.message ? 'border-red-500' : 'border-mist-700'
          }`}
          placeholder="Расскажите о проекте, задачах, сроках..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue rounded-lg font-semibold text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Отправка...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Отправить заявку
          </>
        )}
      </button>

      <p className="text-center text-mist-500 text-sm">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <a href={`/${locale}/privacy`} className="text-laser-cyan hover:underline">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
}
