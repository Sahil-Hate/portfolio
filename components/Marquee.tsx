const keywords = [
  "distributed systems",
  "ML infrastructure",
  "agentic AI",
  "backend engineering",
  "retrieval pipelines",
  "Kafka",
  "Redis",
  "LangGraph",
  "Kubernetes",
  "PostgreSQL",
  "WebSockets",
  "gRPC",
];

export default function Marquee() {
  const row = keywords.map((word) => (
    <span key={word} className="mx-6 flex items-center gap-6 whitespace-nowrap font-mono text-sm text-muted">
      {word}
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
    </span>
  ));

  return (
    <div aria-hidden="true" className="marquee overflow-hidden border-y border-line py-4">
      <div className="marquee-track">
        <div className="flex">{row}</div>
        <div className="flex">{row}</div>
      </div>
    </div>
  );
}
