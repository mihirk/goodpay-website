import Image from "next/image";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionContainer from "@/components/section-container";
import CTAButton from "../cta-button";
export default function APISection() {
  return (
    <SectionContainer id="api">
      <SectionHeader
        title="Start building today."
        description="Get started at no cost by requesting your financial institution’s API key. We offer API documentation and Sandbox environment to build mobile-based P2P and C2B products in weeks–not years."
      />
      <Link href="https://docs.getgoodpay.com/api/create-identifier" target="_blank">
        <div className="relative overflow-hidden aspect-video">
          <Image src="/images/goodpay_api.png" alt="GoodPay API Key" fill className="object-contain" />
        </div>
      </Link>

      <div className="mx-auto flex gap-4">
        <CTAButton variant="default" size="lg" text="Request your API key" href="mailto:support@getgoodpay.com" />
      </div>
    </SectionContainer>
  );
}
