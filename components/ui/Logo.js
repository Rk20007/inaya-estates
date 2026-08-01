import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Logo({
  href,
  size = 36,
  wordmarkClassName = "font-display text-lg font-bold tracking-tight text-ink-900",
  subtitle,
  subtitleClassName = "text-xs leading-tight text-ink-400",
  className = "",
}) {
  const content = (
    <>
      <LogoMark size={size} className="shrink-0 transition-transform group-hover:scale-105" />
      <span className="leading-tight">
        <span className={`${wordmarkClassName}`}>
          Inaya <span className="text-accent">Estates</span>
        </span>
        {subtitle && <span className={`block ${subtitleClassName}`}>{subtitle}</span>}
      </span>
    </>
  );

  const wrapperClassName = `group flex items-center gap-2 ${className}`;

  if (href) {
    return (
      <Link href={href} className={wrapperClassName}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClassName}>{content}</div>;
}
