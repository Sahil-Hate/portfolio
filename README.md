# Sahil Hate, Portfolio

Personal portfolio site. Next.js App Router, TypeScript, Tailwind CSS, Framer Motion (motion/react). Fully static export, no server runtime, served entirely from a CDN.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build and static export

```bash
npm run build
```

The static site is written to `out/`. Preview it locally:

```bash
npx serve out
```

## Deploy

### Vercel (one command)

```bash
npx vercel --prod
```

Vercel detects Next.js and respects `output: "export"`. The site ships as static files behind Vercel's CDN.

### Cloudflare Pages

Build command `npm run build`, output directory `out`.

## Editing content

All site copy lives in typed data files. Components never hardcode content.

- `content/site.ts`: name, tagline, links, email, about paragraphs, production URL
- `content/experience.ts`: roles and bullets
- `content/projects.ts`: project cards
- `content/skills.ts`: skill groups
- `content/publication.ts`: paper title, venue, and IEEE Xplore link

## Before you deploy

1. Replace `public/Sahil_Hate_Resume.pdf` (currently a placeholder) with your real resume.
2. Paste the exact IEEE Xplore paper URL into `content/publication.ts`.
3. Set your real domain in `content/site.ts` (`url`) so Open Graph tags, sitemap, and robots.txt point to the right place.
