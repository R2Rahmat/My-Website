
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Finding Missing Person",
    description: "A facial recognition application that helps identify missing persons. Users can sign up, log in, and upload photos of missing persons. The application leverages AI to improve detection accuracy.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI", "Facial Recognition", "Python", "OpenCV", "TensorFlow", "Keras"],
    demoLink: "#",
    githubLink: "#",
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Movie Web Browser",
    description: "A responsive movie search application that allows users to find and explore movies. Features include OpenAI integration for enhanced recommendations and search functionality.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "TailwindCSS", "Firebase", "Node.js", "Express", "OpenAI API"],
    demoLink: "#",
    githubLink: "#",
    category: "Full Stack",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Platform (Help-kart)",
    description: "An online shopping platform with user authentication, product browsing, cart functionality, and checkout process. Features secure transactions through Firebase.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Firebase"],
    demoLink: "#",
    githubLink: "#",
    category: "Full Stack",
    featured: true
  },
  {
    id: 4,
    title: "E-Commerce Platform (Supplements Store)",
    description: "A specialized e-commerce application focusing on supplement products. Features modern UI, secure authentication, and efficient data management.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
    category: "Full Stack",
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
                    {project.tags.slice(0, 5).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 5}
                      </Badge>
                    )}
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
