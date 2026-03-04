import{i as F,aa as ae,a0 as ie,a3 as re,as as le,J as dt,b as $,a as C,o as N,O as p,E as oe,h as o,at as ne,n as h,d as ct,a7 as G,g as ht,P as pt,G as de,$ as ce,X as he,Z as pe,ag as ge,t as ue,ak as ye,s as fe,ah as ve,I as E}from"./iframe-BZiKkoLE.js";import{l as gt}from"./localized-decorator-D-weAOVX.js";import{w as be}from"./popover.component-C4jM8zoB.js";import{a as me}from"./dropdown.component-C0Ra-3So.js";import"./menu-heading.component-OL7m9cye.js";import{a as we,G as _e}from"./context-menu.component-VFUozCPX.js";import"./alert.component-DUZOYzkN.js";import{G as xe}from"./badge.component-DExVo6Lv.js";import"./blur.component-3GCiH-gq.js";import"./breadcrumb.component-BB__8Vu1.js";import"./calendar.component-Bc6dDeXX.js";import{G as ut}from"./card.component-oFyQ3psH.js";import"./card-linked.component-DIMoDyHx.js";import"./checkbox-group.component-CRupiBLP.js";import"./coachmark.component-BZEjyEmM.js";import"./datepicker.component-C4bmJNcJ.js";import"./details.component-BSlgT-cg.js";import{G as yt}from"./flex.component-DkRYPV9U.js";import{I as ke,a as $e,b as Se,c as Ce,d as Ee}from"./zoom-out.component-D8N_eQr9.js";import{G as De}from"./divider.component-fVhIzMad.js";import"./signal.component-CFw4Beb9.js";import"./filter-chips.component-DqAndgjL.js";import"./summary.component-BhPbk0vs.js";import"./grouped-list.component-yRVhMHm5.js";import"./icon.component-DS4xUZ2N.js";import"./arrow-down.component-lnjLykKs.js";import"./arrow-left.component-CP2KzjR5.js";import"./arrow-right.component-3w5qOkvU.js";import"./arrow-rotate-counter-clockwise.component-BJOnVgTF.js";import"./arrow-up.component-BONKMUNV.js";import"./sun.component-BkDd5d8f.js";import"./star.component-Lt7wZgi2.js";import"./bubbles.component-Tll2slbO.js";import"./calender-add.component-DnBzWGC0.js";import"./chain-link-CC-oPwst.js";import"./checkmark.component-sJHOdhHa.js";import"./chevron-bottom.component-BnSqBu79.js";import"./chevron-right-small.component-S8Ky6j8v.js";import"./chevron-left.component-CXRpWKR_.js";import"./chevron-right.component-CA2SAxNs.js";import"./chevron-top.component-D8bLz2la.js";import"./circle-check.component-8GGiTKgk.js";import"./triangle-exclamation.component-qw8iyXmo.js";import"./circles-three.component-CXxhjJPa.js";import"./cloudy-sun.component-CPby6Zah.js";import"./credit-card.component-CvyCmFob.js";import{I as Ae}from"./cross-small.component-llXbPVVc.js";import{I as Ge}from"./dot-grid-one-horizontal-C8L8yKcq.js";import"./folder.component-BOv6HKHl.js";import{I as Te}from"./magnifying-glass.component-Cfw5o4PE.js";import{I as Le}from"./minus-small.component-6nF4UDrI.js";import"./people-profile.component-oWVGv_AW.js";import"./push.component-COUiKTP6.js";import"./rocket.component-idfx9MBU.js";import"./square-grid-circle.component-CIYHJDJG.js";import{G as Me}from"./img.component-CGs0fBVd.js";import{G as Ie}from"./input.component-AdHG_U_j.js";import{G as ze}from"./link-Cz8YrCra.js";import"./mask.component-D66k3cuj.js";import"./menu-button.component-BbbHhqbs.js";import{G as Pe}from"./pagination-CfTA8DPi.js";import"./radio-group.component-BobPh7I_.js";import"./rich-text.component-BEu9gzTK.js";import"./segmented-control-sUYo_ZCb.js";import"./sensitive-number.component-Bs0v7IbR.js";import"./sensitive-date.component-RqmkEJSo.js";import"./sensitive-account.component-BbQO3FY-.js";import"./select.component-Cm3kuMTy.js";import"./spinner.component-xL8XrwaA.js";import{G as je}from"./text-BUiW9ujq.js";import"./textarea.component-CgmfoWOk.js";import"./video.component-Ddfm1Y_7.js";import"./card-pattern-01.component-BPUI1VwW.js";import{c as We}from"./rbcb-toggle.template-B90sg2IM.js";const Re=F`
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
`,B=new Set;function Ne(){ae.instance.injectGlobalStyles("dialog-scroll-lock",F`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Be(t){if(B.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=Oe()+Qe();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function ot(t){B.delete(t),B.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Oe(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Qe(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var He=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,ft=t=>{throw TypeError(t)},w=(t,e,s,r)=>{for(var l=r>1?void 0:r?qe(e,s):e,g=t.length-1,u;g>=0;g--)(u=t[g])&&(l=(r?u(e,s,l):u(l))||l);return r&&l&&He(e,s,l),l},X=(t,e,s)=>e.has(t)||ft("Cannot "+s),c=(t,e,s)=>(X(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>e.has(t)?ft("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),v=(t,e,s,r)=>(X(t,e,"write to private field"),e.set(t,s),s),Ue=(t,e,s)=>(X(t,e,"access private method"),s),x,T,k,S,O,Q,I,H,L,z,P,q,vt,K,M;Ne();let f=class extends ie(re(le(dt))){constructor(){super(...arguments),y(this,q),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,this.closedby="closerequest",y(this,x),y(this,T,!1),y(this,k,!1),y(this,S,t=>{c(this,L).call(this,t)&&(v(this,k,!0),this.close(t),v(this,k,!1))}),y(this,O,t=>{c(this,z).call(this,t)&&(v(this,k,!0),this.show(t),v(this,k,!1))}),y(this,Q,t=>{t.preventDefault(),c(this,S).call(this,"native-close")}),y(this,I,t=>{t.key==="Escape"&&(t.preventDefault(),c(this,S).call(this,"native-close"))}),y(this,H,t=>{this.open?(v(this,k,!0),this.close("native-close"),v(this,k,!1),c(this,L).call(this,"native-close")):!c(this,k)&&c(this,x)&&c(this,x)!=="prop-change"&&c(this,L).call(this,c(this,x))}),y(this,L,t=>c(this,P).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),y(this,z,t=>c(this,P).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),y(this,P,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),y(this,K,t=>{c(this,O).call(this,"slotted-trigger")}),y(this,M,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const l=s.getBoundingClientRect();!(l.top<=e.clientY&&e.clientY<=l.top+l.height&&l.left<=e.clientX&&e.clientX<=l.left+l.width)&&!c(this,T)&&c(this,S).call(this,"click-outside")}v(this,T,!1)})}show(t){this.open=!0,t&&c(this,z).call(this,t)}close(t){v(this,x,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),ot(this)}render(){return o`<slot
        name="trigger"
        @slotchange=${Ue(this,q,vt)}
      ></slot>
      ${$(this.open,()=>o`<dialog
            closedby=${this.closedby}
            @cancel=${c(this,Q)}
            @close=${c(this,H)}
            class=${C({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${N(this.heading)}
          >
            <gds-card
              class="card"
              padding="xl"
              variant="secondary"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
              border-width="0"
              @mousedown=${()=>v(this,T,!0)}
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="tertiary"
                    size="small"
                    label=${p("Close")}
                    @click=${()=>c(this,S).call(this,"btn-close")}
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
                  overflow=${N(this.scrollable)?"auto":oe}
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
                      @click=${()=>c(this,S).call(this,"btn-cancel")}
                      rank="secondary"
                      >${p("Cancel")}</gds-button
                    >
                    <gds-button
                      value="ok"
                      @click=${()=>c(this,S).call(this,"btn-ok")}
                    >
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t,e;this.open?(v(this,x,void 0),this.updateComplete.then(()=>{var s,r,l;(s=this._elDialog)==null||s.showModal(),Be(this),this.removeEventListener("click",c(this,M)),requestAnimationFrame(()=>this.addEventListener("click",c(this,M))),this.closedby==="none"&&((r=this._elDialog)==null||r.addEventListener("keydown",c(this,I))),ne&&((l=this._elDialog)==null||l.focus())})):(v(this,x,c(this,x)||"prop-change"),(t=this._elDialog)==null||t.removeEventListener("keydown",c(this,I)),(e=this._elDialog)==null||e.close(),ot(this),document.removeEventListener("click",c(this,M)),this.requestUpdate("open"))}};x=new WeakMap;T=new WeakMap;k=new WeakMap;S=new WeakMap;O=new WeakMap;Q=new WeakMap;I=new WeakMap;H=new WeakMap;L=new WeakMap;z=new WeakMap;P=new WeakMap;q=new WeakSet;vt=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",c(this,K)),t==null||t.setAttribute("aria-haspopup","dialog")}};K=new WeakMap;M=new WeakMap;f.styles=[Re];f.styleExpressionBaseSelector="dialog";w([h({type:Boolean,reflect:!0})],f.prototype,"open",2);w([h()],f.prototype,"heading",2);w([h()],f.prototype,"variant",2);w([h()],f.prototype,"placement",2);w([h({type:Boolean})],f.prototype,"scrollable",2);w([h({reflect:!0})],f.prototype,"closedby",2);w([ct("dialog")],f.prototype,"_elDialog",2);w([ct('slot[name="trigger"]')],f.prototype,"_elTriggerSlot",2);w([G("open")],f.prototype,"_handleOpenChange",1);f=w([ht("gds-dialog",{dependsOn:[pt,ut,de,yt,ke]}),gt()],f);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt="important",Ve=" !"+bt,j=ce(class extends he{constructor(t){var e;if(super(t),t.type!==pe.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const r=t[s];return r==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?s.removeProperty(r):s[r]=null);for(const r in e){const l=e[r];if(l!=null){this.ft.add(r);const g=typeof l=="string"&&l.endsWith(Ve);r.includes("-")||g?s.setProperty(r,g?l.slice(0,-11):l,g?bt:""):s[r]=l}}return ge}}),Ye=F`
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
`,Fe=[ue,ye,Ye],Xe=[pt,ut,De,Me,we,_e,me,Ie,Pe,je,xe,ze,yt,$e,Ae,Le,Te,Se,Ce,Ee,Ge],Ke={compact:{input:"small",dropdown:"small"},comfortable:{input:"small",dropdown:"small"},spacious:{input:"large",dropdown:"medium"}},mt=t=>typeof t=="object"&&t!==null&&Array.isArray(t.slots),Je={toString(){return String(this.value??"")},valueOf(){return this.value},[Symbol.toPrimitive](t){return t==="number"?Number(this.value):String(this.value??"")}};function _a(t,e=["value"],s){if(mt(t))return t;let r=["value"],l;return Array.isArray(e)?r=e:(typeof e=="string"||typeof e=="number")&&(l=e),Array.isArray(s)&&(r=s),Object.assign(Object.create(Je),{value:t,slots:r,...typeof l<"u"?{key:l}:{}})}var Ze=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,wt=t=>{throw TypeError(t)},d=(t,e,s,r)=>{for(var l=r>1?void 0:r?ts(e,s):e,g=t.length-1,u;g>=0;g--)(u=t[g])&&(l=(r?u(e,s,l):u(l))||l);return r&&l&&Ze(e,s,l),l},J=(t,e,s)=>e.has(t)||wt("Cannot "+s),m=(t,e,s)=>(J(t,e,"read from private field"),s?s.call(t):e.get(t)),R=(t,e,s)=>e.has(t)?wt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),nt=(t,e,s,r)=>(J(t,e,"write to private field"),e.set(t,s),s),i=(t,e,s)=>(J(t,e,"access private method"),s),D,Z,a,U,_t,W,xt,V,kt,b,tt,Y,$t,et,St,Ct,Et,Dt,At,Gt,Tt,Lt,Mt,It,zt,Pt,jt,Wt,st,Rt,Nt,Bt,Ot,Qt,Ht,qt,Ut,Vt,at,Yt,Ft,Xt,Kt,Jt,Zt,it,rt,A,te,ee,se;let n=class extends dt{constructor(){super(...arguments),R(this,a),R(this,D,{}),R(this,Z,300*1e3),this.headlineTag="h2",this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.disableSelectAll=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="secondary",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){nt(this,D,{}),i(this,a,b).call(this)}_onPageChange(){this._view={...this._view,page:Number(this.page??1)},i(this,a,b).call(this)}_onRowsChange(){this._view={...this._view,rows:Number(this.rows??10),page:1},i(this,a,b).call(this)}_onColumnsChange(){nt(this,D,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(t=>t.visible!==!1).map(t=>t.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{i(this,a,te).call(this)})}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return o`
      <div class="${C(t)}">
        ${[i(this,a,Ut).call(this),i(this,a,Dt).call(this),$(this._error,()=>i(this,a,Qt).call(this),()=>$(this._rowsState.length===0&&!this._loading,()=>i(this,a,Ht).call(this),()=>i(this,a,Ot).call(this))),i(this,a,qt).call(this)]}
      </div>
    `}clearSelection(){i(this,a,rt).call(this),i(this,a,A).call(this)}selectAll(){i(this,a,it).call(this),i(this,a,A).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this._rowsState.length);this._selected=new Set(e),i(this,a,A).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}};D=new WeakMap;Z=new WeakMap;a=new WeakSet;U=function(){return Ke[this.density]};_t=function(){return this._selected.size>0};W=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};xt=function(){return m(this,a,_t)&&!m(this,a,W)};V=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};kt=function(t){return Date.now()-t.timestamp<m(this,Z)};b=async function(){if(this.data){if(!this.nocache){const t=i(this,a,V).call(this),e=m(this,D)[t];if(e&&i(this,a,kt).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{rows:e.rows,total:e.total,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0});return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=i(this,a,V).call(this);m(this,D)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{...t,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0})}catch(t){this._error=t,this.dispatchCustomEvent("gds-table-data-error",{detail:t,bubbles:!0})}finally{this._loading=!1}}};tt=function(t,e,s){if(typeof s=="string"||typeof s=="number")return s;const r=t==null?void 0:t.id;return typeof r=="string"||typeof r=="number"?r:e+1};Y=function(t){return o`<span class="cell-wrapped-content">${t}</span>`};$t=function(t){return o`<span class="column-label" aria-hidden="true">
      ${t.label}:
    </span>`};et=function(t,e,s){const r=`${t}:${e}:${s}`;return o`<slot name="${r}"></slot>`};St=function(t,e,s){const r=e.value?e.value(t):t[e.key],l=this._isMobile&&this.responsive,g=!!e.justify;let u;if(mt(r)){const lt=i(this,a,tt).call(this,t,s,r.key);u=r.slots.map(_=>_==="value"?r.value===void 0?null:g?i(this,a,Y).call(this,r.value):r.value:i(this,a,et).call(this,e.key,lt,_))}else u=g?i(this,a,Y).call(this,r):r;return o`
      <div
        class="cell-content"
        aria-label=${N(l?e.label:void 0)}
      >
        ${l?i(this,a,$t).call(this,e):null} ${u}
      </div>
    `};Ct=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;return e?s==="asc"?o`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:o`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:o`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};Et=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};Dt=function(){return this.plain||!i(this,a,Et).call(this)?null:o`
      <div class="header">
        <div class="lead">
          ${$(this.searchable,()=>o`
              <gds-input
                type="text"
                size="${m(this,a,U).input}"
                plain
                clearable
                label="${this.searchLabel||p("Search table")}"
                .value=${this._view.searchQuery}
                @input=${i(this,a,Vt)}
                @gds-input-cleared=${i(this,a,at)}
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
          ${$(this.settings,()=>o`
              <gds-dropdown
                multiple
                plain
                size="${m(this,a,U).dropdown}"
                label="${p("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${i(this,a,Kt)}
              >
                <span slot="trigger">${p("Columns")}</span>
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
    `};At=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;let r=t.label;if(t.sortable)if(e){const u=s==="asc"?p("ascending"):p("descending");r=`${t.label}, ${p("sorted")} ${u}`}else r=`${t.label}, ${p("sortable")}`;const l=C({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify,wrap:!!t.width}),g=j({"--cell-width":t.width});return o`
      <th
        class=${l}
        style=${g}
        aria-sort="${e?s==="asc"?"ascending":"descending":"none"}"
        @click=${t.sortable?()=>i(this,a,Yt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${r}">
            ${t.label}
          </span>
          ${$(t.sortable,()=>o`
              <span class="sort-icon">${i(this,a,Ct).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};Gt=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||p("Actions"),e=C({actions:!0,wrap:!!this.actions.width,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify}),s=j({"--cell-width":this.actions.width});return o`
      <th class="${e}" style=${s}>
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};Tt=function(){return this.selectable?o`
      <th class="checkbox-cell">
        ${i(this,a,st).call(this,{checked:m(this,a,W),indeterminate:m(this,a,xt),ariaLabel:p("Select all rows"),onToggle:()=>i(this,a,Jt).call(this,{}),skip:this.disableSelectAll})}
      </th>
    `:null};Lt=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>i(this,a,At).call(this,t))};Mt=function(){return o`
      <thead>
        <tr>
          ${[i(this,a,Tt).call(this),i(this,a,Lt).call(this),i(this,a,Gt).call(this)]}
        </tr>
      </thead>
    `};It=function(t,e,s){const r=C({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),l=j({"--cell-width":e.width});return o`
      <td style=${l} class=${r}>
        ${i(this,a,St).call(this,t,e,s)}
      </td>
    `};zt=function(t){if(!this.selectable)return null;const e=`${p("Select row")} ${t+1}`;return o`
      <td class="checkbox-cell">
        ${i(this,a,st).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>i(this,a,Zt).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
      </td>
    `};Pt=function(t,e){return this.columns.filter(s=>this._view.visibleColumns.has(s.key)).map(s=>i(this,a,It).call(this,t,s,e))};jt=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return o`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=i(this,a,tt).call(this,t,e),r=C({"actions-cell":!0,wrap:!!this.actions.width,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify}),l=j({"--cell-width":this.actions.width});return o`
      <td class="${r}" style=${l}>
        <div class="cell-content">
          ${i(this,a,et).call(this,"actions",s,"main")}
        </div>
      </td>
    `};Wt=function(t,e){return o`
      <tr
        class=${C({selected:this._selected.has(e),loading:this._loading})}
      >
        ${[i(this,a,zt).call(this,e),i(this,a,Pt).call(this,t,e),i(this,a,jt).call(this,t,e)]}
      </tr>
    `};st=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:r,onToggle:l,skip:g=!1}){if(g)return null;const u=_=>{_.stopPropagation(),!s&&l()};return o`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${r}
        @click=${u}
        @keydown=${_=>{(_.key===" "||_.key==="Enter")&&(_.preventDefault(),u(_))}}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${t}
          .indeterminate=${e}
          ?disabled=${s}
          aria-hidden="true"
          @change=${u}
        />
        ${We({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};Rt=function(t){const s=this._isMobile&&this.responsive?o`<span class="skeleton skeleton-text"></span>`:null;return o`
      <div class="cell-content">
        ${s}
        <span class="skeleton skeleton-text"></span>
      </div>
    `};Nt=function(t){return o`
      <tr class="skeleton-row">
        ${$(this.selectable,()=>o`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>o`<td>${i(this,a,Rt).call(this,e)}</td>`)}
        ${$(this.actions,()=>o`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};Bt=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,s)=>i(this,a,Nt).call(this,s));return o`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return o`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>i(this,a,Wt).call(this,t,e))}
      </tbody>
    `};Ot=function(){const t=C({responsive:this.responsive,data:!0,[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),e=`${this.summary?this.summary+", ":""}${p("Data table with")} ${this._total} ${p("rows")}`;return o`
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
            ${i(this,a,Mt).call(this)} ${i(this,a,Bt).call(this)}
          </table>
        </div>
      </gds-card>
    `};Qt=function(){return o`
      <gds-card variant="secondary" border-radius="m">
        <slot name="error">
          <gds-text tag="p">${p("Error loading data")}</gds-text>
          <gds-button
            size="small"
            label="${p("Retry loading data")}"
            @click=${()=>i(this,a,b).call(this)}
          >
            ${p("Retry")}
          </gds-button>
        </slot>
      </gds-card>
    `};Ht=function(){return this._view.searchQuery.length>0?o`
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
                @click=${i(this,a,at)}
              >
                ${p("Clear search")}
              </gds-button>
            </gds-flex>
          </slot>
        </gds-card>
      `:o`
      <gds-card variant="secondary" border-radius="m">
        <slot name="empty">
          <gds-text tag="p" font="heading-s">
            ${p("No data available")}
          </gds-text>
        </slot>
      </gds-card>
    `};qt=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),s=`${t}–${e} ${p("of")} ${this._total}`;return o`
      <gds-pagination
        .page=${this._view.page}
        .rows=${this._view.rows}
        .options=${this.options}
        .total=${this._total}
        .density=${this.density}
        .label=${s}
        @gds-page-change=${i(this,a,Ft)}
        @gds-rows-change=${i(this,a,Xt)}
        width="100%"
      >
      </gds-pagination>
    `};Ut=function(){if(this.headline||this.summary)return o`
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
            font=${this.density==="compact"?"body-regular-s":"body-regular-m"}
            text-wrap="pretty"
            max-width="80ch"
          >
            ${this.summary}
          </gds-text>
        </gds-flex>
        ${$(this.searchable||this.settings,()=>o`<gds-divider color="subtle-01"></gds-divider>`,()=>o``)}
      `};Vt=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await i(this,a,b).call(this)};at=async function(){this._view={...this._view,searchQuery:"",page:1},await i(this,a,b).call(this)};Yt=async function(t){const e=this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc";this._view={...this._view,sortColumn:t,sortDirection:e,page:1},this.dispatchCustomEvent("gds-sort-change",{detail:{sortColumn:t,sortDirection:e},bubbles:!0}),await i(this,a,b).call(this)};Ft=async function(t){this._view={...this._view,page:t.detail.page},this.dispatchCustomEvent("gds-page-change",{detail:t.detail,bubbles:!0}),await i(this,a,b).call(this)};Xt=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},this.dispatchCustomEvent("gds-rows-change",{detail:t.detail,bubbles:!0}),await i(this,a,b).call(this)};Kt=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};Jt=function(t){m(this,a,W)?i(this,a,rt).call(this):i(this,a,it).call(this),i(this,a,A).call(this)};Zt=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),i(this,a,A).call(this),this.requestUpdate()};it=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};rt=function(){this._selected.clear(),this.requestUpdate()};A=function(){this.dispatchCustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0})};te=function(){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".data");if(!t)return;const e=()=>{i(this,a,ee).call(this,t),i(this,a,se).call(this,t)};t.addEventListener("scroll",e),e()};ee=function(t){const{scrollTop:e}=t;e>0?t.classList.add("scrolled"):t.classList.remove("scrolled")};se=function(t){const{scrollLeft:e,scrollWidth:s,clientWidth:r}=t,l=s-r;e<=0?(t.classList.add("scrolled-x-start"),t.classList.remove("scrolled-x-middle","scrolled-x-end")):e>=l-1?(t.classList.add("scrolled-x-end"),t.classList.remove("scrolled-x-start","scrolled-x-middle")):(t.classList.add("scrolled-x-middle"),t.classList.remove("scrolled-x-start","scrolled-x-end"))};n.styles=Fe;d([h()],n.prototype,"headline",2);d([h({attribute:"headline-tag",type:String,reflect:!0})],n.prototype,"headlineTag",2);d([h()],n.prototype,"summary",2);d([h({attribute:"search-label",type:String})],n.prototype,"searchLabel",2);d([h({type:Array})],n.prototype,"options",2);d([h({type:Number})],n.prototype,"page",2);d([h({type:Number})],n.prototype,"rows",2);d([h({type:Array})],n.prototype,"columns",2);d([h()],n.prototype,"data",2);d([h({reflect:!1})],n.prototype,"density",2);d([h({type:Boolean,reflect:!1})],n.prototype,"selectable",2);d([h({attribute:"disable-select-all",type:Boolean,reflect:!1})],n.prototype,"disableSelectAll",2);d([h({type:Boolean,reflect:!1})],n.prototype,"responsive",2);d([h({type:Boolean,reflect:!1})],n.prototype,"plain",2);d([h({type:Boolean,reflect:!1})],n.prototype,"searchable",2);d([h({type:Boolean,reflect:!1})],n.prototype,"settings",2);d([h({type:Boolean,reflect:!1})],n.prototype,"striped",2);d([h()],n.prototype,"actions",2);d([h({type:Boolean,reflect:!1})],n.prototype,"nocache",2);d([h()],n.prototype,"dataLoadKey",2);d([fe({...ve,property:"--_table-height",selector:".data"})],n.prototype,"height",2);d([h()],n.prototype,"variant",2);d([E()],n.prototype,"_isMobile",2);d([be("(max-width: 768px)")],n.prototype,"_handleMobile",1);d([E()],n.prototype,"_view",2);d([E()],n.prototype,"_loaded",2);d([E()],n.prototype,"_loading",2);d([E()],n.prototype,"_rowsState",2);d([E()],n.prototype,"_total",2);d([E()],n.prototype,"_selected",2);d([E()],n.prototype,"_error",2);d([G("dataLoadKey"),G("data")],n.prototype,"_onDataChange",1);d([G("page",{waitUntilFirstUpdate:!0})],n.prototype,"_onPageChange",1);d([G("rows",{waitUntilFirstUpdate:!0})],n.prototype,"_onRowsChange",1);d([G("columns")],n.prototype,"_onColumnsChange",1);n=d([gt(),ht("gds-table",{dependsOn:Xe})],n);n.define();export{f as G,_a as S};
