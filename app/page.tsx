import AnnouncementBanner from '../components/AnnouncementBanner';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AIModelsSection from '../components/AIModelsSection';
import AIMetricsSection from '../components/AIMetricsSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import ClientEffects from '../components/ClientEffects';
import Marquee from '../components/Marquee';

export default function Home() {
  return (
    <>
      <ClientEffects />
      <AnnouncementBanner />
      <Header />
      <main>
        <HeroSection />
        {/* Keep original AIModelsSection until CSS keyframes are restored; Marquee is available if needed */}
        <AIModelsSection />
        <AIMetricsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
