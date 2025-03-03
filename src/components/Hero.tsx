"use client";

import Image from "next/image";

// List of hero images with text and position
const heroImages = [
    {
        src: "/hero1.svg",
        alt: "cross bank qr/nfc",
        text: "Cross bank payments via QR Code or NFC",
    },
    {
        src: "/hero2.svg",
        alt: "cross bank alias",
        text: "Cross bank payments via phone number or email",
    },
    {
        src: "/hero3.svg",
        alt: "same bank alias",
        text: "Same bank payments via phone number or email",
    },
    {
        src: "/hero4.svg",
        alt: "same bank qr/nfc",
        text: "Same bank payments via QR Code or NFC",
    },
    {
        src: "/hero5.svg",
        alt: "c2b transaction",
        text: "An in-person retail transaction",
    },
];

export default function Hero() {
    return (
        <div>
            {heroImages.map((hero, idx) => (
                <section
                    key={idx}
                    className="container mx-auto px-6 flex flex-col md:flex-row items-center min-h-screen py-32"
                >
                    {/* Left Side - Hero Image with Header */}
                    <div className="md:w-[70%] w-full flex flex-col items-center">
                        {/* Header Above Image */}
                        <h1 className="text-4xl font-bold text-center text-gray-900 pb-4">
                            {hero.text}
                        </h1>

                        {/* Hero Image Container - Preventing Overlap */}
                        <div className="relative w-full h-[65vh] flex items-center justify-center">
                            <Image
                                src={hero.src}
                                alt={hero.alt}
                                fill
                                className="object-contain w-full h-full transition-opacity duration-1000 ease-in-out"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side - Static Text (30%) */}
                    <div className="md:w-[30%] w-full text-center md:text-left px-8 md:sticky md:top-20">
                        <h2 className="text-5xl font-bold text-gray-900">
                            The Open Standard for Instant, Low-Cost C2B and P2P Payments
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            A global payment identifier registry and open standard that enables instant,
                            low-cost payments using the best available payment rails.
                        </p>
                    </div>
                </section>
            ))}
        </div>
    );
}