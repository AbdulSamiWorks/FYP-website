import { Button } from "../components/ui/button.tsx";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import LoadingSpinner from "../components/ui/loading-spinner";
import { Eye, Download } from "lucide-react";

interface DiagnosisResult {
  disease: string;
  confidence: number;
  accuracy: number;
  processingTime: number;
  heatmapUrl?: string;
  advice?: string; // ✅ Added advice field
}

interface DiagnosisResultsProps {
  result: DiagnosisResult | null;
  isLoading: boolean;
  onDownloadReport: () => void;
}

export default function DiagnosisResults({
  result,
  isLoading,
  onDownloadReport,
}: DiagnosisResultsProps) {
  if (isLoading) {
    return (
      <Card className="medical-shadow">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-6">Diagnosis Results</h3>
          <div className="text-center py-12">
            <LoadingSpinner size="lg" className="mb-4" />
            <p className="text-gray-500 mb-2">Processing image...</p>
            <p className="text-sm text-gray-400">AI model is analyzing retinal features</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!result) {
    return (
      <Card className="medical-shadow">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-6">Diagnosis Results</h3>
          <div className="text-center py-12">
            <Eye className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500">Upload an image to see diagnosis results</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <Card className="medical-shadow">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-6">Diagnosis Results</h3>

          {/* Disease Prediction */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-4">Predicted Condition</h4>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-[hsl(var(--medical-blue))]">
                  {result.disease}
                </span>
                <span className="text-lg font-semibold text-[hsl(var(--success-green))]">
                 
                  {result.confidence.toFixed(1)}%
                  
                </span>
              </div>
              <Progress value={result.confidence} className="h-2" />
            </CardContent>
          </Card>

          {/* Additional Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-[hsl(var(--medical-blue))]">
                  {result.accuracy.toFixed(1)}%
                </p>
                <p className="text-sm text-gray-600">Model confidence</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-[hsl(var(--medical-blue))]">
                  {result.processingTime.toFixed(1)}s
                </p>
                <p className="text-sm text-gray-600">Processing Time</p>
              </CardContent>
            </Card>
          </div>

          {/* Heatmap Visualization */}
          {result.heatmapUrl && (
            <Card className="mb-6">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">AI Attention Map</h4>
                <div className="relative group">
                  <img
                    src={result.heatmapUrl}
                    alt="Retinal scan with AI attention heatmap overlay"
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    AI Analysis
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Attention Areas:</strong> Highlighted regions show where the AI model focused during analysis.
                    Warmer colors (red/orange) indicate areas of highest diagnostic relevance.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* AI Medical Advice */}
          {result.advice && (
            <Card className="mb-6">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">AI Medical Advice</h4>
                <div className="text-sm text-gray-700 whitespace-pre-line">
                  {result.advice}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Download Report */}
          <Button
            onClick={onDownloadReport}
            className="w-full bg-[hsl(var(--success-green))] hover:bg-[hsl(var(--success-green))]/90 medical-shadow"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF Report
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
