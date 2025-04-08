import Link from "next/link";
import { Button } from "./ui/button";

export default function CTAButton({
  text,
  size,
  variant,
  href,
}: {
  text: string;
  size: "lg" | "sm" | "default" | "icon" | null;
  variant: "default" | "secondary" | "outline" | "ghost" | "link" | null;
  href: string;
}) {
  return (
    <div className="flex gap-4">
      <Link href={href} target="_blank">
        <Button variant={variant} size={size} className="p-8 h-12 rounded-full text-sm">
          {text}
        </Button>
      </Link>
    </div>
  );
}
