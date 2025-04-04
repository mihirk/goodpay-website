import { routes } from "@/lib/routes";

export default function robots() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://florian.ponoto.fr";
  return {
    rules: [
      {
        userAgent: "*",
        allow: [routes.root],
      },
    ],
    sitemap: BASE_URL + "/sitemap.xml",
  };
}
