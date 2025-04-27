
import { Card } from "@/components/ui/card";
import { School } from "lucide-react";

const Education = () => {
  const educationItems = [
    {
      degree: "MS in Machine Learning",
      institution: "Carnegie Mellon University",
      period: "2025 - 2027",
      description: "Master of Science in Machine Learning program.",
      courses: ["Deep Learning", "Machine Learning", "Computer Vision", "Natural Language Processing"]
    },
    {
      degree: "Honours Bachelor of Science",
      institution: "University of Toronto",
      period: "2021 - 2025",
      description: "Double major in Computer Science and Mathematics, graduating with a 4.0 cGPA. Received multiple scholarships including University of Toronto Scholar ($16,500) and consistently made the Dean's List.",
      courses: ["Machine Learning", "Computer Architecture", "Differential Equations", "Data Structures & Algorithms"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center mb-12 gap-3">
          <School className="h-8 w-8 text-blue-700" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Education</h2>
        </div>
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-blue-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
                  <h4 className="text-lg font-medium text-blue-700">{item.institution}</h4>
                </div>
                <span className="text-sm font-medium text-gray-500 mt-2 md:mt-0">{item.period}</span>
              </div>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div>
                <h5 className="text-sm font-semibold text-gray-900 mb-2">Relevant Coursework:</h5>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
