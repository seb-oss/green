import { parameters as baseParameters } from '../../../.storybook/preview'

export const parameters = {
  ...baseParameters,
  docs: {
    ...baseParameters.docs,
    iframeHeight: 400,
  },
}
