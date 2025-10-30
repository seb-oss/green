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
    border-spacing: 0;
    border: none;
  }

  thead tr {
    background: #eee;
    background-clip: content-box;
    border-radius: 12px;
  }

  thead th {
    padding: 12px 8px;
    border: none;
    font-weight: 500;
  }

  /* 
  tbody tr {
    border-bottom: 1px solid #ccc;
  }
  */

  tbody tr {
    border-bottom: 1px solid #ccc;
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

  /** heading */

  .column {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  /** Loading and stuff */
  /** Loading and stuff */
  /** Loading and stuff */
  /** Loading and stuff */
  /** Loading and stuff */

  .skeleton-row {
    display: table-row;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 40%,
      #000 50%,
      rgba(0, 0, 0, 0) 60%
    );
    mask-size: 400%;
    animation: shimmer 6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
  }

  .skeleton-cell {
    height: 20px;
    border-radius: 40px;
    background: currentColor;
    opacity: 0.1;
  }

  @keyframes shimmer {
    0% {
      mask-position: 100%;
    }
    100% {
      mask-position: 0%;
    }
  }
`
export default style
