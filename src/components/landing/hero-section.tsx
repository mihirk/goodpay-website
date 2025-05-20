import CTAButton from "../cta-button";

export default function HeroSection() {
  return (
    <section className="h-screen px-4 md:px-16 xl:px-32 2xl:px-64" id="hero">
      <div className="grid grid-rows-[1fr_auto_auto] h-full w-full items-center justify-center text-center">
        <div className="row-start-1 w-full">
          <div>
            <h1 className="mb-8 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] md:leading-[1.2]">
              Instant payments between banks and financial institutions.
            </h1>
          </div>

          <div className="mb-12 w-full md:w-2/3 mx-auto text-lg text-muted-foreground">
            <h2 className="text-xl">
              GoodPay is an open P2P network that enables real-time, cross-border payments between banks and financial
              institutions.
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton variant="default" size="lg" text="Become a partner" href="mailto:support@getgoodpay.com" />
            <CTAButton variant="outline" size="lg" text="Explore our API" href="https://docs.getgoodpay.com/guides" />
          </div>
        </div>

        <div className="row-start-2 w-full"></div>
        <div className="row-start-3 w-full">
          {/* <div className="relative rounded-2xl overflow-hidden h-full w-full space-y-4">
            <h3 className="text-normal uppercase font-normal">Partners</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Image src="/images/partners/logo-1.png" alt="Partner 1" width={100} height={100} />
              <Image src="/images/partners/logo-2.png" alt="Partner 2" width={100} height={100} />
              <Image src="/images/partners/logo-3.png" alt="Partner 3" width={100} height={100} />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
