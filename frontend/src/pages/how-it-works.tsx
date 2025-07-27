import { Card, CardContent } from "../components/ui/card";
import ProcessFlow from "../components/process-flow";
import { CheckCircle, Shield } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="pt-16 min-h-screen py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-medical-primary to-medical-accent rounded-full mb-6 medical-shadow-lg">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-medical-primary to-medical-accent bg-clip-text mb-4">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Understanding Privacy-Preserving AI: A comprehensive guide to Federated and Decentralized Learning approaches
          </p>
        </div>

        {/* Process Flow */}
        <ProcessFlow />

        {/* FL vs DFL Detailed Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Centralized FL */}
          <Card className="medical-card-hover animate-fade-in-delay-1 overflow-hidden group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Centralized FL</h3>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
              <p className="text-blue-100">Traditional centralized coordination approach</p>
            </div>
            <CardContent className="p-8">
              {/* Visual diagram using SVG instead of external image */}
              <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <svg className="w-full h-40" viewBox="0 0 300 160">
                  {/* Central server */}
                  <rect x="130" y="20" width="40" height="30" rx="4" fill="#3B82F6" className="animate-pulse" />
                  <text x="150" y="40" textAnchor="middle" className="text-xs fill-white font-medium">Server</text>
                  
                  {/* Client nodes */}
                  {[0, 1, 2, 3].map((i) => (
                    <g key={i}>
                      <circle cx={50 + i * 50} cy={120} r="15" fill="#60A5FA" className="animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                      <text x={50 + i * 50} y={125} textAnchor="middle" className="text-xs fill-white font-medium">C{i + 1}</text>
                      
                      {/* Connection lines */}
                      <path d={`M ${50 + i * 50} 105 Q 150 80 150 50`} stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="4,4" className="animate-pulse" />
                    </g>
                  ))}
                </svg>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Model Distribution",
                    description:
                      "Central server distributes global model to all participating clients",
                  },
                  {
                    title: "Local Training",
                    description:
                      "Each client trains model on local data without sharing raw data",
                  },
                  {
                    title: "Aggregation",
                    description: "Server aggregates model updates using federated averaging",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-[hsl(var(--medical-blue))] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-[hsl(var(--medical-blue))] mb-2">
                  Advantages:
                </h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-[hsl(var(--medical-blue))]" />
                    Centralized coordination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-[hsl(var(--medical-blue))]" />
                    Proven convergence properties
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-[hsl(var(--medical-blue))]" />
                    Simple client implementation
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Decentralized FL */}
          <Card className="medical-card-hover animate-fade-in-delay-2 overflow-hidden group">
            <div className="bg-gradient-to-br from-medical-primary bg-blue-600  to-medical-accent p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Decentralized FL</h3>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>
              <p className="text-medical-bg/90">Advanced peer-to-peer collaboration</p>
            </div>
            <CardContent className="p-8">
              {/* Visual mesh network diagram */}
              <div className="mb-8 bg-gradient-to-br from-medical-primary/5 to-medical-accent/5 rounded-xl p-6 border border-medical-primary/20">
                <svg className="w-full h-40" viewBox="0 0 300 160">
                  {/* Mesh network nodes */}
                  {[
                    { x: 60, y: 60, id: 'A' },
                    { x: 240, y: 60, id: 'B' },
                    { x: 60, y: 120, id: 'C' },
                    { x: 240, y: 120, id: 'D' },
                    { x: 150, y: 90, id: 'E' }
                  ].map((node, i) => (
                    <g key={node.id}>
                      <circle cx={node.x} cy={node.y} r="18" fill="var(--medical-primary)" className="animate-pulse" style={{animationDelay: `${i * 0.3}s`}} />
                      <text x={node.x} y={node.y + 4} textAnchor="middle" className="text-xs fill-white font-bold">{node.id}</text>
                    </g>
                  ))}
                  
                  {/* Mesh connections */}
                  <path d="M 60 60 L 240 60" stroke="var(--medical-accent)" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse" />
                  <path d="M 60 60 L 150 90" stroke="var(--medical-accent)" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse" />
                  <path d="M 240 60 L 150 90" stroke="var(--medical-accent)" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse" />
                  <path d="M 60 120 L 150 90" stroke="var(--medical-accent)" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse" />
                  <path d="M 240 120 L 150 90" stroke="var(--medical-accent)" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse" />
                  <path d="M 60 120 L 240 120" stroke="var(--medical-accent)" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse" />
                </svg>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Peer Discovery",
                    description: "Clients discover and connect to neighboring peers in network",
                  },
                  {
                    title: "Distributed Training",
                    description: "Each node trains and shares updates with connected peers",
                  },
                  {
                    title: "Consensus",
                    description: "Distributed consensus algorithms ensure model convergence",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-[hsl(var(--success-green))] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-[hsl(var(--success-green))] mb-2">
                  Advantages:
                </h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-[hsl(var(--success-green))]" />
                    No single point of failure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-[hsl(var(--success-green))]" />
                    Reduced communication costs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-[hsl(var(--success-green))]" />
                    Better scalability
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Implementation */}
        <div className="mt-16 bg-[hsl(var(--clinical-white))] p-8 rounded-xl medical-shadow">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical Implementation</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Model Architecture</h4>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Swin Transformer backbone",
                  "ODIR-5K dataset training",
                  "Multi-class classification",
                  "Grad-CAM visualization",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--success-green))] mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Privacy Features</h4>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Client-side inference only",
                  "No data transmission", 
                  "Differential privacy",
                  "Secure aggregation",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Shield className="w-5 h-5 text-[hsl(var(--success-green))] mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
