import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SectionHeader from "../section-header";

export default function JoinSection() {
  return (
    <section className="container px-4 py-4 mx-auto h-screen flex flex-col justify-center items-center gap-8">
      <div className="bg-[#121212] text-white rounded-2xl p-16 w-full h-full flex flex-col justify-center items-center gap-8">
        <SectionHeader
          title="Join a globally connected network of banks and fintechs."
          description="Working at a financial institution? Enter your work e-mail to get started."
          color="dark"
        />
        <div className="flex flex-col gap-4 w-1/3">
          <Input type="email" placeholder="Enter your work e-mail" className="w-full h-12 bg-white" />
          <Button>Join the network</Button>
        </div>
      </div>
    </section>
  );
}
