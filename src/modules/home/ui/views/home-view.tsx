import { HeroSection } from "../sections/hero-section";
import { AboutSection } from "@/modules/home/ui/sections/about-section";
import { CategoriesSection } from "../sections/categories-section";
import { SupportSection } from "../sections/support-section";
import { HomeVideoSection } from "../sections/home-videos-section";

interface HomeViewProps {
  categoryId?: string;
}

export const HomeView = ({ categoryId }: HomeViewProps) => {
  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
      <HeroSection />
      <CategoriesSection categoryId={categoryId} />
      <HomeVideoSection categoryId={categoryId} />
      <AboutSection />
      <SupportSection />
    </div>
  );
};
