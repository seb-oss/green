var L=e=>{throw TypeError(e)};var B=(e,t,s)=>t.has(e)||L("Cannot "+s);var g=(e,t,s)=>(B(e,t,"read from private field"),s?s.call(e):t.get(e)),x=(e,t,s)=>t.has(e)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s);import{m as S}from"./runtime-BL31MtW8.js";import{l as N}from"./localized-decorator-DtmrKsyB.js";import{i as R,E as F}from"./lit-element-Bx14lxc-.js";import{h as u,g as $,G as k,n as c}from"./custom-element-scoping-D6CCRyY9.js";import{r as Z}from"./query-async-MEroNOeJ.js";import{e as z}from"./class-map-CXsQwv0r.js";import{n as H}from"./when-BR7zwNJC.js";import{n as K,e as U}from"./ref-Z7-tXbd5.js";import{T as E}from"./transitional-styles-BOpNQOm4.js";import{s as q,F as J}from"./option.styles-Q9vCdDGy.js";import{t as Q}from"./tokens.style-KMm7w703.js";import{a as V,b as X}from"./declarative-layout-mixins-DzH2v4OZ.js";import{G as Y}from"./popover.component-owrGZj7b.js";var d;class j{constructor(t){x(this,d,t=>{var n,o;const s=t.target;if(!this.host.navigableItems.includes(s))return;let a=!1;if(t.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(s)+1,l=this.host.navigableItems[r];l==null||l.focus(),a=!0}else if(t.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(s)-1,l=this.host.navigableItems[r];l==null||l.focus(),a=!0}else if(t.key==="Home")(n=this.host.navigableItems[0])==null||n.focus(),a=!0;else if(t.key==="End")(o=this.host.navigableItems[this.host.navigableItems.length-1])==null||o.focus(),a=!0;else{const r=t.key.toLowerCase();if(r.length!==1)return;const l=r>="a"&&r<="z",A=r>="0"&&r<="9";if(l||A){const v=this.host.navigableItems.find(W=>{var O;const f=(O=W.textContent)==null?void 0:O.trim().toLowerCase();return f==null?void 0:f.startsWith(r)});v==null||v.focus(),a=!0}}a&&(t.preventDefault(),t.stopPropagation())});(this.host=t).addController(this)}hostConnected(){this.host.addEventListener("keydown",g(this,d))}hostDisconnected(){this.host.removeEventListener("keydown",g(this,d))}}d=new WeakMap;function ee(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,I=e=>{throw TypeError(e)},ne=(e,t,s,a)=>{for(var n=a>1?void 0:a?se(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(a?r(t,s,n):r(n))||n);return a&&n&&te(t,s,n),n},re=(e,t,s)=>t.has(e)||I("Cannot "+s),ae=(e,t,s)=>(re(e,t,"read from private field"),s?s.call(e):t.get(e)),oe=(e,t,s)=>t.has(e)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_;let m=class extends J(k){constructor(){super(...arguments),oe(this,_,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",ae(this,_)),E.instance.apply(this,"gds-option")}render(){return u`<div><slot></slot></div>`}};_=new WeakMap;m.styles=[q];m=ne([$("gds-menu-item")],m);var ie=Object.defineProperty,le=Object.getOwnPropertyDescriptor,D=e=>{throw TypeError(e)},he=(e,t,s,a)=>{for(var n=a>1?void 0:a?le(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(a?r(t,s,n):r(n))||n);return a&&n&&ie(t,s,n),n},pe=(e,t,s)=>t.has(e)||D("Cannot "+s),b=(e,t,s)=>(pe(e,t,"read from private field"),s?s.call(e):t.get(e)),de=(e,t,s)=>t.has(e)?D("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p;let y=class extends k{constructor(){super(),de(this,p,U()),new j(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),E.instance.apply(this,"gds-listbox")}get navigableItems(){return b(this,p).value?ee(b(this,p).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return u`<slot ${K(b(this,p))}></slot>`}};p=new WeakMap;y=he([$("gds-menu",{dependsOn:[m]})],y);const ce=R`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
    }
    button {
      display: flex;
      border-width: 0;
      background-color: #ededed;
      border-radius: calc(1px * infinity);
      padding: 0.4rem 0.8rem;
      font-family: inherit;
      cursor: pointer;
      align-items: center;
      gap: 0.5rem;
    }

    button:hover {
      background-color: #dcdcdc;
    }
  }
`;var ue=Object.defineProperty,me=Object.getOwnPropertyDescriptor,G=e=>{throw TypeError(e)},h=(e,t,s,a)=>{for(var n=a>1?void 0:a?me(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(a?r(t,s,n):r(n))||n);return a&&n&&ue(t,s,n),n},M=(e,t,s)=>t.has(e)||G("Cannot "+s),ve=(e,t,s)=>(M(e,t,"read from private field"),s?s.call(e):t.get(e)),P=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),fe=(e,t,s)=>(M(e,t,"access private method"),s),C,w,T;let i=class extends V(X(k)){constructor(){super(...arguments),P(this,w),this.open=!1,this.buttonLabel=S("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",P(this,C,()=>u`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${this.elTriggerBtn}
      .anchorRef=${this.elTriggerBtn}
      .label=${this.label}
      .placement=${this.placement}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${fe(this,w,T)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),E.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return u`<button
        id="trigger"
        class="icon border-0 small ${z({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!0}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:F}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      ${H(this.open,ve(this,C))}`}};C=new WeakMap;w=new WeakSet;T=function(){this.open=!1};i.styles=[Q,ce];i.shadowRootOptions={mode:"open",delegatesFocus:!0};h([c({type:Boolean,reflect:!0})],i.prototype,"open",2);h([c({attribute:"button-label"})],i.prototype,"buttonLabel",2);h([c({attribute:"show-label",type:Boolean})],i.prototype,"showLabel",2);h([c()],i.prototype,"label",2);h([c()],i.prototype,"placement",2);h([Z("#trigger")],i.prototype,"elTriggerBtn",2);i=h([$("gds-context-menu",{dependsOn:[y,Y]}),N()],i);i.define();
