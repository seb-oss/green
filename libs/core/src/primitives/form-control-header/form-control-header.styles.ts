import { css } from 'lit'

export const styles = css`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--gds-sys-color-content-01);

      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    slot[name='label']::slotted(*) {
      font: var(--gds-sys-text-detail-book-m);
    }
    slot[name='supporting-text']::slotted(*) {
      font: var(--gds-sys-text-detail-regular-s);
    }

    :host(.size-small) {
      & slot[name='supporting-text'],
      & ::slotted(label) {
        font: var(--gds-sys-text-detail-s);
      }

      #extended-supporting-text[aria-hidden='false'] {
        padding: var(--gds-sys-space-xs) var(--gds-sys-space-s);
      }
    }

    #extended-supporting-text {
      opacity: 1;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
      font: var(--gds-sys-text-detail-regular-s);
      border-radius: var(--gds-sys-space-xs);
      background-color: var(--gds-sys-color-l3-02);
      color: var(--gds-sys-color-content-01);
      max-height: var(--_max-height);

      &[aria-hidden='false'] {
        margin: var(--gds-sys-space-2xs) 0 0 0;
        padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
      }

      &[aria-hidden='true'] {
        max-height: 0;
        opacity: 0;
        translate: 0 2px;
        padding: 0 var(--gds-sys-space-m);
        margin: 0;
        overflow: hidden;
      }
    }
  }
`
