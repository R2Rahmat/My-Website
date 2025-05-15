
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-portfolio-blue text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to discuss your project?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Let's work together to build something amazing. Contact me to discuss your ideas and how I can help bring them to life.
        </p>
        <Button asChild size="lg" variant="secondary" className="rounded-full group">
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
