import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  University,
  FileText,
  Presentation,
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Abdul Sami",
      role: "Lead Researcher",
      specialty: "AI | Machine Learning | Federated Learning Specialist",
      image:
        "https://res.cloudinary.com/dtf5nwiic/image/upload/v1752760967/sami_axhpjt.jpg",
      alt: "Abdul Sami - AI Research Student",
      github: "https://github.com/AbdulSamiWorks",
      linkedin: "https://www.linkedin.com/in/abdul-sami-42904125a",
    },
    {
      name: "Mushaf",
      role: "Co-Researcher",
      specialty: "AI | Machine Learning | Documentation",
      image:
        "https://res.cloudinary.com/dtf5nwiic/image/upload/v1753611312/mushaf_nmpaoh.jpg",
      alt: "Mushaf - AI Research Student",
      github: "https://github.com/MushafUsername", // 🔁 Replace with actual GitHub
      linkedin: "https://www.linkedin.com/in/mushaf-profile", // 🔁 Replace with actual LinkedIn
    },
  ];

  const impactMetrics = [
    { value: "99.1%", label: "DFL Accuracy" },
    { value: "35%", label: "Reduced Communication" },
    { value: "8", label: "Disease Classes" },
    { value: "100%", label: "Data Privacy" },
  ];

  return (
    <div className="pt-16 min-h-screen py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-medical-primary to-medical-accent rounded-full mb-6 medical-shadow-lg">
            <University className="w-8 h-8" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-medical-primary to-medical-accent bg-clip-text mb-4">
            About the Project
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Final Year AI Research Project: Pioneering Healthcare Technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Info */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="medical-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Project Overview
                </h3>
                <div className="prose max-w-none text-gray-600 space-y-4">
                  <p>
                    This research project represents a comprehensive comparative
                    study between traditional Federated Learning (FL) and
                    innovative Decentralized Federated Learning (DFL) approaches
                    for medical image analysis, specifically focusing on ocular
                    disease diagnosis.
                  </p>
                  <p>
                    Our implementation utilizes state-of-the-art Swin
                    Transformer architecture trained on the ODIR-5K dataset,
                    achieving remarkable accuracy while maintaining complete
                    patient privacy through client-side inference.
                  </p>
                  <p>
                    The system demonstrates how decentralized approaches can
                    outperform centralized federated learning in terms of
                    accuracy, communication efficiency, and fault tolerance,
                    paving the way for more robust healthcare AI systems.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Research Impact */}
            <Card className="medical-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Research Impact</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {impactMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-[hsl(var(--medical-blue))] mb-2">
                        {metric.value}
                      </div>
                      <div className="text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            <Card className="medical-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Project Resources
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/AbdulSamiWorks/FYP-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gray-700 hover:bg-gray-900 text-white">
                      <Github className="mr-2 h-4 w-4 text-white" />
                      GitHub Repository
                    </Button>
                  </a>

                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <FileText className="mr-2 h-4 w-4 text-white" />
                    Research Paper
                  </Button>
                  <Button className="bg-gray-700 hover:bg-gray-900 text-white">
                    <Presentation className="mr-2 h-4 w-4" />
                    Project Abstract
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Info */}
          <div className="space-y-8">
            <Card className="medical-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Research Team</h3>
                <div className="space-y-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={member.image}
                        alt={member.alt}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h4 className="text-lg font-semibold">{member.name}</h4>
                      <p className="text-gray-600">{member.role}</p>
                      <p className="text-sm text-gray-500">
                        {member.specialty}
                      </p>
                      <div className="flex justify-center space-x-3 mt-3">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="ghost" size="sm">
                            <Linkedin className="h-4 w-4 text-blue-600" />
                          </Button>
                        </a>

                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="ghost" size="sm">
                            <Github className="h-4 w-4 text-gray-800" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* University Info */}
            <Card className="medical-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Academic Institution
                </h3>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[hsl(var(--medical-blue))] rounded-full flex items-center justify-center mx-auto mb-4">
                    <University className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="font-semibold">Final Year Project</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Department of Computer Science
                  </p>
                  <p className="text-gray-500 text-sm">Project Title:</p>
                  <p className="font-medium text-sm mb-2">
                    Decentralized Federated Learning for Ocular Eye Disease
                    Diagnosis
                  </p>
                  <p className="text-gray-500 text-sm">
                    Under the supervision of:
                  </p>
                  <p className="font-medium">
                    Dr. Usman Khan and Ms. Fazila Malik
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-green-50 border-green-200 medical-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[hsl(var(--success-green))] mb-4">
                  Get In Touch
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Have questions about Federated or Decentralized Learning? I'm
                  happy to connect!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-[hsl(var(--success-green))] mr-2" />
                    <span>abdulsami34421@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-[hsl(var(--success-green))] mr-2" />
                    <span>+92 300 1234567</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
