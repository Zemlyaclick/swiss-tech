import { Locale } from '@/i18n/request';
import LogisticsPageClient from './LogisticsPageClient';

export default function LogisticsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <LogisticsPageClient locale={locale} />;
}
