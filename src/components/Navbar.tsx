import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Branding as a clickable link */}
                <Link href="/" className="text-2xl font-semibold lowercase tracking-wide">
                    good pay
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-6 text-lg">
                    <Link href="/" className="hidden md:inline hover:underline">home</Link>
                    <Link href="/docs" className="hover:underline">docs</Link>
                    <Link href="/api" className="hover:underline">api</Link>
                    <Link href="/about" className="hover:underline">how it works</Link>
                    <Link href="mailto:contact@goodpay.dev" className="hover:underline">contact</Link>
                </div>
            </div>
        </nav>
    );
}