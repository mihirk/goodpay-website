import SectionHeader from "@/components/section-header";
import SectionContainer from "@/components/section-container";

const pricingItems = [
  {
    title: "Account creation.",
    description:
      "Your financial institution is billed monthly for each new customer identifier created. Personal customer identifiers are not charged. This allows features like P2P payments to be launched at no cost.",
  },
  {
    title: "Registry query.",
    description:
      "A flat fee applies each time a customer initiates a mobile payment, and we return the response. Your institution can cache this response to make each transaction free.",
  },
];

export default function APISection() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Transparent fixed-fee model."
        description="Unlike complex percentage-based fees, Goodpay believes in simplicity, and extreme transparency. We charge two simple fees — eliminating unpredictable costs and aligning incentives across the network."
      />

      <div className="container mx-auto px-4 lg:px-32 xl:px-64 grid grid-cols-1 md:grid-cols-2 gap-4">
        {pricingItems.map((item, index) => (
          <div className="flex flex-col gap-4 rounded-2xl p-8 bg-muted" key={index}>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
