import Image from "next/image";
import SectionContainer from "./section-container";
import { Separator } from "./ui/separator";
import CTAButton from "./cta-button";
import { Banknote, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

export interface SectionTwoColumnsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SectionTwoColumnsProps {
  id: string;
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
  items: SectionTwoColumnsItem[];
  ctaText?: string;
  ctaHref?: string;
  reverse?: boolean;
}
export default function SectionTwoColumns({
  id,
  title,
  subtitle,
  image,
  items,
  ctaText,
  ctaHref = "",
  reverse = false,
}: SectionTwoColumnsProps) {
  return (
    <SectionContainer id={id}>
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:space-x-12 items-center",
          reverse && "sm:[&>*:first-child]:order-2 sm:[&>*:last-child]:order-1"
        )}
      >
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[9/16] max-h-[50vh] sm:max-h-[80vh] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-8">
          <span className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-xs font-medium w-fit">
            <Banknote className="w-4 h-4 text-primary" />
            {subtitle}
          </span>
          <h2 className="text-2xl md:text-5xl font-semibold text-primary leading-tight">{title}</h2>
          <ul className="flex flex-col gap-3">
            <Separator className="my-4" />
            {items.map((item) => (
              <React.Fragment key={item.title}>
                <li className="flex gap-4 items-start">
                  <span className="bg-muted rounded-full p-2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </li>
                <Separator className="my-4" />
              </React.Fragment>
            ))}
          </ul>
          {ctaText && <CTAButton text={ctaText} size="default" variant="default" href={ctaHref} />}
        </div>
      </div>
    </SectionContainer>
  );
}
