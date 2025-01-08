import { baseJestConfig } from '../../jest.base.config'
import * as pkg from './package.json'

const displayName = pkg.name.split('/')[1]

const packageConfig = baseJestConfig(displayName, './../../projects') ?? {}

export default {
  ...packageConfig,
  displayName,
}
