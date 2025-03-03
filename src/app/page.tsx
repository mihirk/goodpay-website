import Navbar from "@/components/Navbar";
import LandingPageSectionImageLeft from "@/components/LandingPageSectionImageLeft";

const sections = [
    {
        src: "/cross_bank_qrnfc.svg",
        alt: "cross bank qr/nfc",
        title: "The Open Standard for Instant, Low-Cost C2B and P2P Payments",
        description: "A global payment identifier registry and open standard that enables instant, low-cost payments using the best available payment rails.",
    },
    {
        src: "/qrnfc.svg",
        alt: "cross bank alias",
        title: "A standardised identifier definition, format and representation",
        description: "An identifier which can be parsed and understood by all participant financial institutions in the standard. A standardised method of representing the identifier in various formats like QR code, NFC etc.",
    },
    {
        src: "/identifier_registry.svg",
        alt: "same bank qr/nfc",
        title: "Map identifier to account details for real time payment schemes and intra-bank transfer details",
        description: "The identifier can be mapped to point to various formats of account details used by real time payment schemes across regions. Schemes like FPS in UK, SEPA in EuroZone, Aani in UAE, FedNow/RTP in US etc. Identifier can also be mapped to intra-bank private data to conduct intra-bank transfers.",
    },
    {
        src: "/same_bank_alias.svg",
        alt: "same bank alias",
        title: "Enable pay via Phone Number, Email and other aliases",
        description: "Phone number, email, region specific aliases like national identifiers can also be mapped to the account details. The registry also generates two random words in a given language to uniquely identify account details.",
    },
    {
        src: "/cross_bank_alias.svg",
        alt: "cross bank via alias",
        title: "Move money via the cheapest and quickest possible payment method",
        description: "The actual funds movement can happen via the cheapest, quickest or best suited payment rails the transaction requires like FPS, SEPA Instant etc. As long as the rails used follow the standard's specification.",
    },
    {
        src: "/c2b_in_person.svg",
        alt: "c2b transaction",
        title: "Seamless Money Movement Across Transactions & Banks",
        description: "Move money effortlessly through various transactions—P2P transfers, in-person and online C2B payments—within the same bank or across participant banks.",
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
                    title={section.title}
                    description={section.description}
                />

            ))}
        </main>
    );
}