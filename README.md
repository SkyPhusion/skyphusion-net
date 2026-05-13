# skyphusion-net

Personal blog at skyphusion.net. Astro 5 static site, deployed to Cloudflare Pages, markdown-authored, zero server.

## Stack

| Layer | Choice |
|---|---|
| Site generator | Astro 5 |
| Hosting | Cloudflare Pages (free tier) |
| Authoring | Markdown with YAML frontmatter |
| RSS | @astrojs/rss |
| Sitemap | @astrojs/sitemap |
| Domain | skyphusion.net |
| Total monthly cost | $0 |

## Local development

Prereqs: Node.js 20+ and npm. On Windows, install from nodejs.org or via winget (`winget install OpenJS.NodeJS.LTS`).

```bash
npm install
npm run dev
```

Site runs at http://localhost:4321. Live-reloads on file changes.

## Writing a post

1. Create a new file in `src/content/blog/` (any name, will become the slug). Example: `src/content/blog/my-new-post.md`
2. Add frontmatter at the top:

```markdown
---
title: "My new post"
description: "Short summary, shown on blog index"
pubDate: 2026-05-13
tags: ["tag1", "tag2"]
draft: false
---

Content in markdown.
```

3. Push to main.
4. Cloudflare Pages auto-builds and deploys. Live at https://skyphusion.net/blog/my-new-post within ~30 seconds.

Set `draft: true` to keep a post out of the build (won't appear in lists, won't get a URL).

## Build and preview

```bash
npm run build    # Produces dist/ folder
npm run preview  # Serves dist/ locally
```

## Project structure

```
skyphusion-net/
├── astro.config.mjs          # Astro config (site URL, integrations)
├── package.json
├── tsconfig.json
├── src/
│   ├── content/
│   │   ├── config.ts         # Blog post schema (title, description, etc.)
│   │   └── blog/
│   │       └── hello-world.md
│   ├── layouts/
│   │   └── BaseLayout.astro  # Header, footer, global styles
│   └── pages/
│       ├── index.astro       # Homepage (recent posts)
│       ├── about.md          # About page
│       ├── rss.xml.js        # RSS feed
│       └── blog/
│           ├── index.astro   # Blog listing (all posts)
│           └── [...slug].astro  # Individual post route
└── public/
    ├── favicon.svg
    └── robots.txt
```

## Cloudflare Pages deployment

One-time setup:

1. Push this repo to GitHub (private is fine).
2. Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git.
3. Select the `skyphusion-net` repo.
4. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (leave blank)
5. Save and Deploy. First build takes ~1 minute.
6. After build succeeds, Custom domains → Set up a custom domain → `skyphusion.net`. Cloudflare auto-configures DNS if domain is already in your CF account.

After that: every `git push origin main` triggers a build. Production at skyphusion.net. Preview deploys for any other branch get their own *.pages.dev URL.

## Customization quick hits

- **Site title and branding**: edit `src/layouts/BaseLayout.astro` (header text), `src/pages/index.astro` (homepage hero), `astro.config.mjs` (site URL).
- **Colors**: edit `:root` CSS variables in `BaseLayout.astro` (`--bg`, `--fg`, `--accent`, etc.).
- **Add a new top-level page**: drop a `.md` or `.astro` file in `src/pages/`. Filename becomes URL.
- **About page content**: edit `src/pages/about.md`.

## Common adds (when you want them)

- **Search**: Cloudflare Workers + Pagefind, or use a simple JSON index built at build time.
- **Comments**: Giscus (GitHub Discussions backend) or self-hosted Cactus (Matrix).
- **Analytics**: Cloudflare Web Analytics (free, privacy-preserving, no JS cookies). Enable in CF dashboard, paste one script tag in BaseLayout.
- **Newsletter**: Buttondown or Resend, both have generous free tiers.

## License

Personal use. No license granted to third parties.
