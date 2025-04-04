"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  title: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }> | null;
  isGlowing?: boolean;
}

const data: NavItem[] = [
  {
    title: "Home",
    url: "/",
    icon: null,
    isGlowing: true,
  },

  {
    title: "Projects",
    url: "/projects",
    icon: null,
    isGlowing: false,
  },
  {
    title: "About",
    url: "/about",
    icon: null,
    isGlowing: false,
  },
  {
    title: "Art",
    url: "/art",
    icon: null,
    isGlowing: false,
  },
];

const products = [
  {
    title: "Peer-to-peer",
    href: "/products/p2p",
    description: "Send and receive money across financial institutions.",
  },
  {
    title: "Consumer to business",
    href: "/products/c2b",
    description: "Accept payments in-person and online with our secure payment gateway.",
  },
];

const solutions = [
  {
    title: "For Startups",
    href: "/solutions/startups",
    description: "Everything you need to start accepting payments.",
  },
  {
    title: "For Enterprise",
    href: "/solutions/enterprise",
    description: "Custom solutions for large organizations.",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;
  const renderMobileNav = () => {
    const NavItems = () => (
      <div className="flex flex-col gap-4 items-end w-full h-full p-4">
        {data.map((item) => (
          <Button
            key={item.title}
            variant="ghost"
            size="icon"
            className={`w-full text-base flex justify-end px-4 hover:bg-primary/20 ${
              pathname === item.url && "bg-primary/20 w-fit"
            }`}
            onClick={() => {
              router.push(item.url);
              setIsOpen(false);
            }}
          >
            {item.title}
          </Button>
        ))}
      </div>
    );

    return (
      <div className=" md:hidden flex items-center justify-end p-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <Menu className="h-9 w-9" strokeWidth={1} />
            </div>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex justify-end">
              <SheetClose asChild>
                <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
                  <X className="h-9 w-9" strokeWidth={1} />
                </div>
              </SheetClose>
            </div>
            <VisuallyHidden>
              <SheetHeader className="hidden">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
            </VisuallyHidden>
            <NavItems />
          </SheetContent>
        </Sheet>
      </div>
    );
  };

  const renderDesktopNav = () => (
    <div className="z-50 absolute top-0 left-0 right-0 hidden md:flex md:justify-center h-24 w-full items-center gap-4">
      <div className="flex items-center gap-6">
        <Link href="/" className="no-underline decoration-none flex items-center space-x-2">
          <Image src="/images/goodpay_logo_256.png" alt="GoodPay" width={32} height={32} />
          <span className="font-bold">GoodPay</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Image src="/images/goodpay_logo_256.png" alt="GoodPay" width={32} height={32} />
                        <div className="mb-2 mt-4 text-lg font-medium">GoodPay</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Modern payment infrastructure for the internet
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {products.map((product) => (
                    <li key={product.title}>
                      <NavigationMenuLink asChild>
                        <div className="flex flex-col gap-2">
                          <Link href={product.href}>{product.title}</Link>
                          <p className="text-sm leading-tight text-muted-foreground">{product.description}</p>
                        </div>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {solutions.map((solution) => (
                    <div key={solution.title}>{solution.description}</div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/* <Link href="/developers" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Developers</NavigationMenuLink>
              </Link> */}
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/* <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
              </Link> */}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
  return (
    <>
      {renderMobileNav()}
      {renderDesktopNav()}
    </>
  );
}
