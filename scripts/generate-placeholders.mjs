import { writeFileSync, mkdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const memoriesDir = join(root, "public", "memories");
const musicDir = join(root, "public", "music");

mkdirSync(memoriesDir, { recursive: true });
mkdirSync(musicDir, { recursive: true });

const captions = [
  "Japan Adventure",
  "Ocean Park",
  "Michael Jackson Movie",
  "Favourite Date",
  "Favourite Selfie",
  "Travel Memory",
  "Cute Moment",
  "Our First Year",
];

captions.forEach((caption, i) => {
  const hue = 320 + i * 15;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:hsl(${hue},60%,15%)"/>
      <stop offset="100%" style="stop-color:hsl(${hue + 40},70%,25%)"/>
    </linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#g)"/>
  <text x="200" y="250" text-anchor="middle" fill="#FFB6C1" font-family="Georgia, serif" font-size="22">${caption}</text>
  <text x="200" y="290" text-anchor="middle" fill="#ffffff80" font-family="sans-serif" font-size="14">Replace with your photo</text>
</svg>`;
  writeFileSync(join(memoriesDir, `memory-${i + 1}.svg`), svg);
});

const musicPath = join(musicDir, "birthday-ambient.mp3");
let needsMusic = true;
try {
  if (statSync(musicPath).size > 5000) needsMusic = false;
} catch {
  /* missing */
}

if (needsMusic) {
  console.log("Downloading playable placeholder music (replace with your own MP3)...");
  const res = await fetch(
    "https://raw.githubusercontent.com/anars/blank-audio/master/1-second-of-silence.mp3",
  );
  if (res.ok) {
    writeFileSync(musicPath, Buffer.from(await res.arrayBuffer()));
  }
}

console.log("Generated memory SVG placeholders.");
