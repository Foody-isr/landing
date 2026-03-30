import Link from 'next/link';

interface Segment {
  label: string;
  href?: string;
}

/** Server-safe breadcrumb. RTL separator flip handled via CSS [dir="rtl"]. */
export default function Breadcrumb({ segments }: { segments: Segment[] }) {
  return (
    <nav className="help-breadcrumb" aria-label="Breadcrumb">
      {segments.map((seg, i) => (
        <span key={i} className="help-breadcrumb-item">
          {i > 0 && <span className="help-breadcrumb-sep" aria-hidden="true">›</span>}
          {seg.href ? (
            <Link href={seg.href}>{seg.label}</Link>
          ) : (
            <span className="help-breadcrumb-current">{seg.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
