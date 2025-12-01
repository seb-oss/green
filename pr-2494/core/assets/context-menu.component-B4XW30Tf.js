import{Y as k,h,A as C,g as E,L as M,K as D,H as T,b as S,t as W,n as v,d as I,a2 as z,I as B,J as R}from"./iframe-CY5pIDSk.js";import{s as F,F as H,L as N,u as q}from"./unwrap-slots-CPM0vpDG.js";import{n as K,e as U}from"./ref-DRKDgsvN.js";import{I as J}from"./dot-grid-one-horizontal-DUk5Nk0V.js";import{a as Y,G as Q}from"./popover.component-3pkpXZlK.js";import"./menu-heading.component-BmgfoZ7c.js";var V=Object.getOwnPropertyDescriptor,P=e=>{throw TypeError(e)},X=(e,t,s,n)=>{for(var a=n>1?void 0:n?V(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=i(a)||a);return a},Z=(e,t,s)=>t.has(e)||P("Cannot "+s),j=(e,t,s)=>(Z(e,t,"read from private field"),s?s.call(e):t.get(e)),ee=(e,t,s)=>t.has(e)?P("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f;let g=class extends H(C){constructor(){super(...arguments),ee(this,f,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",j(this,f)),k.instance.apply(this,"gds-option")}render(){return h`<div class="item"><slot></slot></div>`}};f=new WeakMap;g.styles=[F];g=X([E("gds-menu-item")],g);var te=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},se=(e,t,s,n)=>{for(var a=n>1?void 0:n?te(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=i(a)||a);return a},ae=(e,t,s)=>t.has(e)||x("Cannot "+s),_=(e,t,s)=>(ae(e,t,"read from private field"),s?s.call(e):t.get(e)),ne=(e,t,s)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),u;let y=class extends C{constructor(){super(),ne(this,u,U()),new N(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),k.instance.apply(this,"gds-listbox")}get navigableItems(){return _(this,u).value?q(_(this,u).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return h`<slot ${K(_(this,u))}></slot>`}};u=new WeakMap;y=se([E("gds-menu",{dependsOn:[g]})],y);var re=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,A=e=>{throw TypeError(e)},d=(e,t,s,n)=>{for(var a=n>1?void 0:n?oe(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=(n?i(t,s,a):i(a))||a);return n&&a&&re(t,s,a),a},L=(e,t,s)=>t.has(e)||A("Cannot "+s),l=(e,t,s)=>(L(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?A("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),O=(e,t,s,n)=>(L(e,t,"write to private field"),t.set(e,s),s),ie=(e,t,s)=>(L(e,t,"access private method"),s),p,w,m,b,$,G;let o=class extends M(D(C)){constructor(){super(...arguments),c(this,$),this.open=!1,this.buttonLabel=T("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",c(this,p),c(this,w,()=>{var t;l(this,p)||O(this,p,((t=this.shadowRoot)==null?void 0:t.querySelector("#trigger"))??void 0);const e=l(this,p);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",s=>{(s.key==="ArrowDown"||s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.open=!0)}),Y(e,this.open,"menu"))}),c(this,m,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(t=>t instanceof HTMLElement);e&&O(this,p,e),l(this,w).call(this)}),c(this,b,()=>h`<gds-popover
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
        @gds-menu-item-click=${ie(this,$,G)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),k.instance.apply(this,"gds-context-menu"),this.updateComplete.then(l(this,m)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return h`<slot
        name="trigger"
        @slotchange=${l(this,m)}
        ><gds-button
          .rank=${"secondary"}
          id="trigger"
          label=${this.buttonLabel}
        >
          ${this.showLabel?h`<slot name="icon" slot="lead"
                  ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></slot
                >${this.buttonLabel}`:h`<slot name="icon"
                ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
              ></slot>`}
        </gds-button>
      </slot>
      ${S(this.open,l(this,b))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>{var e;return(e=l(this,p))==null?void 0:e.focus()})}};p=new WeakMap;w=new WeakMap;m=new WeakMap;b=new WeakMap;$=new WeakSet;G=function(){this.open=!1};o.styles=[W];o.shadowRootOptions={mode:"open",delegatesFocus:!0};d([v({type:Boolean,reflect:!0})],o.prototype,"open",2);d([v({attribute:"button-label"})],o.prototype,"buttonLabel",2);d([v({attribute:"show-label",type:Boolean})],o.prototype,"showLabel",2);d([v()],o.prototype,"label",2);d([v()],o.prototype,"placement",2);d([I('slot[name="trigger"]')],o.prototype,"_elTriggerSlot",2);d([z("open",{waitUntilFirstUpdate:!0})],o.prototype,"_handleOpenChange",1);o=d([E("gds-context-menu",{dependsOn:[g,y,Q,R,J]}),B()],o);export{g as G,o as a};
