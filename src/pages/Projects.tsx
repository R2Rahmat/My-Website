
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    id: 1,
    title: "AC Experts - Air Conditioning Services",
    description: "A comprehensive platform for AC installation, repair, and maintenance services. Features service booking and technician scheduling.",
    image: "/lovable-uploads/1c47bbaf-4046-4e7b-9e48-602ce43828ff.png",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Firebase"],
    demoLink: "https://help-kart.vercel.app",
    githubLink: "https://github.com/R2Rahmat/help-kart",
    featured: true
  },
  {
    id: 2,
    title: "CleanQuest - Home Cleaning Services",
    description: "A platform for booking professional cleaning services. Users can schedule appointments, track cleaning status, and manage service history.",
    image: "/lovable-uploads/07a9af94-8d64-4001-badd-4e095e240bbb.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "TailwindCSS"],
    demoLink: "https://lovable.dev/projects/61127d66-2f22-49ea-ab31-9855572e43e4",
    githubLink: "https://github.com/R2Rahmat/ac-wallah",
    featured: true
  },
  {
    id: 3,
    title: "WeightLoss - Supplements Store",
    description: "A specialized e-commerce application focusing on weight loss supplement products. Features modern UI, secure authentication, and efficient data management.",
    image: "/lovable-uploads/d27b4148-2bb9-4cf8-9c4f-17e1fa2f51f6.png",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    demoLink: "#",
    githubLink: "https://github.com/R2Rahmat/supplements-store",
    featured: false
  }
];

const Projects = () => {
  return (
    <div className="bg-white text-portfolio-dark">
      <Helmet>
        <title>MD RAHMAT - Projects</title>
        <meta name="description" content="Portfolio of projects by MD RAHMAT, a Full-Stack Developer." />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-portfolio-lightBlue to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-darkBlue">My Projects</h1>
          <p className="text-xl text-portfolio-dark/80 max-w-3xl mx-auto">
            Explore my portfolio of web development projects built with the MERN stack and other modern technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="glass-card rounded-xl overflow-hidden group h-full flex flex-col hover:scale-[1.02] transition-transform duration-300 animate-fade-in" style={{animationDelay: `${project.id * 0.2}s`}}>
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-portfolio-yellow text-portfolio-dark font-medium">Featured</Badge>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-portfolio-blue">{project.title}</h3>
                  <p className="text-portfolio-dark/80 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 5).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-portfolio-lightBlue text-portfolio-darkBlue border border-portfolio-blue/20">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 5 && (
                      <Badge variant="outline" className="text-xs text-portfolio-dark border-portfolio-dark/30">
                        +{project.tags.length - 5}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-4 mt-auto pt-4">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-portfolio-blue hover:text-portfolio-yellow transition-colors flex items-center"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-portfolio-blue hover:text-portfolio-yellow transition-colors flex items-center"
                    >
                      <Github size={16} className="mr-1" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
