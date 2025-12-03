import { Locale } from '@/i18n/request';
import SecurityPageClient from './SecurityPageClient';

export default function SecurityPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <SecurityPageClient locale={locale} />;
}
