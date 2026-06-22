import{P as _e,K as ke,O as $e,a6 as Ce,i as Se,v as Ee,a2 as Re,F as Ae,n as f,R as Le,a3 as ze,w as y,$ as M,g as Te,y as De,z as Ie,a as w,d as m,h as l,E as b,o as k}from"./iframe-CNiEufxD.js";import{l as je}from"./localized-decorator-D1Hn5_QH.js";import{w as Ge}from"./popover.component-D16ZO-_d.js";import{a as Me}from"./dropdown.component-B3XIV67T.js";import"./menu-heading.component-D226fKRC.js";import{a as qe,G as Pe}from"./context-menu.component-BzbwWuIp.js";import"./alert.component-D_vNATiY.js";import"./avatar.component-Bu660vjX.js";import{G as Be}from"./badge.component-BKX6Bnlj.js";import"./blur.component-CFiDX5U7.js";import"./breadcrumb.component-DKO_X4nz.js";import"./calendar.component-BjkbksGq.js";import{G as Fe}from"./card.component-C_C1glu4.js";import"./card-linked.component-BX6NqgyB.js";import"./checkbox-group.component-BJ6wS_ow.js";import"./coachmark.component-CN4KOs0u.js";import"./datepicker.component-DKqp9J8u.js";import"./details.component-vB17G-QG.js";import"./dialog-D0efAGT_.js";import{G as We}from"./divider-7tjmq4ky.js";import"./signal.component-CFmz9p8u.js";import"./filter-chips.component-BCI4emvR.js";import{G as Ue}from"./flex.component-BMIxndx4.js";import"./summary.component-CTtiFhJh.js";import"./grouped-list.component-Dz6s5VC6.js";import"./icon.component-CzdCEeUu.js";import{I as He,a as Ne,b as Qe,c as Ke,d as Ve,e as Oe}from"./zoom-out.component-61xVkBvF.js";import"./arrow-down.component-Bc_-ftmY.js";import"./arrow-left.component-Q9BGhc8q.js";import"./arrow-right.component-D8J6laON.js";import"./arrow-rotate-counter-clockwise.component-C7oFChnE.js";import"./arrow-up.component-BG8wqcIs.js";import"./sun.component-PZ1rLqRN.js";import"./star.component-a3nOj46A.js";import"./bubbles.component-DUte5NN-.js";import"./calender-add.component-C1aNIrIk.js";import"./chain-link-Sj--MvAm.js";import"./checkmark.component-t0TIfQ9Z.js";import{I as Je}from"./chevron-bottom.component-CNo6rxpZ.js";import"./chevron-right-small.component-NaumEkon.js";import"./chevron-left.component-uExlaLCy.js";import"./chevron-right.component-DYl3bZeo.js";import{I as Ze}from"./chevron-top.component-iSDlO2MH.js";import"./circle-check.component-DEhc1QBH.js";import"./circle-info.component-Dc2rnaFx.js";import"./circles-three.component-Dun1fFcN.js";import"./cloud-upload.component-BMCnn64e.js";import"./cloudy-sun.component-CEa3pdIX.js";import"./credit-card.component-C85VY1WV.js";import"./cross-large.component-qZCAZdm9.js";import{I as Ye}from"./cross-small.component--NMNXKaO.js";import{I as Xe}from"./dot-grid-one-horizontal-Bsq_mGDz.js";import"./folder.component-DgJ-TKwz.js";import{I as ts}from"./magnifying-glass.component-ZKiwAR_7.js";import{I as es}from"./minus-small.component-BJWtHaFq.js";import"./people-profile.component-BioO1D73.js";import"./push.component-Dh3qs9Ml.js";import"./rocket.component-MkEZDx04.js";import"./square-grid-circle.component-CfRGyo68.js";import"./triangle-exclamation.component-NO1Nf_rn.js";import{G as ss}from"./img.component-DuoXM27P.js";import{G as as}from"./input.component-BLM6s9LR.js";import{G as rs}from"./link-BbSiZsmx.js";import"./list-item-DdTdjWe2.js";import"./mask.component-7L2FcbIt.js";import"./menu-button.component-C-9rbI1s.js";import{G as is}from"./pagination-DrdtVGpk.js";import"./radio-group.component-BiX3hI3Q.js";import"./rich-text.component--Ta9Odoo.js";import"./segmented-control-CponasFk.js";import"./sensitive-number.component-DRTV0v6v.js";import"./sensitive-date.component-BftEE0Az.js";import"./sensitive-account.component-DGOYNges.js";import"./select.component-BWy_PLxS.js";import"./spinner.component-DAjKy9gn.js";import"./switch.component-uiqZJT-C.js";import{G as ls}from"./text.component-DnBQEB4R.js";import"./textarea.component-DVZEJgZT.js";import"./video.component-mTMOnJOG.js";import"./card-pattern-01.component-DomA7EI9.js";import"./list-item-pattern-01.component-BzUbpkiW.js";import{c as os}from"./rbcb-toggle.template--5-dM55w.js";const ut="important",ns=" !"+ut,B=_e(class extends ke{constructor(t){if(super(t),t.type!==$e.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,a)=>{const r=t[a];return r==null?e:e+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:a}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?a.removeProperty(r):a[r]=null);for(const r in e){const o=e[r];if(o!=null){this.ft.add(r);const h=typeof o=="string"&&o.endsWith(ns);r.includes("-")||h?a.setProperty(r,h?o.slice(0,-11):o,h?ut:""):a[r]=o}}return Ce}}),ds=Se`
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
`,cs=[Ee,Re,ds],hs=[Ae,Fe,We,ss,qe,Pe,Me,as,is,ls,Be,rs,Ue,He,Je,Ze,Ne,Qe,Ye,es,ts,Ke,Ve,Oe,Xe],ps={compact:{input:"small",dropdown:"small"},comfortable:{input:"small",dropdown:"small"},spacious:{input:"large",dropdown:"medium"}},bt=t=>typeof t=="object"&&t!==null&&Array.isArray(t.slots),gs={toString(){return String(this.value??"")},valueOf(){return this.value},[Symbol.toPrimitive](t){return t==="number"?Number(this.value):String(this.value??"")}};function Ha(t,e=["value"],a){if(bt(t))return t;let r=["value"],o;return Array.isArray(e)?r=e:(typeof e=="string"||typeof e=="number")&&(o=e),Array.isArray(a)?r=a:(typeof a=="string"||typeof a=="number")&&(o=a),Object.assign(Object.create(gs),{value:t,slots:r,...typeof o<"u"?{key:o}:{}})}var us=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,ft=t=>{throw TypeError(t)},c=(t,e,a,r)=>{for(var o=r>1?void 0:r?bs(e,a):e,h=t.length-1,g;h>=0;h--)(g=t[h])&&(o=(r?g(e,a,o):g(o))||o);return r&&o&&us(e,a,o),o},Y=(t,e,a)=>e.has(t)||ft("Cannot "+a),n=(t,e,a)=>(Y(t,e,"read from private field"),a?a.call(t):e.get(t)),S=(t,e,a)=>e.has(t)?ft("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),E=(t,e,a,r)=>(Y(t,e,"write to private field"),e.set(t,a),a),i=(t,e,a)=>(Y(t,e,"access private method"),a),T,X,j,L,z,s,I,v,$,Q,R,tt,yt,F,vt,W,et,wt,st,U,K,mt,xt,V,A,H,O,q,J,_t,kt,$t,Ct,St,Et,Rt,At,Lt,at,rt,N,it,zt,Tt,Dt,It,P,lt,ot,jt,Gt,Mt,qt,Pt,nt,Bt,Ft,Wt,Ut,Ht,Nt,Qt,Kt,Vt,Ot,Jt,Zt,Yt,dt,Xt,te,ee,se,ae,re,ie,le,oe,ne,ct,de,ce,he,pe,ge,ue,be,fe,Z,ye,G,ht,pt,D,ve,we,me;let d=class extends Ie{constructor(){super(...arguments),S(this,s),S(this,T,{}),S(this,X,300*1e3),S(this,j,!1),S(this,L,null),S(this,z,null),this.headlineTag="h2",this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.disableSelectAll=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="neutral-02-outlined",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._expanded=new Set,this._expanding=new Set,this._completingExpansion=new Set,this._expandedRowsCache=new Map,this._expandedFullContentResolved=new Set,this._error=null,S(this,R,new Map),S(this,tt,140)}_handleMobile(t){this._isMobile=t}_onDataChange(){E(this,T,{}),i(this,s,A).call(this)}_onPageChange(){this._view={...this._view,page:Number(this.page??1)},i(this,s,V).call(this)}_onRowsChange(){this._view={...this._view,rows:Number(this.rows??10),page:1},i(this,s,V).call(this)}_onColumnsChange(){E(this,T,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(t=>t.visible!==!1).map(t=>t.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{i(this,s,ve).call(this),i(this,s,O).call(this)})}updated(t){super.updated(t),i(this,s,O).call(this)}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return l`
      <div class="${w(t)}">
        ${[i(this,s,oe).call(this),i(this,s,Et).call(this),m(this._error,()=>i(this,s,re).call(this),()=>m(this._rowsState.length===0&&!this._loading,()=>i(this,s,ie).call(this),()=>i(this,s,ae).call(this))),i(this,s,le).call(this)]}
      </div>
    `}clearSelection(){i(this,s,pt).call(this),i(this,s,D).call(this)}selectAll(){i(this,s,ht).call(this),i(this,s,D).call(this)}setSelection(t){const e=t.filter(a=>a>=0&&a<this._rowsState.length);this._selected=new Set(e),i(this,s,D).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}async expandRow(t){return i(this,s,G).call(this,t,!0)}collapseRow(t){return i(this,s,G).call(this,t,!1),!0}async toggleRowExpansion(t,e){if(t<0||t>=this._rowsState.length)return!1;const a=!this._expanded.has(t);return i(this,s,G).call(this,t,a,e)}getExpandedIndices(){return Array.from(this._expanded)}};T=new WeakMap;X=new WeakMap;j=new WeakMap;L=new WeakMap;z=new WeakMap;s=new WeakSet;I=function(){return this.responsive&&this._isMobile};v=function(){return!n(this,s,I)&&n(this,s,W).length>0};$=function(){return this.selectable&&!n(this,s,I)};Q=function(){return ps[this.density]};R=new WeakMap;tt=new WeakMap;yt=function(){return this._selected.size>0};F=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};vt=function(){return n(this,s,yt)&&!n(this,s,F)};W=function(){return this._rowsState.map((t,e)=>i(this,s,P).call(this,t,e)?e:-1).filter(t=>t!==-1)};et=function(){const t=n(this,s,W);return t.length>0&&t.every(e=>this._expanded.has(e))};wt=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};st=function(t){const e=n(this,R).get(t);e!==void 0&&(window.clearTimeout(e),n(this,R).delete(t))};U=function(t){if(i(this,s,st).call(this,t),this._expanding.has(t)){const e=new Set(this._expanding);e.delete(t),this._expanding=e}if(this._completingExpansion.has(t)){const e=new Set(this._completingExpansion);e.delete(t),this._completingExpansion=e}};K=function(){n(this,R).forEach(t=>window.clearTimeout(t)),n(this,R).clear(),this._expanding.clear(),this._completingExpansion.clear()};mt=function(t){i(this,s,st).call(this,t);const e=new Set(this._completingExpansion);e.add(t),this._completingExpansion=e,this.requestUpdate();const a=window.setTimeout(()=>{i(this,s,U).call(this,t),this.requestUpdate()},n(this,tt));n(this,R).set(t,a)};xt=function(t){return Date.now()-t.timestamp<n(this,X)};V=function(){n(this,j)||(E(this,j,!0),queueMicrotask(()=>{E(this,j,!1),i(this,s,A).call(this)}))};A=async function(){if(!this.data)return;const t=i(this,s,wt).call(this);if(n(this,z)&&n(this,L)===t)return n(this,z);if(!this.nocache){const a=t,r=n(this,T)[a];if(r&&i(this,s,xt).call(this,r)){this._rowsState=r.rows,this._total=r.total,this._expanded.clear(),i(this,s,K).call(this),this._expandedRowsCache.clear(),this._expandedFullContentResolved.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{rows:r.rows,total:r.total,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0});return}}this._loading=!0,this._error=null;const e=(async()=>{try{const a=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const r=t;n(this,T)[r]={rows:a.rows,total:a.total,timestamp:Date.now()}}this._rowsState=a.rows,this._total=a.total,this._selected.clear(),this._expanded.clear(),i(this,s,K).call(this),this._expandedRowsCache.clear(),this._expandedFullContentResolved.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{...a,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0})}catch(a){this._error=a,this.dispatchCustomEvent("gds-table-data-error",{detail:a,bubbles:!0})}finally{this._loading=!1,n(this,L)===t&&(E(this,L,null),E(this,z,null))}})();return E(this,L,t),E(this,z,e),e};H=function(){const t=this.columns.filter(r=>this._view.visibleColumns.has(r.key)),e=t.filter(r=>r.sticky==="left"),a=t.filter(r=>r.sticky==="right");return{lastLeft:e.length?e[e.length-1].key:null,lastRight:a.length?a[0].key:null}};O=function(){const t=this.shadowRoot;if(!t)return;const e=Array.from(t.querySelectorAll("thead th.sticky-left")),a=Array.from(t.querySelectorAll("thead th.sticky-right")),r=t.querySelector("thead th.expander-cell"),o=t.querySelector("thead th.checkbox-cell");if(!e.length&&!a.length)return;t.querySelectorAll("[data-col-key]").forEach(u=>{u.style.left="",u.style.right=""});let h=(r?.offsetWidth??0)+(o?.offsetWidth??0);for(const u of e){const p=u.dataset.colKey,x=`${h}px`;u.style.left=x,h+=u.offsetWidth,p&&t.querySelectorAll(`[data-col-key="${p}"]`).forEach(C=>C.style.left=x)}let g=0;for(const u of[...a].reverse()){const p=u.dataset.colKey,x=`${g}px`;u.style.right=x,g+=u.offsetWidth,p&&t.querySelectorAll(`[data-col-key="${p}"]`).forEach(C=>C.style.right=x)}};q=function(t,e,a){if(typeof a=="string"||typeof a=="number")return a;const r=t?.id;return typeof r=="string"||typeof r=="number"?r:e+1};J=function(t){return l`<span class="cell-wrapped-content">${t}</span>`};_t=function(t){return l`<span class="column-label" aria-hidden="true">
      ${t.label}:
    </span>`};kt=function(t,e,a){const r=`${t}:${e}:${a}`;return l`<slot name="${r}"></slot>`};$t=function(t,e,a){const r=e.value?e.value(t):t[e.key],o=this._isMobile&&this.responsive,h=!!e.justify;let g;if(bt(r)){const u=i(this,s,q).call(this,t,a,r.key);g=r.slots.map(p=>p==="value"?r.value===void 0?null:h?i(this,s,J).call(this,r.value):r.value:i(this,s,kt).call(this,e.key,u,p))}else g=h?i(this,s,J).call(this,r):r;return l`
      <div
        class="cell-content"
        aria-label=${k(o?e.label:void 0)}
      >
        ${o?i(this,s,_t).call(this,e):null} ${g}
      </div>
    `};Ct=function(t){const e=this._view.sortColumn===t.key,a=this._view.sortDirection;return e?a==="asc"?l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:l`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};St=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};Et=function(){return this.plain||!i(this,s,St).call(this)?null:l`
      <div class="header">
        <div class="lead">
          ${m(this.searchable,()=>l`
              <gds-input
                type="text"
                size="${n(this,s,Q).input}"
                plain
                clearable
                label="${this.searchLabel||b("Search table")}"
                .value=${this._view.searchQuery}
                @input=${i(this,s,ne)}
                @gds-input-cleared=${i(this,s,ct)}
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
          ${m(this.settings,()=>l`
              <gds-dropdown
                multiple
                plain
                size="${n(this,s,Q).dropdown}"
                label="${b("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${i(this,s,pe)}
              >
                <span slot="trigger">${b("Columns")}</span>
                ${this.columns.map(t=>l`
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
    `};Rt=function(t){const e=this._view.sortColumn===t.key,a=this._view.sortDirection,{lastLeft:r,lastRight:o}=i(this,s,H).call(this);let h=t.label;if(t.sortable)if(e){const p=a==="asc"?b("ascending"):b("descending");h=`${t.label}, ${b("sorted")} ${p}`}else h=`${t.label}, ${b("sortable")}`;const g=w({sortable:!!t.sortable,sorted:e,"sort-asc":e&&a==="asc","sort-desc":e&&a==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify,wrap:!!t.width,"sticky-left":t.sticky==="left","sticky-right":t.sticky==="right","sticky-left-last":t.sticky==="left"&&t.key===r,"sticky-right-last":t.sticky==="right"&&t.key===o}),u=B({"--cell-width":t.width});return l`
      <th
        class=${g}
        style=${u}
        data-col-key=${k(t.sticky?t.key:void 0)}
        aria-sort="${e?a==="asc"?"ascending":"descending":"none"}"
      >
        ${m(t.sortable,()=>l`
            <button
              type="button"
              class="column-header"
              aria-label="${h}"
              aria-pressed=${e}
              @click=${()=>i(this,s,de).call(this,t.key)}
            >
              <span class="column-label">${t.label}</span>
              <span class="sort-icon">${i(this,s,Ct).call(this,t)}</span>
            </button>
          `,()=>l`
            <div class="column-header">
              <span class="column-label">${t.label}</span>
            </div>
          `)}
      </th>
    `};At=function(){return n(this,s,$)?l`
      <th class="checkbox-cell">
        <div class="cell-center">
          ${i(this,s,dt).call(this,{checked:n(this,s,F),indeterminate:n(this,s,vt),ariaLabel:b("Select all rows"),onToggle:()=>i(this,s,ge).call(this,{}),skip:this.disableSelectAll})}
        </div>
      </th>
    `:null};Lt=function(){if(!n(this,s,v))return null;const t=n(this,s,et),e=t?b("Collapse all rows"):b("Expand all rows");return l`
      <th class="expander-cell expander-header">
        <div class="cell-center">
          <gds-button
            rank="tertiary"
            size="small"
            label="${e}"
            @click=${()=>i(this,s,fe).call(this)}
          >
            ${t?l`<gds-icon-chevron-grabber-vertical-reversed></gds-icon-chevron-grabber-vertical-reversed>`:l`<gds-icon-chevron-grabber-vertical></gds-icon-chevron-grabber-vertical>`}
          </gds-button>
        </div>
      </th>
    `};at=function(t){return"subRows"in t?t.subRows:t?.children};rt=function(t){if("fullContent"in t)return t.fullContent};N=function(t,e){return this._expandedRowsCache.get(e)??[]};it=function(t){return typeof i(this,s,at).call(this,t)=="function"};zt=function(t){return typeof i(this,s,rt).call(this,t)=="function"};Tt=function(t,e){const a=i(this,s,N).call(this,t,e).length||1,r=Number(t.subRowCount);return!Number.isFinite(r)||r<=0?a:Math.floor(r)};Dt=function(t,e){const a=i(this,s,q).call(this,t,e);return!!this.querySelector(`[slot="expand:${a}:full"]`)};It=function(t,e){return i(this,s,Dt).call(this,t,e)};P=function(t,e){return n(this,s,I)?!1:typeof t.isExpandable=="boolean"?t.isExpandable:i(this,s,it).call(this,t)||i(this,s,zt).call(this,t)||i(this,s,N).call(this,t,e).length>0?!0:i(this,s,It).call(this,t,e)};lt=function(t,e){return`row-expand-group-${String(i(this,s,q).call(this,t,e)).replace(/[^a-zA-Z0-9_-]/g,"-")}`};ot=function(){return this.columns.filter(e=>this._view.visibleColumns.has(e.key)).length+(n(this,s,v)?1:0)+(n(this,s,$)?1:0)};jt=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>i(this,s,Rt).call(this,t))};Gt=function(){return l`
      <thead>
        <tr>
          ${[i(this,s,Lt).call(this),i(this,s,At).call(this),i(this,s,jt).call(this)]}
        </tr>
      </thead>
    `};Mt=function(t,e,a){const{lastLeft:r,lastRight:o}=i(this,s,H).call(this),h=w({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width,"sticky-left":e.sticky==="left","sticky-right":e.sticky==="right","sticky-left-last":e.sticky==="left"&&e.key===r,"sticky-right-last":e.sticky==="right"&&e.key===o}),g=B({"--cell-width":e.width});return l`
      <td
        style=${g}
        class=${h}
        data-col-key=${k(e.sticky?e.key:void 0)}
      >
        ${i(this,s,$t).call(this,t,e,a)}
      </td>
    `};qt=function(t,e){if(!n(this,s,v))return null;if(!i(this,s,P).call(this,t,e))return l`<td class="expander-cell"></td>`;const r=this._expanded.has(e),o=i(this,s,lt).call(this,t,e),h=r?t.collapseLabel||b("Collapse row"):t.expandLabel||b("Expand row");return l`
      <td class="expander-cell">
        <gds-button
          class="expand-toggle"
          rank="tertiary"
          size="small"
          label="${h} ${e+1}"
          aria-expanded=${r?"true":"false"}
          aria-controls=${o}
          @click=${()=>i(this,s,be).call(this,t,e)}
        >
          ${r?l`<gds-icon-chevron-top size="s"></gds-icon-chevron-top>`:l`<gds-icon-chevron-bottom
                size="s"
              ></gds-icon-chevron-bottom>`}
        </gds-button>
      </td>
    `};Pt=function(t){if(!n(this,s,$))return null;const e=`${b("Select row")} ${t+1}`;return l`
      <td class="checkbox-cell">
        <div class="cell-center">
          ${i(this,s,dt).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>i(this,s,ue).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
        </div>
      </td>
    `};nt=function(t,e){return this.columns.filter(a=>this._view.visibleColumns.has(a.key)).map(a=>i(this,s,Mt).call(this,t,a,e))};Bt=function(t,e,a){const r=i(this,s,q).call(this,t,e);return l`
      <tr
        class="expanded-row full expanded-group-end"
        id="${a}"
        aria-level="2"
      >
        <td
          class="expanded-full-cell"
          colspan=${i(this,s,ot).call(this)}
        >
          ${l`<slot name="expand:${r}:full"></slot>`}
        </td>
      </tr>
    `};Ft=function(t,e,a,r,o,h=!1){const g=this.columns.filter(p=>this._view.visibleColumns.has(p.key)),u=w({"expanded-row":!0,aligned:!0,"skeleton-leave":h,"expanded-group-end":r===o-1});return l`
      <tr
        class=${u}
        id=${k(r===0?a:void 0)}
        aria-level="2"
        aria-busy="true"
      >
        ${n(this,s,v)?l`<td class="expander-cell"></td>`:null}
        ${n(this,s,$)?l`<td class="checkbox-cell"></td>`:null}
        ${g.map(p=>{const x=w({[`align-${p.align}`]:!!p.align,[`justify-${p.justify}`]:!!p.justify,wrap:!!p.width}),C=B({"--cell-width":p.width}),_=String(p.key)==="actions";return l`
            <td class=${x} style=${C}>
              <div class="cell-content">
                ${_?l`<span class="skeleton skeleton-action"></span>`:l`<span class="skeleton skeleton-text"></span>`}
              </div>
            </td>
          `})}
      </tr>
    `};Wt=function(t,e,a,r=!1){const o=i(this,s,Tt).call(this,t,e);return Array.from({length:o},(h,g)=>i(this,s,Ft).call(this,t,e,a,g,o,r))};Ut=function(t,e=!1){const a=w({"expanded-row":!0,full:!0,"expanded-group-end":!0,"skeleton-leave":e});return l`
      <tr class=${a} id="${t}" aria-level="2" aria-busy="true">
        <td
          class="expanded-full-cell"
          colspan=${i(this,s,ot).call(this)}
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
    `};Ht=function(t){return{"expanded-row":!0,child:!0,"expanded-group-end":t}};Nt=function(t,e,a){return{selected:this._selected.has(t),loading:this._loading,"expanded-parent":a,"has-expandable-rows":e}};Qt=function(t,e){return t?e?"true":"false":void 0};Kt=function(t,e,a){return{classes:i(this,s,Nt).call(this,t,e,a),ariaExpanded:i(this,s,Qt).call(this,e,a)}};Vt=function(t,e,a,r,o){const h=this._rowsState.length+e*1e3+a;return l`
      <tr
        class=${w(i(this,s,Ht).call(this,r))}
        id=${k(a===0?o:void 0)}
        aria-level="2"
      >
        ${n(this,s,v)?l`<td class="expander-cell"></td>`:null}
        ${n(this,s,$)?l`<td class="checkbox-cell"></td>`:null}
        ${i(this,s,nt).call(this,t,h)}
      </tr>
    `};Ot=function(t){return i(this,s,it).call(this,t)?"rows":"full"};Jt=function(t,e){const a=i(this,s,P).call(this,t,e),r=a&&this._expanded.has(e),o=this._expanding.has(e),h=this._completingExpansion.has(e),g=i(this,s,lt).call(this,t,e),u=i(this,s,N).call(this,t,e),p=i(this,s,Ot).call(this,t);return{isExpandable:a,isExpanded:r,isExpanding:o,isCompleting:h,groupId:g,expandedRows:u,hasExpandedRows:u.length>0,loadingKind:p}};Zt=function(t,e,a){return a.isExpanding?a.loadingKind==="full"?i(this,s,Ut).call(this,a.groupId,a.isCompleting):i(this,s,Wt).call(this,t,e,a.groupId,a.isCompleting):a.hasExpandedRows?a.expandedRows.map((r,o)=>i(this,s,Vt).call(this,r,e,o,o===a.expandedRows.length-1,o===0?a.groupId:void 0)):i(this,s,Bt).call(this,t,e,a.groupId)};Yt=function(t,e){const a=i(this,s,Jt).call(this,t,e),r=i(this,s,Kt).call(this,e,a.isExpandable,a.isExpanded);return l`
      <tr
        class=${w(r.classes)}
        aria-level=${k(n(this,s,v)?"1":void 0)}
        aria-expanded=${k(r.ariaExpanded)}
      >
        ${[i(this,s,qt).call(this,t,e),i(this,s,Pt).call(this,e),i(this,s,nt).call(this,t,e)]}
      </tr>
      ${m(a.isExpanded,()=>i(this,s,Zt).call(this,t,e,a))}
    `};dt=function({checked:t,indeterminate:e=!1,disabled:a=!1,ariaLabel:r,onToggle:o,skip:h=!1}){if(h)return null;const g=p=>{p.stopPropagation(),!a&&o()};return l`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${r}
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
        ${os({checked:t,indeterminate:e,disabled:a,invalid:!1})}
      </div>
    `};Xt=function(t){const a=this._isMobile&&this.responsive?l`<span class="skeleton skeleton-text"></span>`:null;return l`
      <div class="cell-content">
        ${a}
        <span class="skeleton skeleton-text"></span>
      </div>
    `};te=function(t){return l`
      <tr class="skeleton-row">
        ${m(n(this,s,v),()=>l`
            <td class="expander-cell">
              <span class="skeleton skeleton-action"></span>
            </td>
          `)}
        ${m(n(this,s,$),()=>l`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>l`<td>${i(this,s,Xt).call(this,e)}</td>`)}
      </tr>
    `};ee=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,a)=>i(this,s,te).call(this,a));return l`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return l`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>i(this,s,Yt).call(this,t,e))}
      </tbody>
    `};se=function(){if(!this.tfoot||n(this,s,I))return null;const t=this.tfoot.label,e=this.columns.filter(r=>this._view.visibleColumns.has(r.key)),a=w({tablefoot:!0,sticky:!!this.tfoot.sticky});return l`
      <tfoot class=${a}>
        <tr>
          ${m(n(this,s,v),()=>l`<td class="expander-cell"></td>`)}
          ${m(n(this,s,$),()=>l`<td class="checkbox-cell"></td>`)}
          ${e.map((r,o)=>{const{lastLeft:h,lastRight:g}=i(this,s,H).call(this),u=w({"tablefoot-cell":!0,"tablefoot-label-cell":o===0,[`align-${r.align}`]:!!r.align,[`justify-${r.justify}`]:!!r.justify,wrap:!!r.width,"sticky-left":r.sticky==="left","sticky-right":r.sticky==="right","sticky-left-last":r.sticky==="left"&&r.key===h,"sticky-right-last":r.sticky==="right"&&r.key===g}),p=B({"--cell-width":r.width});return o===0&&t?l`
                <th
                  scope="row"
                  class=${u}
                  style=${p}
                  data-col-key=${k(r.sticky?r.key:void 0)}
                >
                  <div class="cell-content">
                    <span class="tablefoot-label">${t}</span>
                    <slot name="tfoot:${r.key}"></slot>
                  </div>
                </th>
              `:l`
              <td
                class=${u}
                style=${p}
                data-col-key=${k(r.sticky?r.key:void 0)}
              >
                <div class="cell-content">
                  <slot name="tfoot:${r.key}"></slot>
                </div>
              </td>
            `})}
        </tr>
      </tfoot>
    `};ae=function(){const t=w({responsive:this.responsive,data:!0,"is-expandable":n(this,s,v),"is-selectable":n(this,s,$),"has-tfoot":!!this.tfoot&&!n(this,s,I),"has-sticky-left":this.columns.some(a=>a.sticky==="left"),"has-sticky-right":this.columns.some(a=>a.sticky==="right"),"has-sticky":this.columns.some(a=>a.sticky==="left"||a.sticky==="right"),"no-mask":n(this,s,v)||n(this,s,$)||this.columns.some(a=>a.sticky==="left"||a.sticky==="right"),[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),e=`${this.summary?this.summary+", ":""}${b("Data table with")} ${this._total} ${b("rows")}`;return l`
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
            role=${k(n(this,s,v)?"treegrid":void 0)}
          >
            <caption class="visually-hidden">
              ${e}
            </caption>
            ${i(this,s,Gt).call(this)} ${i(this,s,ee).call(this)}
            ${i(this,s,se).call(this)}
          </table>
        </div>
      </gds-card>
    `};re=function(){return l`
      <gds-card variant="neutral-02-outlined" border-radius="m">
        <slot name="error">
          <gds-text tag="p">${b("Error loading data")}</gds-text>
          <gds-button
            size="small"
            label="${b("Retry loading data")}"
            @click=${()=>i(this,s,A).call(this)}
          >
            ${b("Retry")}
          </gds-button>
        </slot>
      </gds-card>
    `};ie=function(){return this._view.searchQuery.length>0?l`
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
                @click=${i(this,s,ct)}
              >
                ${b("Clear search")}
              </gds-button>
            </gds-flex>
          </slot>
        </gds-card>
      `:l`
      <gds-card variant="neutral-02-outlined" border-radius="m">
        <slot name="empty">
          <gds-text tag="p" font="heading-s">
            ${b("No data available")}
          </gds-text>
        </slot>
      </gds-card>
    `};le=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),a=`${t}–${e} ${b("of")} ${this._total}`;return l`
      <slot name="footer">
        <gds-pagination
          .page=${this._view.page}
          .rows=${this._view.rows}
          .options=${this.options}
          .total=${this._total}
          .density=${this.density}
          .label=${a}
          @gds-page-change=${i(this,s,ce)}
          @gds-rows-change=${i(this,s,he)}
          width="100%"
        >
        </gds-pagination>
      </slot>
    `};oe=function(){if(this.headline||this.summary)return l`
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
        ${m(this.searchable||this.settings,()=>l`<gds-divider color="neutral-02"></gds-divider>`,()=>l``)}
      `};ne=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await i(this,s,A).call(this)};ct=async function(){this._view={...this._view,searchQuery:"",page:1},await i(this,s,A).call(this)};de=async function(t){const e=this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc";this._view={...this._view,sortColumn:t,sortDirection:e,page:1},this.dispatchCustomEvent("gds-sort-change",{detail:{sortColumn:t,sortDirection:e},bubbles:!0}),await i(this,s,A).call(this)};ce=function(t){this._view={...this._view,page:t.detail.page},this.page=t.detail.page,this.dispatchCustomEvent("gds-page-change",{detail:t.detail,bubbles:!0})};he=function(t){this._view={...this._view,rows:t.detail.rows,page:1},this.rows=t.detail.rows,this.page=1,this.dispatchCustomEvent("gds-rows-change",{detail:t.detail,bubbles:!0})};pe=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};ge=function(t){n(this,s,F)?i(this,s,pt).call(this):i(this,s,ht).call(this),i(this,s,D).call(this)};ue=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),i(this,s,D).call(this),this.requestUpdate()};be=function(t,e){this.toggleRowExpansion(e,t)};fe=async function(){const t=n(this,s,W);n(this,s,et)?(t.forEach(e=>this._expanded.delete(e)),this.requestUpdate()):await Promise.all(t.map(e=>i(this,s,G).call(this,e,!0)))};Z=function(t,e,a){this.dispatchCustomEvent("gds-table-expand-change",{detail:{index:e,row:t,expanded:a,expandedIndices:Array.from(this._expanded)},bubbles:!0})};ye=async function(t,e){const a=i(this,s,at).call(this,t),r=i(this,s,rt).call(this,t),o=typeof a=="function",h=typeof r=="function";if(!o&&!h)return;const g=o?a():void 0,u=h?r():void 0,p=!!(g||u);let x=!1;const C=new Set(this._expanding);C.add(e),this._expanding=C,this.requestUpdate();try{if(g){const _=await g,xe=Array.isArray(_)?_:[],gt=new Map(this._expandedRowsCache);gt.set(e,xe),this._expandedRowsCache=gt}if(u){await u;const _=new Set(this._expandedFullContentResolved);_.add(e),this._expandedFullContentResolved=_}x=!0}catch{if(g){const _=new Map(this._expandedRowsCache);_.set(e,[]),this._expandedRowsCache=_}}finally{p&&x?i(this,s,mt).call(this,e):i(this,s,U).call(this,e),this.requestUpdate()}};G=async function(t,e,a){if(t<0||t>=this._rowsState.length)return!1;const r=a??this._rowsState[t];if(!r)return!1;const o=i(this,s,P).call(this,r,t);if(e&&!o)return!1;const h=this._expanded.has(t);return e===h||(e?(this._expanded.add(t),i(this,s,Z).call(this,r,t,!0),this.requestUpdate(),await i(this,s,ye).call(this,r,t)):(i(this,s,U).call(this,t),this._expanded.delete(t),i(this,s,Z).call(this,r,t,!1)),this.requestUpdate()),!0};ht=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};pt=function(){this._selected.clear(),this.requestUpdate()};D=function(){this.dispatchCustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0})};ve=function(){const t=this.shadowRoot?.querySelector(".data");if(!t)return;const e=()=>{i(this,s,we).call(this,t),i(this,s,me).call(this,t)};t.addEventListener("scroll",e);const a=new ResizeObserver(()=>e());a.observe(t);const r=t.querySelector("table");r&&a.observe(r),e()};we=function(t){const{scrollTop:e,scrollHeight:a,clientHeight:r}=t,o=a-r;e>0?t.classList.add("scrolled"):t.classList.remove("scrolled"),e<o-1?t.classList.add("scrolled-bottom"):t.classList.remove("scrolled-bottom")};me=function(t){const{scrollLeft:e,scrollWidth:a,clientWidth:r}=t,o=a-r;a>r?t.classList.add("overflows-x"):t.classList.remove("overflows-x"),e<=0?(t.classList.add("scrolled-x-start"),t.classList.remove("scrolled-x-middle","scrolled-x-end")):e>=o-1?(t.classList.add("scrolled-x-end"),t.classList.remove("scrolled-x-start","scrolled-x-middle")):(t.classList.add("scrolled-x-middle"),t.classList.remove("scrolled-x-start","scrolled-x-end"))};d.styles=cs;c([f()],d.prototype,"headline",2);c([f({attribute:"headline-tag",type:String,reflect:!0})],d.prototype,"headlineTag",2);c([f()],d.prototype,"summary",2);c([f({attribute:"search-label",type:String})],d.prototype,"searchLabel",2);c([f({type:Array})],d.prototype,"options",2);c([f({type:Number})],d.prototype,"page",2);c([f({type:Number})],d.prototype,"rows",2);c([f({type:Array})],d.prototype,"columns",2);c([f()],d.prototype,"data",2);c([f({reflect:!1})],d.prototype,"density",2);c([f({type:Boolean,reflect:!1})],d.prototype,"selectable",2);c([f({attribute:"disable-select-all",type:Boolean,reflect:!1})],d.prototype,"disableSelectAll",2);c([f({type:Boolean,reflect:!1})],d.prototype,"responsive",2);c([f({type:Boolean,reflect:!1})],d.prototype,"plain",2);c([f({type:Boolean,reflect:!1})],d.prototype,"searchable",2);c([f({type:Boolean,reflect:!1})],d.prototype,"settings",2);c([f({type:Boolean,reflect:!1})],d.prototype,"striped",2);c([f({type:Boolean,reflect:!1})],d.prototype,"nocache",2);c([f({type:Object})],d.prototype,"tfoot",2);c([f()],d.prototype,"dataLoadKey",2);c([Le({...ze,property:"--_table-height",selector:".data"})],d.prototype,"height",2);c([f()],d.prototype,"variant",2);c([y()],d.prototype,"_isMobile",2);c([Ge("(max-width: 768px)")],d.prototype,"_handleMobile",1);c([y()],d.prototype,"_view",2);c([y()],d.prototype,"_loaded",2);c([y()],d.prototype,"_loading",2);c([y()],d.prototype,"_rowsState",2);c([y()],d.prototype,"_total",2);c([y()],d.prototype,"_selected",2);c([y()],d.prototype,"_expanded",2);c([y()],d.prototype,"_expanding",2);c([y()],d.prototype,"_completingExpansion",2);c([y()],d.prototype,"_expandedRowsCache",2);c([y()],d.prototype,"_expandedFullContentResolved",2);c([y()],d.prototype,"_error",2);c([M("dataLoadKey"),M("data")],d.prototype,"_onDataChange",1);c([M("page",{waitUntilFirstUpdate:!0})],d.prototype,"_onPageChange",1);c([M("rows",{waitUntilFirstUpdate:!0})],d.prototype,"_onRowsChange",1);c([M("columns")],d.prototype,"_onColumnsChange",1);d=c([je(),Te("gds-table",{dependsOn:hs}),De({labelledBy:"table",describedBy:"table"})],d);d.define();export{Ha as S};
