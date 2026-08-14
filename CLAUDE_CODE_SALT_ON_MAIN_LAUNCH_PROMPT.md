# Claude Code Handoff Prompt — Salt on Main Production Launch

You are acting as a senior full-stack engineer, debugging specialist, deployment engineer, and production QA lead.

You are about to receive the existing Salt on Main website codebase.

## Mission

Your job is to help me safely take this existing website from its current codebase to a stable live production deployment on the purchased domain:

**SaltOnMain.media**

The website design is already built and substantially approved.

This is **not a redesign project**.

Your priorities, in order, are:

1. Understand the existing codebase before changing anything.
2. Preserve the current approved visual design and user experience.
3. Identify and fix bugs that could prevent a reliable launch.
4. Confirm the site builds successfully for production.
5. Verify booking links and primary conversion paths.
6. Prepare the project for Cloudflare deployment.
7. Help me publish the site to **SaltOnMain.media**.
8. Perform final production QA after deployment.

---

# Project Context

Salt on Main is a modern wellness destination offering:

- Salt Therapy / Halotherapy
- Infrared Salty Sauna
- Red Light Therapy
- Massage Therapy
- Signature Reset Experiences
- Private Events & Specialty Wellness Experiences

The campaign direction is:

**Salt. Sweat. Reset.**

A separate project file named:

`SALT_ON_MAIN_BRAND_CONTEXT.md`

contains the authoritative brand, service, messaging, and website guardrails.

Read that file before making content-related changes.

---

# Non-Negotiable Design Protection

The current website design is approved.

Do not redesign the website.

Preserve:

- page structure
- section layout
- typography
- colors
- spacing
- card styles
- button styles
- imagery
- navigation
- header/footer
- animations
- responsive behavior
- visual hierarchy
- existing brand identity

Do not make large refactors just because you prefer a different architecture.

Do not replace working components unnecessarily.

Do not alter global CSS, theme files, design tokens, or shared components unless there is a clear bug or deployment requirement.

If a bug can be fixed locally, fix it locally.

Use the smallest safe change.

---

# Phase 1 — Inspect Before Editing

Before modifying files:

1. Detect the framework and runtime.
2. Identify the package manager.
3. Read `package.json` and relevant config files.
4. Identify the build command.
5. Identify the output/build directory.
6. Identify routing strategy.
7. Identify environment variables.
8. Identify API/server dependencies.
9. Identify any external services.
10. Identify current deployment configuration.
11. Check whether Cloudflare-specific configuration already exists.
12. Review Git status and avoid overwriting unrelated user changes.

Then give me a concise assessment:

- framework
- runtime
- package manager
- build command
- output directory
- deployment model
- blockers
- risks
- missing information

Do not begin large-scale edits before completing this inspection.

---

# Phase 2 — Production Bug Audit

Audit the site for launch-blocking or high-impact issues.

Prioritize:

## Critical
- build failures
- runtime crashes
- broken routes
- missing dependencies
- incorrect imports
- environment-variable failures
- broken forms
- broken booking links
- blank pages
- hydration/rendering failures
- Cloudflare incompatibilities

## High Priority
- broken mobile layouts
- navigation failures
- missing images/assets
- bad internal links
- major console errors
- inaccessible primary CTAs
- obviously incorrect service copy
- mixed-content issues
- obvious SEO metadata problems

## Lower Priority
Do not spend launch time polishing minor cosmetic details unless they materially affect usability.

Create a short bug list categorized as:

- BLOCKER
- HIGH
- MEDIUM
- LOW

Then fix BLOCKER and HIGH issues first.

---

# Phase 3 — Content Safety

Do not rewrite the whole website.

Use `SALT_ON_MAIN_BRAND_CONTEXT.md` as context.

Only change content if it is:

- factually outdated
- inconsistent with current services
- missing a major service category
- connected to a broken CTA
- clearly erroneous
- unsafe or unsupported wellness/medical language

Do not invent services, prices, claims, durations, policies, or business details.

If the codebase conflicts with the brand-context file, flag the conflict before making a destructive change.

---

# Phase 4 — Booker Integration QA

The website should direct users to the approved Booker booking destination.

Booking URL:

**[INSERT FINAL BOOKER URL HERE]**

Audit all booking-related CTAs.

Confirm:

- homepage booking CTA works
- service booking CTA works
- mobile booking CTA works
- no old booking URLs remain
- no dead links remain
- target behavior is intentional
- external booking navigation works correctly

Do not rebuild Booker functionality inside the site.

---

# Phase 5 — Production Build

Before deployment:

1. Install dependencies using the detected package manager.
2. Run lint if configured.
3. Run type checks if configured.
4. Run tests if configured and relevant.
5. Run the production build.
6. Resolve blocking build errors.
7. Start the production preview locally if supported.
8. Verify key routes.
9. Verify primary assets.
10. Verify primary booking CTA.

Do not claim success unless the build actually completes.

Report commands executed and results.

---

# Phase 6 — Cloudflare Deployment Preparation

Target production domain:

**SaltOnMain.media**

Determine the correct Cloudflare deployment path based on the actual codebase.

Possible deployment approaches may include Cloudflare Pages, Workers, or another Cloudflare-supported deployment model.

Do not assume which one is correct until you inspect the framework and project configuration.

After inspection:

1. Recommend the correct deployment method.
2. Explain why it fits this codebase.
3. Add only the minimum necessary Cloudflare configuration.
4. Preserve the existing application architecture where possible.
5. Verify the build output matches Cloudflare requirements.
6. Identify required environment variables or secrets.
7. Do not expose secrets in committed files.

Before any irreversible or account-level action, tell me exactly what you need from me.

---

# Phase 7 — Domain Connection

The final public domain is:

**SaltOnMain.media**

Help me connect the production deployment to this domain.

Before changing DNS or domain configuration, determine:

- where the domain is registered
- whether its DNS is already managed by Cloudflare
- whether an existing production site currently uses this hostname
- whether both apex and `www` should resolve
- preferred canonical hostname

Preferred behavior unless I specify otherwise:

- `https://saltonmain.media` = primary production URL
- `https://www.saltonmain.media` = redirect to primary domain

Do not delete existing DNS records blindly.

If DNS changes are required, show me the exact records/actions first.

---

# Phase 8 — Final Production QA

After deployment, verify:

- production URL loads
- HTTPS is valid
- homepage works
- navigation works
- mobile layout works
- major service sections render
- images/assets load
- Booker CTA works
- no obvious console/runtime failures
- favicon/site metadata are present if already configured
- apex/www behavior works as intended
- no staging/dev URLs are exposed to customers

If possible, verify on both desktop and mobile viewport sizes.

---

# Scope Control

Do not:

- redesign the website
- rebuild the codebase from scratch
- migrate frameworks without necessity
- introduce unnecessary dependencies
- rewrite all copy
- change branding
- make speculative SEO changes
- create a new backend unless required
- expose credentials
- remove existing DNS records without review
- perform unrelated cleanup that increases deployment risk

This is a **stabilize → verify → deploy → QA** assignment.

---

# Working Style

Work in phases.

At the end of each phase, briefly report:

- what you inspected
- what you changed
- why
- test result
- remaining blocker
- what you need from me

If something is uncertain, ask rather than guessing.

If you find a significant scope change, identify it explicitly before proceeding.

---

# Definition of Done

The assignment is complete only when:

- production build succeeds
- critical bugs are fixed
- current design remains intact
- service context aligns with the brand file
- booking CTAs work
- Cloudflare deployment succeeds
- SaltOnMain.media resolves to the live site
- HTTPS works
- final production QA passes

Do not mark the project complete based only on code changes.

The website must actually be live and usable.
