import{S as Ut,O as Ft,Q as Kt,al as Yt,i as Q,ao as Vt,U as Xt,Z as Jt,ap as Zt,A as it,b,a as w,o as P,H as et,E as te,h as n,aq as ee,n as p,d as rt,a2 as W,g as ot,I as se,J as nt,G as ae,t as ie,af as re,z as x}from"./iframe-r7XMIE4J.js";import{w as oe}from"./popover.component-BnZn75IU.js";import{a as ne}from"./dropdown.component-C_oHWAoz.js";import"./menu-heading.component-J_wocYrY.js";import{a as le,G as de}from"./context-menu.component-DXCJytLJ.js";import"./alert.component-CzW-thXn.js";import{G as ce}from"./badge.component-CLKUf45r.js";import"./blur.component-LbUUjS95.js";import"./breadcrumb.component-DRyYhLvi.js";import"./calendar.component-B0l9aK_3.js";import{G as lt}from"./card.component-DWIlQAUK.js";import"./card-linked.component-1euGXk6w.js";import"./checkbox-group.component-C_BZunGP.js";import"./coachmark.component-tsF8SWBf.js";import"./datepicker.component-Lv_iJLcu.js";import{G as dt}from"./flex.component-BQ5NBM0P.js";import{I as he,a as pe,b as ue,c as ge,d as me}from"./zoom-out.component-BHOeDu9H.js";import"./divider.component-sG2wdypc.js";import"./signal.component-Deir6Bvn.js";import"./filter-chips.component-CNhCLFzk.js";import"./summary.component-DZrV2E0l.js";import"./grouped-list.component-BBJRxhUx.js";import"./icon-8set1gg7.js";import"./arrow-down.component-fw3xFxcE.js";import"./arrow-left.component-5g-7fCks.js";import"./arrow-right.component-DpAb2-B3.js";import"./arrow-rotate-counter-clockwise.component-epkS2MN-.js";import"./arrow-up.component-B818RHUe.js";import"./sun.component-TeRk6uzv.js";import"./star.component-rMAgxQ2i.js";import"./bubbles.component-CGPG8D6C.js";import"./calender-add.component-CSM_dfuY.js";import"./chain-link-3zV2-0iw.js";import"./checkmark.component-BlXnxEUS.js";import"./chevron-bottom.component-C-zV_t0u.js";import"./chevron-right-small.component-COsJ4kVS.js";import"./chevron-left.component-CaRPHtXC.js";import"./chevron-right.component-7iLEFvvj.js";import"./chevron-top.component-BG0QVcGB.js";import"./circle-check.component-CP16Dhju.js";import"./triangle-exclamation.component-DW23mr6I.js";import"./circles-three.component-DKCHqg-R.js";import"./cloudy-sun.component-CQYLIUGU.js";import"./credit-card.component-CGI9FQ42.js";import{I as ye}from"./cross-small.component-Cpsdrirn.js";import{I as ve}from"./dot-grid-one-horizontal-Bb3CkUAc.js";import"./folder.component-w--hBVV8.js";import{I as fe}from"./magnifying-glass.component-E41vpnkJ.js";import{I as be}from"./minus-small.component-to36fCFn.js";import"./people-profile.component-uHaIB-lP.js";import"./push.component-CQ4nZ5MS.js";import"./rocket.component-DnJzxIIo.js";import"./square-grid-circle.component-DjWRYQg_.js";import{G as we}from"./img.component-BJAguJCR.js";import{G as xe}from"./input.component-C4pEYPeB.js";import{G as ke}from"./link.component-cwFeGVNG.js";import"./mask.component-Dgc1xQth.js";import"./menu-button.component-CZJ_8-BO.js";import{G as _e}from"./pagination-B_Sc-AOS.js";import"./radio-group.component-DTNdbSsa.js";import"./rich-text.component-B5BHm0B3.js";import"./segmented-control.component-DEw8oy8H.js";import"./sensitive-number.component-CctAryDz.js";import"./sensitive-date.component-ComBng5H.js";import"./sensitive-account.component-mclqfNSk.js";import"./select.component-KV0R_Ryr.js";import"./spinner.component-0p_fO3XL.js";import{G as $e}from"./text-BKzhkOL1.js";import"./textarea.component-BMGbp62q.js";import"./video.component-BMvMbORa.js";import"./card-pattern-01.component-DsOr7zRe.js";import{c as Se}from"./rbcb-toggle.template-CySK5B1I.js";import{d as Ce}from"./formatted-date.component-BodadPSB.js";import{a as Ee}from"./formatted-account-BmyYLAgF.js";import{n as ze}from"./formatted-number-30JYC61w.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct="important",De=" !"+ct,Ge=Ut(class extends Ft{constructor(t){var e;if(super(t),t.type!==Kt.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const d=typeof o=="string"&&o.endsWith(De);i.includes("-")||d?s.setProperty(i,d?o.slice(0,-11):o,d?ct:""):s[i]=o}}return Yt}}),je=Q`
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
`,O=new Set;function Ae(){Vt.instance.injectGlobalStyles("dialog-scroll-lock",Q`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Me(t){if(O.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=Te()+Ie();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function st(t){O.delete(t),O.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Te(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Ie(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var Pe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,ht=t=>{throw TypeError(t)},f=(t,e,s,i)=>{for(var o=i>1?void 0:i?We(e,s):e,d=t.length-1,h;d>=0;d--)(h=t[d])&&(o=(i?h(e,s,o):h(o))||o);return i&&o&&Pe(e,s,o),o},U=(t,e,s)=>e.has(t)||ht("Cannot "+s),m=(t,e,s)=>(U(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?ht("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),D=(t,e,s,i)=>(U(t,e,"write to private field"),e.set(t,s),s),Le=(t,e,s)=>(U(t,e,"access private method"),s),_,G,B,T,N,I,R,pt,F,j;Ae();let y=class extends Xt(Jt(Zt(it))){constructor(){super(...arguments),v(this,R),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,v(this,_),v(this,G,!1),v(this,B,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!m(this,T).call(this,s))return;this.close(s);return}this.close(s)}),v(this,T,t=>m(this,I).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),v(this,N,t=>m(this,I).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),v(this,I,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),v(this,F,t=>{this.show("slotted-trigger")}),v(this,j,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect(),d=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,h="click-outside";!d&&!m(this,G)&&m(this,T).call(this,h)&&this.close(h)}D(this,G,!1)})}show(t){this.open=!0,t&&m(this,N).call(this,t)}close(t){D(this,_,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),st(this)}render(){return n`<slot
        name="trigger"
        @slotchange=${Le(this,R,pt)}
      ></slot>
      ${b(this.open,()=>n`<dialog
            closedby="closerequest"
            @close=${m(this,B)}
            class=${w({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${P(this.heading)}
          >
            <gds-card
              class="card"
              padding="xl"
              variant="secondary"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
              border-width="0"
              @mousedown=${()=>D(this,G,!0)}
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="tertiary"
                    size="small"
                    label=${et("Close")}
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
                  overflow=${P(this.scrollable)?"auto":te}
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
                      >${et("Cancel")}</gds-button
                    >
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}>
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(D(this,_,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),Me(this),this.removeEventListener("click",m(this,j)),requestAnimationFrame(()=>this.addEventListener("click",m(this,j))),ee&&((s=this._elDialog)==null||s.focus())})):(D(this,_,m(this,_)||"prop-change"),(t=this._elDialog)==null||t.close(m(this,_)),st(this),document.removeEventListener("click",m(this,j)),this.requestUpdate("open"))}};_=new WeakMap;G=new WeakMap;B=new WeakMap;T=new WeakMap;N=new WeakMap;I=new WeakMap;R=new WeakSet;pt=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",m(this,F)),t==null||t.setAttribute("aria-haspopup","dialog")}};F=new WeakMap;j=new WeakMap;y.styles=[je];y.styleExpressionBaseSelector="dialog";f([p({type:Boolean,reflect:!0})],y.prototype,"open",2);f([p()],y.prototype,"heading",2);f([p()],y.prototype,"variant",2);f([p()],y.prototype,"placement",2);f([p({type:Boolean})],y.prototype,"scrollable",2);f([rt("dialog")],y.prototype,"_elDialog",2);f([rt('slot[name="trigger"]')],y.prototype,"_elTriggerSlot",2);f([W("open")],y.prototype,"_handleOpenChange",1);y=f([ot("gds-dialog",{dependsOn:[nt,lt,ae,dt,he]}),se()],y);const Oe=Q`
  /* Host & Container */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-book-s);
    color: var(--gds-sys-color-content-neutral-01);
    text-align: left;
    --table-border: var(--gds-sys-space-5xs) solid
      var(--gds-sys-color-border-subtle-01);
  }

  /* Density Modes */
  /* Compact density */
  .table.compact {
    --table-cell-padding-y: var(--gds-sys-space-xs);
    --table-cell-padding-x: var(--gds-sys-space-s);
    --table-header-padding-y: var(--gds-sys-space-xs);
    --table-header-padding-x: var(--gds-sys-space-s);
    --table-row-min-height: var(--gds-sys-space-xl);
    --table-font-size: var(--gds-sys-text-detail-book-xs);
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
    --table-gap: var(--gds-sys-space-xl);
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
    --table-gap: var(--gds-sys-space-2xl);
    --table-border-spacing: 0 var(--gds-sys-space-3xs);
    --table-data-padding: var(--gds-sys-space-3xs) var(--gds-sys-space-xs);
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
    border-radius: var(--gds-sys-radius-m);
    border: var(--gds-sys-space-5xs) solid var(--gds-sys-color-border-subtle-01);
    padding: var(--table-data-padding);
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
    background: var(--gds-sys-color-l2-neutral-01);
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
    background-color: var(--gds-sys-color-l3-neutral-02);
  }

  th.sortable:active .column-header {
    background-color: var(--gds-sys-color-l3-neutral-03);
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
    border-top: var(--table-border);
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
      background-color: var(--gds-sys-color-l3-neutral-03);
    }

    tbody tr:hover:not(.selected) {
      background-color: var(--gds-sys-color-l2-neutral-01);
    }
  }

  tbody tr:hover,
  tbody tr:hover + tr {
    border-color: transparent;
  }

  /* Striped */
  .striped tbody tr:not(.selected, :hover):nth-child(even) td {
    background-color: var(--gds-sys-color-l2-neutral-01);
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

  td.wrap {
    max-width: var(--cell-width);
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
      box-shadow: var(--gds-sys-shadow-s-01), var(--gds-sys-shadow-s-02);
      border-radius: var(--gds-sys-radius-s);
    }

    .header {
      flex-direction: column;
    }

    .header {
      gap: calc(var(--table-gap) / 2);
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
      justify-content: space-between;
      align-items: center;
      padding: var(--gds-sys-space-xs) 0;
      border: none;
    }

    .responsive td .column-label {
      flex: 1;
      text-align: left;
    }

    .responsive td .cell-content {
      flex: 1;
    }

    .responsive tr:hover,
    .responsive tr td:hover {
      background: none;
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

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    tbody tr,
    .sort-icon,
    .column-header,
    .header {
      transition: none;
    }
  }
`,Be=[ie,re,Oe],Ne=[nt,lt,we,le,de,ne,xe,_e,$e,ce,ke,dt,pe,ye,be,fe,ue,ge,me,ve],Re={compact:{button:"small",input:"small",dropdown:"small",badge:"small"},comfortable:{button:"small",input:"small",dropdown:"small",badge:"small"},spacious:{button:"medium",input:"large",dropdown:"medium",badge:"default"}};var qe=Object.defineProperty,He=Object.getOwnPropertyDescriptor,ut=t=>{throw TypeError(t)},c=(t,e,s,i)=>{for(var o=i>1?void 0:i?He(e,s):e,d=t.length-1,h;d>=0;d--)(h=t[d])&&(o=(i?h(e,s,o):h(o))||o);return i&&o&&qe(e,s,o),o},K=(t,e,s)=>e.has(t)||ut("Cannot "+s),u=(t,e,s)=>(K(t,e,"read from private field"),s?s.call(t):e.get(t)),M=(t,e,s)=>e.has(t)?ut("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),at=(t,e,s,i)=>(K(t,e,"write to private field"),e.set(t,s),s),r=(t,e,s)=>(K(t,e,"access private method"),s),$,Y,A,a,S,gt,L,mt,q,yt,k,H,C,vt,ft,bt,wt,xt,kt,_t,$t,St,Ct,Et,zt,Dt,Gt,V,jt,At,Mt,Tt,It,Pt,Wt,Lt,X,Ot,Bt,Nt,Rt,qt,Ht,J,Z,E;let l=class extends it{constructor(){super(...arguments),M(this,a),M(this,$,{}),M(this,Y,300*1e3),M(this,A,new Map),this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this._isMobile=!1,this.view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this.loaded=!0,this.loading=!1,this.rowsState=[],this.total=0,this.selected=new Set,this.error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){at(this,$,{}),r(this,a,k).call(this)}_onColumnsChange(){at(this,$,{}),this.view={...this.view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.map(t=>t.key))}}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return n`
      <div class="${w(t)}">
        ${[r(this,a,wt).call(this),b(this.error,()=>r(this,a,It).call(this),()=>b(this.rowsState.length===0&&!this.loading,()=>r(this,a,Pt).call(this),()=>r(this,a,Tt).call(this))),r(this,a,Wt).call(this)]}
      </div>
    `}clearSelection(){r(this,a,Z).call(this),r(this,a,E).call(this)}selectAll(){r(this,a,J).call(this),r(this,a,E).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this.rowsState.length);this.selected=new Set(e),r(this,a,E).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this.selected);return{indices:t,data:t.map(e=>this.rowsState[e])}}};$=new WeakMap;Y=new WeakMap;A=new WeakMap;a=new WeakSet;S=function(){return Re[this.density]};gt=function(){return this.selected.size>0};L=function(){return this.rowsState.length>0&&this.selected.size===this.rowsState.length};mt=function(){return u(this,a,gt)&&!u(this,a,L)};q=function(){return JSON.stringify({page:this.view.page,rows:this.view.rows,sortColumn:this.view.sortColumn,sortDirection:this.view.sortDirection,searchQuery:this.view.searchQuery})};yt=function(t){return Date.now()-t.timestamp<u(this,Y)};k=async function(){if(this.data){if(!this.nocache){const t=r(this,a,q).call(this),e=u(this,$)[t];if(e&&r(this,a,yt).call(this,e)){this.rowsState=e.rows,this.total=e.total,this.loaded=!1;return}}this.loading=!0,this.error=null;try{const t=await this.data({page:this.view.page,rows:this.view.rows,sortColumn:this.view.sortColumn,sortDirection:this.view.sortDirection,searchQuery:this.view.searchQuery});if(!this.nocache){const e=r(this,a,q).call(this);u(this,$)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this.rowsState=t.rows,this.total=t.total,this.selected.clear(),this.loaded=!1,this.dispatchEvent(new CustomEvent("gds-table-data-loaded",{detail:t,bubbles:!0}))}catch(t){this.error=t,this.dispatchEvent(new CustomEvent("gds-table-data-error",{detail:t,bubbles:!0}))}finally{this.loading=!1}}};H=function(t){var e;if(!t)return null;if(!u(this,A).has(t)){const s=this.querySelector(`template[name="${t}"]`);u(this,A).set(t,s)}return(e=u(this,A).get(t))==null?void 0:e.content.cloneNode(!0)};C=function(t,e){if(!t)return null;if(Array.isArray(t))return t.map(i=>r(this,a,C).call(this,i,e));const s=i=>typeof i=="function"?i(e):i;switch(t.type){case"badge":{const i=s(t.variant)||"information",o=s(t.size)||u(this,a,S).badge;return n`
          <gds-badge size="${o}" variant="${i}">
            ${s(t.value)}
          </gds-badge>
        `}case"image":{const i=s(t.src);if(!i)return null;const o=s(t.width)||"24px",d=s(t.height)||"24px",h=s(t["border-radius"])||"max",g=s(t["object-fit"])||"cover",z=s(t.alt)||"";return n`
          <gds-img
            src="${i}"
            alt="${z}"
            width="${o}"
            height="${d}"
            border-radius="${h}"
            object-fit="${g}"
            object-position="center"
          ></gds-img>
        `}case"button":{const i=s(t.size)||u(this,a,S).button,o=s(t.variant),d=s(t.rank),h=s(t.label),g=s(t.template),z=r(this,a,H).call(this,g);return n`
          <gds-button
            size="${i}"
            variant="${o||"neutral"}"
            rank="${d||"secondary"}"
            @click="${Qt=>{Qt.stopPropagation(),t.onClick(e)}}"
          >
            ${[h,z]}
          </gds-button>
        `}case"link":{const i=s(t.href);if(!i)return null;const o=s(t.label),d=s(t.target),h=s(t.download),g=s(t.template),z=r(this,a,H).call(this,g),tt=[o,z];return n`
          <gds-link
            href=${P(i)}
            target=${P(d)}
            .download=${h}
            text-decoration="underline"
          >
            ${tt}
          </gds-link>
        `}case"context-menu":{const i=t.items,o=u(this,a,S).button;return n`
          <gds-context-menu>
            <gds-button slot="trigger" size="${o}" rank="tertiary">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            ${i.map(d=>{const h=s(d.label);return n`
                <gds-menu-item @click="${()=>d.onClick(e)}">
                  ${h}
                </gds-menu-item>
              `})}
          </gds-context-menu>
        `}case"formatted-number":{const i=s(t.value),o=ze[t.format||"decimalsAndThousands"];return o(i,t.locale,t.currency)}case"formatted-account":{const i=s(t.value),o=Ee[t.format||"seb-account"];return o(i)}case"formatted-date":{const i=s(t.value),o=Ce[t.format||"dateLong"];return o(i,t.locale)}default:return null}};vt=function(t,e){const{cell:s}=e,i=r(this,a,C).call(this,s==null?void 0:s.value,t)??t[e.key],o=e.justify?n`<span>${i}</span>`:i,d=this._isMobile&&this.responsive,h=d?n`<span class="column-label" aria-hidden="true"
          >${e.label}:</span
        >`:null,g=d?`${e.label}: `:"";return n`
      <div class="cell-content" aria-label="${g}">
        ${[h,r(this,a,C).call(this,s==null?void 0:s.lead,t),o,r(this,a,C).call(this,s==null?void 0:s.trail,t)]}
      </div>
    `};ft=function(t){const e=this.view.sortColumn===t.key,s=this.view.sortDirection;return e?s==="asc"?n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:n`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};bt=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};wt=function(){return this.plain||!r(this,a,bt).call(this)?null:n`
      <div class="header">
        <div class="lead">
          ${b(this.searchable,()=>n`
              <gds-input
                type="text"
                size="${u(this,a,S).input}"
                plain
                clearable
                placeholder="Search..."
                .value=${this.view.searchQuery}
                @input=${r(this,a,Lt)}
                @gds-input-cleared=${r(this,a,X)}
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
          ${b(this.settings,()=>n`
              <gds-dropdown
                multiple
                plain
                size="${u(this,a,S).dropdown}"
                searchable
                .value=${Array.from(this.view.visibleColumns)}
                @change=${r(this,a,Rt)}
              >
                <span slot="trigger">Columns</span>
                ${this.columns.map(t=>n`
                    <gds-option
                      value=${t.key}
                      ?selected=${this.view.visibleColumns.has(t.key)}
                    >
                      ${t.label}
                    </gds-option>
                  `)}
              </gds-dropdown>
            `)}
        </div>
      </div>
    `};xt=function(t){const e=this.view.sortColumn===t.key,s=this.view.sortDirection,i=w({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify});return n`
      <th
        class=${i}
        @click=${t.sortable?()=>r(this,a,Ot).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label">${t.label}</span>
          ${b(t.sortable,()=>n`
              <span class="sort-icon">${r(this,a,ft).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};kt=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||"Actions",e=w({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return n`
      <th class="${e}">
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};_t=function(){return this.selectable?n`
      <th class="checkbox-cell">
        ${r(this,a,V).call(this,{checked:u(this,a,L),indeterminate:u(this,a,mt),ariaLabel:"Select all rows",onToggle:()=>r(this,a,qt).call(this,{})})}
      </th>
    `:null};$t=function(){return this.columns.filter(t=>this.view.visibleColumns.has(t.key)).map(t=>r(this,a,xt).call(this,t))};St=function(){return n`
      <thead>
        <tr>
          ${[r(this,a,_t).call(this),r(this,a,$t).call(this),r(this,a,kt).call(this)]}
        </tr>
      </thead>
    `};Ct=function(t,e){const s=w({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),i=Ge({"--cell-width":e.width});return n`
      <td style=${i} class=${s}>
        ${r(this,a,vt).call(this,t,e)}
      </td>
    `};Et=function(t){return this.selectable?n`
      <td class="checkbox-cell" data-label="Select">
        ${r(this,a,V).call(this,{checked:this.selected.has(t),indeterminate:!1,ariaLabel:`Select row ${t+1}`,onToggle:()=>r(this,a,Ht).call(this,t,{detail:{checked:!this.selected.has(t)}})})}
      </td>
    `:null};zt=function(t){return this.columns.filter(e=>this.view.visibleColumns.has(e.key)).map(e=>r(this,a,Ct).call(this,t,e))};Dt=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return n`
        <td class="actions-cell" data-label="Actions">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=r(this,a,C).call(this,this.actions.cell,t),i=w({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return n`
      <td class="${i}" data-label="Actions">
        <div class="cell-content">${s}</div>
      </td>
    `};Gt=function(t,e){return n`
      <tr
        class=${w({selected:this.selected.has(e),loading:this.loading})}
      >
        ${[r(this,a,Et).call(this,e),r(this,a,zt).call(this,t),r(this,a,Dt).call(this,t,e)]}
      </tr>
    `};V=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:i,onToggle:o}){const d=g=>{g.stopPropagation(),!s&&o()};return n`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${i}
        @click=${d}
        @keydown=${g=>{(g.key===" "||g.key==="Enter")&&(g.preventDefault(),d(g))}}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${t}
          .indeterminate=${e}
          ?disabled=${s}
          aria-hidden="true"
          @change=${d}
        />
        ${Se({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};jt=function(){return n`
      <div class="cell-content">
        <span class="skeleton skeleton-text"></span>
      </div>
    `};At=function(t){return n`
      <tr class="skeleton-row">
        ${b(this.selectable,()=>n`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this.view.visibleColumns.has(e.key)).map(()=>n` <td>${r(this,a,jt).call(this)}</td> `)}
        ${b(this.actions,()=>n`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};Mt=function(){if(this.loading&&this.loaded){const t=Array.from({length:this.view.rows},(e,s)=>r(this,a,At).call(this,s));return n`<tbody>
        ${t}
      </tbody>`}return n`
      <tbody>
        ${this.rowsState.map((t,e)=>r(this,a,Gt).call(this,t,e))}
      </tbody>
    `};Tt=function(){const t=w({responsive:this.responsive,data:!0});return n`
      <div class=${t}>
        <table>
          ${r(this,a,St).call(this)} ${r(this,a,Mt).call(this)}
        </table>
      </div>
    `};It=function(){return n`
      <gds-card justify-content="center" align-items="flex-start">
        <gds-text tag="p">Error loading data</gds-text>
        <gds-button size="small" @click=${()=>r(this,a,k).call(this)}>
          Retry
        </gds-button>
      </gds-card>
    `};Pt=function(){const t=this.view.searchQuery.length>0;return n`
      <gds-card justify-content="space-between" align-items="flex-start">
        <gds-flex flex-direction="column">
          <gds-text tag="p" font="heading-s">
            ${t?"No results found":"No data available"}
          </gds-text>
          ${t?n`
                <gds-text tag="p" font="detail-book-s">
                  No results for "${this.view.searchQuery}"
                </gds-text>
              `:""}
        </gds-flex>

        ${t?n`
              <gds-button size="small" @click=${r(this,a,X)}>
                Clear search
              </gds-button>
            `:""}
      </gds-card>
    `};Wt=function(){if(this.plain||this.total<1)return null;const t=(this.view.page-1)*this.view.rows+1,e=Math.min(this.view.page*this.view.rows,this.total),s=`${t} - ${e} of ${this.total}`;return n`
      <gds-pagination
        .page=${this.view.page}
        .rows=${this.view.rows}
        .options=${this.options}
        .total=${this.total}
        .density=${this.density}
        .label=${s}
        @gds-page-change=${r(this,a,Bt)}
        @gds-rows-change=${r(this,a,Nt)}
        width="100%"
      >
      </gds-pagination>
    `};Lt=async function(t){const e=t.target;this.view={...this.view,searchQuery:e.value,page:1},await r(this,a,k).call(this)};X=async function(){this.view={...this.view,searchQuery:"",page:1},await r(this,a,k).call(this)};Ot=async function(t){this.view={...this.view,sortColumn:t,sortDirection:this.view.sortColumn===t&&this.view.sortDirection==="asc"?"desc":"asc",page:1},await r(this,a,k).call(this)};Bt=async function(t){this.view={...this.view,page:t.detail.page},await r(this,a,k).call(this)};Nt=async function(t){this.view={...this.view,rows:t.detail.rows,page:1},await r(this,a,k).call(this)};Rt=function(t){const e=t.detail.value;this.view={...this.view,visibleColumns:new Set(e)},this.requestUpdate()};qt=function(t){u(this,a,L)?r(this,a,Z).call(this):r(this,a,J).call(this),r(this,a,E).call(this)};Ht=function(t,e){e.detail.checked?this.selected.add(t):this.selected.delete(t),r(this,a,E).call(this),this.requestUpdate()};J=function(){this.selected=new Set(this.rowsState.map((t,e)=>e)),this.requestUpdate()};Z=function(){this.selected.clear(),this.requestUpdate()};E=function(){this.dispatchEvent(new CustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this.selected),selectedData:Array.from(this.selected).map(t=>this.rowsState[t]),count:this.selected.size},bubbles:!0}))};l.styles=Be;c([p({type:Array})],l.prototype,"options",2);c([p({type:Number})],l.prototype,"page",2);c([p({type:Number})],l.prototype,"rows",2);c([p({type:Array})],l.prototype,"columns",2);c([p()],l.prototype,"data",2);c([p({reflect:!1})],l.prototype,"density",2);c([p({type:Boolean,reflect:!1})],l.prototype,"selectable",2);c([p({type:Boolean,reflect:!1})],l.prototype,"responsive",2);c([p({type:Boolean,reflect:!1})],l.prototype,"plain",2);c([p({type:Boolean,reflect:!1})],l.prototype,"searchable",2);c([p({type:Boolean,reflect:!1})],l.prototype,"settings",2);c([p({type:Boolean,reflect:!1})],l.prototype,"striped",2);c([p()],l.prototype,"actions",2);c([p({type:Boolean,reflect:!1})],l.prototype,"nocache",2);c([p()],l.prototype,"dataLoadKey",2);c([x()],l.prototype,"_isMobile",2);c([oe("(max-width: 768px)")],l.prototype,"_handleMobile",1);c([x()],l.prototype,"view",2);c([x()],l.prototype,"loaded",2);c([x()],l.prototype,"loading",2);c([x()],l.prototype,"rowsState",2);c([x()],l.prototype,"total",2);c([x()],l.prototype,"selected",2);c([x()],l.prototype,"error",2);c([W("dataLoadKey"),W("data")],l.prototype,"_onDataChange",1);c([W("columns")],l.prototype,"_onColumnsChange",1);l=c([ot("gds-table",{dependsOn:Ne})],l);l.define();export{y as G};
