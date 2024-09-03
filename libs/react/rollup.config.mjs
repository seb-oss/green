import glob from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const inputs = glob.sync('libs/react/src/lib/**/!(*.spec|*.test|*.stories).tsx')

export default {
  input: inputs,
  output: {
    dir: 'dist/libs/react',
  },
}
