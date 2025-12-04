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

async function loadMessages(locale: string) {
  const [common, home, services, industries, pages, components] = await Promise.all([
    import(`../../messages/${locale}/common.json`),
    import(`../../messages/${locale}/home.json`),
    import(`../../messages/${locale}/services.json`),
    import(`../../messages/${locale}/industries.json`),
    import(`../../messages/${locale}/pages.json`),
    import(`../../messages/${locale}/components.json`),
  ]);

  return {
    ...common.default,
    ...home.default,
    ...services.default,
    ...industries.default,
    ...pages.default,
    ...components.default,
  };
}

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: await loadMessages(locale),
  };
});
