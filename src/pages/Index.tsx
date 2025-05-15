
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import TechStack from "@/components/home/TechStack";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <TechStack />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Index;
