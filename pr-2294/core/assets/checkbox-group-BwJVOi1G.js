import{n as l,h as n,g as $,G as W}from"./gds-element-DKcDvDP5.js";import{a as re}from"./query-p8xgzTDt.js";import{o as se}from"./if-defined-CVqwUuaf.js";import{r as oe,c as ie,b as ae}from"./radio.component-eqzSfIVw.js";import{t as S}from"./tokens.style-Cct4pBht.js";import{w as L}from"./watch-tFciLXSI.js";import{a as R,G as ne}from"./button.component-BkjhbsKb.js";import"./dropdown.component-B798FnZl.js";import"./menu-heading.component-c36j22Z7.js";import"./context-menu.component-Drq1vOK2.js";import"./badge.component-i6097UKo.js";import"./breadcrumbs.component-DGZjIjL5.js";import{G as le}from"./card.component-DkFuee-h.js";import"./coachmark.component-CGcGbefQ.js";import"./container.component-uvD79Ag5.js";import{m as ce}from"./datepicker.component-C3xR0AnV.js";import"./dialog.component-CQW78CXx.js";import{G as pe}from"./div.component-CLY16RHW.js";import"./divider.component-BbGq62mG.js";import"./filter-chips.component-BzqTitfa.js";import{G as de}from"./flex.component-BfKO9GTN.js";import{l as he,m as A,s as ue}from"./runtime-CNluP0A8.js";import{i as P,E as me}from"./lit-element-Bx14lxc-.js";import{r as ge}from"./query-async-MEroNOeJ.js";import{n as I}from"./when-BR7zwNJC.js";import{a as fe}from"./arrow-left.component-sMYgzWQ-.js";import"./grid.component-CMUdk6Zw.js";import"./grouped-list.component-OMasPbWH.js";import"./icon-BXUh_f_p.js";import"./zoom-out.component-QKep8nCu.js";import"./arrow-down.component-D-Gx2MyA.js";import"./arrow-right.component-DSW388kA.js";import{I as ve}from"./arrow-rotate-counter-clockwise.component-C9QGL3BV.js";import"./lightning.component-BjY1Oyuc.js";import"./star.component-D58Yvp1w.js";import"./brand-green.component-BZU8zl7J.js";import"./pin.component-CCNbvZJp.js";import"./bubbles.component-CDGE53SZ.js";import"./cain-link.component-kLu4tbH0.js";import"./calender-add.component-BkDcrmXg.js";import{I as be}from"./checkmark.component-CioA8zuv.js";import"./chevron-bottom.component-DUScgZc3.js";import"./chevron-right.component-BqwgsnPv.js";import"./chevron-top.component-B9_MghOD.js";import"./circle-check.component-BVGxgGNk.js";import"./triangle-exclamation.component-BQNg54Op.js";import"./circles-three.component-ByLB7uWg.js";import"./credit-card.component-BzxVV7kW.js";import"./cross-large.component-Db6OGGHZ.js";import"./cross-small.component-D9XbEW7U.js";import"./folder.component-T19PvO-5.js";import"./square-placeholder.component-DeKoGxYE.js";import"./magnifying-glass.component-kjF6_QsW.js";import"./people-profile.component-CwIgQje4.js";import"./plus-small.component-D7iiAp02.js";import"./push.component-C4FsslQ-.js";import"./rocket.component-BrkIHo-V.js";import"./square-grid-circle.component-Bc6ZjUmV.js";import"./sun.component-Dulk5Lwh.js";import"./img.component-CvOw6kav.js";import"./input.component-DU1wRah8.js";import"./link.component-b2Bn36zI.js";import"./mask.component-BUIdKu5M.js";import"./menu-button.component-BrS915Tt.js";import"./popover.component-DpyRlm0p.js";import"./segmented-control.component-DPglba-e.js";import"./select.component-CZ_L6L55.js";import"./signal.component-BoFH-z6z.js";import{d as xe,b as _e,w as ye,s as Ce}from"./declarative-layout-mixins-D-CzJZ0x.js";import"./spinner.component-tRIws-99.js";import"./text.component-LNrakRk-.js";import"./textarea.component-7lw0E8xx.js";import"./theme.component-CC2sbH35.js";import"./video.component-CsFI7aja.js";import{e as $e}from"./class-map-CXsQwv0r.js";import{G as ke,a as we}from"./form-control-header.component-D7XCcRww.js";import{o as Ee}from"./observe-light-dom-CmJPHUQ4.js";const Ge=P`
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
`;var Oe=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,U=e=>{throw TypeError(e)},h=(e,t,r,o)=>{for(var s=o>1?void 0:o?ze(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&Oe(t,r,s),s},q=(e,t,r)=>t.has(e)||U("Cannot "+r),Se=(e,t,r)=>(q(e,t,"read from private field"),r?r.call(e):t.get(e)),B=(e,t,r)=>t.has(e)?U("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),u=(e,t,r)=>(q(e,t,"access private method"),r),E,d,H,N,J,X,T,K,Q;let c=class extends R{constructor(){super(...arguments),B(this,d),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,B(this,E,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this.checkboxes.pop()}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}focus(){var e;(e=this.checkboxes[0])==null||e.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",Se(this,E))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return n`<div
      role="group"
      id="checkboxgroup"
      class=${$e(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${u(this,d,H).call(this)}
    </div>`}_syncOnDOMChange(){u(this,d,T).call(this)}};E=new WeakMap;d=new WeakSet;H=function(){return[u(this,d,N).call(this),u(this,d,J).call(this),u(this,d,Q).call(this)].map(t=>n`${t}`)};N=function(){if(this.label)return n`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};J=function(){return n`<div class="content">
      <slot @input=${u(this,d,X)}></slot>
    </div>`};X=function(e){e&&e.stopPropagation(),u(this,d,T).call(this),u(this,d,K).call(this)};T=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};K=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Q=function(){return n`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};c.styles=[Ge];h([l()],c.prototype,"size",2);h([l()],c.prototype,"direction",2);h([l({attribute:"supporting-text"})],c.prototype,"supportingText",2);h([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);h([l({type:Array})],c.prototype,"value",1);h([L("value",{waitUntilFirstUpdate:!0})],c.prototype,"_handleValueChange",1);h([Ee({attributes:!0,childList:!0,subtree:!0,characterData:!0})],c.prototype,"_syncOnDOMChange",1);c=h([he()],c);let G=class extends xe(_e(ye(c))){};G=h([$("gds-checkbox-group",{dependsOn:[ke,we]})],G);const Pe=P`
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
`;var Te=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Y=e=>{throw TypeError(e)},k=(e,t,r,o)=>{for(var s=o>1?void 0:o?Me(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&Te(t,r,s),s},M=(e,t,r)=>t.has(e)||Y("Cannot "+r),b=(e,t,r)=>(M(e,t,"read from private field"),t.get(e)),w=(e,t,r)=>t.has(e)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),V=(e,t,r,o)=>(M(e,t,"write to private field"),t.set(e,r),r),x=(e,t,r)=>(M(e,t,"access private method"),r),f,_,g,F,O,Z;let v=class extends W{constructor(){super(...arguments),w(this,g),this.hideErrors=!1,this.reactive=!1,w(this,f),w(this,_)}get errorCount(){return x(this,g,O).call(this).length}focus(e){this._elRoot.then(t=>{const r=t.querySelector('[gds-element="gds-button"]');r&&r.focus(e)})}connectedCallback(){super.connectedCallback(),V(this,f,this.closest("form")||void 0),b(this,f)&&this.reactive&&(V(this,_,new MutationObserver(()=>{this.refresh()})),b(this,_).observe(b(this,f),{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=b(this,_))==null||e.disconnect()}refresh(){this.requestUpdate()}render(){const e=x(this,g,F).call(this),t=x(this,g,O).call(this);return I(t.length>0,()=>n`<gds-card
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
          aria-label=${A("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text
              font-size="heading-xs"
              font-weight="book"
              id="description"
            >
              ${A(ue`There are ${t.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${e.map((r,o)=>n`<li ?inert=${!(r.ariaInvalid==="true"||r.invalid)}>
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
                      <div id=${`error-label-${o}`}>
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
                        ${ce(x(this,g,Z).call(this,r),me)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};f=new WeakMap;_=new WeakMap;g=new WeakSet;F=function(){var e;return Array.from(((e=b(this,f))==null?void 0:e.elements)||[]).filter(t=>t.gdsElementName!=="gds-checkbox")};O=function(){return x(this,g,F).call(this).filter(e=>e.ariaInvalid==="true"||e.invalid)};Z=async function(e){const t=(await this._elRoot).getBoundingClientRect().top;return e.getBoundingClientRect().top<t?n`<gds-icon-arrow-up></gds-icon-arrow-up>`:n`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};v.styles=[S,Pe];k([l({type:Boolean})],v.prototype,"hideErrors",2);k([l({type:Boolean})],v.prototype,"reactive",2);k([ge("#root")],v.prototype,"_elRoot",2);v=k([$("gds-form-summary",{dependsOn:[le,de,pe,ne,fe]})],v);var Fe=Object.defineProperty,De=Object.getOwnPropertyDescriptor,j=(e,t,r,o)=>{for(var s=o>1?void 0:o?De(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&Fe(t,r,s),s};let C=class extends W{render(){return n``}};C.styles=[S];j([Ce({property:"height",valueTemplate:e=>`var(--gds-sys-space-${e})`})],C.prototype,"size",2);C=j([$("gds-spacer")],C);const Ae=P`
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
`;var Ie=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,ee=e=>{throw TypeError(e)},m=(e,t,r,o)=>{for(var s=o>1?void 0:o?Be(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&Ie(t,r,s),s},Ve=(e,t,r)=>t.has(e)||ee("Cannot "+r),We=(e,t,r)=>t.has(e)?ee("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),z=(e,t,r)=>(Ve(e,t,"access private method"),r),y,te,D;let p=class extends R{constructor(){super(...arguments),We(this,y),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}render(){return n`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        aria-describedby=${se(this.supportingText?"supporting-text":"")}
        id="checkbox-input"
        @change=${()=>{this.checked=this._elCheckbox.checked,z(this,y,D).call(this)}}
      />
      <gds-toggle-control-base type="checkbox" @click=${z(this,y,te)}>
        <label for="checkbox-input" slot="label"> ${this.label} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${ie({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox||this}formResetCallback(){this.checked=!1}};y=new WeakSet;te=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,z(this,y,D).call(this))};D=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};p.styles=[S,oe,Ae];m([l()],p.prototype,"label",2);m([l({attribute:"supporting-text"})],p.prototype,"supportingText",2);m([l({type:Boolean})],p.prototype,"checked",2);m([l({type:Boolean,reflect:!0})],p.prototype,"indeterminate",2);m([l({type:Boolean,reflect:!0})],p.prototype,"disabled",2);m([re('input[type="checkbox"]')],p.prototype,"_elCheckbox",2);m([L("indeterminate")],p.prototype,"_handleIndeterminateChange",1);p=m([$("gds-checkbox",{dependsOn:[ae,be,ve]})],p);p.define();G.define();export{v as G};
