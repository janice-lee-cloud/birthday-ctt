# Happy 25th Birthday, CTT ❤️

A mobile-first, interactive birthday website for **Duck Duck BB** — built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Storytelling landing page with 6 immersive sections
- Personal letter page with envelope animation and typewriter reveal
- Floating hearts, particle parallax, ambient sparkles
- Optional music & sound effects (user-controlled, no autoplay)
- GitHub Pages ready static export

## Quick Start

If `npm` works in your terminal:

```bash
npm install
npm run dev
```

If you see **`command not found: npm`**, use the included scripts (no global Node required):

```bash
cd "/Users/leewaikiu/Desktop/Birthday boy 2026"
chmod +x setup.sh dev.sh
./setup.sh    # first time only
./dev.sh      # start the site
```

Open [http://localhost:3000](http://localhost:3000).

**Optional:** Install [Node.js](https://nodejs.org/) (LTS) so `npm` works everywhere in Terminal.

## Build for Production

```bash
npm run build
```

Static files are output to the `out/` folder.

### Local preview of static export

```bash
npx serve out
```

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project.
2. In the repo: **Settings → Pages → Build and deployment → Source**: **GitHub Actions**.
3. Push to `main` (or `master`). The included workflow builds and deploys automatically.

The workflow sets `NEXT_PUBLIC_BASE_PATH` to your repository name (e.g. `/birthday-ctt`), which is required when the site is served from `https://username.github.io/repo-name/`.

### Custom domain (optional)

If you use a custom domain at the root (`https://yourdomain.com`), build locally with an empty base path:

```bash
NEXT_PUBLIC_BASE_PATH= npm run build
```

Then upload the `out/` folder or adjust the workflow env var to `""`.

## Replace Photos (Memory Universe)

See **[PHOTOS.md](./PHOTOS.md)** for a step-by-step guide.

Quick version: put your photos in `public/memories/` as:

- `memory-1.jpg` → Japan Adventure  
- `memory-2.jpg` → Ocean Park  
- `memory-3.jpg` → Michael Jackson Movie  
- … through `memory-8.jpg`

Then refresh the browser. You do **not** upload photos to Cursor.

## Edit the Birthday Letter

Open `data/letter.ts` and edit `letterContent`. **View it on the letter page** (not the home page):

**http://localhost:3000/letter**

Scroll down on the home page → **Open My Letter →**, then tap the envelope. After editing `letter.ts`, refresh the letter page and open the envelope again.

If changes still look old, restart the dev server (`./dev.sh`) and hard-refresh the browser (Cmd+Shift+R).

```ts
export const letterContent = `Your message here...`;
```

## Change Music

1. Copy your `.mp3` into `public/music/`
2. Open `data/music.ts` and set `musicSrc` to your filename, e.g. `"/music/your-song.mp3"`
3. Refresh the page and tap **play** (bottom-right)

Music does **not** autoplay.

## Sound Effects

Toggle the speaker icon (bottom-right, left of music). Effects use the Web Audio API — no extra files required.

## Project Structure

```
app/
  page.tsx          # Landing page
  letter/page.tsx   # Letter page
components/
  Hero.tsx
  MemoryGallery.tsx
  LoveConstellation.tsx
  AILoveAnalysis.tsx
  BirthdayCake.tsx
  Envelope.tsx
  LetterExperience.tsx
  FloatingHearts.tsx
  ...
data/
  memories.ts
  letter.ts
  constellation.ts
public/
  memories/
  music/
```

## Tech Stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

---

Made with love by Janice for Duck Duck BB 🎂
