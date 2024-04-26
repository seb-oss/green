import { AssetGlob } from '@nx/js/src/utils/assets/assets'

export interface BuildCoreLibExecutorSchema {
  tsconfig: string
  outputPath: string
  assets: (AssetGlob | string)[]
} // eslint-disable-line
