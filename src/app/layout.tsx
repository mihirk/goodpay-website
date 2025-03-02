import type {Metadata} from "next";

import "./globals.css";


export const metadata: Metadata = {
    title: "good pay",
    description: "global payments standard",
    icons: {
        icon: "/favicon.ico",
        "apple": "/apple-touch-icon.png",
        "shortcut": "/favicon.ico",
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
