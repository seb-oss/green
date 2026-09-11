import{V as C,h as u,D as E,a as L,ad as P,C as G,L as D,J as B,d as W,B as I,n as p,l as H,$ as N,K as F,F as R}from"./iframe-DECnLmkM.js";import{l as z}from"./localized-decorator-Dtp5RyzH.js";import{s as K,F as U,L as q,m as Y}from"./menu-listbox.style-BbISUp8G.js";import{n as J,e as V}from"./ref-Co1DxQ56.js";import{I as X}from"./dot-grid-one-horizontal-D4Hd8XMA.js";import{G as Q,a as Z}from"./popover.component-8JGnnhR-.js";import"./menu-heading.component-CjbEL_Jr.js";var j=Object.getOwnPropertyDescriptor,M=e=>{throw TypeError(e)},ee=(e,t,s,r)=>{for(var a=r>1?void 0:r?j(t,s):t,o=e.length-1,d;o>=0;o--)(d=e[o])&&(a=d(a)||a);return a},te=(e,t,s)=>t.has(e)||M("Cannot "+s),se=(e,t,s)=>(te(e,t,"read from private field"),s?s.call(e):t.get(e)),ae=(e,t,s)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f;let m=class extends U(E){constructor(){super(...arguments),ae(this,f,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",se(this,f)),C.instance.apply(this,"gds-option")}render(){return u`<div class="item"><slot></slot></div>`}};f=new WeakMap;m.styles=[K];m=ee([L("gds-menu-item")],m);function ne(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}var re=Object.getOwnPropertyDescriptor,T=e=>{throw TypeError(e)},oe=(e,t,s,r)=>{for(var a=r>1?void 0:r?re(t,s):t,o=e.length-1,d;o>=0;o--)(d=e[o])&&(a=d(a)||a);return a},ie=(e,t,s)=>t.has(e)||T("Cannot "+s),_=(e,t,s)=>(ie(e,t,"read from private field"),s?s.call(e):t.get(e)),le=(e,t,s)=>t.has(e)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g;let y=class extends E{constructor(){super(),le(this,g,V()),new q(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),C.instance.apply(this,P)}get navigableItems(){return _(this,g).value?ne(_(this,g).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return u`<slot ${J(_(this,g))}></slot>`}};g=new WeakMap;y=oe([L("gds-menu",{dependsOn:[m]})],y);var de=Object.defineProperty,he=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},l=(e,t,s,r)=>{for(var a=r>1?void 0:r?he(t,s):t,o=e.length-1,d;o>=0;o--)(d=e[o])&&(a=(r?d(t,s,a):d(a))||a);return r&&a&&de(t,s,a),a},x=(e,t,s)=>t.has(e)||S("Cannot "+s),i=(e,t,s)=>(x(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),O=(e,t,s,r)=>(x(e,t,"write to private field"),t.set(e,s),s),pe=(e,t,s)=>(x(e,t,"access private method"),s),h,w,v,b,$,A,k;let n=class extends G(D(E)){constructor(){super(...arguments),c(this,$),this.open=!1,this.buttonLabel=B("Open context menu"),this.showLabel=!1,this.label="",this.maxHeight=500,this.placement="bottom-start",this.nonmodal=!1,c(this,h),c(this,w,()=>{i(this,h)||O(this,h,this.shadowRoot?.querySelector("#trigger")??void 0);const e=i(this,h);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",t=>{(t.key==="ArrowDown"||t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open=!0)}),Z(e,this.open,"menu"))}),c(this,v,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(t=>t instanceof HTMLElement);e&&O(this,h,e),i(this,w).call(this)}),c(this,b,()=>u`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(i(this,h))}
      .anchorRef=${Promise.resolve(i(this,h))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      .calcMaxHeight=${i(this,k)}
      .nonmodal=${this.nonmodal}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        class="menu-listbox"
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${pe(this,$,A)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`),c(this,k,()=>`${Math.min(window.innerHeight,this.maxHeight)-16}px`)}connectedCallback(){super.connectedCallback(),C.instance.apply(this,"gds-context-menu"),this.updateComplete.then(i(this,v)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return u`<slot
        name="trigger"
        @slotchange=${i(this,v)}
        ><gds-button
          .rank=${"secondary"}
          id="trigger"
          label=${this.buttonLabel}
        >
          ${this.showLabel?u`<slot name="icon" slot="lead"
                  ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></slot
                >${this.buttonLabel}`:u`<slot name="icon"
                ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
              ></slot>`}
        </gds-button>
      </slot>
      ${W(this.open,i(this,b))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>i(this,h)?.focus())}};h=new WeakMap;w=new WeakMap;v=new WeakMap;b=new WeakMap;$=new WeakSet;A=function(){this.open=!1};k=new WeakMap;n.styles=[I,Y];n.shadowRootOptions={mode:"open",delegatesFocus:!0};l([p({type:Boolean,reflect:!0})],n.prototype,"open",2);l([p({attribute:"button-label"})],n.prototype,"buttonLabel",2);l([p({attribute:"show-label",type:Boolean})],n.prototype,"showLabel",2);l([p()],n.prototype,"label",2);l([p({type:Number,attribute:"max-height"})],n.prototype,"maxHeight",2);l([p()],n.prototype,"placement",2);l([p({type:Boolean,reflect:!0})],n.prototype,"nonmodal",2);l([H('slot[name="trigger"]')],n.prototype,"_elTriggerSlot",2);l([N("open",{waitUntilFirstUpdate:!0})],n.prototype,"_handleOpenChange",1);n=l([L("gds-context-menu",{dependsOn:[m,y,Q,F,X]}),R({labelledBy:"#trigger",describedBy:"#trigger",controls:"#trigger"}),z()],n);export{m as G,n as a};
