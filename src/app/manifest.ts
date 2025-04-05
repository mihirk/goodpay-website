import { routes } from "@/lib/routes";

export default function manifest() {
  return {
    name: "GoodPay",
    short_name: "GoodPay",
    start_url: routes.root,
    id: routes.root,
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    description: "GoodPay is Europe's public infrastructure for instant payments.",
    theme_color: "#ffffff",
    category: [
      "instant payments",
      "real-time payments",
      "FPS",
      "SEPA Instant",
      "infrastructure",
      "network",
      "services",
      "products",
      "network",
      "technology",
      "fintech",
      "finance",
    ],
    icons: [
      {
        src: "favicon.ico",
        type: "image/x-icon",
        sizes: "32x32",
      },
      {
        src: "icon.png",
        type: "image/png",
        sizes: "any",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Home",
        url: routes.root,
        description: "GoodPay is Europe's public infrastructure for instant payments.",
        icons: [
          {
            src: "icon.png",
            type: "image/png",
            sizes: "1024x1024",
          },
          {
            src: "icon2.png",
            type: "image/png",
            sizes: "128x128",
          },
        ],
      },
      {
        name: "Docs",
        url: routes.docs,
        description: "Docs.",
        icons: [
          {
            src: "icon.png",
            type: "image/png",
            sizes: "1024x1024",
          },
          {
            src: "icon2.png",
            type: "image/png",
            sizes: "128x128",
          },
        ],
      },
    ],
  };
}
