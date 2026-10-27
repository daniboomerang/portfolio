#!/bin/sh
# Bootstrap a fresh checkout / Fredrin ticket worktree. Idempotent; run from the repo root.
# No secrets and no .env are needed: the page has no backend, auth or CMS.
set -eu

if ! command -v bun >/dev/null 2>&1; then
  echo "setup: bun is required (https://bun.sh) — install it and re-run" >&2
  exit 1
fi

bun install --frozen-lockfile
echo "setup: ok — run 'bun run dev' (http://localhost:3009)"
