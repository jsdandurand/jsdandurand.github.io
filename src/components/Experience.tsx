
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Research Assistant",
      company: "Machine Learning Lab",
      location: "University Name",
      period: "May 2022 - August 2022",
      description: "Conducted research on optimizing deep learning models for computer vision tasks. Implemented and evaluated several state-of-the-art architectures using PyTorch.",
      achievements: [
        "Improved model accuracy by 15% through advanced optimization techniques",
        "Co-authored a paper accepted at a major conference",
        "Developed an efficient data preprocessing pipeline that reduced training time by 30%"
      ]
    },
    {
      position: "Machine Learning Intern",
      company: "Tech Company",
      location: "City, State",
      period: "May 2021 - August 2021",
      description: "Worked on developing and improving machine learning models for natural language processing tasks.",
      achievements: [
        "Built a sentiment analysis model achieving 89% accuracy on customer reviews",
        "Collaborated with the product team to integrate ML models into the company's platform",
        "Created visualization dashboards to monitor model performance"
      ]
    },
    {
      position: "Teaching Assistant",
      company: "Department of Computer Science",
      location: "University Name",
      period: "January 2021 - May 2021",
      description: "Served as a teaching assistant for the Introduction to Machine Learning course.",
      achievements: [
        "Conducted weekly recitation sessions for 30+ students",
        "Graded assignments and provided detailed feedback",
        "Created supplementary materials to help students understand complex topics"
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
