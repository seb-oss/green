import { css } from 'lit'

const style = css`
  :host {
    display: block;
    font: var(--gds-sys-text-detail-book-s);
  }

  .gds-table {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
    table-layout: auto;
  }

  thead {
    position: sticky;
    font-weight: normal;
    top: 20px;
    z-index: 2;
  }

  thead::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #eee;
    border-radius: 12px;
    z-index: 0;
  }

  thead th {
    padding: 12px 16px;
    border: none;
    font-weight: 500;
    position: relative;
    z-index: 1;
    background: transparent;
    transition: all 0.2s ease;
  }

  thead th::before {
    content: '';
    display: none;
    position: absolute;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    transition: all 420ms;
    inset: 4px;

    @starting-style {
      opacity: 0;
      translate: 0 -2px;
      scale: 0.8;
    }
  }

  /* Sortable header styling */
  thead th.sortable {
    cursor: pointer;
    user-select: none;
  }

  thead th.sortable:hover::before {
    display: flex;
    scale: 1;
  }

  thead th.sortable:active::before {
    background: rgba(0, 0, 0, 0.1);
  }

  /* Column header layout */
  .column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 20px;
  }

  .column-label {
    font-weight: normal;
  }

  .sort-icon {
    display: flex;
    align-items: center;
    margin-left: 8px;
    opacity: 0.4;
    transition: opacity 420ms ease;
    flex-shrink: 0;
  }

  /* Show sort icon more prominently when sorted */
  thead th.sorted .sort-icon {
    opacity: 1;
  }

  /* Hover effect for sortable columns */
  thead th.sortable:hover .sort-icon {
    opacity: 0.8;
  }

  /* Right-aligned columns */
  .text-right .column-header {
    flex-direction: row-reverse;
  }

  .text-right .sort-icon {
    margin-left: 0;
    margin-right: 8px;
  }

  /* Center-aligned columns */
  .text-center .column-header {
    justify-content: center;
  }

  .text-center .column-label {
    text-align: center;
  }

  /* Body styling */
  tbody tr {
    border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  tbody tr.loading {
    opacity: 0.3;
  }

  tbody tr.fade-in {
    opacity: 0;
    animation: fadeIn 240ms linear forwards;
  }

  tbody td {
    padding-inline: 16px;
    padding-block: 12px;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  th,
  td {
    padding: 8px;
    font-weight: normal;
  }

  /* Selection styling */
  .checkbox-cell {
    min-width: 20px;
    width: 20px;
    max-width: 20px;
    padding: 12px 16px;
  }

  tr.selected {
    background-color: rgba(59, 130, 246, 0.1);
  }

  tr.selected:hover {
    background-color: rgba(59, 130, 246, 0.15);
  }

  /* Footer and header layout */
  .footer,
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .lead,
    .trail {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  .selection-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* Responsive design */
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

    /* Adjust sort icons on mobile */
    .sort-icon {
      margin-left: 4px;
    }
  }

  /* Utility classes */
  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }

  /* Error state */
  .error {
    padding: 24px;
    text-align: center;
    color: #dc2626;
    background: #fef2f2;
    border-radius: 8px;
    border: 1px solid #fecaca;
  }

  /** 
   * Footer
   */

  .footer .lead {
    padding-left: 12px;
    font: var(--gds-sys-text-detail-book-xs);
    color: var(--gds-sys-color-content-neutral-02);
  }

  /**
   * ⚠️ Experimental
   */

  .cell-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .text-right .cell-content {
    justify-content: flex-end;
  }
`

export default style
