
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-portfolio-darkBlue">Get in Touch</h2>
      <p className="text-portfolio-dark mb-8">
        Feel free to reach out if you have any questions or would like to work together. I'm currently available for freelance work.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Mail className="text-portfolio-blue" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-portfolio-darkBlue">Email</h3>
            <p className="text-portfolio-dark">rahmatraj7786@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Phone className="text-portfolio-blue" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-portfolio-darkBlue">Phone</h3>
            <p className="text-portfolio-dark">+91 7070715733</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <MapPin className="text-portfolio-blue" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-portfolio-darkBlue">Location</h3>
            <p className="text-portfolio-dark">Greater Noida, India</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-4 text-portfolio-darkBlue">Follow Me</h3>
        <div className="flex space-x-4">
          <a href="https://github.com/R2Rahmat" target="_blank" rel="noopener noreferrer" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/md_rahmat_dev/" target="_blank" rel="noopener noreferrer" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/md-rahmt-devloper0012" target="_blank" rel="noopener noreferrer" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
