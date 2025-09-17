import{n}from"./Reflect-DJ7r0WLU.js";import{a as I}from"./query-p8xgzTDt.js";import{e as it,o as L}from"./if-defined-BAXgs-ZI.js";import{b as Mt}from"./radio.component-5wWFVnGg.js";import{h as c,g as z,G as at}from"./gds-element-DTROifYq.js";import{a as Pt}from"./transitional-styles-DlCTkooe.js";import{c as Tt}from"./rbcb-toggle.template-B-MDayTD.js";import{G as Wt,b as Dt,t as nt}from"./tokens.style-BAmYQ5hh.js";import{w as B}from"./watch-tFciLXSI.js";import{a as lt,G as ct}from"./button.component-N5V2wMzn.js";import"./dropdown.component-ByauDECI.js";import"./menu-heading.component-tnrTPgF3.js";import"./context-menu.component-saXtt_9_.js";import"./badge.component-rhhSpVRb.js";import"./breadcrumbs.component-BvO39ZZZ.js";import{G as dt}from"./card.component-BMnRrLcb.js";import"./coachmark.component-qv9mg8wx.js";import{m as It}from"./datepicker.component-CnUI0Z1B.js";import{l as pt,m as D,s as zt}from"./runtime-CNluP0A8.js";import{i as M,E as ht}from"./lit-element-Bx14lxc-.js";import{n as V}from"./when-BR7zwNJC.js";import{d as Bt,b as At,w as ut,a as Ft,c as Lt}from"./declarative-layout-mixins-DjJmHTNk.js";import{G as gt}from"./div.component-DqlLNNPU.js";import{G as mt}from"./flex.component-DFgQuJpw.js";import{I as Vt}from"./cross-small.component-BZQy3guX.js";import"./divider.component-C6MmnNH8.js";import"./filter-chips.component-DATk9-ST.js";import{r as Rt}from"./query-async-MEroNOeJ.js";import{I as Nt}from"./arrow-up.component-Cyl07BCr.js";import"./grid.component-IhKL6-G5.js";import"./grouped-list.component-C3jAbB5E.js";import"./icon-DNXzWdP7.js";import"./zoom-out.component-CsXufbpE.js";import"./arrow-down.component-CofpnaP-.js";import"./arrow-left.component-l4yWtTzD.js";import"./arrow-right.component-C3bixHJa.js";import{I as Yt}from"./arrow-rotate-counter-clockwise.component-C5Ga-Xlj.js";import"./sun.component-BLjJb_8g.js";import"./star.component-DXkULxFV.js";import"./bubbles.component-BasDrd0a.js";import"./calender-add.component-BWdXMglP.js";import"./chain-link.component-CCgxGW73.js";import{I as qt}from"./checkmark.component-CMszfN2f.js";import"./chevron-bottom.component-B9RUDwQy.js";import"./chevron-right.component-cbPv3zCv.js";import"./chevron-top.component-CcPQbOpR.js";import"./circle-check.component-DVHjtZ3V.js";import"./triangle-exclamation.component-Bsq9LNPF.js";import"./circles-three.component-BYSkC16y.js";import"./credit-card.component-DMXRsE4v.js";import"./cross-large.component-B4zJw8KZ.js";import"./dot-grid-one-horizontal-dVak9lUp.js";import"./folder.component-pIHXEfbL.js";import"./magnifying-glass.component-B5y7l47I.js";import"./people-profile.component-BYJNvc4a.js";import"./push.component-DoqR2927.js";import"./rocket.component-BPgoe1UC.js";import"./square-grid-circle.component-B7O-o6lN.js";import"./img.component-cEQ4dLI2.js";import"./input.component-p8VmNtVg.js";import"./link.component-DFskFAAq.js";import"./mask.component-BaSt7jDX.js";import"./menu-button.component-MAcelwmH.js";import"./popover.component-CWjW8C4-.js";import"./segmented-control.component-Brwm-sDw.js";import"./select.component-Cm_Zb2fO.js";import"./signal.component-DMHsDFhM.js";import"./spinner.component-nFtDJGiY.js";import"./text.component-DPk3dPFa.js";import"./textarea.component-caSPTn9W.js";import"./theme.component-C-dLwHeW.js";import"./video.component-CNMx5OMa.js";import{G as Ut,a as Xt}from"./form-control-header.component-BLq_NzxM.js";import{o as Ht}from"./observe-light-dom-CmJPHUQ4.js";const Jt=M`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
    font: var(--_font-label);

    /* Color */
    --_checkbox-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_checkbox-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_checkbox-label-color);
  }

  .direction-row .content {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gds-sys-space-l);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-xs);
  }
`;var Kt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,ft=t=>{throw TypeError(t)},u=(t,e,s,r)=>{for(var o=r>1?void 0:r?Qt(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&Kt(e,s,o),o},vt=(t,e,s)=>e.has(t)||ft("Cannot "+s),et=(t,e,s)=>(vt(t,e,"read from private field"),s?s.call(t):e.get(t)),st=(t,e,s)=>e.has(t)?ft("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),v=(t,e,s)=>(vt(t,e,"access private method"),s),P,g,yt,bt,_t,xt,J,kt,wt;let d=class extends lt{constructor(){super(...arguments),st(this,g),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,st(this,P,()=>{this.checkboxes.forEach(t=>{t.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(t){this._internalValue=t}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(t=>{t.checked=this.value.includes(t.value)||!1})}_handleGroupInvalidChange(){et(this,P).call(this)}focus(){var t;(t=this.checkboxes[0])==null||t.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",et(this,P))}render(){const t={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return c`<div
      role="group"
      id="checkboxgroup"
      class=${it(t)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${v(this,g,yt).call(this)}
    </div>`}_syncOnDOMChange(){v(this,g,J).call(this)}};P=new WeakMap;g=new WeakSet;yt=function(){return[v(this,g,bt).call(this),v(this,g,_t).call(this),v(this,g,wt).call(this)].map(e=>c`${e}`)};bt=function(){if(this.label)return c`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};_t=function(){return c`<div class="content">
      <slot @input=${v(this,g,xt)}></slot>
    </div>`};xt=function(t){t&&t.stopPropagation(),v(this,g,J).call(this),v(this,g,kt).call(this)};J=function(){const t=this.checkboxes.filter(e=>e.checked).map(e=>e.value);JSON.stringify(t)!==JSON.stringify(this.value)&&(this.value=t)};kt=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};wt=function(){return c`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};d.styles=[Jt];u([n()],d.prototype,"size",2);u([n()],d.prototype,"direction",2);u([n({attribute:"supporting-text"})],d.prototype,"supportingText",2);u([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);u([n({type:Array})],d.prototype,"value",1);u([I("#checkboxgroup")],d.prototype,"_elCheckboxGroup",2);u([B("value",{waitUntilFirstUpdate:!0})],d.prototype,"_handleValueChange",1);u([B("invalid")],d.prototype,"_handleGroupInvalidChange",1);u([Ht({attributes:!0,childList:!0,subtree:!0,characterData:!0})],d.prototype,"_syncOnDOMChange",1);d=u([pt()],d);let R=class extends Bt(At(ut(d))){};R=u([z("gds-checkbox-group",{dependsOn:[Ut,Xt]})],R);const Zt=M`
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
    }
  }
`,N=new Set;function jt(){Wt.instance.injectGlobalStyles("dialog-scroll-lock",M`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function te(t){if(N.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=ee()+se();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function ot(t){N.delete(t),N.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function ee(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function se(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var oe=Object.defineProperty,re=Object.getOwnPropertyDescriptor,Ct=t=>{throw TypeError(t)},f=(t,e,s,r)=>{for(var o=r>1?void 0:r?re(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&oe(e,s,o),o},K=(t,e,s)=>e.has(t)||Ct("Cannot "+s),l=(t,e,s)=>(K(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>e.has(t)?Ct("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),w=(t,e,s,r)=>(K(t,e,"write to private field"),e.set(t,s),s),ie=(t,e,s)=>(K(t,e,"access private method"),s),b,C,Y,T,q,W,U,$t,Q,$;jt();let p=class extends ut(Ft(Lt(at))){constructor(){super(...arguments),m(this,U),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,m(this,b),m(this,C,!1),m(this,Y,t=>{let s=t.target.returnValue;if(s!=="prop-change"){if(s=s||"native-close",!l(this,T).call(this,s))return;this.close(s);return}this.close(s)}),m(this,T,t=>l(this,W).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),m(this,q,t=>l(this,W).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),m(this,W,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),m(this,Q,t=>{this.show("slotted-trigger")}),m(this,$,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&s&&this.open){const o=s.getBoundingClientRect(),a=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,i="click-outside";!a&&!l(this,C)&&l(this,T).call(this,i)&&this.close(i)}w(this,C,!1)})}show(t){this.open=!0,t&&l(this,q).call(this,t)}close(t){w(this,b,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),ot(this)}render(){return c`<slot
        name="trigger"
        @slotchange=${ie(this,U,$t)}
      ></slot>
      ${V(this.open,()=>c`<dialog
            closedby="closerequest"
            @close=${l(this,Y)}
            class=${it({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${L(this.heading)}
          >
            <gds-card
              class="card"
              variant="secondary"
              box-shadow="xl"
              gap="l"
              border-radius="s"
              max-width="100%"
              @mousedown=${()=>w(this,C,!0)}
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="secondary"
                    size="small"
                    label=${D("Close")}
                    @click=${()=>this.close("btn-close")}
                    ><gds-icon-cross-small></gds-icon-cross-small
                  ></gds-button>
                </gds-flex>
                <gds-div
                  id="content"
                  flex="1"
                  overflow=${L(this.scrollable)?"auto":ht}
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
                      >${D("Cancel")}</gds-button
                    >
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                      >Ok</gds-button
                    >
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(w(this,b,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),te(this),this.removeEventListener("click",l(this,$)),requestAnimationFrame(()=>this.addEventListener("click",l(this,$))),Dt&&((s=this._elDialog)==null||s.focus())})):(w(this,b,l(this,b)||"prop-change"),(t=this._elDialog)==null||t.close(l(this,b)),ot(this),document.removeEventListener("click",l(this,$)),this.requestUpdate("open"))}};b=new WeakMap;C=new WeakMap;Y=new WeakMap;T=new WeakMap;q=new WeakMap;W=new WeakMap;U=new WeakSet;$t=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",l(this,Q)),t==null||t.setAttribute("aria-haspopup","dialog")}};Q=new WeakMap;$=new WeakMap;p.styles=[Zt];p.styleExpressionBaseSelector="dialog";f([n({type:Boolean,reflect:!0})],p.prototype,"open",2);f([n()],p.prototype,"heading",2);f([n()],p.prototype,"variant",2);f([n()],p.prototype,"placement",2);f([n({type:Boolean})],p.prototype,"scrollable",2);f([I("dialog")],p.prototype,"_elDialog",2);f([I('slot[name="trigger"]')],p.prototype,"_elTriggerSlot",2);f([B("open")],p.prototype,"_handleOpenChange",1);p=f([z("gds-dialog",{dependsOn:[ct,dt,gt,mt,Vt]}),pt()],p);const ae=M`
  :host {
    display: contents;
  }
  ul {
    list-style-type: none;
    margin: 1rem 0 0;
    padding: 0;
  }
  li {
    margin: 0;
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out,
      margin 0.3s ease-in-out;
  }
  li[inert] {
    max-height: 0;
    opacity: 0;
  }
  li:not([inert]) {
    max-height: 4rem;
    opacity: 1;
  }
  a {
    color: inherit;
  }
`;var ne=Object.defineProperty,le=Object.getOwnPropertyDescriptor,Et=t=>{throw TypeError(t)},A=(t,e,s,r)=>{for(var o=r>1?void 0:r?le(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&ne(e,s,o),o},Z=(t,e,s)=>e.has(t)||Et("Cannot "+s),E=(t,e,s)=>(Z(t,e,"read from private field"),e.get(t)),F=(t,e,s)=>e.has(t)?Et("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),rt=(t,e,s,r)=>(Z(t,e,"write to private field"),e.set(t,s),s),S=(t,e,s)=>(Z(t,e,"access private method"),s),x,G,_,j,X,St;let k=class extends at{constructor(){super(...arguments),F(this,_),this.hideErrors=!1,this.reactive=!1,F(this,x),F(this,G)}get errorCount(){return S(this,_,X).call(this).length}focus(t){this._elRoot.then(e=>{const s=e.querySelector('[gds-element="gds-button"]');s&&s.focus(t)})}connectedCallback(){super.connectedCallback(),rt(this,x,this.closest("form")||void 0),E(this,x)&&this.reactive&&(rt(this,G,new MutationObserver(()=>{this.refresh()})),E(this,G).observe(E(this,x),{attributes:!0,subtree:!0}))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=E(this,G))==null||t.disconnect()}refresh(){this.requestUpdate()}render(){const t=S(this,_,j).call(this),e=S(this,_,X).call(this);return V(e.length>0,()=>c`<gds-card
          id="root"
          role="navigation"
          variant="negative"
          padding="l"
          background="negative-01"
          color="negative-01"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${D("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font="heading-xs" font-weight="book" id="description">
              ${D(zt`There are ${e.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${t.map((s,r)=>c`<li ?inert=${!(s.ariaInvalid==="true"||s.invalid)}>
                    <gds-card
                      display="flex"
                      padding="s"
                      flex-direction="row"
                      align-items="center"
                      justify-content="space-between"
                      gap="xs"
                      level="3"
                      color="negative-01"
                      background="transparent; hover: negative-01/.1"
                      style="cursor: pointer"
                      border-width="0"
                      border-radius="xs"
                      margin="0 -xs"
                      @click=${o=>{o.preventDefault(),s.focus()}}
                    >
                      <div id=${`error-label-${r}`}>
                        <gds-div font-weight="book"
                          >${s.dataset.label||s.label||s.ariaLabel}</gds-div
                        >
                        ${V(!this.hideErrors,()=>c`<gds-div font="body-regular-s">
                              ${s.dataset.errormessage||s.errorMessage||s.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${s.label} field`}
                      >
                        ${It(S(this,_,St).call(this,s),ht)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};x=new WeakMap;G=new WeakMap;_=new WeakSet;j=function(){var t;return Array.from(((t=E(this,x))==null?void 0:t.elements)||[]).filter(e=>e.gdsElementName!=="gds-checkbox")};X=function(){return S(this,_,j).call(this).filter(t=>t.ariaInvalid==="true"||t.invalid)};St=async function(t){const e=(await this._elRoot).getBoundingClientRect().top;return t.getBoundingClientRect().top<e?c`<gds-icon-arrow-up></gds-icon-arrow-up>`:c`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};k.styles=[nt,ae];A([n({type:Boolean})],k.prototype,"hideErrors",2);A([n({type:Boolean})],k.prototype,"reactive",2);A([Rt("#root")],k.prototype,"_elRoot",2);k=A([z("gds-form-summary",{dependsOn:[dt,mt,gt,ct,Nt]})],k);const ce=M`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:invalid) {
    color: var(--gds-sys-color-content-negative-01);
  }

  :host(:focus) {
    outline: none;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }
`;var de=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,Gt=t=>{throw TypeError(t)},y=(t,e,s,r)=>{for(var o=r>1?void 0:r?pe(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&de(e,s,o),o},he=(t,e,s)=>e.has(t)||Gt("Cannot "+s),ue=(t,e,s)=>e.has(t)?Gt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),H=(t,e,s)=>(he(t,e,"access private method"),s),O,Ot,tt;let h=class extends lt{constructor(){super(...arguments),ue(this,O),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(t){this._internalValue=t}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}render(){return c`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        aria-describedby=${L(this.supportingText?"supporting-text":"")}
        id="checkbox-input"
        @change=${()=>{this.checked=this._elCheckbox.checked,H(this,O,tt).call(this)}}
      />
      <gds-toggle-control-base type="checkbox" @click=${H(this,O,Ot)}>
        <label for="checkbox-input" slot="label"> ${this.label} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${Tt({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};O=new WeakSet;Ot=function(t){this.disabled||t.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,H(this,O,tt).call(this))};tt=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};h.styles=[nt,Pt,ce];y([n()],h.prototype,"label",2);y([n({attribute:"supporting-text"})],h.prototype,"supportingText",2);y([n({type:Boolean})],h.prototype,"checked",2);y([n({type:Boolean,reflect:!0})],h.prototype,"indeterminate",2);y([n({type:Boolean,reflect:!0})],h.prototype,"disabled",2);y([I('input[type="checkbox"]')],h.prototype,"_elCheckbox",2);y([B("indeterminate")],h.prototype,"_handleIndeterminateChange",1);h=y([z("gds-checkbox",{dependsOn:[Mt,qt,Yt]})],h);h.define();R.define();export{k as G,p as a};
