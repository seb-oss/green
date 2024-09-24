import { css } from 'lit'

const style = css`
  @layer badge, shell, tokens, a11y, variants, types;

  @layer badge {
    :host {
      display: contents;
    }

    slot[name='lead']::slotted(*) {
      line-height: var(--gds-space-m);
    }

    :host([notification]) slot[name='trail']::slotted(*) {
      line-height: var(--gds-space-s);
    }

    :host([notification]) slot[name='lead']::slotted(*) {
      line-height: var(--gds-space-s);
    }
  }
`
export default style
