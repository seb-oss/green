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

const cssToJsPlugin: esbuild.Plugin = {
  name: 'css-to-js',
  setup(build: esbuild.PluginBuild) {
    const options = build.initialOptions
    const outdir = options.outdir || 'dist'
    const cssFiles = new Map<
      string,
      { resolvedPath: string; outputPath: string }
    >()

    // Process JS/TS files and detect CSS/SCSS imports
    build.onLoad(
      { filter: /\.(js|ts)$/ },
      async (args: esbuild.OnLoadArgs): Promise<esbuild.OnLoadResult> => {
        const source = await fsPromises.readFile(args.path, 'utf8')
        let transformed = source

        transformed = transformed.replace(
          /import\s+([\w\d]+)\s+from\s+["'](.+\.(css|scss))(\?inline)?["']/g,
          (_match: string, importName: string, importPath: string) => {
            const resolvedPath = path.resolve(
              path.dirname(args.path),
              importPath,
            )
            let outputPath: string
            let rewrittenImport: string

            // Check if the file exists synchronously
            try {
              fs.accessSync(resolvedPath, fs.constants.F_OK)
            } catch (error) {
              throw new Error(
                `CSS/SCSS file not found: '${importPath}' (resolved to '${resolvedPath}') in '${args.path}'`,
              )
            }

            // Check if this is a token import
            if (resolvedPath.includes('libs/tokens/')) {
              const tokenFileName = path.basename(importPath)
              outputPath = path.join('tokens', `${tokenFileName}.js`)
              rewrittenImport = `./tokens/${tokenFileName}.js` // Absolute path for tokens
            } else {
              // Regular component styles: keep relative to the importing file
              outputPath = path.join(
                path.relative('libs/core/src', path.dirname(resolvedPath)),
                `${path.basename(importPath)}.js`,
              )
              rewrittenImport = `${importPath}.js` // Keep the original relative path with .js
            }

            cssFiles.set(importPath, { resolvedPath, outputPath })
            return `import ${importName} from "${rewrittenImport}";`
          },
        )

        return {
          contents: transformed,
          loader: args.path.endsWith('.ts') ? 'ts' : 'js',
        }
      },
    )

    // Write transformed CSS/SCSS files to output after build
    build.onEnd(async (_result: esbuild.BuildResult) => {
      for (const [importPath, { resolvedPath, outputPath }] of cssFiles) {
        const isScss = resolvedPath.endsWith('.scss')
        let cssContent: string

        try {
          if (isScss) {
            const result = sass.compile(resolvedPath)
            cssContent = result.css.toString()
          } else {
            cssContent = await fsPromises.readFile(resolvedPath, 'utf8')
          }

          const postcssPlugins = [
            autoprefixer,
            postcssPresetEnv({ stage: false }),
          ]
          const { css } = await postcss(postcssPlugins).process(cssContent, {
            from: resolvedPath,
          })

          const jsContent = `
            const styles = ${JSON.stringify(css)};
            export default styles;
          `

          const outFile = path.join(outdir, outputPath)
          await fsPromises.mkdir(path.dirname(outFile), { recursive: true })
          await fsPromises.writeFile(outFile, jsContent)
        } catch (error) {
          console.error(`Error processing ${resolvedPath} in onEnd:`, error)
        }
      }
    })
  },
}

async function updatePackageJson() {
  const sideEffectFiles = glob
    .sync(
      './dist/libs/core/src/{components,primitives}/**/!(*.component|*.styles|*.style|*.css|*.scss).js',
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
    plugins: [cssToJsPlugin],
    metafile: true,
  })

  await updatePackageJson()

  return {
    success: true,
  }
}
