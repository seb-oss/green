/* eslint-disable @nx/enforce-module-boundaries */
import '../../../.storybook/preview'

// eslint-disable-next-line import/no-extraneous-dependencies
import { componentWrapperDecorator } from '@storybook/angular'

import type { Preview } from '@storybook/angular'

const preview: Preview = {
  decorators: [
    componentWrapperDecorator(
      (story) => `<div class="use-green">${story}</div>`,
    ),
  ],
}

export default preview
