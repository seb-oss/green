import{n as l,h as n,g as k,G as q}from"./gds-element-DKcDvDP5.js";import{a as ae}from"./query-p8xgzTDt.js";import{r as ne,c as le,b as de}from"./radio.component-C6Do6ih3.js";import{t as M}from"./tokens.style-Khpz0lp_.js";import{w as N}from"./watch-tFciLXSI.js";import{a as H,G as ce}from"./button.component-CP7I7SJN.js";import"./dropdown.component-OG6NLcxF.js";import"./menu-heading.component-CdxrgUmf.js";import"./context-menu.component-m2PR1-C9.js";import"./badge.component-D4FxP9Pi.js";import"./breadcrumbs.component-BKtQvazv.js";import{G as pe}from"./card.component-UD91Xhmi.js";import"./coachmark.component-CGcGbefQ.js";import"./container.component-DrZkzTNZ.js";import{m as he}from"./datepicker.component-CuLApWCu.js";import"./dialog.component-5ZUDNM__.js";import{G as ue}from"./div.component-BCGMV-IS.js";import"./divider.component-CwagVNTp.js";import"./filter-chips.component-Caoz2z0V.js";import{G as me}from"./flex.component-C1NAGQHk.js";import{l as ge,m as B,s as fe}from"./runtime-CNluP0A8.js";import{i as P,E as ve}from"./lit-element-Bx14lxc-.js";import{r as be}from"./query-async-MEroNOeJ.js";import{n as I}from"./when-BR7zwNJC.js";import{a as _e}from"./arrow-left.component-u21aBHcs.js";import"./grid.component-DRJiNQPF.js";import"./grouped-list.component-BUC6FI2S.js";import"./icon-BPdtWFmz.js";import"./zoom-out.component-vbRuDmef.js";import"./arrow-down.component-BPtMdi36.js";import"./arrow-right.component-Bw-C8R6B.js";import"./arrow-rotate-counter-clockwise.component-BD6tjU19.js";import"./lightning.component-DfEdpdOD.js";import"./star.component-DWb7foqb.js";import"./brand-green.component-DoKS91tV.js";import"./pin.component-h1RYL1Z4.js";import"./bubbles.component-DnZA-QTF.js";import"./cain-link.component-IGDmXqCV.js";import"./calender-add.component-CXOtcCBm.js";import{I as xe}from"./checkmark.component-GooY-2LC.js";import"./chevron-bottom.component-B8Nj_Ub-.js";import"./chevron-right.component-Be7TENGg.js";import"./chevron-top.component--fGCwVtO.js";import"./circle-check.component-Dod2R036.js";import"./triangle-exclamation.component-DHVFdFv1.js";import"./circles-three.component-CVRLKcw7.js";import"./credit-card.component-B5SecYEV.js";import"./cross-large.component-BCNcIVoh.js";import"./cross-small.component-CF8Pyq63.js";import"./folder.component-DzkiLu0i.js";import"./square-placeholder.component-_98Cxn77.js";import"./magnifying-glass.component-BYV8NIlH.js";import"./people-profile.component-DYM5zRQx.js";import"./plus-small.component-DwZUC7pp.js";import"./push.component-DaOmDvef.js";import"./rocket.component-NIY7DOOL.js";import"./square-grid-circle.component-BUdaorrI.js";import"./sun.component-ssaAT3va.js";import"./img.component-CLqESan0.js";import"./input.component-BLqcb1Nl.js";import"./link.component-3jOF7UcC.js";import"./mask.component-CDf9O4Hc.js";import"./menu-button.component-BEguu0G2.js";import"./popover.component-2Azy5OjP.js";import"./segmented-control.component-UOr8xEau.js";import"./select.component-CLE8WT4R.js";import"./signal.component-DWu4bDjh.js";import{d as ye,b as Ce,w as ke,s as we}from"./declarative-layout-mixins-D-CzJZ0x.js";import"./spinner.component-BOmKGneW.js";import"./text.component-m9A6I6j-.js";import"./textarea.component-Be78s5v6.js";import"./theme.component-BDb3g7Zr.js";import"./video.component-7USUQKat.js";import{e as $e}from"./class-map-CXsQwv0r.js";import{G as Ee,a as Ge}from"./form-control-header.component-CuIHKeYV.js";import{o as Oe}from"./observe-light-dom-CmJPHUQ4.js";const Se=P`
  :host {
    /* Font Sizes */
    --_font-size-label: var(--gds-sys-text-size-detail-m);
    --_line-height-label: var(--gds-sys-text-line-height-detail-m);
    --_font-size-supporting-text: var(--gds-sys-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-sys-text-line-height-detail-s);
    font-size: var(--_font-size-label);
    line-height: var(--_line-height-label);

    /* Color */
    --_checkbox-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_checkbox-label-color: var(--gds-sys-color-l3-content-negative);
  }

  :host([size='small']) {
    --_font-size-label: var(--gds-sys-text-size-detail-s);
    --_line-height-label: var(--gds-sys-text-line-height-detail-s);
    --_font-size-supporting-text: var(--gds-sys-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-sys-text-line-height-detail-s);
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
`;var ze=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,J=e=>{throw TypeError(e)},h=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ae(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&ze(t,r,s),s},K=(e,t,r)=>t.has(e)||J("Cannot "+r),Te=(e,t,r)=>(K(e,t,"read from private field"),r?r.call(e):t.get(e)),V=(e,t,r)=>t.has(e)?J("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),u=(e,t,r)=>(K(e,t,"access private method"),r),G,p,X,Q,Y,Z,D,j,ee;let d=class extends H{constructor(){super(...arguments),V(this,p),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,V(this,G,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this.checkboxes.pop()}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}focus(){var e;(e=this.checkboxes[0])==null||e.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",Te(this,G))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return n`<div
      role="group"
      id="checkboxgroup"
      class=${$e(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${u(this,p,X).call(this)}
    </div>`}_syncOnDOMChange(){u(this,p,D).call(this)}};G=new WeakMap;p=new WeakSet;X=function(){return[u(this,p,Q).call(this),u(this,p,Y).call(this),u(this,p,ee).call(this)].map(t=>n`${t}`)};Q=function(){if(this.label)return n`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};Y=function(){return n`<div class="content">
      <slot @input=${u(this,p,Z)}></slot>
    </div>`};Z=function(e){e&&e.stopPropagation(),u(this,p,D).call(this),u(this,p,j).call(this)};D=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};j=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};ee=function(){return n`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};d.styles=[Se];h([l()],d.prototype,"size",2);h([l()],d.prototype,"direction",2);h([l({attribute:"supporting-text"})],d.prototype,"supportingText",2);h([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);h([l({type:Array})],d.prototype,"value",1);h([N("value",{waitUntilFirstUpdate:!0})],d.prototype,"_handleValueChange",1);h([Oe({attributes:!0,childList:!0,subtree:!0,characterData:!0})],d.prototype,"_syncOnDOMChange",1);d=h([ge()],d);let O=class extends ye(Ce(ke(d))){};O=h([k("gds-checkbox-group",{dependsOn:[Ee,Ge]})],O);const Me=P`
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
`;var Pe=Object.defineProperty,De=Object.getOwnPropertyDescriptor,te=e=>{throw TypeError(e)},w=(e,t,r,i)=>{for(var s=i>1?void 0:i?De(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Pe(t,r,s),s},F=(e,t,r)=>t.has(e)||te("Cannot "+r),b=(e,t,r)=>(F(e,t,"read from private field"),t.get(e)),$=(e,t,r)=>t.has(e)?te("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),L=(e,t,r,i)=>(F(e,t,"write to private field"),t.set(e,r),r),_=(e,t,r)=>(F(e,t,"access private method"),r),f,x,g,W,S,re;let v=class extends q{constructor(){super(...arguments),$(this,g),this.hideErrors=!1,this.reactive=!1,$(this,f),$(this,x)}get errorCount(){return _(this,g,S).call(this).length}focus(e){this._elRoot.then(t=>{const r=t.querySelector('[gds-element="gds-button"]');r&&r.focus(e)})}connectedCallback(){super.connectedCallback(),L(this,f,this.closest("form")||void 0),b(this,f)&&this.reactive&&(L(this,x,new MutationObserver(()=>{this.refresh()})),b(this,x).observe(b(this,f),{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=b(this,x))==null||e.disconnect()}refresh(){this.requestUpdate()}render(){const e=_(this,g,W).call(this),t=_(this,g,S).call(this);return I(t.length>0,()=>n`<gds-card
          id="root"
          role="navigation"
          border-color="negative"
          border-radius="xs"
          border-width="0"
          padding="l"
          background="negative"
          color="negative"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${B("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text
              font-size="heading-xs"
              font-weight="book"
              id="description"
            >
              ${B(fe`There are ${t.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${e.map((r,i)=>n`<li ?inert=${!(r.ariaInvalid==="true"||r.invalid)}>
                    <gds-card
                      display="flex"
                      padding="s"
                      flex-direction="row"
                      align-items="center"
                      justify-content="space-between"
                      gap="xs"
                      level="3"
                      color="negative"
                      background="transparent; hover: negative/.2"
                      style="cursor: pointer"
                      border-width="0"
                      border-radius="xs"
                      margin="0 -xs"
                      @click=${s=>{s.preventDefault(),r.focus()}}
                    >
                      <div id=${`error-label-${i}`}>
                        <gds-div font-weight="book"
                          >${r.dataset.label||r.label||r.ariaLabel}</gds-div
                        >
                        ${I(!this.hideErrors,()=>n`<gds-div font-size="body-s">
                              ${r.dataset.errormessage||r.errorMessage||r.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${r.label} field`}
                      >
                        ${he(_(this,g,re).call(this,r),ve)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};f=new WeakMap;x=new WeakMap;g=new WeakSet;W=function(){var e;return Array.from(((e=b(this,f))==null?void 0:e.elements)||[]).filter(t=>t.gdsElementName!=="gds-checkbox")};S=function(){return _(this,g,W).call(this).filter(e=>e.ariaInvalid==="true"||e.invalid)};re=async function(e){const t=(await this._elRoot).getBoundingClientRect().top;return e.getBoundingClientRect().top<t?n`<gds-icon-arrow-up></gds-icon-arrow-up>`:n`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};v.styles=[M,Me];w([l({type:Boolean})],v.prototype,"hideErrors",2);w([l({type:Boolean})],v.prototype,"reactive",2);w([be("#root")],v.prototype,"_elRoot",2);v=w([k("gds-form-summary",{dependsOn:[pe,me,ue,ce,_e]})],v);var Fe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,se=(e,t,r,i)=>{for(var s=i>1?void 0:i?We(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Fe(t,r,s),s};let C=class extends q{render(){return n``}};C.styles=[M];se([we({property:"height",valueTemplate:e=>`var(--gds-sys-space-${e})`})],C.prototype,"size",2);C=se([k("gds-spacer")],C);const Be=P`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-l3-content-disabled);
    cursor: default;
  }

  :host(:invalid) {
    color: var(--gds-sys-color-l3-content-negative);
  }

  :host(:focus) {
    outline: none;
  }
`;var Ie=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,ie=e=>{throw TypeError(e)},m=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ve(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Ie(t,r,s),s},oe=(e,t,r)=>t.has(e)||ie("Cannot "+r),R=(e,t,r)=>(oe(e,t,"read from private field"),r?r.call(e):t.get(e)),E=(e,t,r)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),U=(e,t,r)=>(oe(e,t,"access private method"),r),z,A,y,T;let c=class extends H{constructor(){super(...arguments),E(this,y),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1,E(this,z,e=>{this.focus(),U(this,y,T).call(this)}),E(this,A,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),U(this,y,T).call(this))})}get value(){return this._internalValue||""}set value(e){this._internalValue=e}connectedCallback(){super.connectedCallback(),this.setAttribute("role","checkbox"),this._updateAriaState(),this.addEventListener("keydown",R(this,A)),this.addEventListener("click",R(this,z))}_updateAriaState(){this.setAttribute("aria-checked",this.indeterminate?"mixed":this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}updated(e){super.updated(e),(e.has("checked")||e.has("indeterminate")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}render(){return n`
      <gds-toggle-control-base
        supporting-text=${this.supportingText}
        label=${this.label}
        type="checkbox"
      >
        ${le({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox||this}formResetCallback(){this.checked=!1}};z=new WeakMap;A=new WeakMap;y=new WeakSet;T=function(){this.indeterminate?(this.indeterminate=!1,this.checked=!0):this.checked=!this.checked,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};c.styles=[M,ne,Be];m([l()],c.prototype,"label",2);m([l({attribute:"supporting-text"})],c.prototype,"supportingText",2);m([l({type:Boolean})],c.prototype,"checked",2);m([l({type:Boolean,reflect:!0})],c.prototype,"indeterminate",2);m([l({type:Boolean,reflect:!0})],c.prototype,"disabled",2);m([ae(".rbcb")],c.prototype,"_elCheckbox",2);m([N("indeterminate")],c.prototype,"_handleIndeterminateChange",1);c=m([k("gds-checkbox",{dependsOn:[de,xe]})],c);c.define();O.define();export{v as G};
