import { ReactNode } from 'react';

export enum TopicId {
  TURUNAN = 'turunan',
  ALJABAR = 'aljabar',
  TRIGONOMETRI = 'trigonometri',
  LIMIT = 'limit',
  INTEGRAL = 'integral',
}

export interface ExampleProblem {
  title: string;
  question: string;
  solution: ReactNode; // Using ReactNode to allow bolding/formatting
}

export interface ChartConfig {
  type: 'line' | 'area';
  dataGenerator: () => any[];
  dataKey: string;
  color: string;
  label: string;
  domainY?: [number, number];
}

export interface TopicContent {
  id: TopicId;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  material: ReactNode;
  examples: ExampleProblem[];
  chartConfig?: ChartConfig;
}