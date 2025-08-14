import composeClass from './compose-class.ts'
import composeColorScheme from './compose-color-scheme.ts'
import cssOnlyVariables from './css-only-variables.ts'
import cssShadows from './css-shadows.ts'
import figmaJson from './figma-json.ts'
import greenIosSwiftClassTree from './green-ios-swift-class-tree.ts'
import greenIosSwiftPackage from './green-ios-swift-package.ts'
import scssMixin from './scss-mixin.ts'

const formats = {
  'css/only-variables': cssOnlyVariables,
  'css/shadows': cssShadows,
  'figma/json': figmaJson,
  'scss/mixin': scssMixin,
  'green/ios-swift-package': greenIosSwiftPackage,
  'green/ios-swift-class-tree': greenIosSwiftClassTree,
  'compose/class': composeClass,
  'compose/color-scheme': composeColorScheme,
}

export default formats
