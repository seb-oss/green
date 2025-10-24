import baseTokens from './base-tokens.ts'
import darkMode from './dark-mode.ts'
import isColorIsRef from './is-color-is-ref.ts'
import isColorNoRef from './is-color-no-ref.ts'
import isColor from './is-color.ts'
import isDimension from './is-dimension.ts'
import isFontWeight from './is-font-weight.ts'
import isMotion from './is-motion.ts'
import isRadius from './is-radius.ts'
import isRef from './is-ref.ts'
import isShadow from './is-shadow.ts'
import isShape from './is-shape.ts'
import isSpacing from './is-spacing.ts'
import isSys from './is-sys.ts'
import isTypography from './is-typography.ts'
import isViewport from './is-viewport.ts'
import lightMode from './light-mode.ts'
import noColors from './no-colors.ts'
import noRef from './no-ref.ts'

export default {
  'light-mode': lightMode,
  'dark-mode': darkMode,
  'no-colors': noColors,
  'base-tokens': baseTokens,
  'is-color': isColor,
  'is-font-weight': isFontWeight,
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
  'is-viewport': isViewport,
  'is-radius': isRadius,
  'is-spacing': isSpacing,
}
