import{i as Y,a9 as ie,Z as re,a2 as oe,ar as le,I as dt,d as m,A as ne,a as v,o as N,N as g,h as l,as as de,n as h,f as ct,a6 as j,g as ht,O as pt,G as ce,Y as he,V as pe,X as ge,af as ue,E as be,aj as ye,$ as fe,ag as ve,H as E}from"./iframe-BhBXWYpV.js";import{l as gt}from"./localized-decorator-a0D3Chmm.js";import{w as me}from"./popover.component-CCk-bb3B.js";import{a as we}from"./dropdown.component-DCaiC0cc.js";import"./menu-heading.component-CQd79GeS.js";import{a as _e,G as xe}from"./context-menu.component-FaQqNrAx.js";import"./alert.component-Cn00HaLv.js";import{G as ke}from"./badge.component-BZo8oUbp.js";import"./blur.component-SXw1uiXv.js";import"./breadcrumb.component-C9j5-Kyx.js";import"./calendar.component-DI040dCc.js";import{G as ut}from"./card.component-BZcJNlkI.js";import"./card-linked.component-DbjMK2Po.js";import"./checkbox-group.component-g6HK0NRC.js";import"./coachmark.component-L3v2UqaV.js";import"./datepicker.component-DXK6N329.js";import"./details.component-CtT-gkIt.js";import{G as bt}from"./flex.component-BoVuiBvi.js";import{I as $e,a as Se,b as Ce,c as Ee,d as De}from"./zoom-out.component-WOtQsnC_.js";import{G as Ae}from"./divider.component-CjE7VBzm.js";import"./signal.component-Bvp_9iW3.js";import"./filter-chips.component-Dl7EshhL.js";import"./summary.component-WZbJ7gic.js";import"./grouped-list.component-u7zGsJOw.js";import"./icon.component-Cs4MsctY.js";import"./arrow-down.component-CPrUhsmg.js";import"./arrow-left.component-CM6Uj15x.js";import"./arrow-right.component-W47wbLrI.js";import"./arrow-rotate-counter-clockwise.component-CpQTXi6h.js";import"./arrow-up.component-BvMO6Hu_.js";import"./sun.component-CCAutlyw.js";import"./star.component-CYmBmNWf.js";import"./bubbles.component-YnVnUIBY.js";import"./calender-add.component-C6g6Smr3.js";import"./chain-link-ze6Wqevu.js";import"./checkmark.component-T_ppsQ2L.js";import"./chevron-bottom.component-DieyWgt-.js";import"./chevron-right-small.component-DZzfN3g7.js";import"./chevron-left.component-BWeL6R5j.js";import"./chevron-right.component-D8a6Kka-.js";import"./chevron-top.component-BYcHMoAp.js";import"./circle-check.component-AksItwwl.js";import"./triangle-exclamation.component-qbfqDxf4.js";import"./circles-three.component-CeP6UW5G.js";import"./cloudy-sun.component-DGjwIV3W.js";import"./credit-card.component-I1gwbylj.js";import{I as je}from"./cross-small.component-dDuB6uW5.js";import{I as Le}from"./dot-grid-one-horizontal-Bk2nHsfr.js";import"./folder.component-NNiOdvsl.js";import{I as Te}from"./magnifying-glass.component-B9qkGRed.js";import{I as ze}from"./minus-small.component-E2jqMbi7.js";import"./people-profile.component-DhlG4nsR.js";import"./push.component-C13OZdKm.js";import"./rocket.component-CbvFluzX.js";import"./square-grid-circle.component-CSh3vjKB.js";import{G as Ge}from"./img.component-CRrs4HLI.js";import{G as Me}from"./input.component-C9NTUtcM.js";import{G as Ie}from"./link-DboNXcgk.js";import"./mask.component-D27ZHoEQ.js";import"./menu-button.component-C75k-crx.js";import{G as We}from"./pagination-CaXu4_tL.js";import"./radio-group.component-BYxlv-oE.js";import"./rich-text.component-CzQFkahc.js";import"./segmented-control-CpxSSKei.js";import"./sensitive-number.component-BEy5EBpL.js";import"./sensitive-date.component-DzsW9wUl.js";import"./sensitive-account.component-Cbb5EFV6.js";import"./select.component-DS0EvPn1.js";import"./spinner.component-CQlI4ypd.js";import{G as Pe}from"./text.component-tWh0DdT1.js";import"./textarea.component-B91P5zCB.js";import"./video.component-DVjZY598.js";import"./card-pattern-01.component-Dr0K2smR.js";import{c as Be}from"./rbcb-toggle.template-C8Kf0uDt.js";const Ne=Y`
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
`,R=new Set;function Re(){ie.instance.injectGlobalStyles("dialog-scroll-lock",Y`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Oe(t){if(R.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=He()+Qe();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function lt(t){R.delete(t),R.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function He(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Qe(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var Ve=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,yt=t=>{throw TypeError(t)},x=(t,e,s,a)=>{for(var o=a>1?void 0:a?qe(e,s):e,p=t.length-1,u;p>=0;p--)(u=t[p])&&(o=(a?u(e,s,o):u(o))||o);return a&&o&&Ve(e,s,o),o},X=(t,e,s)=>e.has(t)||yt("Cannot "+s),c=(t,e,s)=>(X(t,e,"read from private field"),s?s.call(t):e.get(t)),b=(t,e,s)=>e.has(t)?yt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s,a)=>(X(t,e,"write to private field"),e.set(t,s),s),Ue=(t,e,s)=>(X(t,e,"access private method"),s),$,L,S,C,O,H,M,Q,T,I,W,V,ft,K,z;Re();let y=class extends re(oe(le(dt))){constructor(){super(...arguments),b(this,V),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,this.closedby="closerequest",b(this,$),b(this,L,!1),b(this,S,!1),b(this,C,t=>{c(this,T).call(this,t)&&(f(this,S,!0),this.close(t),f(this,S,!1))}),b(this,O,t=>{c(this,I).call(this,t)&&(f(this,S,!0),this.show(t),f(this,S,!1))}),b(this,H,t=>{t.preventDefault(),c(this,C).call(this,"native-close")}),b(this,M,t=>{t.key==="Escape"&&(t.preventDefault(),c(this,C).call(this,"native-close"))}),b(this,Q,t=>{this.open?(f(this,S,!0),this.close("native-close"),f(this,S,!1),c(this,T).call(this,"native-close")):!c(this,S)&&c(this,$)&&c(this,$)!=="prop-change"&&c(this,T).call(this,c(this,$))}),b(this,T,t=>c(this,W).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),b(this,I,t=>c(this,W).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),b(this,W,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),b(this,K,t=>{c(this,O).call(this,"slotted-trigger")}),b(this,z,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect();!(o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width)&&!c(this,L)&&c(this,C).call(this,"click-outside")}f(this,L,!1)})}show(t){this.open=!0,t&&c(this,I).call(this,t)}close(t){f(this,$,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),lt(this)}render(){return l`<slot
        name="trigger"
        @slotchange=${Ue(this,V,ft)}
      ></slot>
      ${m(this.open,()=>l`<dialog
            closedby=${this.closedby}
            @cancel=${c(this,H)}
            @close=${c(this,Q)}
            class=${v({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${N(this.heading)}
          >
            <gds-card
              class="card"
              padding="xl"
              variant="neutral-02"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
              border-width="0"
              @mousedown=${()=>f(this,L,!0)}
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="tertiary"
                    size="small"
                    label=${g("Close")}
                    @click=${()=>c(this,C).call(this,"btn-close")}
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
                  overflow=${N(this.scrollable)?"auto":ne}
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
                      @click=${()=>c(this,C).call(this,"btn-cancel")}
                      rank="secondary"
                      >${g("Cancel")}</gds-button
                    >
                    <gds-button
                      value="ok"
                      @click=${()=>c(this,C).call(this,"btn-ok")}
                    >
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t,e;this.open?(f(this,$,void 0),this.updateComplete.then(()=>{var s,a,o;(s=this._elDialog)==null||s.showModal(),Oe(this),this.removeEventListener("click",c(this,z)),requestAnimationFrame(()=>this.addEventListener("click",c(this,z))),this.closedby==="none"&&((a=this._elDialog)==null||a.addEventListener("keydown",c(this,M))),de&&((o=this._elDialog)==null||o.focus())})):(f(this,$,c(this,$)||"prop-change"),(t=this._elDialog)==null||t.removeEventListener("keydown",c(this,M)),(e=this._elDialog)==null||e.close(),lt(this),document.removeEventListener("click",c(this,z)),this.requestUpdate("open"))}};$=new WeakMap;L=new WeakMap;S=new WeakMap;C=new WeakMap;O=new WeakMap;H=new WeakMap;M=new WeakMap;Q=new WeakMap;T=new WeakMap;I=new WeakMap;W=new WeakMap;V=new WeakSet;ft=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",c(this,K)),t==null||t.setAttribute("aria-haspopup","dialog")}};K=new WeakMap;z=new WeakMap;y.styles=[Ne];y.styleExpressionBaseSelector="dialog";x([h({type:Boolean,reflect:!0})],y.prototype,"open",2);x([h()],y.prototype,"heading",2);x([h()],y.prototype,"variant",2);x([h()],y.prototype,"placement",2);x([h({type:Boolean})],y.prototype,"scrollable",2);x([h({reflect:!0})],y.prototype,"closedby",2);x([ct("dialog")],y.prototype,"_elDialog",2);x([ct('slot[name="trigger"]')],y.prototype,"_elTriggerSlot",2);x([j("open")],y.prototype,"_handleOpenChange",1);y=x([ht("gds-dialog",{dependsOn:[pt,ut,ce,bt,$e]}),gt()],y);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt="important",Fe=" !"+vt,G=he(class extends pe{constructor(t){var e;if(super(t),t.type!==ge.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const a=t[s];return a==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const a of this.ft)e[a]==null&&(this.ft.delete(a),a.includes("-")?s.removeProperty(a):s[a]=null);for(const a in e){const o=e[a];if(o!=null){this.ft.add(a);const p=typeof o=="string"&&o.endsWith(Fe);a.includes("-")||p?s.setProperty(a,p?o.slice(0,-11):o,p?vt:""):s[a]=o}}return ue}}),Ye=Y`
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
`,Xe=[be,ye,Ye],Ke=[pt,ut,Ae,Ge,_e,xe,we,Me,We,Pe,ke,Ie,bt,Se,je,ze,Te,Ce,Ee,De,Le],Je={compact:{input:"small",dropdown:"small"},comfortable:{input:"small",dropdown:"small"},spacious:{input:"large",dropdown:"medium"}},mt=t=>typeof t=="object"&&t!==null&&Array.isArray(t.slots),Ze={toString(){return String(this.value??"")},valueOf(){return this.value},[Symbol.toPrimitive](t){return t==="number"?Number(this.value):String(this.value??"")}};function xa(t,e=["value"],s){if(mt(t))return t;let a=["value"],o;return Array.isArray(e)?a=e:(typeof e=="string"||typeof e=="number")&&(o=e),Array.isArray(s)&&(a=s),Object.assign(Object.create(Ze),{value:t,slots:a,...typeof o<"u"?{key:o}:{}})}var ts=Object.defineProperty,es=Object.getOwnPropertyDescriptor,wt=t=>{throw TypeError(t)},d=(t,e,s,a)=>{for(var o=a>1?void 0:a?es(e,s):e,p=t.length-1,u;p>=0;p--)(u=t[p])&&(o=(a?u(e,s,o):u(o))||o);return a&&o&&ts(e,s,o),o},J=(t,e,s)=>e.has(t)||wt("Cannot "+s),_=(t,e,s)=>(J(t,e,"read from private field"),s?s.call(t):e.get(t)),B=(t,e,s)=>e.has(t)?wt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),nt=(t,e,s,a)=>(J(t,e,"write to private field"),e.set(t,s),s),r=(t,e,s)=>(J(t,e,"access private method"),s),D,Z,i,q,_t,P,xt,U,kt,w,tt,F,$t,et,St,Ct,Et,Dt,At,jt,Lt,Tt,zt,Gt,Mt,It,Wt,Pt,st,Bt,Nt,Rt,Ot,Ht,Qt,Vt,qt,Ut,Ft,at,Yt,Xt,Kt,Jt,Zt,te,it,rt,A,ee,se,ae;let n=class extends dt{constructor(){super(...arguments),B(this,i),B(this,D,{}),B(this,Z,300*1e3),this.headlineTag="h2",this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.disableSelectAll=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="neutral-02-outlined",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){nt(this,D,{}),r(this,i,w).call(this)}_onPageChange(){this._view={...this._view,page:Number(this.page??1)},r(this,i,w).call(this)}_onRowsChange(){this._view={...this._view,rows:Number(this.rows??10),page:1},r(this,i,w).call(this)}_onColumnsChange(){nt(this,D,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(t=>t.visible!==!1).map(t=>t.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{r(this,i,ee).call(this)})}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return l`
      <div class="${v(t)}">
        ${[r(this,i,Ut).call(this),r(this,i,Dt).call(this),m(this._error,()=>r(this,i,Qt).call(this),()=>m(this._rowsState.length===0&&!this._loading,()=>r(this,i,Vt).call(this),()=>r(this,i,Ht).call(this))),r(this,i,qt).call(this)]}
      </div>
    `}clearSelection(){r(this,i,rt).call(this),r(this,i,A).call(this)}selectAll(){r(this,i,it).call(this),r(this,i,A).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this._rowsState.length);this._selected=new Set(e),r(this,i,A).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}};D=new WeakMap;Z=new WeakMap;i=new WeakSet;q=function(){return Je[this.density]};_t=function(){return this._selected.size>0};P=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};xt=function(){return _(this,i,_t)&&!_(this,i,P)};U=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};kt=function(t){return Date.now()-t.timestamp<_(this,Z)};w=async function(){if(this.data){if(!this.nocache){const t=r(this,i,U).call(this),e=_(this,D)[t];if(e&&r(this,i,kt).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{rows:e.rows,total:e.total,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0});return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=r(this,i,U).call(this);_(this,D)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{...t,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0})}catch(t){this._error=t,this.dispatchCustomEvent("gds-table-data-error",{detail:t,bubbles:!0})}finally{this._loading=!1}}};tt=function(t,e,s){if(typeof s=="string"||typeof s=="number")return s;const a=t==null?void 0:t.id;return typeof a=="string"||typeof a=="number"?a:e+1};F=function(t){return l`<span class="cell-wrapped-content">${t}</span>`};$t=function(t){return l`<span class="column-label" aria-hidden="true">
      ${t.label}:
    </span>`};et=function(t,e,s){const a=`${t}:${e}:${s}`;return l`<slot name="${a}"></slot>`};St=function(t,e,s){const a=e.value?e.value(t):t[e.key],o=this._isMobile&&this.responsive,p=!!e.justify;let u;if(mt(a)){const ot=r(this,i,tt).call(this,t,s,a.key);u=a.slots.map(k=>k==="value"?a.value===void 0?null:p?r(this,i,F).call(this,a.value):a.value:r(this,i,et).call(this,e.key,ot,k))}else u=p?r(this,i,F).call(this,a):a;return l`
      <div
        class="cell-content"
        aria-label=${N(o?e.label:void 0)}
      >
        ${o?r(this,i,$t).call(this,e):null} ${u}
      </div>
    `};Ct=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;return e?s==="asc"?l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:l`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};Et=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};Dt=function(){return this.plain||!r(this,i,Et).call(this)?null:l`
      <div class="header">
        <div class="lead">
          ${m(this.searchable,()=>l`
              <gds-input
                type="text"
                size="${_(this,i,q).input}"
                plain
                clearable
                label="${this.searchLabel||g("Search table")}"
                .value=${this._view.searchQuery}
                @input=${r(this,i,Ft)}
                @gds-input-cleared=${r(this,i,at)}
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
                size="${_(this,i,q).dropdown}"
                label="${g("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${r(this,i,Jt)}
              >
                <span slot="trigger">${g("Columns")}</span>
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
    `};At=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;let a=t.label;if(t.sortable)if(e){const u=s==="asc"?g("ascending"):g("descending");a=`${t.label}, ${g("sorted")} ${u}`}else a=`${t.label}, ${g("sortable")}`;const o=v({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify,wrap:!!t.width}),p=G({"--cell-width":t.width});return l`
      <th
        class=${o}
        style=${p}
        aria-sort="${e?s==="asc"?"ascending":"descending":"none"}"
        @click=${t.sortable?()=>r(this,i,Yt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${a}">
            ${t.label}
          </span>
          ${m(t.sortable,()=>l`
              <span class="sort-icon">${r(this,i,Ct).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};jt=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||g("Actions"),e=v({actions:!0,sticky:!!this.actions.sticky,wrap:!!this.actions.width,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify}),s=G({"--cell-width":this.actions.width});return l`
      <th class="${e}" style=${s}>
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};Lt=function(){return this.selectable?l`
      <th class="checkbox-cell">
        ${r(this,i,st).call(this,{checked:_(this,i,P),indeterminate:_(this,i,xt),ariaLabel:g("Select all rows"),onToggle:()=>r(this,i,Zt).call(this,{}),skip:this.disableSelectAll})}
      </th>
    `:null};Tt=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>r(this,i,At).call(this,t))};zt=function(){return l`
      <thead>
        <tr>
          ${[r(this,i,Lt).call(this),r(this,i,Tt).call(this),r(this,i,jt).call(this)]}
        </tr>
      </thead>
    `};Gt=function(t,e,s){const a=v({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),o=G({"--cell-width":e.width});return l`
      <td style=${o} class=${a}>
        ${r(this,i,St).call(this,t,e,s)}
      </td>
    `};Mt=function(t){if(!this.selectable)return null;const e=`${g("Select row")} ${t+1}`;return l`
      <td class="checkbox-cell">
        ${r(this,i,st).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>r(this,i,te).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
      </td>
    `};It=function(t,e){return this.columns.filter(s=>this._view.visibleColumns.has(s.key)).map(s=>r(this,i,Gt).call(this,t,s,e))};Wt=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return l`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=r(this,i,tt).call(this,t,e),a=v({"actions-cell":!0,sticky:!!this.actions.sticky,wrap:!!this.actions.width,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify}),o=G({"--cell-width":this.actions.width});return l`
      <td class="${a}" style=${o}>
        <div class="cell-content">
          ${r(this,i,et).call(this,"actions",s,"main")}
        </div>
      </td>
    `};Pt=function(t,e){return l`
      <tr
        class=${v({selected:this._selected.has(e),loading:this._loading})}
      >
        ${[r(this,i,Mt).call(this,e),r(this,i,It).call(this,t,e),r(this,i,Wt).call(this,t,e)]}
      </tr>
    `};st=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:a,onToggle:o,skip:p=!1}){if(p)return null;const u=k=>{k.stopPropagation(),!s&&o()};return l`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${a}
        @click=${u}
        @keydown=${k=>{(k.key===" "||k.key==="Enter")&&(k.preventDefault(),u(k))}}
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
        ${Be({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};Bt=function(t){const s=this._isMobile&&this.responsive?l`<span class="skeleton skeleton-text"></span>`:null;return l`
      <div class="cell-content">
        ${s}
        <span class="skeleton skeleton-text"></span>
      </div>
    `};Nt=function(t){return l`
      <tr class="skeleton-row">
        ${m(this.selectable,()=>l`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>l`<td>${r(this,i,Bt).call(this,e)}</td>`)}
        ${m(this.actions,()=>l`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};Rt=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,s)=>r(this,i,Nt).call(this,s));return l`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return l`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>r(this,i,Pt).call(this,t,e))}
      </tbody>
    `};Ot=function(){if(!this.tfoot)return null;const t=this.tfoot.label,e=this.columns.filter(a=>this._view.visibleColumns.has(a.key)),s=v({tablefoot:!0,sticky:!!this.tfoot.sticky});return l`
      <tfoot class=${s}>
        <tr>
          ${m(this.selectable,()=>l`<td class="checkbox-cell"></td>`)}
          ${e.map((a,o)=>{const p=v({"tablefoot-cell":!0,"tablefoot-label-cell":o===0,[`align-${a.align}`]:!!a.align,[`justify-${a.justify}`]:!!a.justify,wrap:!!a.width}),u=G({"--cell-width":a.width});return o===0&&t?l`
                <th scope="row" class=${p} style=${u}>
                  <div class="cell-content">
                    <span class="tablefoot-label">${t}</span>
                    <slot name="tfoot:${a.key}"></slot>
                  </div>
                </th>
              `:l`
              <td class=${p} style=${u}>
                <div class="cell-content">
                  <slot name="tfoot:${a.key}"></slot>
                </div>
              </td>
            `})}
          ${m(this.actions,()=>{const o=this.actions&&typeof this.actions!="function"&&this.actions.sticky,p=v({"actions-cell":!0,"tablefoot-cell":!0,sticky:!!o});return l`<td class=${p}>
              <div class="cell-content">
                <slot name="tfoot:actions"></slot>
              </div>
            </td>`})}
        </tr>
      </tfoot>
    `};Ht=function(){const t=v({responsive:this.responsive,data:!0,[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),e=`${this.summary?this.summary+", ":""}${g("Data table with")} ${this._total} ${g("rows")}`;return l`
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
            ${r(this,i,zt).call(this)} ${r(this,i,Rt).call(this)}
            ${r(this,i,Ot).call(this)}
          </table>
        </div>
      </gds-card>
    `};Qt=function(){return l`
      <gds-card variant="neutral-02" border-radius="m" outline>
        <slot name="error">
          <gds-text tag="p">${g("Error loading data")}</gds-text>
          <gds-button
            size="small"
            label="${g("Retry loading data")}"
            @click=${()=>r(this,i,w).call(this)}
          >
            ${g("Retry")}
          </gds-button>
        </slot>
      </gds-card>
    `};Vt=function(){return this._view.searchQuery.length>0?l`
        <gds-card variant="neutral-02" border-radius="m" outline>
          <slot name="no-results">
            <gds-flex flex-direction="column" align-items="flex-start" gap="s">
              <gds-text tag="p" font="heading-s">
                ${g("No results found")}
              </gds-text>
              <gds-text tag="p" font="detail-s-book">
                ${g("No results for")} "${this._view.searchQuery}"
              </gds-text>
              <gds-button
                size="small"
                label="${g("Clear search for")} ${this._view.searchQuery}"
                @click=${r(this,i,at)}
              >
                ${g("Clear search")}
              </gds-button>
            </gds-flex>
          </slot>
        </gds-card>
      `:l`
      <gds-card variant="neutral-02" border-radius="m" outline>
        <slot name="empty">
          <gds-text tag="p" font="heading-s">
            ${g("No data available")}
          </gds-text>
        </slot>
      </gds-card>
    `};qt=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),s=`${t}–${e} ${g("of")} ${this._total}`;return l`
      <slot name="footer">
        <gds-pagination
          .page=${this._view.page}
          .rows=${this._view.rows}
          .options=${this.options}
          .total=${this._total}
          .density=${this.density}
          .label=${s}
          @gds-page-change=${r(this,i,Xt)}
          @gds-rows-change=${r(this,i,Kt)}
          width="100%"
        >
        </gds-pagination>
      </slot>
    `};Ut=function(){if(this.headline||this.summary)return l`
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
        ${m(this.searchable||this.settings,()=>l`<gds-divider color="subtle-01"></gds-divider>`,()=>l``)}
      `};Ft=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await r(this,i,w).call(this)};at=async function(){this._view={...this._view,searchQuery:"",page:1},await r(this,i,w).call(this)};Yt=async function(t){const e=this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc";this._view={...this._view,sortColumn:t,sortDirection:e,page:1},this.dispatchCustomEvent("gds-sort-change",{detail:{sortColumn:t,sortDirection:e},bubbles:!0}),await r(this,i,w).call(this)};Xt=async function(t){this._view={...this._view,page:t.detail.page},this.dispatchCustomEvent("gds-page-change",{detail:t.detail,bubbles:!0}),await r(this,i,w).call(this)};Kt=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},this.dispatchCustomEvent("gds-rows-change",{detail:t.detail,bubbles:!0}),await r(this,i,w).call(this)};Jt=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};Zt=function(t){_(this,i,P)?r(this,i,rt).call(this):r(this,i,it).call(this),r(this,i,A).call(this)};te=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),r(this,i,A).call(this),this.requestUpdate()};it=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};rt=function(){this._selected.clear(),this.requestUpdate()};A=function(){this.dispatchCustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0})};ee=function(){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".data");if(!t)return;const e=()=>{r(this,i,se).call(this,t),r(this,i,ae).call(this,t)};t.addEventListener("scroll",e),e()};se=function(t){const{scrollTop:e,scrollHeight:s,clientHeight:a}=t,o=s-a;e>0?t.classList.add("scrolled"):t.classList.remove("scrolled"),e<o-1?t.classList.add("scrolled-bottom"):t.classList.remove("scrolled-bottom")};ae=function(t){const{scrollLeft:e,scrollWidth:s,clientWidth:a}=t,o=s-a;e<=0?(t.classList.add("scrolled-x-start"),t.classList.remove("scrolled-x-middle","scrolled-x-end")):e>=o-1?(t.classList.add("scrolled-x-end"),t.classList.remove("scrolled-x-start","scrolled-x-middle")):(t.classList.add("scrolled-x-middle"),t.classList.remove("scrolled-x-start","scrolled-x-end"))};n.styles=Xe;d([h()],n.prototype,"headline",2);d([h({attribute:"headline-tag",type:String,reflect:!0})],n.prototype,"headlineTag",2);d([h()],n.prototype,"summary",2);d([h({attribute:"search-label",type:String})],n.prototype,"searchLabel",2);d([h({type:Array})],n.prototype,"options",2);d([h({type:Number})],n.prototype,"page",2);d([h({type:Number})],n.prototype,"rows",2);d([h({type:Array})],n.prototype,"columns",2);d([h()],n.prototype,"data",2);d([h({reflect:!1})],n.prototype,"density",2);d([h({type:Boolean,reflect:!1})],n.prototype,"selectable",2);d([h({attribute:"disable-select-all",type:Boolean,reflect:!1})],n.prototype,"disableSelectAll",2);d([h({type:Boolean,reflect:!1})],n.prototype,"responsive",2);d([h({type:Boolean,reflect:!1})],n.prototype,"plain",2);d([h({type:Boolean,reflect:!1})],n.prototype,"searchable",2);d([h({type:Boolean,reflect:!1})],n.prototype,"settings",2);d([h({type:Boolean,reflect:!1})],n.prototype,"striped",2);d([h()],n.prototype,"actions",2);d([h({type:Boolean,reflect:!1})],n.prototype,"nocache",2);d([h({type:Object})],n.prototype,"tfoot",2);d([h()],n.prototype,"dataLoadKey",2);d([fe({...ve,property:"--_table-height",selector:".data"})],n.prototype,"height",2);d([h()],n.prototype,"variant",2);d([E()],n.prototype,"_isMobile",2);d([me("(max-width: 768px)")],n.prototype,"_handleMobile",1);d([E()],n.prototype,"_view",2);d([E()],n.prototype,"_loaded",2);d([E()],n.prototype,"_loading",2);d([E()],n.prototype,"_rowsState",2);d([E()],n.prototype,"_total",2);d([E()],n.prototype,"_selected",2);d([E()],n.prototype,"_error",2);d([j("dataLoadKey"),j("data")],n.prototype,"_onDataChange",1);d([j("page",{waitUntilFirstUpdate:!0})],n.prototype,"_onPageChange",1);d([j("rows",{waitUntilFirstUpdate:!0})],n.prototype,"_onRowsChange",1);d([j("columns")],n.prototype,"_onColumnsChange",1);n=d([gt(),ht("gds-table",{dependsOn:Ke})],n);n.define();export{y as G,xa as S};
