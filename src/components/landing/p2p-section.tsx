import Image from "next/image";
import SectionHeader from "../section-header";
import SectionContainer from "@/components/section-container";

export default function P2PSection() {
  return (
    <SectionContainer id="p2p">
      <SectionHeader
        title="Send and receive money."
        description="We enable free, interoperable P2P payments between any financial institution in the GoodPay network—think PayPal or Venmo, but fully integrated into your app."
      />
      <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-video">
        <Image
          src="/images/goodpay_p2p_c.png"
          alt="GoodPay P2P"
          fill
          className="object-contain object-left md:object-center"
        />
      </div>
    </SectionContainer>
  );
}
