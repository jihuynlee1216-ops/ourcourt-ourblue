"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkle, TennisBall } from "./Decorations";

/**
 * Entry banner on the homepage (placed below the Quiz section) that
 * leads to the /predict page.
 */
export function PredictBanner() {
  return (
    <section
      id="predict-cta"
      className="relative bg-[linear-gradient(180deg,#ffffff,#F4F7FF)] py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-royal-700 via-royal-500 to-royal-700 p-7 text-white shadow-card md:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
            }}
          />
          <TennisBall
            size={52}
            className="pointer-events-none absolute -right-3 -top-3 rotate-12 drop-shadow-[0_18px_24px_rgba(0,0,0,0.3)] md:right-8 md:top-8"
          />
          <GiftIcon className="pointer-events-none absolute -bottom-4 -left-4 h-32 w-32 text-white/10 md:bottom-2 md:left-6 md:h-36 md:w-36" />

          <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-[1.5fr_auto] md:gap-10">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[.18em] backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-ball-300" />
                Predict & Win
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
                승부예측하고 <br className="md:hidden" />
                <span className="italic">선수 싸인 상품</span> 받아가자!
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
                2026 데이비스컵 한국 vs 인도, 5경기의 결과를 맞혀보세요.
                <span className="block md:inline">
                  {" "}적중자 중 추첨으로 <b>국가대표 선수 싸인 상품</b>을 드려요.
                </span>
              </p>

              <Link
                href="/predict"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-extrabold text-royal-700 shadow-card transition-all hover:-translate-y-0.5"
              >
                <Sparkle size={14} className="text-ball-400" />
                승부 예측하러 가기
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <ul className="grid grid-cols-2 gap-3 md:max-w-xs">
              <FixtureBadge
                day="DAY 1"
                date="9/19 (토)"
                lines={["단식 2매치"]}
              />
              <FixtureBadge
                day="DAY 2"
                date="9/20 (일)"
                lines={["복식 1 + 단식 2"]}
              />
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FixtureBadge({
  day,
  date,
  lines,
}: {
  day: string;
  date: string;
  lines: string[];
}) {
  return (
    <li className="rounded-2xl bg-white/12 p-4 backdrop-blur">
      <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/70">
        {day}
      </p>
      <p className="mt-1 text-sm font-extrabold">{date}</p>
      <ul className="mt-1 text-[11px] text-white/80">
        {lines.map((l) => (
          <li key={l}>· {l}</li>
        ))}
      </ul>
    </li>
  );
}

function GiftIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <rect x="8" y="22" width="48" height="34" rx="4" stroke="currentColor" strokeWidth="3" />
      <path d="M4 22h56v10H4z" stroke="currentColor" strokeWidth="3" />
      <path d="M32 22v34" stroke="currentColor" strokeWidth="3" />
      <path
        d="M32 22c-6-8-14-8-14-2s8 4 14 2zM32 22c6-8 14-8 14-2s-8 4-14 2z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}
