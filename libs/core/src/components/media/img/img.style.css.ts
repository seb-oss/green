import { css } from 'lit'

const style = css`
  :host {
    display: contents;
  }

  figure {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
  }
`
export default style
