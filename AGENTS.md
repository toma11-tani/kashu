# Repository Guidelines

## Project Structure & Module Organization
- Static site with page entry points: `index.html` (top), `menu.html`, `access.html`, `owner.html`.
- Shared assets live in `assets/`: `css/` (`reset.css`, `style.css`), `js/` (`main.js`), `img/` (hero/menu photos and any new imagery).
- Keep shared styles, scripts, and icons centralized under `assets/`; avoid duplicating inline CSS/JS in page files.

## Build, Test, and Development Commands
- No build step; open `index.html` directly or serve locally for CORS-safe testing.
- Quick preview from the repo root:
  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```
- Use your browser devtools for responsive previews (360px and up) and console checks.

## Coding Style & Naming Conventions
- HTML: semantic sections, ARIA as needed; keep Japanese copy intact; prefer `<section>`/`<article>` over extra `<div>`s.
- CSS: 2-space indentation; kebab-case class names (e.g., `.site-header`); extend palette via `:root` variables in `assets/css/style.css`; avoid inline styles.
- JS: plain ES modules not required; match existing style in `assets/js/main.js` (const/let, semicolons, early returns). Keep functions small and DOM-safe after `DOMContentLoaded`.
- Assets: place new images in `assets/img/` with lowercase-hyphen names; compress before committing.

## Testing Guidelines
- Manual QA per page: navigation links, hamburger open/close, smooth scroll anchors, map iframes loading, and phone links (`tel:`) working on mobile.
- Run Lighthouse or browser audits for accessibility/SEO if you change layout; ensure focus styles remain visible and skip link still reaches main content.
- Keep console free of errors/warnings; check lazy-loaded images and IntersectionObserver behavior on scroll.

## Accessibility, SEO, and Content Updates
- Preserve `rel="noopener noreferrer"` on external links and `loading="lazy"` on imagery; include meaningful `alt` text for all new media.
- Update JSON-LD in `index.html` when contact/address data changes; keep meta tags (title/description/OG/Twitter) in sync across pages.
- When editing menu or announcements, follow existing heading hierarchy and list structures for screen reader clarity.

## Commit & Pull Request Guidelines
- Commit messages: short, imperative, and scoped (e.g., `Update access map embed`, `Refine hero spacing`); keep related changes grouped.
- PRs should include: summary of changes, affected pages, manual test notes (browsers/devices), and before/after screenshots for visual tweaks.
- Link to related issue/task if available; note any content still using placeholder phone numbers, addresses, or map embeds.
