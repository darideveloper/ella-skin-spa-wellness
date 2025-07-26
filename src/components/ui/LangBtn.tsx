import clsx from "clsx";
import { useState, useEffect } from "react";

interface LangBtnProps {
  className?: string;
}

export default function LangBtn({ className = "" }: LangBtnProps) {
  const [targetHref, setTargetHref] = useState("/es");
  const [buttonLabel, setButtonLabel] = useState("ES");

  useEffect(() => {
    // Get current path from window.location on client side
    const path = window.location.pathname;
    
    // Extract the path without the language prefix
    let pathWithoutLang = path;
    if (path.startsWith("/es/")) {
      pathWithoutLang = path.substring(4); // Remove "/es/"
    } else if (path.startsWith("/en/")) {
      pathWithoutLang = path.substring(4); // Remove "/en/"
    } else if (path === "/es") {
      pathWithoutLang = "/";
    } else if (path === "/en") {
      pathWithoutLang = "/";
    }

    // Determine target language and build target URL
    const isCurrentlySpanish = path.startsWith("/es") || path === "/es";
    const targetLang = isCurrentlySpanish ? "en" : "es";
    const href = `/${targetLang}/${pathWithoutLang}`;
    
    setTargetHref(href);
    setButtonLabel(isCurrentlySpanish ? "EN" : "ES");
  }, []);

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