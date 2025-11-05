import { css } from 'lit'

const style = css`
  /* 
   * Host & Container
   * Base component setup and main container
   *  */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-book-s);
  }

  .gds-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--gds-sys-space-xl);
  }

  /* 
   * Density Modes
   * Spacing variables for different density levels
   *  */

  /* Default (comfortable) density */
  .gds-table {
    --table-cell-padding-y: var(--gds-sys-space-s);
    --table-cell-padding-x: var(--gds-sys-space-m);
    --table-header-padding-y: var(--gds-sys-space-s);
    --table-header-padding-x: var(--gds-sys-space-m);
    --table-row-min-height: var(--gds-sys-space-4xl);
    --table-font-size: var(--gds-sys-text-detail-book-s);
    --table-gap: var(--gds-sys-space-xl);
  }

  /* Compact density */
  .gds-table.compact {
    --table-cell-padding-y: var(--gds-sys-space-xs);
    --table-cell-padding-x: var(--gds-sys-space-s);
    --table-header-padding-y: var(--gds-sys-space-xs);
    --table-header-padding-x: var(--gds-sys-space-s);
    --table-row-min-height: var(--gds-sys-space-xl);
    --table-font-size: var(--gds-sys-text-detail-book-xs);
    --table-gap: var(--gds-sys-space-m);
  }

  /* Comfortable density (explicit) */
  .gds-table.comfortable {
    --table-cell-padding-y: var(--gds-sys-space-s);
    --table-cell-padding-x: var(--gds-sys-space-m);
    --table-header-padding-y: var(--gds-sys-space-s);
    --table-header-padding-x: var(--gds-sys-space-m);
    --table-row-min-height: var(--gds-sys-space-4xl);
    --table-font-size: var(--gds-sys-text-detail-book-s);
    --table-gap: var(--gds-sys-space-xl);
  }

  /* Spacious density */
  .gds-table.spacious {
    --table-cell-padding-y: var(--gds-sys-space-m);
    --table-cell-padding-x: var(--gds-sys-space-l);
    --table-header-padding-y: var(--gds-sys-space-m);
    --table-header-padding-x: var(--gds-sys-space-l);
    --table-row-min-height: var(--gds-sys-space-5xl);
    --table-font-size: var(--gds-sys-text-detail-book-m);
    --table-gap: 32px;
  }

  /* Apply density variables */
  .gds-table {
    gap: var(--table-gap);
    font: var(--table-font-size);
  }

  /*
   * Container that enables horizontal scroll
   **/
  .data {
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;
  }

  /* 
   * Table Structure
   **/
  table {
    width: max-content;
    min-width: 100%;
    table-layout: auto;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
  }

  /* Base cell styling (shared by th and td) */
  th,
  td {
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
    font-weight: normal;
  }

  /* 
   * Table Header
   * Sticky header with background and sorting
   *  */
  thead {
    position: relative;
    font-weight: normal;
  }

  /* Header background overlay */
  thead::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #eee;
    border-radius: var(--gds-sys-space-s);
    z-index: 0;
  }

  /* Header cells */
  thead th {
    padding: var(--table-header-padding-y) var(--table-header-padding-x);
    border: none;
    font-weight: 500;
    position: relative;
    z-index: 1;
    background: transparent;
    transition: all 0.2s ease;
  }

  /* Header cell hover effect background */
  thead th::before {
    content: '';
    display: none;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    border-radius: var(--gds-sys-space-xs);
    transition: all 420ms;
    inset: 6px 4px;
    z-index: -1;

    @starting-style {
      opacity: 0;
      translate: 0 -2px;
      scale: 0.8;
    }
  }

  /** 
   * Sortable Columns
   **/
  thead th.sortable {
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease;
  }

  thead th.sortable:hover::before {
    display: flex;
    scale: 1;
  }

  thead th.sortable:active::before {
    background: rgba(0, 0, 0, 0.2);
  }

  /* Column header content layout */
  .column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: var(--gds-sys-space-l);
  }

  .column-label {
    font-weight: normal;
  }

  /* Sort icon styling */
  .sort-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 420ms ease;
    translate: 0 -2px;
    opacity: 0;
    z-index: 1;
  }

  thead th.sortable:hover:not(.sorted) .sort-icon {
    opacity: 0.8;
    translate: 0;
  }

  thead th.sorted .sort-icon {
    opacity: 1;
  }

  /* 
   * Table Body
   * Data rows and cells styling
   **/

  tbody tr {
    border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    min-height: var(--table-row-min-height);
  }

  tbody tr.loading {
    opacity: 0.3;
    pointer-events: none;
  }

  tbody td {
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  /* 
   * Row Selection
   * Checkbox and selected state styles
   *  */
  tr {
    position: relative;
  }

  .checkbox-cell {
    min-width: var(--gds-sys-space-l);
    width: var(--gds-sys-space-l);
    max-width: var(--gds-sys-space-l);
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  tr.selected {
    border-color: transparent;
  }

  /* Selected row highlight */
  tr.selected::after {
    content: '';
    display: flex;
    position: absolute;
    inset: 1px 0;
    border-radius: var(--gds-sys-space-s);
    background-color: rgba(59, 130, 246, 0.1);
    z-index: 0;
    pointer-events: none;
  }

  tr.selected:hover::before {
    background-color: rgba(59, 130, 246, 0.15);
  }

  /* 
   * Header & Footer Layout
   * Top and bottom control sections
   *  */
  .header {
    display: flex;
    flex-direction: column;
    gap: calc(var(--table-gap) * 0.8);
  }

  .header-meta {
    display: flex;
    flex-direction: column;
  }

  .header-slots {
    display: flex;
    justify-content: space-between;
  }

  .footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  /* Shared layout for header and footer sections */
  .header .lead,
  .header .trail,
  .footer .lead,
  .footer .trail {
    display: flex;
    align-items: center;
    gap: calc(var(--table-gap) * 0.8);
  }

  /* Footer specific styling */
  .footer .lead {
    padding-left: var(--gds-sys-space-s);
    font: var(--gds-sys-text-detail-book-xs);
    color: var(--gds-sys-color-content-neutral-02);
  }

  .selection-info {
    display: flex;
    align-items: center;
    gap: var(--gds-sys-space-s);
  }

  /* 
   * Cell Content & Alignment
   * Cell content layout and text alignment
   *  */
  .cell-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* Text alignment utilities */
  .text-right {
    text-align: right;
  }

  .text-right .column-header,
  th.actions {
    flex-direction: row-reverse;
  }

  .text-right .cell-content,
  td.actions-cell .cell-content {
    justify-content: flex-end;
  }

  .space-between .cell-content {
    justify-content: space-between;
  }

  /* 
   * Responsive Design
   * Mobile and tablet adaptations
   *  */
  .responsive.data {
    display: contents;
  }

  .responsive thead {
    position: sticky;
    top: var(--gds-sys-space-l);
    z-index: 2;
  }

  @media (max-width: 760px) {
    .responsive td {
      width: 100%;
      min-width: unset;
      display: flex;
      justify-content: space-between;
      padding: var(--gds-sys-space-xs);
    }

    .responsive td::before {
      content: attr(data-label);
      font-weight: bold;
    }
  }
`

export default style
