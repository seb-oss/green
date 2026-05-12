import{a0 as C,h as c,I as x,g as E,S as D,Q as S,N as T,d as W,E as H,i as I,n as u,f as z,a6 as B,O as R}from"./iframe-WQFYoQO9.js";import{l as F}from"./localized-decorator-Cd55v85d.js";import{s as N,F as q,L as U,u as K}from"./unwrap-slots-CohMqDbV.js";import{n as Q,e as J}from"./ref-CycMFHJB.js";import{I as V}from"./dot-grid-one-horizontal-BwD2adUI.js";import{a as X,G as Y}from"./popover.component-CmTw2pG8.js";import"./menu-heading.component-BcF4pPeC.js";var Z=Object.getOwnPropertyDescriptor,M=e=>{throw TypeError(e)},j=(e,t,s,r)=>{for(var a=r>1?void 0:r?Z(t,s):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=l(a)||a);return a},ee=(e,t,s)=>t.has(e)||M("Cannot "+s),te=(e,t,s)=>(ee(e,t,"read from private field"),s?s.call(e):t.get(e)),se=(e,t,s)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_;let v=class extends q(x){constructor(){super(...arguments),se(this,_,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",te(this,_)),C.instance.apply(this,"gds-option")}render(){return c`<div class="item"><slot></slot></div>`}};_=new WeakMap;v.styles=[N];v=j([E("gds-menu-item")],v);var ae=Object.getOwnPropertyDescriptor,P=e=>{throw TypeError(e)},ne=(e,t,s,r)=>{for(var a=r>1?void 0:r?ae(t,s):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=l(a)||a);return a},re=(e,t,s)=>t.has(e)||P("Cannot "+s),f=(e,t,s)=>(re(e,t,"read from private field"),s?s.call(e):t.get(e)),oe=(e,t,s)=>t.has(e)?P("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g;let y=class extends x{constructor(){super(),oe(this,g,J()),new U(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),C.instance.apply(this,"gds-listbox")}get navigableItems(){return f(this,g).value?K(f(this,g).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return c`<slot ${Q(f(this,g))}></slot>`}};g=new WeakMap;y=ne([E("gds-menu",{dependsOn:[v]})],y);var ie=Object.defineProperty,le=Object.getOwnPropertyDescriptor,G=e=>{throw TypeError(e)},p=(e,t,s,r)=>{for(var a=r>1?void 0:r?le(t,s):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=(r?l(t,s,a):l(a))||a);return r&&a&&ie(t,s,a),a},O=(e,t,s)=>t.has(e)||G("Cannot "+s),i=(e,t,s)=>(O(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),L=(e,t,s,r)=>(O(e,t,"write to private field"),t.set(e,s),s),he=(e,t,s)=>(O(e,t,"access private method"),s),h,w,m,b,$,A,k;let n=class extends D(S(x)){constructor(){super(...arguments),d(this,$),this.open=!1,this.buttonLabel=T("Open context menu"),this.showLabel=!1,this.label="",this.maxHeight=500,this.placement="bottom-start",d(this,h),d(this,w,()=>{var t;i(this,h)||L(this,h,((t=this.shadowRoot)==null?void 0:t.querySelector("#trigger"))??void 0);const e=i(this,h);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",s=>{(s.key==="ArrowDown"||s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.open=!0)}),X(e,this.open,"menu"))}),d(this,m,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(t=>t instanceof HTMLElement);e&&L(this,h,e),i(this,w).call(this)}),d(this,b,()=>c`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(i(this,h))}
      .anchorRef=${Promise.resolve(i(this,h))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      .calcMaxHeight=${i(this,k)}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        class="menu"
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${he(this,$,A)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`),d(this,k,()=>`${Math.min(window.innerHeight,this.maxHeight)-16}px`)}connectedCallback(){super.connectedCallback(),C.instance.apply(this,"gds-context-menu"),this.updateComplete.then(i(this,m)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return c`<slot
        name="trigger"
        @slotchange=${i(this,m)}
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
      ${W(this.open,i(this,b))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>{var e;return(e=i(this,h))==null?void 0:e.focus()})}};h=new WeakMap;w=new WeakMap;m=new WeakMap;b=new WeakMap;$=new WeakSet;A=function(){this.open=!1};k=new WeakMap;n.styles=[H,I`
      .menu {
        overflow: auto;
      }
    `];n.shadowRootOptions={mode:"open",delegatesFocus:!0};p([u({type:Boolean,reflect:!0})],n.prototype,"open",2);p([u({attribute:"button-label"})],n.prototype,"buttonLabel",2);p([u({attribute:"show-label",type:Boolean})],n.prototype,"showLabel",2);p([u()],n.prototype,"label",2);p([u({type:Number,attribute:"max-height"})],n.prototype,"maxHeight",2);p([u()],n.prototype,"placement",2);p([z('slot[name="trigger"]')],n.prototype,"_elTriggerSlot",2);p([B("open",{waitUntilFirstUpdate:!0})],n.prototype,"_handleOpenChange",1);n=p([E("gds-context-menu",{dependsOn:[v,y,Y,R,V]}),F()],n);export{v as G,n as a};
