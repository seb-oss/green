import glob from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const inputs = Object.fromEntries(
  glob
    .sync('libs/react/src/lib/**/!(*.spec|*.test|*.stories).tsx')
    .map((file) => [
      // This remove `libs/react/src` as well as the file extension from each
      // file, so e.g. libs/react/src/lib/nested/foo.js becomes lib/nested/foo
      'src/' +
        path.relative(
          'libs/react/src',
          file.slice(0, file.length - path.extname(file).length),
        ),
      file,
    ]),
)

export default function getRollupOptions(options) {
  options.input = { ...options.input, ...inputs }
  options.output = {
    ...options.output,
    dir: 'dist/libs/react',
    entryFileNames: '[name].js',
    chunkFileNames: '[name].js',
  }

  options.plugins.useTsconfigDeclarationDir = true
  options.plugins = options.plugins.filter(
    (plugin) => plugin.name !== 'dts-bundle',
  )

  return options
}
