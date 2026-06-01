# Fix “404 — There isn’t a GitHub Pages site here”

Your website URL (after setup):

**https://janice-lee-cloud.github.io/birthday-ctt/**

The GitHub repo link is **not** the website. You must turn on Pages once.

---

## Step 1 — Open Pages settings

1. Go to: [https://github.com/janice-lee-cloud/birthday-ctt/settings/pages](https://github.com/janice-lee-cloud/birthday-ctt/settings/pages)

2. Under **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).

   Docs: [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

---

## Step 2 — Run the deploy workflow

1. Open: [https://github.com/janice-lee-cloud/birthday-ctt/actions](https://github.com/janice-lee-cloud/birthday-ctt/actions)

2. Click **Deploy to GitHub Pages** (left side).

3. Click **Run workflow** → **Run workflow** (green button).

4. Wait until both jobs show a **green checkmark** (about 3–5 minutes).

   If you see a **red X**, click the failed job and send the error text for help.

---

## Step 3 — Push latest code (on your Mac)

If you never pushed after adding the workflow, run in Terminal **one line at a time**:

```bash
cd "/Users/leewaikiu/Desktop/Birthday boy 2026"
```

```bash
./push-github.sh janice-lee-cloud
```

That triggers the deploy automatically on every push.

---

## Step 4 — Open your site

**https://janice-lee-cloud.github.io/birthday-ctt/**

Use the trailing slash. Hard refresh: **Cmd+Shift+R**.

---

## If it still says 404

### Private repository

On a free GitHub account, Pages for **private** repos may be blocked or limited.

- Either: **Settings** → **General** → **Danger Zone** → **Change visibility** → **Public**  
- Or: [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) — check your plan.

### Workflow never ran

- Confirm `.github/workflows/deploy.yml` exists on GitHub (browse the repo on the website).
- Run **Step 2** manually.

### More help

- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)
- [Troubleshooting 404 errors](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)
