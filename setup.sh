#!/bin/bash
# Install dependencies (downloads local Node if needed)
set -e
cd "$(dirname "$0")"

ARCH=$(uname -m)
NODE_DIR="$(pwd)/.node"
NODE_VERSION="v22.14.0"

if [ "$ARCH" = "arm64" ]; then
  NODE_PKG="node-${NODE_VERSION}-darwin-arm64"
elif [ "$ARCH" = "x86_64" ]; then
  NODE_PKG="node-${NODE_VERSION}-darwin-x64"
else
  echo "Unsupported architecture: $ARCH"
  echo "Install Node.js from https://nodejs.org/ then run: npm install && npm run dev"
  exit 1
fi

if ! command -v "$(pwd)/.node/bin/npm" >/dev/null 2>&1; then
  echo "Downloading Node.js ${NODE_VERSION} for ${ARCH}..."
  mkdir -p "$NODE_DIR"
  curl -fsSL "https://nodejs.org/dist/${NODE_VERSION}/${NODE_PKG}.tar.gz" -o /tmp/node-birthday.tar.gz
  tar -xzf /tmp/node-birthday.tar.gz -C "$NODE_DIR" --strip-components=1
  rm -f /tmp/node-birthday.tar.gz
  echo "Node installed to .node/"
fi

export PATH="$(pwd)/.node/bin:$PATH"
npm install
node scripts/generate-placeholders.mjs

echo ""
echo "Done! Start the site with:"
echo "  ./dev.sh"
