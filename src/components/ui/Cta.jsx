import React from "react";
import clsx from "clsx";
import { HiPhone } from "react-icons/hi";

export default function WhatsappButton({ href, text, className = "" }) {
  return (
    <div className={clsx("hidden lg:flex items-center", className)}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
          "overflow-hidden"
        )}
      >
        <span className="relative z-10 flex items-center space-x-2">
          <HiPhone size={16} />
          <span>{text}</span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    </div>
  );
}
