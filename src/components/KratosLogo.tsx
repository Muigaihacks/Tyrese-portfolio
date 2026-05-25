"use client";

interface KratosLogoProps {
  showTagline?: boolean;
  size?: "small" | "medium" | "large";
  layout?: "inline" | "stacked";
  variant?: "light" | "dark";
  className?: string;
}

const sizeClasses = {
  small:  "text-base",
  medium: "text-xl",
  large:  "text-4xl",
};

const taglineSize = {
  small:  "text-[10px]",
  medium: "text-[11px]",
  large:  "text-sm",
};

/**
 * Kratos Systems wordmark.
 *
 *   layout="inline"   → KRATOS SYSTEMS  (single line, default, use in navbar)
 *   layout="stacked"  → KRATOS / SYSTEMS (two lines, use in hero or footer)
 *
 * Tagline below is opt-in via `showTagline`.
 */
export default function KratosLogo({
  showTagline = false,
  size = "medium",
  layout = "inline",
  variant = "dark",
  className = "",
}: KratosLogoProps) {
  const isDark = variant === "dark";
  const textColor    = isDark ? "text-white"        : "text-surface-ink";
  const taglineColor = isDark ? "text-kratos-200"   : "text-kratos-700";

  const wordmark =
    layout === "stacked" ? (
      <div className="leading-[0.95]">
        <div>KRATOS</div>
        <div>SYSTEMS</div>
      </div>
    ) : (
      <div className="leading-none whitespace-nowrap">KRATOS SYSTEMS</div>
    );

  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className={`font-display font-semibold uppercase tracking-wordmark ${sizeClasses[size]} ${textColor}`}
      >
        {wordmark}
      </div>
      {showTagline && (
        <p
          className={`font-mono uppercase tracking-[0.2em] mt-2 ${taglineSize[size]} ${taglineColor}`}
        >
          You dream it · we build it
        </p>
      )}
    </div>
  );
}
