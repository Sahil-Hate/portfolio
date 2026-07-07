export type Role = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  bullets: readonly string[];
};

export const experience: readonly Role[] = [
  {
    company: "Medtronic (MiniMed)",
    title: "Software Development Engineer Co-Op",
    location: "Los Angeles, CA",
    start: "Feb 2026",
    end: "May 2026",
    bullets: [
      "Developed a CGM sensor simulation application supporting device pairing and real-time event simulation, and collaborated with cross-functional teams to resolve software issues through log analysis, execution tracing, and protocol validation",
      "Designed end-to-end validation and regression test scenarios across 10 engineering workflows for safety-critical diabetes management features",
    ],
  },
  {
    company: "Qualcomm",
    title: "Software Engineer Intern",
    location: "San Diego, CA",
    start: "May 2025",
    end: "Aug 2025",
    bullets: [
      "Designed and deployed a distributed multi-agent AI platform using Python, LangGraph, and Claude Opus 4, with modular execution pipelines, contextual memory management, and dynamic task orchestration across 8 specialized agents, improving complex query resolution accuracy by 65%",
      "Built retrieval infrastructure indexing and serving 100K+ vector embeddings across 250+ enterprise data sources using FAISS and ChromaDB, reducing semantic search latency from ~7s to under 2s",
      "Optimized production APIs through request pipeline profiling and asynchronous execution, reducing inference latency by 20% while supporting thousands of concurrent requests",
    ],
  },
  {
    company: "Oracle",
    title: "Software Engineer",
    location: "Mumbai, India",
    start: "Jun 2023",
    end: "Jul 2024",
    bullets: [
      "Architected Java EE-based microservices for Oracle Banking Digital Experience (OBDX), supporting core banking modules and high-volume transactions for financial institutions",
      "Engineered secure authentication services integrating multi-factor authentication and adaptive risk-based access control into enterprise financial systems",
      "Redesigned API architectures with cross-functional teams, reducing integration latency by ~500 ms",
      "Streamlined CI/CD with Jenkins for Java EE deployments on Oracle Cloud Infrastructure, and led root-cause analysis of production incidents that improved platform uptime by 20%",
    ],
  },
  {
    company: "Appectual IT Solutions",
    title: "Software Development Intern",
    location: "Mumbai, India",
    start: "Feb 2023",
    end: "May 2023",
    bullets: [
      "Built full-stack web apps with Laravel, React.js, and MySQL",
    ],
  },
] as const;
