/* eslint-disable @nx/enforce-module-boundaries */
import '../../../.storybook/preview'
import type { Preview } from '@storybook/angular'
// eslint-disable-next-line import/no-extraneous-dependencies
import { componentWrapperDecorator } from '@storybook/angular'

const preview: Preview = {
  decorators: [
    componentWrapperDecorator(
      (story) => `<div class="use-green">${story}</div>`,
    ),
  ],
}

export default preview
