
import { Helmet } from "react-helmet-async";

const ContactHeader = () => {
  return (
    <>
      <Helmet>
        <title>Contact Me - MD RAHMAT</title>
        <meta name="description" content="Contact MD RAHMAT for web development projects, collaborations, or inquiries." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-100 to-white overflow-hidden">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-darkBlue">Contact Me</h1>
          <p className="text-xl text-portfolio-dark/90 max-w-3xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Get in touch!
          </p>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-px opacity-5 pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="border border-gray-400"></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactHeader;
