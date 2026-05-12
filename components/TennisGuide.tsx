"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { RacketIcon, TennisBall } from "./Decorations";

const guides = [
  {
    label: "RULES",
    title: "기본 룰 한 눈에",
    body: "한 게임은 4포인트 → 한 세트는 6게임 → 데이비스컵은 단·복식 5경기. 먼저 3승을 거두는 팀이 다음 라운드로 진출합니다.",
  },
  {
    label: "DAVIS CUP FORMAT",
    title: "데이비스컵만의 형식",
    body: "단식 4경기 + 복식 1경기, 단·복식 모두 동등하게 1승. 1·2일차 단식, 가운데에 복식이 들어가며 보통 3세트 매치(결정전은 5세트)로 진행됩니다.",
  },
  {
    label: "ETIQUETTE",
    title: "관전이 더 재밌어진다",
    body: "포인트 진행 중에는 정숙, 포인트가 끝나면 환호! 사이드 체인지 동안에는 자유롭게 외쳐도 OK. 챌린지(호크아이) 결과가 나올 때 박수가 가장 큰 순간이에요.",
  },
];

const scoringSteps = [
  { step: "0", label: "Love" },
  { step: "15", label: "Fifteen" },
  { step: "30", label: "Thirty" },
  { step: "40", label: "Forty" },
  { step: "GAME", label: "게임 획득" },
];

const serveRules = [
  {
    title: "포인트당 2번",
    body: "첫 서브가 폴트면 두 번째 서브 기회. 두 번 다 실패하면 ‘더블 폴트’로 상대 1점.",
  },
  {
    title: "대각선 서비스 박스",
    body: "베이스라인 뒤에서 대각선 방향 서비스 박스 안으로 정확히 보내야 인.",
  },
  {
    title: "풋 폴트",
    body: "서브 동작 중 발이 베이스라인을 밟거나 코트 안으로 들어가면 폴트 처리.",
  },
  {
    title: "렛(Let)",
    body: "서브가 네트에 닿고 서비스 박스 안에 들어가면 다시 — 카운트 안 됨.",
  },
];

const watchingTips = [
  "첫 서브 성공률 — 65% 이상이면 그 선수 컨디션 좋다는 신호",
  "30-30 / 듀스 — 한 점이 게임 향방을 결정. 가장 집중해서 볼 순간",
  "브레이크 포인트 — 상대 서브를 빼앗을 기회, 세트의 분기점",
  "타이브레이크 — 6-6에서 7점 선취 미니게임. 가장 짜릿한 구간",
];

const terms = [
  { word: "Ace", desc: "리시버가 라켓에 닿지 못한 서브" },
  { word: "Love", desc: "0점을 부르는 말" },
  { word: "Deuce", desc: "40-40 동점 상황" },
  { word: "Advantage", desc: "듀스 이후 한 점 우위" },
  { word: "Break", desc: "상대 서브 게임을 가져오는 것" },
  { word: "Double Fault", desc: "서브 두 번 모두 실패 → 상대 1점" },
  { word: "Rally", desc: "끊기지 않고 이어지는 공방" },
  { word: "Volley", desc: "바운드 전에 받아치는 발리" },
  { word: "Smash", desc: "높이 뜬 공을 강하게 내려치는 공격" },
  { word: "Lob", desc: "상대 머리 위로 띄우는 공" },
  { word: "Drop Shot", desc: "네트 바로 앞에 짧게 떨어뜨리는 공" },
  { word: "Tiebreak", desc: "6-6일 때 7점 선취 게임" },
];

export function TennisGuide() {
  return (
    <section
      id="guide"
      className="relative bg-[linear-gradient(180deg,#F4F7FF,#ffffff)] py-14 md:py-28"
    >
      <TennisBall
        size={26}
        className="pointer-events-none absolute left-[8%] top-24 hidden md:block"
      />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          chip="GUIDE"
          title={
            <>
              테니스 <span className="text-royal-500">처음이라도 OK</span>
            </>
          }
          description="규칙·서브·점수 체계·관전 매너까지 — 5분이면 코트가 다르게 보입니다."
        />

        {/* 3 main cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {guides.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="card relative overflow-hidden p-7"
            >
              <span className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
                {g.label}
              </span>
              <h3 className="mt-3 text-xl font-extrabold text-royal-900">
                {g.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-royal-900/70">
                {g.body}
              </p>
              <RacketIcon
                size={84}
                className="pointer-events-none absolute -right-3 -bottom-3 text-royal-100 opacity-50"
              />
            </motion.div>
          ))}
        </div>

        {/* Scoring breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="card mt-6 overflow-hidden p-7 md:p-9"
        >
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
                Scoring
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-royal-900 md:text-3xl">
                테니스 점수, 왜 0-15-30-40 일까?
              </h3>
              <p className="mt-2 text-sm text-royal-900/70">
                4포인트를 먼저 따면 한 게임 승리. 40-40 동점이 되면 ‘듀스’ —
                연속 2점을 따야 게임이 끝나요.
              </p>
            </div>
          </div>

          <ol className="mt-6 flex flex-wrap items-center gap-2 md:gap-3">
            {scoringSteps.map((s, i) => (
              <li key={s.step} className="flex items-center gap-2 md:gap-3">
                <div
                  className={
                    "grid place-items-center rounded-2xl px-4 py-3 text-center transition " +
                    (i === scoringSteps.length - 1
                      ? "bg-royal-500 text-white shadow-soft"
                      : "bg-royal-50 text-royal-700")
                  }
                >
                  <span className="text-base font-extrabold md:text-lg">{s.step}</span>
                  <span className="text-[10px] font-medium opacity-80 md:text-[11px]">
                    {s.label}
                  </span>
                </div>
                {i < scoringSteps.length - 1 && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-royal-300"
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
                )}
              </li>
            ))}
          </ol>

          <div className="mt-6 grid grid-cols-1 gap-3 rounded-2xl bg-royal-50/60 p-5 sm:grid-cols-3">
            <ScoreStep title="한 게임" body="4포인트 선취 (듀스면 2점 우위)" />
            <ScoreStep title="한 세트" body="6게임 선취 — 6-6일 땐 타이브레이크" />
            <ScoreStep title="한 매치" body="3세트 선취 (결정전은 5세트도 가능)" />
          </div>
        </motion.div>

        {/* Two-column: Serve rules + Watching tips */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="card p-7"
          >
            <span className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
              Serve
            </span>
            <h3 className="mt-2 text-xl font-extrabold text-royal-900">
              서브, 이것만 알면 끝
            </h3>
            <ul className="mt-5 space-y-4">
              {serveRules.map((r) => (
                <li key={r.title} className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-royal-50 text-[11px] font-bold text-royal-500">
                    ●
                  </span>
                  <div>
                    <p className="text-sm font-bold text-royal-900">{r.title}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-royal-900/70">
                      {r.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="card p-7"
          >
            <span className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
              Watching Points
            </span>
            <h3 className="mt-2 text-xl font-extrabold text-royal-900">
              이 순간을 보면 두 배로 재밌다
            </h3>
            <ul className="mt-5 space-y-3">
              {watchingTips.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ball-400" />
                  <p className="text-[13px] leading-relaxed text-royal-900/85">{t}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mini glossary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-3xl bg-royal-500 p-7 text-white shadow-card md:p-10"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[.18em]">
                Mini Glossary
              </span>
              <h3 className="mt-3 text-2xl font-extrabold md:text-3xl">
                알아두면 좋은 테니스 용어 12선
              </h3>
            </div>
            <p className="max-w-md text-sm text-white/85">
              경기 중 자주 들리는 단어들. 카드 위에 마우스를 올리면 더 또렷이
              보여요.
            </p>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {terms.map((t) => (
              <li
                key={t.word}
                className="group rounded-2xl bg-white/10 p-4 transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <p className="text-sm font-extrabold tracking-wide">{t.word}</p>
                <p className="mt-1 text-[12px] text-white/80">{t.desc}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function ScoreStep({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
        {title}
      </p>
      <p className="mt-1 text-sm font-semibold leading-snug text-royal-900">
        {body}
      </p>
    </div>
  );
}
