# clearcode

> Clean code optimizes for the writer. Clear code optimizes for the reader.
> There are always more readers.

The source for [clearcode.dev](https://clearcode.dev) — a small, opinionated
site arguing that **clarity** (intent, seams, and failure modes made legible)
beats **cleanliness** (fewer lines, less duplication, a tidy surface) when the
two pull apart.

Principles are stated generally; the examples are TypeScript.

## Stack

- [Astro](https://astro.build) — static, content-first, ships zero JS by default
- MDX content collection for articles, with [Shiki](https://shiki.style) syntax highlighting
- A house design system in `src/styles/global.css`: paper ground, a serif
  display face, mono labels, a faint blueprint grid, and one accent colour

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the build locally
```

## Writing an article

Articles live in `src/content/articles/*.mdx`. Frontmatter is intentionally small:

```yaml
title: Props are not composition
track: pattern        # "pattern" (show the trade in code) or "essay" (state doctrine)
order: 1
principle: Configuration hides intent. Composition reveals it.
summary: One or two sentences for the index pages.
aphorism: Prefer code you can delete to code you can configure.
```

The house format is a single authoring primitive, `<Compare>`: a `clean`
version (optimized for the writer), a `clear` version (optimized for the
reader), and the **cost** the clean version charges you later — the named cost
is the whole argument.

```mdx
<Compare cost="Every new layout needs another prop.">
  <Fragment slot="clean"> ```tsx … ``` </Fragment>
  <Fragment slot="clear"> ```tsx … ``` </Fragment>
</Compare>
```

## Deploy

Pushing to `master` builds and publishes to GitHub Pages via
`.github/workflows/deploy.yml`. The custom domain is set through
`public/CNAME`. Set the repository's Pages source to **GitHub Actions** for the
workflow to publish.

## Inspiration

- [The Wrong Abstraction](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction) — Sandi Metz
- [It's probably time to stop recommending Clean Code](https://qntm.org/clean) — qntm
- [Goodbye, Clean Code](https://overreacted.io/goodbye-clean-code/) — Dan Abramov
