import { css } from 'lit'

//To do later: add classes for light theme
const style = css`
  #body {
    visibility: hidden;
    position: absolute;
    z-index: 1060;
    box-sizing: border-box;
    padding: var(--gds-sys-space-m);
    width: 20rem;
    border-radius: var(--gds-sys-radius-s);
    background-color: var(--gds-sys-color-l2-neutral-03);
    color: var(--gds-sys-color-content-inversed);
    opacity: 0;
    transition: opacity 0.3s;
  }

  #arrow {
    box-sizing: border-box;
    z-index: -1;
    position: absolute;
    height: var(--gds-sys-space-m);
    width: var(--gds-sys-space-m);
    background-color: var(--gds-sys-color-l2-neutral-03);
    transform: rotate(45deg);
  }

  .arrow-top,
  .arrow-top-start,
  .arrow-top-end {
    bottom: -0.5rem;
  }

  .arrow-bottom,
  .arrow-bottom-start,
  .arrow-bottom-end {
    top: -0.5rem;
  }

  .arrow-left,
  .arrow-left-start,
  .arrow-left-end {
    right: -0.5rem;
  }

  .arrow-right,
  .arrow-right-start,
  .arrow-right-end {
    left: -0.5rem;
  }
`
export default style
