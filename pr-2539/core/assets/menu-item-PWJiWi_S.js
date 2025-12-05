import{a4 as k,h,J as C,g as E,H as G,I as D,P as T,b as S,t as W,n as v,d as I,N as z,L as B,Q as R}from"./iframe-BIS5g5CB.js";import{n as F,e as N}from"./ref-C8KFcSOg.js";import{s as H,F as q,L as U,u as J}from"./unwrap-slots-DG6REzGI.js";import{I as K}from"./dot-grid-one-horizontal-DJPTnrZd.js";import{a as Q,G as V}from"./popover.component-ChgwnRAo.js";import"./menu-heading-DbVj0Ql6.js";var X=Object.getOwnPropertyDescriptor,P=e=>{throw TypeError(e)},Y=(e,t,s,r)=>{for(var a=r>1?void 0:r?X(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=i(a)||a);return a},Z=(e,t,s)=>t.has(e)||P("Cannot "+s),j=(e,t,s)=>(Z(e,t,"read from private field"),s?s.call(e):t.get(e)),ee=(e,t,s)=>t.has(e)?P("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_;let c=class extends q(C){constructor(){super(...arguments),ee(this,_,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",j(this,_)),k.instance.apply(this,"gds-option")}render(){return h`<div class="item"><slot></slot></div>`}};_=new WeakMap;c.styles=[H];c=Y([E("gds-menu-item")],c);var te=Object.getOwnPropertyDescriptor,M=e=>{throw TypeError(e)},se=(e,t,s,r)=>{for(var a=r>1?void 0:r?te(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=i(a)||a);return a},ae=(e,t,s)=>t.has(e)||M("Cannot "+s),f=(e,t,s)=>(ae(e,t,"read from private field"),s?s.call(e):t.get(e)),ne=(e,t,s)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g;let y=class extends C{constructor(){super(),ne(this,g,N()),new U(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),k.instance.apply(this,"gds-listbox")}get navigableItems(){return f(this,g).value?J(f(this,g).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return h`<slot ${F(f(this,g))}></slot>`}};g=new WeakMap;y=se([E("gds-menu",{dependsOn:[c]})],y);var re=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},p=(e,t,s,r)=>{for(var a=r>1?void 0:r?oe(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(r?i(t,s,a):i(a))||a);return r&&a&&re(t,s,a),a},L=(e,t,s)=>t.has(e)||x("Cannot "+s),l=(e,t,s)=>(L(e,t,"read from private field"),s?s.call(e):t.get(e)),u=(e,t,s)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),O=(e,t,s,r)=>(L(e,t,"write to private field"),t.set(e,s),s),ie=(e,t,s)=>(L(e,t,"access private method"),s),d,w,m,b,$,A;let n=class extends G(D(C)){constructor(){super(...arguments),u(this,$),this.open=!1,this.buttonLabel=T("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",u(this,d),u(this,w,()=>{var t;l(this,d)||O(this,d,((t=this.shadowRoot)==null?void 0:t.querySelector("#trigger"))??void 0);const e=l(this,d);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",s=>{(s.key==="ArrowDown"||s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.open=!0)}),Q(e,this.open,"menu"))}),u(this,m,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(t=>t instanceof HTMLElement);e&&O(this,d,e),l(this,w).call(this)}),u(this,b,()=>h`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(l(this,d))}
      .anchorRef=${Promise.resolve(l(this,d))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${ie(this,$,A)}
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
      ${S(this.open,l(this,b))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>{var e;return(e=l(this,d))==null?void 0:e.focus()})}};d=new WeakMap;w=new WeakMap;m=new WeakMap;b=new WeakMap;$=new WeakSet;A=function(){this.open=!1};n.styles=[W];n.shadowRootOptions={mode:"open",delegatesFocus:!0};p([v({type:Boolean,reflect:!0})],n.prototype,"open",2);p([v({attribute:"button-label"})],n.prototype,"buttonLabel",2);p([v({attribute:"show-label",type:Boolean})],n.prototype,"showLabel",2);p([v()],n.prototype,"label",2);p([v()],n.prototype,"placement",2);p([I('slot[name="trigger"]')],n.prototype,"_elTriggerSlot",2);p([z("open",{waitUntilFirstUpdate:!0})],n.prototype,"_handleOpenChange",1);n=p([E("gds-context-menu",{dependsOn:[c,y,V,R,K]}),B()],n);n.define();c.define();
