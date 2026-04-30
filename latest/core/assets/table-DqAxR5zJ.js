import{Y as St,V as Ct,X as jt,af as At,i as Dt,E as Tt,am as It,O as Lt,n as c,$ as zt,ag as Gt,H as m,a7 as x,I as Et,a as u,d as y,h as o,N as h,g as Rt,o as Mt}from"./iframe-CsT9moiw.js";import{l as Nt}from"./localized-decorator-CHDsyZqF.js";import{w as Bt}from"./popover.component-DsGG_EbN.js";import{a as Pt}from"./dropdown.component-BlmkB7Iu.js";import"./menu-heading.component-Y6BVVvhr.js";import{a as Ht,G as Ot}from"./context-menu.component-CSCisG52.js";import"./alert.component-ClZ1teGl.js";import{G as Qt}from"./badge.component-B0SXmL5O.js";import"./blur.component-T23_A-QT.js";import"./breadcrumb.component-CV9lBzsk.js";import"./calendar.component-OQLQY3O-.js";import{G as Wt}from"./card.component-l6leA0Xm.js";import"./card-linked.component-C2hJan0h.js";import"./checkbox-group.component-x0B7NxjO.js";import"./coachmark.component-Db1HZjnV.js";import"./datepicker.component-BuAi769t.js";import"./details.component-DKGciN-H.js";import"./dialog.component-DR7PB4PO.js";import{G as Vt}from"./divider.component-CL3aSvme.js";import"./signal.component-CvJquPhf.js";import"./filter-chips.component-BBXauXda.js";import{G as Ut}from"./flex.component-DByS7Bd2.js";import"./summary.component-BtcEFeZ8.js";import"./grouped-list.component-CjTOkc1H.js";import"./icon.component-DVm-kf_1.js";import{I as qt,a as Ft,b as Jt,c as Kt}from"./zoom-out.component-D-Btkukv.js";import"./arrow-down.component-BiQgA4wg.js";import"./arrow-left.component-adn2O8Fj.js";import"./arrow-right.component-Blq36kA2.js";import"./arrow-rotate-counter-clockwise.component-D29lDm43.js";import"./arrow-up.component-0rVyI1T2.js";import"./sun.component-offT_w25.js";import"./star.component-Da4yKF13.js";import"./bubbles.component-D2vluEuJ.js";import"./calender-add.component-B3D7vbzg.js";import"./chain-link-CE3hIySG.js";import"./checkmark.component-BhJ1Ystt.js";import"./chevron-bottom.component-BxhwfoFZ.js";import"./chevron-right-small.component-B0IjwuXy.js";import"./chevron-left.component-Cds6HIvT.js";import"./chevron-right.component-FigOrcw6.js";import"./chevron-top.component-Dzu2kOAZ.js";import"./circle-check.component-CBJ4-Qqx.js";import"./triangle-exclamation.component-CswFTZZr.js";import"./circles-three.component-CN-i-Vdb.js";import"./cloudy-sun.component-Bcp3a6R7.js";import"./credit-card.component-DC4i4FX_.js";import"./cross-large.component-DHYPn8s8.js";import{I as Yt}from"./cross-small.component-CQJ2s4d-.js";import{I as Xt}from"./dot-grid-one-horizontal-_H1XX-q7.js";import"./folder.component-DxOZBcKC.js";import{I as Zt}from"./magnifying-glass.component-DpoltKTY.js";import{I as te}from"./minus-small.component-BZJo_MqX.js";import"./people-profile.component-D9HKQCYk.js";import"./push.component-CU9qDZQ9.js";import"./rocket.component-wsjXS3FC.js";import"./square-grid-circle.component-DIOyEenj.js";import{G as ee}from"./img.component-CkYj2C3Y.js";import{G as se}from"./input.component-QWwAgPp6.js";import{G as ae}from"./link-Bch1rPVL.js";import"./mask.component-x1X8Jk21.js";import"./menu-button.component-nAUHxSPL.js";import{G as re}from"./pagination-CFJDya1a.js";import"./radio-group.component-CWuPpqzN.js";import"./rich-text.component-D5nBewYw.js";import"./segmented-control-Bl0XF8rN.js";import"./sensitive-number.component-BABxT3Z5.js";import"./sensitive-date.component-C_VOvj4U.js";import"./sensitive-account.component-CpE4o5D-.js";import"./select.component-DtVOdkZi.js";import"./spinner.component-CqLWDfxv.js";import"./switch.component-DXrxsaBL.js";import{G as ie}from"./text.component-C-iPFyM3.js";import"./textarea.component-C7rXnKla.js";import"./video.component-DSxXcUb7.js";import"./card-pattern-01.component-DTD5t1g2.js";import{c as oe}from"./rbcb-toggle.template-CHoUOIyf.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B="important",le=" !"+B,k=St(class extends Ct{constructor(t){var e;if(super(t),t.type!==jt.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const r=t[s];return r==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?s.removeProperty(r):s[r]=null);for(const r in e){const n=e[r];if(n!=null){this.ft.add(r);const p=typeof n=="string"&&n.endsWith(le);r.includes("-")||p?s.setProperty(r,p?n.slice(0,-11):n,p?B:""):s[r]=n}}return At}}),ne=Dt`
  /* Host & Container */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-s-book);
    color: var(--gds-sys-color-content-neutral-01);
    text-align: left;
    --_table-height: 80vh;
    --_table-border-width: var(--gds-sys-space-5xs);
    --_table-border-color: var(--gds-sys-color-border-neutral-02);
  }

  /* Density Modes */
  /* Compact density */
  .table.compact {
    --table-cell-padding-y: var(--gds-sys-space-xs);
    --table-cell-padding-x: var(--gds-sys-space-s);
    --table-header-padding-y: var(--gds-sys-space-xs);
    --table-header-padding-x: var(--gds-sys-space-s);
    --table-row-min-height: var(--gds-sys-space-xl);
    --table-font-size: var(--gds-sys-text-detail-s-book);
    --table-gap: var(--gds-sys-space-m);
    --table-border-spacing: 0 var(--gds-sys-space-5xs);
    --table-data-padding: var(--gds-sys-space-5xs) var(--gds-sys-space-4xs);
    --table-data-padding-x: var(--gds-sys-space-4xs);
  }

  /* Comfortable default */
  .table.comfortable {
    --table-cell-padding-y: var(--gds-sys-space-s);
    --table-cell-padding-x: var(--gds-sys-space-m);
    --table-header-padding-y: var(--gds-sys-space-s);
    --table-header-padding-x: var(--gds-sys-space-m);
    --table-row-min-height: var(--gds-sys-space-4xl);
    --table-font-size: var(--gds-sys-text-detail-s-book);
    --table-gap: var(--gds-sys-space-l);
    --table-border-spacing: 0 var(--gds-sys-space-4xs);
    --table-data-padding: var(--gds-sys-space-3xs) var(--gds-sys-space-2xs);
    --table-data-padding-x: var(--gds-sys-space-2xs);
  }

  /* Spacious density */
  .table.spacious {
    --table-cell-padding-y: var(--gds-sys-space-l);
    --table-cell-padding-x: var(--gds-sys-space-l);
    --table-header-padding-y: var(--gds-sys-space-l);
    --table-header-padding-x: var(--gds-sys-space-l);
    --table-row-min-height: var(--gds-sys-space-5xl);
    --table-font-size: var(--gds-sys-text-detail-m-book);
    --table-gap: var(--gds-sys-space-xl);
    --table-border-spacing: 0 var(--gds-sys-space-3xs);
    --table-data-padding: var(--gds-sys-space-3xs) var(--gds-sys-space-xs);
    --table-data-padding-x: var(--gds-sys-space-xs);
  }

  /* Neutral 02 variants */
  .data.variant-neutral-02,
  .data.variant-neutral-02-outlined {
    --_table-header-bg: var(--gds-sys-color-l2-neutral-01);
    --_table-header-hover: var(--gds-sys-color-l3-neutral-02);
    --_table-header-active: var(--gds-sys-color-l3-neutral-03);
    --_table-row-hover: var(--gds-sys-color-l2-neutral-01);
    --_table-row-selected-hover: var(--gds-sys-color-l3-neutral-03-2);
    --_table-row-striped: var(--gds-sys-color-l2-neutral-01);
    --_table-card-bg: var(--gds-sys-color-l1-neutral-01);
  }

  /* Neutral 01 variant */
  .data.variant-neutral-01 {
    --_table-header-bg: var(--gds-sys-color-l2-neutral-02);
    --_table-header-hover: var(--gds-sys-color-l3-neutral-02);
    --_table-header-active: var(--gds-sys-color-l3-neutral-03);
    --_table-row-hover: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-01)
    );
    --_table-row-selected-hover: var(--gds-sys-color-l3-neutral-01-2);
    --_table-row-striped: var(--gds-sys-color-l2-neutral-01);
    --_table-card-bg: var(--gds-sys-color-l2-neutral-01);
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
    overflow-y: auto;
    max-height: var(--_table-height);
    box-sizing: border-box;
    padding: var(--table-data-padding);
    position: relative;
    border-radius: var(--gds-sys-radius-m);
  }

  .data:focus {
    outline: none;
  }

  .table-card {
    outline-color: transparent;
    outline-offset: var(--gds-sys-space-4xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-4xs);
  }

  .table-card:has(.data:focus-visible) {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  .table-card:has(.data:focus-within:not(:focus-visible)) {
    outline-color: transparent;
  }

  table {
    width: max-content;
    min-width: 100%;
    table-layout: auto;
    border: none;
    border-collapse: separate;
    border-spacing: var(--table-border-spacing);
  }

  tbody td {
    font-weight: normal;
    padding-block: var(--table-cell-padding-y);
    padding-inline: var(--table-cell-padding-x);
  }

  thead tr th:first-child,
  tbody tr:hover td:first-child,
  tbody tr.selected td:first-child,
  .striped tbody tr td:first-child {
    border-top-left-radius: var(--gds-sys-radius-s);
    border-bottom-left-radius: var(--gds-sys-radius-s);
  }

  thead tr th:last-child,
  tbody tr:hover td:last-child,
  tbody tr.selected td:last-child,
  .striped tbody tr td:last-child {
    border-top-right-radius: var(--gds-sys-radius-s);
    border-bottom-right-radius: var(--gds-sys-radius-s);
  }

  /* Table Header */

  thead tr th {
    padding-block: var(--gds-sys-space-3xs);
    background: var(--_table-header-bg);
  }

  thead th.sortable {
    cursor: pointer;
    user-select: none;
  }

  /* Column header content layout */
  .column-header {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    min-height: var(--gds-sys-space-l);
    gap: var(--table-gap);
    padding: calc(var(--table-cell-padding-y) / 2) var(--table-cell-padding-x);
    border-radius: var(--gds-sys-radius-xs);
    transition: all var(--gds-sys-motion-duration-fast);
  }

  th.sortable .column-header:hover {
    background-color: var(--_table-header-hover);
  }

  th.sortable:active .column-header {
    background-color: var(--_table-header-active);
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
  }

  @media (hover: hover) and (min-width: 768px) {
    thead th.sortable:hover:not(.sorted) .sort-icon {
      opacity: 0.8;
    }
  }

  thead th.sorted .sort-icon {
    opacity: 1;
  }

  /* Table Body */

  tbody tr td {
    border-top-style: solid;
    border-top-width: var(--_table-border-width);
    border-top-color: var(--_table-border-color);
  }

  tbody tr.loading {
    opacity: 0.3;
    pointer-events: none;
  }

  tbody tr.loading:not(:first-child) td {
    border-color: var(--gds-sys-color-border-neutral-03);
  }

  /* Row Selection */

  .checkbox-cell {
    min-width: var(--gds-sys-space-l);
    width: var(--gds-sys-space-l);
    max-width: var(--gds-sys-space-l);
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  tbody tr:hover td,
  tbody tr.selected td,
  tbody tr:first-child td {
    border-color: transparent;
  }

  tbody tr:hover + tr td,
  tbody tr.selected + tr td {
    border-color: transparent;
  }

  tbody tr.selected:last-child td {
    border-bottom-color: transparent;
  }

  tbody tr.selected {
    background-color: var(--gds-sys-color-l3-neutral-02);
  }

  @media (hover: hover) and (min-width: 768px) {
    tbody tr.selected:hover {
      background-color: var(--_table-row-selected-hover);
    }

    tbody tr:hover:not(.selected) {
      background-color: var(--_table-row-hover);
    }
  }

  tbody tr:hover,
  tbody tr:hover + tr {
    border-color: transparent;
  }

  /* Striped */
  .striped tbody tr:not(.selected, :hover):nth-child(even) td {
    background-color: var(--_table-row-striped);
  }

  .striped tbody tr td {
    border-color: transparent;
  }

  /* Header & Footer Layout */

  .header {
    display: flex;
    justify-content: space-between;
    transition-property: opacity, translate;
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-timing-function: var(--gds-sys-motion-easing-ease);

    @starting-style {
      opacity: 0;
      translate: 0 -2px;
    }
  }

  /* Shared layout for header and footer sections */
  .header .lead,
  .header .trail {
    display: flex;
    align-items: center;
    gap: calc(var(--table-gap) * 0.8);
    width: max-content;
  }

  /* Cell Content & Alignment */

  .cell-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* Wrapping utilities */
  td.wrap .cell-content {
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  td.wrap,
  th.wrap {
    width: var(--cell-width);
  }

  /* Justify utilities */

  .justify-start .cell-content {
    text-align: left;
    justify-content: start;
  }

  .justify-center .cell-content {
    text-align: center;
    justify-content: center;
  }

  .justify-space-between .cell-content {
    text-align: left;
    justify-content: space-between;
  }

  .justify-end .cell-content {
    text-align: right;
    justify-content: flex-end;
  }

  .justify-end:not(.sortable) .column-header {
    text-align: right;
    justify-content: flex-end;
  }

  .sortable.justify-end .column-header {
    flex-direction: row-reverse;
  }

  th.actions {
    padding-inline: 0;
  }

  th.actions.justify-end .column-header {
    justify-content: flex-end;
  }

  /* Sticky actions column */
  th.actions.sticky,
  td.actions-cell.sticky {
    position: sticky;
    right: calc(-1 * var(--table-data-padding-x, 0px));
    z-index: 1;
    width: max-content;
    padding-right: calc(
      var(--table-cell-padding-x) + var(--table-data-padding-x, 0px)
    );
  }

  th.actions.sticky {
    z-index: 2;
    background: var(--_table-header-bg);
  }

  th.actions.sticky .column-header {
    justify-content: flex-end;
  }

  td.actions-cell.sticky {
    background: var(--_table-card-bg);
  }

  td.actions-cell.sticky .cell-content {
    justify-content: flex-end;
    position: relative;
  }

  /* Left gradient fade on sticky action cells */
  td.actions-cell.sticky::before {
    content: '';
    position: absolute;
    inset-block: 0;
    right: 100%;
    width: var(--gds-sys-space-4xl);
    pointer-events: none;
    background: linear-gradient(to right, transparent, var(--_table-card-bg));
  }

  th.actions.sticky::before {
    content: '';
    position: absolute;
    inset-block: 0;
    right: 100%;
    width: var(--gds-sys-space-4xl);
    pointer-events: none;
    background: linear-gradient(to right, transparent, var(--_table-header-bg));
  }

  /* Sticky action inherits row hover/selected/striped backgrounds */
  tbody tr:hover td.actions-cell.sticky {
    background: var(--_table-row-hover);
  }

  tbody tr:hover td.actions-cell.sticky::before {
    background: linear-gradient(to right, transparent, var(--_table-row-hover));
  }

  tbody tr.selected td.actions-cell.sticky {
    background: var(--gds-sys-color-l3-neutral-02);
  }

  tbody tr.selected td.actions-cell.sticky::before {
    background: linear-gradient(
      to right,
      transparent,
      var(--gds-sys-color-l3-neutral-02)
    );
  }

  tbody tr.selected:hover td.actions-cell.sticky {
    background: var(--_table-row-selected-hover);
  }

  tbody tr.selected:hover td.actions-cell.sticky::before {
    background: linear-gradient(
      to right,
      transparent,
      var(--_table-row-selected-hover)
    );
  }

  .striped
    tbody
    tr:not(.selected, :hover):nth-child(even)
    td.actions-cell.sticky {
    background: var(--_table-row-striped);
  }

  .striped
    tbody
    tr:not(.selected, :hover):nth-child(even)
    td.actions-cell.sticky::before {
    background: linear-gradient(
      to right,
      transparent,
      var(--_table-row-striped)
    );
  }

  /* Table Footer Row */

  tfoot.tablefoot tr td,
  tfoot.tablefoot tr th[scope='row'] {
    padding-block: var(--table-cell-padding-y);
    padding-inline: var(--table-cell-padding-x);
    background: var(--_table-header-bg);
    font-weight: normal;
    border-top: var(--_table-border-width) solid var(--_table-border-color);
  }

  tfoot.tablefoot tr th[scope='row'] {
    font-weight: var(--gds-sys-text-weight-book);
  }

  tfoot.tablefoot tr td:first-child,
  tfoot.tablefoot tr th:first-child {
    border-top-left-radius: var(--gds-sys-radius-s);
    border-bottom-left-radius: var(--gds-sys-radius-s);
  }

  tfoot.tablefoot tr td:last-child,
  tfoot.tablefoot tr th:last-child {
    border-top-right-radius: var(--gds-sys-radius-s);
    border-bottom-right-radius: var(--gds-sys-radius-s);
  }

  .tablefoot-label {
    font-weight: var(--gds-sys-text-weight-book);
    white-space: nowrap;
  }

  tfoot.tablefoot.sticky {
    position: sticky;
    bottom: 0;
    z-index: 10;
    will-change: transform;
  }

  /* When sticky tablefoot: move padding from .data to table, keep tfoot edge-to-edge */
  .data:has(tfoot.tablefoot.sticky) {
    padding: 0;
  }

  .data:has(tfoot.tablefoot.sticky) table {
    padding-top: var(--table-data-padding-x);
    padding-inline: var(--table-data-padding-x);
  }

  tfoot.tablefoot.sticky tr td,
  tfoot.tablefoot.sticky tr th[scope='row'] {
    border-radius: 0;
    background: var(--_table-card-bg);
    border-top: var(--_table-border-width) solid var(--_table-border-color);
  }

  /* Align utilities */
  td {
    height: 100%;
  }

  .align-start {
    vertical-align: top;
  }

  .align-end {
    vertical-align: bottom;
  }

  .align-center {
    vertical-align: middle;
  }

  .align-start .cell-content {
    align-items: start;
  }

  .align-center .cell-content {
    align-items: center;
  }

  .align-stretch .cell-content {
    align-items: stretch;
  }

  .align-end .cell-content {
    align-items: end;
  }

  /* Responsive Design */

  @media (max-width: 760px) {
    .responsive.data {
      display: contents;
    }

    .responsive table {
      max-width: 100%;
    }

    .responsive thead {
      position: sticky;
      top: var(--gds-sys-space-s);
      z-index: 2;
      border-radius: var(--gds-sys-radius-s);
    }

    .responsive thead {
      display: none;
    }

    .responsive tbody {
      display: flex;
      flex-direction: column;
      gap: var(--table-gap);
    }

    .responsive tbody tr {
      display: flex;
      flex-direction: column;
      padding: var(--table-cell-padding-x);
      border: var(--gds-sys-space-5xs) solid
        var(--gds-sys-color-border-neutral-02);
      border-radius: var(--gds-sys-space-s);
      margin: 0;
    }

    .responsive tbody tr:hover,
    .responsive tbody tr:hover + tr {
      border-color: var(--gds-sys-color-border-neutral-02);
    }

    .responsive tr.selected {
      border-color: transparent;
    }

    .responsive td {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: var(--gds-sys-space-xs) 0;
      border: none;
    }

    .responsive td .column-label {
      text-align: left;
      flex: 1;
      min-width: 0;
    }

    .responsive td .cell-content {
      justify-content: flex-start;
      flex: 1;
      width: 100%;
      gap: var(--gds-sys-space-s);
    }

    .responsive td .cell-wrapped-content {
      flex: 1;
      justify-content: flex-end;
      text-align: right;
    }

    .responsive tr:hover,
    .responsive tr td:hover {
      background: none;
    }
  }

  /* Medium screens: input and dropdown side by side */
  @media (max-width: 760px) and (min-width: 480px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'input dropdown'
        'lead trail';
      gap: calc(var(--table-gap) / 2);
    }

    .header .lead [gds-element='gds-input'] {
      grid-area: input;
    }

    .header .trail [gds-element='gds-dropdown'] {
      grid-area: dropdown;
    }

    .header .lead ::slotted(*:not([gds-element='gds-input'])) {
      grid-area: lead;
    }

    .header .trail ::slotted(*:not([gds-element='gds-dropdown'])) {
      grid-area: trail;
    }

    .header .lead,
    .header .trail {
      display: contents;
    }
  }

  /* Small screens: fully stacked */
  @media (max-width: 479px) {
    .header {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        'input'
        'dropdown'
        'lead'
        'trail';
      gap: calc(var(--table-gap) / 2);
    }

    .header .lead [gds-element='gds-input'] {
      grid-area: input;
    }

    .header .trail [gds-element='gds-dropdown'] {
      grid-area: dropdown;
    }

    .header .lead ::slotted(*:not([gds-element='gds-input'])) {
      grid-area: lead;
    }

    .header .trail ::slotted(*:not([gds-element='gds-dropdown'])) {
      grid-area: trail;
    }

    .header .lead,
    .header .trail {
      display: contents;
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
    border-radius: var(--gds-sys-radius-3xs);
  }

  .skeleton-action {
    height: 24px;
    width: 24px;
    border-radius: var(--gds-sys-radius-max);
  }

  /* Skeleton row styling */
  .skeleton-row {
    opacity: 1;
    pointer-events: none;
  }

  .skeleton-row td {
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  /* Different skeleton text widths for more natural look */
  .skeleton-row:nth-child(odd) .skeleton-text {
    width: 70%;
  }

  .skeleton-row:nth-child(3n) .skeleton-text {
    width: 90%;
  }

  .skeleton-row:nth-child(4n) .skeleton-text {
    width: 60%;
  }

  /* Visually hidden - screen reader only without layout impact */
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    height: 0px;
    width: 0px;
  }

  /* Scroll driven animation */
  @supports (animation-timeline: scroll()) {
    @media (prefers-reduced-motion: no-preference) {
      tbody tr {
        animation-name: ROW_ANIMATION_VERTICAL, ROW_ANIMATION_VERTICAL;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
        animation-direction: normal, reverse;
        animation-timeline: view(block);
        animation-range:
          entry -40px,
          exit -40px;
      }

      @keyframes ROW_ANIMATION_VERTICAL {
        0% {
          opacity: 0;
          filter: blur(12px);
          translate: 0 12px;
        }
      }

      thead {
        position: sticky;
        top: 4px;
        z-index: 10;
        transition: box-shadow 200ms ease;
        border-radius: var(--gds-sys-radius-s);
        will-change: transform;
      }

      thead {
        background-color: var(--gds-sys-color-l1-neutral-01);
      }

      .data.scrolled thead {
        box-shadow:
          var(--gds-sys-shadow-l-01),
          var(--gds-sys-shadow-l-02),
          inset 0 -4px 6px var(--gds-sys-color-l1-neutral-01);
        backdrop-filter: blur(8px);
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l2-neutral-01),
          transparent 30%
        );
      }

      @media (prefers-reduced-transparency: no-preference) {
        .data.scrolled thead tr th {
          background: transparent;
        }
      }

      /* Sticky table footer */
      tfoot.tablefoot.sticky {
        background-color: var(--_table-card-bg);
      }

      tfoot.tablefoot.sticky tr td,
      tfoot.tablefoot.sticky tr th[scope='row'] {
        background: var(--_table-card-bg);
      }

      /* Horizontal scroll */
      @property --_start-fade {
        syntax: '<length>';
        inherits: false;
        initial-value: 0;
      }

      @property --_end-fade {
        syntax: '<length>';
        inherits: false;
        initial-value: 0;
      }

      @keyframes scroll-fade {
        0% {
          --_start-fade: 0px;
          --_end-fade: var(--gds-sys-space-4xl);
        }
        1% {
          --_start-fade: var(--gds-sys-space-4xl);
          --_end-fade: var(--gds-sys-space-4xl);
        }
        99% {
          --_start-fade: var(--gds-sys-space-4xl);
          --_end-fade: var(--gds-sys-space-4xl);
        }
        100% {
          --_start-fade: var(--gds-sys-space-4xl);
          --_end-fade: 0px;
        }
      }

      .data {
        overflow-x: auto;
        mask: linear-gradient(
          to right,
          #0000,
          #ffff var(--_start-fade) calc(100% - var(--_end-fade)),
          #0000
        );
        animation: scroll-fade both linear;
        animation-timeline: scroll(self inline);
      }

      /* When sticky actions are present, remove the right fade.*/
      .data:has(td.actions-cell.sticky) {
        mask: linear-gradient(
          to right,
          #0000,
          #ffff var(--_start-fade),
          #ffff 100%
        );
      }
    }
  }

  @media (max-width: 760px) {
    .responsive,
    .responsive tbody tr {
      animation: none;
    }
  }

  @supports not (animation-timeline: scroll()) {
    tbody tr {
      will-change: opacity, filter, translate;
      transition: all 242ms cubic-bezier(0.22, 0.61, 0.36, 1);

      @starting-style {
        opacity: 0;
        filter: blur(20px);
        translate: 0 10px;
      }
    }
  }

  /* Scrollbar */
  .data {
    --_scrollbar-color-thumb: var(--gds-sys-color-content-neutral-02);
    --_scrollbar-color-track: var(--gds-sys-color-l3-neutral-02);
    --_scrollbar-width: var(--gds-sys-space-2xs);
  }

  @supports (scrollbar-width: auto) {
    .data {
      scrollbar-color: var(--_scrollbar-color-thumb) transparent;
      scrollbar-width: var(--_scrollbar-width);
    }
  }

  @supports selector(::-webkit-scrollbar) {
    .data::-webkit-scrollbar {
      width: var(--_scrollbar-width);
      height: var(--_scrollbar-width);
    }

    .data::-webkit-scrollbar-track {
      background: transparent;
    }

    .data::-webkit-scrollbar-thumb {
      background: var(--_scrollbar-color-thumb);
      border-radius: var(--gds-sys-radius-max);
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    tbody tr,
    tbody td .cell-content,
    thead th .column-header,
    .sort-icon,
    .column-header,
    .header {
      transition: none;
      animation: none;
    }
  }
`,de=[Tt,It,ne],ce=[Lt,Wt,Vt,ee,Ht,Ot,Pt,se,re,ie,Qt,ae,Ut,qt,Yt,te,Zt,Ft,Jt,Kt,Xt],he={compact:{input:"small",dropdown:"small"},comfortable:{input:"small",dropdown:"small"},spacious:{input:"large",dropdown:"medium"}},P=t=>typeof t=="object"&&t!==null&&Array.isArray(t.slots),pe={toString(){return String(this.value??"")},valueOf(){return this.value},[Symbol.toPrimitive](t){return t==="number"?Number(this.value):String(this.value??"")}};function Ns(t,e=["value"],s){if(P(t))return t;let r=["value"],n;return Array.isArray(e)?r=e:(typeof e=="string"||typeof e=="number")&&(n=e),Array.isArray(s)&&(r=s),Object.assign(Object.create(pe),{value:t,slots:r,...typeof n<"u"?{key:n}:{}})}var ge=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,H=t=>{throw TypeError(t)},d=(t,e,s,r)=>{for(var n=r>1?void 0:r?ue(e,s):e,p=t.length-1,g;p>=0;p--)(g=t[p])&&(n=(r?g(e,s,n):g(n))||n);return r&&n&&ge(e,s,n),n},D=(t,e,s)=>e.has(t)||H("Cannot "+s),f=(t,e,s)=>(D(t,e,"read from private field"),s?s.call(t):e.get(t)),S=(t,e,s)=>e.has(t)?H("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),N=(t,e,s,r)=>(D(t,e,"write to private field"),e.set(t,s),s),i=(t,e,s)=>(D(t,e,"access private method"),s),w,T,a,C,O,$,Q,j,W,b,I,A,V,L,U,q,F,J,K,Y,X,Z,tt,et,st,at,rt,it,z,ot,lt,nt,dt,ct,ht,pt,gt,ut,bt,G,yt,ft,vt,mt,wt,_t,E,R,_,xt,kt,$t;let l=class extends Et{constructor(){super(...arguments),S(this,a),S(this,w,{}),S(this,T,300*1e3),this.headlineTag="h2",this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.disableSelectAll=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="neutral-02-outlined",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){N(this,w,{}),i(this,a,b).call(this)}_onPageChange(){this._view={...this._view,page:Number(this.page??1)},i(this,a,b).call(this)}_onRowsChange(){this._view={...this._view,rows:Number(this.rows??10),page:1},i(this,a,b).call(this)}_onColumnsChange(){N(this,w,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(t=>t.visible!==!1).map(t=>t.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{i(this,a,xt).call(this)})}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return o`
      <div class="${u(t)}">
        ${[i(this,a,ut).call(this),i(this,a,J).call(this),y(this._error,()=>i(this,a,ht).call(this),()=>y(this._rowsState.length===0&&!this._loading,()=>i(this,a,pt).call(this),()=>i(this,a,ct).call(this))),i(this,a,gt).call(this)]}
      </div>
    `}clearSelection(){i(this,a,R).call(this),i(this,a,_).call(this)}selectAll(){i(this,a,E).call(this),i(this,a,_).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this._rowsState.length);this._selected=new Set(e),i(this,a,_).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}};w=new WeakMap;T=new WeakMap;a=new WeakSet;C=function(){return he[this.density]};O=function(){return this._selected.size>0};$=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};Q=function(){return f(this,a,O)&&!f(this,a,$)};j=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};W=function(t){return Date.now()-t.timestamp<f(this,T)};b=async function(){if(this.data){if(!this.nocache){const t=i(this,a,j).call(this),e=f(this,w)[t];if(e&&i(this,a,W).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{rows:e.rows,total:e.total,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0});return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=i(this,a,j).call(this);f(this,w)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{...t,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0})}catch(t){this._error=t,this.dispatchCustomEvent("gds-table-data-error",{detail:t,bubbles:!0})}finally{this._loading=!1}}};I=function(t,e,s){if(typeof s=="string"||typeof s=="number")return s;const r=t==null?void 0:t.id;return typeof r=="string"||typeof r=="number"?r:e+1};A=function(t){return o`<span class="cell-wrapped-content">${t}</span>`};V=function(t){return o`<span class="column-label" aria-hidden="true">
      ${t.label}:
    </span>`};L=function(t,e,s){const r=`${t}:${e}:${s}`;return o`<slot name="${r}"></slot>`};U=function(t,e,s){const r=e.value?e.value(t):t[e.key],n=this._isMobile&&this.responsive,p=!!e.justify;let g;if(P(r)){const M=i(this,a,I).call(this,t,s,r.key);g=r.slots.map(v=>v==="value"?r.value===void 0?null:p?i(this,a,A).call(this,r.value):r.value:i(this,a,L).call(this,e.key,M,v))}else g=p?i(this,a,A).call(this,r):r;return o`
      <div
        class="cell-content"
        aria-label=${Mt(n?e.label:void 0)}
      >
        ${n?i(this,a,V).call(this,e):null} ${g}
      </div>
    `};q=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;return e?s==="asc"?o`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:o`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:o`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};F=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};J=function(){return this.plain||!i(this,a,F).call(this)?null:o`
      <div class="header">
        <div class="lead">
          ${y(this.searchable,()=>o`
              <gds-input
                type="text"
                size="${f(this,a,C).input}"
                plain
                clearable
                label="${this.searchLabel||h("Search table")}"
                .value=${this._view.searchQuery}
                @input=${i(this,a,bt)}
                @gds-input-cleared=${i(this,a,G)}
                width="100%; l{240px}"
                min-width="240px"
              >
                <gds-icon-magnifying-glass
                  slot="lead"
                ></gds-icon-magnifying-glass>
              </gds-input>
            `)}
          <slot name="header-lead"></slot>
        </div>
        <div class="trail">
          <slot name="header-trail"></slot>
          ${y(this.settings,()=>o`
              <gds-dropdown
                multiple
                plain
                size="${f(this,a,C).dropdown}"
                label="${h("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${i(this,a,mt)}
              >
                <span slot="trigger">${h("Columns")}</span>
                ${this.columns.map(t=>o`
                    <gds-option
                      value=${t.key}
                      ?selected=${this._view.visibleColumns.has(t.key)}
                    >
                      ${t.label}
                    </gds-option>
                  `)}
              </gds-dropdown>
            `)}
        </div>
      </div>
    `};K=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;let r=t.label;if(t.sortable)if(e){const g=s==="asc"?h("ascending"):h("descending");r=`${t.label}, ${h("sorted")} ${g}`}else r=`${t.label}, ${h("sortable")}`;const n=u({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify,wrap:!!t.width}),p=k({"--cell-width":t.width});return o`
      <th
        class=${n}
        style=${p}
        aria-sort="${e?s==="asc"?"ascending":"descending":"none"}"
        @click=${t.sortable?()=>i(this,a,yt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${r}">
            ${t.label}
          </span>
          ${y(t.sortable,()=>o`
              <span class="sort-icon">${i(this,a,q).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};Y=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||h("Actions"),e=u({actions:!0,sticky:!!this.actions.sticky,wrap:!!this.actions.width,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify}),s=k({"--cell-width":this.actions.width});return o`
      <th class="${e}" style=${s}>
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};X=function(){return this.selectable?o`
      <th class="checkbox-cell">
        ${i(this,a,z).call(this,{checked:f(this,a,$),indeterminate:f(this,a,Q),ariaLabel:h("Select all rows"),onToggle:()=>i(this,a,wt).call(this,{}),skip:this.disableSelectAll})}
      </th>
    `:null};Z=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>i(this,a,K).call(this,t))};tt=function(){return o`
      <thead>
        <tr>
          ${[i(this,a,X).call(this),i(this,a,Z).call(this),i(this,a,Y).call(this)]}
        </tr>
      </thead>
    `};et=function(t,e,s){const r=u({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),n=k({"--cell-width":e.width});return o`
      <td style=${n} class=${r}>
        ${i(this,a,U).call(this,t,e,s)}
      </td>
    `};st=function(t){if(!this.selectable)return null;const e=`${h("Select row")} ${t+1}`;return o`
      <td class="checkbox-cell">
        ${i(this,a,z).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>i(this,a,_t).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
      </td>
    `};at=function(t,e){return this.columns.filter(s=>this._view.visibleColumns.has(s.key)).map(s=>i(this,a,et).call(this,t,s,e))};rt=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return o`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=i(this,a,I).call(this,t,e),r=u({"actions-cell":!0,sticky:!!this.actions.sticky,wrap:!!this.actions.width,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify}),n=k({"--cell-width":this.actions.width});return o`
      <td class="${r}" style=${n}>
        <div class="cell-content">
          ${i(this,a,L).call(this,"actions",s,"main")}
        </div>
      </td>
    `};it=function(t,e){return o`
      <tr
        class=${u({selected:this._selected.has(e),loading:this._loading})}
      >
        ${[i(this,a,st).call(this,e),i(this,a,at).call(this,t,e),i(this,a,rt).call(this,t,e)]}
      </tr>
    `};z=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:r,onToggle:n,skip:p=!1}){if(p)return null;const g=v=>{v.stopPropagation(),!s&&n()};return o`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${r}
        @click=${g}
        @keydown=${v=>{(v.key===" "||v.key==="Enter")&&(v.preventDefault(),g(v))}}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${t}
          .indeterminate=${e}
          ?disabled=${s}
          aria-hidden="true"
          @change=${g}
        />
        ${oe({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};ot=function(t){const s=this._isMobile&&this.responsive?o`<span class="skeleton skeleton-text"></span>`:null;return o`
      <div class="cell-content">
        ${s}
        <span class="skeleton skeleton-text"></span>
      </div>
    `};lt=function(t){return o`
      <tr class="skeleton-row">
        ${y(this.selectable,()=>o`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>o`<td>${i(this,a,ot).call(this,e)}</td>`)}
        ${y(this.actions,()=>o`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};nt=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,s)=>i(this,a,lt).call(this,s));return o`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return o`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>i(this,a,it).call(this,t,e))}
      </tbody>
    `};dt=function(){if(!this.tfoot)return null;const t=this.tfoot.label,e=this.columns.filter(r=>this._view.visibleColumns.has(r.key)),s=u({tablefoot:!0,sticky:!!this.tfoot.sticky});return o`
      <tfoot class=${s}>
        <tr>
          ${y(this.selectable,()=>o`<td class="checkbox-cell"></td>`)}
          ${e.map((r,n)=>{const p=u({"tablefoot-cell":!0,"tablefoot-label-cell":n===0,[`align-${r.align}`]:!!r.align,[`justify-${r.justify}`]:!!r.justify,wrap:!!r.width}),g=k({"--cell-width":r.width});return n===0&&t?o`
                <th scope="row" class=${p} style=${g}>
                  <div class="cell-content">
                    <span class="tablefoot-label">${t}</span>
                    <slot name="tfoot:${r.key}"></slot>
                  </div>
                </th>
              `:o`
              <td class=${p} style=${g}>
                <div class="cell-content">
                  <slot name="tfoot:${r.key}"></slot>
                </div>
              </td>
            `})}
          ${y(this.actions,()=>{const n=this.actions&&typeof this.actions!="function"&&this.actions.sticky,p=u({"actions-cell":!0,"tablefoot-cell":!0,sticky:!!n});return o`<td class=${p}>
              <div class="cell-content">
                <slot name="tfoot:actions"></slot>
              </div>
            </td>`})}
        </tr>
      </tfoot>
    `};ct=function(){const t=u({responsive:this.responsive,data:!0,[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),e=`${this.summary?this.summary+", ":""}${h("Data table with")} ${this._total} ${h("rows")}`;return o`
      <gds-card
        variant="${this.variant}"
        padding="0"
        border-radius="m"
        border-width="${this.responsive?"0; s{5xs}":"5xs"}"
        class="table-card"
      >
        <div class=${t} tabindex="0">
          <table aria-label="${e}">
            <caption class="visually-hidden">
              ${e}
            </caption>
            ${i(this,a,tt).call(this)} ${i(this,a,nt).call(this)}
            ${i(this,a,dt).call(this)}
          </table>
        </div>
      </gds-card>
    `};ht=function(){return o`
      <gds-card variant="neutral-02" border-radius="m" outline>
        <slot name="error">
          <gds-text tag="p">${h("Error loading data")}</gds-text>
          <gds-button
            size="small"
            label="${h("Retry loading data")}"
            @click=${()=>i(this,a,b).call(this)}
          >
            ${h("Retry")}
          </gds-button>
        </slot>
      </gds-card>
    `};pt=function(){return this._view.searchQuery.length>0?o`
        <gds-card variant="neutral-02" border-radius="m" outline>
          <slot name="no-results">
            <gds-flex flex-direction="column" align-items="flex-start" gap="s">
              <gds-text tag="p" font="heading-s">
                ${h("No results found")}
              </gds-text>
              <gds-text tag="p" font="detail-s-book">
                ${h("No results for")} "${this._view.searchQuery}"
              </gds-text>
              <gds-button
                size="small"
                label="${h("Clear search for")} ${this._view.searchQuery}"
                @click=${i(this,a,G)}
              >
                ${h("Clear search")}
              </gds-button>
            </gds-flex>
          </slot>
        </gds-card>
      `:o`
      <gds-card variant="neutral-02" border-radius="m" outline>
        <slot name="empty">
          <gds-text tag="p" font="heading-s">
            ${h("No data available")}
          </gds-text>
        </slot>
      </gds-card>
    `};gt=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),s=`${t}–${e} ${h("of")} ${this._total}`;return o`
      <slot name="footer">
        <gds-pagination
          .page=${this._view.page}
          .rows=${this._view.rows}
          .options=${this.options}
          .total=${this._total}
          .density=${this.density}
          .label=${s}
          @gds-page-change=${i(this,a,ft)}
          @gds-rows-change=${i(this,a,vt)}
          width="100%"
        >
        </gds-pagination>
      </slot>
    `};ut=function(){if(this.headline||this.summary)return o`
        <gds-flex flex-direction="column" gap="4xs">
          <gds-text
            tag="${this.headlineTag}"
            font="heading-s"
            text-wrap="pretty"
            max-width="80ch"
          >
            ${this.headline}
          </gds-text>
          <gds-text
            tag="p"
            font=${this.density==="compact"?"body-s-regular":"body-m-regular"}
            text-wrap="pretty"
            max-width="80ch"
          >
            ${this.summary}
          </gds-text>
        </gds-flex>
        ${y(this.searchable||this.settings,()=>o`<gds-divider color="subtle-01"></gds-divider>`,()=>o``)}
      `};bt=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await i(this,a,b).call(this)};G=async function(){this._view={...this._view,searchQuery:"",page:1},await i(this,a,b).call(this)};yt=async function(t){const e=this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc";this._view={...this._view,sortColumn:t,sortDirection:e,page:1},this.dispatchCustomEvent("gds-sort-change",{detail:{sortColumn:t,sortDirection:e},bubbles:!0}),await i(this,a,b).call(this)};ft=async function(t){this._view={...this._view,page:t.detail.page},this.dispatchCustomEvent("gds-page-change",{detail:t.detail,bubbles:!0}),await i(this,a,b).call(this)};vt=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},this.dispatchCustomEvent("gds-rows-change",{detail:t.detail,bubbles:!0}),await i(this,a,b).call(this)};mt=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};wt=function(t){f(this,a,$)?i(this,a,R).call(this):i(this,a,E).call(this),i(this,a,_).call(this)};_t=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),i(this,a,_).call(this),this.requestUpdate()};E=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};R=function(){this._selected.clear(),this.requestUpdate()};_=function(){this.dispatchCustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0})};xt=function(){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".data");if(!t)return;const e=()=>{i(this,a,kt).call(this,t),i(this,a,$t).call(this,t)};t.addEventListener("scroll",e),e()};kt=function(t){const{scrollTop:e,scrollHeight:s,clientHeight:r}=t,n=s-r;e>0?t.classList.add("scrolled"):t.classList.remove("scrolled"),e<n-1?t.classList.add("scrolled-bottom"):t.classList.remove("scrolled-bottom")};$t=function(t){const{scrollLeft:e,scrollWidth:s,clientWidth:r}=t,n=s-r;e<=0?(t.classList.add("scrolled-x-start"),t.classList.remove("scrolled-x-middle","scrolled-x-end")):e>=n-1?(t.classList.add("scrolled-x-end"),t.classList.remove("scrolled-x-start","scrolled-x-middle")):(t.classList.add("scrolled-x-middle"),t.classList.remove("scrolled-x-start","scrolled-x-end"))};l.styles=de;d([c()],l.prototype,"headline",2);d([c({attribute:"headline-tag",type:String,reflect:!0})],l.prototype,"headlineTag",2);d([c()],l.prototype,"summary",2);d([c({attribute:"search-label",type:String})],l.prototype,"searchLabel",2);d([c({type:Array})],l.prototype,"options",2);d([c({type:Number})],l.prototype,"page",2);d([c({type:Number})],l.prototype,"rows",2);d([c({type:Array})],l.prototype,"columns",2);d([c()],l.prototype,"data",2);d([c({reflect:!1})],l.prototype,"density",2);d([c({type:Boolean,reflect:!1})],l.prototype,"selectable",2);d([c({attribute:"disable-select-all",type:Boolean,reflect:!1})],l.prototype,"disableSelectAll",2);d([c({type:Boolean,reflect:!1})],l.prototype,"responsive",2);d([c({type:Boolean,reflect:!1})],l.prototype,"plain",2);d([c({type:Boolean,reflect:!1})],l.prototype,"searchable",2);d([c({type:Boolean,reflect:!1})],l.prototype,"settings",2);d([c({type:Boolean,reflect:!1})],l.prototype,"striped",2);d([c()],l.prototype,"actions",2);d([c({type:Boolean,reflect:!1})],l.prototype,"nocache",2);d([c({type:Object})],l.prototype,"tfoot",2);d([c()],l.prototype,"dataLoadKey",2);d([zt({...Gt,property:"--_table-height",selector:".data"})],l.prototype,"height",2);d([c()],l.prototype,"variant",2);d([m()],l.prototype,"_isMobile",2);d([Bt("(max-width: 768px)")],l.prototype,"_handleMobile",1);d([m()],l.prototype,"_view",2);d([m()],l.prototype,"_loaded",2);d([m()],l.prototype,"_loading",2);d([m()],l.prototype,"_rowsState",2);d([m()],l.prototype,"_total",2);d([m()],l.prototype,"_selected",2);d([m()],l.prototype,"_error",2);d([x("dataLoadKey"),x("data")],l.prototype,"_onDataChange",1);d([x("page",{waitUntilFirstUpdate:!0})],l.prototype,"_onPageChange",1);d([x("rows",{waitUntilFirstUpdate:!0})],l.prototype,"_onRowsChange",1);d([x("columns")],l.prototype,"_onColumnsChange",1);l=d([Nt(),Rt("gds-table",{dependsOn:ce})],l);l.define();export{Ns as S};
