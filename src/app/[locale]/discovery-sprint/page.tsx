import { Locale } from '@/i18n/request';
import DiscoverySprintClient from './DiscoverySprintClient';

export default function DiscoverySprintPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <DiscoverySprintClient locale={locale} />;
}
