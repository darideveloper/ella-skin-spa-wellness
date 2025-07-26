// Libs
import { useState, useEffect } from "react";
import clsx from "clsx";

// Components
import Cta from './Cta'

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
    <Cta
      href={targetHref}
      text={buttonLabel}
      className={clsx('lang-btn', className)}
    />
  );
}