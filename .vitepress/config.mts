import { defineConfig } from 'vitepress';
import { useSidebar } from 'vitepress-openapi';

import spec from '../public/api-json.json' with { type: 'json' };

const sidebar = useSidebar({
  spec,
  // Optionally, you can specify a link prefix for all generated sidebar items. Default is `/operations/`.
  linkPrefix: '/operations/',
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'open-dpp API',
  description: 'API documentation for the open-dpp API',
    base: '/open-dpp/api-docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Doc', link: '/api-docs' },
    ],

    sidebar: [
      ...sidebar
          .itemsByPaths({
            /**
             * Optionally, you can filter paths by a prefix. Default is an empty string.
             */
            startsWith: '',

            /**
             * Optionally, you can specify if the sidebar items are collapsible. Default is true.
             */
            collapsible: true,

            /**
             * Optionally, you can specify a depth for the sidebar items. Default is 6, which is the maximum VitePress sidebar depth.
             */
            depth: 6,

            /**
             * Optionally, you can specify a link prefix for all generated sidebar items. Default is `/operations/`.
             */
            linkPrefix: '/operations/',

            /**
             * Optionally, you can specify a template for the sidebar items. You can see the default value
             * in `sidebarItemTemplate` function in the `useSidebar` composable.
             */
            //sidebarItemTemplate: ({ method, path, title }): string => `[${method}] ${title || path}`,

            /**
             * Optionally, you can specify a template for the sidebar groups.
             */
            //sidebarGroupTemplate: ({ path, depth }): string => path,
          }),
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/open-dpp' },
    ],
  },
});
