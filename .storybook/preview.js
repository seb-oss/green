// import scss using scss-loader file
import '!style-loader!css-loader!postcss-loader!sass-loader!./scss-loader.scss'
import { dark, light } from './themes'
import { themes } from '@storybook/theming'

export const parameters = {
  darkMode: {
    dark,
    light,
    stylePreview: true,
  },
  /*docs: {
    theme: themes.dark,
  },*/
}
