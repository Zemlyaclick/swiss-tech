import { Locale } from '@/i18n/request';
import MedTechPageClient from './MedTechPageClient';

export default function MedTechPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <MedTechPageClient locale={locale} />;
}
