
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-darkBlue">
              Hi, I'm <span className="text-portfolio-blue">John Doe</span>
            </h2>
            <p className="text-gray-700 mb-6">
              I'm a Full-Stack Developer with over 5 years of experience building web applications using the MERN stack. 
              I specialize in creating responsive, user-friendly interfaces with React and developing robust backend systems with Node.js and Express.
            </p>
            <p className="text-gray-700 mb-6">
              My journey in web development started with a passion for solving problems and creating beautiful digital experiences. 
              I've worked with startups and established companies to build products that users love.
            </p>
            <Button asChild variant="outline" className="group">
              <Link to="/about" className="flex items-center">
                More About Me
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-portfolio-blue to-portfolio-purple">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="John Doe" 
                className="object-cover w-full h-full mix-blend-overlay opacity-75" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
