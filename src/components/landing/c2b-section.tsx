import Image from "next/image";
import SectionHeader from "../section-header";
import SectionContainer from "@/components/section-container";

export default function C2BSection() {
  return (
    <SectionContainer id="c2b">
      <SectionHeader
        title="Instant, tap-to-go experience."
        description="We give business customers the ability to accept in-person and online instant payments (C2B), just with a mobile–ensuring 35x cheaper transactions, and real-time access to funds for merchants."
      />
      <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[16/9]">
        <Image
          src="/images/goodpay_tap_and_go.png"
          alt="GoodPay Tap and Go"
          fill
          className="object-contain object-left md:object-center"
        />
      </div>
    </SectionContainer>
  );
}
