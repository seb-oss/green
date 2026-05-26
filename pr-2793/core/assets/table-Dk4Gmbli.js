import{Z as ve,W as we,Y as me,af as xe,i as _e,E as ke,al as $e,Q as Ce,n as f,a0 as Se,ag as Ee,H as y,a7 as T,g as Re,I as Ae,J as Le,a as w,d as m,h as o,O as b,o as $}from"./iframe-CL7Bfxf7.js";import{l as ze}from"./localized-decorator-VhPkI65L.js";import{w as De}from"./popover.component-B3X5AUZg.js";import{a as Te}from"./dropdown.component-CUlTR8QX.js";import"./menu-heading.component-CWS4rdDH.js";import{a as Ie,G as je}from"./context-menu.component-BI1GYGrh.js";import"./alert.component-AG07F2fX.js";import"./avatar.component-CdtlFLDu.js";import{G as Ge}from"./badge.component-CO1hjxts.js";import"./blur.component-DOq0Q04V.js";import"./breadcrumb.component-CGZHtIin.js";import"./calendar.component-DK-4p13P.js";import{G as Me}from"./card.component-Bu3LyXSj.js";import"./card-linked.component-BS99RTHY.js";import"./checkbox-group.component-CmCm9abD.js";import"./coachmark.component-CVR62Lht.js";import"./datepicker.component-BLVw-4Jt.js";import"./details.component-C3FFyIZC.js";import"./dialog-CkV-_ejj.js";import{G as Be}from"./divider-2KgErvhz.js";import"./signal.component-CS7b70Mj.js";import"./filter-chips.component-CaGf-3yS.js";import{G as qe}from"./flex.component-C4sihmBH.js";import"./summary.component-fqE85dus.js";import"./grouped-list.component-zdbWtFCY.js";import"./icon.component-CIs8Df4J.js";import{I as Pe,a as Fe,b as We,c as Ue,d as He,e as Ne}from"./zoom-out.component-C1jX-l3T.js";import"./arrow-down.component-DtRtD1NX.js";import"./arrow-left.component-DUb64p4j.js";import"./arrow-right.component-nklGRa1h.js";import"./arrow-rotate-counter-clockwise.component-w7XVIkco.js";import"./arrow-up.component-v_rzMJQq.js";import"./sun.component-CW8XeDPG.js";import"./star.component-B6FF-O_U.js";import"./bubbles.component-C31KzgPr.js";import"./calender-add.component-gJman5Jv.js";import"./chain-link-BDVjoqcV.js";import"./checkmark.component-XebMgf-Y.js";import{I as Qe}from"./chevron-bottom.component-1CnJTZdt.js";import"./chevron-right-small.component-C0ZW78ko.js";import"./chevron-left.component-Cd-_uHrS.js";import"./chevron-right.component-4ftXW-90.js";import{I as Ve}from"./chevron-top.component-D69_cGOF.js";import"./circle-check.component-CwgDMsiG.js";import"./circle-info.component-CR2afvsu.js";import"./circles-three.component-B64ua8p2.js";import"./cloudy-sun.component-Dp3JPAKf.js";import"./credit-card.component-Crq_7Pvf.js";import"./cross-large.component-D5CjwU12.js";import{I as Ke}from"./cross-small.component-Cbur2-2c.js";import{I as Oe}from"./dot-grid-one-horizontal-B7eSeRle.js";import"./folder.component-BmycL7yf.js";import{I as Je}from"./magnifying-glass.component-BghPF8Se.js";import{I as Ze}from"./minus-small.component-u3s526_l.js";import"./people-profile.component-DNCt-dUL.js";import"./push.component-DZBLSvQh.js";import"./rocket.component-CzIRgSXM.js";import"./square-grid-circle.component-Cn9tctdm.js";import"./triangle-exclamation.component-C1GJ6aYx.js";import{G as Ye}from"./img.component-CBdBairS.js";import{G as Xe}from"./input.component-BWLIcLxy.js";import{G as ts}from"./link-DiWJBrDa.js";import"./mask.component-CEWLA6JL.js";import"./menu-button.component-DL1v1bwu.js";import{G as es}from"./pagination-BFv9HEkj.js";import"./radio-group.component-CsnnDWzi.js";import"./rich-text.component-QiQrnwDd.js";import"./segmented-control-DuGvc446.js";import"./sensitive-number.component-D7alcwga.js";import"./sensitive-date.component-BMjGIZIG.js";import"./sensitive-account.component-uUkijhEC.js";import"./select.component-DJcW3mkh.js";import"./spinner.component-BQTWJHVY.js";import"./switch.component-HfuCpjnA.js";import{G as ss}from"./text.component-vzGgBPLb.js";import"./textarea.component-Ds26VLhn.js";import"./video.component-CcZewqvm.js";import"./card-pattern-01.component-IXMnHJN6.js";import{c as as}from"./rbcb-toggle.template-D6P77vwJ.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht="important",rs=" !"+ht,G=ve(class extends we{constructor(t){var e;if(super(t),t.type!==me.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,a)=>{const i=t[a];return i==null?e:e+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:a}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?a.removeProperty(i):a[i]=null);for(const i in e){const l=e[i];if(l!=null){this.ft.add(i);const h=typeof l=="string"&&l.endsWith(rs);i.includes("-")||h?a.setProperty(i,h?l.slice(0,-11):l,h?ht:""):a[i]=l}}return xe}}),is=_e`
  /* Host & Container */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-s-book);
    color: var(--gds-sys-color-content-neutral-01);
    text-align: left;
    --_table-height: 80vh;
    --_table-border-width: var(--gds-sys-space-5xs);
    --_table-border-color: var(--gds-sys-color-border-neutral-02);
    --_skeleton-base: color-mix(
      in srgb,
      var(--gds-sys-color-content-neutral-01) 7%,
      transparent
    );
    --_skeleton-highlight: color-mix(
      in srgb,
      var(--gds-sys-color-content-neutral-01) 15%,
      transparent
    );
    --table-skeleton-text-height: 18px;
    --table-skeleton-title-height: 20px;
    --table-skeleton-block-height: 56px;
    --table-expanded-full-skeleton-padding: var(--gds-sys-space-s);
    --table-expanded-full-skeleton-gap: var(--gds-sys-space-s);
    --table-expanded-full-skeleton-min-height: calc(
      var(--table-row-min-height, var(--gds-sys-space-4xl)) * 3.25
    );
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
    --table-skeleton-text-height: 18px;
    --table-skeleton-title-height: 16px;
    --table-skeleton-block-height: 48px;
    --table-expanded-full-skeleton-padding: var(--gds-sys-space-xs);
    --table-expanded-full-skeleton-gap: var(--gds-sys-space-xs);
    --table-expanded-full-skeleton-min-height: calc(
      var(--table-row-min-height) * 3
    );
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
    --table-skeleton-text-height: 18px;
    --table-skeleton-title-height: 20px;
    --table-skeleton-block-height: 56px;
    --table-expanded-full-skeleton-padding: var(--gds-sys-space-s);
    --table-expanded-full-skeleton-gap: var(--gds-sys-space-s);
    --table-expanded-full-skeleton-min-height: calc(
      var(--table-row-min-height) * 3.25
    );
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
    --table-skeleton-text-height: 20px;
    --table-skeleton-title-height: 24px;
    --table-skeleton-block-height: 64px;
    --table-expanded-full-skeleton-padding: var(--gds-sys-space-m);
    --table-expanded-full-skeleton-gap: var(--gds-sys-space-m);
    --table-expanded-full-skeleton-min-height: calc(
      var(--table-row-min-height) * 3.5
    );
  }

  /* Neutral 02 variants */
  .data.variant-neutral-02,
  .data.variant-neutral-02-outlined {
    --_table-header-bg: var(--gds-sys-color-l2-neutral-02-2);
    --_table-header-hover: color-mix(
      in srgb,
      var(--_table-header-bg),
      var(--gds-sys-color-state-neutral-03)
    );
    --_table-header-active: color-mix(
      in srgb,
      var(--_table-header-bg),
      var(--gds-sys-color-state-neutral-04)
    );
    --_table-row-hover: var(--gds-sys-color-l2-neutral-02-2);
    --_table-row-expanded: var(--gds-sys-color-l3-neutral-02);
    --_table-row-selected: var(--gds-sys-color-l3-neutral-02);
    --_table-row-selected-hover: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-01)
    );
    --_table-row-striped: var(--gds-sys-color-l2-neutral-02-2);
    --_table-row-striped-hover: color-mix(
      in srgb,
      var(--_table-row-striped),
      var(--gds-sys-color-state-neutral-01)
    );
    --_table-card-bg: var(--gds-card-variant-background);
  }

  /* Neutral 01 variant */
  .data.variant-neutral-01 {
    --_table-header-bg: var(--gds-sys-color-l2-neutral-02);
    --_table-header-hover: color-mix(
      in srgb,
      var(--_table-header-bg),
      var(--gds-sys-color-state-neutral-03)
    );
    --_table-header-active: color-mix(
      in srgb,
      var(--_table-header-bg),
      var(--gds-sys-color-state-neutral-04)
    );
    --_table-row-expanded: var(--gds-sys-color-l3-neutral-02);
    --_table-row-hover: var(--gds-sys-color-l2-neutral-02-2);
    --_table-row-selected: var(--gds-sys-color-l3-neutral-02);
    --_table-row-selected-hover: var(--gds-sys-color-l3-neutral-01-2);
    --_table-row-striped: var(--gds-sys-color-l2-neutral-02-2);
    --_table-row-striped-hover: color-mix(
      in srgb,
      var(--_table-row-striped),
      var(--gds-sys-color-state-neutral-01)
    );
    --_table-card-bg: var(--gds-card-variant-background);
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
    padding-top: var(--table-data-padding-x);
    padding-inline: var(--table-data-padding-x);
  }

  tbody td {
    font-weight: normal;
    min-height: var(--table-row-min-height);
    padding-block: var(--table-cell-padding-y);
    padding-inline: var(--table-cell-padding-x);
    background-color: var(--_table-current-row-bg, var(--_table-card-bg));
  }

  thead tr th:first-child,
  tbody tr:hover:not(.expanded-row, .expanded-parent) td:first-child,
  tbody tr.selected:not(.expanded-row, .expanded-parent) td:first-child,
  .striped tbody tr:not(.expanded-row, .expanded-parent) td:first-child {
    border-top-left-radius: var(--gds-sys-radius-s);
    border-bottom-left-radius: var(--gds-sys-radius-s);
  }

  thead tr th:last-child,
  tbody tr:hover td:last-child,
  tbody tr.selected td:last-child,
  .striped tbody tr:not(.expanded-row, .expanded-parent) td:last-child {
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
    outline-color: transparent;
    outline-offset: -2px;
    outline-style: solid;
    outline-width: var(--gds-sys-space-4xs);
  }

  button.column-header {
    appearance: none;
    border: none;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    inline-size: 100%;
    cursor: pointer;
  }

  th.sortable .column-header:hover {
    background-color: var(--_table-header-hover);
  }

  th.sortable .column-header:focus-visible {
    outline-color: var(--gds-sys-color-content-neutral-01);
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

  tbody tr {
    --_table-current-row-bg: var(--_table-card-bg);
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
    position: sticky;
    left: 0;
    z-index: 4;
  }

  .cell-center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Expanded */

  .expander-cell {
    min-width: var(--gds-sys-space-xl);
    width: var(--gds-sys-space-xl);
    max-width: var(--gds-sys-space-xl);
    position: sticky;
    left: 0;
    z-index: 3;
  }

  th.expander-cell {
    padding-inline: var(--table-cell-padding-x);
  }

  /* When both expander and checkbox are present, offset checkbox past expander.
     Expander width = its content width + both inline paddings (content-box), plus container padding. */
  .expander-cell + .checkbox-cell {
    left: calc(var(--gds-sys-space-xl) + 2 * var(--table-cell-padding-x));
  }

  /* Sticky-like data cells follow the current row background. */
  td.expander-cell,
  td.checkbox-cell,
  td.sticky-left,
  td.sticky-right {
    background: var(--_table-current-row-bg, var(--_table-card-bg));
  }

  /* Border-right divider on the outermost left sticky control column.
     Uses container state classes instead of per-row sibling checks. */
  .overflows-x.is-selectable:not(.scrolled-x-start):not(.has-sticky-left)
    .checkbox-cell,
  .overflows-x.is-expandable:not(.is-selectable):not(.scrolled-x-start):not(
      .has-sticky-left
    )
    .expander-cell {
    border-right: var(--_table-border-width) solid var(--_table-border-color);
  }

  /* ---- User-defined sticky columns ---- */

  th.sticky-left,
  td.sticky-left {
    position: sticky;
    z-index: 2;
  }

  th.sticky-left {
    background: var(--_table-header-bg);
  }

  th.sticky-right,
  td.sticky-right {
    position: sticky;
    z-index: 2;
  }

  th.sticky-right {
    background: var(--_table-header-bg);
  }

  /* tfoot sticky-left/right get header bg */
  tfoot td.sticky-left,
  tfoot th.sticky-left,
  tfoot td.sticky-right,
  tfoot th.sticky-right {
    background: var(--_table-header-bg);
  }

  /* Divider borders — only the outermost column on each side shows the line */
  .overflows-x:not(.scrolled-x-start) td.sticky-left-last,
  .overflows-x:not(.scrolled-x-start) th.sticky-left-last {
    border-right: var(--_table-border-width) solid var(--_table-border-color);
  }

  .overflows-x:not(.scrolled-x-end) td.sticky-right-last,
  .overflows-x:not(.scrolled-x-end) th.sticky-right-last {
    border-left: var(--_table-border-width) solid var(--_table-border-color);
  }

  tr.expanded-parent {
    --_table-current-row-bg: var(--_table-row-expanded);
    background: var(--_table-row-expanded);
  }

  tr.expanded-parent td:last-child {
    border-bottom-right-radius: 0;
  }

  tr.expanded-parent td:first-child {
    border-top-left-radius: var(--gds-sys-radius-s);
    border-bottom-left-radius: 0;
  }

  tr.expanded-parent td:last-child {
    border-top-right-radius: var(--gds-sys-radius-s);
    border-bottom-right-radius: 0;
  }

  tr.expanded-parent td {
    border-top-color: transparent;
  }

  /* Expanded row */
  tr.expanded-row td {
    border-top-color: transparent;
  }

  tr.expanded-row {
    --_table-current-row-bg: var(--_table-row-expanded);
    background: var(--_table-row-expanded);
  }

  tr.expanded-row:not([aria-busy='true']) td {
    transition-property: opacity, translate;
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-timing-function: var(--gds-sys-motion-easing-enter);
    opacity: 1;
    translate: 0 0;

    @starting-style {
      opacity: 0;
      translate: 0 4px;
    }
  }

  tr.expanded-row.full:not([aria-busy='true']) .expanded-full-cell > * {
    transition-property: opacity, translate;
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-timing-function: var(--gds-sys-motion-easing-enter);
    opacity: 1;
    translate: 0 0;

    @starting-style {
      opacity: 0;
      translate: 0 6px;
    }
  }

  tr.expanded-row.expanded-group-end td:first-child {
    border-bottom-left-radius: var(--gds-sys-radius-s);
  }

  tr.expanded-row.expanded-group-end td:last-child {
    border-bottom-right-radius: var(--gds-sys-radius-s);
  }

  tr.expanded-row + tr td {
    border-top-color: transparent;
  }

  /* End · Expanded */

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
    --_table-current-row-bg: var(--_table-row-selected);
    background-color: var(--_table-row-selected);
  }

  @media (hover: hover) and (min-width: 768px) {
    tbody tr.selected:hover {
      --_table-current-row-bg: var(--_table-row-selected-hover);
      background-color: var(--_table-row-selected-hover);
    }

    tbody tr:hover:not(.selected, .expanded-row, .expanded-parent) {
      --_table-current-row-bg: var(--_table-row-hover);
      background-color: var(--_table-row-hover);
    }

    .striped tbody tr:nth-child(even):hover:not(.selected) {
      --_table-current-row-bg: var(--_table-row-striped-hover);
      background-color: var(--_table-row-striped-hover);
    }

    .striped tbody tr.expanded-parent:nth-child(even):hover:not(.selected),
    .striped tbody tr.expanded-row:nth-child(even):hover:not(.selected) {
      --_table-current-row-bg: var(--_table-row-striped-hover);
      background: var(--_table-row-striped-hover);
    }

    .striped
      tbody
      tr.expanded-parent:nth-child(even):hover:not(.selected)
      td:not(.sticky-left):not(.sticky-right),
    .striped
      tbody
      tr.expanded-row:nth-child(even):hover:not(.selected)
      td:not(.sticky-left):not(.sticky-right) {
      background-color: var(--_table-row-striped-hover);
    }
  }

  tbody tr:hover,
  tbody tr:hover + tr {
    border-color: transparent;
  }

  /* Striped */
  .striped tbody tr:nth-child(even):not(.selected):not(:hover) {
    --_table-current-row-bg: var(--_table-row-striped);
  }

  .striped tbody tr.expanded-parent:nth-child(even):not(.selected):not(:hover),
  .striped tbody tr.expanded-row:nth-child(even):not(.selected):not(:hover) {
    --_table-current-row-bg: var(--_table-row-striped);
    background: var(--_table-row-striped);
  }

  .striped
    tbody
    tr:nth-child(even):not(.selected):not(:hover)
    td:not(.sticky-left):not(.sticky-right) {
    background-color: var(--_table-row-striped);
  }

  .striped
    tbody
    tr.expanded-parent:nth-child(even):not(.selected):not(:hover)
    td:not(.sticky-left):not(.sticky-right),
  .striped
    tbody
    tr.expanded-row:nth-child(even):not(.selected):not(:hover)
    td:not(.sticky-left):not(.sticky-right) {
    background-color: var(--_table-row-striped);
  }

  .striped tbody tr td {
    border-color: transparent;
  }

  /* Keep expanded parent connected with its expanded rows */
  tbody tr.expanded-parent td:last-child,
  tbody tr.expanded-parent:hover td:last-child,
  tbody tr.expanded-parent.selected td:last-child {
    border-bottom-right-radius: 0;
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
    transition: all 420ms;

    @starting-style {
      opacity: 0;
    }
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
      --_table-row-striped: transparent;
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

    .responsive td.expander-cell,
    .responsive td.checkbox-cell {
      width: auto;
      max-width: none;
      padding-top: 0;
      padding-bottom: var(--gds-sys-space-xs);
    }

    .responsive .expand-toggle {
      align-self: flex-start;
    }

    .responsive tr.expanded-row {
      margin-top: 0;
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
      var(--_skeleton-base) 25%,
      var(--_skeleton-highlight) 50%,
      var(--_skeleton-base) 75%
    );
    background-size: 200% 100%;
    animation: skeleton-shimmer 1.5s ease-in-out infinite;
    border-radius: var(--gds-sys-space-max);
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
    height: var(--table-skeleton-text-height);
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

  .skeleton-title {
    height: var(--table-skeleton-title-height);
    width: min(34ch, 70%);
  }

  .skeleton-block {
    height: var(--table-skeleton-block-height);
    border-radius: var(--gds-sys-radius-s);
  }

  .expanded-full-skeleton {
    display: flex;
    flex-direction: column;
    gap: var(--table-expanded-full-skeleton-gap);
    padding: var(--table-expanded-full-skeleton-padding);
    min-height: var(--table-expanded-full-skeleton-min-height);
  }

  .expanded-full-skeleton-meta {
    display: grid;
    gap: var(--table-expanded-full-skeleton-gap);
    grid-template-columns: repeat(3, minmax(120px, 1fr));
  }

  tr.expanded-row.skeleton-leave td {
    transition-property: opacity;
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-timing-function: var(--gds-sys-motion-easing-leave);
    opacity: 0;
  }

  tr.expanded-row.skeleton-leave .skeleton {
    animation-play-state: paused;
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
      thead {
        position: sticky;
        top: 4px;
        z-index: 10;
        transition: box-shadow 200ms ease;
        border-radius: var(--gds-sys-radius-s);
      }

      thead {
        background-color: var(--gds-sys-color-l1-neutral-01);
      }

      .data.scrolled thead {
        box-shadow:
          0 -10px 0 0 var(--gds-card-variant-background),
          -10px -10px 0 0 var(--gds-card-variant-background),
          10px -10px 0 0 var(--gds-card-variant-background),
          var(--gds-sys-shadow-l-01),
          var(--gds-sys-shadow-l-02);
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

      /* When sticky-right column is present, remove the right fade. */
      .data.has-sticky-right {
        mask: linear-gradient(
          to right,
          #0000,
          #ffff var(--_start-fade),
          #ffff 100%
        );
      }

      /* When expandable, selectable, or sticky-left column is present, remove the left fade. */
      .data.is-expandable,
      .data.is-selectable,
      .data.has-sticky-left {
        mask: linear-gradient(
          to right,
          #ffff,
          #ffff calc(100% - var(--_end-fade)),
          #0000
        );
      }

      /* When both left and right sticky columns are present, remove both fades. */
      .data.no-mask {
        mask: none;
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
    .header,
    tr.expanded-row.skeleton-leave td,
    tr.expanded-row.full:not([aria-busy='true']) .expanded-full-cell > * {
      transition: none;
      animation: none;
    }
  }
`,ls=[ke,$e,is],os=[Ce,Me,Be,Ye,Ie,je,Te,Xe,es,ss,Ge,ts,qe,Pe,Qe,Ve,Fe,We,Ke,Ze,Je,Ue,He,Ne,Oe],ns={compact:{input:"small",dropdown:"small"},comfortable:{input:"small",dropdown:"small"},spacious:{input:"large",dropdown:"medium"}},pt=t=>typeof t=="object"&&t!==null&&Array.isArray(t.slots),ds={toString(){return String(this.value??"")},valueOf(){return this.value},[Symbol.toPrimitive](t){return t==="number"?Number(this.value):String(this.value??"")}};function Ma(t,e=["value"],a){if(pt(t))return t;let i=["value"],l;return Array.isArray(e)?i=e:(typeof e=="string"||typeof e=="number")&&(l=e),Array.isArray(a)?i=a:(typeof a=="string"||typeof a=="number")&&(l=a),Object.assign(Object.create(ds),{value:t,slots:i,...typeof l<"u"?{key:l}:{}})}var cs=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,gt=t=>{throw TypeError(t)},c=(t,e,a,i)=>{for(var l=i>1?void 0:i?hs(e,a):e,h=t.length-1,g;h>=0;h--)(g=t[h])&&(l=(i?g(e,a,l):g(l))||l);return i&&l&&cs(e,a,l),l},K=(t,e,a)=>e.has(t)||gt("Cannot "+a),n=(t,e,a)=>(K(t,e,"read from private field"),a?a.call(t):e.get(t)),z=(t,e,a)=>e.has(t)?gt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),ct=(t,e,a,i)=>(K(t,e,"write to private field"),e.set(t,a),a),r=(t,e,a)=>(K(t,e,"access private method"),a),R,O,s,L,v,C,W,E,J,ut,M,bt,B,Z,U,Y,q,H,ft,yt,k,P,N,I,Q,vt,wt,mt,xt,_t,kt,$t,Ct,St,X,tt,F,et,Et,Rt,At,Lt,j,st,at,zt,Dt,Tt,It,jt,rt,Gt,Mt,Bt,qt,Pt,Ft,Wt,Ut,Ht,Nt,Qt,Vt,Kt,it,Ot,Jt,Zt,Yt,Xt,te,ee,se,ae,re,lt,ie,le,oe,ne,de,ce,he,pe,V,ge,D,ot,nt,A,ue,be,fe;let d=class extends Le{constructor(){super(...arguments),z(this,s),z(this,R,{}),z(this,O,300*1e3),this.headlineTag="h2",this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.disableSelectAll=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="neutral-02-outlined",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._expanded=new Set,this._expanding=new Set,this._completingExpansion=new Set,this._expandedRowsCache=new Map,this._expandedFullContentResolved=new Set,this._error=null,z(this,E,new Map),z(this,J,140)}_handleMobile(t){this._isMobile=t}_onDataChange(){ct(this,R,{}),r(this,s,k).call(this)}_onPageChange(){this._view={...this._view,page:Number(this.page??1)},r(this,s,k).call(this)}_onRowsChange(){this._view={...this._view,rows:Number(this.rows??10),page:1},r(this,s,k).call(this)}_onColumnsChange(){ct(this,R,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(t=>t.visible!==!1).map(t=>t.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{r(this,s,ue).call(this),r(this,s,N).call(this)})}updated(t){super.updated(t),r(this,s,N).call(this)}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return o`
      <div class="${w(t)}">
        ${[r(this,s,ae).call(this),r(this,s,kt).call(this),m(this._error,()=>r(this,s,te).call(this),()=>m(this._rowsState.length===0&&!this._loading,()=>r(this,s,ee).call(this),()=>r(this,s,Xt).call(this))),r(this,s,se).call(this)]}
      </div>
    `}clearSelection(){r(this,s,nt).call(this),r(this,s,A).call(this)}selectAll(){r(this,s,ot).call(this),r(this,s,A).call(this)}setSelection(t){const e=t.filter(a=>a>=0&&a<this._rowsState.length);this._selected=new Set(e),r(this,s,A).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}async expandRow(t){return r(this,s,D).call(this,t,!0)}collapseRow(t){return r(this,s,D).call(this,t,!1),!0}async toggleRowExpansion(t,e){if(t<0||t>=this._rowsState.length)return!1;const a=!this._expanded.has(t);return r(this,s,D).call(this,t,a,e)}getExpandedIndices(){return Array.from(this._expanded)}};R=new WeakMap;O=new WeakMap;s=new WeakSet;L=function(){return this.responsive&&this._isMobile};v=function(){return!n(this,s,L)&&n(this,s,B).length>0};C=function(){return this.selectable&&!n(this,s,L)};W=function(){return ns[this.density]};E=new WeakMap;J=new WeakMap;ut=function(){return this._selected.size>0};M=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};bt=function(){return n(this,s,ut)&&!n(this,s,M)};B=function(){return this._rowsState.map((t,e)=>r(this,s,j).call(this,t,e)?e:-1).filter(t=>t!==-1)};Z=function(){const t=n(this,s,B);return t.length>0&&t.every(e=>this._expanded.has(e))};U=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};Y=function(t){const e=n(this,E).get(t);e!==void 0&&(window.clearTimeout(e),n(this,E).delete(t))};q=function(t){if(r(this,s,Y).call(this,t),this._expanding.has(t)){const e=new Set(this._expanding);e.delete(t),this._expanding=e}if(this._completingExpansion.has(t)){const e=new Set(this._completingExpansion);e.delete(t),this._completingExpansion=e}};H=function(){n(this,E).forEach(t=>window.clearTimeout(t)),n(this,E).clear(),this._expanding.clear(),this._completingExpansion.clear()};ft=function(t){r(this,s,Y).call(this,t);const e=new Set(this._completingExpansion);e.add(t),this._completingExpansion=e,this.requestUpdate();const a=window.setTimeout(()=>{r(this,s,q).call(this,t),this.requestUpdate()},n(this,J));n(this,E).set(t,a)};yt=function(t){return Date.now()-t.timestamp<n(this,O)};k=async function(){if(this.data){if(!this.nocache){const t=r(this,s,U).call(this),e=n(this,R)[t];if(e&&r(this,s,yt).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._expanded.clear(),r(this,s,H).call(this),this._expandedRowsCache.clear(),this._expandedFullContentResolved.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{rows:e.rows,total:e.total,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0});return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=r(this,s,U).call(this);n(this,R)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._expanded.clear(),r(this,s,H).call(this),this._expandedRowsCache.clear(),this._expandedFullContentResolved.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{...t,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0})}catch(t){this._error=t,this.dispatchCustomEvent("gds-table-data-error",{detail:t,bubbles:!0})}finally{this._loading=!1}}};P=function(){const t=this.columns.filter(i=>this._view.visibleColumns.has(i.key)),e=t.filter(i=>i.sticky==="left"),a=t.filter(i=>i.sticky==="right");return{lastLeft:e.length?e[e.length-1].key:null,lastRight:a.length?a[0].key:null}};N=function(){const t=this.shadowRoot;if(!t)return;const e=Array.from(t.querySelectorAll("thead th.sticky-left")),a=Array.from(t.querySelectorAll("thead th.sticky-right")),i=t.querySelector("thead th.expander-cell"),l=t.querySelector("thead th.checkbox-cell");if(!e.length&&!a.length)return;t.querySelectorAll("[data-col-key]").forEach(u=>{u.style.left="",u.style.right=""});let h=((i==null?void 0:i.offsetWidth)??0)+((l==null?void 0:l.offsetWidth)??0);for(const u of e){const p=u.dataset.colKey,x=`${h}px`;u.style.left=x,h+=u.offsetWidth,p&&t.querySelectorAll(`[data-col-key="${p}"]`).forEach(S=>S.style.left=x)}let g=0;for(const u of[...a].reverse()){const p=u.dataset.colKey,x=`${g}px`;u.style.right=x,g+=u.offsetWidth,p&&t.querySelectorAll(`[data-col-key="${p}"]`).forEach(S=>S.style.right=x)}};I=function(t,e,a){if(typeof a=="string"||typeof a=="number")return a;const i=t==null?void 0:t.id;return typeof i=="string"||typeof i=="number"?i:e+1};Q=function(t){return o`<span class="cell-wrapped-content">${t}</span>`};vt=function(t){return o`<span class="column-label" aria-hidden="true">
      ${t.label}:
    </span>`};wt=function(t,e,a){const i=`${t}:${e}:${a}`;return o`<slot name="${i}"></slot>`};mt=function(t,e,a){const i=e.value?e.value(t):t[e.key],l=this._isMobile&&this.responsive,h=!!e.justify;let g;if(pt(i)){const u=r(this,s,I).call(this,t,a,i.key);g=i.slots.map(p=>p==="value"?i.value===void 0?null:h?r(this,s,Q).call(this,i.value):i.value:r(this,s,wt).call(this,e.key,u,p))}else g=h?r(this,s,Q).call(this,i):i;return o`
      <div
        class="cell-content"
        aria-label=${$(l?e.label:void 0)}
      >
        ${l?r(this,s,vt).call(this,e):null} ${g}
      </div>
    `};xt=function(t){const e=this._view.sortColumn===t.key,a=this._view.sortDirection;return e?a==="asc"?o`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:o`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:o`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};_t=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};kt=function(){return this.plain||!r(this,s,_t).call(this)?null:o`
      <div class="header">
        <div class="lead">
          ${m(this.searchable,()=>o`
              <gds-input
                type="text"
                size="${n(this,s,W).input}"
                plain
                clearable
                label="${this.searchLabel||b("Search table")}"
                .value=${this._view.searchQuery}
                @input=${r(this,s,re)}
                @gds-input-cleared=${r(this,s,lt)}
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
          ${m(this.settings,()=>o`
              <gds-dropdown
                multiple
                plain
                size="${n(this,s,W).dropdown}"
                label="${b("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${r(this,s,ne)}
              >
                <span slot="trigger">${b("Columns")}</span>
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
    `};$t=function(t){const e=this._view.sortColumn===t.key,a=this._view.sortDirection,{lastLeft:i,lastRight:l}=r(this,s,P).call(this);let h=t.label;if(t.sortable)if(e){const p=a==="asc"?b("ascending"):b("descending");h=`${t.label}, ${b("sorted")} ${p}`}else h=`${t.label}, ${b("sortable")}`;const g=w({sortable:!!t.sortable,sorted:e,"sort-asc":e&&a==="asc","sort-desc":e&&a==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify,wrap:!!t.width,"sticky-left":t.sticky==="left","sticky-right":t.sticky==="right","sticky-left-last":t.sticky==="left"&&t.key===i,"sticky-right-last":t.sticky==="right"&&t.key===l}),u=G({"--cell-width":t.width});return o`
      <th
        class=${g}
        style=${u}
        data-col-key=${$(t.sticky?t.key:void 0)}
        aria-sort="${e?a==="asc"?"ascending":"descending":"none"}"
      >
        ${m(t.sortable,()=>o`
            <button
              type="button"
              class="column-header"
              aria-label="${h}"
              aria-pressed=${e}
              @click=${()=>r(this,s,ie).call(this,t.key)}
            >
              <span class="column-label">${t.label}</span>
              <span class="sort-icon">${r(this,s,xt).call(this,t)}</span>
            </button>
          `,()=>o`
            <div class="column-header">
              <span class="column-label">${t.label}</span>
            </div>
          `)}
      </th>
    `};Ct=function(){return n(this,s,C)?o`
      <th class="checkbox-cell">
        <div class="cell-center">
          ${r(this,s,it).call(this,{checked:n(this,s,M),indeterminate:n(this,s,bt),ariaLabel:b("Select all rows"),onToggle:()=>r(this,s,de).call(this,{}),skip:this.disableSelectAll})}
        </div>
      </th>
    `:null};St=function(){if(!n(this,s,v))return null;const t=n(this,s,Z),e=t?b("Collapse all rows"):b("Expand all rows");return o`
      <th class="expander-cell expander-header">
        <div class="cell-center">
          <gds-button
            rank="tertiary"
            size="small"
            label="${e}"
            @click=${()=>r(this,s,pe).call(this)}
          >
            ${t?o`<gds-icon-chevron-grabber-vertical-reversed></gds-icon-chevron-grabber-vertical-reversed>`:o`<gds-icon-chevron-grabber-vertical></gds-icon-chevron-grabber-vertical>`}
          </gds-button>
        </div>
      </th>
    `};X=function(t){return"subRows"in t?t.subRows:t==null?void 0:t.children};tt=function(t){if("fullContent"in t)return t.fullContent};F=function(t,e){return this._expandedRowsCache.get(e)??[]};et=function(t){return typeof r(this,s,X).call(this,t)=="function"};Et=function(t){return typeof r(this,s,tt).call(this,t)=="function"};Rt=function(t,e){const a=r(this,s,F).call(this,t,e).length||1,i=Number(t.subRowCount);return!Number.isFinite(i)||i<=0?a:Math.floor(i)};At=function(t,e){const a=r(this,s,I).call(this,t,e);return!!this.querySelector(`[slot="expand:${a}:full"]`)};Lt=function(t,e){return r(this,s,At).call(this,t,e)};j=function(t,e){return n(this,s,L)?!1:typeof t.isExpandable=="boolean"?t.isExpandable:r(this,s,et).call(this,t)||r(this,s,Et).call(this,t)||r(this,s,F).call(this,t,e).length>0?!0:r(this,s,Lt).call(this,t,e)};st=function(t,e){return`row-expand-group-${String(r(this,s,I).call(this,t,e)).replace(/[^a-zA-Z0-9_-]/g,"-")}`};at=function(){return this.columns.filter(e=>this._view.visibleColumns.has(e.key)).length+(n(this,s,v)?1:0)+(n(this,s,C)?1:0)};zt=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>r(this,s,$t).call(this,t))};Dt=function(){return o`
      <thead>
        <tr>
          ${[r(this,s,St).call(this),r(this,s,Ct).call(this),r(this,s,zt).call(this)]}
        </tr>
      </thead>
    `};Tt=function(t,e,a){const{lastLeft:i,lastRight:l}=r(this,s,P).call(this),h=w({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width,"sticky-left":e.sticky==="left","sticky-right":e.sticky==="right","sticky-left-last":e.sticky==="left"&&e.key===i,"sticky-right-last":e.sticky==="right"&&e.key===l}),g=G({"--cell-width":e.width});return o`
      <td
        style=${g}
        class=${h}
        data-col-key=${$(e.sticky?e.key:void 0)}
      >
        ${r(this,s,mt).call(this,t,e,a)}
      </td>
    `};It=function(t,e){if(!n(this,s,v))return null;if(!r(this,s,j).call(this,t,e))return o`<td class="expander-cell"></td>`;const i=this._expanded.has(e),l=r(this,s,st).call(this,t,e),h=i?t.collapseLabel||b("Collapse row"):t.expandLabel||b("Expand row");return o`
      <td class="expander-cell">
        <gds-button
          class="expand-toggle"
          rank="tertiary"
          size="small"
          label="${h} ${e+1}"
          aria-expanded=${i?"true":"false"}
          aria-controls=${l}
          @click=${()=>r(this,s,he).call(this,t,e)}
        >
          ${i?o`<gds-icon-chevron-top size="s"></gds-icon-chevron-top>`:o`<gds-icon-chevron-bottom
                size="s"
              ></gds-icon-chevron-bottom>`}
        </gds-button>
      </td>
    `};jt=function(t){if(!n(this,s,C))return null;const e=`${b("Select row")} ${t+1}`;return o`
      <td class="checkbox-cell">
        <div class="cell-center">
          ${r(this,s,it).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>r(this,s,ce).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
        </div>
      </td>
    `};rt=function(t,e){return this.columns.filter(a=>this._view.visibleColumns.has(a.key)).map(a=>r(this,s,Tt).call(this,t,a,e))};Gt=function(t,e,a){const i=r(this,s,I).call(this,t,e);return o`
      <tr
        class="expanded-row full expanded-group-end"
        id="${a}"
        aria-level="2"
      >
        <td
          class="expanded-full-cell"
          colspan=${r(this,s,at).call(this)}
        >
          ${o`<slot name="expand:${i}:full"></slot>`}
        </td>
      </tr>
    `};Mt=function(t,e,a,i,l,h=!1){const g=this.columns.filter(p=>this._view.visibleColumns.has(p.key)),u=w({"expanded-row":!0,aligned:!0,"skeleton-leave":h,"expanded-group-end":i===l-1});return o`
      <tr
        class=${u}
        id=${$(i===0?a:void 0)}
        aria-level="2"
        aria-busy="true"
      >
        ${n(this,s,v)?o`<td class="expander-cell"></td>`:null}
        ${n(this,s,C)?o`<td class="checkbox-cell"></td>`:null}
        ${g.map(p=>{const x=w({[`align-${p.align}`]:!!p.align,[`justify-${p.justify}`]:!!p.justify,wrap:!!p.width}),S=G({"--cell-width":p.width}),_=String(p.key)==="actions";return o`
            <td class=${x} style=${S}>
              <div class="cell-content">
                ${_?o`<span class="skeleton skeleton-action"></span>`:o`<span class="skeleton skeleton-text"></span>`}
              </div>
            </td>
          `})}
      </tr>
    `};Bt=function(t,e,a,i=!1){const l=r(this,s,Rt).call(this,t,e);return Array.from({length:l},(h,g)=>r(this,s,Mt).call(this,t,e,a,g,l,i))};qt=function(t,e=!1){const a=w({"expanded-row":!0,full:!0,"expanded-group-end":!0,"skeleton-leave":e});return o`
      <tr class=${a} id="${t}" aria-level="2" aria-busy="true">
        <td
          class="expanded-full-cell"
          colspan=${r(this,s,at).call(this)}
        >
          <div class="expanded-full-skeleton" aria-hidden="true">
            <span class="skeleton skeleton-title"></span>
            <span class="skeleton skeleton-text"></span>
            <span class="skeleton skeleton-text"></span>
            <div class="expanded-full-skeleton-meta">
              <span class="skeleton skeleton-block"></span>
              <span class="skeleton skeleton-block"></span>
              <span class="skeleton skeleton-block"></span>
            </div>
          </div>
        </td>
      </tr>
    `};Pt=function(t){return{"expanded-row":!0,child:!0,"expanded-group-end":t}};Ft=function(t,e,a){return{selected:this._selected.has(t),loading:this._loading,"expanded-parent":a,"has-expandable-rows":e}};Wt=function(t,e){return t?e?"true":"false":void 0};Ut=function(t,e,a){return{classes:r(this,s,Ft).call(this,t,e,a),ariaExpanded:r(this,s,Wt).call(this,e,a)}};Ht=function(t,e,a,i,l){const h=this._rowsState.length+e*1e3+a;return o`
      <tr
        class=${w(r(this,s,Pt).call(this,i))}
        id=${$(a===0?l:void 0)}
        aria-level="2"
      >
        ${n(this,s,v)?o`<td class="expander-cell"></td>`:null}
        ${n(this,s,C)?o`<td class="checkbox-cell"></td>`:null}
        ${r(this,s,rt).call(this,t,h)}
      </tr>
    `};Nt=function(t){return r(this,s,et).call(this,t)?"rows":"full"};Qt=function(t,e){const a=r(this,s,j).call(this,t,e),i=a&&this._expanded.has(e),l=this._expanding.has(e),h=this._completingExpansion.has(e),g=r(this,s,st).call(this,t,e),u=r(this,s,F).call(this,t,e),p=r(this,s,Nt).call(this,t);return{isExpandable:a,isExpanded:i,isExpanding:l,isCompleting:h,groupId:g,expandedRows:u,hasExpandedRows:u.length>0,loadingKind:p}};Vt=function(t,e,a){return a.isExpanding?a.loadingKind==="full"?r(this,s,qt).call(this,a.groupId,a.isCompleting):r(this,s,Bt).call(this,t,e,a.groupId,a.isCompleting):a.hasExpandedRows?a.expandedRows.map((i,l)=>r(this,s,Ht).call(this,i,e,l,l===a.expandedRows.length-1,l===0?a.groupId:void 0)):r(this,s,Gt).call(this,t,e,a.groupId)};Kt=function(t,e){const a=r(this,s,Qt).call(this,t,e),i=r(this,s,Ut).call(this,e,a.isExpandable,a.isExpanded);return o`
      <tr
        class=${w(i.classes)}
        aria-level=${$(n(this,s,v)?"1":void 0)}
        aria-expanded=${$(i.ariaExpanded)}
      >
        ${[r(this,s,It).call(this,t,e),r(this,s,jt).call(this,e),r(this,s,rt).call(this,t,e)]}
      </tr>
      ${m(a.isExpanded,()=>r(this,s,Vt).call(this,t,e,a))}
    `};it=function({checked:t,indeterminate:e=!1,disabled:a=!1,ariaLabel:i,onToggle:l,skip:h=!1}){if(h)return null;const g=p=>{p.stopPropagation(),!a&&l()};return o`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${i}
        @click=${g}
        @keydown=${p=>{(p.key===" "||p.key==="Enter")&&(p.preventDefault(),g(p))}}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${t}
          .indeterminate=${e}
          ?disabled=${a}
          aria-hidden="true"
          @change=${g}
        />
        ${as({checked:t,indeterminate:e,disabled:a,invalid:!1})}
      </div>
    `};Ot=function(t){const a=this._isMobile&&this.responsive?o`<span class="skeleton skeleton-text"></span>`:null;return o`
      <div class="cell-content">
        ${a}
        <span class="skeleton skeleton-text"></span>
      </div>
    `};Jt=function(t){return o`
      <tr class="skeleton-row">
        ${m(n(this,s,v),()=>o`
            <td class="expander-cell">
              <span class="skeleton skeleton-action"></span>
            </td>
          `)}
        ${m(n(this,s,C),()=>o`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>o`<td>${r(this,s,Ot).call(this,e)}</td>`)}
      </tr>
    `};Zt=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,a)=>r(this,s,Jt).call(this,a));return o`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return o`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>r(this,s,Kt).call(this,t,e))}
      </tbody>
    `};Yt=function(){if(!this.tfoot||n(this,s,L))return null;const t=this.tfoot.label,e=this.columns.filter(i=>this._view.visibleColumns.has(i.key)),a=w({tablefoot:!0,sticky:!!this.tfoot.sticky});return o`
      <tfoot class=${a}>
        <tr>
          ${m(n(this,s,v),()=>o`<td class="expander-cell"></td>`)}
          ${m(n(this,s,C),()=>o`<td class="checkbox-cell"></td>`)}
          ${e.map((i,l)=>{const{lastLeft:h,lastRight:g}=r(this,s,P).call(this),u=w({"tablefoot-cell":!0,"tablefoot-label-cell":l===0,[`align-${i.align}`]:!!i.align,[`justify-${i.justify}`]:!!i.justify,wrap:!!i.width,"sticky-left":i.sticky==="left","sticky-right":i.sticky==="right","sticky-left-last":i.sticky==="left"&&i.key===h,"sticky-right-last":i.sticky==="right"&&i.key===g}),p=G({"--cell-width":i.width});return l===0&&t?o`
                <th
                  scope="row"
                  class=${u}
                  style=${p}
                  data-col-key=${$(i.sticky?i.key:void 0)}
                >
                  <div class="cell-content">
                    <span class="tablefoot-label">${t}</span>
                    <slot name="tfoot:${i.key}"></slot>
                  </div>
                </th>
              `:o`
              <td
                class=${u}
                style=${p}
                data-col-key=${$(i.sticky?i.key:void 0)}
              >
                <div class="cell-content">
                  <slot name="tfoot:${i.key}"></slot>
                </div>
              </td>
            `})}
        </tr>
      </tfoot>
    `};Xt=function(){const t=w({responsive:this.responsive,data:!0,"is-expandable":n(this,s,v),"is-selectable":n(this,s,C),"has-tfoot":!!this.tfoot&&!n(this,s,L),"has-sticky-left":this.columns.some(a=>a.sticky==="left"),"has-sticky-right":this.columns.some(a=>a.sticky==="right"),"has-sticky":this.columns.some(a=>a.sticky==="left"||a.sticky==="right"),"no-mask":n(this,s,v)||n(this,s,C)||this.columns.some(a=>a.sticky==="left"||a.sticky==="right"),[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),e=`${this.summary?this.summary+", ":""}${b("Data table with")} ${this._total} ${b("rows")}`;return o`
      <gds-card
        variant="${this.variant}"
        padding="0"
        border-radius="m"
        border-width="${this.responsive?"0; s{5xs}":"5xs"}"
        class="table-card"
      >
        <div class=${t} tabindex="0">
          <table
            aria-label="${e}"
            role=${$(n(this,s,v)?"treegrid":void 0)}
          >
            <caption class="visually-hidden">
              ${e}
            </caption>
            ${r(this,s,Dt).call(this)} ${r(this,s,Zt).call(this)}
            ${r(this,s,Yt).call(this)}
          </table>
        </div>
      </gds-card>
    `};te=function(){return o`
      <gds-card variant="neutral-02-outlined" border-radius="m">
        <slot name="error">
          <gds-text tag="p">${b("Error loading data")}</gds-text>
          <gds-button
            size="small"
            label="${b("Retry loading data")}"
            @click=${()=>r(this,s,k).call(this)}
          >
            ${b("Retry")}
          </gds-button>
        </slot>
      </gds-card>
    `};ee=function(){return this._view.searchQuery.length>0?o`
        <gds-card variant="neutral-02-outlined" border-radius="m">
          <slot name="no-results">
            <gds-flex flex-direction="column" align-items="flex-start" gap="s">
              <gds-text tag="p" font="heading-s">
                ${b("No results found")}
              </gds-text>
              <gds-text tag="p" font="detail-s-book">
                ${b("No results for")} "${this._view.searchQuery}"
              </gds-text>
              <gds-button
                size="small"
                label="${b("Clear search for")} ${this._view.searchQuery}"
                @click=${r(this,s,lt)}
              >
                ${b("Clear search")}
              </gds-button>
            </gds-flex>
          </slot>
        </gds-card>
      `:o`
      <gds-card variant="neutral-02-outlined" border-radius="m">
        <slot name="empty">
          <gds-text tag="p" font="heading-s">
            ${b("No data available")}
          </gds-text>
        </slot>
      </gds-card>
    `};se=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),a=`${t}–${e} ${b("of")} ${this._total}`;return o`
      <slot name="footer">
        <gds-pagination
          .page=${this._view.page}
          .rows=${this._view.rows}
          .options=${this.options}
          .total=${this._total}
          .density=${this.density}
          .label=${a}
          @gds-page-change=${r(this,s,le)}
          @gds-rows-change=${r(this,s,oe)}
          width="100%"
        >
        </gds-pagination>
      </slot>
    `};ae=function(){if(this.headline||this.summary)return o`
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
        ${m(this.searchable||this.settings,()=>o`<gds-divider color="neutral-02"></gds-divider>`,()=>o``)}
      `};re=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await r(this,s,k).call(this)};lt=async function(){this._view={...this._view,searchQuery:"",page:1},await r(this,s,k).call(this)};ie=async function(t){const e=this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc";this._view={...this._view,sortColumn:t,sortDirection:e,page:1},this.dispatchCustomEvent("gds-sort-change",{detail:{sortColumn:t,sortDirection:e},bubbles:!0}),await r(this,s,k).call(this)};le=async function(t){this._view={...this._view,page:t.detail.page},this.dispatchCustomEvent("gds-page-change",{detail:t.detail,bubbles:!0}),await r(this,s,k).call(this)};oe=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},this.dispatchCustomEvent("gds-rows-change",{detail:t.detail,bubbles:!0}),await r(this,s,k).call(this)};ne=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};de=function(t){n(this,s,M)?r(this,s,nt).call(this):r(this,s,ot).call(this),r(this,s,A).call(this)};ce=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),r(this,s,A).call(this),this.requestUpdate()};he=function(t,e){this.toggleRowExpansion(e,t)};pe=async function(){const t=n(this,s,B);n(this,s,Z)?(t.forEach(e=>this._expanded.delete(e)),this.requestUpdate()):await Promise.all(t.map(e=>r(this,s,D).call(this,e,!0)))};V=function(t,e,a){this.dispatchCustomEvent("gds-table-expand-change",{detail:{index:e,row:t,expanded:a,expandedIndices:Array.from(this._expanded)},bubbles:!0})};ge=async function(t,e){const a=r(this,s,X).call(this,t),i=r(this,s,tt).call(this,t),l=typeof a=="function",h=typeof i=="function";if(!l&&!h)return;const g=l?a():void 0,u=h?i():void 0,p=!!(g||u);let x=!1;const S=new Set(this._expanding);S.add(e),this._expanding=S,this.requestUpdate();try{if(g){const _=await g,ye=Array.isArray(_)?_:[],dt=new Map(this._expandedRowsCache);dt.set(e,ye),this._expandedRowsCache=dt}if(u){await u;const _=new Set(this._expandedFullContentResolved);_.add(e),this._expandedFullContentResolved=_}x=!0}catch{if(g){const _=new Map(this._expandedRowsCache);_.set(e,[]),this._expandedRowsCache=_}}finally{p&&x?r(this,s,ft).call(this,e):r(this,s,q).call(this,e),this.requestUpdate()}};D=async function(t,e,a){if(t<0||t>=this._rowsState.length)return!1;const i=a??this._rowsState[t];if(!i)return!1;const l=r(this,s,j).call(this,i,t);if(e&&!l)return!1;const h=this._expanded.has(t);return e===h||(e?(this._expanded.add(t),r(this,s,V).call(this,i,t,!0),this.requestUpdate(),await r(this,s,ge).call(this,i,t)):(r(this,s,q).call(this,t),this._expanded.delete(t),r(this,s,V).call(this,i,t,!1)),this.requestUpdate()),!0};ot=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};nt=function(){this._selected.clear(),this.requestUpdate()};A=function(){this.dispatchCustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0})};ue=function(){var l;const t=(l=this.shadowRoot)==null?void 0:l.querySelector(".data");if(!t)return;const e=()=>{r(this,s,be).call(this,t),r(this,s,fe).call(this,t)};t.addEventListener("scroll",e);const a=new ResizeObserver(()=>e());a.observe(t);const i=t.querySelector("table");i&&a.observe(i),e()};be=function(t){const{scrollTop:e,scrollHeight:a,clientHeight:i}=t,l=a-i;e>0?t.classList.add("scrolled"):t.classList.remove("scrolled"),e<l-1?t.classList.add("scrolled-bottom"):t.classList.remove("scrolled-bottom")};fe=function(t){const{scrollLeft:e,scrollWidth:a,clientWidth:i}=t,l=a-i;a>i?t.classList.add("overflows-x"):t.classList.remove("overflows-x"),e<=0?(t.classList.add("scrolled-x-start"),t.classList.remove("scrolled-x-middle","scrolled-x-end")):e>=l-1?(t.classList.add("scrolled-x-end"),t.classList.remove("scrolled-x-start","scrolled-x-middle")):(t.classList.add("scrolled-x-middle"),t.classList.remove("scrolled-x-start","scrolled-x-end"))};d.styles=ls;c([f()],d.prototype,"headline",2);c([f({attribute:"headline-tag",type:String,reflect:!0})],d.prototype,"headlineTag",2);c([f()],d.prototype,"summary",2);c([f({attribute:"search-label",type:String})],d.prototype,"searchLabel",2);c([f({type:Array})],d.prototype,"options",2);c([f({type:Number})],d.prototype,"page",2);c([f({type:Number})],d.prototype,"rows",2);c([f({type:Array})],d.prototype,"columns",2);c([f()],d.prototype,"data",2);c([f({reflect:!1})],d.prototype,"density",2);c([f({type:Boolean,reflect:!1})],d.prototype,"selectable",2);c([f({attribute:"disable-select-all",type:Boolean,reflect:!1})],d.prototype,"disableSelectAll",2);c([f({type:Boolean,reflect:!1})],d.prototype,"responsive",2);c([f({type:Boolean,reflect:!1})],d.prototype,"plain",2);c([f({type:Boolean,reflect:!1})],d.prototype,"searchable",2);c([f({type:Boolean,reflect:!1})],d.prototype,"settings",2);c([f({type:Boolean,reflect:!1})],d.prototype,"striped",2);c([f({type:Boolean,reflect:!1})],d.prototype,"nocache",2);c([f({type:Object})],d.prototype,"tfoot",2);c([f()],d.prototype,"dataLoadKey",2);c([Se({...Ee,property:"--_table-height",selector:".data"})],d.prototype,"height",2);c([f()],d.prototype,"variant",2);c([y()],d.prototype,"_isMobile",2);c([De("(max-width: 768px)")],d.prototype,"_handleMobile",1);c([y()],d.prototype,"_view",2);c([y()],d.prototype,"_loaded",2);c([y()],d.prototype,"_loading",2);c([y()],d.prototype,"_rowsState",2);c([y()],d.prototype,"_total",2);c([y()],d.prototype,"_selected",2);c([y()],d.prototype,"_expanded",2);c([y()],d.prototype,"_expanding",2);c([y()],d.prototype,"_completingExpansion",2);c([y()],d.prototype,"_expandedRowsCache",2);c([y()],d.prototype,"_expandedFullContentResolved",2);c([y()],d.prototype,"_error",2);c([T("dataLoadKey"),T("data")],d.prototype,"_onDataChange",1);c([T("page",{waitUntilFirstUpdate:!0})],d.prototype,"_onPageChange",1);c([T("rows",{waitUntilFirstUpdate:!0})],d.prototype,"_onRowsChange",1);c([T("columns")],d.prototype,"_onColumnsChange",1);d=c([ze(),Re("gds-table",{dependsOn:os}),Ae({labelledBy:"table",describedBy:"table"})],d);d.define();export{Ma as S};
