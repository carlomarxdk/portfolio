# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is Germans Savcisens' personal academic website and blog (savcisens.com), built with **Hugo (extended)** and **Tailwind CSS v4**. Content is authored as Markdown; layouts are custom Hugo Go templates (no third-party theme).

## Commands

```bash
npm run dev              # hugo server -D — local dev server with drafts, live reload
npm run dev:css          # watch-mode Tailwind build (run alongside `dev` if editing static/src/globals.css)
npm run build:css        # one-off Tailwind build -> static/src/output.css
npm run build:css:prod   # minified production Tailwind build
npm run build            # full production build: build:css:prod + hugo --gc --minify -> public/
npm run format           # prettier --write .
npm run format:check     # prettier --check .
npm run lint:md          # markdownlint on all *.md (excludes node_modules, public)
npm run lint:md:fix      # markdownlint --fix
```

There is no JS/Go test suite — validation is build success (`hugo --gc --minify` must exit cleanly) plus lint/format checks above. When changing templates or content, run the dev server and check the affected page in a browser.

CI (`.github/workflows/hugo-page.yml`) builds CSS then runs `hugo --gc --minify` and deploys `public/` to GitHub Pages on push to `main`. Hugo version is pinned via `HUGO_VERSION` in that workflow — keep it in sync with the locally installed Hugo when bumping.

## Architecture

- `content/` — Markdown source, one directory per section (`publications`, `talks`, `teaching`, `blog`, `now`, `cv`, `contact`). Each section has an `_index.md` (section landing page front matter) and, for list-driven sections, an `items/` subfolder holding one Markdown file per entry (e.g. `content/publications/items/life2vec.md`). Front matter fields vary by section (e.g. publications use `authors`, `venue`, `pub_link`, `misc` link list; talks use `event_date`, `event_url`, `location`).
- `layouts/section/*.html` — one template per top-level section (`about.html`, `publications.html`, `talks.html`, `cv.html`, etc.), each pulling in a matching partial from `layouts/partials/` (e.g. `publications.html` renders `partials/publications/pub-list.html`) to render the `items/` collection.
- `layouts/partials/` — shared building blocks: `head.html`/`opengraph.html`/`twitter-cards.html`/`schema.html` (SEO/meta), `nav.html`/`footer.html`, and per-section list partials under subdirectories (`publications/`, `teaching/`, `updates/`, `blog/`, `events/`, `elements/` for reusable cards).
- `layouts/shortcodes/` — Markdown shortcodes usable in content (`callout`, `figure`, `sidenote`, `quote`, `youtube`, `qr`).
- `config/_default/menus.toml` — top nav structure (weight-ordered). `config/_default/markup.toml` — Goldmark/Markdown rendering options (unsafe HTML allowed, table/footnote/definition-list extensions on). Site-wide params (author, social links, structured data for scholar profiles, footer address) live in `hugo.toml`.
- `static/src/globals.css` is the Tailwind input; `npm run build:css*` compiles it to `static/src/output.css`, which is what templates actually reference. Don't hand-edit `output.css`.
- `static/` also holds images, fonts, PDFs (CV/resume, slides) served as-is; `public/` is the generated build output — never edit directly.

## Conventions

- Front matter for new content items should stay consistent with sibling files in the same `items/` folder (see existing files for the field set expected per section).
- Prettier treats `*.html` as Go templates (`parser: "go-template"`) and preserves Hugo template expressions (`{{ .Title }}`) — don't let formatting strip or reflow them. `layouts/**/*.html`, `partials/**/*.html`, and `static/**/*.html` are excluded from Prettier via `.prettierignore` (formatting Go templates is risky), so hand-format template files carefully.
- markdownlint has several rules disabled repo-wide (see `.markdownlint.json`): MD001, MD013, MD024, MD033, MD036, MD041 — notably inline HTML (MD033) and heading-first-line (MD041) are allowed, since content files use raw HTML and front matter freely.
- SEO matters here: pages should keep unique titles/descriptions, correct heading hierarchy, meaningful image `alt` text, and populated OpenGraph/Twitter/JSON-LD metadata (see `layouts/partials/opengraph.html`, `twitter-cards.html`, `schema.html`, `blog-schema.html`). See `.github/agents/format_agent.md` for the fuller SEO/formatting checklist this repo follows.
