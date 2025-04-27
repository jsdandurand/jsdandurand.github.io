
import { Card } from "@/components/ui/card";
import { School } from "lucide-react";

const Education = () => {
  const educationItems = [
    {
      degree: "MS in Machine Learning",
      institution: "Carnegie Mellon University",
      period: "2023 - 2025 (Expected)",
      description: "Focusing on advanced machine learning techniques, deep learning architectures, and their applications to real-world problems.",
      courses: ["Deep Learning", "Machine Learning", "Computer Vision", "Natural Language Processing"]
    },
    {
      degree: "Bachelor of Science",
      institution: "Previous University", // Replace with actual university
      period: "2019 - 2023",
      description: "Studied Computer Science with a focus on artificial intelligence and machine learning fundamentals.",
      courses: ["Data Structures & Algorithms", "Linear Algebra", "Probability & Statistics", "Introduction to Machine Learning"]
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
