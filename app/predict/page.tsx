import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PredictDetail } from "@/components/PredictDetail";

export const metadata: Metadata = {
  title: "승부 예측 — Davis Cup 한국 vs 인도 | BLEUM",
  description:
    "2026 데이비스컵 한국 vs 인도, 5경기 승부를 예측하고 선수 싸인 상품을 받아가세요.",
};

export default function PredictPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <PredictDetail />
      <Footer />
    </main>
  );
}
