# Astro Starter Kit: Blog
test
```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ GitHub Issues-based comments (using Utterances)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 💬 Comments System

This blog uses [Utterances](https://utteranc.es/) to enable comments on blog posts. Utterances uses GitHub Issues as a backend, which means:

- Readers need a GitHub account to comment
- Comments are stored as GitHub Issues in this repository
- GitHub's authentication and moderation tools are used
- No database or server-side code required

### Setup

The comments are already configured in `src/components/Comments.astro` and integrated into blog posts via `src/layouts/BlogPost.astro`.

To enable comments on your blog:

1. Install the [Utterances app](https://github.com/apps/utterances) on your GitHub repository
2. The app needs permission to create issues
3. Comments will automatically appear at the bottom of each blog post

### Configuration

You can customize the Comments component by modifying the props in `src/layouts/BlogPost.astro`:

- `repo`: Your GitHub repository (format: `username/repo`)
- `issueTerm`: How to map blog posts to issues (`pathname`, `url`, `title`, or `og:title`)
- `theme`: Visual theme (`github-light`, `github-dark`, `preferred-color-scheme`, etc.)
- `label`: Optional label to add to created issues

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
