import { css } from 'lit'

const style = css`
  @layer icon;

  @layer icon {
    :host {
      display: contents;
    }

    :host([stroke]) {
      & > svg > * {
        stroke-width: inherit;
      }
    }

    :host(:not([width], [height])) {
      & > svg {
        height: 1lh;
        width: auto;
      }
    }
  }
`
export default style
