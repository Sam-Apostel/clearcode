import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Articles are authored as Markdown / MDX. Frontmatter stays small on purpose:
// a title, which track it belongs to, the general principle it argues, and an
// optional aphorism to anchor the page.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // `pattern` articles show the trade in code; `essay` articles state doctrine.
    track: z.enum(['pattern', 'essay']),
    principle: z.string(),
    summary: z.string(),
    aphorism: z.string().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
