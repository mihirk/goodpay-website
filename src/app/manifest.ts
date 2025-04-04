import { routes } from "@/lib/routes";

export default function manifest() {
  return {
    name: "Florian's Playground",
    short_name: "Florian's Playground",
    start_url: routes.root,
    id: routes.root,
    display: "standalone",
    orientation: "portrait",
    background_color: "#0a0a0a",
    description: "I'm a creative hobbyist who enjoys learning and building products.",
    theme_color: "#0a0a0a",
    category: [
      "portfolio",
      "creative",
      "developer",
      "designer",
      "aws",
      "nextjs",
      "tailwind",
      "typescript",
      "javascript",
      "full-stack",
      "frontend",
      "backend",
      "full-stack",
      "web apps",
      "web development",
      "web design",
      "web programming",
      "product manager",
      "product management",
      "product lead",
      "product leadership",
      "product design",
      "product development",
      "fintech",
      "finance",
      "art",
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
        description: "I'm a creative hobbyist who enjoys learning and building products.",
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
        name: "About",
        url: routes.about,
        description: "About.",
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
        name: "Projects",
        url: routes.projects,
        description: "Projects.",
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
        name: "Art",
        url: routes.art,
        description: "Art.",
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
