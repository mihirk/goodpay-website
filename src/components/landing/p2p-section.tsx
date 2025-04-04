import Image from "next/image";
import SectionHeader from "../section-header";
import SectionContainer from "@/components/section-container";

export default function P2PSection() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Send and receive money across financial institutions."
        description="We enable peer-to-peer (P2P) payments within, and across financial institutions. Think PayPal but free, fully interoperable, and embedded straight into your financial app."
      />
      <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
        <Image src="/images/goodpay_p2p_c.png" alt="GoodPay P2P" fill className="object-contain" />
      </div>
    </SectionContainer>
  );
}
