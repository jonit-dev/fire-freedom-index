export interface CountryMetrics {
  id: string;
  name: string;
  flag: string;
  metrics: {
    healthcare: number;
    safety: number;
    taxation: number;
    freedom: number;
    costOfLiving: number;
    qualityOfLife: number;
  };
  description: string;
  imageUrl: string;
}