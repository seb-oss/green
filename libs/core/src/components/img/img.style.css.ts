import { css } from 'lit'

const style = css`
  :host {
    display: contents;
  }

  figure {
    aspect-ratio: var(--_ratio, inital);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    inset: var(--_inset, initial);
    width: 100%;
    height: auto;
    opacity: var(--_opacity, 1);
  }

  img {
    display: flex;
    object-fit: var(--_fit, cover);
    object-position: var(--_position, relative);
    width: 100%;
    height: 100%;
  }
`
export default style
