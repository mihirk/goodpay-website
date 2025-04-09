export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["https://getgoodpay.com", "https://docs.getgoodpay.com"],
      },
    ],
    sitemap: "https://getgoodpay.com/sitemap.xml",
  };
}
