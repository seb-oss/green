import { parameters as baseParameters } from '../../../.storybook/preview'

export const parameters = {
  ...baseParameters,
}

// workaround for https://github.com/nrwl/nx/issues/7054
import GlobalStyles from '!postcss-loader!sass-loader!./scss-loader.scss'
const storybookStyles = document.createElement('style')
storybookStyles.innerHTML = GlobalStyles //'body {background: red;}'
document.body.appendChild(storybookStyles)
