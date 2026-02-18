import{i as V,ab as Kt,a0 as Zt,a4 as te,aq as ee,J as et,b as v,a as _,o as M,O as h,E as se,h as o,ar as ae,n as c,d as st,a8 as I,g as at,P as it,G as ie,$ as re,X as le,Z as oe,af as ne,t as de,ai as ce,s as he,ag as pe,I as x}from"./iframe-CDYwBWwb.js";import{l as rt}from"./localized-decorator-CTPpDN0m.js";import{w as ge}from"./popover.component-D26aIRBH.js";import{a as ue}from"./dropdown.component-Ggs84LXl.js";import"./menu-heading.component-1ad_jZof.js";import{a as ye,G as fe}from"./context-menu.component-CyaeBKE-.js";import"./alert.component-BcJGmxli.js";import{G as be}from"./badge.component-DOkIIYzL.js";import"./blur.component-rlG42Rxj.js";import"./breadcrumb.component-05Z3lD7w.js";import"./calendar.component-Cxd3ossz.js";import{G as lt}from"./card.component-CA9Ke_4r.js";import"./card-linked.component-DY3CHwBF.js";import"./checkbox-group.component-BfwMuc-m.js";import"./coachmark.component-xCy2K0Qi.js";import"./datepicker.component-BJuzt1BU.js";import"./details.component-Daa35hTX.js";import{G as ot}from"./flex.component-Ci8HJepP.js";import{I as me,a as ve,b as we,c as _e,d as xe}from"./zoom-out.component-eWzu-Odj.js";import{G as ke}from"./divider.component-BFknL2F1.js";import"./signal.component-BEfmDaFV.js";import"./filter-chips.component-CCxWqkIa.js";import"./summary.component-D-_TMEgr.js";import"./grouped-list.component-DSilSSYk.js";import"./icon.component-DsQvcCLO.js";import"./arrow-down.component-yO9xo0IE.js";import"./arrow-left.component-5MdjyX-v.js";import"./arrow-right.component-VvjglSST.js";import"./arrow-rotate-counter-clockwise.component-D45yvctx.js";import"./arrow-up.component-rw2IUwWS.js";import"./sun.component-DRslKGl8.js";import"./star.component-D_f2jw6n.js";import"./bubbles.component-CIBORvdM.js";import"./calender-add.component-DqZH7bgG.js";import"./chain-link-CcquaYYS.js";import"./checkmark.component-CoSq204c.js";import"./chevron-bottom.component-CpTXIEaR.js";import"./chevron-right-small.component-O30anLhI.js";import"./chevron-left.component-DzdVKr5d.js";import"./chevron-right.component-CukdDlWK.js";import"./chevron-top.component-CRdxu2KU.js";import"./circle-check.component-DBBzFXcd.js";import"./triangle-exclamation.component-kru_ealq.js";import"./circles-three.component-3KkfaKGr.js";import"./cloudy-sun.component-DnfLaekd.js";import"./credit-card.component-BdeBTU_r.js";import{I as $e}from"./cross-small.component-DVIXh5fg.js";import{I as Se}from"./dot-grid-one-horizontal-DrxOmEZc.js";import"./folder.component-BGUsBGu0.js";import{I as Ce}from"./magnifying-glass.component-CT0bua8g.js";import{I as Ee}from"./minus-small.component-CvcM8B-r.js";import"./people-profile.component-B0BM-rrH.js";import"./push.component-C9vfljOL.js";import"./rocket.component-DIGvi3FE.js";import"./square-grid-circle.component-DrFL-fDo.js";import{G as De}from"./img.component-DJLuTObb.js";import{G as Ae}from"./input.component-B0DMaRDc.js";import{G as Te}from"./link.component-B-MWnYiz.js";import"./mask.component-28KSc1WW.js";import"./menu-button.component-BOvGFLeR.js";import{G as Ge}from"./pagination-Bp5rZoss.js";import"./radio-group.component-CovnVrPa.js";import"./rich-text.component-CDWb41Yu.js";import"./segmented-control-BlogNyoa.js";import"./sensitive-number.component-BU19_KD3.js";import"./sensitive-date.component-CR1kWxEQ.js";import"./sensitive-account.component-DsCn5X-E.js";import"./select.component-Bpu2U17a.js";import"./spinner.component-en6hdc9q.js";import{G as Ie}from"./text-BCzI95gP.js";import"./textarea.component-BdR1a2Sm.js";import"./video.component-DRU7C-lu.js";import"./card-pattern-01.component-DRDYoquK.js";import{c as ze}from"./rbcb-toggle.template-CroFatrj.js";const Le=V`
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
`,j=new Set;function Me(){Kt.instance.injectGlobalStyles("dialog-scroll-lock",V`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function je(t){if(j.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=Pe()+We();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function Z(t){j.delete(t),j.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Pe(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function We(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var Re=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,nt=t=>{throw TypeError(t)},w=(t,e,s,r)=>{for(var l=r>1?void 0:r?Ne(e,s):e,p=t.length-1,g;p>=0;p--)(g=t[p])&&(l=(r?g(e,s,l):g(l))||l);return r&&l&&Re(e,s,l),l},H=(t,e,s)=>e.has(t)||nt("Cannot "+s),u=(t,e,s)=>(H(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>e.has(t)?nt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),E=(t,e,s,r)=>(H(t,e,"write to private field"),e.set(t,s),s),Be=(t,e,s)=>(H(t,e,"access private method"),s),$,D,P,T,W,G,R,dt,Q,A;Me();let y=class extends Zt(te(ee(et))){constructor(){super(...arguments),m(this,R),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,m(this,$),m(this,D,!1),m(this,P,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!u(this,T).call(this,s))return;this.close(s);return}this.close(s)}),m(this,T,t=>u(this,G).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),m(this,W,t=>u(this,G).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),m(this,G,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),m(this,Q,t=>{this.show("slotted-trigger")}),m(this,A,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const l=s.getBoundingClientRect(),p=l.top<=e.clientY&&e.clientY<=l.top+l.height&&l.left<=e.clientX&&e.clientX<=l.left+l.width,g="click-outside";!p&&!u(this,D)&&u(this,T).call(this,g)&&this.close(g)}E(this,D,!1)})}show(t){this.open=!0,t&&u(this,W).call(this,t)}close(t){E(this,$,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),Z(this)}render(){return o`<slot
        name="trigger"
        @slotchange=${Be(this,R,dt)}
      ></slot>
      ${v(this.open,()=>o`<dialog
            closedby="closerequest"
            @close=${u(this,P)}
            class=${_({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${M(this.heading)}
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
                  overflow=${M(this.scrollable)?"auto":se}
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
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(E(this,$,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),je(this),this.removeEventListener("click",u(this,A)),requestAnimationFrame(()=>this.addEventListener("click",u(this,A))),ae&&((s=this._elDialog)==null||s.focus())})):(E(this,$,u(this,$)||"prop-change"),(t=this._elDialog)==null||t.close(u(this,$)),Z(this),document.removeEventListener("click",u(this,A)),this.requestUpdate("open"))}};$=new WeakMap;D=new WeakMap;P=new WeakMap;T=new WeakMap;W=new WeakMap;G=new WeakMap;R=new WeakSet;dt=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",u(this,Q)),t==null||t.setAttribute("aria-haspopup","dialog")}};Q=new WeakMap;A=new WeakMap;y.styles=[Le];y.styleExpressionBaseSelector="dialog";w([c({type:Boolean,reflect:!0})],y.prototype,"open",2);w([c()],y.prototype,"heading",2);w([c()],y.prototype,"variant",2);w([c()],y.prototype,"placement",2);w([c({type:Boolean})],y.prototype,"scrollable",2);w([st("dialog")],y.prototype,"_elDialog",2);w([st('slot[name="trigger"]')],y.prototype,"_elTriggerSlot",2);w([I("open")],y.prototype,"_handleOpenChange",1);y=w([at("gds-dialog",{dependsOn:[it,lt,ie,ot,me]}),rt()],y);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct="important",Oe=" !"+ct,ht=re(class extends le{constructor(t){var e;if(super(t),t.type!==oe.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const r=t[s];return r==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?s.removeProperty(r):s[r]=null);for(const r in e){const l=e[r];if(l!=null){this.ft.add(r);const p=typeof l=="string"&&l.endsWith(Oe);r.includes("-")||p?s.setProperty(r,p?l.slice(0,-11):l,p?ct:""):s[r]=l}}return ne}}),Ve=V`
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
`,He=[de,ce,Ve],Qe=[it,lt,ke,De,ye,fe,ue,Ae,Ge,Ie,be,Te,ot,ve,$e,Ee,Ce,we,_e,xe,Se],qe={compact:{button:"small",input:"small",dropdown:"small",badge:"small"},comfortable:{button:"small",input:"small",dropdown:"small",badge:"small"},spacious:{button:"medium",input:"large",dropdown:"medium",badge:"default"}},pt=t=>typeof t=="object"&&t!==null&&Array.isArray(t.slots),Ue={toString(){return String(this.value??"")},valueOf(){return this.value},[Symbol.toPrimitive](t){return t==="number"?Number(this.value):String(this.value??"")}};function fa(t,e=["value"],s){if(pt(t))return t;let r=["value"],l;return Array.isArray(e)?r=e:(typeof e=="string"||typeof e=="number")&&(l=e),Array.isArray(s)?r=s:(typeof s=="string"||typeof s=="number")&&(l=s),Object.assign(Object.create(Ue),{value:t,slots:r,...typeof l<"u"?{key:l}:{}})}var Ye=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,gt=t=>{throw TypeError(t)},d=(t,e,s,r)=>{for(var l=r>1?void 0:r?Xe(e,s):e,p=t.length-1,g;p>=0;p--)(g=t[p])&&(l=(r?g(e,s,l):g(l))||l);return r&&l&&Ye(e,s,l),l},q=(t,e,s)=>e.has(t)||gt("Cannot "+s),f=(t,e,s)=>(q(t,e,"read from private field"),s?s.call(t):e.get(t)),L=(t,e,s)=>e.has(t)?gt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),tt=(t,e,s,r)=>(q(t,e,"write to private field"),e.set(t,s),s),i=(t,e,s)=>(q(t,e,"access private method"),s),S,U,a,N,ut,z,yt,B,ft,k,bt,O,mt,vt,wt,_t,xt,kt,$t,St,Ct,Et,Dt,At,Tt,Gt,It,zt,Y,Lt,Mt,jt,Pt,Wt,Rt,Nt,Bt,Ot,X,Vt,Ht,Qt,qt,Ut,Yt,F,J,C,Xt,Ft,Jt;let n=class extends et{constructor(){super(...arguments),L(this,a),L(this,S,{}),L(this,U,300*1e3),this.headlineTag="h2",this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.disableSelectAll=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="secondary",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){tt(this,S,{}),i(this,a,k).call(this)}_onColumnsChange(){tt(this,S,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(t=>t.visible!==!1).map(t=>t.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{i(this,a,Xt).call(this)})}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return o`
      <div class="${_(t)}">
        ${[i(this,a,Bt).call(this),i(this,a,kt).call(this),v(this._error,()=>i(this,a,Wt).call(this),()=>v(this._rowsState.length===0&&!this._loading,()=>i(this,a,Rt).call(this),()=>i(this,a,Pt).call(this))),i(this,a,Nt).call(this)]}
      </div>
    `}clearSelection(){i(this,a,J).call(this),i(this,a,C).call(this)}selectAll(){i(this,a,F).call(this),i(this,a,C).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this._rowsState.length);this._selected=new Set(e),i(this,a,C).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}};S=new WeakMap;U=new WeakMap;a=new WeakSet;N=function(){return qe[this.density]};ut=function(){return this._selected.size>0};z=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};yt=function(){return f(this,a,ut)&&!f(this,a,z)};B=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};ft=function(t){return Date.now()-t.timestamp<f(this,U)};k=async function(){if(this.data){if(!this.nocache){const t=i(this,a,B).call(this),e=f(this,S)[t];if(e&&i(this,a,ft).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._loaded=!1;return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=i(this,a,B).call(this);f(this,S)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{...t,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0})}catch(t){this._error=t,this.dispatchCustomEvent("gds-table-data-error",{detail:t,bubbles:!0})}finally{this._loading=!1}}};bt=function(t,e,s){if(typeof s=="string"||typeof s=="number")return s;const r=t==null?void 0:t.id;return typeof r=="string"||typeof r=="number"?r:e+1};O=function(t){return o`<span class="cell-wrapped-content">${t}</span>`};mt=function(t){return o`<span class="column-label" aria-hidden="true">
      ${t.label}:
    </span>`};vt=function(t,e,s){const r=`${t}:${e}:${s}`;return o`<slot name="${r}"></slot>`};wt=function(t,e,s){const r=e.value?e.value(t):t[e.key],l=this._isMobile&&this.responsive,p=!!e.justify;let g;if(pt(r)){const K=i(this,a,bt).call(this,t,s,r.key);g=r.slots.map(b=>b==="value"?r.value===void 0?null:p?i(this,a,O).call(this,r.value):r.value:i(this,a,vt).call(this,e.key,K,b))}else g=p?i(this,a,O).call(this,r):r;return o`
      <div
        class="cell-content"
        aria-label=${M(l?e.label:void 0)}
      >
        ${l?i(this,a,mt).call(this,e):null} ${g}
      </div>
    `};_t=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;return e?s==="asc"?o`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:o`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:o`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};xt=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};kt=function(){return this.plain||!i(this,a,xt).call(this)?null:o`
      <div class="header">
        <div class="lead">
          ${v(this.searchable,()=>o`
              <gds-input
                type="text"
                size="${f(this,a,N).input}"
                plain
                clearable
                label="${this.searchLabel||h("Search table")}"
                .value=${this._view.searchQuery}
                @input=${i(this,a,Ot)}
                @gds-input-cleared=${i(this,a,X)}
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
          ${v(this.settings,()=>o`
              <gds-dropdown
                multiple
                plain
                size="${f(this,a,N).dropdown}"
                label="${h("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${i(this,a,qt)}
              >
                <span slot="trigger">${h("Columns")}</span>
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
    `};$t=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;let r=t.label;if(t.sortable)if(e){const g=s==="asc"?h("ascending"):h("descending");r=`${t.label}, ${h("sorted")} ${g}`}else r=`${t.label}, ${h("sortable")}`;const l=_({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify,wrap:!!t.width}),p=ht({"--cell-width":t.width});return o`
      <th
        class=${l}
        style=${p}
        aria-sort="${e?s==="asc"?"ascending":"descending":"none"}"
        @click=${t.sortable?()=>i(this,a,Vt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${r}">
            ${t.label}
          </span>
          ${v(t.sortable,()=>o`
              <span class="sort-icon">${i(this,a,_t).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};St=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||h("Actions"),e=_({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return o`
      <th class="${e}">
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};Ct=function(){return this.selectable?o`
      <th class="checkbox-cell">
        ${i(this,a,Y).call(this,{checked:f(this,a,z),indeterminate:f(this,a,yt),ariaLabel:h("Select all rows"),onToggle:()=>i(this,a,Ut).call(this,{}),skip:this.disableSelectAll})}
      </th>
    `:null};Et=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>i(this,a,$t).call(this,t))};Dt=function(){return o`
      <thead>
        <tr>
          ${[i(this,a,Ct).call(this),i(this,a,Et).call(this),i(this,a,St).call(this)]}
        </tr>
      </thead>
    `};At=function(t,e,s){const r=_({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),l=ht({"--cell-width":e.width});return o`
      <td style=${l} class=${r}>
        ${i(this,a,wt).call(this,t,e,s)}
      </td>
    `};Tt=function(t){if(!this.selectable)return null;const e=`${h("Select row")} ${t+1}`;return o`
      <td class="checkbox-cell">
        ${i(this,a,Y).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>i(this,a,Yt).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
      </td>
    `};Gt=function(t,e){return this.columns.filter(s=>this._view.visibleColumns.has(s.key)).map(s=>i(this,a,At).call(this,t,s,e))};It=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return o`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=_({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return o`
      <td class="${s}">
        <div class="cell-content">ACTIONS</div>
      </td>
    `};zt=function(t,e){return o`
      <tr
        class=${_({selected:this._selected.has(e),loading:this._loading})}
      >
        ${[i(this,a,Tt).call(this,e),i(this,a,Gt).call(this,t,e),i(this,a,It).call(this,t,e)]}
      </tr>
    `};Y=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:r,onToggle:l,skip:p=!1}){if(p)return null;const g=b=>{b.stopPropagation(),!s&&l()};return o`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${r}
        @click=${g}
        @keydown=${b=>{(b.key===" "||b.key==="Enter")&&(b.preventDefault(),g(b))}}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${t}
          .indeterminate=${e}
          ?disabled=${s}
          aria-hidden="true"
          @change=${g}
        />
        ${ze({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};Lt=function(t){const s=this._isMobile&&this.responsive?o`<span class="skeleton skeleton-text"></span>`:null;return o`
      <div class="cell-content">
        ${s}
        <span class="skeleton skeleton-text"></span>
      </div>
    `};Mt=function(t){return o`
      <tr class="skeleton-row">
        ${v(this.selectable,()=>o`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>o`<td>${i(this,a,Lt).call(this,e)}</td>`)}
        ${v(this.actions,()=>o`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};jt=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,s)=>i(this,a,Mt).call(this,s));return o`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return o`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>i(this,a,zt).call(this,t,e))}
      </tbody>
    `};Pt=function(){const t=_({responsive:this.responsive,data:!0,[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),e=`${this.summary?this.summary+", ":""}${h("Data table with")} ${this._total} ${h("rows")}`;return o`
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
            ${i(this,a,Dt).call(this)} ${i(this,a,jt).call(this)}
          </table>
        </div>
      </gds-card>
    `};Wt=function(){return o`
      <gds-card variant="secondary" border-radius="m">
        <slot name="error">
          <gds-text tag="p">${h("Error loading data")}</gds-text>
          <gds-button
            size="small"
            label="${h("Retry loading data")}"
            @click=${()=>i(this,a,k).call(this)}
          >
            ${h("Retry")}
          </gds-button>
        </slot>
      </gds-card>
    `};Rt=function(){return this._view.searchQuery.length>0?o`
        <gds-card variant="secondary" border-radius="m">
          <slot name="no-results">
            <gds-flex flex-direction="column" align-items="flex-start" gap="s">
              <gds-text tag="p" font="heading-s">
                ${h("No results found")}
              </gds-text>
              <gds-text tag="p" font="detail-book-s">
                ${h("No results for")} "${this._view.searchQuery}"
              </gds-text>
              <gds-button
                size="small"
                label="${h("Clear search for")} ${this._view.searchQuery}"
                @click=${i(this,a,X)}
              >
                ${h("Clear search")}
              </gds-button>
            </gds-flex>
          </slot>
        </gds-card>
      `:o`
      <gds-card variant="secondary" border-radius="m">
        <slot name="empty">
          <gds-text tag="p" font="heading-s">
            ${h("No data available")}
          </gds-text>
        </slot>
      </gds-card>
    `};Nt=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),s=`${t}–${e} ${h("of")} ${this._total}`;return o`
      <gds-pagination
        .page=${this._view.page}
        .rows=${this._view.rows}
        .options=${this.options}
        .total=${this._total}
        .density=${this.density}
        .label=${s}
        @gds-page-change=${i(this,a,Ht)}
        @gds-rows-change=${i(this,a,Qt)}
        width="100%"
      >
      </gds-pagination>
    `};Bt=function(){if(this.plain)return null;if(this.headline||this.summary)return o`
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
        ${v(this.searchable||this.settings,()=>o`<gds-divider color="subtle-01"></gds-divider>`,()=>o``)}
      `};Ot=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await i(this,a,k).call(this)};X=async function(){this._view={...this._view,searchQuery:"",page:1},await i(this,a,k).call(this)};Vt=async function(t){const e=this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc";this._view={...this._view,sortColumn:t,sortDirection:e,page:1},this.dispatchCustomEvent("gds-sort-change",{detail:{sortColumn:t,sortDirection:e},bubbles:!0}),await i(this,a,k).call(this)};Ht=async function(t){this._view={...this._view,page:t.detail.page},this.dispatchCustomEvent("gds-page-change",{detail:t.detail,bubbles:!0}),await i(this,a,k).call(this)};Qt=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},this.dispatchCustomEvent("gds-rows-change",{detail:t.detail,bubbles:!0}),await i(this,a,k).call(this)};qt=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};Ut=function(t){f(this,a,z)?i(this,a,J).call(this):i(this,a,F).call(this),i(this,a,C).call(this)};Yt=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),i(this,a,C).call(this),this.requestUpdate()};F=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};J=function(){this._selected.clear(),this.requestUpdate()};C=function(){this.dispatchCustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0})};Xt=function(){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".data");if(!t)return;const e=()=>{i(this,a,Ft).call(this,t),i(this,a,Jt).call(this,t)};t.addEventListener("scroll",e),e()};Ft=function(t){const{scrollTop:e}=t;e>0?t.classList.add("scrolled"):t.classList.remove("scrolled")};Jt=function(t){const{scrollLeft:e,scrollWidth:s,clientWidth:r}=t,l=s-r;e<=0?(t.classList.add("scrolled-x-start"),t.classList.remove("scrolled-x-middle","scrolled-x-end")):e>=l-1?(t.classList.add("scrolled-x-end"),t.classList.remove("scrolled-x-start","scrolled-x-middle")):(t.classList.add("scrolled-x-middle"),t.classList.remove("scrolled-x-start","scrolled-x-end"))};n.styles=He;d([c()],n.prototype,"headline",2);d([c({attribute:"headline-tag",type:String,reflect:!0})],n.prototype,"headlineTag",2);d([c()],n.prototype,"summary",2);d([c({attribute:"search-label",type:String})],n.prototype,"searchLabel",2);d([c({type:Array})],n.prototype,"options",2);d([c({type:Number})],n.prototype,"page",2);d([c({type:Number})],n.prototype,"rows",2);d([c({type:Array})],n.prototype,"columns",2);d([c()],n.prototype,"data",2);d([c({reflect:!1})],n.prototype,"density",2);d([c({type:Boolean,reflect:!1})],n.prototype,"selectable",2);d([c({attribute:"disable-select-all",type:Boolean,reflect:!1})],n.prototype,"disableSelectAll",2);d([c({type:Boolean,reflect:!1})],n.prototype,"responsive",2);d([c({type:Boolean,reflect:!1})],n.prototype,"plain",2);d([c({type:Boolean,reflect:!1})],n.prototype,"searchable",2);d([c({type:Boolean,reflect:!1})],n.prototype,"settings",2);d([c({type:Boolean,reflect:!1})],n.prototype,"striped",2);d([c()],n.prototype,"actions",2);d([c({type:Boolean,reflect:!1})],n.prototype,"nocache",2);d([c()],n.prototype,"dataLoadKey",2);d([he({...pe,property:"--_table-height",selector:".data"})],n.prototype,"height",2);d([c()],n.prototype,"variant",2);d([x()],n.prototype,"_isMobile",2);d([ge("(max-width: 768px)")],n.prototype,"_handleMobile",1);d([x()],n.prototype,"_view",2);d([x()],n.prototype,"_loaded",2);d([x()],n.prototype,"_loading",2);d([x()],n.prototype,"_rowsState",2);d([x()],n.prototype,"_total",2);d([x()],n.prototype,"_selected",2);d([x()],n.prototype,"_error",2);d([I("dataLoadKey"),I("data")],n.prototype,"_onDataChange",1);d([I("columns")],n.prototype,"_onColumnsChange",1);n=d([rt(),at("gds-table",{dependsOn:Qe})],n);n.define();export{y as G,fa as S};
