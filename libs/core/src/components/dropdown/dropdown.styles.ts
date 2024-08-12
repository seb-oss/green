import { css } from 'lit'

const style = css`
  @layer base, reset, transitional-styles;

  @layer base {
    button {
      transition:
        0.3s cubic-bezier(0.23, 1, 0.32, 1),
        outline-offset,
        outline-width;
      cursor: pointer;
      font-family: inherit;
      // padding: 0.75rem 1rem;
      border: solid 1px #000;
      background: #fff;
      color: #000;
      min-height: 2.75rem;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      max-width: 100%;
      font-size: inherit;
      font-weight: 400;
      line-height: 1.125;
      // margin-bottom: 0.5rem;
      // margin-top: 0.5rem;
      width: 100%;
      // New
      display: flex;
      gap: 1ch;
      border-radius: var(--gds-space-2xs);
      margin-block: var(--gds-space-2xs);
      font-size: var(--gds-text-size-body-large);
      padding-inline: var(--gds-space-s);
      padding-block: var(--gds-space-xs);
      border: 1px solid var(--gds-sys-color-stroke-stroke);

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
