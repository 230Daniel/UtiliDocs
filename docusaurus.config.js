module.exports = {
  title: 'Utili Documentation',
  tagline: '',
  url: 'https://docs.utili.xyz',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'utili', // Usually your GitHub org/user name.
  projectName: 'utili', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Utili Documentation',
      logo: {
        alt: 'Utili Logo',
        src: 'https://file.utili.xyz/UtiliSmall.png',
      },
      items: [
        {
          href: 'https://utili.xyz/',
          label: 'Utili',
          position: 'right',
        },
        {
          href: 'https://github.com/230Daniel/UtiliDocs/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Baynton. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/230Daniel/UtiliDocs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
