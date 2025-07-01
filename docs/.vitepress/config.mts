import { defineConfig } from 'vitepress';
import { useSidebar } from 'vitepress-openapi';

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
  title: 'open-dpp API',
  description: 'API documentation for the open-dpp API',
  base,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '' },
      { text: 'Doc', link: '/api' },
    ],


    sidebar: [
      {
        text: "Resources",
        items: sidebar.generateSidebarGroups({
          linkPrefix: "/operations/"
        }).map((group) => ({
          ...group,
          collapsed: true
        }))
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/open-dpp' },
    ],
  },
});
