import{i as V,ap as Xt,a0 as Jt,a4 as Zt,aq as te,J as rt,b as _,a as w,o as O,O as p,E as ee,h as l,ar as se,n as u,d as it,a8 as R,g as ot,P as lt,G as ae,$ as re,X as ie,Z as oe,ae as le,t as ne,ah as de,s as ce,af as he,I as x}from"./iframe-Dq4KnV63.js";import{l as nt}from"./localized-decorator-C-CcTGIl.js";import{w as pe}from"./popover.component-BXSvquuo.js";import{a as ue}from"./dropdown.component-BQJIQk4G.js";import"./menu-heading.component-O3OLwpxh.js";import{a as ge,G as me}from"./context-menu.component-WxgPiGom.js";import"./alert.component-FWQHhAW3.js";import{G as be}from"./badge.component-CNs8ys8e.js";import"./blur.component-k9NACARh.js";import"./breadcrumb.component-DrTZUBPj.js";import"./calendar.component-hbGM7Tyb.js";import{G as dt}from"./card.component-C6G7l2lb.js";import"./card-linked.component-ClZZyfpf.js";import"./checkbox-group.component-CyoRrY3n.js";import"./coachmark.component-kChSxv2A.js";import"./datepicker.component-ZhHhcc5Q.js";import{G as ct}from"./flex.component-BnWYtpRs.js";import{I as ye,a as ve,b as fe,c as _e,d as we}from"./zoom-out.component-Cl11WCEa.js";import"./divider.component-85ZikNwJ.js";import"./signal.component-Bv3ERUUh.js";import"./filter-chips.component-BVlcLc3F.js";import"./summary.component-B5m7TxF9.js";import"./grouped-list.component-Cx3pfuHP.js";import"./icon.component-BHGNAYjw.js";import"./arrow-down.component-lhfI5W9f.js";import"./arrow-left.component-BAublpex.js";import"./arrow-right.component-DN0Bvdg4.js";import"./arrow-rotate-counter-clockwise.component-BxPHqIQX.js";import"./arrow-up.component-A2REoylv.js";import"./sun.component-DeFwoTnC.js";import"./star.component-JHe8O_Gs.js";import"./bubbles.component-eHZThO5E.js";import"./calender-add.component-S83r-a0T.js";import"./chain-link-CVv9gyPO.js";import"./checkmark.component-CwAdZ8TD.js";import"./chevron-bottom.component-1RkXHrgR.js";import"./chevron-right-small.component-jy8r08RQ.js";import"./chevron-left.component-BsMp0Eg8.js";import"./chevron-right.component-1gCppXRR.js";import"./chevron-top.component-BmITjpu6.js";import"./circle-check.component-C-isMSYY.js";import"./triangle-exclamation.component-DiM029I-.js";import"./circles-three.component-BzZpAswl.js";import"./cloudy-sun.component-BFW7l6UL.js";import"./credit-card.component-J9XJwPsG.js";import{I as xe}from"./cross-small.component-C3NNzybn.js";import{I as ke}from"./dot-grid-one-horizontal-DaxajgBj.js";import"./folder.component-BbS9GiZm.js";import{I as $e}from"./magnifying-glass.component-aC9j3eAq.js";import{I as Se}from"./minus-small.component-DjUfUada.js";import"./people-profile.component-DFjp-Rs5.js";import"./push.component-CuO0z4r7.js";import"./rocket.component-DCmDlBIJ.js";import"./square-grid-circle.component-Dd22RBGB.js";import{G as Ce}from"./img.component-DY9J3Lbr.js";import{G as Ee}from"./input.component-DFIKuMww.js";import{G as ze}from"./link.component-CLmhx7uQ.js";import"./mask.component-DQAszJDe.js";import"./menu-button.component-DrWwmJYV.js";import{G as De}from"./pagination-BG2aGacW.js";import"./radio-group.component-a_bEs9v9.js";import"./rich-text.component-CDQVnGEz.js";import"./segmented-control-BKSXHAR7.js";import"./sensitive-number.component-DJcmOQfh.js";import"./sensitive-date.component-Dwm2E8s4.js";import"./sensitive-account.component-CxeZhVPL.js";import"./select.component-D8q4Lmfs.js";import"./spinner.component-D22b8gQI.js";import{G as Ae}from"./text-x4kS8ocY.js";import"./textarea.component-DmP-R0WS.js";import"./video.component-BxdbhRMq.js";import"./card-pattern-01.component-DF1dsBCb.js";import{c as Te}from"./rbcb-toggle.template-Cbi5yTL0.js";import{d as Ge}from"./formatted-date.component-y__WxNKj.js";import{a as Ie}from"./formatted-account-CYwaHEfR.js";import{n as Le}from"./formatted-number-DcequT4z.js";const Me=V`
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
`,N=new Set;function je(){Xt.instance.injectGlobalStyles("dialog-scroll-lock",V`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Pe(t){if(N.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=Oe()+Re();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function st(t){N.delete(t),N.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Oe(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Re(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var We=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,ht=t=>{throw TypeError(t)},f=(t,e,s,r)=>{for(var o=r>1?void 0:r?Ne(e,s):e,n=t.length-1,h;n>=0;n--)(h=t[n])&&(o=(r?h(e,s,o):h(o))||o);return r&&o&&We(e,s,o),o},F=(t,e,s)=>e.has(t)||ht("Cannot "+s),b=(t,e,s)=>(F(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?ht("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),A=(t,e,s,r)=>(F(t,e,"write to private field"),e.set(t,s),s),Be=(t,e,s)=>(F(t,e,"access private method"),s),$,T,B,M,H,j,q,pt,U,G;je();let y=class extends Jt(Zt(te(rt))){constructor(){super(...arguments),v(this,q),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,v(this,$),v(this,T,!1),v(this,B,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!b(this,M).call(this,s))return;this.close(s);return}this.close(s)}),v(this,M,t=>b(this,j).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),v(this,H,t=>b(this,j).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),v(this,j,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),v(this,U,t=>{this.show("slotted-trigger")}),v(this,G,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect(),n=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,h="click-outside";!n&&!b(this,T)&&b(this,M).call(this,h)&&this.close(h)}A(this,T,!1)})}show(t){this.open=!0,t&&b(this,H).call(this,t)}close(t){A(this,$,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),st(this)}render(){return l`<slot
        name="trigger"
        @slotchange=${Be(this,q,pt)}
      ></slot>
      ${_(this.open,()=>l`<dialog
            closedby="closerequest"
            @close=${b(this,B)}
            class=${w({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
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
              @mousedown=${()=>A(this,T,!0)}
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
                  overflow=${O(this.scrollable)?"auto":ee}
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
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(A(this,$,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),Pe(this),this.removeEventListener("click",b(this,G)),requestAnimationFrame(()=>this.addEventListener("click",b(this,G))),se&&((s=this._elDialog)==null||s.focus())})):(A(this,$,b(this,$)||"prop-change"),(t=this._elDialog)==null||t.close(b(this,$)),st(this),document.removeEventListener("click",b(this,G)),this.requestUpdate("open"))}};$=new WeakMap;T=new WeakMap;B=new WeakMap;M=new WeakMap;H=new WeakMap;j=new WeakMap;q=new WeakSet;pt=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",b(this,U)),t==null||t.setAttribute("aria-haspopup","dialog")}};U=new WeakMap;G=new WeakMap;y.styles=[Me];y.styleExpressionBaseSelector="dialog";f([u({type:Boolean,reflect:!0})],y.prototype,"open",2);f([u()],y.prototype,"heading",2);f([u()],y.prototype,"variant",2);f([u()],y.prototype,"placement",2);f([u({type:Boolean})],y.prototype,"scrollable",2);f([it("dialog")],y.prototype,"_elDialog",2);f([it('slot[name="trigger"]')],y.prototype,"_elTriggerSlot",2);f([R("open")],y.prototype,"_handleOpenChange",1);y=f([ot("gds-dialog",{dependsOn:[lt,dt,ae,ct,ye]}),nt()],y);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut="important",He=" !"+ut,qe=re(class extends ie{constructor(t){var e;if(super(t),t.type!==oe.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const r=t[s];return r==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?s.removeProperty(r):s[r]=null);for(const r in e){const o=e[r];if(o!=null){this.ft.add(r);const n=typeof o=="string"&&o.endsWith(He);r.includes("-")||n?s.setProperty(r,n?o.slice(0,-11):o,n?ut:""):s[r]=o}}return le}}),Qe=V`
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
    /*  background-color: var(--gds-sys-color-l2-neutral-01); */
    background-color: var(--_table-row-striped);
  }

  .striped tbody tr td {
    border-color: transparent;
  }

  /* Header & Footer Layout */
  .headline {
    display: flex;
    flex-direction: column;
  }

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
`,Ve=[ne,de,Qe],Fe=[lt,dt,Ce,ge,me,ue,Ee,De,Ae,be,ze,ct,ve,xe,Se,$e,fe,_e,we,ke],Ue={compact:{button:"small",input:"small",dropdown:"small",badge:"small"},comfortable:{button:"small",input:"small",dropdown:"small",badge:"small"},spacious:{button:"medium",input:"large",dropdown:"medium",badge:"default"}};var Ke=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,gt=t=>{throw TypeError(t)},c=(t,e,s,r)=>{for(var o=r>1?void 0:r?Ye(e,s):e,n=t.length-1,h;n>=0;n--)(h=t[n])&&(o=(r?h(e,s,o):h(o))||o);return r&&o&&Ke(e,s,o),o},K=(t,e,s)=>e.has(t)||gt("Cannot "+s),m=(t,e,s)=>(K(t,e,"read from private field"),s?s.call(t):e.get(t)),L=(t,e,s)=>e.has(t)?gt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),at=(t,e,s,r)=>(K(t,e,"write to private field"),e.set(t,s),s),i=(t,e,s)=>(K(t,e,"access private method"),s),S,Y,I,a,C,mt,W,bt,Q,yt,k,P,E,vt,ft,_t,wt,xt,kt,$t,St,Ct,Et,zt,Dt,At,Tt,X,Gt,It,Lt,Mt,jt,Pt,Ot,Rt,Wt,J,Nt,Bt,Ht,qt,Qt,Vt,Z,tt,z,Ft,Ut,Kt;let d=class extends rt{constructor(){super(...arguments),L(this,a),L(this,S,{}),L(this,Y,300*1e3),L(this,I,new Map),this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="secondary",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){at(this,S,{}),i(this,a,k).call(this)}_onColumnsChange(){at(this,S,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(t=>t.visible!==!1).map(t=>t.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{i(this,a,Ft).call(this)})}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return l`
      <div class="${w(t)}">
        ${[i(this,a,Rt).call(this),i(this,a,wt).call(this),_(this._error,()=>i(this,a,jt).call(this),()=>_(this._rowsState.length===0&&!this._loading,()=>i(this,a,Pt).call(this),()=>i(this,a,Mt).call(this))),i(this,a,Ot).call(this)]}
      </div>
    `}clearSelection(){i(this,a,tt).call(this),i(this,a,z).call(this)}selectAll(){i(this,a,Z).call(this),i(this,a,z).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this._rowsState.length);this._selected=new Set(e),i(this,a,z).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}};S=new WeakMap;Y=new WeakMap;I=new WeakMap;a=new WeakSet;C=function(){return Ue[this.density]};mt=function(){return this._selected.size>0};W=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};bt=function(){return m(this,a,mt)&&!m(this,a,W)};Q=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};yt=function(t){return Date.now()-t.timestamp<m(this,Y)};k=async function(){if(this.data){if(!this.nocache){const t=i(this,a,Q).call(this),e=m(this,S)[t];if(e&&i(this,a,yt).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._loaded=!1;return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=i(this,a,Q).call(this);m(this,S)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._loaded=!1,this.dispatchEvent(new CustomEvent("gds-table-data-loaded",{detail:t,bubbles:!0}))}catch(t){this._error=t,this.dispatchEvent(new CustomEvent("gds-table-data-error",{detail:t,bubbles:!0}))}finally{this._loading=!1}}};P=function(t){var e;if(!t)return null;if(!m(this,I).has(t)){const s=this.querySelector(`template[name="${t}"]`);m(this,I).set(t,s)}return(e=m(this,I).get(t))==null?void 0:e.content.cloneNode(!0)};E=function(t,e){if(!t)return null;if(Array.isArray(t))return t.map(r=>i(this,a,E).call(this,r,e));const s=r=>typeof r=="function"?r(e):r;switch(t.type){case"badge":{const r=s(t.variant)||"information",o=s(t.size)||m(this,a,C).badge;return l`
          <gds-badge size="${o}" variant="${r}">
            ${s(t.value)}
          </gds-badge>
        `}case"image":{const r=s(t.src);if(!r)return null;const o=s(t.width)||"24px",n=s(t.height)||"24px",h=s(t["border-radius"])||"max",g=s(t["object-fit"])||"cover",D=s(t.alt)||"";return l`
          <gds-img
            src="${r}"
            alt="${D}"
            width="${o}"
            height="${n}"
            border-radius="${h}"
            object-fit="${g}"
            object-position="center"
          ></gds-img>
        `}case"icon":{const r=s(t.template),o=s(t.size),n=s(t.color),h=i(this,a,P).call(this,r);if(!h)return null;if(h instanceof DocumentFragment){const g=h.firstElementChild;g&&(o&&g.setAttribute("size",o),n&&g.setAttribute("color",n))}return h}case"button":{const r=s(t.size)||m(this,a,C).button,o=s(t.variant),n=s(t.rank),h=s(t.label),g=s(t.template),D=i(this,a,P).call(this,g);return l`
          <gds-button
            size="${r}"
            variant="${o||"neutral"}"
            rank="${n||"secondary"}"
            @click="${Yt=>{Yt.stopPropagation(),t.onClick(e)}}"
          >
            ${[h,D]}
          </gds-button>
        `}case"link":{const r=s(t.href);if(!r)return null;const o=s(t.label),n=s(t.target),h=s(t.download),g=s(t.template),D=i(this,a,P).call(this,g),et=[o,D];return l`
          <gds-link
            href=${O(r)}
            target=${O(n)}
            .download=${h}
            text-decoration="underline"
          >
            ${et}
          </gds-link>
        `}case"context-menu":{const r=t.items,o=m(this,a,C).button;return l`
          <gds-context-menu>
            <gds-button
              slot="trigger"
              size="${o}"
              rank="tertiary"
              label="${p("Actions")}"
            >
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            ${r.map(n=>{const h=s(n.label);return l`
                <gds-menu-item @click="${()=>n.onClick(e)}">
                  ${h}
                </gds-menu-item>
              `})}
          </gds-context-menu>
        `}case"formatted-number":{const r=s(t.value),o=Le[t.format||"decimalsAndThousands"];return o(r,t.locale,t.currency,t.decimals)}case"formatted-account":{const r=s(t.value),o=Ie[t.format||"seb-account"];return o(r)}case"formatted-date":{const r=s(t.value),o=Ge[t.format||"dateLong"];return o(r,t.locale)}default:return null}};vt=function(t,e){const{cell:s}=e;let r;e.value?r=e.value(t):s!=null&&s.value?r=i(this,a,E).call(this,s.value,t):r=t[e.key];const o=e.justify?l`<span>${r}</span>`:r,n=this._isMobile&&this.responsive,h=n?l`
          <span class="column-label" aria-hidden="true">
            ${e.label}:
          </span>
        `:null,g=n?`${e.label}: `:"";return l`
      <div class="cell-content" aria-label="${g}">
        ${[h,i(this,a,E).call(this,s==null?void 0:s.lead,t),o,i(this,a,E).call(this,s==null?void 0:s.trail,t)]}
      </div>
    `};ft=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;return e?s==="asc"?l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:l`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};_t=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};wt=function(){return this.plain||!i(this,a,_t).call(this)?null:l`
      <div class="header">
        <div class="lead">
          ${_(this.searchable,()=>l`
              <gds-input
                type="text"
                size="${m(this,a,C).input}"
                plain
                clearable
                label="${p("Search table")}"
                .value=${this._view.searchQuery}
                @input=${i(this,a,Wt)}
                @gds-input-cleared=${i(this,a,J)}
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
          ${_(this.settings,()=>l`
              <gds-dropdown
                multiple
                plain
                size="${m(this,a,C).dropdown}"
                label="${p("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${i(this,a,qt)}
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
    `};xt=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;let r=t.label;if(t.sortable)if(e){const n=s==="asc"?p("ascending"):p("descending");r=`${t.label}, ${p("sorted")} ${n}`}else r=`${t.label}, ${p("sortable")}`;const o=w({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify});return l`
      <th
        class=${o}
        aria-sort="${e?s==="asc"?"ascending":"descending":"none"}"
        @click=${t.sortable?()=>i(this,a,Nt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${r}">
            ${t.label}
          </span>
          ${_(t.sortable,()=>l`
              <span class="sort-icon">${i(this,a,ft).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};kt=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||p("Actions"),e=w({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return l`
      <th class="${e}">
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};$t=function(){return this.selectable?l`
      <th class="checkbox-cell">
        ${i(this,a,X).call(this,{checked:m(this,a,W),indeterminate:m(this,a,bt),ariaLabel:p("Select all rows"),onToggle:()=>i(this,a,Qt).call(this,{})})}
      </th>
    `:null};St=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>i(this,a,xt).call(this,t))};Ct=function(){return l`
      <thead>
        <tr>
          ${[i(this,a,$t).call(this),i(this,a,St).call(this),i(this,a,kt).call(this)]}
        </tr>
      </thead>
    `};Et=function(t,e){const s=w({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),r=qe({"--cell-width":e.width});return l`
      <td style=${r} class=${s}>
        ${i(this,a,vt).call(this,t,e)}
      </td>
    `};zt=function(t){if(!this.selectable)return null;const e=`${p("Select row")} ${t+1}`;return l`
      <td class="checkbox-cell">
        ${i(this,a,X).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>i(this,a,Vt).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
      </td>
    `};Dt=function(t){return this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>i(this,a,Et).call(this,t,e))};At=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return l`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=i(this,a,E).call(this,this.actions.cell,t),r=w({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return l`
      <td class="${r}">
        <div class="cell-content">${s}</div>
      </td>
    `};Tt=function(t,e){return l`
      <tr
        class=${w({selected:this._selected.has(e),loading:this._loading})}
      >
        ${[i(this,a,zt).call(this,e),i(this,a,Dt).call(this,t),i(this,a,At).call(this,t,e)]}
      </tr>
    `};X=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:r,onToggle:o}){const n=g=>{g.stopPropagation(),!s&&o()};return l`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${r}
        @click=${n}
        @keydown=${g=>{(g.key===" "||g.key==="Enter")&&(g.preventDefault(),n(g))}}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${t}
          .indeterminate=${e}
          ?disabled=${s}
          aria-hidden="true"
          @change=${n}
        />
        ${Te({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};Gt=function(t){const s=this._isMobile&&this.responsive?l`<span class="skeleton skeleton-text"></span>`:null;return l`
      <div class="cell-content">
        ${s}
        <span class="skeleton skeleton-text"></span>
      </div>
    `};It=function(t){return l`
      <tr class="skeleton-row">
        ${_(this.selectable,()=>l`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>l`<td>${i(this,a,Gt).call(this,e)}</td>`)}
        ${_(this.actions,()=>l`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};Lt=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,s)=>i(this,a,It).call(this,s));return l`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return l`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>i(this,a,Tt).call(this,t,e))}
      </tbody>
    `};Mt=function(){const t=w({responsive:this.responsive,data:!0,[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),e=`${p("Data table with")} ${this._total} ${p("rows")}`;return l`
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
            ${i(this,a,Ct).call(this)} ${i(this,a,Lt).call(this)}
          </table>
        </div>
      </gds-card>
    `};jt=function(){return l`
      <gds-card variant="secondary" border-radius="m">
        <slot name="error">
          <gds-text tag="p">${p("Error loading data")}</gds-text>
          <gds-button
            size="small"
            label="${p("Retry loading data")}"
            @click=${()=>i(this,a,k).call(this)}
          >
            ${p("Retry")}
          </gds-button>
        </slot>
      </gds-card>
    `};Pt=function(){return this._view.searchQuery.length>0?l`
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
                @click=${i(this,a,J)}
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
    `};Ot=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),s=`${t} - ${e} ${p("of")} ${this._total}`;return l`
      <gds-pagination
        .page=${this._view.page}
        .rows=${this._view.rows}
        .options=${this.options}
        .total=${this._total}
        .density=${this.density}
        .label=${s}
        @gds-page-change=${i(this,a,Bt)}
        @gds-rows-change=${i(this,a,Ht)}
        width="100%"
      >
      </gds-pagination>
    `};Rt=function(){if(this.headline||this.summary)return l`
        <div class="headline">
          <slot name="headline">
            <gds-text tag="h2">${this.headline}</gds-text>
            <gds-text tag="p" font="detail-book-s" color="neutral-02">
              ${this.summary}
            </gds-text>
          </slot>
        </div>
      `};Wt=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await i(this,a,k).call(this)};J=async function(){this._view={...this._view,searchQuery:"",page:1},await i(this,a,k).call(this)};Nt=async function(t){this._view={...this._view,sortColumn:t,sortDirection:this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc",page:1},await i(this,a,k).call(this)};Bt=async function(t){this._view={...this._view,page:t.detail.page},await i(this,a,k).call(this)};Ht=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},await i(this,a,k).call(this)};qt=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};Qt=function(t){m(this,a,W)?i(this,a,tt).call(this):i(this,a,Z).call(this),i(this,a,z).call(this)};Vt=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),i(this,a,z).call(this),this.requestUpdate()};Z=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};tt=function(){this._selected.clear(),this.requestUpdate()};z=function(){this.dispatchEvent(new CustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0}))};Ft=function(){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".data");if(!t)return;const e=()=>{i(this,a,Ut).call(this,t),i(this,a,Kt).call(this,t)};t.addEventListener("scroll",e),e()};Ut=function(t){const{scrollTop:e}=t;e>0?t.classList.add("scrolled"):t.classList.remove("scrolled")};Kt=function(t){const{scrollLeft:e,scrollWidth:s,clientWidth:r}=t,o=s-r;e<=0?(t.classList.add("scrolled-x-start"),t.classList.remove("scrolled-x-middle","scrolled-x-end")):e>=o-1?(t.classList.add("scrolled-x-end"),t.classList.remove("scrolled-x-start","scrolled-x-middle")):(t.classList.add("scrolled-x-middle"),t.classList.remove("scrolled-x-start","scrolled-x-end"))};d.styles=Ve;c([u()],d.prototype,"headline",2);c([u()],d.prototype,"summary",2);c([u({type:Array})],d.prototype,"options",2);c([u({type:Number})],d.prototype,"page",2);c([u({type:Number})],d.prototype,"rows",2);c([u({type:Array})],d.prototype,"columns",2);c([u()],d.prototype,"data",2);c([u({reflect:!1})],d.prototype,"density",2);c([u({type:Boolean,reflect:!1})],d.prototype,"selectable",2);c([u({type:Boolean,reflect:!1})],d.prototype,"responsive",2);c([u({type:Boolean,reflect:!1})],d.prototype,"plain",2);c([u({type:Boolean,reflect:!1})],d.prototype,"searchable",2);c([u({type:Boolean,reflect:!1})],d.prototype,"settings",2);c([u({type:Boolean,reflect:!1})],d.prototype,"striped",2);c([u()],d.prototype,"actions",2);c([u({type:Boolean,reflect:!1})],d.prototype,"nocache",2);c([u()],d.prototype,"dataLoadKey",2);c([ce({...he,property:"--_table-height",selector:".data"})],d.prototype,"height",2);c([u()],d.prototype,"variant",2);c([x()],d.prototype,"_isMobile",2);c([pe("(max-width: 768px)")],d.prototype,"_handleMobile",1);c([x()],d.prototype,"_view",2);c([x()],d.prototype,"_loaded",2);c([x()],d.prototype,"_loading",2);c([x()],d.prototype,"_rowsState",2);c([x()],d.prototype,"_total",2);c([x()],d.prototype,"_selected",2);c([x()],d.prototype,"_error",2);c([R("dataLoadKey"),R("data")],d.prototype,"_onDataChange",1);c([R("columns")],d.prototype,"_onColumnsChange",1);d=c([nt(),ot("gds-table",{dependsOn:Fe})],d);d.define();export{y as G};
