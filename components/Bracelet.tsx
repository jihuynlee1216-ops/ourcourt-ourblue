"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Real photo of the BLEUM tennis bracelet given out at the event.
 * Wrapped with a soft glow + subtle entrance animation so it feels
 * like a special reward without altering the actual product image.
 */
export function Bracelet({ className = "" }: { className?: string }) {
  return (
    <div className={"relative mx-auto w-full max-w-md select-none " + className}>
      {/* soft halo behind the bracelet */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(126,155,255,0.55), rgba(126,155,255,0))",
        }}
      />

      {/* sparkle dots layered on top */}
      <Sparkle className="absolute left-[12%] top-[18%]" delay={0} />
      <Sparkle className="absolute right-[18%] top-[12%]" delay={0.6} />
      <Sparkle className="absolute right-[10%] bottom-[18%]" delay={1.1} />

      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <Image
          src="/images/bracelet.png"
          alt="BLEUM 테니스 팔찌 — 100점 달성 기념 굿즈"
          width={1200}
          height={620}
          priority={false}
          className="relative h-auto w-full drop-shadow-[0_24px_36px_rgba(15,34,112,0.22)]"
        />
      </motion.div>
    </div>
  );
}

function Sparkle({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 14 14"
      aria-hidden
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <path
        d="M7 0l1.6 5.4L14 7l-5.4 1.6L7 14l-1.6-5.4L0 7l5.4-1.6z"
        fill="#fff"
      />
    </motion.svg>
  );
}
