module.exports = {
  title: 'My Documentation Site',
  tagline: 'The tagline of my documentation site',
  url: 'https://baquelo.github.io/documentation-docusaurus/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'baquelo', 
  projectName: 'documentation-docusaurus',
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Documentation Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'My Docs', position: 'left'},
        {to: 'blog', label: 'My Blog', position: 'left'},
        {
          href: 'https://github.com/baquelo/documentation-docusaurus',
          label: 'My GitHub',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/baquelo',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/baquelo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
