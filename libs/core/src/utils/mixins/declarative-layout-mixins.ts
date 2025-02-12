import { GdsElement } from '../../gds-element'
import { styleExpressionProperty } from '../decorators/style-expression-property'
import { forSpaceTokens } from '../helpers'

type Constructor<T = {}> = new (...args: any[]) => T

export interface SizeXProps {
  width?: string
  'min-width'?: string
  'max-width'?: string
  'inline-size'?: string
  'min-inline-size'?: string
  'max-inline-size'?: string
}

/**
 * Mixin that adds horizontal and inline sizing properties to a component.
 */
export function withSizeXProps<T extends Constructor<GdsElement>>(
  base: T,
): Constructor<SizeXProps> & T {
  class DimensionPropsMixin extends base implements SizeXProps {
    /**
     * Style Expression Property that controls the `width` property.
     * Supports all valid CSS `width` values.
     */
    @styleExpressionProperty()
    width?: string

    /**
     * Style Expression Property that controls the `min-width` property.
     * Supports all valid CSS `min-width` values.
     */
    @styleExpressionProperty()
    'min-width'?: string

    /**
     * Style Expression Property that controls the `max-width` property.
     * Supports all valid CSS `max-width` values.
     */
    @styleExpressionProperty()
    'max-width'?: string

    /**
     * Style Expression Property that controls the `inline-size` property.
     * Supports all valid CSS `inline-size` values
     */
    @styleExpressionProperty()
    'inline-size'?: string

    /**
     * Style Expression Property that controls the `min-inline-size` property.
     * Supports all valid CSS `min-inline-size` values.
     */
    @styleExpressionProperty()
    'min-inline-size'?: string

    /**
     * Style Expression Property that controls the `max-inline-size` property.
     * Supports all valid CSS `max-inline-size` values.
     */
    @styleExpressionProperty()
    'max-inline-size'?: string
  }

  return DimensionPropsMixin as Constructor<SizeXProps> & T
}

export interface SizeYProps {
  height?: string
  'min-height'?: string
  'max-height'?: string
  'block-size'?: string
  'min-block-size'?: string
  'max-block-size'?: string
}

/**
 * Mixin that adds vertical and block sizing properties to a component.
 */
export function withSizeYProps<T extends Constructor<GdsElement>>(
  base: T,
): Constructor<SizeYProps> & T {
  class DimensionPropsMixin extends base implements SizeYProps {
    /**
     * Style Expression Property that controls the height property.
     * Supports all valid CSS height values.
     */
    @styleExpressionProperty()
    height?: string

    /**
     * Style Expression Property that controls the `min-height` property.
     * Supports all valid CSS `min-height` values.
     */
    @styleExpressionProperty()
    'min-height'?: string

    /**
     * Style Expression Property that controls the `max-height` property.
     * Supports all valid CSS `max-height` values.
     */
    @styleExpressionProperty()
    'max-height'?: string

    /**
     * Style Expression Property that controls the `block-size` property.
     * Supports all valid CSS `block-size` values.
     */
    @styleExpressionProperty()
    'block-size'?: string

    /**
     * Style Expression Property that controls the `min-block-size` property.
     * Supports all valid CSS `min-block-size` values.
     */
    @styleExpressionProperty()
    'min-block-size'?: string

    /**
     * Style Expression Property that controls the `max-block-size` property.
     * Supports all valid CSS `max-block-size` values.
     */
    @styleExpressionProperty()
    'max-block-size'?: string
  }

  return DimensionPropsMixin as Constructor<SizeYProps> & T
}

export interface MarginProps {
  margin?: string
  'margin-top'?: string
  'margin-right'?: string
  'margin-bottom'?: string
  'margin-left'?: string
}

/**
 * Mixin that adds margin properties to a component.
 */
export function withMarginProps<T extends Constructor<GdsElement>>(
  base: T,
): Constructor<MarginProps> & T {
  class MarginPropsMixin extends base implements MarginProps {
    /**
     * Style Expression Property that controls the `margin` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    margin?: string

    /**
     * Style Expression Property that controls the `margin-top` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    'margin-top'?: string

    /**
     * Style Expression Property that controls the `margin-right` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    'margin-right'?: string

    /**
     * Style Expression Property that controls the `margin-bottom` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    'margin-bottom'?: string

    /**
     * Style Expression Property that controls the `margin-left` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    'margin-left'?: string
  }

  return MarginPropsMixin as Constructor<MarginProps> & T
}

export interface PaddingProps {
  padding?: string
  'padding-top'?: string
  'padding-right'?: string
  'padding-bottom'?: string
  'padding-left'?: string
}

/**
 * Mixin that adds padding properties to a component.
 */
export function withPaddingProps<T extends Constructor<GdsElement>>(
  base: T,
): Constructor<PaddingProps> & T {
  class PaddingPropsMixin extends base implements PaddingProps {
    /**
     * Style Expression Property that controls the `padding` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    padding?: string

    /**
     * Style Expression Property that controls the `padding-top` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    'padding-top'?: string

    /**
     * Style Expression Property that controls the `padding-right` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    'padding-right'?: string

    /**
     * Style Expression Property that controls the `padding-bottom` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    'padding-bottom'?: string

    /**
     * Style Expression Property that controls the `padding-left` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    'padding-left'?: string
  }

  return PaddingPropsMixin as Constructor<PaddingProps> & T
}
