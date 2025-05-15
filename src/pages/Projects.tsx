
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    demoLink: "#",
    githubLink: "#",
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    demoLink: "#",
    githubLink: "#",
    category: "Full Stack",
    featured: true
  },
  {
    id: 3,
    title: "Real Estate Marketplace",
    description: "A platform for property listings with advanced search, filtering, and user favorites functionality.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    tags: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
    demoLink: "#",
    githubLink: "#",
    category: "Full Stack",
    featured: true
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application that displays current and forecasted weather data using a third-party API.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tags: ["React", "API Integration", "Chart.js", "Geolocation"],
    demoLink: "#",
    githubLink: "#",
    category: "Frontend",
    featured: false
  },
  {
    id: 5,
    title: "Personal Finance Tracker",
    description: "An application for tracking personal finances, including income, expenses, and savings goals.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "Node.js", "Express", "MongoDB", "D3.js"],
    demoLink: "#",
    githubLink: "#",
    category: "Full Stack",
    featured: false
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description: "A community-driven platform for sharing and discovering recipes with search and filtering capabilities.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    demoLink: "#",
    githubLink: "#",
    category: "Full Stack",
    featured: false
  },
  {
    id: 7,
    title: "Responsive Portfolio Template",
    description: "A customizable portfolio template for developers and designers to showcase their work.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    demoLink: "#",
    githubLink: "#",
    category: "Frontend",
    featured: false
  },
  {
    id: 8,
    title: "API Documentation Generator",
    description: "A tool for automatically generating API documentation from code comments and endpoints.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Node.js", "Express", "Documentation", "CLI Tool"],
    demoLink: "#",
    githubLink: "#",
    category: "Backend",
    featured: false
  }
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-portfolio-lightBlue/30 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore my portfolio of web development projects built with the MERN stack and other modern technologies.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto">
          <div className="flex justify-center flex-wrap gap-4">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-portfolio-blue text-white">Featured</Badge>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto pt-4">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-portfolio-blue hover:text-portfolio-purple transition-colors flex items-center"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-portfolio-blue hover:text-portfolio-purple transition-colors flex items-center"
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
