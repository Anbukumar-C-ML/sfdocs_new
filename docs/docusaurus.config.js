// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SnappyFlow',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', 
          onlyIncludeVersions: ['sidebar-snappyflow-saas', 'sidebar-sf-selfhosted-turbo', 'sidebar-sf-selfhosted-lite'], 
            versions: {
                    'sidebar-snappyflow-saas': {
                      banner: 'none',
                      label:'SnappyFlow SaaS',
                        },
                      'sidebar-sf-selfhosted-turbo': {
                              banner: 'none',
                              label:'SnappyFlow Self Hosted Turbo',
                            },
                      'sidebar-sf-selfhosted-lite': {
                              banner: 'none',
                              label:'SnappyFlow  Self Hosted Lite',
                        }, 
                      },
                      
            }, 
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [ 
    '@docusaurus/theme-live-codeblock',
    require.resolve('docusaurus-plugin-image-zoom')
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        //  autoCollapseCategories: true,
        },
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'SnappyFlow',
          src: '/img/sf_logo.svg',
        },
        items: [ 
		     {
          type: 'doc',
          href: '/',
          docId: 'Tracing/overview',
          target: '_self',
          position: 'right',
          label: 'Documentation',
          class: 'docs',
          }, 
          {
            type: 'doc',
            href: 'https://snappyflow.io/pricing',
            docId: 'Tracing/overview',
            target: '_self',
            position: 'right',
            label: 'Pricing',
            class: 'docs',
          },
          {
            type: 'doc',
            href: 'https://snappyflow.io/blogs',
            docId: 'Tracing/overview',
            target: '_self',
            position: 'right',
            label: 'Blogs',
            class: 'docs',
          },
          {
            type: 'doc',
            href: 'https://accounts.snappyflow.io/login',
            docId: 'Tracing/overview',
            target: '_self',
            position: 'right',
            label: 'Login',
            class: 'docs',
          }, 
			  {
				 type: 'docsVersionDropdown',
          position: 'right',
			  }, 
        ],
      },
      footer: {
        style: 'dark', 
        links: [
          {
            title: ' ', 
            items: [
              {
                html: `<img src="../../img/sf_logo.svg" alt="logo" /> `,
              },
            ],
          },
          { 
            title: 'Quick Connect',
            items: [
              {
                label: 'Home',
                to: 'https://www.snappyflow.io',
              },
              {
                label: 'Product',
                to: 'https://www.snappyflow.io/product',
              },
              {
                label: 'Pricing',
                to: 'https://www.snappyflow.io/pricing',
              },
              {
                label: 'Documentation',
                to: 'https://docs.snappyflow.io/',
              },
              {
                label: 'Blogs',
                to: 'https://www.snappyflow.io/blog',
              },
              {
                label: 'Events',
                to: 'https://www.snappyflow.io/events',
              },
              {
                label: 'Success Stories',
                to: 'https://www.snappyflow.io/success-stories',
              },
              {
                label: 'Team',
                to: 'https://www.snappyflow.io/team',
              },
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Metrics',
                to: 'https://www.snappyflow.io/metrics',
              },
              {
                label: 'Tracing',
                to: 'https://www.snappyflow.io/tacing',
              },
              {
                label: 'Logs',
                to: 'https://www.snappyflow.io/logs',
              },
              {
                label: 'Alerts',
                to: 'https://www.snappyflow.io/alerts',
              },
              {
                label: 'Profiling',
                to: 'https://www.snappyflow.io/profiling',
              },
              {
                label: 'Synthetic',
                to: 'https://www.snappyflow.io/synthetic',
              },
              {
                label: 'Microservices',
                to: 'https://www.snappyflow.io/microservices',
              },
              {
                label: 'Database',
                to: 'https://www.snappyflow.io/database',
              },
              {
                label: 'Dashboards',
                to: 'https://www.snappyflow.io/dashboard',
              },
              {
                label: 'Real User Monitoring',
                to: 'https://www.snappyflow.io/',
              },
              {
                label: 'SIEM',
                to: 'https://www.snappyflow.io/siem',
              },
              {
                label: 'Integrations',
                to: 'https://www.snappyflow.io/integration',
              },
            ],
          },
          {
            title: ' ',
            items: [
              {
                html: `
                  <h5>California, USA</h5>
                   <p>1248 Reamwood Ave,<br/>
                   Sunnyvale, CA 9408</p><br/>

                   <h5>Bangalore, INDIA</h5>
                   <p>152, Siddhi Vinayak Towers,<br/>
                   Sarjapur - Marathahalli Road,<br/>
                   Jakkasandra, 1st Block, Koramangala,<br/>
                   Bengaluru – 560034</p>

                   <a href="mailto:support@snappyflow.io">support@snappyflow.io</a>
                  `,
              },
            ]
          },
          {
            title: ' ',
            items: [
              {
                html: `
                  <a href="https://accounts.snappyflow.io/freetrial" target="_blank"><input type="button" value="Free Trial" class="primary-btn" /></a><br/><br/>
                  <div> <a href="#"><img src="../../img/linked.svg" /></a> <a href="#" style="margin-left:5px"><img src="../../img/instagram.svg" /></a></div>
                  `,
              },
            ]
          }, 
        ], 
        copyright: `<div class="copyRight">Copyright © ${new Date().getFullYear()} Maplelabs Inc, All right reserved.</div>
        <div style="float:right" class="footer__menus">
          <a href="https://www.snappyflow.io/terms" target="_blank">Terms of Use</a>
          <a href="https://www.snappyflow.io/privacy-policy" target="_blank">Privacy Policy</a>
          <a href="https://www.snappyflow.io/cookies" target="_blank">Cookie Policy</a>
          <a href="https://www.snappyflow.io/location">Location</a>
          <a href="https://www.snappyflow.io/contact-us" target="_blank">Contact Us</a>
        </div>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.main-wrapper img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
      },
    }),
};

module.exports = config;
