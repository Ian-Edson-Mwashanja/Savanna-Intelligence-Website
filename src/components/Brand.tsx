import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "../data";

export function Facebook({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 21v-8h3l.5-4H14V7c0-1 .4-1.5 1.7-1.5H18V2.2A29 29 0 0 0 15 2c-3 0-5 1.8-5 5v2H7v4h3v8z" />
    </svg>
  );
}
export function Instagram({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function Linkedin({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 9h4v12H4zM6 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4M10 9h4v1.5c.8-1.2 1.9-1.8 3.3-1.8 2.6 0 3.7 1.7 3.7 4.7V21h-4v-6.7c0-1.5-.4-2.3-1.4-2.3-1.1 0-1.6.8-1.6 2.3V21h-4z" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="Savanna Intelligence home"
    >
      <svg
        className="brand-symbol"
        width="54"
        height="46"
        viewBox="0 0 64 52"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 21C14 8 38 2 57 8" stroke="#FF8A00" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M44 16H23L17 25H35L29 36H8"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        <path d="M49 17L40 37" stroke="#FF8A00" strokeWidth="8" />
        <path
          d="M6 45C22 38 41 39 56 43"
          stroke="#FF8A00"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="brand-name">
        SAVANNA<span>INTELLIGENCE</span>
      </span>
    </a>
  );
}

export function WhatsAppLink({
  children = "Let’s talk on WhatsApp",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={`whatsapp-link ${className}`} href={whatsappUrl} target="_blank" rel="noreferrer">
      <MessageCircle size={18} />
      {children}
      <ArrowUpRight size={16} />
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "light" : ""} ${center ? "center" : ""}`}>
      <span className="eyebrow">
        <span />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
