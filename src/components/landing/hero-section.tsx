import CTAButton from "../cta-button";

export default function HeroSection() {
  return (
    <section className="h-screen px-4 md:px-16 xl:px-32 2xl:px-64" id="hero">
      <div className="grid grid-rows-[1fr_auto_auto] h-screen items-center text-center">
        <div className="row-start-1 place-self-center w-full">
          <div>
            <h1 className="mb-8 text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] md:leading-[1.2]">
              Launch payment experiences on instant payments rails.
            </h1>
          </div>

          <div className="mb-12 w-full md:w-2/3 mx-auto text-lg text-muted-foreground">
            <h2 className="text-xl">
              GoodPay enables financial institutions to build P2P, in-person, and online payment experiences using
              instant payments rails instead of international card networks–faster, cheaper, and more convenient.
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton variant="outline" size="lg" text="Explore our API" href="https://docs.getgoodpay.com/guides" />
            <CTAButton variant="default" size="lg" text="Request your API key" href="mailto:support@getgoodpay.com" />
          </div>
        </div>
      </div>
    </section>
  );
}
