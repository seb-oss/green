import{n}from"./Reflect-DJ7r0WLU.js";import{a as W}from"./query-p8xgzTDt.js";import{e as rt,o as F}from"./if-defined-BAXgs-ZI.js";import{b as Ot}from"./radio.component-BhL0olhJ.js";import{h as l,g as D,G as it}from"./gds-element-DTROifYq.js";import{a as Mt}from"./transitional-styles-DlCTkooe.js";import{c as Pt}from"./rbcb-toggle.template-B-MDayTD.js";import{G as Tt,b as Wt,t as at}from"./tokens.style-BAmYQ5hh.js";import{w as z}from"./watch-tFciLXSI.js";import{a as nt,G as lt}from"./button.component-DMapjBgE.js";import"./dropdown.component-6_ywIDns.js";import"./menu-heading.component-tnrTPgF3.js";import"./context-menu.component-DHTGEF9r.js";import"./badge.component-rhhSpVRb.js";import"./breadcrumbs.component-BvO39ZZZ.js";import{G as ct}from"./card.component-BMnRrLcb.js";import"./coachmark.component-qv9mg8wx.js";import{m as Dt}from"./datepicker.component-XwetrJIU.js";import{l as dt,m as T,s as zt}from"./runtime-CNluP0A8.js";import{i as G,E as pt}from"./lit-element-Bx14lxc-.js";import{n as L}from"./when-BR7zwNJC.js";import{d as It,b as Bt,w as ht,a as At,c as Ft}from"./declarative-layout-mixins-DjJmHTNk.js";import{G as ut}from"./div.component-DqlLNNPU.js";import{G as gt}from"./flex.component-DFgQuJpw.js";import{I as Lt}from"./cross-small.component-BZQy3guX.js";import"./divider.component-C6MmnNH8.js";import"./filter-chips.component-BeFwlcXb.js";import{r as Vt}from"./query-async-MEroNOeJ.js";import{I as Rt}from"./arrow-up.component-Cyl07BCr.js";import"./grid.component-IhKL6-G5.js";import"./grouped-list.component-C3jAbB5E.js";import"./icon-DNXzWdP7.js";import"./zoom-out.component-CsXufbpE.js";import"./arrow-down.component-CofpnaP-.js";import"./arrow-left.component-l4yWtTzD.js";import"./arrow-right.component-C3bixHJa.js";import{I as Nt}from"./arrow-rotate-counter-clockwise.component-C5Ga-Xlj.js";import"./sun.component-BLjJb_8g.js";import"./star.component-DXkULxFV.js";import"./bubbles.component-BasDrd0a.js";import"./calender-add.component-BWdXMglP.js";import"./chain-link.component-CCgxGW73.js";import{I as Yt}from"./checkmark.component-CMszfN2f.js";import"./chevron-bottom.component-B9RUDwQy.js";import"./chevron-right.component-cbPv3zCv.js";import"./chevron-top.component-CcPQbOpR.js";import"./circle-check.component-DVHjtZ3V.js";import"./triangle-exclamation.component-Bsq9LNPF.js";import"./circles-three.component-BYSkC16y.js";import"./credit-card.component-DMXRsE4v.js";import"./cross-large.component-B4zJw8KZ.js";import"./dot-grid-one-horizontal-dVak9lUp.js";import"./folder.component-pIHXEfbL.js";import"./magnifying-glass.component-B5y7l47I.js";import"./people-profile.component-BYJNvc4a.js";import"./push.component-DoqR2927.js";import"./rocket.component-BPgoe1UC.js";import"./square-grid-circle.component-B7O-o6lN.js";import"./img.component-cEQ4dLI2.js";import"./input.component-jKl_euxB.js";import"./link.component-DFskFAAq.js";import"./mask.component-BaSt7jDX.js";import"./menu-button.component-MAcelwmH.js";import"./popover.component-CWjW8C4-.js";import"./segmented-control.component-Brwm-sDw.js";import"./select.component-B8xs-4Cw.js";import"./signal.component-DMHsDFhM.js";import"./spinner.component-nFtDJGiY.js";import"./text.component-DPk3dPFa.js";import"./textarea.component-CWgsfLYy.js";import"./theme.component-C-dLwHeW.js";import"./video.component-CNMx5OMa.js";import{G as Ut,a as Xt}from"./form-control-header.component-u5gs2Y3k.js";import{o as qt}from"./observe-light-dom-CmJPHUQ4.js";const Ht=G`
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
`;var Jt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,mt=t=>{throw TypeError(t)},u=(t,e,s,r)=>{for(var o=r>1?void 0:r?Kt(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&Jt(e,s,o),o},ft=(t,e,s)=>e.has(t)||mt("Cannot "+s),tt=(t,e,s)=>(ft(t,e,"read from private field"),s?s.call(t):e.get(t)),et=(t,e,s)=>e.has(t)?mt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),v=(t,e,s)=>(ft(t,e,"access private method"),s),O,g,vt,yt,bt,_t,H,xt,kt;let c=class extends nt{constructor(){super(...arguments),et(this,g),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,et(this,O,()=>{this.checkboxes.forEach(t=>{t.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(t){this._internalValue=t}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(t=>{t.checked=this.value.includes(t.value)||!1})}_handleGroupInvalidChange(){tt(this,O).call(this)}focus(){var t;(t=this.checkboxes[0])==null||t.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",tt(this,O))}render(){const t={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return l`<div
      role="group"
      id="checkboxgroup"
      class=${rt(t)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${v(this,g,vt).call(this)}
    </div>`}_syncOnDOMChange(){v(this,g,H).call(this)}};O=new WeakMap;g=new WeakSet;vt=function(){return[v(this,g,yt).call(this),v(this,g,bt).call(this),v(this,g,kt).call(this)].map(e=>l`${e}`)};yt=function(){if(this.label)return l`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};bt=function(){return l`<div class="content">
      <slot @input=${v(this,g,_t)}></slot>
    </div>`};_t=function(t){t&&t.stopPropagation(),v(this,g,H).call(this),v(this,g,xt).call(this)};H=function(){const t=this.checkboxes.filter(e=>e.checked).map(e=>e.value);JSON.stringify(t)!==JSON.stringify(this.value)&&(this.value=t)};xt=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};kt=function(){return l`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};c.styles=[Ht];u([n()],c.prototype,"size",2);u([n()],c.prototype,"direction",2);u([n({attribute:"supporting-text"})],c.prototype,"supportingText",2);u([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);u([n({type:Array})],c.prototype,"value",1);u([W("#checkboxgroup")],c.prototype,"_elCheckboxGroup",2);u([z("value",{waitUntilFirstUpdate:!0})],c.prototype,"_handleValueChange",1);u([z("invalid")],c.prototype,"_handleGroupInvalidChange",1);u([qt({attributes:!0,childList:!0,subtree:!0,characterData:!0})],c.prototype,"_syncOnDOMChange",1);c=u([dt()],c);let V=class extends It(Bt(ht(c))){};V=u([D("gds-checkbox-group",{dependsOn:[Ut,Xt]})],V);const Qt=G`
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
`,R=new Set;function Zt(){Tt.instance.injectGlobalStyles("dialog-scroll-lock",G`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function jt(t){if(R.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=te()+ee();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function st(t){R.delete(t),R.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function te(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ee(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var se=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,wt=t=>{throw TypeError(t)},m=(t,e,s,r)=>{for(var o=r>1?void 0:r?oe(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&se(e,s,o),o},J=(t,e,s)=>e.has(t)||wt("Cannot "+s),d=(t,e,s)=>(J(t,e,"read from private field"),s?s.call(t):e.get(t)),f=(t,e,s)=>e.has(t)?wt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),B=(t,e,s,r)=>(J(t,e,"write to private field"),e.set(t,s),s),re=(t,e,s)=>(J(t,e,"access private method"),s),b,N,M,Y,P,U,Ct,K,w;Zt();let p=class extends ht(At(Ft(it))){constructor(){super(...arguments),f(this,U),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,f(this,b),f(this,N,t=>{const s=t.target.returnValue;if(s!=="prop-change"){if(!d(this,M).call(this,s))return;this.close(s||"native-close");return}this.close(s||"native-close")}),f(this,M,t=>d(this,P).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),f(this,Y,t=>d(this,P).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),f(this,P,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),f(this,K,t=>{this.show("slotted-trigger")}),f(this,w,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&s&&this.open){const o=s.getBoundingClientRect(),a=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,i="click-outside";!a&&d(this,M).call(this,i)&&this.close(i)}})}show(t){this.open=!0,t&&d(this,Y).call(this,t)}close(t){B(this,b,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),st(this)}render(){return l`<slot
        name="trigger"
        @slotchange=${re(this,U,Ct)}
      ></slot>
      ${L(this.open,()=>l`<dialog
            @close=${d(this,N)}
            class=${rt({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${F(this.heading)}
          >
            <gds-card
              class="card"
              variant="secondary"
              box-shadow="xl"
              gap="l"
              border-radius="s"
              max-width="100%"
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="secondary"
                    size="small"
                    label=${T("Close")}
                    @click=${()=>this.close("btn-close")}
                    ><gds-icon-cross-small></gds-icon-cross-small
                  ></gds-button>
                </gds-flex>
                <gds-div
                  id="content"
                  flex="1"
                  overflow=${F(this.scrollable)?"auto":pt}
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
                      >${T("Cancel")}</gds-button
                    >
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                      >Ok</gds-button
                    >
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(B(this,b,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),jt(this),document.removeEventListener("click",d(this,w)),requestAnimationFrame(()=>document.addEventListener("click",d(this,w))),Wt&&((s=this._elDialog)==null||s.focus())})):(B(this,b,d(this,b)||"prop-change"),(t=this._elDialog)==null||t.close(d(this,b)),st(this),document.removeEventListener("click",d(this,w)),this.requestUpdate("open"))}};b=new WeakMap;N=new WeakMap;M=new WeakMap;Y=new WeakMap;P=new WeakMap;U=new WeakSet;Ct=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",d(this,K)),t==null||t.setAttribute("aria-haspopup","dialog")}};K=new WeakMap;w=new WeakMap;p.styles=[Qt];p.styleExpressionBaseSelector="dialog";m([n({type:Boolean,reflect:!0})],p.prototype,"open",2);m([n()],p.prototype,"heading",2);m([n()],p.prototype,"variant",2);m([n()],p.prototype,"placement",2);m([n({type:Boolean})],p.prototype,"scrollable",2);m([W("dialog")],p.prototype,"_elDialog",2);m([W('slot[name="trigger"]')],p.prototype,"_elTriggerSlot",2);m([z("open")],p.prototype,"_handleOpenChange",1);p=m([D("gds-dialog",{dependsOn:[lt,ct,ut,gt,Lt]}),dt()],p);const ie=G`
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
`;var ae=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,$t=t=>{throw TypeError(t)},I=(t,e,s,r)=>{for(var o=r>1?void 0:r?ne(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&ae(e,s,o),o},Q=(t,e,s)=>e.has(t)||$t("Cannot "+s),C=(t,e,s)=>(Q(t,e,"read from private field"),e.get(t)),A=(t,e,s)=>e.has(t)?$t("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),ot=(t,e,s,r)=>(Q(t,e,"write to private field"),e.set(t,s),s),$=(t,e,s)=>(Q(t,e,"access private method"),s),x,E,_,Z,X,Et;let k=class extends it{constructor(){super(...arguments),A(this,_),this.hideErrors=!1,this.reactive=!1,A(this,x),A(this,E)}get errorCount(){return $(this,_,X).call(this).length}focus(t){this._elRoot.then(e=>{const s=e.querySelector('[gds-element="gds-button"]');s&&s.focus(t)})}connectedCallback(){super.connectedCallback(),ot(this,x,this.closest("form")||void 0),C(this,x)&&this.reactive&&(ot(this,E,new MutationObserver(()=>{this.refresh()})),C(this,E).observe(C(this,x),{attributes:!0,subtree:!0}))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=C(this,E))==null||t.disconnect()}refresh(){this.requestUpdate()}render(){const t=$(this,_,Z).call(this),e=$(this,_,X).call(this);return L(e.length>0,()=>l`<gds-card
          id="root"
          role="navigation"
          variant="negative"
          padding="l"
          background="negative-01"
          color="negative-01"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${T("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font="heading-xs" font-weight="book" id="description">
              ${T(zt`There are ${e.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${t.map((s,r)=>l`<li ?inert=${!(s.ariaInvalid==="true"||s.invalid)}>
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
                        ${L(!this.hideErrors,()=>l`<gds-div font="body-regular-s">
                              ${s.dataset.errormessage||s.errorMessage||s.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${s.label} field`}
                      >
                        ${Dt($(this,_,Et).call(this,s),pt)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};x=new WeakMap;E=new WeakMap;_=new WeakSet;Z=function(){var t;return Array.from(((t=C(this,x))==null?void 0:t.elements)||[]).filter(e=>e.gdsElementName!=="gds-checkbox")};X=function(){return $(this,_,Z).call(this).filter(t=>t.ariaInvalid==="true"||t.invalid)};Et=async function(t){const e=(await this._elRoot).getBoundingClientRect().top;return t.getBoundingClientRect().top<e?l`<gds-icon-arrow-up></gds-icon-arrow-up>`:l`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};k.styles=[at,ie];I([n({type:Boolean})],k.prototype,"hideErrors",2);I([n({type:Boolean})],k.prototype,"reactive",2);I([Vt("#root")],k.prototype,"_elRoot",2);k=I([D("gds-form-summary",{dependsOn:[ct,gt,ut,lt,Rt]})],k);const le=G`
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
`;var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,St=t=>{throw TypeError(t)},y=(t,e,s,r)=>{for(var o=r>1?void 0:r?de(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&ce(e,s,o),o},pe=(t,e,s)=>e.has(t)||St("Cannot "+s),he=(t,e,s)=>e.has(t)?St("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),q=(t,e,s)=>(pe(t,e,"access private method"),s),S,Gt,j;let h=class extends nt{constructor(){super(...arguments),he(this,S),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(t){this._internalValue=t}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}render(){return l`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        aria-describedby=${F(this.supportingText?"supporting-text":"")}
        id="checkbox-input"
        @change=${()=>{this.checked=this._elCheckbox.checked,q(this,S,j).call(this)}}
      />
      <gds-toggle-control-base type="checkbox" @click=${q(this,S,Gt)}>
        <label for="checkbox-input" slot="label"> ${this.label} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${Pt({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};S=new WeakSet;Gt=function(t){this.disabled||t.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,q(this,S,j).call(this))};j=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};h.styles=[at,Mt,le];y([n()],h.prototype,"label",2);y([n({attribute:"supporting-text"})],h.prototype,"supportingText",2);y([n({type:Boolean})],h.prototype,"checked",2);y([n({type:Boolean,reflect:!0})],h.prototype,"indeterminate",2);y([n({type:Boolean,reflect:!0})],h.prototype,"disabled",2);y([W('input[type="checkbox"]')],h.prototype,"_elCheckbox",2);y([z("indeterminate")],h.prototype,"_handleIndeterminateChange",1);h=y([D("gds-checkbox",{dependsOn:[Ot,Yt,Nt]})],h);h.define();V.define();export{k as G,p as a};
