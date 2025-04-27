
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Novel Approach to Efficient Deep Learning for Computer Vision Tasks",
      authors: "Dandurand, J.S., Smith, J., Johnson, A.",
      conference: "International Conference on Machine Learning (ICML)",
      year: "2023",
      abstract: "In this paper, we introduce a novel architecture for efficient deep learning in computer vision tasks, reducing computational requirements while maintaining or improving accuracy.",
      link: "#",
      pdf: "#"
    },
    {
      title: "Optimizing Transformer Models for Scientific Document Classification",
      authors: "Garcia, R., Dandurand, J.S., Lee, M.",
      conference: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: "2022",
      abstract: "We present a method for optimizing transformer-based models to effectively classify scientific documents across multiple domains with improved accuracy and reduced training time.",
      link: "#",
      pdf: "#"
    },
    {
      title: "Comparative Analysis of Reinforcement Learning Algorithms for Control Tasks",
      authors: "Dandurand, J.S., Wang, L.",
      conference: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
      year: "2022",
      abstract: "This paper provides a comprehensive comparison of state-of-the-art reinforcement learning algorithms on a variety of control tasks, highlighting their strengths and limitations.",
      link: "#",
      pdf: "#"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center mb-12 gap-3">
          <FileText className="h-8 w-8 text-blue-700" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Publications</h2>
        </div>
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{pub.title}</CardTitle>
                <CardDescription className="text-blue-700 font-medium">
                  {pub.authors}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-sm text-gray-500 mb-4">
                  <span>{pub.conference}</span>
                  <span className="hidden md:block">•</span>
                  <span>{pub.year}</span>
                </div>
                <p className="text-gray-700 mb-4">{pub.abstract}</p>
                <div className="flex gap-4">
                  <a 
                    href={pub.link} 
                    className="text-blue-700 font-medium hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Publication
                  </a>
                  <a 
                    href={pub.pdf} 
                    className="text-blue-700 font-medium hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
