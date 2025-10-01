import { css } from 'lit'

const style = css`
  @layer base {
    :host {
      display: contents;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin: unset;
      padding: unset;
      height: max-content;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      gap: var(--_gap);
    }

    @container (max-width: 400px) {
      :host(:not([return])),
      :host([return]) .separator {
        display: none;
      }

      :host([return]) {
        display: contents;
      }
    }
  }
`
export default style
