import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Badge } from "../components/ui/badge";
import {
  Eye,
  BarChart3,
  BookOpen,
  Info,
  Menu,
  X,
  Shield,
  Network,
  Brain,
  Activity
} from "lucide-react";
import { MedicalIcons, AIProcessingIcon } from "../components/ui/icons";

export default function ModernNav() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [badgeActive, setBadgeActive] = useState(false);

  const navigationItems = [
    {
      name: "Home",
      href: "/",
      icon: Shield,
      description: "AI-powered diagnosis platform",
    },
    {
      name: "Diagnosis",
      href: "/diagnosis",
      icon: Eye,
      description: "Upload & analyze retinal images",
      badge: "Try Now"
    },
    {
      name: "How It Works",
      href: "/how-it-works",
      icon: Brain,
      description: "Learn about federated learning",
    },
    {
      name: "Performance",
      href: "/performance",
      icon: BarChart3,
      description: "View accuracy metrics & charts",
    },
    {
      name: "About",
      href: "/about",
      icon: Info,
      description: "Research team & project info",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-medical-primary/10 medical-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-medical-primary to-medical-accent rounded-xl flex items-center justify-center medical-shadow-lg">
                <Activity className="w-7 h-7 text-black" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-medical-success rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-medical-primary">
                Decent<span className="text-medical-accent">AI</span>
              </h1>
              <p className="text-xs text-text-secondary font-medium">
                Decentralized FL for Eye Diagnosis
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={active ? "default" : "ghost"}
                    className={`
                      relative h-12 px-4 rounded-xl transition-all duration-300 group
                      ${active
                        ? "medical-gradient text-white medical-shadow-lg"
                        : "hover:bg-medical-primary/10 hover:text-medical-primary"
                      }
                    `}
                  >
                    <item.icon className={`w-4 h-4 mr-2 ${active ? "text-white" : "text-medical-primary"}`} />
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <Badge
                        onClick={(e) => {
                          e.stopPropagation();
                          setBadgeActive(!badgeActive);
                        }}
                        className={`
                          ml-2 text-xs px-2 py-0 rounded-full transition-all duration-300 cursor-pointer border
                          ${badgeActive
                            ? "bg-blue-600 text-white border-blue-800 shadow-sm scale-105"
                            : "bg-gray-800 text-white border-gray-500 opacity-80 hover:opacity-100"
                          }
                        `}
                      >
                        {item.badge}
                      </Badge>
                    )}

                    {/* Hover tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                      {item.description}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-medical-success/10 rounded-full">
              <div className="w-2 h-2 bg-medical-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-medical-success">
                Privacy Protected
              </span>
            </div>
            <Link href="/diagnosis">
              <Button className="medical-gradient hover:opacity-90 px-6 py-3 rounded-xl font-semibold medical-shadow-lg glow-animation">
                <Brain className="w-4 h-4 mr-2" />
                Start Analysis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-medical-primary/10">
                <Menu className="w-6 h-6 text-medical-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-xl">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-medical-primary/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-medical-primary to-medical-accent rounded-lg flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-medical-primary">
                        Decent<span className="text-medical-accent">AI</span>
                      </h2>
                      <p className="text-xs text-text-secondary">
                        Privacy-First Diagnosis
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 py-6 space-y-2">
                  {navigationItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link key={item.name} href={item.href}>
                        <Button
                          variant="ghost"
                          className={`
                            w-full justify-start h-auto p-4 rounded-xl transition-all duration-300
                            ${active
                              ? "bg-medical-primary text-white medical-shadow"
                              : "hover:bg-medical-primary/10 hover:text-medical-primary"
                            }
                          `}
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className={`w-5 h-5 mr-3 ${active ? "text-white" : "text-medical-primary"}`} />
                          <div className="text-left">
                            <div className="font-medium flex items-center gap-2">
                              {item.name}
                              {item.badge && (
                                <Badge className="bg-medical-success text-white text-xs">
                                  {item.badge}
                                </Badge>
                              )}
                            </div>
                            <div className={`text-sm ${active ? "text-white/80" : "text-text-secondary"}`}>
                              {item.description}
                            </div>
                          </div>
                        </Button>
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-medical-primary/10 space-y-4">
                  <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-medical-success/10 rounded-full">
                    <Shield className="w-4 h-4 text-medical-success" />
                    <span className="text-sm font-medium text-medical-success">
                      100% Privacy Protected
                    </span>
                  </div>
                  <Link href="/diagnosis">
                    <Button
                      className="w-full medical-gradient hover:opacity-90 py-4 rounded-xl font-semibold medical-shadow-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Start Free Diagnosis
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
