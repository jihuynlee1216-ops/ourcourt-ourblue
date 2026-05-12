"use client";

import { motion } from "framer-motion";

type CommonProps = { className?: string; size?: number };

export function TennisBall({ className = "", size = 40 }: CommonProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="tb-grad" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#F1F89B" />
          <stop offset="100%" stopColor="#C8E04A" />
        </radialGradient>
      </defs>
      <circle cx="30" cy="30" r="28" fill="url(#tb-grad)" stroke="#7B9B17" strokeWidth="1.5" />
      <path
        d="M6 22 Q30 32 54 22"
        stroke="#fff"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M6 38 Q30 28 54 38"
        stroke="#fff"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Racket({ className = "", size = 200, accent = "#fff" }: CommonProps & { accent?: string }) {
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 200 230"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g transform="rotate(20 100 115)">
        <ellipse cx="100" cy="80" rx="62" ry="72" fill={accent} stroke="#0F2270" strokeWidth="4" />
        <g stroke="#0F2270" strokeWidth="1.5" opacity=".85">
          {[...Array(9)].map((_, i) => (
            <line key={"h" + i} x1="42" x2="158" y1={28 + i * 13} y2={28 + i * 13} />
          ))}
          {[...Array(9)].map((_, i) => (
            <line key={"v" + i} y1="14" y2="146" x1={50 + i * 13} x2={50 + i * 13} />
          ))}
        </g>
        <ellipse cx="100" cy="80" rx="62" ry="72" fill="none" stroke="#0F2270" strokeWidth="5" />
        <rect x="92" y="148" width="16" height="58" rx="6" fill="#255CFF" stroke="#0F2270" strokeWidth="4" />
        <rect x="90" y="200" width="20" height="14" rx="4" fill="#0F2270" />
        <rect x="94" y="156" width="12" height="40" fill="#fff" opacity=".25" />
      </g>
    </svg>
  );
}

export function Trophy({ className = "", size = 64 }: CommonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M16 10h32v10c0 9-7 16-16 16S16 29 16 20V10z"
        fill="#255CFF"
      />
      <path d="M16 14H8c0 7 4 11 10 12" stroke="#255CFF" strokeWidth="3" fill="none" />
      <path d="M48 14h8c0 7-4 11-10 12" stroke="#255CFF" strokeWidth="3" fill="none" />
      <rect x="26" y="36" width="12" height="10" fill="#255CFF" />
      <rect x="20" y="46" width="24" height="6" rx="2" fill="#255CFF" />
      <path d="M27 18l3 4 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Group({ className = "", size = 64 }: CommonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="22" cy="22" r="9" fill="#255CFF" />
      <path d="M6 50c0-9 7-14 16-14s16 5 16 14" fill="#255CFF" />
      <circle cx="44" cy="20" r="8" fill="#7E9BFF" />
      <path d="M30 48c0-8 6-12 14-12s14 4 14 12" fill="#7E9BFF" />
    </svg>
  );
}

export function RacketIcon({ className = "", size = 64 }: CommonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse cx="26" cy="22" rx="16" ry="18" fill="none" stroke="#255CFF" strokeWidth="3" />
      <line x1="14" y1="14" x2="38" y2="30" stroke="#255CFF" strokeWidth="1.5" />
      <line x1="38" y1="14" x2="14" y2="30" stroke="#255CFF" strokeWidth="1.5" />
      <line x1="26" y1="6" x2="26" y2="40" stroke="#255CFF" strokeWidth="1.5" />
      <line x1="10" y1="22" x2="42" y2="22" stroke="#255CFF" strokeWidth="1.5" />
      <rect x="34" y="34" width="6" height="22" rx="3" transform="rotate(-30 34 34)" fill="#255CFF" />
    </svg>
  );
}

export function ClipboardIcon({ className = "", size = 64 }: CommonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="14" y="12" width="36" height="44" rx="5" fill="#fff" stroke="#fff" strokeWidth="2" />
      <rect x="14" y="12" width="36" height="44" rx="5" fill="#fff" />
      <rect x="22" y="8" width="20" height="10" rx="3" fill="#fff" />
      <path d="M22 28l4 4 8-9" stroke="#255CFF" strokeWidth="3" strokeLinecap="round" fill="none" />
      <line x1="22" y1="40" x2="42" y2="40" stroke="#255CFF" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="48" x2="36" y2="48" stroke="#255CFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function FloatingBall({
  className = "",
  size = 40,
  delay = 0,
  amplitude = 14,
}: CommonProps & { delay?: number; amplitude?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, -amplitude, 0], rotate: [0, 8, -8, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <TennisBall size={size} />
    </motion.div>
  );
}

export function Sparkle({ className = "", size = 14 }: CommonProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      className={className}
      aria-hidden
    >
      <path d="M7 0l1.6 5.4L14 7l-5.4 1.6L7 14l-1.6-5.4L0 7l5.4-1.6z" fill="currentColor" />
    </svg>
  );
}

export function Star({ className = "", size = 24 }: CommonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2l2.39 7.36H22l-6.18 4.49L18.18 22 12 17.51 5.82 22l2.36-8.15L2 9.36h7.61z"
        fill="currentColor"
      />
    </svg>
  );
}
