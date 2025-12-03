import { Locale } from '@/i18n/request';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import USP from '@/components/USP';
import Metrics from '@/components/Metrics';
import Services from '@/components/Services';
import TrustBadges from '@/components/TrustBadges';
import TechStack from '@/components/TechStack';
import Process from '@/components/Process';
import Guarantee from '@/components/Guarantee';
import PriceCalculator from '@/components/PriceCalculator';
import NotForEveryone from '@/components/NotForEveryone';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function HomePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <main className="relative min-h-screen bg-void-950">
      <Navigation locale={locale} />
      <Hero />
      <USP />
      <Metrics />
      <Services />
      <TrustBadges />
      <Testimonials />
      <TechStack />
      <Process />
      <Guarantee />
      <PriceCalculator />
      <NotForEveryone />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
