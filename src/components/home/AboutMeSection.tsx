
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';

const AboutMeSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title text-center text-portfolio-darkBlue">About Me</h2>
        <p className="section-subtitle text-center text-portfolio-dark/80">
          Get to know more about my skills and experience
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageSlider />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-portfolio-blue">
              Full Stack Developer
            </h3>
            <p className="text-portfolio-dark/80 mb-6">
              I'm a passionate Full Stack Developer specializing in the MERN stack. With a strong foundation in both frontend and backend development, I create responsive, user-friendly web applications that deliver exceptional experiences.
            </p>
            <p className="text-portfolio-dark/80 mb-6">
              My technical expertise includes JavaScript, React, Node.js, Express, and MongoDB, along with modern tools and frameworks that enhance the development process.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">Express</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">Redux</span>
              <span className="skill-badge">TypeScript</span>
              <span className="skill-badge">TailwindCSS</span>
            </div>
            
            <Button asChild variant="outline" className="group border-portfolio-blue text-portfolio-blue hover:text-white hover:bg-portfolio-blue">
              <Link to="/about" className="flex items-center">
                More About Me
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
