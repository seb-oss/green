import { css } from 'lit'

const style = css`
  @layer base, reset;

  @layer base {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: var(--gds-space-xs);
      font-family: inherit;
    }

    button {
      display: contents;
      font: inherit;
      width: 100%;
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    input[type='text'] {
      border-radius: var(--gds-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-color-l3-content-disabled);
      border-color: var(--gds-color-l3-border-tertiary);
      border-width: 0 0 var(--gds-space-4xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-space-m);
      font-weight: var(--gds-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-color-l3-border-secondary);
        color: var(--gds-color-l3-content-tertiary);
      }

      &::placeholder {
        font-family: inherit;
        font-weight: var(--gds-text-weight-book);
        color: var(--gds-color-l3-content-disabled);
      }
    }

    [aria-expanded='true'] [slot='action'] {
      transform: scaleY(-1);
    }
  }
`

export default style
