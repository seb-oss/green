import { css } from 'lit'

const style = css`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      color: var(--gds-sys-color-base800);
      font-family: inherit;
    }

    button {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      gap: 1ch;
      border-radius: var(--gds-space-2xs);
      font-size: var(--gds-text-size-label-medium);
      line-height: var(--gds-text-line-height-label-medium);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      padding-inline: var(--gds-space-s);
      padding-block: var(--gds-space-xs);
      background-color: var(--gds-sys-color-container-container-bright);
      border: 1px solid var(--gds-sys-color-base600);
      width: 100%;
      max-width: 100%;
      cursor: pointer;
      color: currentColor;

      // Motion
      transition:
        0.3s cubic-bezier(0.23, 1, 0.32, 1),
        outline-offset,
        outline-width;

      // Hover
      &:hover {
        background-color: var(--gds-sys-color-container-container-dim1);
      }
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    button ::part(icon) {
      // min-width: 24px;
      block-size: 1lh;
      inline-size: 1lh;
    }

    :host(:focus) button {
      outline: auto;
      outline-offset: 4px;
      outline-color: currentColor;
      outline-width: 2px;
    }

    button[aria-expanded='true'] ::part(icon) {
      transform: scaleY(-1);
    }

    label {
      font-weight: var(--gds-text-weight-regular);
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
