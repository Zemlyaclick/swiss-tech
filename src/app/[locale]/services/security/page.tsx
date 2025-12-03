import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Lock, 
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Key,
  FileSearch,
  Server,
  Users,
  Globe,
  Fingerprint,
  ShieldCheck,
  Bug,
  Database,
  Wifi,
  FileWarning,
  Activity
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Кибербезопасность | Swiss IT',
  description: 'Аудит безопасности, пентесты, защита данных. GDPR, Swiss DPA, OWASP. Защищаем ваш бизнес от киберугроз.',
};

export default async function SecurityPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;

  const threats = [
    {
      icon: Bug,
      title: 'Уязвимости в коде',
      description: 'SQL-инъекции, XSS, CSRF — типовые уязвимости, которые хакеры эксплуатируют первыми'
    },
    {
      icon: Key,
      title: 'Слабая аутентификация',
      description: 'Простые пароли, отсутствие 2FA, утечка токенов — открытая дверь для злоумышленников'
    },
    {
      icon: Database,
      title: 'Утечки данных',
      description: 'Незащищённые базы, открытые бэкапы, логи с персональными данными'
    },
    {
      icon: Wifi,
      title: 'Небезопасные API',
      description: 'Отсутствие rate limiting, broken access control, избыточные данные в ответах'
    },
    {
      icon: Server,
      title: 'Уязвимая инфраструктура',
      description: 'Устаревшие версии ПО, открытые порты, неправильная конфигурация серверов'
    },
    {
      icon: Users,
      title: 'Человеческий фактор',
      description: 'Фишинг, социальная инженерия, инсайдерские угрозы — 90% атак начинаются с людей'
    }
  ];

  const services = [
    {
      icon: FileSearch,
      title: 'Аудит безопасности',
      description: 'Комплексная проверка вашей IT-инфраструктуры, кода и процессов',
      features: ['Анализ архитектуры', 'Code review', 'Проверка конфигураций', 'Gap-анализ']
    },
    {
      icon: Bug,
      title: 'Пентест (Penetration Testing)',
      description: 'Имитация реальной атаки для выявления уязвимостей до того, как их найдут хакеры',
      features: ['Black/White/Grey box', 'Web-приложения', 'API и мобильные приложения', 'Социальная инженерия']
    },
    {
      icon: Shield,
      title: 'Защита веб-приложений',
      description: 'Внедрение best practices безопасности в ваши приложения',
      features: ['OWASP Top 10', 'WAF настройка', 'Secure headers', 'Input validation']
    },
    {
      icon: Lock,
      title: 'Шифрование и управление ключами',
      description: 'Защита данных при хранении и передаче',
      features: ['TLS/SSL настройка', 'Шифрование БД', 'Secrets management', 'HSM интеграция']
    },
    {
      icon: Fingerprint,
      title: 'Аутентификация и авторизация',
      description: 'Надёжная система управления доступом',
      features: ['SSO/SAML/OAuth', '2FA/MFA', 'RBAC/ABAC', 'Zero Trust']
    },
    {
      icon: Activity,
      title: 'Мониторинг и реагирование',
      description: 'Обнаружение угроз и инцидентов в реальном времени',
      features: ['SIEM настройка', 'Алерты', 'Incident Response', 'Forensics']
    }
  ];

  const compliance = [
    { name: 'GDPR', description: 'Защита персональных данных граждан ЕС' },
    { name: 'Swiss DPA', description: 'Швейцарский закон о защите данных' },
    { name: 'OWASP', description: 'Стандарты безопасности веб-приложений' },
    { name: 'ISO 27001', description: 'Система менеджмента информационной безопасности' },
    { name: 'PCI DSS', description: 'Стандарт безопасности платёжных карт' },
    { name: 'SOC 2', description: 'Контроли безопасности для SaaS' }
  ];

  const process = [
    {
      step: '01',
      title: 'Разведка и анализ',
      duration: '1-2 недели',
      description: 'Собираем информацию о вашей инфраструктуре, определяем поверхность атаки, формируем модель угроз.',
      deliverables: ['Инвентаризация активов', 'Threat model', 'Scope тестирования', 'План работ']
    },
    {
      step: '02',
      title: 'Тестирование',
      duration: '2-4 недели',
      description: 'Проводим пентест, анализируем код, проверяем конфигурации. Документируем все находки.',
      deliverables: ['Выявленные уязвимости', 'PoC эксплойтов', 'Скриншоты и логи', 'CVSS-оценки']
    },
    {
      step: '03',
      title: 'Отчёт и рекомендации',
      duration: '1 неделя',
      description: 'Готовим детальный отчёт с приоритизированными рекомендациями по устранению.',
      deliverables: ['Executive summary', 'Технический отчёт', 'Remediation plan', 'Презентация']
    },
    {
      step: '04',
      title: 'Устранение и ретест',
      duration: '2-4 недели',
      description: 'Помогаем исправить уязвимости. Проводим повторное тестирование для подтверждения.',
      deliverables: ['Консультации', 'Code review фиксов', 'Ретест', 'Финальный отчёт']
    }
  ];

  const results = [
    { metric: '100%', label: 'Критичных уязвимостей закрыто' },
    { metric: '0', label: 'Успешных атак после аудита' },
    { metric: '< 24ч', label: 'Время реагирования' },
    { metric: 'GDPR', label: 'Полное соответствие' }
  ];

  const faq = [
    {
      question: 'Чем отличается аудит от пентеста?',
      answer: 'Аудит — это комплексная проверка всех аспектов безопасности: процессы, политики, конфигурации, код. Пентест — это имитация реальной атаки с целью найти и проэксплуатировать уязвимости. Обычно рекомендуем начать с аудита, затем проводить регулярные пентесты.'
    },
    {
      question: 'Как часто нужно проводить проверку безопасности?',
      answer: 'Полный аудит — раз в год или после крупных изменений. Пентест — минимум раз в год, лучше раз в полгода. Автоматическое сканирование — еженедельно. Для критичных систем рекомендуем Bug Bounty программу.'
    },
    {
      question: 'Пентест не сломает наш продакшен?',
      answer: 'Мы согласовываем scope и методы тестирования заранее. Деструктивные тесты проводим только в staging. Для продакшена используем безопасные методы. Всегда имеем план отката и работаем в согласованные окна.'
    },
    {
      question: 'Что если вы найдёте критическую уязвимость?',
      answer: 'Критические уязвимости сообщаем немедленно (в течение часа), не дожидаясь финального отчёта. Даём рекомендации по временному mitigation. Помогаем с экстренным исправлением если нужно.'
    }
  ];

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-void-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm">
                OWASP & ISO 27001
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                GDPR Compliant
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Кибербезопасность —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                защита того, что вы создали
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              Аудит безопасности, пентесты, защита данных. Находим уязвимости до того, 
              как их найдут хакеры. Соответствие GDPR, Swiss DPA и международным стандартам.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Заказать аудит
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-void-700 text-mist-200 rounded-lg hover:bg-void-800 transition-colors"
              >
                Наши услуги
              </a>
            </div>
          </div>
        </section>

        {/* Threats Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Типичные угрозы
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Уязвимости, которые мы находим в 80% проектов
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {threats.map((threat, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-red-500/30 transition-colors"
                >
                  <threat.icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{threat.title}</h3>
                  <p className="text-mist-400">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Услуги по безопасности
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Комплексная защита вашей IT-инфраструктуры
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-void-900 to-void-950 border border-void-800 rounded-xl hover:border-orange-500/30 transition-colors"
                >
                  <service.icon className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{service.title}</h3>
                  <p className="text-mist-400 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-mist-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Стандарты и соответствие
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Помогаем соответствовать требованиям регуляторов
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compliance.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-green-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="w-8 h-8 text-green-400" />
                    <h3 className="text-xl font-bold text-mist-100">{item.name}</h3>
                  </div>
                  <p className="text-mist-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Процесс проверки безопасности
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              От анализа до защищённой системы
            </p>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 bg-void-900 border border-void-800 rounded-xl hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-mist-100">{step.title}</h3>
                      <span className="px-2 py-1 bg-void-800 rounded text-sm text-mist-400">{step.duration}</span>
                    </div>
                    <p className="text-mist-400 mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable, dIndex) => (
                        <span 
                          key={dIndex}
                          className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-sm text-orange-400"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Результаты нашей работы
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-2">
                    {result.metric}
                  </div>
                  <div className="text-mist-400">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Стоимость услуг
            </h2>
            <p className="text-mist-400 mb-8">
              Экспресс-аудит веб-приложения — от 3 000 CHF. Полный аудит безопасности — от 8 000 CHF. 
              Пентест — от 5 000 CHF. Стоимость зависит от размера инфраструктуры и глубины проверки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Получить оценку
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Частые вопросы
            </h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-mist-100 mb-3">{item.question}</h3>
                  <p className="text-mist-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Не ждите взлома
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              Узнайте об уязвимостях до того, как их найдут хакеры. Первичная консультация бесплатно.
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Shield className="w-5 h-5" />
              Заказать аудит безопасности
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
