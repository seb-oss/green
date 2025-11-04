import { css } from 'lit'

const style = css`
  /* ============================================
   * Host & Container
   * Base component setup and main container
   * ============================================ */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-book-s);
  }

  .gds-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
  }

  /* ============================================
   * Table Structure
   * Core table element and layout configuration
   * ============================================ */
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
    table-layout: auto;
    overflow: auto;
  }

  /* Base cell styling (shared by th and td) */
  th,
  td {
    padding: 8px;
    font-weight: normal;
  }

  /* ============================================
   * Table Header
   * Sticky header with background and sorting
   * ============================================ */
  thead {
    position: sticky;
    font-weight: normal;
    top: 20px;
    z-index: 2;
  }

  /* Header background overlay */
  thead::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #eee;
    border-radius: 12px;
    z-index: 0;
  }

  /* Header cells */
  thead th {
    padding: 12px 16px;
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
    border-radius: 8px;
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
  /* 
  thead th.sorted::before {
    display: flex;
  } */

  /* Column header content layout */
  .column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 100%; */
    min-height: 20px;
  }

  .column-label {
    font-weight: normal;
  }

  /* Sort icon styling */
  .sort-icon {
    display: flex;
    align-items: center;
    margin-left: 8px;
    transition: opacity 420ms ease;
    z-index: 1;
    opacity: 0;
  }

  thead th.sortable:hover:not(.sorted) .sort-icon {
    opacity: 0.8;
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
  }

  tbody tr.loading {
    opacity: 0.3;
    pointer-events: none;
  }

  tbody td {
    padding-inline: 16px;
    padding-block: 12px;
  }

  /* ============================================
   * Row Selection
   * Checkbox and selected state styles
   * ============================================ */
  tr {
    position: relative;
  }

  .checkbox-cell {
    min-width: 20px;
    width: 20px;
    max-width: 20px;
    padding: 12px 16px;
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
    border-radius: 12px;
    background-color: rgba(59, 130, 246, 0.1);
    z-index: 0;
    pointer-events: none;
  }

  tr.selected:hover::before {
    background-color: rgba(59, 130, 246, 0.15);
  }

  /* ============================================
   * Header & Footer Layout
   * Top and bottom control sections
   * ============================================ */
  .header {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    gap: 20px;
  }

  /* Footer specific styling */
  .footer .lead {
    padding-left: 12px;
    font: var(--gds-sys-text-detail-book-xs);
    color: var(--gds-sys-color-content-neutral-02);
  }

  .selection-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* ============================================
   * Cell Content & Alignment
   * Cell content layout and text alignment
   * ============================================ */
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

  .text-right .sort-icon {
    margin-left: 0;
    margin-right: 8px;
  }

  .text-right .cell-content,
  td.actions-cell .cell-content {
    justify-content: flex-end;
  }

  .space-between .cell-content {
    justify-content: space-between;
  }

  /* ============================================
   * Responsive Design
   * Mobile and tablet adaptations
   * ============================================ */
  @media (max-width: 768px) {
    .responsive-table td {
      display: flex;
      justify-content: space-between;
      padding: 8px;
    }

    .responsive-table td::before {
      content: attr(data-label);
      font-weight: bold;
    }

    .sort-icon {
      margin-left: 4px;
    }
  }

  /* ============================================
   * Density modes
   * TBD
   * ============================================ */
`

export default style
