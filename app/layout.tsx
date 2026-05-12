import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OUR COURT, OUR BLUE — BLEUM",
  description:
    "팬의 스윙이 국가대표 무대를 만든다. 데이비스컵 한국 대표팀을 응원하는 BLEUM 캠페인.",
  keywords: [
    "Davis Cup",
    "데이비스컵",
    "BLEUM",
    "테니스",
    "Korea Tennis",
    "OUR COURT OUR BLUE",
  ],
};

export const viewport: Viewport = {
  themeColor: "#255CFF",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-royal-900">{children}</body>
    </html>
  );
}
