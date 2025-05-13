import { Card } from "@/components/ui/card";
import profilePhoto from "../photos/profilephoto.jpg"; // Import the photo

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-2/5">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 mb-4">
              {/* Replace with your profile image when available */}
              {/* <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500">
                Profile Photo
              </div> */}
              <img 
                src={profilePhoto} 
                alt="JS Dandurand Profile Photo" 
                className="w-full h-full object-cover" // Ensure image covers the area
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <Card className="p-6 shadow-sm border-blue-100">
              <p className="text-lg text-gray-700 mb-4">
                I'm Jean-Sébastien (JS) Dandurand, an incoming student in the MS Machine Learning program at Carnegie Mellon University. Based in Calgary, Alberta, I'm passionate about advancing the field of machine learning through innovative research and practical applications.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                My research spans across computer vision, 3D graphics, NLP and physics-informed neural networks. I've contributed to cutting-edge research in neural radiance fields and emission transportation modeling.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With a strong foundation in mathematics and computer science from the University of Toronto, where I graduated with a 4.0 GPA, I aim to bridge theoretical research with practical, impactful applications in machine learning and computer vision.
              </p>
              <p className="text-lg text-gray-700">
                I also enjoy fitness.
              </p>
            </Card>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="font-medium text-gray-900">Machine Learning</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="font-medium text-gray-900">Deep Learning</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="font-medium text-gray-900">Computer Vision</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="font-medium text-gray-900">NLP</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="font-medium text-gray-900">PyTorch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
