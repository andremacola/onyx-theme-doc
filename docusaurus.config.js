module.exports = {
  title: 'Onyx Theme',
  tagline: 'Documentação para o Tema Onyx do WordPress',
  url: 'https://andremacola.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'andremacola', // Usually your GitHub org/user name.
  projectName: 'onyx-theme-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Onyx Theme',
      logo: {
        alt: 'Onyx Theme',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/andremacola/onyx-theme',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Instalação',
              to: 'docs/',
            },
            {
              label: 'Configuração',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/onyx-theme',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/andremacola',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/andremacola',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Onyx Theme, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};