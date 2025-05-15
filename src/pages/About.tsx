
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "REST API Design", "GraphQL", "AWS", "Firebase"] },
  { category: "Tools", items: ["Git", "Docker", "Webpack", "Jest", "CI/CD", "VS Code", "Figma"] }
];

const experience = [
  {
    company: "Tech Solutions Inc.",
    position: "Senior Full Stack Developer",
    period: "2021 - Present",
    description: "Lead developer for multiple client projects, managing both frontend and backend development. Implemented modern web applications using React, Node.js, and MongoDB.",
    achievements: [
      "Reduced application load time by 40% through code optimization and lazy loading strategies",
      "Implemented CI/CD pipeline, reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    company: "WebDev Studio",
    position: "Frontend Developer",
    period: "2019 - 2021",
    description: "Developed responsive user interfaces using React and Redux. Collaborated with UX designers and backend developers to implement new features.",
    achievements: [
      "Created reusable component library, improving development efficiency by 30%",
      "Implemented state management system using Redux, enhancing application performance",
      "Collaborated with design team to improve UX across multiple projects"
    ]
  },
  {
    company: "StartUp Innovations",
    position: "Junior Web Developer",
    period: "2017 - 2019",
    description: "Designed and developed websites for various clients using JavaScript, HTML, and CSS. Assisted senior developers with larger projects.",
    achievements: [
      "Developed responsive websites for 15+ clients",
      "Learned React and Node.js, applying skills to internal projects",
      "Contributed to company-wide code standards and best practices"
    ]
  }
];

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-portfolio-lightBlue/30 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-darkBlue">
                About <span className="text-portfolio-blue">Me</span>
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                I'm a passionate Full Stack Developer with over 5 years of experience building web applications using the MERN stack.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="mailto:info@johndoe.com" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div>
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-portfolio-blue to-portfolio-purple">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="John Doe" 
                  className="object-cover w-full h-full mix-blend-overlay opacity-75" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">My Story</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                I began my journey in web development during college where I discovered my passion for creating digital experiences. What started as a curiosity quickly evolved into a career as I began freelancing and building projects for local businesses.
              </p>
              <p>
                After graduating with a degree in Computer Science, I joined a startup where I honed my skills in frontend development, learning React and modern JavaScript practices. Over time, I expanded my skills to include backend development with Node.js and Express, becoming a full-stack developer.
              </p>
              <p>
                Today, I specialize in building full-stack applications with the MERN stack, focusing on creating responsive, user-friendly interfaces and robust backend systems. I'm passionate about clean code, performance optimization, and creating exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading technology blogs, or experimenting with new web technologies. I believe in continuous learning and regularly attend tech conferences and workshops to stay current with industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title text-center">My Skills</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-portfolio-blue">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="section-title text-center">Work Experience</h2>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative border-l-2 border-portfolio-blue pl-8 ml-4">
              {experience.map((job, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-portfolio-blue flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.position}</h3>
                        <p className="text-portfolio-blue font-medium">{job.company}</p>
                      </div>
                      <Badge variant="outline" className="text-sm">
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-portfolio-blue mt-2 mr-2 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title text-center">Education</h2>
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                  <p className="text-portfolio-blue font-medium">University of Technology</p>
                </div>
                <Badge variant="outline" className="text-sm">
                  2013 - 2017
                </Badge>
              </div>
              <p className="text-gray-700">
                Graduated with honors. Focused on web development, algorithms, and data structures. 
                Participated in coding competitions and built several projects as part of coursework.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
