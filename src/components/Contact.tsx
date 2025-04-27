
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Get In Touch
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 shadow-md">
            <p className="text-center text-gray-700 mb-8">
              I'm currently open to research collaborations, academic opportunities, and discussions about machine learning. 
              Feel free to reach out through any of the channels below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a 
                href="mailto:jsdandurand@gmail.com" 
                className="flex flex-col items-center p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <Mail className="h-10 w-10 text-blue-700 mb-3" />
                <span className="text-gray-900 font-medium">Email</span>
                <span className="text-sm text-gray-500 text-center mt-1">jsdandurand@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/jean-sebastien-dandurand-6b822913b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <Linkedin className="h-10 w-10 text-blue-700 mb-3" />
                <span className="text-gray-900 font-medium">LinkedIn</span>
                <span className="text-sm text-gray-500 text-center mt-1">linkedin.com/in/jean-sebastien-dandurand-6b822913b/</span>
              </a>
              
              <a 
                href="https://github.com/jsdandurand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <Github className="h-10 w-10 text-blue-700 mb-3" />
                <span className="text-gray-900 font-medium">GitHub</span>
                <span className="text-sm text-gray-500 text-center mt-1">github.com/jsdandurand</span>
              </a>
            </div>
            
            <div className="text-center">
              <Button 
                variant="outline" 
                className="rounded-full border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
              >
                Download Resume
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
