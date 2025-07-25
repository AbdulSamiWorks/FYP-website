# FYP-website

## Overview

This is a modern, full-stack web application for an AI research project titled "Decentralized Federated Learning for Ocular Eye Disease Diagnosis: A Comparative Study of FL and DFL." The application provides a complete platform for medical professionals to upload retinal images and receive AI-powered disease diagnosis while maintaining complete data privacy through client-side inference.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom medical theme colors and CSS variables
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Key Components

#### AI Model Integration
- Client-side inference using ONNX.js or torch.js for privacy-preserving diagnosis
- Pre-trained PyTorch model (swin.pt) for ocular disease classification
- Support for multiple model architectures: Swin Transformer, MobileNetV2, EfficientNetB0, CNN-Attention
- Real-time image processing with confidence scoring and heatmap visualization

#### Medical Interface
- HIPAA-compliant design with medical color scheme
- File upload with validation (JPEG/PNG, max 10MB)
- Diagnosis results display with confidence percentages
- PDF report generation using jsPDF
- Responsive design for mobile and desktop use

#### Educational Content
- Interactive visualizations comparing Federated Learning vs Decentralized Federated Learning
- Animated process flow diagrams
- Performance metrics and comparison charts
- Educational content about privacy-preserving AI in healthcare

## Data Flow

1. **Image Upload**: Users upload retinal images through a drag-and-drop interface
2. **Client-side Processing**: Images are processed locally using WebAssembly/ONNX.js
3. **AI Inference**: Pre-trained model runs entirely on the client device
4. **Results Display**: Disease classification and confidence scores are shown immediately
5. **Report Generation**: Optional PDF reports can be generated and downloaded
6. **No Server Upload**: Raw medical data never leaves the client device, ensuring complete privacy

## External Dependencies

### Core Libraries
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router
- **chart.js**: Data visualization for performance metrics

### UI Components
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Modern icon library

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- Vite development server with HMR for frontend
- Express server with TypeScript execution via tsx
- Replit-specific plugins for cartographer and runtime error overlay

### Production Build
- Vite builds the React application to `dist/public`
- esbuild bundles the Express server to `dist/index.js`
- Static files served by Express in production
- Database migrations handled by Drizzle Kit

### Database Management
- Drizzle migrations in `./migrations` directory
- Schema defined in `./shared/schema.ts`
- Environment variable `DATABASE_URL` required for database connection
- PostgreSQL dialect with connection pooling

### Environment Configuration
- Development: `NODE_ENV=development` with Vite middleware
- Production: `NODE_ENV=production` with static file serving
- Replit integration with development banner and cartographer support

## Key Features

### Privacy-First Design
- All AI inference happens client-side using WebAssembly
- No patient data is transmitted to servers
- Simulates true federated learning privacy guarantees
- HIPAA-compliant data handling practices

### Medical AI Capabilities
- Multi-class ocular disease classification
- Confidence scoring for diagnosis reliability
- Visual attention maps and heatmap overlays
- Support for ODIR-5K dataset trained models

### Educational Platform
- Interactive comparisons of FL vs DFL approaches
- Animated network diagrams showing data flow
- Performance metrics visualization
- Research project documentation and team information

### Professional Medical Interface
- Clean, clinical design with medical color palette
- Responsive layout optimized for medical workflows
- Accessibility compliance with WCAG guidelines
- Professional PDF report generation