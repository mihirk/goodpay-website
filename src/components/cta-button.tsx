import { Button } from "./ui/button";

export default function CTAButton({
  text,
  size,
  variant,
}: {
  text: string;
  size: "lg" | "sm" | "default" | "icon" | null;
  variant: "default" | "secondary" | "outline" | "ghost" | "link" | null;
}) {
  return (
    <div className="flex gap-4">
      <Button variant={variant} size={size} className="p-8 h-12 rounded-full text-sm">
        {text}
      </Button>
    </div>
  );
}
