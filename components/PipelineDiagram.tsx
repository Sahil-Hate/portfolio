export default function PipelineDiagram() {
  const node = "fill-[var(--surface)] stroke-[var(--line)]";
  const label = "fill-[var(--muted)] font-mono";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 260"
      className="pipeline pointer-events-none absolute right-0 top-28 -z-10 hidden w-[46%] max-w-[520px] opacity-40 lg:block"
    >
      {/* edges */}
      <g fill="none" stroke="var(--line)" strokeWidth="1">
        <path id="e1" className="flow" d="M74 130 C 110 130, 120 130, 156 130" />
        <path id="e2" className="flow" d="M226 130 C 258 130, 264 130, 296 130" />
        <path id="e3" className="flow" d="M356 118 C 390 90, 396 62, 424 48" />
        <path id="e4" className="flow" d="M356 130 C 392 130, 398 130, 424 130" />
        <path id="e5" className="flow" d="M356 142 C 390 170, 396 198, 424 212" />
      </g>

      {/* packets traveling along edges */}
      <g fill="var(--accent)">
        <circle r="2.5">
          <animateMotion dur="2.4s" repeatCount="indefinite">
            <mpath href="#e1" />
          </animateMotion>
        </circle>
        <circle r="2.5">
          <animateMotion dur="2.4s" begin="0.8s" repeatCount="indefinite">
            <mpath href="#e2" />
          </animateMotion>
        </circle>
        <circle r="2.5">
          <animateMotion dur="2s" begin="0.3s" repeatCount="indefinite">
            <mpath href="#e3" />
          </animateMotion>
        </circle>
        <circle r="2.5">
          <animateMotion dur="2s" begin="1s" repeatCount="indefinite">
            <mpath href="#e4" />
          </animateMotion>
        </circle>
        <circle r="2.5">
          <animateMotion dur="2s" begin="1.6s" repeatCount="indefinite">
            <mpath href="#e5" />
          </animateMotion>
        </circle>
      </g>

      {/* nodes */}
      <g strokeWidth="1">
        <rect className={node} x="24" y="112" width="50" height="36" rx="6" />
        <rect className={node} x="156" y="112" width="70" height="36" rx="6" />
        <rect className={node} x="296" y="112" width="60" height="36" rx="6" />
        <rect className={node} x="424" y="30" width="72" height="36" rx="6" />
        <rect className={node} x="424" y="112" width="72" height="36" rx="6" />
        <rect className={node} x="424" y="194" width="72" height="36" rx="6" />
      </g>

      {/* labels */}
      <g className={label} fontSize="10">
        <text x="49" y="134" textAnchor="middle">req</text>
        <text x="191" y="134" textAnchor="middle">api</text>
        <text x="326" y="134" textAnchor="middle">queue</text>
        <text x="460" y="52" textAnchor="middle">worker_0</text>
        <text x="460" y="134" textAnchor="middle">worker_1</text>
        <text x="460" y="216" textAnchor="middle">worker_2</text>
      </g>
    </svg>
  );
}
