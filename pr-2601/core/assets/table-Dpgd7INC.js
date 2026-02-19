import{i as Q,ab as Jt,a0 as Zt,a4 as te,as as ee,J as at,b as w,a as x,o as M,O as h,E as se,h as l,at as ae,n as c,d as it,a8 as E,g as rt,P as ot,G as ie,$ as re,X as oe,Z as le,ah as ne,t as de,ak as ce,s as he,ai as pe,I as k}from"./iframe-DZfCx1ov.js";import{l as lt}from"./localized-decorator-1X_YDkor.js";import{w as ge}from"./popover.component-Dbc0tYqd.js";import{a as ue}from"./dropdown.component-D_u2YXb4.js";import"./menu-heading.component-D0WLiUue.js";import{a as ye,G as be}from"./context-menu.component-CQrdmQVY.js";import"./alert.component-DsS8qhY1.js";import{G as ve}from"./badge.component-DpJKJmAc.js";import"./blur.component-gq-V0mdb.js";import"./breadcrumb.component-C8cDIfv6.js";import"./calendar.component-DkXQr6V7.js";import{G as nt}from"./card.component-BiYx90g4.js";import"./card-linked.component-DhzW63eW.js";import"./checkbox-group.component-DEngJH6f.js";import"./coachmark.component-BKdnqOmO.js";import"./datepicker.component-E8DmH09S.js";import"./details.component-DaRmb84-.js";import{G as dt}from"./flex.component-DTmNbtRV.js";import{I as fe,a as me,b as we,c as _e,d as xe}from"./zoom-out.component-BJJcYVXO.js";import{G as ke}from"./divider.component-DIKCHoVy.js";import"./signal.component-Bt6PzLRY.js";import"./filter-chips.component-BHM1mt04.js";import"./summary.component-0l1KADHh.js";import"./grouped-list.component-CBGz3hqB.js";import"./icon.component-I5R4l-On.js";import"./arrow-down.component-qJIdJX4j.js";import"./arrow-left.component-BLjVzeiA.js";import"./arrow-right.component-CFk3fKTo.js";import"./arrow-rotate-counter-clockwise.component-3nSr4iDj.js";import"./arrow-up.component-Ci89NgFc.js";import"./sun.component-DREf5Ovq.js";import"./star.component-DKWRp7ep.js";import"./bubbles.component-Ba5F9B-4.js";import"./calender-add.component-CHIMK-qx.js";import"./chain-link-BkFOpFwR.js";import"./checkmark.component-B3dyB-tG.js";import"./chevron-bottom.component-E8u2PLZU.js";import"./chevron-right-small.component-BhqWrjhy.js";import"./chevron-left.component-B_6hVDs9.js";import"./chevron-right.component-CtRA7Z3E.js";import"./chevron-top.component-CwdGLu6y.js";import"./circle-check.component-cDtF4p8g.js";import"./triangle-exclamation.component-BfIVf862.js";import"./circles-three.component-LuiZKq4E.js";import"./cloudy-sun.component-LaNZyx_d.js";import"./credit-card.component-DsQZ7zGJ.js";import{I as $e}from"./cross-small.component-Cg2CuOEF.js";import{I as Se}from"./dot-grid-one-horizontal-aCoi5hYQ.js";import"./folder.component-CqZGeUIW.js";import{I as Ce}from"./magnifying-glass.component-CJwjEk1o.js";import{I as Ee}from"./minus-small.component-C1Ut7xhB.js";import"./people-profile.component-Djz_sqsy.js";import"./push.component-lYyI-gb9.js";import"./rocket.component-CO2E6FlJ.js";import"./square-grid-circle.component-B0Qq22AB.js";import{G as De}from"./img.component-BvE9BrDm.js";import{G as Ae}from"./input.component-DgcvKzP5.js";import{G as Ge}from"./link.component-5_1U6G3Z.js";import"./mask.component-DtiCp3ZA.js";import"./menu-button.component-BiN1Jzxn.js";import{G as Te}from"./pagination-DlrJocMh.js";import"./radio-group.component-2AmXfBGY.js";import"./rich-text.component-Bs42DZz_.js";import"./segmented-control-qnXU3wH7.js";import"./sensitive-number.component-ckywx20E.js";import"./sensitive-date.component-wkU8gifk.js";import"./sensitive-account.component-DY1BuKCI.js";import"./select.component-B0enx_l7.js";import"./spinner.component-JlLpVCkq.js";import{G as ze}from"./text-CWJnAPn6.js";import"./textarea.component-BTfE5PBf.js";import"./video.component-CCWloT3c.js";import"./card-pattern-01.component-e6CUCnZ1.js";import{c as Ie}from"./rbcb-toggle.template-Cd84ukjQ.js";const Le=Q`
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
`,P=new Set;function Me(){Jt.instance.injectGlobalStyles("dialog-scroll-lock",Q`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Pe(t){if(P.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=je()+Re();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function et(t){P.delete(t),P.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function je(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Re(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var We=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,ct=t=>{throw TypeError(t)},_=(t,e,s,r)=>{for(var o=r>1?void 0:r?Ne(e,s):e,p=t.length-1,g;p>=0;p--)(g=t[p])&&(o=(r?g(e,s,o):g(o))||o);return r&&o&&We(e,s,o),o},V=(t,e,s)=>e.has(t)||ct("Cannot "+s),u=(t,e,s)=>(V(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>e.has(t)?ct("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),D=(t,e,s,r)=>(V(t,e,"write to private field"),e.set(t,s),s),Oe=(t,e,s)=>(V(t,e,"access private method"),s),$,A,j,T,R,z,W,ht,H,G;Me();let y=class extends Zt(te(ee(at))){constructor(){super(...arguments),m(this,W),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,m(this,$),m(this,A,!1),m(this,j,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!u(this,T).call(this,s))return;this.close(s);return}this.close(s)}),m(this,T,t=>u(this,z).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),m(this,R,t=>u(this,z).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),m(this,z,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),m(this,H,t=>{this.show("slotted-trigger")}),m(this,G,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect(),p=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,g="click-outside";!p&&!u(this,A)&&u(this,T).call(this,g)&&this.close(g)}D(this,A,!1)})}show(t){this.open=!0,t&&u(this,R).call(this,t)}close(t){D(this,$,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),et(this)}render(){return l`<slot
        name="trigger"
        @slotchange=${Oe(this,W,ht)}
      ></slot>
      ${w(this.open,()=>l`<dialog
            closedby="closerequest"
            @close=${u(this,j)}
            class=${x({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
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
              @mousedown=${()=>D(this,A,!0)}
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
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(D(this,$,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),Pe(this),this.removeEventListener("click",u(this,G)),requestAnimationFrame(()=>this.addEventListener("click",u(this,G))),ae&&((s=this._elDialog)==null||s.focus())})):(D(this,$,u(this,$)||"prop-change"),(t=this._elDialog)==null||t.close(u(this,$)),et(this),document.removeEventListener("click",u(this,G)),this.requestUpdate("open"))}};$=new WeakMap;A=new WeakMap;j=new WeakMap;T=new WeakMap;R=new WeakMap;z=new WeakMap;W=new WeakSet;ht=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",u(this,H)),t==null||t.setAttribute("aria-haspopup","dialog")}};H=new WeakMap;G=new WeakMap;y.styles=[Le];y.styleExpressionBaseSelector="dialog";_([c({type:Boolean,reflect:!0})],y.prototype,"open",2);_([c()],y.prototype,"heading",2);_([c()],y.prototype,"variant",2);_([c()],y.prototype,"placement",2);_([c({type:Boolean})],y.prototype,"scrollable",2);_([it("dialog")],y.prototype,"_elDialog",2);_([it('slot[name="trigger"]')],y.prototype,"_elTriggerSlot",2);_([E("open")],y.prototype,"_handleOpenChange",1);y=_([rt("gds-dialog",{dependsOn:[ot,nt,ie,dt,fe]}),lt()],y);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt="important",Be=" !"+pt,gt=re(class extends oe{constructor(t){var e;if(super(t),t.type!==le.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const r=t[s];return r==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?s.removeProperty(r):s[r]=null);for(const r in e){const o=e[r];if(o!=null){this.ft.add(r);const p=typeof o=="string"&&o.endsWith(Be);r.includes("-")||p?s.setProperty(r,p?o.slice(0,-11):o,p?pt:""):s[r]=o}}return ne}}),Qe=Q`
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
`,Ve=[de,ce,Qe],He=[ot,nt,ke,De,ye,be,ue,Ae,Te,ze,ve,Ge,dt,me,$e,Ee,Ce,we,_e,xe,Se],Ue={compact:{button:"small",input:"small",dropdown:"small",badge:"small"},comfortable:{button:"small",input:"small",dropdown:"small",badge:"small"},spacious:{button:"medium",input:"large",dropdown:"medium",badge:"default"}},ut=t=>typeof t=="object"&&t!==null&&Array.isArray(t.slots),qe={toString(){return String(this.value??"")},valueOf(){return this.value},[Symbol.toPrimitive](t){return t==="number"?Number(this.value):String(this.value??"")}};function ba(t,e=["value"],s){if(ut(t))return t;let r=["value"],o;return Array.isArray(e)?r=e:(typeof e=="string"||typeof e=="number")&&(o=e),Array.isArray(s)&&(r=s),Object.assign(Object.create(qe),{value:t,slots:r,...typeof o<"u"?{key:o}:{}})}var Ye=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,yt=t=>{throw TypeError(t)},d=(t,e,s,r)=>{for(var o=r>1?void 0:r?Fe(e,s):e,p=t.length-1,g;p>=0;p--)(g=t[p])&&(o=(r?g(e,s,o):g(o))||o);return r&&o&&Ye(e,s,o),o},U=(t,e,s)=>e.has(t)||yt("Cannot "+s),v=(t,e,s)=>(U(t,e,"read from private field"),s?s.call(t):e.get(t)),L=(t,e,s)=>e.has(t)?yt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),st=(t,e,s,r)=>(U(t,e,"write to private field"),e.set(t,s),s),i=(t,e,s)=>(U(t,e,"access private method"),s),S,q,a,N,bt,I,vt,O,ft,b,Y,B,mt,F,wt,_t,xt,kt,$t,St,Ct,Et,Dt,At,Gt,Tt,zt,It,X,Lt,Mt,Pt,jt,Rt,Wt,Nt,Ot,Bt,K,Qt,Vt,Ht,Ut,qt,Yt,J,Z,C,Ft,Xt,Kt;let n=class extends at{constructor(){super(...arguments),L(this,a),L(this,S,{}),L(this,q,300*1e3),this.headlineTag="h2",this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.disableSelectAll=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="secondary",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(t){this._isMobile=t}_onDataChange(){st(this,S,{}),i(this,a,b).call(this)}_onPageChange(){this._view={...this._view,page:Number(this.page??1)},i(this,a,b).call(this)}_onRowsChange(){this._view={...this._view,rows:Number(this.rows??10),page:1},i(this,a,b).call(this)}_onColumnsChange(){st(this,S,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(t=>t.visible!==!1).map(t=>t.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{i(this,a,Ft).call(this)})}render(){const t={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return l`
      <div class="${x(t)}">
        ${[i(this,a,Ot).call(this),i(this,a,kt).call(this),w(this._error,()=>i(this,a,Rt).call(this),()=>w(this._rowsState.length===0&&!this._loading,()=>i(this,a,Wt).call(this),()=>i(this,a,jt).call(this))),i(this,a,Nt).call(this)]}
      </div>
    `}clearSelection(){i(this,a,Z).call(this),i(this,a,C).call(this)}selectAll(){i(this,a,J).call(this),i(this,a,C).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this._rowsState.length);this._selected=new Set(e),i(this,a,C).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this._selected);return{indices:t,data:t.map(e=>this._rowsState[e])}}};S=new WeakMap;q=new WeakMap;a=new WeakSet;N=function(){return Ue[this.density]};bt=function(){return this._selected.size>0};I=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length};vt=function(){return v(this,a,bt)&&!v(this,a,I)};O=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})};ft=function(t){return Date.now()-t.timestamp<v(this,q)};b=async function(){if(this.data){if(!this.nocache){const t=i(this,a,O).call(this),e=v(this,S)[t];if(e&&i(this,a,ft).call(this,e)){this._rowsState=e.rows,this._total=e.total,this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{rows:e.rows,total:e.total,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0});return}}this._loading=!0,this._error=null;try{const t=await this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const e=i(this,a,O).call(this);v(this,S)[e]={rows:t.rows,total:t.total,timestamp:Date.now()}}this._rowsState=t.rows,this._total=t.total,this._selected.clear(),this._loaded=!1,this.dispatchCustomEvent("gds-table-data-loaded",{detail:{...t,page:this._view.page,rowsPerPage:this._view.rows,searchQuery:this._view.searchQuery,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection},bubbles:!0})}catch(t){this._error=t,this.dispatchCustomEvent("gds-table-data-error",{detail:t,bubbles:!0})}finally{this._loading=!1}}};Y=function(t,e,s){if(typeof s=="string"||typeof s=="number")return s;const r=t==null?void 0:t.id;return typeof r=="string"||typeof r=="number"?r:e+1};B=function(t){return l`<span class="cell-wrapped-content">${t}</span>`};mt=function(t){return l`<span class="column-label" aria-hidden="true">
      ${t.label}:
    </span>`};F=function(t,e,s){const r=`${t}:${e}:${s}`;return l`<slot name="${r}"></slot>`};wt=function(t,e,s){const r=e.value?e.value(t):t[e.key],o=this._isMobile&&this.responsive,p=!!e.justify;let g;if(ut(r)){const tt=i(this,a,Y).call(this,t,s,r.key);g=r.slots.map(f=>f==="value"?r.value===void 0?null:p?i(this,a,B).call(this,r.value):r.value:i(this,a,F).call(this,e.key,tt,f))}else g=p?i(this,a,B).call(this,r):r;return l`
      <div
        class="cell-content"
        aria-label=${M(o?e.label:void 0)}
      >
        ${o?i(this,a,mt).call(this,e):null} ${g}
      </div>
    `};_t=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;return e?s==="asc"?l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:l`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};xt=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')};kt=function(){return this.plain||!i(this,a,xt).call(this)?null:l`
      <div class="header">
        <div class="lead">
          ${w(this.searchable,()=>l`
              <gds-input
                type="text"
                size="${v(this,a,N).input}"
                plain
                clearable
                label="${this.searchLabel||h("Search table")}"
                .value=${this._view.searchQuery}
                @input=${i(this,a,Bt)}
                @gds-input-cleared=${i(this,a,K)}
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
          ${w(this.settings,()=>l`
              <gds-dropdown
                multiple
                plain
                size="${v(this,a,N).dropdown}"
                label="${h("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${i(this,a,Ut)}
              >
                <span slot="trigger">${h("Columns")}</span>
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
    `};$t=function(t){const e=this._view.sortColumn===t.key,s=this._view.sortDirection;let r=t.label;if(t.sortable)if(e){const g=s==="asc"?h("ascending"):h("descending");r=`${t.label}, ${h("sorted")} ${g}`}else r=`${t.label}, ${h("sortable")}`;const o=x({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc",[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify,wrap:!!t.width}),p=gt({"--cell-width":t.width});return l`
      <th
        class=${o}
        style=${p}
        aria-sort="${e?s==="asc"?"ascending":"descending":"none"}"
        @click=${t.sortable?()=>i(this,a,Qt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${r}">
            ${t.label}
          </span>
          ${w(t.sortable,()=>l`
              <span class="sort-icon">${i(this,a,_t).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};St=function(){if(!this.actions||typeof this.actions=="function")return null;const t=this.actions.label||h("Actions"),e=x({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return l`
      <th class="${e}">
        <div class="column-header">
          <div class="column-label">${t}</div>
        </div>
      </th>
    `};Ct=function(){return this.selectable?l`
      <th class="checkbox-cell">
        ${i(this,a,X).call(this,{checked:v(this,a,I),indeterminate:v(this,a,vt),ariaLabel:h("Select all rows"),onToggle:()=>i(this,a,qt).call(this,{}),skip:this.disableSelectAll})}
      </th>
    `:null};Et=function(){return this.columns.filter(t=>this._view.visibleColumns.has(t.key)).map(t=>i(this,a,$t).call(this,t))};Dt=function(){return l`
      <thead>
        <tr>
          ${[i(this,a,Ct).call(this),i(this,a,Et).call(this),i(this,a,St).call(this)]}
        </tr>
      </thead>
    `};At=function(t,e,s){const r=x({[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify,wrap:!!e.width}),o=gt({"--cell-width":e.width});return l`
      <td style=${o} class=${r}>
        ${i(this,a,wt).call(this,t,e,s)}
      </td>
    `};Gt=function(t){if(!this.selectable)return null;const e=`${h("Select row")} ${t+1}`;return l`
      <td class="checkbox-cell">
        ${i(this,a,X).call(this,{checked:this._selected.has(t),indeterminate:!1,ariaLabel:e,onToggle:()=>i(this,a,Yt).call(this,t,{detail:{checked:!this._selected.has(t)}})})}
      </td>
    `};Tt=function(t,e){return this.columns.filter(s=>this._view.visibleColumns.has(s.key)).map(s=>i(this,a,At).call(this,t,s,e))};zt=function(t,e){if(!this.actions)return null;if(typeof this.actions=="function")return l`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(t,e)}</div>
        </td>
      `;const s=i(this,a,Y).call(this,t,e),r=x({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return l`
      <td class="${r}">
        <div class="cell-content">
          ${i(this,a,F).call(this,"actions",s,"main")}
        </div>
      </td>
    `};It=function(t,e){return l`
      <tr
        class=${x({selected:this._selected.has(e),loading:this._loading})}
      >
        ${[i(this,a,Gt).call(this,e),i(this,a,Tt).call(this,t,e),i(this,a,zt).call(this,t,e)]}
      </tr>
    `};X=function({checked:t,indeterminate:e=!1,disabled:s=!1,ariaLabel:r,onToggle:o,skip:p=!1}){if(p)return null;const g=f=>{f.stopPropagation(),!s&&o()};return l`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${e?"mixed":t?"true":"false"}
        aria-label=${r}
        @click=${g}
        @keydown=${f=>{(f.key===" "||f.key==="Enter")&&(f.preventDefault(),g(f))}}
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
        ${Ie({checked:t,indeterminate:e,disabled:s,invalid:!1})}
      </div>
    `};Lt=function(t){const s=this._isMobile&&this.responsive?l`<span class="skeleton skeleton-text"></span>`:null;return l`
      <div class="cell-content">
        ${s}
        <span class="skeleton skeleton-text"></span>
      </div>
    `};Mt=function(t){return l`
      <tr class="skeleton-row">
        ${w(this.selectable,()=>l`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>l`<td>${i(this,a,Lt).call(this,e)}</td>`)}
        ${w(this.actions,()=>l`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};Pt=function(){if(this._loading&&this._loaded){const t=Array.from({length:this._view.rows},(e,s)=>i(this,a,Mt).call(this,s));return l`<tbody aria-busy="true" aria-live="polite">
        ${t}
      </tbody>`}return l`
      <tbody aria-live="polite">
        ${this._rowsState.map((t,e)=>i(this,a,It).call(this,t,e))}
      </tbody>
    `};jt=function(){const t=x({responsive:this.responsive,data:!0,[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),e=`${this.summary?this.summary+", ":""}${h("Data table with")} ${this._total} ${h("rows")}`;return l`
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
            ${i(this,a,Dt).call(this)} ${i(this,a,Pt).call(this)}
          </table>
        </div>
      </gds-card>
    `};Rt=function(){return l`
      <gds-card variant="secondary" border-radius="m">
        <slot name="error">
          <gds-text tag="p">${h("Error loading data")}</gds-text>
          <gds-button
            size="small"
            label="${h("Retry loading data")}"
            @click=${()=>i(this,a,b).call(this)}
          >
            ${h("Retry")}
          </gds-button>
        </slot>
      </gds-card>
    `};Wt=function(){return this._view.searchQuery.length>0?l`
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
                @click=${i(this,a,K)}
              >
                ${h("Clear search")}
              </gds-button>
            </gds-flex>
          </slot>
        </gds-card>
      `:l`
      <gds-card variant="secondary" border-radius="m">
        <slot name="empty">
          <gds-text tag="p" font="heading-s">
            ${h("No data available")}
          </gds-text>
        </slot>
      </gds-card>
    `};Nt=function(){if(this.plain||this._total<1)return null;const t=(this._view.page-1)*this._view.rows+1,e=Math.min(this._view.page*this._view.rows,this._total),s=`${t}–${e} ${h("of")} ${this._total}`;return l`
      <gds-pagination
        .page=${this._view.page}
        .rows=${this._view.rows}
        .options=${this.options}
        .total=${this._total}
        .density=${this.density}
        .label=${s}
        @gds-page-change=${i(this,a,Vt)}
        @gds-rows-change=${i(this,a,Ht)}
        width="100%"
      >
      </gds-pagination>
    `};Ot=function(){if(this.headline||this.summary)return l`
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
        ${w(this.searchable||this.settings,()=>l`<gds-divider color="subtle-01"></gds-divider>`,()=>l``)}
      `};Bt=async function(t){const e=t.target;this._view={...this._view,searchQuery:e.value,page:1},await i(this,a,b).call(this)};K=async function(){this._view={...this._view,searchQuery:"",page:1},await i(this,a,b).call(this)};Qt=async function(t){const e=this._view.sortColumn===t&&this._view.sortDirection==="asc"?"desc":"asc";this._view={...this._view,sortColumn:t,sortDirection:e,page:1},this.dispatchCustomEvent("gds-sort-change",{detail:{sortColumn:t,sortDirection:e},bubbles:!0}),await i(this,a,b).call(this)};Vt=async function(t){this._view={...this._view,page:t.detail.page},this.dispatchCustomEvent("gds-page-change",{detail:t.detail,bubbles:!0}),await i(this,a,b).call(this)};Ht=async function(t){this._view={...this._view,rows:t.detail.rows,page:1},this.dispatchCustomEvent("gds-rows-change",{detail:t.detail,bubbles:!0}),await i(this,a,b).call(this)};Ut=function(t){const e=t.detail.value;this._view={...this._view,visibleColumns:new Set(e)},this.requestUpdate()};qt=function(t){v(this,a,I)?i(this,a,Z).call(this):i(this,a,J).call(this),i(this,a,C).call(this)};Yt=function(t,e){e.detail.checked?this._selected.add(t):this._selected.delete(t),i(this,a,C).call(this),this.requestUpdate()};J=function(){this._selected=new Set(this._rowsState.map((t,e)=>e)),this.requestUpdate()};Z=function(){this._selected.clear(),this.requestUpdate()};C=function(){this.dispatchCustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(t=>this._rowsState[t]),count:this._selected.size},bubbles:!0})};Ft=function(){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".data");if(!t)return;const e=()=>{i(this,a,Xt).call(this,t),i(this,a,Kt).call(this,t)};t.addEventListener("scroll",e),e()};Xt=function(t){const{scrollTop:e}=t;e>0?t.classList.add("scrolled"):t.classList.remove("scrolled")};Kt=function(t){const{scrollLeft:e,scrollWidth:s,clientWidth:r}=t,o=s-r;e<=0?(t.classList.add("scrolled-x-start"),t.classList.remove("scrolled-x-middle","scrolled-x-end")):e>=o-1?(t.classList.add("scrolled-x-end"),t.classList.remove("scrolled-x-start","scrolled-x-middle")):(t.classList.add("scrolled-x-middle"),t.classList.remove("scrolled-x-start","scrolled-x-end"))};n.styles=Ve;d([c()],n.prototype,"headline",2);d([c({attribute:"headline-tag",type:String,reflect:!0})],n.prototype,"headlineTag",2);d([c()],n.prototype,"summary",2);d([c({attribute:"search-label",type:String})],n.prototype,"searchLabel",2);d([c({type:Array})],n.prototype,"options",2);d([c({type:Number})],n.prototype,"page",2);d([c({type:Number})],n.prototype,"rows",2);d([c({type:Array})],n.prototype,"columns",2);d([c()],n.prototype,"data",2);d([c({reflect:!1})],n.prototype,"density",2);d([c({type:Boolean,reflect:!1})],n.prototype,"selectable",2);d([c({attribute:"disable-select-all",type:Boolean,reflect:!1})],n.prototype,"disableSelectAll",2);d([c({type:Boolean,reflect:!1})],n.prototype,"responsive",2);d([c({type:Boolean,reflect:!1})],n.prototype,"plain",2);d([c({type:Boolean,reflect:!1})],n.prototype,"searchable",2);d([c({type:Boolean,reflect:!1})],n.prototype,"settings",2);d([c({type:Boolean,reflect:!1})],n.prototype,"striped",2);d([c()],n.prototype,"actions",2);d([c({type:Boolean,reflect:!1})],n.prototype,"nocache",2);d([c()],n.prototype,"dataLoadKey",2);d([he({...pe,property:"--_table-height",selector:".data"})],n.prototype,"height",2);d([c()],n.prototype,"variant",2);d([k()],n.prototype,"_isMobile",2);d([ge("(max-width: 768px)")],n.prototype,"_handleMobile",1);d([k()],n.prototype,"_view",2);d([k()],n.prototype,"_loaded",2);d([k()],n.prototype,"_loading",2);d([k()],n.prototype,"_rowsState",2);d([k()],n.prototype,"_total",2);d([k()],n.prototype,"_selected",2);d([k()],n.prototype,"_error",2);d([E("dataLoadKey"),E("data")],n.prototype,"_onDataChange",1);d([E("page",{waitUntilFirstUpdate:!0})],n.prototype,"_onPageChange",1);d([E("rows",{waitUntilFirstUpdate:!0})],n.prototype,"_onRowsChange",1);d([E("columns")],n.prototype,"_onColumnsChange",1);n=d([lt(),rt("gds-table",{dependsOn:He})],n);n.define();export{y as G,ba as S};
