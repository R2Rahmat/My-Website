
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["HTML5", "CSS3", "ReactJs", "Vite", "AngularJs", "Bootstrap", "Tailwind CSS", "Next.js", "TypeScript", "Material-UI", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", ".NET", "MongoDB", "RESTful APIs", "GraphQL", "Firebase"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker", "CI/CD", "VS Code", "Postman", "Figma", "StarUML", "Netlify", "Render"] }
];

const experience = [
  {
    company: "Suven Consultants & Technology Pvt Ltd.",
    position: "Full Stack Developer",
    period: "Aug 2024 - Dec 2024",
    description: "Worked as a remote full stack developer, learning and implementing various web technologies.",
    achievements: [
      "Learned and implemented ReactJs, AngularJs, ExpressJs, NodeJs, MongoDB, NextJs, Firebase",
      "Worked on various projects using various coding methodologies",
      "Handled databases and created responsive front-ends using ReactJs, AngularJs, TailwindCSS, NextJs, TypeScript, Bootstrap"
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
                I'm a passionate Full Stack Developer specializing in MERN stack application development.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:rahmatraj7786@gmail.com" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                  <Mail size={24} />
                </a>
                <a href="tel:+91-7070715733" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                  <Phone size={24} />
                </a>
              </div>
            </div>
            <div>
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-portfolio-blue to-portfolio-purple">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="MD RAHMAT" 
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
                I'm currently pursuing my B.Tech in Computer Science and Engineering at IIMT College of Engineering, Greater Noida (2021-2025) with a CGPA of 6.5.
              </p>
              <p>
                My journey in web development began during my college studies where I discovered my passion for creating digital experiences. 
                I've been actively learning and implementing various web technologies including React, Node.js, Express, and MongoDB.
              </p>
              <p>
                I recently worked as a Full Stack Developer intern at Suven Consultants & Technology Pvt Ltd., where I gained valuable industry experience 
                working on real-world projects using the MERN stack and other modern frameworks.
              </p>
              <p>
                I specialize in creating full-stack web applications with particular expertise in frontend development using React, 
                and backend development with Node.js and Express. I'm passionate about clean code, performance optimization, and creating exceptional user experiences.
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
                  <h3 className="text-xl font-bold">B.Tech in Computer Science and Engineering</h3>
                  <p className="text-portfolio-blue font-medium">IIMT College of Engineering, Greater Noida</p>
                </div>
                <Badge variant="outline" className="text-sm">
                  2021 - 2025
                </Badge>
              </div>
              <p className="text-gray-700">
                Currently pursuing with a CGPA of 6.5. Coursework includes Data Structures & Algorithms, 
                Object-Oriented Programming, Computer Networks, Cloud Computing, Database Management Systems, 
                Software Engineering, and Artificial Intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
