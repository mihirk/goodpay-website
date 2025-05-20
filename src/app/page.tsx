"use client";
import HeroSection from "@/components/landing/hero-section";
import PropositionSection from "@/components/landing/proposition-section";
import SendSection from "@/components/landing/send-section";
import ReceiveSection from "@/components/landing/receive-section";
import APISection from "@/components/landing/api-section";
import TeamSection from "@/components/landing/team-section";
import JoinSection from "@/components/landing/join-section";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import FinanceSection from "@/components/landing/finance-section";
// import QuoteSection from "@/components/landing/quote-section";
export default function HomePage() {
  // const handleScrollTo = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="flex h-full flex-col items-center justify-between">
      <HeroSection />
      {/*<QuoteSection />*/}
      <PropositionSection />
      <HowItWorksSection />
      <ReceiveSection />
      <SendSection />
      {/* <C2BSection /> */}
      <FinanceSection />
      <APISection />
      {/* <PricingSection /> */}
      <TeamSection />
      {/* <ConnectingSection /> */}
      <JoinSection />
    </div>
  );
}
