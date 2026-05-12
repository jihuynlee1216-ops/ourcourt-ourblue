import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { players, getPlayer } from "@/data/players";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlayerDetail } from "@/components/PlayerDetail";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return players.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = getPlayer(params.slug);
  if (!p) return { title: "선수를 찾을 수 없습니다 — BLEUM" };
  return {
    title: `${p.hangul} (${p.name}) — BLEUM`,
    description: `${p.hangul} 선수 프로필. ${p.desc}`,
  };
}

export default function PlayerPage({ params }: Params) {
  const player = getPlayer(params.slug);
  if (!player) notFound();
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <PlayerDetail player={player} />
      <Footer />
    </main>
  );
}
