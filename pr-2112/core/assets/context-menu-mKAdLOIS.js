import{m as P}from"./runtime-BL31MtW8.js";import{l as x}from"./localized-decorator-DtmrKsyB.js";import{i as L,E as G}from"./lit-element-Bx14lxc-.js";import{h,g as _,G as b,n as c}from"./custom-element-scoping-b4c89-hi.js";import{r as M}from"./query-async-MEroNOeJ.js";import{e as T}from"./class-map-CXsQwv0r.js";import{n as D}from"./when-BR7zwNJC.js";import{T as C}from"./transitional-styles-DZvN5yHb.js";import{s as B,F as W,L as A,u as S}from"./option.styles-OvFRlCj3.js";import{n as I,e as R}from"./ref-R0wBYijq.js";import{t as F}from"./tokens.style-BY4y5f1K.js";import{b as Z,d as N}from"./declarative-layout-mixins-CxeMR8ZJ.js";import{G as z}from"./popover.component-BvS21ZYv.js";import"./menu-heading.component-DAdBSd0Y.js";var K=Object.defineProperty,q=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},H=(e,t,s,a)=>{for(var r=a>1?void 0:a?q(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&K(t,s,r),r},J=(e,t,s)=>t.has(e)||$("Cannot "+s),Q=(e,t,s)=>(J(e,t,"read from private field"),s?s.call(e):t.get(e)),U=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),v;let d=class extends W(b){constructor(){super(...arguments),U(this,v,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",Q(this,v)),C.instance.apply(this,"gds-option")}render(){return h`<div><slot></slot></div>`}};v=new WeakMap;d.styles=[B];d=H([_("gds-menu-item")],d);var V=Object.defineProperty,X=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},Y=(e,t,s,a)=>{for(var r=a>1?void 0:a?X(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&V(t,s,r),r},j=(e,t,s)=>t.has(e)||w("Cannot "+s),u=(e,t,s)=>(j(e,t,"read from private field"),s?s.call(e):t.get(e)),ee=(e,t,s)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p;let m=class extends b{constructor(){super(),ee(this,p,R()),new A(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),C.instance.apply(this,"gds-listbox")}get navigableItems(){return u(this,p).value?S(u(this,p).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return h`<slot ${I(u(this,p))}></slot>`}};p=new WeakMap;m=Y([_("gds-menu",{dependsOn:[d]})],m);const te=L`
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
`;var se=Object.defineProperty,re=Object.getOwnPropertyDescriptor,k=e=>{throw TypeError(e)},l=(e,t,s,a)=>{for(var r=a>1?void 0:a?re(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&se(t,s,r),r},E=(e,t,s)=>t.has(e)||k("Cannot "+s),ae=(e,t,s)=>(E(e,t,"read from private field"),s?s.call(e):t.get(e)),y=(e,t,s)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),ne=(e,t,s)=>(E(e,t,"access private method"),s),f,g,O;let i=class extends Z(N(b)){constructor(){super(...arguments),y(this,g),this.open=!1,this.buttonLabel=P("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",y(this,f,()=>h`<gds-popover
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
        @gds-menu-item-click=${ne(this,g,O)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),C.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return h`<button
        id="trigger"
        class="icon border-0 small ${T({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!0}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:G}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      ${D(this.open,ae(this,f))}`}};f=new WeakMap;g=new WeakSet;O=function(){this.open=!1};i.styles=[F,te];i.shadowRootOptions={mode:"open",delegatesFocus:!0};l([c({type:Boolean,reflect:!0})],i.prototype,"open",2);l([c({attribute:"button-label"})],i.prototype,"buttonLabel",2);l([c({attribute:"show-label",type:Boolean})],i.prototype,"showLabel",2);l([c()],i.prototype,"label",2);l([c()],i.prototype,"placement",2);l([M("#trigger")],i.prototype,"elTriggerBtn",2);i=l([_("gds-context-menu",{dependsOn:[d,m,z]}),x()],i);i.define();export{d as G};
