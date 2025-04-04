import Image from "next/image";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionContainer from "@/components/section-container";
export default function APISection() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Start building today."
        description="Get started at no cost by requesting your financial institution’s API key. We offer API documentation and Sandbox environment to build mobile-based peer-to-peer and customer-to-business products in weeks–not years."
      />
      <Link href="https://docs.getgoodpay.com/api/create-identifier" target="_blank">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
          <Image src="/images/goodpay_api.png" alt="GoodPay API Key" fill className="object-contain" />
        </div>
      </Link>

      <div className="mx-auto flex gap-4">
        <Button variant="default" className="w-fit p-8 rounded-full text-sm">
          Request access
        </Button>
      </div>
    </SectionContainer>
  );
}
