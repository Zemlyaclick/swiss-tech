import { Locale } from '@/i18n/request';
import ComparePageClient from './ComparePageClient';

export default function ComparePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <ComparePageClient locale={locale} />;
}
