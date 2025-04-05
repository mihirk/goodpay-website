import SectionHeader from "@/components/section-header";
import Image from "next/image";
import SectionContainer from "@/components/section-container";
export default function TeamSection() {
  return (
    <SectionContainer id="team">
      <SectionHeader
        title="Built by a team of finance experts."
        description="We built financial products and security systems at some of the largest and most regulated financial companies, including Wise and JPMorgan Chase."
      />

      <div className="flex justify-center">
        <div className="flex items-center justify-center gap-16">
          <div>
            <Image
              src="/images/wise-logo-green-dark.png"
              alt="Wise"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/images/jpmorgan-chase-logo.png"
              alt="JPMorgan"
              width={256}
              height={256}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
