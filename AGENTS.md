# Vertex Mining — AI Agent Project Guide

> **Purpose:** This document is the central reference for AI coding agents working on the Vertex Mining website. Read it before making changes and keep it updated as the project evolves.

## 1. Project Overview

Vertex Mining is a professional corporate website for a mining company.

The website should communicate the company's identity, services, capabilities, projects, and contact information through a premium industrial design.

### Primary objectives

- Build a professional, responsive corporate website.
- Support English and French.
- Maintain a consistent industrial visual identity.
- Present company information accurately without inventing credentials or achievements.
- Keep the code maintainable, reusable, accessible, and SEO-friendly.
- Ensure that new features work across both language versions.

## 2. Technology Stack

The project currently uses:

- Next.js App Router
- TypeScript
- Tailwind CSS
- `next-intl` for internationalization
- `lucide-react` for icons
- React Server Components where appropriate

**Rule:** Inspect `package.json` before changing dependencies. Do not assume additional libraries are installed.

## 3. Design System

Follow the existing visual direction.

| Element            | Design direction                           |
| ------------------ | ------------------------------------------ |
| Primary background | Charcoal / dark industrial tones           |
| Accent             | Warm copper                                |
| Light sections     | Off-white / warm neutral                   |
| Typography         | Strong, clean, professional                |
| Layout             | Generous spacing, structured grids         |
| Imagery            | Relevant industrial and mining photography |
| Interaction        | Subtle transitions and clear hover states  |

Existing components and styles take precedence over introducing a new design system.

All new pages must be responsive on mobile, tablet, and desktop.

## 4. Project Architecture

The project uses localized routes under `src/app/[locale]/`.

Expected or previously identified files:

```text
vertex-mining/
├── AGENTS.md
├── package.json
├── public/
└── src/
    ├── app/
    │   └── [locale]/
    │       ├── layout.tsx
    │       ├── page.tsx
    │       ├── about/
    │       │   └── page.tsx
    │       ├── services/
    │       │   └── page.tsx
    │       ├── projects/
    │       │   └── page.tsx
    │       ├── capabilities/
    │       │   └── page.tsx
    │       └── contact/
    │           └── page.tsx
    ├── components/
    │   ├── home/
    │   │   ├── Hero.tsx
    │   │   ├── About.tsx
    │   │   ├── Services.tsx
    │   │   └── Projects.tsx
    │   └── layout/
    │       ├── Container.tsx
    │       └── ...
    ├── i18n/
    │   ├── navigation.ts
    │   ├── routing.ts
    │   └── request.ts
    └── messages/
        ├── en.json
        └── fr.json
```

**Important:** This tree is a working reference, not a guarantee that every listed file exists. Inspect the actual repository before creating, moving, or replacing files.

## 5. Localization Rules

Supported locales:

- English: `en`
- French: `fr`

The default locale is English.

### Required conventions

1. Use the existing `next-intl` configuration.
2. Use localized `Link` from `src/i18n/navigation` for internal navigation.
3. Use `getTranslations()` from `next-intl/server` in Server Components.
4. Store translated UI copy in the appropriate message file.
5. Add corresponding translation keys to both `src/messages/en.json` and `src/messages/fr.json`.
6. Keep the structure of both locale files consistent.
7. Never assume that translating a page automatically translates navigation, metadata, buttons, or form validation.
8. Test both `/en/...` and `/fr/...` routes after implementing a feature.

Avoid hard-coded user-facing text when it should be localized.

## 6. Current Implementation Status

The following items have been implemented or previously reported as working. Verify the repository before changing them.

| Feature                       | Known status                           | Files to inspect                                                       |
| ----------------------------- | -------------------------------------- | ---------------------------------------------------------------------- |
| Internationalization setup    | Configured                             | `src/i18n/routing.ts`, `src/i18n/navigation.ts`, `src/i18n/request.ts` |
| Localized application layout  | Implemented                            | `src/app/[locale]/layout.tsx`                                          |
| Homepage hero                 | Implemented                            | `src/components/home/Hero.tsx`                                         |
| Homepage About section        | Implemented                            | `src/components/home/About.tsx`                                        |
| About page                    | Implemented and tested                 | `src/app/[locale]/about/page.tsx`                                      |
| Services section              | Implemented                            | `src/components/home/Services.tsx`                                     |
| Services page                 | Implemented                            | `src/app/[locale]/services/page.tsx`                                   |
| Projects section              | Implemented                            | `src/components/home/Projects.tsx`                                     |
| Projects page                 | Implemented and tested in both locales | `src/app/[locale]/projects/page.tsx`                                   |
| Capabilities page             | Under development / needs verification | `src/app/[locale]/capabilities/page.tsx`                               |
| Capabilities homepage section | Not confirmed                          | `src/components/home/Capabilities.tsx`                                 |
| Contact page and form         | Needs verification                     | `src/app/[locale]/contact/page.tsx`                                    |
| Header and navigation         | Implemented; verify all links          | Existing layout components                                             |
| SEO metadata                  | Needs verification                     | Localized layout and page metadata                                     |
| Production readiness          | Not yet confirmed                      | Build, type-check, and functional testing                              |

Do not mark a feature complete simply because its file exists. Verify its implementation and, where practical, test its behavior.

## 7. Feature-to-File Update Map

Before implementing a feature, identify every affected file.

### Homepage section

Inspect and update as needed:

- `src/app/[locale]/page.tsx` — add or reorder the section.
- `src/components/home/<Section>.tsx` — implement the section.
- `src/messages/en.json` — English content.
- `src/messages/fr.json` — French content.

### New localized page

Inspect and update as needed:

- `src/app/[locale]/<route>/page.tsx` — page implementation.
- `src/messages/en.json` — English translations.
- `src/messages/fr.json` — French translations.
- `src/components/layout/Container.tsx` — only if a shared layout change is necessary.
- Header/navigation component — if the route must appear in navigation.
- Localized metadata — if required.

### Header or navigation

Inspect:

- The component that actually renders the header.
- `src/app/[locale]/layout.tsx`.
- `src/i18n/navigation.ts`.
- `src/messages/en.json`.
- `src/messages/fr.json`.

Use the existing navigation implementation rather than creating a second header.

### Contact form

Inspect:

- `src/app/[locale]/contact/page.tsx`.
- Any existing contact form component.
- Both locale message files.
- Existing API route or server action, if one exists.
- Environment variable documentation, if integrations are introduced.

Do not claim that a form sends messages until its backend or email integration is implemented and tested.

### SEO and metadata

Inspect:

- `src/app/[locale]/layout.tsx`.
- Relevant localized `page.tsx` files.
- Existing `metadata` or `generateMetadata` implementations.
- `public/` for verified logos and social preview images.

Use appropriate page titles, descriptions, canonical URLs, and language alternates where applicable. Do not invent company facts.

### Shared component or design change

Identify every page that uses the shared component. Test those pages after changing it to avoid unintended regressions.

## 8. Content Accuracy and Company Claims

Accuracy is mandatory.

- Do not invent projects, clients, certifications, locations, equipment, statistics, partnerships, or company history.
- Treat proposed services and capabilities as draft marketing copy until confirmed by the company.
- Label illustrative project examples appropriately.
- Do not use placeholder content as if it described completed real-world work.
- Use approved company assets when available.
- Avoid unsupported claims about environmental performance, safety records, or regulatory compliance.

Ask for verified information when it is necessary to publish factual company content.

## 9. AI Agent Workflow

For every implementation task, follow this sequence.

### Before coding

1. Read this file.
2. Inspect the existing implementation and relevant dependencies.
3. Identify the files that must change.
4. Check both locale files and existing reusable components.
5. Avoid duplicating functionality that already exists.

### During implementation

1. Follow existing naming and architectural conventions.
2. Prefer Server Components unless client-side behavior is necessary.
3. Reuse existing components and design tokens.
4. Maintain English/French parity.
5. Keep changes focused on the requested feature.
6. Never overwrite unrelated user work.
7. Do not introduce dependencies without a clear reason.

### After implementation

1. Run available lint and type-check commands.
2. Run the production build when practical.
3. Test both English and French routes.
4. Check navigation, links, and responsive behavior.
5. Review the Git diff for unintended changes.
6. Update the project status in this document.
7. Report any tests that could not be completed.

Use commands that actually exist in `package.json`. Do not claim a test passed unless it was run successfully.

## 10. Mandatory Documentation Update

**After every completed feature, update this `AGENTS.md` file if the implementation changes the project status, architecture, file structure, conventions, or next steps.**

Update these sections as applicable:

- **Section 4 — Project Architecture:** new, removed, or relocated files.
- **Section 6 — Current Implementation Status:** mark features as planned, in progress, implemented, or tested.
- **Section 7 — Feature-to-File Update Map:** new dependencies between features and files.
- **Section 9 — AI Agent Workflow:** only when the workflow itself changes.
- **Section 11 — Progress Log:** record the completed work and outstanding issues.

Do not mark a feature as tested unless the relevant checks were actually performed.

Keep this file concise and current. Do not append duplicate instructions after every task.

## 11. Progress Log

Maintain a short chronological log using this format:

```text
### YYYY-MM-DD — Feature name
- Status: Implemented / Tested / Partially complete
- Files created:
- Files updated:
- Validation performed:
- Known issues:
- Next step:
```

Add a new entry after completing a meaningful feature. Record actual file paths and actual validation results.

### Latest known progress

- English and French routing has been configured.
- Homepage, About, Services, and Projects implementations have been created.
- About and Projects localized routes were reported as tested.
- Capabilities page is the current development focus.
- Contact page, navigation completeness, SEO, and production readiness require verification.

Update this snapshot after inspecting the repository; do not assume it remains accurate indefinitely.

## 12. Definition of Done

A feature is complete only when:

- [ ] Implementation matches the requested scope.
- [ ] Existing architecture and styling conventions are respected.
- [ ] Both locales contain the required translations.
- [ ] Relevant localized routes work.
- [ ] Navigation and links are correct.
- [ ] Responsive layout has been checked.
- [ ] Available validation checks have been run.
- [ ] No unrelated files were changed unnecessarily.
- [ ] `AGENTS.md` has been updated when required.
- [ ] The final report lists changed files, validation results, and remaining work.

## 13. Final Report Format

At the end of each implementation task, report:

1. **Completed:** What changed.
2. **Files created:** Exact paths.
3. **Files updated:** Exact paths and purpose.
4. **Validation:** Commands run and results.
5. **Remaining issues:** Anything incomplete or unverified.
6. **Next step:** The single most useful next task.

Never report an incomplete feature as production-ready.
