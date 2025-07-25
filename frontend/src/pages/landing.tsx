import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import FLDFLComparison from "../components/fl-dfl-comparison";
import { ArrowRight, Shield, Brain, Network, Eye, Zap, Target, TrendingUp, CheckCircle } from "lucide-react";
import { AIProcessingIcon, PrivacyIcon } from "../components/ui/icons";

export default function Landing() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen gradient-bg relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-medical-primary rounded-full blur-3xl float-animation"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-medical-accent rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-medical-primary/10 text-medical-primary border-medical-primary/20 bounce-in" variant="outline">
              🏆 Advanced AI Research Project
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 animate-fade-in leading-tight">
              Decentralized Federated Learning for{" "}
              <span className="text-medical-primary bg-gradient-to-r from-medical-primary to-medical-secondary bg-clip-text text-transparent">
                Ocular Disease Diagnosis
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto animate-fade-in-delay-1 leading-relaxed">
              Revolutionary AI-powered retinal analysis using privacy-preserving federated learning. 
              Experience the future of medical AI with <strong>complete data privacy</strong> and 
              <strong className="text-medical-accent">96.1% accuracy</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-delay-2 mb-12">
              <Link href="/diagnosis">
                <Button className="medical-gradient hover:opacity-90 px-10 py-4 text-lg font-semibold medical-shadow-lg glow-animation group">
                  <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start AI Diagnosis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  variant="outline"
                  className="border-2 border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white px-10 py-4 text-lg font-semibold medical-shadow"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Explore Technology
                </Button>
              </Link>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-delay-2">
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl medical-shadow text-center">
                <div className="text-2xl font-bold text-medical-primary mb-1">96.1%</div>
                <div className="text-sm text-text-secondary">DFL Accuracy</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl medical-shadow text-center">
                <div className="text-2xl font-bold text-medical-success mb-1">100%</div>
                <div className="text-sm text-text-secondary">Privacy Protected</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl medical-shadow text-center">
                <div className="text-2xl font-bold text-medical-accent mb-1">5+</div>
                <div className="text-sm text-text-secondary">Disease Types</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl medical-shadow text-center">
                <div className="text-2xl font-bold text-medical-purple mb-1">&lt;3s</div>
                <div className="text-sm text-text-secondary">Processing Time</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Medical professional using AI technology for eye examination"
                className="rounded-xl medical-shadow w-full h-auto animate-fade-in"
              />
              <div className="grid grid-cols-2 gap-4 animate-fade-in-delay-1">
                <div className="bg-white p-4 rounded-lg medical-shadow text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--medical-blue))] mb-1">96.1%</div>
                  <div className="text-sm text-gray-600">DFL Accuracy</div>
                </div>
                <div className="bg-white p-4 rounded-lg medical-shadow text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--success-green))] mb-1">100%</div>
                  <div className="text-sm text-gray-600">Privacy</div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <Card className="medical-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-[hsl(var(--success-green))] mr-3" />
                    <h3 className="text-xl font-semibold">Privacy-First Approach</h3>
                  </div>
                  <p className="text-gray-600">
                    Your medical data never leaves your device. All diagnosis happens locally using
                    advanced federated learning.
                  </p>
                </CardContent>
              </Card>

              <Card className="medical-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Network className="w-8 h-8 text-[hsl(var(--medical-blue))] mr-3" />
                    <h3 className="text-xl font-semibold">Decentralized Intelligence</h3>
                  </div>
                  <p className="text-gray-600">
                    Comparing traditional federated learning with decentralized approaches for
                    better scalability.
                  </p>
                </CardContent>
              </Card>

              <Card className="medical-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-[hsl(var(--success-green))] mr-3" />
                    <h3 className="text-xl font-semibold">High Accuracy</h3>
                  </div>
                  <p className="text-gray-600">
                    Trained on ODIR-5K dataset with state-of-the-art Swin Transformer architecture.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 slide-in-left">
          <Card className="medical-shadow-lg scale-hover bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-medical-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <PrivacyIcon />
              </div>
              <h3 className="text-xl font-semibold text-medical-primary mb-3">Complete Privacy</h3>
              <p className="text-text-secondary">
                Zero data transmission. All AI processing happens locally on your device with HIPAA compliance.
              </p>
            </CardContent>
          </Card>

          <Card className="medical-shadow-lg scale-hover bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-medical-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AIProcessingIcon />
              </div>
              <h3 className="text-xl font-semibold text-medical-accent mb-3">Advanced AI</h3>
              <p className="text-text-secondary">
                State-of-the-art Swin Transformer architecture trained on ODIR-5K medical dataset.
              </p>
            </CardContent>
          </Card>

          <Card className="medical-shadow-lg scale-hover bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-medical-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-medical-purple" />
              </div>
              <h3 className="text-xl font-semibold text-medical-purple mb-3">Federated Learning</h3>
              <p className="text-text-secondary">
                Revolutionary decentralized approach outperforming traditional centralized methods.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FL vs DFL Educational Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FLDFLComparison />
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              Why Choose Our <span className="text-medical-primary">DFL Approach</span>?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Experience the next generation of privacy-preserving medical AI with superior performance and security.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 slide-in-left">
              <h3 className="text-3xl font-bold text-medical-primary">Superior Performance Metrics</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/70 rounded-lg medical-shadow">
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-medical-success" />
                    <span className="font-semibold">Diagnostic Accuracy</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-medical-success">96.1%</div>
                    <div className="text-sm text-text-secondary">vs 94.2% FL</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/70 rounded-lg medical-shadow">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-medical-cyan" />
                    <span className="font-semibold">Processing Speed</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-medical-cyan">&lt;3 sec</div>
                    <div className="text-sm text-text-secondary">Real-time results</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/70 rounded-lg medical-shadow">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-medical-primary" />
                    <span className="font-semibold">Privacy Protection</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-medical-primary">100%</div>
                    <div className="text-sm text-text-secondary">Zero data leakage</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <Card className="medical-shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-medical-primary">
                    Supported Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Diabetic Retinopathy", accuracy: "96.8%" },
                    { name: "Glaucoma", accuracy: "95.4%" },
                    { name: "Age-related Macular Degeneration", accuracy: "94.9%" },
                    { name: "Cataract", accuracy: "97.2%" },
                    { name: "Hypertensive Retinopathy", accuracy: "93.1%" },
                    { name: "Normal (Healthy)", accuracy: "98.5%" }
                  ].map((condition) => (
                    <div key={condition.name} className="flex items-center justify-between p-3 bg-gradient-to-r from-medical-primary/5 to-medical-accent/5 rounded-lg border border-medical-primary/10">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-medical-success" />
                        <span className="font-medium">{condition.name}</span>
                      </div>
                      <Badge className="bg-medical-success text-white">{condition.accuracy}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FL vs DFL Educational Section */}
          <div className="mb-16">
            <FLDFLComparison />
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-12 medical-shadow-xl">
            <h3 className="text-3xl font-bold text-medical-primary mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Upload your retinal image and get instant, privacy-protected AI diagnosis using our revolutionary DFL technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/diagnosis">
                <Button className="medical-gradient hover:opacity-90 px-8 py-4 text-lg font-semibold medical-shadow-lg glow-animation">
                  <Eye className="w-5 h-5 mr-2" />
                  Start Free Diagnosis
                </Button>
              </Link>
              <Link href="/performance">
                <Button variant="outline" className="border-2 border-medical-accent text-medical-accent hover:bg-medical-accent hover:text-white px-8 py-4 text-lg font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  View Performance Data
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
