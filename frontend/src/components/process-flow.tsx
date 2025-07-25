import { Card, CardContent } from "../components/ui/card";
import { Upload, Brain, BarChart3 } from "lucide-react";

export default function ProcessFlow() {
  const steps = [
    {
      icon: Upload,
      title: "1. Local Upload",
      description: "Patient uploads retinal image directly to local device",
      color: "bg-[hsl(var(--medical-blue))]",
    },
    {
      icon: Brain,
      title: "2. Local Processing",
      description: "AI model runs entirely on client device for privacy",
      color: "bg-[hsl(var(--success-green))]",
    },
    {
      icon: BarChart3,
      title: "3. Instant Results",
      description: "Diagnosis results displayed immediately with confidence scores",
      color: "bg-[hsl(var(--deep-blue))]",
    },
  ];

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-semibold text-center mb-12">Data Processing Flow</h3>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="text-center">
              <div
                className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 network-animation`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
