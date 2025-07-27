import { useState } from "react";
import PerformanceCharts from "../components/performance-charts";
import LoadingSpinner from "../components/ui/loading-spinner";
import { useToast } from "../hooks/use-toast";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { BarChart3, TrendingUp, Award, Target, Brain, Activity } from "lucide-react";

export default function Performance() {
  const [selectedModel, setSelectedModel] = useState("swin");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleModelChange = (model: string) => {
    setIsLoading(true);
    setSelectedModel(model);
    
    // Simulate loading time for chart updates
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Model Updated",
        description: `Switched to ${getModelName(model)} visualization.`,
      });
    }, 500);
  };

  const getModelName = (id: string) => {
    const models = {
      swin: "Swin Transformer",
      mobilenet: "MobileNetV2", 
      efficientnet: "EfficientNetB0",
      "cnn-attention": "CNN-Attention"
    };
    return models[id as keyof typeof models] || id;
  };

  const performanceMetrics = [
    {
      title: "Model Accuracy",
      value: "99.2%",
      change: "+8.3%",
      icon: Target,
      color: "text-medical-success",
      bgColor: "bg-medical-success/10",
      description: "Overall diagnostic accuracy"
    },
    {
      title: "Privacy Score",
      value: "98.7%",
      change: "+5.1%", 
      icon: Award,
      color: "text-medical-primary",
      bgColor: "bg-medical-primary/10",
      description: "Data privacy protection"
    },
    {
      title: "Training Speed",
      value: "3.2x",
      change: "+12%",
      icon: TrendingUp,
      color: "text-medical-accent",
      bgColor: "bg-medical-accent/10",
      description: "Faster than traditional FL"
    },
    {
      title: "Network Efficiency",
      value: "89.1%",
      change: "+7.8%",
      icon: Activity,
      color: "text-medical-cyan",
      bgColor: "bg-medical-cyan/10",
      description: "Resource utilization"
    }
  ];

  return (
    <div className="pt-16 min-h-screen py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-medical-primary to-medical-accent rounded-full mb-6 medical-shadow-lg">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-medical-primary to-medical-accent bg-clip-text mb-4">
            Performance Analysis
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Comprehensive evaluation of our Decentralized Federated Learning approach vs Centralized Federated Learning approach
          </p>
          
          {/* Model Selection Pills */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {Object.entries({
              swin: "Swin Transformer",
              mobilenet: "MobileNetV2",
              efficientnet: "EfficientNetB0", 
              "cnn-attention": "CNN-Attention"
            }).map(([id, name]) => (
              <Button
                key={id}
                variant={selectedModel === id ? "default" : "outline"}
                onClick={() => handleModelChange(id)}
                className={selectedModel === id ? "medical-gradient" : "border-medical-primary/30 hover:border-medical-primary"}
                disabled={isLoading}
              >
                <Brain className="w-4 h-4 mr-2" />
                {name}
              </Button>
            ))}
          </div>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {performanceMetrics.map((metric, index) => (
            <Card key={metric.title} className={`medical-card-hover animate-fade-in-delay-${index + 1} group`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-medical-success font-medium">
                    {metric.change}
                  </Badge>
                </div>
                <h3 className="font-semibold text-text-primary mb-1">{metric.title}</h3>
                <p className="text-3xl font-bold text-text-primary mb-2">{metric.value}</p>
                <p className="text-sm text-text-secondary">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <LoadingSpinner size="lg" className="mb-4" />
              <p className="text-gray-600">Loading {getModelName(selectedModel)} performance data...</p>
            </div>
          </div>
        ) : (
          <PerformanceCharts selectedModel={selectedModel} onModelChange={handleModelChange} />
        )}
      </div>
    </div>
  );
}
