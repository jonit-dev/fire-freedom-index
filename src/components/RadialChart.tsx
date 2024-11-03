import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

interface RadialChartProps {
  metrics: {
    healthcare: number;
    safety: number;
    taxation: number;
    freedom: number;
    costOfLiving: number;
    qualityOfLife: number;
  };
}

export const RadialChart: React.FC<RadialChartProps> = ({ metrics }) => {
  const data = Object.entries(metrics).map(([key, value]) => ({
    name: key.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').slice(1),
    value,
    fill: `hsl(${value * 1.2}, 70%, 50%)`
  }));

  return (
    <RadialBarChart
      width={400}
      height={400}
      innerRadius="30%"
      outerRadius="80%"
      data={data}
      startAngle={0}
      endAngle={360}
    >
      <RadialBar
        minAngle={15}
        background
        clockWise={true}
        dataKey="value"
        cornerRadius={15}
      />
      <Tooltip />
      <Legend
        iconSize={10}
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
    </RadialBarChart>
  );
};