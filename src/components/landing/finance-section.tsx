import { Banknote, Coins } from "lucide-react";
import SectionContainer from "@/components/section-container";
import SectionHeader from "@/components/section-header";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Coins className="w-6 h-6" />,
    title: "For e-money institutions (EMI) & payment institutions (PI)",
    description:
      "Grow your institution with a fully interoperable P2P network. GoodPay lets your customers send and receive real-time payments across banks, EMIs and PIs with your existing interface—delivering P2P convenience without card fees, token wallets or separate partners, and giving you full control over the the payment experience with minimal engineering overhead.",
  },
  {
    icon: <Banknote className="w-6 h-6" />,
    title: "For banks",
    description:
      "Modernise your P2P offering to retain and grow customer engagement. With GoodPay, you embed bank-grade interoperable payments directly into your app, enabling account-to-account transfers on real-time rails while maintaining full compliance, fraud controls and branding—closing the gap with challenger banks and keeping volume within your ecosystem.",
  },
];

export default function FinanceSection() {
  return (
    <div className="bg-muted">
      <SectionContainer id="how-it-works">
        <SectionHeader
          title="Built for banks & financial institutions"
          description="GoodPay is a secure, scalable, and open network for financial institutions of all sizes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-start gap-3 p-6 h-full rounded-2xl border bg-card transition-colors"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
