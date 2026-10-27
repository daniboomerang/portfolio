import type { NextConfig } from 'next'

const config: NextConfig = {
  // Pin the workspace root to this repo so a lockfile in a parent folder (e.g. a Fredrin
  // worktrees directory) is never mistaken for the project root.
  turbopack: { root: __dirname }
}

export default config
