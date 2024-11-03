import React from 'react';

interface SnowflakeChartProps {
  metrics: {
    healthcare: number;
    safety: number;
    taxation: number;
    freedom: number;
    costOfLiving: number;
    qualityOfLife: number;
  };
  size?: number;
  color?: string;
}

export const SnowflakeChart: React.FC<SnowflakeChartProps> = ({ 
  metrics, 
  size = 200, 
  color = '#a3e635'
}) => {
  const center = size / 2;
  const radius = (size / 2) * 0.8;

  const getPolygonPoints = () => {
    const points = [];
    const metrics_array = Object.values(metrics);
    
    for (let i = 0; i < metrics_array.length; i++) {
      const angle = (Math.PI * 2 * i) / metrics_array.length - Math.PI / 2;
      const value = metrics_array[i] / 100;
      const x = center + radius * value * Math.cos(angle);
      const y = center + radius * value * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    
    return points.join(' ');
  };

  const getBackgroundCircles = () => {
    return [0.25, 0.5, 0.75, 1].map((ratio, index) => (
      <circle
        key={index}
        cx={center}
        cy={center}
        r={radius * ratio}
        fill="none"
        stroke="#2a3441"
        strokeWidth="1"
      />
    ));
  };

  const getAxisLines = () => {
    const metrics_array = Object.values(metrics);
    return Object.keys(metrics).map((_, i) => {
      const angle = (Math.PI * 2 * i) / metrics_array.length - Math.PI / 2;
      const x2 = center + radius * Math.cos(angle);
      const y2 = center + radius * Math.sin(angle);
      
      return (
        <line
          key={i}
          x1={center}
          y1={center}
          x2={x2}
          y2={y2}
          stroke="#2a3441"
          strokeWidth="1"
        />
      );
    });
  };

  const getLabels = () => {
    const metrics_array = Object.keys(metrics);
    return metrics_array.map((label, i) => {
      const angle = (Math.PI * 2 * i) / metrics_array.length - Math.PI / 2;
      const x = center + (radius + 25) * Math.cos(angle);
      const y = center + (radius + 25) * Math.sin(angle);
      
      return (
        <text
          key={i}
          x={x}
          y={y}
          fill="#94a3b8"
          fontSize="12"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {label.replace(/([A-Z])/g, ' $1').trim()}
        </text>
      );
    });
  };

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {getBackgroundCircles()}
      {getAxisLines()}
      <polygon
        points={getPolygonPoints()}
        fill={color}
        fillOpacity="0.3"
        stroke={color}
        strokeWidth="2"
      />
      {getLabels()}
    </svg>
  );
};