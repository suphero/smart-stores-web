// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smart Stores',
  tagline: 'Stores are smart with us',
  url: 'https://smart-stores.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'forecast',
          // path: 'forecast',
          routeBasePath: 'forecast',
          sidebarPath: require.resolve('./forecastSidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-PLT4P5NQGD',
        },
        googleAnalytics: {
          trackingID: 'UA-236891347-2',
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Smart Stores',
        logo: {
          alt: 'Smart Stores Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Smart Forecast',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Smart Forecast',
                to: '/forecast/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://facebook.com/SmartStoresApps',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/SmartStoresApps',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/SmartStoresApps',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCKjTz4zWKvOOSxWJ-c8nurQ',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Smart Stores, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: 'Smart Stores',
          content: 'Stores are smart with us'
        }
      ],
    }),
};

module.exports = config;
