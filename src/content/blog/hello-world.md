---
title: "Hello, world"
description: "First post on skyphusion.net"
pubDate: 2026-05-13
tags: ["meta"]
draft: false
---

This is the first post on skyphusion.net.

## Markdown works the way you'd expect

Code blocks with syntax highlighting:

```python
def hello():
    return "world"

print(hello())
```

```javascript
const greeting = (name) => `Hello, ${name}`;
console.log(greeting('skyphusion'));
```

Tables:

| Item | Status |
|---|---|
| Astro 5 | shipped |
| Cloudflare Pages | deployed |
| Custom domain | configured |

Blockquotes:

> The best time to plant a tree was twenty years ago. The second-best time is now.

Lists, both ordered and unordered, plus inline `code` formatting, all standard.

## Workflow

To write a new post, drop a `.md` file in `src/content/blog/` with frontmatter at the top. Push to main, Cloudflare Pages rebuilds and deploys within ~30 seconds. That's it.
