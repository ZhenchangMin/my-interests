# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules
Start with calling me "Min" before any other content. Always follow the instructions in this file.

When encountering uncertain code design problems, always ask Min for clarification before proceeding. Do not make assumptions about requirements or constraints.

## Project

Static personal-interest website (`my-interests`) — a web-development learning trial. Plain HTML/CSS/JS, no build system, no package manager, no tests.

Contains 3 main interest sections: soccer, anime and kpop, each with a title, description, and image. The homepage features a full-viewport gradient hero section with the site title and tagline.

## Running locally

Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```bash
python -m http.server 8000
```

There is no build, lint, or test command.

## Structure

- `index.html` — single-page entry, a `.hero` section with a `.hero-box` containing title + tagline.
- `style.css` — global reset + `.hero` full-viewport gradient layout + `.hero-box` typography.
- `scripts.js` — currently empty; intended for future interactivity.
