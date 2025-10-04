import AnnouncementBanner from '../components/AnnouncementBanner';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AIModelsSection from '../components/AIModelsSection';
import AIMetricsSection from '../components/AIMetricsSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main>
        <HeroSection />
        <AIModelsSection />
        <AIMetricsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
