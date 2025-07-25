import { useState, useCallback } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";
import { CloudUpload, Trash2, Loader2 } from "lucide-react";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  uploadedFile: File | null;
}

export default function FileUpload({
  onFileUpload,
  onAnalyze,
  isAnalyzing,
  uploadedFile,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleFile = useCallback(
    (file: File) => {
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!validTypes.includes(file.type)) {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please upload only JPEG or PNG files.",
        });
        return;
      }

      if (file.size > maxSize) {
        toast({
          variant: "destructive",
          title: "File too large",
          description: "Please upload files smaller than 10MB.",
        });
        return;
      }

      onFileUpload(file);
      toast({
        title: "File uploaded successfully!",
        description: "You can now run the analysis.",
      });
    },
    [onFileUpload, toast]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    },
    [handleFile]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files[0]);
      }
    },
    [handleFile]
  );

  const removeFile = () => {
    onFileUpload(null as any);
  };

  return (
    <div className="space-y-8">
      <Card className="medical-shadow">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-6">Upload Retinal Image</h3>

          {/* Upload Zone */}
          <div
            className={`upload-zone border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all duration-200 ${
              dragActive
                ? "border-[hsl(var(--medical-blue))] bg-blue-50 scale-105 shadow-lg"
                : "border-[hsl(var(--medical-blue))]/30 hover:border-[hsl(var(--medical-blue))]/60 hover:bg-gray-50"
            }`}
            onDragEnter={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDragActive(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDragActive(false);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <CloudUpload className={`mx-auto h-12 w-12 mb-4 transition-colors duration-200 ${
              dragActive ? "text-[hsl(var(--medical-blue))] animate-pulse" : "text-[hsl(var(--medical-blue))]"
            }`} />
            <p className="text-lg font-medium text-gray-700 mb-2">
              {dragActive ? "Drop your image here!" : "Drop your retinal image here"}
            </p>
            <p className="text-gray-500 mb-4">or click to browse</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-400">
              <span>Supports: JPEG, PNG • Max: 10MB</span>
            </div>
            <input
              id="file-input"
              type="file"
              className="hidden"
              accept=".jpg,.jpeg,.png"
              onChange={handleInputChange}
            />
          </div>

          {/* Preview Area */}
          {uploadedFile && (
            <div className="mt-6">
              <div className="bg-white p-4 rounded-lg border">
                <img
                  src={URL.createObjectURL(uploadedFile)}
                  alt="Uploaded retinal scan preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-600">{uploadedFile.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Analyze Button */}
          <Button
            onClick={onAnalyze}
            disabled={!uploadedFile || isAnalyzing}
            className="w-full mt-6 bg-[hsl(var(--medical-blue))] hover:bg-[hsl(var(--deep-blue))] medical-shadow"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Image"
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Privacy Notice */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-4">
          <div className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-[hsl(var(--success-green))] flex items-center justify-center mr-3 mt-1">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div>
              <h4 className="font-medium text-[hsl(var(--success-green))] mb-1">
                Complete Privacy Protection
              </h4>
              <p className="text-sm text-gray-600">
                Your image is processed entirely on your device. No data is transmitted to our
                servers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
