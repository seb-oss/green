import composeClass from './compose-class.ts'
import composeColorScheme from './compose-color-scheme.ts'
import composeFont from './compose-font.ts'
import composeTypography from './compose-typography.ts'
import cssOnlyVariables from './css-only-variables.ts'
import cssShadows from './css-shadows.ts'
import greenIosGdsKit from './green-ios-gdskit.ts'
import greenIosSwiftClassTree from './green-ios-swift-class-tree.ts'
import greenIosSwiftColours from './green-ios-swift-colours.ts'
import greenIosSwiftPackage from './green-ios-swift-package.ts'
import greenIosSwiftTypography from './green-ios-swift-typography.ts'
import jsonFigma from './json-figma.ts'
import jsonStudio from './json-studio.ts'
import enumClass from './jvm-enum-class.ts'
import scssMixin from './scss-mixin.ts'

const formats = {
  'css/only-variables': cssOnlyVariables,
  'css/shadows': cssShadows,
  'scss/mixin': scssMixin,
  'green/ios-swift-package': greenIosSwiftPackage,
  'green/ios-swift-class-tree': greenIosSwiftClassTree,
  'green/ios-swift-gdskit': greenIosGdsKit,
  'green/ios-swift-colours': greenIosSwiftColours,
  'green/ios-swift-typography': greenIosSwiftTypography,
  'compose/class': composeClass,
  'compose/font': composeFont,
  'compose/typography': composeClass,
  'compose/typography': composeTypography,
  'compose/color-scheme': composeColorScheme,
  'jvm/enum-class': enumClass,
  'json/figma': jsonFigma,
  'json/studio': jsonStudio,
}

export default formats
