/* eslint-disable @nx/enforce-module-boundaries */
import '../../../.storybook/preview'

const preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'How to use Cholorophyll'],
      },
    },
  },
}

export default preview
