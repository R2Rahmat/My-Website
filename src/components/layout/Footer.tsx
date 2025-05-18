
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">
              MD<span className="text-portfolio-blue">RAHMAT</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Full-stack developer specializing in building exceptional digital experiences with the MERN stack.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/R2Rahmat" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/md_rahmat_dev/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/md-rahmt-devloper0012" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rahmatraj7786@gmail.com" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+91-7070715733" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-portfolio-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-portfolio-blue transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-portfolio-blue transition-colors">Projects</Link></li>
              <li><Link to="/certificates" className="text-gray-300 hover:text-portfolio-blue transition-colors">Certificates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Greater Noida, India</li>
              <li>rahmatraj7786@gmail.com</li>
              <li>+91-7070715733</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} MD RAHMAT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
