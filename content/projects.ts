export type Project = {
  name: string;
  blurb: string;
  stack: readonly string[];
  outcomes: readonly string[];
  links: { github?: string; demo?: string; paper?: boolean };
  size: "large" | "small";
};

export const projects: readonly Project[] = [
  {
    name: "Distributed Data Analytics Engine",
    blurb:
      "A platform for running heavy analytics on large datasets without blocking the request path. An API ingests 100K+ row datasets, a Redis-backed task queue fans work out to a scalable worker pool, and a MapReduce-style pipeline merges partial metrics into real-time global analytics.",
    stack: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "React"],
    outcomes: [
      "~3x latency reduction through parallel processing across the worker pool",
      "Real-time job monitoring streamed to a React dashboard over Redis Pub/Sub and WebSockets",
    ],
    links: {},
    size: "large",
  },
  {
    name: "Real-Time Messaging System",
    blurb:
      "A horizontally scalable real-time messaging backend. Redis-backed socket.io adapters handle queuing, ordering, and state synchronization across distributed Node.js instances.",
    stack: ["Node.js", "TypeScript", "React", "socket.io", "WebSockets", "Redis"],
    outcomes: ["Sustains sub-500 ms message latency across instances"],
    links: {},
    size: "small",
  },
  {
    name: "Digital Carbon Footprint Platform",
    blurb:
      "An ML platform that estimates and predicts the digital carbon footprint of mobile devices. A modular prediction pipeline with feature engineering and inference services runs on a stateless Flask backend built for concurrent requests.",
    stack: ["Java", "Python", "Flask", "REST APIs", "PostgreSQL"],
    outcomes: [
      "86% prediction accuracy",
      "Basis for the IEEE-ICAST 2023 publication",
    ],
    links: {
      github: "https://github.com/Sahil-Hate/Prdicition-of-Digital-Carbon-Footprint",
      paper: true,
    },
    size: "small",
  },
  {
    name: "Agentic RAG Document Assistant",
    blurb:
      "A multi-step agentic document Q&A system. Questions run through a LangGraph retrieval pipeline backed by ChromaDB, served with FastAPI and Streamlit, and shipped with containerized deployment and GitHub Actions CI.",
    stack: ["LangGraph", "ChromaDB", "FastAPI", "Streamlit", "Docker", "Helm", "GitHub Actions"],
    outcomes: [
      "Retrieval, orchestration, and serving packaged as one deployable unit with Docker, Helm, and CI",
    ],
    links: { github: "https://github.com/Sahil-Hate/agentic-rag-assistant" },
    size: "large",
  },
] as const;
