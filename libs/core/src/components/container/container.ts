import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  forColorTokens,
  forSpaceTokens,
  forSpaceTokensSupportingNegative,
  GdsColorLevel,
  parseColorValue,
} from '../../utils/helpers'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsDiv } from '../div'
import ContainerCSS from './container.style'

/**
 * `gds-container` is the base element in the declarative layout system. You can think of it as a `<div>` in html.
 *
 * Container is set to `display: block` by default, and adds all of the basic layoutout related properties, like padding, margin, border, etc.
 *
 *
 *
 * @element gds-container
 * @status beta
 *
 */

@gdsCustomElement('gds-container')
export class GdsContainer extends GdsDiv {
  static styles = [tokens, ContainerCSS]
}
