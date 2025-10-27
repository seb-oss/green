import { css } from 'lit'

const style = css`
  :host {
    display: block;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
  }

  .checkbox-cell {
    width: 40px;
    text-align: center;
  }

  .footer {
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
    padding: 20px;
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
`
export default style
