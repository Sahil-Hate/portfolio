export type Stat = {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
};

// All figures come from the Qualcomm internship bullets on this site.
export const stats: readonly Stat[] = [
  { value: 100, suffix: "K+", label: "vector embeddings indexed and served" },
  { value: 250, suffix: "+", label: "enterprise data sources in retrieval infra" },
  { value: 65, suffix: "%", label: "improvement in complex query resolution accuracy" },
  { value: 20, suffix: "%", label: "reduction in production inference latency" },
] as const;
