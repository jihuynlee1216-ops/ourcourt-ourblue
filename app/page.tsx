import { CTA } from "@/components/CTA";
import { DavisCupIntro } from "@/components/DavisCupIntro";
import { FeatureCards } from "@/components/FeatureCards";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Players } from "@/components/Players";
import { PredictBanner } from "@/components/PredictBanner";
import { Quiz } from "@/components/Quiz";
import { TennisGuide } from "@/components/TennisGuide";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <Hero />
      <FeatureCards />
      <DavisCupIntro />
      <Players />
      <TennisGuide />
      <Quiz />
      <PredictBanner />
      <CTA />
      <Footer />
    </main>
  );
}
