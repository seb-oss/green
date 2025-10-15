import crypto from 'crypto'
import fs from 'fs'
import path from 'path'

const distRoot = path.resolve('./dist/libs/tokens')

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
function buildManifest(
  pathFromDist: string,
): Array<{ path: string; size: number; hash: string }> {
  console.log(distRoot + pathFromDist)

  const files = collectFiles(distRoot + pathFromDist).sort()

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

describe('test internal output', () => {
  const manifest: Array<{ path: string; size: number; hash: string }> =
    buildManifest('/2023/internal')

  it('produced the correct amount of files for internal', () => {
    expect(manifest.length).toBe(5)
  })

  manifest.forEach((m) => {
    it(`matches the contents in snapshot for ${m.path}`, () => {
      const filePath = path.join(distRoot, m.path)
      const content = fs.readFileSync(filePath, 'utf-8')
      const snapshotName = `tokens-internal-${m.path.replace(/[^a-z0-9]/gi, '-')}`
      expect(content).toMatchSnapshot(snapshotName)
    })
  })
})

describe('test css output', () => {
  const manifest: Array<{ path: string; size: number; hash: string }> =
    buildManifest('/2023/css')

  it('produced the correct amount of files for css', () => {
    expect(manifest.length).toBe(5)
  })

  manifest.forEach((m) => {
    it(`matches the contents in snapshot for ${m.path}`, () => {
      const filePath = path.join(distRoot, m.path)
      const content = fs.readFileSync(filePath, 'utf-8')
      const snapshotName = `tokens-internal-${m.path.replace(/[^a-z0-9]/gi, '-')}`
      expect(content).toMatchSnapshot(snapshotName)
    })
  })
})

describe('test scss output', () => {
  const manifest: Array<{ path: string; size: number; hash: string }> =
    buildManifest('/2023/scss')

  it('produced the correct amount of files for scss', () => {
    expect(manifest.length).toBe(8)
  })

  manifest.forEach((m) => {
    it(`matches the contents in snapshot for ${m.path}`, () => {
      const filePath = path.join(distRoot, m.path)
      const content = fs.readFileSync(filePath, 'utf-8')
      const snapshotName = `tokens-scss-${m.path.replace(/[^a-z0-9]/gi, '-')}`
      expect(content).toMatchSnapshot(snapshotName)
    })
  })
})

describe('test figma output', () => {
  const manifest: Array<{ path: string; size: number; hash: string }> =
    buildManifest('/2023/figma')

  it('produced the correct amount of files for figma', () => {
    expect(manifest.length).toBe(5)
  })

  manifest.forEach((m) => {
    it(`matches the contents in snapshot for ${m.path}`, () => {
      const filePath = path.join(distRoot, m.path)
      const content = fs.readFileSync(filePath, 'utf-8')
      const snapshotName = `tokens-figma-${m.path.replace(/[^a-z0-9]/gi, '-')}`
      expect(content).toMatchSnapshot(snapshotName)
    })
  })
})

describe('test studio output', () => {
  const manifest: Array<{ path: string; size: number; hash: string }> =
    buildManifest('/studio')

  it('produced the correct amount of files for studio', () => {
    expect(manifest.length).toBe(8)
  })

  manifest.forEach((m) => {
    it(`matches the contents in snapshot for ${m.path}`, () => {
      const filePath = path.join(distRoot, m.path)
      const content = fs.readFileSync(filePath, 'utf-8')
      const snapshotName = `tokens-studio-${m.path.replace(/[^a-z0-9]/gi, '-')}`
      expect(content).toMatchSnapshot(snapshotName)
    })
  })
})
