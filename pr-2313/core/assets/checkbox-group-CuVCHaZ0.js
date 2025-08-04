import{n as l,h as n,g as $,G as q}from"./gds-element-DKcDvDP5.js";import{a as ae}from"./query-p8xgzTDt.js";import{r as ne,c as le,b as ce}from"./radio.component-Cfdm81g6.js";import{t as D}from"./tokens.style-Khpz0lp_.js";import{w as N}from"./watch-tFciLXSI.js";import{a as H,G as de}from"./button.component-CP7I7SJN.js";import"./dropdown.component-B94xG6fP.js";import"./menu-heading.component-CdxrgUmf.js";import"./context-menu.component-m2PR1-C9.js";import"./badge.component-D4FxP9Pi.js";import"./breadcrumbs.component-BKtQvazv.js";import{G as pe}from"./card.component-UD91Xhmi.js";import"./coachmark.component-CGcGbefQ.js";import"./container.component-DrZkzTNZ.js";import{m as he}from"./datepicker.component-teAv3ulb.js";import"./dialog.component-5ZUDNM__.js";import{G as ue}from"./div.component-BCGMV-IS.js";import"./divider.component-CwagVNTp.js";import"./filter-chips.component-Caoz2z0V.js";import{G as ge}from"./flex.component-C1NAGQHk.js";import{l as me,m as I,s as fe}from"./runtime-CNluP0A8.js";import{i as F,E as ve}from"./lit-element-Bx14lxc-.js";import{r as be}from"./query-async-MEroNOeJ.js";import{n as V}from"./when-BR7zwNJC.js";import{a as _e}from"./arrow-left.component-u21aBHcs.js";import"./grid.component-DRJiNQPF.js";import"./grouped-list.component-BUC6FI2S.js";import"./icon-BPdtWFmz.js";import"./zoom-out.component-vbRuDmef.js";import"./arrow-down.component-BPtMdi36.js";import"./arrow-right.component-Bw-C8R6B.js";import"./arrow-rotate-counter-clockwise.component-BD6tjU19.js";import"./lightning.component-DfEdpdOD.js";import"./star.component-DWb7foqb.js";import"./brand-green.component-DoKS91tV.js";import"./pin.component-h1RYL1Z4.js";import"./bubbles.component-DnZA-QTF.js";import"./cain-link.component-IGDmXqCV.js";import"./calender-add.component-CXOtcCBm.js";import{I as xe}from"./checkmark.component-GooY-2LC.js";import"./chevron-bottom.component-B8Nj_Ub-.js";import"./chevron-right.component-Be7TENGg.js";import"./chevron-top.component--fGCwVtO.js";import"./circle-check.component-Dod2R036.js";import"./triangle-exclamation.component-DHVFdFv1.js";import"./circles-three.component-CVRLKcw7.js";import"./credit-card.component-B5SecYEV.js";import"./cross-large.component-BCNcIVoh.js";import"./cross-small.component-CF8Pyq63.js";import"./folder.component-DzkiLu0i.js";import"./square-placeholder.component-_98Cxn77.js";import"./magnifying-glass.component-BYV8NIlH.js";import"./people-profile.component-DYM5zRQx.js";import"./plus-small.component-DwZUC7pp.js";import"./push.component-DaOmDvef.js";import"./rocket.component-NIY7DOOL.js";import"./square-grid-circle.component-BUdaorrI.js";import"./sun.component-ssaAT3va.js";import"./img.component-CLqESan0.js";import"./input.component-BLqcb1Nl.js";import"./link.component-3jOF7UcC.js";import"./mask.component-CDf9O4Hc.js";import"./menu-button.component-BEguu0G2.js";import"./popover.component-2Azy5OjP.js";import"./segmented-control.component-UOr8xEau.js";import"./select.component-CLE8WT4R.js";import"./signal.component-DWu4bDjh.js";import{d as ye,b as ke,w as Ce,s as $e}from"./declarative-layout-mixins-D-CzJZ0x.js";import"./spinner.component-BOmKGneW.js";import"./text.component-m9A6I6j-.js";import"./textarea.component-Be78s5v6.js";import"./theme.component-BDb3g7Zr.js";import"./video.component-7USUQKat.js";import{e as we}from"./class-map-CXsQwv0r.js";import{G as Ee,a as Ge}from"./form-control-header.component-CuIHKeYV.js";import{o as Oe}from"./observe-light-dom-CmJPHUQ4.js";const ze=F`
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
`;var Se=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,J=e=>{throw TypeError(e)},h=(e,t,r,i)=>{for(var s=i>1?void 0:i?Pe(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Se(t,r,s),s},K=(e,t,r)=>t.has(e)||J("Cannot "+r),Te=(e,t,r)=>(K(e,t,"read from private field"),r?r.call(e):t.get(e)),L=(e,t,r)=>t.has(e)?J("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),u=(e,t,r)=>(K(e,t,"access private method"),r),z,p,X,Q,Y,Z,A,j,ee;let c=class extends H{constructor(){super(...arguments),L(this,p),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,L(this,z,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this.checkboxes.pop()}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}focus(){var e;(e=this.checkboxes[0])==null||e.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",Te(this,z))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return n`<div
      role="group"
      id="checkboxgroup"
      class=${we(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${u(this,p,X).call(this)}
    </div>`}_syncOnDOMChange(){u(this,p,A).call(this)}};z=new WeakMap;p=new WeakSet;X=function(){return[u(this,p,Q).call(this),u(this,p,Y).call(this),u(this,p,ee).call(this)].map(t=>n`${t}`)};Q=function(){if(this.label)return n`<gds-form-control-header class="size-${this.size}">
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
    </div>`};Z=function(e){e&&e.stopPropagation(),u(this,p,A).call(this),u(this,p,j).call(this)};A=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};j=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};ee=function(){return n`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};c.styles=[ze];h([l()],c.prototype,"size",2);h([l()],c.prototype,"direction",2);h([l({attribute:"supporting-text"})],c.prototype,"supportingText",2);h([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);h([l({type:Array})],c.prototype,"value",1);h([N("value",{waitUntilFirstUpdate:!0})],c.prototype,"_handleValueChange",1);h([Oe({attributes:!0,childList:!0,subtree:!0,characterData:!0})],c.prototype,"_syncOnDOMChange",1);c=h([me()],c);let S=class extends ye(ke(Ce(c))){};S=h([$("gds-checkbox-group",{dependsOn:[Ee,Ge]})],S);const Me=F`
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
`;var De=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,te=e=>{throw TypeError(e)},w=(e,t,r,i)=>{for(var s=i>1?void 0:i?Fe(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&De(t,r,s),s},W=(e,t,r)=>t.has(e)||te("Cannot "+r),b=(e,t,r)=>(W(e,t,"read from private field"),t.get(e)),E=(e,t,r)=>t.has(e)?te("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),R=(e,t,r,i)=>(W(e,t,"write to private field"),t.set(e,r),r),_=(e,t,r)=>(W(e,t,"access private method"),r),f,x,m,B,P,re;let v=class extends q{constructor(){super(...arguments),E(this,m),this.hideErrors=!1,this.reactive=!1,E(this,f),E(this,x)}get errorCount(){return _(this,m,P).call(this).length}focus(e){this._elRoot.then(t=>{const r=t.querySelector('[gds-element="gds-button"]');r&&r.focus(e)})}connectedCallback(){super.connectedCallback(),R(this,f,this.closest("form")||void 0),b(this,f)&&this.reactive&&(R(this,x,new MutationObserver(()=>{this.refresh()})),b(this,x).observe(b(this,f),{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=b(this,x))==null||e.disconnect()}refresh(){this.requestUpdate()}render(){const e=_(this,m,B).call(this),t=_(this,m,P).call(this);return V(t.length>0,()=>n`<gds-card
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
          aria-label=${I("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text
              font-size="heading-xs"
              font-weight="book"
              id="description"
            >
              ${I(fe`There are ${t.length} errors to correct before you can continue:`)}
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
                        ${V(!this.hideErrors,()=>n`<gds-div font-size="body-s">
                              ${r.dataset.errormessage||r.errorMessage||r.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${r.label} field`}
                      >
                        ${he(_(this,m,re).call(this,r),ve)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};f=new WeakMap;x=new WeakMap;m=new WeakSet;B=function(){var e;return Array.from(((e=b(this,f))==null?void 0:e.elements)||[]).filter(t=>t.gdsElementName!=="gds-checkbox")};P=function(){return _(this,m,B).call(this).filter(e=>e.ariaInvalid==="true"||e.invalid)};re=async function(e){const t=(await this._elRoot).getBoundingClientRect().top;return e.getBoundingClientRect().top<t?n`<gds-icon-arrow-up></gds-icon-arrow-up>`:n`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};v.styles=[D,Me];w([l({type:Boolean})],v.prototype,"hideErrors",2);w([l({type:Boolean})],v.prototype,"reactive",2);w([be("#root")],v.prototype,"_elRoot",2);v=w([$("gds-form-summary",{dependsOn:[pe,ge,ue,de,_e]})],v);var Ae=Object.defineProperty,We=Object.getOwnPropertyDescriptor,se=(e,t,r,i)=>{for(var s=i>1?void 0:i?We(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Ae(t,r,s),s};let C=class extends q{render(){return n``}};C.styles=[D];se([$e({property:"height",valueTemplate:e=>`var(--gds-sys-space-${e})`})],C.prototype,"size",2);C=se([$("gds-spacer")],C);const Be=F`
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

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }
`;var Ie=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,ie=e=>{throw TypeError(e)},g=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ve(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Ie(t,r,s),s},oe=(e,t,r)=>t.has(e)||ie("Cannot "+r),G=(e,t,r)=>(oe(e,t,"read from private field"),r?r.call(e):t.get(e)),O=(e,t,r)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),U=(e,t,r)=>(oe(e,t,"access private method"),r),y,T,k,M;let d=class extends H{constructor(){super(...arguments),O(this,k),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1,O(this,y,e=>{this.focus(),U(this,k,M).call(this)}),O(this,T,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),U(this,k,M).call(this))})}get value(){return this._internalValue||""}set value(e){this._internalValue=e}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",G(this,T)),this.addEventListener("click",G(this,y))}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}render(){return n`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        ${this.supportingText?'aria-describedby="supporting-text"':""}
        id="checkbox-input"
      />
      <gds-toggle-control-base type="checkbox">
        <label for="checkbox-input" slot="label" @click=${G(this,y)}>
          ${this.label}
        </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${le({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox||this}formResetCallback(){this.checked=!1}};y=new WeakMap;T=new WeakMap;k=new WeakSet;M=function(){this.indeterminate?(this.indeterminate=!1,this.checked=!0):this.checked=!this.checked,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};d.styles=[D,ne,Be];g([l()],d.prototype,"label",2);g([l({attribute:"supporting-text"})],d.prototype,"supportingText",2);g([l({type:Boolean})],d.prototype,"checked",2);g([l({type:Boolean,reflect:!0})],d.prototype,"indeterminate",2);g([l({type:Boolean,reflect:!0})],d.prototype,"disabled",2);g([ae('input[type="checkbox"]')],d.prototype,"_elCheckbox",2);g([N("indeterminate")],d.prototype,"_handleIndeterminateChange",1);d=g([$("gds-checkbox",{dependsOn:[ce,xe]})],d);d.define();S.define();export{v as G};
