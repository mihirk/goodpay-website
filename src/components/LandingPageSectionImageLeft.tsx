import Image from "next/image";

interface LandingPageSectionProps {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
}

export default function LandingPageSectionImageLeft({id, src, alt, title, description}: LandingPageSectionProps) {
    return (
        <section
            key={id}
            className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start py-2 md:py-12 md:min-h-screen"
        >
            {/* Left Side - Hero Image */}
            <div className="md:w-[70%] w-full flex flex-col">
                <div className="relative w-full h-[50vh] sm:h-[65vh] md:h-[75vh]">
                    <Image
                        src={src}
                        alt={alt}
                        width={900} // Maintains aspect ratio
                        height={600}
                        className="object-contain w-full h-full"
                        priority
                    />
                </div>
            </div>

            {/* Right Side - Prevents Empty Space on Mobile */}
            <div
                className="md:w-[30%] w-full text-center md:text-left px-4 sm:px-8 flex flex-col justify-center h-auto md:h-screen"
            >
                <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900">
                    {title}
                </h2>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-lg text-gray-600">
                    {description}
                </p>
            </div>
        </section>
    );
}