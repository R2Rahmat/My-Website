import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  projectType: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const projectTypes = [
  "Website Development",
  "Web Application",
  "E-commerce",
  "Portfolio",
  "Blog/CMS",
  "Mobile App",
  "Other"
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      toast({
        title: "Message sent!",
        description: "Thank you for your inquiry. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
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

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-portfolio-darkBlue">Get in Touch</h2>
              <p className="text-portfolio-dark mb-8">
                Feel free to reach out if you have any questions or would like to work together. I'm currently available for freelance work.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="text-portfolio-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-portfolio-darkBlue">Email</h3>
                    <p className="text-portfolio-dark">rahmatraj7786@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="text-portfolio-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-portfolio-darkBlue">Phone</h3>
                    <p className="text-portfolio-dark">+91 7070715733</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="text-portfolio-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-portfolio-darkBlue">Location</h3>
                    <p className="text-portfolio-dark">Greater Noida, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4 text-portfolio-darkBlue">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/R2Rahmat" target="_blank" rel="noopener noreferrer" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/md_rahmat_dev/" target="_blank" rel="noopener noreferrer" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/md-rahmt-devloper0012" target="_blank" rel="noopener noreferrer" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-portfolio-darkBlue">Send Me a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-portfolio-dark">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} className="bg-white border-gray-200 text-portfolio-dark" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-portfolio-dark">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} className="bg-white border-gray-200 text-portfolio-dark" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-portfolio-dark">Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} className="bg-white border-gray-200 text-portfolio-dark" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-portfolio-dark">Project Type (Optional)</FormLabel>
                          <FormControl>
                            <select 
                              className="w-full h-10 px-3 py-2 bg-white border border-gray-200 rounded-md text-portfolio-dark focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
                              {...field}
                            >
                              <option value="">Select a project type</option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-portfolio-dark">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              className="min-h-[150px] bg-white border-gray-200 text-portfolio-dark" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-portfolio-blue hover:bg-portfolio-blue/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send size={16} className="mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  
  );
};

export default Contact;
