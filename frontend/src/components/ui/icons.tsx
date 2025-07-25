import { 
  Brain, 
  Shield, 
  Network, 
  Zap, 
  Eye, 
  Activity, 
  Users, 
  Lock,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Info,
  TrendingUp,
  Target,
  Layers,
  Share2,
  Database,
  Cpu,
  Globe,
  Server
} from "lucide-react";

// Medical and AI themed icons
export const MedicalIcons = {
  Brain,
  Shield, 
  Network,
  Zap,
  Eye,
  Activity,
  Users,
  Lock,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Info,
  TrendingUp,
  Target,
  Layers,
  Share2,
  Database,
  Cpu,
  Globe,
  Server
};

// Custom FL/DFL concept icons as SVGs
export const FLIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.6"/>
    <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.6"/>
    <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.6"/>
    <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.6"/>
    <line x1="8" y1="8" x2="10" y2="10" stroke="currentColor" strokeWidth="2"/>
    <line x1="16" y1="8" x2="14" y2="10" stroke="currentColor" strokeWidth="2"/>
    <line x1="8" y1="16" x2="10" y2="14" stroke="currentColor" strokeWidth="2"/>
    <line x1="16" y1="16" x2="14" y2="14" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const DFLIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
    <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.8"/>
    <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.8"/>
    <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.8"/>
    <circle cx="4" cy="8" r="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.6"/>
    <circle cx="20" cy="8" r="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.6"/>
    <circle cx="4" cy="16" r="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.6"/>
    <circle cx="20" cy="16" r="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.6"/>
    <path d="M6 12 L4 8 L4 16 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
    <path d="M18 12 L20 8 L20 16 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
    <line x1="6" y1="12" x2="12" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
    <line x1="18" y1="12" x2="12" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
  </svg>
);

export const AIProcessingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="8" cy="8" r="1" fill="currentColor"/>
    <circle cx="16" cy="8" r="1" fill="currentColor"/>
    <circle cx="8" cy="16" r="1" fill="currentColor"/>
    <circle cx="16" cy="16" r="1" fill="currentColor"/>
    <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 8 L12 12 L16 8" stroke="currentColor" strokeWidth="1" fill="none"/>
    <path d="M8 16 L12 12 L16 16" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

export const PrivacyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M14.5 14.5 L16 16" stroke="currentColor" strokeWidth="2"/>
    <path d="M9.5 14.5 L8 16" stroke="currentColor" strokeWidth="2"/>
  </svg>
);