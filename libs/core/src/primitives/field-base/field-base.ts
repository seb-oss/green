import { localized, msg } from '@lit/localize'
import { property, query, state } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './field-base.styles'

/**
 * @element gds-field-base
 */
@gdsCustomElement('gds-field-base')
@localized()
export class GdsFieldBase extends GdsElement {
  static styles = [styles]

  render() {
    return html`
      <gds-flex
        level="3"
        position="relative"
        align-items="center"
        justify-content="space-between"
        gap="xs"
        padding="xs"
        min-block-size="3xl"
        block-size="3xl"
        border-radius="xs"
        background="secondary"
        border="4xs/secondary"
        class="field"
        cursor="text"
        color="tertiary"
      >
        <gds-flex align-items="center" gap="xs">
          <slot name="lead"></slot>
        </gds-flex>
        <gds-flex align-items="center" flex="1">
          <slot></slot>
        </gds-flex>
        <gds-flex align-items="center" gap="xs">
          <slot name="trail"></slot>
        </gds-flex>
      </gds-flex>
    `
  }
}
