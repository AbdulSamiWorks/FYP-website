import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../components/ui/chart";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

interface PerformanceChartsProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
}

const models = [
  { id: "swin", name: "Swin Transformer" },
  { id: "mobilenet", name: "MobileNetV2" },
  { id: "efficientnet", name: "EfficientNetB0" },
  { id: "cnn-attention", name: "CNN-Attention" },
];

// Chart data based on selected model
const getModelData = (modelId: string) => {
  const baseData = {
    swin: {
      accuracy: { centralized: 94.2, decentralized: 96.1 },
      f1Data: [
        { round: "Round 1", centralized: 0.85, decentralized: 0.87 },
        { round: "Round 5", centralized: 0.88, decentralized: 0.9 },
        { round: "Round 10", centralized: 0.91, decentralized: 0.93 },
        { round: "Round 15", centralized: 0.93, decentralized: 0.95 },
        { round: "Round 20", centralized: 0.941, decentralized: 0.958 },
      ],
      precisionRecall: [
        { name: "Centralized FL", precision: 0.938, recall: 0.932 },
        { name: "Decentralized FL", precision: 0.951, recall: 0.965 },
      ],
      clientData: [
        { client: "Client 1", centralized: 92, decentralized: 94 },
        { client: "Client 2", centralized: 89, decentralized: 93 },
        { client: "Client 3", centralized: 95, decentralized: 97 },
        { client: "Client 4", centralized: 88, decentralized: 92 },
        { client: "Client 5", centralized: 91, decentralized: 95 },
      ],
    },
    mobilenet: {
      accuracy: { centralized: 91.5, decentralized: 93.8 },
      f1Data: [
        { round: "Round 1", centralized: 0.82, decentralized: 0.84 },
        { round: "Round 5", centralized: 0.85, decentralized: 0.87 },
        { round: "Round 10", centralized: 0.88, decentralized: 0.9 },
        { round: "Round 15", centralized: 0.9, decentralized: 0.92 },
        { round: "Round 20", centralized: 0.915, decentralized: 0.938 },
      ],
      precisionRecall: [
        { name: "Centralized FL", precision: 0.92, recall: 0.91 },
        { name: "Decentralized FL", precision: 0.94, recall: 0.935 },
      ],
      clientData: [
        { client: "Client 1", centralized: 89, decentralized: 91 },
        { client: "Client 2", centralized: 86, decentralized: 90 },
        { client: "Client 3", centralized: 93, decentralized: 95 },
        { client: "Client 4", centralized: 85, decentralized: 89 },
        { client: "Client 5", centralized: 88, decentralized: 92 },
      ],
    },
    efficientnet: {
      accuracy: { centralized: 93.1, decentralized: 95.3 },
      f1Data: [
        { round: "Round 1", centralized: 0.84, decentralized: 0.86 },
        { round: "Round 5", centralized: 0.87, decentralized: 0.89 },
        { round: "Round 10", centralized: 0.89, decentralized: 0.92 },
        { round: "Round 15", centralized: 0.92, decentralized: 0.94 },
        { round: "Round 20", centralized: 0.931, decentralized: 0.953 },
      ],
      precisionRecall: [
        { name: "Centralized FL", precision: 0.93, recall: 0.925 },
        { name: "Decentralized FL", precision: 0.948, recall: 0.955 },
      ],
      clientData: [
        { client: "Client 1", centralized: 90, decentralized: 93 },
        { client: "Client 2", centralized: 87, decentralized: 91 },
        { client: "Client 3", centralized: 94, decentralized: 96 },
        { client: "Client 4", centralized: 86, decentralized: 90 },
        { client: "Client 5", centralized: 89, decentralized: 94 },
      ],
    },
    "cnn-attention": {
      accuracy: { centralized: 89.8, decentralized: 92.4 },
      f1Data: [
        { round: "Round 1", centralized: 0.8, decentralized: 0.82 },
        { round: "Round 5", centralized: 0.83, decentralized: 0.85 },
        { round: "Round 10", centralized: 0.86, decentralized: 0.88 },
        { round: "Round 15", centralized: 0.88, decentralized: 0.91 },
        { round: "Round 20", centralized: 0.898, decentralized: 0.924 },
      ],
      precisionRecall: [
        { name: "Centralized FL", precision: 0.905, recall: 0.892 },
        { name: "Decentralized FL", precision: 0.928, recall: 0.920 },
      ],
      clientData: [
        { client: "Client 1", centralized: 87, decentralized: 90 },
        { client: "Client 2", centralized: 84, decentralized: 88 },
        { client: "Client 3", centralized: 91, decentralized: 94 },
        { client: "Client 4", centralized: 83, decentralized: 87 },
        { client: "Client 5", centralized: 86, decentralized: 91 },
      ],
    },
  };
  
  return baseData[modelId as keyof typeof baseData] || baseData.swin;
};

const chartConfig = {
  centralized: {
    label: "Centralized FL",
    color: "hsl(207, 90%, 54%)",
  },
  decentralized: {
    label: "Decentralized FL",
    color: "hsl(158, 77%, 36%)",
  },
};

export default function PerformanceCharts({
  selectedModel,
  onModelChange,
}: PerformanceChartsProps) {
  const data = getModelData(selectedModel);

  const accuracyData = [
    {
      approach: "Centralized FL",
      accuracy: data.accuracy.centralized,
    },
    {
      approach: "Decentralized FL", 
      accuracy: data.accuracy.decentralized,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Model Selection */}
      <Card className="medical-shadow">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Model Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {models.map((model) => (
              <Button
                key={model.id}
                variant={selectedModel === model.id ? "default" : "outline"}
                onClick={() => onModelChange(model.id)}
                className={
                  selectedModel === model.id
                    ? "bg-[hsl(var(--medical-blue))] hover:bg-[hsl(var(--deep-blue))]"
                    : ""
                }
              >
                {model.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Accuracy Comparison */}
        <Card className="medical-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Accuracy Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <BarChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="approach" />
                <YAxis domain={[80, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="accuracy" 
                  fill="var(--color-centralized)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* F1 Score Progress */}
        <Card className="medical-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">F1 Score Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <LineChart data={data.f1Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="round" />
                <YAxis domain={[0.75, 1]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line 
                  type="monotone" 
                  dataKey="centralized" 
                  stroke="var(--color-centralized)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="decentralized" 
                  stroke="var(--color-decentralized)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Precision vs Recall Scatter */}
        <Card className="medical-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Precision vs Recall</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <ScatterChart data={data.precisionRecall}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  type="number"
                  dataKey="recall" 
                  name="Recall"
                  domain={[0.85, 1]}
                  tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                />
                <YAxis 
                  type="number"
                  dataKey="precision" 
                  name="Precision"
                  domain={[0.85, 1]}
                  tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Scatter 
                  name="Centralized FL"
                  dataKey="precision"
                  fill="var(--color-centralized)"
                />
                <Scatter 
                  name="Decentralized FL"
                  dataKey="precision"
                  fill="var(--color-decentralized)"
                />
              </ScatterChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Client Performance Radar */}
        <Card className="medical-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Client-wise Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <RadarChart data={data.clientData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="client" />
                <PolarRadiusAxis domain={[75, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Radar
                  name="Centralized FL"
                  dataKey="centralized"
                  stroke="var(--color-centralized)"
                  fill="var(--color-centralized)"
                  fillOpacity={0.1}
                />
                <Radar
                  name="Decentralized FL"
                  dataKey="decentralized"
                  stroke="var(--color-decentralized)"
                  fill="var(--color-decentralized)"
                  fillOpacity={0.1}
                />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics Table */}
      <Card className="medical-shadow">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Detailed Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4">Metric</th>
                  <th className="py-3 px-4">Centralized FL</th>
                  <th className="py-3 px-4">Decentralized FL</th>
                  <th className="py-3 px-4">Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Accuracy</td>
                  <td className="py-3 px-4">{data.accuracy.centralized}%</td>
                  <td className="py-3 px-4 text-[hsl(var(--success-green))] font-semibold">
                    {data.accuracy.decentralized}%
                  </td>
                  <td className="py-3 px-4 text-[hsl(var(--success-green))]">
                    +{(data.accuracy.decentralized - data.accuracy.centralized).toFixed(1)}%
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">F1 Score</td>
                  <td className="py-3 px-4">{data.f1Data[data.f1Data.length - 1].centralized}</td>
                  <td className="py-3 px-4 text-[hsl(var(--success-green))] font-semibold">
                    {data.f1Data[data.f1Data.length - 1].decentralized}
                  </td>
                  <td className="py-3 px-4 text-[hsl(var(--success-green))]">
                    +{(data.f1Data[data.f1Data.length - 1].decentralized - data.f1Data[data.f1Data.length - 1].centralized).toFixed(3)}
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Precision</td>
                  <td className="py-3 px-4">{data.precisionRecall[0].precision}</td>
                  <td className="py-3 px-4 text-[hsl(var(--success-green))] font-semibold">
                    {data.precisionRecall[1].precision}
                  </td>
                  <td className="py-3 px-4 text-[hsl(var(--success-green))]">
                    +{(data.precisionRecall[1].precision - data.precisionRecall[0].precision).toFixed(3)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Communication Rounds</td>
                  <td className="py-3 px-4">150</td>
                  <td className="py-3 px-4 text-[hsl(var(--success-green))] font-semibold">
                    98
                  </td>
                  <td className="py-3 px-4 text-[hsl(var(--success-green))]">-34.7%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}