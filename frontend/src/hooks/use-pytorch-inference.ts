import { useState, useCallback } from 'react';
import { runModelInference, type ModelPrediction } from '../lib/pytorch-model';
import { useToast } from '../hooks/use-toast';

interface UseModelInferenceReturn {
  isAnalyzing: boolean;
  result: ModelPrediction | null;
  error: string | null;
  runDiagnosis: (file: File) => Promise<void>;
  clearResult: () => void;
}

export function useModelInference(): UseModelInferenceReturn {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ModelPrediction | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const runDiagnosis = useCallback(async (file: File) => {
    try {
      setIsAnalyzing(true);
      setError(null);
      
      const diagnosisResult = await runModelInference(file);
      setResult(diagnosisResult);
      
      toast({
        title: "Analysis Complete",
        description: `Primary diagnosis: ${diagnosisResult.primaryDiagnosis.condition} (${Math.round(diagnosisResult.primaryDiagnosis.confidence * 100)}% confidence)`,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Diagnosis failed';
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Diagnosis Error",
        description: errorMessage,
      });
    } finally {
      setIsAnalyzing(false);
    }
  }, [toast]);

  const clearResult = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return {
    isAnalyzing,
    result,
    error,
    runDiagnosis,
    clearResult,
  };
}