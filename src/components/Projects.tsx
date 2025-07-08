import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "DCGAN-Pokemon",
      description: "Developed a DCGAN model for generating somewhat terrifying Pokemon(ish) images.",
      technologies: ["Python", "PyTorch", "GANs", "Generative AI"],
      link: "https://github.com/jsdandurand/DCGAN-Pokemon",
      image: "/photos/fixed_noise_progress2.gif"
    },
    {
      title: "ClipTracker",
      description: "Open vocabulary object detection and tracking using CLIP, YOLO and SORT",
      technologies: ["Python",  "Object Detection"],
      link: "https://github.com/jsdandurand/ClipTracker",
      image: "/photos/horse_track.gif"
    }
    // {
    //   title: "Self-Regressive Runge-Kutta Physics-Informed Neural Networks for Partial Differential Equations",
    //   description: "Developed a self-regressive Runge-Kutta physics-informed neural network for solving partial differential equations.",
    //   technologies: ["Python", "PyTorch", "Physics-Informed Neural Networks", "Runge-Kutta Methods"],
    //   link: "https://github.com/jsdandurand/PINN",
    //   image: "/photos/concentration.gif"
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
              {project.image && (
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                    loop
                  />
                </div>
              )}
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
