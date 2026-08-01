import Link from "next/link";

const variantClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  icon: Icon,
  iconPosition = "left",
  type = "button",
  onClick,
  ariaLabel,
  ...props
}) {
  const classes = `${variantClasses[variant] ?? variantClasses.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: href.startsWith("tel:") || href.startsWith("mailto:") ? undefined : "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel} {...props}>
      {content}
    </button>
  );
}
