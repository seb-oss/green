import{i as y,D as w}from"./lit-element-1d72f0ce.js";import{m as $}from"./runtime-c06dc943.js";import{R as E}from"./class-map-f04c1558.js";import{g as v,h as f,G as g,n as c}from"./gds-element-86064462.js";import{r as O}from"./query-async-1ff18261.js";import{c as k}from"./constrain-slots-08d8606c.js";import{T as b}from"./transitional-styles-8ea9588a.js";import{K as x,i as L}from"./ref-f16d4147.js";import{s as T,F as P,L as D,u as M}from"./menu-heading-59143ba4.js";import"./popover-dd11fc1b.js";import"./backdrop-0315f321.js";const B=y`
  @layer base, reset, transitional-styles;
  @layer base {
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
`;var G=Object.defineProperty,A=Object.getOwnPropertyDescriptor,R=(e,t,s,a)=>{for(var r=a>1?void 0:a?A(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&G(t,s,r),r},S=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},W=(e,t,s)=>(S(e,t,"read from private field"),s?s.call(e):t.get(e)),I=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},d;let u=class extends P(g){constructor(){super(...arguments),I(this,d,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",W(this,d)),b.instance.apply(this,"gds-option")}render(){return f`<div><slot></slot></div>`}};d=new WeakMap;u.styles=[T];u=R([v("gds-menu-item")],u);var F=Object.defineProperty,K=Object.getOwnPropertyDescriptor,Z=(e,t,s,a)=>{for(var r=a>1?void 0:a?K(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&F(t,s,r),r},N=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},h=(e,t,s)=>(N(e,t,"read from private field"),s?s.call(e):t.get(e)),q=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},p;let _=class extends g{constructor(){super(),q(this,p,L()),new D(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),b.instance.apply(this,"gds-listbox")}get navigableItems(){return h(this,p).value?M(h(this,p).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return f`<slot ${x(h(this,p))}></slot>`}};p=new WeakMap;_=Z([v("gds-menu")],_);var z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,l=(e,t,s,a)=>{for(var r=a>1?void 0:a?H(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&z(t,s,r),r},J=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},Q=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},U=(e,t,s)=>(J(e,t,"access private method"),s),m,C;let i=class extends g{constructor(){super(),Q(this,m),this.open=!1,this.buttonLabel=$("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",k(this)}connectedCallback(){super.connectedCallback(),b.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return f`<button
        id="trigger"
        class="icon border-0 small ${E({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:w}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      <gds-popover
        id="menu"
        .open=${this.open}
        .triggerRef=${this.elTriggerBtn}
        .anchorRef=${this.elTriggerBtn}
        .label=${this.label}
        .placement=${this.placement}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <gds-menu aria-label=${this.label??this.buttonLabel} @gds-menu-item-click=${U(this,m,C)}>
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`}};m=new WeakSet;C=function(){this.open=!1};i.styles=[B];i.shadowRootOptions={mode:"open",delegatesFocus:!0};l([c({type:Boolean,reflect:!0})],i.prototype,"open",2);l([c({attribute:"button-label"})],i.prototype,"buttonLabel",2);l([c({attribute:"show-label",type:Boolean})],i.prototype,"showLabel",2);l([c()],i.prototype,"label",2);l([c()],i.prototype,"placement",2);l([O("#trigger")],i.prototype,"elTriggerBtn",2);i=l([v("gds-context-menu")],i);
