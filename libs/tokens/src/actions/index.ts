import colorSetDark from './color-set-dark.ts'
import colorSetLight from './color-set-light.ts'
import copyAndroidAssets from './copy-android-assets.ts'
import copyIosAssets from './copy-ios-assets.ts'
import copyPackageJson from './copy-package-json.ts'

export default {
  'copy-package-json': copyPackageJson,
  'color-set-light': colorSetLight,
  'color-set-dark': colorSetDark,
  'copy-ios-assets': copyIosAssets,
  'copy-android-assets': copyAndroidAssets,
}
