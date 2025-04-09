import{n as o,r as x,G as g,h as E,g as C}from"./custom-element-scoping-b4c89-hi.js";import{t as A}from"./tokens.style-C9bLefPj.js";import{w}from"./watch-tFciLXSI.js";import{i as D}from"./lit-element-Bx14lxc-.js";import{G as S}from"./selection-field-label.component-YG8VO96b.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./transitional-styles-BOwn52Fb.js";const O=D`
  @layer base, reset, transitional-styles;
  @layer base {
  }
`;S.define();var G=Object.defineProperty,F=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},i=(e,t,a,n)=>{for(var r=n>1?void 0:n?F(t,a):t,c=e.length-1,l;c>=0;c--)(l=e[c])&&(r=(n?l(t,a,r):l(r))||r);return n&&r&&G(t,a,r),r},L=(e,t,a)=>t.has(e)||y("Cannot "+a),u=(e,t,a)=>(L(e,t,"read from private field"),a?a.call(e):t.get(e)),b=(e,t,a)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),h,p;let s=class extends g{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,b(this,h,e=>{this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchEvent(new Event("gds-checkbox-change",{bubbles:!0})))}),b(this,p,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchEvent(new Event("gds-checkbox-change",{bubbles:!0})))}),this.addEventListener("keydown",u(this,p)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","checkbox"),this._updateAriaState(),this.addEventListener("click",u(this,h))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}render(){return E`
      <gds-selection-field-label
        supporting-text=${this.supportingText}
        label=${this.label}
        type="checkbox"
      >
        <div class="checkbox">
          <div class="state"></div>
          <div class="disc"></div>
        </div>
      </gds-selection-field-label>
    `}};h=new WeakMap;p=new WeakMap;s.styles=[A,O];i([o()],s.prototype,"label",2);i([o({attribute:"supporting-text"})],s.prototype,"supportingText",2);i([o()],s.prototype,"value",2);i([o({type:Boolean,reflect:!0})],s.prototype,"checked",2);i([o({type:Boolean,reflect:!0})],s.prototype,"disabled",2);i([o({type:Boolean})],s.prototype,"invalid",2);i([x()],s.prototype,"_isFocused",2);i([w("disabled")],s.prototype,"_handleDisabledChange",1);s=i([C("gds-checkbox")],s);const N={title:"Components/Checkbox",component:"gds-checkbox",tags:["autodocs"]},T={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},d={...T,name:"checkbox"};var v,f,m,k,_;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'checkbox'
}`,...(m=(f=d.parameters)==null?void 0:f.docs)==null?void 0:m.source},description:{story:"TODO: Add documentation",...(_=(k=d.parameters)==null?void 0:k.docs)==null?void 0:_.description}}};const Q=["checkbox"];export{Q as __namedExportsOrder,d as checkbox,N as default};
