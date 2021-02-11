module.exports = {
  title: 'Utili Documentation',
  tagline: '',
  url: 'https://docs.utili.xyz/docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'utili', // Usually your GitHub org/user name.
  projectName: 'utili', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Utili Documentation',
      logo: {
        alt: 'Utili',
        src: 'https://file.utili.xyz/UtiliSmall.png',
      },
      items: [
        {
          href: 'https://utili.xyz/',
          label: 'utili.xyz',
          position: 'right',
        },
        {
          href: 'https://utili.xyz/',
          label: 'github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Baynton. Built with Docusaurus.`,
    },
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
