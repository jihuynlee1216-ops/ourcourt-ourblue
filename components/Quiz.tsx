"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Bracelet } from "./Bracelet";
import { SectionHeader } from "./SectionHeader";
import { Racket, Sparkle, TennisBall } from "./Decorations";

type Question = {
  q: string;
  options: string[];
  answer: number;
  explainer?: string;
};

const QUESTIONS: Question[] = [
  {
    q: "데이비스컵은 어떤 대회일까요?",
    options: [
      "세계 여자 테니스 선수권 대회",
      "세계 남자 테니스 국가대항전",
      "올림픽 테니스 경기",
      "ATP 마스터스 대회",
    ],
    answer: 1,
    explainer: "데이비스컵은 ITF가 주관하는 남자 테니스 국가대항전입니다.",
  },
  {
    q: "2018년 호주오픈에서 한국 남자 테니스 선수 최초로 그랜드슬램 4강에 오른 선수는?",
    options: ["권순우", "정현", "남지성", "박의성"],
    answer: 1,
    explainer:
      "정현 선수가 2018 호주오픈에서 노박 조코비치를 꺾고 한국 남자 단식 최초로 그랜드슬램 4강에 올랐습니다.",
  },
  {
    q: "한 매치는 단·복식 몇 경기로 구성될까요?",
    options: ["3경기 (단2 / 복1)", "5경기 (단4 / 복1)", "7경기 (단5 / 복2)", "4경기 (단3 / 복1)"],
    answer: 1,
    explainer: "단식 4경기 + 복식 1경기, 총 5경기로 진행됩니다.",
  },
  {
    q: "다음 중 ‘브레이크(Break)’ 의 뜻으로 알맞은 것은?",
    options: [
      "내 서브 게임을 지키는 것",
      "상대 서브 게임을 가져오는 것",
      "경기 중 휴식 시간",
      "코트를 바꾸는 것",
    ],
    answer: 1,
    explainer: "상대의 서브 게임을 빼앗는 것을 ‘브레이크’라고 합니다.",
  },
  {
    q: "타이브레이크는 언제 진행될까요?",
    options: ["3-3에서", "5-5에서", "6-6에서", "한 게임이 5분을 넘었을 때"],
    answer: 2,
    explainer: "한 세트가 6-6 동점일 때 타이브레이크로 승부를 가립니다.",
  },
];

type Phase = "intro" | "playing" | "result";

const tiers = [
  { range: "0–39점", title: "테린이", desc: "테니스 입문자" },
  { range: "40–69점", title: "동호인", desc: "테니스 즐기는 중" },
  { range: "70–99점", title: "마스터", desc: "테니스에 진심인 팬!" },
  { range: "100점", title: "당신은 준비된 BLEUM!", desc: "" },
] as const;

function tierFor(score: number) {
  if (score >= 100) return { idx: 3, title: "당신은 준비된 BLEUM!", caption: "데이비스컵을 함께 응원할 준비 완료!" };
  if (score >= 70) return { idx: 2, title: "마스터", caption: "테니스에 진심인 팬!" };
  if (score >= 40) return { idx: 1, title: "동호인", caption: "테니스 즐기는 중!" };
  return { idx: 0, title: "테린이", caption: "테니스 입문자, 앞으로가 더 기대돼요!" };
}

const TICKET_URL = "https://www.daviscup.com/en/home.aspx";

export function Quiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));

  const score = useMemo(
    () =>
      picked.reduce<number>(
        (acc, choice, i) => (choice !== null && choice === QUESTIONS[i].answer ? acc + 20 : acc),
        0,
      ),
    [picked],
  );
  const tier = useMemo(() => tierFor(score), [score]);

  const select = (idx: number) => {
    setPicked((prev) => {
      const next = [...prev];
      next[step] = idx;
      return next;
    });
  };

  const next = () => {
    if (step < QUESTIONS.length - 1) setStep((s) => s + 1);
    else setPhase("result");
  };

  const reset = () => {
    setPicked(Array(QUESTIONS.length).fill(null));
    setStep(0);
    setPhase("playing");
  };

  return (
    <section id="quiz" className="relative overflow-hidden bg-white py-14 md:py-28">
      {/* faint court grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,92,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,92,255,.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5">
        <SectionHeader
          chip="QUIZ"
          title={<>데이비스컵 퀴즈 도전!</>}
          description="앞선 탭의 내용을 잘 읽어보았다면 문제없어요!"
        />

        {/* progress dots */}
        <div className="mx-auto mt-8 flex max-w-md items-center justify-between md:mt-10">
          {QUESTIONS.map((_, i) => {
            const reached = phase === "result" || i <= step;
            const current = phase !== "result" && i === step;
            return (
              <div key={i} className="flex flex-1 items-center last:flex-none">
                <motion.div
                  animate={{ scale: current ? 1.05 : 1 }}
                  className={
                    "grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border-2 text-xs font-bold transition-colors md:h-10 md:w-10 md:text-sm " +
                    (reached
                      ? "border-royal-500 bg-royal-500 text-white"
                      : "border-royal-200 bg-white text-royal-300")
                  }
                >
                  {i + 1}
                </motion.div>
                {i < QUESTIONS.length - 1 && (
                  <div
                    className={
                      "mx-1.5 h-[2px] flex-1 rounded-full transition-colors md:mx-2 " +
                      (i < step || phase === "result" ? "bg-royal-500" : "bg-royal-100")
                    }
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* card */}
        <div className="relative mx-auto mt-8 max-w-3xl">
          <AnimatePresence mode="wait">
            {phase === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4 }}
                className="card grid items-center gap-6 p-6 md:grid-cols-[1fr_auto] md:p-10"
              >
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
                    Ready?
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-royal-900 md:text-3xl">
                    5문제를 풀고 당신의 테린지수를 확인해보세요
                  </h3>
                  <p className="mt-3 text-sm text-royal-900/70">
                    한 문제당 20점, 총 100점 만점. 만점이면 BLEUM의 특별 선물이 기다립니다.
                  </p>
                  <button
                    onClick={() => setPhase("playing")}
                    className="btn-primary mt-6"
                  >
                    퀴즈 시작하기
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="relative mx-auto h-36 w-36 md:mx-0 md:h-44 md:w-44">
                  <Racket
                    size={170}
                    accent="#fff"
                    className="absolute right-0 top-0 drop-shadow-[0_18px_28px_rgba(15,34,112,0.18)]"
                  />
                  <TennisBall
                    size={56}
                    className="absolute left-0 bottom-0 drop-shadow-[0_14px_18px_rgba(15,34,112,0.18)]"
                  />
                </div>
              </motion.div>
            )}

            {phase === "playing" && (
              <motion.div
                key={"step-" + step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="card p-5 md:p-10"
              >
                <p className="text-sm font-bold text-royal-500">
                  Q{step + 1}.{" "}
                  <span className="text-royal-900">{QUESTIONS[step].q}</span>
                </p>

                <ul className="mt-6 space-y-3">
                  {QUESTIONS[step].options.map((option, i) => {
                    const selected = picked[step] === i;
                    return (
                      <li key={option}>
                        <button
                          onClick={() => select(i)}
                          aria-pressed={selected}
                          className={
                            "flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all " +
                            (selected
                              ? "border-royal-500 bg-royal-500 text-white shadow-soft"
                              : "border-royal-100 bg-royal-50/40 text-royal-900 hover:border-royal-300 hover:bg-white")
                          }
                        >
                          <span className="text-[15px] font-semibold">
                            <span
                              className={
                                "mr-2 inline-block w-5 " +
                                (selected ? "text-white" : "text-royal-500")
                              }
                            >
                              {String.fromCharCode(65 + i)}.
                            </span>
                            {option}
                          </span>
                          <span
                            aria-hidden
                            className={
                              "grid h-6 w-6 place-items-center rounded-full transition " +
                              (selected
                                ? "bg-white text-royal-500"
                                : "bg-white/0 text-transparent")
                            }
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M5 12l5 5L20 7"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-7 flex items-center justify-between">
                  <button
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="text-sm font-semibold text-royal-500 disabled:opacity-30"
                  >
                    ← 이전
                  </button>
                  <button
                    onClick={next}
                    disabled={picked[step] === null}
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {step === QUESTIONS.length - 1 ? "결과 보기" : "다음 문제"}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}

            {phase === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
                className="card relative overflow-hidden p-6 md:p-12"
              >
                {score === 100 && <Confetti />}

                <div className="text-center">
                  <p className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
                    {score === 100 ? "Congratulations" : "Quiz Result"}
                  </p>
                  <h3 className="mt-3 text-3xl font-extrabold text-royal-900 md:text-4xl">
                    {score === 100 ? "축하합니다!" : "퀴즈 완료!"}
                  </h3>

                  <div className="mx-auto mt-6 flex items-end justify-center gap-3">
                    <TennisBall size={56} />
                    <TennisBall size={80} />
                    <TennisBall size={56} />
                  </div>

                  <p className="mt-6 text-sm font-semibold text-royal-500">최종 점수</p>
                  <p className="mt-1 text-6xl font-extrabold text-royal-500 md:text-7xl">
                    {score}
                    <span className="ml-1 text-2xl font-bold text-royal-500/80">점</span>
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-royal-900 md:text-3xl">
                    {tier.title}
                  </p>
                  <p className="mt-2 text-sm text-royal-900/70">{tier.caption}</p>
                </div>

                {score === 100 && (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="mx-auto mt-10 max-w-md rounded-3xl bg-gradient-to-b from-royal-50 to-white p-6 text-center shadow-card"
                  >
                    <Bracelet />
                    <p className="mt-4 text-sm font-bold text-royal-700">
                      100점 달성 기념 BLEUM 테니스 팔찌를 드립니다!
                    </p>
                  </motion.div>
                )}

                {/* tier table */}
                <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-2xl border border-royal-100">
                  <table className="w-full text-sm">
                    <tbody>
                      {tiers.map((t, i) => {
                        const active = i === tier.idx;
                        return (
                          <tr
                            key={t.title}
                            className={
                              "border-b border-royal-100 last:border-0 " +
                              (active ? "bg-royal-500 text-white" : "bg-white text-royal-900")
                            }
                          >
                            <td className="px-3 py-3 text-left text-[12px] font-semibold md:px-4 md:text-sm">
                              {t.range}
                            </td>
                            <td className="px-2 py-3 text-center md:px-4">
                              <span
                                className={
                                  "inline-block rounded-full px-2.5 py-1 text-[11px] font-bold md:px-3 md:text-xs " +
                                  (active
                                    ? "bg-white text-royal-500"
                                    : "bg-royal-50 text-royal-700")
                                }
                              >
                                {t.title}
                              </span>
                            </td>
                            <td className="hidden px-4 py-3 text-right text-xs opacity-80 sm:table-cell">
                              {t.desc}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:justify-center">
                  <button onClick={reset} className="btn-ghost">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M4 4v6h6M20 20v-6h-6"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 9A8 8 0 0 0 5.3 6.3L4 8M4 15a8 8 0 0 0 14.7 2.7L20 16"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    다시 도전하기
                  </button>
                  <a
                    href={TICKET_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <Sparkle size={14} className="text-ball-200" />
                    데이비스컵 예매하러 가기
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <TennisBall
            size={28}
            className="pointer-events-none absolute -right-2 -top-6 hidden md:block"
          />
          <TennisBall
            size={36}
            className="pointer-events-none absolute -left-4 -bottom-4 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}

/** A small confetti burst rendered when the user gets 100 pts. */
function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.4,
        rotate: Math.random() * 360,
        color: ["#255CFF", "#7E9BFF", "#C8E04A", "#F1F89B", "#FFB7C9"][i % 5],
        duration: 1.2 + Math.random() * 0.8,
      })),
    [],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -40, opacity: 0, rotate: p.rotate }}
          animate={{ y: 320, opacity: [0, 1, 0], rotate: p.rotate + 240 }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeOut" }}
          className="absolute top-0 block h-2.5 w-2.5 rounded-sm"
          style={{ left: `${p.left}%`, background: p.color }}
        />
      ))}
    </div>
  );
}
