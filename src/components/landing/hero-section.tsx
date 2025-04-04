import CTAButton from "../cta-button";

export default function HeroSection() {
  return (
    <div className="container relative mx-auto">
      <div className="grid grid-rows-[1fr_auto_auto] h-screen text-center">
        <div className="row-start-1 place-self-center w-full sm:w-3/5">
          <div>
            <h1 className="mb-8 text-7xl font-medium tracking-tight">
              Eliminating the tax
              <br />
              on the world&apos;s economy
            </h1>
          </div>

          <div className="mb-12 w-2/3 mx-auto text-lg text-muted-foreground">
            <h2 className="text-xl">
              GoodPay is Europe&apos;s public infrastructure for instant payments. We connect individuals, businesses,
              banks, and fintechs, directly—cutting out intermediaries to grow the world&apos;s economy, not
              international duopolies.
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton variant="outline" size="lg" text="Explore our API" />
            <CTAButton variant="default" size="lg" text="Get your API key" />
          </div>
        </div>
        {/* 
        <div className="row-start-3 place-self-center">
          <p className="text-lg font-medium">By the people from</p>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
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
                alt="JP Morgan Chase & Co."
                width={256}
                height={256}
                className="object-contain"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
