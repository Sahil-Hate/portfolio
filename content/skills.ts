export type SkillGroup = {
  label: string;
  items: readonly string[];
};

export const skills: readonly SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "Python", "C/C++", "Go", "JavaScript", "SQL"],
  },
  {
    label: "Backend and Distributed Systems",
    items: ["Node.js", "FastAPI", "Django", "REST APIs", "gRPC", "WebSockets", "Kafka", "React.js"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB"],
  },
  {
    label: "ML and AI",
    items: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "LangChain", "LangGraph", "RAG", "LLMs", "Agentic AI"],
  },
  {
    label: "Cloud and Infrastructure",
    items: ["GCP", "AWS", "Oracle Cloud", "Docker", "Kubernetes"],
  },
  {
    label: "Tools and Testing",
    items: ["Git", "GitHub Actions", "Jenkins", "Linux", "Bash", "JUnit"],
  },
] as const;
