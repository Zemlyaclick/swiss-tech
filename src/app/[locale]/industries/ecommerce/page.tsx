import { Locale } from '@/i18n/request';
import EcommercePageClient from './EcommercePageClient';

export default function EcommercePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <EcommercePageClient locale={locale} />;
}
