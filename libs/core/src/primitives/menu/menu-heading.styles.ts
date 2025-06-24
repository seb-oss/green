import { css } from 'lit'

const style = css`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-content-02);
      background-color: var(--gds-sys-color-l3-02);
      font: var(--gds-sys-text-label-input-medium);
      padding-inline: var(--gds-sys-space-m);
      padding-block: var(--gds-sys-space-xs);
    }
  }
`

export default style
