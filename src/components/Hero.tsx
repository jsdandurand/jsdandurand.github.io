
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-gray-900">
            JS Dandurand
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-blue-700 mb-6">
            MSML Student at Carnegie Mellon University
          </h2>
          <p className="max-w-2xl text-lg text-gray-600 mb-10">
            I'm focused on machine learning research and applications, 
            with particular interests in computer vision and natural language processing.
          </p>
          <Button 
            onClick={scrollToAbout} 
            variant="outline" 
            size="lg" 
            className="rounded-full border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
          >
            Learn more
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
