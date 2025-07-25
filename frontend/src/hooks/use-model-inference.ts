import { useState, useCallback } from 'react';
import { modelInference, type DiagnosisResult } from '../lib/model-inference';
import { useToast } from '../hooks/use-toast';

interface UseModelInferenceReturn {
  isInitialized: boolean;
  isAnalyzing: boolean;
  result: DiagnosisResult | null;
  error: string | null;
  initializeModel: () => Promise<void>;
  runDiagnosis: (file: File) => Promise<void>;
  clearResult: () => void;
}

export function useModelInference(): UseModelInferenceReturn {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const initializeModel = useCallback(async () => {
    try {
      setError(null);
      await modelInference.initialize();
      setIsInitialized(true);
      toast({
        title: "Model Ready",
        description: "AI model has been loaded successfully.",
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize model';
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Model Error",
        description: errorMessage,
      });
    }
  }, [toast]);

  const runDiagnosis = useCallback(async (file: File) => {
    if (!isInitialized) {
      await initializeModel();
    }

    try {
      setIsAnalyzing(true);
      setError(null);
      
      const diagnosisResult = await modelInference.runInference(file);
      setResult(diagnosisResult);
      
      toast({
        title: "Analysis Complete",
        description: `Diagnosed: ${diagnosisResult.disease} (${diagnosisResult.confidence.toFixed(1)}% confidence)`,
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
  }, [isInitialized, initializeModel, toast]);

  const clearResult = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return {
    isInitialized,
    isAnalyzing,
    result,
    error,
    initializeModel,
    runDiagnosis,
    clearResult,
  };
}
