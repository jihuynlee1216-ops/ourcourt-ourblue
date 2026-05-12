"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { TennisBall } from "./Decorations";
import { PlayerSilhouette } from "./PlayerSilhouette";
import { players } from "@/data/players";

export function Players() {
  return (
    <section id="players" className="relative bg-white py-14 md:py-28">
      <TennisBall
        size={28}
        className="pointer-events-none absolute right-[10%] top-20 hidden md:block"
      />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          chip="PLAYERS"
          title={
            <>
              코트 위의 <span className="text-royal-500">국가대표</span>
            </>
          }
          description="대한민국 데이비스컵 대표팀 — 우리의 스윙이 그들을 향한 응원이 됩니다."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-10 overflow-hidden rounded-3xl shadow-card"
        >
          <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
            <Image
              src="/images/team-korea.png"
              alt="대한민국 데이비스컵 국가대표팀 단체 사진"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority={false}
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-royal-900/85 via-royal-900/30 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-8">
              <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[.18em] backdrop-blur">
                #TeamKorea
              </span>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight md:text-4xl">
                태극마크를 단 한 팀, 한 코트
              </h3>
              <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                개인이 아닌 팀으로 싸우는 무대. 다섯 선수가 만드는 한 팀의
                스윙을 만나보세요.
              </p>
            </div>
            <TennisBall
              size={36}
              className="pointer-events-none absolute right-4 top-4 drop-shadow-[0_10px_18px_rgba(0,0,0,0.35)] md:right-8 md:top-8"
            />
          </div>
        </motion.div>

        <ul className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
          {players.map((p, i) => (
            <motion.li
              key={p.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                href={`/players/${p.slug}`}
                aria-label={`${p.hangul} 선수 프로필 보기`}
                className="card group block h-full overflow-hidden transition-transform hover:-translate-y-1"
              >
                <PlayerPhoto
                  photo={p.photo}
                  initial={p.hangul.slice(0, 1)}
                  accent={p.accent}
                  role={p.role}
                />

                <div className="p-4 md:p-5">
                  <p className="text-[11px] font-medium text-royal-500">{p.name}</p>
                  <h3 className="mt-1 text-lg font-extrabold text-royal-900 md:text-xl">
                    {p.hangul}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-royal-900/70 md:text-[13px]">
                    {p.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-royal-50 px-3 py-1 text-[11px] font-bold text-royal-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-ball-300" />
                    {p.tag}
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>

        <ChallengeBanner />
      </div>
    </section>
  );
}

const KTA_INSTAGRAM = "https://www.instagram.com/official_kta?igsh=MWcyNDAybmMxbzl0";

function ChallengeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-royal-500 via-royal-600 to-royal-800 p-7 text-white shadow-card md:mt-14 md:p-12"
    >
      {/* court grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
        }}
      />
      {/* decorative balls */}
      <TennisBall
        size={56}
        className="pointer-events-none absolute -right-4 -top-4 rotate-12 opacity-90 drop-shadow-[0_18px_24px_rgba(0,0,0,0.25)] md:right-6 md:top-6"
      />
      <TennisBall
        size={34}
        className="pointer-events-none absolute bottom-6 left-6 hidden opacity-80 md:block"
      />

      <div className="relative grid grid-cols-1 items-center gap-7 md:grid-cols-[1.4fr_1fr] md:gap-10">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[.18em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-ball-300" />
            Challenge
          </span>
          <h3 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            <span className="italic">BLUE RALLY</span>
            <span className="block text-ball-200/95">SWING FOR KOREA</span>
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
            팬의 한 스윙이 모이면 코트 위 우리 선수들에게 전해집니다. 지금
            <span className="font-bold text-white"> BLUE RALLY 챌린지</span>에
            참여해서, 함께 응원을 만들어 주세요!
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={KTA_INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-royal-700 shadow-card transition-all hover:-translate-y-0.5 md:text-base"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
              챌린지 참여하러 가기
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
            <p className="text-[12px] font-medium text-white/70">
              @official_kta · #BLUE_RALLY · #SwingForKorea
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-1">
          <ChallengeStep
            n="01"
            t="공식 계정 팔로우"
            d="@official_kta 인스타 팔로우"
          />
          <ChallengeStep
            n="02"
            t="응원 영상 업로드"
            d="#BLUE_RALLY #SwingForKorea 해시태그와 @official_kta 태그해서 업로드"
          />
          <ChallengeStep
            n="03"
            t="데이비스컵 오프닝으로"
            d="모인 응원 영상이 데이비스컵 현장 오프닝 영상으로 선수들에게 전해져요"
          />
        </ul>
      </div>
    </motion.div>
  );
}

function ChallengeStep({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">
      <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-white/15 text-sm font-extrabold">
        {n}
      </span>
      <div>
        <p className="text-sm font-extrabold">{t}</p>
        <p className="mt-0.5 text-[12px] text-white/75">{d}</p>
      </div>
    </li>
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

function PlayerPhoto({
  photo,
  initial,
  accent,
  role,
}: {
  photo: string;
  initial: string;
  accent: string;
  role: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={"relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br " + accent}>
      {!failed ? (
        <Image
          src={photo}
          alt=""
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      ) : (
        <PlayerSilhouette initial={initial} className="absolute inset-0 h-full w-full" />
      )}

      <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-royal-700 backdrop-blur md:text-[11px]">
        {role}
      </span>
      <TennisBall
        size={26}
        className="absolute right-3 top-3 transition-transform group-hover:rotate-12"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"
      />
    </div>
  );
}
