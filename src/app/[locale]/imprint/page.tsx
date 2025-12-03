import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Building, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Impressum | Swiss Made IT',
  description: 'Юридическая информация о компании Swiss Tech Solutions GmbH. Impressum согласно швейцарскому законодательству.',
};

export default async function ImprintPage({ 
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
              <Building className="w-8 h-8 text-laser-cyan" />
              <span className="text-laser-cyan text-sm">Impressum / Юридическая информация</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Impressum
            </h1>

            <div className="space-y-8">
              
              {/* Company Info */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Building className="w-6 h-6 text-laser-cyan" />
                  Информация о компании
                </h2>
                <div className="space-y-4 text-mist-300">
                  <div>
                    <p className="text-white text-xl font-semibold">Swiss Tech Solutions GmbH</p>
                    <p className="text-mist-400">Gesellschaft mit beschränkter Haftung (GmbH)</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div>
                      <p className="text-mist-500 text-sm mb-1">Юридический адрес</p>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-laser-cyan mt-1 flex-shrink-0" />
                        <div>
                          <p>Bahnhofstrasse 1</p>
                          <p>8001 Zürich</p>
                          <p>Switzerland</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-mist-500 text-sm mb-1">Регистрационные данные</p>
                      <div className="space-y-1">
                        <p><span className="text-mist-500">UID:</span> CHE-123.456.789</p>
                        <p><span className="text-mist-500">Торговый реестр:</span> Zürich</p>
                        <p><span className="text-mist-500">№ записи:</span> CH-020.1.234.567-8</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Контактная информация</h2>
                <div className="grid md:grid-cols-2 gap-6 text-mist-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-laser-cyan/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-laser-cyan" />
                    </div>
                    <div>
                      <p className="text-mist-500 text-sm">Email</p>
                      <a href="mailto:hello@swissmade.it" className="text-white hover:text-laser-cyan">
                        hello@swissmade.it
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-laser-cyan/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-laser-cyan" />
                    </div>
                    <div>
                      <p className="text-mist-500 text-sm">Телефон</p>
                      <a href="tel:+41441234567" className="text-white hover:text-laser-cyan">
                        +41 44 123 45 67
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-laser-cyan/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-laser-cyan" />
                    </div>
                    <div>
                      <p className="text-mist-500 text-sm">Веб-сайт</p>
                      <a href="https://swissmade.it" className="text-white hover:text-laser-cyan">
                        swissmade.it
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Management */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Руководство</h2>
                <div className="text-mist-300">
                  <p><span className="text-mist-500">Управляющий директор (Geschäftsführer):</span></p>
                  <p className="text-white">Александр Новак</p>
                </div>
              </div>

              {/* VAT */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Налоговая информация</h2>
                <div className="text-mist-300 space-y-2">
                  <p><span className="text-mist-500">UID/VAT номер:</span> CHE-123.456.789 MWST</p>
                  <p><span className="text-mist-500">Налоговый орган:</span> Kanton Zürich</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Отказ от ответственности</h2>
                <div className="text-mist-300 space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2">Содержание сайта</h3>
                    <p className="text-sm">
                      Содержание этого веб-сайта создано с максимальной тщательностью. Однако мы не 
                      можем гарантировать точность, полноту и актуальность представленной информации. 
                      Как поставщик услуг мы несём ответственность за собственный контент в 
                      соответствии с общими законами.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-2">Внешние ссылки</h3>
                    <p className="text-sm">
                      Наш сайт содержит ссылки на внешние веб-сайты третьих лиц, на содержание 
                      которых мы не имеем влияния. Поэтому мы не несём ответственности за содержание 
                      этих внешних ресурсов. За содержание связанных страниц ответственность несёт 
                      соответствующий поставщик или оператор.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-2">Авторские права</h3>
                    <p className="text-sm">
                      Содержание и работы на этом сайте защищены швейцарским законодательством об 
                      авторском праве. Копирование, обработка, распространение и любое использование 
                      за пределами авторского права требует письменного согласия соответствующего 
                      автора или создателя.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Protection */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Защита данных</h2>
                <div className="text-mist-300">
                  <p className="mb-4">
                    Информация об обработке персональных данных находится в нашей{' '}
                    <a href={`/${locale}/privacy`} className="text-laser-cyan hover:underline">
                      Политике конфиденциальности
                    </a>.
                  </p>
                  <p>
                    <span className="text-mist-500">Ответственный за защиту данных:</span><br />
                    <a href="mailto:privacy@swissmade.it" className="text-laser-cyan hover:underline">
                      privacy@swissmade.it
                    </a>
                  </p>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div className="p-8 bg-void-900/50 border border-mist-800/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Разрешение споров</h2>
                <div className="text-mist-300 text-sm space-y-4">
                  <p>
                    Европейская комиссия предоставляет платформу для онлайн-разрешения споров (ODR):{' '}
                    <a 
                      href="https://ec.europa.eu/consumers/odr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-laser-cyan hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                  <p>
                    Мы не обязаны и не готовы участвовать в процедурах разрешения споров перед 
                    органом по защите прав потребителей.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
