import SectionHeader from "../section-header";
import { Button } from "../ui/button";
import Link from "next/link";
export default function JoinSection() {
  return (
    <section id="join" className="container px-4 py-4 mx-auto h-screen flex flex-col justify-center items-center gap-8">
      <div className="bg-[#121212] text-white rounded-2xl p-16 w-full h-full flex flex-col justify-center items-center gap-8">
        <SectionHeader
          title="Join a globally connected network of financial institutions."
          description="Working at a financial institution? Request access to the network with your work e-mail."
          color="dark"
        />
        <div className="flex flex-col justify-center items-center gap-4 w-1/3">
          {/* <Input type="email" placeholder="Enter your work e-mail" className="w-full h-12 bg-white" /> */}
          <Link href="mailto:support@getgoodpay.com" target="_blank">
            <Button variant="outline" size="lg" className="p-8 h-12 rounded-full text-sm text-primary">
              Request access
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
