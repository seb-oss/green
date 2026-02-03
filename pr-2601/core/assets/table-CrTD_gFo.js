import{i as W,ab as ee,a0 as se,a4 as ae,aq as ie,J as tt,b as v,a as w,o as F,O as p,E as re,h as l,ar as oe,n as c,d as et,a8 as A,g as st,P as at,G as le,$ as ne,X as de,Z as ce,af as he,t as pe,ai as ge,s as ue,ag as ye,I as x}from"./iframe-DLqKMtk0.js";import{l as it}from"./localized-decorator-DOVk7XSQ.js";import{w as fe}from"./popover.component-D2U_gyG4.js";import{a as me}from"./dropdown.component-tFc76OAZ.js";import"./menu-heading.component-BqEuZMJy.js";import{a as be,G as ve}from"./context-menu.component-CYeOae7g.js";import"./alert.component-Cj3WE0eZ.js";import{G as _e}from"./badge.component-C8f7xlte.js";import"./blur.component-rKawkHO7.js";import"./breadcrumb.component-LS-tLeh6.js";import"./calendar.component-BaCl6gt1.js";import{G as rt}from"./card.component-HuMgwQrE.js";import"./card-linked.component-Cb9SQYvR.js";import"./checkbox-group.component-QvUVbEvI.js";import"./coachmark.component-DBuhZOlX.js";import"./datepicker.component-fy_0a_hR.js";import{G as ot}from"./flex.component-DeoECx29.js";import{I as we,a as xe,b as ke,c as $e,d as Se}from"./zoom-out.component-C7O8MVC8.js";import{G as Ce}from"./divider.component-O7A8J25-.js";import"./signal.component-DAc0Fr2D.js";import"./filter-chips.component-BuRf6bK-.js";import"./summary.component-DySJVX_8.js";import"./grouped-list.component-BNA8zc0B.js";import"./icon.component-D1vcvTVf.js";import"./arrow-down.component-CTHNiZv-.js";import"./arrow-left.component-CCrr0_8j.js";import"./arrow-right.component-D8TfDfC_.js";import"./arrow-rotate-counter-clockwise.component-zWH3Ohwh.js";import"./arrow-up.component-DM-ulDep.js";import"./sun.component-CqkHyzQW.js";import"./star.component-D39eEVGW.js";import"./bubbles.component-EKkeN3V4.js";import"./calender-add.component-DZ-Qgz0Q.js";import"./chain-link-ClPjpM9y.js";import"./checkmark.component-B1QN-spq.js";import"./chevron-bottom.component-DU4Ub9Oq.js";import"./chevron-right-small.component-D_LZEZ0Y.js";import"./chevron-left.component-Ijn7j8FA.js";import"./chevron-right.component-Dc2SftcD.js";import"./chevron-top.component-uoYAVebt.js";import"./circle-check.component-yl8CQf6h.js";import"./triangle-exclamation.component-clAVJ6gM.js";import"./circles-three.component-BVHkyz8t.js";import"./cloudy-sun.component-wmu9viV5.js";import"./credit-card.component-D0G1ixpi.js";import{I as Ee}from"./cross-small.component-Bdgc3Vde.js";import{I as De}from"./dot-grid-one-horizontal-MRzNaZPg.js";import"./folder.component-Bf8u_7gE.js";import{I as Ie}from"./magnifying-glass.component-Bic2LM_Y.js";import{I as Te}from"./minus-small.component-Dv_4h67q.js";import"./people-profile.component-53IfdH-7.js";import"./push.component-ChB6sKHN.js";import"./rocket.component-BKYAQ-kt.js";import"./square-grid-circle.component-DHNUQLhr.js";import{G as Ge}from"./img.component-CV5WE5FI.js";import{G as Ae}from"./input.component-Bub0FMsu.js";import{G as ze}from"./link.component-BTStfQUA.js";import"./mask.component-Df4_-vcO.js";import"./menu-button.component-CFkiTpX7.js";import{G as Le}from"./pagination-wHy9iMue.js";import"./radio-group.component-CfI3TDQh.js";import"./rich-text.component-CMZEFWTu.js";import"./segmented-control-Bx034jGc.js";import"./sensitive-number.component-lo9zla0T.js";import"./sensitive-date.component-B89nLq_7.js";import"./sensitive-account.component-5INKoPVX.js";import"./select.component-DqnkC1A3.js";import"./spinner.component-CWcC2Lkb.js";import{G as Me}from"./text-DR4TzMuQ.js";import"./textarea.component-CwVMBoT0.js";import"./video.component-Dh0dB58I.js";import"./card-pattern-01.component-D_sX5q_x.js";import{c as je}from"./rbcb-toggle.template-B7GIK3WA.js";const Pe=W`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;

      --_margin: var(--gds-sys-space-l);
    }

    dialog {
      transition: transform var(--gds-sys-motion-duration-fast)
        cubic-bezier(var(--gds-sys-motion-easing-ease-out));
      background: transparent;
      padding: 0;
      border-width: 0;
      overflow: visible;
      max-width: calc(100vw - var(--_margin));
      max-height: 100vh;
      display: flex;
      width: 400px;

      @starting-style {
        opacity: 0;
        transform: translateY(-16px);
        &::backdrop {
          opacity: 0;
        }
      }

      &::backdrop {
        transition: all var(--gds-sys-motion-duration-fast)
          cubic-bezier(var(--gds-sys-motion-easing-ease-out));
        background: rgba(100, 100, 100, 0.4);
      }
    }

    dialog > * {
      flex-grow: 1;
    }

    dialog.default.placement-initial {
      margin: auto;
      --_margin: 0px;
    }

    dialog.default.placement-top {
      margin: var(--gds-sys-space-l) auto auto;
    }

    dialog.default.placement-bottom {
      margin: auto auto var(--gds-sys-space-l) auto;
    }

    dialog.default.placement-left {
      margin: auto var(--gds-sys-space-l) auto auto;
    }
    dialog.default.placement-right {
      margin: auto auto auto var(--gds-sys-space-l);
    }

    dialog.slide-out {
      --_in: var(--gds-sys-space-m);
      --_margin: var(--gds-sys-space-l);

      height: auto;

      &.placement-initial,
      &.placement-right {
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) var(--_in) var(--_in) auto;
        }

        @starting-style {
          transform: translateX(var(--gds-sys-space-6xl));
        }
      }

      &.placement-left {
        @starting-style {
          transform: translateX(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) auto var(--_in) var(--_in);
        }
      }

      &.placement-top {
        @starting-style {
          transform: translateY(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in) var(--_in) auto var(--_in);
      }

      &.placement-bottom {
        @starting-style {
          transform: translateY(calc(var(--gds-sys-space-6xl)));
        }
        inset: auto var(--_in) var(--_in) var(--_in);
      }
    }

    dialog:focus {
      outline: none;
    }

    .card {
      flex-direction: column;
    }

    slot[name='footer'] > *,
    slot[name='footer']::slotted(*) {
      flex: 1;
    }

    h2 {
      margin: 0;
      padding: 0;
      font: var(--gds-sys-text-heading-s);
      margin-block-start: var(--gds-sys-space-4xs);
    }
  }
`,M=new Set;function Oe(){ee.instance.injectGlobalStyles("dialog-scroll-lock",W`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Re(t){if(M.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=Ne()+We();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function J(t){M.delete(t),M.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Ne(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function We(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var Be=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,lt=t=>{throw TypeError(t)},_=(t,e,s,i)=>{for(var o=i>1?void 0:i?Ve(e,s):e,h=t.length-1,g;h>=0;h--)(g=t[h])&&(o=(i?g(e,s,o):g(o))||o);return i&&o&&Be(e,s,o),o},B=(t,e,s)=>e.has(t)||lt("Cannot "+s),y=(t,e,s)=>(B(t,e,"read from private field"),s?s.call(t):e.get(t)),b=(t,e,s)=>e.has(t)?lt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),E=(t,e,s,i)=>(B(t,e,"write to private field"),e.set(t,s),s),He=(t,e,s)=>(B(t,e,"access private method"),s),$,D,j,T,P,G,O,nt,V,I;Oe();let f=class extends se(ae(ie(tt))){constructor(){super(...arguments),b(this,O),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,b(this,$),b(this,D,!1),b(this,j,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!y(this,T).call(this,s))return;this.close(s);return}this.close(s)}),b(this,T,t=>y(this,G).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),b(this,P,t=>y(this,G).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),b(this,G,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),b(this,V,t=>{this.show("slotted-trigger")}),b(this,I,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect(),h=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,g="click-outside";!h&&!y(this,D)&&y(this,T).call(this,g)&&this.close(g)}E(this,D,!1)})}show(t){this.open=!0,t&&y(this,P).call(this,t)}close(t){E(this,$,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),J(this)}render(){return l`<slot
        name="trigger"
        @slotchange=${He(this,O,nt)}
      ></slot>
      ${v(this.open,()=>l`<dialog
            closedby="closerequest"
            @close=${y(this,j)}
            class=${w({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${F(this.heading)}
          >
            <gds-card
              class="card"
              padding="xl"
              variant="secondary"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
              border-width="0"
              @mousedown=${()=>E(this,D,!0)}
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="tertiary"
                    size="small"
                    label=${p("Close")}
                    @click=${()=>this.close("btn-close")}
                  >
                    <gds-icon-cross-large
                      size="m"
                      stroke="2"
                    ></gds-icon-cross-large>
                  </gds-button>
                </gds-flex>
                <gds-div
                  id="content"
                  flex="1"
                  overflow=${F(this.scrollable)?"auto":re}
                >
                  <slot></slot>
                </gds-div>
                <gds-flex
                  class="footer"
                  justify-content="center"
                  gap="s"
                  padding="s 0 0 0"
                  flex-wrap="wrap"
                >
                  <slot name="footer">
                    <gds-button
                      value="cancel"
                      @click=${()=>this.close("btn-cancel")}
                      rank="secondary"
                      >${p("Cancel")}</gds-button
                    >
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}>
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(E(this,$,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),Re(this),this.removeEventListener("click",y(this,I)),requestAnimationFrame(()=>this.addEventListener("click",y(this,I))),oe&&((s=this._elDialog)==null||s.focus())})):(E(this,$,y(this,$)||"prop-change"),(t=this._elDialog)==null||t.close(y(this,$)),J(this),document.removeEventListener("click",y(this,I)),this.requestUpdate("open"))}};$=new WeakMap;D=new WeakMap;j=new WeakMap;T=new WeakMap;P=new WeakMap;G=new WeakMap;O=new WeakSet;nt=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",y(this,V)),t==null||t.setAttribute("aria-haspopup","dialog")}};V=new WeakMap;I=new WeakMap;f.styles=[Pe];f.styleExpressionBaseSelector="dialog";_([c({type:Boolean,reflect:!0})],f.prototype,"open",2);_([c()],f.prototype,"heading",2);_([c()],f.prototype,"variant",2);_([c()],f.prototype,"placement",2);_([c({type:Boolean})],f.prototype,"scrollable",2);_([et("dialog")],f.prototype,"_elDialog",2);_([et('slot[name="trigger"]')],f.prototype,"_elTriggerSlot",2);_([A("open")],f.prototype,"_handleOpenChange",1);f=_([st("gds-dialog",{dependsOn:[at,rt,le,ot,we]}),it()],f);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt="important",qe=" !"+dt,ct=ne(class extends de{constructor(t){var e;if(super(t),t.type!==ce.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const h=typeof o=="string"&&o.endsWith(qe);i.includes("-")||h?s.setProperty(i,h?o.slice(0,-11):o,h?dt:""):s[i]=o}}return he}}),Qe=W`
  /* Host & Container */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-book-s);
    color: var(--gds-sys-color-content-neutral-01);
    text-align: left;
    --_table-height: 80vh;
    --_table-border-width: var(--gds-sys-space-5xs);
    --_table-border-color: var(--gds-sys-color-border-subtle-01);
  }

  /* Density Modes */
  /* Compact density */
  .table.compact {
    --table-cell-padding-y: var(--gds-sys-space-xs);
    --table-cell-padding-x: var(--gds-sys-space-s);
    --table-header-padding-y: var(--gds-sys-space-xs);
    --table-header-padding-x: var(--gds-sys-space-s);
    --table-row-min-height: var(--gds-sys-space-xl);
    --table-font-size: var(--gds-sys-text-detail-book-s);
    --table-gap: var(--gds-sys-space-m);
    --table-border-spacing: 0 var(--gds-sys-space-5xs);
    --table-data-padding: var(--gds-sys-space-5xs) var(--gds-sys-space-4xs);
  }

  /* Comfortable default */
  .table.comfortable {
    --table-cell-padding-y: var(--gds-sys-space-s);
    --table-cell-padding-x: var(--gds-sys-space-m);
    --table-header-padding-y: var(--gds-sys-space-s);
    --table-header-padding-x: var(--gds-sys-space-m);
    --table-row-min-height: var(--gds-sys-space-4xl);
    --table-font-size: var(--gds-sys-text-detail-book-s);
    --table-gap: var(--gds-sys-space-l);
    --table-border-spacing: 0 var(--gds-sys-space-4xs);
    --table-data-padding: var(--gds-sys-space-3xs) var(--gds-sys-space-2xs);
  }

  /* Spacious density */
  .table.spacious {
    --table-cell-padding-y: var(--gds-sys-space-l);
    --table-cell-padding-x: var(--gds-sys-space-l);
    --table-header-padding-y: var(--gds-sys-space-l);
    --table-header-padding-x: var(--gds-sys-space-l);
    --table-row-min-height: var(--gds-sys-space-5xl);
    --table-font-size: var(--gds-sys-text-detail-book-m);
    --table-gap: var(--gds-sys-space-xl);
    --table-border-spacing: 0 var(--gds-sys-space-3xs);
    --table-data-padding: var(--gds-sys-space-3xs) var(--gds-sys-space-xs);
  }

  /* Secondary and Tertiary */
  .data.variant-secondary,
  .data.variant-tertiary {
    --_table-header-bg: var(--gds-sys-color-l2-neutral-01);
    --_table-header-hover: var(--gds-sys-color-l3-neutral-02);
    --_table-header-active: var(--gds-sys-color-l3-neutral-03);
    --_table-row-hover: var(--gds-sys-color-l2-neutral-01);
    --_table-row-selected-hover: var(--gds-sys-color-l3-neutral-03);
    --_table-row-striped: var(--gds-sys-color-l2-neutral-01);
  }

  /* Primary variant */
  .data.variant-primary {
    --_table-header-bg: var(--gds-sys-color-l2-neutral-02);
    --_table-header-hover: var(--gds-sys-color-l3-neutral-02);
    --_table-header-active: var(--gds-sys-color-l3-neutral-03);
    --_table-row-hover: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-01)
    );
    --_table-row-selected-hover: var(--gds-sys-color-l3-neutral-03);
    --_table-row-striped: var(--gds-sys-color-l2-neutral-01);
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
    border-color: var(--gds-sys-color-border-subtle-02);
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
        var(--gds-sys-color-border-subtle-01);
      border-radius: var(--gds-sys-space-s);
      margin: 0;
    }

    .responsive tbody tr:hover,
    .responsive tbody tr:hover + tr {
      border-color: var(--gds-sys-color-border-subtle-01);
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
      margin-right: auto;
    }

    .responsive td .cell-content {
      flex: 1;
    }

    .responsive tr:hover,
    .responsive tr td:hover {
      background: none;
    }
  }

  /* Medium screens: input and dropdown side by side */
  /* Medium screens: side by side layout */
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
          --_start-fade: 0;
        }
        10%,
        100% {
          --_start-fade: var(--gds-sys-space-4xl);
        }
        0%,
        90% {
          --_end-fade: var(--gds-sys-space-4xl);
        }
        100% {
          --_end-fade: 0;
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
        animation: scroll-fade;
        animation-timeline: --scroll-fade;
        scroll-timeline: --scroll-fade x;
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
`,Ue=[pe,ge,Qe],Ye=[at,rt,Ce,Ge,be,ve,me,Ae,Le,Me,_e,ze,ot,xe,Ee,Te,Ie,ke,$e,Se,De],Ke={compact:{button:"small",input:"small",dropdown:"small",badge:"small"},comfortable:{button:"small",input:"small",dropdown:"small",badge:"small"},spacious:{button:"medium",input:"large",dropdown:"medium",badge:"default"}},ht=t=>typeof t=="object"&&t!==null&&Array.isArray(t.slots);function ma(t,e=["value"],s){if(ht(t))return t;const i=t;return{value:i,slots:e,...typeof s<"u"?{key:s}:{},toString(){return String(i??"")},valueOf(){return i},[Symbol.toPrimitive](o){return o==="number"?Number(i):String(i??"")}}}var Xe=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,pt=t=>{throw TypeError(t)},d=(t,e,s,i)=>{for(var o=i>1?void 0:i?Fe(e,s):e,h=t.length-1,g;h>=0;h--)(g=t[h])&&(o=(i?g(e,s,o):g(o))||o);return i&&o&&Xe(e,s,o),o},H=(t,e,s)=>e.has(t)||pt("Cannot "+s),m=(t,e,s)=>(H(t,e,"read from private field"),s?s.call(t):e.get(t)),L=(t,e,s)=>e.has(t)?pt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Z=(t,e,s,i)=>(H(t,e,"write to private field"),e.set(t,s),s),r=(t,e,s)=>(H(t,e,"access private method"),s),S,q,a,R,gt,z,ut,N,yt,k,ft,mt,bt,vt,_t,wt,xt,kt,$t,St,Ct,Et,Dt,It,Tt,Gt,At,zt,Q,Lt,Mt,jt,Pt,Ot,Rt,Nt,Wt,Bt,U,Vt,Ht,qt,Qt,Ut,Yt,Y,K,C,Kt,Xt,Ft;let n=class extends tt{constructor(){super(...arguments),L(this,a),L(this,S,{}),L(this,q,300*1e3),this.headlineTag="h2",this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="secondary",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){Z(this,S,{}),r(this,a,k).call(this)}_onColumnsChange(){Z(this,S,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(t=>t.visible!==!1).map(t=>t.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{r(this,a,Kt).call(this)})}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return l`
      <div class="${w(t)}">
        ${[r(this,a,Wt).call(this),r(this,a,kt).call(this),v(this._error,()=>r(this,a,Ot).call(this),()=>v(this._rowsState.length===0&&!this._loading,()=>r(this,a,Rt).call(this),()=>r(this,a,Pt).call(this))),r(this,a,Nt).call(this)]}
      </div>
    `}clearSelection(){r(this,a,K).call(this),r(this,a,C).call(this)}selectAll(){r(this,a,Y).call(this),r(this,a,C).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this._rowsState.length);this._selected=new Set(e),r(this,a,C).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}};S=new WeakMap;q=new WeakMap;a=new WeakSet;R=function(){return Ke[this.density]};gt=function(){return this._selected.size>0};z=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};ut=function(){return m(this,a,gt)&&!m(this,a,z)};N=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};yt=function(t){return Date.now()-t.timestamp<m(this,q)};k=async function(){if(this.data){if(!this.nocache){const t=r(this,a,N).call(this),e=m(this,S)[t];if(e&&r(this,a,yt).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._loaded=!1;return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=r(this,a,N).call(this);m(this,S)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:t,bubbles:!0})}catch(t){this._error=t,this.dispatchCustomEvent("gds-table-data-error",{detail:t,bubbles:!0})}finally{this._loading=!1}}};ft=function(t,e,s){const i=[];(typeof s=="string"||typeof s=="number")&&i.push(s);const o=t==null?void 0:t.id;return(typeof o=="string"||typeof o=="number")&&!i.includes(o)&&i.push(o),i.length===0&&i.push(e+1),i};mt=function(t){if(typeof t=="string"){const e=t.trim();return e.length>0?e:null}return typeof t=="number"&&Number.isFinite(t)?String(t):null};bt=function(t,e,s){return`${t}:${e}:${s}`};vt=function(t,e,s,i){const o=[],h=g=>{e.forEach(u=>{o.push(l`<slot
            name="${r(this,a,bt).call(this,t,u,g)}"
          ></slot>`)})};return Array.isArray(s)&&s.length>0?(s.forEach(g=>{if(g==="value"){i!==void 0&&o.push(i);return}const u=r(this,a,mt).call(this,g);u&&h(u)}),o.length>0?o:null):(i!==void 0&&o.push(i),o.length>0?o:null)};_t=function(t,e,s){let i;e.value?i=e.value(t):i=t[e.key];const o=ht(i),h=r(this,a,ft).call(this,t,s,o?i.key:void 0),g=o?r(this,a,vt).call(this,e.key,h,i.slots,i.value):null,u=o?g:i,Jt=e.justify?l`<span>${u}</span>`:u,X=this._isMobile&&this.responsive,Zt=X?l`
          <span class="column-label" aria-hidden="true">
            ${e.label}:
          </span>
        `:null,te=X?`${e.label}: `:"";return l`
      <div class="cell-content" aria-label="${te}">
        ${[Zt,Jt]}
      </div>
    `};wt=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;return e?s==="asc"?l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:l`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};xt=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};kt=function(){return this.plain||!r(this,a,xt).call(this)?null:l`
      <div class="header">
        <div class="lead">
          ${v(this.searchable,()=>l`
              <gds-input
                type="text"
                size="${m(this,a,R).input}"
                plain
                clearable
                label="${p("Search table")}"
                .value=${this._view.searchQuery}
                @input=${r(this,a,Bt)}
                @gds-input-cleared=${r(this,a,U)}
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
          ${v(this.settings,()=>l`
              <gds-dropdown
                multiple
                plain
                size="${m(this,a,R).dropdown}"
                label="${p("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${r(this,a,Qt)}
              >
                <span slot="trigger">${p("Columns")}</span>
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
    `};$t=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;let i=t.label;if(t.sortable)if(e){const g=s==="asc"?p("ascending"):p("descending");i=`${t.label}, ${p("sorted")} ${g}`}else i=`${t.label}, ${p("sortable")}`;const o=w({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify,wrap:!!t.width}),h=ct({"--cell-width":t.width});return l`
      <th
        class=${o}
        style=${h}
        aria-sort="${e?s==="asc"?"ascending":"descending":"none"}"
        @click=${t.sortable?()=>r(this,a,Vt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${i}">
            ${t.label}
          </span>
          ${v(t.sortable,()=>l`
              <span class="sort-icon">${r(this,a,wt).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};St=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||p("Actions"),e=w({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return l`
      <th class="${e}">
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};Ct=function(){return this.selectable?l`
      <th class="checkbox-cell">
        ${r(this,a,Q).call(this,{checked:m(this,a,z),indeterminate:m(this,a,ut),ariaLabel:p("Select all rows"),onToggle:()=>r(this,a,Ut).call(this,{})})}
      </th>
    `:null};Et=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>r(this,a,$t).call(this,t))};Dt=function(){return l`
      <thead>
        <tr>
          ${[r(this,a,Ct).call(this),r(this,a,Et).call(this),r(this,a,St).call(this)]}
        </tr>
      </thead>
    `};It=function(t,e,s){const i=w({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),o=ct({"--cell-width":e.width});return l`
      <td style=${o} class=${i}>
        ${r(this,a,_t).call(this,t,e,s)}
      </td>
    `};Tt=function(t){if(!this.selectable)return null;const e=`${p("Select row")} ${t+1}`;return l`
      <td class="checkbox-cell">
        ${r(this,a,Q).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>r(this,a,Yt).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
      </td>
    `};Gt=function(t,e){return this.columns.filter(s=>this._view.visibleColumns.has(s.key)).map(s=>r(this,a,It).call(this,t,s,e))};At=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return l`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=w({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return l`
      <td class="${s}">
        <div class="cell-content">ACTIONS</div>
      </td>
    `};zt=function(t,e){return l`
      <tr
        class=${w({selected:this._selected.has(e),loading:this._loading})}
      >
        ${[r(this,a,Tt).call(this,e),r(this,a,Gt).call(this,t,e),r(this,a,At).call(this,t,e)]}
      </tr>
    `};Q=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:i,onToggle:o}){const h=u=>{u.stopPropagation(),!s&&o()};return l`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${i}
        @click=${h}
        @keydown=${u=>{(u.key===" "||u.key==="Enter")&&(u.preventDefault(),h(u))}}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${t}
          .indeterminate=${e}
          ?disabled=${s}
          aria-hidden="true"
          @change=${h}
        />
        ${je({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};Lt=function(t){const s=this._isMobile&&this.responsive?l`<span class="skeleton skeleton-text"></span>`:null;return l`
      <div class="cell-content">
        ${s}
        <span class="skeleton skeleton-text"></span>
      </div>
    `};Mt=function(t){return l`
      <tr class="skeleton-row">
        ${v(this.selectable,()=>l`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>l`<td>${r(this,a,Lt).call(this,e)}</td>`)}
        ${v(this.actions,()=>l`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};jt=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,s)=>r(this,a,Mt).call(this,s));return l`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return l`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>r(this,a,zt).call(this,t,e))}
      </tbody>
    `};Pt=function(){const t=w({responsive:this.responsive,data:!0,[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),e=`${this.summary?this.summary+", ":""}${p("Data table with")} ${this._total} ${p("rows")}`;return l`
      <gds-card
        variant="${this.variant}"
        padding="0"
        border-radius="m"
        border-width="0; s{5xs}"
        class="table-card"
      >
        <div class=${t} tabindex="0">
          <table aria-label="${e}">
            <caption class="visually-hidden">
              ${e}
            </caption>
            ${r(this,a,Dt).call(this)} ${r(this,a,jt).call(this)}
          </table>
        </div>
      </gds-card>
    `};Ot=function(){return l`
      <gds-card variant="secondary" border-radius="m">
        <slot name="error">
          <gds-text tag="p">${p("Error loading data")}</gds-text>
          <gds-button
            size="small"
            label="${p("Retry loading data")}"
            @click=${()=>r(this,a,k).call(this)}
          >
            ${p("Retry")}
          </gds-button>
        </slot>
      </gds-card>
    `};Rt=function(){return this._view.searchQuery.length>0?l`
        <gds-card variant="secondary" border-radius="m">
          <slot name="no-results">
            <gds-flex flex-direction="column" align-items="flex-start" gap="s">
              <gds-text tag="p" font="heading-s">
                ${p("No results found")}
              </gds-text>
              <gds-text tag="p" font="detail-book-s">
                ${p("No results for")} "${this._view.searchQuery}"
              </gds-text>
              <gds-button
                size="small"
                label="${p("Clear search for")} ${this._view.searchQuery}"
                @click=${r(this,a,U)}
              >
                ${p("Clear search")}
              </gds-button>
            </gds-flex>
          </slot>
        </gds-card>
      `:l`
      <gds-card variant="secondary" border-radius="m">
        <slot name="empty">
          <gds-text tag="p" font="heading-s">
            ${p("No data available")}
          </gds-text>
        </slot>
      </gds-card>
    `};Nt=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),s=`${t}–${e} ${p("of")} ${this._total}`;return l`
      <gds-pagination
        .page=${this._view.page}
        .rows=${this._view.rows}
        .options=${this.options}
        .total=${this._total}
        .density=${this.density}
        .label=${s}
        @gds-page-change=${r(this,a,Ht)}
        @gds-rows-change=${r(this,a,qt)}
        width="100%"
      >
      </gds-pagination>
    `};Wt=function(){if(this.plain)return null;if(this.headline||this.summary)return l`
        <gds-flex flex-direction="column" gap="4xs">
          <gds-text
            tag="${this.headlineTag}"
            font="heading-s"
            text-wrap="balance"
            max-width="80ch"
          >
            ${this.headline}
          </gds-text>
          <gds-text
            tag="p"
            font=${this.density==="compact"?"body-regular-s":"body-regular-m"}
            text-wrap="balance"
            max-width="80ch"
          >
            ${this.summary}
          </gds-text>
        </gds-flex>
        ${v(this.searchable||this.settings,()=>l`<gds-divider color="subtle-01"></gds-divider>`,()=>l``)}
      `};Bt=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await r(this,a,k).call(this)};U=async function(){this._view={...this._view,searchQuery:"",page:1},await r(this,a,k).call(this)};Vt=async function(t){const e=this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc";this._view={...this._view,sortColumn:t,sortDirection:e,page:1},this.dispatchCustomEvent("gds-sort-change",{detail:{sortColumn:t,sortDirection:e},bubbles:!0}),await r(this,a,k).call(this)};Ht=async function(t){this._view={...this._view,page:t.detail.page},this.dispatchCustomEvent("gds-page-change",{detail:t.detail,bubbles:!0}),await r(this,a,k).call(this)};qt=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},this.dispatchCustomEvent("gds-rows-change",{detail:t.detail,bubbles:!0}),await r(this,a,k).call(this)};Qt=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};Ut=function(t){m(this,a,z)?r(this,a,K).call(this):r(this,a,Y).call(this),r(this,a,C).call(this)};Yt=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),r(this,a,C).call(this),this.requestUpdate()};Y=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};K=function(){this._selected.clear(),this.requestUpdate()};C=function(){this.dispatchCustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0})};Kt=function(){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".data");if(!t)return;const e=()=>{r(this,a,Xt).call(this,t),r(this,a,Ft).call(this,t)};t.addEventListener("scroll",e),e()};Xt=function(t){const{scrollTop:e}=t;e>0?t.classList.add("scrolled"):t.classList.remove("scrolled")};Ft=function(t){const{scrollLeft:e,scrollWidth:s,clientWidth:i}=t,o=s-i;e<=0?(t.classList.add("scrolled-x-start"),t.classList.remove("scrolled-x-middle","scrolled-x-end")):e>=o-1?(t.classList.add("scrolled-x-end"),t.classList.remove("scrolled-x-start","scrolled-x-middle")):(t.classList.add("scrolled-x-middle"),t.classList.remove("scrolled-x-start","scrolled-x-end"))};n.styles=Ue;d([c()],n.prototype,"headline",2);d([c({attribute:"headline-tag",type:String,reflect:!0})],n.prototype,"headlineTag",2);d([c()],n.prototype,"summary",2);d([c({type:Array})],n.prototype,"options",2);d([c({type:Number})],n.prototype,"page",2);d([c({type:Number})],n.prototype,"rows",2);d([c({type:Array})],n.prototype,"columns",2);d([c()],n.prototype,"data",2);d([c({reflect:!1})],n.prototype,"density",2);d([c({type:Boolean,reflect:!1})],n.prototype,"selectable",2);d([c({type:Boolean,reflect:!1})],n.prototype,"responsive",2);d([c({type:Boolean,reflect:!1})],n.prototype,"plain",2);d([c({type:Boolean,reflect:!1})],n.prototype,"searchable",2);d([c({type:Boolean,reflect:!1})],n.prototype,"settings",2);d([c({type:Boolean,reflect:!1})],n.prototype,"striped",2);d([c()],n.prototype,"actions",2);d([c({type:Boolean,reflect:!1})],n.prototype,"nocache",2);d([c()],n.prototype,"dataLoadKey",2);d([ue({...ye,property:"--_table-height",selector:".data"})],n.prototype,"height",2);d([c()],n.prototype,"variant",2);d([x()],n.prototype,"_isMobile",2);d([fe("(max-width: 768px)")],n.prototype,"_handleMobile",1);d([x()],n.prototype,"_view",2);d([x()],n.prototype,"_loaded",2);d([x()],n.prototype,"_loading",2);d([x()],n.prototype,"_rowsState",2);d([x()],n.prototype,"_total",2);d([x()],n.prototype,"_selected",2);d([x()],n.prototype,"_error",2);d([A("dataLoadKey"),A("data")],n.prototype,"_onDataChange",1);d([A("columns")],n.prototype,"_onColumnsChange",1);n=d([it(),st("gds-table",{dependsOn:Ye})],n);n.define();export{f as G,ma as S};
