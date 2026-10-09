import type { ReactNode } from "react";

/** Wraps each word in a mask so Motion can slide it up. Use inside a heading with data-split. */
export default function Split({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="split-mask">
          <span className="w">{w}</span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

export function SplitHeading({
  as: Tag = "h2",
  text,
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  text: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Tag className={className} data-split>
      <Split text={text} />
      {children}
    </Tag>
  );
}
