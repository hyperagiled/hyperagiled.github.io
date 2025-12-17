import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "AI Agent-Based Hyper-Agile Development",
  tagline: "AI 에이전트 기반의 하이퍼-애자일 개발 방법론",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://hyperagiled.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hyperagiled", // Usually your GitHub org/user name.
  projectName: "hyperagiled.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
    localeConfigs: {
      ko: {
        label: "한국어",
        htmlLang: "ko",
      },
      en: {
        label: "English",
        htmlLang: "en",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        googleTagManager: {
          containerId: "GTM-5GTGF4GJ",
        },
        docs: false,
        pages: {
          path: "pages",
          include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/logo.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "HyperAgiled.com",
      logo: {
        alt: "Logo",
        src: "img/logo.png",
      },
    },
    footer: {
      style: "light",
      links: [],
      copyright: `© 2025 박경식(Gyeongsik Park, gspark337@gmail.com)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
