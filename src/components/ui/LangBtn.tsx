import clsx from "clsx";

interface LangBtnProps {
  className?: string;
}

export default function LangBtn({ className = "" }: LangBtnProps) {
  // Get current path from window.location
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  const targetHref = currentPath.startsWith("/es")
    ? currentPath.replace("/es", "/en")
    : currentPath.startsWith("/en")
      ? currentPath.replace("/en", "/es")
      : "/es" + currentPath;

  const buttonLabel = currentPath.startsWith("/es") ? "EN" : "ES";

  return (
    <a
      href={targetHref}
      className={clsx(
        "relative",
        "bg-gradient-to-r",
        "from-pink",
        "to-pink-light",
        "text-brown",
        "px-8",
        "py-4",
        "rounded-full",
        "font-bold",
        "text-sm",
        "transition-all",
        "duration-300",
        "hover:scale-110",
        "shadow-lg",
        "hover:shadow-2xl",
        "group",
        "overflow-hidden",
        "inline-block",
        className,
      )}
    >
      <span className={clsx("relative", "z-10")}>
        {buttonLabel}
      </span>

      <div
        className={clsx(
          "absolute",
          "inset-0",
          "bg-gradient-to-r",
          "from-white/20",
          "to-transparent",
          "opacity-0",
          "group-hover:opacity-100",
          "transition-opacity",
          "duration-300"
        )}
      >
      </div>
    </a>
  );
}