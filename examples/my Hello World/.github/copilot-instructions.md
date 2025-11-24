<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Project-focused guidance for AI coding assistants

This repository is a minimal React + Vite app. Use the notes below to be immediately productive and to follow repository conventions.

1. Purpose
- Minimal React app scaffolded with Vite. Entry is `index.html` -> `src/main.jsx`. UI components live in `src/`.

2. How to run (developer workflows)
- Start dev server with `npm run dev` (uses `vite`). This provides HMR via `@vitejs/plugin-react`.
- Build for production with `npm run build` and preview with `npm run preview`.
- Lint changes with `npm run lint` (project uses an `eslint.config.js` file).

3. Key files to reference for context
- `package.json` — scripts and deps. Notable scripts: `dev`, `build`, `preview`, `lint`.
- `vite.config.js` — Vite config; uses `@vitejs/plugin-react`.
- `eslint.config.js` — project ESLint rules. Important: it sets `no-unused-vars` to ignore identifiers matching `^[A-Z_]` (so component-like identifiers and vars beginning with `_` may be intentionally unused).
- `index.html` — includes two mount points: `#root` and `#root1` and imports `/src/main.jsx`.
- `src/main.jsx` — mounts React roots and imports `App` and `App1` from `src/App.jsx`.
- `src/App.jsx` — example components: default export `App` (primary), named export `App1` (secondary). Prefer following this export pattern for small components.

4. Project-specific conventions & patterns
- Module type: `package.json` sets `"type": "module"` — use ESM imports/exports.
- Components: file-level default export for the main component and named exports for extras (see `src/App.jsx`).
- Multiple roots: the app intentionally mounts two roots (`#root`, `#root1`) in `main.jsx`; preserve both when changing entry rendering.
- ESLint: the repo uses a modern flat `eslint.config.js`; rely on `npm run lint` to surface style issues. The `no-unused-vars` rule is relaxed for identifiers starting with capital letters and underscores — treat such unused symbols as possibly intentional.

5. Debugging tips
- Use the browser console and Vite dev server console for runtime errors — Vite gives fast stack traces and module overlay for errors.
- When editing components, prefer hot-reload feedback via `npm run dev`; changes in `src/` should re-render quickly.
- If a component unexpectedly doesn't render, check `main.jsx` mount nodes and ensure the corresponding `id` exists in `index.html`.

6. What to change and what to avoid
- Safe changes: UI in `src/`, styles in `src/*.css`, adding components and small routes (if introduced later).
- Avoid: changing `type: "module"` in `package.json` or removing the Vite React plugin without understanding consequences for HMR/refresh.

7. Examples (how to make small edits)
- Add a new component `src/Hello.jsx` and export default it; import and mount in `src/main.jsx` or use it inside `App.jsx`.
- When adding new files, follow existing naming (PascalCase for components) and export pattern (default main component, named extras).

8. Missing or not present
- There are no tests configured. Do not add test assumptions; if adding tests, include new devDependencies and document `npm` scripts.

9. When opening PRs or making changes
- Run `npm run lint` and `npm run dev` locally to verify no lint errors and that the dev server starts.
- Keep changes minimal and explain why you changed `index.html`, `main.jsx`, or `eslint.config.js` in PR descriptions — these are structural files.

If any part of this guidance is unclear or you'd like more detail (for example, a suggested linting workflow, test setup, or deployment notes), tell me which section to expand and I'll iterate.
