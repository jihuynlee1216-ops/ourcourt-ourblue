"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HOME,
  matches,
  OPPONENT,
  STORAGE_KEY,
  type Match,
  type TeamPick,
} from "@/data/matches";
import { TennisBall, Sparkle } from "./Decorations";

type Picks = Record<string, TeamPick | undefined>;

export function PredictDetail() {
  const [picks, setPicks] = useState<Picks>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { picks: Picks; submitted: boolean };
      if (parsed.picks) setPicks(parsed.picks);
      if (parsed.submitted) setSubmitted(parsed.submitted);
    } catch {
      // ignore
    }
  }, []);

  const persist = (next: Picks, isSubmitted: boolean) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ picks: next, submitted: isSubmitted }),
      );
    } catch {
      // ignore
    }
  };

  const choose = (matchId: string, pick: TeamPick) => {
    const next = { ...picks, [matchId]: pick };
    setPicks(next);
    persist(next, submitted);
  };

  const allPicked = matches.every((m) => Boolean(picks[m.id]));
  const completedCount = matches.filter((m) => Boolean(picks[m.id])).length;

  const submit = () => {
    if (!allPicked) return;
    setSubmitted(true);
    persist(picks, true);
    // scroll into result smoothly
    requestAnimationFrame(() => {
      document
        .getElementById("predict-result")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const reset = () => {
    setPicks({});
    setSubmitted(false);
    persist({}, false);
  };

  const summary = useMemo(() => {
    const k = matches.filter((m) => picks[m.id] === "KOR").length;
    const i = matches.filter((m) => picks[m.id] === "IND").length;
    return { kor: k, ind: i };
  }, [picks]);

  const day1 = matches.filter((m) => m.day === "DAY1");
  const day2 = matches.filter((m) => m.day === "DAY2");

  return (
    <article className="relative pb-24 pt-6 md:pb-28">
      {/* back link */}
      <div className="mx-auto max-w-5xl px-5">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-500 hover:text-royal-700"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          홈으로 돌아가기
        </Link>
      </div>

      {/* hero */}
      <div className="relative mx-auto mt-6 max-w-5xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-royal-500 via-royal-600 to-royal-800 p-7 text-white shadow-card md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
            }}
          />
          <TennisBall
            size={48}
            className="pointer-events-none absolute right-5 top-5 drop-shadow-[0_18px_24px_rgba(0,0,0,0.25)]"
          />

          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[.18em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-ball-300" />
              Predict & Win
            </span>
            <h1 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              승부 예측하고 <br className="md:hidden" />
              <span className="italic">선수 싸인 상품</span> 받아가자!
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
              2026 데이비스컵 한국 vs 인도, 총 5경기의 결과를 맞혀보세요. 모든
              예측을 끝내면 응모가 완료됩니다 — 적중한 분 중 추첨으로 국가대표
              선수 싸인 상품을 드려요!
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 text-white sm:max-w-md">
              <FixtureBadge
                day="DAY 1"
                date="9월 19일 (토)"
                lines={["단식1", "단식2"]}
              />
              <FixtureBadge
                day="DAY 2"
                date="9월 20일 (일)"
                lines={["복식1", "단식3 · 단식4"]}
              />
            </div>
          </div>
        </motion.div>

        {/* progress */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-bold text-royal-900">
            예측 진행 — {completedCount} / {matches.length}
          </p>
          <div className="flex items-center gap-1.5">
            {matches.map((m) => {
              const done = Boolean(picks[m.id]);
              return (
                <span
                  key={m.id}
                  className={
                    "h-2 w-7 rounded-full transition " +
                    (done ? "bg-royal-500" : "bg-royal-100")
                  }
                />
              );
            })}
          </div>
        </div>

        {/* matches */}
        <DayBlock title="DAY 1" subtitle="9월 19일 (토) · 단식 2매치" matches={day1}>
          {day1.map((m, i) => (
            <MatchCard
              key={m.id}
              match={m}
              pick={picks[m.id]}
              onPick={(p) => choose(m.id, p)}
              delay={i * 0.05}
            />
          ))}
        </DayBlock>

        <DayBlock
          title="DAY 2"
          subtitle="9월 20일 (일) · 복식 1 + 단식 2매치"
          matches={day2}
        >
          {day2.map((m, i) => (
            <MatchCard
              key={m.id}
              match={m}
              pick={picks[m.id]}
              onPick={(p) => choose(m.id, p)}
              delay={i * 0.05}
            />
          ))}
        </DayBlock>

        {/* submit */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="submit"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between"
            >
              <p className="text-sm font-medium text-royal-900/70">
                {allPicked
                  ? "모든 경기 예측 완료! 응모하기를 눌러주세요."
                  : "5경기 모두 선택하면 응모할 수 있어요."}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={reset}
                  className="text-sm font-semibold text-royal-500 hover:text-royal-700"
                >
                  초기화
                </button>
                <button
                  onClick={submit}
                  disabled={!allPicked}
                  className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Sparkle size={14} className="text-ball-200" />
                  예측 응모하기
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
            </motion.div>
          ) : (
            <motion.div
              id="predict-result"
              key="result"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.55 }}
              className="card mt-10 overflow-hidden p-7 text-center md:p-10"
            >
              <span className="chip">Submitted</span>
              <h2 className="mt-3 text-3xl font-extrabold text-royal-900 md:text-4xl">
                응모 완료!
              </h2>
              <p className="mt-2 text-sm text-royal-900/70">
                예측이 저장되었어요. 9월 20일 경기 종료 후, 적중한 분 중
                추첨으로 국가대표 선수 싸인 상품을 드립니다.
              </p>

              <div className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-3">
                <SummaryTile code="KOR" name="대한민국" value={summary.kor} />
                <SummaryTile code="IND" name="인도" value={summary.ind} />
              </div>

              <ul className="mx-auto mt-6 max-w-md space-y-2 text-left">
                {matches.map((m) => (
                  <li
                    key={m.id}
                    className="flex items-center justify-between rounded-2xl bg-royal-50/60 px-4 py-3 text-sm"
                  >
                    <span className="font-bold text-royal-900">{m.label}</span>
                    <span
                      className={
                        "rounded-full px-3 py-1 text-[11px] font-bold " +
                        (picks[m.id] === "KOR"
                          ? "bg-royal-500 text-white"
                          : "bg-orange-500 text-white")
                      }
                    >
                      {picks[m.id] === "KOR" ? "🇰🇷 대한민국" : "🇮🇳 인도"} 승
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
                  다시 예측하기
                </button>
                <Link href="/" className="btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M15 18l-6-6 6-6"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  홈으로 돌아가기
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
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
    <div className="rounded-2xl bg-white/12 p-4 backdrop-blur">
      <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/70">
        {day}
      </p>
      <p className="mt-1 text-sm font-extrabold">{date}</p>
      <ul className="mt-1 text-[11px] text-white/80">
        {lines.map((l) => (
          <li key={l}>· {l}</li>
        ))}
      </ul>
    </div>
  );
}

function DayBlock({
  title,
  subtitle,
  matches: _m,
  children,
}: {
  title: string;
  subtitle: string;
  matches: Match[];
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
            {title}
          </span>
          <h2 className="mt-1 text-xl font-extrabold text-royal-900 md:text-2xl">
            {subtitle}
          </h2>
        </div>
      </div>
      <div className="mt-4 space-y-3 md:space-y-4">{children}</div>
    </section>
  );
}

function MatchCard({
  match,
  pick,
  onPick,
  delay,
}: {
  match: Match;
  pick: TeamPick | undefined;
  onPick: (p: TeamPick) => void;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.45 }}
      className="card overflow-hidden p-5 md:p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="chip">{match.label}</span>
          <span className="text-[11px] font-bold uppercase tracking-[.16em] text-royal-500/70">
            {match.type}
          </span>
        </div>
        <span className="text-[12px] font-medium text-royal-900/55">
          {match.date} ({match.weekday})
        </span>
      </div>

      <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-stretch gap-2">
        <TeamButton
          code="KOR"
          name="대한민국"
          flag="🇰🇷"
          accentClass="bg-royal-500 text-white"
          baseClass="bg-royal-50 text-royal-700"
          active={pick === "KOR"}
          onClick={() => onPick("KOR")}
        />
        <div className="grid place-items-center px-1">
          <span className="text-lg font-extrabold text-royal-900/60 md:text-xl">
            VS
          </span>
        </div>
        <TeamButton
          code="IND"
          name="인도"
          flag="🇮🇳"
          accentClass="bg-orange-500 text-white"
          baseClass="bg-orange-50 text-orange-700"
          active={pick === "IND"}
          onClick={() => onPick("IND")}
        />
      </div>

      {pick && (
        <p className="mt-3 text-[12px] font-medium text-royal-900/70">
          <span className="font-bold text-royal-500">예측 완료</span> ·{" "}
          {pick === "KOR" ? HOME.name : OPPONENT.name} 승
        </p>
      )}
    </motion.div>
  );
}

function TeamButton({
  code,
  name,
  flag,
  accentClass,
  baseClass,
  active,
  onClick,
}: {
  code: string;
  name: string;
  flag: string;
  accentClass: string;
  baseClass: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "group relative flex w-full items-center justify-center gap-2 rounded-2xl px-3 py-4 text-center font-extrabold transition-all " +
        (active ? accentClass + " shadow-soft" : baseClass + " hover:-translate-y-0.5")
      }
    >
      <span className="text-xl md:text-2xl">{flag}</span>
      <div className="text-left">
        <p className="text-[10px] font-bold uppercase tracking-[.18em] opacity-80">
          {code}
        </p>
        <p className="text-sm md:text-base">{name}</p>
      </div>
      {active && (
        <span
          aria-hidden
          className="ml-1 grid h-5 w-5 place-items-center rounded-full bg-white text-royal-500"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12l5 5L20 7"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </button>
  );
}

function SummaryTile({
  code,
  name,
  value,
}: {
  code: string;
  name: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl bg-royal-50/60 p-4">
      <p className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
        {code}
      </p>
      <p className="mt-1 text-sm font-semibold text-royal-900/70">{name} 승</p>
      <p className="mt-1 text-2xl font-extrabold text-royal-900">
        {value}
        <span className="ml-1 text-sm font-bold text-royal-900/60">경기</span>
      </p>
    </div>
  );
}
