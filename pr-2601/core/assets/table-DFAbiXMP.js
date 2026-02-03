import{i as B,ab as Jt,a0 as Kt,a4 as Zt,aq as te,J as Z,b as v,a as w,o as F,O as p,E as ee,h as l,ar as se,n as h,d as tt,a8 as G,g as et,P as st,G as ae,$ as ie,X as re,Z as oe,af as le,t as ne,ai as de,s as ce,ag as he,I as x}from"./iframe-B_Sc2FD_.js";import{l as at}from"./localized-decorator-yp3xEb-A.js";import{w as pe}from"./popover.component-B98PXTcZ.js";import{a as ge}from"./dropdown.component-CBx-cUCj.js";import"./menu-heading.component-D24b0oAN.js";import{a as ue,G as ye}from"./context-menu.component-4kGmHdYr.js";import"./alert.component-CESHMon_.js";import{G as fe}from"./badge.component-7OrAhW2Y.js";import"./blur.component-BSVSCjZ1.js";import"./breadcrumb.component-BHZTicIF.js";import"./calendar.component-B98sAWSy.js";import{G as it}from"./card.component-DqqIVQ9y.js";import"./card-linked.component-BHPxy6C7.js";import"./checkbox-group.component-DI0Bu2Ns.js";import"./coachmark.component-D2TZpDFA.js";import"./datepicker.component-BI9wFa1a.js";import{G as rt}from"./flex.component-7kB9yVhW.js";import{I as me,a as be,b as ve,c as _e,d as we}from"./zoom-out.component-BmiRTX1Q.js";import{G as xe}from"./divider.component-C5J3-bHz.js";import"./signal.component-BQY1zrA0.js";import"./filter-chips.component-wvHMMkeK.js";import"./summary.component-DLOk-7H_.js";import"./grouped-list.component--waWFMdm.js";import"./icon.component-CO_afi3Z.js";import"./arrow-down.component-U8BayAa6.js";import"./arrow-left.component-DjcllvCC.js";import"./arrow-right.component-BeKG7awp.js";import"./arrow-rotate-counter-clockwise.component-B0jD0qLc.js";import"./arrow-up.component-C95FNqA7.js";import"./sun.component-DBQ0oSN_.js";import"./star.component-CLmSMInS.js";import"./bubbles.component-CDKoR0Gp.js";import"./calender-add.component-D8QuO5JO.js";import"./chain-link-CBN3-tGH.js";import"./checkmark.component-n22IpYYL.js";import"./chevron-bottom.component-QNdAGytU.js";import"./chevron-right-small.component-CXxtwsmv.js";import"./chevron-left.component-BWJT3YKG.js";import"./chevron-right.component-oayS4KNZ.js";import"./chevron-top.component-BwDztggg.js";import"./circle-check.component-CByT0FkU.js";import"./triangle-exclamation.component-DBoTeYrv.js";import"./circles-three.component-CA26dlm0.js";import"./cloudy-sun.component-Di_H-kSG.js";import"./credit-card.component-B3Px5LU6.js";import{I as ke}from"./cross-small.component-iid_FxYQ.js";import{I as $e}from"./dot-grid-one-horizontal-D1yj7kxZ.js";import"./folder.component-CGCyy3f5.js";import{I as Se}from"./magnifying-glass.component-0WiSJlOs.js";import{I as Ce}from"./minus-small.component-BGQNhhVF.js";import"./people-profile.component-CYXEl5_a.js";import"./push.component-D3Sw0GJ2.js";import"./rocket.component-DKU5yPOd.js";import"./square-grid-circle.component-BwTrfv0y.js";import{G as Ee}from"./img.component-ac13Gzdt.js";import{G as De}from"./input.component-MiVBCOVj.js";import{G as Ae}from"./link.component-COnWNtSP.js";import"./mask.component-BocioNA1.js";import"./menu-button.component-Bk8qFjWx.js";import{G as Ie}from"./pagination-C8Oystrt.js";import"./radio-group.component-iRnqfzfr.js";import"./rich-text.component-CvRcg_KK.js";import"./segmented-control-BA1Dc95W.js";import"./sensitive-number.component-BQVJ0z2E.js";import"./sensitive-date.component-DPqgtj6W.js";import"./sensitive-account.component-D9Zw7tAh.js";import"./select.component-CcrAgI_B.js";import"./spinner.component-C2F9MsrG.js";import{G as Te}from"./text-BmZzRDhG.js";import"./textarea.component-7SukMNVf.js";import"./video.component-DkKt2gQM.js";import"./card-pattern-01.component-Bngzx6xE.js";import{c as Ge}from"./rbcb-toggle.template-Diol-Wd2.js";const ze=B`
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
`,M=new Set;function Le(){Jt.instance.injectGlobalStyles("dialog-scroll-lock",B`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Me(t){if(M.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=je()+Pe();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function J(t){M.delete(t),M.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function je(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Pe(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var Ne=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,ot=t=>{throw TypeError(t)},_=(t,e,s,i)=>{for(var o=i>1?void 0:i?Re(e,s):e,c=t.length-1,g;c>=0;c--)(g=t[c])&&(o=(i?g(e,s,o):g(o))||o);return i&&o&&Ne(e,s,o),o},O=(t,e,s)=>e.has(t)||ot("Cannot "+s),u=(t,e,s)=>(O(t,e,"read from private field"),s?s.call(t):e.get(t)),b=(t,e,s)=>e.has(t)?ot("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),E=(t,e,s,i)=>(O(t,e,"write to private field"),e.set(t,s),s),We=(t,e,s)=>(O(t,e,"access private method"),s),$,D,j,I,P,T,N,lt,V,A;Le();let y=class extends Kt(Zt(te(Z))){constructor(){super(...arguments),b(this,N),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,b(this,$),b(this,D,!1),b(this,j,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!u(this,I).call(this,s))return;this.close(s);return}this.close(s)}),b(this,I,t=>u(this,T).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),b(this,P,t=>u(this,T).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),b(this,T,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),b(this,V,t=>{this.show("slotted-trigger")}),b(this,A,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect(),c=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,g="click-outside";!c&&!u(this,D)&&u(this,I).call(this,g)&&this.close(g)}E(this,D,!1)})}show(t){this.open=!0,t&&u(this,P).call(this,t)}close(t){E(this,$,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),J(this)}render(){return l`<slot
        name="trigger"
        @slotchange=${We(this,N,lt)}
      ></slot>
      ${v(this.open,()=>l`<dialog
            closedby="closerequest"
            @close=${u(this,j)}
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
                  overflow=${F(this.scrollable)?"auto":ee}
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
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(E(this,$,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),Me(this),this.removeEventListener("click",u(this,A)),requestAnimationFrame(()=>this.addEventListener("click",u(this,A))),se&&((s=this._elDialog)==null||s.focus())})):(E(this,$,u(this,$)||"prop-change"),(t=this._elDialog)==null||t.close(u(this,$)),J(this),document.removeEventListener("click",u(this,A)),this.requestUpdate("open"))}};$=new WeakMap;D=new WeakMap;j=new WeakMap;I=new WeakMap;P=new WeakMap;T=new WeakMap;N=new WeakSet;lt=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",u(this,V)),t==null||t.setAttribute("aria-haspopup","dialog")}};V=new WeakMap;A=new WeakMap;y.styles=[ze];y.styleExpressionBaseSelector="dialog";_([h({type:Boolean,reflect:!0})],y.prototype,"open",2);_([h()],y.prototype,"heading",2);_([h()],y.prototype,"variant",2);_([h()],y.prototype,"placement",2);_([h({type:Boolean})],y.prototype,"scrollable",2);_([tt("dialog")],y.prototype,"_elDialog",2);_([tt('slot[name="trigger"]')],y.prototype,"_elTriggerSlot",2);_([G("open")],y.prototype,"_handleOpenChange",1);y=_([et("gds-dialog",{dependsOn:[st,it,ae,rt,me]}),at()],y);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt="important",Be=" !"+nt,dt=ie(class extends re{constructor(t){var e;if(super(t),t.type!==oe.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const c=typeof o=="string"&&o.endsWith(Be);i.includes("-")||c?s.setProperty(i,c?o.slice(0,-11):o,c?nt:""):s[i]=o}}return le}}),Oe=B`
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
`,Ve=[ne,de,Oe],He=[st,it,xe,Ee,ue,ye,ge,De,Ie,Te,fe,Ae,rt,be,ke,Ce,Se,ve,_e,we,$e],qe={compact:{button:"small",input:"small",dropdown:"small",badge:"small"},comfortable:{button:"small",input:"small",dropdown:"small",badge:"small"},spacious:{button:"medium",input:"large",dropdown:"medium",badge:"default"}},ct=t=>typeof t=="object"&&t!==null&&Array.isArray(t.slots),Qe={toString(){return String(this.value??"")},valueOf(){return this.value},[Symbol.toPrimitive](t){return t==="number"?Number(this.value):String(this.value??"")}};function ua(t,e=["value"],s){if(ct(t))return t;let i=["value"],o;return Array.isArray(e)?i=e:(typeof e=="string"||typeof e=="number")&&(o=e),Array.isArray(s)?i=s:(typeof s=="string"||typeof s=="number")&&(o=s),Object.assign(Object.create(Qe),{value:t,slots:i,...typeof o<"u"?{key:o}:{}})}var Ue=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,ht=t=>{throw TypeError(t)},d=(t,e,s,i)=>{for(var o=i>1?void 0:i?Ye(e,s):e,c=t.length-1,g;c>=0;c--)(g=t[c])&&(o=(i?g(e,s,o):g(o))||o);return i&&o&&Ue(e,s,o),o},H=(t,e,s)=>e.has(t)||ht("Cannot "+s),m=(t,e,s)=>(H(t,e,"read from private field"),s?s.call(t):e.get(t)),L=(t,e,s)=>e.has(t)?ht("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),K=(t,e,s,i)=>(H(t,e,"write to private field"),e.set(t,s),s),r=(t,e,s)=>(H(t,e,"access private method"),s),S,q,a,R,pt,z,gt,W,ut,k,yt,ft,mt,bt,vt,_t,wt,xt,kt,$t,St,Ct,Et,Dt,At,It,Tt,Gt,Q,zt,Lt,Mt,jt,Pt,Nt,Rt,Wt,Bt,U,Ot,Vt,Ht,qt,Qt,Ut,Y,X,C,Yt,Xt,Ft;let n=class extends Z{constructor(){super(...arguments),L(this,a),L(this,S,{}),L(this,q,300*1e3),this.headlineTag="h2",this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="secondary",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){K(this,S,{}),r(this,a,k).call(this)}_onColumnsChange(){K(this,S,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(t=>t.visible!==!1).map(t=>t.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{r(this,a,Yt).call(this)})}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return l`
      <div class="${w(t)}">
        ${[r(this,a,Wt).call(this),r(this,a,xt).call(this),v(this._error,()=>r(this,a,Pt).call(this),()=>v(this._rowsState.length===0&&!this._loading,()=>r(this,a,Nt).call(this),()=>r(this,a,jt).call(this))),r(this,a,Rt).call(this)]}
      </div>
    `}clearSelection(){r(this,a,X).call(this),r(this,a,C).call(this)}selectAll(){r(this,a,Y).call(this),r(this,a,C).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this._rowsState.length);this._selected=new Set(e),r(this,a,C).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}};S=new WeakMap;q=new WeakMap;a=new WeakSet;R=function(){return qe[this.density]};pt=function(){return this._selected.size>0};z=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};gt=function(){return m(this,a,pt)&&!m(this,a,z)};W=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};ut=function(t){return Date.now()-t.timestamp<m(this,q)};k=async function(){if(this.data){if(!this.nocache){const t=r(this,a,W).call(this),e=m(this,S)[t];if(e&&r(this,a,ut).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._loaded=!1;return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=r(this,a,W).call(this);m(this,S)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:t,bubbles:!0})}catch(t){this._error=t,this.dispatchCustomEvent("gds-table-data-error",{detail:t,bubbles:!0})}finally{this._loading=!1}}};yt=function(t,e,s){const i=[];(typeof s=="string"||typeof s=="number")&&i.push(s);const o=t==null?void 0:t.id;return(typeof o=="string"||typeof o=="number")&&!i.includes(o)&&i.push(o),i.length===0&&i.push(e+1),i};ft=function(t){if(typeof t=="string"){const e=t.trim();return e.length>0?e:null}return typeof t=="number"&&Number.isFinite(t)?String(t):null};mt=function(t,e,s){return`${t}:${e}:${s}`};bt=function(t,e,s,i){const o=[],c=g=>{e.forEach(f=>{o.push(l`<slot
            name="${r(this,a,mt).call(this,t,f,g)}"
          ></slot>`)})};return Array.isArray(s)&&s.length>0?(s.forEach(g=>{if(g==="value"){i!==void 0&&o.push(i);return}const f=r(this,a,ft).call(this,g);f&&c(f)}),o.length>0?o:null):(i!==void 0&&o.push(i),o.length>0?o:null)};vt=function(t,e,s){const i=e.value?e.value(t):t[e.key],o=ct(i)?r(this,a,bt).call(this,e.key,r(this,a,yt).call(this,t,s,i.key),i.slots,i.value):i,c=this._isMobile&&this.responsive,g=c?e.label:null;return l`
      <div class="cell-content" aria-label=${g}>
        ${c?l`
              <span class="column-label" aria-hidden="true">
                ${e.label}:
              </span>
            `:null}
        ${e.justify?l`<span>${o}</span>`:o}
      </div>
    `};_t=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;return e?s==="asc"?l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:l`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};wt=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};xt=function(){return this.plain||!r(this,a,wt).call(this)?null:l`
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
                @change=${r(this,a,qt)}
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
    `};kt=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;let i=t.label;if(t.sortable)if(e){const g=s==="asc"?p("ascending"):p("descending");i=`${t.label}, ${p("sorted")} ${g}`}else i=`${t.label}, ${p("sortable")}`;const o=w({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify,wrap:!!t.width}),c=dt({"--cell-width":t.width});return l`
      <th
        class=${o}
        style=${c}
        aria-sort="${e?s==="asc"?"ascending":"descending":"none"}"
        @click=${t.sortable?()=>r(this,a,Ot).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${i}">
            ${t.label}
          </span>
          ${v(t.sortable,()=>l`
              <span class="sort-icon">${r(this,a,_t).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};$t=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||p("Actions"),e=w({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return l`
      <th class="${e}">
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};St=function(){return this.selectable?l`
      <th class="checkbox-cell">
        ${r(this,a,Q).call(this,{checked:m(this,a,z),indeterminate:m(this,a,gt),ariaLabel:p("Select all rows"),onToggle:()=>r(this,a,Qt).call(this,{})})}
      </th>
    `:null};Ct=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>r(this,a,kt).call(this,t))};Et=function(){return l`
      <thead>
        <tr>
          ${[r(this,a,St).call(this),r(this,a,Ct).call(this),r(this,a,$t).call(this)]}
        </tr>
      </thead>
    `};Dt=function(t,e,s){const i=w({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),o=dt({"--cell-width":e.width});return l`
      <td style=${o} class=${i}>
        ${r(this,a,vt).call(this,t,e,s)}
      </td>
    `};At=function(t){if(!this.selectable)return null;const e=`${p("Select row")} ${t+1}`;return l`
      <td class="checkbox-cell">
        ${r(this,a,Q).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>r(this,a,Ut).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
      </td>
    `};It=function(t,e){return this.columns.filter(s=>this._view.visibleColumns.has(s.key)).map(s=>r(this,a,Dt).call(this,t,s,e))};Tt=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return l`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=w({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return l`
      <td class="${s}">
        <div class="cell-content">ACTIONS</div>
      </td>
    `};Gt=function(t,e){return l`
      <tr
        class=${w({selected:this._selected.has(e),loading:this._loading})}
      >
        ${[r(this,a,At).call(this,e),r(this,a,It).call(this,t,e),r(this,a,Tt).call(this,t,e)]}
      </tr>
    `};Q=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:i,onToggle:o}){const c=f=>{f.stopPropagation(),!s&&o()};return l`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${i}
        @click=${c}
        @keydown=${f=>{(f.key===" "||f.key==="Enter")&&(f.preventDefault(),c(f))}}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${t}
          .indeterminate=${e}
          ?disabled=${s}
          aria-hidden="true"
          @change=${c}
        />
        ${Ge({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};zt=function(t){const s=this._isMobile&&this.responsive?l`<span class="skeleton skeleton-text"></span>`:null;return l`
      <div class="cell-content">
        ${s}
        <span class="skeleton skeleton-text"></span>
      </div>
    `};Lt=function(t){return l`
      <tr class="skeleton-row">
        ${v(this.selectable,()=>l`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>l`<td>${r(this,a,zt).call(this,e)}</td>`)}
        ${v(this.actions,()=>l`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};Mt=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,s)=>r(this,a,Lt).call(this,s));return l`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return l`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>r(this,a,Gt).call(this,t,e))}
      </tbody>
    `};jt=function(){const t=w({responsive:this.responsive,data:!0,[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),e=`${this.summary?this.summary+", ":""}${p("Data table with")} ${this._total} ${p("rows")}`;return l`
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
            ${r(this,a,Et).call(this)} ${r(this,a,Mt).call(this)}
          </table>
        </div>
      </gds-card>
    `};Pt=function(){return l`
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
    `};Nt=function(){return this._view.searchQuery.length>0?l`
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
    `};Rt=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),s=`${t}–${e} ${p("of")} ${this._total}`;return l`
      <gds-pagination
        .page=${this._view.page}
        .rows=${this._view.rows}
        .options=${this.options}
        .total=${this._total}
        .density=${this.density}
        .label=${s}
        @gds-page-change=${r(this,a,Vt)}
        @gds-rows-change=${r(this,a,Ht)}
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
      `};Bt=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await r(this,a,k).call(this)};U=async function(){this._view={...this._view,searchQuery:"",page:1},await r(this,a,k).call(this)};Ot=async function(t){const e=this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc";this._view={...this._view,sortColumn:t,sortDirection:e,page:1},this.dispatchCustomEvent("gds-sort-change",{detail:{sortColumn:t,sortDirection:e},bubbles:!0}),await r(this,a,k).call(this)};Vt=async function(t){this._view={...this._view,page:t.detail.page},this.dispatchCustomEvent("gds-page-change",{detail:t.detail,bubbles:!0}),await r(this,a,k).call(this)};Ht=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},this.dispatchCustomEvent("gds-rows-change",{detail:t.detail,bubbles:!0}),await r(this,a,k).call(this)};qt=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};Qt=function(t){m(this,a,z)?r(this,a,X).call(this):r(this,a,Y).call(this),r(this,a,C).call(this)};Ut=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),r(this,a,C).call(this),this.requestUpdate()};Y=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};X=function(){this._selected.clear(),this.requestUpdate()};C=function(){this.dispatchCustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0})};Yt=function(){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".data");if(!t)return;const e=()=>{r(this,a,Xt).call(this,t),r(this,a,Ft).call(this,t)};t.addEventListener("scroll",e),e()};Xt=function(t){const{scrollTop:e}=t;e>0?t.classList.add("scrolled"):t.classList.remove("scrolled")};Ft=function(t){const{scrollLeft:e,scrollWidth:s,clientWidth:i}=t,o=s-i;e<=0?(t.classList.add("scrolled-x-start"),t.classList.remove("scrolled-x-middle","scrolled-x-end")):e>=o-1?(t.classList.add("scrolled-x-end"),t.classList.remove("scrolled-x-start","scrolled-x-middle")):(t.classList.add("scrolled-x-middle"),t.classList.remove("scrolled-x-start","scrolled-x-end"))};n.styles=Ve;d([h()],n.prototype,"headline",2);d([h({attribute:"headline-tag",type:String,reflect:!0})],n.prototype,"headlineTag",2);d([h()],n.prototype,"summary",2);d([h({type:Array})],n.prototype,"options",2);d([h({type:Number})],n.prototype,"page",2);d([h({type:Number})],n.prototype,"rows",2);d([h({type:Array})],n.prototype,"columns",2);d([h()],n.prototype,"data",2);d([h({reflect:!1})],n.prototype,"density",2);d([h({type:Boolean,reflect:!1})],n.prototype,"selectable",2);d([h({type:Boolean,reflect:!1})],n.prototype,"responsive",2);d([h({type:Boolean,reflect:!1})],n.prototype,"plain",2);d([h({type:Boolean,reflect:!1})],n.prototype,"searchable",2);d([h({type:Boolean,reflect:!1})],n.prototype,"settings",2);d([h({type:Boolean,reflect:!1})],n.prototype,"striped",2);d([h()],n.prototype,"actions",2);d([h({type:Boolean,reflect:!1})],n.prototype,"nocache",2);d([h()],n.prototype,"dataLoadKey",2);d([ce({...he,property:"--_table-height",selector:".data"})],n.prototype,"height",2);d([h()],n.prototype,"variant",2);d([x()],n.prototype,"_isMobile",2);d([pe("(max-width: 768px)")],n.prototype,"_handleMobile",1);d([x()],n.prototype,"_view",2);d([x()],n.prototype,"_loaded",2);d([x()],n.prototype,"_loading",2);d([x()],n.prototype,"_rowsState",2);d([x()],n.prototype,"_total",2);d([x()],n.prototype,"_selected",2);d([x()],n.prototype,"_error",2);d([G("dataLoadKey"),G("data")],n.prototype,"_onDataChange",1);d([G("columns")],n.prototype,"_onColumnsChange",1);n=d([at(),et("gds-table",{dependsOn:He})],n);n.define();export{y as G,ua as S};
