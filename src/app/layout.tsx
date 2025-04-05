import type {Metadata} from "next";
import {Noto_Sans} from "next/font/google";
import "@/styles/globals.css";
import {Navbar} from "@/components/Navbar";
import {routes} from "@/lib/routes";
import {GoogleAnalytics, GoogleTagManager} from '@next/third-parties/google'

const base_url = process.env.NEXT_PUBLIC_BASE_URL || "https://www.getgoodpay.com";

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
    return {
        metadataBase: new URL(base_url + routes.root),
        title: "GoodPay",
        applicationName: "GoodPay",
        creator: "GoodPay",
        description: "GoodPay is Europe's public infrastructure for instant payments.",
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
            canonical: base_url + routes.root,
            languages: {
                "en-US": base_url + routes.root,
            },
        },
        category: "finance",
        openGraph: {
            title: "GoodPay",
            description: "GoodPay is Europe's public infrastructure for instant payments.",
            type: "website",
            url: base_url + routes.root,
            locale: "en_US",
            siteName: "getgoodpay.com",
            images: [{url: "/icon.webp"}],
        },
        twitter: {
            title: "GoodPay",
            description: "GoodPay is Europe's public infrastructure for instant payments.",
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
        <GoogleAnalytics gaId="G-Y61JZFVM4B"/>
        <GoogleTagManager gtmId="G-Y61JZFVM4B"/>
        <Navbar/>
        <main className="h-full container mx-auto">{children}</main>
        </body>
        </html>
    );
}
