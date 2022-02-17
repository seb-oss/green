import { parameters as baseParameters } from '../../../.storybook/preview'
// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!postcss-loader!sass-loader!./preview.scss'

export const parameters = {
  ...baseParameters,
}
