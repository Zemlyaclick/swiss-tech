# Руководство по интернационализации (i18n)

## Обзор

Проект использует **next-intl** для многоязычной поддержки. Все тексты хранятся в JSON-файлах и загружаются в зависимости от выбранной локали.

---

## Поддерживаемые языки

| Код | Язык | Файл | Статус |
|-----|------|------|--------|
| `en` | English | `messages/en.json` | ✅ Полный |
| `de` | Deutsch | `messages/de.json` | ✅ Полный |
| `de-CH` | Schweizerdeutsch | `messages/de-CH.json` | ✅ Полный |
| `fr` | Français | `messages/fr.json` | ✅ Полный |
| `it` | Italiano | `messages/it.json` | ✅ Полный |
| `ru` | Русский | `messages/ru.json` | ✅ Полный |

---

## Архитектура

### Файловая структура

```
Swiss/
├── messages/           # Файлы переводов
│   ├── en.json
│   ├── de.json
│   ├── de-CH.json
│   ├── fr.json
│   ├── it.json
│   └── ru.json
├── src/
│   ├── i18n/
│   │   └── request.ts  # Конфигурация next-intl
│   ├── middleware.ts   # Роутинг локалей
│   └── app/
│       └── [locale]/   # Динамические маршруты
```

### Конфигурация

**`src/i18n/request.ts`**
```typescript
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'de', 'fr', 'it', 'de-CH', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'de': 'Deutsch',
  'fr': 'Français',
  'it': 'Italiano',
  'de-CH': 'Schweizerdeutsch',
  'ru': 'Русский',
};

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
```

**`src/middleware.ts`**
```typescript
import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(de|en|fr|it|de-CH|ru)/:path*']
};
```

---

## Использование в компонентах

### Server Components

```tsx
// src/app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';

export default async function Page({ params: { locale } }) {
  const t = await getTranslations('hero');
  
  return (
    <h1>{t('title')}</h1>
  );
}
```

### Client Components

```tsx
// src/components/Hero.tsx
'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  
  return (
    <h1>{t('title')}</h1>
  );
}
```

### Интерполяция

**messages/en.json:**
```json
{
  "greeting": "Hello, {name}!"
}
```

**Использование:**
```tsx
t('greeting', { name: 'John' })
// => "Hello, John!"
```

### Множественные формы

**messages/en.json:**
```json
{
  "items": "You have {count, plural, =0 {no items} =1 {one item} other {# items}}"
}
```

**Использование:**
```tsx
t('items', { count: 5 })
// => "You have 5 items"
```

---

## Структура файлов переводов

### Иерархия ключей

```json
{
  "nav": {
    "home": "Home",
    "services": "Services",
    "about": "About",
    "contact": "Contact",
    "cta": "Let's Talk"
  },
  
  "hero": {
    "title": "Your Business Deserves",
    "subtitle": "a Solid Foundation",
    "description": "We don't build websites...",
    "cta": "Get Your Free Audit",
    "explore": "See How We Work",
    "badge": "Swiss Precision Engineering"
  },
  
  "services": {
    "title": "Our Services",
    "subtitle": "Comprehensive IT solutions...",
    "telegram_bots": {
      "title": "Telegram Bots",
      "description": "We develop bots..."
    },
    "websites": {
      "title": "Web Development",
      "description": "We develop websites..."
    }
  }
}
```

### Соглашения по именованию

1. **Используйте snake_case** для ключей: `telegram_bots`, `digital_reboot`
2. **Группируйте по секциям**: `nav`, `hero`, `services`, `footer`
3. **Вложенность для связанных текстов**: `services.telegram_bots.title`
4. **Единообразные ключи** во всех языках

---

## Добавление нового языка

### 1. Создайте файл переводов

```bash
cp messages/en.json messages/es.json
```

### 2. Переведите содержимое

```json
// messages/es.json
{
  "nav": {
    "home": "Inicio",
    "services": "Servicios",
    ...
  }
}
```

### 3. Добавьте локаль в конфигурацию

**`src/i18n/request.ts`**
```typescript
export const locales = ['en', 'de', 'fr', 'it', 'de-CH', 'ru', 'es'] as const;

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'de': 'Deutsch',
  'fr': 'Français',
  'it': 'Italiano',
  'de-CH': 'Schweizerdeutsch',
  'ru': 'Русский',
  'es': 'Español',  // Добавлено
};
```

### 4. Обновите middleware

**`src/middleware.ts`**
```typescript
export const config = {
  matcher: ['/', '/(de|en|fr|it|de-CH|ru|es)/:path*']
};
```

### 5. Пересоберите проект

```bash
npm run build
```

---

## Добавление новых текстов

### 1. Добавьте ключ во все файлы переводов

```bash
# Используйте скрипт или добавьте вручную в каждый файл
```

**messages/en.json:**
```json
{
  "new_section": {
    "title": "New Section",
    "description": "Description in English"
  }
}
```

**messages/de.json:**
```json
{
  "new_section": {
    "title": "Neuer Abschnitt",
    "description": "Beschreibung auf Deutsch"
  }
}
```

### 2. Используйте в компоненте

```tsx
const t = useTranslations('new_section');
return <h2>{t('title')}</h2>;
```

---

## Переключение языка

### Компонент Navigation

```tsx
// Получение текущего пути
const pathname = usePathname();

// Смена локали
const switchLocale = (newLocale: Locale) => {
  const segments = pathname.split('/');
  segments[1] = newLocale;  // Заменяем локаль в URL
  router.push(segments.join('/'));
};
```

### URL структура

```
/en/about     → Английский
/de/about     → Немецкий
/fr/about     → Французский
/ru/about     → Русский
```

---

## SEO оптимизация

### Метаданные

```tsx
// src/app/[locale]/layout.tsx
export const metadata = {
  title: 'Swiss Tech Solutions | Digital Excellence for Europe',
  description: 'Premium IT solutions...',
};
```

### Альтернативные языки (hreflang)

Рекомендуется добавить в `<head>`:

```tsx
// src/app/[locale]/layout.tsx
export function generateMetadata({ params: { locale } }) {
  return {
    alternates: {
      languages: {
        'en': '/en',
        'de': '/de',
        'fr': '/fr',
        'it': '/it',
        'de-CH': '/de-CH',
        'ru': '/ru',
      }
    }
  };
}
```

---

## Проверка полноты переводов

### Скрипт проверки

```javascript
// scripts/check-translations.js
const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, '../messages');
const locales = ['en', 'de', 'fr', 'it', 'de-CH', 'ru'];

const baseLocale = 'en';
const baseMessages = JSON.parse(
  fs.readFileSync(path.join(messagesDir, `${baseLocale}.json`), 'utf8')
);

function getKeys(obj, prefix = '') {
  return Object.entries(obj).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      return getKeys(value, fullKey);
    }
    return fullKey;
  });
}

const baseKeys = getKeys(baseMessages);

locales.forEach(locale => {
  if (locale === baseLocale) return;
  
  const messages = JSON.parse(
    fs.readFileSync(path.join(messagesDir, `${locale}.json`), 'utf8')
  );
  const keys = getKeys(messages);
  
  const missing = baseKeys.filter(key => !keys.includes(key));
  const extra = keys.filter(key => !baseKeys.includes(key));
  
  if (missing.length > 0) {
    console.log(`\n${locale.toUpperCase()} - Missing keys:`);
    missing.forEach(key => console.log(`  - ${key}`));
  }
  
  if (extra.length > 0) {
    console.log(`\n${locale.toUpperCase()} - Extra keys:`);
    extra.forEach(key => console.log(`  + ${key}`));
  }
});
```

Запуск:
```bash
node scripts/check-translations.js
```

---

## Best Practices

### 1. Не хардкодьте тексты

❌ Плохо:
```tsx
<h1>Welcome to our website</h1>
```

✅ Хорошо:
```tsx
<h1>{t('hero.title')}</h1>
```

### 2. Используйте контекст

❌ Плохо:
```json
{
  "button": "Click"
}
```

✅ Хорошо:
```json
{
  "cta": {
    "submit": "Submit Form",
    "learn_more": "Learn More"
  }
}
```

### 3. Избегайте конкатенации

❌ Плохо:
```tsx
t('greeting') + ' ' + name + '!'
```

✅ Хорошо:
```tsx
t('greeting', { name })
```

### 4. Документируйте контекст

```json
{
  "_comment": "Used on the pricing page for the premium tier",
  "premium_title": "Enterprise Plan"
}
```

---

## Troubleshooting

### Ошибка "Missing message"

```
Missing message: "services.new_feature.title" for locale "de"
```

**Решение:** Добавьте ключ во все файлы переводов.

### Локаль не меняется

**Проверить:**
1. Middleware правильно настроен
2. Локаль в URL совпадает с поддерживаемыми
3. Кэш браузера очищен

### Ошибка при сборке

```
Cannot find module 'messages/xx.json'
```

**Решение:** Проверьте, что файл существует и путь в `request.ts` корректен.

---

*Последнее обновление: 3 декабря 2025*
