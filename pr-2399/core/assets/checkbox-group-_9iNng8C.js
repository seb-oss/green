import{n as a}from"./Reflect-DJ7r0WLU.js";import{a as W}from"./query-p8xgzTDt.js";import{e as et,o as rt}from"./if-defined-BAXgs-ZI.js";import{b as ot}from"./radio.component-DWxSiM5_.js";import{h as c,g as O,G as st}from"./gds-element-DTROifYq.js";import{a as it}from"./transitional-styles-DOynpii0.js";import{c as at}from"./rbcb-toggle.template-B-MDayTD.js";import{t as L}from"./tokens.style-DW_p3hws.js";import{w as S}from"./watch-tFciLXSI.js";import{a as R,G as nt}from"./button.component-C5T3Owg7.js";import"./dropdown.component-V1-H76uY.js";import"./menu-heading.component-DCorZ2oz.js";import"./context-menu.component-Drfcfcx7.js";import"./badge.component-DMmH0C3x.js";import"./breadcrumbs.component-oARl8wzG.js";import{G as lt}from"./card.component-QOfo36tN.js";import"./coachmark.component-qv9mg8wx.js";import{m as ct}from"./datepicker.component-B5ARH2sQ.js";import"./dialog.component-D-XPIrx1.js";import{G as pt}from"./div.component-DPUDEuOs.js";import"./divider.component-na9OTYoZ.js";import"./filter-chips.component-u_oMe0Fb.js";import{G as dt}from"./flex.component-sFfxQKGj.js";import{l as ht,m as A,s as ut}from"./runtime-CNluP0A8.js";import{i as T,E as mt}from"./lit-element-Bx14lxc-.js";import{r as gt}from"./query-async-MEroNOeJ.js";import{n as D}from"./when-BR7zwNJC.js";import{I as ft}from"./arrow-up.component-C1e7yKzC.js";import"./grid.component-C_DF0pWT.js";import"./grouped-list.component-__kvP5al.js";import"./icon-Unif9O0f.js";import"./zoom-out.component-0AJ0mSz6.js";import"./arrow-down.component-DavdOezB.js";import"./arrow-left.component-BzKBj4oY.js";import"./arrow-right.component-C01J1K9y.js";import{I as vt}from"./arrow-rotate-counter-clockwise.component-BnkKlJ2a.js";import"./sun.component-CtuTD7rp.js";import"./star.component-Bv7t-0Tk.js";import"./bubbles.component-cZn7_cSl.js";import"./calender-add.component-ClAl24DT.js";import"./chain-link.component-DEtj-QuL.js";import{I as bt}from"./checkmark.component-DMEfmRO5.js";import"./chevron-bottom.component-DOAZfl72.js";import"./chevron-right.component-DHZ0wZC5.js";import"./chevron-top.component-BNYhyKvO.js";import"./circle-check.component-B1Z0fVUD.js";import"./triangle-exclamation.component-dj1bsbN3.js";import"./circles-three.component-Cd1J-9jA.js";import"./credit-card.component-Bc51wtaN.js";import"./cross-large.component-CBEE6Uzj.js";import"./cross-small.component-BeLaK_DU.js";import"./dot-grid-one-horizontal-CQ_Wp_xu.js";import"./folder.component-ZhtTqXAP.js";import"./magnifying-glass.component-D90NQeLz.js";import"./people-profile.component-BJXmJxLw.js";import"./push.component-BWnj9xFl.js";import"./rocket.component-B7q1N3oo.js";import"./square-grid-circle.component-D1WaWZfG.js";import"./img.component-CSpFEDWD.js";import"./input.component-DjvxCHBo.js";import"./link.component-BCvj8bXa.js";import"./mask.component-BAf1Uksc.js";import"./menu-button.component-Cxm6F5Dl.js";import"./popover.component-B7VdqNfe.js";import"./segmented-control.component-BCM6JLBz.js";import"./select.component-DazD-8-B.js";import"./signal.component-D9BEkUdc.js";import"./spinner.component-Cc6PJiDG.js";import"./text.component-060zZEUB.js";import"./textarea.component-BG0HbNeB.js";import"./theme.component-BpYRebn8.js";import"./video.component-DtdjuOyj.js";import{G as xt,a as _t}from"./form-control-header.component-Bb0UHUx3.js";import{o as yt}from"./observe-light-dom-CmJPHUQ4.js";import{d as kt,b as Ct,w as $t}from"./declarative-layout-mixins-DjJmHTNk.js";const wt=T`
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
`;var Gt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,U=t=>{throw TypeError(t)},d=(t,e,r,s)=>{for(var o=s>1?void 0:s?Et(e,r):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(o=(s?l(e,r,o):l(o))||o);return s&&o&&Gt(e,r,o),o},q=(t,e,r)=>e.has(t)||U("Cannot "+r),z=(t,e,r)=>(q(t,e,"read from private field"),r?r.call(t):e.get(t)),B=(t,e,r)=>e.has(t)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),u=(t,e,r)=>(q(t,e,"access private method"),r),k,h,H,N,J,X,M,K,Q;let i=class extends R{constructor(){super(...arguments),B(this,h),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,B(this,k,()=>{this.checkboxes.forEach(t=>{t.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(t){this._internalValue=t}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(t=>{t.checked=this.value.includes(t.value)||!1})}_handleGroupInvalidChange(){z(this,k).call(this)}focus(){var t;(t=this.checkboxes[0])==null||t.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",z(this,k))}render(){const t={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return c`<div
      role="group"
      id="checkboxgroup"
      class=${et(t)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${u(this,h,H).call(this)}
    </div>`}_syncOnDOMChange(){u(this,h,M).call(this)}};k=new WeakMap;h=new WeakSet;H=function(){return[u(this,h,N).call(this),u(this,h,J).call(this),u(this,h,Q).call(this)].map(e=>c`${e}`)};N=function(){if(this.label)return c`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};J=function(){return c`<div class="content">
      <slot @input=${u(this,h,X)}></slot>
    </div>`};X=function(t){t&&t.stopPropagation(),u(this,h,M).call(this),u(this,h,K).call(this)};M=function(){const t=this.checkboxes.filter(e=>e.checked).map(e=>e.value);JSON.stringify(t)!==JSON.stringify(this.value)&&(this.value=t)};K=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Q=function(){return c`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};i.styles=[wt];d([a()],i.prototype,"size",2);d([a()],i.prototype,"direction",2);d([a({attribute:"supporting-text"})],i.prototype,"supportingText",2);d([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);d([a({type:Array})],i.prototype,"value",1);d([W("#checkboxgroup")],i.prototype,"_elCheckboxGroup",2);d([S("value",{waitUntilFirstUpdate:!0})],i.prototype,"_handleValueChange",1);d([S("invalid")],i.prototype,"_handleGroupInvalidChange",1);d([yt({attributes:!0,childList:!0,subtree:!0,characterData:!0})],i.prototype,"_syncOnDOMChange",1);i=d([ht()],i);let w=class extends kt(Ct($t(i))){};w=d([O("gds-checkbox-group",{dependsOn:[xt,_t]})],w);const Ot=T`
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
`;var St=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Y=t=>{throw TypeError(t)},C=(t,e,r,s)=>{for(var o=s>1?void 0:s?Tt(e,r):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(o=(s?l(e,r,o):l(o))||o);return s&&o&&St(e,r,o),o},P=(t,e,r)=>e.has(t)||Y("Cannot "+r),b=(t,e,r)=>(P(t,e,"read from private field"),e.get(t)),$=(t,e,r)=>e.has(t)?Y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),V=(t,e,r,s)=>(P(t,e,"write to private field"),e.set(t,r),r),x=(t,e,r)=>(P(t,e,"access private method"),r),f,_,g,F,G,Z;let v=class extends st{constructor(){super(...arguments),$(this,g),this.hideErrors=!1,this.reactive=!1,$(this,f),$(this,_)}get errorCount(){return x(this,g,G).call(this).length}focus(t){this._elRoot.then(e=>{const r=e.querySelector('[gds-element="gds-button"]');r&&r.focus(t)})}connectedCallback(){super.connectedCallback(),V(this,f,this.closest("form")||void 0),b(this,f)&&this.reactive&&(V(this,_,new MutationObserver(()=>{this.refresh()})),b(this,_).observe(b(this,f),{attributes:!0,subtree:!0}))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=b(this,_))==null||t.disconnect()}refresh(){this.requestUpdate()}render(){const t=x(this,g,F).call(this),e=x(this,g,G).call(this);return D(e.length>0,()=>c`<gds-card
          id="root"
          role="navigation"
          variant="negative"
          padding="l"
          background="negative-01"
          color="negative-01"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${A("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font="heading-xs" font-weight="book" id="description">
              ${A(ut`There are ${e.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${t.map((r,s)=>c`<li ?inert=${!(r.ariaInvalid==="true"||r.invalid)}>
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
                      @click=${o=>{o.preventDefault(),r.focus()}}
                    >
                      <div id=${`error-label-${s}`}>
                        <gds-div font-weight="book"
                          >${r.dataset.label||r.label||r.ariaLabel}</gds-div
                        >
                        ${D(!this.hideErrors,()=>c`<gds-div font="body-regular-s">
                              ${r.dataset.errormessage||r.errorMessage||r.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${r.label} field`}
                      >
                        ${ct(x(this,g,Z).call(this,r),mt)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};f=new WeakMap;_=new WeakMap;g=new WeakSet;F=function(){var t;return Array.from(((t=b(this,f))==null?void 0:t.elements)||[]).filter(e=>e.gdsElementName!=="gds-checkbox")};G=function(){return x(this,g,F).call(this).filter(t=>t.ariaInvalid==="true"||t.invalid)};Z=async function(t){const e=(await this._elRoot).getBoundingClientRect().top;return t.getBoundingClientRect().top<e?c`<gds-icon-arrow-up></gds-icon-arrow-up>`:c`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};v.styles=[L,Ot];C([a({type:Boolean})],v.prototype,"hideErrors",2);C([a({type:Boolean})],v.prototype,"reactive",2);C([gt("#root")],v.prototype,"_elRoot",2);v=C([O("gds-form-summary",{dependsOn:[lt,dt,pt,nt,ft]})],v);const Mt=T`
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
`;var Pt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,j=t=>{throw TypeError(t)},m=(t,e,r,s)=>{for(var o=s>1?void 0:s?Ft(e,r):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(o=(s?l(e,r,o):l(o))||o);return s&&o&&Pt(e,r,o),o},It=(t,e,r)=>e.has(t)||j("Cannot "+r),At=(t,e,r)=>e.has(t)?j("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),E=(t,e,r)=>(It(t,e,"access private method"),r),y,tt,I;let p=class extends R{constructor(){super(...arguments),At(this,y),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(t){this._internalValue=t}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}render(){return c`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        aria-describedby=${rt(this.supportingText?"supporting-text":"")}
        id="checkbox-input"
        @change=${()=>{this.checked=this._elCheckbox.checked,E(this,y,I).call(this)}}
      />
      <gds-toggle-control-base type="checkbox" @click=${E(this,y,tt)}>
        <label for="checkbox-input" slot="label"> ${this.label} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${at({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};y=new WeakSet;tt=function(t){this.disabled||t.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,E(this,y,I).call(this))};I=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};p.styles=[L,it,Mt];m([a()],p.prototype,"label",2);m([a({attribute:"supporting-text"})],p.prototype,"supportingText",2);m([a({type:Boolean})],p.prototype,"checked",2);m([a({type:Boolean,reflect:!0})],p.prototype,"indeterminate",2);m([a({type:Boolean,reflect:!0})],p.prototype,"disabled",2);m([W('input[type="checkbox"]')],p.prototype,"_elCheckbox",2);m([S("indeterminate")],p.prototype,"_handleIndeterminateChange",1);p=m([O("gds-checkbox",{dependsOn:[ot,bt,vt]})],p);p.define();w.define();export{v as G};
