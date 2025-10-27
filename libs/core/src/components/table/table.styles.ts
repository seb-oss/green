import { css } from 'lit'

const style = css`
  :host {
    display: block;
  }

  .gds-table {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
    font-weight: normal;
  }

  .column {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .checkbox-cell {
    width: 40px;
    text-align: center;
  }

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

  /** Pagination stuff */
  .pagination {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .page-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

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
  }

  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }

  tr.selected,
  td.selected {
    background-color: #ccc;
  }
`
export default style
