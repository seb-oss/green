import darkMode from './dark-mode.ts'
import isColorIsRef from './is-color-is-ref.ts'
import isColorNoRef from './is-color-no-ref.ts'
import isColor from './is-color.ts'
import isDimension from './is-dimension.ts'
import isMotion from './is-motion.ts'
import isRef from './is-ref.ts'
import isShadow from './is-shadow.ts'
import isShape from './is-shape.ts'
import isSys from './is-sys.ts'
import isTypography from './is-typography.ts'
import lightMode from './light-mode.ts'
import noColorsNoRef from './no-colors-no-ref.ts'
import noColors from './no-colors.ts'
import noRef from './no-ref.ts'

export default {
  'light-mode': lightMode,
  'dark-mode': darkMode,
  'no-colors': noColors,
  'no-colors-no-ref': noColorsNoRef,
  'is-color': isColor,
  'is-color-no-ref': isColorNoRef,
  'is-color-is-ref': isColorIsRef,
  'is-ref': isRef,
  'no-ref': noRef,
  'is-shape': isShape,
  'is-dimension': isDimension,
  'is-sys': isSys,
  'is-motion': isMotion,
  'is-shadow': isShadow,
  'is-typography': isTypography,
}
