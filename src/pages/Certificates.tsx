
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const certificates = [
  {
    id: 1,
    title: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    date: "June 2023",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=350&fit=crop",
    description: "Advanced MongoDB database design, optimization, and management skills certification.",
    skills: ["MongoDB", "Database Design", "Aggregation", "Performance Optimization"],
    credentialId: "MDBDEV-12345",
    credentialURL: "#"
  },
  {
    id: 2,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "March 2023",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=350&fit=crop",
    description: "Comprehensive certification covering React fundamentals, hooks, state management, and performance optimization.",
    skills: ["React", "Redux", "React Hooks", "Component Design"],
    credentialId: "FB-REACT-6789",
    credentialURL: "#"
  },
  {
    id: 3,
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "November 2022",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=350&fit=crop",
    description: "Certification demonstrating proficiency in developing, deploying, and debugging cloud-based applications using AWS.",
    skills: ["AWS Lambda", "DynamoDB", "S3", "CloudFormation", "API Gateway"],
    credentialId: "AWS-DEV-9012",
    credentialURL: "#"
  },
  {
    id: 4,
    title: "Node.js Application Developer",
    issuer: "OpenJS Foundation",
    date: "August 2022",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=350&fit=crop",
    description: "Certification validating expertise in building server-side applications with Node.js.",
    skills: ["Node.js", "Express", "API Design", "Authentication", "Testing"],
    credentialId: "JSNAD-3456",
    credentialURL: "#"
  },
  {
    id: 5,
    title: "Full-Stack Web Development",
    issuer: "Udacity",
    date: "May 2022",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=350&fit=crop",
    description: "Nanodegree program covering full-stack development with JavaScript, Node.js, and React.",
    skills: ["JavaScript", "React", "Node.js", "PostgreSQL", "Authentication"],
    credentialId: "ND0044",
    credentialURL: "#"
  },
  {
    id: 6,
    title: "TypeScript Programming",
    issuer: "Microsoft",
    date: "February 2022",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=350&fit=crop",
    description: "Certification in TypeScript fundamentals, advanced types, and integration with JavaScript frameworks.",
    skills: ["TypeScript", "JavaScript", "OOP", "Type Systems"],
    credentialId: "MS-TS-7890",
    credentialURL: "#"
  }
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCertificates = certificates.filter(cert => 
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-portfolio-lightBlue/30 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Certificates</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional certifications that demonstrate my expertise and commitment to continuous learning.
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
          {filteredCertificates.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-600">No certificates found matching your search.</h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCertificates.map((certificate) => (
                <div 
                  key={certificate.id} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedCertificate(certificate)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={certificate.image} 
                      alt={certificate.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
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
