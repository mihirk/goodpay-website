import { Plug, Send, Scale } from "lucide-react";
import SectionContainer from "@/components/section-container";
import SectionHeader from "@/components/section-header";
import { Button } from "../ui/button";
import Link from "next/link";
interface Step {
  icon: React.ReactNode;
  title: string;
  description: string | React.ReactNode;
}

const steps: Step[] = [
  {
    icon: <Plug className="w-6 h-6" />,
    title: "Connect",
    description: (
      <div className="flex flex-col gap-2">
        Request access to become a member of GoodPay&apos;s network of banks and financial institutions.{" "}
        <div className="space-y-2">
          <Button variant="link" asChild className="p-0">
            <Link href="mailto:support@getgoodpay.com">Become a partner →</Link>
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: "Build",
    description: (
      <div className="flex flex-col gap-2">
        Plug into our API to enable your customers to receive and send instant payments between participating members.
        <div className="space-y-2">
          <Button variant="link" asChild className="p-0">
            <Link href="https://docs.getgoodpay.com/api">Read about our API →</Link>
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Scale",
    description: (
      <div className="flex flex-col gap-2">
        Add more features to enable your business customers to accept payments via Tap to Pay, QR codes, and more.
        <div className="space-y-2">
          <Button variant="link" asChild className="p-0">
            <Link href="https://docs.getgoodpay.com/how-it-works/payment-flow">Read about use-cases →</Link>
          </Button>
        </div>
      </div>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <div className="bg-muted">
      <SectionContainer id="how-it-works">
        <SectionHeader title="How it works" description="A simple three-step process to get started with GoodPay" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-start gap-3 p-6 h-full rounded-2xl border bg-card transition-colors"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <div className="text-muted-foreground">{step.description}</div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
