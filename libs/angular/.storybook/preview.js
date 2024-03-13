import { parameters as baseParameters } from '../../../.storybook/preview'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

/**
 * Registering transitional styles to make the Green Core components look like the 2016 design
 */
registerTransitionalStyles()

export const parameters = {
  ...baseParameters,
  docs: {
    ...baseParameters.docs,
    iframeHeight: 400,
  },
}
