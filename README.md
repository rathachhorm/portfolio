# Portfolio

Live site: https://rathachhorm.github.io/portfolio/

This is a [Next.js](https://nextjs.org) project configured for static export and deployment to GitHub Pages.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Edit `src/app/page.js` (and other files under `src/`) to update content; hot reload is enabled.

When testing the production build locally with the same base path GitHub Pages will use, run:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

## Deployment (GitHub Actions + Pages, not Vercel)

Deployment is automated via `.github/workflows/deploy.yml`.

- Triggers on pushes to `main` or manual dispatch from the Actions tab.
- Builds with Node 20, runs `npm ci` and `npm run build`, and uploads the exported `out` directory.
- Sets `NEXT_PUBLIC_BASE_PATH` automatically. If the repo is `<username>.github.io` the base path is `/`; otherwise it is `/<repo-name>`.
- Publishes the artifact with `actions/deploy-pages` to GitHub Pages.

Initial setup:

1. In **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Ensure Pages permissions allow deployment from workflows (default for public repos).
3. Push to `main` or use **Actions → Deploy to GitHub Pages → Run workflow** to trigger the first deploy.
