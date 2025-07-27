import { useState } from "react";
import FileUpload from "../components/file-upload";
import DiagnosisResults from "../components/diagnosis-results";
import { generatePDFReport } from "../lib/pdf-generator";
import { useToast } from "../hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Brain, Eye, Shield, Zap, Award } from "lucide-react";

export default function Diagnosis() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const { toast } = useToast();

  const BACKEND_API_URL = "https://fyp-backend-ws28.onrender.com/diagnose";

  const handleFileUpload = (file: File | null) => {
    setUploadedFile(file);
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) return;
    setIsAnalyzing(true);

    try {
      const formData = new FormData();
      formData.append("file", uploadedFile);

      const response = await fetch(BACKEND_API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const err = await response.text();
        throw new Error(err || "Model not responding");
      }

      const result = await response.json();
      const markdownOutput = result.prediction ?? "⚠️ No result returned.";

      const conditionMatch = markdownOutput.match(/\*\*Predicted Condition:\*\* (.+)/);
      const confidenceMatch = markdownOutput.match(/\*\*Confidence:\*\* ([\d.]+)%/);
      const adviceMatch = markdownOutput.match(/\*\*Advice:\*\*\s+([\s\S]*)/);


      const condition = conditionMatch ? conditionMatch[1].trim() : "Unknown";
      const confidence = confidenceMatch ? parseFloat(confidenceMatch[1]) / 100 : 0;
      const advice = adviceMatch ? adviceMatch[1].trim() : "No specific advice provided.";

      setResult({
        primaryDiagnosis: {
          condition,
          confidence,
          advice,
        },
        markdown: markdownOutput,
        processingTime: 0,
      });

      toast({
        title: "Diagnosis Complete ✅",
        description: "See detailed AI results below.",
      });
    } catch (err: any) {
      console.error("Error contacting backend:", err);
      toast({
        variant: "destructive",
        title: "Analysis Failed ❌",
        description: err.message || "Could not connect to the AI model.",
      });
    } finally {
      setIsAnalyzing(false);
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
          processingTime: result.processingTime,
        },
        imageUrl: uploadedFile ? URL.createObjectURL(uploadedFile) : undefined,
      });

      toast({
        title: "Report Generated ✅",
        description: "PDF report downloaded successfully.",
      });
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast({
        variant: "destructive",
        title: "Download Failed ❌",
        description: "Could not generate PDF report.",
      });
    }
  };

  const ModelStatusCard = () => (
    <Card className="medical-shadow-lg mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-medical-primary" />
          AI Model Status (Cloud)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-medical-success/5 to-medical-cyan/5 rounded-lg">
          <Shield className="w-5 h-5 text-medical-success" />
          <div>
            <div className="font-medium text-gray-800">
              Running on Hugging Face Space
            </div>
            <div className="text-sm text-text-secondary">
              Remote inference for Swin Transformer model
            </div>
          </div>
        </div>
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
            Upload your retinal image for instant, cloud-based analysis using
            our advanced Swin Transformer model deployed on Hugging Face Spaces.
          </p>

          <div className="flex justify-center flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full medical-shadow">
              <Shield className="w-4 h-4 text-medical-primary" />
              <span className="text-sm font-medium text-medical-primary">
                Secure Cloud Inference
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full medical-shadow">
              <Zap className="w-4 h-4 text-medical-accent" />
              <span className="text-sm font-medium text-medical-accent">
                Real-Time Results
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full medical-shadow">
              <Award className="w-4 h-4 text-medical-success" />
              <span className="text-sm font-medium text-medical-success">
                Medical-Grade AI
              </span>
            </div>
          </div>
        </div>

        <ModelStatusCard />

        <div className="grid lg:grid-cols-2 gap-12">
          <FileUpload
            onFileUpload={handleFileUpload}
            onAnalyze={handleAnalyze}
            isAnalyzing={isAnalyzing}
            uploadedFile={uploadedFile}
          />

          <DiagnosisResults
            result={
              result
                ? {
                    disease: result.primaryDiagnosis.condition,
                    confidence: Math.round(result.primaryDiagnosis.confidence * 100),
                    accuracy: Math.round(result.primaryDiagnosis.confidence * 100),
                    advice: result.primaryDiagnosis.advice,
                    processingTime: result.processingTime,
                  }
                : null
            }
            isLoading={isAnalyzing}
            onDownloadReport={handleDownloadReport}
          />
        </div>
      </div>
    </div>
  );
}
