# Rebuilt Documentation

Docusaurus documentation for Rebuilt by Difffuse Studio.

## Status

Rebuilt 1.0 user guide: 17 pages, a Buddha homepage render and 14 annotated figures from real Blender captures. Covers installation, Auto and Manual workflows, retopology, seams, UVs, baking, reports, and Unity / Unreal / Godot export.

## Local development

Use Node.js 22 LTS (Node 20 or later required).

```sh
npm ci
npm start
```

## Validation

```sh
npm run typecheck
npm run build
```

## Publishing

The site is configured for `https://difffuse.github.io/rebuilt-documentation/`. Select **GitHub Actions** in Settings → Pages. The deployment workflow validates and builds the site on pushes to `main`, then deploys the generated `build` directory. The prebuild check rejects missing screenshots, invalid dimensions or missing annotations.

## Design reference

Adapted from [Procedural Interiors Documentation](https://github.com/difffuse/procedural-interiors-documentation), commit `b4cc7ea1226a3f8e31bd444921ffe9ca369e4180`. Retains the Difffuse branding, Docusaurus configuration and shared theme styles. Rebuilt content is maintained separately.

This repository contains documentation website files only.
