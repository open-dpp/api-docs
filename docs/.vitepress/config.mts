import { defineConfig } from 'vitepress';
import { useSidebar } from 'vitepress-openapi';
import { configureDiagramsPlugin } from "vitepress-plugin-diagrams";
import spec from '../public/api-json.json' with { type: 'json' };

const sidebar = useSidebar({
  spec,
  // Optionally, you can specify a link prefix for all generated sidebar items. Default is `/operations/`.
  linkPrefix: '/operations/',
});

const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS;
const base = isGitHubPages ? '/api-docs' : '/';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'open-dpp Documentation',
  description: 'API documentation for the open-dpp plattform',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  base,
  markdown: {
    config: (md) => {
      configureDiagramsPlugin(md, {
        diagramsDir: "docs/public/diagrams", // Optional: custom directory for SVG files
        publicPath: `${isGitHubPages ? '/api-docs/' : '/'}diagrams`, // Optional: custom public path for images
      });
    },
  },

  themeConfig: {
    logo: '/logo-with-text.svg',
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started/concepts' },
      { text: 'API Doc', link: '/api' },
    ],


    sidebar: {
      '/api': [{
        text: "Resources",
        items: sidebar.generateSidebarGroups({
          linkPrefix: "/api/operations/"
        }).map((group) => ({
          ...group,
          collapsed: true
        }))
      }],
      '/getting-started': [
        {
          text: "Concepts",
          link: '/getting-started/concepts'
        },
        {
          text: "REST API",
          link: '/getting-started/rest-api'
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/open-dpp' },
    ],
  },
});
