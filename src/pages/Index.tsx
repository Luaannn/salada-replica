import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SaladsSection from "@/components/SaladsSection";
import MolhosSection from "@/components/MolhosSection";
import VideoPreviewSection from "@/components/VideoPreviewSection";
import BonusSection from "@/components/BonusSection";
import PainSection from "@/components/PainSection";
import PriceSection from "@/components/PriceSection";
import NutriSection from "@/components/NutriSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-olive">
      <HeroSection />
      <FeaturesSection />
      <SaladsSection />
      <MolhosSection />
      <VideoPreviewSection />
      <BonusSection />
      <PainSection />
      <PriceSection />
      <NutriSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
};

export default Index;
