
const techStack = [
  { name: "React", icon: "/assets/icons/react.svg" },
  { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
  { name: "Express", icon: "/assets/icons/express.svg" },
  { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
  { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
  { name: "Tailwind CSS", icon: "/assets/icons/tailwind.svg" },
  { name: "Redux", icon: "/assets/icons/redux.svg" },
  { name: "Git", icon: "/assets/icons/git.svg" },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Tech Stack</h2>
        <p className="section-subtitle text-center">
          These are the technologies I use to build modern web applications
        </p>
        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {techStack.map((tech, index) => (
            <div 
              key={tech.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-4 bg-portfolio-blue/5 rounded-full">
                {/* Using placeholder for icons */}
                <div className="w-8 h-8 rounded-full bg-portfolio-blue/20 flex items-center justify-center">
                  <span className="text-xs font-medium text-portfolio-blue">{tech.name.substring(0, 2)}</span>
                </div>
              </div>
              <h3 className="text-lg font-medium text-center">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
