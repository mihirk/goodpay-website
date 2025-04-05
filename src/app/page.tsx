"use client";
import HeroSection from "@/components/landing/hero-section";
import PropositionSection from "@/components/landing/proposition-section";
import P2PSection from "@/components/landing/p2p-section";
import C2BSection from "@/components/landing/c2b-section";
import APISection from "@/components/landing/api-section";
import TeamSection from "@/components/landing/team-section";
import ConnectingSection from "@/components/landing/connecting-section";
import JoinSection from "@/components/landing/join-section";
// import QuoteSection from "@/components/landing/quote-section";
export default function HomePage() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-between">
      <HeroSection />
      {/*<QuoteSection />*/}
      <PropositionSection handleScrollTo={handleScrollTo} />
      <P2PSection />
      <C2BSection />
      <APISection />
      {/* <PricingSection /> */}
      <TeamSection />
      <ConnectingSection />
      <JoinSection />
    </div>
  );
}
