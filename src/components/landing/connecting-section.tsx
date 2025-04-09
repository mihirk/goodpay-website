import SectionHeader from "@/components/section-header";
import Image from "next/image";
import SectionContainer from "@/components/section-container";

export default function ConnectingSection() {
  return (
    <SectionContainer id="connecting">
      <SectionHeader
        title="Connecting the world of instant payments."
        description="Enable your customers to move money faster, cheaper, and more conveniently—without relying on international card networks. We're building the infrastructure to make payments as easy as Apple Pay or Google Pay."
      />

      <div className="relative rounded-2xl overflow-hidden aspect-square max-h-[300px] md:aspect-video">
        <Image
          src="/images/goodpay_connecting_the_world.png"
          alt="GoodPay - Connecting the world of instant payments"
          fill
          className="object-contain object-left md:object-center grayscale"
        />
      </div>
    </SectionContainer>
  );
}
