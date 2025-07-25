import { Card, CardContent } from "../components/ui/card";
import { Server, Building2 } from "lucide-react";

export default function FLvsDFLDiagram() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-16">
        Federated Learning vs Decentralized Approach
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Centralized FL */}
        <Card className="medical-shadow">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Traditional Federated Learning
            </h3>
            <div className="flex flex-col items-center space-y-6">
              {/* Central server */}
              <div className="w-16 h-16 bg-[hsl(var(--medical-blue))] rounded-full flex items-center justify-center network-animation">
                <Server className="w-8 h-8 text-white" />
              </div>

              {/* Connections */}
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    <Building2 className="w-6 h-6 text-gray-600" />
                  </div>
                ))}
              </div>

              <div className="text-center text-gray-600">
                <p className="font-medium mb-2">Centralized Coordination</p>
                <p className="text-sm">All clients communicate through central server</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decentralized FL */}
        <Card className="medical-shadow">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Decentralized Federated Learning
            </h3>
            <div className="flex flex-col items-center space-y-6">
              {/* Mesh network */}
              <div className="relative w-32 h-24">
                <div className="absolute top-0 left-8 w-12 h-12 bg-[hsl(var(--success-green))] rounded-full flex items-center justify-center network-animation">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div
                  className="absolute bottom-0 left-0 w-12 h-12 bg-[hsl(var(--success-green))] rounded-full flex items-center justify-center network-animation"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div
                  className="absolute bottom-0 right-0 w-12 h-12 bg-[hsl(var(--success-green))] rounded-full flex items-center justify-center network-animation"
                  style={{ animationDelay: "1s" }}
                >
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 96">
                  <line
                    x1="56"
                    y1="24"
                    x2="24"
                    y2="72"
                    stroke="hsl(var(--success-green))"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <line
                    x1="56"
                    y1="24"
                    x2="104"
                    y2="72"
                    stroke="hsl(var(--success-green))"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <line
                    x1="24"
                    y1="72"
                    x2="104"
                    y2="72"
                    stroke="hsl(var(--success-green))"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                </svg>
              </div>

              <div className="text-center text-gray-600 mt-8">
                <p className="font-medium mb-2">Peer-to-Peer Network</p>
                <p className="text-sm">Direct communication between clients</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
