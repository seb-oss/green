import{n}from"./Reflect-DJ7r0WLU.js";import{a as z}from"./query-p8xgzTDt.js";import{e as rt,o as F}from"./if-defined-BAXgs-ZI.js";import{b as Ot}from"./radio.component-xcCzph_M.js";import{h as l,g as W,G as it}from"./gds-element-DTROifYq.js";import{a as Pt}from"./transitional-styles-D2m6PuZd.js";import{c as Mt}from"./rbcb-toggle.template-B-MDayTD.js";import{G as Tt,b as zt,t as at}from"./tokens.style-BS_h03Rl.js";import{w as D}from"./watch-tFciLXSI.js";import{a as nt,G as lt}from"./button.component-HPQBaSXh.js";import"./dropdown.component-DJL7z8kO.js";import"./menu-heading.component-BpdNZgWt.js";import"./context-menu.component-CsOjwKkz.js";import"./badge.component-CQ4vhMV_.js";import"./breadcrumbs.component-Ct1LFuQk.js";import{G as ct}from"./card.component-CZY7ZcCx.js";import"./coachmark.component-qv9mg8wx.js";import{m as Wt}from"./datepicker.component-BHXlm8Kr.js";import{l as dt,m as T,s as Dt}from"./runtime-CNluP0A8.js";import{i as G,E as pt}from"./lit-element-Bx14lxc-.js";import{n as L}from"./when-BR7zwNJC.js";import{d as It,b as Bt,w as ht,a as At,c as Ft}from"./declarative-layout-mixins-DjJmHTNk.js";import{G as gt}from"./div.component-u0ZDh3Rx.js";import{G as ut}from"./flex.component-BVj2qVI7.js";import{I as Lt}from"./zoom-out.component-DzcK4Bcl.js";import"./divider.component-D96LLYQk.js";import"./filter-chips.component-XuCbymy8.js";import{r as Vt}from"./query-async-MEroNOeJ.js";import{I as Rt}from"./arrow-up.component-20TuBzq8.js";import"./grid.component-BZGwMAVG.js";import"./grouped-list.component-DokSLlFg.js";import"./icon-B5K-CtrZ.js";import"./arrow-down.component-Db438Dr9.js";import"./arrow-left.component-DO1OYTpQ.js";import"./arrow-right.component-DqJOsBto.js";import{I as Nt}from"./arrow-rotate-counter-clockwise.component-BK3CaQBt.js";import"./sun.component-C_Di9MSa.js";import"./star.component-CDOqquLq.js";import"./bubbles.component-D3eo4jZp.js";import"./calender-add.component-D4WHeM4U.js";import"./chain-link.component-Dl9ViTGS.js";import{I as Yt}from"./checkmark.component-R2px8xUs.js";import"./chevron-bottom.component-DLaO4DBf.js";import"./chevron-right.component-KMhiJYh5.js";import"./chevron-top.component-Db4qw5lr.js";import"./circle-check.component-TAzvXILU.js";import"./triangle-exclamation.component-BE7gShXQ.js";import"./circles-three.component-XG09Eidd.js";import"./credit-card.component-BdHQhPr2.js";import"./cross-small.component-EFfw3vQm.js";import"./dot-grid-one-horizontal-CFHuegqJ.js";import"./folder.component-DVcmruPG.js";import"./magnifying-glass.component-DjhG6JPp.js";import"./people-profile.component-mBCU0NPz.js";import"./push.component-GO9M03Sl.js";import"./rocket.component-DH5DuTAD.js";import"./square-grid-circle.component-wZlP9YQj.js";import"./img.component-MDK7xbH3.js";import"./input.component-B-9n1hHF.js";import"./link.component-Du_Uve17.js";import"./mask.component-DmqdlB6B.js";import"./menu-button.component-Di-BLVVz.js";import"./popover.component-Bht6TI0b.js";import"./segmented-control.component-ClRJJeUA.js";import"./select.component-Bph21nNJ.js";import"./signal.component-rQ8yDA4J.js";import"./spinner.component-D__6Rmkk.js";import"./text.component-Cy4JnYRC.js";import"./textarea.component-DINdkJvA.js";import"./theme.component-CW2K_n3c.js";import"./video.component-RrMjNbsD.js";import{G as Ut,a as Xt}from"./form-control-header.component-DIQtapHK.js";import{o as qt}from"./observe-light-dom-CmJPHUQ4.js";const Ht=G`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
    font: var(--_font-label);

    /* Color */
    --_checkbox-label-color: var(--gds-sys-color-l3-content-tertiary);

    /* Perimiter */
    --_perimeter-size: var(--gds-sys-space-2xl);
    --_container-gap: var(--gds-sys-space-s);
  }

  :host(:invalid) {
    --_checkbox-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_container-gap: var(--gds-sys-space-xs);
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  :host([size='small']) .checkbox-group {
    gap: var(--gds-sys-space-xs);
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
    gap: var(--gds-sys-space-s) var(--gds-sys-space-xl);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-s);
  }

  :host([size='small']) .direction-column .content {
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) .direction-row .content {
    gap: var(--gds-sys-space-xs) var(--gds-sys-space-m);
  }
`;var Jt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,mt=t=>{throw TypeError(t)},g=(t,e,s,r)=>{for(var o=r>1?void 0:r?Kt(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&Jt(e,s,o),o},vt=(t,e,s)=>e.has(t)||mt("Cannot "+s),tt=(t,e,s)=>(vt(t,e,"read from private field"),s?s.call(t):e.get(t)),et=(t,e,s)=>e.has(t)?mt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s)=>(vt(t,e,"access private method"),s),O,u,ft,yt,_t,bt,H,xt,kt;let c=class extends nt{constructor(){super(...arguments),et(this,u),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,et(this,O,()=>{this.checkboxes.forEach(t=>{t.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(t){this._internalValue=t}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(t=>{t.checked=this.value.includes(t.value)||!1})}_handleGroupInvalidChange(){tt(this,O).call(this)}focus(){var t;(t=this.checkboxes[0])==null||t.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",tt(this,O))}render(){const t={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return l`<div
      role="group"
      id="checkboxgroup"
      class=${rt(t)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${f(this,u,ft).call(this)}
    </div>`}_syncOnDOMChange(){f(this,u,H).call(this)}};O=new WeakMap;u=new WeakSet;ft=function(){return[f(this,u,yt).call(this),f(this,u,_t).call(this),f(this,u,kt).call(this)].map(e=>l`${e}`)};yt=function(){if(this.label)return l`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};_t=function(){return l`<div class="content">
      <slot @input=${f(this,u,bt)}></slot>
    </div>`};bt=function(t){t&&t.stopPropagation(),f(this,u,H).call(this),f(this,u,xt).call(this)};H=function(){const t=this.checkboxes.filter(e=>e.checked).map(e=>e.value);JSON.stringify(t)!==JSON.stringify(this.value)&&(this.value=t)};xt=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};kt=function(){return l`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};c.styles=[Ht];g([n()],c.prototype,"size",2);g([n()],c.prototype,"direction",2);g([n({attribute:"supporting-text"})],c.prototype,"supportingText",2);g([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);g([n({type:Array})],c.prototype,"value",1);g([z("#checkboxgroup")],c.prototype,"_elCheckboxGroup",2);g([D("value",{waitUntilFirstUpdate:!0})],c.prototype,"_handleValueChange",1);g([D("invalid")],c.prototype,"_handleGroupInvalidChange",1);g([qt({attributes:!0,childList:!0,subtree:!0,characterData:!0})],c.prototype,"_syncOnDOMChange",1);c=g([dt()],c);let V=class extends It(Bt(ht(c))){};V=g([W("gds-checkbox-group",{dependsOn:[Ut,Xt]})],V);const Qt=G`
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
`,R=new Set;function Zt(){Tt.instance.injectGlobalStyles("dialog-scroll-lock",G`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function jt(t){if(R.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=te()+ee();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function st(t){R.delete(t),R.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function te(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ee(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var se=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,wt=t=>{throw TypeError(t)},m=(t,e,s,r)=>{for(var o=r>1?void 0:r?oe(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&se(e,s,o),o},J=(t,e,s)=>e.has(t)||wt("Cannot "+s),d=(t,e,s)=>(J(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?wt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),B=(t,e,s,r)=>(J(t,e,"write to private field"),e.set(t,s),s),re=(t,e,s)=>(J(t,e,"access private method"),s),_,N,P,Y,M,U,Ct,K,w;Zt();let p=class extends ht(At(Ft(it))){constructor(){super(...arguments),v(this,U),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,v(this,_),v(this,N,t=>{const s=t.target.returnValue;if(s!=="prop-change"){if(!d(this,P).call(this,s))return;this.close(s||"native-close");return}this.close(s||"native-close")}),v(this,P,t=>d(this,M).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),v(this,Y,t=>d(this,M).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),v(this,M,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),v(this,K,t=>{this.show("slotted-trigger")}),v(this,w,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&s&&this.open){const o=s.getBoundingClientRect(),a=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,i="click-outside";!a&&d(this,P).call(this,i)&&this.close(i)}})}show(t){this.open=!0,t&&d(this,Y).call(this,t)}close(t){B(this,_,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),st(this)}render(){return l`<slot
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
              padding="xl"
              variant="secondary"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="tertiary"
                    size="small"
                    label=${T("Close")}
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
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}>
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(B(this,_,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),jt(this),document.removeEventListener("click",d(this,w)),requestAnimationFrame(()=>document.addEventListener("click",d(this,w))),zt&&((s=this._elDialog)==null||s.focus())})):(B(this,_,d(this,_)||"prop-change"),(t=this._elDialog)==null||t.close(d(this,_)),st(this),document.removeEventListener("click",d(this,w)),this.requestUpdate("open"))}};_=new WeakMap;N=new WeakMap;P=new WeakMap;Y=new WeakMap;M=new WeakMap;U=new WeakSet;Ct=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",d(this,K)),t==null||t.setAttribute("aria-haspopup","dialog")}};K=new WeakMap;w=new WeakMap;p.styles=[Qt];p.styleExpressionBaseSelector="dialog";m([n({type:Boolean,reflect:!0})],p.prototype,"open",2);m([n()],p.prototype,"heading",2);m([n()],p.prototype,"variant",2);m([n()],p.prototype,"placement",2);m([n({type:Boolean})],p.prototype,"scrollable",2);m([z("dialog")],p.prototype,"_elDialog",2);m([z('slot[name="trigger"]')],p.prototype,"_elTriggerSlot",2);m([D("open")],p.prototype,"_handleOpenChange",1);p=m([W("gds-dialog",{dependsOn:[lt,ct,gt,ut,Lt]}),dt()],p);const ie=G`
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
`;var ae=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,$t=t=>{throw TypeError(t)},I=(t,e,s,r)=>{for(var o=r>1?void 0:r?ne(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&ae(e,s,o),o},Q=(t,e,s)=>e.has(t)||$t("Cannot "+s),C=(t,e,s)=>(Q(t,e,"read from private field"),e.get(t)),A=(t,e,s)=>e.has(t)?$t("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),ot=(t,e,s,r)=>(Q(t,e,"write to private field"),e.set(t,s),s),$=(t,e,s)=>(Q(t,e,"access private method"),s),x,E,b,Z,X,Et;let k=class extends it{constructor(){super(...arguments),A(this,b),this.hideErrors=!1,this.reactive=!1,A(this,x),A(this,E)}get errorCount(){return $(this,b,X).call(this).length}focus(t){this._elRoot.then(e=>{const s=e.querySelector('[gds-element="gds-button"]');s&&s.focus(t)})}connectedCallback(){super.connectedCallback(),ot(this,x,this.closest("form")||void 0),C(this,x)&&this.reactive&&(ot(this,E,new MutationObserver(()=>{this.refresh()})),C(this,E).observe(C(this,x),{attributes:!0,subtree:!0}))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=C(this,E))==null||t.disconnect()}refresh(){this.requestUpdate()}render(){const t=$(this,b,Z).call(this),e=$(this,b,X).call(this);return L(e.length>0,()=>l`<gds-card
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
              ${T(Dt`There are ${e.length} errors to correct before you can continue:`)}
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
                        ${Wt($(this,b,Et).call(this,s),pt)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};x=new WeakMap;E=new WeakMap;b=new WeakSet;Z=function(){var t;return Array.from(((t=C(this,x))==null?void 0:t.elements)||[]).filter(e=>e.gdsElementName!=="gds-checkbox")};X=function(){return $(this,b,Z).call(this).filter(t=>t.ariaInvalid==="true"||t.invalid)};Et=async function(t){const e=(await this._elRoot).getBoundingClientRect().top;return t.getBoundingClientRect().top<e?l`<gds-icon-arrow-up></gds-icon-arrow-up>`:l`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};k.styles=[at,ie];I([n({type:Boolean})],k.prototype,"hideErrors",2);I([n({type:Boolean})],k.prototype,"reactive",2);I([Vt("#root")],k.prototype,"_elRoot",2);k=I([W("gds-form-summary",{dependsOn:[ct,ut,gt,lt,Rt]})],k);const le=G`
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
        ${Mt({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};S=new WeakSet;Gt=function(t){this.disabled||t.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,q(this,S,j).call(this))};j=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};h.styles=[at,Pt,le];y([n()],h.prototype,"label",2);y([n({attribute:"supporting-text"})],h.prototype,"supportingText",2);y([n({type:Boolean})],h.prototype,"checked",2);y([n({type:Boolean,reflect:!0})],h.prototype,"indeterminate",2);y([n({type:Boolean,reflect:!0})],h.prototype,"disabled",2);y([z('input[type="checkbox"]')],h.prototype,"_elCheckbox",2);y([D("indeterminate")],h.prototype,"_handleIndeterminateChange",1);h=y([W("gds-checkbox",{dependsOn:[Ot,Yt,Nt]})],h);h.define();V.define();export{k as G,p as a};
