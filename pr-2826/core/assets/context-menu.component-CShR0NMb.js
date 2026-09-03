import{T as C,h as c,B as E,a as L,ad as P,z as G,J as D,H as W,d as B,y as I,n as u,l as H,U as N,I as z,D as R}from"./iframe-BOo9vEbG.js";import{l as F}from"./localized-decorator-DIPZWc8G.js";import{s as U,F as q,L as K,m as Y}from"./menu-listbox.style-BMY75M73.js";import{n as J,e as X}from"./ref-C_y0BQ8I.js";import{I as Q}from"./dot-grid-one-horizontal-DaKLqoRd.js";import{G as V,a as Z}from"./popover.component-wMDmYFLQ.js";import"./menu-heading.component-C4-C0PXJ.js";var j=Object.getOwnPropertyDescriptor,M=e=>{throw TypeError(e)},ee=(e,t,s,r)=>{for(var a=r>1?void 0:r?j(t,s):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(a=l(a)||a);return a},te=(e,t,s)=>t.has(e)||M("Cannot "+s),se=(e,t,s)=>(te(e,t,"read from private field"),s?s.call(e):t.get(e)),ae=(e,t,s)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f;let m=class extends q(E){constructor(){super(...arguments),ae(this,f,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",se(this,f)),C.instance.apply(this,"gds-option")}render(){return c`<div class="item"><slot></slot></div>`}};f=new WeakMap;m.styles=[U];m=ee([L("gds-menu-item")],m);function ne(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}var re=Object.getOwnPropertyDescriptor,T=e=>{throw TypeError(e)},ie=(e,t,s,r)=>{for(var a=r>1?void 0:r?re(t,s):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(a=l(a)||a);return a},oe=(e,t,s)=>t.has(e)||T("Cannot "+s),_=(e,t,s)=>(oe(e,t,"read from private field"),s?s.call(e):t.get(e)),le=(e,t,s)=>t.has(e)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g;let y=class extends E{constructor(){super(),le(this,g,X()),new K(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),C.instance.apply(this,P)}get navigableItems(){return _(this,g).value?ne(_(this,g).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return c`<slot ${J(_(this,g))}></slot>`}};g=new WeakMap;y=ie([L("gds-menu",{dependsOn:[m]})],y);var he=Object.defineProperty,de=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},d=(e,t,s,r)=>{for(var a=r>1?void 0:r?de(t,s):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(a=(r?l(t,s,a):l(a))||a);return r&&a&&he(t,s,a),a},x=(e,t,s)=>t.has(e)||S("Cannot "+s),o=(e,t,s)=>(x(e,t,"read from private field"),s?s.call(e):t.get(e)),p=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),O=(e,t,s,r)=>(x(e,t,"write to private field"),t.set(e,s),s),pe=(e,t,s)=>(x(e,t,"access private method"),s),h,w,v,b,$,A,k;let n=class extends G(D(E)){constructor(){super(...arguments),p(this,$),this.open=!1,this.buttonLabel=W("Open context menu"),this.showLabel=!1,this.label="",this.maxHeight=500,this.placement="bottom-start",p(this,h),p(this,w,()=>{o(this,h)||O(this,h,this.shadowRoot?.querySelector("#trigger")??void 0);const e=o(this,h);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",t=>{(t.key==="ArrowDown"||t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open=!0)}),Z(e,this.open,"menu"))}),p(this,v,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(t=>t instanceof HTMLElement);e&&O(this,h,e),o(this,w).call(this)}),p(this,b,()=>c`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(o(this,h))}
      .anchorRef=${Promise.resolve(o(this,h))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      .calcMaxHeight=${o(this,k)}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        class="menu-listbox"
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${pe(this,$,A)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`),p(this,k,()=>`${Math.min(window.innerHeight,this.maxHeight)-16}px`)}connectedCallback(){super.connectedCallback(),C.instance.apply(this,"gds-context-menu"),this.updateComplete.then(o(this,v)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return c`<slot
        name="trigger"
        @slotchange=${o(this,v)}
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
      ${B(this.open,o(this,b))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>o(this,h)?.focus())}};h=new WeakMap;w=new WeakMap;v=new WeakMap;b=new WeakMap;$=new WeakSet;A=function(){this.open=!1};k=new WeakMap;n.styles=[I,Y];n.shadowRootOptions={mode:"open",delegatesFocus:!0};d([u({type:Boolean,reflect:!0})],n.prototype,"open",2);d([u({attribute:"button-label"})],n.prototype,"buttonLabel",2);d([u({attribute:"show-label",type:Boolean})],n.prototype,"showLabel",2);d([u()],n.prototype,"label",2);d([u({type:Number,attribute:"max-height"})],n.prototype,"maxHeight",2);d([u()],n.prototype,"placement",2);d([H('slot[name="trigger"]')],n.prototype,"_elTriggerSlot",2);d([N("open",{waitUntilFirstUpdate:!0})],n.prototype,"_handleOpenChange",1);n=d([L("gds-context-menu",{dependsOn:[m,y,V,z,Q]}),R({labelledBy:"#trigger",describedBy:"#trigger",controls:"#trigger"}),F()],n);export{m as G,n as a};
