/**
 * This addon enables a query parameter to specify "iframe canvas mode".
 * Essentially, it hides the nav menu and tool bar, leaving only the canvas and controls panel.
 * Useful for embeddning a component canvas with controls on another website.
*/

import { addons } from '@storybook/addons';

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
    
    if (localStorage["storybook-layout"]) {
      const storybookLayout = JSON.parse(localStorage["storybook-layout"]);
      const newLayout = { resizerPanel: { x: window.innerWidth - 320, y: 0 }};
      localStorage["storybook-layout"] = JSON.stringify({...storybookLayout, ...newLayout});
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