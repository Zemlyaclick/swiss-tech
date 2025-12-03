'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ContactFormProps {
  locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru';
}

interface ServiceOption {
  value: string;
  label: string;
}

interface BudgetOption {
  value: string;
  label: string;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const t = useTranslations('contact_form');
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

  const services = t.raw('services') as ServiceOption[];
  const budgets = t.raw('budgets') as BudgetOption[];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('name_error');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('email_error');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('email_invalid');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('message_error');
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
        <h3 className="text-2xl font-bold text-white mb-2">{t('success_title')}</h3>
        <p className="text-mist-400 mb-6">
          {t('success_message')}
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-laser-cyan hover:underline"
        >
          {t('send_another')}
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
            <p className="text-red-400 font-medium">{t('error_title')}</p>
            <p className="text-red-400/80 text-sm">{t('error_message')}</p>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-mist-300 mb-2">
            {t('name_label')} <span className="text-red-400">*</span>
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
            placeholder={t('name_placeholder')}
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-mist-300 mb-2">
            {t('email_label')} <span className="text-red-400">*</span>
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
            {t('company_label')}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-void-800 border border-mist-700 rounded-lg text-white placeholder:text-mist-600 focus:outline-none focus:border-laser-cyan transition-colors"
            placeholder={t('company_placeholder')}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-mist-300 mb-2">
            {t('phone_label')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-void-800 border border-mist-700 rounded-lg text-white placeholder:text-mist-600 focus:outline-none focus:border-laser-cyan transition-colors"
            placeholder={t('phone_placeholder')}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-mist-300 mb-2">
            {t('service_label')}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-void-800 border border-mist-700 rounded-lg text-white focus:outline-none focus:border-laser-cyan transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-void-800">{t('service_placeholder')}</option>
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
            {t('budget_label')}
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-void-800 border border-mist-700 rounded-lg text-white focus:outline-none focus:border-laser-cyan transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-void-800">{t('budget_placeholder')}</option>
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
          {t('message_label')} <span className="text-red-400">*</span>
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
          placeholder={t('message_placeholder')}
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
            {t('submitting')}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t('submit')}
          </>
        )}
      </button>

      <p className="text-center text-mist-500 text-sm">
        {t('privacy_text')}{' '}
        <a href={`/${locale}/privacy`} className="text-laser-cyan hover:underline">
          {t('privacy_link')}
        </a>
      </p>
    </form>
  );
}
