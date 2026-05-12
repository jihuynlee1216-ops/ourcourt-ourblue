"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { TennisBall, Sparkle } from "./Decorations";
import { PlayerSilhouette } from "./PlayerSilhouette";
import { players, type Player, KTA_INSTAGRAM_URL } from "@/data/players";

export function PlayerDetail({ player }: { player: Player }) {
  const otherPlayers = players.filter((p) => p.slug !== player.slug);
  const reelHref = player.reelUrl ?? KTA_INSTAGRAM_URL;
  const reelIsPlayerSpecific = Boolean(player.reelUrl);

  return (
    <article className="relative pb-20 pt-6 md:pb-28">
      {/* breadcrumb */}
      <div className="mx-auto max-w-6xl px-5">
        <Link
          href="/#players"
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
          선수 목록으로
        </Link>
      </div>

      {/* hero block */}
      <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-8 px-5 md:grid-cols-12 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="md:col-span-5"
        >
          <PortraitCard player={player} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="md:col-span-7"
        >
          <span className="chip mb-3">{player.roleLabel.toUpperCase()}</span>
          <p className="text-sm font-medium text-royal-500">{player.name}</p>
          <h1 className="mt-1 text-4xl font-extrabold leading-tight text-royal-900 md:text-6xl">
            {player.hangul}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-royal-900/75 md:text-lg">
            {player.bio}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Stat label="나이" value={`${player.age}세`} />
            <Stat label="키" value={player.height} />
            <Stat label="플레이" value={player.hand} small />
            <Stat label="포지션" value={player.roleLabel} />
          </div>

          {player.careerHigh && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-royal-50 px-4 py-2 text-sm font-bold text-royal-700">
              <Sparkle size={14} className="text-ball-400" />
              커리어 하이 — {player.careerHigh}
            </div>
          )}

          <div className="mt-6 flex flex-col items-start gap-2 sm:flex-row sm:items-center">
            <a
              href={reelHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-royal-500 to-royal-700 px-6 py-3.5 text-sm font-extrabold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft md:text-base"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
              {player.hangul} 하이라이트 릴스 보러가기!
              <svg
                width="16"
                height="16"
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
            </a>
            {!reelIsPlayerSpecific && (
              <span className="text-[11px] font-medium text-royal-900/55">
                * 선수별 릴스 업로드 전 — 대한테니스협회 인스타그램으로 이동합니다
              </span>
            )}
          </div>
        </motion.div>
      </div>

      {/* signature + strengths */}
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 px-5 md:grid-cols-2 md:gap-6">
        <Card
          chip="SIGNATURE WEAPON"
          title={player.weapon}
          body={`${player.hangul} 선수의 코트 위 가장 강력한 무기. 결정적인 순간에 가장 자주 등장하는 패턴입니다.`}
        />
        <Card
          chip="AFFILIATION"
          title={player.affiliation}
          body={`현재 ${player.affiliation} 소속으로 활동 중이며, 데이비스컵 한국 대표팀 멤버로 발탁되어 출전하고 있습니다.`}
        />
      </div>

      {/* lists */}
      <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-5 px-5 md:grid-cols-2 md:gap-6">
        <ListCard chip="STRENGTHS" title="강점" items={player.strengths} accent="ball" />
        <ListCard
          chip="ACHIEVEMENTS"
          title="주요 수상 및 이력"
          items={player.achievements}
          accent="royal"
        />
      </div>

      {/* other players */}
      <div className="mx-auto mt-16 max-w-6xl px-5">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
              Roster
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-royal-900 md:text-3xl">
              다른 선수도 만나보세요
            </h2>
          </div>
          <Link
            href="/#players"
            className="hidden text-sm font-bold text-royal-500 hover:text-royal-700 md:inline-flex"
          >
            전체 명단 →
          </Link>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {otherPlayers.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/players/${p.slug}`}
                className="card group block overflow-hidden transition-transform hover:-translate-y-1"
              >
                <MiniPhoto player={p} />
                <div className="p-3 md:p-4">
                  <p className="text-[11px] text-royal-500">{p.name}</p>
                  <p className="text-base font-extrabold text-royal-900">{p.hangul}</p>
                  <p className="mt-1 text-[11px] text-royal-900/60">{p.tag}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function PortraitCard({ player }: { player: Player }) {
  const [failed, setFailed] = useState(false);
  const initial = player.hangul.slice(0, 1);

  return (
    <div className={"card relative overflow-hidden bg-gradient-to-br " + player.accent}>
      <div className="relative aspect-[3/4] w-full">
        {!failed ? (
          <Image
            src={player.photo}
            alt={`${player.hangul} 선수`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-top"
            onError={() => setFailed(true)}
          />
        ) : (
          <PlayerSilhouette initial={initial} className="absolute inset-0 h-full w-full" />
        )}
        <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-royal-700 backdrop-blur">
          {player.role}
        </span>
        <TennisBall
          size={32}
          className="absolute right-4 top-4 drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <p className="text-[11px] font-bold uppercase tracking-[.18em] opacity-80">
            #TeamKorea
          </p>
          <p className="text-2xl font-extrabold leading-tight">{player.hangul}</p>
        </div>
      </div>
    </div>
  );
}

function MiniPhoto({ player }: { player: Player }) {
  const [failed, setFailed] = useState(false);
  const initial = player.hangul.slice(0, 1);
  return (
    <div className={"relative aspect-square w-full overflow-hidden bg-gradient-to-br " + player.accent}>
      {!failed ? (
        <Image
          src={player.photo}
          alt=""
          fill
          sizes="(max-width: 768px) 50vw, 22vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      ) : (
        <PlayerSilhouette initial={initial} className="absolute inset-0 h-full w-full" />
      )}
    </div>
  );
}

function Stat({
  label,
  value,
  small,
}: {
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-royal-50/60 p-4">
      <p className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
        {label}
      </p>
      <p
        className={
          "mt-1 font-extrabold text-royal-900 " + (small ? "text-sm" : "text-lg")
        }
      >
        {value}
      </p>
    </div>
  );
}

function Card({
  chip,
  title,
  body,
}: {
  chip: string;
  title: string;
  body: string;
}) {
  return (
    <div className="card p-6 md:p-7">
      <span className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
        {chip}
      </span>
      <h3 className="mt-2 text-xl font-extrabold text-royal-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-royal-900/70">{body}</p>
    </div>
  );
}

function ListCard({
  chip,
  title,
  items,
  accent,
}: {
  chip: string;
  title: string;
  items: string[];
  accent: "ball" | "royal";
}) {
  return (
    <div className="card p-6 md:p-7">
      <span className="text-[11px] font-bold uppercase tracking-[.18em] text-royal-500">
        {chip}
      </span>
      <h3 className="mt-2 text-xl font-extrabold text-royal-900">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-royal-900/85">
            <span
              className={
                "mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full " +
                (accent === "ball" ? "bg-ball-400" : "bg-royal-500")
              }
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}
