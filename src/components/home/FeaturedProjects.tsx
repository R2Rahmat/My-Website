
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform (Help-kart)",
    description: "An online shopping platform with user authentication, product browsing, cart functionality, and checkout process. Features secure transactions through Firebase.",
    image: "/lovable-uploads/1a963ccc-23dc-47df-9a80-405bf733e9bb.png",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Firebase"],
    demoLink: "https://help-kart.vercel.app",
    githubLink: "https://github.com/R2Rahmat/help-kart",
  },
  {
    id: 2,
    title: "AC-wallah",
    description: "A MERN stack application for AC repair and service booking. Users can schedule appointments, track service status, and manage their service history.",
    image: "/lovable-uploads/9caf0e7c-171b-43cc-8afd-839430af2fc8.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "TailwindCSS"],
    demoLink: "https://lovable.dev/projects/61127d66-2f22-49ea-ab31-9855572e43e4",
    githubLink: "https://github.com/R2Rahmat/ac-wallah",
  },
  {
    id: 3,
    title: "E-Commerce Platform (Supplements Store)",
    description: "A specialized e-commerce application focusing on supplement products. Features modern UI, secure authentication, and efficient data management.",
    image: "/lovable-uploads/872c6e53-5ac8-4b3c-94ad-b1b30bd27530.png",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    demoLink: "#",
    githubLink: "https://github.com/R2Rahmat/supplements-store",
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="section-subtitle text-center">
          Check out some of my recent work
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass-card rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 animate-fade-in" style={{animationDelay: `${project.id * 0.2}s`}}>
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-portfolio-blue">{project.title}</h3>
                <p className="text-portfolio-dark/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-portfolio-lightBlue text-portfolio-darkBlue border border-portfolio-blue/20">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-portfolio-dark border-portfolio-dark/30">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-portfolio-blue hover:text-portfolio-yellow transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-portfolio-blue hover:text-portfolio-yellow transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="group border-portfolio-blue text-portfolio-blue hover:text-white hover:bg-portfolio-blue">
            <Link to="/projects" className="flex items-center">
              View All Projects
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
