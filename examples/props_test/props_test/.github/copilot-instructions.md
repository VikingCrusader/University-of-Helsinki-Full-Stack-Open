<!-- GitHub Copilot / AI agent instructions for the `props_test` project -->

# Project Quick Context

- Minimal React + Vite app. Entry point: `src/main.jsx`. Root HTML: `index.html`.
- Bundler: Vite (overridden to `rolldown-vite` in `package.json`).
- Linting: ESLint configured by `eslint.config.js` (JS/JSX only).

## Primary workflows (commands)

- Dev server (HMR): `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint project: `npm run lint` (uses `eslint.config.js`)

Run these from the project root. On Windows PowerShell use the same `npm run ...` commands.

## Architecture & patterns to know

- File types: project uses `.jsx` for components (no TypeScript runtime required).
- Component style: functional components and React hooks (see `src/App.jsx`).
- Entry / render: `src/main.jsx` mounts `<App />` under `root` using `createRoot`.
- Assets: images live in `src/assets/` (example: `src/assets/react.svg`). Static root file `/vite.svg` is referenced with an absolute path and served by Vite.

Example component in this repo (explicitly used by the app):

```jsx
// src/App.jsx
const Greeting = (props) => (
  <div>
    <h1>你好, {props.name}!</h1>
    <p>你今年 {props.age} 岁了。</p>
  </div>
)
```

## Project-specific conventions

- `package.json` sets `"type": "module"`. Use ES module syntax (imports/exports) everywhere.
- Vite is overridden to `rolldown-vite` via `overrides` — avoid changing the Vite entry without reviewing performance reasons.
- ESLint config applies to `**/*.{js,jsx}` and enforces rules from `@eslint/js`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.
- A custom rule: `'no-unused-vars'` ignores variables that match `^[A-Z_]` — commonly used to avoid flagging React components or intentionally prefixed names.
- `dist` is globally ignored by ESLint (`globalIgnores(['dist'])`).

## Editing guidance for AI agents

- Make small, focused edits to `src/` files. After changes, ensure the app still starts with `npm run dev` and that `npm run lint` passes.
- Preserve `package.json` fields unless the change is necessary (e.g., adding a dependency). If adding/changing `vite`, explain why and ask for confirmation.
- Follow existing naming: components with capitalized names, default export for `App` in `src/App.jsx`.
- For new static assets prefer `src/assets/` or `public/`. Use absolute path `/...` only when intended to reference project root static assets served by Vite.

## Examples of useful edits

- Add a new small component: create `src/components/MyButton.jsx` and import it in `src/App.jsx`.
- Update prop usage: modify `Greeting` in `src/App.jsx` to accept an object prop, but keep default/simple prop types (no runtime PropTypes package present).
- Add ESLint-safe variables: if introducing intentionally unused names for documentation or examples, prefix with `_` or follow the existing var-ignore pattern.

## Debugging & testing notes

- There are no unit tests in the repository. For verification rely on `npm run dev` (visual check) and `npm run lint`.
- Vite provides Fast Refresh; rebuilds are quick during development.

## When to ask for human review

- Changes to the Vite config, build targets, or the `rolldown-vite` override.
- Adding TypeScript or changing `"type": "module"`.
- Adding major dependencies or changing linting rules.

If anything here is unclear or you'd like me to include additional examples (tests, CI steps, or commit message guidance), tell me what to add and I will iterate.
