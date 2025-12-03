import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  GitBranch, 
  Container, 
  Monitor,
  Gauge,
  Server,
  Shield,
  CheckCircle,
  ArrowRight,
  Cloud,
  RefreshCcw,
  AlertTriangle,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'DevOps & SRE | Swiss IT',
  description: 'CI/CD пайплайны, контейнеризация, мониторинг и инфраструктура как код. Надёжная доставка и эксплуатация ваших систем.',
};

export default async function DevOpsPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;

  const services = [
    {
      icon: GitBranch,
      title: 'CI/CD пайплайны',
      description: 'Автоматизация сборки, тестирования и деплоя. GitHub Actions, GitLab CI, Jenkins — выбираем под ваш стек.'
    },
    {
      icon: Container,
      title: 'Контейнеризация',
      description: 'Docker, Kubernetes, оркестрация. Изолированные среды, масштабирование, предсказуемый деплой.'
    },
    {
      icon: Monitor,
      title: 'Мониторинг и алертинг',
      description: 'Prometheus, Grafana, ELK Stack. Метрики, логи, трейсинг — видите всё, что происходит в системе.'
    },
    {
      icon: Cloud,
      title: 'Инфраструктура как код',
      description: 'Terraform, Ansible, CloudFormation. Воспроизводимая инфраструктура, версионирование, автоматизация.'
    },
    {
      icon: Shield,
      title: 'DevSecOps',
      description: 'Безопасность встроена в пайплайн. Сканирование зависимостей, секретов, уязвимостей.'
    },
    {
      icon: Gauge,
      title: 'SRE практики',
      description: 'SLI/SLO/SLA, error budgets, incident management. Надёжность как инженерная дисциплина.'
    }
  ];

  const benefits = [
    { metric: '↑', label: 'Частота деплоев' },
    { metric: '↓', label: 'Время восстановления' },
    { metric: '↑', label: 'Стабильность системы' },
    { metric: '↓', label: 'Ручные операции' }
  ];

  const techStack = [
    'Docker', 'Kubernetes', 'Helm', 'Terraform', 'Ansible',
    'GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD',
    'Prometheus', 'Grafana', 'ELK Stack', 'Datadog',
    'AWS', 'GCP', 'Azure', 'DigitalOcean'
  ];

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-void-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-laser-cyan/10 border border-laser-cyan/30 rounded-full text-laser-cyan text-sm">
                DevOps
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                SRE
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              DevOps & SRE —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">
                надёжная доставка
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              Настраиваем процессы непрерывной интеграции и доставки. Контейнеризация, мониторинг, 
              инфраструктура как код — ваши релизы становятся предсказуемыми и безопасными.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Обсудить инфраструктуру
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Что мы делаем
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-laser-cyan/30 transition-colors"
                >
                  <service.icon className="w-10 h-10 text-laser-cyan mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{service.title}</h3>
                  <p className="text-mist-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Результаты внедрения
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan to-laser-blue mb-2">
                    {benefit.metric}
                  </div>
                  <div className="text-mist-400">{benefit.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-mist-500 text-sm mt-8">
              Конкретные показатели зависят от исходного состояния инфраструктуры
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Технологии
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-void-900 border border-void-800 rounded-lg text-mist-300 hover:border-laser-cyan/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Готовы оптимизировать инфраструктуру?
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              Расскажите о текущем состоянии — предложим план улучшений
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <GitBranch className="w-5 h-5" />
              Обсудить проект
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
