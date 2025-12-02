import{S as Ut,O as Ft,Q as Kt,al as Yt,i as V,ao as Xt,U as Zt,Z as Jt,ap as te,A as it,b as w,a as _,o as j,H as h,E as ee,h as n,aq as se,n as g,d as rt,a2 as N,g as ot,I as nt,J as lt,G as ae,t as ie,af as re,s as oe,ad as ne,z as x}from"./iframe-UDVquwlF.js";import{w as le}from"./popover.component-DP0r3ico.js";import{a as de}from"./dropdown.component-GIY8Y8PR.js";import"./menu-heading.component-e6lFe3kV.js";import{a as ce,G as he}from"./context-menu.component-DALlLp2e.js";import"./alert.component-DGTh2AFS.js";import{G as pe}from"./badge.component-Bg9F4Tw-.js";import"./blur.component-BGCLx9P_.js";import"./breadcrumb.component-zGN4kUxh.js";import"./calendar.component-Cl5nVI9B.js";import{G as dt}from"./card.component-DexI8x62.js";import"./card-linked.component-DUbAUM9C.js";import"./checkbox-group.component-B-nAyMqH.js";import"./coachmark.component-D1Jp97eS.js";import"./datepicker.component-BLEHZCFn.js";import{G as ct}from"./flex.component-7XGJimrB.js";import{I as ge,a as ue,b as me,c as ye,d as be}from"./zoom-out.component-D4uN-62c.js";import"./divider.component-5jcnc_Cw.js";import"./signal.component-ByuEWx4m.js";import"./filter-chips.component-DzzSwli1.js";import"./summary.component-BNEBf0MZ.js";import"./grouped-list.component-d1EDRjOc.js";import"./icon-DoTc6Wmi.js";import"./arrow-down.component-DX8PIUdO.js";import"./arrow-left.component-BgAKBMh4.js";import"./arrow-right.component-ByNM3aMo.js";import"./arrow-rotate-counter-clockwise.component-CuB4qV9u.js";import"./arrow-up.component-P1FWJNMG.js";import"./sun.component-C5HO0voK.js";import"./star.component-Z2KSomJp.js";import"./bubbles.component-CT736w5W.js";import"./calender-add.component-BoVYvm45.js";import"./chain-link-DGTZDGPP.js";import"./checkmark.component-Dv48HJCX.js";import"./chevron-bottom.component-DmyaL1V4.js";import"./chevron-right-small.component-CCwwQI4z.js";import"./chevron-left.component-Bh5bGvnb.js";import"./chevron-right.component-CrUIUI0C.js";import"./chevron-top.component-CEnp0Dpu.js";import"./circle-check.component-sROCE3l2.js";import"./triangle-exclamation.component-CVq1kRel.js";import"./circles-three.component-vCyZdkPG.js";import"./cloudy-sun.component-yue1B504.js";import"./credit-card.component-CoDtGW3c.js";import{I as ve}from"./cross-small.component-DHSAVP2D.js";import{I as fe}from"./dot-grid-one-horizontal-CcqPEgAk.js";import"./folder.component-BIGO8oLE.js";import{I as we}from"./magnifying-glass.component-BUgzcCfe.js";import{I as _e}from"./minus-small.component-CwaBpwar.js";import"./people-profile.component-BXDsl8yT.js";import"./push.component-BKmc6nLG.js";import"./rocket.component-CR_kdpmr.js";import"./square-grid-circle.component-BPep-Lhi.js";import{G as xe}from"./img.component-PhhdZ2L1.js";import{G as ke}from"./input.component-CdQWLtOX.js";import{G as $e}from"./link.component-B7j4ghhR.js";import"./mask.component-DfDDrDbS.js";import"./menu-button.component-_BBnSlqh.js";import{G as Se}from"./pagination-DXcld4kv.js";import"./radio-group.component-DhWxk-u7.js";import"./rich-text.component-D_B0sAbE.js";import"./segmented-control-zDjQwDPD.js";import"./sensitive-number.component-DtPcIn74.js";import"./sensitive-date.component-BD5DX_BA.js";import"./sensitive-account.component-Bh_4XvUQ.js";import"./select.component-C1AQIZN1.js";import"./spinner.component--NxG0Lt3.js";import{G as Ce}from"./text-C8r-liCZ.js";import"./textarea.component-CrF0COA9.js";import"./video.component-OvogTOUM.js";import"./card-pattern-01.component-BFsa_nvb.js";import{c as Ee}from"./rbcb-toggle.template-BC0qjdmL.js";import{d as Ae}from"./formatted-date.component-C0-zhG1f.js";import{a as ze}from"./formatted-account-CerlhHl2.js";import{n as Ie}from"./formatted-number-BUN6lHdO.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht="important",Te=" !"+ht,De=Ut(class extends Ft{constructor(t){var e;if(super(t),t.type!==Kt.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const l=typeof o=="string"&&o.endsWith(Te);i.includes("-")||l?s.setProperty(i,l?o.slice(0,-11):o,l?ht:""):s[i]=o}}return Yt}}),Ge=V`
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
`,P=new Set;function Me(){Xt.instance.injectGlobalStyles("dialog-scroll-lock",V`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Oe(t){if(P.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=Le()+je();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function st(t){P.delete(t),P.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Le(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function je(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var Ne=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,pt=t=>{throw TypeError(t)},f=(t,e,s,i)=>{for(var o=i>1?void 0:i?Re(e,s):e,l=t.length-1,p;l>=0;l--)(p=t[l])&&(o=(i?p(e,s,o):p(o))||o);return i&&o&&Ne(e,s,o),o},U=(t,e,s)=>e.has(t)||pt("Cannot "+s),y=(t,e,s)=>(U(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?pt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),I=(t,e,s,i)=>(U(t,e,"write to private field"),e.set(t,s),s),Pe=(t,e,s)=>(U(t,e,"access private method"),s),$,T,W,O,B,L,H,gt,F,D;Me();let b=class extends Zt(Jt(te(it))){constructor(){super(...arguments),v(this,H),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,v(this,$),v(this,T,!1),v(this,W,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!y(this,O).call(this,s))return;this.close(s);return}this.close(s)}),v(this,O,t=>y(this,L).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),v(this,B,t=>y(this,L).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),v(this,L,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),v(this,F,t=>{this.show("slotted-trigger")}),v(this,D,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect(),l=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,p="click-outside";!l&&!y(this,T)&&y(this,O).call(this,p)&&this.close(p)}I(this,T,!1)})}show(t){this.open=!0,t&&y(this,B).call(this,t)}close(t){I(this,$,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),st(this)}render(){return n`<slot
        name="trigger"
        @slotchange=${Pe(this,H,gt)}
      ></slot>
      ${w(this.open,()=>n`<dialog
            closedby="closerequest"
            @close=${y(this,W)}
            class=${_({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${j(this.heading)}
          >
            <gds-card
              class="card"
              padding="xl"
              variant="secondary"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
              border-width="0"
              @mousedown=${()=>I(this,T,!0)}
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
                  overflow=${j(this.scrollable)?"auto":ee}
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
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(I(this,$,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),Oe(this),this.removeEventListener("click",y(this,D)),requestAnimationFrame(()=>this.addEventListener("click",y(this,D))),se&&((s=this._elDialog)==null||s.focus())})):(I(this,$,y(this,$)||"prop-change"),(t=this._elDialog)==null||t.close(y(this,$)),st(this),document.removeEventListener("click",y(this,D)),this.requestUpdate("open"))}};$=new WeakMap;T=new WeakMap;W=new WeakMap;O=new WeakMap;B=new WeakMap;L=new WeakMap;H=new WeakSet;gt=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",y(this,F)),t==null||t.setAttribute("aria-haspopup","dialog")}};F=new WeakMap;D=new WeakMap;b.styles=[Ge];b.styleExpressionBaseSelector="dialog";f([g({type:Boolean,reflect:!0})],b.prototype,"open",2);f([g()],b.prototype,"heading",2);f([g()],b.prototype,"variant",2);f([g()],b.prototype,"placement",2);f([g({type:Boolean})],b.prototype,"scrollable",2);f([rt("dialog")],b.prototype,"_elDialog",2);f([rt('slot[name="trigger"]')],b.prototype,"_elTriggerSlot",2);f([N("open")],b.prototype,"_handleOpenChange",1);b=f([ot("gds-dialog",{dependsOn:[lt,dt,ae,ct,ge]}),nt()],b);const We=V`
  /* Host & Container */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-book-s);
    color: var(--gds-sys-color-content-neutral-01);
    text-align: left;
    --table-border: var(--gds-sys-space-5xs) solid
      var(--gds-sys-color-border-subtle-01);
    --_table-height: 80vh;
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
    overflow-y: auto;
    max-height: var(--_table-height);
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

  thead {
    position: sticky;
    top: 2px;
    z-index: 10;
  }

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

  /* Visually hidden */
  .visually-hidden {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  /* Scroll driven animation */
  @supports (animation-timeline: scroll()) {
    /* Vertical scroll on rows */
    tbody tr {
      animation-name: ROW_ANIMATION_VERTICAL, ROW_ANIMATION_VERTICAL;
      animation-fill-mode: both;
      animation-timing-function: ease-in-out;
      animation-direction: normal, reverse;
      animation-timeline: view(block);
      animation-range: entry, exit;
    }

    @keyframes ROW_ANIMATION_VERTICAL {
      0% {
        opacity: 0;
        filter: blur(12px);
        translate: 0 12px;
      }
    }

    /* Horizontal scroll on cells */
    tbody td .cell-content,
    thead th .column-header {
      animation-name: CELL_ANIMATION_HORIZONTAL, CELL_ANIMATION_HORIZONTAL;
      animation-fill-mode: both;
      animation-timing-function: ease-in-out;
      animation-direction: normal, reverse;
      animation-timeline: view(inline);
      animation-range: entry, exit;
    }

    @keyframes CELL_ANIMATION_HORIZONTAL {
      0% {
        opacity: 0.8;
        filter: blur(12px);
        translate: 4px 0px;
      }
    }

    @media (prefers-reduced-transparency: no-preference) {
      thead tr th {
        background: transparent;
      }
    }

    thead tr {
      box-shadow: var(--gds-sys-shadow-s-01), var(--gds-sys-shadow-s-02);
      border-radius: var(--gds-sys-radius-s);
      backdrop-filter: blur(12px);
      background: color-mix(
        in srgb,
        var(--gds-sys-color-l2-neutral-01),
        transparent 20%
      );
    }
  }

  @supports not (animation-timeline: scroll()) {
    tbody tr {
      will-change: opacity, filter, translate;
      transition: all 842ms cubic-bezier(0.22, 0.61, 0.36, 1);

      @starting-style {
        opacity: 0;
        filter: blur(20px);
        translate: 0 10px;
      }
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

  /* Scrollbar */
  .data {
    --_scrollbar-color-thumb: var(--gds-sys-color-l3-neutral-01);
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
`,Be=[ie,re,We],He=[lt,dt,xe,ce,he,de,ke,Se,Ce,pe,$e,ct,ue,ve,_e,we,me,ye,be,fe],Qe={compact:{button:"small",input:"small",dropdown:"small",badge:"small"},comfortable:{button:"small",input:"small",dropdown:"small",badge:"small"},spacious:{button:"medium",input:"large",dropdown:"medium",badge:"default"}};var qe=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,ut=t=>{throw TypeError(t)},c=(t,e,s,i)=>{for(var o=i>1?void 0:i?Ve(e,s):e,l=t.length-1,p;l>=0;l--)(p=t[l])&&(o=(i?p(e,s,o):p(o))||o);return i&&o&&qe(e,s,o),o},K=(t,e,s)=>e.has(t)||ut("Cannot "+s),u=(t,e,s)=>(K(t,e,"read from private field"),s?s.call(t):e.get(t)),M=(t,e,s)=>e.has(t)?ut("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),at=(t,e,s,i)=>(K(t,e,"write to private field"),e.set(t,s),s),r=(t,e,s)=>(K(t,e,"access private method"),s),S,Y,G,a,C,mt,R,yt,Q,bt,k,q,E,vt,ft,wt,_t,xt,kt,$t,St,Ct,Et,At,zt,It,Tt,X,Dt,Gt,Mt,Ot,Lt,jt,Nt,Rt,Z,Pt,Wt,Bt,Ht,Qt,qt,J,tt,A;let d=class extends it{constructor(){super(...arguments),M(this,a),M(this,S,{}),M(this,Y,300*1e3),M(this,G,new Map),this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){at(this,S,{}),r(this,a,k).call(this)}_onColumnsChange(){at(this,S,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.map(t=>t.key))}}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return n`
      <div class="${_(t)}">
        ${[r(this,a,_t).call(this),w(this._error,()=>r(this,a,Lt).call(this),()=>w(this._rowsState.length===0&&!this._loading,()=>r(this,a,jt).call(this),()=>r(this,a,Ot).call(this))),r(this,a,Nt).call(this)]}
      </div>
    `}clearSelection(){r(this,a,tt).call(this),r(this,a,A).call(this)}selectAll(){r(this,a,J).call(this),r(this,a,A).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this._rowsState.length);this._selected=new Set(e),r(this,a,A).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}};S=new WeakMap;Y=new WeakMap;G=new WeakMap;a=new WeakSet;C=function(){return Qe[this.density]};mt=function(){return this._selected.size>0};R=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};yt=function(){return u(this,a,mt)&&!u(this,a,R)};Q=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};bt=function(t){return Date.now()-t.timestamp<u(this,Y)};k=async function(){if(this.data){if(!this.nocache){const t=r(this,a,Q).call(this),e=u(this,S)[t];if(e&&r(this,a,bt).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._loaded=!1;return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=r(this,a,Q).call(this);u(this,S)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._loaded=!1,this.dispatchEvent(new CustomEvent("gds-table-data-loaded",{detail:t,bubbles:!0}))}catch(t){this._error=t,this.dispatchEvent(new CustomEvent("gds-table-data-error",{detail:t,bubbles:!0}))}finally{this._loading=!1}}};q=function(t){var e;if(!t)return null;if(!u(this,G).has(t)){const s=this.querySelector(`template[name="${t}"]`);u(this,G).set(t,s)}return(e=u(this,G).get(t))==null?void 0:e.content.cloneNode(!0)};E=function(t,e){if(!t)return null;if(Array.isArray(t))return t.map(i=>r(this,a,E).call(this,i,e));const s=i=>typeof i=="function"?i(e):i;switch(t.type){case"badge":{const i=s(t.variant)||"information",o=s(t.size)||u(this,a,C).badge;return n`
          <gds-badge size="${o}" variant="${i}">
            ${s(t.value)}
          </gds-badge>
        `}case"image":{const i=s(t.src);if(!i)return null;const o=s(t.width)||"24px",l=s(t.height)||"24px",p=s(t["border-radius"])||"max",m=s(t["object-fit"])||"cover",z=s(t.alt)||"";return n`
          <gds-img
            src="${i}"
            alt="${z}"
            width="${o}"
            height="${l}"
            border-radius="${p}"
            object-fit="${m}"
            object-position="center"
          ></gds-img>
        `}case"button":{const i=s(t.size)||u(this,a,C).button,o=s(t.variant),l=s(t.rank),p=s(t.label),m=s(t.template),z=r(this,a,q).call(this,m);return n`
          <gds-button
            size="${i}"
            variant="${o||"neutral"}"
            rank="${l||"secondary"}"
            @click="${Vt=>{Vt.stopPropagation(),t.onClick(e)}}"
          >
            ${[p,z]}
          </gds-button>
        `}case"link":{const i=s(t.href);if(!i)return null;const o=s(t.label),l=s(t.target),p=s(t.download),m=s(t.template),z=r(this,a,q).call(this,m),et=[o,z];return n`
          <gds-link
            href=${j(i)}
            target=${j(l)}
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
        `}case"formatted-number":{const i=s(t.value),o=Ie[t.format||"decimalsAndThousands"];return o(i,t.locale,t.currency)}case"formatted-account":{const i=s(t.value),o=ze[t.format||"seb-account"];return o(i)}case"formatted-date":{const i=s(t.value),o=Ae[t.format||"dateLong"];return o(i,t.locale)}default:return null}};vt=function(t,e){const{cell:s}=e,i=r(this,a,E).call(this,s==null?void 0:s.value,t)??t[e.key],o=e.justify?n`<span>${i}</span>`:i,l=this._isMobile&&this.responsive,p=l?n`<span class="column-label" aria-hidden="true"
          >${e.label}:</span
        >`:null,m=l?`${e.label}: `:"";return n`
      <div class="cell-content" aria-label="${m}">
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
                @input=${r(this,a,Rt)}
                @gds-input-cleared=${r(this,a,Z)}
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
                @change=${r(this,a,Ht)}
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
        @click=${t.sortable?()=>r(this,a,Pt).call(this,t.key):null}
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
    `};kt=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||h("Actions"),e=_({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return n`
      <th class="${e}">
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};$t=function(){return this.selectable?n`
      <th class="checkbox-cell">
        ${r(this,a,X).call(this,{checked:u(this,a,R),indeterminate:u(this,a,yt),ariaLabel:h("Select all rows"),onToggle:()=>r(this,a,Qt).call(this,{})})}
      </th>
    `:null};St=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>r(this,a,xt).call(this,t))};Ct=function(){return n`
      <thead>
        <tr>
          ${[r(this,a,$t).call(this),r(this,a,St).call(this),r(this,a,kt).call(this)]}
        </tr>
      </thead>
    `};Et=function(t,e){const s=_({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),i=De({"--cell-width":e.width});return n`
      <td style=${i} class=${s}>
        ${r(this,a,vt).call(this,t,e)}
      </td>
    `};At=function(t){if(!this.selectable)return null;const e=`${h("Select row")} ${t+1}`;return n`
      <td class="checkbox-cell">
        ${r(this,a,X).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>r(this,a,qt).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
      </td>
    `};zt=function(t){return this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>r(this,a,Et).call(this,t,e))};It=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return n`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=r(this,a,E).call(this,this.actions.cell,t),i=_({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return n`
      <td class="${i}">
        <div class="cell-content">${s}</div>
      </td>
    `};Tt=function(t,e){return n`
      <tr
        class=${_({selected:this._selected.has(e),loading:this._loading})}
      >
        ${[r(this,a,At).call(this,e),r(this,a,zt).call(this,t),r(this,a,It).call(this,t,e)]}
      </tr>
    `};X=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:i,onToggle:o}){const l=m=>{m.stopPropagation(),!s&&o()};return n`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${i}
        @click=${l}
        @keydown=${m=>{(m.key===" "||m.key==="Enter")&&(m.preventDefault(),l(m))}}
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
        ${Ee({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};Dt=function(){return n`
      <div class="cell-content">
        <span class="skeleton skeleton-text"></span>
      </div>
    `};Gt=function(t){return n`
      <tr class="skeleton-row">
        ${w(this.selectable,()=>n`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(()=>n` <td>${r(this,a,Dt).call(this)}</td> `)}
        ${w(this.actions,()=>n`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};Mt=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,s)=>r(this,a,Gt).call(this,s));return n`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return n`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>r(this,a,Tt).call(this,t,e))}
      </tbody>
    `};Ot=function(){const t=_({responsive:this.responsive,data:!0}),e=`${h("Data table with")} ${this._total} ${h("rows")}`;return n`
      <div class=${t}>
        <table aria-label="${e}">
          <caption class="visually-hidden">
            ${e}
          </caption>
          ${r(this,a,Ct).call(this)} ${r(this,a,Mt).call(this)}
        </table>
      </div>
    `};Lt=function(){return n`
      <div class="data">
        <gds-card variant="tertiary">
          <slot name="error">
            <gds-text tag="p">${h("Error loading data")}</gds-text>
            <gds-button
              size="small"
              label="${h("Retry loading data")}"
              @click=${()=>r(this,a,k).call(this)}
            >
              ${h("Retry")}
            </gds-button>
          </slot>
        </gds-card>
      </div>
    `};jt=function(){return this._view.searchQuery.length>0?n`
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
                @click=${r(this,a,Z)}
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
    `};Nt=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),s=`${t} - ${e} ${h("of")} ${this._total}`;return n`
      <gds-pagination
        .page=${this._view.page}
        .rows=${this._view.rows}
        .options=${this.options}
        .total=${this._total}
        .density=${this.density}
        .label=${s}
        @gds-page-change=${r(this,a,Wt)}
        @gds-rows-change=${r(this,a,Bt)}
        width="100%"
      >
      </gds-pagination>
    `};Rt=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await r(this,a,k).call(this)};Z=async function(){this._view={...this._view,searchQuery:"",page:1},await r(this,a,k).call(this)};Pt=async function(t){this._view={...this._view,sortColumn:t,sortDirection:this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc",page:1},await r(this,a,k).call(this)};Wt=async function(t){this._view={...this._view,page:t.detail.page},await r(this,a,k).call(this)};Bt=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},await r(this,a,k).call(this)};Ht=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};Qt=function(t){u(this,a,R)?r(this,a,tt).call(this):r(this,a,J).call(this),r(this,a,A).call(this)};qt=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),r(this,a,A).call(this),this.requestUpdate()};J=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};tt=function(){this._selected.clear(),this.requestUpdate()};A=function(){this.dispatchEvent(new CustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0}))};d.styles=Be;c([g({type:Array})],d.prototype,"options",2);c([g({type:Number})],d.prototype,"page",2);c([g({type:Number})],d.prototype,"rows",2);c([g({type:Array})],d.prototype,"columns",2);c([g()],d.prototype,"data",2);c([g({reflect:!1})],d.prototype,"density",2);c([g({type:Boolean,reflect:!1})],d.prototype,"selectable",2);c([g({type:Boolean,reflect:!1})],d.prototype,"responsive",2);c([g({type:Boolean,reflect:!1})],d.prototype,"plain",2);c([g({type:Boolean,reflect:!1})],d.prototype,"searchable",2);c([g({type:Boolean,reflect:!1})],d.prototype,"settings",2);c([g({type:Boolean,reflect:!1})],d.prototype,"striped",2);c([g()],d.prototype,"actions",2);c([g({type:Boolean,reflect:!1})],d.prototype,"nocache",2);c([g()],d.prototype,"dataLoadKey",2);c([oe({...ne,property:"--_table-height",selector:".data"})],d.prototype,"height",2);c([x()],d.prototype,"_isMobile",2);c([le("(max-width: 768px)")],d.prototype,"_handleMobile",1);c([x()],d.prototype,"_view",2);c([x()],d.prototype,"_loaded",2);c([x()],d.prototype,"_loading",2);c([x()],d.prototype,"_rowsState",2);c([x()],d.prototype,"_total",2);c([x()],d.prototype,"_selected",2);c([x()],d.prototype,"_error",2);c([N("dataLoadKey"),N("data")],d.prototype,"_onDataChange",1);c([N("columns")],d.prototype,"_onColumnsChange",1);d=c([nt(),ot("gds-table",{dependsOn:He})],d);d.define();export{b as G};
