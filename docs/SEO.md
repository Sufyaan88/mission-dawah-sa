# SEO Plan

This document is the working search engine optimization plan for Mission Dawah South Africa. Implement it incrementally through small, focused pull requests.

## Goals

- Help people find Mission Dawah South Africa and its projects through search engines.
- Make the organization, Tahabbu feeding scheme, and bursary programme clear and trustworthy.
- Establish one permanent domain whose search reputation survives future hosting changes.
- Measure results and improve the site using evidence rather than guesswork.

SEO does not guarantee a particular ranking. Strong results come from useful content, sound technical structure, external trust signals, and consistent improvement over time.

## How Search Visibility Works

1. **Discovery:** Google finds a URL through links, a sitemap, or a Search Console submission.
2. **Crawling:** Googlebot visits the URL and reads its content, links, and technical signals.
3. **Indexing:** Google evaluates the page and may store it in its searchable index.
4. **Ranking:** Google decides when and where an indexed page should appear for a search.

A crawled page is not automatically indexed, and an indexed page is not guaranteed to rank highly.

## Phase 1: Permanent Domain

- [x] Choose and register the organization's permanent custom domain: `missiondawah.org.za`.
- [x] Connect the domain to Netlify and confirm automatic HTTPS/SSL.
- [x] Use the root domain, `missiondawah.org.za`, as the canonical hostname.
- [x] Redirect `www.missiondawah.org.za` to the canonical hostname.
- [x] Keep DNS with Domains.co.za and point the required records to Netlify.
- [ ] Keep the same public domain if the site moves to another host in future.
- [ ] Avoid promoting or building backlinks to temporary provider URLs such as `.netlify.app`.

The permanent domain and HTTPS setup was completed on 2026-07-25. Domains.co.za remains the DNS provider, while Netlify hosts the site and manages its Let's Encrypt certificate.

The Netlify URL is suitable for development and early testing, but the permanent domain should be established before serious SEO promotion.

## Phase 2: Content and Search Intent

- Identify the primary audiences: donors, volunteers, bursary applicants, beneficiaries, and community partners.
- Identify the questions each audience is likely to search for.
- Give every important topic a useful, focused page rather than forcing everything onto the homepage.
- Clearly describe Mission Dawah South Africa, its location, purpose, activities, and contact details.
- Expand the Tahabbu page with accurate information about the feeding scheme, its beneficiaries, activities, and ways to help.
- Expand the bursary page with accurate eligibility, application, deadline, and contact information when available.
- Use relevant phrases naturally, without repeating keywords unnaturally.
- Keep facts, dates, application information, and contact details current.

Potential topics should be validated before targeting them. Examples include:

- Mission Dawah South Africa
- feeding scheme in South Africa
- support a local feeding programme
- bursary opportunities in South Africa
- donate to community projects in South Africa

Broad phrases are competitive. Specific, locally relevant content will usually be more achievable for a new site.

## Phase 3: Page Metadata

Each public page should have:

- [x] A unique and descriptive HTML title.
- [x] A useful meta description written for people, not only search engines.
- One clear main heading (`h1`).
- Logical subheadings in order.
- [x] A canonical URL using the permanent domain.
- Appropriate Open Graph and social sharing metadata.
- A meaningful social sharing image where appropriate.

Titles, descriptions, and canonical URLs were added to the homepage, Tahabbu page, and bursary page on 2026-07-25. Open Graph metadata and social sharing images remain pending.

Titles and descriptions should accurately represent the visible page content. Avoid duplicate metadata across pages.

## Phase 4: Technical SEO

- [x] Generate and publish `sitemap.xml` with canonical public URLs.
- [x] Configure `robots.txt` to allow public pages and reference the sitemap.
- Ensure temporary, private, or duplicate pages are not indexed.
- Use clean, stable, descriptive routes.
- Return correct HTTP status codes for live, redirected, and missing pages.
- Add permanent redirects whenever a public URL changes.
- Prevent duplicate versions of pages across hostnames or trailing-slash variations.
- Add Organization or NGO structured data using accurate, verifiable details.
- Add more specific structured data only when the visible content supports it.
- Validate structured data and generated HTML before release.

Do not block the entire production site in `robots.txt`. A sitemap helps discovery but does not force Google to index or rank a page.

## Phase 5: Performance, Mobile, and Accessibility

- Test pages on mobile and desktop.
- Keep pages fast and visually stable.
- Compress and correctly size images.
- Prefer modern image formats where browser support and workflow allow.
- Lazy-load non-critical images.
- Give informative images meaningful alternative text.
- Use empty alternative text for purely decorative images.
- Keep navigation usable with a keyboard and assistive technology.
- Maintain readable contrast, sensible font sizes, and clear link text.
- Monitor Core Web Vitals and fix material regressions.

Performance and accessibility improve the visitor experience and support search visibility, but neither replaces valuable content.

## Phase 6: Google Search Console

After the permanent domain is live:

- Create a Google Search Console domain property.
- Verify ownership through DNS.
- Submit the production sitemap.
- Inspect the homepage and key project URLs.
- Request initial indexing where appropriate.
- Monitor indexing status, crawl problems, manual actions, security issues, and Core Web Vitals.
- Record important findings in project documentation or issues.

Search Console helps diagnose visibility; requesting indexing does not guarantee inclusion or ranking.

## Phase 7: Trust and Authority

- Keep organization names, contact details, and descriptions consistent across the web.
- Link to the permanent domain from genuine organization social profiles.
- Seek relevant links from community partners, sponsors, schools, mosques, NGOs, and reputable directories.
- Publish useful updates, impact reports, application information, and project outcomes when available.
- Clearly identify who operates the organization and how visitors can make contact.
- Avoid buying backlinks, automated directory spam, copied content, or misleading claims.

Relevant, earned links and credible mentions are more valuable than large numbers of low-quality links.

## Phase 8: Measurement and Improvement

Review performance periodically using Search Console and privacy-appropriate analytics:

- Indexed pages.
- Search queries and impressions.
- Clicks and click-through rate.
- Average search position, treated as a directional metric.
- Landing pages receiving search traffic.
- Mobile usability and Core Web Vitals.
- Broken links, missing pages, and redirect errors.
- Useful outcomes such as contact, volunteer, application, or donation interest.

Improve weak pages by answering visitor questions more completely and accurately. Do not change content solely to chase short-term ranking fluctuations.

## Suggested Pull Request Sequence

1. Configure the permanent domain, canonical hostname, and redirects.
2. Add shared site metadata and page-specific titles and descriptions through TDD.
3. Add and test canonical URLs and social sharing metadata.
4. Add and verify `robots.txt` and `sitemap.xml`.
5. Add and validate Organization or NGO structured data.
6. Audit headings, links, image alternative text, and accessibility.
7. Optimize image delivery and page performance.
8. Verify Search Console and submit the sitemap.
9. Expand project content based on confirmed organizational information and search intent.
10. Review search performance and create evidence-based follow-up tasks.

Keep each pull request small and independently verifiable. Follow the repository's red, green, refactor workflow for behaviour and configuration changes.

## Definition of Done for Initial SEO Setup

- The permanent domain is live over HTTPS.
- One canonical hostname is enforced.
- Every public page has a unique title, description, main heading, and canonical URL.
- `robots.txt` and `sitemap.xml` are accessible and correct.
- Structured data is accurate and passes validation.
- Important images have appropriate alternative text.
- Key pages work on mobile and meet reasonable performance expectations.
- Google Search Console ownership is verified and the sitemap is submitted.
- No temporary Netlify or old Railway URL is promoted as the official address.

## Guardrails

- Never publish private beneficiary, donor, student, or applicant information for SEO.
- Never invent impact figures, testimonials, partnerships, addresses, or organizational credentials.
- Never expose secrets in public metadata, generated files, or environment variables.
- Use redirects and canonical URLs carefully when changing domains or routes.
- Preserve established public URLs unless there is a strong reason to change them.
- Treat SEO as an ongoing product practice, not a one-time installation.
