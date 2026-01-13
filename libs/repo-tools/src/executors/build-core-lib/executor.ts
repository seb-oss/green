import * as fs from 'fs' // Add synchronous fs for file existence check
import * as fsPromises from 'fs/promises' // Use fsPromises for async operations

import * as path from 'path'
import { copyAssets } from '@nx/js'
import * as autoprefixer from 'autoprefixer'
import * as esbuild from 'esbuild'
import { removeSync } from 'fs-extra'
import * as glob from 'glob'
import * as postcss from 'postcss'
import * as postcssPresetEnv from 'postcss-preset-env'
import * as sass from 'sass'

import type { ExecutorContext } from '@nx/devkit'

import { BuildCoreLibExecutorSchema } from './schema'

const EXTENSIONS_TO_EXCLUDE = [
  '.types',
  '.imports',
  '.component',
  '.styles',
  '.style',
  '.template',
]

// Rewrite style imports, and add explicit .js extensions
const rewriteImports: esbuild.Plugin = {
  name: 'rewrite-imports',
  setup(build) {
    const outdir = build.initialOptions.outdir || 'dist'
    const cssFiles = new Map()

    build.onLoad({ filter: /\.(ts|tsx)$/ }, (args) => {
      const contents = fs.readFileSync(args.path, 'utf8')

      // Step 1: Rewrite imports and exports for explicit extensions
      let transformed = contents
        // Handle imports: import { X } from "..."
        .replace(/from\s+['"](\..*?)['"]/g, (match, importPath) => {
          if (
            path.extname(importPath) &&
            !EXTENSIONS_TO_EXCLUDE.includes(path.extname(importPath))
          )
            return match // Skip if it already has an extension

          const fullPath = path.resolve(path.dirname(args.path), importPath)
          try {
            const stats = fs.statSync(fullPath)
            if (stats.isDirectory()) {
              return `from '${importPath}/index.js'` // Directory -> /index.js
            } else if (stats.isFile()) {
              return `from '${importPath}.js'` // File -> .js
            }
          } catch {
            // If stat fails, check if it’s a file with a .ts/.tsx extension
            const possibleExtensions = ['.ts', '.tsx']
            for (const ext of possibleExtensions) {
              const filePath = `${fullPath}${ext}`
              try {
                fs.statSync(filePath)
                return `from '${importPath}.js'` // File exists with .ts/.tsx -> .js
              } catch {
                // Continue to next extension
              }
            }
            // Fallback: assume it’s a file without extension in source
            return `from '${importPath}.js'`
          }
          return match
        })
        // Handle re-exports: export * from "..."
        .replace(
          /export\s*\*\s*from\s+['"](\..*?)['"]/g,
          (match, exportPath) => {
            if (
              path.extname(exportPath) &&
              !EXTENSIONS_TO_EXCLUDE.includes(path.extname(exportPath))
            )
              return match // Skip if it already has an extension

            const fullPath = path.resolve(path.dirname(args.path), exportPath)
            try {
              const stats = fs.statSync(fullPath)
              if (stats.isDirectory()) {
                return `export * from '${exportPath}/index.js'` // Directory -> /index.js
              } else if (stats.isFile()) {
                return `export * from '${exportPath}.js'` // File -> .js
              }
            } catch {
              // Check for .ts/.tsx files
              const possibleExtensions = ['.ts', '.tsx']
              for (const ext of possibleExtensions) {
                const filePath = `${fullPath}${ext}`
                try {
                  fs.statSync(filePath)
                  return `export * from '${exportPath}.js'` // File exists with .ts/.tsx -> .js
                } catch {
                  // Continue to next extension
                }
              }
              // Fallback: assume directory for re-exports
              return `export * from '${exportPath}/index.js'`
            }
            return match
          },
        )
        // Handle side-effect imports: import "..."
        .replace(/import\s+['"](\..*?)['"]/g, (match, importPath) => {
          if (
            path.extname(importPath) &&
            !EXTENSIONS_TO_EXCLUDE.includes(path.extname(importPath))
          )
            return match // Skip if it already has an extension
          const fullPath = path.resolve(path.dirname(args.path), importPath)
          try {
            const stats = fs.statSync(fullPath)
            if (stats.isDirectory()) {
              return `import '${importPath}/index.js'` // Directory -> /index.js
            } else if (stats.isFile()) {
              return `import '${importPath}.js'` // File -> .js
            }
          } catch {
            // Check for .ts/.tsx files
            const possibleExtensions = ['.ts', '.tsx']
            for (const ext of possibleExtensions) {
              const filePath = `${fullPath}${ext}`
              try {
                fs.statSync(filePath)
                return `import '${importPath}.js'` // File exists with .ts/.tsx -> .js
              } catch {
                // Continue to next extension
              }
            }
            // Fallback: assume it’s a file without extension in source
            return `import '${importPath}.js'`
          }
          return match
        })

      // Step 2: Handle CSS/SCSS imports
      transformed = transformed.replace(
        /import\s+([\w\d]+)\s+from\s+["'](.+\.(css|scss))(\?inline)?["']/g,
        (_match, importName, importPath) => {
          const resolvedPath = path.resolve(path.dirname(args.path), importPath)
          fs.accessSync(resolvedPath, fs.constants.F_OK) // Will throw if not found
          const outputPath = resolvedPath.includes('libs/tokens/')
            ? path.join('tokens', `${path.basename(importPath)}.js`)
            : path.join(
                path.relative('libs/core/src', path.dirname(resolvedPath)),
                `${path.basename(importPath)}.js`,
              )
          cssFiles.set(importPath, { resolvedPath, outputPath })
          return `import ${importName} from "${
            resolvedPath.includes('libs/tokens/')
              ? `./tokens/${path.basename(importPath)}.js`
              : `${importPath}.js`
          }"`
        },
      )

      return {
        contents: transformed,
        loader: args.path.endsWith('.tsx') ? 'tsx' : 'ts',
      }
    })

    build.onEnd(async () => {
      for (const [importPath, { resolvedPath, outputPath }] of cssFiles) {
        const isScss = resolvedPath.endsWith('.scss')
        const cssContent = isScss
          ? sass.compile(resolvedPath).css.toString()
          : fs.readFileSync(resolvedPath, 'utf8')
        const { css } = await postcss([
          autoprefixer,
          postcssPresetEnv({ stage: false }),
        ]).process(cssContent, { from: resolvedPath })
        const jsContent = `const styles = ${JSON.stringify(css)};\nexport default styles;`
        const outFile = path.join(outdir, outputPath)
        await fsPromises.mkdir(path.dirname(outFile), { recursive: true })
        await fsPromises.writeFile(outFile, jsContent)
      }
    })
  },
}

async function updatePackageJson() {
  const sideEffectFiles = glob
    .sync(
      './dist/libs/core/src/{components,patterns,primitives,chunks}/**/!(*.component|*.styles|*.style|*.css|*.scss).js',
      { posix: true, dotRelative: true },
    )
    .map((file) => file.replace('/dist/libs/core/src', ''))

  const packageJson = JSON.parse(
    await fsPromises.readFile('./dist/libs/core/src/package.json', 'utf8'),
  )

  packageJson.sideEffects = sideEffectFiles
  await fsPromises.writeFile(
    './dist/libs/core/src/package.json',
    JSON.stringify(packageJson, null, 2),
  )
}

export default async function runExecutor(
  options: BuildCoreLibExecutorSchema,
  context: ExecutorContext,
) {
  removeSync(options.outputPath)

  await copyAssets(options, context)

  await esbuild.build({
    entryPoints: [
      ...glob.sync('./libs/core/src/**/!(*.test|*.stories).{ts,tsx}'),
    ],
    chunkNames: 'chunks/[name].[hash]',
    splitting: true,
    bundle: false,
    tsconfig: options.tsconfig,
    packages: 'external',
    target: 'es2020',
    platform: 'browser',
    outdir: options.outputPath,
    outbase: './libs/core/src',
    format: 'esm',
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    plugins: [rewriteImports],
    metafile: true,
  })

  await updatePackageJson()

  return {
    success: true,
  }
}
