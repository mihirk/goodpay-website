import Image from "next/image";
import {testingMailToLink} from './email';

export default function Campaign() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-6">
                {"Did You Know You're Paying a 3% "}
                <span className="text-red-600">TAX</span> to Visa & Mastercard Every Time You Tap To Pay?
            </h1>

            <Image
                src="/campaign/america_trump.webp"
                alt="American Card Schemes"
                width={500}
                height={200}
                className="w-full max-w-md h-auto object-contain mb-6"
                priority
            />

            <div className="text-center text-gray-700 mb-8 space-y-2">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        Every time you <span className="font-semibold">tap your phone or card to pay</span>, merchants
                        pay a <span className="font-semibold text-red-600">1.5–7% tax</span> to <span
                        className="font-semibold">Visa or Mastercard</span>.
                    </li>
                    <li>
                        These hidden costs hurt your <span className="font-semibold">local businesses</span> and raise
                        prices, ultimately costing <span className="font-semibold">you</span> more.
                    </li>
                    <li>
                        Banks can <span className="font-semibold text-green-600">easily fix this</span> by
                        adopting <span className="font-semibold">domestic payment rails</span> instead of
                        relying on these <span className="font-semibold">Big Corporations</span>.
                    </li>
                </ul>
            </div>

            <a
                href={testingMailToLink}
                className="flex flex-col items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <span className="text-lg font-semibold text-white">
                Demand Better from Your Bank
              </span>
                <span className="text-sm text-red-100 text-center">
                STOP the 3% Big Corporate Tax & Support Local Businesses
              </span>
            </a>
        </main>
    );
}
