
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Certificates", path: "/certificates" },
  { title: "Contact", path: "/contact" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-portfolio-blue">
          MD<span className="text-portfolio-yellow">RAHMAT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors ${
                location.pathname === link.path 
                  ? "text-portfolio-blue" 
                  : "text-portfolio-dark hover:text-portfolio-blue"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <a 
            href="/resume.pdf" 
            download="MD_RAHMAT_Resume.pdf"
            className="inline-flex items-center gap-2 text-white font-medium bg-portfolio-blue hover:bg-portfolio-blue/90 rounded-full px-4 py-2 transition-colors"
          >
            <Download size={16} />
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-portfolio-dark hover:text-portfolio-blue">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md">
          <nav className="container mx-auto py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors py-2 ${
                  location.pathname === link.path 
                    ? "text-portfolio-blue" 
                    : "text-portfolio-dark hover:text-portfolio-blue"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <a 
              href="/resume.pdf" 
              download="MD_RAHMAT_Resume.pdf"
              className="inline-flex items-center gap-2 w-fit text-white font-medium bg-portfolio-blue hover:bg-portfolio-blue/90 rounded-full px-4 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Download size={16} />
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
