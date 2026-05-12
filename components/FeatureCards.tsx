"use client";

import { motion } from "framer-motion";
import { ClipboardIcon, Group, RacketIcon, TennisBall, Trophy } from "./Decorations";

type Card = {
  href: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  highlight?: boolean;
};

const cards: Card[] = [
  {
    href: "#intro",
    icon: <Trophy className="h-12 w-12" />,
    title: "데이비스컵 소개",
    body: "세계 남자 테니스 국가대항전",
  },
  {
    href: "#players",
    icon: <Group className="h-12 w-12" />,
    title: "선수 소개",
    body: "대한민국 국가대표 선수들을 만나보세요",
  },
  {
    href: "#guide",
    icon: <RacketIcon className="h-12 w-12" />,
    title: "테니스 가이드",
    body: "테니스 룰부터 관전 포인트까지!",
  },
  {
    href: "#quiz",
    icon: <ClipboardIcon className="h-12 w-12" />,
    title: "퀴즈",
    body: "5문제로 알아보는 데이비스컵!",
    highlight: true,
  },
];

export function FeatureCards() {
  return (
    <section className="relative -mt-10 md:-mt-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative">
          <TennisBall
            size={36}
            className="pointer-events-none absolute -top-6 right-3 hidden md:block"
          />
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {cards.map((c, i) => (
              <motion.li
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <a
                  href={c.href}
                  className={
                    "group relative flex h-full flex-col items-center gap-3 rounded-3xl p-5 text-center shadow-card transition-all hover:-translate-y-1 md:p-7 " +
                    (c.highlight
                      ? "bg-royal-500 text-white"
                      : "bg-white text-royal-900")
                  }
                >
                  <div
                    className={
                      "grid h-16 w-16 place-items-center rounded-2xl transition " +
                      (c.highlight
                        ? "bg-white/15 text-white"
                        : "bg-royal-50 text-royal-500")
                    }
                  >
                    {c.icon}
                  </div>
                  <div className="space-y-1.5">
                    <p className={"text-base font-extrabold md:text-lg " + (c.highlight ? "text-white" : "text-royal-900")}>
                      {c.title}
                    </p>
                    <p
                      className={
                        "text-xs leading-relaxed md:text-[13px] " +
                        (c.highlight ? "text-white/85" : "text-royal-900/65")
                      }
                    >
                      {c.body}
                    </p>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
