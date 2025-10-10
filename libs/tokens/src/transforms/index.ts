import colorAlpha from './color-alpha.ts'
import colorMixBlend from './color-mix-blend.ts'
import fontCss from './font-css.ts'
import greenColorCompose from './green-color-compose.ts'
import greenColorUIColorSwift from './green-color-UIColorSwift.ts'
import nameAndroid from './name-android.ts'
import nameFigma from './name-figma.ts'
import nameIos from './name-ios.ts'
import nameStudio from './name-studio.ts'
import shadowCss from './shadow-css.ts'

const transforms = {
  'name/figma': nameFigma,
  'name/studio': nameStudio,
  'name/ios': nameIos,
  'name/android': nameAndroid,
  'color/mix-blend': colorMixBlend,
  'color/alpha': colorAlpha,
  'green/color/UIColorSwift': greenColorUIColorSwift,
  'green/color/composeColor': greenColorCompose,
  'shadow/css': shadowCss,
  'font/css': fontCss,
}

export default transforms
