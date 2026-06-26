"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2565],{744(e,t,o){o.d(t,{Hx:()=>V});var n,s=o(745),i=o(6743),r=o(9443),l=o(4367),a=o(505),d=o(3539),h=o(3864),c=o(3104),p=o(7526),u=o(4457),g=o(5552),C=o(825);let m=class extends d.j{constructor(){super(),(0,s.VK)(this,n,(0,c._)()),new g.y(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),u.n.instance.apply(this,"gds-listbox")}get navigableItems(){return(0,s.S7)(this,n).value&&(0,C.o)((0,s.S7)(this,n).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-menu-item"===e.gdsElementName)||[]}focus(){this.navigableItems[0]?.focus()}render(){return p.qy`<slot ${(0,c.K)((0,s.S7)(this,n))}></slot>`}};n=new WeakMap,m=(0,s.Cc)([(0,p.Y$)("gds-menu",{dependsOn:[h.T]})],m);var b,k,y,w,v,M,f,$=o(5073),S=o(4338),x=o(1374),L=o(4987),Z=o(7595),z=o(0),E=o(2144);let V=class extends((0,L.TM)((0,L.lt)(d.j))){constructor(){super(...arguments),(0,s.VK)(this,v),this.open=!1,this.buttonLabel=(0,i.ab)("Open context menu"),this.showLabel=!1,this.label="",this.maxHeight=500,this.placement="bottom-start",(0,s.VK)(this,b,void 0),(0,s.VK)(this,k,()=>{(0,s.S7)(this,b)||(0,s.OV)(this,b,this.shadowRoot?.querySelector("#trigger")??void 0);const e=(0,s.S7)(this,b);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",e=>{"ArrowDown"!==e.key&&"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.open=!0)}),(0,E.B)(e,this.open,"menu"))}),(0,s.VK)(this,y,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(e=>e instanceof HTMLElement);e&&(0,s.OV)(this,b,e),(0,s.S7)(this,k).call(this)}),(0,s.VK)(this,w,()=>p.qy`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve((0,s.S7)(this,b))}
      .anchorRef=${Promise.resolve((0,s.S7)(this,b))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      .calcMaxHeight=${(0,s.S7)(this,f)}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        class="menu"
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${(0,s.jq)(this,v,M)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`),(0,s.VK)(this,f,()=>Math.min(window.innerHeight,this.maxHeight)-16+"px")}connectedCallback(){super.connectedCallback(),u.n.instance.apply(this,"gds-context-menu"),this.updateComplete.then((0,s.S7)(this,y)),this.addEventListener("keydown",e=>{this.open&&"Tab"==e.key&&(this.open=!1,e.preventDefault())})}render(){return p.qy`<slot
        name="trigger"
        @slotchange=${(0,s.S7)(this,y)}
        ><gds-button
          .rank=${"secondary"}
          id="trigger"
          label=${this.buttonLabel}
        >
          ${this.showLabel?p.qy`<slot name="icon" slot="lead"
                  ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></slot
                >${this.buttonLabel}`:p.qy`<slot name="icon"
                ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
              ></slot>`}
        </gds-button>
      </slot>
      ${(0,a.z)(this.open,(0,s.S7)(this,w))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>(0,s.S7)(this,b)?.focus())}};b=new WeakMap,k=new WeakMap,y=new WeakMap,w=new WeakMap,v=new WeakSet,M=function(){this.open=!1},f=new WeakMap,V.styles=[$.LU,r.AH`
      .menu {
        overflow: auto;
      }
    `],V.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,s.Cc)([(0,l.MZ)({type:Boolean,reflect:!0})],V.prototype,"open",2),(0,s.Cc)([(0,l.MZ)({attribute:"button-label"})],V.prototype,"buttonLabel",2),(0,s.Cc)([(0,l.MZ)({attribute:"show-label",type:Boolean})],V.prototype,"showLabel",2),(0,s.Cc)([(0,l.MZ)()],V.prototype,"label",2),(0,s.Cc)([(0,l.MZ)({type:Number,attribute:"max-height"})],V.prototype,"maxHeight",2),(0,s.Cc)([(0,l.MZ)()],V.prototype,"placement",2),(0,s.Cc)([(0,l.P)('slot[name="trigger"]')],V.prototype,"_elTriggerSlot",2),(0,s.Cc)([(0,x.w)("open",{waitUntilFirstUpdate:!0})],V.prototype,"_handleOpenChange",1),V=(0,s.Cc)([(0,p.Y$)("gds-context-menu",{dependsOn:[h.T,m,E.E,Z.t,z.z]}),(0,S.J)({labelledBy:"#trigger",describedBy:"#trigger",controls:"#trigger"}),(0,i.cc)()],V)},8157(e,t,o){o.d(t,{z:()=>r});var n=o(745),s=o(7526),i=o(3832);let r=class extends i.M{};r._regularSVG='<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" fill="currentColor"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r._solidSVG='<path d="M3.75 10.25C2.7835 10.25 2 11.0335 2 12C2 12.9665 2.7835 13.75 3.75 13.75C4.7165 13.75 5.5 12.9665 5.5 12C5.5 11.0335 4.7165 10.25 3.75 10.25Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M20.25 10.25C19.2835 10.25 18.5 11.0335 18.5 12C18.5 12.9665 19.2835 13.75 20.25 13.75C21.2165 13.75 22 12.9665 22 12C22 11.0335 21.2165 10.25 20.25 10.25Z" fill="currentColor"/>',r._name="dot-grid-one-horizontal",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,n.Cc)([(0,s.Y$)("gds-icon-dot-grid-one-horizontal")],r)},0(e,t,o){o.d(t,{z:()=>n.z}),o(745);var n=o(8157);n.z.define()},3864(e,t,o){o.d(t,{T:()=>h});var n,s=o(745),i=o(3539),r=o(7526),l=o(4457),a=o(4397),d=o(7326);let h=class extends((0,a.z)(i.j)){constructor(){super(...arguments),(0,s.VK)(this,n,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())}),this.addEventListener("click",(0,s.S7)(this,n)),l.n.instance.apply(this,"gds-option")}render(){return r.qy`<div class="item"><slot></slot></div>`}};n=new WeakMap,h.styles=[d.A],h=(0,s.Cc)([(0,r.Y$)("gds-menu-item")],h)}}]);
//# sourceMappingURL=src-lib-context-menu-context-menu-stories.f34e3002.iframe.bundle.js.map