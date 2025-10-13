import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://notes.taranium.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // like if you want this on a path instead of a subdomain/apex domain

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Overlord-Runt', // Usually your GitHub org/user name.
  projectName: 'Notes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Yr12 Notes', // title replace with your site name
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {  // copy for new section thingies
          type: 'docSidebar',
          sidebarId: 'mathSidebar',
          position: 'left',
          label: 'Helpy Thing',
        },
        {  // copy for new section thingies
          type: 'docSidebar',
          sidebarId: 'ecoSidebar',
          position: 'left',
          label: 'Worky',
        },
        {  // copy for new section thingies
          type: 'docSidebar',
          sidebarId: 'physicsSidebar',
          position: 'left',
          label: 'Worky',
        },
        {  // copy for new section thingies
          type: 'docSidebar',
          sidebarId: 'engineeringSidebar',
          position: 'left',
          label: 'Worky',
        },
        {  // copy for new section thingies
          type: 'docSidebar',
          sidebarId: 'englishSidebar',
          position: 'left',
          label: 'Worky',
        },
        {
          href: 'https://github.com/Overlord-Runt/Notes', // repo link
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Helpy Thing', // replace with title of the button thing
              to: '/docs/math/intro', // path to the doc
            },
          ],
        },
        {
          title: 'Community',  // replace with the links you want or remove what you want
          items: [
            {
              label: 'Youtube',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Overlord-Runt/Docusaurus-Template',  // repo link
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Taranium, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
