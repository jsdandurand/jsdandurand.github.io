
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Graduate Research Assistant",
      company: "Carnegie Mellon University (CUBE Lab)",
      location: "Pittsburgh, PA",
      period: "May 2025 - Present",
      description: "Supervised by Dr. Laszlo Jeni.",
      achievements: [
      ]
    },
    {
      position: "Undergraduate Research Intern",
      company: "University of Toronto (embARC Research Group)",
      location: "Toronto, ON",
      period: "September 2023 - May 2025",
      description: "Conducted research in deep learning, computer vision, 3D graphics and NLP. Supervised by Dr. Nandita Vijaykumar.",
      achievements: [
        "Co-authored Retri3D (ICLR 2025 Spotlight), pioneering a framework for text-based retrieval of 3D neural scenes (Neural Radiance Fields, 3D Gaussian Splatting). Achieved 84.95% retrieval accuracy (P@1) on the LERF dataset, outperforming baselines by up to 58.6%, while reducing storage overhead by 10,000× and enabling millisecond-scale queries",
        "Co-authored TuneShift-KD, achieving up to 13.5% improved accuracy on specialized tasks (e.g. Python code generation) by automating knowledge transfer between LLMs using perplexity-based synthetic data, without access to original training datasets",
        "Researched dynamic 3D Gaussian Splatting by leveraging optical flow models, achieving a 6x speedup in training time compared to state-of-the-art iterative methods (manuscript in preparation for ICLR 2026)",
      ]
    },
    {
      position: "Machine Learning Engineer Intern",
      company: "EmMea Inc.",
      location: "Calgary, AB",
      period: "May 2024 - January 2025",
      description: "Developed physics-informed neural networks for emission transportation modeling.",
      achievements: [
        "Developed a physics-informed neural network (PINN) framework for multiphase emission flow modeling, achieving 4.15–14.3% phase fraction error (vs. 7.18–33.51% in CFD) while reducing simulation runtime by 90% (3 hrs vs. 24–38 hrs) through embedded Navier-Stokes equations and adaptive loss balancing.",
        "Pioneered hybrid Self-Regressive Runge-Kutta (SR-RK) PINN architecture, integrating implicit Runge-Kutta time-stepping and self-regressive training, enabling stable 3D advection-diffusion modeling with 80% less training data and 10× faster convergence than traditional CFD solvers.",
        "Optimized training workflows via Adam-LBFGS hybrid optimization and GPU parallelization, slashing per-simulation compute costs by 50% while maintaining >95% accuracy across stratified/dispersed flow regimes.",
        "Validated framework against experimental data and ANSYS Fluent benchmarks, demonstrating PINN superiority in real-time emission monitoring applications with 22% higher accuracy in transitional flow pattern prediction."
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
