# Repository Guidelines

## Project Structure & Module Organization

This is a Nuxt 4/Vue 3 project. Application code lives in `app/`, with the root component at `app/app.vue` and reusable Vue components in `app/components/`. Static assets that should be served directly belong in `public/`, such as `public/favicon.ico` and `public/robots.txt`. Tests live in `tests/`; current component tests are under `tests/components/`. Project documentation and planning notes live in `docs/`. Project configuration is kept at the root, including `nuxt.config.ts`, `vitest.config.ts`, `tsconfig.json`, `railway.json`, and `nixpacks.toml`.

## Agent Startup Context

At the start of a new Codex session, read `docs/README.md` first, then read each linked document in `docs/` to understand the current vision, feature plan, and technical/deployment context before making project changes. Use those docs as the source of truth unless the user gives newer instructions in chat.

## Build, Test, and Development Commands

- `npm install`: install dependencies and run Nuxt preparation via `postinstall`.
- `npm run dev`: start the local Nuxt development server.
- `npm run build`: build the production app with Nuxt.
- `npm run generate`: generate a static version of the site.
- `npm run preview`: preview the production build locally.
- `npm test`: run the Vitest test suite once.
- `npm run test:watch`: run Vitest in watch mode while developing.

## Coding Style & Naming Conventions

Use TypeScript-aware Vue single-file components. Match the existing style: two-space indentation in Vue templates where applicable, simple component structure, and clear, descriptive names. Name Vue components in PascalCase, for example `AppHeader.vue`, and place related tests with matching names such as `AppHeader.test.ts`. Prefer small, focused components in `app/components/` over expanding `app/app.vue`.

## Testing Guidelines

All development should follow TDD: red, green, refactor. Write a failing test first, add the smallest implementation needed to make it pass, then refactor if cleanup is needed. Vitest is configured in `vitest.config.ts` with `happy-dom`, Vue support, and global test APIs. Use `@vue/test-utils` for Vue component tests. Put tests under `tests/` and name them `*.test.ts`. Run `npm test` before submitting changes that affect behavior, components, routing, configuration, or deployment.

## Collaboration Style

Work in a slow, explicit TDD loop so the developer can review and learn from each step:

1. Announce the test name and what it will prove.
2. Ask permission before writing the test.
3. Ask permission before running tests or commands.
4. When a test fails, explain the failure and confirm it failed for the correct reason before moving on.
5. Explain the implementation plan before changing production code.
6. Ask permission before editing implementation files.
7. Ask permission before rerunning tests.
8. Keep changes PR-sized: aim for under 10 files and under 200 lines changed.

Before creating or modifying any non-documentation file, show the intended file path and proposed content or diff summary, then wait for explicit approval.

## Commit & Pull Request Guidelines

Recent commits use short, imperative summaries, sometimes with a conventional prefix, for example `feat: add railway config file` or `fix railway`. Keep commits focused and describe the user-visible change. Use feature branches for changes; do not commit directly to `develop` or `release`. Pull requests should include a brief summary, the tests run, linked issues when available, and screenshots for visible UI changes. Call out deployment-related changes to `.github/workflows/deploy.yml`, `railway.json`, or `nixpacks.toml`.

## Security & Configuration Tips

Do not commit secrets, tokens, or environment-specific credentials. `RAILWAY_TOKEN` is stored as a GitHub Actions repository secret for future use. Keep deployment settings in the existing Railway, Nixpacks, and GitHub Actions configuration files. Do not commit `package-lock.json`; this repo intentionally uses `npm install` in CI and Railway to avoid cross-platform lock-file issues. When changing build or deploy behavior, verify both `npm run build` and the relevant workflow/config file before merging.
