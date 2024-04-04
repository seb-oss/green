import { css } from 'lit'

const style = css`
  @layer grid, grid.desktop, grid.tablet, grid.mobile, grid.span, grid.space, grid.align, grid.debug;

  @layer grid {
    :host {
      --_c: var(--gds-sys-grid-columns-12);
      --_grid-col: repeat(var(--_c), 1fr);
      --_grid-col-start: 1;
      --_grid-col-end: -1;
      --_gap-column: 0;
      display: grid;
      width: 100%;
      grid-template-columns: var(--_grid-col);
      grid-column-gap: var(--_gap-column);
      padding: var(--_grid-padding);
      text-wrap: balance;
    }

    :host([auto-columns]) {
      --_col-count: var(--_c, 0);
      --_gap-count: calc(var(--_col-count) - 1);
      --_total-gap-width: calc(var(--_gap-count) * var(--_gap-column, 0px));
      --_col-width-max: calc(
        (100% - var(--_total-gap-width)) / var(--_col-count)
      );
      grid-template-columns: repeat(
        auto-fill,
        minmax(max(var(--_col-width), var(--_col-width-max)), 1fr)
      );
    }
  }

  /* Responsive */
  :host {
    --_c: var(--_columns-desktop);
    --_gap-column: var(--_gap-desktop);
    --_grid-padding: var(--_padding-desktop);
    --_col-width: var(--_col-width-desktop);
  }

  @media only screen and (max-width: 768px) {
    :host(:not([auto-columns])) {
      --_c: var(--_columns-tablet);
      --_gap-column: var(--_gap-tablet);
      --_grid-padding: var(--_padding-tablet);
      --_col-width: var(--_col-width-tablet);
    }
  }

  @media only screen and (max-width: 425px) {
    :host(:not([auto-columns])) {
      --_c: var(--_columns-mobile);
      --_gap-column: var(--_gap-mobile);
      --_grid-padding: var(--_padding-mobile);
      --_col-width: var(--_col-width-mobile);
    }
  }
`
export default style
