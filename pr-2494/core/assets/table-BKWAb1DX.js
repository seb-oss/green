import{S as Ft,O as Kt,Q as Yt,al as Vt,i as U,ao as Xt,U as Jt,Z as Zt,ap as te,A as it,b,a as w,o as W,H as z,E as ee,h as n,aq as se,n as p,d as rt,a2 as L,g as ot,I as nt,J as lt,G as ae,t as ie,af as re,z as x}from"./iframe-DVJINxuy.js";import{w as oe}from"./popover.component-C8o6T2Uy.js";import{a as ne}from"./dropdown.component-7_Lr0HhQ.js";import"./menu-heading.component-BfAZIjGd.js";import{a as le,G as de}from"./context-menu.component-DAq8MHHu.js";import"./alert.component-Dbnz08HB.js";import{G as ce}from"./badge.component-Bvsdu2QU.js";import"./blur.component-DcbS1Hty.js";import"./breadcrumb.component-BE9k0Zjs.js";import"./calendar.component-lfNa4GSB.js";import{G as dt}from"./card.component-PvIfp0bI.js";import"./card-linked.component-DOQdPw9p.js";import"./checkbox-group.component-CVnD9XU3.js";import"./coachmark.component-DVr__890.js";import"./datepicker.component-IDXD9tVC.js";import{G as ct}from"./flex.component-BsWdKKZp.js";import{I as he,a as pe,b as ue,c as ge,d as me}from"./zoom-out.component-3PijZg6t.js";import"./divider.component-BwvKLI_z.js";import"./signal.component-B3T5lqfx.js";import"./filter-chips.component-BX2PqOme.js";import"./summary.component-x35x636P.js";import"./grouped-list.component-DbWeXLM2.js";import"./icon-Doc_EbFR.js";import"./arrow-down.component-Bs1caHk_.js";import"./arrow-left.component-BG3jrnHp.js";import"./arrow-right.component-xYh7H7md.js";import"./arrow-rotate-counter-clockwise.component-C0cjcYo9.js";import"./arrow-up.component-CSYNmcmB.js";import"./sun.component-ChkBDKxw.js";import"./star.component-a3rH0n6t.js";import"./bubbles.component-wDnl7ty0.js";import"./calender-add.component-BKvlm8qv.js";import"./chain-link-Ctceuc6q.js";import"./checkmark.component-CsDy6Id6.js";import"./chevron-bottom.component-C-R2pIAE.js";import"./chevron-right-small.component-C4W-_ats.js";import"./chevron-left.component-C03WD3dh.js";import"./chevron-right.component-wzO7Vwp_.js";import"./chevron-top.component-DPZxuNax.js";import"./circle-check.component-Dh5Sl1hj.js";import"./triangle-exclamation.component-DRuxnoO8.js";import"./circles-three.component-g1FM7DMn.js";import"./cloudy-sun.component-3LndPwmH.js";import"./credit-card.component-BrNN-Qnx.js";import{I as ye}from"./cross-small.component-ChyKbJbR.js";import{I as ve}from"./dot-grid-one-horizontal-W8gKYkVB.js";import"./folder.component-B4Un8N9W.js";import{I as fe}from"./magnifying-glass.component-n29IFZWG.js";import{I as be}from"./minus-small.component-CvbcXsbL.js";import"./people-profile.component-DtjdJ6qe.js";import"./push.component-BzrYsOZq.js";import"./rocket.component-DdvtJHle.js";import"./square-grid-circle.component-DUU78_yE.js";import{G as we}from"./img.component-CQaUBQAO.js";import{G as xe}from"./input.component-D_8imp2Q.js";import{G as ke}from"./link.component-ciXKpKCf.js";import"./mask.component-B5JuNLSw.js";import"./menu-button.component-CDMCjVDz.js";import{G as _e}from"./pagination-CcvHeW_8.js";import"./radio-group.component-mWpJpZZk.js";import"./rich-text.component-CXgpq5_P.js";import"./segmented-control.component-BHTAC9GA.js";import"./sensitive-number.component-p8ATh1KC.js";import"./sensitive-date.component-B9fW41kZ.js";import"./sensitive-account.component-DDVGPpDk.js";import"./select.component-DDy2D3RG.js";import"./spinner.component-P4NAD-oD.js";import{G as $e}from"./text-CGCi0eev.js";import"./textarea.component--FtpNsR0.js";import"./video.component-CoQ12-Dm.js";import"./card-pattern-01.component-JGD9nxII.js";import{c as Se}from"./rbcb-toggle.template-DaUWx10o.js";import{d as Ce}from"./formatted-date.component-BoJoBhBA.js";import{a as Ee}from"./formatted-account-Nkci9n1T.js";import{n as ze}from"./formatted-number-D3NUzNBy.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht="important",De=" !"+ht,Ge=Ft(class extends Kt{constructor(t){var e;if(super(t),t.type!==Yt.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const d=typeof o=="string"&&o.endsWith(De);i.includes("-")||d?s.setProperty(i,d?o.slice(0,-11):o,d?ht:""):s[i]=o}}return Vt}}),je=U`
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
    `)}function Te(t){if(B.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=Ie()+Ae();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function st(t){B.delete(t),B.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Ie(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Ae(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var Pe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,pt=t=>{throw TypeError(t)},f=(t,e,s,i)=>{for(var o=i>1?void 0:i?We(e,s):e,d=t.length-1,h;d>=0;d--)(h=t[d])&&(o=(i?h(e,s,o):h(o))||o);return i&&o&&Pe(e,s,o),o},F=(t,e,s)=>e.has(t)||pt("Cannot "+s),m=(t,e,s)=>(F(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?pt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),G=(t,e,s,i)=>(F(t,e,"write to private field"),e.set(t,s),s),Le=(t,e,s)=>(F(t,e,"access private method"),s),_,j,N,A,R,P,q,ut,K,M;Me();let y=class extends Jt(Zt(te(it))){constructor(){super(...arguments),v(this,q),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,v(this,_),v(this,j,!1),v(this,N,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!m(this,A).call(this,s))return;this.close(s);return}this.close(s)}),v(this,A,t=>m(this,P).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),v(this,R,t=>m(this,P).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),v(this,P,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),v(this,K,t=>{this.show("slotted-trigger")}),v(this,M,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect(),d=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,h="click-outside";!d&&!m(this,j)&&m(this,A).call(this,h)&&this.close(h)}G(this,j,!1)})}show(t){this.open=!0,t&&m(this,R).call(this,t)}close(t){G(this,_,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),st(this)}render(){return n`<slot
        name="trigger"
        @slotchange=${Le(this,q,ut)}
      ></slot>
      ${b(this.open,()=>n`<dialog
            closedby="closerequest"
            @close=${m(this,N)}
            class=${w({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${W(this.heading)}
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
                    label=${z("Close")}
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
                  overflow=${W(this.scrollable)?"auto":ee}
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
                      >${z("Cancel")}</gds-button
                    >
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}>
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(G(this,_,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),Te(this),this.removeEventListener("click",m(this,M)),requestAnimationFrame(()=>this.addEventListener("click",m(this,M))),se&&((s=this._elDialog)==null||s.focus())})):(G(this,_,m(this,_)||"prop-change"),(t=this._elDialog)==null||t.close(m(this,_)),st(this),document.removeEventListener("click",m(this,M)),this.requestUpdate("open"))}};_=new WeakMap;j=new WeakMap;N=new WeakMap;A=new WeakMap;R=new WeakMap;P=new WeakMap;q=new WeakSet;ut=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",m(this,K)),t==null||t.setAttribute("aria-haspopup","dialog")}};K=new WeakMap;M=new WeakMap;y.styles=[je];y.styleExpressionBaseSelector="dialog";f([p({type:Boolean,reflect:!0})],y.prototype,"open",2);f([p()],y.prototype,"heading",2);f([p()],y.prototype,"variant",2);f([p()],y.prototype,"placement",2);f([p({type:Boolean})],y.prototype,"scrollable",2);f([rt("dialog")],y.prototype,"_elDialog",2);f([rt('slot[name="trigger"]')],y.prototype,"_elTriggerSlot",2);f([L("open")],y.prototype,"_handleOpenChange",1);y=f([ot("gds-dialog",{dependsOn:[lt,dt,ae,ct,he]}),nt()],y);const Oe=U`
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
`,Be=[ie,re,Oe],Ne=[lt,dt,we,le,de,ne,xe,_e,$e,ce,ke,ct,pe,ye,be,fe,ue,ge,me,ve],Re={compact:{button:"small",input:"small",dropdown:"small",badge:"small"},comfortable:{button:"small",input:"small",dropdown:"small",badge:"small"},spacious:{button:"medium",input:"large",dropdown:"medium",badge:"default"}};var qe=Object.defineProperty,He=Object.getOwnPropertyDescriptor,gt=t=>{throw TypeError(t)},c=(t,e,s,i)=>{for(var o=i>1?void 0:i?He(e,s):e,d=t.length-1,h;d>=0;d--)(h=t[d])&&(o=(i?h(e,s,o):h(o))||o);return i&&o&&qe(e,s,o),o},Y=(t,e,s)=>e.has(t)||gt("Cannot "+s),u=(t,e,s)=>(Y(t,e,"read from private field"),s?s.call(t):e.get(t)),I=(t,e,s)=>e.has(t)?gt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),at=(t,e,s,i)=>(Y(t,e,"write to private field"),e.set(t,s),s),r=(t,e,s)=>(Y(t,e,"access private method"),s),$,V,T,a,S,mt,O,yt,H,vt,k,Q,C,ft,bt,wt,xt,kt,_t,$t,St,Ct,Et,zt,Dt,Gt,jt,X,Mt,Tt,It,At,Pt,Wt,Lt,Ot,J,Bt,Nt,Rt,qt,Ht,Qt,Z,tt,E;let l=class extends it{constructor(){super(...arguments),I(this,a),I(this,$,{}),I(this,V,300*1e3),I(this,T,new Map),this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this._isMobile=!1,this.view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this.loaded=!0,this.loading=!1,this.rowsState=[],this.total=0,this.selected=new Set,this.error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){at(this,$,{}),r(this,a,k).call(this)}_onColumnsChange(){at(this,$,{}),this.view={...this.view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.map(t=>t.key))}}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return n`
      <div class="${w(t)}">
        ${[r(this,a,xt).call(this),b(this.error,()=>r(this,a,Pt).call(this),()=>b(this.rowsState.length===0&&!this.loading,()=>r(this,a,Wt).call(this),()=>r(this,a,At).call(this))),r(this,a,Lt).call(this)]}
      </div>
    `}clearSelection(){r(this,a,tt).call(this),r(this,a,E).call(this)}selectAll(){r(this,a,Z).call(this),r(this,a,E).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this.rowsState.length);this.selected=new Set(e),r(this,a,E).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this.selected);return{indices:t,data:t.map(e=>this.rowsState[e])}}};$=new WeakMap;V=new WeakMap;T=new WeakMap;a=new WeakSet;S=function(){return Re[this.density]};mt=function(){return this.selected.size>0};O=function(){return this.rowsState.length>0&&this.selected.size===this.rowsState.length};yt=function(){return u(this,a,mt)&&!u(this,a,O)};H=function(){return JSON.stringify({page:this.view.page,rows:this.view.rows,sortColumn:this.view.sortColumn,sortDirection:this.view.sortDirection,searchQuery:this.view.searchQuery})};vt=function(t){return Date.now()-t.timestamp<u(this,V)};k=async function(){if(this.data){if(!this.nocache){const t=r(this,a,H).call(this),e=u(this,$)[t];if(e&&r(this,a,vt).call(this,e)){this.rowsState=e.rows,this.total=e.total,this.loaded=!1;return}}this.loading=!0,this.error=null;try{const t=await this.data({page:this.view.page,rows:this.view.rows,sortColumn:this.view.sortColumn,sortDirection:this.view.sortDirection,searchQuery:this.view.searchQuery});if(!this.nocache){const e=r(this,a,H).call(this);u(this,$)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this.rowsState=t.rows,this.total=t.total,this.selected.clear(),this.loaded=!1,this.dispatchEvent(new CustomEvent("gds-table-data-loaded",{detail:t,bubbles:!0}))}catch(t){this.error=t,this.dispatchEvent(new CustomEvent("gds-table-data-error",{detail:t,bubbles:!0}))}finally{this.loading=!1}}};Q=function(t){var e;if(!t)return null;if(!u(this,T).has(t)){const s=this.querySelector(`template[name="${t}"]`);u(this,T).set(t,s)}return(e=u(this,T).get(t))==null?void 0:e.content.cloneNode(!0)};C=function(t,e){if(!t)return null;if(Array.isArray(t))return t.map(i=>r(this,a,C).call(this,i,e));const s=i=>typeof i=="function"?i(e):i;switch(t.type){case"badge":{const i=s(t.variant)||"information",o=s(t.size)||u(this,a,S).badge;return n`
          <gds-badge size="${o}" variant="${i}">
            ${s(t.value)}
          </gds-badge>
        `}case"image":{const i=s(t.src);if(!i)return null;const o=s(t.width)||"24px",d=s(t.height)||"24px",h=s(t["border-radius"])||"max",g=s(t["object-fit"])||"cover",D=s(t.alt)||"";return n`
          <gds-img
            src="${i}"
            alt="${D}"
            width="${o}"
            height="${d}"
            border-radius="${h}"
            object-fit="${g}"
            object-position="center"
          ></gds-img>
        `}case"button":{const i=s(t.size)||u(this,a,S).button,o=s(t.variant),d=s(t.rank),h=s(t.label),g=s(t.template),D=r(this,a,Q).call(this,g);return n`
          <gds-button
            size="${i}"
            variant="${o||"neutral"}"
            rank="${d||"secondary"}"
            @click="${Ut=>{Ut.stopPropagation(),t.onClick(e)}}"
          >
            ${[h,D]}
          </gds-button>
        `}case"link":{const i=s(t.href);if(!i)return null;const o=s(t.label),d=s(t.target),h=s(t.download),g=s(t.template),D=r(this,a,Q).call(this,g),et=[o,D];return n`
          <gds-link
            href=${W(i)}
            target=${W(d)}
            .download=${h}
            text-decoration="underline"
          >
            ${et}
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
        `}case"formatted-number":{const i=s(t.value),o=ze[t.format||"decimalsAndThousands"];return o(i,t.locale,t.currency)}case"formatted-account":{const i=s(t.value),o=Ee[t.format||"seb-account"];return o(i)}case"formatted-date":{const i=s(t.value),o=Ce[t.format||"dateLong"];return o(i,t.locale)}default:return null}};ft=function(t,e){const{cell:s}=e,i=r(this,a,C).call(this,s==null?void 0:s.value,t)??t[e.key],o=e.justify?n`<span>${i}</span>`:i,d=this._isMobile&&this.responsive,h=d?n`<span class="column-label" aria-hidden="true"
          >${e.label}:</span
        >`:null,g=d?`${e.label}: `:"";return n`
      <div class="cell-content" aria-label="${g}">
        ${[h,r(this,a,C).call(this,s==null?void 0:s.lead,t),o,r(this,a,C).call(this,s==null?void 0:s.trail,t)]}
      </div>
    `};bt=function(t){const e=this.view.sortColumn===t.key,s=this.view.sortDirection;return e?s==="asc"?n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:n`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};wt=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};xt=function(){return this.plain||!r(this,a,wt).call(this)?null:n`
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
          ${b(this.settings,()=>n`
              <gds-dropdown
                multiple
                plain
                size="${u(this,a,S).dropdown}"
                searchable
                .value=${Array.from(this.view.visibleColumns)}
                @change=${r(this,a,qt)}
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
    `};kt=function(t){const e=this.view.sortColumn===t.key,s=this.view.sortDirection,i=w({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify});return n`
      <th
        class=${i}
        @click=${t.sortable?()=>r(this,a,Bt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label">${t.label}</span>
          ${b(t.sortable,()=>n`
              <span class="sort-icon">${r(this,a,bt).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};_t=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||z("Actions"),e=w({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return n`
      <th class="${e}">
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};$t=function(){return this.selectable?n`
      <th class="checkbox-cell">
        ${r(this,a,X).call(this,{checked:u(this,a,O),indeterminate:u(this,a,yt),ariaLabel:z("Select all rows"),onToggle:()=>r(this,a,Ht).call(this,{})})}
      </th>
    `:null};St=function(){return this.columns.filter(t=>this.view.visibleColumns.has(t.key)).map(t=>r(this,a,kt).call(this,t))};Ct=function(){return n`
      <thead>
        <tr>
          ${[r(this,a,$t).call(this),r(this,a,St).call(this),r(this,a,_t).call(this)]}
        </tr>
      </thead>
    `};Et=function(t,e){const s=w({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),i=Ge({"--cell-width":e.width});return n`
      <td style=${i} class=${s}>
        ${r(this,a,ft).call(this,t,e)}
      </td>
    `};zt=function(t){return this.selectable?n`
      <td class="checkbox-cell">
        ${r(this,a,X).call(this,{checked:this.selected.has(t),indeterminate:!1,ariaLabel:z(`Select row ${t+1}`),onToggle:()=>r(this,a,Qt).call(this,t,{detail:{checked:!this.selected.has(t)}})})}
      </td>
    `:null};Dt=function(t){return this.columns.filter(e=>this.view.visibleColumns.has(e.key)).map(e=>r(this,a,Et).call(this,t,e))};Gt=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return n`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=r(this,a,C).call(this,this.actions.cell,t),i=w({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return n`
      <td class="${i}">
        <div class="cell-content">${s}</div>
      </td>
    `};jt=function(t,e){return n`
      <tr
        class=${w({selected:this.selected.has(e),loading:this.loading})}
      >
        ${[r(this,a,zt).call(this,e),r(this,a,Dt).call(this,t),r(this,a,Gt).call(this,t,e)]}
      </tr>
    `};X=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:i,onToggle:o}){const d=g=>{g.stopPropagation(),!s&&o()};return n`
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
    `};Mt=function(){return n`
      <div class="cell-content">
        <span class="skeleton skeleton-text"></span>
      </div>
    `};Tt=function(t){return n`
      <tr class="skeleton-row">
        ${b(this.selectable,()=>n`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this.view.visibleColumns.has(e.key)).map(()=>n` <td>${r(this,a,Mt).call(this)}</td> `)}
        ${b(this.actions,()=>n`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};It=function(){if(this.loading&&this.loaded){const t=Array.from({length:this.view.rows},(e,s)=>r(this,a,Tt).call(this,s));return n`<tbody>
        ${t}
      </tbody>`}return n`
      <tbody>
        ${this.rowsState.map((t,e)=>r(this,a,jt).call(this,t,e))}
      </tbody>
    `};At=function(){const t=w({responsive:this.responsive,data:!0});return n`
      <div class=${t}>
        <table>
          ${r(this,a,Ct).call(this)} ${r(this,a,It).call(this)}
        </table>
      </div>
    `};Pt=function(){return n`
      <gds-card justify-content="center" align-items="flex-start">
        <gds-text tag="p">Error loading data</gds-text>
        <gds-button size="small" @click=${()=>r(this,a,k).call(this)}>
          Retry
        </gds-button>
      </gds-card>
    `};Wt=function(){const t=this.view.searchQuery.length>0;return n`
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
              <gds-button size="small" @click=${r(this,a,J)}>
                Clear search
              </gds-button>
            `:""}
      </gds-card>
    `};Lt=function(){if(this.plain||this.total<1)return null;const t=(this.view.page-1)*this.view.rows+1,e=Math.min(this.view.page*this.view.rows,this.total),s=`${t} - ${e} ${z("of")} ${this.total}`;return n`
      <gds-pagination
        .page=${this.view.page}
        .rows=${this.view.rows}
        .options=${this.options}
        .total=${this.total}
        .density=${this.density}
        .label=${s}
        @gds-page-change=${r(this,a,Nt)}
        @gds-rows-change=${r(this,a,Rt)}
        width="100%"
      >
      </gds-pagination>
    `};Ot=async function(t){const e=t.target;this.view={...this.view,searchQuery:e.value,page:1},await r(this,a,k).call(this)};J=async function(){this.view={...this.view,searchQuery:"",page:1},await r(this,a,k).call(this)};Bt=async function(t){this.view={...this.view,sortColumn:t,sortDirection:this.view.sortColumn===t&&this.view.sortDirection==="asc"?"desc":"asc",page:1},await r(this,a,k).call(this)};Nt=async function(t){this.view={...this.view,page:t.detail.page},await r(this,a,k).call(this)};Rt=async function(t){this.view={...this.view,rows:t.detail.rows,page:1},await r(this,a,k).call(this)};qt=function(t){const e=t.detail.value;this.view={...this.view,visibleColumns:new Set(e)},this.requestUpdate()};Ht=function(t){u(this,a,O)?r(this,a,tt).call(this):r(this,a,Z).call(this),r(this,a,E).call(this)};Qt=function(t,e){e.detail.checked?this.selected.add(t):this.selected.delete(t),r(this,a,E).call(this),this.requestUpdate()};Z=function(){this.selected=new Set(this.rowsState.map((t,e)=>e)),this.requestUpdate()};tt=function(){this.selected.clear(),this.requestUpdate()};E=function(){this.dispatchEvent(new CustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this.selected),selectedData:Array.from(this.selected).map(t=>this.rowsState[t]),count:this.selected.size},bubbles:!0}))};l.styles=Be;c([p({type:Array})],l.prototype,"options",2);c([p({type:Number})],l.prototype,"page",2);c([p({type:Number})],l.prototype,"rows",2);c([p({type:Array})],l.prototype,"columns",2);c([p()],l.prototype,"data",2);c([p({reflect:!1})],l.prototype,"density",2);c([p({type:Boolean,reflect:!1})],l.prototype,"selectable",2);c([p({type:Boolean,reflect:!1})],l.prototype,"responsive",2);c([p({type:Boolean,reflect:!1})],l.prototype,"plain",2);c([p({type:Boolean,reflect:!1})],l.prototype,"searchable",2);c([p({type:Boolean,reflect:!1})],l.prototype,"settings",2);c([p({type:Boolean,reflect:!1})],l.prototype,"striped",2);c([p()],l.prototype,"actions",2);c([p({type:Boolean,reflect:!1})],l.prototype,"nocache",2);c([p()],l.prototype,"dataLoadKey",2);c([x()],l.prototype,"_isMobile",2);c([oe("(max-width: 768px)")],l.prototype,"_handleMobile",1);c([x()],l.prototype,"view",2);c([x()],l.prototype,"loaded",2);c([x()],l.prototype,"loading",2);c([x()],l.prototype,"rowsState",2);c([x()],l.prototype,"total",2);c([x()],l.prototype,"selected",2);c([x()],l.prototype,"error",2);c([L("dataLoadKey"),L("data")],l.prototype,"_onDataChange",1);c([L("columns")],l.prototype,"_onColumnsChange",1);l=c([nt(),ot("gds-table",{dependsOn:Ne})],l);l.define();export{y as G};
