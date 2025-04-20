import Image from "next/image";
import SectionHeader from "@/components/section-header";
import SectionContainer from "@/components/section-container";
import Link from "next/link";
import { motion } from "framer-motion";

const propositionItems = [
  {
    title: "Peer-to-peer",
    description: "Domestic and cross-border P2P payments.",
    href: "#p2p",
    image: "/images/goodpay_cross_bank_p2p.png",
  },
  {
    title: "Consumer to business",
    description: "In-person and online payments.",
    href: "#c2b",
    image: "/images/goodpay_c2b.png",
  },
];

export default function PropositionSection({ handleScrollTo }: { handleScrollTo: (id: string) => void }) {
  return (
    <SectionContainer id="proposition">
      <SectionHeader
        title="Launch instant payment methods."
        description="GoodPay enables financial institutions to quickly build instant payment solutions, like Tap to Pay on FPS, interoperable P2P on SEPA Instant, or 24/7 global transactions with stablecoins."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 md:px-16 xl:px-32 2xl:px-64">
        {propositionItems.map((item, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src={item.image}
                sizes={"256"}
                alt={item.title}
                fill
                className="object-cover object-left md:object-center"
              />
            </div>
            <div className="text-right">
              <motion.div onClick={() => handleScrollTo(item.href.replace("#", ""))}>
                <Link href={item.href} className="text-base font-semibold">
                  {item.title}
                </Link>
              </motion.div>
              <h4 className="text-base text-muted-foreground">{item.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
