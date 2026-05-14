# Astro Neon Portfolio

A video-game inspired static portfolio built with Astro.

## Run locally

```bash
npm install
npm run dev
```

## Build static site

```bash
npm run build
```

Static output appears in `dist/`.

## Add a project manually

Create a markdown file in:

```txt
src/content/projects/my-project.md
```

Use this format:

```md
---
title: My Project
description: Short project summary.
icon: Gamepad2
githubUrl: https://github.com/your-username/my-project
image: /images/projects/my-image.png
tags: [Astro, CSS, JavaScript]
featured: true
order: 3
---

## Overview

Write the case study here.
```

## Admin CMS

The `/admin/` route uses Decap CMS. For it to save changes on a deployed static site, deploy to Netlify and enable Identity + Git Gateway, or replace the backend config with your Git provider's supported Decap backend.

A purely static site cannot save new projects to a database by itself. This setup saves project markdown/images back into your Git repo, then your host rebuilds the static site.
