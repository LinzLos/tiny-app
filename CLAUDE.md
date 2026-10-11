# Project rules

Global rules in ~/.claude/CLAUDE.md apply. This file is what's specific to this app.

- The wire for this project is the spec. Build the one page in `src/App.tsx`; split into components only when the page needs it.
- Styling: Tiny Wire tokens via Tailwind's CSS-variable syntax, e.g. `bg-(--surface)`, `p-(--space-16)`, `text-(length:--text-md)`. Never a hex, px or font name in a className or CSS.
- `src/styles/tiny-wire/` is vendored and pinned by `tiny-wire.version`. Never edit it; bump the pin and run `npm run tw:sync`. Overrides go in `src/index.css`.
- Light/dark lives in `src/theme.ts`; keep the toggle.
- Meta and OG tags in `index.html`: update title, description and `/og.png` before launch.
- Done means `npm run check` passes and `/ship` has returned a preview URL.
