import { Globe } from "lucide-react";
import { Repeat, Zap } from "lucide-react";
import SectionTwoColumns, { SectionTwoColumnsItem } from "../section-two-columns";

const data: SectionTwoColumnsItem[] = [
  {
    icon: Repeat,
    title: "Interoperable across institutions",
    description:
      "GoodPay is a network of banks & financial institutions that allows to send and receive instant payments across institutions, borders, and platforms.",
  },
  {
    icon: Zap,
    title: "Compatible with existing infrastructure",
    description:
      "The GoodPay standard is  rail-agnostic, enabling members to unlock interoperable payments across FPS in the UK, SEPA Instant in Europe, or stablecoin networks.",
  },
  {
    icon: Globe,
    title: "Open governance",
    description:
      "GoodPay is designed to foster trust, collaboration, and scalable growth across the financial ecosystem. Members can shape its evolution—requesting features, proposing changes—with a long-term goal of becoming an ISO-recognized protocol.",
  },
];

export default function PropositionSection() {
  return (
    <SectionTwoColumns
      id="proposition"
      title="Connecting the world of instant payments."
      subtitle="For banks & financial institutions"
      image={{
        src: "/images/goodpay_cross_bank_p2p.png",
        alt: "GoodPay cross-bank P2P",
      }}
      ctaText="Discover GoodPay"
      ctaHref="https://docs.getgoodpay.com/"
      reverse={false}
      items={data}
    />
  );
}
