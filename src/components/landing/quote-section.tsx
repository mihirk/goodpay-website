import SectionContainer from "../section-container";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 h-[450px]">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-start gap-4">
            <Image src="/images/wise-logo-green-dark.png" alt="Wise Logo" width={100} height={100} />
            <p className="text-3xl">
              “Building a card-like experience on instant networks is extremely complex for any financial
              institution–GoodPay unlocks an entire ecosystem.”
            </p>
          </div>
          <div>
            <p className="text-xl text-muted-foreground text-right">
              <span>– John Doe, CPO, Wise.</span>
            </p>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 rounded-2xl overflow-hidden">
          <Image src="/images/wise-quote-image.jpg" alt="Wise Section Image" fill className="object-cover" />
        </div>
      </div>
    </SectionContainer>
  );
}
