import RevealOnScroll from "./RevealOnScroll";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  as: HeadingTag = "h2",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <RevealOnScroll className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <HeadingTag
        className={`text-balance font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </HeadingTag>
      {subtitle && (
        <p className={`text-balance text-base sm:text-lg ${light ? "text-white/75" : "text-ink-500"}`}>
          {subtitle}
        </p>
      )}
    </RevealOnScroll>
  );
}
