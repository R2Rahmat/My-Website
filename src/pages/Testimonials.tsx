
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    content: "John is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are impressive. We've received numerous compliments on the user experience of our platform.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    project: "E-Commerce Platform",
  },
  {
    id: 2,
    name: "Michael Richards",
    position: "Product Manager, InnovateX",
    content: "We hired John for a complex web application, and he delivered a polished product that our users love. His technical skills and communication made the project seamless. John was always available to answer questions and provide updates throughout the development process.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    project: "Task Management App",
  },
  {
    id: 3,
    name: "Emily Chen",
    position: "Founder, DesignHub",
    content: "John transformed our concept into a beautiful, functional website. He understood our needs and implemented everything perfectly. I highly recommend his services to anyone looking for a skilled and reliable developer.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=faces",
    project: "Portfolio Website",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "CTO, FinTech Solutions",
    content: "Working with John was a pleasure. He quickly grasped our complex requirements and delivered a solution that exceeded our expectations. His technical expertise and attention to security details were particularly valuable for our financial application.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
    project: "Financial Dashboard",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Marketing Director, GrowthBrand",
    content: "John developed our marketing website with exceptional attention to SEO and performance. The site loads quickly and ranks well in search results. He was responsive to feedback and made changes promptly. A true professional!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces",
    project: "Marketing Website",
  },
  {
    id: 6,
    name: "Robert Martinez",
    position: "Startup Founder",
    content: "As a startup with limited resources, finding John was a game-changer. He delivered high-quality work at a fair price and was always willing to go the extra mile. His ability to translate our vision into a working product was impressive.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    project: "MVP Development",
  }
];

const Testimonials = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-portfolio-lightBlue/30 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            What my clients say about working with me. I'm proud to have helped these companies achieve their goals.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
                {/* Quote mark decoration */}
                <div className="absolute top-4 right-6 text-6xl text-gray-100 leading-none font-serif">"</div>
                
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 relative z-10">{testimonial.content}</p>
                
                <div className="text-sm text-portfolio-blue font-medium mt-auto">
                  Project: {testimonial.project}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl text-gray-700 mb-8">
            I'm currently available for freelance work. Let's build something amazing together!
          </p>
          <a 
            href="/contact" 
            className="bg-portfolio-blue hover:bg-portfolio-blue/90 text-white font-medium py-3 px-8 rounded-full inline-block transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
