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

    ::part(_button) {
      --pad: var(--_padding-inline);
      --gap: var(--_gap);
      border-radius: var(--gds-space-2xs);
      padding-inline: calc(var(--pad) / 2);
      gap: calc(var(--gap) / 2);
    }

    :slot(trail) {
      transform: scaleY(-1);
    }

    ::part(ripple) {
      border-radius: var(--gds-space-2xs);
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
