import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Swiss Made IT',
  description: 'Политика обработки персональных данных Swiss Made IT. Соответствие GDPR и Swiss DPA.',
};

export default async function PrivacyPage({ 
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
              <Shield className="w-8 h-8 text-laser-cyan" />
              <span className="text-laser-cyan text-sm">Последнее обновление: 1 декабря 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Политика конфиденциальности
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-mist-300">
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Общие положения</h2>
                  <p>
                    Настоящая Политика конфиденциальности описывает, как Swiss Tech Solutions GmbH 
                    («мы», «наш» или «Компания») собирает, использует и защищает персональные данные 
                    пользователей нашего веб-сайта swissmade.it («Сайт»).
                  </p>
                  <p>
                    Мы соблюдаем требования Общего регламента по защите данных (GDPR) Европейского союза 
                    и Федерального закона о защите данных Швейцарии (Swiss DPA/DSG).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Оператор данных</h2>
                  <p>
                    <strong className="text-white">Swiss Tech Solutions GmbH</strong><br />
                    Bahnhofstrasse 1<br />
                    8001 Zürich, Switzerland<br />
                    Email: privacy@swissmade.it
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Какие данные мы собираем</h2>
                  <p>Мы можем собирать следующие категории персональных данных:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-white">Контактные данные:</strong> имя, email, номер телефона, название компании</li>
                    <li><strong className="text-white">Данные о запросах:</strong> информация, которую вы предоставляете через формы обратной связи</li>
                    <li><strong className="text-white">Технические данные:</strong> IP-адрес, тип браузера, операционная система, данные о посещении сайта</li>
                    <li><strong className="text-white">Cookies:</strong> данные, собираемые через файлы cookie (см. раздел о Cookies)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Цели обработки данных</h2>
                  <p>Мы обрабатываем ваши персональные данные для следующих целей:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ответ на ваши запросы и предоставление информации об услугах</li>
                    <li>Выполнение договорных обязательств</li>
                    <li>Улучшение нашего сайта и услуг</li>
                    <li>Отправка маркетинговых сообщений (только с вашего согласия)</li>
                    <li>Соблюдение правовых обязательств</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Правовые основания обработки</h2>
                  <p>Мы обрабатываем ваши данные на следующих правовых основаниях:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-white">Согласие:</strong> когда вы явно соглашаетесь на обработку (например, подписка на рассылку)</li>
                    <li><strong className="text-white">Исполнение договора:</strong> когда обработка необходима для выполнения договора с вами</li>
                    <li><strong className="text-white">Законный интерес:</strong> для улучшения наших услуг и обеспечения безопасности</li>
                    <li><strong className="text-white">Правовые обязательства:</strong> когда мы обязаны хранить данные по закону</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Передача данных третьим лицам</h2>
                  <p>
                    Мы не продаём и не передаём ваши персональные данные третьим лицам для маркетинговых целей. 
                    Мы можем передавать данные:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Поставщикам услуг, которые помогают нам в работе (хостинг, аналитика)</li>
                    <li>Государственным органам по требованию закона</li>
                    <li>В рамках корпоративных сделок (слияние, поглощение)</li>
                  </ul>
                  <p className="mt-4">
                    Все наши поставщики услуг обязаны соблюдать GDPR и подписывают соглашения об обработке данных (DPA).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Международная передача данных</h2>
                  <p>
                    Данные хранятся на серверах в Швейцарии и Европейском союзе. Если данные передаются 
                    за пределы ЕС/Швейцарии, мы обеспечиваем соответствующий уровень защиты через 
                    стандартные договорные положения (SCC) или решения об адекватности.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Хранение данных</h2>
                  <p>
                    Мы храним ваши персональные данные только столько, сколько необходимо для целей, 
                    описанных в этой политике, или в соответствии с требованиями закона:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Данные клиентов: в течение срока действия договора + 10 лет</li>
                    <li>Данные из форм обратной связи: 2 года</li>
                    <li>Данные аналитики: 26 месяцев</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">9. Ваши права</h2>
                  <p>Вы имеете следующие права в отношении ваших персональных данных:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-white">Право на доступ:</strong> получить копию ваших данных</li>
                    <li><strong className="text-white">Право на исправление:</strong> исправить неточные данные</li>
                    <li><strong className="text-white">Право на удаление:</strong> удалить ваши данные («право быть забытым»)</li>
                    <li><strong className="text-white">Право на ограничение:</strong> ограничить обработку ваших данных</li>
                    <li><strong className="text-white">Право на переносимость:</strong> получить данные в машиночитаемом формате</li>
                    <li><strong className="text-white">Право на возражение:</strong> возражать против обработки на основе законного интереса</li>
                    <li><strong className="text-white">Право отозвать согласие:</strong> в любой момент отозвать данное согласие</li>
                  </ul>
                  <p className="mt-4">
                    Для реализации ваших прав свяжитесь с нами: privacy@swissmade.it
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">10. Cookies</h2>
                  <p>
                    Наш сайт использует файлы cookie для улучшения пользовательского опыта. 
                    Мы используем следующие типы cookies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-white">Необходимые:</strong> для работы сайта (сессия, язык)</li>
                    <li><strong className="text-white">Аналитические:</strong> для понимания использования сайта</li>
                  </ul>
                  <p className="mt-4">
                    Вы можете управлять настройками cookies в вашем браузере или через наш баннер согласия.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">11. Безопасность данных</h2>
                  <p>
                    Мы применяем технические и организационные меры для защиты ваших данных:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Шифрование данных при передаче (TLS/SSL)</li>
                    <li>Шифрование данных при хранении</li>
                    <li>Контроль доступа и аутентификация</li>
                    <li>Регулярное резервное копирование</li>
                    <li>Мониторинг безопасности</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">12. Изменения политики</h2>
                  <p>
                    Мы можем обновлять эту политику конфиденциальности. Существенные изменения 
                    будут сообщены через сайт или по email. Рекомендуем периодически проверять 
                    эту страницу.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">13. Контакты и жалобы</h2>
                  <p>
                    Если у вас есть вопросы о нашей политике конфиденциальности или вы хотите 
                    подать жалобу, свяжитесь с нами:
                  </p>
                  <p className="mt-4">
                    <strong className="text-white">Email:</strong> privacy@swissmade.it<br />
                    <strong className="text-white">Адрес:</strong> Swiss Tech Solutions GmbH, Bahnhofstrasse 1, 8001 Zürich
                  </p>
                  <p className="mt-4">
                    Вы также имеете право подать жалобу в надзорный орган по защите данных:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Швейцария: FDPIC (Federal Data Protection and Information Commissioner)</li>
                    <li>ЕС: надзорный орган вашей страны проживания</li>
                  </ul>
                </section>

              </div>
            </div>

            {/* Contact Box */}
            <div className="mt-12 p-6 bg-void-900/50 border border-mist-800/50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-laser-cyan" />
                <h3 className="text-lg font-semibold text-white">Вопросы по конфиденциальности?</h3>
              </div>
              <p className="text-mist-400 mb-4">
                Свяжитесь с нашим ответственным за защиту данных
              </p>
              <a 
                href="mailto:privacy@swissmade.it"
                className="inline-flex items-center gap-2 text-laser-cyan hover:underline"
              >
                privacy@swissmade.it
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
