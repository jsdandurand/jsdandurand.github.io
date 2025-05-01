
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Machine Learning Engineering Intern",
      company: "EmMea Inc.",
      location: "Calgary, AB",
      period: "May 2024 - January 2025",
      description: "Developed physics-informed neural networks for emission transportation modeling.",
      achievements: [
        "Developed state-of-the-art physics-informed neural networks for solving partial difference equations in emission transportation",
        "Integrated implicit Runge-Kutta methods, reducing training data needs by 80% while improving stability",
        "Applied transfer learning techniques to reduce model training time by 70%"
      ]
    },
    {
      position: "Undergraduate Research Intern",
      company: "University of Toronto (embARC Research Group)",
      location: "Toronto, ON",
      period: "September 2023 - June 2025",
      description: "Conducted research in deep learning, computer vision, 3D graphics and NLP. Supervised by Dr. Nandita Vijaykumar.",
      achievements: [
        "Developed retrieval framework for neural radiance field using vision-language models",
        "Improved retrieval accuracy by 40% through efficient camera angle selection",
        "Achieved 6x speedup in dynamic 3D Gaussian Splatting scenes using optical flow models",
        "Reduced data preprocessing time by 75% using COLMAP and Nerfstudio"
      ]
    },
    {
      position: "Teaching Assistant",
      company: "University of Toronto",
      location: "Toronto, ON",
      period: "September 2023 - May 2025",
      description: "Teaching Assistant for Machine Learning, Computer Architecture, and Differential Equations courses.",
      achievements: [
        "Conducted weekly tutorials on machine learning, differential equations, and Assembly programming",
        "Mentored 20+ students through office hours and review seminars",
        "Provided comprehensive support for complex technical concepts"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center mb-12 gap-3">
          <Briefcase className="h-8 w-8 text-blue-700" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                    <h4 className="text-lg font-medium text-blue-700">{exp.company}</h4>
                    <span className="hidden md:block text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{exp.location}</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <div>
                <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
