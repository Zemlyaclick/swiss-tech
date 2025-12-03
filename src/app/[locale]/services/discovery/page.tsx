import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Lightbulb, 
  Users, 
  Target,
  FileSearch,
  Boxes,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  BarChart3,
  Sparkles,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Discovery | Swiss IT',
  description: 'Исследование и валидация продуктовых идей. User research, прототипирование, проверка гипотез до начала разработки.',
};

export default async function DiscoveryPage({ params }: { params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } }) {
  const locale = params.locale;

  const services = [
    {
      icon: Users,
      title: 'User Research',
      description: 'Интервью, опросы, анализ поведения. Понимаем реальные потребности ваших пользователей.'
    },
    {
      icon: Target,
      title: 'Валидация идей',
      description: 'Проверяем гипотезы до начала разработки. Минимизируем риск создать ненужный продукт.'
    },
    {
      icon: Layers,
      title: 'Прототипирование',
      description: 'Интерактивные прототипы для тестирования с пользователями. Быстрые итерации.'
    },
    {
      icon: BarChart3,
      title: 'Анализ рынка',
      description: 'Конкуренты, тренды, возможности. Данные для принятия решений.'
    },
    {
      icon: FileSearch,
      title: 'Техническая экспертиза',
      description: 'Оценка реализуемости, выбор технологий, архитектурные решения.'
    },
    {
      icon: Boxes,
      title: 'MVP-спецификация',
      description: 'Определяем минимальный функционал для запуска и проверки продукта.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Погружение',
      description: 'Изучаем ваш бизнес, целевую аудиторию, существующие решения'
    },
    {
      step: '02',
      title: 'Исследование',
      description: 'Проводим интервью, анализируем данные, формулируем гипотезы'
    },
    {
      step: '03',
      title: 'Прототип',
      description: 'Создаём прототипы, тестируем с пользователями, итерируем'
    },
    {
      step: '04',
      title: 'Спецификация',
      description: 'Готовим детальное ТЗ и план разработки MVP'
    }
  ];

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-void-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm">
                Discovery
              </span>
              <span className="px-3 py-1 bg-void-800 border border-void-700 rounded-full text-mist-400 text-sm">
                Research
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Product Discovery —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                прежде чем строить
              </span>
            </h1>
            <p className="text-xl text-mist-300 max-w-3xl mb-8">
              Помогаем сформулировать и проверить идею до начала разработки. 
              User research, прототипирование, валидация гипотез — экономим время и бюджет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Обсудить идею
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Что включает Discovery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 bg-void-900 border border-void-800 rounded-xl hover:border-amber-500/30 transition-colors"
                >
                  <service.icon className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{service.title}</h3>
                  <p className="text-mist-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Процесс
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-void-950">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-mist-100 mb-2">{step.title}</h3>
                  <p className="text-mist-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-void-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Есть идея продукта?
            </h2>
            <p className="text-xl text-mist-400 mb-8">
              Поможем проверить её до начала разработки
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-void-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Lightbulb className="w-5 h-5" />
              Обсудить проект
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
