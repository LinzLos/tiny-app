#!/usr/bin/env bash
# tw-sync.sh — fetch the pinned Tiny Wire release into src/styles/tiny-wire/.
# Reads the tag from src/styles/tiny-wire/tiny-wire.version, downloads tokens.css
# and fonts.css from that tag on GitHub, and overwrites the local copies. Never
# edit the vendored files by hand; bump the version file and run `npm run tw:sync`.
set -euo pipefail
DIR="$(cd "$(dirname "$0")/.." && pwd)/src/styles/tiny-wire"
TAG="$(tr -d '[:space:]' < "$DIR/tiny-wire.version")"
BASE="https://raw.githubusercontent.com/LinzLos/tiny-wire/$TAG/lib"
for f in tokens.css fonts.css; do
  curl -fsSL "$BASE/$f" -o "$DIR/$f.tmp"
  mv "$DIR/$f.tmp" "$DIR/$f"
  echo "synced $f @ $TAG"
done
