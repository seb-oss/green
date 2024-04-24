import { esbuildPlugin } from '@web/dev-server-esbuild'
import { importMapsPlugin } from '@web/dev-server-import-maps'

export default {
  files: ['dist/tests/core/**/*.test.js'],
  nodeResolve: true,
  plugins: [
    // esbuildPlugin({
    //   ts: true,
    //   tsconfig: 'libs/core/tsconfig.spec.json',
    //   bundle: true,
    //   alias: {
    //     '@sebgroup/green-core': './dist/libs/core/src',
    //   },
    //   nodePaths: ['./dist/libs/core/src'],
    // }),
    // importMapsPlugin({
    //   inject: {
    //     importMap: {
    //       imports: { '@sebgroup/green-core': './dist/libs/core/src' },
    //     },
    //   },
    // }),
  ],
}
