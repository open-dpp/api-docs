// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { theme, useOpenapi } from 'vitepress-openapi/client';
import 'vitepress-openapi/dist/style.css';

import spec from '../../public/api-json.json';

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    // Set the OpenAPI specification.
    useOpenapi({
      spec,
    });

    theme.enhanceApp({ app });
  },
} satisfies Theme;
