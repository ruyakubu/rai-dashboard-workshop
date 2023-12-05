// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Responsible AI Training',
  tagline: 'Go From Principles To Practice',
  url: 'https://ruyakubu.github.io',
  baseUrl: '/rai-dashboard-workshop/',

  organizationName: 'ruyakubu', 
  projectName: 'rai-dashboard-workshop', 
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',

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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      image: 'img/responsible-ai-card.jpg',

      navbar: {
        title: 'Responsible AI',
        logo: {
          alt: 'RAI Dashboard Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mySidebar',
            position: 'left',
            label: '1. Dashboard',
          },          
          {
            type: 'doc',
            docId: 'azure-content-safety/cs-intro',
            position: 'left',
            label: '2. Content Safety',
          },
          {
            type: 'doc',
            docId: 'azure-prompt-flow/pf-intro',
            position: 'left',
            label: '3. Prompt Flow',
          }, 
          //{to: 'blog', label: 'Blog', position: 'left'},         
          {            
            href: 'https://github.com/ruyakubu/rai-dashboard-workshop',
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },

      footer: {
        style: 'light',
        links: [
          {
            label: `Training`,
            to: "/docs/welcome",
          },
          {
            label: `AI Hub`,
            to: "https://learn.microsoft.com/ai/",
          },
          {
            label: '@AzureAdvocates',
            to: 'https://twitter.com/azureadvocates',
          },
          {
            label: "Privacy Statement ",
            to: "https://privacy.microsoft.com/privacystatement",
          },
          {
            label: `© ${new Date().getFullYear()} Microsoft`,
            to: "https://microsoft.com",
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
