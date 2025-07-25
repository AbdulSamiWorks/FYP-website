import { useState, useEffect } from "react";
import FileUpload from "../components/file-upload";
import DiagnosisResults from "../components/diagnosis-results";
import { useModelInference } from "../hooks/use-pytorch-inference";
import { generatePDFReport } from "../lib/pdf-generator";
import { useToast } from "../hooks/use-toast";
import { getModelStatus, initializeModel } from "../lib/pytorch-model";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { 
  Brain, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Eye, 
  Shield,
  Zap,
  Award,
} from "lucide-react";

export default function Diagnosis() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [modelStatus, setModelStatus] = useState(getModelStatus());
  const [isInitializing, setIsInitializing] = useState(false);
  const { isAnalyzing, result, runDiagnosis } = useModelInference();
  const { toast } = useToast();

  useEffect(() => {
    // Initialize model on component mount
    const initModel = async () => {
      setIsInitializing(true);
      try {
        await initializeModel();
        setModelStatus(getModelStatus());
      } catch (error) {
        console.error('Model initialization failed:', error);
      } finally {
        setIsInitializing(false);
      }
    };

    initModel();
  }, []);

  const handleFileUpload = (file: File | null) => {
    setUploadedFile(file);
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) return;
    
    try {
      await runDiagnosis(uploadedFile);
    } catch (error) {
      console.error("Analysis failed:", error);
    }
  };

  const handleDownloadReport = async () => {
    if (!result) return;

    try {
      await generatePDFReport({
        patientInfo: {
          date: new Date().toLocaleDateString(),
        },
        diagnosis: {
          disease: result.primaryDiagnosis.condition,
          confidence: Math.round(result.primaryDiagnosis.confidence * 100),
          accuracy: Math.round(result.primaryDiagnosis.confidence * 100),
          processingTime: result.processingTime
        },
        imageUrl: uploadedFile ? URL.createObjectURL(uploadedFile) : undefined,
      });
      
      toast({
        title: "Report Generated",
        description: "PDF report has been downloaded successfully.",
      });
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast({
        variant: "destructive",
        title: "Download Failed", 
        description: "Could not generate PDF report.",
      });
    }
  };

  // Model status component
  const ModelStatusCard = () => (
    <Card className="medical-shadow-lg mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-medical-primary" />
          AI Model Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-medical-primary/5 to-medical-accent/5 rounded-lg">
            {isInitializing ? (
              <Loader2 className="w-5 h-5 text-medical-primary animate-spin" />
            ) : modelStatus.loaded ? (
              <CheckCircle className="w-5 h-5 text-medical-success" />
            ) : (
              <AlertCircle className="w-5 h-5 text-orange-500" />
            )}
            <div>
              <div className="font-medium text-gray-800">
                {isInitializing ? 'Initializing...' : modelStatus.loaded ? 'Model Loaded' : 'Using Demo Mode'}
              </div>
              <div className="text-sm text-text-secondary">
                {modelStatus.type === 'pytorch' ? 'Swin Transformer (swin.pt)' : 'Mock Model'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-medical-success/5 to-medical-cyan/5 rounded-lg">
            <Shield className="w-5 h-5 text-medical-success" />
            <div>
              <div className="font-medium text-gray-800">Privacy Protected</div>
              <div className="text-sm text-text-secondary">Client-side inference</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-medical-cyan/5 to-medical-accent/5 rounded-lg">
            <Zap className="w-5 h-5 text-medical-cyan" />
            <div>
              <div className="font-medium text-gray-800">8 Conditions</div>
              <div className="text-sm text-text-secondary">ODIR-5K trained</div>
            </div>
          </div>
        </div>

        {modelStatus.type === 'pytorch' && (
          <div className="mt-4 p-4 bg-medical-success/10 border border-medical-success/20 rounded-lg">
            <div className="flex items-center gap-2 text-medical-success font-medium">
              <Award className="w-4 h-4" />
              Real PyTorch Model Active
            </div>
            <p className="text-sm text-gray-700 mt-1">
              Using your uploaded swin.pt model for authentic medical diagnosis with enhanced accuracy.
            </p>
          </div>
        )}

        {!modelStatus.loaded && !isInitializing && (
          <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-center gap-2 text-orange-700 font-medium">
              <AlertCircle className="w-4 h-4" />
              Demo Mode Active
            </div>
            <p className="text-sm text-gray-700 mt-1">
              To use real AI inference, place your <code className="bg-orange-100 px-1 rounded">swin.pt</code> model file in the public directory.
              Currently using simulated predictions for demonstration.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="pt-20 min-h-screen bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-medical-primary to-medical-accent rounded-full mb-6 medical-shadow-lg pulse-glow">
            <Eye className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-medical-primary to-medical-accent bg-clip-text mb-4">
            AI-Powered Retinal Disease Diagnosis
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Upload your retinal image for instant, privacy-protected analysis using our advanced 
            Swin Transformer model trained on 8 medical conditions from the ODIR-5K dataset.
          </p>
          
          {/* Enhanced feature highlights */}
          <div className="flex justify-center flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full medical-shadow">
              <Shield className="w-4 h-4 text-medical-primary" />
              <span className="text-sm font-medium text-medical-primary">100% Client-Side</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full medical-shadow">
              <Zap className="w-4 h-4 text-medical-accent" />
              <span className="text-sm font-medium text-medical-accent">Real-Time Analysis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full medical-shadow">
              <Award className="w-4 h-4 text-medical-success" />
              <span className="text-sm font-medium text-medical-success">Medical Grade AI</span>
            </div>
          </div>
        </div>

        <ModelStatusCard />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upload Section */}
          <FileUpload
            onFileUpload={handleFileUpload}
            onAnalyze={handleAnalyze}
            isAnalyzing={isAnalyzing}
            uploadedFile={uploadedFile}
          />

          {/* Results Section */}
          <DiagnosisResults
            result={result ? {
              disease: result.primaryDiagnosis.condition,
              confidence: Math.round(result.primaryDiagnosis.confidence * 100), 
              accuracy: Math.round(result.primaryDiagnosis.confidence * 100),
              processingTime: result.processingTime
            } : null}
            isLoading={isAnalyzing}
            onDownloadReport={handleDownloadReport}
          />
        </div>
      </div>
    </div>
  );
}
