import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Eye,
  BarChart3,
  BookOpen,
  Info,
  Shield,
  Network,
  Brain,
  Activity,
  Github,
  Mail,
  Phone,
  MapPin,
  Heart,
  Award,
  Users,
  Database,
  Lock,
  Zap,
} from "lucide-react";

export default function ModernFooter() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Start Diagnosis", href: "/diagnosis" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Performance", href: "/performance" },
    { name: "About Us", href: "/about" },
  ];

  const features = [
    { name: "Privacy Protected", icon: Shield, color: "text-medical-success" },
    { name: "AI-Powered", icon: Brain, color: "text-medical-primary" },
    { name: "Real-time Results", icon: Zap, color: "text-medical-cyan" },
    { name: "Medical Grade", icon: Award, color: "text-medical-accent" },
  ];

  const stats = [
    { label: "Accuracy Rate", value: "99.1%", icon: Award },
    { label: "Processing Time", value: "<3 sec", icon: Zap },
    { label: "Privacy Level", value: "100%", icon: Shield },
    { label: "Supported Conditions", value: "8", icon: Eye },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-50 to-white border-t border-medical-primary/10">
      {/* Stats Section */}
      <div className="bg-medical-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-medical-primary to-medical-accent rounded-xl flex items-center justify-center medical-shadow-lg">
                  <Activity className="w-7 h-7 text-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-medical-primary">
                    Decent<span className="text-medical-accent">AI</span>
                  </h3>
                  <p className="text-text-secondary font-medium">
                    Decentralized Federated Learning for Eye Disease Diagnosis
                  </p>
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed max-w-md">
                Revolutionary AI platform providing privacy-first retinal
                disease diagnosis using state-of-the-art decentralized federated
                learning technology. Your medical data stays completely private
                while delivering clinical-grade accuracy.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center gap-2 p-2 bg-white/60 rounded-lg"
                  >
                    <feature.icon className={`w-4 h-4 ${feature.color}`} />
                    <span className="text-sm font-medium text-gray-700">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href="/diagnosis">
                <Button className="text-white medical-gradient hover:opacity-90 px-6 py-3 rounded-xl font-semibold medical-shadow-lg glow-animation">
                  <Eye className="w-4 h-4 mr-2" />
                  Try Free Diagnosis
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-medical-primary mb-6 flex items-center gap-2">
                <Network className="w-5 h-5" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <span className="text-text-secondary hover:text-medical-primary transition-colors cursor-pointer flex items-center gap-2 group">
                        <div className="w-1.5 h-1.5 bg-medical-primary/30 rounded-full group-hover:bg-medical-primary transition-colors" />
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-gradient-to-r from-medical-primary/5 to-medical-accent/5 rounded-lg border border-medical-primary/10">
                <h5 className="font-semibold text-medical-primary mb-2">
                  Research Project
                </h5>
                <p className="text-sm text-text-secondary">
                  "A Comparative Study of FL and DFL for Ocular Disease
                  Diagnosis"
                </p>
                <Badge className="mt-2 bg-medical-accent text-white">
                  Final Year Project
                </Badge>
              </div>
            </div>

            {/* Contact & Info */}
            <div>
              <h4 className="text-lg font-semibold text-medical-primary mb-6 flex items-center gap-2">
                <Info className="w-5 h-5" />
                Project Info
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                  <Database className="w-5 h-5 text-medical-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800 mb-1">
                      ODIR-5K Dataset
                    </div>
                    <div className="text-sm text-text-secondary">
                      Trained on 5,000+ retinal images for comprehensive
                      diagnosis
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                  <Brain className="w-5 h-5 text-medical-accent mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800 mb-1">
                      Swin Transformer
                    </div>
                    <div className="text-sm text-text-secondary">
                      Advanced vision transformer architecture for medical
                      imaging
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                  <Lock className="w-5 h-5 text-medical-success mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800 mb-1">
                      Client-Side AI
                    </div>
                    <div className="text-sm text-text-secondary">
                      Complete privacy with local inference using WebAssembly
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                  <Users className="w-5 h-5 text-medical-purple mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800 mb-1">
                      Research Team
                    </div>
                    <div className="text-sm text-text-secondary">
                      Computer Science & AI Engineering Students
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-medical-primary/10 bg-slate-50/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-text-secondary">
              <span>© {currentYear} Abdul Sami – Decentralized-AI</span>
              <span className="flex items-center gap-1">
                Made with{" "}
                <Heart className="w-4 h-4 text-red-500 fill-current" /> for
                ocular disease diagnosis
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Badge className="bg-medical-success text-white">
                Privacy First
              </Badge>
              <Badge className="bg-medical-primary text-white">
                HIPAA Compliant
              </Badge>
              <Badge className="bg-medical-accent text-white">
                Open Source
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
