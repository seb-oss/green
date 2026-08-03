import{T as C,h as c,z as x,g as E,I as T,H as D,E as S,d as W,v as H,i as B,n as u,f as z,S as F,F as I,y as R}from"./iframe-DHb17V61.js";import{l as N}from"./localized-decorator-BP7q_Fg8.js";import{s as q,F as U,L as K,u as J}from"./unwrap-slots-2YsA4Ec8.js";import{n as Q,e as V}from"./ref-C3ZnAnS4.js";import{I as X}from"./dot-grid-one-horizontal-1f3PXe8l.js";import{G as Y,a as Z}from"./popover.component-C38cLrKO.js";import"./menu-heading.component-7wFbpoeb.js";var j=Object.getOwnPropertyDescriptor,M=e=>{throw TypeError(e)},ee=(e,t,s,n)=>{for(var a=n>1?void 0:n?j(t,s):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=l(a)||a);return a},te=(e,t,s)=>t.has(e)||M("Cannot "+s),se=(e,t,s)=>(te(e,t,"read from private field"),s?s.call(e):t.get(e)),ae=(e,t,s)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_;let v=class extends U(x){constructor(){super(...arguments),ae(this,_,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",se(this,_)),C.instance.apply(this,"gds-option")}render(){return c`<div class="item"><slot></slot></div>`}};_=new WeakMap;v.styles=[q];v=ee([E("gds-menu-item")],v);var re=Object.getOwnPropertyDescriptor,P=e=>{throw TypeError(e)},ne=(e,t,s,n)=>{for(var a=n>1?void 0:n?re(t,s):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=l(a)||a);return a},oe=(e,t,s)=>t.has(e)||P("Cannot "+s),f=(e,t,s)=>(oe(e,t,"read from private field"),s?s.call(e):t.get(e)),ie=(e,t,s)=>t.has(e)?P("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g;let y=class extends x{constructor(){super(),ie(this,g,V()),new K(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),C.instance.apply(this,"gds-listbox")}get navigableItems(){return f(this,g).value?J(f(this,g).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return c`<slot ${Q(f(this,g))}></slot>`}};g=new WeakMap;y=ne([E("gds-menu",{dependsOn:[v]})],y);var le=Object.defineProperty,he=Object.getOwnPropertyDescriptor,G=e=>{throw TypeError(e)},p=(e,t,s,n)=>{for(var a=n>1?void 0:n?he(t,s):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=(n?l(t,s,a):l(a))||a);return n&&a&&le(t,s,a),a},O=(e,t,s)=>t.has(e)||G("Cannot "+s),i=(e,t,s)=>(O(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),L=(e,t,s,n)=>(O(e,t,"write to private field"),t.set(e,s),s),pe=(e,t,s)=>(O(e,t,"access private method"),s),h,w,m,b,$,A,k;let r=class extends T(D(x)){constructor(){super(...arguments),d(this,$),this.open=!1,this.buttonLabel=S("Open context menu"),this.showLabel=!1,this.label="",this.maxHeight=500,this.placement="bottom-start",d(this,h),d(this,w,()=>{i(this,h)||L(this,h,this.shadowRoot?.querySelector("#trigger")??void 0);const e=i(this,h);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",t=>{(t.key==="ArrowDown"||t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open=!0)}),Z(e,this.open,"menu"))}),d(this,m,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(t=>t instanceof HTMLElement);e&&L(this,h,e),i(this,w).call(this)}),d(this,b,()=>c`<gds-popover
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
        @gds-menu-item-click=${pe(this,$,A)}
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
      ${W(this.open,i(this,b))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>i(this,h)?.focus())}};h=new WeakMap;w=new WeakMap;m=new WeakMap;b=new WeakMap;$=new WeakSet;A=function(){this.open=!1};k=new WeakMap;r.styles=[H,B`
      .menu {
        overflow: auto;
      }
    `];r.shadowRootOptions={mode:"open",delegatesFocus:!0};p([u({type:Boolean,reflect:!0})],r.prototype,"open",2);p([u({attribute:"button-label"})],r.prototype,"buttonLabel",2);p([u({attribute:"show-label",type:Boolean})],r.prototype,"showLabel",2);p([u()],r.prototype,"label",2);p([u({type:Number,attribute:"max-height"})],r.prototype,"maxHeight",2);p([u()],r.prototype,"placement",2);p([z('slot[name="trigger"]')],r.prototype,"_elTriggerSlot",2);p([F("open",{waitUntilFirstUpdate:!0})],r.prototype,"_handleOpenChange",1);r=p([E("gds-context-menu",{dependsOn:[v,y,Y,I,X]}),R({labelledBy:"#trigger",describedBy:"#trigger",controls:"#trigger"}),N()],r);export{v as G,r as a};
