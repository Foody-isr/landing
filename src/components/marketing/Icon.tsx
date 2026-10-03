const paths = {
  cloud: "M7 18a5 5 0 1 1 1-9 6 6 0 0 1 11-1 5 5 0 0 1 0 10H7Z",
  tablet: "M5 2h14v20H5zM10 18h4",
  printer: "M6 8V3h12v5M6 17H3V8h18v9h-3M6 14h12v7H6zM17 11h1",
  mic: "M9 5a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0V5Zm-3 7a6 6 0 0 0 12 0M12 18v4m-3 0h6",
  arrow: "M4 12h16m-6-6 6 6-6 6",
  chevron: "m6 9 6 6 6-6",
  check: "m5 12 4 4L19 6",
  pos: "M4 3h16v13H4zM9 16v5m6-5v5M7 21h10M7 7h4m-4 4h7",
  kitchen: "M4 10h16v10H4zM3 6h18M8 3v3m8-3v3M8 14h8",
  shop: "m3 9 2-6h14l2 6M3 9v3a3 3 0 0 0 5 2 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3 3 0 0 0 5-2V9M5 15v6h14v-6M9 21v-5h6v5",
  restaurant: "M4 3v7a3 3 0 0 0 6 0V3M7 3v18M17 3v18m0-9h4V3c-3 0-4 3-4 9Z",
  chain: "M3 14h6v7H3zM15 14h6v7h-6zM9 3h6v6H9zM12 9v3M6 14v-2h12v2",
  card: "M3 5h18v14H3zM3 9h18M6 15h4",
  globe:
    "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z",
  chart: "M4 3v18h17M8 16v-4m5 4V8m5 8V5",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m6 6 12 12M6 18 18 6",
} as const;

/** Decorative icons sharing a single visual vocabulary. */
export default function Icon({
  name,
  className = "",
}: {
  name: keyof typeof paths;
  className?: string;
}) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
