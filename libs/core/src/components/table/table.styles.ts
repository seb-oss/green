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

  /** Loading and stuff */

  .skeleton-row td {
    padding: 8px;
  }

  .skeleton-cell {
    height: 20px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      #eee 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s infinite;
    border-radius: 4px;
  }

  .skeleton-checkbox {
    width: 20px;
    height: 20px;
    margin: 0 auto;
    background: linear-gradient(
      90deg,
      transparent 0%,
      #eee 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s infinite;
    border-radius: 4px;
  }

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`
export default style
