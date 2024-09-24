import { css } from 'lit'

const style = css`
  @layer badge, shell, tokens, a11y, variants, types;

  @layer badge {
    :host {
      display: contents;
    }

    slot[name='lead']::slotted(*) {
      line-height: 16px;
    }

    :host([notification]) slot[name='trail']::slotted(*) {
      line-height: 12px;
    }

    :host([notification]) slot[name='lead']::slotted(*) {
      line-height: 12px;
    }
  }
`
export default style
