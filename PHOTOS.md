# How to add your Memory Universe photos

You do **not** upload photos to Cursor or the website code directly. You add image files on your Mac into the project folder.

## Step 1 — Open the memories folder

In Finder, go to:

```
Birthday boy 2026 → public → memories
```

Full path:

```
/Users/leewaikiu/Desktop/Birthday boy 2026/public/memories/
```

## Step 2 — Add 8 photos with these exact file names

| File name | Shows as caption on site |
|-----------|--------------------------|
| `memory-1.jpg` | Japan Adventure 🇯🇵 |
| `memory-2.jpg` | Ocean Park 🎢 |
| `memory-3.jpg` | Michael Jackson Movie 🎬 |
| `memory-4.jpg` | Favourite Date |
| `memory-5.jpg` | Favourite Selfie |
| `memory-6.jpg` | Travel Memory |
| `memory-7.png` | Cute Moment *(PNG — already set in code)* |
| `memory-8.jpg` | Our First Year |

**Tips**

- Export from your phone/camera as JPG (or PNG — see Step 3).
- Rename each file to match the table (e.g. your Japan trip photo → `memory-1.jpg`).
- You can drag photos from Photos app into this folder, then rename them.

## Step 3 — If your files are PNG or HEIC

- **PNG:** either rename to `memory-1.png` etc., then in `data/memories.ts` change that line to `image: "/memories/memory-1.png"`.
- **HEIC (iPhone):** on Mac, open the photo → **File → Export** → choose **JPEG**, then save as `memory-1.jpg`.

## Step 4 — Refresh the website

With `./dev.sh` running, save your files and refresh the browser (Cmd+R).  
If a photo still doesn’t show, hard refresh: **Cmd+Shift+R**.

## Change captions

Edit `data/memories.ts` — change the `caption` text for each memory. You do not need to rename image files when only changing captions.
