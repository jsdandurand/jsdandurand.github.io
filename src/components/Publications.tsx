
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "TOGS: Triangulated Optical Flow for 3D Gaussian Splatting Streaming",
      authors: "",
      conference: "ICCV 2025",
      year: "2025",
      abstract: "Pending review at ICCV 2025",
      link: "#",
      pdf: "#"
    },
    {
      title: "Retri3D: 3D Neural Graphics Representation Retrieval",
      authors: "Yushi Guan, Daniel Kwan, Jean Sebastien Dandurand, Xi Yan, Ruofan Liang, Yuxuan Zhang, Nilesh Jain, Nilesh Ahuja, Selvakumar Panneer, Nandita Vijaykumar",
      conference: "ICLR",
      year: "2025",
      abstract: "Accepted at ICLR 2025",
      link: "https://gavinguan95.github.io/Retri3D/",
      pdf: "https://openreview.net/pdf?id=q3EbOXb4y1"
    },
    {
      title: "Physics Informed Machine Learning for Emission Measurement",
      authors: "Henry Jin, Jean Sebastien Dandurand",
      conference: "ASME DTOG2024",
      year: "2024",
      abstract: "Accepted at Digital Horizons: Energizing Transformation in Oil, Gas and Beyond (ASME DTOG2024): Digital Solutions for Gas Emissions",
      link: "#"
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
