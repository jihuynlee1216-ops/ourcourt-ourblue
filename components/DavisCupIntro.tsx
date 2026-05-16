"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { TennisBall, Trophy } from "./Decorations";

const facts = [
  {
    label: "Since 1900",
    title: "120년 넘는 역사",
    body: "1900년 시작된 데이비스컵은 남자 테니스 국가대항전 중 가장 오랜 전통을 자랑합니다.",
  },
  {
    label: "World Group",
    title: "전 세계 150개국",
    body: "전 세계 150여 개국이 참가하는 ITF 공식 국가대항전, ‘테니스의 월드컵’으로 불립니다.",
  },
  {
    label: "Team Korea",
    title: "한국, 월드그룹 도전",
    body: "대한민국 대표팀은 단/복식 5경기로 승부를 가르는 본선 진출을 목표로 합니다.",
  },
  {
    label: "Format",
    title: "5경기로 승부",
    body: "단식 4경기, 복식 1경기. 먼저 3승을 거두는 팀이 다음 라운드로 진출합니다.",
  },
];

export function DavisCupIntro() {
  return (
    <section
      id="intro"
      className="relative bg-[linear-gradient(180deg,#ffffff,#F4F7FF_55%,#ffffff)] py-14 md:py-28"
    >
      <TennisBall
        size={36}
        className="pointer-events-none absolute left-[6%] top-16 hidden md:block"
      />
      <TennisBall
        size={28}
        className="pointer-events-none absolute right-[8%] top-32 hidden md:block"
      />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          chip="ABOUT"
          title={
            <>
              데이비스컵, <span className="text-royal-500">테니스의 월드컵</span>
            </>
          }
          description="국가대표가 코트 위에서 한 팀이 되어 자국의 명예를 걸고 싸우는 무대 — 그것이 데이비스컵입니다."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 flex max-w-md items-center justify-center rounded-3xl bg-white p-6 shadow-card md:mt-12 md:max-w-lg md:p-8"
        >
          <Image
            src="/images/daviscup-logo.png"
            alt="Davis Cup 공식 로고"
            width={1188}
            height={594}
            priority={false}
            sizes="(max-width: 768px) 80vw, 480px"
            className="h-auto w-full max-w-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl rounded-3xl bg-gradient-to-br from-royal-500 to-royal-700 p-6 text-white shadow-card md:mt-8 md:p-8"
        >
          <div className="flex flex-col items-center gap-3 text-center md:gap-4">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] backdrop-blur">
              2026 Davis Cup · Korea
            </span>
            <h3 className="text-2xl font-extrabold leading-tight md:text-3xl">
              2026 데이비스컵, 서울에서 열립니다
            </h3>
            <div className="grid w-full grid-cols-1 gap-3 pt-2 sm:grid-cols-2 md:gap-4">
              <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur md:px-5 md:py-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Venue
                </div>
                <div className="mt-1 text-base font-extrabold md:text-lg">
                  서울 올림픽공원 테니스 경기장
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur md:px-5 md:py-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Date
                </div>
                <div className="mt-1 text-base font-extrabold md:text-lg">
                  2026.09.19(토) ~ 09.20(일)
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-6">
          {facts.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="card group flex gap-4 p-6 md:p-7"
            >
              <div className="flex-shrink-0">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-royal-50 text-royal-500 transition group-hover:scale-110">
                  <Trophy className="h-8 w-8" />
                </div>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-royal-500/80">
                  {f.label}
                </span>
                <h3 className="mt-1 text-lg font-extrabold text-royal-900 md:text-xl">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-royal-900/70">
                  {f.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
