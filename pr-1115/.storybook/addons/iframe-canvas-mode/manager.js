/**
 * This addon enables a query parameter to specify "iframe canvas mode".
 * Essentially, it hides the nav menu and tool bar, leaving only the canvas and controls panel.
 * Useful for embeddning a component canvas with controls on another website.
*/

import { addons } from '@storybook/addons'

export function initIFrameCanvasMode() {
  const queryParams = new URLSearchParams(window.location.search)

  if (queryParams.get('iframeCanvasMode') == 'true') {
    addons.setConfig({
      showNav: false,
      showPanel: true,
      panelPosition: 'right',
      enableShortcuts: false,
      showToolbar: false,
      selectedPanel: undefined,
      initialActive: 'canvas',
      toolbar: {
        title: { hidden: true },
        zoom: { hidden: false },
        eject: { hidden: true },
        copy: { hidden: true },
        fullscreen: { hidden: true },
      },
    })
    
    let storybookConfig = JSON.parse(localStorage.getItem('storybook-layout'))
    const isPanelWithinSpec = c => c.resizerNav.x === 320 && c.resizerPanel.x === window.innerWidth - 320

    if (typeof storybookConfig === 'object' && storybookConfig !== null && !isPanelWithinSpec(storybookConfig)) {
      storybookConfig.resizerPanel.x = window.innerWidth - 320
      storybookConfig.resizerNav.x = 320
      localStorage.setItem('storybook-layout', JSON.stringify(storybookConfig))
      document.location.reload()
    } else if (storybookConfig === null) {
      storybookConfig = { resizerNav: { x: 320, y: 0 }, resizerPanel: { x: window.innerWidth - 320, y: 0 } }
      localStorage.setItem('storybook-layout', JSON.stringify(storybookConfig))
      document.location.reload()
    }

    const style = document.createElement('style')
    style.textContent = `
      [aria-label="Show sidebar"],
      [aria-label="Show sidebar"] + * {
        display: none !important;
      }
    `
    document.head.appendChild(style)
  }
}