import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Rebuilt',
  tagline: 'Retopo, UV and Bake for Blender',
  favicon: 'img/difffuse_logo.png',
  onBrokenLinks: 'throw',
  markdown: {
    hooks:
      {
        onBrokenMarkdownLinks: 'throw',
      },
  },
  
  // Add Font Awesome for social icons
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
        integrity: 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer',
      },
    },
  ],


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://difffuse.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rebuilt-documentation/',   // NOTE: trailing slash!
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'difffuse', // Usually your GitHub org/user name.
  projectName: 'rebuilt-documentation', // Usually your repo name.

  // onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    function(context, options) {
      return {
        name: 'webpack-config-plugin',
        configureWebpack(config, isServer) {
          return {
            module: {
              rules: [
                {
                  test: /\.md$/,
                  resourceQuery: /raw/,
                  type: 'asset/source',
                },
              ],
            },
          };
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/difffuse_logo.png',
    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    navbar: {
      logo: {
        alt: 'Difffuse Studio',
        src: 'img/difffuse_logo.png',
        srcDark: 'img/difffuse_logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/changelog',
          position: 'left',
          label: 'Changelog',
        },
        
        {
          href: 'https://superhivemarket.com/creators/difffusestudio',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-solid fa-store" aria-label="Superhive"></i>',
        },
        {
          href: 'https://www.youtube.com/@difffusestudio',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-brands fa-youtube" aria-label="YouTube"></i>',
        },
        {
          href: 'https://www.instagram.com/difffusestudio',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-brands fa-instagram" aria-label="Instagram"></i>',
        },
        {
          href: 'https://x.com/DifffuseStudio',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-brands fa-x-twitter" aria-label="Twitter"></i>',
        },
        {
          href: 'https://discord.gg/GC4ZzGkvhH',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-brands fa-discord" aria-label="Discord"></i>',
        },
        {
          href: 'https://difffuse.studio',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-solid fa-globe" aria-label="Difffuse Website"></i>',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Difffuse Studio.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
