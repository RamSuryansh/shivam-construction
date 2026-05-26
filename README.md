# Shivam Construction

Production Svelte/Vite site for Shivam Construction's mobile services showcase.

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- pnpm

## Commands

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
pnpm security:audit
pnpm validate
```

## SEO Configuration

Set the live domain before creating the production build so canonical URLs, link preview
images, `robots.txt`, and `sitemap.xml` use absolute production URLs:

```bash
VITE_SITE_URL=https://your-production-domain.example pnpm build
```

## Production Checklist

Run these before deploying:

```bash
pnpm validate
pnpm security:audit
```

The production build is emitted to `dist/`. Static hosting platforms that support a `public/_headers` file will also receive the security headers copied into the build.
