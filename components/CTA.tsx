"use client";

import { motion } from "framer-motion";
import { FloatingBall, Racket, TennisBall } from "./Decorations";

const TICKET_URL = "https://www.daviscup.com/en/home.aspx";

export function CTA() {
  return (
    <section className="relative">
      <div className="court-bg relative px-5 py-10 md:py-20">
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
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
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-extrabold text-royal-700 shadow-card transition hover:-translate-y-0.5"
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
          </motion.div>

          <div className="relative h-44 md:h-60">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute right-2 top-2 md:right-10"
            >
              <TennisBall
                size={170}
                className="drop-shadow-[0_24px_40px_rgba(0,0,0,0.25)]"
              />
            </motion.div>
            <Racket
              size={170}
              accent="#fff"
              className="absolute -bottom-2 left-4 md:left-10 drop-shadow-[0_24px_40px_rgba(0,0,0,0.25)]"
            />
            <FloatingBall
              size={48}
              delay={0.4}
              className="absolute right-[42%] bottom-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
