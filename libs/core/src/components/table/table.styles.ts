import { css } from 'lit'

export const TableStyles = css`
  /* Host & Container */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-book-s);
    color: var(--gds-sys-color-content-neutral-01);
    text-align: left;
  }

  /* Density Modes */
  /* Default (comfortable) density */
  .table {
    --table-cell-padding-y: var(--gds-sys-space-s);
    --table-cell-padding-x: var(--gds-sys-space-m);
    --table-header-padding-y: var(--gds-sys-space-s);
    --table-header-padding-x: var(--gds-sys-space-m);
    --table-row-min-height: var(--gds-sys-space-4xl);
    --table-font-size: var(--gds-sys-text-detail-book-s);
    --table-gap: var(--gds-sys-space-xl);
  }

  /* Compact density */
  .table.compact {
    --table-cell-padding-y: var(--gds-sys-space-xs);
    --table-cell-padding-x: var(--gds-sys-space-s);
    --table-header-padding-y: var(--gds-sys-space-xs);
    --table-header-padding-x: var(--gds-sys-space-s);
    --table-row-min-height: var(--gds-sys-space-xl);
    --table-font-size: var(--gds-sys-text-detail-book-xs);
    --table-gap: var(--gds-sys-space-m);
  }

  /* Comfortable density (explicit) */
  .table.comfortable {
    --table-cell-padding-y: var(--gds-sys-space-s);
    --table-cell-padding-x: var(--gds-sys-space-m);
    --table-header-padding-y: var(--gds-sys-space-s);
    --table-header-padding-x: var(--gds-sys-space-m);
    --table-row-min-height: var(--gds-sys-space-4xl);
    --table-font-size: var(--gds-sys-text-detail-book-s);
    --table-gap: var(--gds-sys-space-xl);
  }

  /* Spacious density */
  .table.spacious {
    --table-cell-padding-y: var(--gds-sys-space-m);
    --table-cell-padding-x: var(--gds-sys-space-l);
    --table-header-padding-y: var(--gds-sys-space-m);
    --table-header-padding-x: var(--gds-sys-space-l);
    --table-row-min-height: var(--gds-sys-space-5xl);
    --table-font-size: var(--gds-sys-text-detail-book-m);
    --table-gap: var(--gds-sys-space-2xl);
  }

  /* Apply density variables */
  .table {
    display: flex;
    flex-direction: column;
    gap: var(--table-gap);
    font: var(--table-font-size);
    width: 100%;
  }

  /* Container that enables horizontal scroll */
  .data {
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;
    box-sizing: border-box;
  }

  .data:not(.responsive) {
    border-radius: var(--gds-sys-space-m);
    border: var(--gds-sys-space-5xs) solid var(--gds-sys-color-border-subtle-01);
    padding: var(--gds-sys-space-3xs);
  }

  /* Table Structure */
  table {
    width: max-content;
    min-width: 100%;
    table-layout: auto;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
    contain: paint;
  }

  /* Base cell styling (shared by th and td) */
  th,
  td {
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  tbody td {
    font-weight: normal;
    font: var(--gds-sys-text-detail-regular-s);
  }

  /* Table Header */
  thead {
    position: relative;
  }

  /* Header background overlay */
  thead::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gds-sys-color-l2-neutral-01);
    border-radius: var(--gds-sys-space-s);
    z-index: 0;
  }

  /* Header cells */
  thead th {
    padding: var(--table-header-padding-y) var(--table-header-padding-x);
    border: none;
    position: relative;
    z-index: 1;
    background: transparent;
  }

  /* Header cell hover effect background */
  thead th::before {
    content: '';
    display: none;
    position: absolute;
    background: var(--gds-sys-color-l3-neutral-02);
    border-radius: var(--gds-sys-space-xs);
    transition: all var(--gds-sys-motion-duration-fast);
    inset: var(--gds-sys-space-2xs) var(--gds-sys-space-3xs);
    z-index: -1;

    @starting-style {
      opacity: 0;
      translate: 0 -2px;
      scale: 0.8;
    }
  }

  thead tr th {
    position: relative;
  }

  /* Sortable Columns */
  thead th.sortable {
    cursor: pointer;
    user-select: none;
  }

  @media (hover: hover) {
    thead th.sortable:hover::before {
      display: flex;
      scale: 1;
    }
  }

  thead th.sortable:active::before {
    translate: 0 1px;
    background: var(--gds-sys-color-l3-neutral-03);
  }

  /* Column header content layout */
  .column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: var(--gds-sys-space-l);
  }

  .column-label {
    font-weight: var(--gds-sys-text-weight-book);
  }

  .sort-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition-property: opacity;
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-timing-function: var(--gds-sys-motion-easing-ease);
    opacity: 0;
    z-index: 1;
  }

  @media (hover: hover) {
    thead th.sortable:hover:not(.sorted) .sort-icon {
      opacity: 0.8;
    }
  }

  thead th.sorted .sort-icon {
    opacity: 1;
  }

  /* Table Body */

  tbody tr {
    opacity: 1;
    transition-property: opacity, border-color, background-color;
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-timing-function: var(--gds-sys-motion-easing-ease-in-out),
      var(--gds-sys-motion-easing-linear);
    min-height: var(--table-row-min-height);
    border-top: var(--gds-sys-space-5xs) solid
      var(--gds-sys-color-border-subtle-01);
  }

  .responsive tbody tr:last-child {
    border-bottom: var(--gds-sys-space-5xs) solid
      var(--gds-sys-color-border-subtle-01);
  }

  tbody tr.loading {
    opacity: 0.3;
    pointer-events: none;
  }

  tbody tr.loading:not(:first-child) {
    border-color: var(--gds-sys-color-border-subtle-02);
  }

  tbody td {
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  /* Row Selection */
  tr {
    position: relative;
  }

  .checkbox-cell {
    min-width: var(--gds-sys-space-l);
    width: var(--gds-sys-space-l);
    max-width: var(--gds-sys-space-l);
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  .rbcb-wrapper {
    position: relative;
  }

  tr:first-child {
    border-top-width: var(--gds-sys-space-4xs);
  }

  tr.selected,
  tr:first-child {
    border-color: transparent;
  }

  tr.selected + tr {
    border-color: transparent;
  }

  tr.selected:last-child {
    border-bottom-color: transparent;
  }

  /* Selected row highlight */
  tr::after {
    content: '';
    display: none;
    position: absolute;
    inset: var(--gds-sys-space-5xs) 0;
    border-radius: var(--gds-sys-space-s);
    transition: all var(--gds-sys-motion-duration-fastest);
    z-index: -1;
    pointer-events: none;

    @starting-style {
      opacity: 0;
      translate: var(--gds-sys-space-3xs) 0;
    }
  }

  tr.selected::after {
    display: flex;
    background-color: var(--gds-sys-color-l3-neutral-02);
  }

  @media (hover: hover) {
    tr.selected:hover::after {
      display: flex;
      background-color: var(--gds-sys-color-l3-neutral-03);
    }
  }

  tbody tr:hover,
  tbody tr:hover + tr {
    border-color: transparent;
  }

  tbody tr:hover:not(.selected)::after {
    display: flex;
    background-color: var(--gds-sys-color-l2-neutral-01);
  }

  /* Header & Footer Layout */
  .header {
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

  /* Cell Content & Alignment */
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

  /* Responsive Design */

  .checkbox-label,
  .actions-label {
    display: none;
  }

  .responsive.data {
    display: contents;
  }

  .responsive thead {
    position: sticky;
    top: var(--gds-sys-space-l);
    z-index: 2;
  }

  @media (max-width: 760px) {
    .responsive thead {
      display: none;
    }

    .responsive tbody {
      display: flex;
      flex-direction: column;
      gap: var(--table-gap);
    }

    .responsive tr {
      display: block;
      padding: var(--table-cell-padding-x);
      border: var(--gds-sys-space-5xs) solid
        var(--gds-sys-color-border-subtle-01);
      border-radius: var(--gds-sys-space-s);
      margin: 0;
    }

    .responsive tr.selected {
      border-color: transparent;
    }

    .responsive td {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--gds-sys-space-xs) 0;
    }

    .responsive td::before {
      content: attr(data-label);
      color: var(--gds-sys-color-content-neutral-02);
      font-weight: 500;
      margin-right: var(--gds-sys-space-s);
    }

    .responsive .checkbox-label {
      display: none;
    }

    .responsive .actions-label {
      display: none;
    }

    .responsive .cell-content {
      justify-content: flex-end;
    }
  }

  /* Skeleton Loading State */
  .skeleton {
    display: inline-block;
    background: linear-gradient(
      90deg,
      var(--gds-sys-color-l3-neutral-01) 25%,
      var(--gds-sys-color-l2-neutral-01) 50%,
      var(--gds-sys-color-l3-neutral-01) 75%
    );
    background-size: 200% 100%;
    animation: skeleton-shimmer 1.5s ease-in-out infinite;
    border-radius: var(--gds-sys-space-max);
    opacity: 0.1;
  }

  @keyframes skeleton-shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  /* Skeleton elements */
  .skeleton-text {
    height: 14px;
    width: 80%;
    min-width: 60px;
  }

  .skeleton-checkbox {
    height: 18px;
    width: 18px;
    border-radius: var(--gds-sys-space-3xs);
  }

  .skeleton-action {
    height: 24px;
    width: 24px;
    border-radius: var(--gds-sys-space-max);
  }

  /* Skeleton row styling */
  .skeleton-row {
    opacity: 1;
    pointer-events: none;
  }

  .skeleton-row td {
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  /* Vary skeleton text widths for more natural look */
  .skeleton-row:nth-child(odd) .skeleton-text {
    width: 70%;
  }

  .skeleton-row:nth-child(3n) .skeleton-text {
    width: 90%;
  }

  .skeleton-row:nth-child(4n) .skeleton-text {
    width: 60%;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .sort-icon,
    tbody tr,
    tbody tr::after,
    thead th::before {
      transition: none;
    }
  }
`
