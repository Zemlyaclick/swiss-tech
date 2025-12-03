import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Smartphone, 
  Zap, 
  Shield, 
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Code,
  Layers,
  Bell,
  MapPin,
  Camera,
  Wifi,
  Star,
  Download,
  Globe,
  Cpu
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Мобильные приложения | Swiss IT',
  description: 'Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android. React Native, Flutter, Swift, Kotlin.',
};

export default async function MobilePage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;

  const problems = [
    {
      icon: Clock,
      title: 'Долгая разработка',
      description: 'Отдельные команды для iOS и Android — двойные сроки и бюджет'
    },
    {
      icon: Users,
      title: 'Потеря пользователей',
      description: '77% пользователей удаляют приложение после первого использования'
    },
    {
      icon: Zap,
      title: 'Низкая производительность',
      description: 'Приложение тормозит, разряжает батарею, занимает много памяти'
    },
    {
      icon: Shield,
      title: 'Проблемы с безопасностью',
      description: 'Утечки данных, взломы, отклонение в App Store'
    },
    {
      icon: TrendingUp,
      title: 'Сложное масштабирование',
      description: 'Архитектура не позволяет добавлять новые функции'
    },
    {
      icon: Globe,
      title: 'Нет офлайн-режима',
      description: 'Без интернета приложение бесполезно'
    }
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: 'Один код — две платформы',
      description: 'React Native и Flutter позволяют выпустить приложение для iOS и Android одновременно, сократив бюджет на 40%'
    },
    {
      icon: Zap,
      title: 'Нативная производительность',
      description: 'Используем нативные модули там, где нужна скорость. 60 FPS анимации, быстрый запуск, экономия батареи'
    },
    {
      icon: Shield,
      title: 'Безопасность по умолчанию',
      description: 'Шифрование данных, безопасное хранение токенов, защита от реверс-инжиниринга, соответствие GDPR'
    },
    {
      icon: Bell,
      title: 'Push-уведомления',
      description: 'Персонализированные пуши увеличивают retention на 3-10x. Сегментация, A/B тесты, deep links'
    },
    {
      icon: Wifi,
      title: 'Офлайн-режим',
      description: 'Приложение работает без интернета. Синхронизация данных при восстановлении связи'
    },
    {
      icon: TrendingUp,
      title: 'Аналитика и A/B тесты',
      description: 'Firebase Analytics, Mixpanel, Amplitude. Понимайте пользователей и оптимизируйте конверсию'
    }
  ];

  const comparison = [
    { feature: 'Время разработки', web: '2-3 месяца', native: '4-6 месяцев на платформу', cross: '3-4 месяца на обе' },
    { feature: 'Производительность', web: '70%', native: '100%', cross: '95%' },
    { feature: 'Доступ к API устройства', web: 'Ограничен', native: 'Полный', cross: 'Почти полный' },
    { feature: 'Стоимость поддержки', web: 'Низкая', native: 'Высокая (2 кодовые базы)', cross: 'Средняя' },
    { feature: 'Push-уведомления', web: 'Ограничены', native: 'Полные', cross: 'Полные' },
    { feature: 'Офлайн-режим', web: 'Ограничен', native: 'Полный', cross: 'Полный' },
    { feature: 'Публикация в сторах', web: 'Не нужна', native: 'Обязательна', cross: 'Обязательна' }
  ];

  const appTypes = [
    {
      icon: Users,
      title: 'B2C приложения',
      description: 'Приложения для конечных пользователей: маркетплейсы, доставка, фитнес, финансы',
      features: ['Красивый UI/UX', 'Онбординг', 'Платежи', 'Социальные функции']
    },
    {
      icon: Layers,
      title: 'B2B приложения',
      description: 'Корпоративные приложения: CRM, ERP, складской учёт, логистика',
      features: ['Интеграция с бэкендом', 'Ролевой доступ', 'Отчётность', 'Офлайн-режим']
    },
    {
      icon: MapPin,
      title: 'Геолокационные',
      description: 'Приложения с картами: такси, доставка, трекинг, навигация',
      features: ['Карты и маршруты', 'Геозоны', 'Отслеживание', 'Фоновая геолокация']
    },
    {
      icon: Camera,
      title: 'Мультимедийные',
      description: 'Работа с камерой, видео, AR: сканеры, фильтры, обучающие приложения',
      features: ['Камера и галерея', 'AR-эффекты', 'Обработка видео', 'ML-модели']
    },
    {
      icon: Bell,
      title: 'IoT и умный дом',
      description: 'Управление устройствами: умный дом, носимые устройства, датчики',
      features: ['Bluetooth/BLE', 'MQTT/WebSocket', 'Виджеты', 'Уведомления']
    },
    {
      icon: TrendingUp,
      title: 'Финтех',
      description: 'Банкинг, инвестиции, криптовалюты, страхование',
      features: ['Биометрия', 'PCI DSS', 'KYC/AML', 'Платёжные системы']
    }
  ];

  const techStack = [
    { name: 'React Native', category: 'Кроссплатформа' },
    { name: 'Flutter', category: 'Кроссплатформа' },
    { name: 'Expo', category: 'Кроссплатформа' },
    { name: 'Swift', category: 'iOS Native' },
    { name: 'SwiftUI', category: 'iOS Native' },
    { name: 'Kotlin', category: 'Android Native' },
    { name: 'Jetpack Compose', category: 'Android Native' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Redux/MobX', category: 'State' },
    { name: 'CodePush', category: 'Updates' },
    { name: 'Fastlane', category: 'CI/CD' }
  ];

  const process = [
    {
      step: '01',
      title: 'Дизайн и прототип',
      duration: '2-3 недели',
      description: 'UX-исследование, wireframes, UI-дизайн в Figma. Интерактивный прототип для тестирования с пользователями.',
      deliverables: ['User Flow', 'UI Kit', 'Прототип', 'Дизайн-система']
    },
    {
      step: '02',
      title: 'Разработка MVP',
      duration: '6-10 недель',
      description: 'Разработка ключевого функционала. Еженедельные билды для тестирования. Интеграция с бэкендом.',
      deliverables: ['TestFlight/Firebase', 'API интеграция', 'Push-уведомления', 'Аналитика']
    },
    {
      step: '03',
      title: 'Тестирование и запуск',
      duration: '2-3 недели',
      description: 'QA на реальных устройствах, бета-тестирование, подготовка к публикации, ревью в сторах.',
      deliverables: ['Тест-кейсы', 'App Store Connect', 'Google Play Console', 'ASO']
    },
    {
      step: '04',
      title: 'Рост и развитие',
      duration: 'Постоянно',
      description: 'Анализ метрик, A/B тесты, новые фичи по обратной связи. Обновления под новые версии iOS/Android.',
      deliverables: ['Roadmap', 'Метрики роста', 'Обновления', 'Поддержка']
    }
  ];

  const results = [
    { metric: '4.8+', label: 'Средний рейтинг в сторах' },
    { metric: '500K+', label: 'Загрузок приложений' },
    { metric: '40%', label: 'Экономия на кроссплатформе' },
    { metric: '< 2 сек', label: 'Время холодного старта' }
  ];

  const faq = [
    {
      question: 'React Native или Flutter?',
      answer: 'Если у вас уже есть веб на React — выбирайте React Native, команда сможет переиспользовать знания. Flutter даёт лучшую производительность и полный контроль над UI. Для большинства бизнес-приложений разница минимальна.'
    },
    {
      question: 'Когда нужна нативная разработка?',
      answer: 'Для максимальной производительности (игры, AR/VR), специфичных API устройства (HealthKit, ARKit), или когда Apple/Google требуют нативный код. В остальных 90% случаев кроссплатформа — оптимальный выбор.'
    },
    {
      question: 'Сколько времени занимает публикация?',
      answer: 'Google Play — 1-3 дня на первый релиз. App Store — 1-7 дней, первый релиз может занять до 2 недель. Мы готовим все материалы заранее и знаем требования сторов.'
    },
    {
      question: 'Как обновлять приложение без релиза?',
      answer: 'Используем CodePush для React Native и Shorebird для Flutter. Можно обновить JS-код и UI без публикации в сторы. Нативный код всё равно требует релиза.'
    }
  ];

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-void-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-purple/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-laser-purple/10 border border-laser-purple/30 rounded-full text-laser-purple text-sm">
                iOS & Android
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                Кроссплатформа
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Мобильное приложение —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-purple via-laser-cyan to-laser-blue">
                ваш бизнес в кармане клиента
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              Разрабатываем нативные и кроссплатформенные приложения, которые пользователи 
              любят и рекомендуют. React Native, Flutter, Swift, Kotlin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-purple to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Обсудить приложение
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-void-700 text-mist-200 rounded-lg hover:bg-void-800 transition-colors"
              >
                Как мы работаем
              </a>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Знакомые проблемы?
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              С этим сталкивается большинство компаний при разработке мобильных приложений
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-red-500/30 transition-colors"
                >
                  <problem.icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{problem.title}</h3>
                  <p className="text-mist-400">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Наш подход к мобильной разработке
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Создаём приложения, которые пользователи оценивают на 4.8+ звёзд
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-void-900 to-void-950 border border-void-800 rounded-xl hover:border-laser-purple/30 transition-colors"
                >
                  <benefit.icon className="w-10 h-10 text-laser-purple mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{benefit.title}</h3>
                  <p className="text-mist-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Какой подход выбрать?
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Сравнение PWA, нативной и кроссплатформенной разработки
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-void-700">
                    <th className="text-left p-4 text-mist-300 font-medium">Характеристика</th>
                    <th className="text-center p-4 text-mist-300 font-medium">PWA</th>
                    <th className="text-center p-4 text-mist-300 font-medium">Нативное</th>
                    <th className="text-center p-4 text-laser-purple font-medium">Кроссплатформа ⭐</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-void-800">
                      <td className="p-4 text-mist-200">{row.feature}</td>
                      <td className="p-4 text-center text-mist-400">{row.web}</td>
                      <td className="p-4 text-center text-mist-400">{row.native}</td>
                      <td className="p-4 text-center text-laser-cyan font-medium">{row.cross}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* App Types Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Какие приложения мы создаём
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Опыт в различных индустриях и типах приложений
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appTypes.map((type, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-laser-cyan/30 transition-colors"
                >
                  <type.icon className="w-10 h-10 text-laser-cyan mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{type.title}</h3>
                  <p className="text-mist-400 mb-4">{type.description}</p>
                  <ul className="space-y-1">
                    {type.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-mist-300">
                        <CheckCircle className="w-4 h-4 text-laser-purple" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Технологии
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              Используем проверенные инструменты для надёжных решений
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-void-900 border border-void-800 rounded-lg hover:border-laser-purple/30 transition-colors"
                >
                  <span className="text-mist-200">{tech.name}</span>
                  <span className="text-mist-500 text-sm ml-2">({tech.category})</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Процесс разработки
            </h2>
            <p className="text-mist-400 text-center mb-12 max-w-2xl mx-auto">
              От идеи до публикации в App Store и Google Play
            </p>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 bg-void-900 border border-void-800 rounded-xl hover:border-laser-purple/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-laser-purple to-laser-cyan rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-void-950">{step.step}</span>
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
                          className="px-2 py-1 bg-laser-purple/10 border border-laser-purple/20 rounded text-sm text-laser-purple"
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
              Результаты наших проектов
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-laser-purple to-laser-cyan mb-2">
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
              Стоимость разработки
            </h2>
            <p className="text-mist-400 mb-8">
              MVP кроссплатформенного приложения — от 25 000 CHF. Включает дизайн, разработку, 
              тестирование и публикацию в сторы. Нативная разработка под одну платформу — от 20 000 CHF.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-purple to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
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
              Готовы к мобильному приложению?
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              Расскажите о своей идее — мы подберём оптимальный подход и технологии
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-purple to-laser-cyan text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Smartphone className="w-5 h-5" />
              Обсудить проект
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
