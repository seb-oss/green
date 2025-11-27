import{S as Ht,O as Qt,Q as qt,ag as Ut,i as H,ah as Ft,U as Yt,Z as Kt,ai as Vt,A as et,b as f,a as w,o as T,H as Z,E as Xt,h as n,aj as Jt,n as p,d as st,a3 as Zt,g as at,I as te,J as it,G as ee,t as se,af as ae,z as x}from"./iframe-DWsB4ykc.js";import{w as ie}from"./popover.component-DYQ20OuB.js";import{a as re}from"./dropdown.component-D-_vtcwF.js";import"./menu-heading.component-dEJftKGi.js";import{a as oe,G as ne}from"./context-menu.component-ntPtG8RV.js";import"./alert.component-CNiKIpqz.js";import{G as le}from"./badge.component-CA5exhQm.js";import"./blur.component-CsAdPJXN.js";import"./breadcrumb.component-yBaVwtTs.js";import"./calendar.component-LxB1ByLC.js";import{G as rt}from"./card.component-BzPnm63o.js";import"./card-linked.component-DqFj8I0t.js";import"./checkbox-group.component-CJZkU4Gt.js";import"./coachmark.component-tZtYHb8Y.js";import"./datepicker.component-BAHHyrza.js";import{G as ot}from"./flex.component-Czb7cLFd.js";import{I as de,a as ce,b as he,c as pe,d as ge}from"./zoom-out.component-D4RF67BO.js";import"./divider.component-B_y90ALg.js";import"./signal.component-COcF4S3q.js";import"./filter-chips.component-DUc4dLCR.js";import"./summary.component-C73I1dAu.js";import"./grouped-list.component-CM4T1HwY.js";import"./icon-BAStNcds.js";import"./arrow-down.component-D89PDzqp.js";import"./arrow-left.component-BpbIXZVx.js";import"./arrow-right.component-DNUpNmFK.js";import"./arrow-rotate-counter-clockwise.component-CnsELjUo.js";import"./arrow-up.component-DfgsRGq4.js";import"./sun.component-Dez4RTps.js";import"./star.component-Bs9W91gu.js";import"./bubbles.component-F8tavthc.js";import"./calender-add.component-BJbkz75X.js";import"./chain-link-D3C2s-cq.js";import"./checkmark.component-C075bn3H.js";import"./chevron-bottom.component-BQNm9Ejz.js";import"./chevron-right-small.component-C5iPbXBF.js";import"./chevron-left.component-sh8_KX6z.js";import"./chevron-right.component-CvHDOS0g.js";import"./chevron-top.component-B2ZwTN-M.js";import"./circle-check.component-TeRbkdMs.js";import"./triangle-exclamation.component-B7EpwVPC.js";import"./circles-three.component-CHAbf-aj.js";import"./cloudy-sun.component-DB5ak-jI.js";import"./credit-card.component-BxvFws9p.js";import{I as ue}from"./cross-small.component-DLVu25YM.js";import{I as ye}from"./dot-grid-one-horizontal-CsTu85dn.js";import"./folder.component-Cs4y3t-r.js";import{I as me}from"./magnifying-glass.component-oYOSqlxV.js";import{I as ve}from"./minus-small.component-C4_zwe3C.js";import"./people-profile.component-BupjGC_R.js";import"./push.component-Cm5avAdb.js";import"./rocket.component-DDHFje-h.js";import"./square-grid-circle.component-DcG8wb6e.js";import{G as fe}from"./img.component-DKmqEety.js";import{G as be}from"./input-DzEXuvQ3.js";import{G as we}from"./link.component-Dt1sRYc5.js";import"./mask.component-B0xLpoyb.js";import"./menu-button.component-T-09wV-d.js";import{G as xe}from"./pagination-DxxHsGEA.js";import"./radio-group.component-CtvVVuIL.js";import"./rich-text.component-CT7L8E-X.js";import"./segmented-control.component-DNs1Vd6W.js";import"./sensitive-number.component-A1csqnbH.js";import"./sensitive-date.component-CSnqOpgM.js";import"./sensitive-account.component-ubCzufdm.js";import"./select.component-BVoOZAbE.js";import"./spinner.component-B5RWrOsl.js";import{G as ke}from"./text-sA9KGlwJ.js";import"./textarea.component-CBKF60Fz.js";import"./video.component-Dz0gw-hJ.js";import"./card-pattern-01.component-3pVO8cK8.js";import{c as $e}from"./rbcb-toggle.template-BP5b6k1Z.js";import{d as _e}from"./formatted-date.component-CclFPhl0.js";import{a as Se}from"./formatted-account-kFe5w0hH.js";import{n as Ce}from"./formatted-number-CyTyIogR.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt="important",ze=" !"+nt,Ee=Ht(class extends Qt{constructor(t){var e;if(super(t),t.type!==qt.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const l=typeof o=="string"&&o.endsWith(ze);i.includes("-")||l?s.setProperty(i,l?o.slice(0,-11):o,l?nt:""):s[i]=o}}return Ut}}),je=H`
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
`,W=new Set;function Ge(){Ft.instance.injectGlobalStyles("dialog-scroll-lock",H`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function De(t){if(W.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=Ae()+Me();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function tt(t){W.delete(t),W.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Ae(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Me(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var Te=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,lt=t=>{throw TypeError(t)},b=(t,e,s,i)=>{for(var o=i>1?void 0:i?Ie(e,s):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(o=(i?h(e,s,o):h(o))||o);return i&&o&&Te(e,s,o),o},Q=(t,e,s)=>e.has(t)||lt("Cannot "+s),u=(t,e,s)=>(Q(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?lt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),z=(t,e,s,i)=>(Q(t,e,"write to private field"),e.set(t,s),s),Pe=(t,e,s)=>(Q(t,e,"access private method"),s),$,E,B,A,O,M,L,dt,q,j;Ge();let m=class extends Yt(Kt(Vt(et))){constructor(){super(...arguments),v(this,L),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,v(this,$),v(this,E,!1),v(this,B,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!u(this,A).call(this,s))return;this.close(s);return}this.close(s)}),v(this,A,t=>u(this,M).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),v(this,O,t=>u(this,M).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),v(this,M,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),v(this,q,t=>{this.show("slotted-trigger")}),v(this,j,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect(),l=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,h="click-outside";!l&&!u(this,E)&&u(this,A).call(this,h)&&this.close(h)}z(this,E,!1)})}show(t){this.open=!0,t&&u(this,O).call(this,t)}close(t){z(this,$,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),tt(this)}render(){return n`<slot
        name="trigger"
        @slotchange=${Pe(this,L,dt)}
      ></slot>
      ${f(this.open,()=>n`<dialog
            closedby="closerequest"
            @close=${u(this,B)}
            class=${w({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${T(this.heading)}
          >
            <gds-card
              class="card"
              padding="xl"
              variant="secondary"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
              border-width="0"
              @mousedown=${()=>z(this,E,!0)}
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="tertiary"
                    size="small"
                    label=${Z("Close")}
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
                  overflow=${T(this.scrollable)?"auto":Xt}
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
                      >${Z("Cancel")}</gds-button
                    >
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}>
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(z(this,$,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),De(this),this.removeEventListener("click",u(this,j)),requestAnimationFrame(()=>this.addEventListener("click",u(this,j))),Jt&&((s=this._elDialog)==null||s.focus())})):(z(this,$,u(this,$)||"prop-change"),(t=this._elDialog)==null||t.close(u(this,$)),tt(this),document.removeEventListener("click",u(this,j)),this.requestUpdate("open"))}};$=new WeakMap;E=new WeakMap;B=new WeakMap;A=new WeakMap;O=new WeakMap;M=new WeakMap;L=new WeakSet;dt=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",u(this,q)),t==null||t.setAttribute("aria-haspopup","dialog")}};q=new WeakMap;j=new WeakMap;m.styles=[je];m.styleExpressionBaseSelector="dialog";b([p({type:Boolean,reflect:!0})],m.prototype,"open",2);b([p()],m.prototype,"heading",2);b([p()],m.prototype,"variant",2);b([p()],m.prototype,"placement",2);b([p({type:Boolean})],m.prototype,"scrollable",2);b([st("dialog")],m.prototype,"_elDialog",2);b([st('slot[name="trigger"]')],m.prototype,"_elTriggerSlot",2);b([Zt("open")],m.prototype,"_handleOpenChange",1);m=b([at("gds-dialog",{dependsOn:[it,rt,ee,ot,de]}),te()],m);const We=H`
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

  .footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    transition-property: opacity, translate;
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-timing-function: var(--gds-sys-motion-easing-ease);

    @starting-style {
      opacity: 0;
      translate: 0 2px;
    }
  }

  /* Shared layout for header and footer sections */
  .header .lead,
  .header .trail,
  .footer .lead,
  .footer .trail {
    display: flex;
    align-items: center;
    gap: calc(var(--table-gap) * 0.8);
    width: max-content;
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

    .header,
    .footer {
      flex-direction: column;
    }

    .header {
      gap: calc(var(--table-gap) / 2);
    }

    .footer {
      justify-content: center;
      align-items: center;
      gap: var(--table-gap);
    }

    .footer .trail {
      display: contents;
    }

    .footer .lead {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: var(--gds-sys-space-xl);
      border-width: 0 0 var(--gds-sys-space-4xs) 0;
      border-style: solid;
      border-color: var(--gds-sys-color-border-subtle-02);
      padding-bottom: var(--gds-sys-space-l);
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
    .header,
    .footer {
      transition: none;
    }
  }
`,Be=[se,ae,We],Oe=[it,rt,fe,oe,ne,re,be,xe,ke,le,we,ot,ce,ue,ve,me,he,pe,ge,ye];var Le=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,ct=t=>{throw TypeError(t)},c=(t,e,s,i)=>{for(var o=i>1?void 0:i?Re(e,s):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(o=(i?h(e,s,o):h(o))||o);return i&&o&&Le(e,s,o),o},ht=(t,e,s)=>e.has(t)||ct("Cannot "+s),y=(t,e,s)=>(ht(t,e,"read from private field"),s?s.call(t):e.get(t)),D=(t,e,s)=>e.has(t)?ct("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),r=(t,e,s)=>(ht(t,e,"access private method"),s),I,U,G,a,F,P,pt,R,gt,k,N,_,ut,yt,mt,vt,ft,bt,wt,xt,kt,$t,_t,St,Ct,zt,Y,Et,jt,Gt,Dt,At,Mt,Tt,It,K,Pt,Wt,Bt,Ot,Lt,Rt,V,X,S;let d=class extends et{constructor(){super(...arguments),D(this,a),D(this,I,{}),D(this,U,300*1e3),D(this,G,new Map),this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this._isMobile=!1,this.view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this.loaded=!0,this.loading=!1,this.rowsState=[],this.total=0,this.selected=new Set,this.error=null}_handleMobile(t){this._isMobile=t}async connectedCallback(){super.connectedCallback(),this.view={...this.view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.map(t=>t.key))},await r(this,a,k).call(this)}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return n`
      <div class="${w(t)}">
        ${r(this,a,vt).call(this)}
        ${f(this.error,()=>r(this,a,At).call(this),()=>f(this.rowsState.length===0&&!this.loading,()=>r(this,a,Mt).call(this),()=>r(this,a,Dt).call(this)))}
        ${r(this,a,Tt).call(this)}
      </div>
    `}clearSelection(){r(this,a,X).call(this),r(this,a,S).call(this)}selectAll(){r(this,a,V).call(this),r(this,a,S).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this.rowsState.length);this.selected=new Set(e),r(this,a,S).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this.selected);return{indices:t,data:t.map(e=>this.rowsState[e])}}};I=new WeakMap;U=new WeakMap;G=new WeakMap;a=new WeakSet;F=function(){return this.selected.size>0};P=function(){return this.rowsState.length>0&&this.selected.size===this.rowsState.length};pt=function(){return y(this,a,F)&&!y(this,a,P)};R=function(){return JSON.stringify({page:this.view.page,rows:this.view.rows,sortColumn:this.view.sortColumn,sortDirection:this.view.sortDirection,searchQuery:this.view.searchQuery})};gt=function(t){return Date.now()-t.timestamp<y(this,U)};k=async function(){if(this.data){if(!this.nocache){const t=r(this,a,R).call(this),e=y(this,I)[t];if(e&&r(this,a,gt).call(this,e)){this.rowsState=e.rows,this.total=e.total,this.loaded=!1;return}}this.loading=!0,this.error=null;try{const t=await this.data({page:this.view.page,rows:this.view.rows,sortColumn:this.view.sortColumn,sortDirection:this.view.sortDirection,searchQuery:this.view.searchQuery});if(!this.nocache){const e=r(this,a,R).call(this);y(this,I)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this.rowsState=t.rows,this.total=t.total,this.selected.clear(),this.loaded=!1,this.dispatchEvent(new CustomEvent("gds-table-data-loaded",{detail:t,bubbles:!0}))}catch(t){this.error=t,this.dispatchEvent(new CustomEvent("gds-table-data-error",{detail:t,bubbles:!0}))}finally{this.loading=!1}}};N=function(t){var e;if(!t)return null;if(!y(this,G).has(t)){const s=this.querySelector(`template[name="${t}"]`);y(this,G).set(t,s)}return(e=y(this,G).get(t))==null?void 0:e.content.cloneNode(!0)};_=function(t,e){if(!t)return null;if(Array.isArray(t))return t.map(i=>r(this,a,_).call(this,i,e));const s=i=>typeof i=="function"?i(e):i;switch(t.type){case"badge":{const i=s(t.variant)||"information",o=s(t.size)||"small";return n`
          <gds-badge size="${o}" variant="${i}">
            ${s(t.value)}
          </gds-badge>
        `}case"image":{const i=s(t.src);if(!i)return null;const o=s(t.width)||"24px",l=s(t.height)||"24px",h=s(t["border-radius"])||"max",g=s(t["object-fit"])||"cover",C=s(t.alt)||"";return n`
          <gds-img
            src="${i}"
            alt="${C}"
            width="${o}"
            height="${l}"
            border-radius="${h}"
            object-fit="${g}"
            object-position="center"
          ></gds-img>
        `}case"button":{const i=s(t.size),o=s(t.variant),l=s(t.rank),h=s(t.label),g=s(t.template),C=r(this,a,N).call(this,g);return n`
          <gds-button
            size="${i||"small"}"
            variant="${o||"neutral"}"
            rank="${l||"secondary"}"
            @click="${Nt=>{Nt.stopPropagation(),t.onClick(e)}}"
          >
            ${[h,C]}
          </gds-button>
        `}case"link":{const i=s(t.href);if(!i)return null;const o=s(t.label),l=s(t.target),h=s(t.download),g=s(t.template),C=r(this,a,N).call(this,g),J=[o,C];return n`
          <gds-link
            href=${T(i)}
            target=${T(l)}
            .download=${h}
            text-decoration="underline"
          >
            ${J}
          </gds-link>
        `}case"context-menu":{const i=t.items;return n`
          <gds-context-menu>
            <gds-button slot="trigger" size="xs" rank="tertiary">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            ${i.map(o=>{const l=s(o.label);return n`
                <gds-menu-item @click="${()=>o.onClick(e)}">
                  ${l}
                </gds-menu-item>
              `})}
          </gds-context-menu>
        `}case"formatted-number":{const i=s(t.value),o=Ce[t.format||"decimalsAndThousands"];return o(i,t.locale,t.currency)}case"formatted-account":{const i=s(t.value),o=Se[t.format||"seb-account"];return o(i)}case"formatted-date":{const i=s(t.value),o=_e[t.format||"dateLong"];return o(i,t.locale)}default:return null}};ut=function(t,e){const{cell:s}=e,i=r(this,a,_).call(this,s==null?void 0:s.value,t)??t[e.key],o=e.justify?n`<span>${i}</span>`:i,l=this._isMobile&&this.responsive,h=l?n`<span class="column-label" aria-hidden="true"
          >${e.label}:</span
        >`:null,g=l?`${e.label}: `:"";return n`
      <div class="cell-content" aria-label="${g}">
        ${[h,r(this,a,_).call(this,s==null?void 0:s.lead,t),o,r(this,a,_).call(this,s==null?void 0:s.trail,t)]}
      </div>
    `};yt=function(t){const e=this.view.sortColumn===t.key,s=this.view.sortDirection;return e?s==="asc"?n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:n`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};mt=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};vt=function(){return this.plain||!r(this,a,mt).call(this)?null:n`
      <div class="header">
        <div class="lead">
          ${f(this.searchable,()=>n`
              <gds-input
                type="text"
                size="small"
                plain
                clearable
                placeholder="Search..."
                .value=${this.view.searchQuery}
                @input=${r(this,a,It)}
                @gds-input-cleared=${r(this,a,K)}
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
          ${f(this.settings,()=>n`
              <gds-dropdown
                multiple
                plain
                size="small"
                searchable
                .value=${Array.from(this.view.visibleColumns)}
                @change=${r(this,a,Ot)}
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
    `};ft=function(t){const e=this.view.sortColumn===t.key,s=this.view.sortDirection,i=w({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify});return n`
      <th
        class=${i}
        @click=${t.sortable?()=>r(this,a,Pt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label">${t.label}</span>
          ${f(t.sortable,()=>n`
              <span class="sort-icon">${r(this,a,yt).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};bt=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||"Actions",e=w({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return n`
      <th class="${e}">
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};wt=function(){return this.selectable?n`
      <th class="checkbox-cell">
        ${r(this,a,Y).call(this,{checked:y(this,a,P),indeterminate:y(this,a,pt),ariaLabel:"Select all rows",onToggle:()=>r(this,a,Lt).call(this,{})})}
      </th>
    `:null};xt=function(){return this.columns.filter(t=>this.view.visibleColumns.has(t.key)).map(t=>r(this,a,ft).call(this,t))};kt=function(){return n`
      <thead>
        <tr>
          ${[r(this,a,wt).call(this),r(this,a,xt).call(this),r(this,a,bt).call(this)]}
        </tr>
      </thead>
    `};$t=function(t,e){const s=w({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),i=Ee({"--cell-width":e.width});return n`
      <td style=${i} class=${s}>
        ${r(this,a,ut).call(this,t,e)}
      </td>
    `};_t=function(t){return this.selectable?n`
      <td class="checkbox-cell" data-label="Select">
        ${r(this,a,Y).call(this,{checked:this.selected.has(t),indeterminate:!1,ariaLabel:`Select row ${t+1}`,onToggle:()=>r(this,a,Rt).call(this,t,{detail:{checked:!this.selected.has(t)}})})}
      </td>
    `:null};St=function(t){return this.columns.filter(e=>this.view.visibleColumns.has(e.key)).map(e=>r(this,a,$t).call(this,t,e))};Ct=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return n`
        <td class="actions-cell" data-label="Actions">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=r(this,a,_).call(this,this.actions.cell,t),i=w({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return n`
      <td class="${i}" data-label="Actions">
        <div class="cell-content">${s}</div>
      </td>
    `};zt=function(t,e){return n`
      <tr
        class=${w({selected:this.selected.has(e),loading:this.loading})}
      >
        ${[r(this,a,_t).call(this,e),r(this,a,St).call(this,t),r(this,a,Ct).call(this,t,e)]}
      </tr>
    `};Y=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:i,onToggle:o}){const l=g=>{g.stopPropagation(),!s&&o()};return n`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${i}
        @click=${l}
        @keydown=${g=>{(g.key===" "||g.key==="Enter")&&(g.preventDefault(),l(g))}}
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
        ${$e({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};Et=function(){return n`
      <div class="cell-content">
        <span class="skeleton skeleton-text"></span>
      </div>
    `};jt=function(t){return n`
      <tr class="skeleton-row">
        ${f(this.selectable,()=>n`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this.view.visibleColumns.has(e.key)).map(()=>n` <td>${r(this,a,Et).call(this)}</td> `)}
        ${f(this.actions,()=>n`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};Gt=function(){if(this.loading&&this.loaded){const t=Array.from({length:this.view.rows},(e,s)=>r(this,a,jt).call(this,s));return n`<tbody>
        ${t}
      </tbody>`}return n`
      <tbody>
        ${this.rowsState.map((t,e)=>r(this,a,zt).call(this,t,e))}
      </tbody>
    `};Dt=function(){const t=w({responsive:this.responsive,data:!0});return n`
      <div class=${t}>
        <table>
          ${r(this,a,kt).call(this)} ${r(this,a,Gt).call(this)}
        </table>
      </div>
    `};At=function(){return n`
      <gds-card justify-content="center" align-items="flex-start">
        <gds-text tag="p">Error loading data</gds-text>
        <gds-button size="small" @click=${()=>r(this,a,k).call(this)}>
          Retry
        </gds-button>
      </gds-card>
    `};Mt=function(){const t=this.view.searchQuery.length>0;return n`
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
              <gds-button size="small" @click=${r(this,a,K)}>
                Clear search
              </gds-button>
            `:""}
      </gds-card>
    `};Tt=function(){return this.plain||this.total<1?null:n`
      <div class="footer">
        <div class="lead">
          <slot name="footer-lead">
            ${f(this.selectable&&y(this,a,F),()=>n`
                <div class="selection-info">
                  <span>
                    ${this.selected.size} of ${this.rowsState.length} selected
                  </span>
                  <gds-button
                    size="xs"
                    rank="secondary"
                    @click=${this.clearSelection}
                  >
                    <gds-icon-cross-small></gds-icon-cross-small>
                  </gds-button>
                </div>
              `,()=>n`
                <span>
                  Showing ${(this.view.page-1)*this.view.rows+1} to
                  ${Math.min(this.view.page*this.view.rows,this.total)} of
                  ${this.total} entries
                </span>
              `)}
          </slot>
        </div>
        <div class="trail">
          <slot name="footer-trail"></slot>
          <gds-pagination
            .page=${this.view.page}
            .rows=${this.view.rows}
            .options=${this.options}
            .total=${this.total}
            @gds-page-change=${r(this,a,Wt)}
            @gds-rows-change=${r(this,a,Bt)}
            width="100%"
          ></gds-pagination>
        </div>
      </div>
    `};It=async function(t){const e=t.target;this.view={...this.view,searchQuery:e.value,page:1},await r(this,a,k).call(this)};K=async function(){this.view={...this.view,searchQuery:"",page:1},await r(this,a,k).call(this)};Pt=async function(t){this.view={...this.view,sortColumn:t,sortDirection:this.view.sortColumn===t&&this.view.sortDirection==="asc"?"desc":"asc",page:1},await r(this,a,k).call(this)};Wt=async function(t){this.view={...this.view,page:t.detail.page},await r(this,a,k).call(this)};Bt=async function(t){this.view={...this.view,rows:t.detail.rows,page:1},await r(this,a,k).call(this)};Ot=function(t){const e=t.detail.value;this.view={...this.view,visibleColumns:new Set(e)},this.requestUpdate()};Lt=function(t){y(this,a,P)?r(this,a,X).call(this):r(this,a,V).call(this),r(this,a,S).call(this)};Rt=function(t,e){e.detail.checked?this.selected.add(t):this.selected.delete(t),r(this,a,S).call(this),this.requestUpdate()};V=function(){this.selected=new Set(this.rowsState.map((t,e)=>e)),this.requestUpdate()};X=function(){this.selected.clear(),this.requestUpdate()};S=function(){this.dispatchEvent(new CustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this.selected),selectedData:Array.from(this.selected).map(t=>this.rowsState[t]),count:this.selected.size},bubbles:!0}))};d.styles=Be;c([p({type:Array})],d.prototype,"options",2);c([p({type:Number})],d.prototype,"page",2);c([p({type:Number})],d.prototype,"rows",2);c([p({type:Array})],d.prototype,"columns",2);c([p()],d.prototype,"data",2);c([p({reflect:!1})],d.prototype,"density",2);c([p({type:Boolean,reflect:!1})],d.prototype,"selectable",2);c([p({type:Boolean,reflect:!1})],d.prototype,"responsive",2);c([p({type:Boolean,reflect:!1})],d.prototype,"plain",2);c([p({type:Boolean,reflect:!1})],d.prototype,"searchable",2);c([p({type:Boolean,reflect:!1})],d.prototype,"settings",2);c([p({type:Boolean,reflect:!1})],d.prototype,"striped",2);c([p()],d.prototype,"actions",2);c([p({type:Boolean,reflect:!1})],d.prototype,"nocache",2);c([x()],d.prototype,"_isMobile",2);c([ie("(max-width: 768px)")],d.prototype,"_handleMobile",1);c([x()],d.prototype,"view",2);c([x()],d.prototype,"loaded",2);c([x()],d.prototype,"loading",2);c([x()],d.prototype,"rowsState",2);c([x()],d.prototype,"total",2);c([x()],d.prototype,"selected",2);c([x()],d.prototype,"error",2);d=c([at("gds-table",{dependsOn:Oe})],d);d.define();export{m as G};
