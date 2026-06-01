#!/bin/bash
# Push site to GitHub Pages — run: ./push-github.sh your-github-username
set -e
cd "$(dirname "$0")"

USERNAME="$1"

if [ -z "$USERNAME" ]; then
  echo "Usage: ./push-github.sh YOUR_GITHUB_USERNAME"
  echo ""
  echo "Example: ./push-github.sh janicelee"
  echo ""
  echo "First create an empty repo on GitHub named: birthday-ctt"
  echo "  https://github.com/new"
  exit 1
fi

export PATH="$(pwd)/.node/bin:$PATH"

git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/${USERNAME}/birthday-ctt.git"

echo "Pushing to https://github.com/${USERNAME}/birthday-ctt ..."
git push -u origin main

echo ""
echo "Done! Next:"
echo "  1. GitHub → birthday-ctt → Settings → Pages → Source: GitHub Actions"
echo "  2. Wait ~3 min, then open:"
echo "     https://${USERNAME}.github.io/birthday-ctt/"
