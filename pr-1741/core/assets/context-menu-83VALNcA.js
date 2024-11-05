import{m as E}from"./runtime-CMQcyTl6.js";import{i as O,E as x}from"./lit-element-C_s9q329.js";import{g as m,h as f,G as g,n as c}from"./custom-element-scoping-Di9DMhPw.js";import{r as k}from"./query-async-MEroNOeJ.js";import{e as L}from"./class-map-Bz98xO8-.js";import{T as _}from"./transitional-styles-zVaACW89.js";import{n as P,e as M}from"./ref-D_ho-JAG.js";import{s as T,F as D,L as G,u as B}from"./menu-heading-MqxZNBLu.js";import"./popover-DKZwb11Y.js";import"./backdrop-_4pvK58i.js";const A=O`
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
`;var W=Object.defineProperty,S=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},I=(e,t,s,a)=>{for(var r=a>1?void 0:a?S(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&W(t,s,r),r},R=(e,t,s)=>t.has(e)||C("Cannot "+s),F=(e,t,s)=>(R(e,t,"read from private field"),s?s.call(e):t.get(e)),Z=(e,t,s)=>t.has(e)?C("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),h;let u=class extends D(g){constructor(){super(...arguments),Z(this,h,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",F(this,h)),_.instance.apply(this,"gds-option")}render(){return f`<div><slot></slot></div>`}};h=new WeakMap;u.styles=[T];u=I([m("gds-menu-item")],u);var N=Object.defineProperty,K=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},q=(e,t,s,a)=>{for(var r=a>1?void 0:a?K(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&N(t,s,r),r},z=(e,t,s)=>t.has(e)||y("Cannot "+s),d=(e,t,s)=>(z(e,t,"read from private field"),s?s.call(e):t.get(e)),H=(e,t,s)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p;let b=class extends g{constructor(){super(),H(this,p,M()),new G(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),_.instance.apply(this,"gds-listbox")}get navigableItems(){return d(this,p).value?B(d(this,p).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return f`<slot ${P(d(this,p))}></slot>`}};p=new WeakMap;b=q([m("gds-menu")],b);var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},l=(e,t,s,a)=>{for(var r=a>1?void 0:a?Q(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&J(t,s,r),r},U=(e,t,s)=>t.has(e)||$("Cannot "+s),V=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),X=(e,t,s)=>(U(e,t,"access private method"),s),v,w;let i=class extends g{constructor(){super(),V(this,v),this.open=!1,this.buttonLabel=E("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start"}connectedCallback(){super.connectedCallback(),_.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return f`<button
        id="trigger"
        class="icon border-0 small ${L({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:x}
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
        <gds-menu
          aria-label=${this.label??this.buttonLabel}
          @gds-menu-item-click=${X(this,v,w)}
        >
          <slot></slot>
        </gds-menu>
      </gds-popover>`}};v=new WeakSet;w=function(){this.open=!1};i.styles=[A];i.shadowRootOptions={mode:"open",delegatesFocus:!0};l([c({type:Boolean,reflect:!0})],i.prototype,"open",2);l([c({attribute:"button-label"})],i.prototype,"buttonLabel",2);l([c({attribute:"show-label",type:Boolean})],i.prototype,"showLabel",2);l([c()],i.prototype,"label",2);l([c()],i.prototype,"placement",2);l([k("#trigger")],i.prototype,"elTriggerBtn",2);i=l([m("gds-context-menu")],i);
