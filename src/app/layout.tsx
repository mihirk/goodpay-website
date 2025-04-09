import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://getgoodpay.com"),
    title: "GoodPay",
    applicationName: "GoodPay",
    creator: "GoodPay",
    description: "Launch payment experiences on instant payments rails.",
    icons: {
      icon: "/icon.webp",
      shortcut: "/icon.webp",
    },
    keywords: [
      "instant payments",
      "real-time payments",
      "FPS",
      "SEPA Instant",
      "infrastructure",
      "network",
      "services",
      "products",
      "network",
      "technology",
      "fintech",
      "finance",
      "qr-code payments",
      "qrcode payments",
      "c2b payments",
      "retail payments",
      "p2p payments",
    ],
    alternates: {
      canonical: "https://getgoodpay.com",
      languages: {
        "en-US": "https://getgoodpay.com",
      },
    },
    category: "finance",
    openGraph: {
      title: "GoodPay",
      description: "Launch payment experiences on instant payments rails.",
      type: "website",
      url: "https://getgoodpay.com",
      locale: "en_US",
      siteName: "getgoodpay.com",
      images: [{ url: "/icon.webp" }],
    },
    twitter: {
      title: "GoodPay",
      description: "Launch payment experiences on instant payments rails.",
      card: "summary_large_image",
      site: "@getgoodpay",
      images: ["/icon.webp"],
    },
    referrer: "no-referrer",
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    manifest: "/manifest.webmanifest",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>
        <GoogleAnalytics gaId="G-Y61JZFVM4B" />
        <GoogleTagManager gtmId="G-Y61JZFVM4B" />
        <Navbar />
        <main className="h-full container mx-auto">{children}</main>
      </body>
    </html>
  );
}
