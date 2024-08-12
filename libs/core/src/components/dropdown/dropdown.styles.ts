import { css } from 'lit'

const style = css`
  @layer base, reset, transitional-styles;

  @layer base {
    button {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      gap: 1ch;
      border-radius: var(--gds-space-2xs);
      margin-block: var(--gds-space-2xs);
      font-size: var(--gds-text-size-body-large);
      font-weight: var(--gds-text-weight-regular);
      padding-inline: var(--gds-space-s);
      padding-block: var(--gds-space-xs);
      background-color: var(--gds-sys-color-container-container-bright);
      border: 1px solid var(--gds-sys-color-stroke-stroke);
      width: 100%;
      max-width: 100%;
      cursor: pointer;

      // Motion
      transition:
        0.3s cubic-bezier(0.23, 1, 0.32, 1),
        outline-offset,
        outline-width;

      &:hover {
        background-color: var(--gds-sys-color-container-container-dim1);
      }

      &[aria-expanded='true'] {
        .icon {
          transform: scaleY(-1);
        }
      }
    }

    label {
      font-weight: var(--gds-text-weight-medium);
      line-height: var(--gds-text-line-height-label-medium);
      font-size: var(--gds-text-size-label-medium);
      width: 100%;
    }
  }
`

export default style
