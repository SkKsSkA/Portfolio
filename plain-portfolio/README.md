# Portfolio (plain HTML/CSS/JS)

No React, no Vite, no build step. Just static files.

## How to run

Open `index.html` in any browser — double-click the file, or drag it into a browser window. That's it.

(Some browsers restrict `fetch`/module loading for files opened via `file://`, but this project doesn't use either — plain `<script>` tags — so it works straight from disk on any device.)

## Structure

- `index.html` — page markup
- `styles.css` — all styling
- `data.js` — your editable content: skills, hobbies, projects
- `script.js` — renders the skills/hobbies/projects cards from `data.js`
- `photo.jpg` — profile photo

## Editing content

Open `data.js` and edit the `skills`, `hobbies`, and `projects` arrays — no other file needs to change.

To edit the hero text, bio, or contact links, edit them directly in `index.html`.

## Deploying

Since it's fully static, you can host it anywhere for free: GitHub Pages, Netlify, Vercel, Cloudflare Pages — just upload the folder.
