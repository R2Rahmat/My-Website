
import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/home/HeroSection";
import AboutMeSection from "@/components/home/AboutMeSection";
import TechStack from "@/components/home/TechStack";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <div className="bg-portfolio-dark">
      <Helmet>
        <title>MD RAHMAT - Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer specializing in MERN stack development with a passion for creating beautiful and functional web applications" />
      </Helmet>
      <HeroSection />
      <AboutMeSection />
      <TechStack />
      <FeaturedProjects />
      <ContactCTA />
    </div>
  );
};

export default Index;
