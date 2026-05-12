"use client";

import { motion } from "framer-motion";
import { FloatingBall, Racket, Sparkle, Star, TennisBall } from "./Decorations";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-6 md:pb-24 md:pt-2"
    >
      {/* soft sky gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 20%, rgba(220,230,255,.7), rgba(255,255,255,0))",
        }}
      />

      {/* tilted blue bottom block */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-44 md:h-56"
        style={{
          background: "#255CFF",
          clipPath: "polygon(0 38%, 100% 8%, 100% 100%, 0 100%)",
        }}
      />

      {/* confetti decor */}
      <Star className="absolute left-[6%] top-[12%] hidden text-royal-500/80 md:block" size={22} />
      <Star className="absolute left-[3%] top-[28%] hidden text-royal-500/40 md:block" size={14} />
      <span
        aria-hidden
        className="absolute left-[10%] top-[34%] hidden h-2 w-6 rotate-[40deg] rounded-full bg-royal-500/60 md:block"
      />
      <span
        aria-hidden
        className="absolute right-[14%] top-[10%] hidden h-2 w-7 -rotate-12 rounded-full bg-royal-300/70 md:block"
      />

      {/* floating balls */}
      <FloatingBall
        size={56}
        delay={0}
        className="absolute left-[12%] top-[44%] hidden md:block"
      />
      <FloatingBall
        size={44}
        delay={1.2}
        className="absolute right-[28%] top-[18%] hidden md:block"
      />
      <FloatingBall
        size={68}
        delay={0.6}
        className="absolute right-[3%] top-[54%] hidden md:block"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-5 pt-4 md:grid-cols-12 md:gap-6 md:pt-12">
        {/* copy */}
        <div className="md:col-span-7">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-extrabold leading-[0.95] tracking-tight text-royal-500"
            style={{ fontSize: "clamp(2.25rem, 11vw, 5.25rem)" }}
          >
            <span className="italic">OUR COURT,</span>
            <br />
            <span className="italic">OUR BLUE</span>
          </motion.h1>

          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-5 text-base font-semibold text-royal-700 md:text-lg"
          >
            팬의 스윙이 국가대표 무대를 만든다
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-7"
          >
            <a
              href="#quiz"
              className="btn-primary group relative overflow-hidden text-base md:text-lg"
            >
              <Sparkle
                size={14}
                className="text-ball-200 transition-transform group-hover:rotate-12"
              />
              퀴즈 풀고 데이비스컵 가자!
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* visual */}
        <div className="relative md:col-span-5">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto flex aspect-square w-[78%] max-w-md items-center justify-center md:w-full"
          >
            <Racket
              size={300}
              accent="#fff"
              className="absolute right-0 top-2 drop-shadow-[0_24px_40px_rgba(15,34,112,0.18)]"
            />
            <TennisBall
              size={92}
              className="absolute left-[18%] top-[42%] drop-shadow-[0_18px_24px_rgba(15,34,112,0.18)]"
            />
            <FloatingBall
              size={48}
              delay={0.2}
              className="absolute left-[12%] top-[16%]"
            />
            <FloatingBall
              size={36}
              delay={1.1}
              className="absolute right-[8%] bottom-[10%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
