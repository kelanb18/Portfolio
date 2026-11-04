# Portfolio instructions

## Hosting and deployment

- The live site is https://kelanb.com and is hosted on Vercel, not GitHub Pages. GitHub Pages is retired; the former Pages address is no longer the site.
- Every push to `main` automatically goes live on kelanb.com within about a minute. Other branches only receive a private preview link.
- Vercel settings: framework preset **Other**, root directory `./`, no build command, and no output directory. Vercel serves the files exactly as they are.
- The domain is registered at IONOS, and DNS points to Vercel. These settings are not managed in this repository. Do not change them.

## Rules for changes

- Keep every internal link and asset path relative, such as `assets/kelan.jpg`. Never start a path with `/` or add `/Portfolio/` to a path.
- Do not add a build step, framework, or package manager unless the user asks.
- Do not add a `CNAME` file or `vercel.json` unless a change genuinely requires it.
- When an absolute link to this site is needed, use https://kelanb.com. Never reference the retired GitHub Pages address.
- Leave `.nojekyll` alone. It is a harmless leftover.
- Keep new images and videos reasonably sized.

## Communicating changes

The user is not a developer. Explain changes in plain English and say which pages are affected.
