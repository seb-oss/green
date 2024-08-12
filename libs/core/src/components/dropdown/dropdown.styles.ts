import { css } from 'lit'

const style = css`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }

    button {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      gap: 1ch;
      border-radius: var(--gds-space-xs);
      font-size: var(--gds-text-size-label-input-large);
      font-weight: var(--gds-text-weight-book);
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-s);
      background-color: var(--gds-sys-color-container-container);
      border: 1px solid var(--gds-sys-color-stroke-stroke-variant1);
      width: 100%;
      max-width: 100%;
      cursor: pointer;
      user-select: none;

      // Motion
      transition:
        0.3s cubic-bezier(0.23, 1, 0.32, 1),
        outline-offset,
        outline-width;

      // Icon

      &:hover {
        background-color: var(--gds-sys-color-container-container-dim1);
      }
    }

    button[aria-expanded='true'] ::part(icon) {
      transform: scaleY(-1);
    }

    label {
      font-weight: var(--gds-text-weight-book);
      line-height: var(--gds-text-line-height-label-input-large);
      font-size: var(--gds-text-size-label-input-large);
      padding-block: var(--gds-space-2xs);
      font-family: inherit;
    }

    gds-listbox {
      user-select: none;
    }
  }
`

export default style
