
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    // {
    //   title: "Deep Learning for Medical Image Analysis",
    //   description: "Developed a convolutional neural network for automated detection of abnormalities in medical images, achieving 92% accuracy on the test dataset.",
    //   technologies: ["Python", "PyTorch", "OpenCV", "TensorBoard"],
    //   link: "#"
    // },
    // {
    //   title: "Natural Language Processing for Scientific Papers",
    //   description: "Created a system to automatically categorize and summarize scientific papers based on their content using BERT-based models and transformers.",
    //   technologies: ["Python", "HuggingFace", "BERT", "Scikit-learn"],
    //   link: "#"
    // },
    // {
    //   title: "Reinforcement Learning for Game AI",
    //   description: "Implemented a reinforcement learning agent capable of learning and mastering complex games through self-play and optimization techniques.",
    //   technologies: ["Python", "TensorFlow", "OpenAI Gym", "NumPy"],
    //   link: "#"
    // },
    // {
    //   title: "Data Visualization Dashboard",
    //   description: "Built an interactive web application for visualizing complex datasets with customizable charts and filtering capabilities.",
    //   technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    //   link: "#"
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center mb-12 gap-3">
          <Code className="h-8 w-8 text-blue-700" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="h-full overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                <CardDescription className="text-gray-700">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-blue-700 font-medium hover:underline inline-flex items-center"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg 
                    className="ml-1 h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
