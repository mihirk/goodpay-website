"use client";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

const products = [
  {
    title: "Peer-to-peer",
    href: "#p2p",
    description: "Make instant payments across financial institutions.",
  },
  {
    title: "Consumer to business",
    href: "#c2b",
    description: "Accept in-person and online instant payments.",
  },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 100,
    restDelta: 100,
  });

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderDesktopNav = () => (
    <div className="z-50 fixed top-0 left-0 right-0 mx-auto flex justify-center h-24 w-full items-center gap-4 px-4">
      <motion.div className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left" style={{ scaleX }} />
      <div className="w-full md:w-fit flex items-center justify-between gap-4 border px-3 py-3 rounded-2xl border-muted-foreground/20 bg-background backdrop-blur-sm">
        <Link href="/" className="no-underline decoration-none flex items-center ml-4 space-x-1">
          <Image src="/images/goodpay_logo_256.png" alt="GoodPay" width={16} height={16} />
          <span className="font-semibold text-lg tracking-tighter">GoodPay</span>
        </Link>

        <NavigationMenu delayDuration={0}>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="font-normal">Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Image src="/images/goodpay_logo_256.png" alt="GoodPay" width={32} height={32} />
                        <div className="mb-2 mt-4 tracking-tighter text-xl font-semibold">GoodPay</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Building payment methods on instant rails.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {products.map((product) => (
                    <li key={product.title}>
                      <NavigationMenuLink asChild>
                        <div className="flex flex-col gap-2">
                          <motion.div onClick={() => handleScrollTo(product.href.replace("#", ""))}>
                            <Link href={product.href} className="flex flex-col gap-2">
                              <p className="text-lg font-semibold">{product.title}</p>
                              <p className="text-sm leading-tight text-muted-foreground">{product.description}</p>
                            </Link>
                          </motion.div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger className="font-normal">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {solutions.map((solution) => (
                    <div key={solution.title}>{solution.description}</div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <NavigationMenuLink className="font-normal" asChild>
                <Link href="https://docs.getgoodpay.com/">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="bg-primary text-primary-foreground" asChild>
                <Link href="https://docs.getgoodpay.com/">Get started</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
  return <>{renderDesktopNav()}</>;
}
