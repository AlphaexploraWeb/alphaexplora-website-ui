export function FlowLineLayer() {
  return (
    <div className="ae-flow-line-layer" aria-hidden="true">
      <svg
        className="ae-flow-line-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ae-flow-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#0B5CFF" stopOpacity="0" />
            <stop offset="18%" stopColor="#0B5CFF" stopOpacity="0.28" />
            <stop offset="52%" stopColor="#00C2FF" stopOpacity="0.62" />
            <stop offset="82%" stopColor="#0B5CFF" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
          </linearGradient>
          <filter id="ae-flow-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          id="ae-flow-motion-path"
          className="ae-flow-path ae-flow-path-soft"
          d="M-80 760 C 210 720, 340 650, 560 610 C 780 570, 850 450, 1060 410 C 1260 372, 1420 430, 1520 540"
        />
        <path
          className="ae-flow-path ae-flow-path-main"
          d="M-80 760 C 210 720, 340 650, 560 610 C 780 570, 850 450, 1060 410 C 1260 372, 1420 430, 1520 540"
        />
        <path
          className="ae-flow-path ae-flow-path-thread"
          d="M-120 830 C 180 790, 390 740, 620 690 C 860 638, 940 560, 1160 535 C 1320 516, 1440 560, 1540 650"
        />
        <circle className="ae-flow-signal-svg" r="7">
          <animateMotion dur="14s" repeatCount="indefinite" rotate="0">
            <mpath href="#ae-flow-motion-path" />
          </animateMotion>
        </circle>
      </svg>

      <span className="ae-flow-node ae-flow-node-one" />
      <span className="ae-flow-node ae-flow-node-two" />
      <span className="ae-flow-node ae-flow-node-three" />
    </div>
  )
}
