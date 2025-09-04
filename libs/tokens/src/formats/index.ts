import composeClass from './compose-class.ts'
import composeColorScheme from './compose-color-scheme.ts'
import cssOnlyVariables from './css-only-variables.ts'
import cssShadows from './css-shadows.ts'
import figmaJson from './figma-json.ts'
import greenIosGdsKit from './green-ios-gdskit.ts'
import greenIosSwiftClassTree from './green-ios-swift-class-tree.ts'
import greenIosSwiftColours from './green-ios-swift-colours.ts'
import greenIosSwiftPackage from './green-ios-swift-package.ts'
import greenIosSwiftTypography from './green-ios-swift-typography.ts'
import enumClass from './jvm-enum-class.ts'
import scssMixin from './scss-mixin.ts'

const formats = {
  'css/only-variables': cssOnlyVariables,
  'css/shadows': cssShadows,
  'figma/json': figmaJson,
  'scss/mixin': scssMixin,
  'green/ios-swift-package': greenIosSwiftPackage,
  'green/ios-swift-class-tree': greenIosSwiftClassTree,
  'green/ios-swift-gdskit': greenIosGdsKit,
  'green/ios-swift-colours': greenIosSwiftColours,
  'green/ios-swift-typography': greenIosSwiftTypography,
  'compose/class': composeClass,
  'compose/color-scheme': composeColorScheme,
  'jvm/enum-class': enumClass,
}

export default formats
