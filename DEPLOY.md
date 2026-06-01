# Get a public link anyone can open

Your site must be **published online**. `localhost` only works on your Mac.

The easiest free option is **GitHub Pages**. Your link will look like:

```text
https://YOUR_GITHUB_USERNAME.github.io/birthday-ctt/
```

(Replace `YOUR_GITHUB_USERNAME` with your real GitHub username.)

---

## Step 1 — Create a GitHub account (if needed)

Go to [https://github.com/signup](https://github.com/signup)

---

## Step 2 — Create a new repository on GitHub

1. Open [https://github.com/new](https://github.com/new)
2. **Repository name:** `birthday-ctt` (use this exact name so the link matches the project setup)
3. Choose **Private** or **Public** (Public is fine — only people with the link need to find it)
4. Do **not** add README, .gitignore, or license (you already have files)
5. Click **Create repository**

---

## Step 3 — Upload the project from your Mac

Open **Terminal** and run (one block at a time):

```bash
cd "/Users/leewaikiu/Desktop/Birthday boy 2026"

git init
git add .
git commit -m "Birthday website for CTT"

git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/birthday-ctt.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with yours (e.g. `janicelee`).

GitHub may ask you to sign in in the browser.

---

## Step 4 — Turn on GitHub Pages

1. On GitHub, open your `birthday-ctt` repository
2. **Settings** → **Pages** (left sidebar)
3. Under **Build and deployment** → **Source**, choose **GitHub Actions**
4. Wait 2–5 minutes for the workflow to finish (tab **Actions** → green checkmark)

---

## Step 5 — Your public link

Open:

```text
https://YOUR_GITHUB_USERNAME.github.io/birthday-ctt/
```

Share that URL with anyone. Works on phone and computer.

---

## After you change photos, letter, or music

```bash
cd "/Users/leewaikiu/Desktop/Birthday boy 2026"
git add .
git commit -m "Update content"
git push
```

Wait a few minutes, then refresh the public link.

---

## Faster alternative: Vercel (optional)

1. Push to GitHub (steps above)
2. Go to [https://vercel.com](https://vercel.com) → sign in with GitHub
3. **Add New Project** → import `birthday-ctt` → **Deploy**
4. You get a link like `https://birthday-ctt-xxx.vercel.app`

No `github.io` path needed on Vercel.
