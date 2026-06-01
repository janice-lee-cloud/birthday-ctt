#!/bin/bash
# Run the dev server using the project's local Node (no global install needed)
cd "$(dirname "$0")"
export PATH="$(pwd)/.node/bin:$PATH"

if ! command -v npm >/dev/null 2>&1; then
  echo "Node is not set up yet. Run: ./setup.sh"
  exit 1
fi

# Free port 3000 if an old Next.js dev server is still running
if lsof -ti :3000 >/dev/null 2>&1; then
  echo "Stopping old server on port 3000..."
  lsof -ti :3000 | xargs kill 2>/dev/null || true
  sleep 1
fi

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

echo ""
echo "  → Open http://localhost:3000 when you see 'Ready'"
echo ""

npm run dev
