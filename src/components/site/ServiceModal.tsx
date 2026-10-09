import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Any element that links to a service's own page (/services/<id>).
 * Kept as its own component (instead of plain <Link>) so every call
 * site — header mega-menu, footer, problem cards, service grid —
 * stays a one-line change if the URL pattern ever changes.
 */
export function ServiceLink({
  id,
  className,
  children,
  onPick,
  ...rest
}: { id: string; className?: string; children: ReactNode; onPick?: () => void } & Omit<React.ComponentProps<typeof Link>, "href" | "onClick">) {
  return (
    <Link href={`/services/${id}`} className={className} onClick={onPick} {...rest}>
      {children}
    </Link>
  );
}
