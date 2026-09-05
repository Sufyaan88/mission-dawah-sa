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

Use TypeScript-aware Vue single-file components. Match the existing style: two-space indentation in Vue templates where applicable, simple component structure, and clear, descriptive names. Name reusable Vue components in PascalCase with a `Component` suffix, for example `AppHeaderComponent.vue`, and name matching tests `AppHeaderComponent.test.ts`. Name page tests with a `Page` suffix, for example `HomePage.test.ts`. Keep Nuxt page files named according to file-based routing conventions, such as `app/pages/index.vue` and `app/pages/tahabbu.vue`; the `Page` suffix does not apply to route files. Prefer small, focused components in `app/components/` over expanding `app/app.vue`.

## Testing Guidelines

All development should follow TDD: red, green, refactor. Write a failing test first, add the smallest implementation needed to make it pass, then refactor if cleanup is needed. Vitest is configured in `vitest.config.ts` with `happy-dom`, Vue support, and global test APIs. Use `@vue/test-utils` for Vue component tests. Put tests under `tests/` and name them `*.test.ts`. Run `npm test` before submitting changes that affect behavior, components, routing, configuration, or deployment.

## Collaboration Style

Use one approval per feature, not approval for every action:

1. After the developer describes a feature, respond with three simple lines: what you understood, what you will change, and which tests will prove the behavior through red, green, refactor.
2. Wait for the developer to approve that plan once. That approval covers the agreed tests, implementation, refactoring, routine commands, and verification. Do not ask again before individual file edits, commands, or test runs within that scope.
3. Complete the approved work autonomously using TDD. Check that initial test failures happen for the intended reason, implement the feature, and run the relevant checks. Keep progress updates brief and explain material findings in plain language.
4. Ask again only if a material scope change or decision needs the developer's input, or a required tool/environment approval blocks execution. Routine implementation choices do not need renewed approval.
5. When ready, provide a concise handoff explaining what changed, the test results, and any remaining concerns. The developer will have another Codex review the diff; do not automatically start a separate agent review.
6. Address review feedback within the approved scope. Once the review is satisfactory and the developer asks to proceed, create the PR. Feature approval alone does not authorize merging or deploying.
7. Repeat this workflow for the next feature. Keep changes PR-sized: aim for under 10 files and under 200 lines changed.

Read-only context gathering and explicitly requested documentation updates can proceed without a separate feature-plan approval. Keep explanations focused on intent and results; detailed code walkthroughs are optional when requested.

## Commit & Pull Request Guidelines

Recent commits use short, imperative summaries, sometimes with a conventional prefix, for example `feat: add railway config file` or `fix railway`. Keep commits focused and describe the user-visible change. Use feature branches for changes; do not commit directly to `develop` or `release`. Pull requests should include a brief summary, the tests run, linked issues when available, and screenshots for visible UI changes. Call out deployment-related changes to `.github/workflows/deploy.yml`, `railway.json`, or `nixpacks.toml`.

Always provide pull request descriptions as copy-ready Markdown with these sections:

- `## Summary`: what the pull request changes or adds.
- `## Tests`: tests added or changed and verification commands run.
- `## Deferred`: follow-up work and anything intentionally left out of scope.

## Security & Configuration Tips

Do not commit secrets, tokens, or environment-specific credentials. `RAILWAY_TOKEN` is stored as a GitHub Actions repository secret for future use. Keep deployment settings in the existing Railway, Nixpacks, and GitHub Actions configuration files. Do not commit `package-lock.json`; this repo intentionally uses `npm install` in CI and Railway to avoid cross-platform lock-file issues. When changing build or deploy behavior, verify both `npm run build` and the relevant workflow/config file before merging.
