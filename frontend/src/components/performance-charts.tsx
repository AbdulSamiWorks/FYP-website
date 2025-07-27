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

const getModelData = (modelId: string) => {
  const baseData = {
    swin: {
      accuracy: { centralized: 99, decentralized: 99 },
      f1Data: [
        { round: "Round 1", centralized: 0.85, decentralized: 0.84 },
        { round: "Round 5", centralized: 0.88, decentralized: 0.87 },
        { round: "Round 10", centralized: 0.91, decentralized: 0.90 },
        { round: "Round 15", centralized: 0.93, decentralized: 0.92 },
        { round: "Round 20", centralized: 0.94, decentralized: 0.93 },
      ],
      precisionRecall: [
        { name: "Centralized FL", precision: 0.95, recall: 0.94 },
        { name: "Decentralized FL", precision: 0.94, recall: 0.93 },
      ],
      clientData: [
        { client: "Client 1", centralized: 98, decentralized: 98},
        { client: "Client 2", centralized: 97, decentralized: 96 },
        { client: "Client 3", centralized: 99, decentralized: 98 },
        { client: "Client 4", centralized: 96, decentralized: 95 },
        { client: "Client 5", centralized: 98, decentralized: 97 },
      ],
    },
    mobilenet: {
      accuracy: { centralized: 97, decentralized: 96 },
      f1Data: [
        { round: "Round 1", centralized: 0.80, decentralized: 0.79 },
        { round: "Round 5", centralized: 0.83, decentralized: 0.82 },
        { round: "Round 10", centralized: 0.86, decentralized: 0.85 },
        { round: "Round 15", centralized: 0.89, decentralized: 0.88 },
        { round: "Round 20", centralized: 0.91, decentralized: 0.90 },
      ],
      precisionRecall: [
        { name: "Centralized FL", precision: 0.91, recall: 0.90 },
        { name: "Decentralized FL", precision: 0.90, recall: 0.89 },
      ],
      clientData: [
        { client: "Client 1", centralized: 96, decentralized: 95 },
        { client: "Client 2", centralized: 95, decentralized: 94 },
        { client: "Client 3", centralized: 97, decentralized: 96 },
        { client: "Client 4", centralized: 94, decentralized: 93 },
        { client: "Client 5", centralized: 96, decentralized: 95 },
      ],
    },
    efficientnet: {
      accuracy: { centralized: 98, decentralized: 97 },
      f1Data: [
        { round: "Round 1", centralized: 0.82, decentralized: 0.81 },
        { round: "Round 5", centralized: 0.85, decentralized: 0.84 },
        { round: "Round 10", centralized: 0.88, decentralized: 0.87 },
        { round: "Round 15", centralized: 0.91, decentralized: 0.90 },
        { round: "Round 20", centralized: 0.93, decentralized: 0.92 },
      ],
      precisionRecall: [
        { name: "Centralized FL", precision: 0.93, recall: 0.92 },
        { name: "Decentralized FL", precision: 0.92, recall: 0.91 },
      ],
      clientData: [
        { client: "Client 1", centralized: 97, decentralized: 96 },
        { client: "Client 2", centralized: 96, decentralized: 95 },
        { client: "Client 3", centralized: 98, decentralized: 97 },
        { client: "Client 4", centralized: 95, decentralized: 94 },
        { client: "Client 5", centralized: 97, decentralized: 96 },
      ],
    },
    "cnn-attention": {
      accuracy: { centralized: 96, decentralized: 95 },
      f1Data: [
        { round: "Round 1", centralized: 0.78, decentralized: 0.77 },
        { round: "Round 5", centralized: 0.81, decentralized: 0.80 },
        { round: "Round 10", centralized: 0.84, decentralized: 0.83 },
        { round: "Round 15", centralized: 0.87, decentralized: 0.86 },
        { round: "Round 20", centralized: 0.89, decentralized: 0.88 },
      ],
      precisionRecall: [
        { name: "Centralized FL", precision: 0.89, recall: 0.88 },
        { name: "Decentralized FL", precision: 0.88, recall: 0.87 },
      ],
      clientData: [
        { client: "Client 1", centralized: 94, decentralized: 93 },
        { client: "Client 2", centralized: 93, decentralized: 92 },
        { client: "Client 3", centralized: 96, decentralized: 95 },
        { client: "Client 4", centralized: 92, decentralized: 91 },
        { client: "Client 5", centralized: 95, decentralized: 94 },
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
                  <td className="py-3 px-4">30</td>
                  <td className="py-3 px-4 text-[hsl(var(--success-green))] font-semibold">
                    30
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