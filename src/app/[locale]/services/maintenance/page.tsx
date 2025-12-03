import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  HeadphonesIcon, 
  Clock, 
  Shield,
  RefreshCcw,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Monitor,
  Zap,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Техподдержка | Swiss IT',
  description: 'Техническая поддержка и обслуживание систем. Мониторинг, обновления, исправление багов. Гибкие условия SLA.',
};

export default async function MaintenancePage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;

  const services = [
    {
      icon: Monitor,
      title: 'Мониторинг 24/7',
      description: 'Отслеживаем состояние системы, метрики производительности, доступность сервисов.'
    },
    {
      icon: AlertTriangle,
      title: 'Реагирование на инциденты',
      description: 'Быстрое реагирование на проблемы. Время отклика согласовывается в SLA.'
    },
    {
      icon: RefreshCcw,
      title: 'Обновления и патчи',
      description: 'Регулярные обновления безопасности, зависимостей, операционных систем.'
    },
    {
      icon: Shield,
      title: 'Резервное копирование',
      description: 'Автоматические бэкапы, проверка восстановления, хранение по регламенту.'
    },
    {
      icon: Zap,
      title: 'Оптимизация',
      description: 'Анализ производительности, устранение узких мест, масштабирование.'
    },
    {
      icon: FileText,
      title: 'Отчётность',
      description: 'Регулярные отчёты о состоянии системы, выполненных работах, рекомендациях.'
    }
  ];

  const slaOptions = [
    {
      title: 'Basic',
      response: 'до 24 часов',
      description: 'Рабочие дни, стандартные задачи',
      features: ['Email-поддержка', 'Обновления безопасности', 'Ежемесячные отчёты']
    },
    {
      title: 'Business',
      response: 'до 4 часов',
      description: 'Расширенная поддержка',
      features: ['Email + чат', 'Мониторинг 24/7', 'Еженедельные отчёты', 'Приоритетные задачи']
    },
    {
      title: 'Enterprise',
      response: 'до 1 часа',
      description: 'Критически важные системы',
      features: ['Выделенный менеджер', 'Звонки в любое время', 'Real-time мониторинг', 'SLA с гарантиями']
    }
  ];

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-void-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm">
                Support
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                Maintenance
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Техподдержка —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
                стабильная работа
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              Обеспечиваем стабильную работу ваших систем. Мониторинг, обновления, 
              исправление багов — гибкие условия SLA под ваши потребности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Обсудить поддержку
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Что входит в поддержку
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-violet-500/30 transition-colors"
                >
                  <service.icon className="w-10 h-10 text-violet-400 mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{service.title}</h3>
                  <p className="text-mist-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLA Options */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Варианты SLA
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Условия обсуждаются индивидуально под ваши потребности
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {slaOptions.map((option, index) => (
                <div key={index} className="p-6 bg-void-900 border border-void-800 rounded-xl">
                  <h3 className="text-xl font-semibold text-mist-100 mb-2">{option.title}</h3>
                  <div className="text-2xl font-bold text-violet-400 mb-2">{option.response}</div>
                  <p className="text-mist-400 text-sm mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-mist-300">
                        <CheckCircle className="w-4 h-4 text-violet-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Нужна поддержка?
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              Расскажите о системе — подберём подходящий формат
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <HeadphonesIcon className="w-5 h-5" />
              Обсудить условия
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
