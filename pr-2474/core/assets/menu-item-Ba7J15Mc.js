import{m as D,l as S}from"./runtime-CNluP0A8.js";import{n as m}from"./Reflect-DJ7r0WLU.js";import{a as T}from"./query-p8xgzTDt.js";import{n as W}from"./when-BR7zwNJC.js";import{h as c,g as C,G as k}from"./gds-element-DTROifYq.js";import{n as A,e as z}from"./ref-R0wBYijq.js";import{T as E}from"./transitional-styles-C-VAQSys.js";import{s as B,F as I,L as R,u as F}from"./unwrap-slots-CufDiWNZ.js";import{t as N}from"./tokens.style-BcVhf7GG.js";import{b as H,d as q}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as K}from"./button.component-CymCYp3R.js";import{I as J}from"./dot-grid-one-horizontal-CKehN2fu.js";import{G as Q}from"./popover.component-D-f0JXvk.js";import"./menu-heading-zPFZ9WN9.js";var U=Object.defineProperty,V=Object.getOwnPropertyDescriptor,L=e=>{throw TypeError(e)},X=(e,t,s,a)=>{for(var r=a>1?void 0:a?V(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&U(t,s,r),r},Y=(e,t,s)=>t.has(e)||L("Cannot "+s),Z=(e,t,s)=>(Y(e,t,"read from private field"),s?s.call(e):t.get(e)),j=(e,t,s)=>t.has(e)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_;let h=class extends I(k){constructor(){super(...arguments),j(this,_,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",Z(this,_)),E.instance.apply(this,"gds-option")}render(){return c`<div class="item"><slot></slot></div>`}};_=new WeakMap;h.styles=[B];h=X([C("gds-menu-item")],h);var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,G=e=>{throw TypeError(e)},se=(e,t,s,a)=>{for(var r=a>1?void 0:a?te(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&ee(t,s,r),r},re=(e,t,s)=>t.has(e)||G("Cannot "+s),f=(e,t,s)=>(re(e,t,"read from private field"),s?s.call(e):t.get(e)),ae=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),v;let b=class extends k{constructor(){super(),ae(this,v,z()),new R(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),E.instance.apply(this,"gds-listbox")}get navigableItems(){return f(this,v).value?F(f(this,v).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return c`<slot ${A(f(this,v))}></slot>`}};v=new WeakMap;b=se([C("gds-menu",{dependsOn:[h]})],b);var ne=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,M=e=>{throw TypeError(e)},d=(e,t,s,a)=>{for(var r=a>1?void 0:a?oe(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&ne(t,s,r),r},O=(e,t,s)=>t.has(e)||M("Cannot "+s),l=(e,t,s)=>(O(e,t,"read from private field"),s?s.call(e):t.get(e)),u=(e,t,s)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),P=(e,t,s,a)=>(O(e,t,"write to private field"),t.set(e,s),s),ie=(e,t,s)=>(O(e,t,"access private method"),s),p,$,g,w,y,x;let i=class extends H(q(k)){constructor(){super(...arguments),u(this,y),this.open=!1,this.buttonLabel=D("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",u(this,p),u(this,$,()=>{var t;l(this,p)||P(this,p,((t=this.shadowRoot)==null?void 0:t.querySelector("#trigger"))??void 0);const e=l(this,p);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",s=>{(s.key==="ArrowDown"||s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.open=!0)}))}),u(this,g,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(t=>t instanceof HTMLElement);e&&P(this,p,e),l(this,$).call(this)}),u(this,w,()=>c`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(l(this,p))}
      .anchorRef=${Promise.resolve(l(this,p))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${ie(this,y,x)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),E.instance.apply(this,"gds-context-menu"),this.updateComplete.then(l(this,g))}render(){return c`<slot
        name="trigger"
        @slotchange=${l(this,g)}
        ><gds-button
          .rank=${"secondary"}
          id="trigger"
          label=${this.buttonLabel}
        >
          ${this.showLabel?c`<slot name="icon" slot="lead"
                  ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></slot
                >${this.buttonLabel}`:c`<slot name="icon"
                ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
              ></slot>`}
        </gds-button>
      </slot>
      ${W(this.open,l(this,w))}`}};p=new WeakMap;$=new WeakMap;g=new WeakMap;w=new WeakMap;y=new WeakSet;x=function(){this.open=!1};i.styles=[N];i.shadowRootOptions={mode:"open",delegatesFocus:!0};d([m({type:Boolean,reflect:!0})],i.prototype,"open",2);d([m({attribute:"button-label"})],i.prototype,"buttonLabel",2);d([m({attribute:"show-label",type:Boolean})],i.prototype,"showLabel",2);d([m()],i.prototype,"label",2);d([m()],i.prototype,"placement",2);d([T('slot[name="trigger"]')],i.prototype,"_elTriggerSlot",2);i=d([C("gds-context-menu",{dependsOn:[h,b,Q,K,J]}),S()],i);i.define();h.define();
