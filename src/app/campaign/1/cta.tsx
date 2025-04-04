'use client';
import {mailtoLink} from "@/app/campaign/1/email";
import {sendGAEvent} from "@next/third-parties/google";

export default function CTA() {
    return (<a
        href={mailtoLink}
        onClick={() => sendGAEvent('event', 'buttonClicked', {value: 'campaign-1'})}
        className="flex flex-col items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 rounded-xl shadow-md hover:shadow-lg transition duration-300"
    >
              <span className="text-lg font-semibold text-white">
                Demand Better from Your Bank
              </span>
        <span className="text-sm text-red-100 text-center">
                STOP the 3% Big Corporate Tax & Support Local Businesses
              </span>
    </a>);
}
