import Image from "next/image";
import SectionHeader from "@/components/section-header";
import SectionContainer from "@/components/section-container";
import CTAButton from "../cta-button";
export default function APISection() {
  return (
    <SectionContainer id="api">
      <SectionHeader
        title="Start building today."
        description="Get started at no cost by requesting your financial institution’s API key. We offer API documentation and Sandbox environment to build mobile-based P2P and C2B products in weeks–not years."
      />
      <div className="relative overflow-hidden aspect-video">
        <Image src="/images/goodpay_api.png" alt="GoodPay API Key" fill className="object-contain" />
      </div>

      <div className="mx-auto flex gap-4">
        <CTAButton variant="default" size="lg" text="Get started" href="https://docs.getgoodpay.com/" />
      </div>
    </SectionContainer>
  );
}
