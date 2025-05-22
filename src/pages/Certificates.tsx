
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const certificates = [
  {
    id: 1,
    title: "Mastering in JAVA , Data Structure & Algorithms",
    issuer: "Apna College",
    date: "2024",
    image: "/lovable-uploads/DSA.jpg", 
    description: "Comprehensive training on data structures and algorithms, with practical implementations and problem-solving techniques.",
    skills: ["Data Structures", "Algorithms", "Problem Solving", "Complexity Analysis"],
    credentialId: "DSA=67651360ba06a4a78c01c557",
    credentialURL: "#"
  },
  {
    id: 2,
    title: "Full Stack Developer Certification",
    issuer: "Apna College",
    date: "2023",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=350&fit=crop",
    description: "Complete full-stack development curriculum covering MERN stack (MongoDB, Express, React, Node.js) with practical projects.",
    skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "REST APIs"],
    credentialId: "FULLSTACK-6789",
    credentialURL: "#"
  },
  {
    id: 3,
    title: "MERN & MEVN Stack Development",
    issuer: "Apna College",
    date: "2023",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=350&fit=crop",
    description: "Advanced web development using both MERN (MongoDB, Express, React, Node.js) and MEVN (MongoDB, Express, Vue.js, Node.js) stacks.",
    skills: ["MERN Stack", "MEVN Stack", "MongoDB", "Express", "React", "Vue.js", "Node.js"],
    credentialId: "STACK-9012",
    credentialURL: "#"
  },
  {
    id: 4,
    title: "Cyber Security",
    issuer: "Cisco",
    date: "2022",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=350&fit=crop",
    description: "Training on cybersecurity fundamentals, network security, threat detection, and security best practices.",
    skills: ["Cybersecurity", "Network Security", "Threat Detection", "Security Protocols"],
    credentialId: "CISCO-CS-3456",
    credentialURL: "#"
  },
  {
    id: 5,
    title: "JavaScript Certification",
    issuer: "Cisco",
    date: "2022",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=350&fit=crop",
    description: "Comprehensive JavaScript programming course covering fundamentals, advanced concepts, and modern ES6+ features.",
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Asynchronous JS", "Web APIs"],
    credentialId: "CISCO-JS-7890",
    credentialURL: "#"
  },
  {
    id: 6,
    title: "Publication Certification",
    issuer: "HBRP Publication",
    date: "2025",
    image: "/lovable-uploads/MD-Rahma.jpg",
    description: 'MD Rahmat published his paper "Help-Kart: E-Com Robust Infrastructure for Development" in HBRP Journal, Vol. 1, Issue 2, 2025.',
    skills: ["Web development", "E-commerce infrastructure", "Data mining", "Knowledge discovery", "Software architecture", "System design", "Technical writing", "Research", "Problem solving", "Innovation"],
    credentialId: "For More details click to Verify Certificate",
    credentialURL: "https://zenodo.org/records/15322043"
  },
  {
    id: 7,
    title: "JavaScript Certification",
    issuer: "HackerRank",
    date: "2022",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=350&fit=crop",
    description: "JavaScript certification validating skills in JavaScript fundamentals, functional programming, and modern JavaScript features.",
    skills: ["JavaScript", "Functional Programming", "ES6+", "JavaScript Algorithms"],
    credentialId: "HKR-JS-56789",
    credentialURL: "#"
  }
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredCertificates = certificates.filter(cert => 
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-portfolio-lightBlue/30 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Certificates & Qualifications</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional certifications and qualifications that demonstrate my expertise and commitment to continuous learning.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search certificates by title, issuer, or skill..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-portfolio-blue" />
            </div>
          ) : filteredCertificates.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-600">No certificates found matching your search.</h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCertificates.map((certificate) => (
                <div 
                  key={certificate.id} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedCertificate(certificate)}
                >
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={certificate.image} 
                        alt={certificate.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </AspectRatio>
                    <div className="absolute top-2 right-2">
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarImage src="/lovable-uploads/MD-Rahma.jpg" />
                        <AvatarFallback>{certificate.issuer.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{certificate.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {certificate.date}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{certificate.issuer}</p>
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {certificate.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{certificate.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Certificate Detail Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="sm:max-w-xl">
          {selectedCertificate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedCertificate.title}</DialogTitle>
                <DialogDescription className="text-sm text-portfolio-blue font-medium">
                  {selectedCertificate.issuer} • {selectedCertificate.date}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <div className="rounded-lg overflow-hidden mb-6">
                  <img 
                    src={selectedCertificate.image} 
                    alt={selectedCertificate.title}
                    className="w-full h-auto" 
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">{selectedCertificate.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Credential</h4>
                    <p className="text-sm text-gray-600">ID: {selectedCertificate.credentialId}</p>
                    <a 
                      href={selectedCertificate.credentialURL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-portfolio-blue hover:underline"
                    >
                      Verify Certificate
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Certificates;
