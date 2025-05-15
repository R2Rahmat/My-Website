
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-card text-portfolio-light py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">
              MD<span className="text-portfolio-blue">RAHMAT</span>
            </Link>
            <p className="text-portfolio-light/70 mb-4 max-w-md">
              Full-stack developer specializing in building exceptional digital experiences with the MERN stack.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/R2Rahmat" target="_blank" rel="noopener noreferrer" className="text-portfolio-light/70 hover:text-portfolio-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/md-rahmt-devloper0012" target="_blank" rel="noopener noreferrer" className="text-portfolio-light/70 hover:text-portfolio-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rahmatraj7786@gmail.com" className="text-portfolio-light/70 hover:text-portfolio-blue transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+91-7070715733" className="text-portfolio-light/70 hover:text-portfolio-blue transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-portfolio-light">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-portfolio-light/70 hover:text-portfolio-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-portfolio-light/70 hover:text-portfolio-blue transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-portfolio-light/70 hover:text-portfolio-blue transition-colors">Projects</Link></li>
              <li><Link to="/certificates" className="text-portfolio-light/70 hover:text-portfolio-blue transition-colors">Certificates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-portfolio-light">Contact</h3>
            <ul className="space-y-2 text-portfolio-light/70">
              <li>Greater Noida, India</li>
              <li>rahmatraj7786@gmail.com</li>
              <li>+91-7070715733</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-portfolio-light/10 mt-8 pt-8 text-center text-portfolio-light/50">
          <p>&copy; {currentYear} MD RAHMAT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
