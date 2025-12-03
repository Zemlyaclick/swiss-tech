import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Условия использования | Swiss Made IT',
  description: 'Условия использования сайта и услуг Swiss Made IT.',
};

export default async function TermsPage({ 
  params 
}: { 
  params: { locale: 'en' | 'de' | 'fr' | 'it' | 'de-CH' | 'ru' } 
}) {
  const { locale } = params;

  return (
    <>
      <Navigation locale={locale} />
      
      <main className="min-h-screen bg-void-950">
        <section className="pt-32 pb-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-laser-cyan" />
              <span className="text-laser-cyan text-sm">Последнее обновление: 1 декабря 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Условия использования
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-mist-300">
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Общие положения</h2>
                  <p>
                    Настоящие Условия использования («Условия») регулируют использование веб-сайта 
                    swissmade.it («Сайт»), принадлежащего Swiss Tech Solutions GmbH («Компания», «мы», «наш»).
                  </p>
                  <p>
                    Используя наш Сайт, вы соглашаетесь с настоящими Условиями. Если вы не согласны 
                    с какими-либо положениями, пожалуйста, не используйте Сайт.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Описание услуг</h2>
                  <p>
                    Swiss Made IT предоставляет услуги по разработке программного обеспечения, 
                    включая, но не ограничиваясь:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Разработка веб-сайтов и веб-приложений</li>
                    <li>Разработка мобильных приложений</li>
                    <li>Создание Telegram-ботов и Mini Apps</li>
                    <li>Интеграция искусственного интеллекта</li>
                    <li>Облачная миграция и DevOps</li>
                    <li>Консалтинг и аудит IT-систем</li>
                  </ul>
                  <p className="mt-4">
                    Конкретные условия предоставления услуг определяются индивидуальными 
                    договорами с клиентами.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Использование Сайта</h2>
                  <p>Вы обязуетесь:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Использовать Сайт только в законных целях</li>
                    <li>Не нарушать работу Сайта техническими средствами</li>
                    <li>Не пытаться получить несанкционированный доступ к системам</li>
                    <li>Не распространять вредоносное программное обеспечение</li>
                    <li>Предоставлять достоверную информацию в формах обратной связи</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Интеллектуальная собственность</h2>
                  <p>
                    Все материалы на Сайте, включая тексты, графику, логотипы, изображения 
                    и программный код, являются собственностью Swiss Tech Solutions GmbH 
                    или используются на основании лицензий.
                  </p>
                  <p className="mt-4">
                    Вам запрещается:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Копировать, воспроизводить или распространять материалы Сайта</li>
                    <li>Использовать торговые марки без письменного разрешения</li>
                    <li>Модифицировать или создавать производные работы</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Конфиденциальность</h2>
                  <p>
                    Обработка персональных данных регулируется нашей{' '}
                    <a href={`/${locale}/privacy`} className="text-laser-cyan hover:underline">
                      Политикой конфиденциальности
                    </a>
                    , которая является неотъемлемой частью настоящих Условий.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Ограничение ответственности</h2>
                  <p>
                    Сайт и его содержимое предоставляются «как есть» без каких-либо гарантий, 
                    явных или подразумеваемых.
                  </p>
                  <p className="mt-4">
                    Компания не несёт ответственности за:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Любые убытки, возникшие в результате использования или невозможности использования Сайта</li>
                    <li>Содержание внешних сайтов, на которые ведут ссылки</li>
                    <li>Временную недоступность Сайта по техническим причинам</li>
                    <li>Действия третьих лиц</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Договорные отношения</h2>
                  <p>
                    Информация на Сайте носит информационный характер и не является публичной 
                    офертой. Договорные отношения возникают только после подписания 
                    индивидуального договора.
                  </p>
                  <p className="mt-4">
                    Цены, указанные на Сайте, являются ориентировочными и могут отличаться 
                    в зависимости от конкретного проекта.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Внешние ссылки</h2>
                  <p>
                    Сайт может содержать ссылки на внешние ресурсы. Мы не контролируем 
                    содержание этих сайтов и не несём за них ответственности. Переход 
                    по внешним ссылкам осуществляется на ваш риск.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">9. Изменения условий</h2>
                  <p>
                    Мы оставляем за собой право изменять настоящие Условия в любое время. 
                    Изменения вступают в силу с момента публикации на Сайте. Рекомендуем 
                    периодически проверять эту страницу.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">10. Применимое право</h2>
                  <p>
                    Настоящие Условия регулируются и толкуются в соответствии с законодательством 
                    Швейцарии. Все споры подлежат разрешению в судах города Цюриха, Швейцария.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">11. Разделимость положений</h2>
                  <p>
                    Если какое-либо положение настоящих Условий будет признано недействительным, 
                    остальные положения сохраняют силу в полном объёме.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">12. Контактная информация</h2>
                  <p>
                    По вопросам, связанным с настоящими Условиями, обращайтесь:
                  </p>
                  <p className="mt-4">
                    <strong className="text-white">Swiss Tech Solutions GmbH</strong><br />
                    Bahnhofstrasse 1<br />
                    8001 Zürich, Switzerland<br />
                    Email: legal@swissmade.it
                  </p>
                </section>

              </div>
            </div>

            {/* Contact Box */}
            <div className="mt-12 p-6 bg-void-900/50 border border-mist-800/50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-laser-cyan" />
                <h3 className="text-lg font-semibold text-white">Юридические вопросы?</h3>
              </div>
              <p className="text-mist-400 mb-4">
                Свяжитесь с нашим юридическим отделом
              </p>
              <a 
                href="mailto:legal@swissmade.it"
                className="inline-flex items-center gap-2 text-laser-cyan hover:underline"
              >
                legal@swissmade.it
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
