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
