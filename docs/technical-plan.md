# Technical Plan

## Stack

- Frontend: Nuxt 4 on Vue 3 with TypeScript.
- Styling: Tailwind CSS is planned but not yet implemented.
- Testing: Vitest, Vue Test Utils, and happy-dom.
- Version control: GitHub.
- CI/CD: GitHub Actions.
- Hosting: Netlify.
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

Pushes to `release` run `.github/workflows/deploy.yml`. The workflow installs dependencies, runs tests, and verifies the Netlify production build with `npm run build`. Netlify watches the `release` branch and deploys it through its Git integration.

The current flow is:

- Feature branch to pull request against `develop`.
- GitHub Actions runs tests before merge.
- Manual merge from `develop` to `release`.
- GitHub Actions installs, tests, and verifies the production build on `release`.
- Netlify builds and deploys the `release` branch automatically.

## Netlify

- Project: `mission-dawah-sa`.
- GitHub repo: `Sufyaan88/mission-dawah-sa`.
- Production branch: `release`.
- Official domain: `missiondawah.org.za`.
- Generated Netlify domain: `mission-dawah-sa.netlify.app`.
- Build command: `npm run build`.
- Publish directory: `dist`.
- Deployment is handled by Netlify's Git integration; no Netlify deploy token is stored in GitHub.

## Domain and DNS

- Registrar and DNS provider: Domains.co.za with Domain Protection enabled.
- Canonical hostname: `missiondawah.org.za`.
- `www.missiondawah.org.za` redirects to the canonical hostname.
- The apex `A` record points to Netlify's load balancer at `75.2.60.5`.
- The `www` `CNAME` record points to `mission-dawah-sa.netlify.app`.
- Netlify provides and automatically renews the Let's Encrypt TLS certificate for both hostnames.

The previous Railway-specific `railway.json` and `nixpacks.toml` files were removed after the migration.

## Dependency Install Notes

Do not commit `package-lock.json`. It was removed because a Windows-generated lock file caused earlier Railway Linux builds to fail around native `oxc-parser` bindings and npm `ci` usage. The lock file is ignored in `.gitignore`, and CI/deploy workflows use `npm install` instead of `npm ci`.

## Local Environment

The project was initially verified with Node `v22.15.0`, npm `10.9.2`, and Git `2.48.1`. Recommended VS Code extensions include Nuxtr, Tailwind CSS IntelliSense, GitLens, ESLint, and Prettier.

## Current Implementation

The site is live at `missiondawah.org.za`. The responsive homepage, Tahabbu page, bursary page, navigation, contact section, and footer are implemented. Each public page has a unique SEO title, meta description, and canonical URL on the official domain. Reusable components and pages are covered by Vitest and Vue Test Utils tests.

## Developer Preferences

- Keep explanations brief when requested.
- Explain the reason behind decisions, not only the commands.
- Use C#/.NET, Blazor, bUnit, and NUnit comparisons when helpful.
- Keep git history disciplined through feature branches and pull requests.
