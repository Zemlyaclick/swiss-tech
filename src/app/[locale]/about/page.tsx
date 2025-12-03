import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Users, 
  Target, 
  Shield, 
  Award, 
  Heart, 
  Zap,
  Globe,
  Clock,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Building,
  Calendar,
  TrendingUp,
  Handshake,
  Code,
  Lightbulb,
  Linkedin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'О компании | Swiss Made IT',
  description: 'Swiss Made IT — швейцарская IT-компания. Разрабатываем цифровые продукты для бизнеса с 2019 года. Команда экспертов, швейцарское качество, прозрачные процессы.',
  keywords: ['о компании', 'швейцарская IT компания', 'разработка', 'Цюрих', 'команда', 'история'],
};

export default async function AboutPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;

  const values = [
    {
      icon: Shield,
      title: 'Швейцарское качество',
      description: 'Мы не гонимся за количеством проектов. Каждый продукт проходит многоуровневую проверку качества перед релизом.'
    },
    {
      icon: Heart,
      title: 'Долгосрочные отношения',
      description: '80% наших клиентов возвращаются с новыми проектами. Мы строим партнёрства, а не просто выполняем заказы.'
    },
    {
      icon: Lightbulb,
      title: 'Честность и прозрачность',
      description: 'Если видим, что задачу можно решить проще — скажем. Не продаём то, что клиенту не нужно.'
    },
    {
      icon: Zap,
      title: 'Результат важнее процесса',
      description: 'Метрики, KPI, измеримые результаты — мы фокусируемся на том, что реально влияет на бизнес клиента.'
    }
  ];

  const team = [
    {
      name: 'Александр Новак',
      role: 'CEO & Founder',
      description: '15+ лет в IT, ex-Google, ex-UBS. Специализация: архитектура, стратегия.',
      image: '/team/alex.jpg',
      linkedin: 'https://linkedin.com/in/',
      initials: 'АН'
    },
    {
      name: 'Мария Шмидт',
      role: 'CTO',
      description: '12 лет в разработке. Эксперт по облачным решениям и безопасности.',
      image: '/team/maria.jpg',
      linkedin: 'https://linkedin.com/in/',
      initials: 'МШ'
    },
    {
      name: 'Дмитрий Кузнецов',
      role: 'Lead Developer',
      description: 'Full-stack разработчик. React, Node.js, Python, AI/ML интеграции.',
      image: '/team/dmitry.jpg',
      linkedin: 'https://linkedin.com/in/',
      initials: 'ДК'
    },
    {
      name: 'Анна Вебер',
      role: 'Head of Design',
      description: 'UX/UI дизайнер. Создаёт интерфейсы, которыми хочется пользоваться.',
      image: '/team/anna.jpg',
      linkedin: 'https://linkedin.com/in/',
      initials: 'АВ'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Основание', description: 'Старт в Цюрихе с фокусом на веб-разработку' },
    { year: '2020', title: 'Первые крупные клиенты', description: 'Контракты с финтех и медтех компаниями' },
    { year: '2021', title: 'Расширение команды', description: 'Рост до 15 человек, открытие направления AI' },
    { year: '2022', title: 'ISO сертификация', description: 'Получение ISO 27001 для работы с enterprise' },
    { year: '2023', title: '100+ проектов', description: 'Достигли отметки в 100 успешных проектов' },
    { year: '2024', title: 'Международное развитие', description: 'Клиенты в 12 странах Европы и СНГ' }
  ];

  const stats = [
    { value: '100+', label: 'Проектов', sublabel: 'успешно реализовано' },
    { value: '6', label: 'Лет', sublabel: 'на рынке' },
    { value: '12', label: 'Стран', sublabel: 'география клиентов' },
    { value: '98%', label: 'Клиентов', sublabel: 'рекомендуют нас' }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Информационная безопасность' },
    { name: 'OWASP', description: 'Безопасность веб-приложений' },
    { name: 'AWS Partner', description: 'Партнёр Amazon Web Services' },
    { name: 'Google Cloud', description: 'Партнёр Google Cloud Platform' }
  ];

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-laser-blue/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-laser-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-laser-purple/10 rounded-full blur-3xl" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-laser-cyan/10 border border-laser-cyan/30 rounded-full text-laser-cyan text-sm">
                С 2019 года
              </span>
              <span className="px-3 py-1 bg-laser-blue/10 border border-laser-blue/30 rounded-full text-laser-blue text-sm">
                Цюрих, Швейцария
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-white">Мы создаём </span>
              <span className="bg-gradient-to-r from-laser-cyan via-laser-blue to-laser-purple bg-clip-text text-transparent">
                цифровые продукты
              </span>
              <br />
              <span className="text-white">которые работают</span>
            </h1>
            
            <p className="text-xl text-mist-300 max-w-3xl mb-8 leading-relaxed">
              Swiss Made IT — это команда экспертов, которая помогает бизнесу расти 
              с помощью технологий. Не делаем «сайты за 3 дня». Создаём решения, 
              которые становятся основой вашего бизнеса.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-laser-cyan to-laser-blue rounded-lg font-semibold text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25 transition-all duration-300"
              >
                Обсудить проект
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={`/${locale}/cases`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-mist-700 rounded-lg text-mist-300 hover:border-laser-cyan hover:text-laser-cyan transition-colors"
              >
                Смотреть кейсы
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-void-900/50 border border-mist-800/50 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-laser-cyan to-laser-blue bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium">{stat.label}</div>
                  <div className="text-mist-500 text-sm">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">Наша миссия</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4 mb-6">
                  Делать технологии понятными и полезными для бизнеса
                </h2>
                <p className="text-mist-300 leading-relaxed mb-6">
                  Мы верим, что технологии должны решать проблемы, а не создавать новые. 
                  Наша задача — перевести сложные технические решения на язык бизнеса 
                  и помочь клиентам достичь конкретных, измеримых результатов.
                </p>
                <p className="text-mist-300 leading-relaxed">
                  Не продаём часы разработки — продаём результат. Не исчезаем после 
                  запуска — остаёмся рядом на всём пути развития продукта.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="p-5 bg-void-900/50 border border-mist-800/50 rounded-xl"
                  >
                    <value.icon className="w-8 h-8 text-laser-cyan mb-3" />
                    <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                    <p className="text-mist-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">История</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Наш путь
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-mist-800 md:-translate-x-px" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="p-4 md:p-6 bg-void-900/50 border border-mist-800/50 rounded-xl inline-block max-w-[calc(100vw-5rem)] md:max-w-none">
                        <div className="text-laser-cyan font-mono text-sm mb-1">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-mist-400">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Node */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-void-900 border-2 border-laser-cyan flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-laser-cyan" />
                    </div>
                    
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">Команда</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Люди, которые делают продукты
              </h2>
              <p className="text-mist-400 mt-4 max-w-2xl mx-auto">
                Небольшая команда экспертов, где каждый — профессионал в своей области
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group p-6 bg-void-900/50 border border-mist-800/50 rounded-xl hover:border-laser-cyan/30 transition-all duration-300 text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-laser-cyan/20 to-laser-purple/20 flex items-center justify-center overflow-hidden">
                      <span className="text-2xl font-bold text-laser-cyan">{member.initials}</span>
                    </div>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center hover:bg-[#004182] transition-colors shadow-lg"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <div className="text-laser-cyan text-sm mb-3">{member.role}</div>
                  <p className="text-mist-400 text-sm">{member.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-laser-cyan/5 to-laser-purple/5 border border-laser-cyan/20 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Присоединяйтесь к команде</h3>
              <p className="text-mist-400 mb-4">
                Мы всегда в поиске талантливых разработчиков и дизайнеров
              </p>
              <a 
                href={`/${locale}/careers`}
                className="inline-flex items-center gap-2 text-laser-cyan hover:underline"
              >
                Смотреть вакансии
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">Сертификаты</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                Подтверждённая экспертиза
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-void-900/50 border border-mist-800/50 rounded-xl text-center"
                >
                  <Award className="w-10 h-10 text-laser-cyan mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-1">{cert.name}</h3>
                  <p className="text-mist-500 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-laser-cyan text-sm font-medium tracking-wider uppercase">Локация</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4 mb-6">
                  Базируемся в Цюрихе
                </h2>
                <p className="text-mist-300 leading-relaxed mb-6">
                  Швейцария — это не только часы и шоколад. Это стабильность, надёжность 
                  и высочайшие стандарты качества. Именно эти принципы мы закладываем 
                  в каждый проект.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-laser-cyan" />
                    <span className="text-mist-300">Zürich, Switzerland</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-laser-cyan" />
                    <span className="text-mist-300">Работаем с клиентами по всей Европе и СНГ</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-laser-cyan" />
                    <span className="text-mist-300">Часовой пояс CET (UTC+1)</span>
                  </div>
                </div>
              </div>
              <div className="bg-void-900/50 border border-mist-800/50 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-mist-600 mx-auto mb-4" />
                  <p className="text-mist-500">Zürich, Switzerland</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-6 bg-void-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <Handshake className="w-16 h-16 text-laser-cyan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Давайте познакомимся
            </h2>
            <p className="text-mist-300 mb-8 text-lg max-w-2xl mx-auto">
              Расскажите о своём проекте — мы предложим решение и дадим 
              честную оценку сроков и бюджета. Без обязательств.
            </p>
            <a 
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-laser-cyan to-laser-blue rounded-lg font-semibold text-void-950 hover:shadow-lg hover:shadow-laser-cyan/25 transition-all duration-300"
            >
              Связаться с нами
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
