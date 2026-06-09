import type { IconName } from "../models/homepage"

interface IconProps {
  name: IconName
  className?: string
}

const paths: Record<IconName, string[]> = {
  ai: [
    "M12 3.5v3",
    "M12 17.5v3",
    "M4.5 12h3",
    "M16.5 12h3",
    "M7.8 7.8l2.1 2.1",
    "M14.1 14.1l2.1 2.1",
    "M16.2 7.8l-2.1 2.1",
    "M9.9 14.1l-2.1 2.1",
    "M10 10h4v4h-4z",
  ],
  analytics: [
    "M5 19V9",
    "M12 19V5",
    "M19 19v-7",
    "M4 19h16",
    "M4.5 13.5l4-4 4 3 5-6",
  ],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  cloud: [
    "M7 18h10.5a4 4 0 0 0 .5-7.96A6 6 0 0 0 6.2 9.3 4.5 4.5 0 0 0 7 18Z",
  ],
  code: ["M8 8l-4 4 4 4", "M16 8l4 4-4 4", "M14 5l-4 14"],
  close: ["M6 6l12 12", "M18 6 6 18"],
  growth: ["M4 17l6-6 4 4 6-8", "M15 7h5v5"],
  home: ["M4.5 11.5 12 5l7.5 6.5", "M6.5 10.5V19h11v-8.5", "M10 19v-5h4v5"],
  marketing: [
    "M5 13.5v-5l12-3v12l-12-4Z",
    "M8 14l1.5 5",
    "M17 8.5l2-1",
    "M17 14.5l2 1",
  ],
  menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
  search: ["M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z", "M16 16l4 4"],
  shield: [
    "M12 3.5 19 6v5.5c0 4.4-2.9 7.5-7 9-4.1-1.5-7-4.6-7-9V6l7-2.5Z",
    "M9 12l2 2 4-5",
  ],
  spark: [
    "M12 3.5l1.4 5.1L18.5 10l-5.1 1.4L12 16.5l-1.4-5.1L5.5 10l5.1-1.4L12 3.5Z",
    "M18 15.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z",
  ],
  support: [
    "M5 12a7 7 0 0 1 14 0",
    "M5 12v3a2 2 0 0 0 2 2h1v-6H7a2 2 0 0 0-2 2Z",
    "M19 12v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z",
    "M16 17c-.5 2-2 3-4 3",
  ],
  target: [
    "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
    "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    "M12 12h8",
  ],
}

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.45"
      viewBox="0 0 24 24"
    >
      {paths[name].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  )
}
