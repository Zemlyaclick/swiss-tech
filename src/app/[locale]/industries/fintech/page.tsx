import { Locale } from '@/i18n/request';
import IndustryPageClient from './IndustryPageClient';

export default function FinTechPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <IndustryPageClient locale={locale} />;
}
