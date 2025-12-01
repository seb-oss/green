import{S as Ft,O as Kt,Q as Yt,al as Vt,i as U,ao as Xt,U as Jt,Z as Zt,ap as te,A as it,b as w,a as _,o as L,H as h,E as ee,h as n,aq as se,n as g,d as rt,a2 as W,g as ot,I as nt,J as lt,G as ae,t as ie,af as re,z as x}from"./iframe-BBWJ5-ds.js";import{w as oe}from"./popover.component-DnxZYEnf.js";import{a as ne}from"./dropdown.component-B4wcTf_l.js";import"./menu-heading.component-CsLAAJ3W.js";import{a as le,G as de}from"./context-menu.component-DHF4lDge.js";import"./alert.component-DYENJ6F4.js";import{G as ce}from"./badge.component-DVinoiVh.js";import"./blur.component-BT2rKhJx.js";import"./breadcrumb.component-Bod88VZV.js";import"./calendar.component-jqCOGgPl.js";import{G as dt}from"./card.component-D4eivPwx.js";import"./card-linked.component-DuKnT9ee.js";import"./checkbox-group.component-4Tf2PrKQ.js";import"./coachmark.component-BU3-dRX_.js";import"./datepicker.component-5HpbZEE6.js";import{G as ct}from"./flex.component-C6tfZiZr.js";import{I as he,a as pe,b as ge,c as ue,d as ye}from"./zoom-out.component-9z6smcex.js";import"./divider.component-BfbchhRv.js";import"./signal.component-BHXXkqln.js";import"./filter-chips.component-ChQ0KbER.js";import"./summary.component-BW6-Z4iS.js";import"./grouped-list.component-BMuR-3BG.js";import"./icon-BoP-1amo.js";import"./arrow-down.component-BIgRXCuU.js";import"./arrow-left.component-XejybrBH.js";import"./arrow-right.component-BY4eMm5T.js";import"./arrow-rotate-counter-clockwise.component-DFRVrjV_.js";import"./arrow-up.component-BWetJbnl.js";import"./sun.component-C_3VEAn6.js";import"./star.component-Da4GrlkK.js";import"./bubbles.component-B2El7Cnr.js";import"./calender-add.component-Bn4CMh5C.js";import"./chain-link-hRBhWM00.js";import"./checkmark.component-BAurtwMB.js";import"./chevron-bottom.component-CRPZ_sCb.js";import"./chevron-right-small.component-TR-UJ0ay.js";import"./chevron-left.component-DIYqhoIO.js";import"./chevron-right.component-1QzFCZEG.js";import"./chevron-top.component-3pZUC8AK.js";import"./circle-check.component-CArSXHdH.js";import"./triangle-exclamation.component-DMjU8PAF.js";import"./circles-three.component-DuiMuCcz.js";import"./cloudy-sun.component-BcB4xrIF.js";import"./credit-card.component-DwAn8uRV.js";import{I as me}from"./cross-small.component-DGjOJg0F.js";import{I as ve}from"./dot-grid-one-horizontal-1U2FMyk8.js";import"./folder.component-BLnzI3Mm.js";import{I as be}from"./magnifying-glass.component-CvYSL71k.js";import{I as fe}from"./minus-small.component-B4vzK-EX.js";import"./people-profile.component-1Z3lDRFW.js";import"./push.component-DVmHG2nx.js";import"./rocket.component-rpzgqa1f.js";import"./square-grid-circle.component-xtEx0bUS.js";import{G as we}from"./img.component-CIBQ_A2E.js";import{G as _e}from"./input.component-CMVouQxz.js";import{G as xe}from"./link.component-B_BtrVfp.js";import"./mask.component-DJltdkeu.js";import"./menu-button.component-9n6j9Dfo.js";import{G as $e}from"./pagination-Dl7zwB1W.js";import"./radio-group.component-DzInijov.js";import"./rich-text.component-CaCVqgEj.js";import"./segmented-control-CBrBly8V.js";import"./sensitive-number.component-019L8noI.js";import"./sensitive-date.component-DJrkfgoJ.js";import"./sensitive-account.component-C1a8VZbT.js";import"./select.component-DNWRkhqb.js";import"./spinner.component-B8JwcuKN.js";import{G as ke}from"./text-BXNUhQ3A.js";import"./textarea.component-blkTO4SX.js";import"./video.component-D-V2aWnF.js";import"./card-pattern-01.component-BWeTY6UO.js";import{c as Se}from"./rbcb-toggle.template-BQMcLoi2.js";import{d as Ce}from"./formatted-date.component-Cs6F00IB.js";import{a as Ee}from"./formatted-account-5Iken8hP.js";import{n as ze}from"./formatted-number-oLZI0VS0.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht="important",De=" !"+ht,Ge=Ft(class extends Kt{constructor(t){var e;if(super(t),t.type!==Yt.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const l=typeof o=="string"&&o.endsWith(De);i.includes("-")||l?s.setProperty(i,l?o.slice(0,-11):o,l?ht:""):s[i]=o}}return Vt}}),je=U`
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
`,B=new Set;function Me(){Xt.instance.injectGlobalStyles("dialog-scroll-lock",U`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Te(t){if(B.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=Ae()+Ie();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function st(t){B.delete(t),B.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Ae(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Ie(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var Pe=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,pt=t=>{throw TypeError(t)},f=(t,e,s,i)=>{for(var o=i>1?void 0:i?Le(e,s):e,l=t.length-1,p;l>=0;l--)(p=t[l])&&(o=(i?p(e,s,o):p(o))||o);return i&&o&&Pe(e,s,o),o},F=(t,e,s)=>e.has(t)||pt("Cannot "+s),m=(t,e,s)=>(F(t,e,"read from private field"),s?s.call(t):e.get(t)),b=(t,e,s)=>e.has(t)?pt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),G=(t,e,s,i)=>(F(t,e,"write to private field"),e.set(t,s),s),We=(t,e,s)=>(F(t,e,"access private method"),s),k,j,N,I,R,P,Q,gt,K,M;Me();let v=class extends Jt(Zt(te(it))){constructor(){super(...arguments),b(this,Q),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,b(this,k),b(this,j,!1),b(this,N,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!m(this,I).call(this,s))return;this.close(s);return}this.close(s)}),b(this,I,t=>m(this,P).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),b(this,R,t=>m(this,P).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),b(this,P,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),b(this,K,t=>{this.show("slotted-trigger")}),b(this,M,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect(),l=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,p="click-outside";!l&&!m(this,j)&&m(this,I).call(this,p)&&this.close(p)}G(this,j,!1)})}show(t){this.open=!0,t&&m(this,R).call(this,t)}close(t){G(this,k,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),st(this)}render(){return n`<slot
        name="trigger"
        @slotchange=${We(this,Q,gt)}
      ></slot>
      ${w(this.open,()=>n`<dialog
            closedby="closerequest"
            @close=${m(this,N)}
            class=${_({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${L(this.heading)}
          >
            <gds-card
              class="card"
              padding="xl"
              variant="secondary"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
              border-width="0"
              @mousedown=${()=>G(this,j,!0)}
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="tertiary"
                    size="small"
                    label=${h("Close")}
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
                  overflow=${L(this.scrollable)?"auto":ee}
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
                      >${h("Cancel")}</gds-button
                    >
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}>
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(G(this,k,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),Te(this),this.removeEventListener("click",m(this,M)),requestAnimationFrame(()=>this.addEventListener("click",m(this,M))),se&&((s=this._elDialog)==null||s.focus())})):(G(this,k,m(this,k)||"prop-change"),(t=this._elDialog)==null||t.close(m(this,k)),st(this),document.removeEventListener("click",m(this,M)),this.requestUpdate("open"))}};k=new WeakMap;j=new WeakMap;N=new WeakMap;I=new WeakMap;R=new WeakMap;P=new WeakMap;Q=new WeakSet;gt=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",m(this,K)),t==null||t.setAttribute("aria-haspopup","dialog")}};K=new WeakMap;M=new WeakMap;v.styles=[je];v.styleExpressionBaseSelector="dialog";f([g({type:Boolean,reflect:!0})],v.prototype,"open",2);f([g()],v.prototype,"heading",2);f([g()],v.prototype,"variant",2);f([g()],v.prototype,"placement",2);f([g({type:Boolean})],v.prototype,"scrollable",2);f([rt("dialog")],v.prototype,"_elDialog",2);f([rt('slot[name="trigger"]')],v.prototype,"_elTriggerSlot",2);f([W("open")],v.prototype,"_handleOpenChange",1);v=f([ot("gds-dialog",{dependsOn:[lt,dt,ae,ct,he]}),nt()],v);const Oe=U`
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

  /* Visually hidden */
  .visually-hidden {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }
`,Be=[ie,re,Oe],Ne=[lt,dt,we,le,de,ne,_e,$e,ke,ce,xe,ct,pe,me,fe,be,ge,ue,ye,ve],Re={compact:{button:"small",input:"small",dropdown:"small",badge:"small"},comfortable:{button:"small",input:"small",dropdown:"small",badge:"small"},spacious:{button:"medium",input:"large",dropdown:"medium",badge:"default"}};var Qe=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,ut=t=>{throw TypeError(t)},c=(t,e,s,i)=>{for(var o=i>1?void 0:i?qe(e,s):e,l=t.length-1,p;l>=0;l--)(p=t[l])&&(o=(i?p(e,s,o):p(o))||o);return i&&o&&Qe(e,s,o),o},Y=(t,e,s)=>e.has(t)||ut("Cannot "+s),u=(t,e,s)=>(Y(t,e,"read from private field"),s?s.call(t):e.get(t)),A=(t,e,s)=>e.has(t)?ut("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),at=(t,e,s,i)=>(Y(t,e,"write to private field"),e.set(t,s),s),r=(t,e,s)=>(Y(t,e,"access private method"),s),S,V,T,a,C,yt,O,mt,q,vt,$,H,E,bt,ft,wt,_t,xt,$t,kt,St,Ct,Et,zt,Dt,Gt,jt,X,Mt,Tt,At,It,Pt,Lt,Wt,Ot,J,Bt,Nt,Rt,Qt,qt,Ht,Z,tt,z;let d=class extends it{constructor(){super(...arguments),A(this,a),A(this,S,{}),A(this,V,300*1e3),A(this,T,new Map),this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){at(this,S,{}),r(this,a,$).call(this)}_onColumnsChange(){at(this,S,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.map(t=>t.key))}}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return n`
      <div class="${_(t)}">
        ${[r(this,a,_t).call(this),w(this._error,()=>r(this,a,Pt).call(this),()=>w(this._rowsState.length===0&&!this._loading,()=>r(this,a,Lt).call(this),()=>r(this,a,It).call(this))),r(this,a,Wt).call(this)]}
      </div>
    `}clearSelection(){r(this,a,tt).call(this),r(this,a,z).call(this)}selectAll(){r(this,a,Z).call(this),r(this,a,z).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this._rowsState.length);this._selected=new Set(e),r(this,a,z).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}};S=new WeakMap;V=new WeakMap;T=new WeakMap;a=new WeakSet;C=function(){return Re[this.density]};yt=function(){return this._selected.size>0};O=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};mt=function(){return u(this,a,yt)&&!u(this,a,O)};q=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};vt=function(t){return Date.now()-t.timestamp<u(this,V)};$=async function(){if(this.data){if(!this.nocache){const t=r(this,a,q).call(this),e=u(this,S)[t];if(e&&r(this,a,vt).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._loaded=!1;return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=r(this,a,q).call(this);u(this,S)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._loaded=!1,this.dispatchEvent(new CustomEvent("gds-table-data-loaded",{detail:t,bubbles:!0}))}catch(t){this._error=t,this.dispatchEvent(new CustomEvent("gds-table-data-error",{detail:t,bubbles:!0}))}finally{this._loading=!1}}};H=function(t){var e;if(!t)return null;if(!u(this,T).has(t)){const s=this.querySelector(`template[name="${t}"]`);u(this,T).set(t,s)}return(e=u(this,T).get(t))==null?void 0:e.content.cloneNode(!0)};E=function(t,e){if(!t)return null;if(Array.isArray(t))return t.map(i=>r(this,a,E).call(this,i,e));const s=i=>typeof i=="function"?i(e):i;switch(t.type){case"badge":{const i=s(t.variant)||"information",o=s(t.size)||u(this,a,C).badge;return n`
          <gds-badge size="${o}" variant="${i}">
            ${s(t.value)}
          </gds-badge>
        `}case"image":{const i=s(t.src);if(!i)return null;const o=s(t.width)||"24px",l=s(t.height)||"24px",p=s(t["border-radius"])||"max",y=s(t["object-fit"])||"cover",D=s(t.alt)||"";return n`
          <gds-img
            src="${i}"
            alt="${D}"
            width="${o}"
            height="${l}"
            border-radius="${p}"
            object-fit="${y}"
            object-position="center"
          ></gds-img>
        `}case"button":{const i=s(t.size)||u(this,a,C).button,o=s(t.variant),l=s(t.rank),p=s(t.label),y=s(t.template),D=r(this,a,H).call(this,y);return n`
          <gds-button
            size="${i}"
            variant="${o||"neutral"}"
            rank="${l||"secondary"}"
            @click="${Ut=>{Ut.stopPropagation(),t.onClick(e)}}"
          >
            ${[p,D]}
          </gds-button>
        `}case"link":{const i=s(t.href);if(!i)return null;const o=s(t.label),l=s(t.target),p=s(t.download),y=s(t.template),D=r(this,a,H).call(this,y),et=[o,D];return n`
          <gds-link
            href=${L(i)}
            target=${L(l)}
            .download=${p}
            text-decoration="underline"
          >
            ${et}
          </gds-link>
        `}case"context-menu":{const i=t.items,o=u(this,a,C).button;return n`
          <gds-context-menu>
            <gds-button
              slot="trigger"
              size="${o}"
              rank="tertiary"
              label="${h("Actions")}"
            >
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            ${i.map(l=>{const p=s(l.label);return n`
                <gds-menu-item @click="${()=>l.onClick(e)}">
                  ${p}
                </gds-menu-item>
              `})}
          </gds-context-menu>
        `}case"formatted-number":{const i=s(t.value),o=ze[t.format||"decimalsAndThousands"];return o(i,t.locale,t.currency)}case"formatted-account":{const i=s(t.value),o=Ee[t.format||"seb-account"];return o(i)}case"formatted-date":{const i=s(t.value),o=Ce[t.format||"dateLong"];return o(i,t.locale)}default:return null}};bt=function(t,e){const{cell:s}=e,i=r(this,a,E).call(this,s==null?void 0:s.value,t)??t[e.key],o=e.justify?n`<span>${i}</span>`:i,l=this._isMobile&&this.responsive,p=l?n`<span class="column-label" aria-hidden="true"
          >${e.label}:</span
        >`:null,y=l?`${e.label}: `:"";return n`
      <div class="cell-content" aria-label="${y}">
        ${[p,r(this,a,E).call(this,s==null?void 0:s.lead,t),o,r(this,a,E).call(this,s==null?void 0:s.trail,t)]}
      </div>
    `};ft=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;return e?s==="asc"?n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:n`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};wt=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};_t=function(){return this.plain||!r(this,a,wt).call(this)?null:n`
      <div class="header">
        <div class="lead">
          ${w(this.searchable,()=>n`
              <gds-input
                type="text"
                size="${u(this,a,C).input}"
                plain
                clearable
                label="${h("Search table")}"
                .value=${this._view.searchQuery}
                @input=${r(this,a,Ot)}
                @gds-input-cleared=${r(this,a,J)}
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
          ${w(this.settings,()=>n`
              <gds-dropdown
                multiple
                plain
                size="${u(this,a,C).dropdown}"
                label="${h("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${r(this,a,Qt)}
              >
                <span slot="trigger">${h("Columns")}</span>
                ${this.columns.map(t=>n`
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
    `};xt=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;let i=t.label;if(t.sortable)if(e){const l=s==="asc"?h("ascending"):h("descending");i=`${t.label}, ${h("sorted")} ${l}`}else i=`${t.label}, ${h("sortable")}`;const o=_({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify});return n`
      <th
        class=${o}
        aria-sort="${e?s==="asc"?"ascending":"descending":"none"}"
        @click=${t.sortable?()=>r(this,a,Bt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${i}">
            ${t.label}
          </span>
          ${w(t.sortable,()=>n`
              <span class="sort-icon">${r(this,a,ft).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};$t=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||h("Actions"),e=_({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return n`
      <th class="${e}">
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};kt=function(){return this.selectable?n`
      <th class="checkbox-cell">
        ${r(this,a,X).call(this,{checked:u(this,a,O),indeterminate:u(this,a,mt),ariaLabel:h("Select all rows"),onToggle:()=>r(this,a,qt).call(this,{})})}
      </th>
    `:null};St=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>r(this,a,xt).call(this,t))};Ct=function(){return n`
      <thead>
        <tr>
          ${[r(this,a,kt).call(this),r(this,a,St).call(this),r(this,a,$t).call(this)]}
        </tr>
      </thead>
    `};Et=function(t,e){const s=_({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),i=Ge({"--cell-width":e.width});return n`
      <td style=${i} class=${s}>
        ${r(this,a,bt).call(this,t,e)}
      </td>
    `};zt=function(t){return this.selectable?n`
      <td class="checkbox-cell">
        ${r(this,a,X).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:h(`Select row ${t+1}`),onToggle:()=>r(this,a,Ht).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
      </td>
    `:null};Dt=function(t){return this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>r(this,a,Et).call(this,t,e))};Gt=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return n`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=r(this,a,E).call(this,this.actions.cell,t),i=_({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return n`
      <td class="${i}">
        <div class="cell-content">${s}</div>
      </td>
    `};jt=function(t,e){return n`
      <tr
        class=${_({selected:this._selected.has(e),loading:this._loading})}
      >
        ${[r(this,a,zt).call(this,e),r(this,a,Dt).call(this,t),r(this,a,Gt).call(this,t,e)]}
      </tr>
    `};X=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:i,onToggle:o}){const l=y=>{y.stopPropagation(),!s&&o()};return n`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${i}
        @click=${l}
        @keydown=${y=>{(y.key===" "||y.key==="Enter")&&(y.preventDefault(),l(y))}}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${t}
          .indeterminate=${e}
          ?disabled=${s}
          aria-hidden="true"
          @change=${l}
        />
        ${Se({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};Mt=function(){return n`
      <div class="cell-content">
        <span class="skeleton skeleton-text"></span>
      </div>
    `};Tt=function(t){return n`
      <tr class="skeleton-row">
        ${w(this.selectable,()=>n`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(()=>n` <td>${r(this,a,Mt).call(this)}</td> `)}
        ${w(this.actions,()=>n`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};At=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,s)=>r(this,a,Tt).call(this,s));return n`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return n`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>r(this,a,jt).call(this,t,e))}
      </tbody>
    `};It=function(){const t=_({responsive:this.responsive,data:!0}),e=`${h("Data table with")} ${this._total} ${h("rows")}`;return n`
      <div class=${t}>
        <table aria-label="${e}">
          <caption class="visually-hidden">
            ${e}
          </caption>
          ${r(this,a,Ct).call(this)} ${r(this,a,At).call(this)}
        </table>
      </div>
    `};Pt=function(){return n`
      <div class="data">
        <gds-card variant="tertiary">
          <slot name="error">
            <gds-text tag="p">${h("Error loading data")}</gds-text>
            <gds-button
              size="small"
              label="${h("Retry loading data")}"
              @click=${()=>r(this,a,$).call(this)}
            >
              ${h("Retry")}
            </gds-button>
          </slot>
        </gds-card>
      </div>
    `};Lt=function(){return this._view.searchQuery.length>0?n`
        <div class="data">
          <gds-card variant="tertiary">
            <slot name="no-results">
              <gds-flex flex-direction="column">
                <gds-text tag="p" font="heading-s">
                  ${h("No results found")}
                </gds-text>
                <gds-text tag="p" font="detail-book-s">
                  ${h("No results for")} "${this._view.searchQuery}"
                </gds-text>
              </gds-flex>
              <gds-button
                size="small"
                label="${h("Clear search for")} ${this._view.searchQuery}"
                @click=${r(this,a,J)}
              >
                ${h("Clear search")}
              </gds-button>
            </slot>
          </gds-card>
        </div>
      `:n`
      <div class="data">
        <gds-card variant="tertiary">
          <slot name="empty">
            <gds-text tag="p" font="heading-s">
              ${h("No data available")}
            </gds-text>
          </slot>
        </gds-card>
      </div>
    `};Wt=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),s=`${t} - ${e} ${h("of")} ${this._total}`;return n`
      <gds-pagination
        .page=${this._view.page}
        .rows=${this._view.rows}
        .options=${this.options}
        .total=${this._total}
        .density=${this.density}
        .label=${s}
        @gds-page-change=${r(this,a,Nt)}
        @gds-rows-change=${r(this,a,Rt)}
        width="100%"
      >
      </gds-pagination>
    `};Ot=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await r(this,a,$).call(this)};J=async function(){this._view={...this._view,searchQuery:"",page:1},await r(this,a,$).call(this)};Bt=async function(t){this._view={...this._view,sortColumn:t,sortDirection:this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc",page:1},await r(this,a,$).call(this)};Nt=async function(t){this._view={...this._view,page:t.detail.page},await r(this,a,$).call(this)};Rt=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},await r(this,a,$).call(this)};Qt=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};qt=function(t){u(this,a,O)?r(this,a,tt).call(this):r(this,a,Z).call(this),r(this,a,z).call(this)};Ht=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),r(this,a,z).call(this),this.requestUpdate()};Z=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};tt=function(){this._selected.clear(),this.requestUpdate()};z=function(){this.dispatchEvent(new CustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0}))};d.styles=Be;c([g({type:Array})],d.prototype,"options",2);c([g({type:Number})],d.prototype,"page",2);c([g({type:Number})],d.prototype,"rows",2);c([g({type:Array})],d.prototype,"columns",2);c([g()],d.prototype,"data",2);c([g({reflect:!1})],d.prototype,"density",2);c([g({type:Boolean,reflect:!1})],d.prototype,"selectable",2);c([g({type:Boolean,reflect:!1})],d.prototype,"responsive",2);c([g({type:Boolean,reflect:!1})],d.prototype,"plain",2);c([g({type:Boolean,reflect:!1})],d.prototype,"searchable",2);c([g({type:Boolean,reflect:!1})],d.prototype,"settings",2);c([g({type:Boolean,reflect:!1})],d.prototype,"striped",2);c([g()],d.prototype,"actions",2);c([g({type:Boolean,reflect:!1})],d.prototype,"nocache",2);c([g()],d.prototype,"dataLoadKey",2);c([x()],d.prototype,"_isMobile",2);c([oe("(max-width: 768px)")],d.prototype,"_handleMobile",1);c([x()],d.prototype,"_view",2);c([x()],d.prototype,"_loaded",2);c([x()],d.prototype,"_loading",2);c([x()],d.prototype,"_rowsState",2);c([x()],d.prototype,"_total",2);c([x()],d.prototype,"_selected",2);c([x()],d.prototype,"_error",2);c([W("dataLoadKey"),W("data")],d.prototype,"_onDataChange",1);c([W("columns")],d.prototype,"_onColumnsChange",1);d=c([nt(),ot("gds-table",{dependsOn:Ne})],d);d.define();export{v as G};
