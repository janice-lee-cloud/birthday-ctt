#!/bin/bash
# Prepare git commit for publishing (run once, then push to GitHub — see DEPLOY.md)
set -e
cd "$(dirname "$0")"

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  git init
  git branch -M main
  echo "Git initialized."
fi

git add .
if git diff --staged --quiet; then
  echo "Nothing new to commit."
else
  git commit -m "Update birthday website"
  echo "Committed. Next: push to GitHub (see DEPLOY.md)."
fi

echo ""
echo "Public link after GitHub Pages deploy:"
echo "  https://YOUR_GITHUB_USERNAME.github.io/birthday-ctt/"
echo ""
echo "Replace YOUR_GITHUB_USERNAME, then follow DEPLOY.md to push."
