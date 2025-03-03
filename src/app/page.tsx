import Navbar from "@/components/Navbar";
import LandingPageSectionImageLeft from "@/components/LandingPageSectionImageLeft";

const sections = [
    {
        src: "/hero1.svg",
        alt: "cross bank qr/nfc",
    },
    {
        src: "/hero2.svg",
        alt: "cross bank alias",
    },
    {
        src: "/hero3.svg",
        alt: "same bank alias",
    },
    {
        src: "/hero4.svg",
        alt: "same bank qr/nfc",
    },
    {
        src: "/hero5.svg",
        alt: "c2b transaction",
    },
];


export default function Home() {
    return (
        <main className="w-full min-h-screen flex flex-col">
            <Navbar/>
            {sections.map((section, index) => (
                <LandingPageSectionImageLeft
                    key={index}
                    id={index}
                    alt={section.alt}
                    src={section.src}
                />

            ))}
        </main>
    );
}