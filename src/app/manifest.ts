export default function manifest() {
  return {
    name: "GoodPay",
    short_name: "GoodPay",
    start_url: "https://getgoodpay.com",
    id: "https://getgoodpay.com",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    description: "Launch payment experiences on instant payments rails.",
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
        src: "icon.webp",
        type: "image/webp",
        sizes: "any",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Home",
        url: "https://getgoodpay.com",
        description: "Launch payment experiences on instant payments rails.",
        icons: [
          {
            src: "icon.webp",
            type: "image/webp",
            sizes: "1024x1024",
          },
          {
            src: "icon2.webp",
            type: "image/webp",
            sizes: "128x128",
          },
        ],
      },
      {
        name: "Docs",
        url: "https://docs.getgoodpay.com",
        description: "Docs.",
        icons: [
          {
            src: "icon.webp",
            type: "image/webp",
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
