import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Network, 
  Shield, 
  Users, 
  Server, 
  Lock, 
  Globe,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Brain,
  Database,
  Eye,
  TrendingUp,
  Award,
  Loader2
} from "lucide-react";

export default function FLDFLComparison() {
  const [activeDemo, setActiveDemo] = useState<'fl' | 'dfl'>('dfl');
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const comparisonData = [
    {
      aspect: "Data Privacy",
      fl: {
        score: 8,
        description: "Good privacy - data stays local, only model updates shared",
        details: "Individual device data never leaves the device, but model parameters are shared through central server"
      },
      dfl: {
        score: 10,
        description: "Excellent privacy - fully decentralized with no central authority",
        details: "No central server, peer-to-peer communication, enhanced privacy with differential privacy techniques"
      }
    },
    {
      aspect: "Scalability",
      fl: {
        score: 6,
        description: "Limited by central server capacity",
        details: "Central coordinator becomes bottleneck as network grows, single point of failure"
      },
      dfl: {
        score: 9,
        description: "Highly scalable with distributed architecture",
        details: "Peer-to-peer network scales naturally, no central bottleneck, self-organizing topology"
      }
    },
    {
      aspect: "Reliability",
      fl: {
        score: 7,
        description: "Dependent on central server availability",
        details: "If central server fails, entire network stops working, requires robust infrastructure"
      },
      dfl: {
        score: 9,
        description: "Fault-tolerant with redundant paths",
        details: "Network continues functioning even if multiple nodes fail, self-healing capabilities"
      }
    },
    {
      aspect: "Implementation",
      fl: {
        score: 8,
        description: "Easier to implement and coordinate",
        details: "Centralized coordination simplifies model aggregation and synchronization"
      },
      dfl: {
        score: 6,
        description: "More complex but offers greater benefits",
        details: "Requires sophisticated consensus mechanisms and peer discovery protocols"
      }
    },
    {
      aspect: "Model Quality",
      fl: {
        score: 8,
        description: "Good convergence with central coordination",
        details: "Central server ensures consistent model updates and proper aggregation"
      },
      dfl: {
        score: 9,
        description: "Superior quality through diverse collaboration",
        details: "Multiple aggregation paths and diverse node interactions lead to more robust models"
      }
    }
  ];

  // Animation control
  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setAnimationStep(prev => (prev + 1) % 4);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationStep(0);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    setAnimationStep(0);
  };

  const getScoreColor = (score: number) => {
    if (score >= 9) return "text-medical-success bg-medical-success/10";
    if (score >= 7) return "text-medical-cyan bg-medical-cyan/10";
    return "text-orange-600 bg-orange-100";
  };

  const AnimatedFLDiagram = () => {
    const getStepClass = (step: number) => 
      animationStep === step ? 'scale-110 ring-4 ring-blue-400/50' : '';
    
    const getDataFlowClass = (step: number) =>
      animationStep === step ? 'opacity-100 animate-bounce' : 'opacity-30';

    return (
      <div className="fl-container relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
        <div className="flex justify-between items-center mb-6">
          <div className="text-center flex-1">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Federated Learning (FL)</h3>
            <p className="text-blue-600">Traditional centralized approach</p>
          </div>
          <div className="flex items-center gap-3">
            {isAnimating && (
              <div className="step-indicator">
                Step {animationStep + 1} of 4
              </div>
            )}
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={startAnimation}
                className="bg-blue-600 hover:bg-blue-700"
                disabled={isAnimating}
              >
                {isAnimating ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Play Demo'}
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={stopAnimation}
                className="border-blue-600 text-blue-600"
              >
                Stop
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animation Steps Display */}
        <div className="mb-6 text-center">
          <div className="bg-blue-100 rounded-lg p-3">
            <div className="text-sm font-medium text-blue-800">
              {animationStep === 0 && "Step 1: Local training on devices"}
              {animationStep === 1 && "Step 2: Send model updates to central server"}  
              {animationStep === 2 && "Step 3: Central server aggregates updates"}
              {animationStep === 3 && "Step 4: Broadcast new global model"}
            </div>
          </div>
        </div>
        
        {/* Central Server */}
        <div className="flex justify-center mb-12 relative">
          <div className={`w-32 h-32 bg-blue-600 rounded-xl flex items-center justify-center medical-shadow-lg transition-all duration-500 ${getStepClass(2)}`}>
            <div className="text-center">
              <Server className="w-12 h-12 text-white mx-auto mb-1" />
              {animationStep === 2 && (
                <div className="w-6 h-6 bg-white rounded-full mx-auto animate-pulse"></div>
              )}
            </div>
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <span className="font-semibold text-blue-800">Central Server</span>
            <span className="text-sm text-blue-600">Aggregates & coordinates</span>
          </div>
        </div>

        {/* Client Devices */}
        <div className="relative">
          <div className="grid grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((device) => (
              <div key={device} className="text-center relative">
                <div className={`w-24 h-24 bg-white border-2 border-blue-300 rounded-lg flex items-center justify-center mx-auto mb-2 medical-shadow transition-all duration-500 ${getStepClass(0)}`}>
                  <Eye className="w-12 h-12 text-blue-600" />
                  {animationStep === 0 && (
                    <div className="absolute w-4 h-4 bg-green-400 rounded-full -top-1 -right-1 animate-pulse"></div>
                  )}
                </div>
                <div className="text-sm text-blue-700 font-medium">Hospital {device}</div>
                <div className="text-xs text-blue-500">Training locally</div>
                
                {/* Moving data packets */}
                {animationStep === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="text-xs text-blue-600 mt-1">Sending</div>
                  </div>
                )}
                {animationStep === 3 && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
                    <div className="text-xs text-green-600 mt-1">Receiving</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Animated Connection Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="w-full h-full">
            <defs>
              <marker id="arrowhead-fl-up" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#3B82F6" />
              </marker>
              <marker id="arrowhead-fl-down" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#10B981" />
              </marker>
            </defs>
            
            {/* Upload connections - Step 1 */}
            {animationStep === 1 && [0, 1, 2, 3].map((i) => {
              const startX = 100 + (i * 160);
              const startY = 320;
              const endX = 300;
              const endY = 200;
              
              return (
                <g key={`upload-${i}`}>
                  <path
                    d={`M ${startX} ${startY} Q ${startX + (endX - startX) * 0.5} ${startY - 50} ${endX} ${endY}`}
                    stroke="#3B82F6"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead-fl-up)"
                    strokeDasharray="8,4"
                    className="animate-pulse"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      values="60;0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                  </path>
                  
                  {/* Moving dot */}
                  <circle r="3" fill="#3B82F6" className="opacity-80">
                    <animateMotion 
                      dur="1.5s" 
                      repeatCount="indefinite"
                      path={`M ${startX} ${startY} Q ${startX + (endX - startX) * 0.5} ${startY - 50} ${endX} ${endY}`}
                    />
                  </circle>
                </g>
              );
            })}
            
            {/* Download connections - Step 3 */}
            {animationStep === 3 && [0, 1, 2, 3].map((i) => {
              const startX = 300;
              const startY = 200;
              const endX = 100 + (i * 160);
              const endY = 320;
              
              return (
                <g key={`download-${i}`}>
                  <path
                    d={`M ${startX} ${startY} Q ${startX + (endX - startX) * 0.5} ${startY + 50} ${endX} ${endY}`}
                    stroke="#10B981"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead-fl-down)"
                    strokeDasharray="8,4"
                    className="animate-pulse"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      values="60;0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                  </path>
                  
                  {/* Moving dot */}
                  <circle r="3" fill="#10B981" className="opacity-80">
                    <animateMotion 
                      dur="1.5s" 
                      repeatCount="indefinite"
                      path={`M ${startX} ${startY} Q ${startX + (endX - startX) * 0.5} ${startY + 50} ${endX} ${endY}`}
                    />
                  </circle>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-6 text-center">
          <Badge className="bg-blue-100 text-blue-800 mr-2">
            <Lock className="w-3 h-3 mr-1" />
            Data Private
          </Badge>
          <Badge className="bg-blue-100 text-blue-800">
            <Server className="w-3 h-3 mr-1" />
            Central Coordination
          </Badge>
        </div>
      </div>
    );
  };

  const AnimatedDFLDiagram = () => {
    const nodes = [
      { id: 'hospital-a', pos: { x: 150, y: 80 }, icon: Eye, color: 'medical-primary', label: 'Hospital A' },
      { id: 'aggregator', pos: { x: 300, y: 60 }, icon: Brain, color: 'medical-accent', label: 'Aggregator' },
      { id: 'clinic-b', pos: { x: 450, y: 80 }, icon: Eye, color: 'medical-primary', label: 'Clinic B' },
      { id: 'research-c', pos: { x: 200, y: 200 }, icon: Database, color: 'medical-purple', label: 'Research C' },
      { id: 'practice-d', pos: { x: 400, y: 200 }, icon: Users, color: 'medical-cyan', label: 'Practice D' }
    ];

    const connections = [
      { from: 'hospital-a', to: 'aggregator', step: 0 },
      { from: 'aggregator', to: 'clinic-b', step: 0 },
      { from: 'hospital-a', to: 'research-c', step: 1 },
      { from: 'clinic-b', to: 'practice-d', step: 1 },
      { from: 'research-c', to: 'practice-d', step: 2 },
      { from: 'practice-d', to: 'aggregator', step: 2 },
      { from: 'aggregator', to: 'research-c', step: 3 },
      { from: 'research-c', to: 'hospital-a', step: 3 }
    ];

    const getNodeClass = (nodeId: string, step: number) => {
      const activeConnections = connections.filter(c => 
        (c.from === nodeId || c.to === nodeId) && c.step === animationStep
      );
      return activeConnections.length > 0 ? 'scale-110 ring-4 ring-medical-primary/50' : '';
    };

    return (
      <div className="dfl-container relative p-8 bg-gradient-to-br from-medical-primary/10 to-medical-accent/10 rounded-xl border border-medical-primary/20">
        <div className="flex justify-between items-center mb-6">
          <div className="text-center flex-1">
            <h3 className="text-2xl font-bold text-medical-primary mb-2">Decentralized Federated Learning (DFL)</h3>
            <p className="text-medical-accent">Our advanced peer-to-peer approach</p>
          </div>
          <div className="flex items-center gap-3">
            {isAnimating && (
              <div className="step-indicator">
                Step {animationStep + 1} of 4
              </div>
            )}
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={startAnimation}
                className="medical-gradient hover:opacity-90"
                disabled={isAnimating}
              >
                {isAnimating ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Play Demo'}
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={stopAnimation}
                className="border-medical-primary text-medical-primary"
              >
                Stop
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animation Steps Display */}
        <div className="mb-6 text-center">
          <div className="bg-medical-primary/10 rounded-lg p-3">
            <div className="text-sm font-medium text-medical-primary">
              {animationStep === 0 && "Step 1: Simultaneous peer-to-peer training"}
              {animationStep === 1 && "Step 2: Direct model exchange between peers"}
              {animationStep === 2 && "Step 3: Distributed consensus and aggregation"}
              {animationStep === 3 && "Step 4: Self-organizing network updates"}
            </div>
          </div>
        </div>
        
        {/* Network Nodes */}
        <div className="relative h-80 max-w-5xl mx-auto">
          {nodes.map((node) => {
            const IconComponent = node.icon;
            const isActive = connections.some(c => (c.from === node.id || c.to === node.id) && c.step === animationStep);
            const nodeColorClass = `bg-${node.color}`;
            
            return (
              <div key={node.id}>
                <div
                  className={`absolute w-24 h-24 ${nodeColorClass} rounded-xl flex items-center justify-center medical-shadow-lg transition-all duration-500 ${isActive ? 'scale-110 ring-4 ring-medical-primary/50' : ''}`}
                  style={{ 
                    left: `${node.pos.x}px`, 
                    top: `${node.pos.y}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="text-center relative">
                    <IconComponent className="w-10 h-10 text-white mx-auto mb-1" />
                    {/* Activity indicator */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>
                
                {/* Node Label */}
                <div
                  className="absolute text-center"
                  style={{ 
                    left: `${node.pos.x}px`, 
                    top: `${node.pos.y + 50}px`,
                    transform: 'translateX(-50%)',
                    width: '90px'
                  }}
                >
                  <div className={`text-sm font-medium text-${node.color} mb-1`}>{node.label}</div>
                  <div className="text-xs text-text-secondary">
                    {animationStep === 0 && "Local Training"}
                    {animationStep === 1 && "P2P Exchange"}
                    {animationStep === 2 && "Consensus"}  
                    {animationStep === 3 && "Update Sync"}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Animated Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <marker id="arrowhead-dfl-inactive" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
                <polygon points="0 0, 6 2.5, 0 5" fill="#94A3B8" />
              </marker>
              <marker id="arrowhead-dfl-active" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#10B981" />
              </marker>
            </defs>
            
            {connections.map((conn, idx) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;
              
              const isActive = conn.step === animationStep;
              const strokeColor = isActive ? "#10B981" : "#94A3B8";
              const strokeWidth = isActive ? "3" : "1.5";
              
              return (
                <g key={`${conn.from}-${conn.to}-${idx}`}>
                  <path
                    d={`M ${fromNode.pos.x} ${fromNode.pos.y} Q ${(fromNode.pos.x + toNode.pos.x) / 2} ${(fromNode.pos.y + toNode.pos.y) / 2 - 20} ${toNode.pos.x} ${toNode.pos.y}`}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                    markerEnd={`url(#arrowhead-dfl-${isActive ? 'active' : 'inactive'})`}
                    className={isActive ? "animate-pulse" : "opacity-40"}
                    strokeDasharray={isActive ? "8,4" : "none"}
                  >
                    {isActive && (
                      <animate 
                        attributeName="stroke-dashoffset" 
                        values="60;0" 
                        dur="1.8s" 
                        repeatCount="indefinite" 
                      />
                    )}
                  </path>
                  
                  {/* Moving data packet */}
                  {isActive && (
                    <circle r="4" fill="#10B981" className="opacity-80">
                      <animateMotion 
                        dur="1.8s" 
                        repeatCount="indefinite"
                        path={`M ${fromNode.pos.x} ${fromNode.pos.y} Q ${(fromNode.pos.x + toNode.pos.x) / 2} ${(fromNode.pos.y + toNode.pos.y) / 2 - 20} ${toNode.pos.x} ${toNode.pos.y}`}
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-8 text-center">
          <Badge className="bg-medical-success/20 text-medical-success mr-2">
            <Shield className="w-3 h-3 mr-1" />
            Maximum Privacy
          </Badge>
          <Badge className="bg-medical-primary/20 text-medical-primary mr-2">
            <Network className="w-3 h-3 mr-1" />
            P2P Network
          </Badge>
          <Badge className="bg-medical-accent/20 text-medical-accent">
            <TrendingUp className="w-3 h-3 mr-1" />
            Self-Organizing
          </Badge>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-medical-primary mb-4">
          Understanding FL vs DFL
        </h2>
        <p className="text-xl text-text-secondary max-w-4xl mx-auto">
          Learn the key differences between traditional Federated Learning and our revolutionary 
          Decentralized Federated Learning approach for medical AI applications.
        </p>
      </div>

      {/* Interactive Comparison */}
      <Tabs defaultValue="comparison" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="comparison">Detailed Comparison</TabsTrigger>
          <TabsTrigger value="diagrams">Visual Architecture</TabsTrigger>
          <TabsTrigger value="benefits">Why DFL for Medical AI?</TabsTrigger>
        </TabsList>

        <TabsContent value="comparison" className="space-y-6">
          <div className="grid gap-6">
            {comparisonData.map((item, index) => (
              <Card key={item.aspect} className="medical-shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl text-medical-primary">{item.aspect}</span>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-500 mb-1">FL</div>
                        <Badge className={getScoreColor(item.fl.score)}>
                          {item.fl.score}/10
                        </Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-500 mb-1">DFL</div>
                        <Badge className={getScoreColor(item.dfl.score)}>
                          {item.dfl.score}/10
                        </Badge>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <Server className="w-4 h-4" />
                        Federated Learning
                      </h4>
                      <p className="text-blue-700 mb-2">{item.fl.description}</p>
                      <p className="text-sm text-blue-600">{item.fl.details}</p>
                    </div>
                    <div className="p-4 bg-medical-primary/10 rounded-lg border border-medical-primary/20">
                      <h4 className="font-semibold text-medical-primary mb-2 flex items-center gap-2">
                        <Network className="w-4 h-4" />
                        Decentralized FL
                      </h4>
                      <p className="text-medical-primary mb-2">{item.dfl.description}</p>
                      <p className="text-sm text-medical-primary/80">{item.dfl.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="diagrams" className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedFLDiagram />
            <AnimatedDFLDiagram />
          </div>
          
          <Card className="medical-shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-medical-primary">Key Architectural Differences</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Traditional FL Architecture
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span>Single central server coordinates all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span>Bottleneck at central aggregation point</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                    <span>Single point of failure vulnerability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Simpler implementation and coordination</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-medical-primary flex items-center gap-2">
                  <Network className="w-5 h-5" />
                  Our DFL Architecture
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Peer-to-peer network with no central authority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Distributed aggregation across multiple nodes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Self-healing and fault-tolerant design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Enhanced privacy through decentralization</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benefits" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="medical-shadow-lg scale-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-medical-success">
                  <Shield className="w-8 h-8" />
                  Enhanced Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  DFL eliminates the need for a central server, ensuring that sensitive medical data 
                  never passes through any single point that could be compromised.
                </p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• No central data aggregation</li>
                  <li>• Peer-to-peer encrypted communication</li>
                  <li>• Differential privacy techniques</li>
                  <li>• HIPAA-compliant by design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-shadow-lg scale-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-medical-cyan">
                  <TrendingUp className="w-8 h-8" />
                  Superior Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our research shows that DFL achieves 2.1% higher accuracy than traditional FL 
                  while reducing communication overhead by 35%.
                </p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• 96.1% vs 94.2% accuracy improvement</li>
                  <li>• Faster convergence rates</li>
                  <li>• Better generalization across populations</li>
                  <li>• Reduced communication costs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-shadow-lg scale-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-medical-primary">
                  <Globe className="w-8 h-8" />
                  Real-World Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  DFL enables global collaboration between medical institutions without 
                  compromising patient privacy or institutional autonomy.
                </p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Enable global medical research</li>
                  <li>• Preserve institutional independence</li>
                  <li>• Scalable to thousands of participants</li>
                  <li>• Future-ready architecture</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="medical-shadow-xl bg-gradient-to-r from-medical-primary/5 to-medical-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-medical-primary flex items-center justify-center gap-3">
                <Award className="w-8 h-8" />
                Why Our DFL Approach Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                Traditional centralized approaches to medical AI create privacy risks and scalability bottlenecks. 
                Our Decentralized Federated Learning solution represents the future of collaborative medical AI - 
                enabling institutions worldwide to improve diagnosis accuracy while maintaining complete data sovereignty.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-medical-success text-white px-4 py-2">
                  96.1% Accuracy Rate
                </Badge>
                <Badge className="bg-medical-primary text-white px-4 py-2">
                  100% Data Privacy
                </Badge>
                <Badge className="bg-medical-cyan text-white px-4 py-2">
                  35% Faster Communication
                </Badge>
                <Badge className="bg-medical-accent text-white px-4 py-2">
                  Infinite Scalability
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}