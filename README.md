# tiny-app

Template for a one-page Vite + React 19 + TypeScript + Tailwind v4 app on Tiny Wire, deployed to Netlify.

| File                               | What it does                                                                                   |
| ---------------------------------- | ---------------------------------------------------------------------------------------------- |
| `index.html`                       | The shell: meta/OG tags and the pre-paint theme script.                                        |
| `src/main.tsx`                     | Mounts the app and loads `index.css`.                                                          |
| `src/index.css`                    | The only global stylesheet: fonts, Tailwind, Tiny Wire tokens, your overrides.                 |
| `src/App.tsx`                      | The one page. Replace with the wire.                                                           |
| `src/theme.ts`                     | Light/dark toggle hook, persisted as `tw-theme`.                                               |
| `src/styles/tiny-wire/`            | Vendored Tiny Wire `tokens.css` + `fonts.css`, pinned by `tiny-wire.version`. Never hand-edit. |
| `scripts/tw-sync.sh`               | `npm run tw:sync`: re-fetches the pinned tag's files.                                          |
| `netlify.toml`                     | Build command, publish dir, SPA fallback.                                                      |
| `vite.config.ts`                   | React + Tailwind plugins.                                                                      |
| `eslint.config.js` / `.prettierrc` | Lint and format; `npm run check` runs both plus typecheck and build.                           |
| `CLAUDE.md`                        | Project rules for Claude.                                                                      |

## Commands

- `npm run dev` local server
- `npm run check` typecheck + lint + format check + build
- `npm run tw:sync` pull the Tiny Wire version named in `src/styles/tiny-wire/tiny-wire.version`
- `/ship` (Claude) check + Netlify preview deploy · `/launch` check + production deploy

## New project

`new <name>` in the shell clones this template, installs, creates the GitHub repo and links Netlify.
