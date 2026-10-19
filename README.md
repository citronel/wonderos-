# WonderOS

A premium futuristic desktop-like interface built in React + TypeScript + Vite.

## Features

- Immersive glass UI with responsive layout
- Persistent notes and settings via local storage
- Browser, calculator, files, gallery, music, terminal, and settings apps
- Mobile-first interactions and reduced-motion fallback
- 3D wallpaper scene using React Three Fiber

## Setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Cloudflare deployment

This project is a standard Vite SPA. For Cloudflare Pages or Workers static assets, configure a build command of `npm run build` and an output directory of `dist`.

Example Pages settings:

- Framework preset: None
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `.`

For a project that does not use a framework-specific adapter, Cloudflare Pages can serve the generated static files directly.
