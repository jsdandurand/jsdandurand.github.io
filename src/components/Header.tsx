
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection("hero")} 
          className="text-lg font-semibold text-gray-900 hover:text-blue-700 transition-colors"
        >
          JS Dandurand
        </button>
        
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("education")} 
            className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection("experience")} 
            className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection("projects")} 
            className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("publications")} 
            className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
          >
            Publications
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
          >
            Contact
          </button>
        </nav>
        
        <button className="md:hidden text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
