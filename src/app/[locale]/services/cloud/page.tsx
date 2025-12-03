import { Metadata } from 'next';
import { Cloud, Server, Shield, Zap, TrendingDown, Clock, ArrowRight, X, Check, Database, GitBranch, Monitor, Lock, Globe, Cpu } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n/request';

export const metadata: Metadata = {
  title: 'Облачная миграция | SwissTech',
  description: 'Безопасный переезд в облако: AWS, Azure, GCP. Снижение затрат до 40%, масштабируемость, соответствие GDPR и Swiss DPA.'
};

export default function CloudServicePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const benefits = [
    {
      icon: <TrendingDown size={24} className="text-laser-cyan" />,
      title: 'Снижение затрат до 40%',
      description: 'Платите только за используемые ресурсы. Никаких расходов на серверы, охлаждение и электричество.'
    },
    {
      icon: <Zap size={24} className="text-laser-cyan" />,
      title: 'Масштабирование за минуты',
      description: 'Автоматический рост ресурсов под нагрузку. Чёрная пятница или вирусный трафик — система справится.'
    },
    {
      icon: <Shield size={24} className="text-laser-cyan" />,
      title: 'Безопасность enterprise-уровня',
      description: 'Шифрование данных, изоляция сетей, соответствие GDPR и Swiss DPA из коробки.'
    },
    {
      icon: <Clock size={24} className="text-laser-cyan" />,
      title: 'Uptime 99.99%',
      description: 'Мульти-региональная инфраструктура, автоматическое восстановление, резервные копии каждый час.'
    },
    {
      icon: <GitBranch size={24} className="text-laser-cyan" />,
      title: 'DevOps из коробки',
      description: 'CI/CD пайплайны, автоматические деплои, откат версий за секунды. Релизите быстрее и безопаснее.'
    },
    {
      icon: <Monitor size={24} className="text-laser-cyan" />,
      title: 'Полная видимость',
      description: 'Мониторинг, логи, алерты — знаете состояние системы в реальном времени, реагируете до того, как клиенты заметят.'
    }
  ];

  const comparison = {
    onprem: [
      'Капитальные затраты на серверы',
      'Сложное масштабирование — недели',
      'Простой при обновлении оборудования',
      'Ограниченная географическая доступность',
      'Уязвимость к локальным сбоям',
      'IT-команда занята рутиной',
      'Устаревание оборудования за 3-5 лет'
    ],
    cloud: [
      'Операционные расходы по подписке',
      'Автоскейлинг за минуты',
      'Zero-downtime deployments',
      'Глобальная CDN и edge-локации',
      'Мульти-региональная отказоустойчивость',
      'IT фокусируется на продукте',
      'Всегда актуальная инфраструктура'
    ]
  };

  const services = [
    { icon: <Cloud size={20} className="text-laser-cyan" />, title: 'Миграция в облако', desc: 'Lift-and-shift или рефакторинг — выбираем стратегию под ваши задачи' },
    { icon: <Server size={20} className="text-laser-cyan" />, title: 'Kubernetes & Docker', desc: 'Контейнеризация, оркестрация, автоскейлинг микросервисов' },
    { icon: <GitBranch size={20} className="text-laser-cyan" />, title: 'CI/CD пайплайны', desc: 'Автоматизация сборки, тестирования и деплоя' },
    { icon: <Database size={20} className="text-laser-cyan" />, title: 'Managed базы данных', desc: 'PostgreSQL, MySQL, MongoDB — без боли с бэкапами и репликацией' },
    { icon: <Lock size={20} className="text-laser-cyan" />, title: 'Безопасность', desc: 'IAM, шифрование, VPN, WAF, аудит и compliance' },
    { icon: <Monitor size={20} className="text-laser-cyan" />, title: 'Мониторинг', desc: 'Prometheus, Grafana, алерты и on-call ротация' }
  ];

  const providers = [
    { name: 'AWS', desc: 'Крупнейшая экосистема, идеально для сложных проектов' },
    { name: 'Azure', desc: 'Лучшая интеграция с Microsoft-стеком' },
    { name: 'GCP', desc: 'Сильный в ML/AI и аналитике данных' },
    { name: 'Swiss Cloud', desc: 'Для данных, которые должны оставаться в Швейцарии' }
  ];

  return (
    <main className="relative min-h-screen bg-void-950">
      <Navigation locale={locale} />
      
      {/* Hero */}
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laser-cyan/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-laser-cyan/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-laser-cyan/30 bg-laser-cyan/5 mb-6">
            <Cloud size={28} className="text-laser-cyan" />
            <span className="font-display font-bold text-lg text-mist-100">Облачная миграция</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mist-100 mb-6 leading-tight">
            Переезжайте в облако<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple">без боли и рисков</span>
          </h1>
          
          <p className="text-mist-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Устали от расходов на серверы и сложного масштабирования? Мы мигрируем ваши системы в облако: 
            AWS, Azure, GCP или швейцарские провайдеры. Снижение затрат до 40%, uptime 99.99%, 
            соответствие GDPR и Swiss DPA.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#benefits" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-laser-cyan to-laser-blue text-void-900 font-semibold hover:opacity-90 transition-opacity">
              Преимущества облака
              <ArrowRight size={18} />
            </a>
            <a href="#comparison" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-mist-300 hover:text-mist-100 hover:border-white/20 transition-colors">
              Сравнить с on-premise
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-6">
            Знакомые проблемы?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {[
              'Серверы простаивают, но счета приходят',
              'Масштабирование требует недель планирования',
              'Каждое обновление — риск простоя',
              'IT-команда тратит время на рутину',
              'Нет уверенности в отказоустойчивости',
              'Сложно соответствовать требованиям GDPR'
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <X size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-mist-300">{problem}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-mist-400 text-lg">
            Облако решает эти проблемы — и мы поможем переехать безболезненно.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Почему облако
            </h2>
            <p className="text-mist-400 text-lg max-w-2xl mx-auto">
              Не просто модный тренд — реальные преимущества для бизнеса
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 rounded-2xl bg-void-900/60 border border-laser-cyan/10 hover:border-laser-cyan/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-laser-cyan/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-mist-100 mb-2">{benefit.title}</h3>
                <p className="text-mist-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              On-premise vs Облако
            </h2>
            <p className="text-mist-400 text-lg">
              Сравните и убедитесь в преимуществах
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* On-premise */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium">
                On-premise
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-red-500/20">
                <ul className="space-y-4">
                  {comparison.onprem.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X size={18} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-mist-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Cloud */}
            <div className="relative">
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-laser-cyan/20 border border-laser-cyan/30 text-laser-cyan text-sm font-medium">
                Облако
              </div>
              <div className="p-6 pt-8 rounded-2xl bg-void-950 border border-laser-cyan/20">
                <ul className="space-y-4">
                  {comparison.cloud.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-laser-cyan mt-1 flex-shrink-0" />
                      <span className="text-mist-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Что мы делаем
            </h2>
            <p className="text-mist-400 text-lg">
              Полный цикл облачной миграции и поддержки
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="p-5 rounded-xl bg-void-900/60 border border-white/5 hover:border-laser-cyan/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  {service.icon}
                  <h3 className="font-display text-base font-semibold text-mist-100">{service.title}</h3>
                </div>
                <p className="text-mist-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Выбор провайдера
            </h2>
            <p className="text-mist-400 text-lg">
              Работаем со всеми major cloud providers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {providers.map((provider, i) => (
              <div key={i} className="p-5 rounded-xl bg-void-950 border border-white/5 hover:border-laser-cyan/20 transition-colors text-center">
                <h3 className="font-display text-xl font-bold text-laser-cyan mb-2">{provider.name}</h3>
                <p className="text-mist-400 text-sm">{provider.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Как мы мигрируем
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Аудит', desc: 'Анализируем текущую инфраструктуру, зависимости и требования' },
              { step: '02', title: 'Планирование', desc: 'Выбираем стратегию миграции, провайдера и архитектуру' },
              { step: '03', title: 'Миграция', desc: 'Поэтапный переезд с минимальным downtime' },
              { step: '04', title: 'Оптимизация', desc: 'Тюнинг производительности и расходов, обучение команды' }
            ].map((item, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-void-900/60 border border-white/5">
                <span className="font-mono text-4xl font-bold text-laser-cyan/20">{item.step}</span>
                <h3 className="font-display text-lg font-semibold text-mist-100 mt-2 mb-2">{item.title}</h3>
                <p className="text-mist-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-mist-100 mb-4">
              Результаты миграций
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '-40%', label: 'расходы на инфраструктуру' },
              { value: '99.99%', label: 'uptime' },
              { value: '10×', label: 'скорость деплоя' },
              { value: '0', label: 'простоя при миграции' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-void-950 border border-laser-cyan/10">
                <div className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-laser-cyan to-laser-blue">
                  {stat.value}
                </div>
                <div className="text-mist-400 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-4">
              Технологии
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'GitHub Actions', 'GitLab CI', 'Vault'].map((tech, i) => (
              <span key={i} className="px-4 py-2 rounded-lg bg-void-900/60 border border-white/5 text-mist-300 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 md:py-24 bg-void-900/30">
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-mist-100 mb-4">
              Частые вопросы
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'Сколько времени занимает миграция?', a: 'Зависит от сложности: простые сервисы — 2-4 недели, крупная инфраструктура с рефакторингом — 2-4 месяца. Мы делаем поэтапно с минимальным влиянием на бизнес.' },
              { q: 'Будет ли простой во время миграции?', a: 'Мы используем blue-green deployment и постепенную миграцию. В большинстве случаев — zero downtime. Для критичных систем планируем окна обслуживания на ночь.' },
              { q: 'Какой облачный провайдер лучше?', a: 'Зависит от задач: AWS — универсален и богат сервисами, Azure — для Microsoft-стека, GCP — силён в аналитике и ML. Для данных в Швейцарии есть локальные провайдеры.' },
              { q: 'Что с безопасностью и GDPR?', a: 'Все решения проектируем с учётом GDPR и Swiss DPA: шифрование, IAM, логирование, выбор региона хранения данных. Проводим security review перед запуском.' }
            ].map((faq, i) => (
              <details key={i} className="group p-5 rounded-2xl bg-void-950 border border-white/5 hover:border-laser-cyan/20 transition-colors">
                <summary className="font-medium text-mist-100 cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <span className="ml-4 text-laser-cyan group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-mist-400 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
