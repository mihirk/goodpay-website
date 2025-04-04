import SectionHeader from "@/components/section-header";
import Image from "next/image";
import SectionContainer from "@/components/section-container";

export default function ConnectingSection() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Connecting the world of instant payments."
        description="Move money faster, cheaper, and more conveniently—without relying on international card networks. We help make a decision as to which network is the cheapest option for them."
      />

      <div className="relative rounded-2xl overflow-hidden h-[450px]">
        <Image
          src="/images/goodpay_connecting_the_world.png"
          alt="GoodPay - Connecting the world of instant payments"
          fill
          className="object-contain grayscale"
        />
      </div>
    </SectionContainer>
  );
}
