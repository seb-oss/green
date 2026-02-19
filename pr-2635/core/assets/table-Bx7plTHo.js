import{i as V,ab as Jt,a0 as Zt,a4 as te,aq as ee,J as it,b as f,a as _,o as O,O as u,E as se,h as l,ar as ae,n as p,d as rt,a8 as R,g as ot,P as lt,G as ie,$ as re,X as oe,Z as le,af as ne,t as de,ai as ce,s as he,ag as pe,I as x}from"./iframe-DO2Efq0a.js";import{l as nt}from"./localized-decorator-B3_Tyg0A.js";import{w as ue}from"./popover.component-B1ZskfVI.js";import{a as ge}from"./dropdown.component-DtKssZIF.js";import"./menu-heading.component-CdwPHfrX.js";import{a as me,G as be}from"./context-menu.component-Dn2BcXgn.js";import"./alert.component-CAyaxDhU.js";import{G as ye}from"./badge.component-B2sieKXv.js";import"./blur.component-Cr5-OVRK.js";import"./breadcrumb.component-TZXaItPJ.js";import"./calendar.component-CJj5H8hK.js";import{G as dt}from"./card.component-6kHHVfbR.js";import"./card-linked.component-CM29zq3l.js";import"./checkbox-group.component-zyARM5He.js";import"./coachmark.component-B2rlU3tU.js";import"./datepicker.component-DNDcDmz6.js";import"./details.component-CzH6I7a9.js";import{G as ct}from"./flex.component-BaAOsURn.js";import{I as ve,a as fe,b as we,c as _e,d as xe}from"./zoom-out.component-CosBfZEi.js";import{G as ke}from"./divider.component-Bzn8WpIq.js";import"./signal.component-D8e0NR9E.js";import"./filter-chips.component-CuP81XaB.js";import"./summary.component-Db_HMmxc.js";import"./grouped-list.component-D_djZJbZ.js";import"./icon.component-BSyRi1a6.js";import"./arrow-down.component-Bwy88fRv.js";import"./arrow-left.component-DArh1neq.js";import"./arrow-right.component-Ch0PgYYk.js";import"./arrow-rotate-counter-clockwise.component-DT-dqMnA.js";import"./arrow-up.component-BiGWEDPQ.js";import"./sun.component-DsKHDk7N.js";import"./star.component-Dd1dCWai.js";import"./bubbles.component-CfvYrcfn.js";import"./calender-add.component-DTtvm-6V.js";import"./chain-link-CJyUwA86.js";import"./checkmark.component-BlXPbcxI.js";import"./chevron-bottom.component-CH1jKCk1.js";import"./chevron-right-small.component-BnBn2i71.js";import"./chevron-left.component-C_UIhjV0.js";import"./chevron-right.component-llmc3dmH.js";import"./chevron-top.component-CfJmoxXr.js";import"./circle-check.component-BYZHCMDF.js";import"./triangle-exclamation.component-DP4AXIhE.js";import"./circles-three.component-CsX2jnsg.js";import"./cloudy-sun.component-GVljD8NA.js";import"./credit-card.component-D4E0I160.js";import{I as $e}from"./cross-small.component-BhdCM8xS.js";import{I as Se}from"./dot-grid-one-horizontal-C4stKicd.js";import"./folder.component-D4-Gmav-.js";import{I as Ce}from"./magnifying-glass.component-CC-Ku9yA.js";import{I as Ee}from"./minus-small.component-jW79gOmY.js";import"./people-profile.component-DJkb7kJM.js";import"./push.component-BQqS5QKu.js";import"./rocket.component-D7OaOQD1.js";import"./square-grid-circle.component-CGyiipit.js";import{G as ze}from"./img.component-BQjImeKr.js";import{G as De}from"./input.component-CB1kDd6z.js";import{G as Te}from"./link.component-CpgaCkfX.js";import"./mask.component-F5CAh-Kr.js";import"./menu-button.component-Dm3Fx9We.js";import{G as Ge}from"./pagination-C5PLCksR.js";import"./radio-group.component-BHkw0KSz.js";import"./rich-text.component-BAiv4AWC.js";import"./segmented-control-Bw5_1D-W.js";import"./sensitive-number.component-D57HjxjP.js";import"./sensitive-date.component-BF-cJ3Xu.js";import"./sensitive-account.component-Bp_S5CMn.js";import"./select.component-Dp79qEMn.js";import"./spinner.component-bIFM3WCK.js";import{G as Ae}from"./text-f8tR8ZPQ.js";import"./textarea.component-C3IzsGY9.js";import"./video.component-D13J6Ll0.js";import"./card-pattern-01.component-WrPpsy5p.js";import{c as Le}from"./rbcb-toggle.template-m5MH9vvK.js";import{d as Ie}from"./formatted-date.component-Yvkr4oj0.js";import{a as Me}from"./formatted-account-DOSyWcbK.js";import{n as je}from"./formatted-number-BAUX2xYW.js";const Pe=V`
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
`,N=new Set;function Oe(){Jt.instance.injectGlobalStyles("dialog-scroll-lock",V`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Re(t){if(N.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=We()+Ne();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function st(t){N.delete(t),N.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function We(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Ne(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var Be=Object.defineProperty,He=Object.getOwnPropertyDescriptor,ht=t=>{throw TypeError(t)},w=(t,e,s,i)=>{for(var o=i>1?void 0:i?He(e,s):e,d=t.length-1,h;d>=0;d--)(h=t[d])&&(o=(i?h(e,s,o):h(o))||o);return i&&o&&Be(e,s,o),o},F=(t,e,s)=>e.has(t)||ht("Cannot "+s),b=(t,e,s)=>(F(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?ht("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),T=(t,e,s,i)=>(F(t,e,"write to private field"),e.set(t,s),s),qe=(t,e,s)=>(F(t,e,"access private method"),s),$,G,B,M,H,j,q,pt,U,A;Oe();let y=class extends Zt(te(ee(it))){constructor(){super(...arguments),v(this,q),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,v(this,$),v(this,G,!1),v(this,B,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!b(this,M).call(this,s))return;this.close(s);return}this.close(s)}),v(this,M,t=>b(this,j).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),v(this,H,t=>b(this,j).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),v(this,j,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),v(this,U,t=>{this.show("slotted-trigger")}),v(this,A,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect(),d=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,h="click-outside";!d&&!b(this,G)&&b(this,M).call(this,h)&&this.close(h)}T(this,G,!1)})}show(t){this.open=!0,t&&b(this,H).call(this,t)}close(t){T(this,$,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),st(this)}render(){return l`<slot
        name="trigger"
        @slotchange=${qe(this,q,pt)}
      ></slot>
      ${f(this.open,()=>l`<dialog
            closedby="closerequest"
            @close=${b(this,B)}
            class=${_({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${O(this.heading)}
          >
            <gds-card
              class="card"
              padding="xl"
              variant="secondary"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
              border-width="0"
              @mousedown=${()=>T(this,G,!0)}
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="tertiary"
                    size="small"
                    label=${u("Close")}
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
                  overflow=${O(this.scrollable)?"auto":se}
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
                      >${u("Cancel")}</gds-button
                    >
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}>
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(T(this,$,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),Re(this),this.removeEventListener("click",b(this,A)),requestAnimationFrame(()=>this.addEventListener("click",b(this,A))),ae&&((s=this._elDialog)==null||s.focus())})):(T(this,$,b(this,$)||"prop-change"),(t=this._elDialog)==null||t.close(b(this,$)),st(this),document.removeEventListener("click",b(this,A)),this.requestUpdate("open"))}};$=new WeakMap;G=new WeakMap;B=new WeakMap;M=new WeakMap;H=new WeakMap;j=new WeakMap;q=new WeakSet;pt=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",b(this,U)),t==null||t.setAttribute("aria-haspopup","dialog")}};U=new WeakMap;A=new WeakMap;y.styles=[Pe];y.styleExpressionBaseSelector="dialog";w([p({type:Boolean,reflect:!0})],y.prototype,"open",2);w([p()],y.prototype,"heading",2);w([p()],y.prototype,"variant",2);w([p()],y.prototype,"placement",2);w([p({type:Boolean})],y.prototype,"scrollable",2);w([rt("dialog")],y.prototype,"_elDialog",2);w([rt('slot[name="trigger"]')],y.prototype,"_elTriggerSlot",2);w([R("open")],y.prototype,"_handleOpenChange",1);y=w([ot("gds-dialog",{dependsOn:[lt,dt,ie,ct,ve]}),nt()],y);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut="important",Qe=" !"+ut,gt=re(class extends oe{constructor(t){var e;if(super(t),t.type!==le.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const d=typeof o=="string"&&o.endsWith(Qe);i.includes("-")||d?s.setProperty(i,d?o.slice(0,-11):o,d?ut:""):s[i]=o}}return ne}}),Ve=V`
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
`,Fe=[de,ce,Ve],Ue=[lt,dt,ke,ze,me,be,ge,De,Ge,Ae,ye,Te,ct,fe,$e,Ee,Ce,we,_e,xe,Se],Ye={compact:{button:"small",input:"small",dropdown:"small",badge:"small"},comfortable:{button:"small",input:"small",dropdown:"small",badge:"small"},spacious:{button:"medium",input:"large",dropdown:"medium",badge:"default"}};var Ke=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,mt=t=>{throw TypeError(t)},c=(t,e,s,i)=>{for(var o=i>1?void 0:i?Xe(e,s):e,d=t.length-1,h;d>=0;d--)(h=t[d])&&(o=(i?h(e,s,o):h(o))||o);return i&&o&&Ke(e,s,o),o},Y=(t,e,s)=>e.has(t)||mt("Cannot "+s),m=(t,e,s)=>(Y(t,e,"read from private field"),s?s.call(t):e.get(t)),I=(t,e,s)=>e.has(t)?mt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),at=(t,e,s,i)=>(Y(t,e,"write to private field"),e.set(t,s),s),r=(t,e,s)=>(Y(t,e,"access private method"),s),S,K,L,a,C,bt,W,yt,Q,vt,k,P,E,ft,wt,_t,xt,kt,$t,St,Ct,Et,zt,Dt,Tt,Gt,At,X,Lt,It,Mt,jt,Pt,Ot,Rt,Wt,Nt,J,Bt,Ht,qt,Qt,Vt,Ft,Z,tt,z,Ut,Yt,Kt;let n=class extends it{constructor(){super(...arguments),I(this,a),I(this,S,{}),I(this,K,300*1e3),I(this,L,new Map),this.headlineTag="h2",this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="secondary",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){at(this,S,{}),r(this,a,k).call(this)}_onColumnsChange(){at(this,S,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(t=>t.visible!==!1).map(t=>t.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{r(this,a,Ut).call(this)})}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return l`
      <div class="${_(t)}">
        ${[r(this,a,Wt).call(this),r(this,a,xt).call(this),f(this._error,()=>r(this,a,Pt).call(this),()=>f(this._rowsState.length===0&&!this._loading,()=>r(this,a,Ot).call(this),()=>r(this,a,jt).call(this))),r(this,a,Rt).call(this)]}
      </div>
    `}clearSelection(){r(this,a,tt).call(this),r(this,a,z).call(this)}selectAll(){r(this,a,Z).call(this),r(this,a,z).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this._rowsState.length);this._selected=new Set(e),r(this,a,z).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}};S=new WeakMap;K=new WeakMap;L=new WeakMap;a=new WeakSet;C=function(){return Ye[this.density]};bt=function(){return this._selected.size>0};W=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};yt=function(){return m(this,a,bt)&&!m(this,a,W)};Q=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};vt=function(t){return Date.now()-t.timestamp<m(this,K)};k=async function(){if(this.data){if(!this.nocache){const t=r(this,a,Q).call(this),e=m(this,S)[t];if(e&&r(this,a,vt).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._loaded=!1;return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=r(this,a,Q).call(this);m(this,S)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:t,bubbles:!0})}catch(t){this._error=t,this.dispatchCustomEvent("gds-table-data-error",{detail:t,bubbles:!0})}finally{this._loading=!1}}};P=function(t){var e;if(!t)return null;if(!m(this,L).has(t)){const s=this.querySelector(`template[name="${t}"]`);m(this,L).set(t,s)}return(e=m(this,L).get(t))==null?void 0:e.content.cloneNode(!0)};E=function(t,e){if(!t)return null;if(Array.isArray(t))return t.map(i=>r(this,a,E).call(this,i,e));const s=i=>typeof i=="function"?i(e):i;switch(t.type){case"badge":{const i=s(t.variant)||"information",o=s(t.size)||m(this,a,C).badge;return l`
          <gds-badge size="${o}" variant="${i}">
            ${s(t.value)}
          </gds-badge>
        `}case"image":{const i=s(t.src);if(!i)return null;const o=s(t.width)||"24px",d=s(t.height)||"24px",h=s(t["border-radius"])||"max",g=s(t["object-fit"])||"cover",D=s(t.alt)||"";return l`
          <gds-img
            src="${i}"
            alt="${D}"
            width="${o}"
            height="${d}"
            border-radius="${h}"
            object-fit="${g}"
            object-position="center"
          ></gds-img>
        `}case"icon":{const i=s(t.template),o=s(t.size),d=s(t.color),h=r(this,a,P).call(this,i);if(!h)return null;if(h instanceof DocumentFragment){const g=h.firstElementChild;g&&(o&&g.setAttribute("size",o),d&&g.setAttribute("color",d))}return h}case"button":{const i=s(t.size)||m(this,a,C).button,o=s(t.variant),d=s(t.rank),h=s(t.label),g=s(t.template),D=r(this,a,P).call(this,g);return l`
          <gds-button
            size="${i}"
            variant="${o||"neutral"}"
            rank="${d||"secondary"}"
            @click="${Xt=>{Xt.stopPropagation(),t.onClick(e)}}"
          >
            ${[h,D]}
          </gds-button>
        `}case"link":{const i=s(t.href);if(!i)return null;const o=s(t.label),d=s(t.target),h=s(t.download),g=s(t.template),D=r(this,a,P).call(this,g),et=[o,D];return l`
          <gds-link
            href=${O(i)}
            target=${O(d)}
            .download=${h}
            text-decoration="underline"
          >
            ${et}
          </gds-link>
        `}case"context-menu":{const i=t.items,o=m(this,a,C).button;return l`
          <gds-context-menu>
            <gds-button
              slot="trigger"
              size="${o}"
              rank="tertiary"
              label="${u("Actions")}"
            >
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            ${i.map(d=>{const h=s(d.label);return l`
                <gds-menu-item @click="${()=>d.onClick(e)}">
                  ${h}
                </gds-menu-item>
              `})}
          </gds-context-menu>
        `}case"formatted-number":{const i=s(t.value),o=je[t.format||"decimalsAndThousands"];return o(i,t.locale,t.currency,t.decimals)}case"formatted-account":{const i=s(t.value),o=Me[t.format||"seb-account"];return o(i)}case"formatted-date":{const i=s(t.value),o=Ie[t.format||"dateLong"];return o(i,t.locale)}default:return null}};ft=function(t,e){const{cell:s}=e;let i;e.value?i=e.value(t):s!=null&&s.value?i=r(this,a,E).call(this,s.value,t):i=t[e.key];const o=e.justify?l`<span>${i}</span>`:i,d=this._isMobile&&this.responsive,h=d?l`
          <span class="column-label" aria-hidden="true">
            ${e.label}:
          </span>
        `:null,g=d?`${e.label}: `:"";return l`
      <div class="cell-content" aria-label="${g}">
        ${[h,r(this,a,E).call(this,s==null?void 0:s.lead,t),o,r(this,a,E).call(this,s==null?void 0:s.trail,t)]}
      </div>
    `};wt=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;return e?s==="asc"?l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:l`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};_t=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};xt=function(){return this.plain||!r(this,a,_t).call(this)?null:l`
      <div class="header">
        <div class="lead">
          ${f(this.searchable,()=>l`
              <gds-input
                type="text"
                size="${m(this,a,C).input}"
                plain
                clearable
                label="${this.searchLabel||u("Search table")}"
                .value=${this._view.searchQuery}
                @input=${r(this,a,Nt)}
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
          ${f(this.settings,()=>l`
              <gds-dropdown
                multiple
                plain
                size="${m(this,a,C).dropdown}"
                label="${u("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${r(this,a,Qt)}
              >
                <span slot="trigger">${u("Columns")}</span>
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
    `};kt=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;let i=t.label;if(t.sortable)if(e){const h=s==="asc"?u("ascending"):u("descending");i=`${t.label}, ${u("sorted")} ${h}`}else i=`${t.label}, ${u("sortable")}`;const o=_({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify,wrap:!!t.width}),d=gt({"--cell-width":t.width});return l`
      <th
        class=${o}
        style=${d}
        aria-sort="${e?s==="asc"?"ascending":"descending":"none"}"
        @click=${t.sortable?()=>r(this,a,Bt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${i}">
            ${t.label}
          </span>
          ${f(t.sortable,()=>l`
              <span class="sort-icon">${r(this,a,wt).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};$t=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||u("Actions"),e=_({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return l`
      <th class="${e}">
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};St=function(){return this.selectable?l`
      <th class="checkbox-cell">
        ${r(this,a,X).call(this,{checked:m(this,a,W),indeterminate:m(this,a,yt),ariaLabel:u("Select all rows"),onToggle:()=>r(this,a,Vt).call(this,{})})}
      </th>
    `:null};Ct=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>r(this,a,kt).call(this,t))};Et=function(){return l`
      <thead>
        <tr>
          ${[r(this,a,St).call(this),r(this,a,Ct).call(this),r(this,a,$t).call(this)]}
        </tr>
      </thead>
    `};zt=function(t,e){const s=_({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),i=gt({"--cell-width":e.width});return l`
      <td style=${i} class=${s}>
        ${r(this,a,ft).call(this,t,e)}
      </td>
    `};Dt=function(t){if(!this.selectable)return null;const e=`${u("Select row")} ${t+1}`;return l`
      <td class="checkbox-cell">
        ${r(this,a,X).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>r(this,a,Ft).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
      </td>
    `};Tt=function(t){return this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>r(this,a,zt).call(this,t,e))};Gt=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return l`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=r(this,a,E).call(this,this.actions.cell,t),i=_({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return l`
      <td class="${i}">
        <div class="cell-content">${s}</div>
      </td>
    `};At=function(t,e){return l`
      <tr
        class=${_({selected:this._selected.has(e),loading:this._loading})}
      >
        ${[r(this,a,Dt).call(this,e),r(this,a,Tt).call(this,t),r(this,a,Gt).call(this,t,e)]}
      </tr>
    `};X=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:i,onToggle:o}){const d=g=>{g.stopPropagation(),!s&&o()};return l`
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
        ${Le({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};Lt=function(t){const s=this._isMobile&&this.responsive?l`<span class="skeleton skeleton-text"></span>`:null;return l`
      <div class="cell-content">
        ${s}
        <span class="skeleton skeleton-text"></span>
      </div>
    `};It=function(t){return l`
      <tr class="skeleton-row">
        ${f(this.selectable,()=>l`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>l`<td>${r(this,a,Lt).call(this,e)}</td>`)}
        ${f(this.actions,()=>l`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};Mt=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,s)=>r(this,a,It).call(this,s));return l`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return l`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>r(this,a,At).call(this,t,e))}
      </tbody>
    `};jt=function(){const t=_({responsive:this.responsive,data:!0,[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),e=`${this.summary?this.summary+", ":""}${u("Data table with")} ${this._total} ${u("rows")}`;return l`
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
          <gds-text tag="p">${u("Error loading data")}</gds-text>
          <gds-button
            size="small"
            label="${u("Retry loading data")}"
            @click=${()=>r(this,a,k).call(this)}
          >
            ${u("Retry")}
          </gds-button>
        </slot>
      </gds-card>
    `};Ot=function(){return this._view.searchQuery.length>0?l`
        <gds-card variant="secondary" border-radius="m">
          <slot name="no-results">
            <gds-flex flex-direction="column" align-items="flex-start" gap="s">
              <gds-text tag="p" font="heading-s">
                ${u("No results found")}
              </gds-text>
              <gds-text tag="p" font="detail-book-s">
                ${u("No results for")} "${this._view.searchQuery}"
              </gds-text>
              <gds-button
                size="small"
                label="${u("Clear search for")} ${this._view.searchQuery}"
                @click=${r(this,a,J)}
              >
                ${u("Clear search")}
              </gds-button>
            </gds-flex>
          </slot>
        </gds-card>
      `:l`
      <gds-card variant="secondary" border-radius="m">
        <slot name="empty">
          <gds-text tag="p" font="heading-s">
            ${u("No data available")}
          </gds-text>
        </slot>
      </gds-card>
    `};Rt=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),s=`${t}–${e} ${u("of")} ${this._total}`;return l`
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
    `};Wt=function(){if(this.headline||this.summary)return l`
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
        ${f(this.searchable||this.settings,()=>l`<gds-divider color="subtle-01"></gds-divider>`,()=>l``)}
      `};Nt=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await r(this,a,k).call(this)};J=async function(){this._view={...this._view,searchQuery:"",page:1},await r(this,a,k).call(this)};Bt=async function(t){const e=this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc";this._view={...this._view,sortColumn:t,sortDirection:e,page:1},this.dispatchCustomEvent("gds-sort-change",{detail:{sortColumn:t,sortDirection:e},bubbles:!0}),await r(this,a,k).call(this)};Ht=async function(t){this._view={...this._view,page:t.detail.page},this.dispatchCustomEvent("gds-page-change",{detail:t.detail,bubbles:!0}),await r(this,a,k).call(this)};qt=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},this.dispatchCustomEvent("gds-rows-change",{detail:t.detail,bubbles:!0}),await r(this,a,k).call(this)};Qt=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};Vt=function(t){m(this,a,W)?r(this,a,tt).call(this):r(this,a,Z).call(this),r(this,a,z).call(this)};Ft=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),r(this,a,z).call(this),this.requestUpdate()};Z=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};tt=function(){this._selected.clear(),this.requestUpdate()};z=function(){this.dispatchCustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0})};Ut=function(){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".data");if(!t)return;const e=()=>{r(this,a,Yt).call(this,t),r(this,a,Kt).call(this,t)};t.addEventListener("scroll",e),e()};Yt=function(t){const{scrollTop:e}=t;e>0?t.classList.add("scrolled"):t.classList.remove("scrolled")};Kt=function(t){const{scrollLeft:e,scrollWidth:s,clientWidth:i}=t,o=s-i;e<=0?(t.classList.add("scrolled-x-start"),t.classList.remove("scrolled-x-middle","scrolled-x-end")):e>=o-1?(t.classList.add("scrolled-x-end"),t.classList.remove("scrolled-x-start","scrolled-x-middle")):(t.classList.add("scrolled-x-middle"),t.classList.remove("scrolled-x-start","scrolled-x-end"))};n.styles=Fe;c([p()],n.prototype,"headline",2);c([p({attribute:"headline-tag",type:String,reflect:!0})],n.prototype,"headlineTag",2);c([p()],n.prototype,"summary",2);c([p({attribute:"search-label",type:String})],n.prototype,"searchLabel",2);c([p({type:Array})],n.prototype,"options",2);c([p({type:Number})],n.prototype,"page",2);c([p({type:Number})],n.prototype,"rows",2);c([p({type:Array})],n.prototype,"columns",2);c([p()],n.prototype,"data",2);c([p({reflect:!1})],n.prototype,"density",2);c([p({type:Boolean,reflect:!1})],n.prototype,"selectable",2);c([p({type:Boolean,reflect:!1})],n.prototype,"responsive",2);c([p({type:Boolean,reflect:!1})],n.prototype,"plain",2);c([p({type:Boolean,reflect:!1})],n.prototype,"searchable",2);c([p({type:Boolean,reflect:!1})],n.prototype,"settings",2);c([p({type:Boolean,reflect:!1})],n.prototype,"striped",2);c([p()],n.prototype,"actions",2);c([p({type:Boolean,reflect:!1})],n.prototype,"nocache",2);c([p()],n.prototype,"dataLoadKey",2);c([he({...pe,property:"--_table-height",selector:".data"})],n.prototype,"height",2);c([p()],n.prototype,"variant",2);c([x()],n.prototype,"_isMobile",2);c([ue("(max-width: 768px)")],n.prototype,"_handleMobile",1);c([x()],n.prototype,"_view",2);c([x()],n.prototype,"_loaded",2);c([x()],n.prototype,"_loading",2);c([x()],n.prototype,"_rowsState",2);c([x()],n.prototype,"_total",2);c([x()],n.prototype,"_selected",2);c([x()],n.prototype,"_error",2);c([R("dataLoadKey"),R("data")],n.prototype,"_onDataChange",1);c([R("columns")],n.prototype,"_onColumnsChange",1);n=c([nt(),ot("gds-table",{dependsOn:Ue})],n);n.define();export{y as G};
