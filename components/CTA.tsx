"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingBall, Sparkle, TennisBall } from "./Decorations";

const TICKET_URL = "https://www.daviscup.com/en/home.aspx";

export function CTA() {
  return (
    <section className="relative">
      <div className="court-bg relative px-5 py-12 md:py-20">
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-white"
          >
            <h3 className="text-2xl font-extrabold leading-tight md:text-4xl">
              퀴즈 풀고
              <br />
              데이비스컵 예매하러 가기!
            </h3>
            <p className="mt-3 text-sm text-white/80 md:text-base">
              팬의 응원이 모이는 코트, 그곳에서 함께 만나요.
            </p>

            {/* BLUEM ZONE perk callout */}
            <div className="mt-5 max-w-md rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur md:p-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[.18em]">
                <Sparkle size={12} className="text-ball-300" />
                BLUEM ZONE
              </span>
              <p className="mt-2 text-sm font-extrabold leading-snug text-white md:text-base">
                BLUEM ZONE(응원석) 예매 시,
                <br className="hidden sm:block" />
                <span className="text-ball-200">
                  데이비스컵 한정 응원타월
                </span>
                을 드려요!
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/80">
                'OUR COURT, OUR BLUE' 시그니처가 박힌 BLUEM 굿즈로, 현장에서만
                받을 수 있는 한정 수량 응원타월입니다.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-extrabold text-royal-700 shadow-card transition hover:-translate-y-0.5"
              >
                예매하러 가기
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="text-[11px] font-medium text-white/70">
                * 응원타월은 BLUEM ZONE 예매자 대상 한정 수량
              </span>
            </div>
          </motion.div>

          {/* visual: towel + decor */}
          <div className="relative h-64 md:h-80">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute left-1/2 top-2 w-[88%] -translate-x-1/2 md:left-auto md:right-2 md:top-4 md:w-[92%] md:translate-x-0"
            >
              <Image
                src="/images/towel.png"
                alt="BLUEM 응원타월 — OUR COURT, OUR BLUE 시그니처"
                width={987}
                height={428}
                priority={false}
                className="h-auto w-full drop-shadow-[0_28px_42px_rgba(0,0,0,0.35)]"
              />
            </motion.div>

            <TennisBall
              size={70}
              className="absolute left-0 bottom-0 drop-shadow-[0_24px_40px_rgba(0,0,0,0.3)] md:left-2"
            />
            <FloatingBall
              size={38}
              delay={0.4}
              className="absolute right-2 bottom-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
