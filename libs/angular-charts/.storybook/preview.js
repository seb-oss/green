import { parameters as baseParameters } from '../../../.storybook/preview'
// import '!style-loader!css-loader!postcss-loader!sass-loader!./scss-loader.scss'

export const parameters = {
  ...baseParameters,
  docs: {
    ...baseParameters.docs,
    iframeHeight: 400,
  },
  viewMode: 'canvas',
}
