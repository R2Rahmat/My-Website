
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-portfolio-lightBlue to-white overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-portfolio-darkBlue animate-fade-in">
            Building <span className="text-portfolio-blue">digital products</span>, brands, and experiences
          </h1>
          <p className="text-xl text-portfolio-dark/90 mb-8 md:text-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full-Stack Developer specializing in MERN stack development with a passion for creating beautiful and functional web applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="rounded-full bg-portfolio-blue hover:bg-portfolio-blue/90">
              <Link to="/projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full group border-portfolio-blue/50 text-portfolio-darkBlue hover:border-portfolio-blue hover:bg-portfolio-blue/10">
              <Link to="/contact" className="flex items-center">
                Contact Me 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-portfolio-blue" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-portfolio-blue/80" />
      </div>
    </section>
  );
};

export default HeroSection;
