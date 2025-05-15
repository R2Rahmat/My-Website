
import HeroSection from "@/components/home/HeroSection";
import AboutMeSection from "@/components/home/AboutMeSection";
import TechStack from "@/components/home/TechStack";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <div className="bg-portfolio-dark">
      <HeroSection />
      <AboutMeSection />
      <TechStack />
      <FeaturedProjects />
      <ContactCTA />
    </div>
  );
};

export default Index;
