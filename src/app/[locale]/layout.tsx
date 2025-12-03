import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, Locale } from '@/i18n/request';
import TargetCursor from '@/components/TargetCursor';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: 'Swiss Tech Solutions | Digital Excellence for Europe',
  description: 'Premium IT solutions for Switzerland and Europe. Telegram bots, web & mobile development, AI integration, and business automation.',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <TargetCursor 
        spinDuration={3}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.15}
      />
      {children}
    </NextIntlClientProvider>
  );
}

