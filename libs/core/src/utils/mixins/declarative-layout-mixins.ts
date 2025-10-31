import { GdsElement } from '../../gds-element'
import { styleExpressionProperty } from '../decorators/style-expression-property'
import {
  forSpaceTokens,
  forSpaceTokensAndCustomValues,
  forSpaceTokensSupportingNegative,
} from '../helpers'

type Constructor<T = GdsElement> = new (...args: any[]) => T

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
     * Supports space tokens and all valid CSS `width` values.
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
    width?: string

    /**
     * Style Expression Property that controls the `min-width` property.
     * Supports space tokens and all valid CSS `min-width` values.
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
    'min-width'?: string

    /**
     * Style Expression Property that controls the `max-width` property.
     * Supports space tokens and all valid CSS `max-width` values.
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
    'max-width'?: string

    /**
     * Style Expression Property that controls the `inline-size` property.
     * Supports space tokens and all valid CSS `inline-size` values
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
    'inline-size'?: string

    /**
     * Style Expression Property that controls the `min-inline-size` property.
     * Supports space tokens and all valid CSS `min-inline-size` values.
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
    'min-inline-size'?: string

    /**
     * Style Expression Property that controls the `max-inline-size` property.
     * Supports space tokens and all valid CSS `max-inline-size` values.
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
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
     * Style Expression Property that controls the `height` property.
     * Supports space tokens and all valid CSS `height` values.
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
    height?: string

    /**
     * Style Expression Property that controls the `min-height` property.
     * Supports space tokens and all valid CSS `min-height` values.
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
    'min-height'?: string

    /**
     * Style Expression Property that controls the `max-height` property.
     * Supports space tokens and all valid CSS `max-height` values.
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
    'max-height'?: string

    /**
     * Style Expression Property that controls the `block-size` property.
     * Supports space tokens and all valid CSS `block-size` values.
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
    'block-size'?: string

    /**
     * Style Expression Property that controls the `min-block-size` property.
     * Supports space tokens and all valid CSS `min-block-size` values.
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
    'min-block-size'?: string

    /**
     * Style Expression Property that controls the `max-block-size` property.
     * Supports space tokens and all valid CSS `max-block-size` values.
     */
    @styleExpressionProperty(forSpaceTokensAndCustomValues)
    'max-block-size'?: string
  }

  return DimensionPropsMixin as Constructor<SizeYProps> & T
}

export interface MarginProps {
  margin?: string
  'margin-inline'?: string
  'margin-block'?: string
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
    @styleExpressionProperty(forSpaceTokensSupportingNegative)
    margin?: string

    /**
     * Style Expression Property that controls the `margin-inline` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokensSupportingNegative)
    'margin-inline'?: string

    /**
     * Style Expression Property that controls the `margin-block` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokensSupportingNegative)
    'margin-block'?: string
  }

  return MarginPropsMixin as Constructor<MarginProps> & T
}

export interface PaddingProps {
  padding?: string
  'padding-inline'?: string
  'padding-block'?: string
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
     * Style Expression Property that controls the `padding-inline` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    'padding-inline'?: string

    /**
     * Style Expression Property that controls the `padding-block` property.
     * Only accepts space tokens.
     */
    @styleExpressionProperty(forSpaceTokens)
    'padding-block'?: string
  }

  return PaddingPropsMixin as Constructor<PaddingProps> & T
}

export interface LayoutChildProps {
  'align-self'?: string
  'justify-self'?: string
  'place-self'?: string
  'grid-column'?: string
  'grid-row'?: string
  'grid-area'?: string
  flex?: string
  order?: string
}

/**
 * Mixin that adds layout child properties to a component.
 *
 * 'Layout child' properties are properties that are applies to the children of layout containers such as `gds-div`, `gds-flex` and `gds-grid`.
 */
export function withLayoutChildProps<T extends Constructor<GdsElement>>(
  base: T,
): Constructor<LayoutChildProps> & T {
  class LayoutChildPropsMixin extends base implements LayoutChildProps {
    /**
     * Style Expression Property that controls the `align-self` property.
     * Supports all valid CSS `align-self` values.
     */
    @styleExpressionProperty()
    'align-self'?: string

    /**
     * Style Expression Property that controls the `justify-self` property.
     * Supports all valid CSS `justify-self` values.
     */
    @styleExpressionProperty()
    'justify-self'?: string

    /**
     * Style Expression Property that controls the `place-self` property.
     * Supports all valid CSS `place-self` values.
     */
    @styleExpressionProperty()
    'place-self'?: string

    /**
     * Style Expression Property that controls the `grid-column` property.
     * Supports all valid CSS grid-column values.
     * Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
     */
    @styleExpressionProperty()
    'grid-column'?: string

    /**
     * Style Expression Property that controls the `grid-row` property.
     * Supports all valid CSS `grid-row` values.
     */
    @styleExpressionProperty()
    'grid-row'?: string

    /**
     * Style Expression Property that controls the `grid-area` property.
     * Supports all valid CSS `grid-area` values.
     */
    @styleExpressionProperty()
    'grid-area'?: string

    /**
     * Style Expression Property that controls the `flex` property.
     * Supports all valid CSS `flex` values.
     */
    @styleExpressionProperty()
    flex?: string

    /**
     * Style Expression Property that controls the `order` property.
     * Supports all valid CSS `order` values.
     */
    @styleExpressionProperty()
    order?: string
  }

  return LayoutChildPropsMixin as Constructor<LayoutChildProps> & T
}

export interface PositioningProps {
  position?: string
  transform?: string
  inset?: string
}

/**
 * Mixin that adds positioning properties to a component.
 */
export function withPositioningProps<T extends Constructor<GdsElement>>(
  base: T,
): Constructor<PositioningProps> & T {
  class PositioningPropsMixin extends base implements PositioningProps {
    /**
     * Style Expression Property that controls the `position` property.
     * Supports all valid CSS `position` values.
     */
    @styleExpressionProperty()
    position?: string

    /**
     * Style Expression Property that controls the `transform` property.
     * Supports all valid CSS `transform` values.
     */
    @styleExpressionProperty()
    transform?: string

    /**
     * Style Expression Property that controls the `inset` property.
     * Supports all valid CSS `inset` values.
     */
    @styleExpressionProperty()
    inset?: string
  }

  return PositioningPropsMixin as Constructor<PositioningProps> & T
}
