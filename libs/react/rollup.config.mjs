import path from 'node:path'
import glob from 'glob'

const inputs = Object.fromEntries(
  glob
    .sync('libs/react/src/**/!(*.spec|*.test|*.stories).ts?(x)')
    .map((file) => [
      // This remove `libs/react` as well as the file extension from each
      // file, so e.g. libs/react/src/lib/nested/foo.js becomes src/lib/nested/foo
      path.relative(
        'libs/react',
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

  // Removing the `dts-bundle` plugin gets rid of `The emitted file "..." overwrites a previously emitted file of the same name` warnings
  // in the build log, but it also removes the generation of the `index.d.ts` file in the `dist/libs/react` directory.
  //
  // This would be fine if the `module` field in package.json was set to `./src/index.js`, but NX always overwrites this field to point
  // to a non-existent file for some reason (seems like NX is assuming a hard-coded output file name). Maybe it's a bug in NX 19, or just
  // some hard-to-find, poorly documented, config option.
  //
  // Leaving this comment here for posterity.
  //
  options.plugins = options.plugins.filter(
    (plugin) => plugin.name !== 'dts-bundle',
  )

  return options
}
