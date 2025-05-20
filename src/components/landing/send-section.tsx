import SectionTwoColumns, { SectionTwoColumnsItem } from "../section-two-columns";
import { Repeat, Send } from "lucide-react";

const data: SectionTwoColumnsItem[] = [
  {
    icon: Send,
    title: "Network-wide reach.",
    description:
      "Enable your customers to make P2P payments to any bank, e-money or payment institutions member of GoodPay. Leverage real-time rails for direct settlement—your institution remains the sole custodian of funds.",
  },
  {
    icon: Repeat,
    title: "Modular integration.",
    description:
      "Deploy with full backend control or accelerate with our mobile SDK. Go live in 1–3 months under your institution’s security policy and protocols.",
  },
  {
    icon: Repeat,
    title: "From partial to full P2P.",
    description:
      "Deliver true P2P interoperability across all participants, eliminate per-transaction PISP charges, and offer broader coverage at a lower total cost of ownership.",
  },
];
export default function SendSection() {
  return (
    <SectionTwoColumns
      id="send"
      title="Send money."
      subtitle="For banks & financial institutions"
      image={{
        src: "/images/goodpay_p2p_c.png",
        alt: "GoodPay P2P",
      }}
      items={data}
      ctaText="View payment flow"
      ctaHref="https://docs.getgoodpay.com/how-it-works/payment-flow"
      reverse={true}
    />
  );
}
