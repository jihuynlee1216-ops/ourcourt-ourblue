"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Reward asset displayed on the 100-pt quiz result screen.
 * (Historically named `Bracelet` — keeping the name for backwards-compatible
 * imports; the actual artwork is now the BLEUM player-jersey acrylic keyring set.)
 */
export function Bracelet({ className = "" }: { className?: string }) {
  return (
    <div className={"relative mx-auto w-full max-w-md select-none " + className}>
      {/* soft halo behind the keyrings */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-44 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(126,155,255,0.5), rgba(126,155,255,0))",
        }}
      />

      {/* sparkle dots layered on top */}
      <Sparkle className="absolute left-[10%] top-[8%]" delay={0} />
      <Sparkle className="absolute right-[14%] top-[6%]" delay={0.6} />
      <Sparkle className="absolute right-[6%] bottom-[24%]" delay={1.1} />

      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <Image
          src="/images/keyring.png"
          alt="BLEUM 선수 유니폼 아크릴 키링 — 100점 달성 기념 굿즈"
          width={1178}
          height={762}
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
