import { css } from 'lit'

const style = css`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-content-02);
      background-color: var(--gds-sys-color-l2-01);
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-detail-book-s);
      padding-inline: var(--gds-sys-space-s);
      padding-block: var(--gds-sys-space-xs);
    }
  }
`

export default style
