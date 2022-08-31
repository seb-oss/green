// import scss using scss-loader file
import '!style-loader!css-loader!postcss-loader!sass-loader!./manager.scss'

import { initIFrameCanvasMode } from './addons/iframe-canvas-mode/manager'

initIFrameCanvasMode()
