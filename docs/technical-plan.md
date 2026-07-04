# Technical Plan

## Stack

- Frontend: Nuxt 4 on Vue 3 with TypeScript.
- Styling: Tailwind CSS is planned but not yet implemented.
- Testing: Vitest, Vue Test Utils, and happy-dom.
- Version control: GitHub.
- CI/CD: GitHub Actions.
- Hosting: Railway.
- Future backend: .NET Minimal API, PostgreSQL, Docker, and PayFast.

Nuxt was chosen over plain Vue for SEO, static generation, file-based routing, and built-in meta tag handling.

## Development Workflow

All development should follow TDD: red, green, refactor. Write a failing test first, add the smallest implementation needed to make it pass, then refactor if cleanup is needed.

## Branching

- `develop`: default branch; feature work merges here through pull requests.
- `release`: production deployment branch.
- `feature/*`: short-lived task branches, deleted after merge.

Use feature branches for all changes. Do not commit directly to `develop` or `release`. `develop` has branch protection requiring pull requests and passing GitHub Actions checks. The expected status check name is `test`.

## CI/CD

Pull requests into `develop` or `release` run `.github/workflows/pr-checks.yml`. The workflow checks out the repo, installs Node 22, installs dependencies, and runs `npm test`.

Pushes to `release` run `.github/workflows/deploy.yml`. The workflow installs dependencies, runs tests, and builds with `npm run generate`. Railway deployment is handled by Railway's "Wait for CI" feature after the workflow passes.

The current flow is:

- Feature branch to pull request against `develop`.
- GitHub Actions runs tests before merge.
- Manual merge from `develop` to `release`.
- GitHub Actions installs, tests, and builds on `release`.
- Railway deploys automatically after CI passes.

## Railway

- Project: `mission-dawah-sa`.
- GitHub repo: `Sufyaan88/mission-dawah-sa`.
- Production branch: `release`.
- Region: EU West.
- Wait for CI: enabled.
- Generated domain: `mission-dawah-sa-production.up.railway.app`.
- `RAILWAY_TOKEN` exists as a GitHub Actions repository secret for future use.

Railway uses root-level build configuration. `railway.json` documents the Railpack build and start command, while `nixpacks.toml` is the file that resolved the active Railway build commands:

- Install: `npm install`.
- Build: `npm run generate`.
- Start: `npx serve .output/public`.

## Dependency Install Notes

Do not commit `package-lock.json`. It was removed because a Windows-generated lock file caused Railway Linux builds to fail around native `oxc-parser` bindings and npm `ci` usage. The lock file is ignored in `.gitignore`, and CI/deploy workflows use `npm install` instead of `npm ci`.

## Local Environment

The project was initially verified with Node `v22.15.0`, npm `10.9.2`, and Git `2.48.1`. Recommended VS Code extensions include Nuxtr, Tailwind CSS IntelliSense, GitLens, ESLint, and Prettier.

## Current Implementation

The site is live at `mission-dawah-sa-production.up.railway.app`, currently showing the default Nuxt welcome page. The first TDD example is `app/components/AppHeader.vue`, covered by `tests/components/AppHeader.test.ts`. It verifies the NGO name and navigation links, but `AppHeader` still needs to be wired into `app/app.vue`.

## Developer Preferences

- Keep explanations brief when requested.
- Explain the reason behind decisions, not only the commands.
- Use C#/.NET, Blazor, bUnit, and NUnit comparisons when helpful.
- Keep git history disciplined through feature branches and pull requests.
