import crypto from 'crypto'
import fs from 'fs'
import path from 'path'

import buildTokens from './build'

const distRoot = path.resolve(__dirname, '../../dist/libs/tokens')

/**
 * Recursively collect all file paths inside distRoot.
 */
function collectFiles(root: string): string[] {
  if (!fs.existsSync(root)) return []
  const acc: string[] = []
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry)
      const stat = fs.statSync(full)
      if (stat.isDirectory()) walk(full)
      else acc.push(full)
    }
  }
  walk(root)
  return acc
}

/**
 * Produce a manifest (stable order) with hash + size to snapshot.
 */
function buildManifest() {
  const files = collectFiles(distRoot).sort()
  console.log(files)

  return files.map((f) => {
    const rel = path.relative(distRoot, f)
    const buf = fs.readFileSync(f)
    const hash = crypto
      .createHash('sha256')
      .update(buf)
      .digest('hex')
      .slice(0, 16)
    return { path: rel, size: buf.length, hash }
  })
}

/**
 * Allow focusing on a deterministic subset (example core files).
 */
function subset(manifest: ReturnType<typeof buildManifest>) {
  const wanted = [
    '2023/css/variables.base.css',
    '2023/css/variables.light.css',
    '2023/css/variables.dark.css',
    '2016/css/variables.base.css',
    'ios/ios/Package.swift',
  ]
  return manifest.filter((e) => wanted.includes(e.path))
}

describe('tokens build', () => {
  beforeAll(async () => {
    jest.setTimeout(120000)
    // Clean previous build to avoid stale files in snapshot
    if (fs.existsSync(distRoot))
      fs.rmSync(distRoot, { recursive: true, force: true })
    await buildTokens()
  })

  it('produces output directory', () => {
    expect(fs.existsSync(distRoot)).toBe(true)
  })

  it('snapshots full manifest (paths + size + hash)', () => {
    const manifest = buildManifest()
    // Basic smoke expectation (avoid empty accidental success)
    expect(manifest.length).toBeGreaterThan(30)
    expect(manifest).toMatchSnapshot('tokens-manifest')
  })

  it('snapshots core subset (stable contract)', () => {
    const core = subset(buildManifest())
    // Ensure all expected core files exist
    expect(core.map((c) => c.path)).toHaveLength(5)
    expect(core).toMatchSnapshot('tokens-core-subset')
  })

  it('snapshots directory tree only (structure no content)', () => {
    const tree = collectFiles(distRoot)
      .map((f) => path.relative(distRoot, f))
      .sort()
    expect(tree).toMatchSnapshot('tokens-tree')
  })

  it('validates no empty files (content smoke)', () => {
    const empties = buildManifest().filter((f) => f.size === 0)
    expect(empties).toEqual([])
  })
})
