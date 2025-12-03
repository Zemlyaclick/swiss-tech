import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  GraduationCap, 
  Users, 
  Code,
  Presentation,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Monitor,
  Zap,
  Target
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Обучение команд | Swiss IT',
  description: 'Воркшопы и тренинги для разработчиков. Современные технологии, методологии, инструменты.',
};

export default async function TrainingPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;

  const programs = [
    {
      icon: Code,
      title: 'Современный стек',
      description: 'React, Next.js, TypeScript, Node.js — актуальные технологии для веб-разработки.'
    },
    {
      icon: Monitor,
      title: 'DevOps практики',
      description: 'Docker, CI/CD, мониторинг — навыки для надёжной доставки и эксплуатации.'
    },
    {
      icon: Zap,
      title: 'Agile и Scrum',
      description: 'Методологии разработки, планирование спринтов, работа с backlog.'
    },
    {
      icon: Target,
      title: 'Code Review',
      description: 'Практики качественного код-ревью, стандарты кода, автоматизация.'
    },
    {
      icon: BookOpen,
      title: 'Архитектура',
      description: 'Паттерны проектирования, микросервисы, масштабирование систем.'
    },
    {
      icon: Users,
      title: 'Командная работа',
      description: 'Коммуникация в команде, работа с требованиями, документация.'
    }
  ];

  const formats = [
    {
      title: 'Воркшопы',
      description: 'Практические занятия с реальными задачами',
      duration: '1-2 дня'
    },
    {
      title: 'Курсы',
      description: 'Глубокое погружение в тему',
      duration: '4-8 недель'
    },
    {
      title: 'Менторинг',
      description: 'Индивидуальная работа с разработчиками',
      duration: 'По запросу'
    },
    {
      title: 'Консультации',
      description: 'Разбор конкретных вопросов команды',
      duration: '2-4 часа'
    }
  ];

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-void-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm">
                Training
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                Workshops
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Обучение команд —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                инвестиция в рост
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              Проводим воркшопы и тренинги для ваших разработчиков. 
              Современные технологии, методологии, инструменты — практические навыки, а не теория.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Обсудить программу
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Направления обучения
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-emerald-500/30 transition-colors"
                >
                  <program.icon className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{program.title}</h3>
                  <p className="text-mist-400">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Форматы
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {formats.map((format, index) => (
                <div key={index} className="p-6 bg-void-900 border border-void-800 rounded-xl text-center">
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{format.title}</h3>
                  <p className="text-mist-400 text-sm mb-3">{format.description}</p>
                  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">
                    {format.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Хотите развить команду?
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              Расскажите о потребностях — составим программу
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <GraduationCap className="w-5 h-5" />
              Обсудить обучение
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
