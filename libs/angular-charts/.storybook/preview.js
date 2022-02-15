import { parameters as baseParameters } from '../../../.storybook/preview'
// import '!style-loader!css-loader!postcss-loader!sass-loader!./scss-loader.scss'

export const parameters = {
  ...baseParameters,
  docs: {
    ...baseParameters.docs,
    iframeHeight: 400,
  },
}

// workaround for https://github.com/nrwl/nx/issues/7054
import GlobalStyles from '!postcss-loader!sass-loader!./preview.scss'
const storybookStyles = document.createElement('style')
storybookStyles.innerHTML = GlobalStyles //'body {background: red;}'
document.body.appendChild(storybookStyles)
