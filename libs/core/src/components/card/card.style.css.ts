import { css } from 'lit'

const style = css`
  :host {
    --gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1),
      0px 0px 1px 0px rgba(0, 0, 0, 0.1);
    --gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
      0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    --gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1),
      0px 2px 4px -2px rgba(0, 0, 0, 0.06);
    --gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08),
      0px 4px 6px -2px rgba(0, 0, 0, 0.03);
    --gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08),
      0px 8px 8px -4px rgba(0, 0, 0, 0.03);
    display: block;
  }

  :host([variant]) {
    display: flex;
    padding: 40px;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--_button);
  }

  :host([variant='midnight']) {
    --_color: #152b41;
    background: var(--_color);
    color: color-mix(in srgb, var(--_color) 10%, #ffffff);
    --_button: #1b3853;
  }

  :host([variant='frost']) {
    background: #eaf0f7;
    color: #000;
    --_button: #d3dfef;
  }

  :host([variant='plum']) {
    background: #372b40;
    color: #fff;
    --_button: #473752;
  }

  :host([variant='silver']) {
    background: #e2e2e2;
    color: #fff;
    --_button: #202020;
  }

  :host([variant='mist']) {
    background: #eee;
    color: #000;
    --_button: #e2e2e2;
  }

  :host([variant='pearl']) {
    background: #f2efeb;
    color: #000;
    --_button: #e4ded5;
  }

  :host([variant='outlined']) {
    background: #fff;
    color: #fff;
    border: 1px solid #eee;
    --_button: #000;
  }
`
export default style
