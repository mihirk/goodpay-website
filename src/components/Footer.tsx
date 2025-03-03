export default function Footer() {
    return (
        <footer className="w-full bg-black text-white text-center py-6">
            <div className="container mx-auto flex flex-col items-center">
                {/* Footer Links (Expandable) */}
                <nav className="mb-2">
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="mailto:contact@goodpay.dev"
                                className="text-white hover:underline"
                            >
                                get in touch
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Copyright */}
                <p className="text-sm text-gray-400">© {new Date().getFullYear()} Good Pay. All rights reserved.</p>
            </div>
        </footer>
    );
}