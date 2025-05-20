import { Coins, Plug, Repeat } from "lucide-react";
import SectionTwoColumns, { SectionTwoColumnsItem } from "../section-two-columns";

const data: SectionTwoColumnsItem[] = [
  {
    icon: Repeat,
    title: "Settle directly on instant rails.",
    description:
      "Inbound transfers clear immediately over SEPA Instant, FPS or stablecoin rails. Funds settle straight into your institution’s accounts, under your control.",
  },
  {
    icon: Plug,
    title: "Integrate one API.",
    description:
      "Enabling receive payments from any participating member doesn't require any frontend changes. Integrate in under a week via a single API endpoint, preserving your existing front-end and branding while unlocking cross-institution receive capability.",
  },
  {
    icon: Coins,
    title: "Enable your customers to receive more.",
    description:
      "Consolidate disparate split-bill and payment-request flows into one interoperable standard, reducing reliance on card schemes and costly PISP.",
  },
];
export default function ReceiveSection() {
  return (
    <SectionTwoColumns
      id="receive"
      title="Receive money."
      subtitle="For banks & financial institutions"
      image={{
        src: "/images/goodpay_tap_and_go.png",
        alt: "GoodPay tap and go",
      }}
      items={data}
      ctaText="View payment flow"
      ctaHref="https://docs.getgoodpay.com/how-it-works/payment-flow"
    />
  );
}
