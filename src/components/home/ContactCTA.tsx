
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-portfolio-blue/20 to-portfolio-blue/10 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-px opacity-5 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="border border-white"></div>
        ))}
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-light">Ready to discuss your project?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-portfolio-light/80">
          Let's work together to build something amazing. Contact me to discuss your ideas and how I can help bring them to life.
        </p>
        <Button asChild className="group bg-portfolio-yellow text-portfolio-dark hover:bg-portfolio-yellow/90">
          <Link to="/contact" className="flex items-center">
            Get in Touch
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
