# Feature Tasks

Use this file to track future feature ideas, active work, and completed project tasks.

## Planned

- Replace the default Nuxt welcome page in `app/app.vue`.
- Wire `AppHeader` into the app shell.
- Build the homepage using a TDD workflow.
- Add static pages for Feeding Scheme, Bursary, About, and Contact.
- Add Tailwind CSS.
- Configure custom domain, DNS, and SSL.
- Add a contact form backed by a .NET Minimal API.
- Containerize backend services with Docker.
- Add PostgreSQL for future persisted data.
- Add PayFast donations for South African payment support.

## In Progress

- Set up project documentation.
- Maintain the current GitHub Actions and Railway deployment flow.

## Completed

- Create Nuxt 4 project with Vue 3 and TypeScript.
- Configure Vitest, Vue Test Utils, and happy-dom for component testing.
- Add initial `AppHeader` component and tests.
- Create GitHub repository with `develop`, `release`, and `feature/*` branch strategy.
- Add branch protection on `develop` requiring pull requests and passing checks.
- Add GitHub Actions PR checks and release build workflow.
- Connect Railway production deployment to the `release` branch.
- Enable Railway Wait for CI.
- Deploy the initial Nuxt site to `mission-dawah-sa-production.up.railway.app`.
- Remove `package-lock.json` from the repo and ignore it to avoid cross-platform CI/build issues.
- Create contributor guidelines in `AGENTS.md`.

## Phase Plan

- Phase 1 and 2: foundation, repository setup, branch strategy, TDD config, and GitHub Actions.
- Phase 2: homepage built through TDD.
- Phase 3: first Railway deployment from staging to production. Initial deployment is complete.
- Phase 4: remaining static pages.
- Phase 5: custom domain, DNS, and SSL.
- Phase 6: contact form, .NET Minimal API, and Docker.
- Phase 7: PayFast donations and PostgreSQL.

## Notes

When adding tasks, keep each item action-oriented and small enough to implement or review.
