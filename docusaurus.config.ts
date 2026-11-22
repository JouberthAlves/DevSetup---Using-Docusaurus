import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DevSetup',
  tagline: 'Config your world.',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
    faster: {
      rspackPersistentCache: false,
    },
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: '',
  projectName: 'DevSetup---Using-Docusaurus',

  onBrokenLinks: 'throw',

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

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'DevSetup Logo',
        src: 'img/devsetup-logo.svg',
        srcDark: 'img/devsetup-logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} DevSetup. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'bash', 'json', 'ignore'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
