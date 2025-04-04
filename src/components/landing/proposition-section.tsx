import Image from "next/image";
import SectionHeader from "@/components/section-header";
import SectionContainer from "@/components/section-container";
const propositionItems = [
  {
    title: "Peer-to-peer",
    description: "Intra bank, and Inter bank",
    image: "/images/goodpay_cross_bank_p2p.png",
  },
  {
    title: "Consumer to business",
    description: "In-person and online",
    image: "/images/goodpay_c2b.png",
  },
];

export default function PropositionSection() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Create convenient payment journeys on instant networks."
        description="GoodPay helps financial companies of all sizes—from small fintechs to major banks—create mobile payment products that work on instant payment networks (like FPS in the UK or SEPA Instant in Europe), instead of traditional card networks."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-16 md:px-16 xl:px-32 2xl:px-64">
        {propositionItems.map((item, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image src={item.image} alt={item.title} fill className="object-cover scale-80" />
            </div>
            <div className="text-right">
              <h2 className="text-base font-semibold">{item.title}</h2>
              <h4 className="text-base text-muted-foreground">{item.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
