"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2565,4309],{0:(e,t,r)=>{r.d(t,{z:()=>o.z}),r(6861);var o=r(8157);o.z.define()},744:(e,t,r)=>{r.d(t,{Hx:()=>y});var o,s=r(6861),n=r(6743),l=r(4367),i=r(505),a=r(8641),c=r(3864),C=r(3104),d=r(7526),h=r(4457),u=r(5552),p=r(825);let g=class extends a.j{constructor(){super(),(0,s.VK)(this,o,(0,C._)()),new u.y(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),h.n.instance.apply(this,"gds-listbox")}get navigableItems(){return(0,s.S7)(this,o).value&&(0,p.o)((0,s.S7)(this,o).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-menu-item"===e.gdsElementName)||[]}focus(){this.navigableItems[0]?.focus()}render(){return d.qy`<slot ${(0,C.K)((0,s.S7)(this,o))}></slot>`}};o=new WeakMap,g=(0,s.Cc)([(0,d.Y$)("gds-menu",{dependsOn:[c.T]})],g);var M,m,V,f,L,_,H=r(5073),v=r(1374),k=r(4987),w=r(7595),b=r(0),Z=r(2144);let y=class extends((0,k.TM)((0,k.lt)(a.j))){constructor(){super(...arguments),(0,s.VK)(this,L),this.open=!1,this.buttonLabel=(0,n.ab)("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",(0,s.VK)(this,M),(0,s.VK)(this,m,()=>{(0,s.S7)(this,M)||(0,s.OV)(this,M,this.shadowRoot?.querySelector("#trigger")??void 0);const e=(0,s.S7)(this,M);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",e=>{"ArrowDown"!==e.key&&"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.open=!0)}),(0,Z.B)(e,this.open,"menu"))}),(0,s.VK)(this,V,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(e=>e instanceof HTMLElement);e&&(0,s.OV)(this,M,e),(0,s.S7)(this,m).call(this)}),(0,s.VK)(this,f,()=>d.qy`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve((0,s.S7)(this,M))}
      .anchorRef=${Promise.resolve((0,s.S7)(this,M))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${(0,s.jq)(this,L,_)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),h.n.instance.apply(this,"gds-context-menu"),this.updateComplete.then((0,s.S7)(this,V)),this.addEventListener("keydown",e=>{this.open&&"Tab"==e.key&&(this.open=!1,e.preventDefault())})}render(){return d.qy`<slot
        name="trigger"
        @slotchange=${(0,s.S7)(this,V)}
        ><gds-button
          .rank=${"secondary"}
          id="trigger"
          label=${this.buttonLabel}
        >
          ${this.showLabel?d.qy`<slot name="icon" slot="lead"
                  ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></slot
                >${this.buttonLabel}`:d.qy`<slot name="icon"
                ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
              ></slot>`}
        </gds-button>
      </slot>
      ${(0,i.z)(this.open,(0,s.S7)(this,f))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>(0,s.S7)(this,M)?.focus())}};M=new WeakMap,m=new WeakMap,V=new WeakMap,f=new WeakMap,L=new WeakSet,_=function(){this.open=!1},y.styles=[H.LU],y.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,s.Cc)([(0,l.MZ)({type:Boolean,reflect:!0})],y.prototype,"open",2),(0,s.Cc)([(0,l.MZ)({attribute:"button-label"})],y.prototype,"buttonLabel",2),(0,s.Cc)([(0,l.MZ)({attribute:"show-label",type:Boolean})],y.prototype,"showLabel",2),(0,s.Cc)([(0,l.MZ)()],y.prototype,"label",2),(0,s.Cc)([(0,l.MZ)()],y.prototype,"placement",2),(0,s.Cc)([(0,l.P)('slot[name="trigger"]')],y.prototype,"_elTriggerSlot",2),(0,s.Cc)([(0,v.w)("open",{waitUntilFirstUpdate:!0})],y.prototype,"_handleOpenChange",1),y=(0,s.Cc)([(0,d.Y$)("gds-context-menu",{dependsOn:[c.T,g,Z.E,w.t,b.z]}),(0,n.cc)()],y)},1496:(e,t,r)=>{r.d(t,{m:()=>l});var o=r(6861),s=r(7526),n=r(3832);let l=class extends n.M{};l._regularSVG='<path d="M12 19.25V11.75M12 11.75L14.5 14.25M12 11.75L9.5 14.25M15 19.25H18.125C20.4032 19.25 22.25 17.4032 22.25 15.125C22.25 12.8468 20.4032 11 18.125 11C18.0814 11 18.038 11.0007 17.9948 11.002C17.9983 10.9184 18 10.8344 18 10.75C18 7.43629 15.3137 4.75 12 4.75C9.3716 4.75 7.13793 6.44009 6.32647 8.7928C3.74507 9.12339 1.75 11.3287 1.75 14C1.75 16.8995 4.10051 19.25 7 19.25H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',l._solidSVG='<path d="M5.77996 8.12427C6.80396 5.70153 9.20241 4 12 4C15.5725 4 18.4969 6.77542 18.7344 10.2877C21.1392 10.5876 23 12.639 23 15.125C23 17.8174 20.8174 20 18.125 20H12.75V13.5607L13.9697 14.7803C14.2626 15.0732 14.7374 15.0732 15.0303 14.7803C15.3232 14.4874 15.3232 14.0126 15.0303 13.7197L12.5303 11.2197C12.2374 10.9268 11.7626 10.9268 11.4697 11.2197L8.96967 13.7197C8.67678 14.0126 8.67678 14.4874 8.96967 14.7803C9.26256 15.0732 9.73744 15.0732 10.0303 14.7803L11.25 13.5607V20H7C3.68629 20 1 17.3137 1 14C1 11.1041 3.05102 8.68825 5.77996 8.12427Z" fill="currentColor"/>',l._name="cloud-upload",l._width=24,l._height=24,l._viewBox="0 0 24 24",l=(0,o.Cc)([(0,s.Y$)("gds-icon-cloud-upload")],l)},1686:(e,t,r)=>{r.d(t,{s:()=>l});var o=r(6861),s=r(8641),n=r(7526);let l=class extends s.j{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return n.qy`<slot></slot>`}};l=(0,o.Cc)([(0,n.Y$)("gds-list-item")],l)},1912:(e,t,r)=>{r.d(t,{x:()=>h});var o=r(6861),s=r(4367),n=r(3578),l=r(8641),i=r(4457),a=r(7526),c=r(7595),C=r(6290);const d=r(9443).AH`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;let h=class extends l.j{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),i.n.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return a.qy`<gds-button
      class="btn"
      .size=${"large"===this.size?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${(0,n.H)(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};h.styles=[d],(0,o.Cc)([(0,s.MZ)({reflect:!0,type:Boolean})],h.prototype,"selected",2),(0,o.Cc)([(0,s.MZ)()],h.prototype,"value",2),(0,o.Cc)([(0,s.MZ)({reflect:!0,type:String})],h.prototype,"size",2),h=(0,o.Cc)([(0,a.Y$)("gds-filter-chip",{dependsOn:[c.t,C.V]})],h)},2022:(e,t,r)=>{r.d(t,{o:()=>l}),r(6861);var o=r(9633),s=r(8833),n=r(6506);const l=e=>{s.o.define();const t=(0,o.p)("gds-div"),r={...e,class:e.className};return(0,n.createElement)(t,r)}},2660:(e,t,r)=>{r.d(t,{G:()=>l});var o=r(6861),s=r(7526),n=r(3832);let l=class extends n.M{};l._regularSVG='<path d="M10 5.75L3.75 12L10 18.25M4.5 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',l._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8839 18.6339C10.3957 19.122 9.60427 19.122 9.11612 18.6339L3.36612 12.8839C3.1317 12.6495 3 12.3315 3 12C3 11.6685 3.13169 11.3506 3.36612 11.1161L9.11612 5.36612C9.60427 4.87796 10.3957 4.87796 10.8839 5.36612C11.372 5.85427 11.372 6.64573 10.8839 7.13388L7.26776 10.75H19.75C20.4404 10.75 21 11.3097 21 12C21 12.6904 20.4404 13.25 19.75 13.25H7.26777L10.8839 16.8661C11.372 17.3543 11.372 18.1457 10.8839 18.6339Z" fill="currentColor"/>',l._name="arrow-left",l._width=24,l._height=24,l._viewBox="0 0 24 24",l=(0,o.Cc)([(0,s.Y$)("gds-icon-arrow-left")],l)},3864:(e,t,r)=>{r.d(t,{T:()=>C});var o,s=r(6861),n=r(8641),l=r(7526),i=r(4457),a=r(4397),c=r(7326);let C=class extends((0,a.z)(n.j)){constructor(){super(...arguments),(0,s.VK)(this,o,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())}),this.addEventListener("click",(0,s.S7)(this,o)),i.n.instance.apply(this,"gds-option")}render(){return l.qy`<div class="item"><slot></slot></div>`}};o=new WeakMap,C.styles=[c.A],C=(0,s.Cc)([(0,l.Y$)("gds-menu-item")],C)},4264:(e,t,r)=>{r.d(t,{F:()=>K});var o,s,n,l,i,a,c,C,d,h,u,p,g,M,m,V,f,L,_,H,v,k,w,b,Z=r(6861),y=r(9633),x=r(7198),S=r(6743),$=r(9443),G=r(4367),j=r(3578),E=r(3104),B=r(911),q=r(8641),N=r(7526),I=r(5073),Y=r(7595),z=r(7617),A=r(5424),T=r(4464),R=r(2581),O=r(8745),W=$.AH`
  :host {
    box-sizing: border-box;
    display: block;
    max-width: 100%;
    container-type: inline-size;
  }

  #alert-message {
    --grid-areas: 'wrapper cta close';

    &.timeout {
      --grid-areas: 'wrapper cta close' 'progress-bar progress-bar progress-bar';
    }

    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-template-areas: var(--grid-areas);
    min-width: fit-content;
    position: relative;
    transition:
      opacity 0.3s ease-out,
      transform 0.3s ease-out;
    gap: 0;
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    #alert-message {
      animation: slideIn 0.3s ease-out;
    }
  }

  #alert-message.dismissing {
    opacity: 0;
    transform: translateY(-1rem);
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    #alert-message.dismissing {
      transform: none;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
  }

  /* Focus styles */
  #alert-message:focus {
    outline: 2px solid var(--gds-focus-color, #000);
    outline-offset: 2px;
  }

  .wrapper {
    grid-area: wrapper;
    display: flex;
    gap: var(--gds-sys-space-xs);

    .message {
      max-width: 80ch;
    }
  }

  .dismissible .wrapper {
    margin-top: var(--gds-sys-space-3xs);
  }

  .has-action {
    padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
  }

  .has-action .wrapper {
    margin-top: var(--gds-sys-space-xs);
  }

  .has-action.dismissible .close {
    margin-top: var(--gds-sys-space-3xs);
  }

  .message {
    font: var(--gds-sys-text-body-regular-m);
    display: flex;
    justify-content: flex-start;
    text-align: left;
    margin-inline-end: auto;
  }

  .message-text {
    display: inline;
    white-space: normal;
    padding-inline-end: var(--gds-sys-space-xs);
  }

  .message-text ::slotted(strong) {
    font-weight: var(--gds-sys-text-weight-book, 450);
  }

  .progress-container {
    --_fill-color: var(--gds-sys-color-border-strong);
    --_container-color: var(--gds-sys-color-l3-information-03);

    &.notice {
      --_fill-color: var(--gds-sys-color-content-notice-01);
      --_container-color: var(--gds-sys-color-l3-notice-03);
    }

    &.warning {
      --_fill-color: var(--gds-sys-color-content-warning-01);
      --_container-color: var(--gds-sys-color-l3-warning-03);
    }

    &.positive {
      --_fill-color: var(--gds-sys-color-content-positive-01);
      --_container-color: var(--gds-sys-color-l3-positive-03);
    }

    &.negative {
      --_fill-color: var(--gds-sys-color-content-negative-01);
      --_container-color: var(--gds-sys-color-l3-negative-03);
    }

    grid-area: progress-bar;
    margin-top: var(--gds-sys-space-m);
    inset: auto var(--gds-sys-space-m) var(--gds-sys-space-m);
    height: 0.25rem;
    background: var(--_container-color);
    border-radius: var(--gds-sys-radius-max);
    overflow: hidden;
  }

  .timer-progress {
    height: 100%;
    transition: width 0.1s linear;
    background: var(--_fill-color);
    will-change: width;
  }

  @media (prefers-reduced-motion: reduce) {
    .timer-progress {
      transition: none;
    }
  }

  @container (max-width: 600px) {
    #alert-message {
      --grid-areas: 'wrapper close' 'cta cta';

      &.timeout {
        --grid-areas: 'wrapper close' 'progress-bar progress-bar';
      }

      .action {
        grid-area: cta;
        margin-top: var(--gds-sys-space-xs);
      }
    }
  }

  /* Medium: inline */
  @container (min-width: 601px) and (max-width: 1024px) {
    #alert-message {
      .close {
        margin-left: var(--gds-sys-space-xs);
      }
    }
  }

  /* Large: centered */
  @container (min-width: 1025px) {
    #alert-message {
      grid-template-columns: auto auto min-content;

      &.dismissible:not(.has-action) {
        grid-template-columns: 1fr auto;
      }

      &.dismissible:not(.has-action) .wrapper {
        margin-inline-start: 0;
      }

      .close {
        margin-left: var(--gds-sys-space-xs);
      }

      .icon {
        margin-inline-start: auto;
      }

      .wrapper {
        margin-left: auto;
      }

      .action {
        margin-right: auto;
      }
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .icon {
      forced-color-adjust: none;
    }
  }
`;const P={positive:{icon:"circle-check",card:"positive"},warning:{icon:"circle-info",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}};let F=class extends q.j{constructor(){super(),(0,Z.VK)(this,d),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,(0,Z.VK)(this,o),(0,Z.VK)(this,s),(0,Z.VK)(this,n,(0,E._)()),(0,Z.VK)(this,l),(0,Z.VK)(this,i,!1),(0,Z.VK)(this,a,0),(0,Z.VK)(this,c,0),(0,Z.VK)(this,C,{hostConnected:()=>{this.timeout>0&&(0,Z.jq)(this,d,h).call(this)},hostDisconnected:()=>{(0,Z.jq)(this,d,u).call(this),(0,Z.jq)(this,d,m).call(this)}}),this.addController((0,Z.S7)(this,C))}updated(e){e.has("timeout")&&((0,Z.jq)(this,d,u).call(this),(0,Z.jq)(this,d,m).call(this),(0,Z.OV)(this,a,Math.max(0,this.timeout)),this._progress=100,this.timeout>0&&(0,Z.jq)(this,d,h).call(this))}render(){if(this._cardHidden)return $.s6;const e={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return N.qy`
      <gds-card
        ${(0,E.K)((0,Z.S7)(this,n))}
        role=${this.role}
        aria-label=${this.label}
        variant=${(0,Z.S7)(this,d,_).card}
        class=${(0,j.H)(e)}
        @keydown=${(0,Z.jq)(this,d,L)}
        id="alert-message"
        padding="m"
      >
        <div class="wrapper">
          ${(0,Z.jq)(this,d,H).call(this)} ${(0,Z.jq)(this,d,v).call(this)}
        </div>
        ${!this.timeout&&this.buttonLabel?(0,Z.jq)(this,d,k).call(this,this.buttonLabel):$.s6}
        ${(0,Z.jq)(this,d,w).call(this)} ${(0,Z.jq)(this,d,b).call(this)}
      </gds-card>
    `}};o=new WeakMap,s=new WeakMap,n=new WeakMap,l=new WeakMap,i=new WeakMap,a=new WeakMap,c=new WeakMap,C=new WeakMap,d=new WeakSet,h=function(){(0,Z.S7)(this,l)||((0,Z.S7)(this,a)||(0,Z.OV)(this,a,Math.max(0,this.timeout)),(0,Z.OV)(this,l,new IntersectionObserver(e=>{const t=e[0],r=(t?.intersectionRatio??0)>=.1;r&&!(0,Z.S7)(this,i)?((0,Z.OV)(this,i,!0),(0,Z.jq)(this,d,g).call(this)):!r&&(0,Z.S7)(this,i)&&((0,Z.OV)(this,i,!1),(0,Z.jq)(this,d,M).call(this))},{root:null,threshold:[0,.1,1]})),(0,Z.S7)(this,l).observe(this))},u=function(){(0,Z.S7)(this,l)&&((0,Z.S7)(this,l).disconnect(),(0,Z.OV)(this,l,void 0)),(0,Z.OV)(this,i,!1)},p=function(){(0,Z.OV)(this,c,Date.now()),(0,Z.OV)(this,s,window.setInterval(()=>{const e=Date.now(),t=e-(0,Z.S7)(this,c);(0,Z.OV)(this,c,e),(0,Z.OV)(this,a,Math.max(0,(0,Z.S7)(this,a)-t)),this._progress=this.timeout>0?Math.max(0,(0,Z.S7)(this,a)/this.timeout*100):0,(0,Z.S7)(this,a)<=0&&(0,Z.jq)(this,d,V).call(this,"timeout")},100))},g=function(){(0,Z.S7)(this,a)<=0||(0,Z.S7)(this,o)||(0,Z.S7)(this,s)||(0,Z.jq)(this,d,p).call(this)},M=function(){(0,Z.jq)(this,d,m).call(this)},m=function(){clearTimeout((0,Z.S7)(this,o)),clearInterval((0,Z.S7)(this,s)),(0,Z.OV)(this,o,(0,Z.OV)(this,s,void 0))},V=function(){var e=(0,x.A)(function*(e){this._isClosing=!0,(0,Z.jq)(this,d,u).call(this),(0,Z.jq)(this,d,m).call(this),yield this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:e},bubbles:!0,composed:!0}),yield new Promise(e=>setTimeout(e,300)),this._cardHidden=!0});return function(t){return e.apply(this,arguments)}}(),f=function(e){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:e},bubbles:!0,composed:!0})},L=function(e){"Escape"===e.key&&this.dismissible&&(e.preventDefault(),(0,Z.jq)(this,d,V).call(this,"escape"))},_=function(){return P[this.variant]},H=function(){const e=`gds-icon-${(0,Z.S7)(this,d,_).icon}`;return N.qy`${B.qy`<${(0,B.Bk)((0,N.Eq)(e))} class="icon" solid aria-hidden="true" size="24px"></${(0,B.Bk)((0,N.Eq)(e))}>`}`},v=function(){return N.qy`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`},k=function(e){return N.qy`
      <gds-button
        class="action"
        .variant=${this.variant}
        rank="secondary"
        @click=${(0,Z.jq)(this,d,f)}
        aria-describedby="alert-message"
      >
        ${e.trim()}
      </gds-button>
    `},w=function(){return this.dismissible?N.qy`
          <gds-button
            class="close"
            .variant=${this.variant}
            rank="secondary"
            size="small"
            aria-label=${(0,S.ab)("Dismiss alert")}
            @click=${()=>(0,Z.jq)(this,d,V).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:$.s6},b=function(){return this.timeout>0?N.qy`
          <div
            class=${(0,j.H)({"progress-container":!0,[this.variant]:!0})}
            role="timer"
            aria-label=${(0,S.ab)("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:$.s6},F.styles=[I.LU,W],(0,Z.Cc)([(0,G.MZ)({type:String,reflect:!0})],F.prototype,"variant",2),(0,Z.Cc)([(0,G.MZ)({type:String})],F.prototype,"label",2),(0,Z.Cc)([(0,G.MZ)({type:String,reflect:!0})],F.prototype,"role",2),(0,Z.Cc)([(0,G.MZ)({type:Boolean})],F.prototype,"dismissible",2),(0,Z.Cc)([(0,G.MZ)({type:Number})],F.prototype,"timeout",2),(0,Z.Cc)([(0,G.MZ)({type:String,attribute:"button-label"})],F.prototype,"buttonLabel",2),(0,Z.Cc)([(0,G.wk)()],F.prototype,"_progress",2),(0,Z.Cc)([(0,G.wk)()],F.prototype,"_isClosing",2),(0,Z.Cc)([(0,G.wk)()],F.prototype,"_cardHidden",2),F=(0,Z.Cc)([(0,N.Y$)("gds-alert",{dependsOn:[Y.t,z.z,A.i,O.f,T.w,R.r]}),(0,S.cc)()],F);var D=r(6506);const K=e=>{F.define();const t=(0,y.p)("gds-alert"),r={...e,class:e.className};return(0,D.createElement)(t,r)}},4309:(e,t,r)=>{r.r(t),r.d(t,{GdsAlert:()=>o.F,GdsBackdrop:()=>Mo,GdsBadge:()=>a,GdsBlur:()=>p,GdsBreadcrumb:()=>cl,GdsBreadcrumbs:()=>v,GdsButton:()=>w,GdsCalendar:()=>Z,GdsCard:()=>x,GdsCardLinked:()=>E,GdsCardPattern01:()=>Wn,GdsCheckbox:()=>U,GdsCheckboxGroup:()=>Hl,GdsCoachmark:()=>pe,GdsContextMenu:()=>Me,GdsDatepicker:()=>Ve,GdsDetails:()=>Se,GdsDialog:()=>Ue,GdsDiv:()=>Je.o,GdsDivider:()=>rt,GdsDropdown:()=>st,GdsFab:()=>it,GdsFilterChip:()=>wl,GdsFilterChips:()=>ct,GdsFlex:()=>Ct,GdsFormControlFooter:()=>Pn,GdsFormControlHeader:()=>Fn,GdsFormSummary:()=>_t,GdsFormattedAccount:()=>Zl,GdsFormattedDate:()=>yl,GdsFormattedNumber:()=>Sl,GdsGrid:()=>kt,GdsGroupedList:()=>bt,GdsIconDetails:()=>vl,GdsImg:()=>Gt,GdsInput:()=>Vr,GdsLink:()=>kr,GdsListItem:()=>yt,GdsMask:()=>Zr,GdsMenuButton:()=>jr,GdsMenuHeading:()=>Qn,GdsMenuItem:()=>Xn,GdsOption:()=>Kn,GdsPagination:()=>po,GdsPopover:()=>mo,GdsRadio:()=>Ho,GdsRadioGroup:()=>Wl,GdsRichText:()=>bo,GdsSegment:()=>Pl,GdsSegmentedControl:()=>To,GdsSelect:()=>rs,GdsSensitiveAccount:()=>Dl,GdsSensitiveDate:()=>Ul,GdsSensitiveNumber:()=>Ql,GdsSignal:()=>ns,GdsSpinner:()=>ds,GdsTable:()=>kn,GdsText:()=>wn,GdsTextarea:()=>bn,GdsTheme:()=>Zn.G,GdsVideo:()=>Sn,IconAi:()=>ei,IconAirplaneUp:()=>ri,IconArchive:()=>si,IconArrow:()=>Xi,IconArrowBottomTop:()=>li,IconArrowBoxLeft:()=>ai,IconArrowBoxRight:()=>Ci,IconArrowDown:()=>hi,IconArrowInbox:()=>pi,IconArrowLeft:()=>Vi,IconArrowLeftRight:()=>Mi,IconArrowOutOfBox:()=>Li,IconArrowRight:()=>yi,IconArrowRightCircle:()=>Hi,IconArrowRightDownCircle:()=>ki,IconArrowRightUpCircle:()=>bi,IconArrowRotateClockwise:()=>Si,IconArrowRotateCounterClockwise:()=>Gi,IconArrowRotateLeftRight:()=>Ei,IconArrowRotateRightLeft:()=>qi,IconArrowShareLeft:()=>Ii,IconArrowShareRight:()=>zi,IconArrowSplit:()=>Ti,IconArrowUp:()=>Ri,IconArrowWallDown:()=>Wi,IconArrowWallLeft:()=>Fi,IconArrowWallRight:()=>Ki,IconArrowWallUp:()=>Ji,IconArrowsRepeat:()=>ta,IconAt:()=>oa,IconBack:()=>na,IconBackward:()=>ia,IconBag:()=>ca,IconBank:()=>da,IconBanknote:()=>ga,IconBanknote2:()=>ua,IconBarcode:()=>ma,IconBarsThree:()=>fa,IconBarsTwo:()=>_a,IconBasket:()=>va,IconBatteryLoading:()=>wa,IconBell:()=>Za,IconBlock:()=>xa,IconBook:()=>$a,IconBookmark:()=>Aa,IconBookmarkCheck:()=>ja,IconBookmarkDelete:()=>Ba,IconBookmarkPlus:()=>Na,IconBookmarkRemove:()=>Ya,IconBooks:()=>Ra,IconBrandAppStore:()=>Wa,IconBrandAppleMusic:()=>Fa,IconBrandBankid:()=>Ka,IconBrandChrome:()=>Ja,IconBrandFacebook:()=>Xa,IconBrandFigma:()=>tc,IconBrandFirefox:()=>oc,IconBrandGithub:()=>nc,IconBrandGreen:()=>ic,IconBrandInstagram:()=>cc,IconBrandLinkedin:()=>dc,IconBrandPlayStore:()=>uc,IconBrandRssFeed:()=>gc,IconBrandSeb:()=>mc,IconBrandSpotify:()=>fc,IconBrandStorybook:()=>_c,IconBrandX:()=>vc,IconBrush:()=>wc,IconBubble:()=>Yc,IconBubbleAnnotation:()=>Zc,IconBubbleDots:()=>xc,IconBubbleQuestion:()=>$c,IconBubbleQuotes:()=>jc,IconBubbleText:()=>Bc,IconBubbleWideAnnotation:()=>Nc,IconBubbles:()=>Ac,IconBuildings:()=>Rc,IconBulletList:()=>Wc,IconCainLink:()=>Fc,IconCalculator:()=>Kc,IconCalendar:()=>Xc,IconCalendarCheck:()=>Jc,IconCalenderAdd:()=>tC,IconCall:()=>oC,IconCar:()=>nC,IconCarussel:()=>iC,IconChainLink:()=>CC,IconChainLinkBroken:()=>cC,IconChargingStation:()=>hC,IconChartOne:()=>pC,IconChartPresentation:()=>MC,IconChartTwo:()=>VC,IconChecklist:()=>LC,IconCheckmark:()=>_C,IconChevronBottom:()=>HC,IconChevronDoubleDown:()=>kC,IconChevronDoubleLeft:()=>wC,IconChevronDoubleRight:()=>bC,IconChevronDoubleUp:()=>yC,IconChevronDownSmall:()=>SC,IconChevronGrabberVertical:()=>GC,IconChevronLeft:()=>EC,IconChevronLeftSmall:()=>jC,IconChevronRight:()=>qC,IconChevronRightSmall:()=>BC,IconChevronTop:()=>zC,IconChevronTopSmall:()=>IC,IconCircleBan:()=>TC,IconCircleCheck:()=>OC,IconCircleDots:()=>PC,IconCircleInfo:()=>DC,IconCircleMinus:()=>UC,IconCirclePlaceholderOn:()=>QC,IconCirclePlus:()=>ed,IconCircleQuestionmark:()=>rd,IconCircleX:()=>sd,IconCirclesThree:()=>ld,IconClock:()=>ad,IconCloudDownload:()=>Cd,IconCloudUpload:()=>hd,IconCloudySun:()=>pd,IconCode:()=>Vd,IconCodeBrackets:()=>Md,IconCompassRound:()=>Ld,IconCookies:()=>Hd,IconCopy:()=>vd,IconCreditCard:()=>wd,IconCrossLarge:()=>bd,IconCrossSmall:()=>Zd,IconCupHot:()=>xd,IconCursor:()=>$d,IconDevices:()=>jd,IconDirection:()=>Bd,IconDollar:()=>Nd,IconDotGridOneHorizontal:()=>Id,IconDotGridOneVertical:()=>zd,IconDotGridThree:()=>Td,IconDotGridTwo:()=>Od,IconEmail:()=>Pd,IconEmojiAngry:()=>Dd,IconEmojiNeutral:()=>Ud,IconEmojiSad:()=>Qd,IconEmojiSmile:()=>eh,IconEmojiSmiley:()=>rh,IconEuro:()=>sh,IconExpand:()=>lh,IconEyeOpen:()=>ah,IconEyeSlash:()=>Ch,IconFashion:()=>hh,IconFastForward:()=>ph,IconFileBend:()=>Mh,IconFileChart:()=>Vh,IconFileText:()=>Lh,IconFiles:()=>Hh,IconFilter:()=>kh,IconFlag:()=>bh,IconFloppyDisk:()=>yh,IconFocus:()=>Gh,IconFocusSquare:()=>Sh,IconFolder:()=>zh,IconFolderAddRight:()=>Eh,IconFolderPaper:()=>qh,IconFolderUpload:()=>Ih,IconFullscreen:()=>Th,IconGift:()=>Oh,IconGlobus:()=>Ph,IconGraduateCap:()=>Dh,IconGreenPower:()=>Uh,IconGroup:()=>Qh,IconGrowth:()=>eu,IconHeadphones:()=>ru,IconHeart:()=>lu,IconHeartBeat:()=>su,IconHistory:()=>au,IconHomeEnergyOne:()=>Cu,IconHomeEnergyTwo:()=>hu,IconHomeOpen:()=>pu,IconHomeRoof:()=>Mu,IconHorizontalAlignmentBottom:()=>Vu,IconHourglass:()=>Lu,IconImages:()=>Hu,IconInboxEmpty:()=>ku,IconIndustry:()=>bu,IconInvite:()=>yu,IconJpg:()=>Su,IconKey:()=>Gu,IconKnifeSpoon:()=>Eu,IconLab:()=>qu,IconLaw:()=>Iu,IconLeisure:()=>zu,IconLightBulb:()=>Ou,IconLightBulbSimple:()=>Tu,IconLightning:()=>Pu,IconLineChartFour:()=>Du,IconLineChartOne:()=>Uu,IconLineChartThree:()=>Qu,IconLineChartTwo:()=>ep,IconLock:()=>rp,IconMacbookAir:()=>sp,IconMagnifyingGlass:()=>np,IconMaintenance:()=>ip,IconMapPin:()=>cp,IconMegaphone:()=>dp,IconMenuSidebar:()=>up,IconMicOff:()=>gp,IconMicOn:()=>mp,IconMinimize:()=>fp,IconMinusLarge:()=>_p,IconMinusSmall:()=>Hp,IconMoneyHand:()=>kp,IconMoneybag:()=>bp,IconMoon:()=>yp,IconMute:()=>Sp,IconOffice:()=>Gp,IconOther:()=>Ep,IconPageAdd:()=>qp,IconPageText:()=>Ip,IconPaperPlaneTopRight:()=>zp,IconPaperclip:()=>Tp,IconPause:()=>Op,IconPdf:()=>Pp,IconPencelLine:()=>Dp,IconPencilSign:()=>Up,IconPencilSparkle:()=>Qp,IconPencilWave:()=>eg,IconPension:()=>rg,IconPeople:()=>Vg,IconPeopleA11y:()=>sg,IconPeopleAdd:()=>lg,IconPeopleAdded:()=>ag,IconPeopleCircle:()=>Cg,IconPeopleCopy:()=>hg,IconPeopleProfile:()=>pg,IconPeopleRemove:()=>Mg,IconPercent:()=>Lg,IconPhone:()=>kg,IconPhoneDynamicIsland:()=>Hg,IconPieChart:()=>bg,IconPiggyBank:()=>yg,IconPin:()=>Sg,IconPinch:()=>Gg,IconPlay:()=>qg,IconPlayCircle:()=>Eg,IconPlusLarge:()=>Ig,IconPlusSmall:()=>zg,IconPng:()=>Tg,IconPoop:()=>Og,IconPostcard:()=>Pg,IconPound:()=>Dg,IconPowerPlant:()=>Ug,IconPrinter:()=>Qg,IconPush:()=>eM,IconQrCode:()=>rM,IconRainy:()=>sM,IconRaisingHand:()=>lM,IconReadingList:()=>aM,IconReceiptBill:()=>CM,IconReceiptionBell:()=>hM,IconRecord:()=>pM,IconRefund:()=>MM,IconRobot:()=>VM,IconRocket:()=>LM,IconRunShortcut:()=>HM,IconSafari:()=>kM,IconSchool:()=>bM,IconScissors:()=>yM,IconSearchMenu:()=>SM,IconSeb:()=>GM,IconSettingsGear:()=>EM,IconSettingsSliderHor:()=>qM,IconSettingsSliderThree:()=>IM,IconSettingsSliderVer:()=>zM,IconShapes:()=>TM,IconShare:()=>OM,IconShield:()=>UM,IconShieldChecked:()=>PM,IconShieldCrossed:()=>DM,IconShoppingBag:()=>QM,IconSignature:()=>em,IconSmartwatch:()=>rm,IconSolar:()=>lm,IconSolarPanel:()=>sm,IconSort:()=>um,IconSortAscending:()=>am,IconSortDescending:()=>Cm,IconSortDown:()=>dm,IconSortUp:()=>hm,IconSquareArrowTopRight:()=>gm,IconSquareBehindSquare:()=>mm,IconSquareCheck:()=>fm,IconSquareGridCircle:()=>_m,IconSquareInfo:()=>vm,IconSquareMinus:()=>wm,IconSquarePlaceholder:()=>Zm,IconSquarePlus:()=>xm,IconSquareX:()=>$m,IconStar:()=>jm,IconStore:()=>Bm,IconSuitcaseWork:()=>Nm,IconSun:()=>Ym,IconSunsetArrowDown:()=>Am,IconTag:()=>Rm,IconTargetArrow:()=>Wm,IconTelevision:()=>Fm,IconTennis:()=>Km,IconTextEdit:()=>Jm,IconThermostat:()=>Xm,IconThumbsDown:()=>tV,IconThumbsUp:()=>oV,IconTicket:()=>nV,IconTodos:()=>iV,IconTradingViewCandles:()=>cV,IconTrashCan:()=>dV,IconTree:()=>uV,IconTrendingFour:()=>gV,IconTrendingOne:()=>mV,IconTrendingThree:()=>fV,IconTrendingTwo:()=>_V,IconTriangleExclamation:()=>vV,IconTruck:()=>wV,IconUmbrellaSecurity:()=>ZV,IconUnlocked:()=>xV,IconVerticalAlignmentRight:()=>$V,IconVolumeFull:()=>jV,IconVolumeHalf:()=>BV,IconVolumeOff:()=>NV,IconWallet:()=>YV,IconWarningSign:()=>AV,IconWifiFull:()=>RV,IconYoutube:()=>WV,IconZap:()=>FV,IconZoomIn:()=>KV,IconZoomOut:()=>JV});var o=r(4264),s=r(6861),n=r(9633),l=r(801),i=r(6506);const a=e=>{l.K.define();const t=(0,n.p)("gds-badge"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var c=r(8641),C=r(7526),d=r(9443),h=d.AH`
  :host {
    --_blur: 5px;
  }

  .blur {
    filter: blur(var(--_blur));
  }
`;let u=class extends c.j{render(){return C.qy`<div class="blur"><slot></slot></div>`}};u.styles=h,u=(0,s.Cc)([(0,C.Y$)("gds-blur")],u);const p=e=>{u.define();const t=(0,n.p)("gds-blur"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var g=r(6743),M=r(4367),m=r(3578),V=r(5073),f=r(4987),L=r(638),_=d.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      container-type: inline-size;
      --_gap: var(--gds-sys-space-s);
    }

    nav {
      display: flex;
      align-items: center;
      width: max-content;
      gap: var(--_gap);
      font: var(--gds-sys-text-detail-book-m);
    }

    .size-small {
      font: var(--gds-sys-text-detail-book-s);
      --_gap: var(--gds-sys-space-xs);
    }

    .size-small .list {
      --_gap: var(--gds-sys-space-xs);
    }

    .list {
      display: flex;
      align-items: center;
      gap: var(--_gap);
      list-style: none;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
      height: max-content;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    ::slotted(*:not(:last-child))::after {
      content: '/';
      display: block;
    }

    ::slotted(*:not([gds-element='gds-breadcrumb'])) {
      display: contents;
    }

    .mobile-return {
      display: none;
      align-items: center;
      justify-content: center;
    }

    @container (max-width: 400px) {
      .mobile-return {
        display: flex;
      }

      ::slotted(*[return])::after {
        display: none;
      }
    }
  }
`;let H=class extends((0,f.lt)((0,f.Q8)((0,f.TM)(c.j)))){constructor(){super(...arguments),this.size="large",this.label=(0,g.ab)("Breadcrumbs")}get breadcrumbItems(){return Array.from(this.querySelectorAll("[gds-element=gds-breadcrumb]"))}handleSlotChange(){const e=this.breadcrumbItems;e.forEach((t,r)=>{r===e.length-2?t.setAttribute("return",""):t.removeAttribute("return")})}render(){return C.qy`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${(0,m.H)({"size-small":"small"===this.size})}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <div role="list" class="list">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </nav>
    `}};H.styles=[V.LU,_],(0,s.Cc)([(0,M.MZ)({type:String})],H.prototype,"size",2),(0,s.Cc)([(0,M.MZ)({type:String})],H.prototype,"label",2),H=(0,s.Cc)([(0,C.Y$)("gds-breadcrumbs",{dependsOn:[L.g]}),(0,g.cc)()],H);const v=e=>{H.define();const t=(0,n.p)("gds-breadcrumbs"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var k=r(7595);const w=e=>{k.t.define();const t=(0,n.p)("gds-button"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var b=r(5495);const Z=e=>{b.x.define();const t=(0,n.p)("gds-calendar"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var y=r(7617);const x=e=>{y.z.define();const t=(0,n.p)("gds-card"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var S=r(4652);function $(e){var t;class r extends e{constructor(){super(...arguments),(0,s.VK)(this,t)}get rel(){return(0,s.S7)(this,t)?(0,s.S7)(this,t):"_blank"===this.target?"noreferrer noopener":void 0}set rel(e){(0,s.OV)(this,t,e)}}return t=new WeakMap,(0,s.Cc)([(0,M.MZ)()],r.prototype,"href",2),(0,s.Cc)([(0,M.MZ)()],r.prototype,"target",2),(0,s.Cc)([(0,M.MZ)()],r.prototype,"rel",1),(0,s.Cc)([(0,M.MZ)({type:String})],r.prototype,"download",2),(0,s.Cc)([(0,M.MZ)()],r.prototype,"ping",2),r}var G=d.AH`
  :host {
    display: contents;
  }

  a {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-color: var(--_border-color);
    background-color: var(--_background-color);
    color: var(--_color);
    border-width: var(--gds-sys-space-5xs);
    border-style: solid;
    text-decoration: none;
    cursor: pointer;
    outline: solid var(--gds-sys-space-4xs) transparent;
    outline-offset: var(--gds-sys-space-4xs);
    transition-property: all;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-ease-in);

    &:focus {
      outline-color: var(--gds-sys-color-content-neutral-01);
      outline-offset: var(--gds-sys-space-3xs);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l2-neutral-02),
          var(--gds-sys-color-state-neutral-03)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l2-neutral-02),
        var(--gds-sys-color-state-neutral-04)
      );
    }
  }
`;let j=class extends($(y.z)){render(){return C.qy`<a
      href=${(0,S.J)(this.href)}
      target=${(0,S.J)(this.target)}
      rel=${(0,S.J)(this.rel)}
      ping=${(0,S.J)(this.ping)}
      download=${(0,S.J)(this.download)}
      tabindex="0"
    >
      <slot></slot>
    </a>`}};j.styles=[V.LU,G],j.styleExpressionBaseSelector="a",j=(0,s.Cc)([(0,C.Y$)("gds-card-linked")],j);const E=e=>{j.define();const t=(0,n.p)("gds-card-linked"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var B=r(505),q=d.AH`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field-label {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .container {
      display: flex;
      gap: var(--_container-gap, var(--gds-sys-space-s));
    }

    .label {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    slot[name='label']::slotted(*) {
      font: var(--_font-label, var(--gds-sys-text-detail-book-m));
      cursor: inherit;
    }

    slot[name='supporting-text']::slotted(*) {
      font: var(--_font-supporting-text);
      font-weight: var(--gds-sys-text-weight-regular);
    }
  }
`;let N=class extends c.j{constructor(){super(),this.label="",this.supportingText=""}render(){const e={label:!0,"has-supporting-text":!!this.supportingText};return C.qy`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${(0,m.H)(e)}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `}};N.styles=[V.LU,q],(0,s.Cc)([(0,M.MZ)()],N.prototype,"label",2),(0,s.Cc)([(0,M.MZ)({attribute:"supporting-text"})],N.prototype,"supportingText",2),N=(0,s.Cc)([(0,C.Y$)("gds-toggle-control-base"),(0,g.cc)()],N);var I=r(8146),Y=r(8057),z=r(1374),A=r(8558),T=r(6290),R=r(3832);let O=class extends R.M{};O._regularSVG='<path d="M6.75 12H17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',O._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z" fill="currentColor"/>',O._name="minus-small",O._width=24,O._height=24,O._viewBox="0 0 24 24",O=(0,s.Cc)([(0,C.Y$)("gds-icon-minus-small")],O);var W,P,F,D=d.AH`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:invalid) {
    color: var(--gds-sys-color-content-negative-01);
  }

  :host(:focus) {
    outline: none;
  }

  #message {
    display: none;
  }
`;let K=class extends A.S{constructor(){super(...arguments),(0,s.VK)(this,W),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}focus(e){this._elCheckbox.focus(e)}render(){return C.qy`
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          ?indeterminate=${this.indeterminate}
          aria-invalid=${this.invalid}
          aria-describedby="message supporting-text"
          id="checkbox-input"
          @change=${()=>{this.checked=this._elCheckbox.checked,(0,s.jq)(this,W,F).call(this)}}
        />
        ${(0,B.z)(this.errorMessage,()=>C.qy`<span id="message">${this.errorMessage}</span>`)}
        <gds-toggle-control-base type="checkbox" @click=${(0,s.jq)(this,W,P)}>
          <label for="checkbox-input" slot="label"> ${this.label} </label>
          <span
            slot="supporting-text"
            class="supporting-text"
            id="supporting-text"
          >
            ${this.supportingText}
          </span>
          ${(0,Y.o)({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
        </gds-toggle-control-base>
      </div>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};W=new WeakSet,P=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,(0,s.jq)(this,W,F).call(this))},F=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})},K.styles=[V.LU,I.A,D],(0,s.Cc)([(0,M.MZ)()],K.prototype,"label",2),(0,s.Cc)([(0,M.MZ)({attribute:"supporting-text"})],K.prototype,"supportingText",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],K.prototype,"checked",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],K.prototype,"indeterminate",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],K.prototype,"disabled",2),(0,s.Cc)([(0,M.P)('input[type="checkbox"]')],K.prototype,"_elCheckbox",2),(0,s.Cc)([(0,z.w)("indeterminate")],K.prototype,"_handleIndeterminateChange",1),K=(0,s.Cc)([(0,C.Y$)("gds-checkbox",{dependsOn:[N,T.V,O]})],K);const U=e=>{K.define();const t=(0,n.p)("gds-checkbox"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var J,Q,X,ee,te,re,oe,se,ne,le,ie,ae,ce=r(7198),Ce=r(3104),de=r(7956),he=d.AH`
  #body {
    visibility: hidden;
    position: absolute;
    z-index: 1060;
    box-sizing: border-box;
    padding: var(--gds-sys-space-m);
    width: 20rem;
    border-radius: var(--gds-sys-radius-s);
    background-color: var(--gds-sys-color-l2-neutral-03);
    color: var(--gds-sys-color-content-inversed);
    opacity: 0;
    transition: opacity 0.3s;
  }

  #arrow {
    box-sizing: border-box;
    z-index: -1;
    position: absolute;
    height: var(--gds-sys-space-m);
    width: var(--gds-sys-space-m);
    background-color: var(--gds-sys-color-l2-neutral-03);
    transform: rotate(45deg);
  }

  .arrow-top,
  .arrow-top-start,
  .arrow-top-end {
    bottom: -0.5rem;
  }

  .arrow-bottom,
  .arrow-bottom-start,
  .arrow-bottom-end {
    top: -0.5rem;
  }

  .arrow-left,
  .arrow-left-start,
  .arrow-left-end {
    right: -0.5rem;
  }

  .arrow-right,
  .arrow-right-start,
  .arrow-right-end {
    left: -0.5rem;
  }
`;let ue=class extends c.j{constructor(){super(...arguments),(0,s.VK)(this,ee),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(e,t,r)=>r,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,(0,s.VK)(this,J,(0,Ce._)()),(0,s.VK)(this,Q,(0,Ce._)()),(0,s.VK)(this,X)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{setTimeout(()=>{(0,s.jq)(this,ee,ae).call(this),(0,s.jq)(this,ee,te).call(this)},400)}),document.addEventListener("keydown",e=>{"Escape"===e.key&&this._isVisible&&(0,s.jq)(this,ee,te).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",(0,s.jq)(this,ee,te)),document.removeEventListener("keydown",e=>{"Escape"===e.key&&this._isVisible&&(0,s.jq)(this,ee,te).call(this)})}firstUpdated(){this.target.length>0&&(this.targetElement=(0,s.jq)(this,ee,re).call(this,this.target),(0,s.jq)(this,ee,ae).call(this))}setPreventClose(e){this._preventClose=e}render(){return C.qy`${(0,B.z)(this.target.length>0,()=>C.qy`
        <div
          role="dialog"
          id="body"
          aria-label=${this.label}
          ${(0,Ce.K)((0,s.S7)(this,J))}
        >
          <slot></slot>
          <div id="arrow" ${(0,Ce.K)((0,s.S7)(this,Q))}></div>
        </div>
      `,()=>C.qy``)}`}};J=new WeakMap,Q=new WeakMap,X=new WeakMap,ee=new WeakSet,te=function(){var e;this._isVisible&&(this._isVisible=!1,(0,s.S7)(this,J).value?.remove(),null==(e=(0,s.S7)(this,X))||e.call(this),this.dispatchCustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1}))},re=function(e){let t,r=!1;for(const o of e)"shadowRoot"!==o?t?r&&t.shadowRoot?(t=t.shadowRoot.querySelector(o),r=!1):t=t.querySelector(o):t=document.querySelector(o):r=!0;return t},oe=function(e,t){if(e==t)return;const r=e.getBoundingClientRect(),o=t.getBoundingClientRect();return r.top<o.bottom&&r.bottom>o.top&&r.left<o.right&&r.right>o.left},se=function(e){if(!e)return!1;for(const t of e){const e=document.querySelector(t);if(e&&"hidden"!==getComputedStyle(e).visibility&&(0,s.jq)(this,ee,oe).call(this,this.targetElement,e))return!0}return!1},ne=function(e){const t=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth;return t.top+t.height<0||t.top>r||t.left+t.width<0||t.left>o},le=function(){var e=(0,ce.A)(function*(e,t,r){return(0,de.rD)(e,t,{placement:this.placement,middleware:[(0,de.cY)(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",fn:e=>(0,ce.A)(function*(){return{data:yield(0,de.__)(e,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})}})()},(0,de.BN)({padding:16}),(0,de.UU)(),(0,de.jD)(),(0,de.UE)({padding:16,element:r})]})});return function(t,r,o){return e.apply(this,arguments)}}(),ie=function(){if(!this.targetElement)return!1;const e=(0,s.jq)(this,ee,ne).call(this,this.targetElement),t=this.targetElement.checkVisibility(),r=0!==this.overlappedBy.length&&(0,s.jq)(this,ee,se).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!r&&!e&&t)},ae=function(){var e=(0,ce.A)(function*(){const e=this.targetElement,t=(0,s.S7)(this,J).value,r=(0,s.S7)(this,Q).value;if(e&&t&&r)try{(0,s.OV)(this,X,(0,de.ll)(e,t,()=>{(0,s.jq)(this,ee,le).call(this,e,t,r).then(({x:e,y:o,middlewareData:n,placement:l})=>{if((0,s.jq)(this,ee,ie).call(this)){if(this._isVisible=!0,Object.assign(t.style,{visibility:"visible",opacity:1,left:`${e}px`,top:`${o}px`}),n.arrow){const{x:e,y:t}=n.arrow;r.removeAttribute("class"),r.classList.add("arrow-"+l),Object.assign(r.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:""})}}else this._isVisible=!1,Object.assign(t.style,{visibility:"hidden",opacity:0})})}))}catch(e){console.warn("failed to render tooltips")}});return function(){return e.apply(this,arguments)}}(),ue.styles=he,(0,s.Cc)([(0,M.MZ)()],ue.prototype,"placement",2),(0,s.Cc)([(0,M.MZ)({attribute:!1})],ue.prototype,"overlappedBy",2),(0,s.Cc)([(0,M.MZ)({attribute:!1})],ue.prototype,"target",2),(0,s.Cc)([(0,M.MZ)()],ue.prototype,"label",2),(0,s.Cc)([(0,M.MZ)({attribute:!1})],ue.prototype,"computeVisibility",2),(0,s.Cc)([(0,M.wk)()],ue.prototype,"_isVisible",2),(0,s.Cc)([(0,M.wk)()],ue.prototype,"_preventClose",2),ue=(0,s.Cc)([(0,C.Y$)("gds-coachmark")],ue);const pe=e=>{ue.define();const t=(0,n.p)("gds-coachmark"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var ge=r(744);const Me=e=>{ge.Hx.define();const t=(0,n.p)("gds-context-menu"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var me=r(7568);const Ve=e=>{me.L.define();const t=(0,n.p)("gds-datepicker"),r={...e,class:e.className};return(0,i.createElement)(t,r)},fe=d.AH`
  :host {
    display: contents;
  }
`;let Le=class extends c.j{constructor(){super(...arguments),this.open=!1}render(){return C.qy`
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        id="plus"
      >
        <line x1="4" y1="10" x2="16" y2="10" />
        <line x1="10" y1="4" x2="10" y2="16">
          <animate
            attributeName="y1"
            dur="240ms"
            from="${this.open?"4":"10"}"
            to="${this.open?"10":"4"}"
            begin="plus.toggle"
            fill="freeze"
          />
          <animate
            attributeName="y2"
            dur="240ms"
            from="${this.open?"16":"10"}"
            to="${this.open?"10":"16"}"
            begin="plus.toggle"
            fill="freeze"
          />
        </line>
      </svg>
    `}updated(e){if(e.has("open")){const e=this.shadowRoot?.querySelector("svg");if(e){const t=new CustomEvent("toggle",{bubbles:!0,composed:!0});e.dispatchEvent(t)}}}};Le.styles=[fe],(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],Le.prototype,"open",2),Le=(0,s.Cc)([(0,C.Y$)("gds-icon-details")],Le);var _e,He,ve,ke,we,be,Ze,ye=d.AH`
  @layer base, reset;
  @layer base {
    .details {
      border-bottom: solid var(--gds-sys-space-5xs)
        var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-body-regular-m);
      color: var(--gds-sys-color-content-neutral-01);
      transition: border-color 240ms linear;
    }

    .summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      user-select: none;
      outline-offset: var(--gds-sys-space-3xs);
      outline-color: currentColor;
      transition: all 120ms;
      color: var(--gds-sys-color-content-neutral-01);
    }

    .summary-icon {
      border-radius: var(--gds-sys-radius-max);
      background-color: transparent;
      transition: all 280ms;
      aspect-ratio: 1;
      width: max-content;
      height: max-content;
      line-height: 1;
      position: relative;
    }

    .summary-icon::after {
      content: '';
      position: absolute;
      border-radius: var(--gds-sys-radius-max);
      transition: all 280ms;
      inset: 0;
      scale: 0.9;
      opacity: 0;
      pointer-events: none;
    }

    .summary:focus {
      outline-color: var(--gds-sys-color-content-neutral-01);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      .summary:hover .summary-icon::after,
      .summary:focus-visible .summary-icon::after {
        opacity: 1;
        scale: 1;
      }

      .summary:active .summary-icon::after {
        opacity: 1;
        scale: 1;
      }

      .details:hover,
      .details:focus-within {
        border-color: var(--gds-sys-color-border-strong);
      }
    }

    .summary-label {
      font: var(--gds-sys-text-heading-xs);
      padding-block: var(--gds-sys-space-m);
      cursor: pointer;
      flex: 1;
      outline: none;
    }

    .details.small .summary-label {
      font: var(--gds-sys-text-heading-2xs);
      padding-block: var(--gds-sys-space-s);
    }

    .details.small .content {
      font: var(--gds-sys-text-heading-2xs);
    }

    .details:focus-visible {
      border-radius: var(--gds-sys-radius-2xs);
    }

    .details.open .content {
      padding-block-end: var(--gds-sys-space-l);
    }

    .details.small.open .content {
      padding-block-end: var(--gds-sys-space-s);
    }

    .content {
      interpolate-size: allow-keywords;
      height: 0;
      transition:
        height 0.35s ease,
        padding-block-end 0.35s ease;
      overflow: hidden;
      outline: none;
      scrollbar-width: none;
    }

    .content.open {
      overflow: auto;
      height: max-content;
      max-height: 100vh;
    }
  }
`;let xe=class extends((0,f.Q8)((0,f.TM)((0,f.lt)(c.j)))){constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large",(0,s.VK)(this,_e,()=>{this.open=!this.open,(0,s.S7)(this,ke).call(this)}),(0,s.VK)(this,He,e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),(0,s.S7)(this,_e).call(this))}),(0,s.VK)(this,ve,()=>{this.open&&this.name&&document.querySelectorAll('[gds-element="gds-details"]').forEach(e=>{var t;if(e!==this&&e.name===this.name){const r=e;r.open=!1,(0,s.S7)(t=r,ke).call(t)}})}),(0,s.VK)(this,ke,()=>{this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.open})}),(0,s.VK)(this,we,()=>C.qy`
      <div
        class="summary"
        part="summary"
        role="button"
        tabindex="0"
        @click=${(0,s.S7)(this,_e)}
        @keydown=${(0,s.S7)(this,He)}
        aria-expanded="${this.open}"
        aria-controls="content-${this.name||"default"}"
      >
        <div id="summary-${this.name||"default"}" class="summary-label">
          ${this.summary||"Summary"}
        </div>
        ${(0,s.S7)(this,be).call(this)}
      </div>
    `),(0,s.VK)(this,be,()=>C.qy`
      <div class="summary-icon" role="presentation" aria-hidden="true">
        <gds-button
          rank="tertiary"
          size=${"small"===this.size?"xs":"medium"}
          role="presentation"
          tabindex="-1"
        >
          <gds-icon-details .open=${this.open}></gds-icon-details>
        </gds-button>
      </div>
    `),(0,s.VK)(this,Ze,()=>C.qy`
      <div
        id="content-${this.name||"default"}"
        class=${(0,m.H)({content:!0,open:this.open,small:"small"===this.size})}
        aria-hidden="${!this.open}"
        ?inert="${!this.open}"
      >
        <slot></slot>
      </div>
    `)}__handleOpenChange(){(0,s.S7)(this,ve).call(this)}render(){return C.qy`
      <div
        class=${(0,m.H)({details:!0,open:this.open,small:"small"===this.size})}
      >
        ${(0,s.S7)(this,we).call(this)} ${(0,s.S7)(this,Ze).call(this)}
      </div>
    `}};_e=new WeakMap,He=new WeakMap,ve=new WeakMap,ke=new WeakMap,we=new WeakMap,be=new WeakMap,Ze=new WeakMap,xe.styles=[V.LU,ye],(0,s.Cc)([(0,M.MZ)({type:String})],xe.prototype,"summary",2),(0,s.Cc)([(0,M.MZ)({type:String})],xe.prototype,"name",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],xe.prototype,"open",2),(0,s.Cc)([(0,M.MZ)({type:String})],xe.prototype,"size",2),(0,s.Cc)([(0,M.P)(".content")],xe.prototype,"_content",2),(0,s.Cc)([(0,M.P)('slot[name="summary-icon-open"]')],xe.prototype,"_openIconSlot",2),(0,s.Cc)([(0,M.P)('slot[name="summary-icon-closed"]')],xe.prototype,"_closedIconSlot",2),(0,s.Cc)([(0,z.w)("open")],xe.prototype,"__handleOpenChange",1),xe=(0,s.Cc)([(0,C.Y$)("gds-details",{dependsOn:[k.t,Le]})],xe);const Se=e=>{xe.define();const t=(0,n.p)("gds-details"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var $e=r(8337),Ge=r(8833),je=r(6312);let Ee=class extends R.M{};Ee._regularSVG='<path d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',Ee._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L12 10.2322L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L13.7678 12L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L12 13.7678L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L10.2322 12L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z" fill="currentColor"/>',Ee._name="cross-large",Ee._width=24,Ee._height=24,Ee._viewBox="0 0 24 24",Ee=(0,s.Cc)([(0,C.Y$)("gds-icon-cross-large")],Ee);var Be=d.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;

      --_margin: var(--gds-sys-space-l);
    }

    dialog {
      transition: transform var(--gds-sys-motion-duration-fast)
        cubic-bezier(var(--gds-sys-motion-easing-ease-out));
      background: transparent;
      padding: 0;
      border-width: 0;
      overflow: visible;
      max-width: calc(100vw - var(--_margin));
      max-height: 100vh;
      display: flex;
      width: 400px;

      @starting-style {
        opacity: 0;
        transform: translateY(-16px);
        &::backdrop {
          opacity: 0;
        }
      }

      &::backdrop {
        transition: all var(--gds-sys-motion-duration-fast)
          cubic-bezier(var(--gds-sys-motion-easing-ease-out));
        background: rgba(100, 100, 100, 0.4);
      }
    }

    dialog > * {
      flex-grow: 1;
    }

    dialog.default.placement-initial {
      margin: auto;
      --_margin: 0px;
    }

    dialog.default.placement-top {
      margin: var(--gds-sys-space-l) auto auto;
    }

    dialog.default.placement-bottom {
      margin: auto auto var(--gds-sys-space-l) auto;
    }

    dialog.default.placement-left {
      margin: auto var(--gds-sys-space-l) auto auto;
    }
    dialog.default.placement-right {
      margin: auto auto auto var(--gds-sys-space-l);
    }

    dialog.slide-out {
      --_in: var(--gds-sys-space-m);
      --_margin: var(--gds-sys-space-l);

      height: auto;

      &.placement-initial,
      &.placement-right {
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) var(--_in) var(--_in) auto;
        }

        @starting-style {
          transform: translateX(var(--gds-sys-space-6xl));
        }
      }

      &.placement-left {
        @starting-style {
          transform: translateX(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) auto var(--_in) var(--_in);
        }
      }

      &.placement-top {
        @starting-style {
          transform: translateY(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in) var(--_in) auto var(--_in);
      }

      &.placement-bottom {
        @starting-style {
          transform: translateY(calc(var(--gds-sys-space-6xl)));
        }
        inset: auto var(--_in) var(--_in) var(--_in);
      }
    }

    dialog:focus {
      outline: none;
    }

    .card {
      flex-direction: column;
    }

    slot[name='footer'] > *,
    slot[name='footer']::slotted(*) {
      flex: 1;
    }

    h2 {
      margin: 0;
      padding: 0;
      font: var(--gds-sys-text-heading-s);
      margin-block-start: var(--gds-sys-space-4xs);
    }
  }
`,qe=r(1658);const Ne=new Set;function Ie(e){Ne.delete(e),0===Ne.size&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}var Ye,ze,Ae,Te,Re,Oe,We,Pe,Fe,De;qe.J.instance.injectGlobalStyles("dialog-scroll-lock",d.AH`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `);let Ke=class extends((0,f.Q8)((0,f.vi)((0,f.Md)(c.j)))){constructor(){super(...arguments),(0,s.VK)(this,We),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,(0,s.VK)(this,Ye),(0,s.VK)(this,ze,!1),(0,s.VK)(this,Ae,e=>{let t=e.target.returnValue;if("prop-change"===t)this.close(t);else{if(t=t||"native-close",!(0,s.S7)(this,Te).call(this,t))return;this.close(t)}}),(0,s.VK)(this,Te,e=>!!(0,s.S7)(this,Oe).call(this,e)&&(this.dispatchCustomEvent("gds-close",{detail:e}),!0)),(0,s.VK)(this,Re,e=>!!(0,s.S7)(this,Oe).call(this,e)&&(this.dispatchCustomEvent("gds-show",{detail:e}),!0)),(0,s.VK)(this,Oe,e=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:e,open:this.open}})),(0,s.VK)(this,Fe,e=>{this.show("slotted-trigger")}),(0,s.VK)(this,De,e=>{const t=e,r=this._elDialog;if((t.clientX>0||t.clientY>0)&&t.target===this&&r&&this.open){const e=r.getBoundingClientRect(),o="click-outside";e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width||(0,s.S7)(this,ze)||!(0,s.S7)(this,Te).call(this,o)||this.close(o)}(0,s.OV)(this,ze,!1)})}show(e){this.open=!0,e&&(0,s.S7)(this,Re).call(this,e)}close(e){(0,s.OV)(this,Ye,e),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),Ie(this)}render(){return C.qy`<slot
        name="trigger"
        @slotchange=${(0,s.jq)(this,We,Pe)}
      ></slot>
      ${(0,B.z)(this.open,()=>C.qy`<dialog
            closedby="closerequest"
            @close=${(0,s.S7)(this,Ae)}
            class=${(0,m.H)({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${(0,S.J)(this.heading)}
          >
            <gds-card
              class="card"
              padding="xl"
              variant="secondary"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
              border-width="0"
              @mousedown=${()=>(0,s.OV)(this,ze,!0)}
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="tertiary"
                    size="small"
                    label=${(0,g.ab)("Close")}
                    @click=${()=>this.close("btn-close")}
                  >
                    <gds-icon-cross-large
                      size="m"
                      stroke="2"
                    ></gds-icon-cross-large>
                  </gds-button>
                </gds-flex>
                <gds-div
                  id="content"
                  flex="1"
                  overflow=${(0,S.J)(this.scrollable)?"auto":d.s6}
                >
                  <slot></slot>
                </gds-div>
                <gds-flex
                  class="footer"
                  justify-content="center"
                  gap="s"
                  padding="s 0 0 0"
                  flex-wrap="wrap"
                >
                  <slot name="footer">
                    <gds-button
                      value="cancel"
                      @click=${()=>this.close("btn-cancel")}
                      rank="secondary"
                      >${(0,g.ab)("Cancel")}</gds-button
                    >
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}>
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){this.open?((0,s.OV)(this,Ye,void 0),this.updateComplete.then(()=>{this._elDialog?.showModal(),function(e){if(Ne.add(e),!document.documentElement.classList.contains("gds-scroll-lock")){const e=function(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}()+function(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}();let t=getComputedStyle(document.documentElement).scrollbarGutter;t&&"auto"!==t||(t="stable"),e<2&&(t=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",t),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}(this),this.removeEventListener("click",(0,s.S7)(this,De)),requestAnimationFrame(()=>this.addEventListener("click",(0,s.S7)(this,De))),$e.u&&this._elDialog?.focus()})):((0,s.OV)(this,Ye,(0,s.S7)(this,Ye)||"prop-change"),this._elDialog?.close((0,s.S7)(this,Ye)),Ie(this),document.removeEventListener("click",(0,s.S7)(this,De)),this.requestUpdate("open"))}};Ye=new WeakMap,ze=new WeakMap,Ae=new WeakMap,Te=new WeakMap,Re=new WeakMap,Oe=new WeakMap,We=new WeakSet,Pe=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const e=this._elTriggerSlot.assignedElements()[0];e?.addEventListener("click",(0,s.S7)(this,Fe)),e?.setAttribute("aria-haspopup","dialog")}},Fe=new WeakMap,De=new WeakMap,Ke.styles=[Be],Ke.styleExpressionBaseSelector="dialog",(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],Ke.prototype,"open",2),(0,s.Cc)([(0,M.MZ)()],Ke.prototype,"heading",2),(0,s.Cc)([(0,M.MZ)()],Ke.prototype,"variant",2),(0,s.Cc)([(0,M.MZ)()],Ke.prototype,"placement",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],Ke.prototype,"scrollable",2),(0,s.Cc)([(0,M.P)("dialog")],Ke.prototype,"_elDialog",2),(0,s.Cc)([(0,M.P)('slot[name="trigger"]')],Ke.prototype,"_elTriggerSlot",2),(0,s.Cc)([(0,z.w)("open")],Ke.prototype,"_handleOpenChange",1),Ke=(0,s.Cc)([(0,C.Y$)("gds-dialog",{dependsOn:[k.t,y.z,Ge.o,je.o,Ee]}),(0,g.cc)()],Ke);const Ue=e=>{Ke.define();const t=(0,n.p)("gds-dialog"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var Je=r(2022),Qe=r(9399),Xe=r(4508),et=d.AH`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--_size);
  }

  hr {
    width: 100%;
    height: 1px;
    min-height: 1px;
    max-height: 1px;
    border: 0;
    margin: 0;
    padding: 0;
    background: var(--_color, currentColor);
    box-sizing: border-box;
  }
`;let tt=class extends((0,f.Q8)(c.j)){constructor(){super(...arguments),this.role=null}render(){return C.qy`<hr role=${this.role||d.s6} />`}};tt.styles=[V.LU,et],(0,s.Cc)([(0,Qe.F)({...(0,Xe.T$)("border"),property:"--_color"})],tt.prototype,"color",2),(0,s.Cc)([(0,Qe.F)({property:"--_size",valueTemplate:e=>`var(--gds-sys-space-${e})`})],tt.prototype,"size",2),(0,s.Cc)([(0,Qe.F)()],tt.prototype,"opacity",2),(0,s.Cc)([(0,M.MZ)()],tt.prototype,"role",2),tt=(0,s.Cc)([(0,C.Y$)("gds-divider")],tt);const rt=e=>{tt.define();const t=(0,n.p)("gds-divider"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var ot=r(2704);const st=e=>{ot.E.define();const t=(0,n.p)("gds-dropdown"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var nt=d.AH`
  :host {
    display: flex;
    z-index: 1050;
    position: fixed;
    inset: auto var(--gds-sys-space-3xl) var(--gds-sys-space-3xl) auto;
  }
  .button {
    box-shadow: var(--gds-sys-shadow-m-01), var(--gds-sys-shadow-m-02);
    block-size: calc(var(--_block-size) + var(--gds-sys-space-xs));
    width: max-content;
  }

  ::slotted([gds-element='gds-signal']) {
    margin-left: var(--gds-sys-space-xs);
  }
`;let lt=class extends((0,f.qC)(k.t)){connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",nt)}};lt=(0,s.Cc)([(0,C.Y$)("gds-fab")],lt);const it=e=>{lt.define();const t=(0,n.p)("gds-fab"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var at=r(9830);const ct=e=>{at.A.define();const t=(0,n.p)("gds-filter-chips"),r={...e,class:e.className};return(0,i.createElement)(t,r)},Ct=e=>{je.o.define();const t=(0,n.p)("gds-flex"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var dt=r(2783);let ht=class extends R.M{};ht._regularSVG='<path d="M5.75 10L12 3.75L18.25 10M12 20.25V4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ht._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.3315 3 12.6494 3.1317 12.8839 3.36612L18.6339 9.11612C19.122 9.60427 19.122 10.3957 18.6339 10.8839C18.1457 11.372 17.3543 11.372 16.8661 10.8839L13.25 7.26776V19.75C13.25 20.4404 12.6903 21 12 21C11.3096 21 10.75 20.4404 10.75 19.75V7.26777L7.13388 10.8839C6.64573 11.372 5.85427 11.372 5.36612 10.8839C4.87796 10.3957 4.87796 9.60427 5.36612 9.11612L11.1161 3.36612C11.3505 3.1317 11.6685 3 12 3Z" fill="currentColor"/>',ht._name="arrow-up",ht._width=24,ht._height=24,ht._viewBox="0 0 24 24",ht=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-up")],ht);var ut,pt,gt,Mt,mt,Vt,ft=d.AH`
  :host {
    display: contents;
  }
  ul {
    list-style-type: none;
    margin: 1rem 0 0;
    padding: 0;
  }
  li {
    margin: 0;
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out,
      margin 0.3s ease-in-out;
  }
  li[inert] {
    max-height: 0;
    opacity: 0;
  }
  li:not([inert]) {
    max-height: 4rem;
    opacity: 1;
  }
  a {
    color: inherit;
  }
`;let Lt=class extends c.j{constructor(){super(...arguments),(0,s.VK)(this,gt),this.hideErrors=!1,this.reactive=!1,(0,s.VK)(this,ut),(0,s.VK)(this,pt)}get errorCount(){return(0,s.jq)(this,gt,mt).call(this).length}focus(e){this._elRoot.then(t=>{const r=t.querySelector('[gds-element="gds-button"]');r&&r.focus(e)})}connectedCallback(){super.connectedCallback(),(0,s.OV)(this,ut,this.closest("form")||void 0),(0,s.S7)(this,ut)&&this.reactive&&((0,s.OV)(this,pt,new MutationObserver(()=>{this.refresh()})),(0,s.S7)(this,pt).observe((0,s.S7)(this,ut),{attributes:!0,subtree:!0}))}disconnectedCallback(){super.disconnectedCallback(),(0,s.S7)(this,pt)?.disconnect()}refresh(){this.requestUpdate()}render(){const e=(0,s.jq)(this,gt,Mt).call(this),t=(0,s.jq)(this,gt,mt).call(this);return(0,B.z)(t.length>0,()=>C.qy`<gds-card
          id="root"
          role="navigation"
          variant="negative"
          padding="l"
          background="negative-01"
          color="negative-01"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${(0,g.ab)("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font="heading-xs" font-weight="book" id="description">
              ${(0,g.ab)(g.gx`There are ${t.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${e.map((e,t)=>C.qy`<li ?inert=${!("true"===e.ariaInvalid||e.invalid)}>
                    <gds-card
                      display="flex"
                      padding="s"
                      flex-direction="row"
                      align-items="center"
                      justify-content="space-between"
                      gap="xs"
                      level="3"
                      color="negative-01"
                      background="transparent; hover: negative-01/.1"
                      style="cursor: pointer"
                      border-width="0"
                      border-radius="xs"
                      margin="0 -xs"
                      @click=${t=>{t.preventDefault(),e.focus()}}
                    >
                      <div id=${`error-label-${t}`}>
                        <gds-div font-weight="book"
                          >${e.dataset.label||e.label||e.ariaLabel}</gds-div
                        >
                        ${(0,B.z)(!this.hideErrors,()=>C.qy`<gds-div font="body-regular-s">
                              ${e.dataset.errormessage||e.errorMessage||e.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${e.label} field`}
                      >
                        ${(0,dt.T)((0,s.jq)(this,gt,Vt).call(this,e),d.s6)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};ut=new WeakMap,pt=new WeakMap,gt=new WeakSet,Mt=function(){return Array.from((0,s.S7)(this,ut)?.elements||[]).filter(e=>"gds-checkbox"!==e.gdsElementName)},mt=function(){return(0,s.jq)(this,gt,Mt).call(this).filter(e=>"true"===e.ariaInvalid||e.invalid)},Vt=function(){var e=(0,ce.A)(function*(e){const t=(yield this._elRoot).getBoundingClientRect().top;return e.getBoundingClientRect().top<t?C.qy`<gds-icon-arrow-up></gds-icon-arrow-up>`:C.qy`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`});return function(t){return e.apply(this,arguments)}}(),Lt.styles=[V.LU,ft],(0,s.Cc)([(0,M.MZ)({type:Boolean})],Lt.prototype,"hideErrors",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],Lt.prototype,"reactive",2),(0,s.Cc)([(0,M.nJ)("#root")],Lt.prototype,"_elRoot",2),Lt=(0,s.Cc)([(0,C.Y$)("gds-form-summary",{dependsOn:[y.z,je.o,Ge.o,k.t,ht]})],Lt);const _t=e=>{Lt.define();const t=(0,n.p)("gds-form-summary"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var Ht=d.AH`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    width: 100%;
    display: grid;
    grid-template-columns: var(--_grid-col);
    grid-column-gap: var(--_gap-column, 0px);
    grid-row-gap: var(--_gap-row, 0px);
    box-sizing: border-box;
  }

  :host([auto-columns]) {
    --_col-count: var(--_c, 0);
    --_gap-count: calc(var(--_col-count) - 1);
    --_total-gap-width: calc(var(--_gap-count) * var(--_gap-column, 0px));
    --_col-width-max: calc(
      (100% - var(--_total-gap-width)) / var(--_col-count)
    );
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--_col-width), var(--_col-width-max)), 1fr)
    );
  }
`;let vt=class extends Ge.o{render(){return C.qy`<slot></slot>`}};vt.styles=[V.LU,Ht],(0,s.Cc)([(0,Qe.F)({property:"--_c"})],vt.prototype,"columns",2),(0,s.Cc)([(0,Qe.F)({...Xe.MF,styleTemplate:(e,t)=>{const r=t[0];return`--_gap-column: ${t[1]||r}; --_gap-row: ${r};`}})],vt.prototype,"gap",2),(0,s.Cc)([(0,Qe.F)({reflect:!0,property:"--_col-width",valueTemplate:e=>`${isNaN(e)?e:`${e}px`}`})],vt.prototype,"auto-columns",2),vt=(0,s.Cc)([(0,C.Y$)("gds-grid")],vt);const kt=e=>{vt.define();const t=(0,n.p)("gds-grid"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var wt=r(6900);const bt=e=>{wt.d.define();const t=(0,n.p)("gds-grouped-list"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var Zt=r(1686);const yt=e=>{Zt.s.define();const t=(0,n.p)("gds-list-item"),r={...e,class:e.className};return(0,i.createElement)(t,r)};function xt(e){class t extends e{constructor(){super(...arguments),this.loading="lazy",this.decoding="auto"}}return(0,s.Cc)([(0,M.MZ)({reflect:!1})],t.prototype,"src",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],t.prototype,"srcset",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],t.prototype,"sizes",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],t.prototype,"alt",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],t.prototype,"loading",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],t.prototype,"decoding",2),t}var St=d.AH`
  :host {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;let $t=class extends((0,f.qC)((0,f.TM)((0,f.Q8)((0,f.vi)(xt(c.j)))))){render(){return C.qy`<img
      src="${(0,S.J)(this.src)}"
      alt="${(0,S.J)(this.alt)}"
      srcset=${(0,S.J)(this.srcset)}
      sizes=${(0,S.J)(this.sizes)}
      loading=${(0,S.J)(this.loading)}
      decoding=${(0,S.J)(this.decoding)}
    />`}};$t.styles=[V.LU,St],(0,s.Cc)([(0,Qe.F)({selector:"img"})],$t.prototype,"aspect-ratio",2),(0,s.Cc)([(0,Qe.F)({property:"border-radius",valueTemplate:e=>`var(--gds-sys-space-${e})`})],$t.prototype,"border-radius",2),(0,s.Cc)([(0,Qe.F)({selector:"img"})],$t.prototype,"object-fit",2),(0,s.Cc)([(0,Qe.F)({selector:"img"})],$t.prototype,"object-position",2),$t=(0,s.Cc)([(0,C.Y$)("gds-img")],$t);const Gt=e=>{$t.define();const t=(0,n.p)("gds-img"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var jt,Et,Bt,qt,Nt,It,Yt,zt,At,Tt,Rt,Ot,Wt,Pt=r(9295),Ft=r(227),Dt=r(7708),Kt=r(2655),Ut=r(2606),Jt=r(2581),Qt=r(4324),Xt=d.AH`
  textarea {
    height: calc(1lh * var(--_lines));
    min-height: calc(1lh * 4);
    max-height: calc(1lh * 20);
    overflow: auto;
    min-width: 20ch;
    padding-inline-end: calc(
      var(--gds-sys-space-xs) + var(--padding-inline-end)
    );

    &.resize-manual {
      resize: vertical;
    }

    &.resize-auto {
      resize: none;
    }

    &.resize-false {
      resize: none;
    }
  }
`;let er=class extends A.S{constructor(){super(),(0,s.VK)(this,Et),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=rr,(0,s.VK)(this,jt,this.charCounterCallback(this)),this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},(0,s.VK)(this,qt,e=>{const t=e.target;this.value=t.value}),(0,s.VK)(this,Nt,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),(0,s.VK)(this,It,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),(0,s.VK)(this,Yt,()=>{this.elTextareaAsync.then(e=>e.focus())}),(0,s.VK)(this,zt,()=>{this.value="",this.elTextareaAsync.then(e=>{if("manual"===this.resizable)e.style.height="";else if("false"===this.resizable){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{const e=this.fieldBase?.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const e=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${e.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return C.qy`
      ${(0,B.z)(!this.plain,()=>C.qy`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label for="input" slot="label">${this.label}</label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`)}

      <gds-field-base
        id="field"
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${(0,s.S7)(this,Yt)}
        multiline
      >
        ${(0,s.jq)(this,Et,At).call(this)}
      </gds-field-base>

      ${(0,B.z)((0,s.jq)(this,Et,Bt).call(this),()=>C.qy`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${(0,s.S7)(this,jt)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){(0,s.OV)(this,jt,this.charCounterCallback(this))}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if("false"===this.resizable){const t=this._initialRows??this._defaultRows;return this.rows=t,void e.style.setProperty("--_lines",t.toString())}if("manual"!==this.resizable&&"auto"===this.resizable)if(""===e.value){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),r=parseFloat(t.lineHeight),o=e.scrollHeight,s=Math.ceil(o/r),n=this._initialRows??this._defaultRows;this.rows=Math.max(n,s),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{"false"===this.resizable&&e.style.setProperty("--_lines",this.rows.toString())})}};jt=new WeakMap,Et=new WeakSet,Bt=function(){return!this.plain},qt=new WeakMap,Nt=new WeakMap,It=new WeakMap,Yt=new WeakMap,zt=new WeakMap,At=function(){return[(0,s.jq)(this,Et,Tt).call(this),(0,s.jq)(this,Et,Ot).call(this),(0,s.jq)(this,Et,Wt).call(this),(0,s.jq)(this,Et,Rt).call(this)].map(e=>C.qy`${e}`)},Tt=function(){return C.qy`<slot slot="lead" name="lead"></slot>`},Rt=function(){return C.qy`<slot slot="trail" name="trail"></slot>`},Ot=function(){return C.qy`
      <textarea
        @input=${(0,s.S7)(this,qt)}
        @change=${(0,s.S7)(this,Nt)}
        @paste=${(0,s.S7)(this,It)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||Pt.s6}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-errormessage="footer"
        placeholder=" "
        autocapitalize=${(0,S.J)(this.autocapitalize)}
        autocomplete=${(0,S.J)(this.autocomplete)}
        autocorrect=${(0,S.J)(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${(0,S.J)(this.enterkeyhint)}
        inputmode=${(0,S.J)(this.inputmode)}
        wrap=${(0,S.J)(this.wrap)}
        ?required=${this.required}
      ></textarea>
    `},Wt=function(){return this.clearable&&(this.value?.length||0)>0?C.qy`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${(0,S.J)(this.invalid?"negative":void 0)}"
          ?disabled="${this.disabled}"
          label="${(0,g.ab)("Clear input")}"
          @click=${(0,s.S7)(this,zt)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
        </gds-button>
      `:Pt.s6},er.styles=[V.LU,Ut.A,Xt],(0,s.Cc)([(0,Qe.F)({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],er.prototype,"rows",2),(0,s.Cc)([(0,M.MZ)({attribute:"supporting-text"})],er.prototype,"supportingText",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],er.prototype,"clearable",2),(0,s.Cc)([(0,M.MZ)({type:String})],er.prototype,"resizable",2),(0,s.Cc)([(0,M.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],er.prototype,"showExtendedSupportingText",2),(0,s.Cc)([(0,M.MZ)({type:Number})],er.prototype,"maxlength",2),(0,s.Cc)([(0,M.MZ)({type:String})],er.prototype,"size",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],er.prototype,"plain",2),(0,s.Cc)([(0,M.MZ)()],er.prototype,"autocapitalize",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],er.prototype,"autocorrect",2),(0,s.Cc)([(0,M.MZ)()],er.prototype,"autocomplete",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],er.prototype,"autofocus",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,converter:{fromAttribute:e=>!(!e||"false"===e),toAttribute:e=>e?"true":"false"}})],er.prototype,"spellcheck",2),(0,s.Cc)([(0,M.MZ)()],er.prototype,"wrap",2),(0,s.Cc)([(0,M.MZ)()],er.prototype,"enterkeyhint",2),(0,s.Cc)([(0,M.MZ)()],er.prototype,"inputmode",2),(0,s.Cc)([(0,M.MZ)({attribute:!1})],er.prototype,"charCounterCallback",2),(0,s.Cc)([(0,M.nJ)("textarea")],er.prototype,"elTextareaAsync",2),(0,s.Cc)([(0,M.P)("textarea")],er.prototype,"elTextarea",2),(0,s.Cc)([(0,M.P)("gds-field-base")],er.prototype,"fieldBase",2),(0,s.Cc)([(0,Qt.b)()],er.prototype,"_handleResize",1),(0,s.Cc)([(0,z.w)("value")],er.prototype,"_handleValueChange",1),(0,s.Cc)([(0,z.w)("value")],er.prototype,"_setAutoHeight",1),(0,s.Cc)([(0,z.w)("rows")],er.prototype,"_handleRowsChange",1),er=(0,s.Cc)([(0,g.cc)()],er);let tr=class extends((0,f.lt)((0,f.Q8)((0,f.TM)(er)))){};tr=(0,s.Cc)([(0,C.Y$)("gds-textarea",{dependsOn:[Kt.$,Dt.V,k.t,Ft.w,Jt.r]})],tr);const rr=e=>{const t=(e.value?.length||0)>=e.maxlength?"negative":"positive";return[e.maxlength-(e.value?.length||0),e.maxlength<Number.MAX_SAFE_INTEGER&&t]};var or,sr,nr,lr,ir,ar,cr,Cr,dr,hr,ur,pr,gr=d.AH`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: var(--_appearance-spin-button, auto);
  }

  input[type='number'] {
    -moz-appearance: var(--_appearance-spin-button, textfield);
  }
`;let Mr=class extends A.S{constructor(){super(),(0,s.VK)(this,sr),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=rr,(0,s.VK)(this,or,this.charCounterCallback(this)),(0,s.VK)(this,lr,e=>{const t=e.target;this.value=t.value}),(0,s.VK)(this,ir,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),(0,s.VK)(this,ar,()=>{this.elInputAsync.then(e=>e.focus())}),(0,s.VK)(this,cr,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return C.qy`
      ${(0,B.z)(!this.plain,()=>C.qy`<gds-form-control-header class="size-${this.size}">
            <label for="input" slot="label">${this.label}</label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`)}
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${(0,s.S7)(this,ar)}
        id="field"
      >
        ${(0,s.jq)(this,sr,Cr).call(this)}
      </gds-field-base>
      ${(0,B.z)((0,s.jq)(this,sr,nr).call(this),()=>C.qy` <gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .charCounter=${(0,s.S7)(this,or)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){(0,s.OV)(this,or,this.charCounterCallback(this))}_getValidityAnchor(){return this.elInput}};or=new WeakMap,sr=new WeakSet,nr=function(){return!this.plain},lr=new WeakMap,ir=new WeakMap,ar=new WeakMap,cr=new WeakMap,Cr=function(){return[(0,s.jq)(this,sr,dr).call(this),(0,s.jq)(this,sr,ur).call(this),(0,s.jq)(this,sr,pr).call(this),(0,s.jq)(this,sr,hr).call(this)].map(e=>C.qy`${e}`)},dr=function(){return C.qy` <slot slot="lead" name="lead"></slot> `},hr=function(){return C.qy`<slot slot="trail" name="trail"></slot>`},ur=function(){return C.qy`
      <input
        class="native-control"
        @input=${(0,s.S7)(this,lr)}
        @change=${(0,s.S7)(this,ir)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-errormessage="message"
        aria-label=${this.plain&&this.label||Pt.s6}
        placeholder=" "
        type=${this.type}
        min=${(0,S.J)(this.min)}
        max=${(0,S.J)(this.max)}
        step=${(0,S.J)(this.step)}
        autocapitalize=${(0,S.J)(this.autocapitalize)}
        autocomplete=${(0,S.J)(this.autocomplete)}
        autocorrect=${(0,S.J)(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${(0,S.J)(this.enterkeyhint)}
        inputmode=${(0,S.J)(this.inputmode)}
        ?required=${this.required}
      />
    `},pr=function(){return this.clearable&&(this.value?.length||0)>0?C.qy`<gds-button
        size="${"small"===this.size?"xs":"small"}"
        rank="tertiary"
        variant="${(0,S.J)(this.invalid?"negative":void 0)}"
        ?disabled="${this.disabled}"
        label="${(0,g.ab)("Clear input")}"
        @click=${(0,s.S7)(this,cr)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`:Pt.s6},Mr.styles=[V.LU,Ut.A,gr],(0,s.Cc)([(0,M.MZ)({attribute:"supporting-text"})],Mr.prototype,"supportingText",2),(0,s.Cc)([(0,M.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Mr.prototype,"showExtendedSupportingText",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],Mr.prototype,"clearable",2),(0,s.Cc)([(0,M.MZ)({type:Number})],Mr.prototype,"maxlength",2),(0,s.Cc)([(0,M.MZ)({reflect:!0})],Mr.prototype,"size",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],Mr.prototype,"plain",2),(0,s.Cc)([(0,M.MZ)({reflect:!0})],Mr.prototype,"type",2),(0,s.Cc)([(0,M.MZ)()],Mr.prototype,"min",2),(0,s.Cc)([(0,M.MZ)()],Mr.prototype,"max",2),(0,s.Cc)([(0,M.MZ)()],Mr.prototype,"step",2),(0,s.Cc)([(0,M.MZ)()],Mr.prototype,"autocapitalize",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],Mr.prototype,"autocorrect",2),(0,s.Cc)([(0,M.MZ)()],Mr.prototype,"autocomplete",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],Mr.prototype,"autofocus",2),(0,s.Cc)([(0,M.MZ)()],Mr.prototype,"enterkeyhint",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,converter:{fromAttribute:e=>!(!e||"false"===e),toAttribute:e=>e?"true":"false"}})],Mr.prototype,"spellcheck",2),(0,s.Cc)([(0,M.MZ)()],Mr.prototype,"inputmode",2),(0,s.Cc)([(0,M.MZ)({attribute:!1})],Mr.prototype,"charCounterCallback",2),(0,s.Cc)([(0,M.nJ)("input")],Mr.prototype,"elInputAsync",2),(0,s.Cc)([(0,M.P)("input")],Mr.prototype,"elInput",2),(0,s.Cc)([(0,z.w)("value")],Mr.prototype,"_handleValueChange",1),Mr=(0,s.Cc)([(0,g.cc)()],Mr);let mr=class extends((0,f.Q8)((0,f.TM)((0,f.lt)(Mr)))){};mr=(0,s.Cc)([(0,C.Y$)("gds-input",{dependsOn:[Kt.$,Dt.V,Ft.w,je.o,k.t,Jt.r]})],mr);const Vr=e=>{mr.define();const t=(0,n.p)("gds-input"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var fr,Lr,_r=r(911),Hr=d.AH`
  @layer core, link;

  @layer core {
    :host {
      display: inline-block;
      white-space: normal;
    }
  }

  @layer link {
    a {
      display: flex;
      align-items: center;
      gap: 1ch;
      text-decoration: none;
      text-underline-offset: 0.2lh;
      color: currentColor;
      cursor: pointer;
      border-radius: var(--gds-sys-radius-3xs);
      outline-offset: var(--gds-sys-space-3xs);
      outline-color: currentColor;
      font-weight: var(--gds-sys-text-weight-book);
      will-change: text-underline-offset;
      transition-property: text-underline-offset;
      transition-duration: var(--gds-sys-motion-duration-fastest);
      transition-timing-function: var(--gds-sys-motion-easing-ease-in-out);

      @media (pointer: fine) {
        &:hover {
          text-decoration: underline;
          text-underline-offset: 0.16lh;

          &:active {
            text-underline-offset: 0.08lh;
          }
        }
      }
    }
  }
`;let vr=class extends((0,f.TM)((0,f.Q8)((0,f.lt)($(c.j))))){constructor(){super(...arguments),(0,s.VK)(this,fr),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return _r.qy`
      <a
        href=${(0,S.J)(this.href)}
        target=${(0,S.J)(this.target)}
        rel=${(0,S.J)(this.rel||(0,s.S7)(this,fr,Lr))}
        download=${(0,S.J)(this.download)}
        ping=${(0,S.J)(this.ping)}
        aria-label=${this.label||d.s6}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};fr=new WeakSet,Lr=function(){return"_blank"===this.target?"noreferrer noopener":void 0},vr.styles=[V.LU,(0,d.iz)(Hr)],vr.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,s.Cc)([(0,M.MZ)()],vr.prototype,"label",2),(0,s.Cc)([(0,Qe.F)({valueTemplate:e=>e,selector:"a"})],vr.prototype,"text-decoration",2),vr=(0,s.Cc)([(0,C.Y$)("gds-link")],vr);const kr=e=>{vr.define();const t=(0,n.p)("gds-link"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var wr=d.AH`
  :host {
    contain: strict;
  }

  [part='mask'] {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    mask-composite: intersect;
  }
`;let br=class extends je.o{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.display="flex",this.inset="0"}render(){return _r.qy`<div part="mask"></div>
      <slot></slot>`}};br.styles=[V.LU,wr],(0,s.Cc)([(0,Qe.F)({selector:'[part="mask"]',valueTemplate:function(e){return(0,Xe.ol)(e,"background",this.level)}})],br.prototype,"background",2),(0,s.Cc)([(0,Qe.F)({valueTemplate:e=>{const[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`},selector:'[part="mask"]'})],br.prototype,"mask-image",2),(0,s.Cc)([(0,Qe.F)({valueTemplate:e=>e,selector:'[part="mask"]'})],br.prototype,"mask-size",2),(0,s.Cc)([(0,Qe.F)({valueTemplate:e=>e,selector:'[part="mask"]'})],br.prototype,"mask-repeat",2),(0,s.Cc)([(0,Qe.F)({valueTemplate:e=>e,selector:'[part="mask"]'})],br.prototype,"mask-position",2),(0,s.Cc)([(0,Qe.F)({valueTemplate:e=>e,selector:'[part="mask"]'})],br.prototype,"backdrop-filter",2),br=(0,s.Cc)([(0,C.Y$)("gds-mask")],br);const Zr=e=>{br.define();const t=(0,n.p)("gds-mask"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var yr,xr,Sr,$r=d.AH`
  @layer tokens, core, a11y, disabled, variants, sizes, sets;

  @layer tokens {
    :host {
      --_gap: var(--gds-sys-space-xs);

      --_padding-inline: var(--gds-sys-space-m);
      --_padding-block: var(--gds-sys-space-xs);

      --_color-bg: transparent;
      --_color-text: var(--gds-sys-color-content-neutral-01);
      --_color-border: transparent;

      --_font-size: 1rem;
      --_font-weight: 400;
      --_line-height: 1.25;

      display: inline-block;
      isolation: isolate;
      max-width: 100%;
      height: 100%;
    }
  }

  @layer core {
    .button {
      align-items: center;
      background-color: var(--_color-bg);
      border-bottom-width: 2px;
      border-style: none;
      border-color: var(--_color-border);
      border-bottom-style: solid;
      box-sizing: border-box;
      color-scheme: dark light;
      color: var(--_color-text);
      cursor: pointer;
      display: inline-flex;
      font-family: inherit;
      font-size: var(--_font-size);
      font-weight: var(--_font-weight);
      gap: var(--_gap);
      height: 100%;
      inline-size: 100%;
      justify-content: space-between;
      justify-items: center;
      line-height: var(--_line-height);
      outline-color: transparent;
      outline-offset: -2px;
      outline-style: solid;
      outline-width: 2px;
      padding-block: var(--_padding-block);
      padding-inline: var(--_padding-inline);
      position: relative;
      transition-property: color, border-color;
      transition: all var(--gds-sys-motion-duration-fastest);

      &:focus-visible {
        border-color: transparent;
        border-radius: 6px;
        outline-color: currentColor;
        overflow: visible;
      }

      &:hover,
      &.selected:hover,
      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-05)
        );
        --_color-border: var(--gds-sys-color-border-interactive);
      }

      &.selected {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-06)
        );
        --_color-border: var(--gds-sys-color-border-strong);
      }

      slot:not([name]) {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .compact {
      display: flex;
      flex-direction: column;
      --_padding-inline: var(--gds-sys-space-s);
      --_gap: 1px;
      font-size: 0.875rem;
      height: 56px;
      justify-content: center;

      & > slot[name] {
        order: 0;
      }
      & > slot:not([name]) {
        order: 1;
      }
    }

    a {
      text-decoration: none;
    }
  }

  :disabled {
    border-color: var(--_color-bg);
    color: var(--gds-sys-color-content-disabled-01);
    pointer-events: none;
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .button {
        transition: none;
      }
    }
  }
`;let Gr=class extends((0,f.Q8)((0,f.lt)(c.j))){constructor(){super(),(0,s.VK)(this,yr),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=(0,s.S7)(this,yr,xr)?_r.eu`a`:_r.eu`button`;return _r.qy`
      <${t}
        class="${(0,m.H)(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${(0,S.J)((0,s.S7)(this,yr,xr)?this.href:void 0)}
        target=${(0,S.J)((0,s.S7)(this,yr,xr)?this.target:void 0)}
        rel=${(0,S.J)((0,s.S7)(this,yr,xr)?this.rel||(0,s.S7)(this,yr,Sr):void 0)}
        download=${(0,S.J)((0,s.S7)(this,yr,xr)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};yr=new WeakSet,xr=function(){return this.href.length>0},Sr=function(){return"_blank"===this.target?"noreferrer noopener":void 0},Gr.styles=[V.LU,$r],Gr.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],Gr.prototype,"disabled",2),(0,s.Cc)([(0,M.MZ)()],Gr.prototype,"label",2),(0,s.Cc)([(0,M.MZ)()],Gr.prototype,"href",2),(0,s.Cc)([(0,M.MZ)()],Gr.prototype,"target",2),(0,s.Cc)([(0,M.MZ)()],Gr.prototype,"rel",2),(0,s.Cc)([(0,M.MZ)()],Gr.prototype,"download",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],Gr.prototype,"compact",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],Gr.prototype,"selected",2),Gr=(0,s.Cc)([(0,C.Y$)("gds-menu-button")],Gr);const jr=e=>{Gr.define();const t=(0,n.p)("gds-menu-button"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var Er=r(8714),Br=r(3864),qr=r(6428);let Nr=class extends R.M{};Nr._regularSVG='<path d="M10 16L6 12L10 8M17 16L13 12L17 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Nr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L7.06066 12L10.5303 15.4697C10.8232 15.7626 10.8232 16.2374 10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303L5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967ZM17.5303 7.46967C17.8232 7.76256 17.8232 8.23744 17.5303 8.53033L14.0607 12L17.5303 15.4697C17.8232 15.7626 17.8232 16.2374 17.5303 16.5303C17.2374 16.8232 16.7626 16.8232 16.4697 16.5303L12.4697 12.5303C12.1768 12.2374 12.1768 11.7626 12.4697 11.4697L16.4697 7.46967C16.7626 7.17678 17.2374 7.17678 17.5303 7.46967Z" fill="currentColor"/>',Nr._name="chevron-double-left",Nr._width=24,Nr._height=24,Nr._viewBox="0 0 24 24",Nr=(0,s.Cc)([(0,C.Y$)("gds-icon-chevron-double-left")],Nr);let Ir=class extends R.M{};Ir._regularSVG='<path d="M14 16L18 12L14 8M7 16L11 12L7 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ir._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 7.46967C6.76256 7.17678 7.23744 7.17678 7.53033 7.46967L11.5303 11.4697C11.8232 11.7626 11.8232 12.2374 11.5303 12.5303L7.53033 16.5303C7.23744 16.8232 6.76256 16.8232 6.46967 16.5303C6.17678 16.2374 6.17678 15.7626 6.46967 15.4697L9.93934 12L6.46967 8.53033C6.17678 8.23744 6.17678 7.76256 6.46967 7.46967ZM13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.9393 12L13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967Z" fill="currentColor"/>',Ir._name="chevron-double-right",Ir._width=24,Ir._height=24,Ir._viewBox="0 0 24 24",Ir=(0,s.Cc)([(0,C.Y$)("gds-icon-chevron-double-right")],Ir);let Yr=class extends R.M{};Yr._regularSVG='<path d="M14 16L10 12L14 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Yr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967L9.46967 11.4697C9.17678 11.7626 9.17678 12.2374 9.46967 12.5303L13.4697 16.5303C13.7626 16.8232 14.2374 16.8232 14.5303 16.5303C14.8232 16.2374 14.8232 15.7626 14.5303 15.4697L11.0607 12L14.5303 8.53033C14.8232 8.23744 14.8232 7.76256 14.5303 7.46967Z" fill="currentColor"/>',Yr._name="chevron-left-small",Yr._width=24,Yr._height=24,Yr._viewBox="0 0 24 24",Yr=(0,s.Cc)([(0,C.Y$)("gds-icon-chevron-left-small")],Yr);let zr=class extends R.M{};zr._regularSVG='<path d="M10 16L14 12L10 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',zr._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967L14.5303 11.4697C14.8232 11.7626 14.8232 12.2374 14.5303 12.5303L10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303C9.17678 16.2374 9.17678 15.7626 9.46967 15.4697L12.9393 12L9.46967 8.53033C9.17678 8.23744 9.17678 7.76256 9.46967 7.46967Z" fill="currentColor"/>',zr._name="chevron-right-small",zr._width=24,zr._height=24,zr._viewBox="0 0 24 24",zr=(0,s.Cc)([(0,C.Y$)("gds-icon-chevron-right-small")],zr);var Ar=r(4671),Tr=r(2144);const Rr=d.AH`
  @layer defaults {
    a:link {
      color: currentColor;
      text-underline-offset: 0.1lh;
      font-weight: var(--gds-sys-text-weight-book);
    }

    a:visited {
      color: currentColor;
    }

    h1 {
      font: var(--gds-sys-text-heading-xl);
    }

    h2 {
      font: var(--gds-sys-text-heading-l);
    }

    h3 {
      font: var(--gds-sys-text-heading-m);
    }

    h4 {
      font: var(--gds-sys-text-heading-s);
    }

    h5 {
      font: var(--gds-sys-text-heading-xs);
    }

    h6 {
      font: var(--gds-sys-text-heading-2xs);
    }

    p,
    li {
      font: var(--gds-sys-text-body-regular-m);
    }

    strong {
      font-weight: var(--gds-sys-text-weight-medium);
    }
  }
`;var Or=d.AH`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;let Wr=class extends Ge.o{constructor(){super(...arguments),this.tag="span"}render(){const e=(0,_r.Bk)(encodeURI(this.tag));return _r.qy`<${e} tag><slot></slot></${e}>`}};Wr.styles=[V.LU,Rr,Or],(0,s.Cc)([(0,M.MZ)({type:String})],Wr.prototype,"tag",2),(0,s.Cc)([(0,Qe.F)({selector:"[tag]",styleTemplate:(e,t)=>`font: var(--gds-sys-text-${t[0]});`})],Wr.prototype,"font",2),(0,s.Cc)([(0,Qe.F)({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],Wr.prototype,"font-weight",2),(0,s.Cc)([(0,Qe.F)()],Wr.prototype,"text-transform",2),(0,s.Cc)([(0,Qe.F)({selector:"[tag]"})],Wr.prototype,"text-decoration",2),(0,s.Cc)([(0,Qe.F)({selector:"[tag]",styleTemplate:(e,t)=>`overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: ${t[0]};\n      -webkit-box-orient: vertical;`})],Wr.prototype,"lines",2),Wr=(0,s.Cc)([(0,C.Y$)("gds-text")],Wr);const Pr=d.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gds-sys-space-xl);
    --_appearance-spin-button: none;
  }

  .navigation-controls ::part(_button) {
    padding: 0;
    aspect-ratio: 1/1;
  }
`;var Fr,Dr,Kr,Ur,Jr,Qr,Xr,eo,to,ro,oo,so,no,lo,io,ao,co,Co;const ho={compact:{button:"small",font:"detail-book-s",gap:"xl",navGap:"xs",input:"small",inputWidth:"140px",inputPadding:"m"},comfortable:{button:"small",font:"detail-book-s",gap:"2xl",navGap:"s",input:"small",inputWidth:"140px",inputPadding:"m"},spacious:{button:"medium",font:"detail-book-m",gap:"2xl",navGap:"s",input:"large",inputWidth:"200px",inputPadding:"xl"}};let uo=class extends((0,f.TM)((0,f.Q8)((0,f.lt)(c.j)))){constructor(){super(...arguments),(0,s.VK)(this,Fr),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this.density="comfortable",this.label="",this._isMobile=!1}_handleMobile(e){this._isMobile=e}render(){return C.qy`
      <gds-flex
        align-items="center"
        justify-content="space-between"
        width="100%"
        gap="${(0,s.S7)(this,Fr,Kr).gap}"
      >
        ${(0,s.jq)(this,Fr,lo).call(this)}
        <gds-flex aling-items="center" gap="${(0,s.S7)(this,Fr,Kr).gap}" flex="1">
          ${[(0,s.jq)(this,Fr,oo).call(this),(0,s.jq)(this,Fr,no).call(this)]}
        </gds-flex>
      </gds-flex>
    `}};Fr=new WeakSet,Dr=function(){return Math.ceil(this.total/this.rows)},Kr=function(){return ho[this.density]},Ur=function(e){if(e<=7)return Array.from({length:e},(e,t)=>t+1);const t=e,r=[];return r.push(1),this.page<=4?r.push(2,3,4,5,"...",t):this.page>=e-3?r.push("...",e-4,e-3,e-2,e-1,t):r.push("...",this.page-1,this.page,this.page+1,"...",t),r},Jr=function(e){if("..."===e)return C.qy`
        <gds-popover
          disableMobileStyles
          @gds-ui-state=${(0,s.jq)(this,Fr,co)}
        >
          <gds-button
            size="${(0,s.S7)(this,Fr,Kr).button}"
            rank="tertiary"
            slot="trigger"
            label="${(0,g.ab)("Jump to page")}"
          >
            ...
          </gds-button>
          <gds-flex
            flex-direction="column"
            padding="${(0,s.S7)(this,Fr,Kr).inputPadding}"
            width="${(0,s.S7)(this,Fr,Kr).inputWidth}"
            max-height="280px"
          >
            <gds-input
              size="${(0,s.S7)(this,Fr,Kr).input}"
              label="${(0,g.ab)("Go to page")}"
              type="number"
              min="1"
              max="${(0,s.S7)(this,Fr,Dr)}"
              @change=${(0,s.jq)(this,Fr,Co)}
            >
              <gds-button
                size="xs"
                label="${(0,g.ab)("Go")}"
                rank="secondary"
                @click=${(0,s.jq)(this,Fr,Co)}
                slot="trail"
              >
                <gds-icon-chevron-right></gds-icon-chevron-right>
              </gds-button>
            </gds-input>
          </gds-flex>
        </gds-popover>
      `;const t=e,r=this.page===t,o=`${(0,g.ab)("Current page")}, ${(0,g.ab)("page")} ${t}`,n=`${(0,g.ab)("Go to page")} ${t}`,l=r?o:n;return C.qy`
      <gds-button
        size="${(0,s.S7)(this,Fr,Kr).button}"
        rank="${r?"primary":"tertiary"}"
        label="${l}"
        aria-current="${r?"page":"false"}"
        @click=${()=>(0,s.jq)(this,Fr,io).call(this,t)}
      >
        ${t}
      </gds-button>
    `},Qr=function(){const e=(0,s.S7)(this,Fr,Dr),t=(0,s.jq)(this,Fr,Ur).call(this,e);return C.qy`${t.map(e=>(0,s.jq)(this,Fr,Jr).call(this,e))}`},Xr=function(){return C.qy`
      <gds-button
        size="${(0,s.S7)(this,Fr,Kr).button}"
        rank="secondary"
        label="${(0,g.ab)("Go to first page")}"
        ?disabled=${1===this.page}
        @click=${()=>(0,s.jq)(this,Fr,io).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `},eo=function(){return C.qy`
      <gds-button
        size="${(0,s.S7)(this,Fr,Kr).button}"
        rank="secondary"
        label="${(0,g.ab)("Go to previous page")}"
        ?disabled=${1===this.page}
        @click=${()=>(0,s.jq)(this,Fr,io).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `},to=function(){const e=(0,s.S7)(this,Fr,Dr);return C.qy`
      <gds-button
        size="${(0,s.S7)(this,Fr,Kr).button}"
        rank="secondary"
        label="${(0,g.ab)("Go to next page")}"
        ?disabled=${this.page===e}
        @click=${()=>(0,s.jq)(this,Fr,io).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `},ro=function(){const e=(0,s.S7)(this,Fr,Dr);return C.qy`
      <gds-button
        size="${(0,s.S7)(this,Fr,Kr).button}"
        rank="secondary"
        label="${(0,g.ab)("Go to last page")}"
        ?disabled=${this.page===e}
        @click=${()=>(0,s.jq)(this,Fr,io).call(this,e)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `},oo=function(){return C.qy`
      <gds-flex
        gap="${(0,s.S7)(this,Fr,Kr).navGap}"
        align-items="center"
        class="navigation-controls"
        justify-content="center; m{flex-end}"
        flex="1"
      >
        ${[(0,B.z)(this.jump,()=>(0,s.jq)(this,Fr,Xr).call(this)),(0,s.jq)(this,Fr,eo).call(this)]}
        <gds-flex gap="4xs" align-items="center">
          ${(0,s.jq)(this,Fr,Qr).call(this)}
        </gds-flex>
        ${[(0,s.jq)(this,Fr,to).call(this),(0,B.z)(this.jump,()=>(0,s.jq)(this,Fr,ro).call(this))]}
      </gds-flex>
    `},so=function(e){const t=this.rows===e;return C.qy`
      <gds-menu-item
        data-value=${e}
        class=${(0,m.H)({selected:t})}
        size="${(0,s.S7)(this,Fr,Kr).button}"
      >
        ${e}
      </gds-menu-item>
    `},no=function(){if(this._isMobile)return null;const e=`${(0,g.ab)("Rows per page")}, ${this.rows} ${(0,g.ab)("selected")}`;return C.qy`
      <gds-flex align-items="center" gap="s">
        <gds-text
          font="${(0,s.S7)(this,Fr,Kr).font}"
          color="neutral-01"
          id="rows-per-page-label"
        >
          ${(0,g.ab)("Rows per page")}
        </gds-text>
        <gds-context-menu @gds-menu-item-click=${(0,s.jq)(this,Fr,ao)}>
          <gds-button
            slot="trigger"
            size="${(0,s.S7)(this,Fr,Kr).button}"
            rank="secondary"
            label="${e}"
            aria-labelledby="rows-per-page-label"
          >
            ${this.rows}
            <gds-icon-chevron-bottom
              slot="trail"
              size="m"
            ></gds-icon-chevron-bottom>
          </gds-button>
          ${this.options.map(e=>(0,s.jq)(this,Fr,so).call(this,e))}
        </gds-context-menu>
      </gds-flex>
    `},lo=function(){return this._isMobile||!this.label?null:C.qy`
      <gds-text
        font="${(0,s.S7)(this,Fr,Kr).font}"
        color="neutral-02"
        aria-live="polite"
        aria-atomic="true"
      >
        ${this.label}
      </gds-text>
    `},io=function(e){this.dispatchEvent(new CustomEvent("gds-page-change",{detail:{page:e},bubbles:!0}))},ao=function(e){const t=e.target,r=parseInt(t.dataset.value||"10");r!==this.rows&&this.dispatchEvent(new CustomEvent("gds-rows-change",{detail:{rows:r},bubbles:!0}))},co=function(e){if(e.detail.open){const t=e.target.querySelector("gds-input");t&&requestAnimationFrame(()=>{t.focus()})}},Co=function(e){const t=e.target.closest("gds-input");if(t){const e=parseInt(t.value,10);if(e&&e>=1&&e<=(0,s.S7)(this,Fr,Dr)){(0,s.jq)(this,Fr,io).call(this,e);const r=t.closest("gds-popover");r&&r.hide()}}},uo.styles=[V.LU,Pr],(0,s.Cc)([(0,M.MZ)({type:Number})],uo.prototype,"page",2),(0,s.Cc)([(0,M.MZ)({type:Number})],uo.prototype,"rows",2),(0,s.Cc)([(0,M.MZ)({type:Number})],uo.prototype,"total",2),(0,s.Cc)([(0,M.MZ)({type:Array})],uo.prototype,"options",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],uo.prototype,"jump",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],uo.prototype,"density",2),(0,s.Cc)([(0,M.MZ)()],uo.prototype,"label",2),(0,s.Cc)([(0,M.P)("#page-input")],uo.prototype,"_elInput",2),(0,s.Cc)([(0,M.wk)()],uo.prototype,"_isMobile",2),(0,s.Cc)([(0,Er.M)("(max-width: 768px)")],uo.prototype,"_handleMobile",1),uo=(0,s.Cc)([(0,g.cc)(),(0,C.Y$)("gds-pagination",{dependsOn:[k.t,Tr.E,Wr,mr,ot.E,ge.Hx,Br.T,qr.o,Yr,Nr,Ar.V,zr,Ir]})],uo);const po=e=>{uo.define();const t=(0,n.p)("gds-pagination"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let go=class extends c.j{constructor(){super(...arguments),this.show=!1}render(){return C.qy``}};go.styles=d.AH`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
    }

    :host([show]) {
      display: block;
    }
  `,(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],go.prototype,"show",2),go=(0,s.Cc)([(0,C.Y$)("gds-backdrop")],go);const Mo=e=>{go.define();const t=(0,n.p)("gds-backdrop"),r={...e,class:e.className};return(0,i.createElement)(t,r)},mo=e=>{Tr.E.define();const t=(0,n.p)("gds-popover"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var Vo,fo,Lo=d.AH`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:focus) {
    outline: none;
  }
`;let _o=class extends c.j{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,(0,s.VK)(this,Vo,e=>{!this.disabled&&this.value&&this.label&&(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchStandardEvent("input",{bubbles:!0}))}),(0,s.VK)(this,fo,e=>{this.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.checked=!0,this.dispatchStandardEvent("input",{bubbles:!0}))}),this.addEventListener("keydown",(0,s.S7)(this,fo)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",(0,s.S7)(this,Vo))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.setAttribute("aria-description",this.errorMessage?this.errorMessage:""),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}render(){return C.qy`
      <gds-toggle-control-base type="radio">
        <label slot="label" @click=${(0,s.S7)(this,Vo)}> ${this.label} </label>
        <span slot="supporting-text"> ${this.supportingText} </span>
        ${(0,Y.U)({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}};Vo=new WeakMap,fo=new WeakMap,_o.styles=[I.A,Lo],(0,s.Cc)([(0,M.MZ)()],_o.prototype,"label",2),(0,s.Cc)([(0,M.MZ)({attribute:"supporting-text"})],_o.prototype,"supportingText",2),(0,s.Cc)([(0,M.MZ)()],_o.prototype,"value",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],_o.prototype,"checked",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],_o.prototype,"disabled",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],_o.prototype,"invalid",2),(0,s.Cc)([(0,M.MZ)({type:String})],_o.prototype,"errorMessage",2),(0,s.Cc)([(0,M.wk)()],_o.prototype,"_isFocused",2),_o=(0,s.Cc)([(0,C.Y$)("gds-radio",{dependsOn:[N]})],_o);const Ho=e=>{_o.define();const t=(0,n.p)("gds-radio"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var vo=r(685),ko=d.AH`
  :host {
    font: var(--gds-sys-text-body-regular-m);
    --default-border: 1px solid
      color-mix(in srgb, currentColor, transparent 80%);
    letter-spacing: 0.0125rem;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: var(--gds-sys-space-2xl);
    margin-bottom: var(--gds-sys-space-xs);
  }

  :is(h1, h2, h3, h4, h5, h6):first-child {
    margin-top: unset;
  }

  h1 + h2 {
    margin-top: 0;
  }

  h2 + h3 {
    margin-top: 0;
  }

  h3 + h4 {
    margin-top: 0;
  }

  h4 + h5 {
    margin-top: 0;
  }

  h4 + h5 {
    margin-top: 0;
  }

  h5 + h6 {
    margin-top: 0;
  }

  p {
    margin: 0;
    margin-bottom: var(--gds-sys-space-m);
    max-width: 80ch;
  }

  blockquote {
    margin: unset;
    margin-block: 2lh;
    border-left: 0.2rem solid currentColor;
    padding-left: 2ch;
    max-width: 40ch;
  }

  code {
    background: var(--gds-sys-color-l3-neutral-02);
    color: var(--gds-sys-color-content-neutral-01);
    border-radius: var(--gds-sys-radius-xs);
    padding: var(--gds-sys-space-3xs);
    font: var(--gds-sys-text-body-book-s);
  }

  hr {
    border: none;
    border-top: var(--default-border);
    margin: var(--gds-sys-space-xl) 0;
  }

  s {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-underline-offset: -0.22lh;
  }

  mark {
    color: currentColor;
    background-color: color-mix(in srgb, currentColor, transparent 80%);
  }

  /*
  * lists
  * -----------------------------------------------------------
  */
  ul,
  ol {
    padding-inline-start: 2ch;
    margin: unset;
    margin-bottom: 1lh;
    max-width: 80ch;
  }

  ol {
    list-style-type: none;
    counter-reset: ordered-list;
    margin: unset;
    padding: unset;
  }

  ol li {
    padding-left: 3.6ch;
    position: relative;
  }

  ol li:before {
    counter-increment: ordered-list;
    content: counter(ordered-list) '.';
    left: 0.2rem;
    position: absolute;
  }

  ol:not(:has(li:nth-child(10))) li {
    padding-left: 2.4ch;
  }

  ol:has(li:nth-child(10)) li:nth-child(-n + 9):before {
    left: 1.4ch;
  }

  li {
    padding: 0 0 0.3lh 0;
  }

  ul li:last-child {
    padding: 0;
  }

  ul li::marker {
    content: '– ';
  }

  /*
  * figure and image
  * -----------------------------------------------------------
  */
  img {
    display: block;
    border-radius: var(--gds-sys-radius-xs);
  }

  figure {
    margin: 0;
    padding: 0;
    margin-top: var(--gds-sys-space-xl);
  }

  figcaption {
    font-size: smaller;
    margin-block-start: var(--gds-sys-space-xs);
  }

  /*
  * table
  * -----------------------------------------------------------
  */
  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border: var(--default-border);
    border-radius: var(--gds-sys-radius-s);
    margin-top: var(--gds-sys-space-xl);
  }

  th {
    font-weight: var(--gds-sys-text-weight-book);
    text-align: left;
    border-bottom: var(--default-border);
    border-left: transparent;
    border-right: transparent;
    color: currentColor;
  }

  th:not(:last-child) {
    border-right: var(--default-border);
  }

  th,
  td {
    padding: 0.3lh 2ch;
  }
  td:not(:last-child) {
    border-right: var(--default-border);
  }
  tr:nth-child(even) td {
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  /*
  * Details
  * -----------------------------------------------------------
  */
  details {
    border-top: solid var(--gds-sys-space-5xs)
      color-mix(in srgb, currentColor, transparent 90%);
    font: var(--gds-sys-text-body-regular-m);
  }

  summary {
    font-weight: var(--gds-sys-text-weight-regular);
    list-style: none;
    padding: 0.4lh 0.2ch;
    font: var(--gds-sys-text-body-regular-l);
    color: currentColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    outline-offset: var(--gds-sys-space-3xs);
    outline-color: currentColor;
    padding-inline: var(--gds-sys-space-m);
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  summary:focus-visible {
    border-radius: var(--gds-sys-radius-2xs);
  }

  details:hover summary {
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  summary::after {
    content: '+';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font: var(--gds-sys-text-body-regular-l);
  }

  details[open] summary::after {
    content: '-';
  }

  details[open] {
    border-bottom: var(--gds-sys-space-5xs) solid
      color-mix(in srgb, currentColor, transparent 95%);
    padding-bottom: 0.4lh;
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  details[open] > *:not(summary) {
    margin-left: var(--gds-sys-space-m);
  }

  details[open] summary {
    margin-bottom: 0.4lh;
  }

  details[open] + details {
    border: none;
  }

  details:last-of-type {
    border-bottom: var(--gds-sys-space-5xs) solid
      color-mix(in srgb, currentColor, transparent 90%);
    margin-bottom: var(--gds-sys-space-xl);
  }

  a,
  a:visited {
    color: currentColor;
    text-decoration-color: currentColor;
  }

  /*
  * Iframe
  */
  iframe {
    border: var(--gds-sys-space-5xs) solid var(--gds-sys-color-border-subtle-01);
    border-radius: var(--gds-sys-radius-xs);
    min-width: 100%;
    margin-bottom: var(--gds-sys-space-l);
  }
`;let wo=class extends((0,f.lt)((0,f.TM)(c.j))){constructor(){super(...arguments),this.captureMode="clone"}querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){return this.shadowRoot?.innerHTML||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){if(!this.shadowRoot||0===this.childNodes.length)return;if("move"===this.captureMode)return void this.shadowRoot.replaceChildren(...Array.from(this.childNodes));const e=Array.from(this.childNodes).map(e=>e.cloneNode(!0));this.shadowRoot.replaceChildren(...e)}};wo.styles=[V.LU,Rr,ko],(0,s.Cc)([(0,M.MZ)()],wo.prototype,"captureMode",2),(0,s.Cc)([(0,vo.L)({childList:!0,subtree:!0,attributes:!0,characterData:!0})],wo.prototype,"_captureDOM",1),wo=(0,s.Cc)([(0,C.Y$)("gds-rich-text")],wo);const bo=e=>{wo.define();const t=(0,n.p)("gds-rich-text"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var Zo=r(4457),yo=d.AH`
  @layer base {
    :host {
      display: flex;
      z-index: 1;
    }

    button {
      appearance: none;
      background: transparent;
      border-radius: var(--gds-sys-radius-max);
      border-width: 0;
      color: var(--gds-sys-color-content-neutral-02);
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 0;
      font-family: inherit;
      font-size: inherit;
      font: var(--gds-sys-text-detail-book-m);
      overflow: hidden;
      padding: 0 1rem;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      transition:
        background-color var(--gds-sys-motion-duration-fast),
        border-color var(--gds-sys-motion-duration-fast),
        color var(--gds-sys-motion-duration-fast);
      outline-width: var(--gds-sys-space-4xs);
      outline-style: solid;
      outline-offset: -2px;
      outline-color: transparent;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    :host([selected]) button {
      color: var(--gds-sys-color-content-neutral-01);
    }

    @media (pointer: fine) {
      :host(:not([selected])) button:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-05)
        );

        &:disabled {
          background-color: transparent;
        }
      }
    }

    button:focus-visible {
      outline-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-l3-content-tertiary) 100%
      );
    }
  }
`;let xo=class extends((0,f.Q8)(c.j)){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),Zo.n.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return C.qy`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};xo.styles=[...V.LU,yo],(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],xo.prototype,"selected",2),(0,s.Cc)([(0,M.MZ)()],xo.prototype,"value",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],xo.prototype,"disabled",2),xo=(0,s.Cc)([(0,C.Y$)("gds-segment")],xo);var So,$o,Go,jo,Eo,Bo,qo,No,Io,Yo,zo=d.AH`
  @layer base {
    :host {
      background-color: var(--gds-sys-color-l3-neutral-02);
      border: 0.25rem solid transparent;
      border-radius: var(--gds-sys-radius-max);
      box-sizing: border-box;
      contain: layout;
      display: inline-flex;
      height: 3rem;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    :host([size='small']) {
      height: 2.5rem;
    }

    #track {
      box-sizing: border-box;
      display: flex;
      flex-grow: 1;
      scroll-snap-type: inline mandatory;
      overscroll-behavior-x: contain;
      scroll-behavior: smooth;
      overflow-x: scroll;
      gap: 0.25rem;
      position: relative;
      scrollbar-width: none;
    }

    #track::-webkit-scrollbar {
      display: none;
    }

    #btn-prev,
    #btn-next {
      box-sizing: border-box;
      align-items: center;
      appearance: none;
      aspect-ratio: 1;
      border-radius: var(--gds-sys-radius-max);
      border-width: 0;
      background-color: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      cursor: pointer;
      display: flex;
      font-size: 1rem;
      height: 100%;
      justify-content: center;
      width: 2.5rem;
      transition: 0.2s;
      z-index: 2;
      position: absolute;

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-02),
            var(--gds-sys-color-state-neutral-03)
          );
        }
      }
    }
    #btn-prev {
      margin: 0 0.25rem 0 0;
    }
    #btn-next {
      margin: 0 0 0 0.25rem;
      right: 0;
    }

    #btn-prev[aria-hidden='true'],
    #btn-next[aria-hidden='true'] {
      opacity: 0;
      width: 0;
      margin: 0;
      padding: 0;
    }

    :host([size='small']) #btn-prev,
    :host([size='small']) #btn-next {
      width: 2rem;
    }

    ::slotted(*) {
      flex-grow: 1;
      flex-shrink: 0;
      z-index: 1;
      scroll-margin: 0 2.75rem;
      scroll-snap-align: start;
    }

    #indicator {
      background-color: var(--gds-sys-color-l3-neutral-04);
      border-radius: var(--gds-sys-radius-max);
      height: 100%;
      left: 0;
      position: absolute;
      z-index: 0;
      transition:
        transform 0.2s,
        width 0.2s;
      z-index: 0;
    }
  }
`;let Ao=class extends((0,f.lt)((0,f.Q8)((0,f.TM)(c.j)))){constructor(){super(...arguments),(0,s.VK)(this,$o),this.size="medium",(0,s.VK)(this,So),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,(0,s.VK)(this,jo,()=>{const e=this.segments.filter((e,t,r)=>r[t+1]?.isVisible&&!e.isVisible)[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),(0,s.VK)(this,Eo,()=>{const e=this.segments.filter((e,t,r)=>r[t-1]?.isVisible&&!e.isVisible).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),(0,s.VK)(this,Bo,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),(0,s.VK)(this,qo,(e=>{let t;return()=>{clearTimeout(t),t=setTimeout(e,50)}})((0,s.S7)(this,Bo))),(0,s.VK)(this,No,()=>{const e=this.segments.find(e=>e.selected);if(e){const t=e.offsetWidth,r=e.offsetLeft;this._elIndicator.style.transform=`translateX(${r}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),(0,s.VK)(this,Io,e=>{const t=this.segments.find(t=>t===e.target||t.contains(e.target));t&&(this.segments.forEach(e=>e.selected=!1),t.selected=!0,(0,s.OV)(this,So,t.value),(0,s.S7)(this,No).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),(0,s.VK)(this,Yo,()=>{(0,s.S7)(this,So)&&this.updateComplete.then(()=>{const e=this.segments.find(e=>e.value===(0,s.S7)(this,So));e&&(this.segments.forEach(e=>e.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return(0,s.S7)(this,So)}set value(e){(0,s.OV)(this,So,e),(0,s.S7)(this,Yo).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),Zo.n.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{(0,s.S7)(this,qo).call(this)})})}render(){return C.qy`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${(0,s.S7)(this,jo)}
        aria-label=${(0,g.ab)("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${(0,s.S7)(this,Io)}
          @slotchange=${(0,s.jq)(this,$o,Go)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${(0,s.S7)(this,Eo)}
        aria-label=${(0,g.ab)("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{(0,s.S7)(this,qo).call(this),(0,s.S7)(this,No).call(this)})}};So=new WeakMap,$o=new WeakSet,Go=function(){const e=this.segments.find(e=>e.selected)?.value;e&&(0,s.OV)(this,So,e),this.intersectionObserver?.disconnect(),this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{e.target._isVisible=e.intersectionRatio>.99,(0,s.S7)(this,qo).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(e=>{this.intersectionObserver?.observe(e)})},jo=new WeakMap,Eo=new WeakMap,Bo=new WeakMap,qo=new WeakMap,No=new WeakMap,Io=new WeakMap,Yo=new WeakMap,Ao.styles=[V.LU,zo],(0,s.Cc)([(0,M.MZ)({reflect:!0})],Ao.prototype,"size",2),(0,s.Cc)([(0,M.MZ)()],Ao.prototype,"value",1),(0,s.Cc)([(0,M.P)("slot")],Ao.prototype,"_elSlot",2),(0,s.Cc)([(0,M.P)("#indicator")],Ao.prototype,"_elIndicator",2),(0,s.Cc)([(0,M.P)("#track")],Ao.prototype,"_elTrack",2),(0,s.Cc)([(0,M.wk)()],Ao.prototype,"_showPrevButton",2),(0,s.Cc)([(0,M.wk)()],Ao.prototype,"_showNextButton",2),(0,s.Cc)([(0,Qt.b)(),(0,z.w)("value")],Ao.prototype,"_recalculateMinWidth",1),Ao=(0,s.Cc)([(0,C.Y$)("gds-segmented-control",{dependsOn:[xo,L.g,Ar.V]}),(0,g.cc)()],Ao);const To=e=>{Ao.define();const t=(0,n.p)("gds-segmented-control"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var Ro,Oo,Wo,Po,Fo,Do,Ko,Uo,Jo,Qo,Xo=d.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    .select-container {
      display: contents;
    }

    select {
      flex: 1;
      height: 100%;
      opacity: 0;
      position: absolute;
      z-index: 1;
      inset: 0;

      &::-ms-expand {
        display: none;
      }
    }

    select[multiple] {
      opacity: 1;
      position: relative;
      width: 100%;
    }

    label {
      flex: 1;
    }
  }
`;let es=class extends A.S{constructor(){super(...arguments),(0,s.VK)(this,Oo),this.supportingText="",this.showExtendedSupportingText=!1,this.size="large",this.plain=!1,(0,s.VK)(this,Ro,!1),(0,s.VK)(this,Po,e=>{e.stopPropagation(),(0,s.jq)(this,Oo,Fo).call(this),requestAnimationFrame(()=>{this.dispatchCustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}),this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})})})}get value(){return this._internalValue}set value(e){(0,s.S7)(this,Ro)||(0,s.OV)(this,Ro,!0),this._internalValue=e}get displayValue(){return this.selectElement?Array.from(this.selectElement.selectedOptions).map(e=>e.text).join(", "):""}get multiple(){return this.selectElement?.multiple??!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._captureDOM(),this._handleValueChange()})}focus(e){this._getValidityAnchor()?.focus(e)}render(){const e={multiple:this.multiple};return this.selectElement&&(this.selectElement.disabled=this.disabled),C.qy`
      ${(0,B.z)(!this.plain,()=>C.qy`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText=${this.showExtendedSupportingText}
          >
            <label for="select" slot="label" id="label-text">
              ${this.label}
            </label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`)}

      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        .multiline=${this.multiple}
        align-items=${this.multiple?"flex-start":"center"}
        class=${(0,m.H)(e)}
      >
        ${(0,s.jq)(this,Oo,Do).call(this)}
      </gds-field-base>

      ${(0,B.z)((0,s.jq)(this,Oo,Wo).call(this),()=>C.qy`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_captureDOM(){if(!this.shadowRoot||0===this.childNodes.length||!this._elSelectContainer)return;const e=Array.from(this.children).filter(e=>"SELECT"===e.nodeName).map(e=>{const t=e.cloneNode(!0);return t.addEventListener("change",(0,s.S7)(this,Po)),t.addEventListener("input",(0,s.S7)(this,Po)),t.setAttribute("aria-describedby","supporting-text extended-supporting-text sub-label message"),t.ariaLabel=this.label,t.setAttribute("id","select"),t.disabled=this.disabled,t.className="native-control",(0,s.S7)(this,Ro)?t.value=this.value:this._internalValue=t.value,t});this._elSelectContainer.replaceChildren(...e)}formResetCallback(){if(this.selectElement)if(this.selectElement.multiple)Array.from(this.selectElement.options).forEach(e=>{e.selected=!1}),this.value=[];else{const e=this.selectElement.options[0];e&&(this.value=e.value,this.selectElement.value=e.value)}}_getValidityAnchor(){return this.selectElement}_handleValueChange(){if(this.selectElement){if(this.multiple){const e=this.value||[];Array.from(this.selectElement.options).forEach(t=>{t.selected=e.includes(t.value)})}else this.selectElement.value=this.value;this.requestUpdate()}}};Ro=new WeakMap,Oo=new WeakSet,Wo=function(){return!this.plain&&this.invalid},Po=new WeakMap,Fo=function(){if(this.selectElement)if(this.multiple){const e=Array.from(this.selectElement.selectedOptions);this.value=e.map(e=>e.value)}else this.value=this.selectElement.value},Do=function(){return[(0,s.jq)(this,Oo,Ko).call(this),(0,s.jq)(this,Oo,Jo).call(this),(0,s.jq)(this,Oo,Uo).call(this),(0,s.jq)(this,Oo,Qo).call(this)].map(e=>C.qy`${e}`)},Ko=function(){return C.qy`<slot name="lead" slot="lead"></slot>`},Uo=function(){if(!this.multiple)return C.qy`<label id="placeholder" class="native-control"
        >${this.displayValue}</label
      >`},Jo=function(){return C.qy`<div class="select-container"></div>`},Qo=function(){if(!this.multiple)return C.qy`
        <gds-icon-chevron-bottom slot="action"></gds-icon-chevron-bottom>
      `},es.styles=[V.LU,Ut.A,Xo],(0,s.Cc)([(0,M.MZ)({attribute:"supporting-text"})],es.prototype,"supportingText",2),(0,s.Cc)([(0,M.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],es.prototype,"showExtendedSupportingText",2),(0,s.Cc)([(0,M.MZ)({type:String})],es.prototype,"size",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],es.prototype,"plain",2),(0,s.Cc)([(0,M.P)("select")],es.prototype,"selectElement",2),(0,s.Cc)([(0,M.MZ)()],es.prototype,"value",1),(0,s.Cc)([(0,M.P)(".select-container")],es.prototype,"_elSelectContainer",2),(0,s.Cc)([(0,vo.L)({childList:!0,subtree:!0,attributes:!0,characterData:!0})],es.prototype,"_captureDOM",1),(0,s.Cc)([(0,z.w)("value")],es.prototype,"_handleValueChange",1),es=(0,s.Cc)([(0,g.cc)()],es);let ts=class extends((0,f.lt)((0,f.Q8)((0,f.TM)(es)))){};ts=(0,s.Cc)([(0,C.Y$)("gds-select",{dependsOn:[Kt.$,Dt.V,Ft.w,qr.o]})],ts);const rs=e=>{ts.define();const t=(0,n.p)("gds-select"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var os=d.AH`
  :host {
    display: inline-block;
  }

  [part='signal'] {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 6px;
    height: 6px;
    border-radius: var(--gds-sys-radius-max);
    background-color: currentColor;
    transition: all 0.4s;

    &::before {
      display: flex;
      position: absolute;
      content: '';
      inset: -4px;
      border-radius: inherit;
      background-color: color-mix(in srgb, currentColor, transparent 80%);
      animation: signal 3s ease-in-out infinite;
    }
  }

  @keyframes signal {
    0% {
      transform: scale(2);
      opacity: 0;
    }
    60% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
`;let ss=class extends c.j{render(){return _r.qy`<div part="signal"></div>`}};ss.styles=[V.LU,os],(0,s.Cc)([(0,Qe.F)({...(0,Xe.T$)("content"),selector:'[part="signal"]'})],ss.prototype,"color",2),ss=(0,s.Cc)([(0,C.Y$)("gds-signal")],ss);const ns=e=>{ss.define();const t=(0,n.p)("gds-signal"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var ls,is,as,cs=d.AH`
  /* Host configuration with core variables */
  :host {
    /* Size variables with indexed access using CSS custom properties */
    --spinner-sizes: 2rem 3.75rem 6rem;
    --spinner-size-sm: 2rem;
    --spinner-size-md: 3.75rem;
    --spinner-size-lg: 6rem;

    --track-widths: 0.1rem 0.2rem 0.3rem;
    --track-width-sm: 0.275rem;
    --track-width-md: 0.375rem;
    --track-width-lg: 0.375rem;

    /* Default to light mode as fallback */
    --spinner-track-color: var(--gds-sys-color-l3-neutral-02);
    --spinner-active-color: var(--gds-sys-color-content-neutral-02);
    --spinner-label-color: currentColor;
    --spinner-backdrop-color: rgba(100, 100, 100, 0.4);

    --spinner-backdrop-blur: 2px;

    /* Base sizing, will be overridden by size-specific variables */
    --size: var(--spinner-size-md);
    --track-width: var(--track-width-md);

    /* Use CSS variable for color-scheme to avoid minification issues */
    --spinner-color-scheme: light dark;
    color-scheme: var(--spinner-color-scheme);

    display: block;
  }

  /* Size-specific host settings */
  :host([size='sm']) {
    --size: var(--spinner-size-sm);
    --track-width: var(--track-width-sm);
  }

  :host([size='md']),
  :host([size='default']) {
    --size: var(--spinner-size-md);
    --track-width: var(--track-width-md);
  }

  :host([size='lg']) {
    --size: var(--spinner-size-lg);
    --track-width: var(--track-width-lg);
  }

  /* Fullscreen positioning */
  :host([fullscreen]) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
  }

  /* Focus styles */
  :host(:focus-visible) {
    outline: 2px solid var(--spinner-active-color);
    outline-offset: 2px;
  }

  /* Spinner component */
  .spinner {
    border-radius: 50%;
    border: var(--track-width, 0.375rem) solid var(--spinner-track-color);
    border-top-color: var(--spinner-active-color);
    height: var(--size, 3.75rem);
    width: var(--size, 3.75rem);
    animation: gdsSpinnerRotation 1s linear infinite;
    aspect-ratio: 1 / 1;
  }

  /* Motion preference adjustments */
  @media (prefers-reduced-motion: reduce) {
    .spinner {
      /* Slower rotation for reduced motion preference */
      animation-duration: 2s;
      /* Smaller rotation to reduce visual intensity */
      animation-name: gdsSpinnerReducedRotation;
    }

    @keyframes gdsSpinnerReducedRotation {
      to {
        transform: rotate(180deg);
      }
    }
  }

  /* Layout components */
  .spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .spinner-wrapper.spinner-cover {
    position: absolute;
    inset: 0;
    z-index: 999;
  }

  .spinner-wrapper.spinner-fullscreen {
    position: fixed;
    inset: 0;
    z-index: 9999;
  }

  .spinner-wrapper.spinner-backdrop {
    background-color: var(--spinner-backdrop-color);
    backdrop-filter: blur(var(--spinner-backdrop-blur));
  }

  .spinner-wrapper.spinner-label-top {
    flex-direction: column-reverse;

    & .spinner-label {
      margin: 0 0 1rem;
    }
  }

  .spinner-wrapper.spinner-label-left {
    flex-direction: row-reverse;
    & .spinner-label {
      margin: 0 1rem 0 0;
    }
  }

  .spinner-wrapper.spinner-label-right {
    flex-direction: row;
    & .spinner-label {
      margin: 0 0 0 1rem;
    }
  }

  /* Label styling */
  .spinner-label {
    margin-top: 1rem;
    color: var(--spinner-label-color);
    text-align: center;
  }

  /* Animation keyframes */
  @keyframes gdsSpinnerRotation {
    to {
      transform: rotate(360deg);
    }
  }
`;let Cs=class extends((0,f.TM)((0,f.qC)((0,f.lt)(c.j)))){constructor(){super(...arguments),(0,s.VK)(this,ls),this.label=(0,g.ab)("Loading..."),this.labelPosition="bottom",this.showLabel=!1,this.cover=!1,this.fullscreen=!1,this.size="md",this._isAnimating=!1,(0,s.VK)(this,as,{overflow:"visible",overscrollBehavior:"auto"})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status"),this.setAttribute("aria-live","polite"),this._isAnimating=!0,this.dispatchCustomEvent("gds-spinner-connected")}disconnectedCallback(){super.disconnectedCallback(),this.fullscreen&&(this.fullscreen=!1,this._toggleRootStyles()),this._isAnimating=!1,super.disconnectedCallback()}_updateAriaLabel(){this.setAttribute("aria-label",this.label)}render(){return C.qy`
      <div part="wrapper" class=${(0,m.H)((0,s.jq)(this,ls,is).call(this))}>
        <span part="spinner" class="spinner"></span>
        ${(0,B.z)(this.showLabel,()=>C.qy`<span part="label" class="spinner-label">${this.label}</span>`)}
      </div>
    `}_toggleRootStyles(){const{style:e}=document.documentElement;this.fullscreen?((0,s.OV)(this,as,{overflow:e.overflow,overscrollBehavior:e.overscrollBehavior}),e.overflow="hidden",e.overscrollBehavior="none"):(e.overflow=(0,s.S7)(this,as).overflow,e.overscrollBehavior=(0,s.S7)(this,as).overscrollBehavior)}};ls=new WeakSet,is=function(){return{"spinner-wrapper":!0,"spinner-fullscreen":this.fullscreen,"spinner-cover":this.cover,"spinner-backdrop":this.cover||this.fullscreen,"spinner-animating":this._isAnimating,[`spinner-label-${this.labelPosition}`]:this.labelPosition}},as=new WeakMap,Cs.styles=[V.LU,cs],(0,s.Cc)([(0,M.MZ)({type:String})],Cs.prototype,"label",2),(0,s.Cc)([(0,M.MZ)({type:String,reflect:!0,attribute:"label-position"})],Cs.prototype,"labelPosition",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],Cs.prototype,"showLabel",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],Cs.prototype,"cover",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],Cs.prototype,"fullscreen",2),(0,s.Cc)([(0,M.MZ)({type:String,reflect:!0})],Cs.prototype,"size",2),(0,s.Cc)([(0,M.wk)()],Cs.prototype,"_isAnimating",2),(0,s.Cc)([(0,z.w)("label")],Cs.prototype,"_updateAriaLabel",1),(0,s.Cc)([(0,z.w)("fullscreen")],Cs.prototype,"_toggleRootStyles",1),Cs=(0,s.Cc)([(0,C.Y$)("gds-spinner"),(0,g.cc)()],Cs);const ds=e=>{Cs.define();const t=(0,n.p)("gds-spinner"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var hs=r(8696);let us=class extends R.M{};us._regularSVG='<path d="M7.75 7.75V3.75H20.25V16.26H16.25M16.25 7.75V20.25H3.75V7.75H16.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',us._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7 3.75C7 3.33579 7.33579 3 7.75 3H20.25C20.6642 3 21 3.33579 21 3.75V16.26C21 16.6742 20.6642 17.01 20.25 17.01H17V20.25C17 20.6642 16.6642 21 16.25 21H3.75C3.33579 21 3 20.6642 3 20.25V7.75C3 7.33579 3.33579 7 3.75 7H7V3.75ZM17 15.51V7.75C17 7.33579 16.6642 7 16.25 7H8.5V4.5H19.5V15.51H17Z" fill="currentColor"/>',us._name="copy",us._width=24,us._height=24,us._viewBox="0 0 24 24",us=(0,s.Cc)([(0,C.Y$)("gds-icon-copy")],us);var ps=r(8157);let gs=class extends R.M{};gs._regularSVG='<path d="M20 20L16.1265 16.1265M16.1265 16.1265C17.4385 14.8145 18.25 13.002 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C13.002 18.25 14.8145 17.4385 16.1265 16.1265Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',gs._solidSVG='<path d="M11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.5C7.41015 4.5 4.5 7.41015 4.5 11C4.5 14.5899 7.41015 17.5 11 17.5C12.7951 17.5 14.4191 16.7733 15.5962 15.5962C16.7733 14.4191 17.5 12.7951 17.5 11C17.5 7.41015 14.5899 4.5 11 4.5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.9388 18.3096 14.7174 17.1624 16.1017L20.7803 19.7197C21.0732 20.0126 21.0732 20.4874 20.7803 20.7803C20.4874 21.0732 20.0126 21.0732 19.7197 20.7803L16.1017 17.1624C14.7174 18.3096 12.9388 19 11 19C6.58172 19 3 15.4183 3 11Z" fill="currentColor"/>',gs._name="magnifying-glass",gs._width=24,gs._height=24,gs._viewBox="0 0 24 24",gs=(0,s.Cc)([(0,C.Y$)("gds-icon-magnifying-glass")],gs);let Ms=class extends R.M{};Ms._regularSVG='<path d="M3.75 5.75H18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 12H11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 18.25H9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 10.75V18.5M14.75 15.75L18 19L21.25 15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ms._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.75C3 5.33579 3.33579 5 3.75 5H18.25C18.6642 5 19 5.33579 19 5.75C19 6.16421 18.6642 6.5 18.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25C11.6642 11.25 12 11.5858 12 12C12 12.4142 11.6642 12.75 11.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 18.25C3 17.8358 3.33579 17.5 3.75 17.5H9.25C9.66421 17.5 10 17.8358 10 18.25C10 18.6642 9.66421 19 9.25 19H3.75C3.33579 19 3 18.6642 3 18.25Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18.4142 10 18.75 10.3358 18.75 10.75V17.1893L20.7197 15.2197C21.0126 14.9268 21.4874 14.9268 21.7803 15.2197C22.0732 15.5126 22.0732 15.9874 21.7803 16.2803L18.5303 19.5303C18.2374 19.8232 17.7626 19.8232 17.4697 19.5303L14.2197 16.2803C13.9268 15.9874 13.9268 15.5126 14.2197 15.2197C14.5126 14.9268 14.9874 14.9268 15.2803 15.2197L17.25 17.1893V10.75C17.25 10.3358 17.5858 10 18 10Z" fill="currentColor"/>',Ms._name="sort-down",Ms._width=24,Ms._height=24,Ms._viewBox="0 0 24 24",Ms=(0,s.Cc)([(0,C.Y$)("gds-icon-sort-down")],Ms);let ms=class extends R.M{};ms._regularSVG='<path d="M3.75 18.25H18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 12H11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 5.75H9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 13.25V5.25M14.75 8L18 4.75L21.25 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ms._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 18.25C3 17.8358 3.33579 17.5 3.75 17.5H18.25C18.6642 17.5 19 17.8358 19 18.25C19 18.6642 18.6642 19 18.25 19H3.75C3.33579 19 3 18.6642 3 18.25Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25C11.6642 11.25 12 11.5858 12 12C12 12.4142 11.6642 12.75 11.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.75C3 5.33579 3.33579 5 3.75 5H9.25C9.66421 5 10 5.33579 10 5.75C10 6.16421 9.66421 6.5 9.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 14C18.4142 14 18.75 13.6642 18.75 13.25V6.56066L20.7197 8.53033C21.0126 8.82322 21.4874 8.82322 21.7803 8.53033C22.0732 8.23744 22.0732 7.76256 21.7803 7.46967L18.5303 4.21967C18.2374 3.92678 17.7626 3.92678 17.4697 4.21967L14.2197 7.46967C13.9268 7.76256 13.9268 8.23744 14.2197 8.53033C14.5126 8.82322 14.9874 8.82322 15.2803 8.53033L17.25 6.56066V13.25C17.25 13.6642 17.5858 14 18 14Z" fill="currentColor"/>',ms._name="sort-up",ms._width=24,ms._height=24,ms._viewBox="0 0 24 24",ms=(0,s.Cc)([(0,C.Y$)("gds-icon-sort-up")],ms);let Vs=class extends R.M{};Vs._regularSVG='<path d="M2.75 4.75H21.25M8.75 19.25H15.25M5.75 12H18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',Vs._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H21.25C21.6642 4 22 4.33579 22 4.75C22 5.16421 21.6642 5.5 21.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM5 12C5 11.5858 5.33579 11.25 5.75 11.25H18.25C18.6642 11.25 19 11.5858 19 12C19 12.4142 18.6642 12.75 18.25 12.75H5.75C5.33579 12.75 5 12.4142 5 12ZM8 19.25C8 18.8358 8.33579 18.5 8.75 18.5H15.25C15.6642 18.5 16 18.8358 16 19.25C16 19.6642 15.6642 20 15.25 20H8.75C8.33579 20 8 19.6642 8 19.25Z" fill="currentColor"/>',Vs._name="sort",Vs._width=24,Vs._height=24,Vs._viewBox="0 0 24 24",Vs=(0,s.Cc)([(0,C.Y$)("gds-icon-sort")],Vs);const fs=d.AH`
  /* Host & Container */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-book-s);
    color: var(--gds-sys-color-content-neutral-01);
    text-align: left;
    --_table-height: 80vh;
    --_table-border-width: var(--gds-sys-space-5xs);
    --_table-border-color: var(--gds-sys-color-border-subtle-01);
  }

  /* Density Modes */
  /* Compact density */
  .table.compact {
    --table-cell-padding-y: var(--gds-sys-space-xs);
    --table-cell-padding-x: var(--gds-sys-space-s);
    --table-header-padding-y: var(--gds-sys-space-xs);
    --table-header-padding-x: var(--gds-sys-space-s);
    --table-row-min-height: var(--gds-sys-space-xl);
    --table-font-size: var(--gds-sys-text-detail-book-xs);
    --table-gap: var(--gds-sys-space-m);
    --table-border-spacing: 0 var(--gds-sys-space-5xs);
    --table-data-padding: var(--gds-sys-space-5xs) var(--gds-sys-space-4xs);
  }

  /* Comfortable default */
  .table.comfortable {
    --table-cell-padding-y: var(--gds-sys-space-s);
    --table-cell-padding-x: var(--gds-sys-space-m);
    --table-header-padding-y: var(--gds-sys-space-s);
    --table-header-padding-x: var(--gds-sys-space-m);
    --table-row-min-height: var(--gds-sys-space-4xl);
    --table-font-size: var(--gds-sys-text-detail-book-s);
    --table-gap: var(--gds-sys-space-xl);
    --table-border-spacing: 0 var(--gds-sys-space-4xs);
    --table-data-padding: var(--gds-sys-space-3xs) var(--gds-sys-space-2xs);
  }

  /* Spacious density */
  .table.spacious {
    --table-cell-padding-y: var(--gds-sys-space-l);
    --table-cell-padding-x: var(--gds-sys-space-l);
    --table-header-padding-y: var(--gds-sys-space-l);
    --table-header-padding-x: var(--gds-sys-space-l);
    --table-row-min-height: var(--gds-sys-space-5xl);
    --table-font-size: var(--gds-sys-text-detail-book-m);
    --table-gap: var(--gds-sys-space-2xl);
    --table-border-spacing: 0 var(--gds-sys-space-3xs);
    --table-data-padding: var(--gds-sys-space-3xs) var(--gds-sys-space-xs);
  }

  /* Secondary and Tertiary */
  .data.variant-secondary,
  .data.variant-tertiary {
    --_table-header-bg: var(--gds-sys-color-l2-neutral-01);
    --_table-header-hover: var(--gds-sys-color-l3-neutral-02);
    --_table-header-active: var(--gds-sys-color-l3-neutral-03);
    --_table-row-hover: var(--gds-sys-color-l2-neutral-01);
    --_table-row-selected-hover: var(--gds-sys-color-l3-neutral-03);
    --_table-row-striped: var(--gds-sys-color-l2-neutral-01);
  }

  /* Primary variant */
  .data.variant-primary {
    --_table-header-bg: var(--gds-sys-color-l2-neutral-02);
    --_table-header-hover: var(--gds-sys-color-l3-neutral-02);
    --_table-header-active: var(--gds-sys-color-l3-neutral-03);
    --_table-row-hover: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-01)
    );
    --_table-row-selected-hover: var(--gds-sys-color-l3-neutral-03);
    --_table-row-striped: var(--gds-sys-color-l2-neutral-01);
  }

  /* Apply density variables */
  .table {
    display: flex;
    flex-direction: column;
    gap: var(--table-gap);
    font: var(--table-font-size);
    width: 100%;
  }

  /* Container that enables horizontal scroll */

  .data {
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    max-height: var(--_table-height);
    box-sizing: border-box;
    padding: var(--table-data-padding);
    position: relative;
    border-radius: var(--gds-sys-radius-m);
    outline-color: transparent;
    outline-offset: var(--gds-sys-space-4xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-4xs);

    &:focus {
      outline-color: var(--gds-sys-color-content-neutral-01);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }
  }

  table {
    width: max-content;
    min-width: 100%;
    table-layout: auto;
    border: none;
    border-collapse: separate;
    border-spacing: var(--table-border-spacing);
  }

  tbody td {
    font-weight: normal;
    padding-block: var(--table-cell-padding-y);
    padding-inline: var(--table-cell-padding-x);
  }

  thead tr th:first-child,
  tbody tr:hover td:first-child,
  tbody tr.selected td:first-child,
  .striped tbody tr td:first-child {
    border-top-left-radius: var(--gds-sys-radius-s);
    border-bottom-left-radius: var(--gds-sys-radius-s);
  }

  thead tr th:last-child,
  tbody tr:hover td:last-child,
  tbody tr.selected td:last-child,
  .striped tbody tr td:last-child {
    border-top-right-radius: var(--gds-sys-radius-s);
    border-bottom-right-radius: var(--gds-sys-radius-s);
  }

  /* Table Header */

  thead tr th {
    padding-block: var(--gds-sys-space-3xs);
    /*  background: var(--gds-sys-color-l2-neutral-01); */
    background: var(--_table-header-bg);
  }

  thead th.sortable {
    cursor: pointer;
    user-select: none;
  }

  /* Column header content layout */
  .column-header {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    min-height: var(--gds-sys-space-l);
    gap: var(--table-gap);
    padding: calc(var(--table-cell-padding-y) / 2) var(--table-cell-padding-x);
    border-radius: var(--gds-sys-radius-xs);
    transition: all var(--gds-sys-motion-duration-fast);
  }

  th.sortable .column-header:hover {
    background-color: var(--_table-header-hover);
  }

  th.sortable:active .column-header {
    background-color: var(--_table-header-active);
  }

  .column-label {
    font-weight: var(--gds-sys-text-weight-book);
  }

  .sort-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition-property: opacity;
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-timing-function: var(--gds-sys-motion-easing-ease);
    opacity: 0;
  }

  @media (hover: hover) and (min-width: 768px) {
    thead th.sortable:hover:not(.sorted) .sort-icon {
      opacity: 0.8;
    }
  }

  thead th.sorted .sort-icon {
    opacity: 1;
  }

  /* Table Body */

  tbody tr td {
    border-top-style: solid;
    border-top-width: var(--_table-border-width);
    border-top-color: var(--_table-border-color);
  }

  tbody tr.loading {
    opacity: 0.3;
    pointer-events: none;
  }

  tbody tr.loading:not(:first-child) td {
    border-color: var(--gds-sys-color-border-subtle-02);
  }

  /* Row Selection */

  .checkbox-cell {
    min-width: var(--gds-sys-space-l);
    width: var(--gds-sys-space-l);
    max-width: var(--gds-sys-space-l);
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  tbody tr:hover td,
  tbody tr.selected td,
  tbody tr:first-child td {
    border-color: transparent;
  }

  tbody tr:hover + tr td,
  tbody tr.selected + tr td {
    border-color: transparent;
  }

  tbody tr.selected:last-child td {
    border-bottom-color: transparent;
  }

  tbody tr.selected {
    background-color: var(--gds-sys-color-l3-neutral-02);
  }

  @media (hover: hover) and (min-width: 768px) {
    tbody tr.selected:hover {
      /*     background-color: var(--gds-sys-color-l3-neutral-03); */
      background-color: var(--_table-row-selected-hover);
    }

    tbody tr:hover:not(.selected) {
      /*       background-color: var(--gds-sys-color-l2-neutral-01); */
      background-color: var(--_table-row-hover);
    }
  }

  tbody tr:hover,
  tbody tr:hover + tr {
    border-color: transparent;
  }

  /* Striped */
  .striped tbody tr:not(.selected, :hover):nth-child(even) td {
    /*  background-color: var(--gds-sys-color-l2-neutral-01); */
    background-color: var(--_table-row-striped);
  }

  .striped tbody tr td {
    border-color: transparent;
  }

  /* Header & Footer Layout */
  .header {
    display: flex;
    justify-content: space-between;
    transition-property: opacity, translate;
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-timing-function: var(--gds-sys-motion-easing-ease);

    @starting-style {
      opacity: 0;
      translate: 0 -2px;
    }
  }

  /* Shared layout for header and footer sections */
  .header .lead,
  .header .trail {
    display: flex;
    align-items: center;
    gap: calc(var(--table-gap) * 0.8);
    width: max-content;
  }

  /* Cell Content & Alignment */

  .cell-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* Wrapping utilities */
  td.wrap .cell-content {
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  td.wrap {
    max-width: var(--cell-width);
  }

  /* Justify utilities */

  .justify-start .cell-content {
    text-align: left;
    justify-content: start;
  }

  .justify-center .cell-content {
    text-align: center;
    justify-content: center;
  }

  .justify-space-between .cell-content {
    text-align: left;
    justify-content: space-between;
  }

  .justify-end .cell-content {
    text-align: right;
    justify-content: flex-end;
  }

  .sortable.justify-end .column-header {
    flex-direction: row-reverse;
  }

  th.actions {
    padding-inline: 0;
  }

  th.actions.justify-end .column-header {
    justify-content: flex-end;
  }

  /* Align utilities */
  td {
    height: 100%;
  }

  .align-start {
    vertical-align: top;
  }

  .align-end {
    vertical-align: bottom;
  }

  .align-center {
    vertical-align: middle;
  }

  .align-start .cell-content {
    align-items: start;
  }

  .align-center .cell-content {
    align-items: center;
  }

  .align-stretch .cell-content {
    align-items: stretch;
  }

  .align-end .cell-content {
    align-items: end;
  }

  /* Responsive Design */

  @media (max-width: 760px) {
    .responsive.data {
      display: contents;
    }

    .responsive thead {
      position: sticky;
      top: var(--gds-sys-space-s);
      z-index: 2;
      border-radius: var(--gds-sys-radius-s);
    }

    .responsive thead {
      display: none;
    }

    .responsive tbody {
      display: flex;
      flex-direction: column;
      gap: var(--table-gap);
    }

    .responsive tbody tr {
      display: flex;
      flex-direction: column;
      padding: var(--table-cell-padding-x);
      border: var(--gds-sys-space-5xs) solid
        var(--gds-sys-color-border-subtle-01);
      border-radius: var(--gds-sys-space-s);
      margin: 0;
    }

    .responsive tbody tr:hover,
    .responsive tbody tr:hover + tr {
      border-color: var(--gds-sys-color-border-subtle-01);
    }

    .responsive tr.selected {
      border-color: transparent;
    }

    .responsive td {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: var(--gds-sys-space-xs) 0;
      border: none;
    }

    .responsive td .column-label {
      text-align: left;
      margin-right: auto;
    }

    .responsive td .cell-content {
      flex: 1;
    }

    .responsive tr:hover,
    .responsive tr td:hover {
      background: none;
    }
  }

  /* Medium screens: input and dropdown side by side */
  /* Medium screens: side by side layout */
  @media (max-width: 760px) and (min-width: 480px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'input dropdown'
        'lead trail';
      gap: calc(var(--table-gap) / 2);
    }

    .header .lead [gds-element='gds-input'] {
      grid-area: input;
    }

    .header .trail [gds-element='gds-dropdown'] {
      grid-area: dropdown;
    }

    .header .lead ::slotted(*:not([gds-element='gds-input'])) {
      grid-area: lead;
    }

    .header .trail ::slotted(*:not([gds-element='gds-dropdown'])) {
      grid-area: trail;
    }

    .header .lead,
    .header .trail {
      display: contents;
    }
  }

  /* Small screens: fully stacked */
  @media (max-width: 479px) {
    .header {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        'input'
        'dropdown'
        'lead'
        'trail';
      gap: calc(var(--table-gap) / 2);
    }

    .header .lead [gds-element='gds-input'] {
      grid-area: input;
    }

    .header .trail [gds-element='gds-dropdown'] {
      grid-area: dropdown;
    }

    .header .lead ::slotted(*:not([gds-element='gds-input'])) {
      grid-area: lead;
    }

    .header .trail ::slotted(*:not([gds-element='gds-dropdown'])) {
      grid-area: trail;
    }

    .header .lead,
    .header .trail {
      display: contents;
    }
  }

  /* Skeleton Loading State */
  .skeleton {
    display: inline-block;
    background: linear-gradient(
      90deg,
      var(--gds-sys-color-l3-neutral-01) 25%,
      var(--gds-sys-color-l2-neutral-01) 50%,
      var(--gds-sys-color-l3-neutral-01) 75%
    );
    background-size: 200% 100%;
    animation: skeleton-shimmer 1.5s ease-in-out infinite;
    border-radius: var(--gds-sys-space-max);
    opacity: 0.1;
  }

  @keyframes skeleton-shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  /* Skeleton elements */
  .skeleton-text {
    height: 14px;
    width: 80%;
    min-width: 60px;
  }

  .skeleton-checkbox {
    height: 18px;
    width: 18px;
    border-radius: var(--gds-sys-radius-3xs);
  }

  .skeleton-action {
    height: 24px;
    width: 24px;
    border-radius: var(--gds-sys-radius-max);
  }

  /* Skeleton row styling */
  .skeleton-row {
    opacity: 1;
    pointer-events: none;
  }

  .skeleton-row td {
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  /* Different skeleton text widths for more natural look */
  .skeleton-row:nth-child(odd) .skeleton-text {
    width: 70%;
  }

  .skeleton-row:nth-child(3n) .skeleton-text {
    width: 90%;
  }

  .skeleton-row:nth-child(4n) .skeleton-text {
    width: 60%;
  }

  /* Visually hidden */
  .visually-hidden {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  /* Scroll driven animation */
  @supports (animation-timeline: scroll()) {
    @media (prefers-reduced-motion: no-preference) {
      tbody tr {
        animation-name: ROW_ANIMATION_VERTICAL, ROW_ANIMATION_VERTICAL;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
        animation-direction: normal, reverse;
        animation-timeline: view(block);
        animation-range:
          entry -40px,
          exit -40px;
      }

      @keyframes ROW_ANIMATION_VERTICAL {
        0% {
          opacity: 0;
          filter: blur(12px);
          translate: 0 12px;
        }
      }

      /* tbody td .cell-content,
    thead th .column-header { 
      animation-name: CELL_ANIMATION_HORIZONTAL, CELL_ANIMATION_HORIZONTAL;
      animation-fill-mode: both;
      animation-timing-function: ease-in-out;
      animation-direction: normal, reverse;
      animation-timeline: view(inline);
      animation-range: entry, exit;
    }

    @keyframes CELL_ANIMATION_HORIZONTAL {
      0% {
        opacity: 0.8;
        filter: blur(12px);
        translate: 4px 0px;
      }
    } */

      thead {
        position: sticky;
        top: 4px;
        z-index: 10;
        transition: box-shadow 200ms ease;
        border-radius: var(--gds-sys-radius-s);
        will-change: transform;
      }

      thead {
        background-color: var(--gds-sys-color-l1-neutral-01);
      }

      .data.scrolled thead {
        box-shadow:
          var(--gds-sys-shadow-l-01),
          var(--gds-sys-shadow-l-02),
          inset 0 -4px 6px var(--gds-sys-color-l1-neutral-01);
        backdrop-filter: blur(8px);
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l2-neutral-01),
          transparent 30%
        );
      }

      @media (prefers-reduced-transparency: no-preference) {
        .data.scrolled thead tr th {
          background: transparent;
        }
      }

      /* Horizontal scroll */
      @property --_inline-start-fade {
        syntax: '<length>';
        inherits: false;
        initial-value: 0;
      }

      @property --_inline-end-fade {
        syntax: '<length>';
        inherits: false;
        initial-value: 0;
      }

      @keyframes table-scroll-inline-fade {
        0% {
          --_inline-start-fade: 0;
        }
        10%,
        100% {
          --_inline-start-fade: var(--gds-sys-space-4xl);
        }
        0%,
        90% {
          --_inline-end-fade: var(--gds-sys-space-4xl);
        }
        100% {
          --_inline-end-fade: 0;
        }
      }

      .data {
        overflow-x: scroll;
        mask: linear-gradient(
          to right,
          #0000,
          #ffff var(--_inline-start-fade) calc(100% - var(--_inline-end-fade)),
          #0000
        );
        animation: table-scroll-inline-fade;
        animation-timeline: --table-scroll-inline-fade;
        scroll-timeline: --table-scroll-inline-fade x;
      }
    }
  }

  @media (max-width: 760px) {
    .responsive,
    .responsive tbody tr {
      animation: none;
    }
  }

  @supports not (animation-timeline: scroll()) {
    tbody tr {
      will-change: opacity, filter, translate;
      transition: all 242ms cubic-bezier(0.22, 0.61, 0.36, 1);

      @starting-style {
        opacity: 0;
        filter: blur(20px);
        translate: 0 10px;
      }
    }
  }

  /* Scrollbar */
  .data {
    --_scrollbar-color-thumb: var(--gds-sys-color-l3-neutral-01);
    --_scrollbar-color-track: var(--gds-sys-color-l3-neutral-02);
    --_scrollbar-width: var(--gds-sys-space-2xs);
  }

  @supports (scrollbar-width: auto) {
    .data {
      scrollbar-color: var(--_scrollbar-color-thumb) transparent;
      scrollbar-width: var(--_scrollbar-width);
    }
  }

  @supports selector(::-webkit-scrollbar) {
    .data::-webkit-scrollbar {
      width: var(--_scrollbar-width);
      height: var(--_scrollbar-width);
    }

    .data::-webkit-scrollbar-track {
      background: transparent;
    }

    .data::-webkit-scrollbar-thumb {
      background: var(--_scrollbar-color-thumb);
      border-radius: var(--gds-sys-radius-max);
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    tbody tr,
    tbody td .cell-content,
    thead th .column-header,
    .sort-icon,
    .column-header,
    .header {
      transition: none;
      animation: none;
    }
  }
`,Ls={"seb-account":e=>{const t="string"==typeof e?e.replace(" ",""):e?.toString()??"";return 11!==t.length?t:`${t.slice(0,4)} ${t.slice(4,6)} ${t.slice(6,9)} ${t.slice(9,11)}`}},_s=e=>"string"==typeof e?new Date(e):e,Hs={dateOnlyNumbers:(e,t)=>new Intl.DateTimeFormat(t,{dateStyle:"short"}).format(_s(e)),dateLong:(e,t)=>new Intl.DateTimeFormat(t,{dateStyle:"long"}).format(_s(e)),dateLongWithWeekday:(e,t)=>new Intl.DateTimeFormat(t,{dateStyle:"full"}).format(_s(e)),dateShort:(e,t)=>{const r=new Intl.DateTimeFormat(t,{dateStyle:"medium"});return"sv-se"===t?.toLowerCase()?r.format(_s(e)).replace(".",""):r.format(_s(e))},dateShortWithWeekday:(e,t)=>{const r=new Intl.DateTimeFormat(t,{weekday:"short",year:"numeric",month:"short",day:"numeric"}).format(_s(e));return"sv-se"===t?.toLowerCase()?r.replace(".",""):"en-gb"===t?.toLowerCase()?r.replace(",",""):r},timeShort:(e,t)=>new Intl.DateTimeFormat(t,{timeStyle:"short"}).format(_s(e)),timeLong:(e,t)=>new Intl.DateTimeFormat(t,{timeStyle:"medium"}).format(_s(e)),dateTimeLong:(e,t)=>new Intl.DateTimeFormat(t,{dateStyle:"long",timeStyle:"short"}).format(_s(e)),dateTimeLongWithWeekday:(e,t)=>new Intl.DateTimeFormat(t,{dateStyle:"full",timeStyle:"short"}).format(_s(e)),dateTimeShort:(e,t)=>new Intl.DateTimeFormat(t,{dateStyle:"medium",timeStyle:"short"}).format(_s(e))},vs={decimalsAndThousands:(e,t,r,o)=>{const s={maximumFractionDigits:o??2,minimumFractionDigits:o??2};return r?new Intl.NumberFormat(t,{...s,style:"currency",currency:r}).format(Number(e)):new Intl.NumberFormat(t,s).format(Number(e))}},ks=[V.LU,I.A,fs],ws=[k.t,y.z,$t,ge.Hx,Br.T,ot.E,mr,uo,Wr,l.K,vr,je.o,us,Jt.r,O,gs,Vs,Ms,ms,ps.z],bs={compact:{button:"small",input:"small",dropdown:"small",badge:"small"},comfortable:{button:"small",input:"small",dropdown:"small",badge:"small"},spacious:{button:"medium",input:"large",dropdown:"medium",badge:"default"}};var Zs,ys,xs,Ss,$s,Gs,js,Es,Bs,qs,Ns,Is,Ys,zs,As,Ts,Rs,Os,Ws,Ps,Fs,Ds,Ks,Us,Js,Qs,Xs,en,tn,rn,on,sn,nn,ln,an,cn,Cn,dn,hn,un,pn,gn,Mn,mn,Vn,fn,Ln,_n,Hn;let vn=class extends c.j{constructor(){super(...arguments),(0,s.VK)(this,Ss),(0,s.VK)(this,Zs,{}),(0,s.VK)(this,ys,3e5),(0,s.VK)(this,xs,new Map),this.options=[5,10,20,50,100],this.page=1,this.rows=10,this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.searchable=!1,this.settings=!1,this.striped=!1,this.nocache=!1,this.variant="secondary",this._isMobile=!1,this._view={page:this.page,rows:this.rows,searchQuery:"",visibleColumns:new Set},this._loaded=!0,this._loading=!1,this._rowsState=[],this._total=0,this._selected=new Set,this._error=null}_handleMobile(e){this._isMobile=e}_onDataChange(){(0,s.OV)(this,Zs,{}),(0,s.jq)(this,Ss,Ns).call(this)}_onColumnsChange(){(0,s.OV)(this,Zs,{}),this._view={...this._view,page:Number(this.page??1),rows:Number(this.rows??10),visibleColumns:new Set(this.columns.filter(e=>!1!==e.visible).map(e=>e.key))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{(0,s.jq)(this,Ss,Ln).call(this)})}render(){const e={table:!0,plain:this.plain,striped:this.striped,[this.density]:this.density};return C.qy`
      <div class="${(0,m.H)(e)}">
        ${[(0,s.jq)(this,Ss,Rs).call(this),(0,B.z)(this._error,()=>(0,s.jq)(this,Ss,nn).call(this),()=>(0,B.z)(0===this._rowsState.length&&!this._loading,()=>(0,s.jq)(this,Ss,ln).call(this),()=>(0,s.jq)(this,Ss,sn).call(this))),(0,s.jq)(this,Ss,an).call(this)]}
      </div>
    `}clearSelection(){(0,s.jq)(this,Ss,Vn).call(this),(0,s.jq)(this,Ss,fn).call(this)}selectAll(){(0,s.jq)(this,Ss,mn).call(this),(0,s.jq)(this,Ss,fn).call(this)}setSelection(e){const t=e.filter(e=>e>=0&&e<this._rowsState.length);this._selected=new Set(t),(0,s.jq)(this,Ss,fn).call(this),this.requestUpdate()}getSelection(){const e=Array.from(this._selected);return{indices:e,data:e.map(e=>this._rowsState[e])}}};Zs=new WeakMap,ys=new WeakMap,xs=new WeakMap,Ss=new WeakSet,$s=function(){return bs[this.density]},Gs=function(){return this._selected.size>0},js=function(){return this._rowsState.length>0&&this._selected.size===this._rowsState.length},Es=function(){return(0,s.S7)(this,Ss,Gs)&&!(0,s.S7)(this,Ss,js)},Bs=function(){return JSON.stringify({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery})},qs=function(e){return Date.now()-e.timestamp<(0,s.S7)(this,ys)},Ns=function(){var e=(0,ce.A)(function*(){if(this.data){if(!this.nocache){const e=(0,s.jq)(this,Ss,Bs).call(this),t=(0,s.S7)(this,Zs)[e];if(t&&(0,s.jq)(this,Ss,qs).call(this,t))return this._rowsState=t.rows,this._total=t.total,void(this._loaded=!1)}this._loading=!0,this._error=null;try{const e=yield this.data({page:this._view.page,rows:this._view.rows,sortColumn:this._view.sortColumn,sortDirection:this._view.sortDirection,searchQuery:this._view.searchQuery});if(!this.nocache){const t=(0,s.jq)(this,Ss,Bs).call(this);(0,s.S7)(this,Zs)[t]={rows:e.rows,total:e.total,timestamp:Date.now()}}this._rowsState=e.rows,this._total=e.total,this._selected.clear(),this._loaded=!1,this.dispatchEvent(new CustomEvent("gds-table-data-loaded",{detail:e,bubbles:!0}))}catch(e){this._error=e,this.dispatchEvent(new CustomEvent("gds-table-data-error",{detail:e,bubbles:!0}))}finally{this._loading=!1}}});return function(){return e.apply(this,arguments)}}(),Is=function(e){if(!e)return null;if(!(0,s.S7)(this,xs).has(e)){const t=this.querySelector(`template[name="${e}"]`);(0,s.S7)(this,xs).set(e,t)}return(0,s.S7)(this,xs).get(e)?.content.cloneNode(!0)},Ys=function(e,t){if(!e)return null;if(Array.isArray(e))return e.map(e=>(0,s.jq)(this,Ss,Ys).call(this,e,t));const r=e=>"function"==typeof e?e(t):e;switch(e.type){case"badge":{const t=r(e.variant)||"information",o=r(e.size)||(0,s.S7)(this,Ss,$s).badge;return C.qy`
          <gds-badge size="${o}" variant="${t}">
            ${r(e.value)}
          </gds-badge>
        `}case"image":{const t=r(e.src);if(!t)return null;const o=r(e.width)||"24px",s=r(e.height)||"24px",n=r(e["border-radius"])||"max",l=r(e["object-fit"])||"cover",i=r(e.alt)||"";return C.qy`
          <gds-img
            src="${t}"
            alt="${i}"
            width="${o}"
            height="${s}"
            border-radius="${n}"
            object-fit="${l}"
            object-position="center"
          ></gds-img>
        `}case"icon":{const t=r(e.template),o=r(e.size),n=r(e.color),l=(0,s.jq)(this,Ss,Is).call(this,t);if(!l)return null;if(l instanceof DocumentFragment){const e=l.firstElementChild;e&&(o&&e.setAttribute("size",o),n&&e.setAttribute("color",n))}return l}case"button":{const o=r(e.size)||(0,s.S7)(this,Ss,$s).button,n=r(e.variant),l=r(e.rank),i=r(e.label),a=r(e.template),c=[i,(0,s.jq)(this,Ss,Is).call(this,a)];return C.qy`
          <gds-button
            size="${o}"
            variant="${n||"neutral"}"
            rank="${l||"secondary"}"
            @click="${r=>{r.stopPropagation(),e.onClick(t)}}"
          >
            ${c}
          </gds-button>
        `}case"link":{const t=r(e.href);if(!t)return null;const o=r(e.label),n=r(e.target),l=r(e.download),i=r(e.template),a=[o,(0,s.jq)(this,Ss,Is).call(this,i)];return C.qy`
          <gds-link
            href=${(0,S.J)(t)}
            target=${(0,S.J)(n)}
            .download=${l}
            text-decoration="underline"
          >
            ${a}
          </gds-link>
        `}case"context-menu":{const o=e.items,n=(0,s.S7)(this,Ss,$s).button;return C.qy`
          <gds-context-menu>
            <gds-button
              slot="trigger"
              size="${n}"
              rank="tertiary"
              label="${(0,g.ab)("Actions")}"
            >
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            ${o.map(e=>{const o=r(e.label);return C.qy`
                <gds-menu-item @click="${()=>e.onClick(t)}">
                  ${o}
                </gds-menu-item>
              `})}
          </gds-context-menu>
        `}case"formatted-number":{const t=r(e.value);return(0,vs[e.format||"decimalsAndThousands"])(t,e.locale,e.currency,e.decimals)}case"formatted-account":{const t=r(e.value);return(0,Ls[e.format||"seb-account"])(t)}case"formatted-date":{const t=r(e.value);return(0,Hs[e.format||"dateLong"])(t,e.locale)}default:return null}},zs=function(e,t){const{cell:r}=t;let o;o=t.value?t.value(e):r?.value?(0,s.jq)(this,Ss,Ys).call(this,r.value,e):e[t.key];const n=t.justify?C.qy`<span>${o}</span>`:o,l=this._isMobile&&this.responsive,i=l?C.qy`
          <span class="column-label" aria-hidden="true">
            ${t.label}:
          </span>
        `:null,a=l?`${t.label}: `:"";return C.qy`
      <div class="cell-content" aria-label="${a}">
        ${[i,(0,s.jq)(this,Ss,Ys).call(this,r?.lead,e),n,(0,s.jq)(this,Ss,Ys).call(this,r?.trail,e)]}
      </div>
    `},As=function(e){const t=this._view.sortColumn===e.key,r=this._view.sortDirection;return t?"asc"===r?C.qy`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:C.qy`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:C.qy`<gds-icon-sort-up size="m"></gds-icon-sort-up>`},Ts=function(){return this.searchable||this.settings||this.querySelector('[slot="header-lead"]')||this.querySelector('[slot="header-trail"]')},Rs=function(){return this.plain||!(0,s.jq)(this,Ss,Ts).call(this)?null:C.qy`
      <div class="header">
        <div class="lead">
          ${(0,B.z)(this.searchable,()=>C.qy`
              <gds-input
                type="text"
                size="${(0,s.S7)(this,Ss,$s).input}"
                plain
                clearable
                label="${(0,g.ab)("Search table")}"
                .value=${this._view.searchQuery}
                @input=${(0,s.jq)(this,Ss,cn)}
                @gds-input-cleared=${(0,s.jq)(this,Ss,Cn)}
                width="100%; l{240px}"
                min-width="240px"
              >
                <gds-icon-magnifying-glass
                  slot="lead"
                ></gds-icon-magnifying-glass>
              </gds-input>
            `)}
          <slot name="header-lead"></slot>
        </div>
        <div class="trail">
          <slot name="header-trail"></slot>
          ${(0,B.z)(this.settings,()=>C.qy`
              <gds-dropdown
                multiple
                plain
                size="${(0,s.S7)(this,Ss,$s).dropdown}"
                label="${(0,g.ab)("Select visible columns")}"
                searchable
                .value=${Array.from(this._view.visibleColumns)}
                @change=${(0,s.jq)(this,Ss,pn)}
              >
                <span slot="trigger">${(0,g.ab)("Columns")}</span>
                ${this.columns.map(e=>C.qy`
                    <gds-option
                      value=${e.key}
                      ?selected=${this._view.visibleColumns.has(e.key)}
                    >
                      ${e.label}
                    </gds-option>
                  `)}
              </gds-dropdown>
            `)}
        </div>
      </div>
    `},Os=function(e){const t=this._view.sortColumn===e.key,r=this._view.sortDirection;let o=e.label;if(e.sortable)if(t){const t="asc"===r?(0,g.ab)("ascending"):(0,g.ab)("descending");o=`${e.label}, ${(0,g.ab)("sorted")} ${t}`}else o=`${e.label}, ${(0,g.ab)("sortable")}`;const n=(0,m.H)({sortable:!!e.sortable,sorted:t,"sort-asc":t&&"asc"===r,"sort-desc":t&&"desc"===r,[`align-${e.align}`]:!!e.align,[`justify-${e.justify}`]:!!e.justify});return C.qy`
      <th
        class=${n}
        aria-sort="${t?"asc"===r?"ascending":"descending":"none"}"
        @click=${e.sortable?()=>(0,s.jq)(this,Ss,dn).call(this,e.key):null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${o}">
            ${e.label}
          </span>
          ${(0,B.z)(e.sortable,()=>C.qy`
              <span class="sort-icon">${(0,s.jq)(this,Ss,As).call(this,e)}</span>
            `)}
        </div>
      </th>
    `},Ws=function(){if(!this.actions||"function"==typeof this.actions)return null;const e=this.actions.label||(0,g.ab)("Actions"),t=(0,m.H)({actions:!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return C.qy`
      <th class="${t}">
        <div class="column-header">
          <div class="column-label">${e}</div>
        </div>
      </th>
    `},Ps=function(){return this.selectable?C.qy`
      <th class="checkbox-cell">
        ${(0,s.jq)(this,Ss,en).call(this,{checked:(0,s.S7)(this,Ss,js),indeterminate:(0,s.S7)(this,Ss,Es),ariaLabel:(0,g.ab)("Select all rows"),onToggle:()=>(0,s.jq)(this,Ss,gn).call(this,{})})}
      </th>
    `:null},Fs=function(){return this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>(0,s.jq)(this,Ss,Os).call(this,e))},Ds=function(){return C.qy`
      <thead>
        <tr>
          ${[(0,s.jq)(this,Ss,Ps).call(this),(0,s.jq)(this,Ss,Fs).call(this),(0,s.jq)(this,Ss,Ws).call(this)]}
        </tr>
      </thead>
    `},Ks=function(e,t){const r=(0,m.H)({[`align-${t.align}`]:!!t.align,[`justify-${t.justify}`]:!!t.justify,wrap:Boolean(t.width)}),o=(0,hs.W)({"--cell-width":t.width});return C.qy`
      <td style=${o} class=${r}>
        ${(0,s.jq)(this,Ss,zs).call(this,e,t)}
      </td>
    `},Us=function(e){if(!this.selectable)return null;const t=`${(0,g.ab)("Select row")} ${e+1}`;return C.qy`
      <td class="checkbox-cell">
        ${(0,s.jq)(this,Ss,en).call(this,{checked:this._selected.has(e),indeterminate:!1,ariaLabel:t,onToggle:()=>(0,s.jq)(this,Ss,Mn).call(this,e,{detail:{checked:!this._selected.has(e)}})})}
      </td>
    `},Js=function(e){return this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(t=>(0,s.jq)(this,Ss,Ks).call(this,e,t))},Qs=function(e,t){if(!this.actions)return null;if("function"==typeof this.actions)return C.qy`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(e,t)}</div>
        </td>
      `;const r=(0,s.jq)(this,Ss,Ys).call(this,this.actions.cell,e),o=(0,m.H)({"actions-cell":!0,[`align-${this.actions.align}`]:!!this.actions.align,[`justify-${this.actions.justify}`]:!!this.actions.justify});return C.qy`
      <td class="${o}">
        <div class="cell-content">${r}</div>
      </td>
    `},Xs=function(e,t){return C.qy`
      <tr
        class=${(0,m.H)({selected:this._selected.has(t),loading:this._loading})}
      >
        ${[(0,s.jq)(this,Ss,Us).call(this,t),(0,s.jq)(this,Ss,Js).call(this,e),(0,s.jq)(this,Ss,Qs).call(this,e,t)]}
      </tr>
    `},en=function({checked:e,indeterminate:t=!1,disabled:r=!1,ariaLabel:o,onToggle:s}){const n=e=>{e.stopPropagation(),r||s()};return C.qy`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${t?"mixed":e?"true":"false"}
        aria-label=${o}
        @click=${n}
        @keydown=${e=>{" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),n(e))}}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${e}
          .indeterminate=${t}
          ?disabled=${r}
          aria-hidden="true"
          @change=${n}
        />
        ${Y.o({checked:e,indeterminate:t,disabled:r,invalid:!1})}
      </div>
    `},tn=function(e){const t=this._isMobile&&this.responsive?C.qy`<span class="skeleton skeleton-text"></span>`:null;return C.qy`
      <div class="cell-content">
        ${t}
        <span class="skeleton skeleton-text"></span>
      </div>
    `},rn=function(e){return C.qy`
      <tr class="skeleton-row">
        ${(0,B.z)(this.selectable,()=>C.qy`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(e=>this._view.visibleColumns.has(e.key)).map(e=>C.qy`<td>${(0,s.jq)(this,Ss,tn).call(this,e)}</td>`)}
        ${(0,B.z)(this.actions,()=>C.qy`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `},on=function(){if(this._loading&&this._loaded){const e=Array.from({length:this._view.rows},(e,t)=>(0,s.jq)(this,Ss,rn).call(this,t));return C.qy`<tbody aria-busy="true" aria-live="polite">
        ${e}
      </tbody>`}return C.qy`
      <tbody aria-live="polite">
        ${this._rowsState.map((e,t)=>(0,s.jq)(this,Ss,Xs).call(this,e,t))}
      </tbody>
    `},sn=function(){const e=(0,m.H)({responsive:this.responsive,data:!0,[`variant-${this.variant}`]:!0,loading:this._loading,loaded:!this._loading&&!this._loaded}),t=`${(0,g.ab)("Data table with")} ${this._total} ${(0,g.ab)("rows")}`;return C.qy`
      <gds-card
        variant="${this.variant}"
        padding="0"
        border-radius="m"
        border-width="0; s{5xs}"
      >
        <div class=${e} tabindex="0">
          <table aria-label="${t}">
            <caption class="visually-hidden">
              ${t}
            </caption>
            ${(0,s.jq)(this,Ss,Ds).call(this)} ${(0,s.jq)(this,Ss,on).call(this)}
          </table>
        </div>
      </gds-card>
    `},nn=function(){return C.qy`
      <gds-card variant="secondary" border-radius="m">
        <slot name="error">
          <gds-text tag="p">${(0,g.ab)("Error loading data")}</gds-text>
          <gds-button
            size="small"
            label="${(0,g.ab)("Retry loading data")}"
            @click=${()=>(0,s.jq)(this,Ss,Ns).call(this)}
          >
            ${(0,g.ab)("Retry")}
          </gds-button>
        </slot>
      </gds-card>
    `},ln=function(){return this._view.searchQuery.length>0?C.qy`
        <gds-card variant="secondary" border-radius="m">
          <slot name="no-results">
            <gds-flex flex-direction="column" align-items="flex-start" gap="s">
              <gds-text tag="p" font="heading-s">
                ${(0,g.ab)("No results found")}
              </gds-text>
              <gds-text tag="p" font="detail-book-s">
                ${(0,g.ab)("No results for")} "${this._view.searchQuery}"
              </gds-text>
              <gds-button
                size="small"
                label="${(0,g.ab)("Clear search for")} ${this._view.searchQuery}"
                @click=${(0,s.jq)(this,Ss,Cn)}
              >
                ${(0,g.ab)("Clear search")}
              </gds-button>
            </gds-flex>
          </slot>
        </gds-card>
      `:C.qy`
      <gds-card variant="secondary" border-radius="m">
        <slot name="empty">
          <gds-text tag="p" font="heading-s">
            ${(0,g.ab)("No data available")}
          </gds-text>
        </slot>
      </gds-card>
    `},an=function(){if(this.plain||this._total<1)return null;const e=`${(this._view.page-1)*this._view.rows+1} - ${Math.min(this._view.page*this._view.rows,this._total)} ${(0,g.ab)("of")} ${this._total}`;return C.qy`
      <gds-pagination
        .page=${this._view.page}
        .rows=${this._view.rows}
        .options=${this.options}
        .total=${this._total}
        .density=${this.density}
        .label=${e}
        @gds-page-change=${(0,s.jq)(this,Ss,hn)}
        @gds-rows-change=${(0,s.jq)(this,Ss,un)}
        width="100%"
      >
      </gds-pagination>
    `},cn=function(){var e=(0,ce.A)(function*(e){const t=e.target;this._view={...this._view,searchQuery:t.value,page:1},yield(0,s.jq)(this,Ss,Ns).call(this)});return function(t){return e.apply(this,arguments)}}(),Cn=function(){var e=(0,ce.A)(function*(){this._view={...this._view,searchQuery:"",page:1},yield(0,s.jq)(this,Ss,Ns).call(this)});return function(){return e.apply(this,arguments)}}(),dn=function(){var e=(0,ce.A)(function*(e){this._view={...this._view,sortColumn:e,sortDirection:this._view.sortColumn===e&&"asc"===this._view.sortDirection?"desc":"asc",page:1},yield(0,s.jq)(this,Ss,Ns).call(this)});return function(t){return e.apply(this,arguments)}}(),hn=function(){var e=(0,ce.A)(function*(e){this._view={...this._view,page:e.detail.page},yield(0,s.jq)(this,Ss,Ns).call(this)});return function(t){return e.apply(this,arguments)}}(),un=function(){var e=(0,ce.A)(function*(e){this._view={...this._view,rows:e.detail.rows,page:1},yield(0,s.jq)(this,Ss,Ns).call(this)});return function(t){return e.apply(this,arguments)}}(),pn=function(e){const t=e.detail.value;this._view={...this._view,visibleColumns:new Set(t)},this.requestUpdate()},gn=function(e){(0,s.S7)(this,Ss,js)?(0,s.jq)(this,Ss,Vn).call(this):(0,s.jq)(this,Ss,mn).call(this),(0,s.jq)(this,Ss,fn).call(this)},Mn=function(e,t){t.detail.checked?this._selected.add(e):this._selected.delete(e),(0,s.jq)(this,Ss,fn).call(this),this.requestUpdate()},mn=function(){this._selected=new Set(this._rowsState.map((e,t)=>t)),this.requestUpdate()},Vn=function(){this._selected.clear(),this.requestUpdate()},fn=function(){this.dispatchEvent(new CustomEvent("gds-table-selection",{detail:{selectedIndices:Array.from(this._selected),selectedData:Array.from(this._selected).map(e=>this._rowsState[e]),count:this._selected.size},bubbles:!0}))},Ln=function(){const e=this.shadowRoot?.querySelector(".data");if(!e)return;const t=()=>{(0,s.jq)(this,Ss,_n).call(this,e),(0,s.jq)(this,Ss,Hn).call(this,e)};e.addEventListener("scroll",t),t()},_n=function(e){const{scrollTop:t}=e;t>0?e.classList.add("scrolled"):e.classList.remove("scrolled")},Hn=function(e){const{scrollLeft:t,scrollWidth:r,clientWidth:o}=e,s=r-o;t<=0?(e.classList.add("scrolled-x-start"),e.classList.remove("scrolled-x-middle","scrolled-x-end")):t>=s-1?(e.classList.add("scrolled-x-end"),e.classList.remove("scrolled-x-start","scrolled-x-middle")):(e.classList.add("scrolled-x-middle"),e.classList.remove("scrolled-x-start","scrolled-x-end"))},vn.styles=ks,(0,s.Cc)([(0,M.MZ)({type:Array})],vn.prototype,"options",2),(0,s.Cc)([(0,M.MZ)({type:Number})],vn.prototype,"page",2),(0,s.Cc)([(0,M.MZ)({type:Number})],vn.prototype,"rows",2),(0,s.Cc)([(0,M.MZ)({type:Array})],vn.prototype,"columns",2),(0,s.Cc)([(0,M.MZ)()],vn.prototype,"data",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],vn.prototype,"density",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!1})],vn.prototype,"selectable",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!1})],vn.prototype,"responsive",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!1})],vn.prototype,"plain",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!1})],vn.prototype,"searchable",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!1})],vn.prototype,"settings",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!1})],vn.prototype,"striped",2),(0,s.Cc)([(0,M.MZ)()],vn.prototype,"actions",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!1})],vn.prototype,"nocache",2),(0,s.Cc)([(0,M.MZ)()],vn.prototype,"dataLoadKey",2),(0,s.Cc)([(0,Qe.F)({...Xe.Sc,property:"--_table-height",selector:".data"})],vn.prototype,"height",2),(0,s.Cc)([(0,M.MZ)()],vn.prototype,"variant",2),(0,s.Cc)([(0,M.wk)()],vn.prototype,"_isMobile",2),(0,s.Cc)([(0,Er.M)("(max-width: 768px)")],vn.prototype,"_handleMobile",1),(0,s.Cc)([(0,M.wk)()],vn.prototype,"_view",2),(0,s.Cc)([(0,M.wk)()],vn.prototype,"_loaded",2),(0,s.Cc)([(0,M.wk)()],vn.prototype,"_loading",2),(0,s.Cc)([(0,M.wk)()],vn.prototype,"_rowsState",2),(0,s.Cc)([(0,M.wk)()],vn.prototype,"_total",2),(0,s.Cc)([(0,M.wk)()],vn.prototype,"_selected",2),(0,s.Cc)([(0,M.wk)()],vn.prototype,"_error",2),(0,s.Cc)([(0,z.w)("dataLoadKey"),(0,z.w)("data")],vn.prototype,"_onDataChange",1),(0,s.Cc)([(0,z.w)("columns")],vn.prototype,"_onColumnsChange",1),vn=(0,s.Cc)([(0,g.cc)(),(0,C.Y$)("gds-table",{dependsOn:ws})],vn);const kn=e=>{vn.define();const t=(0,n.p)("gds-table"),r={...e,class:e.className};return(0,i.createElement)(t,r)},wn=e=>{Wr.define();const t=(0,n.p)("gds-text"),r={...e,class:e.className};return(0,i.createElement)(t,r)},bn=e=>{tr.define();const t=(0,n.p)("gds-textarea"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var Zn=r(7247),yn=d.AH`
  :host {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  video {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;let xn=class extends((0,f.Q8)((0,f.vi)((0,f.TM)((0,f.lt)((0,f.qC)(c.j)))))){applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return C.qy`<video></video>`}firstUpdated(){this.applyVideoSettings()}};xn.styles=[V.LU,yn],(0,s.Cc)([(0,Qe.F)()],xn.prototype,"aspect-ratio",2),(0,s.Cc)([(0,Qe.F)({selector:"video"})],xn.prototype,"object-position",2),(0,s.Cc)([(0,Qe.F)()],xn.prototype,"opacity",2),(0,s.Cc)([(0,Qe.F)({selector:"video"})],xn.prototype,"object-fit",2),(0,s.Cc)([(0,Qe.F)({selector:"video"})],xn.prototype,"pointer-events",2),(0,s.Cc)([(0,Qe.F)({valueTemplate:e=>`var(--gds-sys-space-${e})`})],xn.prototype,"border-radius",2),(0,s.Cc)([(0,M.MZ)()],xn.prototype,"src",2),(0,s.Cc)([(0,M.MZ)()],xn.prototype,"poster",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],xn.prototype,"muted",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],xn.prototype,"playsinline",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],xn.prototype,"autoplay",2),(0,s.Cc)([(0,M.MZ)({type:Boolean})],xn.prototype,"loop",2),(0,s.Cc)([(0,M.P)("video")],xn.prototype,"videoElement",2),xn=(0,s.Cc)([(0,C.Y$)("gds-video")],xn);const Sn=e=>{xn.define();const t=(0,n.p)("gds-video"),r={...e,class:e.className};return(0,i.createElement)(t,r)};Wr.define();class $n extends Wr{updated(e){super.updated(e),this.element&&(this.element.innerHTML=this.formattedValue)}}(0,s.Cc)([(0,M.P)("[tag]")],$n.prototype,"element",2);let Gn=class extends $n{constructor(){super(...arguments),this.format="dateOnlyNumbers"}get formattedValue(){return this.format&&this.format in Hs?Hs[this.format](this.value??this.element?.textContent??void 0,this.locale):this.value?.toString()??""}firstUpdated(e){super.firstUpdated(e),!this.value&&this.textContent&&(this.value=this.textContent)}};(0,s.Cc)([(0,M.MZ)({attribute:!1})],Gn.prototype,"value",2),(0,s.Cc)([(0,M.MZ)({type:String})],Gn.prototype,"format",2),(0,s.Cc)([(0,M.MZ)({type:String})],Gn.prototype,"locale",2),Gn=(0,s.Cc)([(0,C.Y$)("gds-formatted-date")],Gn);let jn=class extends R.M{};jn._regularSVG='<path d="M9.75027 5.52371L10.7168 4.55722C13.1264 2.14759 17.0332 2.14759 19.4428 4.55722C21.8524 6.96684 21.8524 10.8736 19.4428 13.2832L18.4742 14.2519M5.52886 9.74513L4.55722 10.7168C2.14759 13.1264 2.1476 17.0332 4.55722 19.4428C6.96684 21.8524 10.8736 21.8524 13.2832 19.4428L14.2478 18.4782M9.5 14.5L14.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',jn._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9125 5.08755C16.7957 2.97082 13.3638 2.97082 11.2471 5.08755L9.75027 6.58437L8.68961 5.52371L10.1864 4.02689C12.889 1.32437 17.2706 1.32437 19.9731 4.02689C22.6756 6.7294 22.6756 11.111 19.9731 13.8136L18.4742 15.3125L17.4135 14.2519L18.9125 12.7529C21.0292 10.6362 21.0292 7.20428 18.9125 5.08755ZM15.5607 9.5L9.5 15.5607L8.43934 14.5L14.5 8.43934L15.5607 9.5ZM6.58952 9.74513L5.08755 11.2471C2.97082 13.3638 2.97082 16.7957 5.08755 18.9125C7.20428 21.0292 10.6362 21.0292 12.7529 18.9125L14.2478 17.4176L15.3084 18.4782L13.8136 19.9731C11.1111 22.6756 6.72941 22.6756 4.02689 19.9731C1.32437 17.2706 1.32437 12.889 4.02689 10.1864L5.52886 8.68446L6.58952 9.74513Z" fill="currentColor"/>',jn._name="chain-link",jn._width=24,jn._height=24,jn._viewBox="0 0 24 24",jn=(0,s.Cc)([(0,C.Y$)("gds-icon-chain-link")],jn),jn.define();var En,Bn,qn,Nn,In,Yn,zn,An,Tn,Rn=d.AH`
  :host {
    display: inline-block;
    height: max-content;
    text-align: left;
  }

  .card-media {
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-property: opacity;

    @starting-style {
      opacity: 0;
    }
  }
`;let On=class extends((0,f.Q8)((0,f.TM)((0,f.lt)($(xt(c.j)))))){constructor(){super(...arguments),(0,s.VK)(this,En),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.outlined=!1,this.tag="h2",this.ratio="landscape",this.category="",this.date="",this.dateFormat="dateTimeLong",this.locale="en-GB"}render(){return(0,B.z)(this.href,()=>(0,s.jq)(this,En,In).call(this),()=>(0,s.jq)(this,En,zn).call(this))}};En=new WeakSet,Bn=function(e=!1){return e&&this.label||this.querySelector('[slot="footer"]')},qn=function(){return"neutral-02"===this.variant?this.outlined?"secondary":"tertiary":"primary"},Nn=function(e){return(0,m.H)({card:!0,outlined:this.outlined,[`card-${e}`]:!!e,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0})},In=function(){return C.qy`
      <gds-card-linked
        padding="0"
        gap="0"
        href=${(0,S.J)(this.href)}
        target=${(0,S.J)(this.target)}
        rel=${(0,S.J)(this.rel)}
        variant=${(0,s.jq)(this,En,qn).call(this)}
        class=${(0,s.jq)(this,En,Nn).call(this,"linked")}
      >
        ${(0,s.jq)(this,En,Tn).call(this)}
      </gds-card-linked>
    `},Yn=function(){return(0,B.z)((0,s.jq)(this,En,Bn).call(this,!0),()=>C.qy`
        <gds-flex
          font="detail-book-m"
          align-items="center"
          gap="s"
          pointer-events="none"
          aria-hidden="true"
          inert
        >
          <slot name="footer">
            ${(0,B.z)(this.label,()=>C.qy`
                <gds-link href=${(0,S.J)(this.href)}>
                  <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                  ${this.label}
                </gds-link>
              `)}
          </slot>
        </gds-flex>
      `)},zn=function(){return C.qy`
      <gds-card
        padding="0"
        gap="0"
        variant=${(0,s.jq)(this,En,qn).call(this)}
        class=${(0,s.jq)(this,En,Nn).call(this,"static")}
      >
        ${(0,s.jq)(this,En,Tn).call(this)}
      </gds-card>
    `},An=function(){return(0,B.z)((0,s.jq)(this,En,Bn).call(this),()=>C.qy`
        <gds-flex font="detail-book-m" align-items="center" gap="s">
          <slot name="footer"></slot>
        </gds-flex>
      `)},Tn=function(){return C.qy`
      ${(0,B.z)(this.src,()=>C.qy`
          <gds-flex padding="xs xs 0 xs">
            <gds-img
              src=${(0,S.J)(this.src)}
              srcset=${(0,S.J)(this.srcset)}
              sizes=${(0,S.J)(this.sizes)}
              width="100%"
              height="100%"
              object-fit="cover"
              object-position="center"
              border-radius="xs"
              aspect-ratio=${"square"===this.ratio?"1/1":"16/9"}
              loading=${(0,S.J)(this.loading)}
              decoding=${(0,S.J)(this.decoding)}
              alt=${(0,S.J)(this.alt)}
              class="card-media"
            ></gds-img>
          </gds-flex>
        `)}
      <gds-flex flex-direction="column" gap="xl" padding="xl">
        ${(0,B.z)(!this.src,()=>C.qy`<slot name="header"></slot>`)}
        ${(0,B.z)(this.title||this.excerpt,()=>C.qy`
            <gds-flex flex-direction="column" gap="xs">
              ${(0,B.z)(this.category||this.date,()=>C.qy`
                  <gds-flex gap="s" align-items="center" flex-wrap="wrap">
                    ${(0,B.z)(this.category,()=>C.qy` <gds-text tag="p" font="detail-book-s">
                          ${this.category}
                        </gds-text>`)}
                    ${(0,B.z)(this.date,()=>C.qy`
                        <gds-formatted-date
                          .value=${this.date}
                          .locale=${this.locale}
                          .format=${this.dateFormat}
                          font="detail-book-s"
                          color="neutral-02"
                        ></gds-formatted-date>
                      `)}
                  </gds-flex>
                `)}
              ${(0,B.z)(this.title,()=>C.qy`
                  <gds-text tag=${(0,S.J)(this.tag)} font="heading-s">
                    ${this.title}
                  </gds-text>
                `)}
              ${(0,B.z)(this.excerpt,()=>C.qy`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `)}
            </gds-flex>
          `)}
        ${(0,B.z)(this.href,()=>(0,s.jq)(this,En,Yn).call(this),()=>(0,s.jq)(this,En,An).call(this))}
      </gds-flex>
    `},On.styles=[V.LU,Rn],(0,s.Cc)([(0,M.MZ)({reflect:!1})],On.prototype,"title",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],On.prototype,"excerpt",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],On.prototype,"label",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],On.prototype,"variant",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!1})],On.prototype,"outlined",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],On.prototype,"tag",2),(0,s.Cc)([(0,M.MZ)({reflect:!1,attribute:"aspect-ratio"})],On.prototype,"ratio",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],On.prototype,"category",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],On.prototype,"date",2),(0,s.Cc)([(0,M.MZ)({reflect:!1,attribute:"date-format"})],On.prototype,"dateFormat",2),(0,s.Cc)([(0,M.MZ)({reflect:!1})],On.prototype,"locale",2),On=(0,s.Cc)([(0,C.Y$)("gds-card-pattern-01",{dependsOn:[y.z,j,$t,Wr,je.o,Gn,jn]})],On);const Wn=e=>{On.define();const t=(0,n.p)("gds-card-pattern-01"),r={...e,class:e.className};return(0,i.createElement)(t,r)},Pn=e=>{Dt.V.define();const t=(0,n.p)("gds-form-control-footer"),r={...e,class:e.className};return(0,i.createElement)(t,r)},Fn=e=>{Kt.$.define();const t=(0,n.p)("gds-form-control-header"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var Dn=r(5017);const Kn=e=>{Dn.Y.define();const t=(0,n.p)("gds-option"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var Un=d.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-content-neutral-02);
      background-color: var(--gds-sys-color-l2-neutral-01);
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-detail-book-s);
      padding-inline: var(--gds-sys-space-s);
      padding-block: var(--gds-sys-space-xs);
    }
  }
`;let Jn=class extends c.j{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>Zo.n.instance.apply(this,"gds-menu-heading"))}render(){return d.qy`<slot></slot>`}};Jn.styles=Un,Jn=(0,s.Cc)([(0,C.Y$)("gds-menu-heading")],Jn);const Qn=e=>{Jn.define();const t=(0,n.p)("gds-menu-heading"),r={...e,class:e.className};return(0,i.createElement)(t,r)},Xn=e=>{Br.T.define();const t=(0,n.p)("gds-menu-item"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var el,tl,rl,ol,sl,nl,ll,il=d.AH`
  @layer base {
    :host {
      display: contents;
    }

    .list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin: unset;
      padding: unset;
      height: max-content;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      gap: var(--_gap);
    }

    @container (max-width: 400px) {
      :host(:not([return])) {
        display: none;
      }

      :host([return]) {
        display: contents;
      }
    }
  }
`;let al=class extends c.j{constructor(){super(...arguments),(0,s.VK)(this,el),this.href="",this.label="",this.overflow=!1}render(){return C.qy`
      <div role="listitem" class="list-item">${(0,s.jq)(this,el,rl).call(this)}</div>
    `}};el=new WeakSet,tl=function(){return"_blank"===this.target?"noreferrer noopener":void 0},rl=function(){return[(0,s.jq)(this,el,ol).call(this)].map(e=>C.qy`${e}`)},ol=function(){return this.overflow?(0,s.jq)(this,el,sl).call(this):this.href?(0,s.jq)(this,el,nl).call(this):(0,s.jq)(this,el,ll).call(this)},sl=function(){return C.qy`<slot></slot>`},nl=function(){return C.qy`
      <gds-link
        href=${(0,S.J)(this.href)}
        target=${(0,S.J)(this.target)}
        rel=${(0,S.J)(this.rel||(0,s.S7)(this,el,tl))}
        aria-label=${this.label||d.s6}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </gds-link>
    `},ll=function(){return C.qy`
      <gds-text
        color="neutral-02"
        font-weight="regular"
        aria-current=${(0,S.J)(this.href?void 0:"page")}
      >
        <slot></slot>
      </gds-text>
    `},al.styles=[il],(0,s.Cc)([(0,M.MZ)()],al.prototype,"href",2),(0,s.Cc)([(0,M.MZ)()],al.prototype,"target",2),(0,s.Cc)([(0,M.MZ)()],al.prototype,"rel",2),(0,s.Cc)([(0,M.MZ)()],al.prototype,"label",2),(0,s.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],al.prototype,"overflow",2),al=(0,s.Cc)([(0,C.Y$)("gds-breadcrumb",{dependsOn:[vr,Wr]})],al);const cl=e=>{al.define();const t=(0,n.p)("gds-breadcrumb"),r={...e,class:e.className};return(0,i.createElement)(t,r)},Cl=d.AH`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
    font: var(--_font-label);

    /* Color */
    --_checkbox-label-color: var(--gds-sys-color-l3-content-tertiary);

    /* Perimiter */
    --_perimeter-size: var(--gds-sys-space-2xl);
    --_container-gap: var(--gds-sys-space-s);
  }

  :host(:invalid) {
    --_checkbox-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_container-gap: var(--gds-sys-space-xs);
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  :host([size='small']) .checkbox-group {
    gap: var(--gds-sys-space-xs);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_checkbox-label-color);
  }

  .direction-row .content {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gds-sys-space-s) var(--gds-sys-space-xl);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-s);
  }

  :host([size='small']) .direction-column .content {
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) .direction-row .content {
    gap: var(--gds-sys-space-xs) var(--gds-sys-space-m);
  }
`;var dl,hl,ul,pl,gl,Ml,ml,Vl,fl;let Ll=class extends A.S{constructor(){super(...arguments),(0,s.VK)(this,hl),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,(0,s.VK)(this,dl,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid,e.errorMessage=this.errorMessage})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}_handleGroupInvalidChange(){(0,s.S7)(this,dl).call(this)}focus(){this.checkboxes[0]?.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",(0,s.S7)(this,dl))}render(){const e={"checkbox-group":!0,"direction-row":"row"===this.direction,"direction-column":"column"===this.direction};return C.qy`<div
      role="group"
      id="checkboxgroup"
      class=${(0,m.H)(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${(0,s.jq)(this,hl,ul).call(this)}
    </div>`}_syncOnDOMChange(){(0,s.S7)(this,dl).call(this),(0,s.jq)(this,hl,ml).call(this)}};dl=new WeakMap,hl=new WeakSet,ul=function(){return[(0,s.jq)(this,hl,pl).call(this),(0,s.jq)(this,hl,gl).call(this),(0,s.jq)(this,hl,fl).call(this)].map(e=>C.qy`${e}`)},pl=function(){if(this.label)return C.qy`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`},gl=function(){return C.qy`<div class="content">
      <slot @input=${(0,s.jq)(this,hl,Ml)}></slot>
    </div>`},Ml=function(e){e&&e.stopPropagation(),(0,s.jq)(this,hl,ml).call(this),(0,s.jq)(this,hl,Vl).call(this)},ml=function(){const e=this.checkboxes.filter(e=>e.checked).map(e=>e.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)},Vl=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))},fl=function(){return C.qy`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`},Ll.styles=[Cl],(0,s.Cc)([(0,M.MZ)()],Ll.prototype,"size",2),(0,s.Cc)([(0,M.MZ)()],Ll.prototype,"direction",2),(0,s.Cc)([(0,M.MZ)({attribute:"supporting-text"})],Ll.prototype,"supportingText",2),(0,s.Cc)([(0,M.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Ll.prototype,"showExtendedSupportingText",2),(0,s.Cc)([(0,M.MZ)({type:Array})],Ll.prototype,"value",1),(0,s.Cc)([(0,M.P)("#checkboxgroup")],Ll.prototype,"_elCheckboxGroup",2),(0,s.Cc)([(0,z.w)("value",{waitUntilFirstUpdate:!0})],Ll.prototype,"_handleValueChange",1),(0,s.Cc)([(0,z.w)("invalid"),(0,z.w)("errorMessage")],Ll.prototype,"_handleGroupInvalidChange",1),(0,s.Cc)([(0,vo.L)({attributes:!0,childList:!0,subtree:!0,characterData:!0})],Ll.prototype,"_syncOnDOMChange",1),Ll=(0,s.Cc)([(0,g.cc)()],Ll);let _l=class extends((0,f.lt)((0,f.TM)((0,f.Q8)(Ll)))){};_l=(0,s.Cc)([(0,C.Y$)("gds-checkbox-group",{dependsOn:[Kt.$,Dt.V]})],_l);const Hl=e=>{_l.define();const t=(0,n.p)("gds-checkbox-group"),r={...e,class:e.className};return(0,i.createElement)(t,r)},vl=e=>{Le.define();const t=(0,n.p)("gds-icon-details"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var kl=r(1912);const wl=e=>{kl.x.define();const t=(0,n.p)("gds-filter-chip"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let bl=class extends $n{constructor(){super(...arguments),this.format="seb-account"}get formattedValue(){return Ls[this.format](this.account)}firstUpdated(e){super.firstUpdated(e),!this.account&&this.textContent&&(this.account=this.textContent)}};(0,s.Cc)([(0,M.MZ)()],bl.prototype,"account",2),(0,s.Cc)([(0,M.MZ)({type:String})],bl.prototype,"format",2),bl=(0,s.Cc)([(0,C.Y$)("gds-formatted-account")],bl);const Zl=e=>{bl.define();const t=(0,n.p)("gds-formatted-account"),r={...e,class:e.className};return(0,i.createElement)(t,r)},yl=e=>{Gn.define();const t=(0,n.p)("gds-formatted-date"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let xl=class extends $n{constructor(){super(...arguments),this.format="decimalsAndThousands"}get formattedValue(){return vs[this.format](this.value,this.locale,this.currency,this.decimals)}firstUpdated(e){super.firstUpdated(e),!this.value&&this.textContent&&(this.value=this.textContent)}};(0,s.Cc)([(0,M.MZ)({attribute:!1})],xl.prototype,"value",2),(0,s.Cc)([(0,M.MZ)({type:String})],xl.prototype,"locale",2),(0,s.Cc)([(0,M.MZ)({type:String})],xl.prototype,"currency",2),(0,s.Cc)([(0,M.MZ)({type:Number})],xl.prototype,"decimals",2),(0,s.Cc)([(0,M.MZ)({type:String})],xl.prototype,"format",2),xl=(0,s.Cc)([(0,C.Y$)("gds-formatted-number")],xl);const Sl=e=>{xl.define();const t=(0,n.p)("gds-formatted-number"),r={...e,class:e.className};return(0,i.createElement)(t,r)},$l=d.AH`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
    font: var(--_font-label);

    /* Color */
    --_radio-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_radio-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_container-gap: var(--gds-sys-space-xs);
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  :host([size='small']) .radio-group {
    gap: var(--gds-sys-space-xs);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_radio-label-color);
  }

  .direction-row .content {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gds-sys-space-s) var(--gds-sys-space-xl);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-s);
  }

  :host([size='small']) .direction-column .content {
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) .direction-row .content {
    gap: var(--gds-sys-space-xs) var(--gds-sys-space-m);
  }
`;var Gl,jl,El,Bl,ql,Nl,Il,Yl,zl,Al,Tl;let Rl=class extends A.S{constructor(){super(...arguments),(0,s.VK)(this,Gl),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),(0,s.jq)(this,Gl,jl).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}focus(e){this._getValidityAnchor()?.focus(e)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{(0,s.jq)(this,Gl,jl).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid,e.errorMessage=this.errorMessage})}render(){const e={"radio-group":!0,"direction-row":"row"===this.direction,"direction-column":"column"===this.direction};return C.qy`<div
      role="radiogroup"
      id="radiogroup"
      class=${(0,m.H)(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${(0,s.jq)(this,Gl,Yl).call(this)}
    </div>`}};Gl=new WeakSet,jl=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(e=>e.checked);e?(e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(e=>!e.checked).forEach(e=>e.setAttribute("tabindex","-1"))},El=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(e=>e.checked),t=e||this.radios[0];t&&(t.focus(),e||(this.radios.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))},Bl=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{composed:!0,bubbles:!0})),this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))},ql=function(e){e.stopPropagation();const t=e.target;this.value=t.value,this._syncRadioStates(),(0,s.jq)(this,Gl,Bl).call(this)},Nl=function(e){if(!this._isConnected)return;const t=this.radios.filter(e=>!e.disabled);if(0===t.length)return;let r=t.findIndex(e=>document.activeElement===e);switch(-1===r&&(r=t.findIndex(e=>e.checked),-1===r&&(r=0)),e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault();const o=(r+1)%t.length;(0,s.jq)(this,Gl,Il).call(this,t[o]);break}case"ArrowUp":case"ArrowLeft":{e.preventDefault();const o=(r-1+t.length)%t.length;(0,s.jq)(this,Gl,Il).call(this,t[o]);break}default:return}},Il=function(e){this._contentElement&&this._isConnected&&(this.radios.forEach(e=>e.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),e.checked=!0,e.focus(),this.value=e.value,this._syncRadioStates(),(0,s.jq)(this,Gl,Bl).call(this))},Yl=function(){return[(0,s.jq)(this,Gl,zl).call(this),(0,s.jq)(this,Gl,Al).call(this),(0,s.jq)(this,Gl,Tl).call(this)].map(e=>C.qy`${e}`)},zl=function(){if(this.label)return C.qy` <gds-form-control-header
        class="size-${this.size}"
        .showExtendedSupportingText="${this.showExtendedSupportingText}"
      >
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`},Al=function(){return C.qy` <div
      class="content"
      @keydown=${(0,s.jq)(this,Gl,Nl)}
      @focus=${(0,s.jq)(this,Gl,El)}
    >
      <slot @input=${(0,s.jq)(this,Gl,ql)}></slot>
    </div>`},Tl=function(){return C.qy` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`},Rl.styles=[V.LU,$l],(0,s.Cc)([(0,M.MZ)()],Rl.prototype,"size",2),(0,s.Cc)([(0,M.MZ)()],Rl.prototype,"direction",2),(0,s.Cc)([(0,M.MZ)({attribute:"supporting-text"})],Rl.prototype,"supportingText",2),(0,s.Cc)([(0,M.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Rl.prototype,"showExtendedSupportingText",2),(0,s.Cc)([(0,M.P)(".content")],Rl.prototype,"_contentElement",2),(0,s.Cc)([(0,z.w)("value")],Rl.prototype,"_handleValueChange",1),(0,s.Cc)([(0,z.w)("invalid"),(0,z.w)("errorMessage")],Rl.prototype,"_syncRadioStates",1),Rl=(0,s.Cc)([(0,g.cc)()],Rl);let Ol=class extends((0,f.lt)((0,f.TM)((0,f.Q8)(Rl)))){};Ol=(0,s.Cc)([(0,C.Y$)("gds-radio-group",{dependsOn:[Kt.$,Dt.V]})],Ol);const Wl=e=>{Ol.define();const t=(0,n.p)("gds-radio-group"),r={...e,class:e.className};return(0,i.createElement)(t,r)},Pl=e=>{xo.define();const t=(0,n.p)("gds-segment"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Fl=class extends bl{constructor(){super(...arguments),this.hide=!1}render(){return(0,B.z)(this.hide,()=>C.qy`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};(0,s.Cc)([(0,M.MZ)({type:Boolean})],Fl.prototype,"hide",2),Fl=(0,s.Cc)([(0,C.Y$)("gds-sensitive-account",{dependsOn:[u]})],Fl);const Dl=e=>{Fl.define();const t=(0,n.p)("gds-sensitive-account"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Kl=class extends Gn{constructor(){super(...arguments),this.hide=!1}render(){return(0,B.z)(this.hide,()=>C.qy`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};(0,s.Cc)([(0,M.MZ)({type:Boolean})],Kl.prototype,"hide",2),Kl=(0,s.Cc)([(0,C.Y$)("gds-sensitive-date",{dependsOn:[u]})],Kl);const Ul=e=>{Kl.define();const t=(0,n.p)("gds-sensitive-date"),r={...e,class:e.className};return(0,i.createElement)(t,r)};bl.define(),Gn.define(),xl.define();let Jl=class extends xl{constructor(){super(...arguments),this.hide=!1}get formattedValue(){return this.hide?vs[this.format](0,this.locale,this.currency,this.decimals):super.formattedValue}render(){return(0,B.z)(this.hide,()=>C.qy`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}updated(e){super.updated(e),this.element&&(this.element.ariaLabel=super.formattedValue)}};(0,s.Cc)([(0,M.MZ)({type:Boolean})],Jl.prototype,"hide",2),Jl=(0,s.Cc)([(0,C.Y$)("gds-sensitive-number",{dependsOn:[u]})],Jl);const Ql=e=>{Jl.define();const t=(0,n.p)("gds-sensitive-number"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Xl=class extends R.M{};Xl._regularSVG='<path d="M19.25 13C14.1955 13.4375 11.4375 16.1955 11 21.25C10.544 16.1169 7.80041 13.5721 2.75 13C7.88024 12.4083 10.4083 9.88024 11 4.75C11.5721 9.80041 14.1169 12.544 19.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.7898 1.25884C19.7731 1.11151 19.6486 1.00015 19.5003 1C19.352 0.999849 19.2272 1.11096 19.2103 1.25825C19.0998 2.21602 18.8134 2.8895 18.3515 3.35146C17.8895 3.81343 17.216 4.09979 16.2582 4.21025C16.111 4.22724 15.9998 4.35203 16 4.5003C16.0002 4.64857 16.1115 4.77313 16.2588 4.78981C17.2008 4.89651 17.8886 5.18275 18.3615 5.64713C18.8327 6.10977 19.125 6.7831 19.2095 7.73414C19.2229 7.88476 19.3491 8.00017 19.5003 8C19.6515 7.99983 19.7775 7.88413 19.7906 7.73349C19.8716 6.79809 20.1636 6.11059 20.6371 5.6371C21.1106 5.16361 21.7981 4.87155 22.7335 4.79058C22.8841 4.77754 22.9998 4.65154 23 4.50033C23.0002 4.34912 22.8848 4.22286 22.7341 4.20948C21.7831 4.125 21.1098 3.83266 20.6471 3.36151C20.1827 2.88857 19.8965 2.20078 19.7898 1.25884Z" fill="currentColor"/>',Xl._solidSVG='<path d="M11.7452 4.66559C11.7023 4.28675 11.382 4.00039 11.0008 4C10.6195 3.99961 10.2986 4.28532 10.2549 4.66407C9.97088 7.12691 9.23453 8.85871 8.04662 10.0466C6.85871 11.2345 5.12691 11.9709 2.66407 12.2549C2.28532 12.2986 1.99961 12.6195 2 13.0008C2.00039 13.382 2.28675 13.7023 2.66559 13.7452C5.08772 14.0196 6.85633 14.7556 8.07245 15.9498C9.28399 17.1394 10.0357 18.8708 10.2529 21.3164C10.2873 21.7037 10.612 22.0004 11.0008 22C11.3897 21.9996 11.7137 21.7021 11.7472 21.3147C11.9554 18.9094 12.7064 17.1415 13.924 15.924C15.1415 14.7064 16.9094 13.9554 19.3147 13.7472C19.7021 13.7137 19.9996 13.3897 20 13.0008C20.0004 12.612 19.7037 12.2873 19.3164 12.2529C16.8708 12.0357 15.1394 11.284 13.9498 10.0724C12.7556 8.85633 12.0196 7.08772 11.7452 4.66559Z" fill="currentColor"/><path d="M19.7898 1.25884C19.7731 1.11151 19.6486 1.00015 19.5003 1C19.352 0.999849 19.2272 1.11096 19.2103 1.25825C19.0998 2.21602 18.8134 2.8895 18.3515 3.35146C17.8895 3.81343 17.216 4.09979 16.2582 4.21025C16.111 4.22724 15.9998 4.35203 16 4.5003C16.0002 4.64857 16.1115 4.77313 16.2588 4.78981C17.2008 4.89651 17.8886 5.18275 18.3615 5.64713C18.8327 6.10977 19.125 6.7831 19.2095 7.73414C19.2229 7.88476 19.3491 8.00017 19.5003 8C19.6515 7.99983 19.7775 7.88413 19.7906 7.73349C19.8716 6.79809 20.1636 6.11059 20.6371 5.6371C21.1106 5.16361 21.7981 4.87155 22.7335 4.79058C22.8841 4.77754 22.9998 4.65154 23 4.50033C23.0002 4.34912 22.8848 4.22286 22.7341 4.20948C21.7831 4.125 21.1098 3.83266 20.6471 3.36151C20.1827 2.88857 19.8965 2.20078 19.7898 1.25884Z" fill="currentColor"/>',Xl._name="ai",Xl._width=24,Xl._height=24,Xl._viewBox="0 0 24 24",Xl=(0,s.Cc)([(0,C.Y$)("gds-icon-ai")],Xl);const ei=e=>{Xl.define();const t=(0,n.p)("gds-icon-ai"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ti=class extends R.M{};ti._regularSVG='<path d="M4.15869 6.39304L1.75 7.28394L4.11619 10.844L3.5 12.0001L3.77183 12.6796C4.1763 13.6908 5.31551 14.1925 6.33453 13.8082L10 12.4258L10.4012 15.7701L13.2916 14.701L15.5 10.3516L20.4817 8.35636C21.0968 8.11003 21.5 7.51419 21.5 6.85165C21.5 6.06882 20.9405 5.39785 20.1704 5.25715L17.9451 4.85054C17.5854 4.78482 17.2181 4.81766 16.8764 4.94779C15.2983 5.54881 10.5415 7.35862 8.52196 8.1056C7.95008 8.31712 7.31528 8.25958 6.78927 7.94854L4.15869 6.39304Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.75 19.25H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ti._solidSVG='<path d="M18.0799 4.11251C17.5868 4.0224 17.0804 4.0673 16.6095 4.24666C15.0299 4.84827 10.2771 6.65651 8.26179 7.40193C7.90222 7.53492 7.50317 7.49913 7.17102 7.30272L4.54044 5.74721C4.34608 5.63229 4.11029 5.61104 3.89852 5.68937L1.48983 6.58027C1.27478 6.65981 1.10793 6.83335 1.0369 7.05136C0.965869 7.26937 0.998466 7.50789 1.12539 7.69885L3.24376 10.886L2.83814 11.6471C2.73417 11.8421 2.72155 12.0731 2.80365 12.2784L3.07547 12.9579C3.63163 14.3483 5.19803 15.0381 6.5992 14.5097L9.36931 13.465L9.65651 15.8592C9.68386 16.0871 9.81414 16.29 10.0101 16.4098C10.206 16.5295 10.446 16.5529 10.6613 16.4733L13.5518 15.4042C13.7289 15.3387 13.8748 15.2087 13.9603 15.0403L16.0409 10.9426L20.7606 9.05235C21.6602 8.69204 22.25 7.8205 22.25 6.8514C22.25 5.70636 21.4316 4.72493 20.3053 4.51911L18.0799 4.11251Z" fill="currentColor"/><path d="M2.75 18.4998C2.33579 18.4998 2 18.8356 2 19.2498C2 19.664 2.33579 19.9998 2.75 19.9998H21.25C21.6642 19.9998 22 19.664 22 19.2498C22 18.8356 21.6642 18.4998 21.25 18.4998H2.75Z" fill="currentColor"/>',ti._name="airplane-up",ti._width=24,ti._height=24,ti._viewBox="0 0 24 24",ti=(0,s.Cc)([(0,C.Y$)("gds-icon-airplane-up")],ti);const ri=e=>{ti.define();const t=(0,n.p)("gds-icon-airplane-up"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let oi=class extends R.M{};oi._regularSVG='<path d="M20.25 7.75H21C21 7.33579 20.6642 7 20.25 7V7.75ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM3.75 7.75V7C3.33579 7 3 7.33579 3 7.75H3.75ZM2.75 3.75V3C2.33579 3 2 3.33579 2 3.75H2.75ZM21.25 3.75H22C22 3.33579 21.6642 3 21.25 3V3.75ZM21.25 7.75V8.5C21.6642 8.5 22 8.16421 22 7.75H21.25ZM2.75 7.75H2C2 8.16421 2.33579 8.5 2.75 8.5V7.75ZM10 11C9.58579 11 9.25 11.3358 9.25 11.75C9.25 12.1642 9.58579 12.5 10 12.5V11ZM14 12.5C14.4142 12.5 14.75 12.1642 14.75 11.75C14.75 11.3358 14.4142 11 14 11V12.5ZM20.25 7.75H19.5V20.25H20.25H21V7.75H20.25ZM20.25 20.25V19.5H3.75V20.25V21H20.25V20.25ZM3.75 20.25H4.5V7.75H3.75H3V20.25H3.75ZM3.75 7.75V8.5H20.25V7.75V7H3.75V7.75ZM2.75 3.75V4.5H21.25V3.75V3H2.75V3.75ZM21.25 3.75H20.5V7.75H21.25H22V3.75H21.25ZM21.25 7.75V7H2.75V7.75V8.5H21.25V7.75ZM2.75 7.75H3.5V3.75H2.75H2V7.75H2.75ZM10 11.75V12.5H14V11.75V11H10V11.75Z" fill="currentColor"/>',oi._solidSVG='<path d="M2.75 3C2.33579 3 2 3.33579 2 3.75V6.25C2 6.66421 2.33579 7 2.75 7H21.25C21.6642 7 22 6.66421 22 6.25V3.75C22 3.33579 21.6642 3 21.25 3H2.75Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 20.25V8.5H21V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25ZM10 11C9.58579 11 9.25 11.3358 9.25 11.75C9.25 12.1642 9.58579 12.5 10 12.5H14C14.4142 12.5 14.75 12.1642 14.75 11.75C14.75 11.3358 14.4142 11 14 11H10Z" fill="currentColor"/>',oi._name="archive",oi._width=24,oi._height=24,oi._viewBox="0 0 24 24",oi=(0,s.Cc)([(0,C.Y$)("gds-icon-archive")],oi);const si=e=>{oi.define();const t=(0,n.p)("gds-icon-archive"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ni=class extends R.M{};ni._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 3C7.66421 3 8 3.33579 8 3.75V18.4393L10.7197 15.7197C11.0126 15.4268 11.4874 15.4268 11.7803 15.7197C12.0732 16.0126 12.0732 16.4874 11.7803 16.7803L7.78033 20.7803C7.48744 21.0732 7.01256 21.0732 6.71967 20.7803L2.71967 16.7803C2.42678 16.4874 2.42678 16.0126 2.71967 15.7197C3.01256 15.4268 3.48744 15.4268 3.78033 15.7197L6.5 18.4393V3.75C6.5 3.33579 6.83579 3 7.25 3ZM16.2197 3.21967C16.5126 2.92678 16.9874 2.92678 17.2803 3.21967L21.2803 7.21967C21.5732 7.51256 21.5732 7.98744 21.2803 8.28033C20.9874 8.57322 20.5126 8.57322 20.2197 8.28033L17.5 5.56066V20.25C17.5 20.6642 17.1642 21 16.75 21C16.3358 21 16 20.6642 16 20.25V5.56066L13.2803 8.28033C12.9874 8.57322 12.5126 8.57322 12.2197 8.28033C11.9268 7.98744 11.9268 7.51256 12.2197 7.21967L16.2197 3.21967Z" fill="currentColor"/>',ni._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 3C7.66421 3 8 3.33579 8 3.75V18.4393L10.7197 15.7197C11.0126 15.4268 11.4874 15.4268 11.7803 15.7197C12.0732 16.0126 12.0732 16.4874 11.7803 16.7803L7.78033 20.7803C7.48744 21.0732 7.01256 21.0732 6.71967 20.7803L2.71967 16.7803C2.42678 16.4874 2.42678 16.0126 2.71967 15.7197C3.01256 15.4268 3.48744 15.4268 3.78033 15.7197L6.5 18.4393V3.75C6.5 3.33579 6.83579 3 7.25 3ZM16.2197 3.21967C16.5126 2.92678 16.9874 2.92678 17.2803 3.21967L21.2803 7.21967C21.5732 7.51256 21.5732 7.98744 21.2803 8.28033C20.9874 8.57322 20.5126 8.57322 20.2197 8.28033L17.5 5.56066V20.25C17.5 20.6642 17.1642 21 16.75 21C16.3358 21 16 20.6642 16 20.25V5.56066L13.2803 8.28033C12.9874 8.57322 12.5126 8.57322 12.2197 8.28033C11.9268 7.98744 11.9268 7.51256 12.2197 7.21967L16.2197 3.21967Z" fill="currentColor"/>',ni._name="arrow-bottom-top",ni._width=24,ni._height=24,ni._viewBox="0 0 24 24",ni=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-bottom-top")],ni);const li=e=>{ni.define();const t=(0,n.p)("gds-icon-arrow-bottom-top"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ii=class extends R.M{};ii._regularSVG='<path d="M20.25 12L9 12M20.25 12L15.75 16.5M20.25 12L15.75 7.5M11.25 20.25H3.75L3.75 3.75L11.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ii._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3L11.25 3C11.6642 3 12 3.33579 12 3.75C12 4.16421 11.6642 4.5 11.25 4.5L4.5 4.5L4.5 19.5H11.25C11.6642 19.5 12 19.8358 12 20.25C12 20.6642 11.6642 21 11.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25L3 3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967ZM15.2197 6.96967C15.5126 6.67678 15.9874 6.67678 16.2803 6.96967L20.7803 11.4697C21.0732 11.7626 21.0732 12.2374 20.7803 12.5303L16.2803 17.0303C15.9874 17.3232 15.5126 17.3232 15.2197 17.0303C14.9268 16.7374 14.9268 16.2626 15.2197 15.9697L18.4393 12.75L9 12.75C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25L18.4393 11.25L15.2197 8.03033C14.9268 7.73744 14.9268 7.26256 15.2197 6.96967Z" fill="currentColor"/>',ii._name="arrow-box-left",ii._width=24,ii._height=24,ii._viewBox="0 0 24 24",ii=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-box-left")],ii);const ai=e=>{ii.define();const t=(0,n.p)("gds-icon-arrow-box-left"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ci=class extends R.M{};ci._regularSVG='<path d="M14.75 3.75L20.25 3.75V20.25H14.75M15 12L3.75 12M15 12L11.5 15.5M15 12L11.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ci._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 4.5L14.75 4.5C14.3358 4.5 14 4.16421 14 3.75C14 3.33579 14.3358 3 14.75 3L20.25 3C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H14.75C14.3358 21 14 20.6642 14 20.25C14 19.8358 14.3358 19.5 14.75 19.5H19.5V4.5ZM10.9697 7.96967C11.2626 7.67678 11.7374 7.67678 12.0303 7.96967L15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303L12.0303 16.0303C11.7374 16.3232 11.2626 16.3232 10.9697 16.0303C10.6768 15.7374 10.6768 15.2626 10.9697 14.9697L13.1893 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25L13.1893 11.25L10.9697 9.03033C10.6768 8.73744 10.6768 8.26257 10.9697 7.96967Z" fill="currentColor"/>',ci._name="arrow-box-right",ci._width=24,ci._height=24,ci._viewBox="0 0 24 24",ci=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-box-right")],ci);const Ci=e=>{ci.define();const t=(0,n.p)("gds-icon-arrow-box-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let di=class extends R.M{};di._regularSVG='<path d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',di._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C11.6685 21 11.3506 20.8683 11.1161 20.6339L5.36612 14.8839C4.87796 14.3957 4.87796 13.6043 5.36612 13.1161C5.85427 12.628 6.64573 12.628 7.13388 13.1161L10.75 16.7322V4.25C10.75 3.55964 11.3097 3 12 3C12.6904 3 13.25 3.55964 13.25 4.25V16.7322L16.8661 13.1161C17.3543 12.628 18.1457 12.628 18.6339 13.1161C19.122 13.6043 19.122 14.3957 18.6339 14.8839L12.8839 20.6339C12.6495 20.8683 12.3315 21 12 21Z" fill="currentColor"/>',di._name="arrow-down",di._width=24,di._height=24,di._viewBox="0 0 24 24",di=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-down")],di);const hi=e=>{di.define();const t=(0,n.p)("gds-icon-arrow-down"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ui=class extends R.M{};ui._regularSVG='<path d="M20.25 14.75V20.25H3.75V14.75M12 15V3.75M12 15L8.5 11.5M12 15L15.5 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ui._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 14C4.16421 14 4.5 14.3358 4.5 14.75V19.5H19.5V14.75C19.5 14.3358 19.8358 14 20.25 14C20.6642 14 21 14.3358 21 14.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V14.75C3 14.3358 3.33579 14 3.75 14Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.75C12.1989 15.75 12.3897 15.671 12.5303 15.5303L16.0303 12.0303C16.3232 11.7374 16.3232 11.2626 16.0303 10.9697C15.7374 10.6768 15.2626 10.6768 14.9697 10.9697L12.75 13.1893V3.75C12.75 3.33579 12.4142 3 12 3C11.5858 3 11.25 3.33579 11.25 3.75V13.1893L9.03033 10.9697C8.73744 10.6768 8.26256 10.6768 7.96967 10.9697C7.67678 11.2626 7.67678 11.7374 7.96967 12.0303L11.4697 15.5303C11.6103 15.671 11.8011 15.75 12 15.75Z" fill="currentColor"/>',ui._name="arrow-inbox",ui._width=24,ui._height=24,ui._viewBox="0 0 24 24",ui=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-inbox")],ui);const pi=e=>{ui.define();const t=(0,n.p)("gds-icon-arrow-inbox"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let gi=class extends R.M{};gi._regularSVG='<path d="M7.75 20.75L3.75 16.75L7.75 12.75M16.25 11.25L20.25 7.25L16.25 3.25M5 16.75H20.25M3.75 7.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',gi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7197 2.71967C16.0126 2.42678 16.4874 2.42678 16.7803 2.71967L20.7803 6.71967C21.0732 7.01256 21.0732 7.48744 20.7803 7.78033L16.7803 11.7803C16.4874 12.0732 16.0126 12.0732 15.7197 11.7803C15.4268 11.4874 15.4268 11.0126 15.7197 10.7197L18.4393 8H3.75C3.33579 8 3 7.66421 3 7.25C3 6.83579 3.33579 6.5 3.75 6.5H18.4393L15.7197 3.78033C15.4268 3.48744 15.4268 3.01256 15.7197 2.71967ZM8.28033 12.2197C8.57322 12.5126 8.57322 12.9874 8.28033 13.2803L5.56066 16H20.25C20.6642 16 21 16.3358 21 16.75C21 17.1642 20.6642 17.5 20.25 17.5H5.56066L8.28033 20.2197C8.57322 20.5126 8.57322 20.9874 8.28033 21.2803C7.98744 21.5732 7.51256 21.5732 7.21967 21.2803L3.21967 17.2803C2.92678 16.9874 2.92678 16.5126 3.21967 16.2197L7.21967 12.2197C7.51256 11.9268 7.98744 11.9268 8.28033 12.2197Z" fill="currentColor"/>',gi._name="arrow-left-right",gi._width=24,gi._height=24,gi._viewBox="0 0 24 24",gi=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-left-right")],gi);const Mi=e=>{gi.define();const t=(0,n.p)("gds-icon-arrow-left-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var mi=r(2660);const Vi=e=>{mi.G.define();const t=(0,n.p)("gds-icon-arrow-left"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let fi=class extends R.M{};fi._regularSVG='<path d="M12 3.75V15M12 3.75L16.5 8.25M12 3.75L7.5 8.25M20.25 12.75V20.25H3.75V12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',fi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967L17.0303 7.71967C17.3232 8.01256 17.3232 8.48744 17.0303 8.78033C16.7374 9.07322 16.2626 9.07322 15.9697 8.78033L12.75 5.56066V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V5.56066L8.03033 8.78033C7.73744 9.07322 7.26256 9.07322 6.96967 8.78033C6.67678 8.48744 6.67678 8.01256 6.96967 7.71967L11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12C4.16421 12 4.5 12.3358 4.5 12.75V19.5H19.5V12.75C19.5 12.3358 19.8358 12 20.25 12C20.6642 12 21 12.3358 21 12.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V12.75C3 12.3358 3.33579 12 3.75 12Z" fill="currentColor"/>',fi._name="arrow-out-of-box",fi._width=24,fi._height=24,fi._viewBox="0 0 24 24",fi=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-out-of-box")],fi);const Li=e=>{fi.define();const t=(0,n.p)("gds-icon-arrow-out-of-box"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let _i=class extends R.M{};_i._regularSVG='<path d="M13 8.75L16.25 12L13 15.25M7.75 12H15.5M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',_i._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.5303 8.21967L16.7803 11.4697C17.0732 11.7626 17.0732 12.2374 16.7803 12.5303L13.5303 15.7803C13.2374 16.0732 12.7626 16.0732 12.4697 15.7803C12.1768 15.4874 12.1768 15.0126 12.4697 14.7197L14.4393 12.75H7.75C7.33579 12.75 7 12.4142 7 12C7 11.5858 7.33579 11.25 7.75 11.25H14.4393L12.4697 9.28033C12.1768 8.98744 12.1768 8.51256 12.4697 8.21967C12.7626 7.92678 13.2374 7.92678 13.5303 8.21967Z" fill="currentColor"/>',_i._name="arrow-right-circle",_i._width=24,_i._height=24,_i._viewBox="0 0 24 24",_i=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-right-circle")],_i);const Hi=e=>{_i.define();const t=(0,n.p)("gds-icon-arrow-right-circle"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let vi=class extends R.M{};vi._regularSVG='<path d="M8.75 8.75L14.5694 14.5694M15.25 9.75V15.25H9.75M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',vi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 15.25C16 15.6642 15.6642 16 15.25 16H9.75C9.33579 16 9 15.6642 9 15.25C9 14.8358 9.33579 14.5 9.75 14.5H13.4393L8.21967 9.28033C7.92678 8.98744 7.92678 8.51256 8.21967 8.21967C8.51256 7.92678 8.98744 7.92678 9.28033 8.21967L14.5 13.4393V9.75C14.5 9.33579 14.8358 9 15.25 9C15.6642 9 16 9.33579 16 9.75V15.25Z" fill="currentColor"/>',vi._name="arrow-right-down-circle",vi._width=24,vi._height=24,vi._viewBox="0 0 24 24",vi=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-right-down-circle")],vi);const ki=e=>{vi.define();const t=(0,n.p)("gds-icon-arrow-right-down-circle"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let wi=class extends R.M{};wi._regularSVG='<path d="M8.75 15.25L14.5694 9.43056M15.25 14.25V8.75H9.75M21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',wi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM16 8.75C16 8.33579 15.6642 8 15.25 8H9.75C9.33579 8 9 8.33579 9 8.75C9 9.16421 9.33579 9.5 9.75 9.5H13.4393L8.21967 14.7197C7.92678 15.0126 7.92678 15.4874 8.21967 15.7803C8.51256 16.0732 8.98744 16.0732 9.28033 15.7803L14.5 10.5607V14.25C14.5 14.6642 14.8358 15 15.25 15C15.6642 15 16 14.6642 16 14.25V8.75Z" fill="currentColor"/>',wi._name="arrow-right-up-circle",wi._width=24,wi._height=24,wi._viewBox="0 0 24 24",wi=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-right-up-circle")],wi);const bi=e=>{wi.define();const t=(0,n.p)("gds-icon-arrow-right-up-circle"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Zi=class extends R.M{};Zi._regularSVG='<path d="M14 5.75L20.25 12L14 18.25M19.5 12H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Zi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1161 5.36612C13.6043 4.87796 14.3957 4.87796 14.8839 5.36612L20.6339 11.1161C20.8683 11.3505 21 11.6685 21 12C21 12.3315 20.8683 12.6494 20.6339 12.8839L14.8839 18.6339C14.3957 19.122 13.6043 19.122 13.1161 18.6339C12.628 18.1457 12.628 17.3543 13.1161 16.8661L16.7322 13.25H4.25C3.55964 13.25 3 12.6903 3 12C3 11.3096 3.55964 10.75 4.25 10.75H16.7322L13.1161 7.13388C12.628 6.64573 12.628 5.85427 13.1161 5.36612Z" fill="currentColor"/>',Zi._name="arrow-right",Zi._width=24,Zi._height=24,Zi._viewBox="0 0 24 24",Zi=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-right")],Zi);const yi=e=>{Zi.define();const t=(0,n.p)("gds-icon-arrow-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let xi=class extends R.M{};xi._regularSVG='<path d="M19.7596 14.75C18.627 17.9543 15.5711 20.25 11.979 20.25C7.42266 20.25 3.729 16.5563 3.729 12C3.729 7.44365 7.42266 3.75 11.979 3.75C14.7962 3.75 16.6791 4.95438 18.5 7.00891M19.25 4V8H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',xi._solidSVG='<path d="M4.47852 12C4.47852 7.85786 7.83638 4.5 11.9785 4.5C13.4412 4.5 14.601 4.85088 15.634 5.4849C16.3541 5.92693 17.0281 6.51595 17.7063 7.25H15.25C14.8358 7.25 14.5 7.58579 14.5 8C14.5 8.41421 14.8358 8.75 15.25 8.75H19.25C19.6642 8.75 20 8.41421 20 8V4C20 3.58579 19.6642 3.25 19.25 3.25C18.8358 3.25 18.5 3.58579 18.5 4V5.90758C17.8486 5.24074 17.166 4.66521 16.4186 4.20651C15.1414 3.42256 13.7085 3 11.9785 3C7.00795 3 2.97852 7.02944 2.97852 12C2.97852 16.9706 7.00795 21 11.9785 21C15.8983 21 19.2311 18.4945 20.4662 14.9999C20.6042 14.6094 20.3995 14.1809 20.009 14.0429C19.6185 13.9048 19.19 14.1095 19.0519 14.5001C18.022 17.4141 15.2429 19.5 11.9785 19.5C7.83638 19.5 4.47852 16.1421 4.47852 12Z" fill="currentColor"/>',xi._name="arrow-rotate-clockwise",xi._width=24,xi._height=24,xi._viewBox="0 0 24 24",xi=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-rotate-clockwise")],xi);const Si=e=>{xi.define();const t=(0,n.p)("gds-icon-arrow-rotate-clockwise"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let $i=class extends R.M{};$i._regularSVG='<path d="M4.24023 14.75C5.37278 17.9543 8.42869 20.25 12.0208 20.25C16.5771 20.25 20.2708 16.5563 20.2708 12C20.2708 7.44365 16.5771 3.75 12.0208 3.75C8.82811 3.75 6.83534 5.29688 4.77284 7.875M4.7498 4V8H8.7498" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',$i._solidSVG='<path d="M19.5215 12C19.5215 7.85786 16.1636 4.5 12.0215 4.5C10.5588 4.5 9.39898 4.85088 8.36602 5.4849C7.64586 5.92693 6.97194 6.51595 6.29372 7.25H8.75C9.16422 7.25 9.5 7.58579 9.5 8C9.5 8.41421 9.16422 8.75 8.75 8.75H4.75C4.33579 8.75 4 8.41421 4 8V4C4 3.58579 4.33579 3.25 4.75 3.25C5.16422 3.25 5.5 3.58579 5.5 4V5.90758C6.15142 5.24074 6.83402 4.66521 7.58136 4.20651C8.85858 3.42256 10.2915 3 12.0215 3C16.9921 3 21.0215 7.02944 21.0215 12C21.0215 16.9706 16.9921 21 12.0215 21C8.10166 21 4.76895 18.4945 3.5338 14.9999C3.39576 14.6094 3.60046 14.1809 3.99099 14.0429C4.38153 13.9048 4.81002 14.1095 4.94806 14.5001C5.97801 17.4141 8.75711 19.5 12.0215 19.5C16.1636 19.5 19.5215 16.1421 19.5215 12Z" fill="currentColor"/>',$i._name="arrow-rotate-counter-clockwise",$i._width=24,$i._height=24,$i._viewBox="0 0 24 24",$i=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-rotate-counter-clockwise")],$i);const Gi=e=>{$i.define();const t=(0,n.p)("gds-icon-arrow-rotate-counter-clockwise"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ji=class extends R.M{};ji._regularSVG='<path d="M19.2618 20.25V16.25H15.2618M4.75 3.75V7.75H8.75M3.81383 10.9688C3.7717 11.3066 3.75 11.6508 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C14.6766 20.25 17.1111 18.9754 18.6322 17M20.1862 13.0312C20.2283 12.6934 20.25 12.3492 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C9.32342 3.75 6.88887 5.02463 5.36784 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ji._solidSVG='<path d="M6.3448 7C7.73561 5.46681 9.77612 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 12.3181 19.4802 12.6313 19.4419 12.9384C19.3907 13.3495 19.6823 13.7242 20.0934 13.7755C20.5044 13.8267 20.8792 13.5351 20.9304 13.1241C20.9764 12.7555 21 12.3803 21 12C21 7.02944 16.9706 3 12 3C9.4791 3 7.1554 4.03743 5.5 5.71122V3.75C5.5 3.33579 5.16421 3 4.75 3C4.33579 3 4 3.33579 4 3.75V7.75C4 8.16421 4.33579 8.5 4.75 8.5H8.75C9.16421 8.5 9.5 8.16421 9.5 7.75C9.5 7.33579 9.16421 7 8.75 7H6.3448Z" fill="currentColor"/><path d="M4.55806 11.0616C4.60932 10.6505 4.31766 10.2758 3.90663 10.2245C3.4956 10.1733 3.12085 10.4649 3.06959 10.8759C3.02364 11.2445 3 11.6197 3 12C3 16.9706 7.02944 21 12 21C14.5269 21 16.8557 19.9576 18.5118 18.2768V20.25C18.5118 20.6642 18.8476 21 19.2618 21C19.6761 21 20.0118 20.6642 20.0118 20.25V16.25C20.0118 15.8358 19.6761 15.5 19.2618 15.5H15.2618C14.8476 15.5 14.5118 15.8358 14.5118 16.25C14.5118 16.6642 14.8476 17 15.2618 17H17.6552C16.2644 18.5332 14.2239 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 11.6819 4.51977 11.3687 4.55806 11.0616Z" fill="currentColor"/>',ji._name="arrow-rotate-left-right",ji._width=24,ji._height=24,ji._viewBox="0 0 24 24",ji=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-rotate-left-right")],ji);const Ei=e=>{ji.define();const t=(0,n.p)("gds-icon-arrow-rotate-left-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Bi=class extends R.M{};Bi._regularSVG='<path d="M19.2618 3.75V7.75H15.2618M4.75 20.25V16.25H8.75M3.81383 13.0312C3.7717 12.6934 3.75 12.3492 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C14.6766 3.75 17.1111 5.02463 18.6322 7M20.1862 10.9688C20.2283 11.3066 20.25 11.6508 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C9.32342 20.25 6.88887 18.9754 5.36784 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Bi._solidSVG='<path d="M6.3448 17C7.73561 18.5332 9.77612 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 11.6819 19.4802 11.3687 19.4419 11.0616C19.3907 10.6505 19.6823 10.2758 20.0934 10.2245C20.5044 10.1733 20.8792 10.4649 20.9304 10.8759C20.9764 11.2445 21 11.6197 21 12C21 16.9706 16.9706 21 12 21C9.4791 21 7.1554 19.9626 5.5 18.2888V20.25C5.5 20.6642 5.16421 21 4.75 21C4.33579 21 4 20.6642 4 20.25V16.25C4 15.8358 4.33579 15.5 4.75 15.5H8.75C9.16421 15.5 9.5 15.8358 9.5 16.25C9.5 16.6642 9.16421 17 8.75 17H6.3448Z" fill="currentColor"/><path d="M4.55806 12.9384C4.60932 13.3495 4.31766 13.7242 3.90663 13.7755C3.4956 13.8267 3.12085 13.5351 3.06959 13.1241C3.02364 12.7555 3 12.3803 3 12C3 7.02944 7.02944 3 12 3C14.5269 3 16.8557 4.04238 18.5118 5.72322V3.75C18.5118 3.33579 18.8476 3 19.2618 3C19.6761 3 20.0118 3.33579 20.0118 3.75V7.75C20.0118 8.16421 19.6761 8.5 19.2618 8.5H15.2618C14.8476 8.5 14.5118 8.16421 14.5118 7.75C14.5118 7.33579 14.8476 7 15.2618 7H17.6552C16.2644 5.46681 14.2239 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 12.3181 4.51977 12.6313 4.55806 12.9384Z" fill="currentColor"/>',Bi._name="arrow-rotate-right-left",Bi._width=24,Bi._height=24,Bi._viewBox="0 0 24 24",Bi=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-rotate-right-left")],Bi);const qi=e=>{Bi.define();const t=(0,n.p)("gds-icon-arrow-rotate-right-left"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ni=class extends R.M{};Ni._regularSVG='<path d="M2.75 12L12.25 3.75V8.5C20.75 8.5 23 11.75 23 20.25C21.5 17.25 20.75 15.5 12.25 15.5V20.25L2.75 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',Ni._solidSVG='<path d="M12 3.75001C12 3.45624 11.8285 3.18951 11.5612 3.06762C11.2939 2.94572 10.98 2.99111 10.7582 3.18374L1.25824 11.4337C1.0942 11.5762 1 11.7828 1 12C1 12.2173 1.0942 12.4238 1.25824 12.5663L10.7582 20.8163C10.98 21.0089 11.2939 21.0543 11.5612 20.9324C11.8285 20.8105 12 20.5438 12 20.25V16.2549C15.7435 16.305 17.7023 16.7368 18.881 17.4029C20.0758 18.0783 20.5524 19.0318 21.3053 20.5376L21.3292 20.5854C21.4847 20.8965 21.8338 21.0599 22.1723 20.9799C22.5108 20.9 22.75 20.5978 22.75 20.25C22.75 15.9846 22.198 12.7949 20.3793 10.6963C18.6425 8.69239 15.9068 7.8511 12 7.75867V3.75001Z" fill="currentColor"/>',Ni._name="arrow-share-left",Ni._width=25,Ni._height=24,Ni._viewBox="0 0 25 24",Ni=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-share-left")],Ni);const Ii=e=>{Ni.define();const t=(0,n.p)("gds-icon-arrow-share-left"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Yi=class extends R.M{};Yi._regularSVG='<path d="M22 12L12.5 3.75V8.5C4 8.5 1.75 11.75 1.75 20.25C3.25 17.25 4 15.5 12.5 15.5V20.25L22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',Yi._solidSVG='<path d="M11.75 3.75001C11.75 3.45624 11.9215 3.18951 12.1888 3.06762C12.4561 2.94572 12.77 2.99111 12.9918 3.18374L22.4918 11.4337C22.6558 11.5762 22.75 11.7828 22.75 12C22.75 12.2173 22.6558 12.4238 22.4918 12.5663L12.9918 20.8163C12.77 21.0089 12.4561 21.0543 12.1888 20.9324C11.9215 20.8105 11.75 20.5438 11.75 20.25V16.2549C8.0065 16.305 6.04766 16.7368 4.86904 17.4029C3.67425 18.0783 3.19755 19.0318 2.44475 20.5376L2.42082 20.5854C2.26526 20.8965 1.91621 21.0599 1.57768 20.9799C1.23916 20.9 1 20.5978 1 20.25C1 15.9846 1.55196 12.7949 3.37073 10.6963C5.10747 8.69239 7.84317 7.8511 11.75 7.75867V3.75001Z" fill="currentColor"/>',Yi._name="arrow-share-right",Yi._width=24,Yi._height=24,Yi._viewBox="0 0 24 24",Yi=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-share-right")],Yi);const zi=e=>{Yi.define();const t=(0,n.p)("gds-icon-arrow-share-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ai=class extends R.M{};Ai._regularSVG='<path d="M3.75 9.25V3.75M3.75 3.75H9.25M3.75 3.75L12 12M14.75 3.75H20.25M20.25 3.75V9.25M20.25 3.75L12 12M12 12V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ai._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H9.25C9.66421 3 10 3.33579 10 3.75C10 4.16421 9.66421 4.5 9.25 4.5H5.56066L12 10.9393L18.4393 4.5H14.75C14.3358 4.5 14 4.16421 14 3.75C14 3.33579 14.3358 3 14.75 3H20.25C20.6642 3 21 3.33579 21 3.75V9.25C21 9.66421 20.6642 10 20.25 10C19.8358 10 19.5 9.66421 19.5 9.25V5.56066L12.75 12.3107V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.3107L4.5 5.56066V9.25C4.5 9.66421 4.16421 10 3.75 10C3.33579 10 3 9.66421 3 9.25V3.75Z" fill="currentColor"/>',Ai._name="arrow-split",Ai._width=24,Ai._height=24,Ai._viewBox="0 0 24 24",Ai=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-split")],Ai);const Ti=e=>{Ai.define();const t=(0,n.p)("gds-icon-arrow-split"),r={...e,class:e.className};return(0,i.createElement)(t,r)},Ri=e=>{ht.define();const t=(0,n.p)("gds-icon-arrow-up"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Oi=class extends R.M{};Oi._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.4142 2 12.75 2.33579 12.75 2.75V15.4393L15.7197 12.4697C16.0126 12.1768 16.4874 12.1768 16.7803 12.4697C17.0732 12.7626 17.0732 13.2374 16.7803 13.5303L12.5303 17.7803C12.3897 17.921 12.1989 18 12 18C11.8011 18 11.6103 17.921 11.4697 17.7803L7.21967 13.5303C6.92678 13.2374 6.92678 12.7626 7.21967 12.4697C7.51256 12.1768 7.98743 12.1768 8.28033 12.4697L11.25 15.4393V2.75C11.25 2.33579 11.5858 2 12 2ZM4 21.25C4 20.8358 4.33579 20.5 4.75 20.5H19.25C19.6642 20.5 20 20.8358 20 21.25C20 21.6642 19.6642 22 19.25 22H4.75C4.33579 22 4 21.6642 4 21.25Z" fill="currentColor"/>',Oi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.4142 2 12.75 2.33579 12.75 2.75V15.4393L15.7197 12.4697C16.0126 12.1768 16.4874 12.1768 16.7803 12.4697C17.0732 12.7626 17.0732 13.2374 16.7803 13.5303L12.5303 17.7803C12.3897 17.921 12.1989 18 12 18C11.8011 18 11.6103 17.921 11.4697 17.7803L7.21967 13.5303C6.92678 13.2374 6.92678 12.7626 7.21967 12.4697C7.51256 12.1768 7.98743 12.1768 8.28033 12.4697L11.25 15.4393V2.75C11.25 2.33579 11.5858 2 12 2ZM4 21.25C4 20.8358 4.33579 20.5 4.75 20.5H19.25C19.6642 20.5 20 20.8358 20 21.25C20 21.6642 19.6642 22 19.25 22H4.75C4.33579 22 4 21.6642 4 21.25Z" fill="currentColor"/>',Oi._name="arrow-wall-down",Oi._width=24,Oi._height=24,Oi._viewBox="0 0 24 24",Oi=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-wall-down")],Oi);const Wi=e=>{Oi.define();const t=(0,n.p)("gds-icon-arrow-wall-down"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Pi=class extends R.M{};Pi._regularSVG='<path d="M11 7.75L6.75 12M6.75 12L11 16.25M6.75 12H21.25M2.75 4.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Pi._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V19.25C3.5 19.6642 3.16421 20 2.75 20C2.33579 20 2 19.6642 2 19.25V4.75C2 4.33579 2.33579 4 2.75 4ZM11.5303 7.21967C11.8232 7.51256 11.8232 7.98744 11.5303 8.28033L8.56067 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H8.56065L11.5303 15.7197C11.8232 16.0126 11.8232 16.4874 11.5303 16.7803C11.2374 17.0732 10.7626 17.0732 10.4697 16.7803L6.21967 12.5303C6.07902 12.3897 6 12.1989 6 12C6 11.8011 6.07902 11.6103 6.21967 11.4697L10.4697 7.21967C10.7626 6.92678 11.2374 6.92678 11.5303 7.21967Z" fill="currentColor"/>',Pi._name="arrow-wall-left",Pi._width=24,Pi._height=24,Pi._viewBox="0 0 24 24",Pi=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-wall-left")],Pi);const Fi=e=>{Pi.define();const t=(0,n.p)("gds-icon-arrow-wall-left"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Di=class extends R.M{};Di._regularSVG='<path d="M13 7.75L17.25 12M17.25 12L13 16.25M17.25 12H2.75M21.25 4.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Di._solidSVG='<path d="M22 4.75C22 4.33579 21.6642 4 21.25 4C20.8358 4 20.5 4.33579 20.5 4.75V19.25C20.5 19.6642 20.8358 20 21.25 20C21.6642 20 22 19.6642 22 19.25V4.75Z" fill="currentColor"/><path d="M13.5303 7.21967C13.2374 6.92678 12.7626 6.92678 12.4697 7.21967C12.1768 7.51256 12.1768 7.98744 12.4697 8.28033L15.4393 11.25H2.75C2.33579 11.25 2 11.5858 2 12C2 12.4142 2.33579 12.75 2.75 12.75H15.4393L12.4697 15.7197C12.1768 16.0126 12.1768 16.4874 12.4697 16.7803C12.7626 17.0732 13.2374 17.0732 13.5303 16.7803L17.7803 12.5303C17.921 12.3897 18 12.1989 18 12C18 11.8011 17.921 11.6103 17.7803 11.4697L13.5303 7.21967Z" fill="currentColor"/>',Di._name="arrow-wall-right",Di._width=24,Di._height=24,Di._viewBox="0 0 24 24",Di=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-wall-right")],Di);const Ki=e=>{Di.define();const t=(0,n.p)("gds-icon-arrow-wall-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ui=class extends R.M{};Ui._regularSVG='<path d="M16.25 11L12 6.75M12 6.75L7.75 11M12 6.75V21.25M19.25 2.75H4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ui._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75C20 3.16421 19.6642 3.5 19.25 3.5H4.75C4.33579 3.5 4 3.16421 4 2.75ZM12 6C12.1989 6 12.3897 6.07902 12.5303 6.21967L16.7803 10.4697C17.0732 10.7626 17.0732 11.2374 16.7803 11.5303C16.4874 11.8232 16.0126 11.8232 15.7197 11.5303L12.75 8.56067V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V8.56065L8.28033 11.5303C7.98743 11.8232 7.51256 11.8232 7.21967 11.5303C6.92678 11.2374 6.92678 10.7626 7.21967 10.4697L11.4697 6.21967C11.6103 6.07902 11.8011 6 12 6Z" fill="currentColor"/>',Ui._name="arrow-wall-up",Ui._width=24,Ui._height=24,Ui._viewBox="0 0 24 24",Ui=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow-wall-up")],Ui);const Ji=e=>{Ui.define();const t=(0,n.p)("gds-icon-arrow-wall-up"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Qi=class extends R.M{};Qi._regularSVG='<path d="M13 21C13.5523 21 14 20.5523 14 20C14 19.4477 13.5523 19 13 19C12.4477 19 12 19.4477 12 20C12 20.5523 12.4477 21 13 21Z" fill="currentColor"/><path d="M21 11C21 10.4477 20.5523 9.99999 20 9.99999C19.4477 9.99999 19 10.4477 19 11C19 11.5523 19.4477 12 20 12C20.5523 12 21 11.5523 21 11Z" fill="currentColor"/><path d="M19.9295 14.2679C20.4078 14.5441 20.5716 15.1557 20.2955 15.634C20.0193 16.1123 19.4078 16.2761 18.9295 16C18.4512 15.7238 18.2873 15.1123 18.5634 14.634C18.8396 14.1557 19.4512 13.9918 19.9295 14.2679Z" fill="currentColor"/><path d="M17.3676 19.2942C17.8459 19.0181 18.0098 18.4065 17.7336 17.9282C17.4575 17.4499 16.8459 17.286 16.3676 17.5621C15.8893 17.8383 15.7254 18.4499 16.0016 18.9282C16.2777 19.4065 16.8893 19.5703 17.3676 19.2942Z" fill="currentColor"/><path d="M18.9269 7.99998C18.4487 8.27612 17.8371 8.11225 17.5609 7.63396C17.2848 7.15566 17.4487 6.54407 17.9269 6.26793C18.4052 5.99179 19.0168 6.15566 19.293 6.63396C19.5691 7.11225 19.4052 7.72384 18.9269 7.99998Z" fill="currentColor"/><path d="M9.25 14.75V20.25H3.75M9 19.6876C5.92698 18.4875 3.75 15.498 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C13.1537 3.75 14.2521 3.98683 15.2493 4.41452" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Qi._solidSVG='<path d="M13 21C13.5523 21 14 20.5523 14 20C14 19.4477 13.5523 19 13 19C12.4477 19 12 19.4477 12 20C12 20.5523 12.4477 21 13 21Z" fill="currentColor"/><path d="M21 11C21 10.4477 20.5523 9.99999 20 9.99999C19.4477 9.99999 19 10.4477 19 11C19 11.5523 19.4477 12 20 12C20.5523 12 21 11.5523 21 11Z" fill="currentColor"/><path d="M19.9295 14.2679C20.4078 14.5441 20.5716 15.1557 20.2955 15.634C20.0193 16.1123 19.4078 16.2761 18.9295 16C18.4512 15.7238 18.2873 15.1123 18.5634 14.634C18.8396 14.1557 19.4512 13.9918 19.9295 14.2679Z" fill="currentColor"/><path d="M17.3676 19.2942C17.8459 19.0181 18.0098 18.4065 17.7336 17.9282C17.4575 17.4499 16.8459 17.286 16.3676 17.5621C15.8893 17.8383 15.7254 18.4499 16.0016 18.9282C16.2777 19.4065 16.8893 19.5703 17.3676 19.2942Z" fill="currentColor"/><path d="M18.9269 7.99998C18.4487 8.27612 17.8371 8.11225 17.5609 7.63396C17.2848 7.15566 17.4487 6.54407 17.9269 6.26793C18.4052 5.99179 19.0168 6.15566 19.293 6.63396C19.5691 7.11225 19.4052 7.72384 18.9269 7.99998Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 14.8771 6.12022 17.3772 8.5 18.6352V14.75C8.5 14.3358 8.83579 14 9.25 14C9.66421 14 10 14.3358 10 14.75V20.25C10 20.6642 9.66421 21 9.25 21H3.75C3.33579 21 3 20.6642 3 20.25C3 19.8358 3.33579 19.5 3.75 19.5H7.02362C4.59903 17.8881 3 15.1314 3 12C3 7.02944 7.02944 3 12 3C13.2572 3 14.4561 3.25823 15.5449 3.72524C15.9256 3.88852 16.1018 4.32948 15.9386 4.71016C15.7753 5.09083 15.3343 5.26707 14.9536 5.10379C14.0482 4.71543 13.0502 4.5 12 4.5Z" fill="currentColor"/>',Qi._name="arrow",Qi._width=24,Qi._height=24,Qi._viewBox="0 0 24 24",Qi=(0,s.Cc)([(0,C.Y$)("gds-icon-arrow")],Qi);const Xi=e=>{Qi.define();const t=(0,n.p)("gds-icon-arrow"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ea=class extends R.M{};ea._regularSVG='<path d="M3.75 13.25V4.75H15.1071M12.6457 1.75L15.7529 4.75L12.6457 7.75M20.25 10.75V19.25H8.89286M11.3543 22.25L8.24714 19.25L11.3543 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ea._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1062 1.22905C12.3939 0.931069 12.8687 0.922739 13.1667 1.21045L16.2738 4.21045C16.4202 4.35178 16.5029 4.54653 16.5029 4.75C16.5029 4.95348 16.4202 5.14822 16.2738 5.28955L13.1667 8.28955C12.8687 8.57726 12.3939 8.56893 12.1062 8.27095C11.8185 7.97296 11.8268 7.49816 12.1248 7.21045L13.8963 5.5H4.5V13.25C4.5 13.6642 4.16421 14 3.75 14C3.33579 14 3 13.6642 3 13.25V4.75C3 4.33579 3.33579 4 3.75 4H13.8963L12.1248 2.28955C11.8268 2.00184 11.8185 1.52704 12.1062 1.22905ZM20.25 10C20.6642 10 21 10.3358 21 10.75V19.25C21 19.6642 20.6642 20 20.25 20H10.1037L11.8752 21.7104C12.1732 21.9982 12.1815 22.473 11.8938 22.7709C11.6061 23.0689 11.1313 23.0773 10.8333 22.7896L7.7262 19.7896C7.57982 19.6482 7.49714 19.4535 7.49714 19.25C7.49714 19.0465 7.57982 18.8518 7.7262 18.7104L10.8333 15.7105C11.1313 15.4227 11.6061 15.4311 11.8938 15.7291C12.1815 16.027 12.1732 16.5018 11.8752 16.7896L10.1037 18.5H19.5V10.75C19.5 10.3358 19.8358 10 20.25 10Z" fill="currentColor"/>',ea._name="arrows-repeat",ea._width=24,ea._height=24,ea._viewBox="0 0 24 24",ea=(0,s.Cc)([(0,C.Y$)("gds-icon-arrows-repeat")],ea);const ta=e=>{ea.define();const t=(0,n.p)("gds-icon-arrows-repeat"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ra=class extends R.M{};ra._regularSVG='<path d="M16.8684 19.8667C15.4543 20.7437 13.7863 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 13.9797 20.2662 16.0242 17.9715 15.8156C16.0837 15.644 14.7249 13.9258 14.993 12.0492L15.5226 8.40278M14.9375 12.4805C14.63 14.6681 12.8291 16.2235 10.9149 15.9544C9.00068 15.6854 7.69817 13.6939 8.00562 11.5063C8.31308 9.31862 10.1141 7.76327 12.0283 8.03229C13.9424 8.30131 15.245 10.2928 14.9375 12.4805Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',ra._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C13.6426 20.5 15.1743 20.0348 16.4731 19.2293C16.8251 19.011 17.2875 19.1194 17.5058 19.4714C17.7241 19.8234 17.6157 20.2857 17.2637 20.504C15.7344 21.4525 13.93 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.0958 21.7306 14.2721 21.0778 15.1696C20.3967 16.106 19.3255 16.6918 17.9036 16.5625C16.612 16.4451 15.5224 15.7374 14.8683 14.7351C13.9689 16.0897 12.4624 16.9293 10.8105 16.6971C8.39607 16.3578 6.91135 13.9034 7.26292 11.4019C7.61449 8.90031 9.71821 6.95026 12.1326 7.28959C13.1979 7.4393 14.0821 8.00071 14.7076 8.79624L14.7804 8.29498C14.8399 7.88507 15.2205 7.60103 15.6304 7.66057C16.0403 7.7201 16.3243 8.10067 16.2648 8.51058L15.7354 12.1553C15.7354 12.1557 15.7353 12.1561 15.7353 12.1564C15.5286 13.6075 16.5795 14.936 18.0394 15.0687C18.9121 15.148 19.4802 14.8159 19.8647 14.2872C20.2775 13.7197 20.5 12.8838 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM11.9239 8.77499C10.5099 8.57627 9.01166 9.73692 8.74832 11.6106C8.48499 13.4844 9.6053 15.013 11.0192 15.2117C12.4332 15.4105 13.9315 14.2498 14.1948 12.3761C14.4581 10.5024 13.3378 8.97371 11.9239 8.77499Z" fill="currentColor"/>',ra._name="at",ra._width=24,ra._height=24,ra._viewBox="0 0 24 24",ra=(0,s.Cc)([(0,C.Y$)("gds-icon-at")],ra);const oa=e=>{ra.define();const t=(0,n.p)("gds-icon-at"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let sa=class extends R.M{};sa._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M19.609 4.09151C19.368 3.96011 19.0745 3.97087 18.8437 4.11957L7.59372 11.3696C7.37946 11.5077 7.25 11.7451 7.25 12C7.25 12.2549 7.37946 12.4923 7.59372 12.6304L18.8437 19.8804C19.0745 20.0291 19.368 20.0399 19.609 19.9085C19.85 19.7771 20 19.5245 20 19.25V4.75C20 4.47549 19.85 4.22292 19.609 4.09151ZM4.75 4C4.33579 4 4 4.33579 4 4.75V19.25C4 19.6642 4.33579 20 4.75 20C5.16421 20 5.5 19.6642 5.5 19.25V4.75C5.5 4.33579 5.16421 4 4.75 4ZM18.5 6.12558V17.8744L9.38453 12L18.5 6.12558Z" fill="currentColor"/>',sa._solidSVG='<path d="M18.8437 4.11957C19.0745 3.97087 19.368 3.96011 19.609 4.09151C19.85 4.22292 20 4.47549 20 4.75V19.25C20 19.5245 19.85 19.7771 19.609 19.9085C19.368 20.0399 19.0745 20.0291 18.8437 19.8804L7.59372 12.6304C7.37946 12.4923 7.25 12.2549 7.25 12C7.25 11.7451 7.37946 11.5077 7.59372 11.3696L18.8437 4.11957Z" fill="currentColor"/><path d="M4 4.75C4 4.33579 4.33579 4 4.75 4C5.16421 4 5.5 4.33579 5.5 4.75V19.25C5.5 19.6642 5.16421 20 4.75 20C4.33579 20 4 19.6642 4 19.25V4.75Z" fill="currentColor"/>',sa._name="back",sa._width=24,sa._height=24,sa._viewBox="0 0 24 24",sa=(0,s.Cc)([(0,C.Y$)("gds-icon-back")],sa);const na=e=>{sa.define();const t=(0,n.p)("gds-icon-back"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let la=class extends R.M{};la._regularSVG='<path d="M15 9.75L12.75 12M12.75 12L10.5 14.25M12.75 12L10.5 9.75M12.75 12L15 14.25M6 4.75H21.25V19.25H6L1.5 12L6 4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',la._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C5.74058 4 5.49958 4.13406 5.36277 4.35448L0.86277 11.6045C0.71241 11.8467 0.71241 12.1533 0.86277 12.3955L5.36277 19.6455C5.49958 19.8659 5.74058 20 6 20H21.25C21.6642 20 22 19.6642 22 19.25V4.75C22 4.33579 21.6642 4 21.25 4H6ZM11.0303 9.21967C10.7374 8.92678 10.2626 8.92678 9.96967 9.21967C9.67678 9.51256 9.67678 9.98744 9.96967 10.2803L11.6893 12L9.96967 13.7197C9.67678 14.0126 9.67678 14.4874 9.96967 14.7803C10.2626 15.0732 10.7374 15.0732 11.0303 14.7803L12.75 13.0607L14.4697 14.7803C14.7626 15.0732 15.2374 15.0732 15.5303 14.7803C15.8232 14.4874 15.8232 14.0126 15.5303 13.7197L13.8107 12L15.5303 10.2803C15.8232 9.98744 15.8232 9.51256 15.5303 9.21967C15.2374 8.92678 14.7626 8.92678 14.4697 9.21967L12.75 10.9393L11.0303 9.21967Z" fill="currentColor"/>',la._name="backward",la._width=24,la._height=24,la._viewBox="0 0 24 24",la=(0,s.Cc)([(0,C.Y$)("gds-icon-backward")],la);const ia=e=>{la.define();const t=(0,n.p)("gds-icon-backward"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let aa=class extends R.M{};aa._regularSVG='<path d="M21 12.75H12M12 12.75H3M12 12.75L12.0022 15.25M8.0022 7.75V3.75H16.0022V7.75M21.25 20.25H2.75V7.75H21.25V20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',aa._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.0022 3C7.58798 3 7.2522 3.33579 7.2522 3.75V7H2.75C2.33579 7 2 7.33579 2 7.75V12H22V7.75C22 7.33579 21.6642 7 21.25 7H16.7522V3.75C16.7522 3.33579 16.4164 3 16.0022 3H8.0022ZM15.2522 7V4.5H8.7522V7H15.2522Z" fill="currentColor"/><path d="M2 20.25V13.5H11.2507L11.2522 15.2507C11.2526 15.6649 11.5886 16.0004 12.0029 16C12.4171 15.9996 12.7526 15.6636 12.7522 15.2493L12.7507 13.5H22V20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25Z" fill="currentColor"/>',aa._name="bag",aa._width=24,aa._height=24,aa._viewBox="0 0 24 24",aa=(0,s.Cc)([(0,C.Y$)("gds-icon-bag")],aa);const ca=e=>{aa.define();const t=(0,n.p)("gds-icon-bag"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ca=class extends R.M{};Ca._regularSVG='<path d="M19.25 9.25V17.25M15.25 17.25V9.25M4.75 9.25V17.25M8.75 17.25V9.25M2.75 7.17308L12 2.5L21.25 7.17308V9.25H2.75V7.17308ZM2.75 20.25H21.25L20.25 17.25H3.75L2.75 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',Ca._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3382 1.83058C12.1255 1.72314 11.8745 1.72314 11.6618 1.83058L2.41181 6.50365C2.15926 6.63125 2.00001 6.89012 2.00001 7.17308V9.25C2.00001 9.66421 2.33579 10 2.75001 10H4.00001V16.5H3.75001C3.42718 16.5 3.14058 16.7066 3.03849 17.0128L2.03849 20.0128C1.96226 20.2415 2.00061 20.493 2.14157 20.6885C2.28254 20.8841 2.50892 21 2.75001 21H21.25C21.4911 21 21.7175 20.8841 21.8584 20.6885C21.9994 20.493 22.0378 20.2415 21.9615 20.0128L20.9615 17.0128C20.8594 16.7066 20.5728 16.5 20.25 16.5H20V10H21.25C21.6642 10 22 9.66421 22 9.25V7.17308C22 6.89012 21.8408 6.63125 21.5882 6.50365L12.3382 1.83058ZM16 10H18.5V16.5H16V10ZM8.00001 16.5H5.50001V10H8.00001V16.5ZM9.50001 16.5V10H14.5V16.5H9.50001Z" fill="currentColor"/>',Ca._name="bank",Ca._width=24,Ca._height=24,Ca._viewBox="0 0 24 24",Ca=(0,s.Cc)([(0,C.Y$)("gds-icon-bank")],Ca);const da=e=>{Ca.define();const t=(0,n.p)("gds-icon-bank"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ha=class extends R.M{};ha._regularSVG='<path d="M4.75 8.25H5.75M18.25 15.75H19.25M1.75 18.75V5.25H22.25V18.75H1.75ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ha._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.25C1 4.83579 1.33579 4.5 1.75 4.5H22.25C22.6642 4.5 23 4.83579 23 5.25V18.75C23 19.1642 22.6642 19.5 22.25 19.5H1.75C1.33579 19.5 1 19.1642 1 18.75V5.25ZM3 7V8.5H5.5V7H3ZM18.5 15.5H21V17H18.5V15.5ZM9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12Z" fill="currentColor"/>',ha._name="banknote-2",ha._width=24,ha._height=24,ha._viewBox="0 0 24 24",ha=(0,s.Cc)([(0,C.Y$)("gds-icon-banknote-2")],ha);const ua=e=>{ha.define();const t=(0,n.p)("gds-icon-banknote-2"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let pa=class extends R.M{};pa._regularSVG='<path d="M2.25 5.25H21.75V18.75H2.25V5.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.75 5.25C5.75 7.183 4.183 8.75 2.25 8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.25 5.25C18.25 7.183 19.817 8.75 21.75 8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.75 18.75C5.75 16.817 4.183 15.25 2.25 15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.25 18.75C18.25 16.817 19.817 15.25 21.75 15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',pa._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5.25C1.5 4.83579 1.83579 4.5 2.25 4.5H21.75C22.1642 4.5 22.5 4.83579 22.5 5.25V18.75C22.5 19.1642 22.1642 19.5 21.75 19.5H2.25C1.83579 19.5 1.5 19.1642 1.5 18.75V5.25ZM3 18H5.5C5.5 16.6193 4.38071 15.5 3 15.5V18ZM21 18V15.5C19.6193 15.5 18.5 16.6193 18.5 18H21ZM21 8.5C19.6193 8.5 18.5 7.38071 18.5 6H21V8.5ZM3 6H5.5C5.5 7.38071 4.38071 8.5 3 8.5V6ZM12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5Z" fill="currentColor"/>',pa._name="banknote",pa._width=24,pa._height=24,pa._viewBox="0 0 24 24",pa=(0,s.Cc)([(0,C.Y$)("gds-icon-banknote")],pa);const ga=e=>{pa.define();const t=(0,n.p)("gds-icon-banknote"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ma=class extends R.M{};Ma._regularSVG='<path d="M7.25 4.75H2.75V9.25M16.75 4.75H21.25V9.25M21.25 14.75V19.25H16.75M7.25 19.25H2.75V14.75M7.75 9.75V14.25M16.25 9.75V14.25M12 9.75V12.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ma._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H7.25C7.66421 4 8 4.33579 8 4.75C8 5.16421 7.66421 5.5 7.25 5.5H3.5V9.25C3.5 9.66421 3.16421 10 2.75 10C2.33579 10 2 9.66421 2 9.25V4.75ZM16 4.75C16 4.33579 16.3358 4 16.75 4H21.25C21.6642 4 22 4.33579 22 4.75V9.25C22 9.66421 21.6642 10 21.25 10C20.8358 10 20.5 9.66421 20.5 9.25V5.5H16.75C16.3358 5.5 16 5.16421 16 4.75ZM7.75 9C8.16421 9 8.5 9.33579 8.5 9.75V14.25C8.5 14.6642 8.16421 15 7.75 15C7.33579 15 7 14.6642 7 14.25V9.75C7 9.33579 7.33579 9 7.75 9ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V12.25C12.75 12.6642 12.4142 13 12 13C11.5858 13 11.25 12.6642 11.25 12.25V9.75C11.25 9.33579 11.5858 9 12 9ZM16.25 9C16.6642 9 17 9.33579 17 9.75V14.25C17 14.6642 16.6642 15 16.25 15C15.8358 15 15.5 14.6642 15.5 14.25V9.75C15.5 9.33579 15.8358 9 16.25 9ZM2.75 14C3.16421 14 3.5 14.3358 3.5 14.75V18.5H7.25C7.66421 18.5 8 18.8358 8 19.25C8 19.6642 7.66421 20 7.25 20H2.75C2.33579 20 2 19.6642 2 19.25V14.75C2 14.3358 2.33579 14 2.75 14ZM21.25 14C21.6642 14 22 14.3358 22 14.75V19.25C22 19.6642 21.6642 20 21.25 20H16.75C16.3358 20 16 19.6642 16 19.25C16 18.8358 16.3358 18.5 16.75 18.5H20.5V14.75C20.5 14.3358 20.8358 14 21.25 14Z" fill="currentColor"/>',Ma._name="barcode",Ma._width=24,Ma._height=24,Ma._viewBox="0 0 24 24",Ma=(0,s.Cc)([(0,C.Y$)("gds-icon-barcode")],Ma);const ma=e=>{Ma.define();const t=(0,n.p)("gds-icon-barcode"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Va=class extends R.M{};Va._regularSVG='<path d="M2.75 12H21.25M2.75 5.75H21.25M2.75 18.25H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Va._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.75C2 5.33579 2.33579 5 2.75 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75ZM2 12C2 11.5858 2.33579 11.25 2.75 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H2.75C2.33579 12.75 2 12.4142 2 12ZM2 18.25C2 17.8358 2.33579 17.5 2.75 17.5H21.25C21.6642 17.5 22 17.8358 22 18.25C22 18.6642 21.6642 19 21.25 19H2.75C2.33579 19 2 18.6642 2 18.25Z" fill="currentColor"/>',Va._name="bars-three",Va._width=24,Va._height=24,Va._viewBox="0 0 24 24",Va=(0,s.Cc)([(0,C.Y$)("gds-icon-bars-three")],Va);const fa=e=>{Va.define();const t=(0,n.p)("gds-icon-bars-three"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let La=class extends R.M{};La._regularSVG='<path d="M2.75 7.25H21.25M2.75 16.75H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',La._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.25C2 6.83579 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.83579 22 7.25C22 7.66421 21.6642 8 21.25 8H2.75C2.33579 8 2 7.66421 2 7.25ZM2 16.75C2 16.3358 2.33579 16 2.75 16H21.25C21.6642 16 22 16.3358 22 16.75C22 17.1642 21.6642 17.5 21.25 17.5H2.75C2.33579 17.5 2 17.1642 2 16.75Z" fill="currentColor"/>',La._name="bars-two",La._width=24,La._height=24,La._viewBox="0 0 24 24",La=(0,s.Cc)([(0,C.Y$)("gds-icon-bars-two")],La);const _a=e=>{La.define();const t=(0,n.p)("gds-icon-bars-two"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ha=class extends R.M{};Ha._regularSVG='<path d="M1.75 2.75H3.5L6 15.25H19.5L21.25 5.75H4.5M9.25 19C9.25 19.6904 8.69036 20.25 8 20.25C7.30964 20.25 6.75 19.6904 6.75 19C6.75 18.3096 7.30964 17.75 8 17.75C8.69036 17.75 9.25 18.3096 9.25 19ZM18.25 19C18.25 19.6904 17.6904 20.25 17 20.25C16.3096 20.25 15.75 19.6904 15.75 19C15.75 18.3096 16.3096 17.75 17 17.75C17.6904 17.75 18.25 18.3096 18.25 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ha._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 2C1.33579 2 1 2.33579 1 2.75C1 3.16421 1.33579 3.5 1.75 3.5H2.88515L5.26456 15.3971C5.33468 15.7477 5.64249 16 6 16H19.5C19.8618 16 20.172 15.7417 20.2376 15.3859L21.9876 5.88587C22.0279 5.66686 21.9689 5.44125 21.8264 5.27011C21.6839 5.09897 21.4727 5 21.25 5H4.71485L4.23544 2.60291C4.16532 2.25234 3.85751 2 3.5 2H1.75Z" fill="currentColor"/><path d="M8 17C6.89543 17 6 17.8954 6 19C6 20.1046 6.89543 21 8 21C9.10457 21 10 20.1046 10 19C10 17.8954 9.10457 17 8 17Z" fill="currentColor"/><path d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17Z" fill="currentColor"/>',Ha._name="basket",Ha._width=24,Ha._height=24,Ha._viewBox="0 0 24 24",Ha=(0,s.Cc)([(0,C.Y$)("gds-icon-basket")],Ha);const va=e=>{Ha.define();const t=(0,n.p)("gds-icon-basket"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ka=class extends R.M{};ka._regularSVG='<path d="M7.75 5.75H1.75V18.25H5.25M15.75 5.75H19.25V18.25H13.25M12.25 5.75L7.5 12H13.5L8.75 18.25M19.25 8.75H22.25V15.25H19.25V8.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ka._solidSVG='<path d="M1.75 5H11.8125L6.9 11.55C6.72955 11.7773 6.70214 12.0813 6.82918 12.3354C6.95622 12.5895 7.21592 12.75 7.5 12.75H12L7.3125 19H1.75C1.33579 19 1 18.6642 1 18.25V5.75C1 5.33579 1.33579 5 1.75 5Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 19H9.1875L14.1 12.45C14.2704 12.2227 14.2979 11.9187 14.1708 11.6646C14.0438 11.4105 13.7841 11.25 13.5 11.25H9L13.6875 5H19.25C19.6642 5 20 5.33579 20 5.75V8H22.25C22.6642 8 23 8.33579 23 8.75V15.25C23 15.6642 22.6642 16 22.25 16H20V18.25C20 18.6642 19.6642 19 19.25 19ZM20 14.5H21.5V9.5H20V14.5Z" fill="currentColor"/>',ka._name="battery-loading",ka._width=24,ka._height=24,ka._viewBox="0 0 24 24",ka=(0,s.Cc)([(0,C.Y$)("gds-icon-battery-loading")],ka);const wa=e=>{ka.define();const t=(0,n.p)("gds-icon-battery-loading"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ba=class extends R.M{};ba._regularSVG='<path d="M16 17.25C16 19.4591 14.2091 21.25 12 21.25C9.79086 21.25 8 19.4591 8 17.25M3.75 17.25H20.25V16L18.7031 13L18.4965 8.90897C18.3234 5.45882 15.4661 2.75 12 2.75C8.53386 2.75 5.6766 5.45882 5.50351 8.90897L5.29688 13L3.75 16V17.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ba._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.13655 2 4.94782 5.0198 4.75447 8.87114L4.556 12.8003L3.0834 15.6563C3.02859 15.7626 3 15.8804 3 16V17.25C3 17.6642 3.33579 18 3.75 18H7.30888C7.66846 20.267 9.63185 22 12 22C14.3682 22 16.3315 20.267 16.6911 18H20.25C20.6642 18 21 17.6642 21 17.25V16C21 15.8804 20.9714 15.7626 20.9166 15.6563L19.444 12.8003L19.2455 8.87139C19.0522 5.02005 15.8634 2 12 2ZM12 20.5C10.4632 20.5 9.17555 19.4333 8.83697 18H15.163C14.8245 19.4333 13.5368 20.5 12 20.5Z" fill="currentColor"/>',ba._name="bell",ba._width=24,ba._height=24,ba._viewBox="0 0 24 24",ba=(0,s.Cc)([(0,C.Y$)("gds-icon-bell")],ba);const Za=e=>{ba.define();const t=(0,n.p)("gds-icon-bell"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ya=class extends R.M{};ya._regularSVG='<path d="M4.75 20.25V3.75H19.25V20.25M4.75 20.25H19.25M4.75 20.25H2.75M19.25 20.25H21.25M8.75 7.75H10.25M13.75 7.75H15.25M8.75 11.75H10.25M13.75 11.75H15.25M8.75 15.75H10.25M13.75 15.75H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ya._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3.75C4 3.33579 4.33579 3 4.75 3H19.25C19.6642 3 20 3.33579 20 3.75V19.5H21.25C21.6642 19.5 22 19.8358 22 20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25C2 19.8358 2.33579 19.5 2.75 19.5H4V3.75ZM8 7.75C8 7.33579 8.33579 7 8.75 7H10.25C10.6642 7 11 7.33579 11 7.75C11 8.16421 10.6642 8.5 10.25 8.5H8.75C8.33579 8.5 8 8.16421 8 7.75ZM13 7.75C13 7.33579 13.3358 7 13.75 7H15.25C15.6642 7 16 7.33579 16 7.75C16 8.16421 15.6642 8.5 15.25 8.5H13.75C13.3358 8.5 13 8.16421 13 7.75ZM8 11.75C8 11.3358 8.33579 11 8.75 11H10.25C10.6642 11 11 11.3358 11 11.75C11 12.1642 10.6642 12.5 10.25 12.5H8.75C8.33579 12.5 8 12.1642 8 11.75ZM13 11.75C13 11.3358 13.3358 11 13.75 11H15.25C15.6642 11 16 11.3358 16 11.75C16 12.1642 15.6642 12.5 15.25 12.5H13.75C13.3358 12.5 13 12.1642 13 11.75ZM8 15.75C8 15.3358 8.33579 15 8.75 15H10.25C10.6642 15 11 15.3358 11 15.75C11 16.1642 10.6642 16.5 10.25 16.5H8.75C8.33579 16.5 8 16.1642 8 15.75ZM13 15.75C13 15.3358 13.3358 15 13.75 15H15.25C15.6642 15 16 15.3358 16 15.75C16 16.1642 15.6642 16.5 15.25 16.5H13.75C13.3358 16.5 13 16.1642 13 15.75Z" fill="currentColor"/>',ya._name="block",ya._width=24,ya._height=24,ya._viewBox="0 0 24 24",ya=(0,s.Cc)([(0,C.Y$)("gds-icon-block")],ya);const xa=e=>{ya.define();const t=(0,n.p)("gds-icon-block"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Sa=class extends R.M{};Sa._regularSVG='<path d="M19.25 12V16.75H7C5.75736 16.75 4.75 17.7574 4.75 19C4.75 20.2426 5.75736 21.25 7 21.25H10M8.75 7H15.25M8.75 11H12.25M6.75 2.75H19.25V21.25H6.75C5.64543 21.25 4.75 20.3546 4.75 19.25V4.75C4.75 3.64543 5.64543 2.75 6.75 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Sa._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 2C5.23122 2 4 3.23122 4 4.75V19.25C4 20.7688 5.23122 22 6.75 22H19.25C19.6642 22 20 21.6642 20 21.25V2.75C20 2.33579 19.6642 2 19.25 2H6.75ZM5.5 19V19.25C5.5 19.9404 6.05964 20.5 6.75 20.5H18.5V17.5H7C6.17157 17.5 5.5 18.1716 5.5 19ZM8.75 6.25C8.33579 6.25 8 6.58579 8 7C8 7.41421 8.33579 7.75 8.75 7.75H15.25C15.6642 7.75 16 7.41421 16 7C16 6.58579 15.6642 6.25 15.25 6.25H8.75ZM8 11C8 10.5858 8.33579 10.25 8.75 10.25H12.25C12.6642 10.25 13 10.5858 13 11C13 11.4142 12.6642 11.75 12.25 11.75H8.75C8.33579 11.75 8 11.4142 8 11Z" fill="currentColor"/>',Sa._name="book",Sa._width=24,Sa._height=24,Sa._viewBox="0 0 24 24",Sa=(0,s.Cc)([(0,C.Y$)("gds-icon-book")],Sa);const $a=e=>{Sa.define();const t=(0,n.p)("gds-icon-book"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ga=class extends R.M{};Ga._regularSVG='<path d="M19.25 2.75H20C20 2.33579 19.6642 2 19.25 2V2.75ZM19.25 21L18.8877 21.6567C19.12 21.7849 19.4028 21.7807 19.6313 21.6458C19.8598 21.5109 20 21.2653 20 21H19.25ZM4.75 21H4C4 21.2653 4.14021 21.5109 4.36871 21.6458C4.5972 21.7807 4.87997 21.7849 5.11231 21.6567L4.75 21ZM4.75 2.75V2C4.33579 2 4 2.33579 4 2.75H4.75ZM12 17L12.3623 16.3433C12.1368 16.2189 11.8632 16.2189 11.6377 16.3433L12 17ZM9.88033 9.81967C9.58743 9.52677 9.11256 9.52677 8.81967 9.81967C8.52677 10.1126 8.52677 10.5874 8.81967 10.8803L9.88033 9.81967ZM11 12L10.4697 12.5303C10.6103 12.671 10.8011 12.75 11 12.75C11.1989 12.75 11.3897 12.671 11.5303 12.5303L11 12ZM15.3803 8.68033C15.6732 8.38744 15.6732 7.91256 15.3803 7.61967C15.0874 7.32678 14.6126 7.32678 14.3197 7.61967L15.3803 8.68033ZM19.25 2.75H18.5V21H19.25H20V2.75H19.25ZM4.75 21H5.5V2.75H4.75H4V21H4.75ZM4.75 2.75V3.5H19.25V2.75V2H4.75V2.75ZM19.25 21L19.6123 20.3433L12.3623 16.3433L12 17L11.6377 17.6567L18.8877 21.6567L19.25 21ZM12 17L11.6377 16.3433L4.38769 20.3433L4.75 21L5.11231 21.6567L12.3623 17.6567L12 17ZM9.35 10.35L8.81967 10.8803L10.4697 12.5303L11 12L11.5303 11.4697L9.88033 9.81967L9.35 10.35ZM11 12L11.5303 12.5303L15.3803 8.68033L14.85 8.15L14.3197 7.61967L10.4697 11.4697L11 12Z" fill="currentColor"/>',Ga._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75V21C20 21.2653 19.8598 21.5109 19.6313 21.6458C19.4028 21.7807 19.12 21.7849 18.8877 21.6567L12 17.8566L5.11231 21.6567C4.87997 21.7849 4.5972 21.7807 4.36871 21.6458C4.14021 21.5109 4 21.2653 4 21V2.75ZM15.3803 8.68033C15.6732 8.38744 15.6732 7.91256 15.3803 7.61967C15.0874 7.32678 14.6126 7.32678 14.3197 7.61967L11 10.9393L9.88033 9.81967C9.58744 9.52677 9.11256 9.52677 8.81967 9.81967C8.52677 10.1126 8.52677 10.5874 8.81967 10.8803L10.4697 12.5303C10.6103 12.671 10.8011 12.75 11 12.75C11.1989 12.75 11.3897 12.671 11.5303 12.5303L15.3803 8.68033Z" fill="currentColor"/>',Ga._name="bookmark-check",Ga._width=24,Ga._height=24,Ga._viewBox="0 0 24 24",Ga=(0,s.Cc)([(0,C.Y$)("gds-icon-bookmark-check")],Ga);const ja=e=>{Ga.define();const t=(0,n.p)("gds-icon-bookmark-check"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ea=class extends R.M{};Ea._regularSVG='<path d="M19.25 2.75H20C20 2.33579 19.6642 2 19.25 2V2.75ZM19.25 21L18.8877 21.6567C19.12 21.7849 19.4028 21.7807 19.6313 21.6458C19.8598 21.5109 20 21.2653 20 21H19.25ZM4.75 21H4C4 21.2653 4.14021 21.5109 4.36871 21.6458C4.5972 21.7807 4.87997 21.7849 5.11231 21.6567L4.75 21ZM4.75 2.75V2C4.33579 2 4 2.33579 4 2.75H4.75ZM12 17L12.3623 16.3433C12.1368 16.2189 11.8632 16.2189 11.6377 16.3433L12 17ZM14.8284 8.23678C15.1213 7.94389 15.1213 7.46901 14.8284 7.17612C14.5355 6.88323 14.0607 6.88323 13.7678 7.17612L14.8284 8.23678ZM9.17157 11.7723C8.87868 12.0652 8.87868 12.5401 9.17157 12.833C9.46447 13.1259 9.93934 13.1259 10.2322 12.833L9.17157 11.7723ZM13.7678 12.833C14.0607 13.1259 14.5355 13.1259 14.8284 12.833C15.1213 12.5401 15.1213 12.0652 14.8284 11.7723L13.7678 12.833ZM10.2322 7.17612C9.93934 6.88323 9.46447 6.88323 9.17157 7.17612C8.87868 7.46901 8.87868 7.94389 9.17157 8.23678L10.2322 7.17612ZM19.25 2.75H18.5V21H19.25H20V2.75H19.25ZM4.75 21H5.5V2.75H4.75H4V21H4.75ZM4.75 2.75V3.5H19.25V2.75V2H4.75V2.75ZM19.25 21L19.6123 20.3433L12.3623 16.3433L12 17L11.6377 17.6567L18.8877 21.6567L19.25 21ZM12 17L11.6377 16.3433L4.38769 20.3433L4.75 21L5.11231 21.6567L12.3623 17.6567L12 17ZM14.2981 7.70645L13.7678 7.17612L9.17157 11.7723L9.7019 12.3026L10.2322 12.833L14.8284 8.23678L14.2981 7.70645ZM14.2981 12.3026L14.8284 11.7723L10.2322 7.17612L9.7019 7.70645L9.17157 8.23678L13.7678 12.833L14.2981 12.3026Z" fill="currentColor"/>',Ea._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21C4 21.2653 4.14021 21.5109 4.36871 21.6458C4.5972 21.7807 4.87997 21.7849 5.11231 21.6567L12 17.8566L18.8877 21.6567C19.12 21.7849 19.4028 21.7807 19.6313 21.6458C19.8598 21.5109 20 21.2653 20 21V2.75C20 2.33579 19.6642 2 19.25 2H4.75ZM14.8284 7.17612C15.1213 7.46901 15.1213 7.94389 14.8284 8.23678L13.0607 10.0045L14.8284 11.7723C15.1213 12.0652 15.1213 12.5401 14.8284 12.833C14.5355 13.1259 14.0607 13.1259 13.7678 12.833L12 11.0652L10.2322 12.833C9.93934 13.1259 9.46446 13.1259 9.17157 12.833C8.87868 12.5401 8.87868 12.0652 9.17157 11.7723L10.9393 10.0045L9.17157 8.23678C8.87868 7.94389 8.87868 7.46901 9.17157 7.17612C9.46447 6.88322 9.93934 6.88322 10.2322 7.17612L12 8.94389L13.7678 7.17612C14.0607 6.88323 14.5355 6.88323 14.8284 7.17612Z" fill="currentColor"/>',Ea._name="bookmark-delete",Ea._width=24,Ea._height=24,Ea._viewBox="0 0 24 24",Ea=(0,s.Cc)([(0,C.Y$)("gds-icon-bookmark-delete")],Ea);const Ba=e=>{Ea.define();const t=(0,n.p)("gds-icon-bookmark-delete"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let qa=class extends R.M{};qa._regularSVG='<path d="M19.25 2.75H20C20 2.33579 19.6642 2 19.25 2V2.75ZM19.25 21L18.8877 21.6567C19.12 21.7849 19.4028 21.7807 19.6313 21.6458C19.8598 21.5109 20 21.2653 20 21H19.25ZM4.75 21H4C4 21.2653 4.14021 21.5109 4.36871 21.6458C4.5972 21.7807 4.87997 21.7849 5.11231 21.6567L4.75 21ZM4.75 2.75V2C4.33579 2 4 2.33579 4 2.75H4.75ZM12 17L12.3623 16.3433C12.1368 16.2189 11.8632 16.2189 11.6377 16.3433L12 17ZM12.75 6.75C12.75 6.33579 12.4142 6 12 6C11.5858 6 11.25 6.33579 11.25 6.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM15.25 10.75C15.6642 10.75 16 10.4142 16 10C16 9.58579 15.6642 9.25 15.25 9.25V10.75ZM8.75 9.25C8.33579 9.25 8 9.58579 8 10C8 10.4142 8.33579 10.75 8.75 10.75V9.25ZM19.25 2.75H18.5V21H19.25H20V2.75H19.25ZM4.75 21H5.5V2.75H4.75H4V21H4.75ZM4.75 2.75V3.5H19.25V2.75V2H4.75V2.75ZM19.25 21L19.6123 20.3433L12.3623 16.3433L12 17L11.6377 17.6567L18.8877 21.6567L19.25 21ZM12 17L11.6377 16.3433L4.38769 20.3433L4.75 21L5.11231 21.6567L12.3623 17.6567L12 17ZM12 6.75H11.25V13.25H12H12.75V6.75H12ZM15.25 10V9.25L8.75 9.25V10V10.75L15.25 10.75V10Z" fill="currentColor"/>',qa._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21C4 21.2653 4.14021 21.5109 4.36871 21.6458C4.5972 21.7807 4.87997 21.7849 5.11231 21.6567L12 17.8566L18.8877 21.6567C19.12 21.7849 19.4028 21.7807 19.6313 21.6458C19.8598 21.5109 20 21.2653 20 21V2.75C20 2.33579 19.6642 2 19.25 2H4.75ZM12 6C12.4142 6 12.75 6.33579 12.75 6.75V9.25H15.25C15.6642 9.25 16 9.58579 16 10C16 10.4142 15.6642 10.75 15.25 10.75H12.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V10.75H8.75C8.33579 10.75 8 10.4142 8 10C8 9.58579 8.33579 9.25 8.75 9.25H11.25V6.75C11.25 6.33579 11.5858 6 12 6Z" fill="currentColor"/>',qa._name="bookmark-plus",qa._width=24,qa._height=24,qa._viewBox="0 0 24 24",qa=(0,s.Cc)([(0,C.Y$)("gds-icon-bookmark-plus")],qa);const Na=e=>{qa.define();const t=(0,n.p)("gds-icon-bookmark-plus"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ia=class extends R.M{};Ia._regularSVG='<path d="M1.75 15.25L4.75 14.1524M22.25 7.75L19.25 8.84756M19.25 8.84756V2.75H4.75V14.1524M19.25 8.84756L4.75 14.1524M19.25 12.75V21.25L12 17.25L4.75 21.25V18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ia._solidSVG='<path d="M4.75 2C4.33579 2 4 2.33579 4 2.75V13.6282L1.49233 14.5456C1.10334 14.688 0.903363 15.1187 1.04568 15.5077C1.18799 15.8967 1.61871 16.0966 2.00771 15.9543L22.5077 8.45433C22.8967 8.31202 23.0967 7.8813 22.9544 7.4923C22.812 7.10331 22.3813 6.90333 21.9923 7.04565L20 7.77455V2.75C20 2.33579 19.6642 2 19.25 2H4.75Z" fill="currentColor"/><path d="M4 21.25V16.8227L20 10.969V21.25C20 21.5153 19.8598 21.7609 19.6313 21.8958C19.4028 22.0307 19.12 22.0349 18.8877 21.9067L12 18.1066L5.11231 21.9067C4.87998 22.0349 4.5972 22.0307 4.36871 21.8958C4.14021 21.7609 4 21.5153 4 21.25Z" fill="currentColor"/>',Ia._name="bookmark-remove",Ia._width=24,Ia._height=24,Ia._viewBox="0 0 24 24",Ia=(0,s.Cc)([(0,C.Y$)("gds-icon-bookmark-remove")],Ia);const Ya=e=>{Ia.define();const t=(0,n.p)("gds-icon-bookmark-remove"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let za=class extends R.M{};za._regularSVG='<path d="M19.25 21.25V2.75H4.75V21.25L12 17.25L19.25 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',za._solidSVG='<path d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21.25C4 21.5153 4.14021 21.7609 4.36871 21.8958C4.5972 22.0307 4.87998 22.0349 5.11231 21.9067L12 18.1066L18.8877 21.9067C19.12 22.0349 19.4028 22.0307 19.6313 21.8958C19.8598 21.7609 20 21.5153 20 21.25V2.75C20 2.33579 19.6642 2 19.25 2H4.75Z" fill="currentColor"/>',za._name="bookmark",za._width=24,za._height=24,za._viewBox="0 0 24 24",za=(0,s.Cc)([(0,C.Y$)("gds-icon-bookmark")],za);const Aa=e=>{za.define();const t=(0,n.p)("gds-icon-bookmark"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ta=class extends R.M{};Ta._regularSVG='<path d="M6.75 20.25V5.75H2.75V20.25H6.75ZM6.75 20.25H13.25V3.75H6.75V20.25ZM6.75 7.875H13.25M6.75 16.125H13.25M14 7.25L18.3467 6.08531L21.8407 19.1253L17.4941 20.29L14 7.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',Ta._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9567 7.3927C13.8426 6.99453 14.0728 6.5792 14.4709 6.46502L17.8354 5.50029C18.2335 5.38612 18.6489 5.61634 18.763 6.01451L22.4841 18.9915C22.5983 19.3897 22.3681 19.805 21.9699 19.9192L18.6055 20.884C18.2073 20.9981 17.792 20.7679 17.6778 20.3697L13.9567 7.3927Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 3C7.33579 3 7 3.33579 7 3.75V20.25C7 20.6642 7.33579 21 7.75 21H13.25C13.6642 21 14 20.6642 14 20.25V3.75C14 3.33579 13.6642 3 13.25 3H7.75ZM8.5 7.75C8.5 7.33579 8.83579 7 9.25 7H11.75C12.1642 7 12.5 7.33579 12.5 7.75C12.5 8.16421 12.1642 8.5 11.75 8.5H9.25C8.83579 8.5 8.5 8.16421 8.5 7.75ZM12.5 16.25C12.5 15.8358 12.1642 15.5 11.75 15.5H9.25C8.83579 15.5 8.5 15.8358 8.5 16.25C8.5 16.6642 8.83579 17 9.25 17H11.75C12.1642 17 12.5 16.6642 12.5 16.25Z" fill="currentColor"/><path d="M2.75 5C2.33579 5 2 5.33579 2 5.75V20.25C2 20.6642 2.33579 21 2.75 21H5.25C5.66421 21 6 20.6642 6 20.25V5.75C6 5.33579 5.66421 5 5.25 5H2.75Z" fill="currentColor"/>',Ta._name="books",Ta._width=24,Ta._height=24,Ta._viewBox="0 0 24 24",Ta=(0,s.Cc)([(0,C.Y$)("gds-icon-books")],Ta);const Ra=e=>{Ta.define();const t=(0,n.p)("gds-icon-books"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Oa=class extends R.M{};Oa._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6.338 2.5H17.662C19.7829 2.5 21.5 4.21713 21.5024 6.338V17.662C21.5024 19.7829 19.7829 21.5 17.6644 21.5H6.338C4.21713 21.5 2.5 19.7829 2.5 17.6644V6.338C2.5 4.21713 4.21713 2.5 6.338 2.5ZM12.304 6.20024L11.9192 6.86524L11.5416 6.19787C11.2994 5.78224 10.7745 5.64212 10.3589 5.87962C9.94324 6.12187 9.80311 6.64674 10.0406 7.06237L10.9217 8.59187L8.10024 13.482H5.89624C5.41649 13.482 5.03174 13.8667 5.03174 14.3465C5.03174 14.8262 5.41649 15.211 5.89624 15.211H13.7575C14.1351 14.5032 13.6482 13.482 12.779 13.482H10.0976L13.805 7.06474C14.0425 6.64912 13.9024 6.11949 13.4867 5.88199C13.0711 5.64449 12.5415 5.78462 12.304 6.20024ZM7.75349 17.5432L8.58474 16.1016C8.13586 15.5601 7.56824 15.3939 6.86999 15.61L6.25249 16.6787C6.01499 17.0944 6.15511 17.624 6.57074 17.8615C6.98636 18.099 7.51599 17.9589 7.75349 17.5432ZM17.9921 13.4867H15.743C15.5707 13.1885 15.4051 12.9015 15.246 12.626C14.3588 11.0894 13.6759 9.90681 13.1946 9.08112C12.684 9.50624 12.1662 10.7602 12.8906 12.0095C13.2047 12.5545 13.5895 13.2206 14.0445 14.0083C14.6146 14.9954 15.2951 16.1734 16.085 17.5432C16.3272 17.9589 16.8521 18.099 17.2677 17.8615C17.6834 17.6192 17.8235 17.0944 17.586 16.6787L16.7429 15.2157H17.9921C18.4719 15.2157 18.8566 14.831 18.8566 14.3512C18.8566 13.8715 18.4719 13.4867 17.9921 13.4867Z" fill="currentColor"/>',Oa._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6.338 2.5H17.662C19.7829 2.5 21.5 4.21713 21.5024 6.338V17.662C21.5024 19.7829 19.7829 21.5 17.6644 21.5H6.338C4.21713 21.5 2.5 19.7829 2.5 17.6644V6.338C2.5 4.21713 4.21713 2.5 6.338 2.5ZM12.304 6.20024L11.9192 6.86524L11.5416 6.19787C11.2994 5.78224 10.7745 5.64212 10.3589 5.87962C9.94324 6.12187 9.80311 6.64674 10.0406 7.06237L10.9217 8.59187L8.10024 13.482H5.89624C5.41649 13.482 5.03174 13.8667 5.03174 14.3465C5.03174 14.8262 5.41649 15.211 5.89624 15.211H13.7575C14.1351 14.5032 13.6482 13.482 12.779 13.482H10.0976L13.805 7.06474C14.0425 6.64912 13.9024 6.11949 13.4867 5.88199C13.0711 5.64449 12.5415 5.78462 12.304 6.20024ZM7.75349 17.5432L8.58474 16.1016C8.13586 15.5601 7.56824 15.3939 6.86999 15.61L6.25249 16.6787C6.01499 17.0944 6.15511 17.624 6.57074 17.8615C6.98636 18.099 7.51599 17.9589 7.75349 17.5432ZM17.9921 13.4867H15.743C15.5707 13.1885 15.4051 12.9015 15.246 12.626C14.3588 11.0894 13.6759 9.90681 13.1946 9.08112C12.684 9.50624 12.1662 10.7602 12.8906 12.0095C13.2047 12.5545 13.5895 13.2206 14.0445 14.0083C14.6146 14.9954 15.2951 16.1734 16.085 17.5432C16.3272 17.9589 16.8521 18.099 17.2677 17.8615C17.6834 17.6192 17.8235 17.0944 17.586 16.6787L16.7429 15.2157H17.9921C18.4719 15.2157 18.8566 14.831 18.8566 14.3512C18.8566 13.8715 18.4719 13.4867 17.9921 13.4867Z" fill="currentColor"/>',Oa._name="brand-app-store",Oa._width=24,Oa._height=24,Oa._viewBox="0 0 24 24",Oa=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-app-store")],Oa);const Wa=e=>{Oa.define();const t=(0,n.p)("gds-icon-brand-app-store"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Pa=class extends R.M{};Pa._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5004 8.44218V8.44344H21.4999V15.5565C21.4999 15.6019 21.4999 15.6473 21.5 15.6927C21.5 15.8743 21.5001 16.0558 21.4989 16.2373C21.4978 16.4284 21.4957 16.6194 21.4904 16.8105C21.4793 17.2264 21.4545 17.6465 21.3806 18.0582C21.3057 18.4762 21.1827 18.8652 20.9895 19.2452C20.7995 19.6183 20.5515 19.9593 20.2554 20.2554C19.9593 20.5515 19.6178 20.7995 19.2447 20.9895C18.8652 21.1827 18.4767 21.3057 18.0587 21.3806C17.647 21.4545 17.2269 21.4793 16.8105 21.4904C16.6194 21.4957 16.4284 21.4978 16.2373 21.4989C16.0104 21.4999 15.7834 21.4999 15.5565 21.4999H8.44344C8.39802 21.4999 8.3526 21.4999 8.30717 21.5C8.12565 21.5 7.94412 21.5001 7.76259 21.4989C7.57153 21.4978 7.38047 21.4957 7.18941 21.4904C6.77299 21.4793 6.35287 21.4545 5.94119 21.3806C5.52371 21.3052 5.13473 21.1827 4.75525 20.9895C4.3821 20.7995 4.04062 20.5515 3.74453 20.2554C3.44844 19.9593 3.20038 19.6183 3.01037 19.2452C2.8172 18.8652 2.69423 18.4762 2.61928 18.0582C2.54539 17.6465 2.52058 17.2269 2.5095 16.8105C2.50422 16.6194 2.50211 16.4284 2.50106 16.2373C2.5 16.0104 2.5 15.7834 2.5 15.5565V8.44344C2.5 8.2165 2.5 7.98954 2.50106 7.76312C2.50211 7.57206 2.50422 7.381 2.5095 7.18994C2.52058 6.77404 2.54539 6.35392 2.61928 5.94225C2.69423 5.52424 2.8172 5.13526 3.01037 4.75525C3.20038 4.3821 3.44844 4.04115 3.74453 3.74506C4.04062 3.44897 4.3821 3.20091 4.75525 3.0109C5.13473 2.81773 5.52318 2.69475 5.94119 2.61981C6.35287 2.54539 6.77299 2.52111 7.18941 2.5095C7.38047 2.50422 7.57153 2.50211 7.76259 2.50106C7.98954 2.5 8.21649 2.5 8.44344 2.5H15.557C15.7839 2.5 16.0109 2.5 16.2378 2.50106C16.4289 2.50211 16.62 2.50422 16.811 2.5095C17.2275 2.52058 17.6476 2.54539 18.0593 2.61928C18.4767 2.69475 18.8657 2.8172 19.2452 3.01037C19.6183 3.20038 19.9598 3.44844 20.2559 3.74453C20.552 4.04062 20.8001 4.38157 20.9901 4.75472C21.1832 5.13473 21.3062 5.52371 21.3812 5.94172C21.4551 6.3534 21.4799 6.77299 21.4909 7.18941C21.4962 7.38048 21.4983 7.57154 21.4994 7.7626C21.5004 7.98912 21.5004 8.21565 21.5004 8.44218ZM15.4314 5.48938C15.4805 5.47935 15.8885 5.40705 15.9344 5.40282C16.24 5.37643 16.4115 5.577 16.4105 5.90211V14.8645C16.4105 15.1052 16.4083 15.3232 16.3577 15.5644C16.3086 15.7982 16.2194 16.0183 16.0811 16.2162C15.9434 16.4136 15.7671 16.5756 15.5612 16.697C15.3533 16.82 15.1348 16.8902 14.9015 16.9372C14.4634 17.0253 14.1637 17.0453 13.8823 16.9889C13.6111 16.934 13.3809 16.8094 13.1967 16.6405C12.9239 16.3909 12.7539 16.0531 12.717 15.7C12.6737 15.2862 12.8109 14.8445 13.1218 14.5188C13.2785 14.3541 13.4754 14.2243 13.7383 14.1224C14.0132 14.0158 14.3167 13.952 14.7833 13.858L15.1522 13.7836C15.3142 13.7509 15.4525 13.7097 15.5644 13.573C15.6774 13.4358 15.6789 13.268 15.6789 13.1022V8.91738C15.6789 8.59701 15.5349 8.50992 15.2293 8.56851C15.0102 8.61126 10.3161 9.55812 10.3161 9.55812C10.0511 9.62251 9.95822 9.70906 9.95822 10.0373V16.1676C9.95822 16.4083 9.94608 16.6263 9.89541 16.8675C9.84633 17.1013 9.75713 17.3214 9.61885 17.5193C9.4811 17.7167 9.30482 17.8787 9.09898 18.0001C8.89103 18.1231 8.67252 18.1965 8.43924 18.2434C8.00117 18.3321 7.70139 18.3516 7.42008 18.2952C7.14879 18.2408 6.91868 18.1125 6.73448 17.9436C6.46161 17.694 6.30275 17.3562 6.2658 17.0031C6.22252 16.5893 6.34866 16.1476 6.65953 15.8219C6.81629 15.6573 7.01315 15.5274 7.27599 15.4256C7.55097 15.3189 7.85445 15.2551 8.32101 15.1611L8.68994 15.0867C8.85197 15.054 8.99025 15.0128 9.10214 14.8761C9.21404 14.7394 9.22723 14.579 9.22723 14.4138V7.34562C9.22723 7.25062 9.23515 7.18623 9.2399 7.15456C9.26259 7.00572 9.32223 6.878 9.4299 6.78775C9.5191 6.7128 9.63468 6.66055 9.78194 6.62941L9.78405 6.62888L15.4314 5.48938Z" fill="currentColor"/>',Pa._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5004 8.44218V8.44344H21.4999V15.5565C21.4999 15.6019 21.4999 15.6473 21.5 15.6927C21.5 15.8743 21.5001 16.0558 21.4989 16.2373C21.4978 16.4284 21.4957 16.6194 21.4904 16.8105C21.4793 17.2264 21.4545 17.6465 21.3806 18.0582C21.3057 18.4762 21.1827 18.8652 20.9895 19.2452C20.7995 19.6183 20.5515 19.9593 20.2554 20.2554C19.9593 20.5515 19.6178 20.7995 19.2447 20.9895C18.8652 21.1827 18.4767 21.3057 18.0587 21.3806C17.647 21.4545 17.2269 21.4793 16.8105 21.4904C16.6194 21.4957 16.4284 21.4978 16.2373 21.4989C16.0104 21.4999 15.7834 21.4999 15.5565 21.4999H8.44344C8.39802 21.4999 8.3526 21.4999 8.30717 21.5C8.12565 21.5 7.94412 21.5001 7.76259 21.4989C7.57153 21.4978 7.38047 21.4957 7.18941 21.4904C6.77299 21.4793 6.35287 21.4545 5.94119 21.3806C5.52371 21.3052 5.13473 21.1827 4.75525 20.9895C4.3821 20.7995 4.04062 20.5515 3.74453 20.2554C3.44844 19.9593 3.20038 19.6183 3.01037 19.2452C2.8172 18.8652 2.69423 18.4762 2.61928 18.0582C2.54539 17.6465 2.52058 17.2269 2.5095 16.8105C2.50422 16.6194 2.50211 16.4284 2.50106 16.2373C2.5 16.0104 2.5 15.7834 2.5 15.5565V8.44344C2.5 8.2165 2.5 7.98954 2.50106 7.76312C2.50211 7.57206 2.50422 7.381 2.5095 7.18994C2.52058 6.77404 2.54539 6.35392 2.61928 5.94225C2.69423 5.52424 2.8172 5.13526 3.01037 4.75525C3.20038 4.3821 3.44844 4.04115 3.74453 3.74506C4.04062 3.44897 4.3821 3.20091 4.75525 3.0109C5.13473 2.81773 5.52318 2.69475 5.94119 2.61981C6.35287 2.54539 6.77299 2.52111 7.18941 2.5095C7.38047 2.50422 7.57153 2.50211 7.76259 2.50106C7.98954 2.5 8.21649 2.5 8.44344 2.5H15.557C15.7839 2.5 16.0109 2.5 16.2378 2.50106C16.4289 2.50211 16.62 2.50422 16.811 2.5095C17.2275 2.52058 17.6476 2.54539 18.0593 2.61928C18.4767 2.69475 18.8657 2.8172 19.2452 3.01037C19.6183 3.20038 19.9598 3.44844 20.2559 3.74453C20.552 4.04062 20.8001 4.38157 20.9901 4.75472C21.1832 5.13473 21.3062 5.52371 21.3812 5.94172C21.4551 6.3534 21.4799 6.77299 21.4909 7.18941C21.4962 7.38048 21.4983 7.57154 21.4994 7.7626C21.5004 7.98912 21.5004 8.21565 21.5004 8.44218ZM15.4314 5.48938C15.4805 5.47935 15.8885 5.40705 15.9344 5.40282C16.24 5.37643 16.4115 5.577 16.4105 5.90211V14.8645C16.4105 15.1052 16.4083 15.3232 16.3577 15.5644C16.3086 15.7982 16.2194 16.0183 16.0811 16.2162C15.9434 16.4136 15.7671 16.5756 15.5612 16.697C15.3533 16.82 15.1348 16.8902 14.9015 16.9372C14.4634 17.0253 14.1637 17.0453 13.8823 16.9889C13.6111 16.934 13.3809 16.8094 13.1967 16.6405C12.9239 16.3909 12.7539 16.0531 12.717 15.7C12.6737 15.2862 12.8109 14.8445 13.1218 14.5188C13.2785 14.3541 13.4754 14.2243 13.7383 14.1224C14.0132 14.0158 14.3167 13.952 14.7833 13.858L15.1522 13.7836C15.3142 13.7509 15.4525 13.7097 15.5644 13.573C15.6774 13.4358 15.6789 13.268 15.6789 13.1022V8.91738C15.6789 8.59701 15.5349 8.50992 15.2293 8.56851C15.0102 8.61126 10.3161 9.55812 10.3161 9.55812C10.0511 9.62251 9.95822 9.70906 9.95822 10.0373V16.1676C9.95822 16.4083 9.94608 16.6263 9.89541 16.8675C9.84633 17.1013 9.75713 17.3214 9.61885 17.5193C9.4811 17.7167 9.30482 17.8787 9.09898 18.0001C8.89103 18.1231 8.67252 18.1965 8.43924 18.2434C8.00117 18.3321 7.70139 18.3516 7.42008 18.2952C7.14879 18.2408 6.91868 18.1125 6.73448 17.9436C6.46161 17.694 6.30275 17.3562 6.2658 17.0031C6.22252 16.5893 6.34866 16.1476 6.65953 15.8219C6.81629 15.6573 7.01315 15.5274 7.27599 15.4256C7.55097 15.3189 7.85445 15.2551 8.32101 15.1611L8.68994 15.0867C8.85197 15.054 8.99025 15.0128 9.10214 14.8761C9.21404 14.7394 9.22723 14.579 9.22723 14.4138V7.34562C9.22723 7.25062 9.23515 7.18623 9.2399 7.15456C9.26259 7.00572 9.32223 6.878 9.4299 6.78775C9.5191 6.7128 9.63468 6.66055 9.78194 6.62941L9.78405 6.62888L15.4314 5.48938Z" fill="currentColor"/>',Pa._name="brand-apple-music",Pa._width=24,Pa._height=24,Pa._viewBox="0 0 24 24",Pa=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-apple-music")],Pa);const Fa=e=>{Pa.define();const t=(0,n.p)("gds-icon-brand-apple-music"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Da=class extends R.M{};Da._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.69277 18.3777C8.27482 18.3777 8.78717 18.615 8.68874 19.247L8.57782 19.9599C8.53864 20.2121 8.54593 20.2877 8.82677 20.2928L8.54133 20.9628C8.04463 20.996 7.80453 20.9437 7.68495 20.7298C7.42143 20.8916 7.13181 20.9722 6.8217 20.9722C6.25864 20.9722 6.06512 20.6825 6.11524 20.3593C6.13889 20.2069 6.2292 20.0552 6.3726 19.9314C6.68122 19.6654 7.44592 19.6269 7.74516 19.423C7.77096 19.1949 7.67844 19.1138 7.39694 19.1138C7.06766 19.1138 6.79291 19.2234 6.32327 19.5417L6.43795 18.8047C6.84637 18.5105 7.23914 18.3777 7.69277 18.3777ZM4.96841 17.6883C5.7797 17.6883 5.97865 18.0973 5.92024 18.4722C5.87288 18.7769 5.66616 18.9999 5.30456 19.1473C5.75999 19.3185 5.9375 19.5893 5.87228 20.0074C5.79045 20.5351 5.32834 20.9295 4.72681 20.9295H2.56006L3.06398 17.6883H4.96841ZM11.2796 18.3777C11.8333 18.3777 12.0913 18.715 12.0046 19.2709L11.7467 20.9295H10.7539L10.9676 19.556C11.0065 19.3044 10.9338 19.1901 10.7382 19.1901C10.5809 19.1901 10.4385 19.2757 10.2999 19.4606L10.0716 20.9295H9.07896L9.46905 18.42H10.4617L10.4106 18.748C10.7242 18.482 10.9646 18.3777 11.2796 18.3777ZM13.7609 17.6883L13.5125 19.2851L14.463 18.42H15.6896L14.4687 19.4895L15.4476 20.9295H14.2019L13.4467 19.7697H13.4372L13.2569 20.9295H12.2641L12.7681 17.6883H13.7609ZM17.4197 17.6883L16.9158 20.9295H15.7755L16.2793 17.6883H17.4197ZM19.6063 17.6883C20.8661 17.6883 21.2301 18.6007 21.1135 19.3516C20.999 20.0881 20.4146 20.9294 19.3073 20.9294H17.4701L17.974 17.6883H19.6063ZM7.67993 19.8409C7.41528 20.0074 6.92819 19.9789 6.87522 20.321C6.84989 20.4829 6.95077 20.6014 7.11299 20.6014C7.27062 20.6014 7.46234 20.5351 7.61214 20.4306C7.60193 20.3735 7.60677 20.3117 7.62439 20.1976L7.67993 19.8409ZM4.29092 19.5276H3.91881L3.77756 20.4353H4.12111C4.50301 20.4353 4.72705 20.2832 4.77675 19.9647C4.81897 19.6938 4.6632 19.5276 4.29092 19.5276ZM19.3001 18.4579H18.9946L18.7301 20.1596H19.031C19.5844 20.1596 19.8891 19.8887 19.9795 19.309C20.0456 18.8812 19.9156 18.4579 19.3001 18.4579ZM4.4572 18.1823H4.12792L3.9955 19.0331H4.32472C4.69701 19.0331 4.8707 18.8381 4.90689 18.6054C4.94518 18.3584 4.82949 18.1823 4.4572 18.1823ZM7.41626 4.79114C7.77624 4.79114 8.0544 4.86608 8.19864 5.00252C8.2994 5.09804 8.33703 5.22312 8.30735 5.36509C8.27838 5.50153 8.12512 5.67955 7.89492 5.84002C7.24299 6.29781 7.35588 6.77208 7.40623 6.9068C7.5448 7.27819 7.97944 7.49281 8.35662 7.526L8.4578 7.53053H9.30027L8.51442 12.4774H8.52786C8.24724 14.252 8.03533 15.6076 7.9831 15.9456L7.97741 15.9825H3.31485C3.40421 15.4013 4.57141 8.01444 4.6453 7.5319C4.95553 7.53262 5.50323 7.53363 5.50323 7.53363C6.06372 7.53053 6.58001 7.27484 6.81952 6.8817C7.05353 6.50057 6.96448 6.0916 6.58867 5.81462C6.46336 5.72249 6.31948 5.57332 6.34743 5.38847C6.38607 5.13896 6.81092 4.79114 7.41626 4.79114ZM14.758 3.19995C19.0614 3.19995 22.0618 5.08329 21.3157 9.783C20.7245 13.5012 17.7641 15.8857 14.1082 15.9796L13.8835 15.9825H12.992L13.5964 12.1536C15.119 12.1364 16.3946 11.4226 16.6579 9.76617C16.9318 8.04033 16.099 7.26789 14.5292 7.20805L14.3698 7.20443L14.3701 7.20026H13.1405C12.8571 7.20026 12.493 7.0439 12.3988 6.79166C12.3694 6.71332 12.3094 6.43182 12.7681 6.11017C12.9441 5.98681 13.2498 5.73451 13.3137 5.43278C13.3665 5.17983 13.2919 4.93585 13.1083 4.76295C12.8995 4.56572 12.5503 4.46087 12.0989 4.46087C11.3451 4.46087 10.7688 4.91486 10.7032 5.33827C10.699 5.36575 10.6963 5.39775 10.6963 5.43314C10.6963 5.60152 10.7622 5.84966 11.0749 6.08025C11.1895 6.16447 11.301 6.28919 11.301 6.45519C11.301 6.5315 11.2775 6.61602 11.2202 6.70952C11.0574 6.9763 10.6989 7.16448 10.3034 7.19828L10.1838 7.20371L9.37688 7.20199L10.0126 3.19995H14.758Z" fill="currentColor"/>',Da._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.69271 18.3777C8.27476 18.3777 8.78711 18.615 8.68868 19.247L8.57776 19.9599C8.53858 20.2121 8.54587 20.2877 8.82671 20.2928L8.54127 20.9628C8.04457 20.996 7.80446 20.9437 7.68489 20.7298C7.42137 20.8916 7.13175 20.9722 6.82164 20.9722C6.25858 20.9722 6.06506 20.6825 6.11517 20.3593C6.13883 20.2069 6.22914 20.0552 6.37254 19.9314C6.68116 19.6654 7.44586 19.6269 7.74509 19.423C7.7709 19.1949 7.67838 19.1138 7.39688 19.1138C7.0676 19.1138 6.79285 19.2234 6.32321 19.5417L6.43789 18.8047C6.84631 18.5105 7.23908 18.3777 7.69271 18.3777ZM4.96835 17.6883C5.77964 17.6883 5.97859 18.0973 5.92018 18.4722C5.87282 18.7769 5.6661 18.9999 5.3045 19.1473C5.75993 19.3185 5.93744 19.5893 5.87222 20.0074C5.79039 20.5351 5.32827 20.9295 4.72675 20.9295H2.56L3.06392 17.6883H4.96835ZM11.2796 18.3777C11.8333 18.3777 12.0912 18.715 12.0045 19.2709L11.7466 20.9295H10.7539L10.9676 19.556C11.0064 19.3044 10.9337 19.1901 10.7381 19.1901C10.5808 19.1901 10.4384 19.2757 10.2999 19.4606L10.0716 20.9295H9.0789L9.46898 18.42H10.4617L10.4105 18.748C10.7242 18.482 10.9645 18.3777 11.2796 18.3777ZM13.7608 17.6883L13.5124 19.2851L14.463 18.42H15.6896L14.4686 19.4895L15.4475 20.9295H14.2018L13.4466 19.7697H13.4372L13.2568 20.9295H12.264L12.7681 17.6883H13.7608ZM17.4197 17.6883L16.9157 20.9295H15.7754L16.2793 17.6883H17.4197ZM19.6062 17.6883C20.866 17.6883 21.2301 18.6007 21.1135 19.3516C20.9989 20.0881 20.4145 20.9294 19.3073 20.9294H17.47L17.9739 17.6883H19.6062ZM7.67987 19.8409C7.41522 20.0074 6.92813 19.9789 6.87515 20.321C6.84983 20.4829 6.95071 20.6014 7.11293 20.6014C7.27055 20.6014 7.46228 20.5351 7.61208 20.4306C7.60187 20.3735 7.6067 20.3117 7.62432 20.1976L7.67987 19.8409ZM4.29086 19.5276H3.91875L3.77749 20.4353H4.12105C4.50295 20.4353 4.72699 20.2832 4.77669 19.9647C4.81891 19.6938 4.66314 19.5276 4.29086 19.5276ZM19.3 18.4579H18.9945L18.7301 20.1596H19.0309C19.5843 20.1596 19.889 19.8887 19.9794 19.309C20.0456 18.8812 19.9156 18.4579 19.3 18.4579ZM4.45714 18.1823H4.12786L3.99544 19.0331H4.32466C4.69695 19.0331 4.87064 18.8381 4.90683 18.6054C4.94512 18.3584 4.82943 18.1823 4.45714 18.1823ZM7.4162 4.79114C7.77618 4.79114 8.05434 4.86608 8.19858 5.00252C8.29934 5.09804 8.33697 5.22312 8.30728 5.36509C8.27832 5.50153 8.12505 5.67955 7.89486 5.84002C7.24293 6.29781 7.35582 6.77208 7.40617 6.9068C7.54474 7.27819 7.97938 7.49281 8.35656 7.526L8.45774 7.53053H9.3002L8.51436 12.4774H8.5278C8.24718 14.252 8.03526 15.6076 7.98304 15.9456L7.97735 15.9825H3.31479C3.40415 15.4013 4.57135 8.01444 4.64524 7.5319C4.95546 7.53262 5.50317 7.53363 5.50317 7.53363C6.06366 7.53053 6.57995 7.27484 6.81946 6.8817C7.05347 6.50057 6.96442 6.0916 6.58861 5.81462C6.4633 5.72249 6.31941 5.57332 6.34737 5.38847C6.38601 5.13896 6.81086 4.79114 7.4162 4.79114ZM14.758 3.19995C19.0613 3.19995 22.0618 5.08329 21.3156 9.783C20.7244 13.5012 17.764 15.8857 14.1081 15.9796L13.8834 15.9825H12.992L13.5963 12.1536C15.119 12.1364 16.3945 11.4226 16.6579 9.76617C16.9317 8.04033 16.0989 7.26789 14.5292 7.20805L14.3697 7.20443L14.37 7.20026H13.1404C12.8571 7.20026 12.493 7.0439 12.3987 6.79166C12.3694 6.71332 12.3094 6.43182 12.768 6.11017C12.944 5.98681 13.2498 5.73451 13.3136 5.43278C13.3664 5.17983 13.2919 4.93585 13.1083 4.76295C12.8995 4.56572 12.5502 4.46087 12.0988 4.46087C11.345 4.46087 10.7687 4.91486 10.7031 5.33827C10.699 5.36575 10.6962 5.39775 10.6962 5.43314C10.6962 5.60152 10.7622 5.84966 11.0748 6.08025C11.1894 6.16447 11.3009 6.28919 11.3009 6.45519C11.3009 6.5315 11.2774 6.61602 11.2201 6.70952C11.0573 6.9763 10.6988 7.16448 10.3033 7.19828L10.1838 7.20371L9.37682 7.20199L10.0126 3.19995H14.758Z" fill="currentColor"/>',Da._name="brand-bankid",Da._width=24,Da._height=24,Da._viewBox="0 0 24 24",Da=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-bankid")],Da);const Ka=e=>{Da.define();const t=(0,n.p)("gds-icon-brand-bankid"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ua=class extends R.M{};Ua._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.41465 5.48386C9.06345 0.073537 17.6831 1.14151 20.9054 7.46137C18.6371 7.46215 15.0851 7.46074 13.1613 7.46137C11.766 7.46183 10.8652 7.43012 9.88955 7.94371C8.74266 8.54746 7.87718 9.66653 7.57515 10.9811L4.41465 5.48386Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.67313 11.9997C8.67313 13.8333 10.1641 15.3251 11.9968 15.3251C13.8293 15.3251 15.3202 13.8334 15.3202 11.9997C15.3202 10.1661 13.8293 8.67418 11.9968 8.67418C10.1641 8.67418 8.67313 10.1661 8.67313 11.9997Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2866 16.3523C11.4211 16.9067 9.23814 16.2919 8.04234 14.2278C7.12952 12.6523 4.71778 8.4509 3.62167 6.54058C-0.21743 12.4248 3.09135 20.4434 10.0611 21.812L13.2866 16.3523Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.084 8.67418C16.6377 10.1192 16.9762 12.4592 15.9237 14.2736C15.1307 15.6406 12.6 19.9119 11.3735 21.9801C18.5545 22.4228 23.7894 15.385 21.4248 8.67418H15.084Z" fill="currentColor"/>',Ua._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.41465 5.48386C9.06345 0.073537 17.6831 1.14151 20.9054 7.46137C18.6371 7.46215 15.0851 7.46074 13.1613 7.46137C11.766 7.46183 10.8652 7.43012 9.88955 7.94371C8.74266 8.54746 7.87718 9.66653 7.57515 10.9811L4.41465 5.48386Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.67313 11.9997C8.67313 13.8333 10.1641 15.3251 11.9968 15.3251C13.8293 15.3251 15.3202 13.8334 15.3202 11.9997C15.3202 10.1661 13.8293 8.67418 11.9968 8.67418C10.1641 8.67418 8.67313 10.1661 8.67313 11.9997Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2866 16.3523C11.4211 16.9067 9.23814 16.2919 8.04234 14.2278C7.12952 12.6523 4.71778 8.4509 3.62167 6.54058C-0.21743 12.4248 3.09135 20.4434 10.0611 21.812L13.2866 16.3523Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.084 8.67418C16.6377 10.1192 16.9762 12.4592 15.9237 14.2736C15.1307 15.6406 12.6 19.9119 11.3735 21.9801C18.5545 22.4228 23.7894 15.385 21.4248 8.67418H15.084Z" fill="currentColor"/>',Ua._name="brand-chrome",Ua._width=24,Ua._height=24,Ua._viewBox="0 0 24 24",Ua=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-chrome")],Ua);const Ja=e=>{Ua.define();const t=(0,n.p)("gds-icon-brand-chrome"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Qa=class extends R.M{};Qa._regularSVG='<path d="M9.58404 21.706V15.0561H7.52015V12H9.58404V10.6833C9.58404 7.27944 11.124 5.70333 14.464 5.70333C15.0963 5.70333 16.1879 5.82722 16.6363 5.95111V8.71944C16.4001 8.69556 15.9879 8.68333 15.4801 8.68333C13.8401 8.68333 13.2079 9.30333 13.2079 10.9194V12H16.4763L15.9163 15.0556H13.2124V21.9277C18.1637 21.3279 22 17.112 22 12C22 6.47722 17.5228 2 12 2C6.47722 2 2 6.47722 2 12C2 16.6899 5.22813 20.6253 9.58404 21.706Z" fill="currentColor"/>',Qa._solidSVG='<path d="M9.58404 21.706V15.0561H7.52015V12H9.58404V10.6833C9.58404 7.27944 11.124 5.70333 14.464 5.70333C15.0963 5.70333 16.1879 5.82722 16.6363 5.95111V8.71944C16.4001 8.69556 15.9879 8.68333 15.4801 8.68333C13.8401 8.68333 13.2079 9.30333 13.2079 10.9194V12H16.4763L15.9163 15.0556H13.2124V21.9277C18.1637 21.3279 22 17.112 22 12C22 6.47722 17.5228 2 12 2C6.47722 2 2 6.47722 2 12C2 16.6899 5.22813 20.6253 9.58404 21.706Z" fill="currentColor"/>',Qa._name="brand-facebook",Qa._width=24,Qa._height=24,Qa._viewBox="0 0 24 24",Qa=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-facebook")],Qa);const Xa=e=>{Qa.define();const t=(0,n.p)("gds-icon-brand-facebook"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ec=class extends R.M{};ec._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66524 2C6.82524 2 5.33191 3.49333 5.33191 5.33333C5.33191 7.16852 6.81743 8.65884 8.65079 8.66664C6.81744 8.67445 5.33193 10.1648 5.33193 11.9999C5.33193 13.8399 6.82526 15.3333 8.66527 15.3333H11.9986V12.0205C12.0097 13.851 13.4987 15.3333 15.3319 15.3333C17.1719 15.3333 18.6652 13.8399 18.6652 11.9999C18.6652 10.1646 17.1795 8.67424 15.346 8.66664C17.1795 8.65904 18.6652 7.16864 18.6652 5.33333C18.6652 3.49333 17.1719 2 15.3319 2H8.66524ZM15.3113 8.66667H11.9986V11.9794C12.0096 10.1557 13.4876 8.67769 15.3113 8.66667Z" fill="currentColor"/><path d="M8.66527 22C10.5053 22 11.9986 20.5067 11.9986 18.6667V15.3333H8.66527C6.82526 15.3333 5.33193 16.8267 5.33193 18.6667C5.33193 20.5067 6.82526 22 8.66527 22Z" fill="currentColor"/>',ec._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66527 2C6.82527 2 5.33193 3.49333 5.33193 5.33333C5.33193 7.16852 6.81745 8.65884 8.65082 8.66664C6.81747 8.67445 5.33195 10.1648 5.33195 11.9999C5.33195 13.8399 6.82529 15.3333 8.66529 15.3333H11.9986V12.0205C12.0097 13.851 13.4987 15.3333 15.3319 15.3333C17.1719 15.3333 18.6652 13.8399 18.6652 11.9999C18.6652 10.1646 17.1795 8.67424 15.346 8.66664C17.1795 8.65904 18.6652 7.16864 18.6652 5.33333C18.6652 3.49333 17.1719 2 15.3319 2H8.66527ZM15.3114 8.66667H11.9986V11.9794C12.0096 10.1557 13.4876 8.67769 15.3114 8.66667Z" fill="currentColor"/><path d="M8.66529 22C10.5053 22 11.9986 20.5067 11.9986 18.6667V15.3333H8.66529C6.82529 15.3333 5.33195 16.8267 5.33195 18.6667C5.33195 20.5067 6.82529 22 8.66529 22Z" fill="currentColor"/>',ec._name="brand-figma",ec._width=24,ec._height=24,ec._viewBox="0 0 24 24",ec=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-figma")],ec);const tc=e=>{ec.define();const t=(0,n.p)("gds-icon-brand-figma"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let rc=class extends R.M{};rc._regularSVG='<path d="M19.9861 5.93204C19.6582 5.49639 19.2959 5.08998 18.9033 4.71639C18.6518 4.46922 18.3849 4.24044 18.1053 4.02976C17.6325 3.62714 17.0852 3.28196 16.4588 3.01119C15.1932 2.38816 13.8082 2.04377 12.3971 2.00221C10.0758 1.95564 8.47202 2.65422 7.56437 3.21614L7.56351 3.21665C7.2422 3.40751 6.94361 3.63438 6.67351 3.89286C8.26744 2.99996 10.1164 2.64952 11.925 2.90284C15.4605 3.36767 18.693 6.12288 18.693 9.75843C18.693 12.5557 16.5353 14.6923 14.0085 14.5388C10.2548 14.3134 9.30854 10.4564 11.2613 8.78993C10.7348 8.67648 9.74529 8.89888 9.05629 9.93074C8.43804 10.8574 8.47304 12.2875 8.85454 13.3021C8.61066 12.8017 8.44502 12.2667 8.36351 11.7159C7.86951 8.37243 10.1108 5.52105 12.166 4.81502C11.0573 3.84478 8.27901 3.91065 6.21126 5.43464C5.0117 6.31878 4.15157 7.57434 3.69519 9.07024C3.82576 7.89096 4.17641 6.74632 4.72931 5.69611C4.03706 6.05501 3.15556 7.19005 2.72056 8.24144C2.08734 9.84559 1.86408 11.5828 2.07106 13.2953L2.0839 13.4085C2.09422 13.5003 2.10451 13.592 2.11656 13.6832C2.37578 15.1786 2.97026 16.5955 3.85523 17.8274C4.7402 19.0593 5.8926 20.074 7.22567 20.7951C8.55874 21.5162 10.0377 21.925 11.5513 21.9906C13.0649 22.0562 14.5736 21.777 15.9639 21.174C17.3542 20.5709 18.5898 19.6597 19.5777 18.5091C20.5656 17.3584 21.28 15.9982 21.6672 14.5308C22.0544 13.0635 22.1043 11.5273 21.8131 10.0379C21.5219 8.54844 20.8972 7.1446 19.9861 5.93204Z" fill="currentColor"/>',rc._solidSVG='<path d="M19.9861 5.93204C19.6582 5.49639 19.2959 5.08998 18.9033 4.71639C18.6518 4.46922 18.3849 4.24044 18.1053 4.02976C17.6325 3.62714 17.0852 3.28196 16.4588 3.01119C15.1932 2.38816 13.8082 2.04377 12.3971 2.00221C10.0758 1.95564 8.47202 2.65422 7.56437 3.21614L7.56351 3.21665C7.2422 3.40751 6.94361 3.63438 6.67351 3.89286C8.26744 2.99996 10.1164 2.64952 11.925 2.90284C15.4605 3.36767 18.693 6.12288 18.693 9.75843C18.693 12.5557 16.5353 14.6923 14.0085 14.5388C10.2548 14.3134 9.30854 10.4564 11.2613 8.78993C10.7348 8.67648 9.74529 8.89888 9.05629 9.93074C8.43804 10.8574 8.47304 12.2875 8.85454 13.3021C8.61066 12.8017 8.44502 12.2667 8.36351 11.7159C7.86951 8.37243 10.1108 5.52105 12.166 4.81502C11.0573 3.84478 8.27901 3.91065 6.21126 5.43464C5.0117 6.31878 4.15157 7.57434 3.69519 9.07024C3.82576 7.89096 4.17641 6.74632 4.72931 5.69611C4.03706 6.05501 3.15556 7.19005 2.72056 8.24144C2.08734 9.84559 1.86408 11.5828 2.07106 13.2953L2.0839 13.4085C2.09422 13.5003 2.10451 13.592 2.11656 13.6832C2.37578 15.1786 2.97026 16.5955 3.85523 17.8274C4.7402 19.0593 5.8926 20.074 7.22567 20.7951C8.55874 21.5162 10.0377 21.925 11.5513 21.9906C13.0649 22.0562 14.5736 21.777 15.9639 21.174C17.3542 20.5709 18.5898 19.6597 19.5777 18.5091C20.5656 17.3584 21.28 15.9982 21.6672 14.5308C22.0544 13.0635 22.1043 11.5273 21.8131 10.0379C21.5219 8.54844 20.8972 7.1446 19.9861 5.93204Z" fill="currentColor"/>',rc._name="brand-firefox",rc._width=24,rc._height=24,rc._viewBox="0 0 24 24",rc=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-firefox")],rc);const oc=e=>{rc.define();const t=(0,n.p)("gds-icon-brand-firefox"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let sc=class extends R.M{};sc._regularSVG='<path d="M12 1.95068C17.525 1.95068 22 6.42568 22 11.9507C21.9995 14.0459 21.3419 16.0883 20.1198 17.7902C18.8977 19.4922 17.1727 20.768 15.1875 21.4382C14.6875 21.5382 14.5 21.2257 14.5 20.9632C14.5 20.6257 14.5125 19.5507 14.5125 18.2132C14.5125 17.2757 14.2 16.6757 13.8375 16.3632C16.0625 16.1132 18.4 15.2632 18.4 11.4257C18.4 10.3257 18.0125 9.43818 17.375 8.73818C17.475 8.48818 17.825 7.46318 17.275 6.08818C17.275 6.08818 16.4375 5.81318 14.525 7.11318C13.725 6.88818 12.875 6.77568 12.025 6.77568C11.175 6.77568 10.325 6.88818 9.525 7.11318C7.6125 5.82568 6.775 6.08818 6.775 6.08818C6.225 7.46318 6.575 8.48818 6.675 8.73818C6.0375 9.43818 5.65 10.3382 5.65 11.4257C5.65 15.2507 7.975 16.1132 10.2 16.3632C9.9125 16.6132 9.65 17.0507 9.5625 17.7007C8.9875 17.9632 7.55 18.3882 6.65 16.8757C6.4625 16.5757 5.9 15.8382 5.1125 15.8507C4.275 15.8632 4.775 16.3257 5.125 16.5132C5.55 16.7507 6.0375 17.6382 6.15 17.9257C6.35 18.4882 7 19.5632 9.5125 19.1007C9.5125 19.9382 9.525 20.7257 9.525 20.9632C9.525 21.2257 9.3375 21.5257 8.8375 21.4382C6.8458 20.7752 5.11342 19.502 3.88611 17.799C2.65881 16.096 1.9989 14.0498 2 11.9507C2 6.42568 6.475 1.95068 12 1.95068Z" fill="currentColor"/>',sc._solidSVG='<path d="M12 1.95068C17.525 1.95068 22 6.42568 22 11.9507C21.9995 14.0459 21.3419 16.0883 20.1198 17.7902C18.8977 19.4922 17.1727 20.768 15.1875 21.4382C14.6875 21.5382 14.5 21.2257 14.5 20.9632C14.5 20.6257 14.5125 19.5507 14.5125 18.2132C14.5125 17.2757 14.2 16.6757 13.8375 16.3632C16.0625 16.1132 18.4 15.2632 18.4 11.4257C18.4 10.3257 18.0125 9.43818 17.375 8.73818C17.475 8.48818 17.825 7.46318 17.275 6.08818C17.275 6.08818 16.4375 5.81318 14.525 7.11318C13.725 6.88818 12.875 6.77568 12.025 6.77568C11.175 6.77568 10.325 6.88818 9.525 7.11318C7.6125 5.82568 6.775 6.08818 6.775 6.08818C6.225 7.46318 6.575 8.48818 6.675 8.73818C6.0375 9.43818 5.65 10.3382 5.65 11.4257C5.65 15.2507 7.975 16.1132 10.2 16.3632C9.9125 16.6132 9.65 17.0507 9.5625 17.7007C8.9875 17.9632 7.55 18.3882 6.65 16.8757C6.4625 16.5757 5.9 15.8382 5.1125 15.8507C4.275 15.8632 4.775 16.3257 5.125 16.5132C5.55 16.7507 6.0375 17.6382 6.15 17.9257C6.35 18.4882 7 19.5632 9.5125 19.1007C9.5125 19.9382 9.525 20.7257 9.525 20.9632C9.525 21.2257 9.3375 21.5257 8.8375 21.4382C6.8458 20.7752 5.11342 19.502 3.88611 17.799C2.65881 16.096 1.9989 14.0498 2 11.9507C2 6.42568 6.475 1.95068 12 1.95068Z" fill="currentColor"/>',sc._name="brand-github",sc._width=24,sc._height=24,sc._viewBox="0 0 24 24",sc=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-github")],sc);const nc=e=>{sc.define();const t=(0,n.p)("gds-icon-brand-github"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let lc=class extends R.M{};lc._regularSVG='<path d="M20.7999 7C17.0999 7 13.8999 9.1 12.1999 12.2C11.9999 10.2 11.1999 8.4 10.0999 6.8C8.69995 4.7 6.59995 3.1 4.29995 2.2L3.69995 2L3.49995 2.5C2.59995 3.9 2.09995 5.5 1.99995 7.2C1.89995 8.9 2.29995 10.5 2.99995 12.1C3.69995 13.6 4.79995 14.9 6.19995 15.8C7.49995 16.8 9.09995 17.4 10.6999 17.5C10.3999 19 9.99995 21 9.99995 21V21.1C9.99995 21.2 9.99995 21.2 10.0999 21.3C10.0999 21.3 10.0999 21.4 10.1999 21.4C10.2999 21.4 10.2999 21.4 10.3999 21.4H11.4999C11.5999 21.4 11.6999 21.4 11.7999 21.4C11.8999 21.3 11.8999 21.2 11.8999 21.1C11.8999 21.1 12.0999 18.8 12.1999 17.6C17.2999 17.3 21.3999 13 21.3999 7.7V7H20.7999ZM3.29995 7.7C3.29995 6.3 3.69995 4.9 4.29995 3.7C8.39995 5.5 11.0999 9.6 11.0999 14.1C11.0999 14.8 10.9999 15.5 10.8999 16.2C8.79995 16 6.89995 15 5.49995 13.4C4.09995 11.9 3.29995 9.8 3.29995 7.7ZM12.3999 16.2C12.6999 12.1 15.9999 8.7 20.0999 8.4C19.7999 12.6 16.4999 15.9 12.3999 16.2Z" fill="currentColor"/>',lc._solidSVG='<path d="M20.8 7C17.1 7 13.9 9.1 12.2 12.2C12 10.2 11.2 8.4 10.1 6.8C8.70001 4.7 6.60001 3.1 4.30001 2.2L3.70001 2L3.50001 2.5C2.60001 3.9 2.10001 5.5 2.00001 7.2C1.90001 8.9 2.30001 10.5 3.00001 12.1C3.70001 13.6 4.80001 14.9 6.20001 15.8C7.50001 16.8 9.10001 17.4 10.7 17.5C10.4 19 10 21 10 21V21.1C10 21.2 10 21.2 10.1 21.3C10.1 21.3 10.1 21.4 10.2 21.4C10.3 21.4 10.3 21.4 10.4 21.4H11.5C11.6 21.4 11.7 21.4 11.8 21.4C11.9 21.3 11.9 21.2 11.9 21.1C11.9 21.1 12.1 18.8 12.2 17.6C17.3 17.3 21.4 13 21.4 7.7V7H20.8Z" fill="currentColor"/>',lc._name="brand-green",lc._width=24,lc._height=24,lc._viewBox="0 0 24 24",lc=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-green")],lc);const ic=e=>{lc.define();const t=(0,n.p)("gds-icon-brand-green"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ac=class extends R.M{};ac._regularSVG='<path d="M12 4.21173C14.5365 4.21173 14.837 4.22123 15.8389 4.267C16.4411 4.27427 17.0377 4.38499 17.6024 4.59432C18.0151 4.74662 18.3884 4.9895 18.6949 5.30509C19.0105 5.61156 19.2534 5.98488 19.4057 6.39759C19.615 6.96235 19.7257 7.55888 19.733 8.16114C19.7788 9.16295 19.7883 9.4635 19.7883 12C19.7883 14.5365 19.7788 14.837 19.733 15.8389C19.7257 16.4411 19.615 17.0377 19.4057 17.6024C19.2476 18.0122 19.0055 18.3844 18.6949 18.6949C18.3844 19.0055 18.0122 19.2476 17.6024 19.4057C17.0377 19.615 16.4411 19.7257 15.8389 19.733C14.837 19.7788 14.5365 19.7883 12 19.7883C9.4635 19.7883 9.16295 19.7788 8.16114 19.733C7.55859 19.7258 6.96176 19.6151 6.39673 19.4057C5.98433 19.2533 5.61132 19.0104 5.30509 18.6949C4.9895 18.3884 4.74662 18.0151 4.59432 17.6024C4.38499 17.0377 4.27427 16.4411 4.267 15.8389C4.22123 14.837 4.21173 14.5365 4.21173 12C4.21173 9.4635 4.22123 9.16295 4.267 8.16114C4.27427 7.55888 4.38499 6.96235 4.59432 6.39759C4.74662 5.98488 4.9895 5.61156 5.30509 5.30509C5.61156 4.9895 5.98488 4.74662 6.39759 4.59432C6.96235 4.38499 7.55888 4.27427 8.16114 4.267C9.16295 4.22123 9.4635 4.21173 12 4.21173ZM12 2.5C9.42032 2.5 9.09645 2.51123 8.08341 2.557C7.29535 2.57272 6.51567 2.72194 5.7775 2.99832C5.1433 3.2371 4.56886 3.61141 4.09427 4.09514C3.61096 4.56956 3.23695 5.14369 2.99832 5.7775C2.72224 6.51572 2.57331 7.2954 2.55786 8.08341C2.51036 9.09645 2.5 9.42032 2.5 12C2.5 14.5797 2.51123 14.9035 2.557 15.9166C2.57272 16.7046 2.72194 17.4843 2.99832 18.2225C3.2371 18.8567 3.61141 19.4311 4.09514 19.9057C4.56956 20.389 5.14369 20.763 5.7775 21.0017C6.51572 21.2778 7.2954 21.4267 8.08341 21.4421C9.09645 21.4896 9.42032 21.5 12 21.5C14.5797 21.5 14.9035 21.4888 15.9166 21.443C16.7046 21.4273 17.4843 21.2781 18.2225 21.0017C18.8538 20.7576 19.4271 20.3843 19.9057 19.9057C20.3843 19.4271 20.7576 18.8538 21.0017 18.2225C21.2778 17.4843 21.4267 16.7046 21.4421 15.9166C21.4896 14.9035 21.5 14.5797 21.5 12C21.5 9.42032 21.4888 9.09645 21.443 8.08341C21.4273 7.29535 21.2781 6.51567 21.0017 5.7775C20.7629 5.1433 20.3886 4.56886 19.9049 4.09427C19.4304 3.61096 18.8563 3.23695 18.2225 2.99832C17.4843 2.72224 16.7046 2.57331 15.9166 2.55786C14.9035 2.51036 14.5797 2.5 12 2.5ZM12 7.12132C11.0351 7.12132 10.0918 7.40745 9.28955 7.94352C8.48725 8.4796 7.86194 9.24155 7.49269 10.133C7.12343 11.0245 7.02682 12.0054 7.21506 12.9518C7.40331 13.8982 7.86796 14.7675 8.55025 15.4497C9.23255 16.132 10.1018 16.5967 11.0482 16.7849C11.9946 16.9732 12.9755 16.8766 13.867 16.5073C14.7585 16.1381 15.5204 15.5127 16.0565 14.7105C16.5926 13.9082 16.8787 12.9649 16.8787 12C16.8787 10.7061 16.3647 9.46518 15.4497 8.55025C14.5348 7.63532 13.2939 7.12132 12 7.12132ZM12 15.167C11.3736 15.167 10.7613 14.9812 10.2405 14.6332C9.71973 14.2852 9.31382 13.7906 9.07412 13.2119C8.83442 12.6333 8.7717 11.9965 8.8939 11.3822C9.0161 10.7678 9.31772 10.2035 9.76063 9.76063C10.2035 9.31772 10.7678 9.0161 11.3822 8.8939C11.9965 8.7717 12.6333 8.83442 13.2119 9.07412C13.7906 9.31382 14.2852 9.71973 14.6332 10.2405C14.9812 10.7613 15.167 11.3736 15.167 12C15.167 12.8399 14.8333 13.6455 14.2394 14.2394C13.6455 14.8333 12.8399 15.167 12 15.167ZM17.0713 5.78873C16.8458 5.78873 16.6254 5.85559 16.4379 5.98085C16.2505 6.10612 16.1043 6.28416 16.0181 6.49247C15.9318 6.70078 15.9092 6.92999 15.9532 7.15113C15.9972 7.37227 16.1057 7.5754 16.2652 7.73483C16.4246 7.89426 16.6277 8.00284 16.8489 8.04682C17.07 8.09081 17.2992 8.06823 17.5075 7.98195C17.7158 7.89567 17.8939 7.74955 18.0191 7.56208C18.1444 7.37461 18.2113 7.1542 18.2113 6.92873C18.2113 6.62638 18.0912 6.33642 17.8774 6.12263C17.6636 5.90883 17.3736 5.78873 17.0713 5.78873Z" fill="currentColor"/>',ac._solidSVG='<path d="M12 4.21173C14.5365 4.21173 14.837 4.22123 15.8389 4.267C16.4411 4.27427 17.0377 4.38499 17.6024 4.59432C18.0151 4.74662 18.3884 4.9895 18.6949 5.30509C19.0105 5.61156 19.2534 5.98488 19.4057 6.39759C19.615 6.96235 19.7257 7.55888 19.733 8.16114C19.7788 9.16295 19.7883 9.4635 19.7883 12C19.7883 14.5365 19.7788 14.837 19.733 15.8389C19.7257 16.4411 19.615 17.0377 19.4057 17.6024C19.2476 18.0122 19.0055 18.3844 18.6949 18.6949C18.3844 19.0055 18.0122 19.2476 17.6024 19.4057C17.0377 19.615 16.4411 19.7257 15.8389 19.733C14.837 19.7788 14.5365 19.7883 12 19.7883C9.4635 19.7883 9.16295 19.7788 8.16114 19.733C7.55859 19.7258 6.96176 19.6151 6.39673 19.4057C5.98433 19.2533 5.61132 19.0104 5.30509 18.6949C4.9895 18.3884 4.74662 18.0151 4.59432 17.6024C4.38499 17.0377 4.27427 16.4411 4.267 15.8389C4.22123 14.837 4.21173 14.5365 4.21173 12C4.21173 9.4635 4.22123 9.16295 4.267 8.16114C4.27427 7.55888 4.38499 6.96235 4.59432 6.39759C4.74662 5.98488 4.9895 5.61156 5.30509 5.30509C5.61156 4.9895 5.98488 4.74662 6.39759 4.59432C6.96235 4.38499 7.55888 4.27427 8.16114 4.267C9.16295 4.22123 9.4635 4.21173 12 4.21173ZM12 2.5C9.42032 2.5 9.09645 2.51123 8.08341 2.557C7.29535 2.57272 6.51567 2.72194 5.7775 2.99832C5.1433 3.2371 4.56886 3.61141 4.09427 4.09514C3.61096 4.56956 3.23695 5.14369 2.99832 5.7775C2.72224 6.51572 2.57331 7.2954 2.55786 8.08341C2.51036 9.09645 2.5 9.42032 2.5 12C2.5 14.5797 2.51123 14.9035 2.557 15.9166C2.57272 16.7046 2.72194 17.4843 2.99832 18.2225C3.2371 18.8567 3.61141 19.4311 4.09514 19.9057C4.56956 20.389 5.14369 20.763 5.7775 21.0017C6.51572 21.2778 7.2954 21.4267 8.08341 21.4421C9.09645 21.4896 9.42032 21.5 12 21.5C14.5797 21.5 14.9035 21.4888 15.9166 21.443C16.7046 21.4273 17.4843 21.2781 18.2225 21.0017C18.8538 20.7576 19.4271 20.3843 19.9057 19.9057C20.3843 19.4271 20.7576 18.8538 21.0017 18.2225C21.2778 17.4843 21.4267 16.7046 21.4421 15.9166C21.4896 14.9035 21.5 14.5797 21.5 12C21.5 9.42032 21.4888 9.09645 21.443 8.08341C21.4273 7.29535 21.2781 6.51567 21.0017 5.7775C20.7629 5.1433 20.3886 4.56886 19.9049 4.09427C19.4304 3.61096 18.8563 3.23695 18.2225 2.99832C17.4843 2.72224 16.7046 2.57331 15.9166 2.55786C14.9035 2.51036 14.5797 2.5 12 2.5ZM12 7.12132C11.0351 7.12132 10.0918 7.40745 9.28955 7.94352C8.48725 8.4796 7.86194 9.24155 7.49269 10.133C7.12343 11.0245 7.02682 12.0054 7.21506 12.9518C7.40331 13.8982 7.86796 14.7675 8.55025 15.4497C9.23255 16.132 10.1018 16.5967 11.0482 16.7849C11.9946 16.9732 12.9755 16.8766 13.867 16.5073C14.7585 16.1381 15.5204 15.5127 16.0565 14.7105C16.5926 13.9082 16.8787 12.9649 16.8787 12C16.8787 10.7061 16.3647 9.46518 15.4497 8.55025C14.5348 7.63532 13.2939 7.12132 12 7.12132ZM12 15.167C11.3736 15.167 10.7613 14.9812 10.2405 14.6332C9.71973 14.2852 9.31382 13.7906 9.07412 13.2119C8.83442 12.6333 8.7717 11.9965 8.8939 11.3822C9.0161 10.7678 9.31772 10.2035 9.76063 9.76063C10.2035 9.31772 10.7678 9.0161 11.3822 8.8939C11.9965 8.7717 12.6333 8.83442 13.2119 9.07412C13.7906 9.31382 14.2852 9.71973 14.6332 10.2405C14.9812 10.7613 15.167 11.3736 15.167 12C15.167 12.8399 14.8333 13.6455 14.2394 14.2394C13.6455 14.8333 12.8399 15.167 12 15.167ZM17.0713 5.78873C16.8458 5.78873 16.6254 5.85559 16.4379 5.98085C16.2505 6.10612 16.1043 6.28416 16.0181 6.49247C15.9318 6.70078 15.9092 6.92999 15.9532 7.15113C15.9972 7.37227 16.1057 7.5754 16.2652 7.73483C16.4246 7.89426 16.6277 8.00284 16.8489 8.04682C17.07 8.09081 17.2992 8.06823 17.5075 7.98195C17.7158 7.89567 17.8939 7.74955 18.0191 7.56208C18.1444 7.37461 18.2113 7.1542 18.2113 6.92873C18.2113 6.62638 18.0912 6.33642 17.8774 6.12263C17.6636 5.90883 17.3736 5.78873 17.0713 5.78873Z" fill="currentColor"/>',ac._name="brand-instagram",ac._width=24,ac._height=24,ac._viewBox="0 0 24 24",ac=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-instagram")],ac);const cc=e=>{ac.define();const t=(0,n.p)("gds-icon-brand-instagram"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Cc=class extends R.M{};Cc._regularSVG='<path d="M19.65 3H4.35C3.99196 3 3.64858 3.14223 3.39541 3.39541C3.14223 3.64858 3 3.99196 3 4.35V19.65C3 20.008 3.14223 20.3514 3.39541 20.6046C3.64858 20.8578 3.99196 21 4.35 21H19.65C20.008 21 20.3514 20.8578 20.6046 20.6046C20.8578 20.3514 21 20.008 21 19.65V4.35C21 3.99196 20.8578 3.64858 20.6046 3.39541C20.3514 3.14223 20.008 3 19.65 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.625C6.74056 8.61616 6.4406 8.51632 6.18758 8.33797C5.93456 8.15962 5.7397 7.91066 5.62737 7.6222C5.51503 7.33374 5.49019 7.01857 5.55595 6.71607C5.6217 6.41358 5.77515 6.13716 5.9971 5.92138C6.21906 5.70559 6.49968 5.55999 6.80391 5.50278C7.10814 5.44556 7.42248 5.47927 7.70766 5.59969C7.99284 5.7201 8.23622 5.92189 8.40737 6.17983C8.57853 6.43778 8.66987 6.74044 8.67 7.05C8.66289 7.47331 8.4885 7.8766 8.18495 8.17173C7.88139 8.46685 7.47335 8.62982 7.05 8.625ZM18.3 18.3H15.6V14.034C15.6 12.756 15.06 12.297 14.358 12.297C14.1522 12.3107 13.9511 12.3649 13.7663 12.4566C13.5815 12.5482 13.4166 12.6755 13.2811 12.831C13.1457 12.9866 13.0422 13.1674 12.9768 13.363C12.9114 13.5586 12.8853 13.7652 12.9 13.971C12.8955 14.0129 12.8955 14.0551 12.9 14.097V18.3H10.2V10.2H12.81V11.37C13.0733 10.9695 13.435 10.6433 13.8605 10.4227C14.286 10.2021 14.761 10.0944 15.24 10.11C16.635 10.11 18.264 10.884 18.264 13.404L18.3 18.3Z" fill="currentColor"/>',Cc._solidSVG='<path d="M19.65 3H4.35C3.99196 3 3.64858 3.14223 3.39541 3.39541C3.14223 3.64858 3 3.99196 3 4.35V19.65C3 20.008 3.14223 20.3514 3.39541 20.6046C3.64858 20.8578 3.99196 21 4.35 21H19.65C20.008 21 20.3514 20.8578 20.6046 20.6046C20.8578 20.3514 21 20.008 21 19.65V4.35C21 3.99196 20.8578 3.64858 20.6046 3.39541C20.3514 3.14223 20.008 3 19.65 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.625C6.74056 8.61616 6.4406 8.51632 6.18758 8.33797C5.93456 8.15962 5.7397 7.91066 5.62737 7.6222C5.51503 7.33374 5.49019 7.01857 5.55595 6.71607C5.6217 6.41358 5.77515 6.13716 5.9971 5.92138C6.21906 5.70559 6.49968 5.55999 6.80391 5.50278C7.10814 5.44556 7.42248 5.47927 7.70766 5.59969C7.99284 5.7201 8.23622 5.92189 8.40737 6.17983C8.57853 6.43778 8.66987 6.74044 8.67 7.05C8.66289 7.47331 8.4885 7.8766 8.18495 8.17173C7.88139 8.46685 7.47335 8.62982 7.05 8.625ZM18.3 18.3H15.6V14.034C15.6 12.756 15.06 12.297 14.358 12.297C14.1522 12.3107 13.9511 12.3649 13.7663 12.4566C13.5815 12.5482 13.4166 12.6755 13.2811 12.831C13.1457 12.9866 13.0422 13.1674 12.9768 13.363C12.9114 13.5586 12.8853 13.7652 12.9 13.971C12.8955 14.0129 12.8955 14.0551 12.9 14.097V18.3H10.2V10.2H12.81V11.37C13.0733 10.9695 13.435 10.6433 13.8605 10.4227C14.286 10.2021 14.761 10.0944 15.24 10.11C16.635 10.11 18.264 10.884 18.264 13.404L18.3 18.3Z" fill="currentColor"/>',Cc._name="brand-linkedin",Cc._width=24,Cc._height=24,Cc._viewBox="0 0 24 24",Cc=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-linkedin")],Cc);const dc=e=>{Cc.define();const t=(0,n.p)("gds-icon-brand-linkedin"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let hc=class extends R.M{};hc._regularSVG='<path d="M4.90955 2.01344C5.28183 1.96523 5.65934 2.0476 5.97744 2.24644L16.8232 8.39588L14.0784 11.1669L4.90955 2.01344ZM4.07526 2.84557C4.02295 3.02673 3.99765 3.21459 4.00017 3.4031V20.5949C3.99765 20.7834 4.02295 20.9713 4.07526 21.1524L13.2525 11.999L4.07526 2.84557ZM14.0868 12.8311L4.90955 21.9846C5.28201 22.0371 5.66101 21.9544 5.97744 21.7516L16.8232 15.6021L14.0868 12.8311ZM21.1949 10.8839L17.9078 9.01998L14.9044 11.999L17.8995 14.9863L21.1866 13.1224C22.2711 12.5066 22.2711 11.4914 21.1866 10.8756L21.1949 10.8839Z" fill="currentColor"/>',hc._solidSVG='<path d="M4.90955 2.01344C5.28183 1.96523 5.65934 2.0476 5.97744 2.24644L16.8232 8.39588L14.0784 11.1669L4.90955 2.01344ZM4.07526 2.84557C4.02295 3.02673 3.99765 3.21459 4.00017 3.4031V20.5949C3.99765 20.7834 4.02295 20.9713 4.07526 21.1524L13.2525 11.999L4.07526 2.84557ZM14.0868 12.8311L4.90955 21.9846C5.28201 22.0371 5.66101 21.9544 5.97744 21.7516L16.8232 15.6021L14.0868 12.8311ZM21.1949 10.8839L17.9078 9.01998L14.9044 11.999L17.8995 14.9863L21.1866 13.1224C22.2711 12.5066 22.2711 11.4914 21.1866 10.8756L21.1949 10.8839Z" fill="currentColor"/>',hc._name="brand-play-store",hc._width=24,hc._height=24,hc._viewBox="0 0 24 24",hc=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-play-store")],hc);const uc=e=>{hc.define();const t=(0,n.p)("gds-icon-brand-play-store"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let pc=class extends R.M{};pc._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5004 8.44218C21.5004 8.21565 21.5004 7.98912 21.4994 7.76259C21.4983 7.57154 21.4962 7.38047 21.4909 7.18941C21.4799 6.77299 21.4551 6.3534 21.3812 5.94172C21.3062 5.52371 21.1832 5.13473 20.9901 4.75472C20.8001 4.38157 20.552 4.04062 20.2559 3.74453C19.9598 3.44844 19.6183 3.20038 19.2452 3.01037C18.8657 2.8172 18.4767 2.69475 18.0593 2.61928C17.6476 2.54539 17.2275 2.52058 16.811 2.5095C16.62 2.50422 16.4289 2.50211 16.2378 2.50106C16.0109 2.5 15.7839 2.5 15.557 2.5H8.44344C8.2165 2.5 7.98954 2.5 7.76259 2.50106C7.57153 2.50211 7.38047 2.50422 7.18941 2.5095C6.77299 2.52111 6.35287 2.54539 5.94119 2.61981C5.52318 2.69475 5.13473 2.81773 4.75525 3.0109C4.3821 3.20091 4.04062 3.44897 3.74453 3.74506C3.44844 4.04115 3.20038 4.3821 3.01037 4.75525C2.8172 5.13526 2.69423 5.52424 2.61928 5.94225C2.54539 6.35392 2.52058 6.77404 2.5095 7.18994C2.50422 7.381 2.50211 7.57206 2.50106 7.76312C2.5 7.98954 2.5 8.21649 2.5 8.44344V15.5565C2.5 15.7834 2.5 16.0104 2.50106 16.2373C2.50211 16.4284 2.50422 16.6194 2.5095 16.8105C2.52058 17.2269 2.54539 17.6465 2.61928 18.0582C2.69423 18.4762 2.8172 18.8652 3.01037 19.2452C3.20038 19.6183 3.44844 19.9593 3.74453 20.2554C4.04062 20.5515 4.3821 20.7995 4.75525 20.9895C5.13473 21.1827 5.52371 21.3052 5.94119 21.3806C6.35287 21.4545 6.77299 21.4793 7.18941 21.4904C7.38047 21.4957 7.57153 21.4978 7.76259 21.4989C7.94412 21.5001 8.12565 21.5 8.30717 21.5L15.5565 21.4999C15.7834 21.4999 16.0104 21.4999 16.2373 21.4989C16.4284 21.4978 16.6194 21.4957 16.8105 21.4904C17.2269 21.4793 17.647 21.4545 18.0587 21.3806C18.4767 21.3057 18.8652 21.1827 19.2447 20.9895C19.6178 20.7995 19.9593 20.5515 20.2554 20.2554C20.5515 19.9593 20.7995 19.6183 20.9895 19.2452C21.1827 18.8652 21.3057 18.4762 21.3806 18.0582C21.4545 17.6465 21.4793 17.2264 21.4904 16.8105C21.4957 16.6194 21.4978 16.4284 21.4989 16.2373C21.5001 16.0558 21.5 15.8743 21.5 15.6927L21.5004 8.44218ZM7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18ZM12 18C12 14.6863 9.31371 12 6 12V10C10.4183 10 14 13.5817 14 18H12ZM6 8C11.5228 8 16 12.4772 16 18H18C18 11.3726 12.6274 6 6 6V8Z" fill="currentColor"/>',pc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5004 8.44218C21.5004 8.21565 21.5004 7.98912 21.4994 7.76259C21.4983 7.57154 21.4962 7.38047 21.4909 7.18941C21.4799 6.77299 21.4551 6.3534 21.3812 5.94172C21.3062 5.52371 21.1832 5.13473 20.9901 4.75472C20.8001 4.38157 20.552 4.04062 20.2559 3.74453C19.9598 3.44844 19.6183 3.20038 19.2452 3.01037C18.8657 2.8172 18.4767 2.69475 18.0593 2.61928C17.6476 2.54539 17.2275 2.52058 16.811 2.5095C16.62 2.50422 16.4289 2.50211 16.2378 2.50106C16.0109 2.5 15.7839 2.5 15.557 2.5H8.44344C8.2165 2.5 7.98954 2.5 7.76259 2.50106C7.57153 2.50211 7.38047 2.50422 7.18941 2.5095C6.77299 2.52111 6.35287 2.54539 5.94119 2.61981C5.52318 2.69475 5.13473 2.81773 4.75525 3.0109C4.3821 3.20091 4.04062 3.44897 3.74453 3.74506C3.44844 4.04115 3.20038 4.3821 3.01037 4.75525C2.8172 5.13526 2.69423 5.52424 2.61928 5.94225C2.54539 6.35392 2.52058 6.77404 2.5095 7.18994C2.50422 7.381 2.50211 7.57206 2.50106 7.76312C2.5 7.98954 2.5 8.21649 2.5 8.44344V15.5565C2.5 15.7834 2.5 16.0104 2.50106 16.2373C2.50211 16.4284 2.50422 16.6194 2.5095 16.8105C2.52058 17.2269 2.54539 17.6465 2.61928 18.0582C2.69423 18.4762 2.8172 18.8652 3.01037 19.2452C3.20038 19.6183 3.44844 19.9593 3.74453 20.2554C4.04062 20.5515 4.3821 20.7995 4.75525 20.9895C5.13473 21.1827 5.52371 21.3052 5.94119 21.3806C6.35287 21.4545 6.77299 21.4793 7.18941 21.4904C7.38047 21.4957 7.57153 21.4978 7.76259 21.4989C7.94412 21.5001 8.12565 21.5 8.30717 21.5L15.5565 21.4999C15.7834 21.4999 16.0104 21.4999 16.2373 21.4989C16.4284 21.4978 16.6194 21.4957 16.8105 21.4904C17.2269 21.4793 17.647 21.4545 18.0587 21.3806C18.4767 21.3057 18.8652 21.1827 19.2447 20.9895C19.6178 20.7995 19.9593 20.5515 20.2554 20.2554C20.5515 19.9593 20.7995 19.6183 20.9895 19.2452C21.1827 18.8652 21.3057 18.4762 21.3806 18.0582C21.4545 17.6465 21.4793 17.2264 21.4904 16.8105C21.4957 16.6194 21.4978 16.4284 21.4989 16.2373C21.5001 16.0558 21.5 15.8743 21.5 15.6927L21.5004 8.44218ZM7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18ZM12 18C12 14.6863 9.31371 12 6 12V10C10.4183 10 14 13.5817 14 18H12ZM6 8C11.5228 8 16 12.4772 16 18H18C18 11.3726 12.6274 6 6 6V8Z" fill="currentColor"/>',pc._name="brand-rss-feed",pc._width=24,pc._height=24,pc._viewBox="0 0 24 24",pc=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-rss-feed")],pc);const gc=e=>{pc.define();const t=(0,n.p)("gds-icon-brand-rss-feed"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Mc=class extends R.M{};Mc._regularSVG='<path d="M14.9616 6.12292L11.994 8.32052C10.5975 7.12051 8.78639 6.88918 7.78992 6.88918C6.78618 6.88918 5.73152 7.17834 5.5715 7.89401C5.41149 8.58799 6.0661 9.13016 7.18622 9.43377C8.46636 9.77353 9.62285 10.0771 11.4194 10.5832C14.0815 11.3422 15.9072 12.4844 15.9072 15.1374C15.9072 18.8025 12.6341 20.6965 8.25543 20.6965C3.87678 20.6965 0.894641 18.4338 0 17.3784L3.13488 15.0507C5.33875 16.9591 6.86619 17.2266 8.14632 17.2266C9.61557 17.2266 10.9903 16.9157 11.1648 16.0916C11.3103 15.4266 10.7575 14.8989 9.50647 14.6097C8.09541 14.2844 6.89528 14.0242 5.56423 13.6772C1.9493 12.7374 0.931009 10.6482 0.931009 8.76871C0.931009 6.18798 3.34581 3.53495 7.77538 3.53495C12.3068 3.53495 14.9616 6.11569 14.9616 6.12292ZM33.8654 3.7952H20.6422V20.2121H34.1055V16.4242H25.2827V13.7784H31.3561V10.1567H25.2827V7.53979H33.8582V3.7952H33.8654ZM17.2237 24.0001H18.2492V0H17.2237V24.0001ZM35.8438 24.0001H36.8694V0H35.8438V24.0001ZM39.2624 20.2121H49.8817C52.7184 20.2121 55.0241 18.5133 55.0241 15.788C55.0241 13.6627 53.6275 12.2531 51.6637 11.6314C51.5982 11.6169 51.5401 11.6097 51.4746 11.6097C51.5401 11.6025 51.6055 11.5952 51.6637 11.5735C52.7911 11.1326 54.0276 9.95426 54.0276 7.95184C54.0276 5.40725 51.7655 3.78797 48.9725 3.78797H39.2551L39.2624 20.2121ZM43.9247 7.20726H47.6342C48.4852 7.20726 49.1762 7.87955 49.1762 8.64582C49.1762 9.41209 48.4852 10.0916 47.6342 10.0916H43.9247V7.20726ZM48.4561 16.5687H43.9174V13.576H48.4561C49.2562 13.576 49.9108 14.2193 49.9108 15.0724C49.9108 15.9181 49.2634 16.5687 48.4561 16.5687Z" fill="currentColor"/>',Mc._solidSVG='<path d="M14.9616 6.12292L11.994 8.32052C10.5975 7.12051 8.78639 6.88918 7.78992 6.88918C6.78618 6.88918 5.73152 7.17834 5.5715 7.89401C5.41149 8.58799 6.0661 9.13016 7.18622 9.43377C8.46636 9.77353 9.62285 10.0771 11.4194 10.5832C14.0815 11.3422 15.9072 12.4844 15.9072 15.1374C15.9072 18.8025 12.6341 20.6965 8.25543 20.6965C3.87678 20.6965 0.894641 18.4338 0 17.3784L3.13488 15.0507C5.33875 16.9591 6.86619 17.2266 8.14632 17.2266C9.61557 17.2266 10.9903 16.9157 11.1648 16.0916C11.3103 15.4266 10.7575 14.8989 9.50647 14.6097C8.09541 14.2844 6.89528 14.0242 5.56423 13.6772C1.9493 12.7374 0.931009 10.6482 0.931009 8.76871C0.931009 6.18798 3.34581 3.53495 7.77538 3.53495C12.3068 3.53495 14.9616 6.11569 14.9616 6.12292ZM33.8654 3.7952H20.6422V20.2121H34.1055V16.4242H25.2827V13.7784H31.3561V10.1567H25.2827V7.53979H33.8582V3.7952H33.8654ZM17.2237 24.0001H18.2492V0H17.2237V24.0001ZM35.8438 24.0001H36.8694V0H35.8438V24.0001ZM39.2624 20.2121H49.8817C52.7184 20.2121 55.0241 18.5133 55.0241 15.788C55.0241 13.6627 53.6275 12.2531 51.6637 11.6314C51.5982 11.6169 51.5401 11.6097 51.4746 11.6097C51.5401 11.6025 51.6055 11.5952 51.6637 11.5735C52.7911 11.1326 54.0276 9.95426 54.0276 7.95184C54.0276 5.40725 51.7655 3.78797 48.9725 3.78797H39.2551L39.2624 20.2121ZM43.9247 7.20726H47.6342C48.4852 7.20726 49.1762 7.87955 49.1762 8.64582C49.1762 9.41209 48.4852 10.0916 47.6342 10.0916H43.9247V7.20726ZM48.4561 16.5687H43.9174V13.576H48.4561C49.2562 13.576 49.9108 14.2193 49.9108 15.0724C49.9108 15.9181 49.2634 16.5687 48.4561 16.5687Z" fill="currentColor"/>',Mc._name="brand-seb",Mc._width=56,Mc._height=24,Mc._viewBox="0 0 56 24",Mc=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-seb")],Mc);const mc=e=>{Mc.define();const t=(0,n.p)("gds-icon-brand-seb"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Vc=class extends R.M{};Vc._regularSVG='<path d="M11.9993 2C6.4765 2 1.99915 6.47723 1.99915 12.0001C1.99915 17.5231 6.4765 22 11.9993 22C17.5228 22 21.9996 17.5231 21.9996 12.0001C21.9996 6.47759 17.5228 2.00048 11.9992 2.00048L11.9993 2ZM16.5853 16.423C16.4062 16.7167 16.0217 16.8099 15.7279 16.6295C13.38 15.1954 10.4242 14.8706 6.94329 15.6659C6.60785 15.7423 6.27349 15.5321 6.19706 15.1966C6.12028 14.861 6.32961 14.5266 6.66589 14.4502C10.4752 13.5796 13.7428 13.9546 16.3788 15.5656C16.6725 15.7459 16.7657 16.1292 16.5853 16.423ZM17.8093 13.6997C17.5837 14.0669 17.1036 14.1827 16.737 13.957C14.049 12.3044 9.95147 11.826 6.77205 12.7911C6.35971 12.9156 5.9242 12.6832 5.79905 12.2716C5.67486 11.8593 5.90736 11.4246 6.31899 11.2992C9.95076 10.1973 14.4657 10.731 17.5526 12.6279C17.9192 12.8536 18.035 13.3336 17.8093 13.6997ZM17.9144 10.8643C14.6914 8.94996 9.37386 8.77394 6.29666 9.70789C5.80252 9.85775 5.27996 9.5788 5.13021 9.08466C4.98046 8.59028 5.25918 8.06808 5.75368 7.91785C9.28609 6.84551 15.1583 7.05269 18.869 9.25554C19.3145 9.51933 19.4601 10.0934 19.1962 10.5372C18.9335 10.9817 18.3579 11.1282 17.9149 10.8643H17.9144Z" fill="currentColor"/>',Vc._solidSVG='<path d="M11.9993 2C6.4765 2 1.99915 6.47723 1.99915 12.0001C1.99915 17.5231 6.4765 22 11.9993 22C17.5228 22 21.9996 17.5231 21.9996 12.0001C21.9996 6.47759 17.5228 2.00048 11.9992 2.00048L11.9993 2ZM16.5853 16.423C16.4062 16.7167 16.0217 16.8099 15.7279 16.6295C13.38 15.1954 10.4242 14.8706 6.94329 15.6659C6.60785 15.7423 6.27349 15.5321 6.19706 15.1966C6.12028 14.861 6.32961 14.5266 6.66589 14.4502C10.4752 13.5796 13.7428 13.9546 16.3788 15.5656C16.6725 15.7459 16.7657 16.1292 16.5853 16.423ZM17.8093 13.6997C17.5837 14.0669 17.1036 14.1827 16.737 13.957C14.049 12.3044 9.95147 11.826 6.77205 12.7911C6.35971 12.9156 5.9242 12.6832 5.79905 12.2716C5.67486 11.8593 5.90736 11.4246 6.31899 11.2992C9.95076 10.1973 14.4657 10.731 17.5526 12.6279C17.9192 12.8536 18.035 13.3336 17.8093 13.6997ZM17.9144 10.8643C14.6914 8.94996 9.37386 8.77394 6.29666 9.70789C5.80252 9.85775 5.27996 9.5788 5.13021 9.08466C4.98046 8.59028 5.25918 8.06808 5.75368 7.91785C9.28609 6.84551 15.1583 7.05269 18.869 9.25554C19.3145 9.51933 19.4601 10.0934 19.1962 10.5372C18.9335 10.9817 18.3579 11.1282 17.9149 10.8643H17.9144Z" fill="currentColor"/>',Vc._name="brand-spotify",Vc._width=24,Vc._height=24,Vc._viewBox="0 0 24 24",Vc=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-spotify")],Vc);const fc=e=>{Vc.define();const t=(0,n.p)("gds-icon-brand-spotify"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Lc=class extends R.M{};Lc._regularSVG='<path d="M20.2151 2.94392C20.2151 2.96327 20.2151 2.98585 20.2151 3.0052V20.9937C20.2151 21.5484 19.7603 22 19.1991 22C19.1829 22 19.17 22 19.1539 22L5.59402 21.3968C5.06504 21.3743 4.64573 20.9517 4.62315 20.4292L4.00064 3.92124C3.98129 3.37613 4.40382 2.91489 4.95215 2.87941L16.0736 2.19238L15.9768 4.45989C15.9768 4.48569 15.98 4.5115 15.9929 4.53408L16.0058 4.55665C16.0574 4.62116 16.151 4.63406 16.2187 4.58568L17.109 3.91801L17.8605 4.50505C17.8895 4.52762 17.925 4.5373 17.9605 4.5373C18.0443 4.5373 18.1088 4.46634 18.1056 4.38248L18.0218 2.07627L19.1378 2.00208C19.699 1.9666 20.1796 2.38914 20.2151 2.94392ZM12.4159 5.40495C9.77101 5.40495 8.29051 6.82738 8.29051 8.95942C8.29051 12.6719 13.3545 12.7429 13.3545 14.7685C13.3545 15.3362 13.0739 15.6749 12.4546 15.6749C11.6482 15.6749 11.3289 15.2684 11.3676 13.8815C11.3676 13.5815 8.29051 13.488 8.19698 13.8815C7.95829 17.2392 10.071 18.2101 12.4933 18.2101C14.9156 18.2101 16.6767 16.9747 16.6767 14.733C16.6767 10.7528 11.5386 10.8592 11.5386 8.88524C11.5386 8.08532 12.1385 7.97888 12.4965 7.97888C12.8707 7.97888 13.548 8.04339 13.49 9.53678C13.49 9.92706 16.151 9.73998 16.509 9.46582C16.509 6.80158 15.064 5.40173 12.4191 5.40173L12.4159 5.40495Z" fill="currentColor"/>',Lc._solidSVG='<path d="M20.2151 2.94392C20.2151 2.96327 20.2151 2.98585 20.2151 3.0052V20.9937C20.2151 21.5484 19.7603 22 19.1991 22C19.1829 22 19.17 22 19.1539 22L5.59402 21.3968C5.06504 21.3743 4.64573 20.9517 4.62315 20.4292L4.00064 3.92124C3.98129 3.37613 4.40382 2.91489 4.95215 2.87941L16.0736 2.19238L15.9768 4.45989C15.9768 4.48569 15.98 4.5115 15.9929 4.53408L16.0058 4.55665C16.0574 4.62116 16.151 4.63406 16.2187 4.58568L17.109 3.91801L17.8605 4.50505C17.8895 4.52762 17.925 4.5373 17.9605 4.5373C18.0443 4.5373 18.1088 4.46634 18.1056 4.38248L18.0218 2.07627L19.1378 2.00208C19.699 1.9666 20.1796 2.38914 20.2151 2.94392ZM12.4159 5.40495C9.77101 5.40495 8.29051 6.82738 8.29051 8.95942C8.29051 12.6719 13.3545 12.7429 13.3545 14.7685C13.3545 15.3362 13.0739 15.6749 12.4546 15.6749C11.6482 15.6749 11.3289 15.2684 11.3676 13.8815C11.3676 13.5815 8.29051 13.488 8.19698 13.8815C7.95829 17.2392 10.071 18.2101 12.4933 18.2101C14.9156 18.2101 16.6767 16.9747 16.6767 14.733C16.6767 10.7528 11.5386 10.8592 11.5386 8.88524C11.5386 8.08532 12.1385 7.97888 12.4965 7.97888C12.8707 7.97888 13.548 8.04339 13.49 9.53678C13.49 9.92706 16.151 9.73998 16.509 9.46582C16.509 6.80158 15.064 5.40173 12.4191 5.40173L12.4159 5.40495Z" fill="currentColor"/>',Lc._name="brand-storybook",Lc._width=24,Lc._height=24,Lc._viewBox="0 0 24 24",Lc=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-storybook")],Lc);const _c=e=>{Lc.define();const t=(0,n.p)("gds-icon-brand-storybook"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Hc=class extends R.M{};Hc._regularSVG='<path d="M17.4033 3.5H20.2852L13.989 10.701L21.396 20.5H15.5964L11.054 14.557L5.85637 20.5H2.97269L9.70709 12.7977L2.60156 3.5H8.54839L12.6544 8.93215L17.4033 3.5ZM16.3918 18.7738H17.9887L7.68067 5.13549H5.96702L16.3918 18.7738Z" fill="currentColor"/>',Hc._solidSVG='<path d="M17.4033 3.5H20.2852L13.989 10.701L21.396 20.5H15.5964L11.054 14.557L5.85637 20.5H2.97269L9.70709 12.7977L2.60156 3.5H8.54839L12.6544 8.93215L17.4033 3.5ZM16.3918 18.7738H17.9887L7.68067 5.13549H5.96702L16.3918 18.7738Z" fill="currentColor"/>',Hc._name="brand-x",Hc._width=24,Hc._height=24,Hc._viewBox="0 0 24 24",Hc=(0,s.Cc)([(0,C.Y$)("gds-icon-brand-x")],Hc);const vc=e=>{Hc.define();const t=(0,n.p)("gds-icon-brand-x"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let kc=class extends R.M{};kc._regularSVG='<path d="M16.5 15.5L8.49997 7.5M13.1225 18.1222L13.5001 18.5001L21.5 10.5L19.5 8.5H17.5L17.5 6.5L13.5 2.5L5.50006 10.5003L5.87774 10.8776C7.05031 12.0489 7.05082 13.9492 5.87889 15.1212L2.50024 18.5001L5.50079 21.4995L8.87883 18.1213C10.0508 16.9492 11.9511 16.9497 13.1225 18.1222Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',kc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9696 1.96967C13.2625 1.67678 13.7374 1.67678 14.0302 1.96967L18.0302 5.96967C18.1709 6.11032 18.2499 6.30109 18.2499 6.5L18.2499 7.75L19.4999 7.75C19.6988 7.75 19.8896 7.82902 20.0302 7.96967L22.0302 9.96967C22.3231 10.2626 22.3231 10.7374 22.0303 11.0303L17.0304 16.0303C17.0283 16.0323 17.0263 16.0343 17.0243 16.0363L14.0302 19.0305C13.8895 19.1712 13.6987 19.2502 13.4997 19.2501C13.3007 19.2501 13.1099 19.171 12.9693 19.0302L12.5918 18.6524C11.7132 17.7729 10.288 17.7726 9.40899 18.6517L6.03096 22.0299C5.7381 22.3228 5.26329 22.3228 4.97037 22.03L1.96983 19.0306C1.82914 18.8899 1.75008 18.6992 1.75006 18.5002C1.75004 18.3013 1.82905 18.1105 1.96971 17.9698L5.34836 14.591C6.22731 13.712 6.22692 12.2867 5.3475 11.4082L4.96982 11.0309C4.82905 10.8903 4.74993 10.6995 4.74988 10.5005C4.74983 10.3016 4.82884 10.1107 4.96954 9.97001L7.96041 6.979C7.96344 6.97587 7.9665 6.97276 7.96958 6.96967L12.9696 1.96967ZM15.4393 15.5L8.50001 8.56075L6.55645 10.5044C7.87157 11.9768 7.82258 14.238 6.40906 15.6516L3.5608 18.5L5.50049 20.439L8.3483 17.591C9.76192 16.1773 12.0233 16.1283 13.4958 17.4436L15.4393 15.5Z" fill="currentColor"/>',kc._name="brush",kc._width=24,kc._height=24,kc._viewBox="0 0 24 24",kc=(0,s.Cc)([(0,C.Y$)("gds-icon-brush")],kc);const wc=e=>{kc.define();const t=(0,n.p)("gds-icon-brush"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let bc=class extends R.M{};bc._regularSVG='<path d="M2.7522 3.75H21.2522V18.25H12.0022L7.0022 21V18.25H2.7522V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M7.5 10.25C7.91421 10.25 8.25 10.5858 8.25 11C8.25 11.4142 7.91421 11.75 7.5 11.75C7.08579 11.75 6.75 11.4142 6.75 11C6.75 10.5858 7.08579 10.25 7.5 10.25ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75C11.5858 11.75 11.25 11.4142 11.25 11C11.25 10.5858 11.5858 10.25 12 10.25ZM16.5 10.25C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75C16.0858 11.75 15.75 11.4142 15.75 11C15.75 10.5858 16.0858 10.25 16.5 10.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="square"/>',bc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M22.0022 3.75C22.0022 3.33579 21.6664 3 21.2522 3H2.7522C2.33798 3 2.0022 3.33579 2.0022 3.75V18.25C2.0022 18.6642 2.33798 19 2.7522 19H6.2522V21C6.2522 21.2652 6.39222 21.5106 6.62048 21.6456C6.84873 21.7806 7.13129 21.785 7.36364 21.6572L12.1948 19H21.2522C21.6664 19 22.0022 18.6642 22.0022 18.25V3.75ZM6.5 11C6.5 11.5523 6.94772 12 7.5 12C8.05228 12 8.5 11.5523 8.5 11C8.5 10.4477 8.05228 10 7.5 10C6.94772 10 6.5 10.4477 6.5 11ZM11 11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11ZM16.5 12C15.9477 12 15.5 11.5523 15.5 11C15.5 10.4477 15.9477 10 16.5 10C17.0523 10 17.5 10.4477 17.5 11C17.5 11.5523 17.0523 12 16.5 12Z" fill="currentColor"/>',bc._name="bubble-annotation",bc._width=24,bc._height=24,bc._viewBox="0 0 24 24",bc=(0,s.Cc)([(0,C.Y$)("gds-icon-bubble-annotation")],bc);const Zc=e=>{bc.define();const t=(0,n.p)("gds-icon-bubble-annotation"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let yc=class extends R.M{};yc._regularSVG='<path d="M3.75 3.75H20.25V18.25H15.0155L11.9979 20.75L9.0155 18.25H3.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7.25 11.25C7.25 11.6642 7.58579 12 8 12C8.41421 12 8.75 11.6642 8.75 11.25C8.75 10.8358 8.41421 10.5 8 10.5C7.58579 10.5 7.25 10.8358 7.25 11.25ZM11.25 11.25C11.25 11.6642 11.5858 12 12 12C12.4142 12 12.75 11.6642 12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25ZM15.25 11.25C15.25 11.6642 15.5858 12 16 12C16.4142 12 16.75 11.6642 16.75 11.25C16.75 10.8358 16.4142 10.5 16 10.5C15.5858 10.5 15.25 10.8358 15.25 11.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="square"/>',yc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V18.25C21 18.6642 20.6642 19 20.25 19H15.2858L12.4764 21.3275C12.1976 21.5585 11.7936 21.5574 11.5161 21.3248L8.74274 19H3.75C3.33579 19 3 18.6642 3 18.25V3.75ZM7 11.25C7 11.8023 7.44772 12.25 8 12.25C8.55228 12.25 9 11.8023 9 11.25C9 10.6977 8.55228 10.25 8 10.25C7.44772 10.25 7 10.6977 7 11.25ZM11 11.25C11 11.8023 11.4477 12.25 12 12.25C12.5523 12.25 13 11.8023 13 11.25C13 10.6977 12.5523 10.25 12 10.25C11.4477 10.25 11 10.6977 11 11.25ZM16 12.25C15.4477 12.25 15 11.8023 15 11.25C15 10.6977 15.4477 10.25 16 10.25C16.5523 10.25 17 10.6977 17 11.25C17 11.8023 16.5523 12.25 16 12.25Z" fill="currentColor"/>',yc._name="bubble-dots",yc._width=24,yc._height=24,yc._viewBox="0 0 24 24",yc=(0,s.Cc)([(0,C.Y$)("gds-icon-bubble-dots")],yc);const xc=e=>{yc.define();const t=(0,n.p)("gds-icon-bubble-dots"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Sc=class extends R.M{};Sc._regularSVG='<path d="M3.75 3.75V3C3.33579 3 3 3.33579 3 3.75H3.75ZM20.25 3.75H21C21 3.33579 20.6642 3 20.25 3V3.75ZM20.25 18.25V19C20.6642 19 21 18.6642 21 18.25H20.25ZM3.75 18.25H3C3 18.6642 3.33579 19 3.75 19V18.25ZM11.9979 20.75L11.5161 21.3248C11.7936 21.5574 12.1976 21.5585 12.4764 21.3275L11.9979 20.75ZM15.0155 18.25V17.5C14.8408 17.5 14.6716 17.561 14.537 17.6725L15.0155 18.25ZM9.0155 18.25L9.49731 17.6752C9.36227 17.562 9.1917 17.5 9.0155 17.5V18.25ZM11.2804 11.8019C11.2188 12.2116 11.501 12.5935 11.9106 12.655C12.3203 12.7165 12.7022 12.4343 12.7637 12.0247L11.2804 11.8019ZM12.8816 10.6136L13.3032 11.2339L13.3032 11.2338L12.8816 10.6136ZM9.87366 9.42768C9.87366 9.8419 10.2094 10.1777 10.6237 10.1777C11.0379 10.1777 11.3737 9.8419 11.3737 9.42768H9.87366ZM3.75 4.5H20.25V3H3.75V4.5ZM19.5 3.75V18.25H21V3.75H19.5ZM4.5 18.25V3.75H3V18.25H4.5ZM20.25 17.5H15.0155V19H20.25V17.5ZM14.537 17.6725L11.5194 20.1725L12.4764 21.3275L15.494 18.8275L14.537 17.6725ZM12.4797 20.1752L9.49731 17.6752L8.5337 18.8248L11.5161 21.3248L12.4797 20.1752ZM9.0155 17.5H3.75V19H9.0155V17.5ZM12.7637 12.0247C12.796 11.8096 12.8675 11.6643 12.9495 11.5539C13.0361 11.4375 13.1522 11.3365 13.3032 11.2339L12.46 9.99327C11.9841 10.3167 11.4245 10.842 11.2804 11.8019L12.7637 12.0247ZM13.3032 11.2338C13.7232 10.9483 14.3737 10.4252 14.3737 9.42768H12.8737C12.8737 9.56123 12.8379 9.6406 12.7876 9.70897C12.7249 9.79415 12.6241 9.88168 12.4599 9.99332L13.3032 11.2338ZM14.3737 9.42768C14.3737 8.18351 13.3734 7.16333 12.1237 7.16333V8.66333C12.5315 8.66333 12.8737 8.99844 12.8737 9.42768H14.3737ZM12.1237 7.16333C10.874 7.16333 9.87366 8.18351 9.87366 9.42768H11.3737C11.3737 8.99844 11.7158 8.66333 12.1237 8.66333V7.16333Z" fill="currentColor"/><path d="M11.25 14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75 14.25C12.75 13.8358 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.8358 11.25 14.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>',Sc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V18.25C21 18.6642 20.6642 19 20.25 19H15.2858L12.4764 21.3275C12.1976 21.5585 11.7936 21.5574 11.5161 21.3248L8.74274 19H3.75C3.33579 19 3 18.6642 3 18.25V3.75ZM9.87366 9.42768C9.87366 8.18351 10.874 7.16333 12.1237 7.16333C13.3734 7.16333 14.3737 8.18351 14.3737 9.42768C14.3737 10.4252 13.7232 10.9483 13.3032 11.2338C13.1522 11.3364 13.0361 11.4375 12.9495 11.5539C12.8674 11.6643 12.796 11.8096 12.7637 12.0247C12.7022 12.4343 12.3203 12.7165 11.9106 12.655C11.501 12.5935 11.2188 12.2116 11.2804 11.8019C11.4245 10.8421 11.984 10.3168 12.4599 9.99332C12.6241 9.8817 12.7249 9.79414 12.7876 9.70897C12.8379 9.6406 12.8737 9.56123 12.8737 9.42768C12.8737 8.99844 12.5315 8.66333 12.1237 8.66333C11.7158 8.66333 11.3737 8.99844 11.3737 9.42768C11.3737 9.8419 11.0379 10.1777 10.6237 10.1777C10.2094 10.1777 9.87366 9.8419 9.87366 9.42768ZM12 15.25C11.4477 15.25 11 14.8023 11 14.25C11 13.6977 11.4477 13.25 12 13.25C12.5523 13.25 13 13.6977 13 14.25C13 14.8023 12.5523 15.25 12 15.25Z" fill="currentColor"/>',Sc._name="bubble-question",Sc._width=24,Sc._height=24,Sc._viewBox="0 0 24 24",Sc=(0,s.Cc)([(0,C.Y$)("gds-icon-bubble-question")],Sc);const $c=e=>{Sc.define();const t=(0,n.p)("gds-icon-bubble-question"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Gc=class extends R.M{};Gc._regularSVG='<path d="M2.75 3.75H21.25V18.25H15.0155L11.9979 20.75L9.0155 18.25H2.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9.52309 8C8.40577 8 7.5 8.91026 7.5 10.0331C7.5 11.156 8.40577 12.0662 9.52309 12.0662C9.80224 12.0662 10.0682 12.0094 10.3101 11.9067C10.2619 11.9952 10.2095 12.0788 10.1535 12.1583C9.80027 12.6602 9.2779 13.0429 8.59934 13.4975C8.39303 13.6358 8.33704 13.9166 8.47432 14.1236C8.6116 14.3305 8.89179 14.3876 9.0981 14.2494C9.76827 13.8004 10.426 13.3359 10.8876 12.6801C11.3621 12.006 11.6045 11.17 11.5461 10.0207C11.5395 8.90356 10.6363 8 9.52309 8Z" fill="currentColor"/><path d="M14.4684 8C13.3511 8 12.4453 8.91026 12.4453 10.0331C12.4453 11.156 13.3511 12.0662 14.4684 12.0662C14.7476 12.0662 15.0135 12.0094 15.2554 11.9067C15.2072 11.9952 15.1548 12.0788 15.0989 12.1583C14.7456 12.6602 14.2232 13.0429 13.5447 13.4975C13.3383 13.6358 13.2824 13.9166 13.4196 14.1236C13.5569 14.3305 13.8371 14.3876 14.0434 14.2494C14.7136 13.8004 15.3713 13.3359 15.8329 12.6801C16.3074 12.006 16.5498 11.17 16.4915 10.0207C16.4848 8.90356 15.5816 8 14.4684 8Z" fill="currentColor"/>',Gc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 3.33579 2.33579 3 2.75 3H21.25C21.6642 3 22 3.33579 22 3.75V18.25C22 18.6642 21.6642 19 21.25 19H15.2858L12.4764 21.3275C12.1976 21.5585 11.7936 21.5574 11.5161 21.3248L8.74274 19H2.75C2.33579 19 2 18.6642 2 18.25V3.75ZM7.5 10.0331C7.5 8.91026 8.40577 8 9.52309 8C10.6363 8 11.5395 8.90356 11.5461 10.0207C11.6045 11.17 11.3621 12.006 10.8876 12.6801C10.426 13.3359 9.76827 13.8004 9.0981 14.2494C8.89179 14.3876 8.6116 14.3305 8.47432 14.1236C8.33704 13.9166 8.39303 13.6358 8.59934 13.4975C9.2779 13.0429 9.80027 12.6602 10.1535 12.1583C10.2095 12.0788 10.2619 11.9952 10.3101 11.9067C10.0682 12.0094 9.80224 12.0662 9.52309 12.0662C8.40577 12.0662 7.5 11.156 7.5 10.0331ZM12.4453 10.0331C12.4453 8.91026 13.3511 8 14.4684 8C15.5816 8 16.4848 8.90356 16.4915 10.0207C16.5498 11.17 16.3074 12.006 15.8329 12.6801C15.3713 13.3359 14.7136 13.8004 14.0434 14.2494C13.8371 14.3876 13.5569 14.3305 13.4196 14.1236C13.2824 13.9166 13.3383 13.6358 13.5447 13.4975C14.2232 13.0429 14.7456 12.6602 15.0989 12.1583C15.1548 12.0788 15.2072 11.9952 15.2554 11.9067C15.0135 12.0094 14.7476 12.0662 14.4684 12.0662C13.3511 12.0662 12.4453 11.156 12.4453 10.0331Z" fill="currentColor"/>',Gc._name="bubble-quotes",Gc._width=24,Gc._height=24,Gc._viewBox="0 0 24 24",Gc=(0,s.Cc)([(0,C.Y$)("gds-icon-bubble-quotes")],Gc);const jc=e=>{Gc.define();const t=(0,n.p)("gds-icon-bubble-quotes"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ec=class extends R.M{};Ec._regularSVG='<path d="M15.25 9H8.75M15.25 13H8.75M3.75 3.75H20.25V18.25H15.0155L11.9979 20.75L9.0155 18.25H3.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ec._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V18.25C21 18.6642 20.6642 19 20.25 19H15.2858L12.4764 21.3275C12.1976 21.5585 11.7936 21.5574 11.5161 21.3248L8.74274 19H3.75C3.33579 19 3 18.6642 3 18.25V3.75ZM8.75 8.25C8.33579 8.25 8 8.58579 8 9C8 9.41421 8.33579 9.75 8.75 9.75H15.25C15.6642 9.75 16 9.41421 16 9C16 8.58579 15.6642 8.25 15.25 8.25H8.75ZM8.75 12.25C8.33579 12.25 8 12.5858 8 13C8 13.4142 8.33579 13.75 8.75 13.75H15.25C15.6642 13.75 16 13.4142 16 13C16 12.5858 15.6642 12.25 15.25 12.25H8.75Z" fill="currentColor"/>',Ec._name="bubble-text",Ec._width=24,Ec._height=24,Ec._viewBox="0 0 24 24",Ec=(0,s.Cc)([(0,C.Y$)("gds-icon-bubble-text")],Ec);const Bc=e=>{Ec.define();const t=(0,n.p)("gds-icon-bubble-text"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let qc=class extends R.M{};qc._regularSVG='<path d="M2.75 3.75H21.25V18.25H15.0155L11.9979 20.75L9.0155 18.25H2.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.625 11C6.625 11.4832 7.01675 11.875 7.5 11.875C7.98325 11.875 8.375 11.4832 8.375 11C8.375 10.5168 7.98325 10.125 7.5 10.125C7.01675 10.125 6.625 10.5168 6.625 11ZM11.125 11C11.125 11.4832 11.5168 11.875 12 11.875C12.4832 11.875 12.875 11.4832 12.875 11C12.875 10.5168 12.4832 10.125 12 10.125C11.5168 10.125 11.125 10.5168 11.125 11ZM15.625 11C15.625 11.4832 16.0168 11.875 16.5 11.875C16.9832 11.875 17.375 11.4832 17.375 11C17.375 10.5168 16.9832 10.125 16.5 10.125C16.0168 10.125 15.625 10.5168 15.625 11Z" fill="currentColor" stroke="currentColor" stroke-width="0.75" stroke-linecap="square"/>',qc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 3.33579 2.33579 3 2.75 3H21.25C21.6642 3 22 3.33579 22 3.75V18.25C22 18.6642 21.6642 19 21.25 19H15.2858L12.4764 21.3275C12.1976 21.5585 11.7936 21.5574 11.5161 21.3248L8.74274 19H2.75C2.33579 19 2 18.6642 2 18.25V3.75ZM6.5 11C6.5 11.5523 6.94772 12 7.5 12C8.05228 12 8.5 11.5523 8.5 11C8.5 10.4477 8.05228 10 7.5 10C6.94772 10 6.5 10.4477 6.5 11ZM11 11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11ZM16.5 12C15.9477 12 15.5 11.5523 15.5 11C15.5 10.4477 15.9477 10 16.5 10C17.0523 10 17.5 10.4477 17.5 11C17.5 11.5523 17.0523 12 16.5 12Z" fill="currentColor"/>',qc._name="bubble-wide-annotation",qc._width=24,qc._height=24,qc._viewBox="0 0 24 24",qc=(0,s.Cc)([(0,C.Y$)("gds-icon-bubble-wide-annotation")],qc);const Nc=e=>{qc.define();const t=(0,n.p)("gds-icon-bubble-wide-annotation"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ic=class extends R.M{};Ic._regularSVG='<path d="M2.7522 3.75H21.2522V18.25H12.0022L7.0022 21V18.25H2.7522V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',Ic._solidSVG='<path d="M21.2522 3C21.6664 3 22.0022 3.33579 22.0022 3.75V18.25C22.0022 18.6642 21.6664 19 21.2522 19H12.1948L7.36364 21.6572C7.13129 21.785 6.84873 21.7806 6.62048 21.6456C6.39222 21.5106 6.2522 21.2652 6.2522 21V19H2.7522C2.33798 19 2.0022 18.6642 2.0022 18.25V3.75C2.0022 3.33579 2.33798 3 2.7522 3H21.2522Z" fill="currentColor"/>',Ic._name="bubble",Ic._width=24,Ic._height=24,Ic._viewBox="0 0 24 24",Ic=(0,s.Cc)([(0,C.Y$)("gds-icon-bubble")],Ic);const Yc=e=>{Ic.define();const t=(0,n.p)("gds-icon-bubble"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let zc=class extends R.M{};zc._regularSVG='<path d="M17.25 14.25H21.2522V3.75H7.0022V7.75M17.2522 7.75H2.7522V18.25H6.0022V20.75L10.5022 18.25H17.2522V7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',zc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2522 3C21.6664 3 22.0022 3.33579 22.0022 3.75V14.25C22.0022 14.6642 21.6664 15 21.2522 15H18.0022V18.25C18.0022 18.6642 17.6664 19 17.2522 19H10.6965L6.36643 21.4056C6.13413 21.5347 5.85088 21.5312 5.62185 21.3964C5.39282 21.2616 5.2522 21.0157 5.2522 20.75V19H2.7522C2.33798 19 2.0022 18.6642 2.0022 18.25V7.75C2.0022 7.33579 2.33798 7 2.7522 7H6.2522V3.75C6.2522 3.33579 6.58798 3 7.0022 3H21.2522ZM7.7522 7H17.2522C17.6664 7 18.0022 7.33579 18.0022 7.75V13.5H20.5022V4.5H7.7522V7Z" fill="currentColor"/>',zc._name="bubbles",zc._width=24,zc._height=24,zc._viewBox="0 0 24 24",zc=(0,s.Cc)([(0,C.Y$)("gds-icon-bubbles")],zc);const Ac=e=>{zc.define();const t=(0,n.p)("gds-icon-bubbles"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Tc=class extends R.M{};Tc._regularSVG='<path d="M3.75 19.25H14.25M3.75 19.25V3.75H14.25V8M3.75 19.25H1.75M20.25 19.25H14.25M20.25 19.25V8H14.25M20.25 19.25H22.25M14.25 19.25V8M10.25 8.75H7.75M7.75 12.75H10.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Tc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H14.25C14.6642 3 15 3.33579 15 3.75V7.25H20.25C20.6642 7.25 21 7.58579 21 8V18.5H22.25C22.6642 18.5 23 18.8358 23 19.25C23 19.6642 22.6642 20 22.25 20H1.75C1.33579 20 1 19.6642 1 19.25C1 18.8358 1.33579 18.5 1.75 18.5H3V3.75ZM15 18.5H19.5V8.75H15V18.5ZM7 8.75C7 8.33579 7.33579 8 7.75 8H10.25C10.6642 8 11 8.33579 11 8.75C11 9.16421 10.6642 9.5 10.25 9.5H7.75C7.33579 9.5 7 9.16421 7 8.75ZM7 12.75C7 12.3358 7.33579 12 7.75 12H10.25C10.6642 12 11 12.3358 11 12.75C11 13.1642 10.6642 13.5 10.25 13.5H7.75C7.33579 13.5 7 13.1642 7 12.75Z" fill="currentColor"/>',Tc._name="buildings",Tc._width=24,Tc._height=24,Tc._viewBox="0 0 24 24",Tc=(0,s.Cc)([(0,C.Y$)("gds-icon-buildings")],Tc);const Rc=e=>{Tc.define();const t=(0,n.p)("gds-icon-buildings"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Oc=class extends R.M{};Oc._regularSVG='<path d="M11.75 16.75H20.25M11.75 7.25H20.25M7.75 7.25C7.75 8.35457 6.85457 9.25 5.75 9.25C4.64543 9.25 3.75 8.35457 3.75 7.25C3.75 6.14543 4.64543 5.25 5.75 5.25C6.85457 5.25 7.75 6.14543 7.75 7.25ZM7.75 16.75C7.75 17.8546 6.85457 18.75 5.75 18.75C4.64543 18.75 3.75 17.8546 3.75 16.75C3.75 15.6454 4.64543 14.75 5.75 14.75C6.85457 14.75 7.75 15.6454 7.75 16.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Oc._solidSVG='<path d="M5.75 4.5C4.23122 4.5 3 5.73122 3 7.25C3 8.76878 4.23122 10 5.75 10C7.26878 10 8.5 8.76878 8.5 7.25C8.5 5.73122 7.26878 4.5 5.75 4.5Z" fill="currentColor"/><path d="M11.75 6.5C11.3358 6.5 11 6.83579 11 7.25C11 7.66421 11.3358 8 11.75 8H20.25C20.6642 8 21 7.66421 21 7.25C21 6.83579 20.6642 6.5 20.25 6.5H11.75Z" fill="currentColor"/><path d="M5.75 14C4.23122 14 3 15.2312 3 16.75C3 18.2688 4.23122 19.5 5.75 19.5C7.26878 19.5 8.5 18.2688 8.5 16.75C8.5 15.2312 7.26878 14 5.75 14Z" fill="currentColor"/><path d="M11.75 16C11.3358 16 11 16.3358 11 16.75C11 17.1642 11.3358 17.5 11.75 17.5H20.25C20.6642 17.5 21 17.1642 21 16.75C21 16.3358 20.6642 16 20.25 16H11.75Z" fill="currentColor"/>',Oc._name="bullet-list",Oc._width=24,Oc._height=24,Oc._viewBox="0 0 24 24",Oc=(0,s.Cc)([(0,C.Y$)("gds-icon-bullet-list")],Oc);const Wc=e=>{Oc.define();const t=(0,n.p)("gds-icon-bullet-list"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Pc=class extends R.M{};Pc._regularSVG='<path d="M9.75027 5.52371L10.7168 4.55722C13.1264 2.14759 17.0332 2.14759 19.4428 4.55722C21.8524 6.96684 21.8524 10.8736 19.4428 13.2832L18.4742 14.2519M5.52886 9.74513L4.55722 10.7168C2.14759 13.1264 2.1476 17.0332 4.55722 19.4428C6.96684 21.8524 10.8736 21.8524 13.2832 19.4428L14.2478 18.4782M9.5 14.5L14.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>',Pc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9125 5.08755C16.7957 2.97082 13.3638 2.97082 11.2471 5.08755L9.75027 6.58437L8.68961 5.52371L10.1864 4.02689C12.889 1.32437 17.2706 1.32437 19.9731 4.02689C22.6756 6.7294 22.6756 11.111 19.9731 13.8136L18.4742 15.3125L17.4135 14.2519L18.9125 12.7529C21.0292 10.6362 21.0292 7.20428 18.9125 5.08755ZM15.5607 9.5L9.5 15.5607L8.43934 14.5L14.5 8.43934L15.5607 9.5ZM6.58952 9.74513L5.08755 11.2471C2.97082 13.3638 2.97082 16.7957 5.08755 18.9125C7.20428 21.0292 10.6362 21.0292 12.7529 18.9125L14.2478 17.4176L15.3084 18.4782L13.8136 19.9731C11.1111 22.6756 6.72941 22.6756 4.02689 19.9731C1.32437 17.2706 1.32437 12.889 4.02689 10.1864L5.52886 8.68446L6.58952 9.74513Z" fill="currentColor"/>',Pc._name="cain-link",Pc._width=24,Pc._height=24,Pc._viewBox="0 0 24 24",Pc=(0,s.Cc)([(0,C.Y$)("gds-icon-cain-link")],Pc);const Fc=e=>{Pc.define();const t=(0,n.p)("gds-icon-cain-link"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Dc=class extends R.M{};Dc._regularSVG='<path d="M4.75 7.75V21.25H19.25V7.75M4.75 7.75H19.25M4.75 7.75V2.75H19.25V7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 16C9.91421 16 10.25 16.3358 10.25 16.75C10.25 17.1642 9.91421 17.5 9.5 17.5C9.08579 17.5 8.75 17.1642 8.75 16.75C8.75 16.3358 9.08579 16 9.5 16ZM14.5 16C14.9142 16 15.25 16.3358 15.25 16.75C15.25 17.1642 14.9142 17.5 14.5 17.5C14.0858 17.5 13.75 17.1642 13.75 16.75C13.75 16.3358 14.0858 16 14.5 16ZM9.5 11.5C9.91421 11.5 10.25 11.8358 10.25 12.25C10.25 12.6642 9.91421 13 9.5 13C9.08579 13 8.75 12.6642 8.75 12.25C8.75 11.8358 9.08579 11.5 9.5 11.5ZM14.5 11.5C14.9142 11.5 15.25 11.8358 15.25 12.25C15.25 12.6642 14.9142 13 14.5 13C14.0858 13 13.75 12.6642 13.75 12.25C13.75 11.8358 14.0858 11.5 14.5 11.5Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>',Dc._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21.25C4 21.6642 4.33579 22 4.75 22H19.25C19.6642 22 20 21.6642 20 21.25V2.75C20 2.33579 19.6642 2 19.25 2H4.75ZM18.5 7V3.5H5.5V7H18.5ZM9.5 13.25C10.0523 13.25 10.5 12.8023 10.5 12.25C10.5 11.6977 10.0523 11.25 9.5 11.25C8.94772 11.25 8.5 11.6977 8.5 12.25C8.5 12.8023 8.94772 13.25 9.5 13.25ZM9.5 17.75C10.0523 17.75 10.5 17.3023 10.5 16.75C10.5 16.1977 10.0523 15.75 9.5 15.75C8.94772 15.75 8.5 16.1977 8.5 16.75C8.5 17.3023 8.94772 17.75 9.5 17.75ZM15.5 12.25C15.5 12.8023 15.0523 13.25 14.5 13.25C13.9477 13.25 13.5 12.8023 13.5 12.25C13.5 11.6977 13.9477 11.25 14.5 11.25C15.0523 11.25 15.5 11.6977 15.5 12.25ZM14.5 17.75C15.0523 17.75 15.5 17.3023 15.5 16.75C15.5 16.1977 15.0523 15.75 14.5 15.75C13.9477 15.75 13.5 16.1977 13.5 16.75C13.5 17.3023 13.9477 17.75 14.5 17.75Z" fill="currentColor"/>',Dc._name="calculator",Dc._width=24,Dc._height=24,Dc._viewBox="0 0 24 24",Dc=(0,s.Cc)([(0,C.Y$)("gds-icon-calculator")],Dc);const Kc=e=>{Dc.define();const t=(0,n.p)("gds-icon-calculator"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Uc=class extends R.M{};Uc._regularSVG='<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V12.25M21.25 15.75L16.9167 21.25L14.75 19.05" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Uc._solidSVG='<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V12.25C19.5 12.6642 19.8358 13 20.25 13C20.6642 13 21 12.6642 21 12.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M21.8391 16.2142C22.0955 15.8888 22.0395 15.4172 21.7142 15.1609C21.3888 14.9045 20.9172 14.9605 20.6609 15.2858L16.8541 20.1176L15.2844 18.5237C14.9937 18.2286 14.5189 18.225 14.2237 18.5156C13.9286 18.8063 13.925 19.2811 14.2156 19.5763L16.3823 21.7763C16.5334 21.9297 16.7431 22.0107 16.9581 21.9989C17.173 21.987 17.3725 21.8833 17.5058 21.7142L21.8391 16.2142Z" fill="currentColor"/>',Uc._name="calendar-check",Uc._width=24,Uc._height=24,Uc._viewBox="0 0 24 24",Uc=(0,s.Cc)([(0,C.Y$)("gds-icon-calendar-check")],Uc);const Jc=e=>{Uc.define();const t=(0,n.p)("gds-icon-calendar-check"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var Qc=r(1183);const Xc=e=>{Qc._.define();const t=(0,n.p)("gds-icon-calendar"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var eC=r(7045);const tC=e=>{eC.z.define();const t=(0,n.p)("gds-icon-calender-add"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let rC=class extends R.M{};rC._regularSVG='<path d="M10.25 8L9 3.75H7.00236H3.75188C3.75063 3.83318 3.75 3.91652 3.75 4C3.75 6.96726 4.54531 9.74877 5.93438 12.143C7.35756 14.596 9.40402 16.6424 11.857 18.0656C14.2512 19.4547 17.0327 20.25 20 20.25H20.25V15L16 13.75L14.1918 15.6335C11.6758 14.3749 9.62505 12.3242 8.36647 9.80819L10.25 8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',rC._solidSVG='<path d="M3.75188 3C3.34208 3 3.00815 3.32893 3.00197 3.73869C3.00066 3.82564 3 3.91275 3 4C3 7.10297 3.83203 10.0139 5.28566 12.5194C6.77436 15.0853 8.9147 17.2256 11.4806 18.7143C13.9861 20.168 16.897 21 20 21H20.25C20.6642 21 21 20.6642 21 20.25V15C21 14.6673 20.7808 14.3744 20.4616 14.2805L16.2116 13.0305C15.943 12.9515 15.6528 13.0286 15.459 13.2306L14.0423 14.7063C12.0524 13.5965 10.4035 11.9476 9.29367 9.95774L10.7694 8.54104C10.9714 8.34717 11.0485 8.05695 10.9695 7.78838L9.71952 3.53838C9.62565 3.21919 9.33271 3 9 3H3.75188Z" fill="currentColor"/>',rC._name="call",rC._width=24,rC._height=24,rC._viewBox="0 0 24 24",rC=(0,s.Cc)([(0,C.Y$)("gds-icon-call")],rC);const oC=e=>{rC.define();const t=(0,n.p)("gds-icon-call"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let sC=class extends R.M{};sC._regularSVG='<path d="M2.25 10.75L6 4.75H18L21.75 10.75M2.25 10.75H0.75M2.25 10.75V19.25H5.75V17.1786H18.25V19.25H21.75V10.75M21.75 10.75H23.25M5.75 13.0357H7.75M16.25 13.0357H18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',sC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5.364 4.3525C5.50106 4.13321 5.74141 4 6 4H18C18.2586 4 18.4989 4.13321 18.636 4.3525L22.1657 10H23.25C23.6642 10 24 10.3358 24 10.75C24 11.1642 23.6642 11.5 23.25 11.5H22.5V19.25C22.5 19.6642 22.1642 20 21.75 20H18.25C17.8358 20 17.5 19.6642 17.5 19.25V17.9286H6.5V19.25C6.5 19.6642 6.16421 20 5.75 20H2.25C1.83579 20 1.5 19.6642 1.5 19.25V11.5H0.75C0.335786 11.5 0 11.1642 0 10.75C0 10.3358 0.335786 10 0.75 10H1.83431L5.364 4.3525ZM5 13.0357C5 12.6215 5.33579 12.2857 5.75 12.2857H7.75C8.16421 12.2857 8.5 12.6215 8.5 13.0357C8.5 13.4499 8.16421 13.7857 7.75 13.7857H5.75C5.33579 13.7857 5 13.4499 5 13.0357ZM15.5 13.0357C15.5 12.6215 15.8358 12.2857 16.25 12.2857H18.25C18.6642 12.2857 19 12.6215 19 13.0357C19 13.4499 18.6642 13.7857 18.25 13.7857H16.25C15.8358 13.7857 15.5 13.4499 15.5 13.0357Z" fill="currentColor"/>',sC._name="car",sC._width=24,sC._height=24,sC._viewBox="0 0 24 24",sC=(0,s.Cc)([(0,C.Y$)("gds-icon-car")],sC);const nC=e=>{sC.define();const t=(0,n.p)("gds-icon-car"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let lC=class extends R.M{};lC._regularSVG='<path d="M17.5 3.75H6.5V20.25H17.5V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 5.75H21.25V18.25H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 18.25H2.75V5.75H6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',lC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 3.75C5.75 3.33579 6.08579 3 6.5 3H17.5C17.9142 3 18.25 3.33579 18.25 3.75V5H21.25C21.6642 5 22 5.33579 22 5.75V18.25C22 18.6642 21.6642 19 21.25 19H18.25V20.25C18.25 20.6642 17.9142 21 17.5 21H6.5C6.08579 21 5.75 20.6642 5.75 20.25V19H2.75C2.33579 19 2 18.6642 2 18.25V5.75C2 5.33579 2.33579 5 2.75 5H5.75V3.75ZM5.75 6.5H3.5V17.5H5.75V6.5ZM18.25 17.5H20.5V6.5H18.25V17.5Z" fill="currentColor"/>',lC._name="carussel",lC._width=24,lC._height=24,lC._viewBox="0 0 24 24",lC=(0,s.Cc)([(0,C.Y$)("gds-icon-carussel")],lC);const iC=e=>{lC.define();const t=(0,n.p)("gds-icon-carussel"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let aC=class extends R.M{};aC._regularSVG='<path d="M9.75027 5.52371L10.7168 4.55722C13.1264 2.14759 17.0332 2.14759 19.4428 4.55722C21.8524 6.96684 21.8524 10.8736 19.4428 13.2832L18.4742 14.2519M5.52886 9.74513L4.55722 10.7168C2.14759 13.1264 2.1476 17.0332 4.55722 19.4428C6.96684 21.8524 10.8736 21.8524 13.2832 19.4428L14.2478 18.4782" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M3.8 6.3625L1.75 5.85M6.3625 3.8L5.85 1.75M20.2 17.6375L22.25 18.15M17.6375 20.2L18.15 22.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',aC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5.66809 1.02233C6.06994 0.921865 6.47714 1.16619 6.5776 1.56803L7.0901 3.61803C7.19056 4.01988 6.94624 4.42708 6.5444 4.52754C6.14255 4.628 5.73535 4.38368 5.63489 3.98183L5.12239 1.93183C5.02193 1.52999 5.26625 1.12279 5.66809 1.02233ZM18.9124 5.08748C16.7957 2.97075 13.3638 2.97075 11.2471 5.08748L10.2806 6.05397C9.9877 6.34687 9.51283 6.34687 9.21994 6.05397C8.92704 5.76108 8.92704 5.28621 9.21994 4.99331L10.1864 4.02682C12.8889 1.3243 17.2706 1.3243 19.9731 4.02682C22.6756 6.72934 22.6756 11.111 19.9731 13.8135L19.0045 14.7821C18.7116 15.075 18.2367 15.075 17.9438 14.7821C17.6509 14.4892 17.6509 14.0144 17.9438 13.7215L18.9124 12.7528C21.0292 10.6361 21.0292 7.20421 18.9124 5.08748ZM1.02239 5.66803C1.12285 5.26619 1.53005 5.02186 1.9319 5.12233L3.9819 5.63483C4.38374 5.73529 4.62806 6.14249 4.5276 6.54433C4.42714 6.94618 4.01994 7.1905 3.61809 7.09004L1.56809 6.57754C1.16625 6.47708 0.921926 6.06988 1.02239 5.66803ZM6.05918 9.21473C6.35207 9.50762 6.35207 9.9825 6.05918 10.2754L5.08754 11.247C2.97081 13.3638 2.97081 16.7957 5.08754 18.9124C7.20427 21.0291 10.6362 21.0291 12.7529 18.9124L13.7174 17.9478C14.0103 17.655 14.4852 17.655 14.7781 17.9478C15.071 18.2407 15.071 18.7156 14.7781 19.0085L13.8136 19.973C11.111 22.6756 6.7294 22.6756 4.02688 19.973C1.32437 17.2705 1.32436 12.8889 4.02688 10.1864L4.99852 9.21473C5.29141 8.92184 5.76629 8.92183 6.05918 9.21473ZM19.4724 17.4555C19.5728 17.0537 19.98 16.8094 20.3819 16.9098L22.4319 17.4223C22.8337 17.5228 23.0781 17.93 22.9776 18.3318C22.8771 18.7337 22.4699 18.978 22.0681 18.8775L20.0181 18.365C19.6162 18.2646 19.3719 17.8574 19.4724 17.4555ZM17.4556 19.4723C17.8574 19.3719 18.2646 19.6162 18.3651 20.018L18.8776 22.068C18.9781 22.4699 18.7337 22.8771 18.3319 22.9775C17.93 23.078 17.5229 22.8337 17.4224 22.4318L16.9099 20.3818C16.8094 19.98 17.0537 19.5728 17.4556 19.4723Z" fill="currentColor"/>',aC._name="chain-link-broken",aC._width=24,aC._height=24,aC._viewBox="0 0 24 24",aC=(0,s.Cc)([(0,C.Y$)("gds-icon-chain-link-broken")],aC);const cC=e=>{aC.define();const t=(0,n.p)("gds-icon-chain-link-broken"),r={...e,class:e.className};return(0,i.createElement)(t,r)},CC=e=>{jn.define();const t=(0,n.p)("gds-icon-chain-link"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let dC=class extends R.M{};dC._regularSVG='<path d="M13.25 14.75V3.75H3.75V14.75M13.25 14.75V20.25H3.75V14.75M13.25 14.75H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 20.25H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.75 10.75V16.25H20.25V7.25L17.25 4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.31469 6.91746C9.31469 6.52592 8.83448 6.35059 8.59206 6.65363L6.19283 9.65281C5.97521 9.92484 6.16445 10.3333 6.5081 10.3333H7.68526V12.0825C7.68526 12.4741 8.16548 12.6494 8.4079 12.3464L10.8071 9.34719C11.0247 9.07516 10.8355 8.66673 10.4918 8.66673H9.31469V6.91746Z" fill="currentColor"/>',dC._solidSVG='<path d="M8.59206 6.65363C8.83448 6.35059 9.31469 6.52592 9.31469 6.91746V8.66673H10.4918C10.8355 8.66673 11.0247 9.07516 10.8071 9.34719L8.4079 12.3464C8.16547 12.6494 7.68526 12.4741 7.68526 12.0825V10.3333H6.5081C6.16445 10.3333 5.97521 9.92484 6.19283 9.65281L8.59206 6.65363Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H13.25C13.6642 3 14 3.33579 14 3.75V19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM4.5 4.5V14H12.5V4.5H4.5Z" fill="currentColor"/><path d="M16.6738 4.26988C16.939 3.95167 17.4119 3.90868 17.7301 4.17385L20.7301 6.67385C20.9011 6.81635 21 7.02743 21 7.25002V16.25C21 16.6642 20.6642 17 20.25 17H16.75C16.3358 17 16 16.6642 16 16.25V10.75C16 10.3358 16.3358 10 16.75 10C17.1642 10 17.5 10.3358 17.5 10.75V15.5H19.5V7.6013L16.7699 5.32618C16.4517 5.06101 16.4087 4.58809 16.6738 4.26988Z" fill="currentColor"/>',dC._name="charging-station",dC._width=24,dC._height=24,dC._viewBox="0 0 24 24",dC=(0,s.Cc)([(0,C.Y$)("gds-icon-charging-station")],dC);const hC=e=>{dC.define();const t=(0,n.p)("gds-icon-charging-station"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let uC=class extends R.M{};uC._regularSVG='<path d="M9.25 3.75L10 3.75L10 3L9.25 3L9.25 3.75ZM9.25 9.25L9.25 10L10 10L10 9.25L9.25 9.25ZM3.75 9.25L3 9.25V9.25H3.75ZM3.75 3.75L3.75 3L3 3L3 3.75L3.75 3.75ZM14.75 9.25H15.5V8.5L14.75 8.5L14.75 9.25ZM14.75 14.75V15.5H15.5V14.75H14.75ZM20.25 14.75H21V14L20.25 14L20.25 14.75ZM20.25 20.25V21H21V20.25H20.25ZM3.75 20.25H3V21H3.75V20.25ZM4.5 1.75C4.5 1.33579 4.16421 1 3.75 1C3.33579 1 3 1.33579 3 1.75H4.5ZM3 22.25C3 22.6642 3.33579 23 3.75 23C4.16421 23 4.5 22.6642 4.5 22.25H3ZM8.5 3.75L8.5 9.25L10 9.25L10 3.75L8.5 3.75ZM9.25 8.5L3.75 8.5L3.75 10L9.25 10L9.25 8.5ZM4.5 9.25L4.5 3.75L3 3.75L3 9.25L4.5 9.25ZM3.75 4.5L9.25 4.5L9.25 3L3.75 3L3.75 4.5ZM14 9.25V14.75H15.5V9.25H14ZM14.75 14H3.75V15.5H14.75V14ZM4.5 14.75V9.25H3V14.75H4.5ZM3.75 10L14.75 10L14.75 8.5L3.75 8.5L3.75 10ZM19.5 14.75V20.25H21V14.75H19.5ZM20.25 19.5H3.75V21H20.25V19.5ZM4.5 20.25V14.75H3V20.25H4.5ZM3.75 15.5L20.25 15.5L20.25 14L3.75 14L3.75 15.5ZM3 1.75V22.25H4.5V1.75H3Z" fill="currentColor"/>',uC._solidSVG='<path d="M4.50098 1.75098C4.50098 1.33676 4.16519 1.00098 3.75098 1.00098C3.33676 1.00098 3.00098 1.33676 3.00098 1.75098L3.00098 3.71235C3.00033 3.72515 3 3.73802 3 3.75098V7.25098C3 7.26393 3.00033 7.27681 3.00098 7.2896L3.00098 10.2124C3.00033 10.2251 3 10.238 3 10.251V13.751C3 13.7639 3.00033 13.7768 3.00098 13.7896L3.00098 16.7124C3.00033 16.7252 3 16.738 3 16.751V20.251C3 20.2639 3.00033 20.2768 3.00098 20.2896L3.00098 22.251C3.00098 22.6652 3.33676 23.001 3.75098 23.001C4.16519 23.001 4.50098 22.6652 4.50098 22.251V21.001H20.25C20.6642 21.001 21 20.6652 21 20.251V16.751C21 16.3368 20.6642 16.001 20.25 16.001L4.50098 16.001L4.50098 14.501L14.75 14.501C15.1642 14.501 15.5 14.1652 15.5 13.751V10.251C15.5 9.83676 15.1642 9.50098 14.75 9.50098H4.50098L4.50098 8.00098L9.25 8.00098C9.66421 8.00098 10 7.66519 10 7.25098L10 3.75098C10 3.33676 9.66421 3.00098 9.25 3.00098L4.50098 3.00098V1.75098Z" fill="currentColor"/>',uC._name="chart-one",uC._width=24,uC._height=24,uC._viewBox="0 0 24 24",uC=(0,s.Cc)([(0,C.Y$)("gds-icon-chart-one")],uC);const pC=e=>{uC.define();const t=(0,n.p)("gds-icon-chart-one"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let gC=class extends R.M{};gC._regularSVG='<path d="M16 21.75L15.1431 18.7507M8 21.75L8.85694 18.7507M7.75 12.75V14.25M12 7.75V14.25M16.25 10.75V14.25M21.25 3.75V18.25H2.75V3.75H21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',gC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 3.33579 2.33579 3 2.75 3H21.25C21.6642 3 22 3.33579 22 3.75V18.25C22 18.6642 21.6642 19 21.25 19H15.9943L16.7211 21.544C16.8349 21.9422 16.6043 22.3573 16.206 22.4711C15.8078 22.5849 15.3927 22.3543 15.2789 21.956L14.4343 19H9.56573L8.72114 21.956C8.60735 22.3543 8.19224 22.5849 7.79396 22.4711C7.39568 22.3573 7.16506 21.9422 7.27886 21.544L8.0057 19H2.75C2.33579 19 2 18.6642 2 18.25V3.75ZM8.5 12.75C8.5 12.3358 8.16421 12 7.75 12C7.33579 12 7 12.3358 7 12.75V14.25C7 14.6642 7.33579 15 7.75 15C8.16421 15 8.5 14.6642 8.5 14.25V12.75ZM12 7C12.4142 7 12.75 7.33579 12.75 7.75V14.25C12.75 14.6642 12.4142 15 12 15C11.5858 15 11.25 14.6642 11.25 14.25V7.75C11.25 7.33579 11.5858 7 12 7ZM17 10.75C17 10.3358 16.6642 10 16.25 10C15.8358 10 15.5 10.3358 15.5 10.75V14.25C15.5 14.6642 15.8358 15 16.25 15C16.6642 15 17 14.6642 17 14.25V10.75Z" fill="currentColor"/>',gC._name="chart-presentation",gC._width=24,gC._height=24,gC._viewBox="0 0 24 24",gC=(0,s.Cc)([(0,C.Y$)("gds-icon-chart-presentation")],gC);const MC=e=>{gC.define();const t=(0,n.p)("gds-icon-chart-presentation"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let mC=class extends R.M{};mC._regularSVG='<path d="M9.25 20.25V13.75H3.75V20.25H9.25ZM9.25 20.25H14.75M9.25 20.25V3.75H14.75V20.25M14.75 20.25H20.25V8.75H14.75V20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',mC._solidSVG='<path d="M10.75 3.00098C10.3358 3.00098 10 3.33676 10 3.75098V20.2539C10 20.6681 10.3358 21.0039 10.75 21.0039H14.25C14.6642 21.0039 15 20.6681 15 20.2539V3.75098C15 3.33676 14.6642 3.00098 14.25 3.00098H10.75Z" fill="currentColor"/><path d="M3.75 13.0039C3.33579 13.0039 3 13.3397 3 13.7539V20.2539C3 20.6681 3.33579 21.0039 3.75 21.0039H7.25C7.66421 21.0039 8 20.6681 8 20.2539V13.7539C8 13.3397 7.66421 13.0039 7.25 13.0039H3.75Z" fill="currentColor"/><path d="M17 8.75C17 8.33579 17.3358 8 17.75 8H21.25C21.6642 8 22 8.33579 22 8.75V20.2539C22 20.6681 21.6642 21.0039 21.25 21.0039H17.75C17.3358 21.0039 17 20.6681 17 20.2539V8.75Z" fill="currentColor"/>',mC._name="chart-two",mC._width=24,mC._height=24,mC._viewBox="0 0 24 24",mC=(0,s.Cc)([(0,C.Y$)("gds-icon-chart-two")],mC);const VC=e=>{mC.define();const t=(0,n.p)("gds-icon-chart-two"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let fC=class extends R.M{};fC._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M9.19637 4.64738C9.52922 4.89393 9.59917 5.36362 9.35262 5.69647L6.01929 10.1965C5.78034 10.5191 5.32975 10.5963 4.99702 10.3717L3.33035 9.24668C2.98703 9.01494 2.89658 8.54876 3.12832 8.20544C3.36006 7.86212 3.82624 7.77167 4.16956 8.00341L5.24124 8.72679L8.14729 4.80363C8.39384 4.47078 8.86353 4.40083 9.19637 4.64738ZM11 7.75005C11 7.33583 11.3357 7.00005 11.75 7.00005H20.25C20.6642 7.00005 21 7.33583 21 7.75005C21 8.16426 20.6642 8.50005 20.25 8.50005H11.75C11.3357 8.50005 11 8.16426 11 7.75005ZM9.19637 13.6474C9.52922 13.8939 9.59917 14.3636 9.35262 14.6965L6.01929 19.1965C5.78034 19.5191 5.32975 19.5963 4.99702 19.3717L3.33035 18.2467C2.98703 18.0149 2.89658 17.5488 3.12832 17.2054C3.36006 16.8621 3.82624 16.7717 4.16956 17.0034L5.24124 17.7268L8.14729 13.8036C8.39384 13.4708 8.86353 13.4008 9.19637 13.6474ZM11 16.25C11 15.8358 11.3357 15.5 11.75 15.5H20.25C20.6642 15.5 21 15.8358 21 16.25C21 16.6643 20.6642 17 20.25 17H11.75C11.3357 17 11 16.6643 11 16.25Z" fill="currentColor"/>',fC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M9.19644 4.64738C9.52928 4.89393 9.59923 5.36362 9.35268 5.69647L6.01935 10.1965C5.7804 10.5191 5.32981 10.5963 4.99708 10.3717L3.33041 9.24668C2.98709 9.01494 2.89664 8.54876 3.12838 8.20544C3.36012 7.86212 3.8263 7.77167 4.16962 8.00341L5.2413 8.72679L8.14735 4.80363C8.3939 4.47078 8.86359 4.40083 9.19644 4.64738ZM11 7.75005C11 7.33583 11.3358 7.00005 11.75 7.00005H20.25C20.6642 7.00005 21 7.33583 21 7.75005C21 8.16426 20.6642 8.50005 20.25 8.50005H11.75C11.3358 8.50005 11 8.16426 11 7.75005ZM9.19644 13.6474C9.52928 13.8939 9.59923 14.3636 9.35268 14.6965L6.01935 19.1965C5.7804 19.5191 5.32981 19.5963 4.99708 19.3717L3.33041 18.2467C2.98709 18.0149 2.89664 17.5488 3.12838 17.2054C3.36012 16.8621 3.8263 16.7717 4.16962 17.0034L5.2413 17.7268L8.14735 13.8036C8.3939 13.4708 8.86359 13.4008 9.19644 13.6474ZM11 16.25C11 15.8358 11.3358 15.5 11.75 15.5H20.25C20.6642 15.5 21 15.8358 21 16.25C21 16.6643 20.6642 17 20.25 17H11.75C11.3358 17 11 16.6643 11 16.25Z" fill="currentColor"/>',fC._name="checklist",fC._width=24,fC._height=24,fC._viewBox="0 0 24 24",fC=(0,s.Cc)([(0,C.Y$)("gds-icon-checklist")],fC);const LC=e=>{fC.define();const t=(0,n.p)("gds-icon-checklist"),r={...e,class:e.className};return(0,i.createElement)(t,r)},_C=e=>{T.V.define();const t=(0,n.p)("gds-icon-checkmark"),r={...e,class:e.className};return(0,i.createElement)(t,r)},HC=e=>{qr.o.define();const t=(0,n.p)("gds-icon-chevron-bottom"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let vC=class extends R.M{};vC._regularSVG='<path d="M8 13.5L12 17.5L16 13.5M8 6.5L12 10.5L16 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',vC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.46967 5.96967C7.76256 5.67678 8.23744 5.67678 8.53033 5.96967L12 9.43934L15.4697 5.96967C15.7626 5.67678 16.2374 5.67678 16.5303 5.96967C16.8232 6.26256 16.8232 6.73744 16.5303 7.03033L12.5303 11.0303C12.2374 11.3232 11.7626 11.3232 11.4697 11.0303L7.46967 7.03033C7.17678 6.73744 7.17678 6.26256 7.46967 5.96967ZM7.46967 12.9697C7.76256 12.6768 8.23744 12.6768 8.53033 12.9697L12 16.4393L15.4697 12.9697C15.7626 12.6768 16.2374 12.6768 16.5303 12.9697C16.8232 13.2626 16.8232 13.7374 16.5303 14.0303L12.5303 18.0303C12.2374 18.3232 11.7626 18.3232 11.4697 18.0303L7.46967 14.0303C7.17678 13.7374 7.17678 13.2626 7.46967 12.9697Z" fill="currentColor"/>',vC._name="chevron-double-down",vC._width=24,vC._height=24,vC._viewBox="0 0 24 24",vC=(0,s.Cc)([(0,C.Y$)("gds-icon-chevron-double-down")],vC);const kC=e=>{vC.define();const t=(0,n.p)("gds-icon-chevron-double-down"),r={...e,class:e.className};return(0,i.createElement)(t,r)},wC=e=>{Nr.define();const t=(0,n.p)("gds-icon-chevron-double-left"),r={...e,class:e.className};return(0,i.createElement)(t,r)},bC=e=>{Ir.define();const t=(0,n.p)("gds-icon-chevron-double-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ZC=class extends R.M{};ZC._regularSVG='<path d="M8 10.5L12 6.5L16 10.5M8 17.5L12 13.5L16 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ZC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.46967 18.0303C7.76256 18.3232 8.23744 18.3232 8.53033 18.0303L12 14.5607L15.4697 18.0303C15.7626 18.3232 16.2374 18.3232 16.5303 18.0303C16.8232 17.7374 16.8232 17.2626 16.5303 16.9697L12.5303 12.9697C12.2374 12.6768 11.7626 12.6768 11.4697 12.9697L7.46967 16.9697C7.17678 17.2626 7.17678 17.7374 7.46967 18.0303ZM7.46967 11.0303C7.76256 11.3232 8.23744 11.3232 8.53033 11.0303L12 7.56066L15.4697 11.0303C15.7626 11.3232 16.2374 11.3232 16.5303 11.0303C16.8232 10.7374 16.8232 10.2626 16.5303 9.96967L12.5303 5.96967C12.2374 5.67678 11.7626 5.67678 11.4697 5.96967L7.46967 9.96967C7.17678 10.2626 7.17678 10.7374 7.46967 11.0303Z" fill="currentColor"/>',ZC._name="chevron-double-up",ZC._width=24,ZC._height=24,ZC._viewBox="0 0 24 24",ZC=(0,s.Cc)([(0,C.Y$)("gds-icon-chevron-double-up")],ZC);const yC=e=>{ZC.define();const t=(0,n.p)("gds-icon-chevron-double-up"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let xC=class extends R.M{};xC._regularSVG='<path d="M8 10L12 14L16 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',xC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303L16.5303 10.5303C16.8232 10.2374 16.8232 9.76256 16.5303 9.46967C16.2374 9.17678 15.7626 9.17678 15.4697 9.46967L12 12.9393L8.53033 9.46967C8.23744 9.17678 7.76256 9.17678 7.46967 9.46967C7.17678 9.76256 7.17678 10.2374 7.46967 10.5303L11.4697 14.5303Z" fill="currentColor"/>',xC._name="chevron-down-small",xC._width=24,xC._height=24,xC._viewBox="0 0 24 24",xC=(0,s.Cc)([(0,C.Y$)("gds-icon-chevron-down-small")],xC);const SC=e=>{xC.define();const t=(0,n.p)("gds-icon-chevron-down-small"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let $C=class extends R.M{};$C._regularSVG='<path d="M8 9L12 5L16 9M16 15L12 19L8 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',$C._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L16.5303 8.46967C16.8232 8.76256 16.8232 9.23744 16.5303 9.53033C16.2374 9.82322 15.7626 9.82322 15.4697 9.53033L12 6.06066L8.53033 9.53033C8.23744 9.82322 7.76256 9.82322 7.46967 9.53033C7.17678 9.23744 7.17678 8.76256 7.46967 8.46967L11.4697 4.46967ZM7.46967 14.4697C7.76256 14.1768 8.23744 14.1768 8.53033 14.4697L12 17.9393L15.4697 14.4697C15.7626 14.1768 16.2374 14.1768 16.5303 14.4697C16.8232 14.7626 16.8232 15.2374 16.5303 15.5303L12.5303 19.5303C12.2374 19.8232 11.7626 19.8232 11.4697 19.5303L7.46967 15.5303C7.17678 15.2374 7.17678 14.7626 7.46967 14.4697Z" fill="currentColor"/>',$C._name="chevron-grabber-vertical",$C._width=24,$C._height=24,$C._viewBox="0 0 24 24",$C=(0,s.Cc)([(0,C.Y$)("gds-icon-chevron-grabber-vertical")],$C);const GC=e=>{$C.define();const t=(0,n.p)("gds-icon-chevron-grabber-vertical"),r={...e,class:e.className};return(0,i.createElement)(t,r)},jC=e=>{Yr.define();const t=(0,n.p)("gds-icon-chevron-left-small"),r={...e,class:e.className};return(0,i.createElement)(t,r)},EC=e=>{L.g.define();const t=(0,n.p)("gds-icon-chevron-left"),r={...e,class:e.className};return(0,i.createElement)(t,r)},BC=e=>{zr.define();const t=(0,n.p)("gds-icon-chevron-right-small"),r={...e,class:e.className};return(0,i.createElement)(t,r)},qC=e=>{Ar.V.define();const t=(0,n.p)("gds-icon-chevron-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let NC=class extends R.M{};NC._regularSVG='<path d="M8 14L12 10L16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',NC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 9.46967C11.7626 9.17678 12.2374 9.17678 12.5303 9.46967L16.5303 13.4697C16.8232 13.7626 16.8232 14.2374 16.5303 14.5303C16.2374 14.8232 15.7626 14.8232 15.4697 14.5303L12 11.0607L8.53033 14.5303C8.23744 14.8232 7.76256 14.8232 7.46967 14.5303C7.17678 14.2374 7.17678 13.7626 7.46967 13.4697L11.4697 9.46967Z" fill="currentColor"/>',NC._name="chevron-top-small",NC._width=24,NC._height=24,NC._viewBox="0 0 24 24",NC=(0,s.Cc)([(0,C.Y$)("gds-icon-chevron-top-small")],NC);const IC=e=>{NC.define();const t=(0,n.p)("gds-icon-chevron-top-small"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let YC=class extends R.M{};YC._regularSVG='<path d="M4 15L12 7L20 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',YC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.25C12.1989 6.25 12.3897 6.32902 12.5303 6.46967L20.5303 14.4697C20.8232 14.7626 20.8232 15.2374 20.5303 15.5303C20.2374 15.8232 19.7626 15.8232 19.4697 15.5303L12 8.06066L4.53033 15.5303C4.23744 15.8232 3.76256 15.8232 3.46967 15.5303C3.17678 15.2374 3.17678 14.7626 3.46967 14.4697L11.4697 6.46967C11.6103 6.32902 11.8011 6.25 12 6.25Z" fill="currentColor"/>',YC._name="chevron-top",YC._width=24,YC._height=24,YC._viewBox="0 0 24 24",YC=(0,s.Cc)([(0,C.Y$)("gds-icon-chevron-top")],YC);const zC=e=>{YC.define();const t=(0,n.p)("gds-icon-chevron-top"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let AC=class extends R.M{};AC._regularSVG='<path d="M18.5407 5.45926C16.8668 3.78534 14.5543 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.5543 3.78534 16.8668 5.45926 18.5407M18.5407 5.45926C20.2147 7.13318 21.25 9.44568 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C9.44568 21.25 7.13318 20.2147 5.45926 18.5407M18.5407 5.45926L5.45926 18.5407" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',AC._solidSVG='<path d="M18.5209 4.4184C16.7701 2.91114 14.4915 2 12 2C6.47715 2 2 6.47715 2 12C2 14.4915 2.91114 16.7701 4.4184 18.5209L18.5209 4.4184Z" fill="currentColor"/><path d="M19.5816 5.47906L5.47906 19.5816C7.22987 21.0889 9.50853 22 12 22C17.5228 22 22 17.5228 22 12C22 9.50853 21.0889 7.22987 19.5816 5.47906Z" fill="currentColor"/>',AC._name="circle-ban",AC._width=24,AC._height=24,AC._viewBox="0 0 24 24",AC=(0,s.Cc)([(0,C.Y$)("gds-icon-circle-ban")],AC);const TC=e=>{AC.define();const t=(0,n.p)("gds-icon-circle-ban"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var RC=r(5424);const OC=e=>{RC.i.define();const t=(0,n.p)("gds-icon-circle-check"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let WC=class extends R.M{};WC._regularSVG='<path d="M8 12V11.99M8.25 12C8.25 12.1381 8.13807 12.25 8 12.25C7.86193 12.25 7.75 12.1381 7.75 12C7.75 11.8619 7.86193 11.75 8 11.75C8.13807 11.75 8.25 11.8619 8.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M12 12V11.99M12.25 12C12.25 12.1381 12.1381 12.25 12 12.25C11.8619 12.25 11.75 12.1381 11.75 12C11.75 11.8619 11.8619 11.75 12 11.75C12.1381 11.75 12.25 11.8619 12.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 12V11.99M16.25 12C16.25 12.1381 16.1381 12.25 16 12.25C15.8619 12.25 15.75 12.1381 15.75 12C15.75 11.8619 15.8619 11.75 16 11.75C16.1381 11.75 16.25 11.8619 16.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5"/>',WC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z" fill="currentColor"/>',WC._name="circle-dots",WC._width=24,WC._height=24,WC._viewBox="0 0 24 24",WC=(0,s.Cc)([(0,C.Y$)("gds-icon-circle-dots")],WC);const PC=e=>{WC.define();const t=(0,n.p)("gds-icon-circle-dots"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var FC=r(4464);const DC=e=>{FC.w.define();const t=(0,n.p)("gds-icon-circle-info"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let KC=class extends R.M{};KC._regularSVG='<path d="M16.2426 12.0005H7.75736M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',KC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.2426 12.7505C16.6569 12.7505 16.9926 12.4147 16.9926 12.0005C16.9926 11.5862 16.6569 11.2505 16.2426 11.2505H7.75736C7.34315 11.2505 7.00736 11.5862 7.00736 12.0005C7.00736 12.4147 7.34315 12.7505 7.75736 12.7505H16.2426Z" fill="currentColor"/>',KC._name="circle-minus",KC._width=24,KC._height=24,KC._viewBox="0 0 24 24",KC=(0,s.Cc)([(0,C.Y$)("gds-icon-circle-minus")],KC);const UC=e=>{KC.define();const t=(0,n.p)("gds-icon-circle-minus"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let JC=class extends R.M{};JC._regularSVG='<path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>',JC._solidSVG='<path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor"/>',JC._name="circle-placeholder-on",JC._width=24,JC._height=24,JC._viewBox="0 0 24 24",JC=(0,s.Cc)([(0,C.Y$)("gds-icon-circle-placeholder-on")],JC);const QC=e=>{JC.define();const t=(0,n.p)("gds-icon-circle-placeholder-on"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let XC=class extends R.M{};XC._regularSVG='<path d="M16.2426 12.0005H7.75736M12 16.2431V7.75781M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',XC._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12.75 7.75781C12.75 7.3436 12.4142 7.00781 12 7.00781C11.5858 7.00781 11.25 7.3436 11.25 7.75781V11.2505H7.75736C7.34315 11.2505 7.00736 11.5862 7.00736 12.0005C7.00736 12.4147 7.34315 12.7505 7.75736 12.7505H11.25V16.2431C11.25 16.6573 11.5858 16.9931 12 16.9931C12.4142 16.9931 12.75 16.6573 12.75 16.2431V12.7505H16.2426C16.6569 12.7505 16.9926 12.4147 16.9926 12.0005C16.9926 11.5862 16.6569 11.2505 16.2426 11.2505H12.75V7.75781Z" fill="currentColor"/>',XC._name="circle-plus",XC._width=24,XC._height=24,XC._viewBox="0 0 24 24",XC=(0,s.Cc)([(0,C.Y$)("gds-icon-circle-plus")],XC);const ed=e=>{XC.define();const t=(0,n.p)("gds-icon-circle-plus"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let td=class extends R.M{};td._regularSVG='<path d="M9.75 9.25V7.75H14.25V10.5L12 12V13.25M12 16V15.99M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12ZM12.25 16C12.25 16.1381 12.1381 16.25 12 16.25C11.8619 16.25 11.75 16.1381 11.75 16C11.75 15.8619 11.8619 15.75 12 15.75C12.1381 15.75 12.25 15.8619 12.25 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',td._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM9 7.75C9 7.33579 9.33579 7 9.75 7H14.25C14.6642 7 15 7.33579 15 7.75V10.5C15 10.7508 14.8747 10.9849 14.666 11.124L12.75 12.4014V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V12C11.25 11.7492 11.3753 11.5151 11.584 11.376L13.5 10.0986V8.5H10.5V9.25C10.5 9.66421 10.1642 10 9.75 10C9.33579 10 9 9.66421 9 9.25V7.75ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15Z" fill="currentColor"/>',td._name="circle-questionmark",td._width=24,td._height=24,td._viewBox="0 0 24 24",td=(0,s.Cc)([(0,C.Y$)("gds-icon-circle-questionmark")],td);const rd=e=>{td.define();const t=(0,n.p)("gds-icon-circle-questionmark"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let od=class extends R.M{};od._regularSVG='<path d="M15 9L9 15M15 15L9 9M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',od._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.53033 8.46967C9.23744 8.17678 8.76256 8.17678 8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033L10.9393 12L8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L12 13.0607L14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L13.0607 12L15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L12 10.9393L9.53033 8.46967Z" fill="currentColor"/>',od._name="circle-x",od._width=24,od._height=24,od._viewBox="0 0 24 24",od=(0,s.Cc)([(0,C.Y$)("gds-icon-circle-x")],od);const sd=e=>{od.define();const t=(0,n.p)("gds-icon-circle-x"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let nd=class extends R.M{};nd._regularSVG='<path d="M14.6766 7.38126C13.686 5.23749 11.5167 3.75 9 3.75C5.54822 3.75 2.75 6.54822 2.75 10C2.75 13.3961 5.45873 16.1596 8.83359 16.2478M21.25 14C21.25 17.4518 18.4518 20.25 15 20.25C12.3406 20.25 10.0691 18.589 9.16641 16.2478C8.89745 15.5503 8.75 14.7924 8.75 14C8.75 10.6039 11.4587 7.84038 14.8336 7.75217C14.8889 7.75073 14.9444 7.75 15 7.75C18.4518 7.75 21.25 10.5482 21.25 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>',nd._solidSVG='<path d="M22 14C22 17.866 18.866 21 15 21C11.134 21 8 17.866 8 14C8 10.134 11.134 7 15 7C18.866 7 22 10.134 22 14Z" fill="currentColor"/><path d="M14.3807 5.52222C9.9754 5.83942 6.5 9.51385 6.5 14C6.5 14.9402 6.65266 15.8448 6.93455 16.6903C4.07675 15.809 2 13.147 2 10C2 6.13401 5.13401 3 9 3C11.1629 3 13.0967 3.98095 14.3807 5.52222Z" fill="currentColor"/>',nd._name="circles-three",nd._width=24,nd._height=24,nd._viewBox="0 0 24 24",nd=(0,s.Cc)([(0,C.Y$)("gds-icon-circles-three")],nd);const ld=e=>{nd.define();const t=(0,n.p)("gds-icon-circles-three"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let id=class extends R.M{};id._regularSVG='<path d="M12 7.75V12L14.75 14.75M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',id._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 7.75C12.75 7.33579 12.4142 7 12 7C11.5858 7 11.25 7.33579 11.25 7.75V12C11.25 12.1989 11.329 12.3897 11.4697 12.5303L14.2197 15.2803C14.5126 15.5732 14.9874 15.5732 15.2803 15.2803C15.5732 14.9874 15.5732 14.5126 15.2803 14.2197L12.75 11.6893V7.75Z" fill="currentColor"/>',id._name="clock",id._width=24,id._height=24,id._viewBox="0 0 24 24",id=(0,s.Cc)([(0,C.Y$)("gds-icon-clock")],id);const ad=e=>{id.define();const t=(0,n.p)("gds-icon-clock"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let cd=class extends R.M{};cd._regularSVG='<path d="M16.75 19.25H18.125C20.4032 19.25 22.25 17.4032 22.25 15.125C22.25 12.8468 20.4032 11 18.125 11C18.0814 11 18.038 11.0007 17.9948 11.002C17.9983 10.9184 18 10.8344 18 10.75C18 7.43629 15.3137 4.75 12 4.75C9.3716 4.75 7.13793 6.44009 6.32647 8.7928C3.74507 9.12339 1.75 11.3287 1.75 14C1.75 16.8995 4.10051 19.25 7 19.25H7.25M12 11.75V19.25M12 19.25L14.5 16.75M12 19.25L9.5 16.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',cd._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5.77996 8.12427C6.80396 5.70153 9.20241 4 12 4C15.5725 4 18.4969 6.77542 18.7344 10.2877C21.1392 10.5876 23 12.639 23 15.125C23 17.8174 20.8174 20 18.125 20H7C3.68629 20 1 17.3137 1 14C1 11.1041 3.05102 8.68825 5.77996 8.12427ZM11.25 8.75C11.25 8.33579 11.5858 8 12 8C12.4142 8 12.75 8.33579 12.75 8.75V14.4393L13.9697 13.2197C14.2626 12.9268 14.7374 12.9268 15.0303 13.2197C15.3232 13.5126 15.3232 13.9874 15.0303 14.2803L12.5303 16.7803C12.2374 17.0732 11.7626 17.0732 11.4697 16.7803L8.96967 14.2803C8.67678 13.9874 8.67678 13.5126 8.96967 13.2197C9.26256 12.9268 9.73744 12.9268 10.0303 13.2197L11.25 14.4393V8.75Z" fill="currentColor"/>',cd._name="cloud-download",cd._width=24,cd._height=24,cd._viewBox="0 0 24 24",cd=(0,s.Cc)([(0,C.Y$)("gds-icon-cloud-download")],cd);const Cd=e=>{cd.define();const t=(0,n.p)("gds-icon-cloud-download"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var dd=r(1496);const hd=e=>{dd.m.define();const t=(0,n.p)("gds-icon-cloud-upload"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ud=class extends R.M{};ud._regularSVG='<path d="M22.25 9.75H23.25M15.25 2.75V1.75M20.1997 4.80025L20.9069 4.09315M9.59375 4.09315L10.3009 4.80026M18.5495 12.0119C18.9914 11.3686 19.25 10.5895 19.25 9.75C19.25 7.54086 17.4591 5.75 15.25 5.75C13.2972 5.75 11.6713 7.14935 11.3202 9M16.625 11.95C15.867 11.95 15.1517 12.1333 14.5203 12.4583C13.872 11.0435 12.7092 9.91622 11.273 9.31871C10.547 9.01667 9.7512 8.85 8.91667 8.85C5.51091 8.85 2.75 11.6258 2.75 15.05C2.75 18.4742 5.51091 21.25 8.91667 21.25H16.625C19.1793 21.25 21.25 19.1681 21.25 16.6C21.25 14.6435 20.0481 12.9692 18.3462 12.2827C17.8142 12.0681 17.2333 11.95 16.625 11.95Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>',ud._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4903 8.28083C9.98427 8.16249 9.45738 8.1 8.91667 8.1C5.09289 8.1 2 11.2154 2 15.05C2 18.8846 5.09289 22 8.91667 22H16.625C19.5973 22 22 19.5785 22 16.6C22 14.6634 20.985 12.9643 19.4597 12.0113C19.7703 11.3676 19.9444 10.6453 19.9444 9.88333C19.9444 7.19016 17.7719 5 15.0833 5C12.9547 5 11.1501 6.37275 10.4903 8.28083ZM11.9046 8.78036C13.1377 9.3746 14.167 10.3245 14.8624 11.4973C15.4151 11.3046 16.0084 11.2 16.625 11.2C17.1313 11.2 17.622 11.2705 18.0876 11.4025C18.3159 10.9462 18.4444 10.4305 18.4444 9.88333C18.4444 8.01095 16.9358 6.5 15.0833 6.5C13.6134 6.5 12.3594 7.45154 11.9046 8.78036Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 1V3.5H14.5V1H16ZM21.9675 4.09315L20.1997 5.86091L19.1391 4.80025L20.9069 3.03249L21.9675 4.09315ZM9.59375 3.03249L11.3615 4.80026L10.3009 5.86092L8.53309 4.09315L9.59375 3.03249ZM21.5 9H24V10.5H21.5V9Z" fill="currentColor"/>',ud._name="cloudy-sun",ud._width=24,ud._height=24,ud._viewBox="0 0 24 24",ud=(0,s.Cc)([(0,C.Y$)("gds-icon-cloudy-sun")],ud);const pd=e=>{ud.define();const t=(0,n.p)("gds-icon-cloudy-sun"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let gd=class extends R.M{};gd._regularSVG='<g clip-path="url(#clip0_4959_203)"><path d="M9.75 20.25L14.25 3.75M18.25 7.75L22.25 12L18.25 16.25M5.75 16.25L1.75 12L5.75 7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_4959_203"><rect width="24" height="24" fill="white"/></clipPath></defs>',gd._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4473 3.02637C14.847 3.13536 15.0826 3.54766 14.9736 3.94728L10.4736 20.4473C10.3646 20.8469 9.95228 21.0825 9.55266 20.9735C9.15304 20.8645 8.91744 20.4522 9.02643 20.0526L13.5264 3.55261C13.6354 3.15299 14.0477 2.91738 14.4473 3.02637ZM6.26402 7.20379C6.56565 7.48768 6.58004 7.96234 6.29615 8.26397L2.77994 12L6.29615 15.7359C6.58004 16.0375 6.56565 16.5122 6.26402 16.7961C5.9624 17.08 5.48774 17.0656 5.20385 16.764L1.20385 12.514C0.932051 12.2252 0.932049 11.7747 1.20385 11.4859L5.20385 7.23592C5.48774 6.93429 5.96239 6.91991 6.26402 7.20379ZM17.736 7.20379C18.0376 6.91991 18.5123 6.93429 18.7962 7.23592L22.7962 11.4859C23.068 11.7747 23.0679 12.2252 22.7961 12.514L18.7961 16.764C18.5123 17.0656 18.0376 17.08 17.736 16.7961C17.4343 16.5122 17.42 16.0375 17.7039 15.7359L21.2201 12L17.7038 8.26397C17.42 7.96234 17.4343 7.48768 17.736 7.20379Z" fill="currentColor"/>',gd._name="code-brackets",gd._width=24,gd._height=24,gd._viewBox="0 0 24 24",gd=(0,s.Cc)([(0,C.Y$)("gds-icon-code-brackets")],gd);const Md=e=>{gd.define();const t=(0,n.p)("gds-icon-code-brackets"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let md=class extends R.M{};md._regularSVG='<g clip-path="url(#clip0_4963_194)"><path d="M10.25 9L7.25 12L10.25 15M13.75 9L16.75 12L13.75 15M3.75 3.75H20.25V20.25H3.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_4963_194"><rect width="24" height="24" fill="white"/></clipPath></defs>',md._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM10.7803 8.46967C11.0732 8.76256 11.0732 9.23744 10.7803 9.53033L8.84099 11.4697C8.5481 11.7626 8.5481 12.2374 8.84099 12.5303L10.7803 14.4697C11.0732 14.7626 11.0732 15.2374 10.7803 15.5303C10.4874 15.8232 10.0126 15.8232 9.71967 15.5303L6.71967 12.5303C6.42678 12.2374 6.42678 11.7626 6.71967 11.4697L9.71967 8.46967C10.0126 8.17678 10.4874 8.17678 10.7803 8.46967ZM14.2803 8.46967C13.9874 8.17678 13.5126 8.17678 13.2197 8.46967C12.9268 8.76256 12.9268 9.23744 13.2197 9.53033L15.159 11.4697C15.4519 11.7626 15.4519 12.2374 15.159 12.5303L13.2197 14.4697C12.9268 14.7626 12.9268 15.2374 13.2197 15.5303C13.5126 15.8232 13.9874 15.8232 14.2803 15.5303L17.2803 12.5303C17.5732 12.2374 17.5732 11.7626 17.2803 11.4697L14.2803 8.46967Z" fill="currentColor"/>',md._name="code",md._width=24,md._height=24,md._viewBox="0 0 24 24",md=(0,s.Cc)([(0,C.Y$)("gds-icon-code")],md);const Vd=e=>{md.define();const t=(0,n.p)("gds-icon-code"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let fd=class extends R.M{};fd._regularSVG='<path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M15.5 8.5L10 10L8.5 15.5L14 14L15.5 8.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',fd._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7652 8.23484C15.8603 8.33 15.8972 8.46885 15.8618 8.59868L14.3618 14.0987C14.3269 14.2268 14.2268 14.3269 14.0987 14.3618L8.59868 15.8618C8.46885 15.8972 8.33 15.8603 8.23484 15.7652C8.13969 15.67 8.10281 15.5312 8.13822 15.4013L9.63822 9.90134C9.67316 9.77324 9.77324 9.67316 9.90134 9.63822L15.4013 8.13822C15.5312 8.10281 15.67 8.13969 15.7652 8.23484Z" fill="currentColor"/>',fd._name="compass-round",fd._width=24,fd._height=24,fd._viewBox="0 0 24 24",fd=(0,s.Cc)([(0,C.Y$)("gds-icon-compass-round")],fd);const Ld=e=>{fd.define();const t=(0,n.p)("gds-icon-compass-round"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let _d=class extends R.M{};_d._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C12.3898 2 12.7747 2.02234 13.1534 2.06587C13.3617 2.08982 13.5505 2.19986 13.674 2.36932C13.7974 2.53878 13.8443 2.75219 13.8033 2.9578C13.7684 3.13249 13.75 3.31372 13.75 3.5C13.75 4.89326 14.7868 6.04558 16.1307 6.2255C16.4659 6.27038 16.7296 6.5341 16.7745 6.86934C16.9544 8.2132 18.1067 9.25 19.5 9.25C19.91 9.25 20.2972 9.16075 20.6448 9.00133C20.8467 8.90874 21.0792 8.91039 21.2797 9.00583C21.4803 9.10127 21.6282 9.28068 21.6837 9.49574C21.8903 10.2969 22 11.1362 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 11.5421 20.4639 11.0931 20.3944 10.6556C20.1057 10.7175 19.8064 10.75 19.5 10.75C17.5347 10.75 15.8818 9.41656 15.3952 7.60481C13.5845 7.11852 12.2516 5.46736 12.25 3.5036C12.167 3.50121 12.0836 3.5 12 3.5Z" fill="currentColor"/><path d="M10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5Z" fill="currentColor"/><path d="M14 11.5C14 12.3284 13.3284 13 12.5 13C11.6716 13 11 12.3284 11 11.5C11 10.6716 11.6716 10 12.5 10C13.3284 10 14 10.6716 14 11.5Z" fill="currentColor"/><path d="M18 14C18 14.5523 17.5523 15 17 15C16.4477 15 16 14.5523 16 14C16 13.4477 16.4477 13 17 13C17.5523 13 18 13.4477 18 14Z" fill="currentColor"/><path d="M13 16.5C13 17.3284 12.3284 18 11.5 18C10.6716 18 10 17.3284 10 16.5C10 15.6716 10.6716 15 11.5 15C12.3284 15 13 15.6716 13 16.5Z" fill="currentColor"/><path d="M8 14C8 14.5523 7.55228 15 7 15C6.44772 15 6 14.5523 6 14C6 13.4477 6.44772 13 7 13C7.55228 13 8 13.4477 8 14Z" fill="currentColor"/>',_d._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C12.3898 2 12.7747 2.02234 13.1534 2.06587C13.3617 2.08982 13.5505 2.19986 13.674 2.36932C13.7974 2.53878 13.8443 2.75219 13.8033 2.9578C13.7684 3.13249 13.75 3.31372 13.75 3.5C13.75 4.89326 14.7868 6.04558 16.1307 6.2255C16.4659 6.27038 16.7296 6.5341 16.7745 6.86934C16.9544 8.2132 18.1067 9.25 19.5 9.25C19.91 9.25 20.2972 9.16075 20.6448 9.00133C20.8467 8.90874 21.0792 8.91039 21.2797 9.00583C21.4803 9.10127 21.6282 9.28068 21.6837 9.49574C21.8903 10.2969 22 11.1362 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5ZM14 11.5C14 12.3284 13.3284 13 12.5 13C11.6716 13 11 12.3284 11 11.5C11 10.6716 11.6716 10 12.5 10C13.3284 10 14 10.6716 14 11.5ZM17 15C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13C16.4477 13 16 13.4477 16 14C16 14.5523 16.4477 15 17 15ZM13 16.5C13 17.3284 12.3284 18 11.5 18C10.6716 18 10 17.3284 10 16.5C10 15.6716 10.6716 15 11.5 15C12.3284 15 13 15.6716 13 16.5ZM7 15C7.55228 15 8 14.5523 8 14C8 13.4477 7.55228 13 7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15Z" fill="currentColor"/>',_d._name="cookies",_d._width=24,_d._height=24,_d._viewBox="0 0 24 24",_d=(0,s.Cc)([(0,C.Y$)("gds-icon-cookies")],_d);const Hd=e=>{_d.define();const t=(0,n.p)("gds-icon-cookies"),r={...e,class:e.className};return(0,i.createElement)(t,r)},vd=e=>{us.define();const t=(0,n.p)("gds-icon-copy"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let kd=class extends R.M{};kd._regularSVG='<path d="M2.75 9.75005V19.2461H21.2461V9.75005M2.75 9.75005V4.75293H21.2422C21.247 6.41863 21.2461 8.08434 21.2461 9.75005M2.75 9.75005H21.2461M6.75 13.25H9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',kd._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4.00293C2.33579 4.00293 2 4.33872 2 4.75293V9H21.9961V10.5H2V19.2461C2 19.6604 2.33579 19.9961 2.75 19.9961H21.2461C21.6603 19.9961 21.9961 19.6604 21.9961 19.2461L21.9961 9.05303C21.9962 7.61979 21.9964 6.18525 21.9922 4.75075C21.991 4.33739 21.6556 4.00293 21.2422 4.00293H2.75ZM6.75 12.5C6.33579 12.5 6 12.8358 6 13.25C6 13.6642 6.33579 14 6.75 14H9.75C10.1642 14 10.5 13.6642 10.5 13.25C10.5 12.8358 10.1642 12.5 9.75 12.5H6.75Z" fill="currentColor"/>',kd._name="credit-card",kd._width=24,kd._height=24,kd._viewBox="0 0 24 24",kd=(0,s.Cc)([(0,C.Y$)("gds-icon-credit-card")],kd);const wd=e=>{kd.define();const t=(0,n.p)("gds-icon-credit-card"),r={...e,class:e.className};return(0,i.createElement)(t,r)},bd=e=>{Ee.define();const t=(0,n.p)("gds-icon-cross-large"),r={...e,class:e.className};return(0,i.createElement)(t,r)},Zd=e=>{Jt.r.define();const t=(0,n.p)("gds-icon-cross-small"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let yd=class extends R.M{};yd._regularSVG='<path d="M4.75 7.75V7C4.33579 7 4 7.33579 4 7.75H4.75ZM17.25 7.75H18C18 7.33579 17.6642 7 17.25 7V7.75ZM17.25 21.25V22C17.6642 22 18 21.6642 18 21.25H17.25ZM4.75 21.25H4C4 21.6642 4.33579 22 4.75 22V21.25ZM10.25 5.25C10.25 5.66421 10.5858 6 11 6C11.4142 6 11.75 5.66421 11.75 5.25H10.25ZM11.75 2.75C11.75 2.33579 11.4142 2 11 2C10.5858 2 10.25 2.33579 10.25 2.75H11.75ZM6.25 5.25C6.25 5.66421 6.58579 6 7 6C7.41421 6 7.75 5.66421 7.75 5.25H6.25ZM7.75 2.75C7.75 2.33579 7.41421 2 7 2C6.58579 2 6.25 2.33579 6.25 2.75H7.75ZM14.25 5.25C14.25 5.66421 14.5858 6 15 6C15.4142 6 15.75 5.66421 15.75 5.25H14.25ZM15.75 2.75C15.75 2.33579 15.4142 2 15 2C14.5858 2 14.25 2.33579 14.25 2.75H15.75ZM17.25 9.75V9H16.5V9.75H17.25ZM17.25 15.25H16.5V16H17.25V15.25ZM4.75 7.75V8.5H17.25V7.75V7H4.75V7.75ZM17.25 7.75H16.5V21.25H17.25H18V7.75H17.25ZM17.25 21.25V20.5H4.75V21.25V22H17.25V21.25ZM4.75 21.25H5.5V7.75H4.75H4V21.25H4.75ZM11 5.25H11.75V2.75H11H10.25V5.25H11ZM7 5.25H7.75V2.75H7H6.25V5.25H7ZM15 5.25H15.75V2.75H15H14.25V5.25H15ZM17.25 9.75V10.5H18.5V9.75V9H17.25V9.75ZM18.5 15.25V14.5H17.25V15.25V16H18.5V15.25ZM17.25 15.25H18V9.75H17.25H16.5V15.25H17.25ZM21.25 12.5H20.5C20.5 13.6046 19.6046 14.5 18.5 14.5V15.25V16C20.433 16 22 14.433 22 12.5H21.25ZM18.5 9.75V10.5C19.6046 10.5 20.5 11.3954 20.5 12.5H21.25H22C22 10.567 20.433 9 18.5 9V9.75Z" fill="currentColor"/>',yd._solidSVG='<path d="M7 2C7.41421 2 7.75 2.33579 7.75 2.75V5.25C7.75 5.66421 7.41421 6 7 6C6.58579 6 6.25 5.66421 6.25 5.25V2.75C6.25 2.33579 6.58579 2 7 2Z" fill="currentColor"/><path d="M11 2C11.4142 2 11.75 2.33579 11.75 2.75V5.25C11.75 5.66421 11.4142 6 11 6C10.5858 6 10.25 5.66421 10.25 5.25V2.75C10.25 2.33579 10.5858 2 11 2Z" fill="currentColor"/><path d="M15 2C15.4142 2 15.75 2.33579 15.75 2.75V5.25C15.75 5.66421 15.4142 6 15 6C14.5858 6 14.25 5.66421 14.25 5.25V2.75C14.25 2.33579 14.5858 2 15 2Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 7C4.33579 7 4 7.33579 4 7.75V21.25C4 21.6642 4.33579 22 4.75 22H17.25C17.6642 22 18 21.6642 18 21.25V16H18.5C20.433 16 22 14.433 22 12.5C22 10.567 20.433 9 18.5 9H18V7.75C18 7.33579 17.6642 7 17.25 7H4.75ZM18 10.5V14.5H18.5C19.6046 14.5 20.5 13.6046 20.5 12.5C20.5 11.3954 19.6046 10.5 18.5 10.5H18Z" fill="currentColor"/>',yd._name="cup-hot",yd._width=24,yd._height=24,yd._viewBox="0 0 24 24",yd=(0,s.Cc)([(0,C.Y$)("gds-icon-cup-hot")],yd);const xd=e=>{yd.define();const t=(0,n.p)("gds-icon-cup-hot"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Sd=class extends R.M{};Sd._regularSVG='<path d="M3.25 3.25L9.93056 21.75L13.5278 13.5278L21.75 9.93056L3.25 3.25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',Sd._solidSVG='<path d="M3.50475 2.54461C3.23125 2.44584 2.92531 2.51407 2.71969 2.71969C2.51407 2.92531 2.44584 3.23125 2.54461 3.50475L9.22516 22.0048C9.32942 22.2935 9.59909 22.4895 9.90588 22.4996C10.2127 22.5097 10.4947 22.3319 10.6177 22.0506L14.0973 14.0973L22.0506 10.6177C22.3319 10.4947 22.5097 10.2127 22.4996 9.90588C22.4895 9.59909 22.2935 9.32942 22.0048 9.22516L3.50475 2.54461Z" fill="currentColor"/>',Sd._name="cursor",Sd._width=24,Sd._height=24,Sd._viewBox="0 0 24 24",Sd=(0,s.Cc)([(0,C.Y$)("gds-icon-cursor")],Sd);const $d=e=>{Sd.define();const t=(0,n.p)("gds-icon-cursor"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Gd=class extends R.M{};Gd._regularSVG='<path d="M17.25 18.25H19.5M3.75 16.75V3.75H20.25V8.75M3.75 16.75H1.75V20.25H14.25M3.75 16.75H14.25M14.25 8.75H22.25V21.25H14.25V8.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Gd._solidSVG='<path d="M17.25 17.5C16.8358 17.5 16.5 17.8358 16.5 18.25C16.5 18.6642 16.8358 19 17.25 19H19.5C19.9142 19 20.25 18.6642 20.25 18.25C20.25 17.8358 19.9142 17.5 19.5 17.5H17.25Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3C3.33579 3 3 3.33579 3 3.75V16H1.75C1.33579 16 1 16.3358 1 16.75V20.25C1 20.6642 1.33579 21 1.75 21H13.5V21.25C13.5 21.6642 13.8358 22 14.25 22H22.25C22.6642 22 23 21.6642 23 21.25V8.75C23 8.33579 22.6642 8 22.25 8H21V3.75C21 3.33579 20.6642 3 20.25 3H3.75ZM14 8.04268C14.0782 8.01504 14.1623 8 14.25 8H14V8.04268ZM15 20.5V9.5H21.5V20.5H15ZM13.5 17.5V19.5H2.5V17.5H13.5Z" fill="currentColor"/>',Gd._name="devices",Gd._width=24,Gd._height=24,Gd._viewBox="0 0 24 24",Gd=(0,s.Cc)([(0,C.Y$)("gds-icon-devices")],Gd);const jd=e=>{Gd.define();const t=(0,n.p)("gds-icon-devices"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ed=class extends R.M{};Ed._regularSVG='<path d="M12 9V3.75H19.25L21.25 6.5L19.25 9H12ZM12 9V14M12 9H4.75L2.75 11.5L4.75 14H12M12 14V20.25M12 20.25H7.75M12 20.25H16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ed._solidSVG='<path d="M12 3C11.5858 3 11.25 3.33579 11.25 3.75V8.25H4.75C4.52216 8.25 4.30668 8.35357 4.16435 8.53148L2.16435 11.0315C1.94522 11.3054 1.94522 11.6946 2.16435 11.9685L4.16435 14.4685C4.30668 14.6464 4.52216 14.75 4.75 14.75H11.25V19.5H7.75C7.33579 19.5 7 19.8358 7 20.25C7 20.6642 7.33579 21 7.75 21H16.25C16.6642 21 17 20.6642 17 20.25C17 19.8358 16.6642 19.5 16.25 19.5H12.75V9.75H19.25C19.4778 9.75 19.6933 9.64643 19.8357 9.46852L21.8357 6.96852C22.0468 6.70464 22.0553 6.33217 21.8566 6.05887L19.8566 3.30887C19.7154 3.11481 19.49 3 19.25 3H12Z" fill="currentColor"/>',Ed._name="direction",Ed._width=24,Ed._height=24,Ed._viewBox="0 0 24 24",Ed=(0,s.Cc)([(0,C.Y$)("gds-icon-direction")],Ed);const Bd=e=>{Ed.define();const t=(0,n.p)("gds-icon-direction"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let qd=class extends R.M{};qd._regularSVG='<path d="M12 7.375V6.34722M12 16.625V17.6528M14.2257 8.91667C13.7814 8.30226 12.9511 7.88889 12 7.88889H11.7145C10.4531 7.88889 9.43056 8.70694 9.43056 9.71605V9.79449C9.43056 10.5163 9.94031 11.1761 10.7473 11.4989L13.2527 12.5011C14.0597 12.8239 14.5694 13.4837 14.5694 14.2055C14.5694 15.2579 13.503 16.1111 12.1874 16.1111H12C11.0489 16.1111 10.2186 15.6977 9.7743 15.0833M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',qd._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 5.59722C12.4142 5.59722 12.75 5.93301 12.75 6.34722V7.21059C13.6067 7.37687 14.3618 7.82497 14.8335 8.4772C15.0762 8.81286 15.0008 9.28172 14.6652 9.52443C14.3295 9.76714 13.8606 9.69179 13.6179 9.35613C13.3349 8.96473 12.7471 8.63889 12 8.63889H11.7145C10.7025 8.63889 10.1806 9.26867 10.1806 9.71605V9.79449C10.1806 10.1375 10.4302 10.5643 11.0258 10.8026L13.5312 11.8047C14.5496 12.212 15.3194 13.105 15.3194 14.2055C15.3194 15.6253 14.107 16.6021 12.75 16.8166V17.6528C12.75 18.067 12.4142 18.4028 12 18.4028C11.5858 18.4028 11.25 18.067 11.25 17.6528V16.7894C10.3933 16.6231 9.63816 16.175 9.16654 15.5228C8.92383 15.1871 8.99918 14.7183 9.33484 14.4756C9.6705 14.2329 10.1394 14.3082 10.3821 14.6439C10.6651 15.0353 11.2529 15.3611 12 15.3611H12.1874C13.2536 15.3611 13.8194 14.6962 13.8194 14.2055C13.8194 13.8625 13.5698 13.4357 12.9742 13.1974L10.4688 12.1953C9.45045 11.788 8.68056 10.895 8.68056 9.79449V9.71605C8.68056 8.30663 9.90675 7.35168 11.25 7.17029V6.34722C11.25 5.93301 11.5858 5.59722 12 5.59722Z" fill="currentColor"/>',qd._name="dollar",qd._width=24,qd._height=24,qd._viewBox="0 0 24 24",qd=(0,s.Cc)([(0,C.Y$)("gds-icon-dollar")],qd);const Nd=e=>{qd.define();const t=(0,n.p)("gds-icon-dollar"),r={...e,class:e.className};return(0,i.createElement)(t,r)},Id=e=>{ps.z.define();const t=(0,n.p)("gds-icon-dot-grid-one-horizontal"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Yd=class extends R.M{};Yd._regularSVG='<path d="M12 4.75C12.5523 4.75 13 4.30228 13 3.75C13 3.19772 12.5523 2.75 12 2.75C11.4477 2.75 11 3.19772 11 3.75C11 4.30228 11.4477 4.75 12 4.75Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M12 21.25C12.5523 21.25 13 20.8023 13 20.25C13 19.6977 12.5523 19.25 12 19.25C11.4477 19.25 11 19.6977 11 20.25C11 20.8023 11.4477 21.25 12 21.25Z" fill="currentColor"/><path d="M12 4.75C12.5523 4.75 13 4.30228 13 3.75C13 3.19772 12.5523 2.75 12 2.75C11.4477 2.75 11 3.19772 11 3.75C11 4.30228 11.4477 4.75 12 4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 21.25C12.5523 21.25 13 20.8023 13 20.25C13 19.6977 12.5523 19.25 12 19.25C11.4477 19.25 11 19.6977 11 20.25C11 20.8023 11.4477 21.25 12 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Yd._solidSVG='<path d="M12 2C11.0335 2 10.25 2.7835 10.25 3.75C10.25 4.7165 11.0335 5.5 12 5.5C12.9665 5.5 13.75 4.7165 13.75 3.75C13.75 2.7835 12.9665 2 12 2Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M12 18.5C11.0335 18.5 10.25 19.2835 10.25 20.25C10.25 21.2165 11.0335 22 12 22C12.9665 22 13.75 21.2165 13.75 20.25C13.75 19.2835 12.9665 18.5 12 18.5Z" fill="currentColor"/>',Yd._name="dot-grid-one-vertical",Yd._width=24,Yd._height=24,Yd._viewBox="0 0 24 24",Yd=(0,s.Cc)([(0,C.Y$)("gds-icon-dot-grid-one-vertical")],Yd);const zd=e=>{Yd.define();const t=(0,n.p)("gds-icon-dot-grid-one-vertical"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ad=class extends R.M{};Ad._regularSVG='<path d="M12 5.75C12.5523 5.75 13 5.30228 13 4.75C13 4.19772 12.5523 3.75 12 3.75C11.4477 3.75 11 4.19772 11 4.75C11 5.30228 11.4477 5.75 12 5.75Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M12 20.25C12.5523 20.25 13 19.8023 13 19.25C13 18.6977 12.5523 18.25 12 18.25C11.4477 18.25 11 18.6977 11 19.25C11 19.8023 11.4477 20.25 12 20.25Z" fill="currentColor"/><path d="M19.25 5.75C19.8023 5.75 20.25 5.30228 20.25 4.75C20.25 4.19772 19.8023 3.75 19.25 3.75C18.6977 3.75 18.25 4.19772 18.25 4.75C18.25 5.30228 18.6977 5.75 19.25 5.75Z" fill="currentColor"/><path d="M19.25 13C19.8023 13 20.25 12.5523 20.25 12C20.25 11.4477 19.8023 11 19.25 11C18.6977 11 18.25 11.4477 18.25 12C18.25 12.5523 18.6977 13 19.25 13Z" fill="currentColor"/><path d="M19.25 20.25C19.8023 20.25 20.25 19.8023 20.25 19.25C20.25 18.6977 19.8023 18.25 19.25 18.25C18.6977 18.25 18.25 18.6977 18.25 19.25C18.25 19.8023 18.6977 20.25 19.25 20.25Z" fill="currentColor"/><path d="M4.75 13C5.30228 13 5.75 12.5523 5.75 12C5.75 11.4477 5.30228 11 4.75 11C4.19772 11 3.75 11.4477 3.75 12C3.75 12.5523 4.19772 13 4.75 13Z" fill="currentColor"/><path d="M4.75 20.25C5.30228 20.25 5.75 19.8023 5.75 19.25C5.75 18.6977 5.30228 18.25 4.75 18.25C4.19772 18.25 3.75 18.6977 3.75 19.25C3.75 19.8023 4.19772 20.25 4.75 20.25Z" fill="currentColor"/><path d="M4.75 5.75C5.30228 5.75 5.75 5.30228 5.75 4.75C5.75 4.19772 5.30228 3.75 4.75 3.75C4.19772 3.75 3.75 4.19772 3.75 4.75C3.75 5.30228 4.19772 5.75 4.75 5.75Z" fill="currentColor"/><path d="M12 5.75C12.5523 5.75 13 5.30228 13 4.75C13 4.19772 12.5523 3.75 12 3.75C11.4477 3.75 11 4.19772 11 4.75C11 5.30228 11.4477 5.75 12 5.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 20.25C12.5523 20.25 13 19.8023 13 19.25C13 18.6977 12.5523 18.25 12 18.25C11.4477 18.25 11 18.6977 11 19.25C11 19.8023 11.4477 20.25 12 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.25 5.75C19.8023 5.75 20.25 5.30228 20.25 4.75C20.25 4.19772 19.8023 3.75 19.25 3.75C18.6977 3.75 18.25 4.19772 18.25 4.75C18.25 5.30228 18.6977 5.75 19.25 5.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.25 13C19.8023 13 20.25 12.5523 20.25 12C20.25 11.4477 19.8023 11 19.25 11C18.6977 11 18.25 11.4477 18.25 12C18.25 12.5523 18.6977 13 19.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.25 20.25C19.8023 20.25 20.25 19.8023 20.25 19.25C20.25 18.6977 19.8023 18.25 19.25 18.25C18.6977 18.25 18.25 18.6977 18.25 19.25C18.25 19.8023 18.6977 20.25 19.25 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.75 13C5.30228 13 5.75 12.5523 5.75 12C5.75 11.4477 5.30228 11 4.75 11C4.19772 11 3.75 11.4477 3.75 12C3.75 12.5523 4.19772 13 4.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.75 20.25C5.30228 20.25 5.75 19.8023 5.75 19.25C5.75 18.6977 5.30228 18.25 4.75 18.25C4.19772 18.25 3.75 18.6977 3.75 19.25C3.75 19.8023 4.19772 20.25 4.75 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.75 5.75C5.30228 5.75 5.75 5.30228 5.75 4.75C5.75 4.19772 5.30228 3.75 4.75 3.75C4.19772 3.75 3.75 4.19772 3.75 4.75C3.75 5.30228 4.19772 5.75 4.75 5.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ad._solidSVG='<path d="M4.75 3C3.7835 3 3 3.7835 3 4.75C3 5.7165 3.7835 6.5 4.75 6.5C5.7165 6.5 6.5 5.7165 6.5 4.75C6.5 3.7835 5.7165 3 4.75 3Z" fill="currentColor"/><path d="M12 3C11.0335 3 10.25 3.7835 10.25 4.75C10.25 5.7165 11.0335 6.5 12 6.5C12.9665 6.5 13.75 5.7165 13.75 4.75C13.75 3.7835 12.9665 3 12 3Z" fill="currentColor"/><path d="M19.25 3C18.2835 3 17.5 3.7835 17.5 4.75C17.5 5.7165 18.2835 6.5 19.25 6.5C20.2165 6.5 21 5.7165 21 4.75C21 3.7835 20.2165 3 19.25 3Z" fill="currentColor"/><path d="M4.75 10.25C3.7835 10.25 3 11.0335 3 12C3 12.9665 3.7835 13.75 4.75 13.75C5.7165 13.75 6.5 12.9665 6.5 12C6.5 11.0335 5.7165 10.25 4.75 10.25Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M19.25 10.25C18.2835 10.25 17.5 11.0335 17.5 12C17.5 12.9665 18.2835 13.75 19.25 13.75C20.2165 13.75 21 12.9665 21 12C21 11.0335 20.2165 10.25 19.25 10.25Z" fill="currentColor"/><path d="M4.75 17.5C3.7835 17.5 3 18.2835 3 19.25C3 20.2165 3.7835 21 4.75 21C5.7165 21 6.5 20.2165 6.5 19.25C6.5 18.2835 5.7165 17.5 4.75 17.5Z" fill="currentColor"/><path d="M12 17.5C11.0335 17.5 10.25 18.2835 10.25 19.25C10.25 20.2165 11.0335 21 12 21C12.9665 21 13.75 20.2165 13.75 19.25C13.75 18.2835 12.9665 17.5 12 17.5Z" fill="currentColor"/><path d="M19.25 17.5C18.2835 17.5 17.5 18.2835 17.5 19.25C17.5 20.2165 18.2835 21 19.25 21C20.2165 21 21 20.2165 21 19.25C21 18.2835 20.2165 17.5 19.25 17.5Z" fill="currentColor"/>',Ad._name="dot-grid-three",Ad._width=24,Ad._height=24,Ad._viewBox="0 0 24 24",Ad=(0,s.Cc)([(0,C.Y$)("gds-icon-dot-grid-three")],Ad);const Td=e=>{Ad.define();const t=(0,n.p)("gds-icon-dot-grid-three"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Rd=class extends R.M{};Rd._regularSVG='<path d="M7.5 5.75C7.5 4.7835 8.2835 4 9.25 4C10.2165 4 11 4.7835 11 5.75C11 6.7165 10.2165 7.5 9.25 7.5C8.2835 7.5 7.5 6.7165 7.5 5.75Z" fill="currentColor"/><path d="M13 5.75C13 4.7835 13.7835 4 14.75 4C15.7165 4 16.5 4.7835 16.5 5.75C16.5 6.7165 15.7165 7.5 14.75 7.5C13.7835 7.5 13 6.7165 13 5.75Z" fill="currentColor"/><path d="M7.5 18.25C7.5 17.2835 8.2835 16.5 9.25 16.5C10.2165 16.5 11 17.2835 11 18.25C11 19.2165 10.2165 20 9.25 20C8.2835 20 7.5 19.2165 7.5 18.25Z" fill="currentColor"/><path d="M13 18.25C13 17.2835 13.7835 16.5 14.75 16.5C15.7165 16.5 16.5 17.2835 16.5 18.25C16.5 19.2165 15.7165 20 14.75 20C13.7835 20 13 19.2165 13 18.25Z" fill="currentColor"/><path d="M7.5 11.9C7.5 10.9335 8.2835 10.15 9.25 10.15C10.2165 10.15 11 10.9335 11 11.9V12C11 12.9665 10.2165 13.75 9.25 13.75C8.2835 13.75 7.5 12.9665 7.5 12V11.9Z" fill="currentColor"/><path d="M13 11.9C13 10.9335 13.7835 10.15 14.75 10.15C15.7165 10.15 16.5 10.9335 16.5 11.9V12C16.5 12.9665 15.7165 13.75 14.75 13.75C13.7835 13.75 13 12.9665 13 12V11.9Z" fill="currentColor"/>',Rd._solidSVG='<path d="M7.5 5.75C7.5 4.7835 8.2835 4 9.25 4C10.2165 4 11 4.7835 11 5.75C11 6.7165 10.2165 7.5 9.25 7.5C8.2835 7.5 7.5 6.7165 7.5 5.75Z" fill="currentColor"/><path d="M13 5.75C13 4.7835 13.7835 4 14.75 4C15.7165 4 16.5 4.7835 16.5 5.75C16.5 6.7165 15.7165 7.5 14.75 7.5C13.7835 7.5 13 6.7165 13 5.75Z" fill="currentColor"/><path d="M7.5 18.25C7.5 17.2835 8.2835 16.5 9.25 16.5C10.2165 16.5 11 17.2835 11 18.25C11 19.2165 10.2165 20 9.25 20C8.2835 20 7.5 19.2165 7.5 18.25Z" fill="currentColor"/><path d="M13 18.25C13 17.2835 13.7835 16.5 14.75 16.5C15.7165 16.5 16.5 17.2835 16.5 18.25C16.5 19.2165 15.7165 20 14.75 20C13.7835 20 13 19.2165 13 18.25Z" fill="currentColor"/><path d="M7.5 11.9C7.5 10.9335 8.2835 10.15 9.25 10.15C10.2165 10.15 11 10.9335 11 11.9V12C11 12.9665 10.2165 13.75 9.25 13.75C8.2835 13.75 7.5 12.9665 7.5 12V11.9Z" fill="currentColor"/><path d="M13 11.9C13 10.9335 13.7835 10.15 14.75 10.15C15.7165 10.15 16.5 10.9335 16.5 11.9V12C16.5 12.9665 15.7165 13.75 14.75 13.75C13.7835 13.75 13 12.9665 13 12V11.9Z" fill="currentColor"/>',Rd._name="dot-grid-two",Rd._width=24,Rd._height=24,Rd._viewBox="0 0 24 24",Rd=(0,s.Cc)([(0,C.Y$)("gds-icon-dot-grid-two")],Rd);const Od=e=>{Rd.define();const t=(0,n.p)("gds-icon-dot-grid-two"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Wd=class extends R.M{};Wd._regularSVG='<path d="M21.25 4.75H22C22 4.33579 21.6642 4 21.25 4V4.75ZM21.25 19.25V20C21.6642 20 22 19.6642 22 19.25H21.25ZM2.75 19.25H2C2 19.6642 2.33579 20 2.75 20V19.25ZM2.75 4.75V4C2.33579 4 2 4.33579 2 4.75H2.75ZM12 13L11.5251 13.5805C11.8013 13.8065 12.1987 13.8065 12.4749 13.5805L12 13ZM21.25 4.75H20.5V19.25H21.25H22V4.75H21.25ZM21.25 19.25V18.5H2.75V19.25V20H21.25V19.25ZM2.75 19.25H3.5V4.75H2.75H2V19.25H2.75ZM2.75 4.75V5.5H21.25V4.75V4H2.75V4.75ZM12 13L12.4749 12.4195L3.47493 5.0559L3 5.63637L2.52507 6.21684L11.5251 13.5805L12 13ZM21 5.63637L20.5251 5.0559L11.5251 12.4195L12 13L12.4749 13.5805L21.4749 6.21684L21 5.63637Z" fill="currentColor"/>',Wd._solidSVG='<path d="M2.33632 4.12431L12 12.031L21.6637 4.12431C21.5451 4.04575 21.4029 4 21.25 4H2.75C2.59711 4 2.4549 4.04575 2.33632 4.12431Z" fill="currentColor"/><path d="M2 5.78723V19.25C2 19.6642 2.33579 20 2.75 20H21.25C21.6642 20 22 19.6642 22 19.25V5.78723L12.4749 13.5805C12.1987 13.8065 11.8013 13.8065 11.5251 13.5805L2 5.78723Z" fill="currentColor"/>',Wd._name="email",Wd._width=24,Wd._height=24,Wd._viewBox="0 0 24 24",Wd=(0,s.Cc)([(0,C.Y$)("gds-icon-email")],Wd);const Pd=e=>{Wd.define();const t=(0,n.p)("gds-icon-email"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Fd=class extends R.M{};Fd._regularSVG='<circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.17188 16.0073C10.734 14.4452 13.2666 14.4452 14.8287 16.0073" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.95209 7.5543C8.80082 7.40589 8.60645 7.33394 8.40025 7.37072C8.19472 7.40654 7.99421 7.54811 7.85435 7.74786C7.71448 7.94761 7.65003 8.18444 7.68666 8.38983C7.72263 8.59617 7.85671 8.75421 8.04791 8.8456C8.09464 8.8683 8.13859 8.88905 8.18525 8.9117C9.00668 9.30646 9.82915 9.70195 10.6506 10.0967C10.6972 10.1194 10.7412 10.1401 10.7879 10.1628C10.8488 10.1919 10.9245 10.1951 10.9948 10.1768C11.0652 10.1582 11.1245 10.1198 11.1631 10.0646C11.2017 10.0095 11.2176 9.94071 11.2109 9.86816C11.204 9.7959 11.1752 9.72582 11.127 9.67856C11.0897 9.64241 11.0551 9.60821 11.0179 9.57211C10.366 8.93523 9.71307 8.29763 9.06118 7.66075C9.02393 7.62465 8.98941 7.59045 8.95209 7.5543Z" fill="currentColor"/><path d="M15.9096 8.8456C16.1008 8.75421 16.2349 8.59617 16.2709 8.38983C16.3075 8.18444 16.243 7.94761 16.1032 7.74786C15.9633 7.54811 15.7628 7.40654 15.5573 7.37072C15.3511 7.33394 15.1567 7.40589 15.0054 7.5543C14.9681 7.59045 14.9336 7.62465 14.8963 7.66075C14.2444 8.29763 13.5915 8.93523 12.9396 9.57211C12.9024 9.60821 12.8678 9.64241 12.8305 9.67856C12.7824 9.72582 12.7535 9.7959 12.7466 9.86816C12.74 9.94071 12.7559 10.0095 12.7945 10.0646C12.8331 10.1198 12.8923 10.1582 12.9627 10.1768C13.033 10.1951 13.1087 10.1919 13.1696 10.1628C13.2163 10.1401 13.2603 10.1194 13.3069 10.0967C14.1284 9.70195 14.9508 9.30646 15.7723 8.9117C15.8189 8.88905 15.8629 8.8683 15.9096 8.8456Z" fill="currentColor"/><path d="M14.5 11.5H15M15.25 11.5C15.25 11.7761 15.0261 12 14.75 12C14.4739 12 14.25 11.7761 14.25 11.5C14.25 11.2239 14.4739 11 14.75 11C15.0261 11 15.25 11.2239 15.25 11.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 11.5H9.5M9.75 11.5C9.75 11.7761 9.52614 12 9.25 12C8.97386 12 8.75 11.7761 8.75 11.5C8.75 11.2239 8.97386 11 9.25 11C9.52614 11 9.75 11.2239 9.75 11.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Fd._solidSVG='<circle cx="12" cy="12" r="9.25" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.17188 16.0073C10.734 14.4452 13.2666 14.4452 14.8287 16.0073" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.95209 7.5543C8.80082 7.40589 8.60645 7.33394 8.40025 7.37072C8.19472 7.40654 7.99421 7.54811 7.85435 7.74786C7.71448 7.94761 7.65003 8.18444 7.68666 8.38983C7.72263 8.59617 7.85671 8.75421 8.04791 8.8456C8.09464 8.8683 8.13859 8.88905 8.18525 8.9117C9.00668 9.30646 9.82915 9.70195 10.6506 10.0967C10.6972 10.1194 10.7412 10.1401 10.7879 10.1628C10.8488 10.1919 10.9245 10.1951 10.9948 10.1768C11.0652 10.1582 11.1245 10.1198 11.1631 10.0646C11.2017 10.0095 11.2176 9.94071 11.2109 9.86816C11.204 9.7959 11.1752 9.72582 11.127 9.67856C11.0897 9.64241 11.0551 9.60821 11.0179 9.57211C10.366 8.93523 9.71307 8.29763 9.06118 7.66075C9.02393 7.62465 8.98941 7.59045 8.95209 7.5543Z" fill="white"/><path d="M15.9095 8.8456C16.1007 8.75421 16.2348 8.59617 16.2708 8.38983C16.3074 8.18444 16.243 7.94761 16.1031 7.74786C15.9632 7.54811 15.7627 7.40654 15.5572 7.37072C15.351 7.33394 15.1566 7.40589 15.0054 7.5543C14.9681 7.59045 14.9335 7.62465 14.8963 7.66075C14.2444 8.29763 13.5914 8.93523 12.9396 9.57211C12.9023 9.60821 12.8678 9.64241 12.8305 9.67856C12.7823 9.72582 12.7534 9.7959 12.7466 9.86816C12.7399 9.94071 12.7558 10.0095 12.7944 10.0646C12.833 10.1198 12.8922 10.1582 12.9627 10.1768C13.0329 10.1951 13.1086 10.1919 13.1695 10.1628C13.2163 10.1401 13.2602 10.1194 13.3069 10.0967C14.1283 9.70195 14.9508 9.30646 15.7722 8.9117C15.8189 8.88905 15.8628 8.8683 15.9095 8.8456Z" fill="white"/><path d="M14.5 11.5H15M15.25 11.5C15.25 11.7761 15.0261 12 14.75 12C14.4739 12 14.25 11.7761 14.25 11.5C14.25 11.2239 14.4739 11 14.75 11C15.0261 11 15.25 11.2239 15.25 11.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 11.5H9.5M9.75 11.5C9.75 11.7761 9.52614 12 9.25 12C8.97386 12 8.75 11.7761 8.75 11.5C8.75 11.2239 8.97386 11 9.25 11C9.52614 11 9.75 11.2239 9.75 11.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Fd._name="emoji-angry",Fd._width=24,Fd._height=24,Fd._viewBox="0 0 24 24",Fd=(0,s.Cc)([(0,C.Y$)("gds-icon-emoji-angry")],Fd);const Dd=e=>{Fd.define();const t=(0,n.p)("gds-icon-emoji-angry"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Kd=class extends R.M{};Kd._regularSVG='<circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.17188 15.4217C11.5 15.4217 12.5 15.4217 14.8287 15.4217" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 9.5H15M15.25 9.5C15.25 9.77614 15.0261 10 14.75 10C14.4739 10 14.25 9.77614 14.25 9.5C14.25 9.22386 14.4739 9 14.75 9C15.0261 9 15.25 9.22386 15.25 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9.5H9.5M9.75 9.5C9.75 9.77614 9.52614 10 9.25 10C8.97386 10 8.75 9.77614 8.75 9.5C8.75 9.22386 8.97386 9 9.25 9C9.52614 9 9.75 9.22386 9.75 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Kd._solidSVG='<circle cx="12" cy="12" r="9.25" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.17188 15.4217C11.5 15.4217 12.5 15.4217 14.8287 15.4217" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 9.5H15M15.25 9.5C15.25 9.77614 15.0261 10 14.75 10C14.4739 10 14.25 9.77614 14.25 9.5C14.25 9.22386 14.4739 9 14.75 9C15.0261 9 15.25 9.22386 15.25 9.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9.5H9.5M9.75 9.5C9.75 9.77614 9.52614 10 9.25 10C8.97386 10 8.75 9.77614 8.75 9.5C8.75 9.22386 8.97386 9 9.25 9C9.52614 9 9.75 9.22386 9.75 9.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Kd._name="emoji-neutral",Kd._width=24,Kd._height=24,Kd._viewBox="0 0 24 24",Kd=(0,s.Cc)([(0,C.Y$)("gds-icon-emoji-neutral")],Kd);const Ud=e=>{Kd.define();const t=(0,n.p)("gds-icon-emoji-neutral"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Jd=class extends R.M{};Jd._regularSVG='<circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.17188 15.4216C10.734 13.8595 13.2666 13.8595 14.8287 15.4216" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 9.5H15M15.25 9.5C15.25 9.77614 15.0261 10 14.75 10C14.4739 10 14.25 9.77614 14.25 9.5C14.25 9.22386 14.4739 9 14.75 9C15.0261 9 15.25 9.22386 15.25 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9.5H9.5M9.75 9.5C9.75 9.77614 9.52614 10 9.25 10C8.97386 10 8.75 9.77614 8.75 9.5C8.75 9.22386 8.97386 9 9.25 9C9.52614 9 9.75 9.22386 9.75 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Jd._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.70221 15.9519C10.9714 14.6827 13.0292 14.6827 14.2984 15.9519C14.5913 16.2448 15.0662 16.2448 15.3591 15.9519C15.6519 15.659 15.6519 15.1841 15.3591 14.8912C13.5041 13.0363 10.4965 13.0363 8.64154 14.8912C8.34865 15.1841 8.34865 15.659 8.64154 15.9519C8.93444 16.2448 9.40931 16.2448 9.70221 15.9519ZM14.75 8.25C14.0596 8.25 13.5 8.80964 13.5 9.5C13.5 10.1904 14.0596 10.75 14.75 10.75C15.4404 10.75 16 10.1904 16 9.5C16 8.80964 15.4404 8.25 14.75 8.25ZM8 9.5C8 8.80964 8.55964 8.25 9.25 8.25C9.94036 8.25 10.5 8.80964 10.5 9.5C10.5 10.1904 9.94036 10.75 9.25 10.75C8.55964 10.75 8 10.1904 8 9.5Z" fill="currentColor"/>',Jd._name="emoji-sad",Jd._width=24,Jd._height=24,Jd._viewBox="0 0 24 24",Jd=(0,s.Cc)([(0,C.Y$)("gds-icon-emoji-sad")],Jd);const Qd=e=>{Jd.define();const t=(0,n.p)("gds-icon-emoji-sad"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Xd=class extends R.M{};Xd._regularSVG='<path d="M14.8287 14.8284C13.2666 16.3905 10.734 16.3905 9.17188 14.8284" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 9.5H15M15.25 9.5C15.25 9.77614 15.0261 10 14.75 10C14.4739 10 14.25 9.77614 14.25 9.5C14.25 9.22386 14.4739 9 14.75 9C15.0261 9 15.25 9.22386 15.25 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M9 9.5H9.5M9.75 9.5C9.75 9.77614 9.52614 10 9.25 10C8.97386 10 8.75 9.77614 8.75 9.5C8.75 9.22386 8.97386 9 9.25 9C9.52614 9 9.75 9.22386 9.75 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5"/>',Xd._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13.5 9.5C13.5 8.80964 14.0596 8.25 14.75 8.25C15.4404 8.25 16 8.80964 16 9.5C16 10.1904 15.4404 10.75 14.75 10.75C14.0596 10.75 13.5 10.1904 13.5 9.5ZM9.25 8.25C8.55964 8.25 8 8.80964 8 9.5C8 10.1904 8.55964 10.75 9.25 10.75C9.94036 10.75 10.5 10.1904 10.5 9.5C10.5 8.80964 9.94036 8.25 9.25 8.25ZM9.70221 14.2981C9.40931 14.0052 8.93444 14.0052 8.64155 14.2981C8.34865 14.591 8.34865 15.0659 8.64154 15.3588C10.4965 17.2138 13.5041 17.2138 15.3591 15.3588C15.6519 15.0659 15.6519 14.591 15.3591 14.2981C15.0662 14.0052 14.5913 14.0052 14.2984 14.2981C13.0292 15.5673 10.9714 15.5673 9.70221 14.2981Z" fill="currentColor"/>',Xd._name="emoji-smile",Xd._width=24,Xd._height=24,Xd._viewBox="0 0 24 24",Xd=(0,s.Cc)([(0,C.Y$)("gds-icon-emoji-smile")],Xd);const eh=e=>{Xd.define();const t=(0,n.p)("gds-icon-emoji-smile"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let th=class extends R.M{};th._regularSVG='<path d="M17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12ZM10.25 9C10.25 9.41421 9.91421 9.75 9.5 9.75C9.08579 9.75 8.75 9.41421 8.75 9C8.75 8.58579 9.08579 8.25 9.5 8.25C9.91421 8.25 10.25 8.58579 10.25 9ZM15.25 9C15.25 9.41421 14.9142 9.75 14.5 9.75C14.0858 9.75 13.75 9.41421 13.75 9C13.75 8.58579 14.0858 8.25 14.5 8.25C14.9142 8.25 15.25 8.58579 15.25 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',th._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.5 10.5C10.3284 10.5 11 9.82843 11 9C11 8.17157 10.3284 7.5 9.5 7.5C8.67157 7.5 8 8.17157 8 9C8 9.82843 8.67157 10.5 9.5 10.5ZM16 9C16 9.82843 15.3284 10.5 14.5 10.5C13.6716 10.5 13 9.82843 13 9C13 8.17157 13.6716 7.5 14.5 7.5C15.3284 7.5 16 8.17157 16 9ZM6.25 12C6.25 11.5858 5.91421 11.25 5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 11.5858 18.9142 11.25 18.5 11.25C18.0858 11.25 17.75 11.5858 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12Z" fill="currentColor"/>',th._name="emoji-smiley",th._width=24,th._height=24,th._viewBox="0 0 24 24",th=(0,s.Cc)([(0,C.Y$)("gds-icon-emoji-smiley")],th);const rh=e=>{th.define();const t=(0,n.p)("gds-icon-emoji-smiley"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let oh=class extends R.M{};oh._regularSVG='<path d="M7.75 12H10.75M14.3021 9C13.7136 8.22784 12.8995 7.75 12 7.75C10.2051 7.75 8.75 9.65279 8.75 12C8.75 14.3472 10.2051 16.25 12 16.25C12.8995 16.25 13.7136 15.7722 14.3021 15M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',oh._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM7 12C7 11.5858 7.33579 11.25 7.75 11.25H8.0444C8.16779 10.2172 8.54317 9.27539 9.10613 8.53921C9.80338 7.62743 10.8198 7 12 7C13.1829 7 14.2012 7.63026 14.8986 8.5454C15.1497 8.87485 15.0861 9.34546 14.7567 9.59652C14.4272 9.84759 13.9566 9.78405 13.7055 9.4546C13.2261 8.82543 12.616 8.5 12 8.5C11.3853 8.5 10.7767 8.82397 10.2977 9.45038C9.93935 9.91896 9.67116 10.5393 9.55846 11.25H10.75C11.1642 11.25 11.5 11.5858 11.5 12C11.5 12.4142 11.1642 12.75 10.75 12.75H9.55846C9.67116 13.4607 9.93935 14.081 10.2977 14.5496C10.7767 15.176 11.3853 15.5 12 15.5C12.616 15.5 13.2261 15.1746 13.7055 14.5454C13.9566 14.216 14.4272 14.1524 14.7567 14.4035C15.0861 14.6545 15.1497 15.1251 14.8986 15.4546C14.2012 16.3697 13.1829 17 12 17C10.8198 17 9.80338 16.3726 9.10613 15.4608C8.54317 14.7246 8.16779 13.7828 8.0444 12.75H7.75C7.33579 12.75 7 12.4142 7 12Z" fill="currentColor"/>',oh._name="euro",oh._width=24,oh._height=24,oh._viewBox="0 0 24 24",oh=(0,s.Cc)([(0,C.Y$)("gds-icon-euro")],oh);const sh=e=>{oh.define();const t=(0,n.p)("gds-icon-euro"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let nh=class extends R.M{};nh._regularSVG='<path d="M13.75 3.75H20.25V10.25M13.75 10.25L19.4766 4.52344M10.25 13.75L4.52344 19.4766M3.75 13.75V20.25H10.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nh._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13 3.75C13 3.33579 13.3358 3 13.75 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11C19.8358 11 19.5 10.6642 19.5 10.25V5.56066L14.2803 10.7803C13.9874 11.0732 13.5126 11.0732 13.2197 10.7803C12.9268 10.4874 12.9268 10.0126 13.2197 9.71967L18.4393 4.5H13.75C13.3358 4.5 13 4.16421 13 3.75ZM3 13.75C3 13.3358 3.33579 13 3.75 13C4.16421 13 4.5 13.3358 4.5 13.75V18.4393L9.71967 13.2197C10.0126 12.9268 10.4874 12.9268 10.7803 13.2197C11.0732 13.5126 11.0732 13.9874 10.7803 14.2803L5.56066 19.5H10.25C10.6642 19.5 11 19.8358 11 20.25C11 20.6642 10.6642 21 10.25 21H3.75C3.33579 21 3 20.6642 3 20.25V13.75Z" fill="currentColor"/>',nh._name="expand",nh._width=24,nh._height=24,nh._viewBox="0 0 24 24",nh=(0,s.Cc)([(0,C.Y$)("gds-icon-expand")],nh);const lh=e=>{nh.define();const t=(0,n.p)("gds-icon-expand"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ih=class extends R.M{};ih._regularSVG='<path d="M2 11.9999L1.32902 11.6648C1.22366 11.8758 1.22366 12.124 1.32902 12.335L2 11.9999ZM22 12L22.671 12.3351C22.7763 12.1241 22.7763 11.8759 22.671 11.6649L22 12ZM2 11.9999L2.67098 12.335C4.9893 7.69273 8.55546 5.49997 12 5.5C15.4445 5.50003 19.0107 7.69284 21.329 12.3351L22 12L22.671 11.6649C20.1618 6.64058 16.1417 4.00003 12 4C7.85827 3.99997 3.83815 6.64046 1.32902 11.6648L2 11.9999ZM2 11.9999L1.32902 12.335C3.83815 17.3593 7.85826 19.9999 12 19.9999C16.1417 20 20.1618 17.3595 22.671 12.3351L22 12L21.329 11.6649C19.0107 16.3072 15.4445 18.4999 12 18.4999C8.55547 18.4999 4.9893 16.3071 2.67098 11.6648L2 11.9999ZM15.25 12H14.5C14.5 13.3807 13.3807 14.5 12 14.5V15.25V16C14.2091 16 16 14.2091 16 12H15.25ZM12 15.25V14.5C10.6193 14.5 9.5 13.3807 9.5 12H8.75H8C8 14.2091 9.79086 16 12 16V15.25ZM8.75 12H9.5C9.5 10.6193 10.6193 9.5 12 9.5V8.75V8C9.79086 8 8 9.79086 8 12H8.75ZM12 8.75V9.5C13.3807 9.5 14.5 10.6193 14.5 12H15.25H16C16 9.79086 14.2091 8 12 8V8.75Z" fill="currentColor"/>',ih._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C16.1417 4.00003 20.1618 6.64058 22.671 11.6649C22.7763 11.8759 22.7763 12.1241 22.671 12.3351C20.1618 17.3595 16.1417 20 12 19.9999C7.85826 19.9999 3.83815 17.3593 1.32902 12.335C1.22366 12.124 1.22366 11.8758 1.32902 11.6648C3.83815 6.64046 7.85827 3.99997 12 4ZM8.375 12C8.375 9.99797 9.99797 8.375 12 8.375C14.002 8.375 15.625 9.99797 15.625 12C15.625 14.002 14.002 15.625 12 15.625C9.99797 15.625 8.375 14.002 8.375 12Z" fill="currentColor"/>',ih._name="eye-open",ih._width=24,ih._height=24,ih._viewBox="0 0 24 24",ih=(0,s.Cc)([(0,C.Y$)("gds-icon-eye-open")],ih);const ah=e=>{ih.define();const t=(0,n.p)("gds-icon-eye-open"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ch=class extends R.M{};ch._regularSVG='<path d="M9.1654 4.42071C8.76876 4.5401 8.544 4.95841 8.66339 5.35505C8.78277 5.75169 9.20109 5.97645 9.59772 5.85706L9.1654 4.42071ZM22 12L22.671 12.3351C22.7763 12.1241 22.7763 11.8759 22.671 11.6649L22 12ZM19.1413 14.9666C18.8678 15.2776 18.8982 15.7515 19.2092 16.0251C19.5203 16.2986 19.9942 16.2682 20.2677 15.9571L19.1413 14.9666ZM3.28033 2.21967C2.98744 1.92678 2.51256 1.92678 2.21967 2.21967C1.92678 2.51256 1.92678 2.98744 2.21967 3.28033L3.28033 2.21967ZM2 11.9999L1.32902 11.6648C1.22366 11.8758 1.22366 12.124 1.32902 12.335L2 11.9999ZM17.4703 17.4703L18.0006 16.9399L17.4703 17.4703ZM20.7197 21.7803C21.0126 22.0732 21.4874 22.0732 21.7803 21.7803C22.0732 21.4874 22.0732 21.0126 21.7803 20.7197L20.7197 21.7803ZM10.2322 10.2322C10.5251 9.93934 10.5251 9.46447 10.2322 9.17157C9.93934 8.87868 9.46447 8.87868 9.17157 9.17157L10.2322 10.2322ZM14.8284 14.8284C15.1213 14.5355 15.1213 14.0607 14.8284 13.7678C14.5355 13.4749 14.0607 13.4749 13.7678 13.7678L14.8284 14.8284ZM9.38156 5.13889L9.59772 5.85706C13.745 4.60878 18.4769 6.624 21.329 12.3351L22 12L22.671 11.6649C19.5775 5.47055 14.1791 2.91165 9.1654 4.42071L9.38156 5.13889ZM19.7045 15.4619L20.2677 15.9571C21.1654 14.9364 21.9755 13.7277 22.671 12.3351L22 12L21.329 11.6649C20.6865 12.9515 19.9468 14.0507 19.1413 14.9666L19.7045 15.4619ZM2.75 2.75L2.21967 3.28033L5.99937 7.06003L6.5297 6.5297L7.06003 5.99937L3.28033 2.21967L2.75 2.75ZM2 11.9999L2.67098 12.335C3.84083 9.99245 5.33197 8.27257 6.95699 7.14609L6.5297 6.5297L6.10242 5.91332C4.24158 7.20327 2.5948 9.13019 1.32902 11.6648L2 11.9999ZM6.5297 6.5297L5.99937 7.06003L16.9399 18.0006L17.4703 17.4703L18.0006 16.9399L7.06003 5.99937L6.5297 6.5297ZM17.4703 17.4703L16.9399 18.0006L20.7197 21.7803L21.25 21.25L21.7803 20.7197L18.0006 16.9399L17.4703 17.4703ZM2 11.9999L1.32902 12.335C3.20469 16.0909 5.92036 18.5148 8.91701 19.5009C11.922 20.4898 15.1308 20.0045 17.8975 18.0866L17.4703 17.4703L17.043 16.8539C14.6436 18.5171 11.9221 18.9107 9.38589 18.0761C6.84135 17.2388 4.40494 15.1369 2.67098 11.6648L2 11.9999ZM12 15.25V14.5C10.6193 14.5 9.5 13.3807 9.5 12H8.75H8C8 14.2091 9.79086 16 12 16V15.25ZM8.75 12H9.5C9.5 11.3094 9.779 10.6855 10.2322 10.2322L9.7019 9.7019L9.17157 9.17157C8.44854 9.89461 8 10.8956 8 12H8.75ZM14.2981 14.2981L13.7678 13.7678C13.3145 14.221 12.6906 14.5 12 14.5V15.25V16C13.1044 16 14.1054 15.5515 14.8284 14.8284L14.2981 14.2981Z" fill="currentColor"/>',ch._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2.21967 2.21967C2.51256 1.92678 2.98744 1.92678 3.28033 2.21967L7.04527 5.98461L7.06003 5.99898L18.0006 16.9395L18.0149 16.9542L21.7803 20.7197C22.0732 21.0126 22.0732 21.4874 21.7803 21.7803C21.4874 22.0732 21.0126 22.0732 20.7197 21.7803L17.3704 18.4311C14.728 20.0593 11.733 20.4272 8.91701 19.5005C5.92036 18.5144 3.20469 16.0905 1.32902 12.3346C1.22366 12.1236 1.22366 11.8754 1.32902 11.6644C2.4302 9.45938 3.81974 7.71428 5.38773 6.44839L2.21967 3.28033C1.92678 2.98744 1.92678 2.51256 2.21967 2.21967ZM8 11.9995C8 11.1664 8.25524 10.3922 8.691 9.75166L9.78265 10.8433C9.60193 11.1891 9.5 11.5821 9.5 11.9995C9.5 13.3802 10.6193 14.4995 12 14.4995C12.4174 14.4995 12.8105 14.3976 13.1562 14.2169L14.2478 15.3085C13.6073 15.7443 12.8331 15.9995 12 15.9995C9.79086 15.9995 8 14.2087 8 11.9995Z" fill="currentColor"/><path d="M22.6711 12.3351C21.8382 14.0031 20.8387 15.4083 19.7235 16.5414L8.02148 4.83944C9.30221 4.2828 10.6447 3.99999 12.0002 4C16.1419 4.00003 20.162 6.64058 22.6711 11.6649C22.7765 11.8759 22.7765 12.1241 22.6711 12.3351Z" fill="currentColor"/>',ch._name="eye-slash",ch._width=24,ch._height=24,ch._viewBox="0 0 24 24",ch=(0,s.Cc)([(0,C.Y$)("gds-icon-eye-slash")],ch);const Ch=e=>{ch.define();const t=(0,n.p)("gds-icon-eye-slash"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let dh=class extends R.M{};dh._regularSVG='<path d="M20.7125 11.5768L22.25 7.25L15.075 3.75C14.0732 7.01444 9.92685 7.01444 8.925 3.75L1.75 7.25L3.2875 11.5768L5.75 10.45V20.25H18.25V10.45L20.7125 11.5768Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',dh._solidSVG='<path d="M9.642 3.52996C9.57767 3.32033 9.42482 3.14936 9.22368 3.06204C9.02254 2.97471 8.79327 2.97979 8.59619 3.07592L1.42119 6.57592C1.07817 6.74325 0.915507 7.1415 1.0433 7.50112L2.5808 10.8279C2.65123 11.0261 2.80164 11.1856 2.99536 11.2676C3.18908 11.3495 3.40831 11.3463 3.59957 11.2588L5.00001 10.618V20.25C5.00001 20.6642 5.33579 21 5.75001 21H18.25C18.6642 21 19 20.6642 19 20.25V10.618L20.4004 11.2588C20.5917 11.3463 20.8109 11.3495 21.0047 11.2676C21.1984 11.1856 21.3488 11.0261 21.4192 10.8279L22.9567 7.50112C23.0845 7.1415 22.9218 6.74325 22.5788 6.57592L15.4038 3.07592C15.2067 2.97979 14.9775 2.97471 14.7763 3.06204C14.5752 3.14936 14.4223 3.32033 14.358 3.52996C13.9516 4.85432 12.9502 5.44833 12 5.44833C11.0498 5.44833 10.0484 4.85432 9.642 3.52996Z" fill="currentColor"/>',dh._name="fashion",dh._width=24,dh._height=24,dh._viewBox="0 0 24 24",dh=(0,s.Cc)([(0,C.Y$)("gds-icon-fashion")],dh);const hh=e=>{dh.define();const t=(0,n.p)("gds-icon-fashion"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let uh=class extends R.M{};uh._regularSVG='<path d="M12.75 11.6324V5.75L21.25 12L12.75 18.25V12.3676M12.75 11.6324L4.75 5.75V18.25L12.75 12.3676M12.75 11.6324V12.3676" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',uh._solidSVG='<path d="M5.19429 5.14577C4.96646 4.97824 4.66376 4.95311 4.41141 5.08078C4.15907 5.20845 4 5.4672 4 5.75V18.25C4 18.5328 4.15907 18.7916 4.41141 18.9192C4.66376 19.0469 4.96646 19.0218 5.19429 18.8542L12 13.85V18.25C12 18.5328 12.1591 18.7916 12.4114 18.9192C12.6638 19.0469 12.9665 19.0218 13.1943 18.8542L21.6943 12.6042C21.8865 12.4629 22 12.2386 22 12C22 11.7614 21.8865 11.5371 21.6943 11.3958L13.1943 5.14577C12.9665 4.97824 12.6638 4.95311 12.4114 5.08078C12.1591 5.20845 12 5.4672 12 5.75V10.15L5.19429 5.14577Z" fill="currentColor"/>',uh._name="fast-forward",uh._width=24,uh._height=24,uh._viewBox="0 0 24 24",uh=(0,s.Cc)([(0,C.Y$)("gds-icon-fast-forward")],uh);const ph=e=>{uh.define();const t=(0,n.p)("gds-icon-fast-forward"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let gh=class extends R.M{};gh._regularSVG='<path d="M12.75 2.75H4.75V21.25H19.25V9.25M12.75 2.75L19.25 9.25M12.75 2.75V9.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',gh._solidSVG='<path d="M12 2H4.75C4.33579 2 4 2.33579 4 2.75V21.25C4 21.6642 4.33579 22 4.75 22H19.25C19.6642 22 20 21.6642 20 21.25V10H12.75C12.3358 10 12 9.66421 12 9.25V2Z" fill="currentColor"/><path d="M19.5607 8.5L13.5 2.43934V8.5H19.5607Z" fill="currentColor"/>',gh._name="file-bend",gh._width=24,gh._height=24,gh._viewBox="0 0 24 24",gh=(0,s.Cc)([(0,C.Y$)("gds-icon-file-bend")],gh);const Mh=e=>{gh.define();const t=(0,n.p)("gds-icon-file-bend"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let mh=class extends R.M{};mh._regularSVG='<path d="M12.75 2.75H4.75V21.25H19.25V9.25M12.75 2.75L19.25 9.25M12.75 2.75V9.25H19.25M8.5 17.25V15.75M12 17.25V12.75M15.5 17.25V14.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',mh._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2H12V9.25C12 9.66421 12.3358 10 12.75 10H20V21.25C20 21.6642 19.6642 22 19.25 22H4.75C4.33579 22 4 21.6642 4 21.25V2.75C4 2.33579 4.33579 2 4.75 2ZM9.25 16.75C9.25 16.3358 8.91421 16 8.5 16C8.08579 16 7.75 16.3358 7.75 16.75V18.25C7.75 18.6642 8.08579 19 8.5 19C8.91421 19 9.25 18.6642 9.25 18.25V16.75ZM12 13C12.4142 13 12.75 13.3358 12.75 13.75V18.25C12.75 18.6642 12.4142 19 12 19C11.5858 19 11.25 18.6642 11.25 18.25V13.75C11.25 13.3358 11.5858 13 12 13ZM16.25 15.75C16.25 15.3358 15.9142 15 15.5 15C15.0858 15 14.75 15.3358 14.75 15.75V18.25C14.75 18.6642 15.0858 19 15.5 19C15.9142 19 16.25 18.6642 16.25 18.25V15.75Z" fill="currentColor"/><path d="M13.5 2.43934L19.5607 8.5H13.5V2.43934Z" fill="currentColor"/>',mh._name="file-chart",mh._width=24,mh._height=24,mh._viewBox="0 0 24 24",mh=(0,s.Cc)([(0,C.Y$)("gds-icon-file-chart")],mh);const Vh=e=>{mh.define();const t=(0,n.p)("gds-icon-file-chart"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let fh=class extends R.M{};fh._regularSVG='<path d="M12.75 2.75H4.75V21.25H19.25V9.25M12.75 2.75L19.25 9.25M12.75 2.75V9.25H19.25M8.75 13.25H12.25M8.75 17.25H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',fh._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2H4.75C4.33579 2 4 2.33579 4 2.75V21.25C4 21.6642 4.33579 22 4.75 22H19.25C19.6642 22 20 21.6642 20 21.25V10H12.75C12.3358 10 12 9.66421 12 9.25V2ZM8 14.25C8 13.8358 8.33579 13.5 8.75 13.5H12.25C12.6642 13.5 13 13.8358 13 14.25C13 14.6642 12.6642 15 12.25 15H8.75C8.33579 15 8 14.6642 8 14.25ZM8.75 17.5C8.33579 17.5 8 17.8358 8 18.25C8 18.6642 8.33579 19 8.75 19H15.25C15.6642 19 16 18.6642 16 18.25C16 17.8358 15.6642 17.5 15.25 17.5H8.75Z" fill="currentColor"/><path d="M19.5607 8.5L13.5 2.43934V8.5H19.5607Z" fill="currentColor"/>',fh._name="file-text",fh._width=24,fh._height=24,fh._viewBox="0 0 24 24",fh=(0,s.Cc)([(0,C.Y$)("gds-icon-file-text")],fh);const Lh=e=>{fh.define();const t=(0,n.p)("gds-icon-file-text"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let _h=class extends R.M{};_h._regularSVG='<path d="M17.25 18.25V21.25H4.75V5.75H7.75M15.25 2.75H7.75V18.25H20.25V7.75M15.25 2.75L20.25 7.75M15.25 2.75V7.75H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',_h._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C7.33579 2 7 2.33579 7 2.75V5H4.75C4.33579 5 4 5.33579 4 5.75V21.25C4 21.6642 4.33579 22 4.75 22H17.25C17.6642 22 18 21.6642 18 21.25V19H20.25C20.6642 19 21 18.6642 21 18.25V8.5H15.25C14.8358 8.5 14.5 8.16421 14.5 7.75V2H7.75ZM16.5 19H7.75C7.33579 19 7 18.6642 7 18.25V6.5H5.5V20.5H16.5V19Z" fill="currentColor"/><path d="M16 2.43934L20.5607 7H16V2.43934Z" fill="currentColor"/>',_h._name="files",_h._width=24,_h._height=24,_h._viewBox="0 0 24 24",_h=(0,s.Cc)([(0,C.Y$)("gds-icon-files")],_h);const Hh=e=>{_h.define();const t=(0,n.p)("gds-icon-files"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let vh=class extends R.M{};vh._regularSVG='<path d="M2.75 4.75H21.25M8.75 19.25H15.25M5.75 12H18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',vh._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H21.25C21.6642 4 22 4.33579 22 4.75C22 5.16421 21.6642 5.5 21.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM5 12C5 11.5858 5.33579 11.25 5.75 11.25H18.25C18.6642 11.25 19 11.5858 19 12C19 12.4142 18.6642 12.75 18.25 12.75H5.75C5.33579 12.75 5 12.4142 5 12ZM8 19.25C8 18.8358 8.33579 18.5 8.75 18.5H15.25C15.6642 18.5 16 18.8358 16 19.25C16 19.6642 15.6642 20 15.25 20H8.75C8.33579 20 8 19.6642 8 19.25Z" fill="currentColor"/>',vh._name="filter",vh._width=24,vh._height=24,vh._viewBox="0 0 24 24",vh=(0,s.Cc)([(0,C.Y$)("gds-icon-filter")],vh);const kh=e=>{vh.define();const t=(0,n.p)("gds-icon-filter"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let wh=class extends R.M{};wh._regularSVG='<path d="M4.75 21.2498V15.0831M4.75 15.0831V3.77755C10.0003 1.18383 13.9997 6.37127 19.25 3.77755V15.0831C13.9997 17.6768 10.0003 12.4894 4.75 15.0831Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',wh._solidSVG='<path d="M11.7975 15.8054C9.60407 15.1904 7.66645 14.6672 5.5 15.5659V21.25C5.5 21.6642 5.16421 22 4.75 22C4.33579 22 4 21.6642 4 21.25V3.77775C4 3.49237 4.16195 3.23172 4.41781 3.10532C7.30137 1.68079 9.86003 2.39852 12.1345 3.03652L12.2025 3.0556C14.5359 3.70992 16.5799 4.2603 18.9178 3.10532C19.1503 2.99048 19.4256 3.00386 19.6458 3.14071C19.8661 3.27755 20 3.51845 20 3.77775V15.0833C20 15.3687 19.838 15.6293 19.5822 15.7557C16.6986 17.1803 14.14 16.4625 11.8655 15.8245L11.7975 15.8054Z" fill="currentColor"/>',wh._name="flag",wh._width=24,wh._height=24,wh._viewBox="0 0 24 24",wh=(0,s.Cc)([(0,C.Y$)("gds-icon-flag")],wh);const bh=e=>{wh.define();const t=(0,n.p)("gds-icon-flag"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Zh=class extends R.M{};Zh._regularSVG='<path d="M8.75 4V8.25H15.25V4M3.75 3.75V20.25H20.25V6.75L17.25 3.75H3.75ZM15.25 14.25C15.25 16.0449 13.7949 17.5 12 17.5C10.2051 17.5 8.75 16.0449 8.75 14.25C8.75 12.4551 10.2051 11 12 11C13.7949 11 15.25 12.4551 15.25 14.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Zh._solidSVG='<path d="M9.5 14.25C9.5 12.8693 10.6193 11.75 12 11.75C13.3807 11.75 14.5 12.8693 14.5 14.25C14.5 15.6307 13.3807 16.75 12 16.75C10.6193 16.75 9.5 15.6307 9.5 14.25Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3H8V8.25C8 8.66421 8.33579 9 8.75 9H15.25C15.6642 9 16 8.66421 16 8.25V3H17.25C17.4489 3 17.6397 3.07902 17.7803 3.21967L20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75C3 3.33579 3.33579 3 3.75 3ZM12 10.25C9.79086 10.25 8 12.0409 8 14.25C8 16.4591 9.79086 18.25 12 18.25C14.2091 18.25 16 16.4591 16 14.25C16 12.0409 14.2091 10.25 12 10.25Z" fill="currentColor"/><path d="M9.5 3H14.5V7.5H9.5V3Z" fill="currentColor"/>',Zh._name="floppy-disk",Zh._width=24,Zh._height=24,Zh._viewBox="0 0 24 24",Zh=(0,s.Cc)([(0,C.Y$)("gds-icon-floppy-disk")],Zh);const yh=e=>{Zh.define();const t=(0,n.p)("gds-icon-floppy-disk"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let xh=class extends R.M{};xh._regularSVG='<path d="M3.75 8V3.75H8M3.75 16V20.25H8M16 3.75H20.25V8M20.25 16V20.25H16M8.75 8.75H15.25V15.25H8.75V8.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',xh._solidSVG='<path d="M3 3.75C3 3.33579 3.33579 3 3.75 3H8C8.41421 3 8.75 3.33579 8.75 3.75C8.75 4.16421 8.41421 4.5 8 4.5H4.5V8C4.5 8.41421 4.16421 8.75 3.75 8.75C3.33579 8.75 3 8.41421 3 8V3.75Z" fill="currentColor"/><path d="M15.25 3.75C15.25 3.33579 15.5858 3 16 3H20.25C20.6642 3 21 3.33579 21 3.75V8C21 8.41421 20.6642 8.75 20.25 8.75C19.8358 8.75 19.5 8.41421 19.5 8V4.5H16C15.5858 4.5 15.25 4.16421 15.25 3.75Z" fill="currentColor"/><path d="M3.75 15.25C4.16421 15.25 4.5 15.5858 4.5 16V19.5H8C8.41421 19.5 8.75 19.8358 8.75 20.25C8.75 20.6642 8.41421 21 8 21H3.75C3.33579 21 3 20.6642 3 20.25V16C3 15.5858 3.33579 15.25 3.75 15.25Z" fill="currentColor"/><path d="M20.25 15.25C20.6642 15.25 21 15.5858 21 16V20.25C21 20.6642 20.6642 21 20.25 21H16C15.5858 21 15.25 20.6642 15.25 20.25C15.25 19.8358 15.5858 19.5 16 19.5H19.5V16C19.5 15.5858 19.8358 15.25 20.25 15.25Z" fill="currentColor"/><path d="M8.75 8C8.33579 8 8 8.33579 8 8.75V15.25C8 15.6642 8.33579 16 8.75 16H15.25C15.6642 16 16 15.6642 16 15.25V8.75C16 8.33579 15.6642 8 15.25 8H8.75Z" fill="currentColor"/>',xh._name="focus-square",xh._width=24,xh._height=24,xh._viewBox="0 0 24 24",xh=(0,s.Cc)([(0,C.Y$)("gds-icon-focus-square")],xh);const Sh=e=>{xh.define();const t=(0,n.p)("gds-icon-focus-square"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let $h=class extends R.M{};$h._regularSVG='<path d="M3.75 8V3.75H8M3.75 16V20.25H8M16 3.75H20.25V8M20.25 16V20.25H16M15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',$h._solidSVG='<path d="M3 3.75C3 3.33579 3.33579 3 3.75 3H8C8.41421 3 8.75 3.33579 8.75 3.75C8.75 4.16421 8.41421 4.5 8 4.5H4.5V8C4.5 8.41421 4.16421 8.75 3.75 8.75C3.33579 8.75 3 8.41421 3 8V3.75Z" fill="currentColor"/><path d="M15.25 3.75C15.25 3.33579 15.5858 3 16 3H20.25C20.6642 3 21 3.33579 21 3.75V8C21 8.41421 20.6642 8.75 20.25 8.75C19.8358 8.75 19.5 8.41421 19.5 8V4.5H16C15.5858 4.5 15.25 4.16421 15.25 3.75Z" fill="currentColor"/><path d="M3.75 15.25C4.16421 15.25 4.5 15.5858 4.5 16V19.5H8C8.41421 19.5 8.75 19.8358 8.75 20.25C8.75 20.6642 8.41421 21 8 21H3.75C3.33579 21 3 20.6642 3 20.25V16C3 15.5858 3.33579 15.25 3.75 15.25Z" fill="currentColor"/><path d="M20.25 15.25C20.6642 15.25 21 15.5858 21 16V20.25C21 20.6642 20.6642 21 20.25 21H16C15.5858 21 15.25 20.6642 15.25 20.25C15.25 19.8358 15.5858 19.5 16 19.5H19.5V16C19.5 15.5858 19.8358 15.25 20.25 15.25Z" fill="currentColor"/><path d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z" fill="currentColor"/>',$h._name="focus",$h._width=24,$h._height=24,$h._viewBox="0 0 24 24",$h=(0,s.Cc)([(0,C.Y$)("gds-icon-focus")],$h);const Gh=e=>{$h.define();const t=(0,n.p)("gds-icon-focus"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let jh=class extends R.M{};jh._regularSVG='<path d="M11.25 19.25H2.75V3.75H10L12 6.75H21.25V10.25M18 13.75V17M18 17V20.25M18 17H14.75M18 17H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',jh._solidSVG='<path d="M10 3C10.2508 3 10.4849 3.12533 10.624 3.33397L12.1787 5.66603C12.3178 5.87467 12.552 6 12.8028 6H21.25C21.6642 6 22 6.33579 22 6.75V12.5278C20.9385 11.5777 19.5367 11 18 11C14.6863 11 12 13.6863 12 17C12 18.0929 12.2922 19.1175 12.8027 20H2.75C2.33579 20 2 19.6642 2 19.25V3.75C2 3.33579 2.33579 3 2.75 3H10Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 13C18.4142 13 18.75 13.3358 18.75 13.75V16.25H21.25C21.6642 16.25 22 16.5858 22 17C22 17.4142 21.6642 17.75 21.25 17.75H18.75V20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25V17.75H14.75C14.3358 17.75 14 17.4142 14 17C14 16.5858 14.3358 16.25 14.75 16.25H17.25V13.75C17.25 13.3358 17.5858 13 18 13Z" fill="currentColor"/>',jh._name="folder-add-right",jh._width=24,jh._height=24,jh._viewBox="0 0 24 24",jh=(0,s.Cc)([(0,C.Y$)("gds-icon-folder-add-right")],jh);const Eh=e=>{jh.define();const t=(0,n.p)("gds-icon-folder-add-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Bh=class extends R.M{};Bh._regularSVG='<path d="M16.25 5.75H20.25V10.75M3.75 7.75V3.75H16.25V10.75M3.75 7.75H2.75V20.25H21.25V10.75H20.25M3.75 7.75H8.75L11.75 10.75H16.25M16.25 10.75H20.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',Bh._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H16.25C16.6642 3 17 3.33579 17 3.75V5H20.25C20.6642 5 21 5.33579 21 5.75V10H21.25C21.6642 10 22 10.3358 22 10.75V20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25V7.75C2 7.33579 2.33579 7 2.75 7H3V3.75ZM19.5 10V6.5H17V10H19.5ZM15.5 10V4.5H4.5V7H8.75C8.94891 7 9.13968 7.07902 9.28033 7.21967L12.0607 10H15.5Z" fill="currentColor"/>',Bh._name="folder-paper",Bh._width=24,Bh._height=24,Bh._viewBox="0 0 24 24",Bh=(0,s.Cc)([(0,C.Y$)("gds-icon-folder-paper")],Bh);const qh=e=>{Bh.define();const t=(0,n.p)("gds-icon-folder-paper"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Nh=class extends R.M{};Nh._regularSVG='<path d="M12 19.25V13M12 13L14.5 15.5M12 13L9.5 15.5M7.375 19.25H2.75V3.75H10L12 6.75H21.25V19.25H16.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Nh._solidSVG='<path d="M2 3.75C2 3.33579 2.33579 3 2.75 3H10C10.2508 3 10.4849 3.12533 10.624 3.33397L12.4014 6H21.25C21.6642 6 22 6.33579 22 6.75V19.25C22 19.6642 21.6642 20 21.25 20H12.75V14.8107L13.9697 16.0303C14.2626 16.3232 14.7374 16.3232 15.0303 16.0303C15.3232 15.7374 15.3232 15.2626 15.0303 14.9697L12.5303 12.4697C12.2374 12.1768 11.7626 12.1768 11.4697 12.4697L8.96967 14.9697C8.67678 15.2626 8.67678 15.7374 8.96967 16.0303C9.26256 16.3232 9.73744 16.3232 10.0303 16.0303L11.25 14.8107V20H2.75C2.33579 20 2 19.6642 2 19.25V3.75Z" fill="currentColor"/>',Nh._name="folder-upload",Nh._width=24,Nh._height=24,Nh._viewBox="0 0 24 24",Nh=(0,s.Cc)([(0,C.Y$)("gds-icon-folder-upload")],Nh);const Ih=e=>{Nh.define();const t=(0,n.p)("gds-icon-folder-upload"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Yh=class extends R.M{};Yh._regularSVG='<path d="M2.75 3.75V19.25H21.25V6.75H12L10 3.75H2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Yh._solidSVG='<path d="M2.75 3C2.33579 3 2 3.33579 2 3.75V19.25C2 19.6642 2.33579 20 2.75 20H21.25C21.6642 20 22 19.6642 22 19.25V6.75C22 6.33579 21.6642 6 21.25 6H12.4014L10.624 3.33397C10.4849 3.12533 10.2508 3 10 3H2.75Z" fill="currentColor"/>',Yh._name="folder",Yh._width=24,Yh._height=24,Yh._viewBox="0 0 24 24",Yh=(0,s.Cc)([(0,C.Y$)("gds-icon-folder")],Yh);const zh=e=>{Yh.define();const t=(0,n.p)("gds-icon-folder"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ah=class extends R.M{};Ah._regularSVG='<path d="M8.25 3.75H3.75V8.25M15.75 3.75H20.25V8.25M20.25 15.75V20.25H15.75M8.25 20.25H3.75V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ah._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H8.25C8.66421 3 9 3.33579 9 3.75C9 4.16421 8.66421 4.5 8.25 4.5H4.5V8.25C4.5 8.66421 4.16421 9 3.75 9C3.33579 9 3 8.66421 3 8.25V3.75ZM15 3.75C15 3.33579 15.3358 3 15.75 3H20.25C20.6642 3 21 3.33579 21 3.75V8.25C21 8.66421 20.6642 9 20.25 9C19.8358 9 19.5 8.66421 19.5 8.25V4.5H15.75C15.3358 4.5 15 4.16421 15 3.75ZM3.75 15C4.16421 15 4.5 15.3358 4.5 15.75V19.5H8.25C8.66421 19.5 9 19.8358 9 20.25C9 20.6642 8.66421 21 8.25 21H3.75C3.33579 21 3 20.6642 3 20.25V15.75C3 15.3358 3.33579 15 3.75 15ZM20.25 15C20.6642 15 21 15.3358 21 15.75V20.25C21 20.6642 20.6642 21 20.25 21H15.75C15.3358 21 15 20.6642 15 20.25C15 19.8358 15.3358 19.5 15.75 19.5H19.5V15.75C19.5 15.3358 19.8358 15 20.25 15Z" fill="currentColor"/>',Ah._name="fullscreen",Ah._width=24,Ah._height=24,Ah._viewBox="0 0 24 24",Ah=(0,s.Cc)([(0,C.Y$)("gds-icon-fullscreen")],Ah);const Th=e=>{Ah.define();const t=(0,n.p)("gds-icon-fullscreen"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Rh=class extends R.M{};Rh._regularSVG='<path d="M12 7.75V6.08333M12 7.75H10.3333C8.49238 7.75 7 6.25762 7 4.41667C7 3.49619 7.74619 2.75 8.66667 2.75C10.5076 2.75 12 4.24238 12 6.08333M12 7.75H13.6667C15.5076 7.75 17 6.25762 17 4.41667C17 3.49619 16.2538 2.75 15.3333 2.75C13.4924 2.75 12 4.24238 12 6.08333M12 7.75V20.25M4.75 12V20.25H19.25V12M4.75 12H19.25M4.75 12H3.75V7.75H20.25V12H19.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',Rh._solidSVG='<path d="M6.25 4.41667C6.25 3.08198 7.33198 2 8.66667 2C10.043 2 11.2603 2.68092 12 3.72427C12.7397 2.68092 13.957 2 15.3333 2C16.668 2 17.75 3.08198 17.75 4.41667C17.75 5.39677 17.4047 6.29622 16.8291 7H20.25C20.6642 7 21 7.33579 21 7.75V10.5C21 10.9142 20.6642 11.25 20.25 11.25H12.75V7H13.6667C15.0934 7 16.25 5.8434 16.25 4.41667C16.25 3.91041 15.8396 3.5 15.3333 3.5C13.9066 3.5 12.75 4.6566 12.75 6.08333V7H11.25V6.08333C11.25 4.6566 10.0934 3.5 8.66667 3.5C8.16041 3.5 7.75 3.91041 7.75 4.41667C7.75 5.8434 8.9066 7 10.3333 7H11.25V11.25H3.75C3.33579 11.25 3 10.9142 3 10.5V7.75C3 7.33579 3.33579 7 3.75 7H7.1709C6.5953 6.29622 6.25 5.39677 6.25 4.41667Z" fill="currentColor"/><path d="M12.75 12.75H20V20.25C20 20.6642 19.6642 21 19.25 21H12.75V12.75Z" fill="currentColor"/><path d="M11.25 12.75H4V20.25C4 20.6642 4.33579 21 4.75 21H11.25V12.75Z" fill="currentColor"/>',Rh._name="gift",Rh._width=24,Rh._height=24,Rh._viewBox="0 0 24 24",Rh=(0,s.Cc)([(0,C.Y$)("gds-icon-gift")],Rh);const Oh=e=>{Rh.define();const t=(0,n.p)("gds-icon-gift"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Wh=class extends R.M{};Wh._regularSVG='<path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75M12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75M12 21.25C9.65279 21.25 7.75 17.1086 7.75 12C7.75 6.89137 9.65279 2.75 12 2.75M12 21.25C14.3472 21.25 16.25 17.1086 16.25 12C16.25 6.89137 14.3472 2.75 12 2.75M21 12H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>',Wh._solidSVG='<path d="M2.02771 11.2499H7.01143C7.08916 8.70549 7.55991 6.38765 8.30456 4.63553C8.71256 3.67552 9.2176 2.85039 9.81666 2.2542C9.82324 2.24765 9.82984 2.24112 9.83645 2.23462C5.59031 3.17115 2.35718 6.80647 2.02771 11.2499Z" fill="currentColor"/><path d="M2.02771 12.7499C2.35718 17.1934 5.59031 20.8288 9.83645 21.7653C9.82984 21.7588 9.82324 21.7522 9.81666 21.7457C9.2176 21.1495 8.71256 20.3244 8.30456 19.3644C7.55991 17.6122 7.08916 15.2944 7.01143 12.7499H2.02771Z" fill="currentColor"/><path d="M14.1636 21.7653C18.4097 20.8287 21.6428 17.1934 21.9723 12.7499H16.9886C16.9109 15.2944 16.4401 17.6122 15.6955 19.3644C15.2875 20.3244 14.7824 21.1495 14.1834 21.7457C14.1768 21.7522 14.1702 21.7588 14.1636 21.7653Z" fill="currentColor"/><path d="M21.9723 11.2499C21.6428 6.80648 18.4097 3.17115 14.1636 2.23462C14.1702 2.24112 14.1768 2.24765 14.1834 2.2542C14.7824 2.85039 15.2875 3.67552 15.6955 4.63553C16.4401 6.38765 16.9109 8.70549 16.9886 11.2499H21.9723Z" fill="currentColor"/><path d="M13.1252 3.3174C12.7104 2.90457 12.3309 2.74995 12 2.74995C11.6691 2.74995 11.2896 2.90457 10.8748 3.3174C10.4569 3.73326 10.0462 4.3726 9.68505 5.22224C9.03191 6.75905 8.58961 8.8698 8.51216 11.2499H15.4879C15.4104 8.8698 14.9681 6.75905 14.315 5.22224C13.9539 4.3726 13.5431 3.73326 13.1252 3.3174Z" fill="currentColor"/><path d="M14.315 18.7777C14.9681 17.2409 15.4104 15.1301 15.4879 12.7499L8.51216 12.7499C8.58961 15.1301 9.03191 17.2409 9.68505 18.7777C10.0462 19.6273 10.4569 20.2666 10.8748 20.6825C11.2896 21.0953 11.6691 21.2499 12 21.2499C12.3309 21.2499 12.7104 21.0953 13.1252 20.6825C13.5431 20.2666 13.9539 19.6273 14.315 18.7777Z" fill="currentColor"/>',Wh._name="globus",Wh._width=24,Wh._height=24,Wh._viewBox="0 0 24 24",Wh=(0,s.Cc)([(0,C.Y$)("gds-icon-globus")],Wh);const Ph=e=>{Wh.define();const t=(0,n.p)("gds-icon-globus"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Fh=class extends R.M{};Fh._regularSVG='<path d="M23.25 9L12 14.25L0.75 9L12 3.75L23.25 9ZM23.25 9V15.25M4.75002 10.9688V16.6406L12 20.25L19.25 16.6406V10.9688" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Fh._solidSVG='<path d="M12.3172 3.07026C12.1161 2.97658 11.8839 2.97658 11.6828 3.07026L0.432836 8.31251C0.16878 8.43555 0 8.70018 0 8.99114C0 9.2821 0.16878 9.54673 0.432836 9.66978L11.6828 14.912C11.8839 15.0057 12.1161 15.0057 12.3172 14.912L22.5 10.167V15.2319C22.5 15.6455 22.8358 15.9808 23.25 15.9808C23.6642 15.9808 24 15.6455 24 15.2319V8.99114C24 8.70018 23.8312 8.43555 23.5672 8.31251L12.3172 3.07026Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12.7156V16.8199C4.5 17.1016 4.65832 17.3595 4.90974 17.4873L11.6597 20.9185C11.8735 21.0272 12.1264 21.0272 12.3402 20.9185L19.0903 17.4873C19.3417 17.3595 19.5 17.1016 19.5 16.8199V12.7156L12.2288 16.4523C12.0852 16.5261 11.9148 16.5261 11.7712 16.4523L4.5 12.7156Z" fill="currentColor"/>',Fh._name="graduate-cap",Fh._width=24,Fh._height=24,Fh._viewBox="0 0 24 24",Fh=(0,s.Cc)([(0,C.Y$)("gds-icon-graduate-cap")],Fh);const Dh=e=>{Fh.define();const t=(0,n.p)("gds-icon-graduate-cap"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Kh=class extends R.M{};Kh._regularSVG='<path d="M3.74771 20.2422L6.16196 17.828M6.16196 17.828C-0.373669 9.93872 6.83882 0.665628 19.7181 4.27183C23.3243 17.1512 14.0511 24.3636 6.16196 17.828Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5184 8.27183C13.5184 7.78239 12.9181 7.56324 12.6151 7.94204L9.61607 11.691C9.34405 12.031 9.58059 12.5416 10.0102 12.5416H11.4816V14.7282C11.4816 15.2176 12.0819 15.4368 12.3849 15.058L15.3839 11.309C15.656 10.969 15.4194 10.4584 14.9898 10.4584H13.5184V8.27183Z" fill="currentColor"/>',Kh._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5.16061 17.7687C2.13084 13.7222 2.34132 9.272 5.10471 6.23444C7.95009 3.10675 13.3026 1.69666 19.9204 3.54964C20.1727 3.62027 20.3698 3.8174 20.4404 4.06965C22.2933 10.6875 20.8832 16.04 17.7555 18.8853C14.718 21.6487 10.2678 21.8591 6.22126 18.8294L4.27808 20.7726C3.98519 21.0655 3.51032 21.0655 3.21742 20.7726C2.92453 20.4797 2.92453 20.0048 3.21742 19.7119L5.16061 17.7687ZM12.6151 7.9421C12.9181 7.5633 13.5184 7.78246 13.5184 8.27189V10.4585H14.9898C15.4194 10.4585 15.656 10.969 15.3839 11.3091L12.3849 15.058C12.0819 15.4368 11.4816 15.2177 11.4816 14.7282V12.5416H10.0102C9.58059 12.5416 9.34405 12.0311 9.61607 11.6911L12.6151 7.9421Z" fill="currentColor"/>',Kh._name="green-power",Kh._width=24,Kh._height=24,Kh._viewBox="0 0 24 24",Kh=(0,s.Cc)([(0,C.Y$)("gds-icon-green-power")],Kh);const Uh=e=>{Kh.define();const t=(0,n.p)("gds-icon-green-power"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Jh=class extends R.M{};Jh._regularSVG='<path d="M14.4251 13.1804C17.9999 11.6957 22.5632 14.0522 23.0001 20.25H16.75M10.75 7C10.75 8.79493 9.29493 10.25 7.5 10.25C5.70507 10.25 4.25 8.79493 4.25 7C4.25 5.20507 5.70507 3.75 7.5 3.75C9.29493 3.75 10.75 5.20507 10.75 7ZM19.75 7C19.75 8.79493 18.2949 10.25 16.5 10.25C14.7051 10.25 13.25 8.79493 13.25 7C13.25 5.20507 14.7051 3.75 16.5 3.75C18.2949 3.75 19.75 5.20507 19.75 7ZM1 20.25H13.8571C13.1522 10.25 1.70491 10.25 1 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Jh._solidSVG='<path d="M3.5 7C3.5 4.79086 5.29086 3 7.5 3C9.70914 3 11.5 4.79086 11.5 7C11.5 9.20914 9.70914 11 7.5 11C5.29086 11 3.5 9.20914 3.5 7Z" fill="currentColor"/><path d="M7.42857 12C10.943 12 14.2314 14.8926 14.6053 20.1973C14.6199 20.4048 14.5477 20.6091 14.4058 20.7613C14.2639 20.9136 14.0652 21 13.8571 21H1C0.791928 21 0.593206 20.9136 0.451343 20.7613C0.30948 20.6091 0.237227 20.4048 0.251858 20.1973C0.625789 14.8926 3.91415 12 7.42857 12Z" fill="currentColor"/><path d="M16.5 3C14.2909 3 12.5 4.79086 12.5 7C12.5 9.20914 14.2909 11 16.5 11C18.7091 11 20.5 9.20914 20.5 7C20.5 4.79086 18.7091 3 16.5 3Z" fill="currentColor"/><path d="M16.1017 20.0918C16.1237 20.4031 16.0805 20.7119 15.9786 21H22.9972C23.2053 21 23.404 20.9136 23.5459 20.7613C23.6877 20.6091 23.76 20.4048 23.7453 20.1973C23.3714 14.8926 20.083 12 16.5686 12C15.3801 12 14.2174 12.3308 13.1846 12.9739C14.7974 14.6363 15.889 17.0736 16.1017 20.0918Z" fill="currentColor"/>',Jh._name="group",Jh._width=24,Jh._height=24,Jh._viewBox="0 0 24 24",Jh=(0,s.Cc)([(0,C.Y$)("gds-icon-group")],Jh);const Qh=e=>{Jh.define();const t=(0,n.p)("gds-icon-group"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Xh=class extends R.M{};Xh._regularSVG='<path d="M12 12V10.75C12 6.88401 8.86599 3.75 5 3.75H3.75V5C3.75 8.86599 6.88401 12 10.75 12H12ZM12 12V20.25M19 6.75H20.25V8.25C20.25 12.116 17.116 15.25 13.25 15.25H12V13.75C12 9.88401 15.134 6.75 19 6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Xh._solidSVG='<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75V5C3 9.28021 6.46979 12.75 10.75 12.75H11.25V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V16H13.25C17.5302 16 21 12.5302 21 8.25V6.75C21 6.33579 20.6642 6 20.25 6H19C16.3562 6 14.0216 7.32382 12.6229 9.34475C11.9618 5.73541 8.80036 3 5 3H3.75Z" fill="currentColor"/>',Xh._name="growth",Xh._width=24,Xh._height=24,Xh._viewBox="0 0 24 24",Xh=(0,s.Cc)([(0,C.Y$)("gds-icon-growth")],Xh);const eu=e=>{Xh.define();const t=(0,n.p)("gds-icon-growth"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let tu=class extends R.M{};tu._regularSVG='<path d="M3.75 13.75V12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12V13.75M3.75 13.75V20.25H7.75V13.75H3.75ZM20.25 13.75V20.25H16.25V13.75H20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',tu._solidSVG='<path d="M4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12V13H16.25C15.8358 13 15.5 13.3358 15.5 13.75V20.25C15.5 20.6642 15.8358 21 16.25 21H20.25C20.6642 21 21 20.6642 21 20.25V12C21 7.282 17.3696 3.41192 12.75 3.03081V3H12C7.02944 3 3 7.02944 3 12V20.25C3 20.6642 3.33579 21 3.75 21H7.75C8.16421 21 8.5 20.6642 8.5 20.25V13.75C8.5 13.3358 8.16421 13 7.75 13H4.5V12Z" fill="currentColor"/>',tu._name="headphones",tu._width=24,tu._height=24,tu._viewBox="0 0 24 24",tu=(0,s.Cc)([(0,C.Y$)("gds-icon-headphones")],tu);const ru=e=>{tu.define();const t=(0,n.p)("gds-icon-headphones"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ou=class extends R.M{};ou._regularSVG='<path d="M17.25 12H15.15L13.5 15L10.5 9L8.85 12H6.75M12 5.57193C18.3331 -0.86765 29.1898 11.0916 12 20.75C-5.18982 11.0916 5.66687 -0.867651 12 5.57193Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ou._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5189 6.84578C23.0877 10.7671 21.0886 16.5047 12.3689 21.404C12.1408 21.5322 11.8623 21.5322 11.6341 21.404C2.91438 16.5047 0.915246 10.7672 2.48404 6.8458C3.25119 4.92822 4.8589 3.55922 6.74877 3.13681C8.4672 2.75271 10.3616 3.16312 12.0015 4.54956C13.6413 3.16312 15.5357 2.75271 17.2542 3.1368C19.144 3.55922 20.7518 4.92821 21.5189 6.84578ZM11.1708 8.66459C11.0461 8.41523 10.7934 8.25561 10.5147 8.25014C10.236 8.24468 9.97719 8.39428 9.84284 8.63856L8.40655 11.25H6.75C6.33579 11.25 6 11.5858 6 12C6 12.4142 6.33579 12.75 6.75 12.75H8.85C9.12352 12.75 9.37535 12.6011 9.50716 12.3614L10.4684 10.6138L12.8292 15.3354C12.9539 15.5848 13.2066 15.7444 13.4853 15.7499C13.764 15.7553 14.0228 15.6057 14.1572 15.3614L15.5935 12.75H17.25C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25H15.15C14.8765 11.25 14.6247 11.3989 14.4928 11.6386L13.5316 13.3862L11.1708 8.66459Z" fill="currentColor"/>',ou._name="heart-beat",ou._width=24,ou._height=24,ou._viewBox="0 0 24 24",ou=(0,s.Cc)([(0,C.Y$)("gds-icon-heart-beat")],ou);const su=e=>{ou.define();const t=(0,n.p)("gds-icon-heart-beat"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let nu=class extends R.M{};nu._regularSVG='<path d="M12 5.57193C18.3331 -0.86765 29.1898 11.0916 12 20.75C-5.18982 11.0916 5.66687 -0.867651 12 5.57193Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',nu._solidSVG='<path d="M12.3674 21.404C21.0872 16.5047 23.0863 10.7671 21.5175 6.84578C20.7503 4.92821 19.1426 3.55922 17.2527 3.1368C15.5343 2.75271 13.6399 3.16312 12 4.54956C10.3601 3.16312 8.46574 2.75271 6.74731 3.13681C4.85744 3.55922 3.24973 4.92822 2.48258 6.8458C0.913781 10.7672 2.91292 16.5047 11.6327 21.404C11.8608 21.5322 12.1393 21.5322 12.3674 21.404Z" fill="currentColor"/>',nu._name="heart",nu._width=24,nu._height=24,nu._viewBox="0 0 24 24",nu=(0,s.Cc)([(0,C.Y$)("gds-icon-heart")],nu);const lu=e=>{nu.define();const t=(0,n.p)("gds-icon-heart"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let iu=class extends R.M{};iu._regularSVG='<path d="M12 7.75V12L15.5 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.75 4.75V8.75H6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.25 15.0833C4.52169 18.676 7.95303 21.25 11.9864 21.25C17.1026 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1026 2.75 11.9864 2.75C8.14808 2.75 4.85497 5.08106 3.44947 8.40278" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',iu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.47239 8H6.75C7.16421 8 7.5 8.33579 7.5 8.75C7.5 9.16421 7.16421 9.5 6.75 9.5H2.75C2.33579 9.5 2 9.16421 2 8.75V4.75C2 4.33579 2.33579 4 2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V6.68977C5.27085 3.87322 8.4092 2 11.9864 2C17.5157 2 22 6.47612 22 12C22 17.5239 17.5157 22 11.9864 22C7.626 22 3.91756 19.2169 2.54299 15.3336C2.40477 14.9431 2.60927 14.5145 2.99974 14.3763C3.39021 14.2381 3.8188 14.4426 3.95701 14.8331C5.12582 18.1351 8.28007 20.5 11.9864 20.5C16.6894 20.5 20.5 16.6934 20.5 12C20.5 7.30661 16.6894 3.5 11.9864 3.5C8.73357 3.5 5.90591 5.32143 4.47239 8ZM12 7C12.4142 7 12.75 7.33579 12.75 7.75V11.6893L16.0303 14.9697C16.3232 15.2626 16.3232 15.7374 16.0303 16.0303C15.7374 16.3232 15.2626 16.3232 14.9697 16.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V7.75C11.25 7.33579 11.5858 7 12 7Z" fill="currentColor"/>',iu._name="history",iu._width=24,iu._height=24,iu._viewBox="0 0 24 24",iu=(0,s.Cc)([(0,C.Y$)("gds-icon-history")],iu);const au=e=>{iu.define();const t=(0,n.p)("gds-icon-history"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let cu=class extends R.M{};cu._regularSVG='<path d="M19.25 7.94038L12 2.75L4.74997 7.9404M19.25 7.94038L21.5 9.55119M19.25 7.94038V10.5952M4.74997 7.9404L2.5 9.55119M4.74997 7.9404V20.25H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.0184 14.0218C19.0184 13.5324 18.4181 13.3132 18.1151 13.692L15.1161 17.441C14.844 17.781 15.0806 18.2916 15.5102 18.2916H16.9816V20.4782C16.9816 20.9676 17.5819 21.1868 17.8849 20.808L20.8839 17.059C21.156 16.719 20.9194 16.2084 20.4898 16.2084H19.0184V14.0218Z" fill="currentColor"/>',cu._solidSVG='<path d="M11.5635 2.14017C11.8245 1.95328 12.1756 1.95328 12.4366 2.14017L21.9366 8.94136C22.2734 9.18248 22.351 9.65098 22.1099 9.98778C21.8687 10.3246 21.4002 10.4021 21.0634 10.161L20 9.39971V10.5952C20 11.0094 19.6642 11.3452 19.25 11.3452C18.8358 11.3452 18.5 11.0094 18.5 10.5952V8.32583L12 3.67239L5.50003 8.32585V19.5H12.75C13.1642 19.5 13.5 19.8358 13.5 20.25C13.5 20.6642 13.1642 21 12.75 21H4.75003C4.33582 21 4.00003 20.6642 4.00003 20.25V9.39973L2.93664 10.161C2.59984 10.4021 2.13135 10.3246 1.89023 9.98778C1.64911 9.65098 1.72667 9.18248 2.06347 8.94136L11.5635 2.14017Z" fill="currentColor"/><path d="M12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75Z" fill="currentColor"/><path d="M18.1151 13.692C18.4181 13.3132 19.0184 13.5324 19.0184 14.0218V16.2084H20.4898C20.9194 16.2084 21.156 16.719 20.8839 17.059L17.8849 20.808C17.5819 21.1868 16.9816 20.9676 16.9816 20.4782V18.2916H15.5102C15.0806 18.2916 14.844 17.781 15.1161 17.441L18.1151 13.692Z" fill="currentColor"/>',cu._name="home-energy-one",cu._width=24,cu._height=24,cu._viewBox="0 0 24 24",cu=(0,s.Cc)([(0,C.Y$)("gds-icon-home-energy-one")],cu);const Cu=e=>{cu.define();const t=(0,n.p)("gds-icon-home-energy-one"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let du=class extends R.M{};du._regularSVG='<path d="M12 2.75L12.4366 2.14017C12.1755 1.95328 11.8245 1.95328 11.5634 2.14017L12 2.75ZM21.0634 10.161C21.4002 10.4021 21.8687 10.3246 22.1098 9.98778C22.3509 9.65098 22.2734 9.18248 21.9366 8.94136L21.0634 10.161ZM2.06341 8.94136C1.72661 9.18248 1.64905 9.65098 1.89017 9.98778C2.13129 10.3246 2.59979 10.4021 2.93659 10.161L2.06341 8.94136ZM4.74997 20.25H3.99997C3.99997 20.6642 4.33576 21 4.74997 21V20.25ZM8.24997 21C8.66419 21 8.99997 20.6642 8.99997 20.25C8.99997 19.8358 8.66419 19.5 8.24997 19.5V21ZM19.25 20.25V21C19.6642 21 20 20.6642 20 20.25H19.25ZM15.75 19.5C15.3358 19.5 15 19.8358 15 20.25C15 20.6642 15.3358 21 15.75 21V19.5ZM8.74997 11.75V11C8.33576 11 7.99997 11.3358 7.99997 11.75H8.74997ZM15.25 11.75H16C16 11.3358 15.6642 11 15.25 11V11.75ZM15.25 16.25V17C15.6642 17 16 16.6642 16 16.25H15.25ZM8.74997 16.25H7.99997C7.99997 16.6642 8.33576 17 8.74997 17V16.25ZM9.24997 11.5C9.24997 11.9142 9.58576 12.25 9.99997 12.25C10.4142 12.25 10.75 11.9142 10.75 11.5H9.24997ZM10.75 9.75C10.75 9.33579 10.4142 9 9.99997 9C9.58576 9 9.24997 9.33579 9.24997 9.75H10.75ZM13.25 11.5C13.25 11.9142 13.5858 12.25 14 12.25C14.4142 12.25 14.75 11.9142 14.75 11.5L13.25 11.5ZM14.75 9.74999C14.75 9.33577 14.4142 8.99999 14 9C13.5857 9.00001 13.25 9.3358 13.25 9.75001L14.75 9.74999ZM12.75 16.5C12.75 16.0858 12.4142 15.75 12 15.75C11.5858 15.75 11.25 16.0858 11.25 16.5H12.75ZM11.25 20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25H11.25ZM12 2.75L11.5634 3.35983L18.8134 8.55021L19.25 7.94038L19.6866 7.33055L12.4366 2.14017L12 2.75ZM19.25 7.94038L18.8134 8.55021L21.0634 10.161L21.5 9.55119L21.9366 8.94136L19.6866 7.33055L19.25 7.94038ZM12 2.75L11.5634 2.14017L4.31339 7.33057L4.74997 7.9404L5.18656 8.55023L12.4366 3.35983L12 2.75ZM4.74997 7.9404L4.31339 7.33057L2.06341 8.94136L2.5 9.55119L2.93659 10.161L5.18656 8.55023L4.74997 7.9404ZM4.74997 20.25H5.49997V7.9404H4.74997H3.99997V20.25H4.74997ZM8.24997 20.25V19.5H4.74997V20.25V21H8.24997V20.25ZM19.25 7.94038H18.5V20.25H19.25H20V7.94038H19.25ZM19.25 20.25V19.5H15.75V20.25V21H19.25V20.25ZM8.74997 11.75V12.5H15.25V11.75V11H8.74997V11.75ZM15.25 11.75H14.5V16.25H15.25H16V11.75H15.25ZM8.74997 16.25H9.49997V11.75H8.74997H7.99997V16.25H8.74997ZM9.99997 11.5H10.75V9.75H9.99997H9.24997V11.5H9.99997ZM14 11.5L14.75 11.5L14.75 9.74999L14 9.75L13.25 9.75001L13.25 11.5L14 11.5ZM15.25 16.25V15.5H8.74997V16.25V17H15.25V16.25ZM12 16.5H11.25V20.25H12H12.75V16.5H12Z" fill="currentColor"/>',du._solidSVG='<path d="M11.5635 2.14017C11.8245 1.95328 12.1756 1.95328 12.4366 2.14017L21.9366 8.94136C22.2734 9.18248 22.351 9.65098 22.1099 9.98778C21.8687 10.3246 21.4002 10.4021 21.0634 10.161L20 9.39971V20.25C20 20.6642 19.6642 21 19.25 21H15.75C15.3358 21 15 20.6642 15 20.25C15 19.8358 15.3358 19.5 15.75 19.5H18.5V8.32583L12 3.67239L5.50003 8.32585V19.5H8.25003C8.66424 19.5 9.00003 19.8358 9.00003 20.25C9.00003 20.6642 8.66424 21 8.25003 21H4.75003C4.33582 21 4.00003 20.6642 4.00003 20.25V9.39973L2.93664 10.161C2.59984 10.4021 2.13135 10.3246 1.89023 9.98778C1.64911 9.65098 1.72667 9.18248 2.06347 8.94136L11.5635 2.14017Z" fill="currentColor"/><path d="M8.75 11C8.33579 11 8 11.3358 8 11.75V16.25C8 16.6642 8.33579 17 8.75 17H11.25V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V17H15.25C15.6642 17 16 16.6642 16 16.25V11.75C16 11.3358 15.6642 11 15.25 11H14.75V9.75C14.75 9.33579 14.4142 9 14 9C13.5858 9 13.25 9.33579 13.25 9.75V11H10.75V9.75C10.75 9.33579 10.4142 9 10 9C9.58579 9 9.25 9.33579 9.25 9.75V11H8.75Z" fill="currentColor"/>',du._name="home-energy-two",du._width=24,du._height=24,du._viewBox="0 0 24 24",du=(0,s.Cc)([(0,C.Y$)("gds-icon-home-energy-two")],du);const hu=e=>{du.define();const t=(0,n.p)("gds-icon-home-energy-two"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let uu=class extends R.M{};uu._regularSVG='<path d="M3.75 9L3.27507 8.41953C3.10097 8.56198 3 8.77505 3 9H3.75ZM20.25 9H21C21 8.77505 20.899 8.56198 20.7249 8.41953L20.25 9ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM12 2.25L12.4749 1.66953C12.1987 1.44349 11.8013 1.44349 11.5251 1.66953L12 2.25ZM9.75 14.75V14C9.33579 14 9 14.3358 9 14.75H9.75ZM14.25 14.75H15C15 14.3358 14.6642 14 14.25 14V14.75ZM14.25 20.25H13.5C13.5 20.6642 13.8358 21 14.25 21V20.25ZM9.75 20.25V21C10.1642 21 10.5 20.6642 10.5 20.25H9.75ZM20.25 9H19.5V20.25H20.25H21V9H20.25ZM3.75 20.25H4.5V9H3.75H3V20.25H3.75ZM3.75 9L4.22493 9.58047L12.4749 2.83047L12 2.25L11.5251 1.66953L3.27507 8.41953L3.75 9ZM12 2.25L11.5251 2.83047L19.7751 9.58047L20.25 9L20.7249 8.41953L12.4749 1.66953L12 2.25ZM9.75 14.75V15.5H14.25V14.75V14H9.75V14.75ZM14.25 14.75H13.5V20.25H14.25H15V14.75H14.25ZM9.75 20.25H10.5V14.75H9.75H9V20.25H9.75ZM9.75 20.25V19.5H3.75V20.25V21H9.75V20.25ZM14.25 20.25V21H20.25V20.25V19.5H14.25V20.25Z" fill="currentColor"/>',uu._solidSVG='<path d="M12.4749 1.66953C12.1987 1.44349 11.8013 1.44349 11.5251 1.66953L3.27507 8.41953C3.10097 8.56198 3 8.77505 3 9V20.25C3 20.6642 3.33579 21 3.75 21H9.25C9.66421 21 10 20.6642 10 20.25V15H14V20.25C14 20.6642 14.3358 21 14.75 21H20.25C20.6642 21 21 20.6642 21 20.25V9C21 8.77505 20.899 8.56198 20.7249 8.41953L12.4749 1.66953Z" fill="currentColor"/>',uu._name="home-open",uu._width=24,uu._height=24,uu._viewBox="0 0 24 24",uu=(0,s.Cc)([(0,C.Y$)("gds-icon-home-open")],uu);const pu=e=>{uu.define();const t=(0,n.p)("gds-icon-home-open"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let gu=class extends R.M{};gu._regularSVG='<path d="M19.25 7.69038L12 2.5L4.74997 7.6904M19.25 7.69038L21.5 9.30119M19.25 7.69038V20.25H4.74997V7.6904M4.74997 7.6904L2.5 9.30119" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',gu._solidSVG='<path d="M12.4366 1.89017C12.1756 1.70328 11.8245 1.70328 11.5635 1.89017L2.06347 8.69136C1.72667 8.93248 1.64911 9.40098 1.89023 9.73778C2.13135 10.0746 2.59984 10.1521 2.93664 9.91102L4.00003 9.14973V20.25C4.00003 20.6642 4.33582 21 4.75003 21H19.25C19.6642 21 20 20.6642 20 20.25V9.14971L21.0634 9.91102C21.4002 10.1521 21.8687 10.0746 22.1099 9.73778C22.351 9.40098 22.2734 8.93248 21.9366 8.69136L12.4366 1.89017Z" fill="currentColor"/>',gu._name="home-roof",gu._width=24,gu._height=24,gu._viewBox="0 0 24 24",gu=(0,s.Cc)([(0,C.Y$)("gds-icon-home-roof")],gu);const Mu=e=>{gu.define();const t=(0,n.p)("gds-icon-home-roof"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let mu=class extends R.M{};mu._regularSVG='<path d="M3.75 20.25H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.75 7.75V17.25H17.25V7.75H13.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.75 3.75V17.25H10.25V3.75H6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',mu._solidSVG='<path d="M6.75 3C6.33579 3 6 3.33579 6 3.75V17.25C6 17.6642 6.33579 18 6.75 18H10.25C10.6642 18 11 17.6642 11 17.25V3.75C11 3.33579 10.6642 3 10.25 3H6.75Z" fill="currentColor"/><path d="M13.75 7C13.3358 7 13 7.33579 13 7.75V17.25C13 17.6642 13.3358 18 13.75 18H17.25C17.6642 18 18 17.6642 18 17.25V7.75C18 7.33579 17.6642 7 17.25 7H13.75Z" fill="currentColor"/><path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75Z" fill="currentColor"/>',mu._name="horizontal-alignment-bottom",mu._width=24,mu._height=24,mu._viewBox="0 0 24 24",mu=(0,s.Cc)([(0,C.Y$)("gds-icon-horizontal-alignment-bottom")],mu);const Vu=e=>{mu.define();const t=(0,n.p)("gds-icon-horizontal-alignment-bottom"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let fu=class extends R.M{};fu._regularSVG='<path d="M12 12L5.75 8V2.75H18.25V8L12 12ZM12 12L18.25 16V21.25H5.75V16L12 12ZM20.25 21.25H3.75M20.25 2.75H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',fu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.5H3.75C3.33579 3.5 3 3.16421 3 2.75C3 2.33579 3.33579 2 3.75 2H20.25C20.6642 2 21 2.33579 21 2.75C21 3.16421 20.6642 3.5 20.25 3.5H19V8C19 8.25574 18.8697 8.49385 18.6543 8.6317L13.3913 12L18.6543 15.3683C18.8697 15.5062 19 15.7443 19 16V20.5H20.25C20.6642 20.5 21 20.8358 21 21.25C21 21.6642 20.6642 22 20.25 22H3.75C3.33579 22 3 21.6642 3 21.25C3 20.8358 3.33579 20.5 3.75 20.5H5V16C5 15.7443 5.13031 15.5062 5.34571 15.3683L10.6087 12L5.34571 8.6317C5.13031 8.49385 5 8.25574 5 8V3.5ZM6.5 7H17.5V3.5H6.5V7ZM17.5 16.4104V18H6.5V16.4104L12 12.8904L17.5 16.4104Z" fill="currentColor"/>',fu._name="hourglass",fu._width=24,fu._height=24,fu._viewBox="0 0 24 24",fu=(0,s.Cc)([(0,C.Y$)("gds-icon-hourglass")],fu);const Lu=e=>{fu.define();const t=(0,n.p)("gds-icon-hourglass"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let _u=class extends R.M{};_u._regularSVG='<path d="M3.75 3.75V3C3.33579 3 3 3.33579 3 3.75H3.75ZM20.25 3.75H21C21 3.33579 20.6642 3 20.25 3V3.75ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM8 12L8.53033 11.4697C8.23744 11.1768 7.76256 11.1768 7.46967 11.4697L8 12ZM3.75 3.75V4.5H20.25V3.75V3H3.75V3.75ZM20.25 3.75H19.5V20.25H20.25H21V3.75H20.25ZM3.75 16.25L4.28033 16.7803L8.53033 12.5303L8 12L7.46967 11.4697L3.21967 15.7197L3.75 16.25ZM3.75 20.25H4.5V16.25H3.75H3V20.25H3.75ZM3.75 16.25H4.5V3.75H3.75H3V16.25H3.75ZM8 12L7.46967 12.5303L15.7197 20.7803L16.25 20.25L16.7803 19.7197L8.53033 11.4697L8 12ZM20.25 20.25V19.5H16.25V20.25V21H20.25V20.25ZM16.25 20.25V19.5H3.75V20.25V21H16.25V20.25ZM16.5 9.5H15.75C15.75 10.1904 15.1904 10.75 14.5 10.75V11.5V12.25C16.0188 12.25 17.25 11.0188 17.25 9.5H16.5ZM14.5 11.5V10.75C13.8096 10.75 13.25 10.1904 13.25 9.5H12.5H11.75C11.75 11.0188 12.9812 12.25 14.5 12.25V11.5ZM12.5 9.5H13.25C13.25 8.80964 13.8096 8.25 14.5 8.25V7.5V6.75C12.9812 6.75 11.75 7.98122 11.75 9.5H12.5ZM14.5 7.5V8.25C15.1904 8.25 15.75 8.80964 15.75 9.5H16.5H17.25C17.25 7.98122 16.0188 6.75 14.5 6.75V7.5Z" fill="currentColor"/>',_u._solidSVG='<path d="M14.5 7C13.1193 7 12 8.11929 12 9.5C12 10.8807 13.1193 12 14.5 12C15.8807 12 17 10.8807 17 9.5C17 8.11929 15.8807 7 14.5 7Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM4.5 14.4393L7.46967 11.4697C7.76256 11.1768 8.23744 11.1768 8.53033 11.4697L16.5607 19.5H19.5V4.5H4.5V14.4393Z" fill="currentColor"/>',_u._name="images",_u._width=24,_u._height=24,_u._viewBox="0 0 24 24",_u=(0,s.Cc)([(0,C.Y$)("gds-icon-images")],_u);const Hu=e=>{_u.define();const t=(0,n.p)("gds-icon-images"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let vu=class extends R.M{};vu._regularSVG='<path d="M2 12.75H8.4125L9.95 14.75H14.05L15.5875 12.75H22M22.25 12.75L18.15 4.75H5.85L1.75 12.75V19.25H22.25V12.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',vu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5.39161 4H18.6084L23 12.569V20H1V12.569L5.39161 4ZM21.5 13.5V18.5H2.5V13.5H8.04306L9.58056 15.5H14.4194L15.9569 13.5H21.5Z" fill="currentColor"/>',vu._name="inbox-empty",vu._width=24,vu._height=24,vu._viewBox="0 0 24 24",vu=(0,s.Cc)([(0,C.Y$)("gds-icon-inbox-empty")],vu);const ku=e=>{vu.define();const t=(0,n.p)("gds-icon-inbox-empty"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let wu=class extends R.M{};wu._regularSVG='<path d="M5.75 7.75H10.25L12.25 20.25H3.75L5.75 7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5.25C8 4.14543 8.89543 3.25 10 3.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 13.75L15.5714 12V14.5L20.8214 12V20.75H12.5714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',wu._solidSVG='<path d="M8.75 5.25C8.75 4.55964 9.30964 4 10 4H19.25C19.6642 4 20 3.66421 20 3.25C20 2.83579 19.6642 2.5 19.25 2.5H10C8.48122 2.5 7.25 3.73122 7.25 5.25C7.25 5.66421 7.58579 6 8 6C8.41421 6 8.75 5.66421 8.75 5.25Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.75001 7C5.38153 7 5.06764 7.26766 5.00943 7.63151L3.00943 20.1315C2.97473 20.3484 3.03682 20.5695 3.17932 20.7366C3.32181 20.9037 3.53039 21 3.75001 21H12.25C12.3155 21 12.38 20.9914 12.4421 20.975C12.5037 20.9913 12.5682 21 12.6345 21H20.25C20.6642 21 21 20.6642 21 20.25V11.5C21 11.2426 20.868 11.0032 20.6504 10.8658C20.4328 10.7284 20.1599 10.7122 19.9276 10.8229L15.75 12.8122V11.5C15.75 11.2411 15.6165 11.0006 15.3969 10.8636C15.1772 10.7266 14.9024 10.7126 14.67 10.8265L11.7321 12.2661L10.9906 7.63151C10.9324 7.26766 10.6185 7 10.25 7H5.75001ZM4.62954 19.5L6.38954 8.5H9.61047L11.3705 19.5H4.62954Z" fill="currentColor"/>',wu._name="industry",wu._width=24,wu._height=24,wu._viewBox="0 0 24 24",wu=(0,s.Cc)([(0,C.Y$)("gds-icon-industry")],wu);const bu=e=>{wu.define();const t=(0,n.p)("gds-icon-industry"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Zu=class extends R.M{};Zu._regularSVG='<path d="M4.75 10.9853V2.75H19.25V10.9853M9.75 7.75H14.25M2.75 10.75V20.25H21.25V10.75L12 13.75L2.75 10.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Zu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75V10.3669L21.0186 10.0366C21.2469 9.96254 21.4969 10.0022 21.691 10.1434C21.8851 10.2845 22 10.51 22 10.75V20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25V10.75C2 10.51 2.11487 10.2845 2.309 10.1434C2.50313 10.0022 2.75308 9.96254 2.98138 10.0366L4 10.3669V2.75ZM5.5 10.8534L12 12.9615L18.5 10.8534V3.5H5.5V10.8534ZM9 7.75C9 7.33579 9.33579 7 9.75 7H14.25C14.6642 7 15 7.33579 15 7.75C15 8.16421 14.6642 8.5 14.25 8.5H9.75C9.33579 8.5 9 8.16421 9 7.75Z" fill="currentColor"/>',Zu._name="invite",Zu._width=24,Zu._height=24,Zu._viewBox="0 0 24 24",Zu=(0,s.Cc)([(0,C.Y$)("gds-icon-invite")],Zu);const yu=e=>{Zu.define();const t=(0,n.p)("gds-icon-invite"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let xu=class extends R.M{};xu._regularSVG='<path d="M4.75 11.25V3.75H15L19.25 8V11.25M13.75 4.25V9.25H18.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 14.75V18.75C6.5 19.5784 5.82843 20.25 5 20.25H4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9.5 20.25V14.75H11.25C12.0784 14.75 12.75 15.4216 12.75 16.25C12.75 17.0784 12.0784 17.75 11.25 17.75H10.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.6751 15.1739C18.2838 14.7915 17.5897 14.6985 17.1752 14.7239C16.0285 14.7939 15 15.9625 15 17.5494C15 19.1363 15.9777 20.28 17.3299 20.28C18.0003 20.2718 18.7897 20.0755 19.25 19.573V17.8261H18.1561" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',xu._solidSVG='<path d="M13 3H4.75C4.33579 3 4 3.33579 4 3.75V12H20V10H13.75C13.3358 10 13 9.66421 13 9.25V3Z" fill="currentColor"/><path d="M20 8.5V8C20 7.80109 19.921 7.61032 19.7803 7.46967L15.5303 3.21967C15.3897 3.07902 15.1989 3 15 3H14.5V8.5H20Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 14C6.91421 14 7.25 14.3358 7.25 14.75V18.75C7.25 19.9926 6.24264 21 5 21H4.5C4.08579 21 3.75 20.6642 3.75 20.25C3.75 19.8358 4.08579 19.5 4.5 19.5H5C5.41421 19.5 5.75 19.1642 5.75 18.75V14.75C5.75 14.3358 6.08579 14 6.5 14Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 14.75C8.75 14.3358 9.08579 14 9.5 14H11.25C12.4926 14 13.5 15.0074 13.5 16.25C13.5 17.4926 12.4926 18.5 11.25 18.5H10.25V20.25C10.25 20.6642 9.91421 21 9.5 21C9.08579 21 8.75 20.6642 8.75 20.25V14.75ZM10.25 17H11.25C11.6642 17 12 16.6642 12 16.25C12 15.8358 11.6642 15.5 11.25 15.5H10.25V17Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7537 15.524C17.5581 15.4756 17.3575 15.4641 17.2209 15.4725C16.5734 15.512 15.75 16.2463 15.75 17.5494C15.75 18.8354 16.4961 19.5275 17.3256 19.53C17.784 19.5237 18.2137 19.4123 18.5 19.2287V18.5761H18.1561C17.7419 18.5761 17.4061 18.2403 17.4061 17.8261C17.4061 17.4119 17.7419 17.0761 18.1561 17.0761H19.25C19.6642 17.0761 20 17.4119 20 17.8261V19.573C20 19.7606 19.9297 19.9414 19.803 20.0797C19.1385 20.8051 18.0966 21.0207 17.3391 21.0299L17.3299 21.03C15.4566 21.03 14.25 19.4349 14.25 17.5494C14.25 15.6788 15.4836 14.0758 17.1294 13.9752C17.4074 13.9583 17.7611 13.9806 18.114 14.0679C18.4605 14.1537 18.8732 14.3188 19.1993 14.6375C19.4955 14.9271 19.501 15.4019 19.2115 15.6981C18.9219 15.9944 18.4471 15.9998 18.1509 15.7103C18.0857 15.6466 17.9557 15.574 17.7537 15.524Z" fill="currentColor"/>',xu._name="jpg",xu._width=24,xu._height=24,xu._viewBox="0 0 24 24",xu=(0,s.Cc)([(0,C.Y$)("gds-icon-jpg")],xu);const Su=e=>{xu.define();const t=(0,n.p)("gds-icon-jpg"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let $u=class extends R.M{};$u._regularSVG='<path d="M1.75 12C1.75 14.8995 4.10051 17.25 7 17.25C8.69095 17.25 10.1952 16.4506 11.1554 15.2091C11.3677 14.9345 11.6844 14.75 12.0315 14.75H13.7132C13.9006 14.75 14.0843 14.6973 14.2432 14.598L15.47 13.8312C15.7943 13.6286 16.2057 13.6286 16.53 13.8312L17.7568 14.598C17.9157 14.6973 18.0994 14.75 18.2868 14.75H20.0261C20.3261 14.75 20.6101 14.6154 20.8001 14.3832L22.2319 12.6332C22.5333 12.2649 22.5333 11.7351 22.2319 11.3668L20.8001 9.61676C20.6101 9.38463 20.3261 9.25 20.0261 9.25H12.0315C11.6844 9.25 11.3677 9.06549 11.1554 8.79095C10.1952 7.54942 8.69095 6.75 7 6.75C4.10051 6.75 1.75 9.10051 1.75 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7.75 12C7.75 12.4142 7.41421 12.75 7 12.75C6.58579 12.75 6.25 12.4142 6.25 12C6.25 11.5858 6.58579 11.25 7 11.25C7.41421 11.25 7.75 11.5858 7.75 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',$u._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 8.68629 3.68629 6 7 6C8.93293 6 10.6525 6.91485 11.7486 8.33211C11.8462 8.4583 11.9578 8.5 12.0315 8.5H20.0261C20.551 8.5 21.0482 8.7356 21.3805 9.14183L22.8124 10.8918C23.3398 11.5365 23.3398 12.4635 22.8124 13.1082L21.3805 14.8582C21.0482 15.2644 20.551 15.5 20.0261 15.5H18.2868C17.9588 15.5 17.6374 15.4078 17.3593 15.234L16.1325 14.4672C16.0514 14.4166 15.9486 14.4166 15.8675 14.4672L14.6407 15.234C14.3626 15.4078 14.0412 15.5 13.7132 15.5H12.0315C11.9578 15.5 11.8462 15.5417 11.7486 15.6679C10.6525 17.0851 8.93293 18 7 18C3.68629 18 1 15.3137 1 12ZM5.5 12C5.5 11.1716 6.17157 10.5 7 10.5C7.82843 10.5 8.5 11.1716 8.5 12C8.5 12.8284 7.82843 13.5 7 13.5C6.17157 13.5 5.5 12.8284 5.5 12Z" fill="currentColor"/>',$u._name="key",$u._width=24,$u._height=24,$u._viewBox="0 0 24 24",$u=(0,s.Cc)([(0,C.Y$)("gds-icon-key")],$u);const Gu=e=>{$u.define();const t=(0,n.p)("gds-icon-key"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ju=class extends R.M{};ju._regularSVG='<path d="M3.75 3.75V9C3.75 10.7949 5.20507 12.25 7 12.25C8.79493 12.25 10.25 10.7949 10.25 9V3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M7 12.25V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M17 12.5V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M20.5 8.00758C20.5 10.4238 18.933 12.25 17 12.25C15.067 12.25 13.5 10.4238 13.5 8.00758C13.5 5.59133 15.067 3.5 17 3.5C18.933 3.5 20.5 5.59133 20.5 8.00758Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 3.75V9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>',ju._solidSVG='<path d="M17 2.75C15.7463 2.75 14.669 3.42888 13.9303 4.39093C13.1911 5.35359 12.75 6.64303 12.75 8.00758C12.75 10.4237 14.1789 12.5161 16.25 12.927V21H17.75V12.927C19.8211 12.5161 21.25 10.4237 21.25 8.00758C21.25 6.64303 20.8089 5.35359 20.0697 4.39093C19.331 3.42888 18.2537 2.75 17 2.75Z" fill="currentColor"/><path d="M4.5 3H3V9C3 10.9528 4.39935 12.5787 6.25 12.9298V21H7.75V12.9298C9.60065 12.5787 11 10.9528 11 9V3H9.5V9C9.5 10.3807 8.38071 11.5 7 11.5C5.61929 11.5 4.5 10.3807 4.5 9V3Z" fill="currentColor"/><path d="M7.75 3H6.25V10H7.75V3Z" fill="currentColor"/>',ju._name="knife-spoon",ju._width=24,ju._height=24,ju._viewBox="0 0 24 24",ju=(0,s.Cc)([(0,C.Y$)("gds-icon-knife-spoon")],ju);const Eu=e=>{ju.define();const t=(0,n.p)("gds-icon-knife-spoon"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Bu=class extends R.M{};Bu._regularSVG='<path d="M8.75 6.75V11C7.57396 12.4701 5.69652 14.1135 4.99696 16.0714M8.75 6.75H15.25M8.75 6.75H7.75M15.25 6.75V11C16.426 12.4701 18.3035 14.1135 19.003 16.0714M15.25 6.75H16.25M19.003 16.0714C19.1596 16.5096 19.25 16.9581 19.25 17.4162C19.25 19.5336 17.5336 21.25 15.4162 21.25H8.58376C6.46643 21.25 4.75 19.5336 4.75 17.4162C4.75 16.9581 4.84041 16.5096 4.99696 16.0714M19.003 16.0714C19.003 16.0714 16.3242 16.6356 14.5893 16.5893C12.5276 16.5343 11.4724 15.6086 9.41071 15.5536C7.67583 15.5073 4.99696 16.0714 4.99696 16.0714M10.25 4C10.25 4.13807 10.1381 4.25 10 4.25M10.25 4C10.25 3.86193 10.1381 3.75 10 3.75M10.25 4H10M10 4.25C9.86193 4.25 9.75 4.13807 9.75 4M10 4.25V4M9.75 4C9.75 3.86193 9.86193 3.75 10 3.75M9.75 4H10M10 3.75V4M10 4L9.82322 4.17678M10 4L10.1768 3.82322M10 4L9.82322 3.82322M10 4L10.1768 4.17678M10.1768 3.82322C10.2744 3.92085 10.2744 4.07915 10.1768 4.17678M10.1768 3.82322C10.0791 3.72559 9.92085 3.72559 9.82322 3.82322M10.1768 4.17678C10.0791 4.27441 9.92085 4.27441 9.82322 4.17678M9.82322 4.17678C9.72559 4.07915 9.72559 3.92085 9.82322 3.82322M14.25 2.5C14.25 2.91421 13.9142 3.25 13.5 3.25C13.0858 3.25 12.75 2.91421 12.75 2.5C12.75 2.08579 13.0858 1.75 13.5 1.75C13.9142 1.75 14.25 2.08579 14.25 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Bu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.75C7 6.33579 7.33579 6 7.75 6H16.25C16.6642 6 17 6.33579 17 6.75C17 7.16421 16.6642 7.5 16.25 7.5H16V10.7326C16.2388 11.0193 16.5054 11.3176 16.7916 11.6355C16.8224 11.6697 16.8534 11.7041 16.8846 11.7387C17.207 12.0967 17.5496 12.4769 17.8799 12.8709C18.6004 13.7301 19.314 14.7126 19.7093 15.8191C19.8897 16.3239 20 16.8582 20 17.4162C20 19.9478 17.9478 22 15.4162 22H8.58376C6.05222 22 4 19.9478 4 17.4162C4 16.8582 4.11031 16.3239 4.29069 15.8191C4.68603 14.7126 5.39964 13.7301 6.1201 12.8709C6.45043 12.4769 6.79298 12.0967 7.1154 11.7387C7.14659 11.7041 7.1776 11.6697 7.2084 11.6355C7.49455 11.3176 7.76115 11.0193 8 10.7326V7.5H7.75C7.33579 7.5 7 7.16421 7 6.75ZM9.5 7.5V11C9.5 11.1703 9.44204 11.3355 9.33565 11.4685C9.02609 11.8555 8.6742 12.2492 8.32324 12.639C8.29282 12.6728 8.26239 12.7066 8.23196 12.7404C7.90671 13.1015 7.5818 13.4622 7.2695 13.8347C6.92546 14.245 6.60957 14.6549 6.34169 15.0689C6.3742 15.0638 6.40703 15.0588 6.44015 15.0537C7.3346 14.9173 8.49301 14.7788 9.43071 14.8038C10.5667 14.8341 11.4299 15.1058 12.2041 15.3494L12.2251 15.356C13.0039 15.6011 13.6939 15.8151 14.6093 15.8396C15.4065 15.8608 16.4549 15.7403 17.3336 15.6063C17.5451 15.574 17.7441 15.5414 17.924 15.5105C17.6107 14.9453 17.1964 14.3903 16.7305 13.8347C16.4182 13.4622 16.0933 13.1015 15.7681 12.7404C15.7376 12.7066 15.7072 12.6728 15.6768 12.639C15.3258 12.2492 14.9739 11.8555 14.6643 11.4685C14.558 11.3355 14.5 11.1703 14.5 11V7.5H9.5Z" fill="currentColor"/><path d="M11 4C11 4.55228 10.5523 5 10 5C9.44772 5 9 4.55228 9 4C9 3.44772 9.44772 3 10 3C10.5523 3 11 3.44772 11 4Z" fill="currentColor"/><path d="M15 2.5C15 3.32843 14.3284 4 13.5 4C12.6716 4 12 3.32843 12 2.5C12 1.67157 12.6716 1 13.5 1C14.3284 1 15 1.67157 15 2.5Z" fill="currentColor"/>',Bu._name="lab",Bu._width=24,Bu._height=24,Bu._viewBox="0 0 24 24",Bu=(0,s.Cc)([(0,C.Y$)("gds-icon-lab")],Bu);const qu=e=>{Bu.define();const t=(0,n.p)("gds-icon-lab"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Nu=class extends R.M{};Nu._regularSVG='<path d="M12 2.75V20.25M12 20.25H6.75M12 20.25H17.25M2.75 5.75H8L10 4.75H14L16 5.75H21.25M5.5 5.75L2.5 15.25C4.57693 16.4267 6.42307 16.4267 8.5 15.25L5.5 5.75ZM18.5 5.75L15.5 15.25C17.5769 16.4267 19.4231 16.4267 21.5 15.25L18.5 5.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Nu._solidSVG='<path d="M12.7501 2.75C12.7501 2.33579 12.4143 2 12.0001 2C11.5859 2 11.2501 2.33579 11.2501 2.75V4H10.0001C9.88365 4 9.76882 4.02711 9.66468 4.07918L7.82304 5H2.75009C2.33587 5 2.00009 5.33579 2.00009 5.75C2.00009 6.16421 2.33587 6.5 2.75009 6.5H4.47674L1.7849 15.0242C1.67828 15.3618 1.82231 15.728 2.13038 15.9025C3.25339 16.5388 4.36077 16.8825 5.50009 16.8825C6.6394 16.8825 7.74678 16.5388 8.86979 15.9025C9.17786 15.728 9.3219 15.3618 9.21527 15.0242L6.52344 6.5H8.00009C8.11652 6.5 8.23135 6.47289 8.3355 6.42082L10.1771 5.5H11.2501V19.5H6.75009C6.33587 19.5 6.00009 19.8358 6.00009 20.25C6.00009 20.6642 6.33587 21 6.75009 21H17.2501C17.6643 21 18.0001 20.6642 18.0001 20.25C18.0001 19.8358 17.6643 19.5 17.2501 19.5H12.7501V5.5H13.823L15.6647 6.42082C15.7688 6.47289 15.8837 6.5 16.0001 6.5H17.4767L14.7849 15.0242C14.6783 15.3618 14.8223 15.728 15.1304 15.9025C16.2534 16.5388 17.3608 16.8825 18.5001 16.8825C19.6394 16.8825 20.7468 16.5388 21.8698 15.9025C22.1779 15.728 22.3219 15.3618 22.2153 15.0242L19.5234 6.5H21.2501C21.6643 6.5 22.0001 6.16421 22.0001 5.75C22.0001 5.33579 21.6643 5 21.2501 5H16.1771L14.3355 4.07918C14.2314 4.02711 14.1165 4 14.0001 4H12.7501V2.75Z" fill="currentColor"/>',Nu._name="law",Nu._width=24,Nu._height=24,Nu._viewBox="0 0 24 24",Nu=(0,s.Cc)([(0,C.Y$)("gds-icon-law")],Nu);const Iu=e=>{Nu.define();const t=(0,n.p)("gds-icon-law"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Yu=class extends R.M{};Yu._regularSVG='<path d="M8.5 9.25H9M13.5 9.25H14M17.4492 12.7507C17.1168 15.1864 15.1897 17.1146 12.7545 17.4487M9.25 9.25C9.25 9.52614 9.02614 9.75 8.75 9.75C8.47386 9.75 8.25 9.52614 8.25 9.25C8.25 8.97386 8.47386 8.75 8.75 8.75C9.02614 8.75 9.25 8.97386 9.25 9.25ZM14.25 9.25C14.25 9.52614 14.0261 9.75 13.75 9.75C13.4739 9.75 13.25 9.52614 13.25 9.25C13.25 8.97386 13.4739 8.75 13.75 8.75C14.0261 8.75 14.25 8.97386 14.25 9.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Yu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8.75 10.5C9.44036 10.5 10 9.94036 10 9.25C10 8.55964 9.44036 8 8.75 8C8.05964 8 7.5 8.55964 7.5 9.25C7.5 9.94036 8.05964 10.5 8.75 10.5ZM15 9.25C15 9.94036 14.4404 10.5 13.75 10.5C13.0596 10.5 12.5 9.94036 12.5 9.25C12.5 8.55964 13.0596 8 13.75 8C14.4404 8 15 8.55964 15 9.25ZM18.1915 12.8575C18.2479 12.4471 17.9609 12.0688 17.5505 12.0124C17.1402 11.956 16.7618 12.243 16.7055 12.6534C16.4168 14.7547 14.7511 16.4193 12.6492 16.7061C12.2388 16.7621 11.9515 17.1402 12.0075 17.5506C12.0635 17.961 12.4416 18.2483 12.852 18.1923C15.6209 17.8144 17.8113 15.6257 18.1915 12.8575Z" fill="currentColor"/>',Yu._name="leisure",Yu._width=24,Yu._height=24,Yu._viewBox="0 0 24 24",Yu=(0,s.Cc)([(0,C.Y$)("gds-icon-leisure")],Yu);const zu=e=>{Yu.define();const t=(0,n.p)("gds-icon-leisure"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Au=class extends R.M{};Au._regularSVG='<path d="M8.74799 17.75V16.4838C8.33548 16.2765 7.94548 16.031 7.58263 15.7519C5.85907 14.4264 4.74829 12.3433 4.74829 10.0009C4.74829 5.99633 7.99462 2.75 11.9992 2.75C16.0037 2.75 19.2501 5.99633 19.2501 10.0009C19.2501 12.3433 18.1393 14.4264 16.4157 15.7519C16.0529 16.031 15.6629 16.2765 15.2504 16.4838V17.75M8.74799 17.75V18.9988C8.74799 20.7944 10.2036 22.25 11.9992 22.25C13.7948 22.25 15.2504 20.7944 15.2504 18.9988V17.75M8.74799 17.75H15.2504" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',Au._solidSVG='<path d="M3.99823 10.0009C3.99823 5.58212 7.58035 2 11.9991 2C16.4179 2 20 5.58212 20 10.0009C20 12.5861 18.7731 14.885 16.8729 16.3465C16.5959 16.5595 16.3045 16.7549 16.0003 16.9308V17H7.99793V16.9308C7.69377 16.7549 7.40234 16.5595 7.12534 16.3465C5.22513 14.885 3.99823 12.5861 3.99823 10.0009Z" fill="currentColor"/><path d="M7.99793 18.5V18.9988C7.99793 21.2086 9.78932 23 11.9991 23C14.2089 23 16.0003 21.2086 16.0003 18.9988V18.5H7.99793Z" fill="currentColor"/>',Au._name="light-bulb-simple",Au._width=24,Au._height=24,Au._viewBox="0 0 24 24",Au=(0,s.Cc)([(0,C.Y$)("gds-icon-light-bulb-simple")],Au);const Tu=e=>{Au.define();const t=(0,n.p)("gds-icon-light-bulb-simple"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ru=class extends R.M{};Ru._regularSVG='<path d="M8.74799 15.4838V18.25H15.2504V15.4838M8.74799 15.4838C8.33548 15.2765 7.94548 15.031 7.58263 14.7519C5.85907 13.4264 4.74829 11.3433 4.74829 9.00089C4.74829 4.99633 7.99462 1.75 11.9992 1.75C16.0037 1.75 19.2501 4.99633 19.2501 9.00089C19.2501 11.3433 18.1393 13.4264 16.4157 14.7519C16.0529 15.031 15.6629 15.2765 15.2504 15.4838M8.74799 15.4838H15.2504M8.75006 21.25H15.2501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ru._solidSVG='<path d="M19.9998 9.00089C19.9998 11.249 19.072 13.2807 17.5803 14.7334H6.41753C4.9259 13.2807 3.99805 11.249 3.99805 9.00089C3.99805 4.58212 7.58016 1 11.9989 1C16.4177 1 19.9998 4.58212 19.9998 9.00089Z" fill="currentColor"/><path d="M7.99775 18.25V16.2334H16.0001V18.25C16.0001 18.6642 15.6643 19 15.2501 19H8.74775C8.33354 19 7.99775 18.6642 7.99775 18.25Z" fill="currentColor"/><path d="M8.75 20.5C8.33579 20.5 8 20.8358 8 21.25C8 21.6642 8.33579 22 8.75 22H15.25C15.6642 22 16 21.6642 16 21.25C16 20.8358 15.6642 20.5 15.25 20.5H8.75Z" fill="currentColor"/>',Ru._name="light-bulb",Ru._width=24,Ru._height=24,Ru._viewBox="0 0 24 24",Ru=(0,s.Cc)([(0,C.Y$)("gds-icon-light-bulb")],Ru);const Ou=e=>{Ru.define();const t=(0,n.p)("gds-icon-light-bulb"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Wu=class extends R.M{};Wu._regularSVG='<path d="M3.75 12.75L8.75 2.75H18L15.25 8.25H21.25L6.75 21.25L8.89706 12.75H3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Wu._solidSVG='<path d="M8.75 2C8.46592 2 8.20622 2.1605 8.07918 2.41459L3.07918 12.4146C2.96293 12.6471 2.97536 12.9232 3.11201 13.1443C3.24867 13.3654 3.49007 13.5 3.75 13.5H7.93406L6.02284 21.0663C5.94205 21.3862 6.07973 21.7212 6.36205 21.8919C6.64437 22.0625 7.00504 22.0286 7.25066 21.8084L21.7507 8.80843C21.9821 8.60095 22.0615 8.27225 21.9505 7.98197C21.8394 7.69169 21.5608 7.5 21.25 7.5H16.4635L18.6708 3.08541C18.7871 2.85292 18.7746 2.57681 18.638 2.3557C18.5013 2.13459 18.2599 2 18 2H8.75Z" fill="currentColor"/>',Wu._name="lightning",Wu._width=24,Wu._height=24,Wu._viewBox="0 0 24 24",Wu=(0,s.Cc)([(0,C.Y$)("gds-icon-lightning")],Wu);const Pu=e=>{Wu.define();const t=(0,n.p)("gds-icon-lightning"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Fu=class extends R.M{};Fu._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V19.25C3.5 19.6642 3.16421 20 2.75 20C2.33579 20 2 19.6642 2 19.25V4.75C2 4.33579 2.33579 4 2.75 4ZM8.91602 8C9.33023 8 9.66602 8.33579 9.66602 8.75V19.25C9.66602 19.6642 9.33023 20 8.91602 20C8.5018 20 8.16602 19.6642 8.16602 19.25V8.75C8.16602 8.33579 8.5018 8 8.91602 8ZM15.082 12C15.4962 12 15.832 12.3358 15.832 12.75V19.25C15.832 19.6642 15.4962 20 15.082 20C14.6678 20 14.332 19.6642 14.332 19.25V12.75C14.332 12.3358 14.6678 12 15.082 12ZM21.248 16C21.6623 16 21.998 16.3358 21.998 16.75V19.25C21.998 19.6642 21.6623 20 21.248 20C20.8338 20 20.498 19.6642 20.498 19.25V16.75C20.498 16.3358 20.8338 16 21.248 16Z" fill="currentColor"/>',Fu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V19.25C3.5 19.6642 3.16421 20 2.75 20C2.33579 20 2 19.6642 2 19.25V4.75C2 4.33579 2.33579 4 2.75 4ZM8.91602 8C9.33023 8 9.66602 8.33579 9.66602 8.75V19.25C9.66602 19.6642 9.33023 20 8.91602 20C8.5018 20 8.16602 19.6642 8.16602 19.25V8.75C8.16602 8.33579 8.5018 8 8.91602 8ZM15.082 12C15.4962 12 15.832 12.3358 15.832 12.75V19.25C15.832 19.6642 15.4962 20 15.082 20C14.6678 20 14.332 19.6642 14.332 19.25V12.75C14.332 12.3358 14.6678 12 15.082 12ZM21.248 16C21.6623 16 21.998 16.3358 21.998 16.75V19.25C21.998 19.6642 21.6623 20 21.248 20C20.8338 20 20.498 19.6642 20.498 19.25V16.75C20.498 16.3358 20.8338 16 21.248 16Z" fill="currentColor"/>',Fu._name="line-chart-four",Fu._width=24,Fu._height=24,Fu._viewBox="0 0 24 24",Fu=(0,s.Cc)([(0,C.Y$)("gds-icon-line-chart-four")],Fu);const Du=e=>{Fu.define();const t=(0,n.p)("gds-icon-line-chart-four"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ku=class extends R.M{};Ku._regularSVG='<path d="M9.25 10.75V16.25M14.25 4.75V16.25M19.25 12.75V16.25M3.75 3.75V20.25H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ku._solidSVG='<path d="M4.5 3.75C4.5 3.33579 4.16421 3 3.75 3C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21H21.25C21.6642 21 22 20.6642 22 20.25C22 19.8358 21.6642 19.5 21.25 19.5H4.5V3.75Z" fill="currentColor"/><path d="M15 4.75C15 4.33579 14.6642 4 14.25 4C13.8358 4 13.5 4.33579 13.5 4.75V16.25C13.5 16.6642 13.8358 17 14.25 17C14.6642 17 15 16.6642 15 16.25V4.75Z" fill="currentColor"/><path d="M10 10.75C10 10.3358 9.66421 10 9.25 10C8.83579 10 8.5 10.3358 8.5 10.75V16.25C8.5 16.6642 8.83579 17 9.25 17C9.66421 17 10 16.6642 10 16.25V10.75Z" fill="currentColor"/><path d="M20 12.75C20 12.3358 19.6642 12 19.25 12C18.8358 12 18.5 12.3358 18.5 12.75V16.25C18.5 16.6642 18.8358 17 19.25 17C19.6642 17 20 16.6642 20 16.25V12.75Z" fill="currentColor"/>',Ku._name="line-chart-one",Ku._width=24,Ku._height=24,Ku._viewBox="0 0 24 24",Ku=(0,s.Cc)([(0,C.Y$)("gds-icon-line-chart-one")],Ku);const Uu=e=>{Ku.define();const t=(0,n.p)("gds-icon-line-chart-one"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ju=class extends R.M{};Ju._regularSVG='<path d="M2.75 16.75V19.25M8.91602 12.75L8.91602 19.25M15.082 8.75V19.25M21.248 4.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ju._solidSVG='<path d="M21.998 4.75C21.998 4.33579 21.6623 4 21.248 4C20.8338 4 20.498 4.33579 20.498 4.75V19.25C20.498 19.6642 20.8338 20 21.248 20C21.6623 20 21.998 19.6642 21.998 19.25V4.75Z" fill="currentColor"/><path d="M15.082 8C15.4962 8 15.832 8.33579 15.832 8.75V19.25C15.832 19.6642 15.4962 20 15.082 20C14.6678 20 14.332 19.6642 14.332 19.25V8.75C14.332 8.33579 14.6678 8 15.082 8Z" fill="currentColor"/><path d="M9.66602 12.75C9.66602 12.3358 9.33023 12 8.91602 12C8.5018 12 8.16602 12.3358 8.16602 12.75L8.16602 19.25C8.16602 19.6642 8.5018 20 8.91602 20C9.33023 20 9.66602 19.6642 9.66602 19.25L9.66602 12.75Z" fill="currentColor"/><path d="M3.5 16.75C3.5 16.3358 3.16421 16 2.75 16C2.33579 16 2 16.3358 2 16.75V19.25C2 19.6642 2.33579 20 2.75 20C3.16421 20 3.5 19.6642 3.5 19.25V16.75Z" fill="currentColor"/>',Ju._name="line-chart-three",Ju._width=24,Ju._height=24,Ju._viewBox="0 0 24 24",Ju=(0,s.Cc)([(0,C.Y$)("gds-icon-line-chart-three")],Ju);const Qu=e=>{Ju.define();const t=(0,n.p)("gds-icon-line-chart-three"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Xu=class extends R.M{};Xu._regularSVG='<path d="M2.75 10.75V19.25M8.91602 4.75V19.25M15.082 13.75V19.25M21.248 7.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Xu._solidSVG='<path d="M9.66602 4.75C9.66602 4.33579 9.33023 4 8.91602 4C8.5018 4 8.16602 4.33579 8.16602 4.75V19.25C8.16602 19.6642 8.5018 20 8.91602 20C9.33023 20 9.66602 19.6642 9.66602 19.25V4.75Z" fill="currentColor"/><path d="M3.5 10.75C3.5 10.3358 3.16421 10 2.75 10C2.33579 10 2 10.3358 2 10.75V19.25C2 19.6642 2.33579 20 2.75 20C3.16421 20 3.5 19.6642 3.5 19.25V10.75Z" fill="currentColor"/><path d="M15.082 13C15.4962 13 15.832 13.3358 15.832 13.75V19.25C15.832 19.6642 15.4962 20 15.082 20C14.6678 20 14.332 19.6642 14.332 19.25V13.75C14.332 13.3358 14.6678 13 15.082 13Z" fill="currentColor"/><path d="M21.998 7.75C21.998 7.33579 21.6623 7 21.248 7C20.8338 7 20.498 7.33579 20.498 7.75V19.25C20.498 19.6642 20.8338 20 21.248 20C21.6623 20 21.998 19.6642 21.998 19.25V7.75Z" fill="currentColor"/>',Xu._name="line-chart-two",Xu._width=24,Xu._height=24,Xu._viewBox="0 0 24 24",Xu=(0,s.Cc)([(0,C.Y$)("gds-icon-line-chart-two")],Xu);const ep=e=>{Xu.define();const t=(0,n.p)("gds-icon-line-chart-two"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let tp=class extends R.M{};tp._regularSVG='<path d="M12 14V17M16.25 9.75V7C16.25 4.65279 14.3472 2.75 12 2.75C9.65279 2.75 7.75 4.65279 7.75 7V9.75M4.75 9.75H19.25V21.25H4.75V9.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',tp._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C9.23858 2 7 4.23858 7 7V9H4.75C4.33579 9 4 9.33579 4 9.75V21.25C4 21.6642 4.33579 22 4.75 22H19.25C19.6642 22 20 21.6642 20 21.25V9.75C20 9.33579 19.6642 9 19.25 9H17V7C17 4.23858 14.7614 2 12 2ZM15.5 9V7C15.5 5.067 13.933 3.5 12 3.5C10.067 3.5 8.5 5.067 8.5 7V9H15.5ZM12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V14C11.25 13.5858 11.5858 13.25 12 13.25Z" fill="currentColor"/>',tp._name="lock",tp._width=24,tp._height=24,tp._viewBox="0 0 24 24",tp=(0,s.Cc)([(0,C.Y$)("gds-icon-lock")],tp);const rp=e=>{tp.define();const t=(0,n.p)("gds-icon-lock"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let op=class extends R.M{};op._regularSVG='<path d="M21.25 13.75V4.75H2.75V13.75M1.75 16.75V18.25C1.75 18.8023 2.19772 19.25 2.75 19.25H21.25C21.8023 19.25 22.25 18.8023 22.25 18.25V16.75H15.075L14.1 17.25H10L8.925 16.75H1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',op._solidSVG='<path d="M1.75 17C1.33579 17 1 17.3358 1 17.75V18.25C1 19.2165 1.7835 20 2.75 20H21.25C22.2165 20 23 19.2165 23 18.25V17.75C23 17.3358 22.6642 17 22.25 17H15.075C14.956 17 14.8387 17.0283 14.7328 17.0826L14.08 17.4174C13.9741 17.4717 13.8568 17.5 13.7378 17.5H10.3318C10.2225 17.5 10.1145 17.4761 10.0155 17.43L9.2413 17.07C9.14222 17.0239 9.03427 17 8.925 17H1.75Z" fill="currentColor"/><path d="M2.75 4C2.33579 4 2 4.33579 2 4.75V15.25C2 15.6642 2.33579 16 2.75 16H21.25C21.6642 16 22 15.6642 22 15.25V4.75C22 4.33579 21.6642 4 21.25 4H2.75Z" fill="currentColor"/>',op._name="macbook-air",op._width=24,op._height=24,op._viewBox="0 0 24 24",op=(0,s.Cc)([(0,C.Y$)("gds-icon-macbook-air")],op);const sp=e=>{op.define();const t=(0,n.p)("gds-icon-macbook-air"),r={...e,class:e.className};return(0,i.createElement)(t,r)},np=e=>{gs.define();const t=(0,n.p)("gds-icon-magnifying-glass"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let lp=class extends R.M{};lp._regularSVG='<path d="M14.5694 16.1111C18.259 16.1111 21.25 13.1201 21.25 9.43056C21.25 8.66012 21.1196 7.92014 20.8796 7.23149L18.1667 9.94444C17.0314 11.0797 15.1908 11.0797 14.0556 9.94444C12.9203 8.80919 12.9203 6.96858 14.0556 5.83333L16.7685 3.12038C16.0799 2.88042 15.3399 2.75 14.5694 2.75C10.8799 2.75 7.88889 5.74099 7.88889 9.43056C7.88889 10.3416 8.07124 11.21 8.40145 12.0013L2.75 17.6528L6.34722 21.25L11.9987 15.5986C12.79 15.9288 13.6584 16.1111 14.5694 16.1111Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',lp._solidSVG='<path d="M16.8878 3.11219C17.1388 2.86121 17.0545 2.43727 16.7154 2.33256C16.0152 2.11639 15.2712 2 14.5 2C10.3579 2 7.00001 5.35786 7.00001 9.5C7.00001 10.5332 7.20892 11.5176 7.5868 12.4132L2.03034 17.9697C1.73745 18.2626 1.73745 18.7374 2.03034 19.0303L4.96968 21.9697C5.26257 22.2626 5.73745 22.2626 6.03034 21.9697L11.5868 16.4132C12.4825 16.7911 13.4668 17 14.5 17C18.6421 17 22 13.6421 22 9.5C22 8.72883 21.8836 7.98484 21.6674 7.28464C21.5627 6.9455 21.1388 6.86121 20.8878 7.11219L18 10C16.8954 11.1046 15.1046 11.1046 14 10C12.8954 8.89543 12.8954 7.10457 14 6L16.8878 3.11219Z" fill="currentColor"/>',lp._name="maintenance",lp._width=24,lp._height=24,lp._viewBox="0 0 24 24",lp=(0,s.Cc)([(0,C.Y$)("gds-icon-maintenance")],lp);const ip=e=>{lp.define();const t=(0,n.p)("gds-icon-maintenance"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ap=class extends R.M{};ap._regularSVG='<path d="M14.75 10C14.75 11.5188 13.5188 12.75 12 12.75C10.4812 12.75 9.25 11.5188 9.25 10C9.25 8.48122 10.4812 7.25 12 7.25C13.5188 7.25 14.75 8.48122 14.75 10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M19.25 10C19.25 16.0755 12 21.3929 12 21.3929C12 21.3929 4.75 16.0755 4.75 10C4.75 5.99594 7.99594 2.75 12 2.75C16.0041 2.75 19.25 5.99594 19.25 10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',ap._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M11.556 21.9973L11.5538 21.9957L11.5486 21.9918L11.5304 21.9783C11.5149 21.9667 11.4927 21.95 11.4643 21.9284C11.4074 21.8851 11.3256 21.822 11.2224 21.7401C11.016 21.5764 10.7236 21.3374 10.3739 21.0321C9.67555 20.4223 8.74308 19.5433 7.80853 18.4663C5.96419 16.3408 4 13.3169 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 13.3169 18.0358 16.3408 16.1915 18.4663C15.2569 19.5433 14.3245 20.4223 13.6261 21.0321C13.2764 21.3374 12.984 21.5764 12.7776 21.7401C12.6744 21.822 12.5926 21.8851 12.5357 21.9284C12.5073 21.95 12.4851 21.9667 12.4696 21.9783L12.4514 21.9918L12.4462 21.9957L12.4445 21.9969C12.4445 21.9969 12.4436 21.9976 12 21.3929L12.4436 21.9976C12.1796 22.1913 11.82 22.191 11.556 21.9973ZM12 21.3929L11.556 21.9973C11.556 21.9973 11.5564 21.9976 12 21.3929ZM8.875 10C8.875 8.27411 10.2741 6.875 12 6.875C13.7259 6.875 15.125 8.27411 15.125 10C15.125 11.7259 13.7259 13.125 12 13.125C10.2741 13.125 8.875 11.7259 8.875 10Z" fill="currentColor"/>',ap._name="map-pin",ap._width=24,ap._height=24,ap._viewBox="0 0 24 24",ap=(0,s.Cc)([(0,C.Y$)("gds-icon-map-pin")],ap);const cp=e=>{ap.define();const t=(0,n.p)("gds-icon-map-pin"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Cp=class extends R.M{};Cp._regularSVG='<path d="M18.2478 14C19.9047 14 21.2478 12.6569 21.2478 11C21.2478 9.34315 19.9047 8 18.2478 8M12.5771 18.25C12.1653 19.4152 11.054 20.25 9.7478 20.25C8.09095 20.25 6.7478 18.9069 6.7478 17.25V15.75M6.75 6.25V15.75M18.2478 2.75V19.25L2.7478 14.4643V7.53571L18.2478 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Cp._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M18.6931 2.1465C18.8847 2.28788 18.9978 2.51187 18.9978 2.75001V7.32502C20.7095 7.67247 21.9978 9.18579 21.9978 11C21.9978 12.8142 20.7095 14.3275 18.9978 14.675V19.25C18.9978 19.4881 18.8847 19.7121 18.6931 19.8535C18.5015 19.9949 18.2541 20.0369 18.0265 19.9666L13.2834 18.5022C12.7684 19.9565 11.3809 21 9.7478 21C7.67673 21 5.9978 19.3211 5.9978 17.25V16.2527L2.52654 15.1809C2.2122 15.0839 1.9978 14.7933 1.9978 14.4643V7.53572C1.9978 7.20674 2.2122 6.91616 2.52654 6.8191L6.51204 5.58856C6.52291 5.58492 6.53389 5.58153 6.54497 5.57839L18.0265 2.03339C18.2541 1.96313 18.5015 2.00511 18.6931 2.1465ZM7.4978 16.7158V17.25C7.4978 18.4926 8.50516 19.5 9.7478 19.5C10.7042 19.5 11.5229 18.9029 11.8482 18.059L7.4978 16.7158ZM20.4978 11C20.4978 11.9797 19.8717 12.8131 18.9978 13.122V8.87804C19.8717 9.18691 20.4978 10.0203 20.4978 11ZM6 7.31652V14.6835L3.4978 13.9109V8.08909L6 7.31652Z" fill="currentColor"/>',Cp._name="megaphone",Cp._width=24,Cp._height=24,Cp._viewBox="0 0 24 24",Cp=(0,s.Cc)([(0,C.Y$)("gds-icon-megaphone")],Cp);const dp=e=>{Cp.define();const t=(0,n.p)("gds-icon-megaphone"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let hp=class extends R.M{};hp._regularSVG='<path d="M11.25 4.75H2.75V19.25H11.25M11.25 4.75H21.25V19.25H11.25M11.25 4.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M7.75 8.5C7.75 8.91421 7.41421 9.25 7 9.25C6.58579 9.25 6.25 8.91421 6.25 8.5C6.25 8.08579 6.58579 7.75 7 7.75C7.41421 7.75 7.75 8.08579 7.75 8.5ZM7.75 12C7.75 12.4142 7.41421 12.75 7 12.75C6.58579 12.75 6.25 12.4142 6.25 12C6.25 11.5858 6.58579 11.25 7 11.25C7.41421 11.25 7.75 11.5858 7.75 12ZM7.75 15.5C7.75 15.9142 7.41421 16.25 7 16.25C6.58579 16.25 6.25 15.9142 6.25 15.5C6.25 15.0858 6.58579 14.75 7 14.75C7.41421 14.75 7.75 15.0858 7.75 15.5Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>',hp._solidSVG='<path d="M6 8.5C6 9.05228 6.44772 9.5 7 9.5C7.55229 9.5 8 9.05228 8 8.5C8 7.94772 7.55229 7.5 7 7.5C6.44772 7.5 6 7.94772 6 8.5Z" fill="currentColor"/><path d="M6 12C6 12.5523 6.44771 13 7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55229 11 7 11C6.44772 11 6 11.4477 6 12Z" fill="currentColor"/><path d="M6 15.5C6 16.0523 6.44771 16.5 7 16.5C7.55228 16.5 8 16.0523 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44771 14.5 6 14.9477 6 15.5Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H21.25C21.6642 4 22 4.33579 22 4.75V19.25C22 19.6642 21.6642 20 21.25 20H2.75C2.33579 20 2 19.6642 2 19.25V4.75ZM3.5 5.5V18.5H10.5V5.5H3.5Z" fill="currentColor"/>',hp._name="menu-sidebar",hp._width=24,hp._height=24,hp._viewBox="0 0 24 24",hp=(0,s.Cc)([(0,C.Y$)("gds-icon-menu-sidebar")],hp);const up=e=>{hp.define();const t=(0,n.p)("gds-icon-menu-sidebar"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let pp=class extends R.M{};pp._regularSVG='<path d="M16.25 11.5V7C16.25 4.65279 14.3472 2.75 12 2.75C10.6334 2.75 9.41741 3.39504 8.63994 4.39727M3 3L7.75 7.75M7.75 7.75V11.5C7.75 13.8472 9.65279 15.75 12 15.75C13.0463 15.75 14.0043 15.3719 14.7449 14.7449M7.75 7.75L14.7449 14.7449M14.7449 14.7449L17.0474 17.0474M21 21L17.0474 17.0474M12 19C8.92453 19 6.2814 17.1489 5.12407 14.5M12 19V21.25M12 19C13.9439 19 15.715 18.2605 17.0474 17.0474" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',pp._solidSVG='<path d="M17.0001 11.5C17.0001 12.1846 16.8625 12.8371 16.6134 13.4313L7.67383 4.49163C8.53954 3.00174 10.1528 2 12.0001 2C14.7615 2 17.0001 4.23858 17.0001 7V11.5Z" fill="currentColor"/><path d="M3.53033 2.46967C3.23744 2.17678 2.76256 2.17678 2.46967 2.46967C2.17678 2.76256 2.17678 3.23744 2.46967 3.53033L7 8.06066V11.5C7 14.2614 9.23858 16.5 12 16.5C12.9805 16.5 13.8962 16.2172 14.6684 15.7291L15.9288 16.9894C14.822 17.7832 13.4661 18.2499 11.9999 18.2499C9.23314 18.2499 6.85352 16.5852 5.81123 14.1997C5.64539 13.8201 5.20326 13.6468 4.82369 13.8127C4.44412 13.9785 4.27086 14.4207 4.4367 14.8002C5.61403 17.4948 8.19054 19.4406 11.2499 19.7163V21.2499C11.2499 21.6642 11.5857 21.9999 11.9999 21.9999C12.4141 21.9999 12.7499 21.6642 12.7499 21.2499V19.7163C14.3398 19.5729 15.8004 18.9781 17.0011 18.0617L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L3.53033 2.46967Z" fill="currentColor"/>',pp._name="mic-off",pp._width=24,pp._height=24,pp._viewBox="0 0 24 24",pp=(0,s.Cc)([(0,C.Y$)("gds-icon-mic-off")],pp);const gp=e=>{pp.define();const t=(0,n.p)("gds-icon-mic-off"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Mp=class extends R.M{};Mp._regularSVG='<path d="M12 19C15.0754 19 17.7186 17.1489 18.8759 14.5M12 19C8.92448 19 6.28136 17.1489 5.12402 14.5M12 19V21.25M12 15.75C9.65274 15.75 7.74995 13.8472 7.74995 11.5V7C7.74995 4.65279 9.65274 2.75 12 2.75C14.3472 2.75 16.25 4.65279 16.25 7V11.5C16.25 13.8472 14.3472 15.75 12 15.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Mp._solidSVG='<path d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11.5C17 14.2614 14.7614 16.5 12 16.5C9.23858 16.5 7 14.2614 7 11.5V7Z" fill="currentColor"/><path d="M5.81123 14.1997C5.64539 13.8201 5.20326 13.6468 4.82369 13.8127C4.44412 13.9785 4.27087 14.4207 4.4367 14.8002C5.61403 17.4948 8.19054 19.4406 11.2499 19.7163V21.2499C11.2499 21.6642 11.5857 21.9999 11.9999 21.9999C12.4141 21.9999 12.7499 21.6642 12.7499 21.2499V19.7163C15.8093 19.4406 18.3858 17.4948 19.5631 14.8002C19.7289 14.4207 19.5557 13.9785 19.1761 13.8127C18.7966 13.6468 18.3544 13.8201 18.1886 14.1997C17.1463 16.5852 14.7667 18.2499 11.9999 18.2499C9.23314 18.2499 6.85352 16.5852 5.81123 14.1997Z" fill="currentColor"/>',Mp._name="mic-on",Mp._width=24,Mp._height=24,Mp._viewBox="0 0 24 24",Mp=(0,s.Cc)([(0,C.Y$)("gds-icon-mic-on")],Mp);const mp=e=>{Mp.define();const t=(0,n.p)("gds-icon-mic-on"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Vp=class extends R.M{};Vp._regularSVG='<path d="M13.75 3.75V10.25M13.75 10.25H20.25M13.75 10.25L20.25 3.75M10.25 20.25V13.75M10.25 13.75H3.75M10.25 13.75L3.75 20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Vp._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 3C14.1642 3 14.5 3.33579 14.5 3.75V8.43934L19.7197 3.21967C20.0126 2.92678 20.4874 2.92678 20.7803 3.21967C21.0732 3.51256 21.0732 3.98744 20.7803 4.28033L15.5607 9.5H20.25C20.6642 9.5 21 9.83579 21 10.25C21 10.6642 20.6642 11 20.25 11H13.75C13.3358 11 13 10.6642 13 10.25V3.75C13 3.33579 13.3358 3 13.75 3ZM3.75 14.5C3.33579 14.5 3 14.1642 3 13.75C3 13.3358 3.33579 13 3.75 13H10.25C10.6642 13 11 13.3358 11 13.75V20.25C11 20.6642 10.6642 21 10.25 21C9.83579 21 9.5 20.6642 9.5 20.25V15.5607L4.28033 20.7803C3.98744 21.0732 3.51256 21.0732 3.21967 20.7803C2.92678 20.4874 2.92678 20.0126 3.21967 19.7197L8.43934 14.5H3.75Z" fill="currentColor"/>',Vp._name="minimize",Vp._width=24,Vp._height=24,Vp._viewBox="0 0 24 24",Vp=(0,s.Cc)([(0,C.Y$)("gds-icon-minimize")],Vp);const fp=e=>{Vp.define();const t=(0,n.p)("gds-icon-minimize"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Lp=class extends R.M{};Lp._regularSVG='<path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',Lp._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z" fill="currentColor"/>',Lp._name="minus-large",Lp._width=24,Lp._height=24,Lp._viewBox="0 0 24 24",Lp=(0,s.Cc)([(0,C.Y$)("gds-icon-minus-large")],Lp);const _p=e=>{Lp.define();const t=(0,n.p)("gds-icon-minus-large"),r={...e,class:e.className};return(0,i.createElement)(t,r)},Hp=e=>{O.define();const t=(0,n.p)("gds-icon-minus-small"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let vp=class extends R.M{};vp._regularSVG='<path d="M6.75 20.2122H8.89621C8.89621 20.2122 11.3461 21.1593 12.9937 21.2378C16.6264 21.411 19.5121 19.7189 21.8494 17.1452C22.3831 16.5574 22.3741 15.6701 21.8785 15.0498C21.2396 14.2501 20.0386 14.1853 19.2375 14.822C18.3548 15.5234 17.1831 16.3124 16.0668 16.6223C14.5248 17.0503 12.9937 17.1351 12.9937 17.1351C21.1886 16.6223 18.0181 11 6.75 14M14.0553 3.88943C13.6015 2.64139 12.4049 1.75 11 1.75C9.20507 1.75 7.75 3.20507 7.75 5C7.75 6.79493 9.20507 8.25 11 8.25C11.3286 8.25 11.6457 8.20124 11.9447 8.11057M14.0553 3.88943C12.7211 4.2941 11.75 5.53364 11.75 7C11.75 7.39005 11.8187 7.76406 11.9447 8.11057M14.0553 3.88943C14.3543 3.79876 14.6714 3.75 15 3.75C16.7949 3.75 18.25 5.20507 18.25 7C18.25 8.79493 16.7949 10.25 15 10.25C13.5951 10.25 12.3984 9.35861 11.9447 8.11057M2.75 12.75H6.75V21.25H2.75V12.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',vp._solidSVG='<path d="M9.80806 8.8194C9.6085 8.24991 9.5 7.63763 9.5 7C9.5 4.54118 11.1135 2.45921 13.3395 1.75511C12.6816 1.27999 11.8735 1 11 1C8.79086 1 7 2.79086 7 5C7 6.79402 8.18105 8.31219 9.80806 8.8194Z" fill="currentColor"/><path d="M15 3C14.4815 3 13.9837 3.09916 13.5264 3.28047C12.0482 3.86648 11 5.30961 11 7C11 7.36293 11.0486 7.71607 11.1402 8.05257C11.6024 9.75034 13.154 11 15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.75C2 12.3358 2.33579 12 2.75 12H6.75C7.16421 12 7.5 12.3358 7.5 12.75V13.0392C9.96143 12.4632 12.035 12.2975 13.68 12.4037C15.4947 12.5208 16.9034 12.9775 17.6813 13.7011C17.9517 13.9526 18.1691 14.2611 18.2739 14.6137C18.4453 14.4886 18.6116 14.3614 18.7709 14.2348C19.8545 13.3737 21.5358 13.4192 22.4645 14.5816C23.1693 15.4638 23.2076 16.7652 22.4046 17.6494C19.9683 20.3322 16.881 22.174 12.958 21.987C12.0373 21.9431 10.9392 21.6633 10.1108 21.4137C9.68803 21.2863 9.31906 21.1616 9.05546 21.0687C8.93286 21.0255 8.83266 20.989 8.75998 20.9622H7.5V21.25C7.5 21.6642 7.16421 22 6.75 22H2.75C2.33579 22 2 21.6642 2 21.25V12.75ZM7.5 19.4622H8.89621C8.98866 19.4622 9.08031 19.4793 9.16654 19.5126M9.16654 19.5126L9.17151 19.5145L9.19003 19.5215C9.20679 19.5279 9.23225 19.5375 9.26561 19.5499C9.33236 19.5746 9.43061 19.6105 9.55405 19.654C9.80131 19.7412 10.1478 19.8582 10.5435 19.9774C11.3519 20.221 12.3026 20.454 13.0294 20.4887C16.3718 20.6481 19.0559 19.1056 21.2942 16.6409C21.5587 16.3496 21.579 15.8764 21.2926 15.5179C20.9434 15.0809 20.2228 14.997 19.7041 15.4092C18.8046 16.124 17.5353 16.993 16.2674 17.345C15.8427 17.4628 15.421 17.5556 15.0301 17.6285C14.449 17.7493 13.7966 17.8349 13.077 17.8813L13.0581 17.8826L13.0423 17.8836L13.0405 17.8837L13.0376 17.8839L13.0361 17.8839C12.6236 17.9068 12.2693 17.5917 12.245 17.1793C12.2207 16.7669 12.5345 16.4124 12.9468 16.3866C12.9593 16.3858 12.9717 16.385 12.9841 16.3842L13.0099 16.3825C13.0508 16.3796 13.1124 16.375 13.1918 16.368C13.3506 16.3542 13.5796 16.3313 13.8554 16.2955C14.1169 16.2615 14.4176 16.2164 14.7383 16.157C15.6669 15.9624 16.2644 15.6873 16.5867 15.4252C16.823 15.233 16.8404 15.1094 16.8416 15.0863C16.8425 15.0701 16.844 14.9709 16.6596 14.7994C16.2608 14.4283 15.2762 14.0098 13.5834 13.9006C12.04 13.8009 10.0003 13.9655 7.5 14.5819V19.4622" fill="currentColor"/>',vp._name="money-hand",vp._width=24,vp._height=24,vp._viewBox="0 0 24 24",vp=(0,s.Cc)([(0,C.Y$)("gds-icon-money-hand")],vp);const kp=e=>{vp.define();const t=(0,n.p)("gds-icon-money-hand"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let wp=class extends R.M{};wp._regularSVG='<path d="M9.42188 7.75H14.5781M9.42188 7.75C9.42188 7.75 3.74996 10.9722 3.75 16.1111C3.75003 20.2435 7.85366 21.25 12 21.25C16.1463 21.25 20.25 20.2435 20.25 16.1111C20.25 10.9722 14.5781 7.75 14.5781 7.75M9.42188 7.75L7.875 3.77778C7.875 3.77778 9.42188 2.75 12 2.75C14.5781 2.75 16.125 3.77778 16.125 3.77778L14.5781 7.75" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',wp._solidSVG='<path d="M3.85123 19.0302C3.29425 18.1904 3.00001 17.178 3 16C3.45007 12.8495 4.71037 10.5093 7.51024 8.25H16.5V8.18559C19.2411 10.42 20.5413 12.7892 21 16C21 17.178 20.7058 18.1904 20.1488 19.0302C19.5957 19.8642 18.8228 20.469 17.9544 20.9025C16.2468 21.7548 14.0585 22 12 22C9.94146 22 7.75317 21.7548 6.04565 20.9025C5.17717 20.469 4.40435 19.8642 3.85123 19.0302Z" fill="currentColor"/><path d="M16.3342 3.97272C16.502 3.5253 16.3325 3.01495 15.901 2.80978C14.7376 2.25667 13.433 2 12 2C10.567 2 9.26242 2.25667 8.09902 2.80978C7.66747 3.01495 7.49799 3.5253 7.66577 3.97272L8.70225 6.73666L8.66667 6.75H15.3333L15.2978 6.73666L16.3342 3.97272Z" fill="currentColor"/>',wp._name="moneybag",wp._width=24,wp._height=24,wp._viewBox="0 0 24 24",wp=(0,s.Cc)([(0,C.Y$)("gds-icon-moneybag")],wp);const bp=e=>{wp.define();const t=(0,n.p)("gds-icon-moneybag"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Zp=class extends R.M{};Zp._regularSVG='<path d="M21.248 11.8112C20.1888 12.56 18.8957 13 17.4999 13C13.91 13 10.9999 10.0899 10.9999 6.5C10.9999 5.10416 11.4399 3.81108 12.1887 2.75189C12.1259 2.75063 12.063 2.75 11.9999 2.75C6.89124 2.75 2.74988 6.89137 2.74988 12C2.74988 17.1086 6.89124 21.25 11.9999 21.25C17.1085 21.25 21.2499 17.1086 21.2499 12C21.2499 11.9369 21.2492 11.874 21.248 11.8112Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Zp._solidSVG='<path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.9319 21.9993 11.8639 21.998 11.7962C21.9924 11.5186 21.834 11.2669 21.5862 11.1417C21.3384 11.0166 21.0418 11.0385 20.8151 11.1988C19.8784 11.861 18.7358 12.25 17.5 12.25C14.3244 12.25 11.75 9.67564 11.75 6.5C11.75 5.26425 12.139 4.12157 12.8012 3.18485C12.9615 2.95819 12.9834 2.66155 12.8583 2.41377C12.7331 2.16599 12.4814 2.0076 12.2038 2.00204C12.136 2.00068 12.0681 2 12 2Z" fill="currentColor"/>',Zp._name="moon",Zp._width=24,Zp._height=24,Zp._viewBox="0 0 24 24",Zp=(0,s.Cc)([(0,C.Y$)("gds-icon-moon")],Zp);const yp=e=>{Zp.define();const t=(0,n.p)("gds-icon-moon"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let xp=class extends R.M{};xp._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M17 5.93934V3.75C17 3.47592 16.8505 3.22366 16.6101 3.09208C16.3696 2.9605 16.0766 2.97055 15.8457 3.1183L9.78055 7H5.75C5.33579 7 5 7.33579 5 7.75V16.25C5 16.6642 5.33579 17 5.75 17H5.93934L3.21967 19.7197C2.92678 20.0126 2.92678 20.4874 3.21967 20.7803C3.51256 21.0732 3.98744 21.0732 4.28033 20.7803L20.7803 4.28033C21.0732 3.98744 21.0732 3.51256 20.7803 3.21967C20.4874 2.92678 20.0126 2.92678 19.7197 3.21967L17 5.93934ZM7.43934 15.5H6.5V8.5H10C10.1433 8.5 10.2836 8.45895 10.4043 8.3817L15.5 5.12045V7.43934L7.43934 15.5Z" fill="currentColor"/><path d="M15.5 18.8796L11.1102 16.0701L10.0243 17.156L15.8457 20.8817C16.0766 21.0294 16.3696 21.0395 16.6101 20.9079C16.8505 20.7763 17 20.5241 17 20.25V10.1803L15.5 11.6803V18.8796Z" fill="currentColor"/>',xp._solidSVG='<path d="M17 5.93934V3.75C17 3.47592 16.8505 3.22366 16.6101 3.09208C16.3696 2.9605 16.0766 2.97055 15.8457 3.1183L9.78055 7H5.75C5.33579 7 5 7.33579 5 7.75V16.25C5 16.6642 5.33579 17 5.75 17H5.93934L3.21967 19.7197C2.92678 20.0126 2.92678 20.4874 3.21967 20.7803C3.51256 21.0732 3.98744 21.0732 4.28033 20.7803L20.7803 4.28033C21.0732 3.98744 21.0732 3.51256 20.7803 3.21967C20.4874 2.92678 20.0126 2.92678 19.7197 3.21967L17 5.93934Z" fill="currentColor"/><path d="M15.8457 20.8817L10.0243 17.156L17 10.1803V20.25C17 20.5241 16.8505 20.7763 16.6101 20.9079C16.3696 21.0395 16.0766 21.0294 15.8457 20.8817Z" fill="currentColor"/>',xp._name="mute",xp._width=24,xp._height=24,xp._viewBox="0 0 24 24",xp=(0,s.Cc)([(0,C.Y$)("gds-icon-mute")],xp);const Sp=e=>{xp.define();const t=(0,n.p)("gds-icon-mute"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let $p=class extends R.M{};$p._regularSVG='<path d="M1.75 19.25H2.75M22.25 19.25H21.25M21.25 19.25V8.75H17.25M21.25 19.25H17.25M17.25 8.75V19.25M17.25 8.75V4.75H6.75V8.75M17.25 19.25H14.25M6.75 19.25V8.75M6.75 19.25H2.75M6.75 19.25H9.75M6.75 8.75H2.75V19.25M9.75 19.25V14.75H14.25V19.25M9.75 19.25H14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',$p._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.75C6 4.33579 6.33579 4 6.75 4H17.25C17.6642 4 18 4.33579 18 4.75V8H21.25C21.6642 8 22 8.33579 22 8.75V18.5H22.25C22.6642 18.5 23 18.8358 23 19.25C23 19.6642 22.6642 20 22.25 20H1.75C1.33579 20 1 19.6642 1 19.25C1 18.8358 1.33579 18.5 1.75 18.5H2V8.75C2 8.33579 2.33579 8 2.75 8H6V4.75ZM6 9.5H3.5V18.5H6V9.5ZM18 18.5H20.5V9.5H18V18.5ZM14 18.5V15H10V18.5H14Z" fill="currentColor"/>',$p._name="office",$p._width=24,$p._height=24,$p._viewBox="0 0 24 24",$p=(0,s.Cc)([(0,C.Y$)("gds-icon-office")],$p);const Gp=e=>{$p.define();const t=(0,n.p)("gds-icon-office"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let jp=class extends R.M{};jp._regularSVG='<path d="M17.1073 17.1577C17.1073 18.8655 15.7213 20.25 14.0116 20.25C12.3019 20.25 10.9159 18.8655 10.9159 17.1577C10.9159 15.4499 12.3019 14.0654 14.0116 14.0654C15.7213 14.0654 17.1073 15.4499 17.1073 17.1577Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M4.99145 6.98598L10.4681 11.5764L3.75 14.0189L4.99145 6.98598Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14.2695 3.5L20.25 5.1007L18.6475 11.0746L12.6671 9.47388L14.2695 3.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',jp._solidSVG='<path d="M14.4635 2.77544C14.0635 2.66839 13.6524 2.90571 13.5452 3.30563L11.9427 9.27951C11.8912 9.4717 11.9181 9.6765 12.0176 9.84882C12.1171 10.0211 12.281 10.1469 12.4732 10.1983L18.4536 11.799C18.8536 11.9061 19.2647 11.6687 19.3719 11.2688L20.9744 5.29495C21.026 5.10276 20.999 4.89796 20.8995 4.72564C20.8 4.55331 20.6362 4.42759 20.4439 4.37614L14.4635 2.77544Z" fill="currentColor"/><path d="M5.47325 6.41113C5.26797 6.23907 4.98651 6.18954 4.73483 6.2812C4.48315 6.37285 4.29945 6.59177 4.25289 6.85554L3.01144 13.8884C2.96486 14.1523 3.06257 14.4209 3.26777 14.5932C3.47297 14.7655 3.75448 14.8152 4.00628 14.7237L10.7244 12.2812C10.9763 12.1896 11.1602 11.9705 11.2067 11.7065C11.2533 11.4425 11.1553 11.1737 10.9499 11.0015L5.47325 6.41113Z" fill="currentColor"/><path d="M14.0116 13.3153C11.8884 13.3153 10.1659 15.0348 10.1659 17.1576C10.1659 19.2805 11.8884 20.9999 14.0116 20.9999C16.1347 20.9999 17.8573 19.2805 17.8573 17.1576C17.8573 15.0348 16.1347 13.3153 14.0116 13.3153Z" fill="currentColor"/>',jp._name="other",jp._width=24,jp._height=24,jp._viewBox="0 0 24 24",jp=(0,s.Cc)([(0,C.Y$)("gds-icon-other")],jp);const Ep=e=>{jp.define();const t=(0,n.p)("gds-icon-other"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Bp=class extends R.M{};Bp._regularSVG='<path d="M12.25 21.25H4.75V2.75H19.25V12.25M18.25 15.25V18.25M18.25 18.25V21.25M18.25 18.25H15.25M18.25 18.25H21.25M8.75 6.75H15.25M8.75 10.75H11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Bp._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75V13.8357C19.5875 13.3259 18.9568 13 18.25 13C17.0074 13 16 14.0074 16 15.25V16H15.25C14.0074 16 13 17.0074 13 18.25C13 19.4926 14.0074 20.5 15.25 20.5H16V21.25C16 21.513 16.0451 21.7654 16.128 22H4.75C4.33579 22 4 21.6642 4 21.25V2.75ZM8 6.75C8 6.33579 8.33579 6 8.75 6H15.25C15.6642 6 16 6.33579 16 6.75C16 7.16421 15.6642 7.5 15.25 7.5H8.75C8.33579 7.5 8 7.16421 8 6.75ZM8 10.75C8 10.3358 8.33579 10 8.75 10H11.25C11.6642 10 12 10.3358 12 10.75C12 11.1642 11.6642 11.5 11.25 11.5H8.75C8.33579 11.5 8 11.1642 8 10.75Z" fill="currentColor"/><path d="M19 15.25C19 14.8358 18.6642 14.5 18.25 14.5C17.8358 14.5 17.5 14.8358 17.5 15.25V17.5H15.25C14.8358 17.5 14.5 17.8358 14.5 18.25C14.5 18.6642 14.8358 19 15.25 19H17.5V21.25C17.5 21.6642 17.8358 22 18.25 22C18.6642 22 19 21.6642 19 21.25V19H21.25C21.6642 19 22 18.6642 22 18.25C22 17.8358 21.6642 17.5 21.25 17.5H19V15.25Z" fill="currentColor"/>',Bp._name="page-add",Bp._width=24,Bp._height=24,Bp._viewBox="0 0 24 24",Bp=(0,s.Cc)([(0,C.Y$)("gds-icon-page-add")],Bp);const qp=e=>{Bp.define();const t=(0,n.p)("gds-icon-page-add"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Np=class extends R.M{};Np._regularSVG='<path d="M8.75 6.75H15.25M8.75 10.75H15.25M8.75 14.75H11.25M4.75 2.75H19.25V21.25H4.75V2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Np._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75V21.25C20 21.6642 19.6642 22 19.25 22H4.75C4.33579 22 4 21.6642 4 21.25V2.75ZM8.75 6C8.33579 6 8 6.33579 8 6.75C8 7.16421 8.33579 7.5 8.75 7.5H15.25C15.6642 7.5 16 7.16421 16 6.75C16 6.33579 15.6642 6 15.25 6H8.75ZM8.75 10C8.33579 10 8 10.3358 8 10.75C8 11.1642 8.33579 11.5 8.75 11.5H15.25C15.6642 11.5 16 11.1642 16 10.75C16 10.3358 15.6642 10 15.25 10H8.75ZM8.75 14C8.33579 14 8 14.3358 8 14.75C8 15.1642 8.33579 15.5 8.75 15.5H11.25C11.6642 15.5 12 15.1642 12 14.75C12 14.3358 11.6642 14 11.25 14H8.75Z" fill="currentColor"/>',Np._name="page-text",Np._width=24,Np._height=24,Np._viewBox="0 0 24 24",Np=(0,s.Cc)([(0,C.Y$)("gds-icon-page-text")],Np);const Ip=e=>{Np.define();const t=(0,n.p)("gds-icon-page-text"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Yp=class extends R.M{};Yp._regularSVG='<path d="M9.45244 10.8687L21 4.44532M11.9936 21.25L22.25 3.75H2.25L9.14026 11.0423L11.9936 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',Yp._solidSVG='<path d="M1.0615 3.4526C1.18016 3.17789 1.45077 3 1.75002 3H22.25C22.5186 3 22.7667 3.14366 22.9005 3.37663C23.0342 3.60959 23.0331 3.89629 22.8976 4.12825L12.3848 22.1282C12.2329 22.3884 11.9399 22.5324 11.6411 22.4938C11.3423 22.4552 11.0956 22.2415 11.0147 21.9513L8.33914 12.3462L14.9742 8.65542C15.3362 8.45407 15.4664 7.9974 15.265 7.63542C15.0637 7.27344 14.607 7.14322 14.245 7.34458L7.59005 11.0464L1.20398 4.26414C0.998839 4.04627 0.942841 3.72731 1.0615 3.4526Z" fill="currentColor"/>',Yp._name="paper-plane-top-right",Yp._width=24,Yp._height=24,Yp._viewBox="0 0 24 24",Yp=(0,s.Cc)([(0,C.Y$)("gds-icon-paper-plane-top-right")],Yp);const zp=e=>{Yp.define();const t=(0,n.p)("gds-icon-paper-plane-top-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ap=class extends R.M{};Ap._regularSVG='<path d="M5.75 10.75V15.25C5.75 18.5637 8.43629 21.25 11.75 21.25H12.25C15.5637 21.25 18.25 18.5637 18.25 15.25V7C18.25 4.65279 16.3472 2.75 14 2.75C11.6528 2.75 9.75 4.65279 9.75 7V14.875C9.75 16.0486 10.7014 17 11.875 17C13.0486 17 14 16.0486 14 14.875V7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',Ap._solidSVG='<path d="M14 2C11.2386 2 9 4.23858 9 7V14.875C9 16.4628 10.2872 17.75 11.875 17.75C13.4628 17.75 14.75 16.4628 14.75 14.875V7.75C14.75 7.33579 14.4142 7 14 7C13.5858 7 13.25 7.33579 13.25 7.75V14.875C13.25 15.6344 12.6344 16.25 11.875 16.25C11.1156 16.25 10.5 15.6344 10.5 14.875V7C10.5 5.067 12.067 3.5 14 3.5C15.933 3.5 17.5 5.067 17.5 7V15.25C17.5 18.1495 15.1495 20.5 12.25 20.5H11.75C8.85051 20.5 6.5 18.1495 6.5 15.25V10.75C6.5 10.3358 6.16421 10 5.75 10C5.33579 10 5 10.3358 5 10.75V15.25C5 18.9779 8.02208 22 11.75 22H12.25C15.9779 22 19 18.9779 19 15.25V7C19 4.23858 16.7614 2 14 2Z" fill="currentColor"/>',Ap._name="paperclip",Ap._width=24,Ap._height=24,Ap._viewBox="0 0 24 24",Ap=(0,s.Cc)([(0,C.Y$)("gds-icon-paperclip")],Ap);const Tp=e=>{Ap.define();const t=(0,n.p)("gds-icon-paperclip"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Rp=class extends R.M{};Rp._regularSVG='<path d="M4.75 4.75C4.75 4.19772 5.19772 3.75 5.75 3.75H8.25C8.80228 3.75 9.25 4.19772 9.25 4.75V19.25C9.25 19.8023 8.80228 20.25 8.25 20.25H5.75C5.19772 20.25 4.75 19.8023 4.75 19.25V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14.75 4.75C14.75 4.19772 15.1977 3.75 15.75 3.75H18.25C18.8023 3.75 19.25 4.19772 19.25 4.75V19.25C19.25 19.8023 18.8023 20.25 18.25 20.25H15.75C15.1977 20.25 14.75 19.8023 14.75 19.25V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',Rp._solidSVG='<path d="M4.75 3C4.33579 3 4 3.33579 4 3.75V20.25C4 20.6642 4.33579 21 4.75 21H9.25C9.66421 21 10 20.6642 10 20.25V3.75C10 3.33579 9.66421 3 9.25 3H4.75Z" fill="currentColor"/><path d="M14.75 3C14.3358 3 14 3.33579 14 3.75V20.25C14 20.6642 14.3358 21 14.75 21H19.25C19.6642 21 20 20.6642 20 20.25V3.75C20 3.33579 19.6642 3 19.25 3H14.75Z" fill="currentColor"/>',Rp._name="pause",Rp._width=24,Rp._height=24,Rp._viewBox="0 0 24 24",Rp=(0,s.Cc)([(0,C.Y$)("gds-icon-pause")],Rp);const Op=e=>{Rp.define();const t=(0,n.p)("gds-icon-pause"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Wp=class extends R.M{};Wp._regularSVG='<path d="M4.75 11.25V3.75H15L19.25 8V11.25M13.75 4.25V9.25H18.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 20.25V14.75H5.75C6.57843 14.75 7.25 15.4216 7.25 16.25C7.25 17.0784 6.57843 17.75 5.75 17.75H4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.75 14.75V20.25H11.25C12.3333 20.25 14 19.7 14 17.5C14 15.3 12.3333 14.75 11.25 14.75H9.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 14.75H16.75V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.75 17.75H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Wp._solidSVG='<path d="M13 3H4.75C4.33579 3 4 3.33579 4 3.75V12H20V10H13.75C13.3358 10 13 9.66421 13 9.25V3Z" fill="currentColor"/><path d="M20 8.5V8C20 7.80109 19.921 7.61032 19.7803 7.46967L15.5303 3.21967C15.3897 3.07902 15.1989 3 15 3H14.5V8.5H20Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 14.75C3 14.3358 3.33579 14 3.75 14H5.75C6.99264 14 8 15.0074 8 16.25C8 17.4926 6.99264 18.5 5.75 18.5H4.5V20.25C4.5 20.6642 4.16421 21 3.75 21C3.33579 21 3 20.6642 3 20.25V14.75ZM4.5 17H5.75C6.16421 17 6.5 16.6642 6.5 16.25C6.5 15.8358 6.16421 15.5 5.75 15.5H4.5V17Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 14.75C9 14.3358 9.33579 14 9.75 14H11.25C11.8978 14 12.76 14.1611 13.4802 14.6992C14.2369 15.2646 14.75 16.183 14.75 17.5C14.75 18.817 14.2369 19.7354 13.4802 20.3008C12.76 20.8389 11.8978 21 11.25 21H9.75C9.33579 21 9 20.6642 9 20.25V14.75ZM10.5 15.5V19.5H11.25C11.6856 19.5 12.1984 19.3861 12.5823 19.0992C12.9298 18.8396 13.25 18.383 13.25 17.5C13.25 16.617 12.9298 16.1604 12.5823 15.9008C12.1984 15.6139 11.6856 15.5 11.25 15.5H10.5Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 14.75C16 14.3358 16.3358 14 16.75 14H20.25C20.6642 14 21 14.3358 21 14.75C21 15.1642 20.6642 15.5 20.25 15.5H17.5V17H19.25C19.6642 17 20 17.3358 20 17.75C20 18.1642 19.6642 18.5 19.25 18.5H17.5V20.25C17.5 20.6642 17.1642 21 16.75 21C16.3358 21 16 20.6642 16 20.25V14.75Z" fill="currentColor"/>',Wp._name="pdf",Wp._width=24,Wp._height=24,Wp._viewBox="0 0 24 24",Wp=(0,s.Cc)([(0,C.Y$)("gds-icon-pdf")],Wp);const Pp=e=>{Wp.define();const t=(0,n.p)("gds-icon-pdf"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Fp=class extends R.M{};Fp._regularSVG='<path d="M12.75 21.25H21.25M2.75 17V21.25H7L21.25 7L17 2.75L2.75 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Fp._solidSVG='<path d="M17.5303 2.21967C17.2374 1.92678 16.7626 1.92678 16.4697 2.21967L2.21967 16.4697C2.07902 16.6103 2 16.8011 2 17V21.25C2 21.6642 2.33579 22 2.75 22H7C7.19891 22 7.38968 21.921 7.53033 21.7803L21.7803 7.53033C22.0732 7.23744 22.0732 6.76256 21.7803 6.46967L17.5303 2.21967Z" fill="currentColor"/><path d="M12.75 20.5C12.3358 20.5 12 20.8358 12 21.25C12 21.6642 12.3358 22 12.75 22H21.25C21.6642 22 22 21.6642 22 21.25C22 20.8358 21.6642 20.5 21.25 20.5H12.75Z" fill="currentColor"/>',Fp._name="pencel-line",Fp._width=24,Fp._height=24,Fp._viewBox="0 0 24 24",Fp=(0,s.Cc)([(0,C.Y$)("gds-icon-pencel-line")],Fp);const Dp=e=>{Fp.define();const t=(0,n.p)("gds-icon-pencel-line"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Kp=class extends R.M{};Kp._regularSVG='<path d="M21 18C21 18 19.666 19.5444 18.166 19.5444C16.666 19.5444 15.4594 18.115 13.9866 18.115C12.5138 18.115 11.6598 18.786 10.75 19.75M17 2.75L20.25 6L6 20.25H2.75V17L17 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Kp._solidSVG='<path d="M16.4697 2.21967C16.7626 1.92678 17.2374 1.92678 17.5303 2.21967L20.7803 5.46967C21.0732 5.76256 21.0732 6.23744 20.7803 6.53033L6.53033 20.7803C6.38968 20.921 6.19891 21 6 21H2.75C2.33579 21 2 20.6642 2 20.25V17C2 16.8011 2.07902 16.6103 2.21967 16.4697L16.4697 2.21967Z" fill="currentColor"/><path d="M21.4903 17.4324C21.1769 17.1618 20.7035 17.1963 20.4327 17.5095L20.4261 17.5168C20.4192 17.5246 20.4075 17.5374 20.3914 17.5547C20.3592 17.5892 20.3095 17.641 20.2446 17.7043C20.1139 17.8317 19.9261 18.0013 19.699 18.1696C19.2229 18.5224 18.675 18.7944 18.166 18.7944C17.6346 18.7944 17.124 18.5421 16.4177 18.1672L16.3494 18.131C15.7225 17.7975 14.9093 17.365 13.9866 17.365C12.2062 17.365 11.1671 18.2154 10.2046 19.2352C9.92027 19.5364 9.93398 20.0111 10.2352 20.2954C10.5364 20.5797 11.0111 20.566 11.2954 20.2648C12.1526 19.3567 12.8215 18.865 13.9866 18.865C14.5028 18.865 15.0037 19.1149 15.7145 19.4922L15.7677 19.5205C16.4011 19.8571 17.2241 20.2944 18.166 20.2944C19.1571 20.2944 20.0262 19.7942 20.5921 19.3748C20.886 19.157 21.1254 18.9405 21.2917 18.7783C21.3753 18.6968 21.4415 18.628 21.4881 18.578C21.5114 18.5531 21.5299 18.5328 21.5432 18.5179L21.5593 18.4997L21.5645 18.4939L21.5663 18.4918L21.5676 18.4903C21.5676 18.4903 21.5676 18.4903 21 18L21.5676 18.4903C21.8383 18.1768 21.8037 17.7032 21.4903 17.4324Z" fill="currentColor"/>',Kp._name="pencil-sign",Kp._width=24,Kp._height=24,Kp._viewBox="0 0 24 24",Kp=(0,s.Cc)([(0,C.Y$)("gds-icon-pencil-sign")],Kp);const Up=e=>{Kp.define();const t=(0,n.p)("gds-icon-pencil-sign"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Jp=class extends R.M{};Jp._regularSVG='<path d="M8.71906 3.56014C8.6845 3.62926 8.62846 3.6853 8.55934 3.71986L7.63803 4.18051C7.3748 4.31213 7.3748 4.68778 7.63803 4.81939L8.55934 5.28005C8.62846 5.3146 8.6845 5.37065 8.71906 5.43977L9.17972 6.36108C9.31133 6.62431 9.68698 6.62431 9.81859 6.36108L10.2792 5.43977C10.3138 5.37065 10.3698 5.3146 10.439 5.28005L11.3603 4.81939C11.6235 4.68778 11.6235 4.31213 11.3603 4.18051L10.439 3.71986C10.3698 3.6853 10.3138 3.62926 10.2792 3.56014L9.81859 2.63883C9.68698 2.3756 9.31133 2.3756 9.17972 2.63883L8.71906 3.56014Z" fill="currentColor"/><path d="M4.40702 7.18422C4.35864 7.28098 4.28018 7.35944 4.18342 7.40782L2.89358 8.05274C2.52506 8.237 2.52506 8.7629 2.89358 8.94717L4.18342 9.59208C4.28018 9.64047 4.35864 9.71893 4.40702 9.81569L5.05194 11.1055C5.2362 11.4741 5.7621 11.4741 5.94637 11.1055L6.59128 9.81569C6.63967 9.71893 6.71813 9.64047 6.81489 9.59208L8.10473 8.94717C8.47325 8.7629 8.47325 8.237 8.10473 8.05274L6.81489 7.40782C6.71813 7.35944 6.63967 7.28098 6.59128 7.18422L5.94637 5.89438C5.7621 5.52586 5.2362 5.52586 5.05194 5.89438L4.40702 7.18422Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.0303 2.96967C19.7511 2.69047 19.3033 2.67556 19.0061 2.93557L7.50391 13L7.5 13C5.01472 13 3 15.0147 3 17.5V21.25C3 21.6642 3.33579 22 3.75 22H7.5C9.98528 22 12 19.9853 12 17.5L12 17.4961L22.0644 5.99388C22.3244 5.69673 22.3095 5.24887 22.0303 4.96967L20.0303 2.96967ZM11.6097 15.6643C11.1581 14.6546 10.3454 13.8419 9.33572 13.3903L19.4658 4.52648L20.4735 5.53418L11.6097 15.6643ZM4.5 17.5C4.5 15.8431 5.84315 14.5 7.5 14.5C7.57422 14.5 7.64768 14.5027 7.72031 14.5079C9.20109 14.615 10.385 15.7989 10.4921 17.2797C10.4973 17.3523 10.5 17.4258 10.5 17.5C10.5 19.1569 9.15685 20.5 7.5 20.5H4.5V17.5Z" fill="currentColor"/>',Jp._solidSVG='<path d="M8.55934 3.71986C8.62846 3.6853 8.6845 3.62926 8.71906 3.56014L9.17972 2.63883C9.31133 2.3756 9.68698 2.3756 9.81859 2.63883L10.2792 3.56014C10.3138 3.62926 10.3698 3.6853 10.439 3.71986L11.3603 4.18051C11.6235 4.31213 11.6235 4.68778 11.3603 4.81939L10.439 5.28005C10.3698 5.3146 10.3138 5.37065 10.2792 5.43977L9.81859 6.36108C9.68698 6.62431 9.31133 6.62431 9.17972 6.36108L8.71906 5.43977C8.6845 5.37065 8.62846 5.3146 8.55934 5.28005L7.63803 4.81939C7.3748 4.68778 7.3748 4.31213 7.63803 4.18051L8.55934 3.71986Z" fill="currentColor"/><path d="M4.18342 7.40782C4.28018 7.35944 4.35864 7.28098 4.40702 7.18422L5.05194 5.89438C5.2362 5.52586 5.7621 5.52586 5.94637 5.89438L6.59128 7.18422C6.63967 7.28098 6.71813 7.35944 6.81489 7.40782L8.10473 8.05274C8.47325 8.237 8.47325 8.7629 8.10473 8.94717L6.81489 9.59208C6.71813 9.64047 6.63967 9.71893 6.59128 9.81569L5.94637 11.1055C5.7621 11.4741 5.2362 11.4741 5.05194 11.1055L4.40702 9.81569C4.35864 9.71893 4.28018 9.64047 4.18342 9.59208L2.89358 8.94717C2.52506 8.7629 2.52506 8.237 2.89358 8.05274L4.18342 7.40782Z" fill="currentColor"/><path d="M19.0067 2.93557C19.3038 2.67556 19.7517 2.69047 20.0309 2.96967L22.0309 4.96967C22.3101 5.24887 22.325 5.69673 22.065 5.99388L13.3109 15.9986C12.7677 13.8907 11.1099 12.2329 9.00195 11.6897L19.0067 2.93557Z" fill="currentColor"/><path d="M3 17.5C3 15.0147 5.01472 13 7.5 13C7.61036 13 7.71991 13.004 7.82852 13.0118C10.0524 13.1727 11.8273 14.9476 11.9882 17.1715C11.996 17.2801 12 17.3896 12 17.5C12 19.9853 9.98528 22 7.5 22H3.75C3.33579 22 3 21.6642 3 21.25V17.5Z" fill="currentColor"/>',Jp._name="pencil-sparkle",Jp._width=24,Jp._height=24,Jp._viewBox="0 0 24 24",Jp=(0,s.Cc)([(0,C.Y$)("gds-icon-pencil-sparkle")],Jp);const Qp=e=>{Jp.define();const t=(0,n.p)("gds-icon-pencil-sparkle"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Xp=class extends R.M{};Xp._regularSVG='<path d="M21 18C21 18 19.666 19.5444 18.166 19.5444C16.666 19.5444 15.4594 18.115 13.9866 18.115C12.5138 18.115 11.6598 18.786 10.75 19.75M17 2.75L20.25 6L6 20.25H2.75V17L17 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Xp._solidSVG='<path d="M16.4697 2.21967C16.7626 1.92678 17.2374 1.92678 17.5303 2.21967L20.7803 5.46967C21.0732 5.76256 21.0732 6.23744 20.7803 6.53033L6.53033 20.7803C6.38968 20.921 6.19891 21 6 21H2.75C2.33579 21 2 20.6642 2 20.25V17C2 16.8011 2.07902 16.6103 2.21967 16.4697L16.4697 2.21967Z" fill="currentColor"/><path d="M21.4903 17.4324C21.1769 17.1618 20.7035 17.1963 20.4327 17.5095L20.4261 17.5168C20.4192 17.5246 20.4075 17.5374 20.3914 17.5547C20.3592 17.5892 20.3095 17.641 20.2446 17.7043C20.1139 17.8317 19.9261 18.0013 19.699 18.1696C19.2229 18.5224 18.675 18.7944 18.166 18.7944C17.6346 18.7944 17.124 18.5421 16.4177 18.1672L16.3494 18.131C15.7225 17.7975 14.9093 17.365 13.9866 17.365C12.2062 17.365 11.1671 18.2154 10.2046 19.2352C9.92027 19.5364 9.93398 20.0111 10.2352 20.2954C10.5364 20.5797 11.0111 20.566 11.2954 20.2648C12.1526 19.3567 12.8215 18.865 13.9866 18.865C14.5028 18.865 15.0037 19.1149 15.7145 19.4922L15.7677 19.5205C16.4011 19.8571 17.2241 20.2944 18.166 20.2944C19.1571 20.2944 20.0262 19.7942 20.5921 19.3748C20.886 19.157 21.1254 18.9405 21.2917 18.7783C21.3753 18.6968 21.4415 18.628 21.4881 18.578C21.5114 18.5531 21.5299 18.5328 21.5432 18.5179L21.5593 18.4997L21.5645 18.4939L21.5663 18.4918L21.5676 18.4903C21.5676 18.4903 21.5676 18.4903 21 18L21.5676 18.4903C21.8383 18.1768 21.8037 17.7032 21.4903 17.4324Z" fill="currentColor"/>',Xp._name="pencil-wave",Xp._width=24,Xp._height=24,Xp._viewBox="0 0 24 24",Xp=(0,s.Cc)([(0,C.Y$)("gds-icon-pencil-wave")],Xp);const eg=e=>{Xp.define();const t=(0,n.p)("gds-icon-pencil-wave"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let tg=class extends R.M{};tg._regularSVG='<g clip-path="url(#clip0_2721_1058)"><path d="M16.625 20.0107L11.6146 11.3324M7.37499 3.98926C2.95079 6.54357 1.43494 12.2008 3.98926 16.625C5.25553 14.7071 7.03569 13.6794 8.88471 13.7986M7.37499 3.98926C11.7992 1.43494 17.4564 2.95079 20.0107 7.37499C17.7167 7.51266 15.9365 8.54047 15.1153 10.2014M7.37499 3.98926C5.65447 4.9826 6.33039 9.3744 8.88471 13.7986M7.37499 3.98926C9.09552 2.99591 12.561 5.77717 15.1153 10.2014M8.88471 13.7986C9.74036 12.7112 10.6132 11.9106 11.6146 11.3324M15.1153 10.2014C13.7457 10.3987 12.6159 10.7543 11.6146 11.3324" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_2721_1058"><rect width="24" height="24" fill="white"/></clipPath></defs>',tg._solidSVG='<path d="M10.168 13.4867C9.80975 13.7845 9.44746 14.1113 9.11856 14.4484C8.02058 12.2778 7.22898 9.77005 6.85338 7.62648C6.63744 6.39405 6.56571 5.31906 6.63637 4.51906C6.67177 4.11832 6.74035 3.81802 6.82437 3.61151C6.90973 3.40169 6.98591 3.34786 7.00002 3.33971C7.01414 3.33156 7.09884 3.29251 7.32324 3.32349C7.54409 3.35398 7.83845 3.44474 8.2032 3.61446C8.93135 3.95326 9.82645 4.55287 10.7858 5.3561C12.4544 6.75316 14.2303 8.69256 15.5612 10.7288C15.1048 10.8451 14.6407 10.9954 14.2036 11.1568C13.3844 11.4593 12.6052 11.8211 12.0739 12.1279C11.5425 12.4347 10.8396 12.9286 10.168 13.4867Z" fill="currentColor"/><path d="M5.11908 4.7406C5.07916 5.65137 5.17418 6.73413 5.37589 7.88537C5.76102 10.0834 6.55414 12.6363 7.66712 14.899C6.72126 15.193 5.79972 15.9008 5.04031 17.0509C4.63071 17.6713 3.71146 17.6437 3.33977 17C0.979353 12.9116 1.83393 7.8493 5.11908 4.7406Z" fill="currentColor"/><path d="M9.1537 2.41121C9.96241 2.83203 10.8526 3.45569 11.7487 4.206C13.4597 5.63854 15.2741 7.60187 16.6771 9.69709C17.4047 9.02494 18.4784 8.58072 19.8542 8.49816C20.5962 8.45364 21.032 7.64375 20.6603 6.99996C18.2999 2.9116 13.4885 1.12054 9.1537 2.41121Z" fill="currentColor"/><path d="M13.4904 13.0814C13.2338 13.2032 13.007 13.3212 12.8239 13.4269C12.6408 13.5326 12.4252 13.6701 12.1914 13.8314L15.9755 20.3857C16.1826 20.7444 16.6413 20.8673 17 20.6602C17.3587 20.4531 17.4816 19.9944 17.2745 19.6357L13.4904 13.0814Z" fill="currentColor"/>',tg._name="pension",tg._width=24,tg._height=24,tg._viewBox="0 0 24 24",tg=(0,s.Cc)([(0,C.Y$)("gds-icon-pension")],tg);const rg=e=>{tg.define();const t=(0,n.p)("gds-icon-pension"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let og=class extends R.M{};og._regularSVG='<path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.2485 16.25C12.7476 14.7408 11.9999 13.2338 11.9985 11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.75 16.25C11.2894 14.758 11.9998 13.2338 11.9984 11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.75 10.6912C8.75 10.6912 10.7206 10.9559 11.9996 10.9559C13.2787 10.9559 15.25 10.6912 15.25 10.6912" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.75 8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8C11.25 7.58579 11.5858 7.25 12 7.25C12.4142 7.25 12.75 7.58579 12.75 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',og._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5ZM11.2407 11.6834C11.1699 13.2501 10.6131 14.4679 9.31529 15.7077C9.01576 15.9938 9.00489 16.4685 9.291 16.768C9.57711 17.0676 10.0519 17.0784 10.3514 16.7923C11.0847 16.0919 11.6343 15.3746 12.021 14.6089C12.4136 15.3682 12.9522 16.0769 13.629 16.7729C13.9177 17.0698 14.3926 17.0765 14.6895 16.7877C14.9865 16.4989 14.9931 16.0241 14.7044 15.7271C13.4602 14.4476 12.841 13.2299 12.7582 11.6834C13.2466 11.6576 13.7527 11.613 14.18 11.5697C14.571 11.5301 14.9604 11.4831 15.3495 11.433C15.7604 11.3801 16.0484 11.0019 15.9932 10.5914C15.9381 10.1808 15.5607 9.89354 15.1499 9.94637C14.7769 9.99433 14.4036 10.0393 14.0287 10.0773C13.3808 10.143 12.5994 10.2059 11.9996 10.2059C11.3997 10.2059 10.6185 10.143 9.97075 10.0773C9.59603 10.0393 9.22287 9.99434 8.84996 9.94637C8.43913 9.89352 8.06173 10.1808 8.00659 10.5913C7.95144 11.0018 8.23944 11.3801 8.65026 11.433C9.03927 11.4831 9.42853 11.5301 9.81941 11.5697C10.2466 11.613 10.7524 11.6575 11.2407 11.6834Z" fill="currentColor"/>',og._name="people-a11y",og._width=24,og._height=24,og._viewBox="0 0 24 24",og=(0,s.Cc)([(0,C.Y$)("gds-icon-people-a11y")],og);const sg=e=>{og.define();const t=(0,n.p)("gds-icon-people-a11y"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ng=class extends R.M{};ng._regularSVG='<path d="M11.8523 13.2513C7.74082 13.3226 4.86459 16.3717 4.5 20.25H12.5M11.8523 13.2513C11.9014 13.2504 11.9506 13.25 12 13.25C12.3521 13.25 12.6954 13.2717 13.029 13.3138M11.8523 13.2513C11.2023 13.2626 10.5834 13.3483 10.0001 13.5M13.029 13.3138C13.3627 13.3559 13.6867 13.4184 14.0004 13.5M13.029 13.3138C13.7309 13.4024 14.3904 13.5812 15 13.838M18.25 15.25V18.25M18.25 18.25V21.25M18.25 18.25H15.25M18.25 18.25H21.25M15.75 6.5C15.75 8.57107 14.0711 10.25 12 10.25C9.92893 10.25 8.25 8.57107 8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ng._solidSVG='<path d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z" fill="currentColor"/><path d="M3.7533 20.1798C4.15473 15.9097 7.38415 12.5 12 12.5C13.7292 12.5 15.2639 12.9785 16.5281 13.8016C16.1986 14.193 16 14.6983 16 15.25V16H15.25C14.0074 16 13 17.0074 13 18.25C13 19.4926 14.0074 20.5 15.25 20.5H16V21H4.5C4.28888 21 4.08754 20.911 3.94541 20.7549C3.80328 20.5988 3.73354 20.39 3.7533 20.1798Z" fill="currentColor"/><path d="M19 15.25C19 14.8358 18.6642 14.5 18.25 14.5C17.8358 14.5 17.5 14.8358 17.5 15.25V17.5H15.25C14.8358 17.5 14.5 17.8358 14.5 18.25C14.5 18.6642 14.8358 19 15.25 19H17.5V21.25C17.5 21.6642 17.8358 22 18.25 22C18.6642 22 19 21.6642 19 21.25V19H21.25C21.6642 19 22 18.6642 22 18.25C22 17.8358 21.6642 17.5 21.25 17.5H19V15.25Z" fill="currentColor"/>',ng._name="people-add",ng._width=24,ng._height=24,ng._viewBox="0 0 24 24",ng=(0,s.Cc)([(0,C.Y$)("gds-icon-people-add")],ng);const lg=e=>{ng.define();const t=(0,n.p)("gds-icon-people-add"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ig=class extends R.M{};ig._regularSVG='<path d="M11.8523 13.2513C7.74082 13.3226 4.86459 16.3717 4.5 20.25H11.5M11.8523 13.2513C11.9014 13.2504 11.9506 13.25 12 13.25C12.3521 13.25 12.6954 13.2717 13.029 13.3138M11.8523 13.2513C11.2023 13.2626 10.5834 13.3483 10.0001 13.5M13.029 13.3138C13.3627 13.3559 13.6867 13.4184 14.0004 13.5M13.029 13.3138C13.7309 13.4024 14.3904 13.5812 15 13.838M14.75 18.6L16.95 20.25L20.25 14.75M15.75 6.5C15.75 8.57107 14.0711 10.25 12 10.25C9.92893 10.25 8.25 8.57107 8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ig._solidSVG='<path d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z" fill="currentColor"/><path d="M17.6589 14.6956C16.2284 13.3348 14.2839 12.5 12 12.5C7.38415 12.5 4.15473 15.9097 3.7533 20.1798C3.73354 20.39 3.80328 20.5988 3.94541 20.7549C4.08754 20.911 4.28888 21 4.5 21H14.2001L13.4001 20.4C12.406 19.6544 12.2045 18.2441 12.9501 17.25C13.6957 16.2559 15.106 16.0544 16.1001 16.8L16.3043 16.9531L17.6589 14.6956Z" fill="currentColor"/><path d="M20.8932 15.1359C21.1063 14.7807 20.9911 14.32 20.6359 14.1069C20.2807 13.8938 19.82 14.0089 19.6069 14.3641L16.7348 19.151L15.2 18C14.8687 17.7515 14.3986 17.8186 14.15 18.15C13.9015 18.4814 13.9687 18.9515 14.3 19.2L16.5 20.85C16.6699 20.9774 16.8858 21.0268 17.0942 20.986C17.3026 20.9452 17.4839 20.8179 17.5932 20.6359L20.8932 15.1359Z" fill="currentColor"/>',ig._name="people-added",ig._width=24,ig._height=24,ig._viewBox="0 0 24 24",ig=(0,s.Cc)([(0,C.Y$)("gds-icon-people-added")],ig);const ag=e=>{ig.define();const t=(0,n.p)("gds-icon-people-added"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let cg=class extends R.M{};cg._regularSVG='<path d="M5.85697 18.9157C7.17056 16.9968 9.33203 15.75 12 15.75C14.668 15.75 16.8294 16.9968 18.143 18.9157M5.85697 18.9157C7.49061 20.3679 9.6423 21.25 12 21.25C14.3577 21.25 16.5094 20.3679 18.143 18.9157M5.85697 18.9157C3.95086 17.2214 2.75 14.7509 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 14.7509 20.0491 17.2214 18.143 18.9157M15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',cg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 14.897 3.23192 17.5063 5.20047 19.3326C6.98474 20.9879 9.37418 22 12 22C14.6258 22 17.0153 20.9879 18.7995 19.3326C20.7681 17.5063 22 14.897 22 12C22 6.47715 17.5228 2 12 2ZM5.97605 17.9968C7.29919 16.174 9.41114 15 12 15C14.5889 15 16.7008 16.174 18.0239 17.9968C16.4847 19.543 14.3541 20.5 12 20.5C9.64589 20.5 7.51531 19.543 5.97605 17.9968ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" fill="currentColor"/>',cg._name="people-circle",cg._width=24,cg._height=24,cg._viewBox="0 0 24 24",cg=(0,s.Cc)([(0,C.Y$)("gds-icon-people-circle")],cg);const Cg=e=>{cg.define();const t=(0,n.p)("gds-icon-people-circle"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let dg=class extends R.M{};dg._regularSVG='<path d="M17.25 6.75V2.75H2.75V17.25H6.75M9.32626 21.25C9.78713 18.9642 11.7046 17.25 14 17.25C16.2954 17.25 18.2129 18.9642 18.6737 21.25M9.32626 21.25H6.75V6.75H21.25V21.25H18.6737M9.32626 21.25H18.6737M16.25 12.5C16.25 13.7426 15.2426 14.75 14 14.75C12.7574 14.75 11.75 13.7426 11.75 12.5C11.75 11.2574 12.7574 10.25 14 10.25C15.2426 10.25 16.25 11.2574 16.25 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',dg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2C2.33579 2 2 2.33579 2 2.75V17.25C2 17.6642 2.33579 18 2.75 18H6V21.25C6 21.6642 6.33579 22 6.75 22H21.25C21.6642 22 22 21.6642 22 21.25V6.75C22 6.33579 21.6642 6 21.25 6H18V2.75C18 2.33579 17.6642 2 17.25 2H2.75ZM6.75 6H16.5V3.5H3.5V16.5H6V6.75C6 6.33579 6.33579 6 6.75 6ZM14 16.5C11.8261 16.5 9.95493 18.0081 9.11653 20.1744C9.05507 20.3332 9.17533 20.5 9.34561 20.5H18.6544C18.8247 20.5 18.9449 20.3332 18.8835 20.1744C18.0451 18.0081 16.1738 16.5 14 16.5ZM14 15C15.3807 15 16.5 13.8807 16.5 12.5C16.5 11.1193 15.3807 10 14 10C12.6193 10 11.5 11.1193 11.5 12.5C11.5 13.8807 12.6193 15 14 15Z" fill="currentColor"/>',dg._name="people-copy",dg._width=24,dg._height=24,dg._viewBox="0 0 24 24",dg=(0,s.Cc)([(0,C.Y$)("gds-icon-people-copy")],dg);const hg=e=>{dg.define();const t=(0,n.p)("gds-icon-people-copy"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ug=class extends R.M{};ug._regularSVG='<path d="M15.75 6.5C15.75 8.57107 14.0711 10.25 12 10.25C9.92893 10.25 8.25 8.57107 8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 13.25C7.8098 13.25 4.86894 16.3254 4.5 20.25H19.5C19.1311 16.3254 16.1902 13.25 12 13.25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',ug._solidSVG='<path d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z" fill="currentColor"/><path d="M12 12.5C7.38412 12.5 4.15473 15.9097 3.7533 20.1798C3.73354 20.39 3.80328 20.5988 3.94541 20.7549C4.08754 20.911 4.28888 21 4.5 21H19.5C19.7111 21 19.9125 20.911 20.0546 20.7549C20.1967 20.5988 20.2665 20.39 20.2467 20.1798C19.8453 15.9097 16.6159 12.5 12 12.5Z" fill="currentColor"/>',ug._name="people-profile",ug._width=24,ug._height=24,ug._viewBox="0 0 24 24",ug=(0,s.Cc)([(0,C.Y$)("gds-icon-people-profile")],ug);const pg=e=>{ug.define();const t=(0,n.p)("gds-icon-people-profile"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let gg=class extends R.M{};gg._regularSVG='<path d="M20 16L18 18M18 18L16 20M18 18L16 16M18 18L20 20M11.8523 13.2513C7.74082 13.3226 4.86459 16.3717 4.5 20.25H12.25M11.8523 13.2513C11.9014 13.2504 11.9506 13.25 12 13.25C12.5201 13.25 13.0209 13.2974 13.5 13.3879M11.8523 13.2513C11.2023 13.2626 10.5834 13.3483 10.0001 13.5M15.75 6.5C15.75 8.57107 14.0711 10.25 12 10.25C9.92893 10.25 8.25 8.57107 8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',gg._solidSVG='<path d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z" fill="currentColor"/><path d="M3.7533 20.1798C4.15473 15.9097 7.38415 12.5 12 12.5C13.7415 12.5 15.2857 12.9854 16.5551 13.8192C15.8117 13.6307 14.9907 13.8273 14.409 14.409C13.5303 15.2877 13.5303 16.7123 14.409 17.591L14.818 18L14.409 18.409C13.708 19.11 13.5663 20.1585 13.9838 21H4.5C4.28888 21 4.08754 20.911 3.94541 20.7549C3.80328 20.5988 3.73354 20.39 3.7533 20.1798Z" fill="currentColor"/><path d="M20.5303 16.5303C20.8232 16.2374 20.8232 15.7626 20.5303 15.4697C20.2374 15.1768 19.7626 15.1768 19.4697 15.4697L18 16.9393L16.5303 15.4697C16.2374 15.1768 15.7626 15.1768 15.4697 15.4697C15.1768 15.7626 15.1768 16.2374 15.4697 16.5303L16.9393 18L15.4697 19.4697C15.1768 19.7626 15.1768 20.2374 15.4697 20.5303C15.7626 20.8232 16.2374 20.8232 16.5303 20.5303L18 19.0607L19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.0607 18L20.5303 16.5303Z" fill="currentColor"/>',gg._name="people-remove",gg._width=24,gg._height=24,gg._viewBox="0 0 24 24",gg=(0,s.Cc)([(0,C.Y$)("gds-icon-people-remove")],gg);const Mg=e=>{gg.define();const t=(0,n.p)("gds-icon-people-remove"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let mg=class extends R.M{};mg._regularSVG='<path d="M3.75 20.25V18.75C3.75 16.5409 5.54086 14.75 7.75 14.75H16.25C18.4591 14.75 20.25 16.5409 20.25 18.75V20.25M16.75 7.5C16.75 10.1234 14.6234 12.25 12 12.25C9.37665 12.25 7.25 10.1234 7.25 7.5C7.25 4.87665 9.37665 2.75 12 2.75C14.6234 2.75 16.75 4.87665 16.75 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',mg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 7.5C6.5 4.46243 8.96243 2 12 2C15.0376 2 17.5 4.46243 17.5 7.5C17.5 10.5376 15.0376 13 12 13C8.96243 13 6.5 10.5376 6.5 7.5Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.74416 21C3.32995 21 3 20.6642 3 20.25V18.75C3 16.1266 5.12665 14 7.75 14H16.25C18.8734 14 21 16.1266 21 18.75V20.25C21 20.6642 20.67 21 20.2558 21C17.0815 21 6.91849 21 3.74416 21Z" fill="currentColor"/>',mg._name="people",mg._width=24,mg._height=24,mg._viewBox="0 0 24 24",mg=(0,s.Cc)([(0,C.Y$)("gds-icon-people")],mg);const Vg=e=>{mg.define();const t=(0,n.p)("gds-icon-people"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let fg=class extends R.M{};fg._regularSVG='<path d="M16 8L8 16M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8.25C9.41421 8.25 9.75 8.58579 9.75 9C9.75 9.41421 9.41421 9.75 9 9.75C8.58579 9.75 8.25 9.41421 8.25 9C8.25 8.58579 8.58579 8.25 9 8.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 14.25C15.4142 14.25 15.75 14.5858 15.75 15C15.75 15.4142 15.4142 15.75 15 15.75C14.5858 15.75 14.25 15.4142 14.25 15C14.25 14.5858 14.5858 14.25 15 14.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>',fg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8 9C8 9.55228 8.44772 10 9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9ZM14 15C14 15.5523 14.4477 16 15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15ZM16.5303 8.53033C16.8232 8.23744 16.8232 7.76256 16.5303 7.46967C16.2374 7.17678 15.7626 7.17678 15.4697 7.46967L7.46967 15.4697C7.17678 15.7626 7.17678 16.2374 7.46967 16.5303C7.76256 16.8232 8.23744 16.8232 8.53033 16.5303L16.5303 8.53033Z" fill="currentColor"/>',fg._name="percent",fg._width=24,fg._height=24,fg._viewBox="0 0 24 24",fg=(0,s.Cc)([(0,C.Y$)("gds-icon-percent")],fg);const Lg=e=>{fg.define();const t=(0,n.p)("gds-icon-percent"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let _g=class extends R.M{};_g._regularSVG='<path d="M10.75 4.25H13.25M5.75 1.75H18.25V22.25H5.75V1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',_g._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 23C5.33579 23 5 22.6642 5 22.25V1.75C5 1.33579 5.33579 1 5.75 1H18.25C18.6642 1 19 1.33579 19 1.75V22.25C19 22.6642 18.6642 23 18.25 23H5.75ZM10.75 3.49C10.3358 3.49 10 3.82579 10 4.24C10 4.65421 10.3358 4.99 10.75 4.99H13.25C13.6642 4.99 14 4.65421 14 4.24C14 3.82579 13.6642 3.49 13.25 3.49H10.75Z" fill="currentColor"/>',_g._name="phone-dynamic-island",_g._width=24,_g._height=24,_g._viewBox="0 0 24 24",_g=(0,s.Cc)([(0,C.Y$)("gds-icon-phone-dynamic-island")],_g);const Hg=e=>{_g.define();const t=(0,n.p)("gds-icon-phone-dynamic-island"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let vg=class extends R.M{};vg._regularSVG='<path d="M9.75 19.25H14.25M5.75 1.75H18.25V22.25H5.75V1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',vg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.75C5 1.33579 5.33579 1 5.75 1H18.25C18.6642 1 19 1.33579 19 1.75V22.25C19 22.6642 18.6642 23 18.25 23H5.75C5.33579 23 5 22.6642 5 22.25V1.75ZM9.75 18.5C9.33579 18.5 9 18.8358 9 19.25C9 19.6642 9.33579 20 9.75 20H14.25C14.6642 20 15 19.6642 15 19.25C15 18.8358 14.6642 18.5 14.25 18.5H9.75Z" fill="currentColor"/>',vg._name="phone",vg._width=24,vg._height=24,vg._viewBox="0 0 24 24",vg=(0,s.Cc)([(0,C.Y$)("gds-icon-phone")],vg);const kg=e=>{vg.define();const t=(0,n.p)("gds-icon-phone"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let wg=class extends R.M{};wg._regularSVG='<path d="M21.25 9.25C20.7693 5.88913 18.1109 3.23074 14.75 2.75V9.25H21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.25 13C19.25 17.5563 15.5563 21.25 11 21.25C6.44365 21.25 2.75 17.5563 2.75 13C2.75 8.44365 6.44365 4.75 11 4.75C11.085 4.75 11.1697 4.75129 11.2541 4.75384V12.7502H19.2463C19.2488 12.8332 19.25 12.9164 19.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',wg._solidSVG='<path d="M14.2586 2.18337C14.4229 2.04092 14.6409 1.97677 14.8562 2.00756C18.5469 2.53548 21.4645 5.45306 21.9924 9.14381C22.0232 9.35906 21.9591 9.57708 21.8166 9.74136C21.6742 9.90564 21.4674 10 21.25 10H14.75C14.3358 10 14 9.66422 14 9.25001V2.75C14 2.53256 14.0944 2.32582 14.2586 2.18337Z" fill="currentColor"/><path d="M2 13C2 8.02944 6.02944 4 11 4C11.0926 4 11.1849 4.0014 11.2768 4.00418C11.682 4.01644 12.0041 4.34846 12.0041 4.75384V12.0002H19.2463C19.6518 12.0002 19.9839 12.3226 19.996 12.7279C19.9986 12.8183 20 12.909 20 13C20 17.9706 15.9706 22 11 22C6.02944 22 2 17.9706 2 13Z" fill="currentColor"/>',wg._name="pie-chart",wg._width=24,wg._height=24,wg._viewBox="0 0 24 24",wg=(0,s.Cc)([(0,C.Y$)("gds-icon-pie-chart")],wg);const bg=e=>{wg.define();const t=(0,n.p)("gds-icon-pie-chart"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Zg=class extends R.M{};Zg._regularSVG='<path d="M19.7181 14.5359C20.0626 13.7609 20.254 12.9028 20.254 12C20.254 8.54822 17.4558 5.75 14.004 5.75H10.004C9.93732 5.75 9.87088 5.75104 9.8047 5.75312C8.32457 3.97909 6.38818 3.75 5.75 3.75V7.4211C5.06066 8.06182 4.51621 8.85631 4.17124 9.75H1.75V14.25H4.17124C4.51621 15.1437 5.06066 15.9382 5.75 16.5789V20.25H10.25V18.25H13.75V20.25H18.25V16.5863C18.8686 16.0134 19.371 15.3168 19.7181 14.5359ZM19.7181 14.5359C20.085 14.9725 20.6351 15.25 21.25 15.25C22.3546 15.25 23.25 14.3546 23.25 13.25C23.25 12.777 23.0858 12.3424 22.8113 12M8 10.75H8.5M8.75 10.75C8.75 11.0261 8.52614 11.25 8.25 11.25C7.97386 11.25 7.75 11.0261 7.75 10.75C7.75 10.4739 7.97386 10.25 8.25 10.25C8.52614 10.25 8.75 10.4739 8.75 10.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Zg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.75C5 3.33579 5.33579 3 5.75 3C6.47743 3 8.50198 3.24069 10.1403 5H14.004C17.87 5 21.004 8.13401 21.004 12C21.004 12.8135 20.8649 13.5957 20.6089 14.3235C20.7965 14.4358 21.0156 14.5 21.25 14.5C21.9404 14.5 22.5 13.9404 22.5 13.25C22.5 12.9537 22.3978 12.6832 22.2262 12.4691C21.9671 12.1459 22.0191 11.6739 22.3422 11.4148C22.6654 11.1557 23.1374 11.2077 23.3965 11.5309C23.7738 12.0016 24 12.6004 24 13.25C24 14.7688 22.7688 16 21.25 16C20.7839 16 20.3448 15.8838 19.9602 15.6792C19.6857 16.1227 19.3632 16.533 19 16.9031V20.25C19 20.6642 18.6642 21 18.25 21H13.75C13.3358 21 13 20.6642 13 20.25V19H11V20.25C11 20.6642 10.6642 21 10.25 21H5.75C5.33579 21 5 20.6642 5 20.25V16.8949C4.46134 16.3443 4.01257 15.7048 3.67782 15H1.75C1.33579 15 1 14.6642 1 14.25V9.75C1 9.33579 1.33579 9 1.75 9H3.67782C4.01257 8.29522 4.46134 7.65571 5 7.1051V3.75ZM8.25 12C8.94036 12 9.5 11.4404 9.5 10.75C9.5 10.0596 8.94036 9.5 8.25 9.5C7.55964 9.5 7 10.0596 7 10.75C7 11.4404 7.55964 12 8.25 12Z" fill="currentColor"/>',Zg._name="piggy-bank",Zg._width=24,Zg._height=24,Zg._viewBox="0 0 24 24",Zg=(0,s.Cc)([(0,C.Y$)("gds-icon-piggy-bank")],Zg);const yg=e=>{Zg.define();const t=(0,n.p)("gds-icon-piggy-bank"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let xg=class extends R.M{};xg._regularSVG='<path d="M3.75 20.25L8.38235 15.6176M11.5 7.5L14.5 2.75L21.25 9.5L16.5 12.5L14 20.25L3.75 10L11.5 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',xg._solidSVG='<path d="M15.0303 2.21967C14.8692 2.0585 14.6434 1.97937 14.4169 2.00462C14.1904 2.02988 13.9876 2.15679 13.8659 2.34951L11.0111 6.86968L3.51976 9.28622C3.27115 9.36642 3.08218 9.5702 3.02092 9.82415C2.95967 10.0781 3.03497 10.3456 3.21969 10.5303L7.81436 15.125L3.21969 19.7197C2.92679 20.0126 2.92679 20.4874 3.21969 20.7803C3.51258 21.0732 3.98745 21.0732 4.28035 20.7803L8.87502 16.1857L13.4697 20.7803C13.6544 20.9651 13.9219 21.0403 14.1759 20.9791C14.4298 20.9178 14.6336 20.7289 14.7138 20.4803L17.1303 12.989L21.6505 10.1341C21.8432 10.0124 21.9701 9.80965 21.9954 9.58311C22.0207 9.35658 21.9415 9.13085 21.7803 8.96968L15.0303 2.21967Z" fill="currentColor"/>',xg._name="pin",xg._width=24,xg._height=24,xg._viewBox="0 0 24 24",xg=(0,s.Cc)([(0,C.Y$)("gds-icon-pin")],xg);const Sg=e=>{xg.define();const t=(0,n.p)("gds-icon-pin"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let $g=class extends R.M{};$g._regularSVG='<path d="M2.2625 7.61719C1.57917 9.39555 1.57917 10.9951 2.2625 12.7734M16.0947 5.85437L11.6336 8.53244L9.57308 4.82159C9.00409 3.79686 7.74391 3.44577 6.75838 4.03739C5.77286 4.62902 5.4352 5.93933 6.00419 6.96405L9.09494 12.5303L7.87114 12.3365C6.74613 12.1584 5.69523 12.9622 5.52389 14.132L5.3375 15.4045L10.9198 19.0656C13.2398 20.5871 16.1795 20.6469 18.5549 19.2209C22.0884 17.0997 23.2991 12.4017 21.259 8.72766L20.3167 7.03066C19.4632 5.49357 17.573 4.96693 16.0947 5.85437Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',$g._solidSVG='<path d="M11.3869 8.21721L16.2667 5.29567C17.8838 4.32756 19.9515 4.90208 20.8851 6.5789L21.9158 8.43017C24.1473 12.4382 22.823 17.5633 18.9579 19.8773C16.3595 21.4329 13.1439 21.3677 10.6061 19.7079L5.03468 16.0638C4.70855 15.8505 4.53605 15.4672 4.59267 15.0816L4.70368 14.3258C4.89111 13.0497 6.04065 12.1728 7.27126 12.3671L8.60993 12.5785L5.22907 6.50624C4.60667 5.38836 4.97603 3.95893 6.05405 3.31352C7.13208 2.66811 8.51055 3.05113 9.13295 4.16901L11.3869 8.21721Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.53151 6.91709C2.91816 7.06566 3.11117 7.49955 2.9626 7.8862C2.3458 9.49139 2.3458 10.8992 2.9626 12.5044C3.11117 12.8911 2.91816 13.325 2.53151 13.4735C2.14486 13.6221 1.71098 13.4291 1.5624 13.0424C0.812532 11.0909 0.812532 9.29971 1.5624 7.34818C1.71098 6.96152 2.14486 6.76852 2.53151 6.91709Z" fill="currentColor"/>',$g._name="pinch",$g._width=24,$g._height=24,$g._viewBox="0 0 24 24",$g=(0,s.Cc)([(0,C.Y$)("gds-icon-pinch")],$g);const Gg=e=>{$g.define();const t=(0,n.p)("gds-icon-pinch"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let jg=class extends R.M{};jg._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 3.75C7.55558 3.75 3.75 7.55558 3.75 12.25C3.75 16.9444 7.55558 20.75 12.25 20.75C16.9444 20.75 20.75 16.9444 20.75 12.25C20.75 7.55558 16.9444 3.75 12.25 3.75ZM2.25 12.25C2.25 6.72715 6.72715 2.25 12.25 2.25C17.7728 2.25 22.25 6.72715 22.25 12.25C22.25 17.7728 17.7728 22.25 12.25 22.25C6.72715 22.25 2.25 17.7728 2.25 12.25Z" fill="currentColor"/><path d="M10.25 15.0539V9.44607C10.25 9.04436 10.6998 8.80666 11.0317 9.03295L15.1441 11.8369C15.4352 12.0354 15.4352 12.4646 15.1441 12.6631L11.0317 15.467C10.6998 15.6933 10.25 15.4556 10.25 15.0539Z" fill="currentColor"/>',jg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.7817 8.78296C10.4498 8.55666 10 8.79436 10 9.19607V14.8039C10 15.2056 10.4498 15.4433 10.7817 15.217L14.8941 12.4131C15.1852 12.2146 15.1852 11.7854 14.8941 11.5869L10.7817 8.78296Z" fill="currentColor"/>',jg._name="play-circle",jg._width=24,jg._height=24,jg._viewBox="0 0 24 24",jg=(0,s.Cc)([(0,C.Y$)("gds-icon-play-circle")],jg);const Eg=e=>{jg.define();const t=(0,n.p)("gds-icon-play-circle"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Bg=class extends R.M{};Bg._regularSVG='<path d="M21.25 12L5.75 2.75V21.25L21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',Bg._solidSVG='<path d="M6.13434 2.10597C5.90259 1.96766 5.6144 1.96454 5.3797 2.09779C5.145 2.23104 5 2.48011 5 2.75V21.25C5 21.5199 5.145 21.769 5.3797 21.9022C5.6144 22.0355 5.90259 22.0323 6.13434 21.894L21.6343 12.644C21.8611 12.5087 22 12.2641 22 12C22 11.7359 21.8611 11.4913 21.6343 11.356L6.13434 2.10597Z" fill="currentColor"/>',Bg._name="play",Bg._width=24,Bg._height=24,Bg._viewBox="0 0 24 24",Bg=(0,s.Cc)([(0,C.Y$)("gds-icon-play")],Bg);const qg=e=>{Bg.define();const t=(0,n.p)("gds-icon-play"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ng=class extends R.M{};Ng._regularSVG='<path d="M12 3.75V12M12 12V20.25M12 12H3.75M12 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ng._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25V3.75C11.25 3.33579 11.5858 3 12 3Z" fill="currentColor"/>',Ng._name="plus-large",Ng._width=24,Ng._height=24,Ng._viewBox="0 0 24 24",Ng=(0,s.Cc)([(0,C.Y$)("gds-icon-plus-large")],Ng);const Ig=e=>{Ng.define();const t=(0,n.p)("gds-icon-plus-large"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Yg=class extends R.M{};Yg._regularSVG='<path d="M12 6.75V12M12 12V17.25M12 12H6.75M12 12H17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',Yg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12.4142 6 12.75 6.33579 12.75 6.75V11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H12.75V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V12.75H6.75C6.33579 12.75 6 12.4142 6 12C6 11.5858 6.33579 11.25 6.75 11.25H11.25V6.75C11.25 6.33579 11.5858 6 12 6Z" fill="currentColor"/>',Yg._name="plus-small",Yg._width=24,Yg._height=24,Yg._viewBox="0 0 24 24",Yg=(0,s.Cc)([(0,C.Y$)("gds-icon-plus-small")],Yg);const zg=e=>{Yg.define();const t=(0,n.p)("gds-icon-plus-small"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Ag=class extends R.M{};Ag._regularSVG='<path d="M4.75 11.25V3.75H15L19.25 8V11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 20.25V14.75H5.5C6.32843 14.75 7 15.4216 7 16.25C7 17.0784 6.32843 17.75 5.5 17.75H4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 20.25V14.75H10L13.25 20.25H13.75V14.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.6961 15.2215C19.3191 14.8448 18.6504 14.7533 18.251 14.7782C17.1463 14.8473 16.1554 15.9981 16.1554 17.5608C16.1554 19.1236 17.0973 20.2499 18.4001 20.2499C19.0459 20.2418 19.8065 20.0485 20.25 19.5537V17.8333H19.1961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.75 4.25V9.25H18.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Ag._solidSVG='<path d="M13 3H4.75C4.33579 3 4 3.33579 4 3.75V12H20V10H13.75C13.3358 10 13 9.66421 13 9.25V3Z" fill="currentColor"/><path d="M20 8.5V8C20 7.80109 19.921 7.61032 19.7803 7.46967L15.5303 3.21967C15.3897 3.07902 15.1989 3 15 3H14.5V8.5H20Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.798 15.5765C18.614 15.5299 18.4251 15.5189 18.2978 15.5269C17.7041 15.564 16.9054 16.2667 16.9054 17.561C16.9054 18.8392 17.6295 19.4975 18.3957 19.5C18.8281 19.4938 19.2307 19.3873 19.5 19.2133V18.5834H19.1961C18.7819 18.5834 18.4461 18.2476 18.4461 17.8334C18.4461 17.4192 18.7819 17.0834 19.1961 17.0834H20.25C20.6642 17.0834 21 17.4192 21 17.8334V19.5538C21 19.7386 20.9318 19.9168 20.8085 20.0544C20.1617 20.7761 19.1466 20.9908 18.4095 20.9999L18.4001 21.0001C16.5623 21.0001 15.4054 19.4058 15.4054 17.561C15.4054 15.7297 16.5885 14.1308 18.2043 14.0298C18.4763 14.0128 18.8215 14.0351 19.1659 14.1223C19.5045 14.2079 19.9079 14.373 20.2262 14.691C20.5192 14.9837 20.5195 15.4586 20.2267 15.7516C19.934 16.0447 19.4591 16.0449 19.166 15.7522C19.1074 15.6935 18.9879 15.6245 18.798 15.5765Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 14.75C3 14.3358 3.33579 14 3.75 14H5.5C6.74264 14 7.75 15.0074 7.75 16.25C7.75 17.4926 6.74264 18.5 5.5 18.5H4.5V20.25C4.5 20.6642 4.16421 21 3.75 21C3.33579 21 3 20.6642 3 20.25V14.75ZM4.5 17H5.5C5.91421 17 6.25 16.6642 6.25 16.25C6.25 15.8358 5.91421 15.5 5.5 15.5H4.5V17Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 14.75C8.75 14.3358 9.08579 14 9.5 14H10C10.2652 14 10.5108 14.1401 10.6457 14.3685L13 18.3527V14.75C13 14.3358 13.3358 14 13.75 14C14.1642 14 14.5 14.3358 14.5 14.75V20.25C14.5 20.6642 14.1642 21 13.75 21H13.25C12.9848 21 12.7392 20.8599 12.6043 20.6315L10.25 16.6473V20.25C10.25 20.6642 9.91421 21 9.5 21C9.08579 21 8.75 20.6642 8.75 20.25V14.75Z" fill="currentColor"/>',Ag._name="png",Ag._width=24,Ag._height=24,Ag._viewBox="0 0 24 24",Ag=(0,s.Cc)([(0,C.Y$)("gds-icon-png")],Ag);const Tg=e=>{Ag.define();const t=(0,n.p)("gds-icon-png"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Rg=class extends R.M{};Rg._regularSVG='<path d="M9.25 9.75H7.5C5.98122 9.75 4.75 10.9812 4.75 12.5C4.75 13.2064 5.01633 13.8506 5.45405 14.3376M13.75 9.75H16.5C18.0188 9.75 19.25 10.9812 19.25 12.5C19.25 13.2308 18.965 13.895 18.5 14.3875M12.25 14.75H5.5C3.98122 14.75 2.75 15.9812 2.75 17.5C2.75 19.0188 3.98122 20.25 5.5 20.25H18.5C20.0188 20.25 21.25 19.0188 21.25 17.5C21.25 15.9812 20.0188 14.75 18.5 14.75H16.75M7.5 9.38747C7.03504 8.89496 6.75 8.23077 6.75 7.5C6.75 5.98122 7.98122 4.75 9.5 4.75H13V2.75C15.3472 2.75 17.25 4.42893 17.25 6.5C17.25 7.66147 16.6516 8.69962 15.7119 9.38747" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Rg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 2.75C12.25 2.33579 12.5858 2 13 2C15.6705 2 18 3.92926 18 6.5C18 7.46033 17.669 8.33663 17.118 9.05439C18.7562 9.34626 20 10.7779 20 12.5C20 13.1044 19.8466 13.673 19.5771 14.1689C20.9831 14.6231 22 15.9428 22 17.5C22 19.433 20.433 21 18.5 21H5.5C3.567 21 2 19.433 2 17.5C2 15.9428 3.01693 14.6231 4.4229 14.1689C4.15338 13.673 4 13.1044 4 12.5C4 10.9428 5.01693 9.62314 6.4229 9.16886C6.15338 8.67296 6 8.1044 6 7.5C6 5.567 7.567 4 9.5 4H12.25V2.75ZM10.75 9C10.3358 9 10 9.33579 10 9.75C10 10.1642 10.3358 10.5 10.75 10.5H12.25C12.6642 10.5 13 10.1642 13 9.75C13 9.33579 12.6642 9 12.25 9H10.75ZM13.75 14C13.3358 14 13 14.3358 13 14.75C13 15.1642 13.3358 15.5 13.75 15.5H15.25C15.6642 15.5 16 15.1642 16 14.75C16 14.3358 15.6642 14 15.25 14H13.75Z" fill="currentColor"/>',Rg._name="poop",Rg._width=24,Rg._height=24,Rg._viewBox="0 0 24 24",Rg=(0,s.Cc)([(0,C.Y$)("gds-icon-poop")],Rg);const Og=e=>{Rg.define();const t=(0,n.p)("gds-icon-poop"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Wg=class extends R.M{};Wg._regularSVG='<path d="M6.75 9.75H11.25M6.75 12.75H9.27M2.75 4.75H21.25V19.25H2.75V4.75ZM14.75 9.75H17.25V13.25H14.75V9.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Wg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H21.25C21.6642 4 22 4.33579 22 4.75V19.25C22 19.6642 21.6642 20 21.25 20H2.75C2.33579 20 2 19.6642 2 19.25V4.75ZM6 9.75C6 9.33579 6.33579 9 6.75 9H11.25C11.6642 9 12 9.33579 12 9.75C12 10.1642 11.6642 10.5 11.25 10.5H6.75C6.33579 10.5 6 10.1642 6 9.75ZM14 9.75C14 9.33579 14.3358 9 14.75 9H17.25C17.6642 9 18 9.33579 18 9.75V13.25C18 13.6642 17.6642 14 17.25 14H14.75C14.3358 14 14 13.6642 14 13.25V9.75ZM6 12.75C6 12.3358 6.33579 12 6.75 12H9.27C9.68421 12 10.02 12.3358 10.02 12.75C10.02 13.1642 9.68422 13.5 9.27 13.5H6.75C6.33579 13.5 6 13.1642 6 12.75Z" fill="currentColor"/>',Wg._name="postcard",Wg._width=24,Wg._height=24,Wg._viewBox="0 0 24 24",Wg=(0,s.Cc)([(0,C.Y$)("gds-icon-postcard")],Wg);const Pg=e=>{Wg.define();const t=(0,n.p)("gds-icon-postcard"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Fg=class extends R.M{};Fg._regularSVG='<path d="M14.5 7.50108C14.0061 7.03638 13.3306 6.75 12.5856 6.75C11.0725 6.75 9.8459 7.93147 9.8459 9.38889C9.8459 10.8463 11 12 11 12L10.9889 12.0278M14.2295 16.25H9.29795L10.9889 12.0278M10.9889 12.0278H8.75M10.9889 12.0278H14.2295M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Fg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10.5959 9.38889C10.5959 8.37195 11.46 7.5 12.5856 7.5C13.1358 7.5 13.6285 7.71089 13.9861 8.0473C14.2877 8.33115 14.7624 8.3167 15.0462 8.01503C15.3301 7.71336 15.3156 7.23871 15.0139 6.95486C14.3837 6.36188 13.5254 6 12.5856 6C10.6851 6 9.0959 7.49099 9.0959 9.38889C9.0959 10.1228 9.32537 10.7741 9.58373 11.2778H8.75C8.33579 11.2778 8 11.6136 8 12.0278C8 12.442 8.33579 12.7778 8.75 12.7778H9.8806L8.60171 15.9712C8.50916 16.2022 8.5373 16.4642 8.67681 16.6703C8.81632 16.8765 9.04903 17 9.29795 17H14.2295C14.6437 17 14.9795 16.6642 14.9795 16.25C14.9795 15.8358 14.6437 15.5 14.2295 15.5H10.4062L11.4964 12.7778H14.2295C14.6437 12.7778 14.9795 12.442 14.9795 12.0278C14.9795 11.6136 14.6437 11.2778 14.2295 11.2778H11.3641C11.2779 11.1705 11.17 11.0246 11.0623 10.849C10.8116 10.44 10.5959 9.92542 10.5959 9.38889Z" fill="currentColor"/>',Fg._name="pound",Fg._width=24,Fg._height=24,Fg._viewBox="0 0 24 24",Fg=(0,s.Cc)([(0,C.Y$)("gds-icon-pound")],Fg);const Dg=e=>{Fg.define();const t=(0,n.p)("gds-icon-pound"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Kg=class extends R.M{};Kg._regularSVG='<path d="M5.75 7.75H10.25L12.25 20.25H3.75L5.75 7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5.25V5.25C8 4.14543 8.89543 3.25 10 3.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 13.75L15.5714 12V14.5L20.8214 12V20.75H12.5714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Kg._solidSVG='<path d="M8.75 5.25C8.75 4.55964 9.30964 4 10 4H19.25C19.6642 4 20 3.66421 20 3.25C20 2.83579 19.6642 2.5 19.25 2.5H10C8.48122 2.5 7.25 3.73122 7.25 5.25C7.25 5.66421 7.58579 6 8 6C8.41421 6 8.75 5.66421 8.75 5.25Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.75001 7C5.38153 7 5.06764 7.26766 5.00943 7.63151L3.00943 20.1315C2.97473 20.3484 3.03682 20.5695 3.17932 20.7366C3.32181 20.9037 3.53039 21 3.75001 21H12.25C12.3155 21 12.38 20.9914 12.4421 20.975C12.5037 20.9913 12.5682 21 12.6345 21H20.25C20.6642 21 21 20.6642 21 20.25V11.5C21 11.2426 20.868 11.0032 20.6504 10.8658C20.4328 10.7284 20.1599 10.7122 19.9276 10.8229L15.75 12.8122V11.5C15.75 11.2411 15.6165 11.0006 15.3969 10.8636C15.1772 10.7266 14.9024 10.7126 14.67 10.8265L11.7321 12.2661L10.9906 7.63151C10.9324 7.26766 10.6185 7 10.25 7H5.75001ZM4.62954 19.5L6.38954 8.5H9.61047L11.3705 19.5H4.62954Z" fill="currentColor"/>',Kg._name="power-plant",Kg._width=24,Kg._height=24,Kg._viewBox="0 0 24 24",Kg=(0,s.Cc)([(0,C.Y$)("gds-icon-power-plant")],Kg);const Ug=e=>{Kg.define();const t=(0,n.p)("gds-icon-power-plant"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Jg=class extends R.M{};Jg._regularSVG='<path d="M9.25 10.75H6.75M6.75 13.75V21.25H17.25V13.75M6.75 13.75H17.25M6.75 13.75V17.25H2.75V6.75H21.25V17.25H17.25V13.75M6.75 2.75H17.25V6.75H6.75V2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Jg._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 2C6.33579 2 6 2.33579 6 2.75V6H2.75C2.33579 6 2 6.33579 2 6.75V17.25C2 17.6642 2.33579 18 2.75 18H6V21.25C6 21.6642 6.33579 22 6.75 22H17.25C17.6642 22 18 21.6642 18 21.25V18H21.25C21.6642 18 22 17.6642 22 17.25V6.75C22 6.33579 21.6642 6 21.25 6H18V2.75C18 2.33579 17.6642 2 17.25 2H6.75ZM16.5 6V3.5H7.5V6H16.5ZM16.5 14.5H7.5V20.5H16.5V14.5ZM6 10.75C6 10.3358 6.33579 10 6.75 10H9.25C9.66421 10 10 10.3358 10 10.75C10 11.1642 9.66421 11.5 9.25 11.5H6.75C6.33579 11.5 6 11.1642 6 10.75Z" fill="currentColor"/>',Jg._name="printer",Jg._width=24,Jg._height=24,Jg._viewBox="0 0 24 24",Jg=(0,s.Cc)([(0,C.Y$)("gds-icon-printer")],Jg);const Qg=e=>{Jg.define();const t=(0,n.p)("gds-icon-printer"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Xg=class extends R.M{};Xg._regularSVG='<path d="M4.52778 17.2499L1.75 20.1071M6.75 19.5356L5.08333 21.2499M2.75 12.2499C2.75 12.2499 6.51997 14.0199 8.25 15.7499C9.98003 17.48 11.75 21.2499 11.75 21.2499L15.25 17.9999V14.9999C19.25 12.9999 21.75 9.74992 21.25 2.74992C14.25 2.24992 11 4.74993 9 8.74994H6L2.75 12.2499ZM17.25 8.49992C17.25 9.46642 16.4665 10.2499 15.5 10.2499C14.5335 10.2499 13.75 9.46642 13.75 8.49992C13.75 7.53342 14.5335 6.74992 15.5 6.74992C16.4665 6.74992 17.25 7.53342 17.25 8.49992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Xg._solidSVG='<path d="M4.56017 21.85C4.70017 21.99 4.89017 22.06 5.08017 22.06C5.28017 22.06 5.47017 21.98 5.62017 21.83L7.29017 20.12C7.58017 19.82 7.58017 19.35 7.28017 19.06C6.98017 18.78 6.51017 18.78 6.22017 19.08L4.55017 20.79C4.26017 21.09 4.26017 21.56 4.56017 21.85Z" fill="currentColor"/><path d="M11.7457 22.0599C11.7486 22.06 11.7502 22.06 11.7502 22.06H11.7402L11.7457 22.0599Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6102 22.05C11.6451 22.0587 11.7259 22.0598 11.7457 22.0599C11.9337 22.0586 12.1115 21.9887 12.2502 21.86L15.7502 18.61C15.9002 18.47 15.9902 18.27 15.9902 18.06V15.52C20.5902 13.05 22.4402 9.08996 21.9902 2.75996C21.9702 2.38996 21.6702 2.09996 21.3002 2.06996C14.9702 1.60996 11.0102 3.46996 8.54017 8.05996H6.00017C5.79017 8.05996 5.59017 8.14996 5.45017 8.29996L2.20017 11.8C2.03017 11.97 1.96017 12.21 2.01017 12.45C2.06017 12.69 2.21017 12.89 2.43017 12.99C2.43017 12.99 2.43608 12.9928 2.44402 12.9966C2.69277 13.1156 6.15027 14.7701 7.72017 16.34C9.28266 17.9122 10.9488 21.3775 11.064 21.6172C11.0675 21.6245 11.0702 21.63 11.0702 21.63C11.1802 21.85 11.3702 22 11.6102 22.05ZM15.5 10.4999C16.6046 10.4999 17.5 9.60451 17.5 8.49994C17.5 7.39537 16.6046 6.49994 15.5 6.49994C14.3954 6.49994 13.5 7.39537 13.5 8.49994C13.5 9.60451 14.3954 10.4999 15.5 10.4999Z" fill="currentColor"/><path d="M1.23017 20.71C1.37017 20.85 1.56017 20.92 1.75017 20.92C1.95017 20.92 2.14017 20.84 2.29017 20.69L5.07017 17.83C5.36017 17.53 5.36017 17.06 5.06017 16.77C4.76017 16.49 4.29017 16.49 4.00017 16.79L1.22017 19.65C0.930172 19.95 0.930172 20.42 1.23017 20.71Z" fill="currentColor"/>',Xg._name="push",Xg._width=24,Xg._height=24,Xg._viewBox="0 0 24 24",Xg=(0,s.Cc)([(0,C.Y$)("gds-icon-push")],Xg);const eM=e=>{Xg.define();const t=(0,n.p)("gds-icon-push"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let tM=class extends R.M{};tM._regularSVG='<path d="M13.75 13.75V16.25H16.25M17.75 13.75H20.25M20.25 17.75H17.75V20.25M13.75 19.75V20.25M3.75 3.75H10.25V10.25H3.75V3.75ZM13.75 3.75H20.25V10.25H13.75V3.75ZM3.75 13.75H10.25V20.25H3.75V13.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',tM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H10.25C10.6642 3 11 3.33579 11 3.75V10.25C11 10.6642 10.6642 11 10.25 11H3.75C3.33579 11 3 10.6642 3 10.25V3.75ZM4.5 4.5V9.5H9.5V4.5H4.5ZM13 3.75C13 3.33579 13.3358 3 13.75 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11H13.75C13.3358 11 13 10.6642 13 10.25V3.75ZM14.5 4.5V9.5H19.5V4.5H14.5ZM3 13.75C3 13.3358 3.33579 13 3.75 13H10.25C10.6642 13 11 13.3358 11 13.75V20.25C11 20.6642 10.6642 21 10.25 21H3.75C3.33579 21 3 20.6642 3 20.25V13.75ZM4.5 14.5V19.5H9.5V14.5H4.5Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 13C14.1642 13 14.5 13.3358 14.5 13.75V15.5H16.25C16.6642 15.5 17 15.8358 17 16.25C17 16.6642 16.6642 17 16.25 17H13.75C13.3358 17 13 16.6642 13 16.25V13.75C13 13.3358 13.3358 13 13.75 13ZM17 13.75C17 13.3358 17.3358 13 17.75 13H20.25C20.6642 13 21 13.3358 21 13.75C21 14.1642 20.6642 14.5 20.25 14.5H17.75C17.3358 14.5 17 14.1642 17 13.75ZM17 17.75C17 17.3358 17.3358 17 17.75 17H20.25C20.6642 17 21 17.3358 21 17.75C21 18.1642 20.6642 18.5 20.25 18.5H18.5V20.25C18.5 20.6642 18.1642 21 17.75 21C17.3358 21 17 20.6642 17 20.25V17.75Z" fill="currentColor"/><path d="M5.5 15.5H8.5V18.5H5.5V15.5Z" fill="currentColor"/><path d="M5.5 5.5H8.5V8.5H5.5V5.5Z" fill="currentColor"/><path d="M15.5 5.5H18.5V8.5H15.5V5.5Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 19C14.1642 19 14.5 19.3358 14.5 19.75V20.25C14.5 20.6642 14.1642 21 13.75 21C13.3358 21 13 20.6642 13 20.25V19.75C13 19.3358 13.3358 19 13.75 19Z" fill="currentColor"/>',tM._name="qr-code",tM._width=24,tM._height=24,tM._viewBox="0 0 24 24",tM=(0,s.Cc)([(0,C.Y$)("gds-icon-qr-code")],tM);const rM=e=>{tM.define();const t=(0,n.p)("gds-icon-qr-code"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let oM=class extends R.M{};oM._regularSVG='<path d="M11.8227 17.75L10.7773 20.25M6.8 17.75L5.75 20.25M16.8228 17.75L15.7773 20.25M9.42188 14.25H16.125C18.4032 14.25 20.25 12.3777 20.25 10.0682C20.25 7.75863 18.4032 5.88636 16.125 5.88636C15.5908 5.88636 15.0803 5.98932 14.6117 6.17673C13.7313 4.15838 11.7388 2.75 9.42188 2.75C6.28939 2.75 3.75 5.32436 3.75 8.5C3.75 11.6756 6.28939 14.25 9.42188 14.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',oM._solidSVG='<path d="M9.42188 2C5.86553 2 3 4.91986 3 8.5C3 12.0801 5.86553 15 9.42188 15H16.125C18.827 15 21 12.7822 21 10.0682C21 7.35412 18.827 5.13636 16.125 5.13636C15.7367 5.13636 15.3585 5.18243 14.9956 5.26957C13.8902 3.32006 11.8116 2 9.42188 2Z" fill="currentColor"/><path d="M7.49149 18.0404C7.65188 17.6585 7.47232 17.2189 7.09042 17.0585C6.70853 16.8981 6.26891 17.0777 6.10851 17.4596L5.05851 19.9596C4.89812 20.3415 5.07768 20.7811 5.45958 20.9415C5.84147 21.1019 6.28109 20.9223 6.44149 20.5404L7.49149 18.0404Z" fill="currentColor"/><path d="M12.5147 18.0394C12.6745 17.6572 12.4942 17.2179 12.1121 17.0581C11.7299 16.8983 11.2906 17.0785 11.1308 17.4606L10.0853 19.9606C9.92553 20.3428 10.1058 20.7821 10.4879 20.9419C10.8701 21.1017 11.3094 20.9215 11.4692 20.5394L12.5147 18.0394Z" fill="currentColor"/><path d="M17.5147 18.0394C17.6745 17.6572 17.4943 17.2179 17.1122 17.0581C16.73 16.8983 16.2907 17.0785 16.1309 17.4606L15.0854 19.9606C14.9256 20.3428 15.1058 20.7821 15.488 20.9419C15.8701 21.1017 16.3095 20.9215 16.4693 20.5394L17.5147 18.0394Z" fill="currentColor"/>',oM._name="rainy",oM._width=24,oM._height=24,oM._viewBox="0 0 24 24",oM=(0,s.Cc)([(0,C.Y$)("gds-icon-rainy")],oM);const sM=e=>{oM.define();const t=(0,n.p)("gds-icon-rainy"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let nM=class extends R.M{};nM._regularSVG='<path d="M7.75 11.25V7.25C7.75 6.42157 7.07843 5.75 6.25 5.75C5.42157 5.75 4.75 6.42157 4.75 7.25V13.75C4.75 17.8921 8.10786 21.25 12.25 21.25C16.3921 21.25 19.75 17.8921 19.75 13.75V8H19.25C18.2065 8 17.2875 8.53275 16.75 9.3411M7.75 8.75V5.25C7.75 4.42157 8.42157 3.75 9.25 3.75C10.0784 3.75 10.75 4.42157 10.75 5.25V10.25M10.75 7.75V4.25C10.75 3.42157 11.4216 2.75 12.25 2.75C13.0784 2.75 13.75 3.42157 13.75 4.25V5.25M13.75 10.25V5.25M13.75 5.25C13.75 4.42157 14.4216 3.75 15.25 3.75C16.0784 3.75 16.75 4.42157 16.75 5.25V9.3411M13.75 16C13.75 14.4901 14.6693 13.1323 16.0712 12.5715L16.25 12.5V11C16.25 10.3866 16.4341 9.81626 16.75 9.3411" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0577 2C12.4417 2 11.9423 2.49746 11.9423 3.11111V10.3333C11.9423 10.6402 11.6926 10.8889 11.3846 10.8889C11.0766 10.8889 10.8269 10.6402 10.8269 10.3333V4.22222C10.8269 3.60857 10.3275 3.11111 9.71154 3.11111C9.09553 3.11111 8.59615 3.60857 8.59615 4.22222V11.4444C8.59615 11.7513 8.34647 12 8.03846 12C7.73046 12 7.48077 11.7513 7.48077 11.4444V6.44444C7.48077 5.8308 6.98139 5.33333 6.36538 5.33333C5.74937 5.33333 5.25 5.8308 5.25 6.44444V14.7778C5.25 18.7665 8.49594 22 12.5 22C16.5041 22 19.75 18.7665 19.75 14.7778V8.11111C19.2412 8.11111 18.7658 8.24637 18.3562 8.48239C17.5212 8.96352 16.9615 9.86142 16.9615 10.8889V12.3416C16.9615 12.698 16.7437 13.0185 16.4115 13.1508C15.0596 13.6896 14.1731 14.9939 14.1731 16.4444C14.1731 16.7513 13.9234 17 13.6154 17C13.3074 17 13.0577 16.7513 13.0577 16.4444C13.0577 14.5942 14.1561 12.925 15.8462 12.1825V10.8889C15.8462 9.56668 16.5088 8.3992 17.5192 7.69713V4.22222C17.5192 3.60857 17.0199 3.11111 16.4038 3.11111C15.7878 3.11111 15.2885 3.60857 15.2885 4.22222V10.3333C15.2885 10.6402 15.0388 10.8889 14.7308 10.8889C14.4228 10.8889 14.1731 10.6402 14.1731 10.3333V3.11111C14.1731 2.49746 13.6737 2 13.0577 2Z" fill="currentColor"/>',nM._name="raising-hand",nM._width=24,nM._height=24,nM._viewBox="0 0 24 24",nM=(0,s.Cc)([(0,C.Y$)("gds-icon-raising-hand")],nM);const lM=e=>{nM.define();const t=(0,n.p)("gds-icon-raising-hand"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let iM=class extends R.M{};iM._regularSVG='<path d="M0.75 9.75H2M23.25 9.75H22M14.0612 9.28239C13.4507 8.94319 12.7479 8.75 12 8.75C11.2521 8.75 10.5493 8.94319 9.93881 9.28239M10.25 12C10.25 14.3472 8.34721 16.25 6 16.25C3.65279 16.25 1.75 14.3472 1.75 12C1.75 9.65279 3.65279 7.75 6 7.75C8.34721 7.75 10.25 9.65279 10.25 12ZM22.25 12C22.25 14.3472 20.3472 16.25 18 16.25C15.6528 16.25 13.75 14.3472 13.75 12C13.75 9.65279 15.6528 7.75 18 7.75C20.3472 7.75 22.25 9.65279 22.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',iM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C4.36337 7 2.91098 7.78677 1.99972 9H0.75C0.335786 9 0 9.33579 0 9.75C0 10.1642 0.335786 10.5 0.75 10.5H1.22911C1.08024 10.9739 1 11.4779 1 12C1 14.7614 3.23858 17 6 17C8.76142 17 11 14.7614 11 12C11 11.2245 10.823 10.4891 10.5072 9.8332C10.9597 9.61946 11.4654 9.5 12 9.5C12.5346 9.5 13.0403 9.61946 13.4928 9.83321C13.177 10.4891 13 11.2245 13 12C13 14.7614 15.2386 17 18 17C20.7614 17 23 14.7614 23 12C23 11.4779 22.9198 10.9739 22.7709 10.5H23.25C23.6642 10.5 24 10.1642 24 9.75C24 9.33579 23.6642 9 23.25 9H22.0003C21.089 7.78677 19.6366 7 18 7C16.5586 7 15.2599 7.61041 14.3482 8.58476C13.6477 8.21159 12.8479 8 12 8C11.1521 8 10.3523 8.21159 9.65182 8.58476C8.74012 7.61041 7.44138 7 6 7Z" fill="currentColor"/>',iM._name="reading-list",iM._width=24,iM._height=24,iM._viewBox="0 0 24 24",iM=(0,s.Cc)([(0,C.Y$)("gds-icon-reading-list")],iM);const aM=e=>{iM.define();const t=(0,n.p)("gds-icon-reading-list"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let cM=class extends R.M{};cM._regularSVG='<path d="M8.75 7.75H15.25M8.75 11.75H11.25M4.75 2.75H19.25V21.25L16.6667 19L14.3333 21.25L12 19L9.66667 21.25L7.33333 19L4.75 21.25V2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',cM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75V21.25C20 21.544 19.8283 21.8108 19.5607 21.9326C19.2931 22.0544 18.9791 22.0086 18.7574 21.8156L16.6924 20.017L14.8539 21.7899C14.5634 22.07 14.1033 22.07 13.8127 21.7899L12 20.0419L10.1873 21.7899C9.89674 22.07 9.4366 22.07 9.14606 21.7899L7.30756 20.017L5.24259 21.8156C5.02091 22.0086 4.70687 22.0544 4.43931 21.9326C4.17175 21.8108 4 21.544 4 21.25V2.75ZM8 7.75C8 7.33579 8.33579 7 8.75 7H15.25C15.6642 7 16 7.33579 16 7.75C16 8.16421 15.6642 8.5 15.25 8.5H8.75C8.33579 8.5 8 8.16421 8 7.75ZM8 11.75C8 11.3358 8.33579 11 8.75 11H11.25C11.6642 11 12 11.3358 12 11.75C12 12.1642 11.6642 12.5 11.25 12.5H8.75C8.33579 12.5 8 12.1642 8 11.75Z" fill="currentColor"/>',cM._name="receipt-bill",cM._width=24,cM._height=24,cM._viewBox="0 0 24 24",cM=(0,s.Cc)([(0,C.Y$)("gds-icon-receipt-bill")],cM);const CM=e=>{cM.define();const t=(0,n.p)("gds-icon-receipt-bill"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let dM=class extends R.M{};dM._regularSVG='<path d="M12 6.75C7.44365 6.75 3.75 10.6172 3.75 16.2891V17.25H20.25V16.2891C20.25 10.6172 16.5563 6.75 12 6.75ZM12 6.75V3.75M3.7478 20.25H20.2478M12 17.5V20.25M9.75 3.75H14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',dM._solidSVG='<path d="M14.25 4.5H12.75V6.03193C17.4354 6.43365 21 10.5874 21 16.2891V17.25C21 17.6642 20.6642 18 20.25 18H12.75V19.5H20.248C20.6623 19.5 20.998 19.8358 20.998 20.25C20.998 20.6642 20.6623 21 20.248 21H3.74805C3.33383 21 2.99805 20.6642 2.99805 20.25C2.99805 19.8358 3.33383 19.5 3.74805 19.5H11.25V18H3.75C3.33579 18 3 17.6642 3 17.25V16.2891C3 10.5874 6.56459 6.43365 11.25 6.03193V4.5H9.75C9.33579 4.5 9 4.16421 9 3.75C9 3.33579 9.33579 3 9.75 3H14.25C14.6642 3 15 3.33579 15 3.75C15 4.16421 14.6642 4.5 14.25 4.5Z" fill="currentColor"/>',dM._name="receiption-bell",dM._width=24,dM._height=24,dM._viewBox="0 0 24 24",dM=(0,s.Cc)([(0,C.Y$)("gds-icon-receiption-bell")],dM);const hM=e=>{dM.define();const t=(0,n.p)("gds-icon-receiption-bell"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let uM=class extends R.M{};uM._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentColor"/><path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" fill="currentColor"/>',uM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>',uM._name="record",uM._width=24,uM._height=24,uM._viewBox="0 0 24 24",uM=(0,s.Cc)([(0,C.Y$)("gds-icon-record")],uM);const pM=e=>{uM.define();const t=(0,n.p)("gds-icon-record"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let gM=class extends R.M{};gM._regularSVG='<path d="M6.75 3.25L3.75 6.25L6.75 9.25M4.5 6.25H14.25C17.7018 6.25 20.5 9.04822 20.5 12.5C20.5 15.9518 17.7018 18.75 14.25 18.75H5.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',gM._solidSVG='<path d="M7.28033 3.78033C7.57322 3.48744 7.57322 3.01256 7.28033 2.71967C6.98744 2.42678 6.51256 2.42678 6.21967 2.71967L3.21967 5.71967C2.92678 6.01256 2.92678 6.48744 3.21967 6.78033L6.21967 9.78033C6.51256 10.0732 6.98744 10.0732 7.28033 9.78033C7.57322 9.48744 7.57322 9.01256 7.28033 8.71967L5.56066 7H14.25C17.2876 7 19.75 9.46243 19.75 12.5C19.75 15.5376 17.2876 18 14.25 18H5.75C5.33579 18 5 18.3358 5 18.75C5 19.1642 5.33579 19.5 5.75 19.5H14.25C18.116 19.5 21.25 16.366 21.25 12.5C21.25 8.63401 18.116 5.5 14.25 5.5H5.56066L7.28033 3.78033Z" fill="currentColor"/>',gM._name="refund",gM._width=24,gM._height=24,gM._viewBox="0 0 24 24",gM=(0,s.Cc)([(0,C.Y$)("gds-icon-refund")],gM);const MM=e=>{gM.define();const t=(0,n.p)("gds-icon-refund"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let mM=class extends R.M{};mM._regularSVG='<path d="M12 3.75H4.78125V13.25H19.2188V3.75H12ZM12 3.75V1.75M8.75 7.75V9.25M15.25 7.75V9.25M5.75 13.25V14.25M5.75 14.25V15C5.75 18.4518 8.54822 21.25 12 21.25C15.4518 21.25 18.25 18.4518 18.25 15V14.25M5.75 14.25L3.75 16.25M18.25 14.25V13.25M18.25 14.25L20.25 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',mM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C12.4142 1 12.75 1.33579 12.75 1.75V3H19.2188C19.633 3 19.9688 3.33579 19.9688 3.75V13.25C19.9688 13.6642 19.633 14 19.2188 14H19.0607L20.7803 15.7197C21.0732 16.0126 21.0732 16.4874 20.7803 16.7803C20.4874 17.0732 20.0126 17.0732 19.7197 16.7803L18.9304 15.991C18.449 19.3877 15.5296 22 12 22C8.47043 22 5.55099 19.3877 5.06961 15.991L4.28033 16.7803C3.98744 17.0732 3.51256 17.0732 3.21967 16.7803C2.92678 16.4874 2.92678 16.0126 3.21967 15.7197L4.93934 14H4.78125C4.36704 14 4.03125 13.6642 4.03125 13.25V3.75C4.03125 3.33579 4.36704 3 4.78125 3H11.25V1.75C11.25 1.33579 11.5858 1 12 1ZM5.53125 12.5V4.5H18.4688V12.5H5.53125ZM8.75 7C9.16421 7 9.5 7.33579 9.5 7.75V9.25C9.5 9.66421 9.16421 10 8.75 10C8.33579 10 8 9.66421 8 9.25V7.75C8 7.33579 8.33579 7 8.75 7ZM15.25 7C15.6642 7 16 7.33579 16 7.75V9.25C16 9.66421 15.6642 10 15.25 10C14.8358 10 14.5 9.66421 14.5 9.25V7.75C14.5 7.33579 14.8358 7 15.25 7Z" fill="currentColor"/>',mM._name="robot",mM._width=25,mM._height=24,mM._viewBox="0 0 25 24",mM=(0,s.Cc)([(0,C.Y$)("gds-icon-robot")],mM);const VM=e=>{mM.define();const t=(0,n.p)("gds-icon-robot"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let fM=class extends R.M{};fM._regularSVG='<path d="M6.86111 13.25H3.25L6.25 7.75H11.2292M6.86111 13.25L10.75 17.1389M6.86111 13.25L11.2292 7.75M10.75 17.1389V20.75L16.25 17.75V12.7708M10.75 17.1389L16.25 12.7708M16.25 12.7708C19.3333 9.94444 21.25 6.86111 21.25 2.75C17.1389 2.75 14.0556 4.66667 11.2292 7.75M4.80556 21.25H2.75V19.1944C2.75 18.0592 3.6703 17.1389 4.80556 17.1389C5.94081 17.1389 6.86111 18.0592 6.86111 19.1944C6.86111 20.3297 5.94081 21.25 4.80556 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',fM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14.3242L11.5 17.501V19.4866L15.5 17.3048V14.3242ZM10 17.4495L6.55045 14H3.25C2.9853 14 2.7402 13.8605 2.60508 13.6328C2.46995 13.4052 2.46482 13.1232 2.59158 12.8909L5.59158 7.39086C5.723 7.14992 5.97554 7 6.25 7H10.902C13.7571 3.96176 16.9703 2 21.25 2C21.6642 2 22 2.33579 22 2.75C22 7.02966 20.0382 10.2429 17 13.098V17.75C17 18.0245 16.8501 18.277 16.6091 18.4084L11.1091 21.4084C10.8768 21.5352 10.5948 21.53 10.3672 21.3949C10.1395 21.2598 10 21.0147 10 20.75V17.4495ZM6.499 12.5L9.67577 8.5H6.69522L4.51341 12.5H6.499ZM2 19.1944C2 17.645 3.25609 16.3889 4.80556 16.3889C6.35502 16.3889 7.61111 17.645 7.61111 19.1944C7.61111 20.7439 6.35502 22 4.80556 22H2.75C2.33579 22 2 21.6642 2 21.25V19.1944Z" fill="currentColor"/>',fM._name="rocket",fM._width=24,fM._height=24,fM._viewBox="0 0 24 24",fM=(0,s.Cc)([(0,C.Y$)("gds-icon-rocket")],fM);const LM=e=>{fM.define();const t=(0,n.p)("gds-icon-rocket"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let _M=class extends R.M{};_M._regularSVG='<g clip-path="url(#clip0_4963_339)"><path d="M9.75 16.75L14.25 7.25M3.75 3.75H20.25V20.25H3.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_4963_339"><rect width="24" height="24" fill="white"/></clipPath></defs>',_M._solidSVG='<g clip-path="url(#clip0_4963_344)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM14.5711 6.5722C14.9454 6.74952 15.1051 7.19672 14.9278 7.57106L10.4278 17.0711C10.2505 17.4454 9.80328 17.6051 9.42894 17.4278C9.05459 17.2505 8.89488 16.8033 9.0722 16.4289L13.5722 6.92894C13.7495 6.55459 14.1967 6.39488 14.5711 6.5722Z" fill="currentColor"/></g><defs><clipPath id="clip0_4963_344"><rect width="24" height="24" fill="white"/></clipPath></defs>',_M._name="run-shortcut",_M._width=24,_M._height=24,_M._viewBox="0 0 24 24",_M=(0,s.Cc)([(0,C.Y$)("gds-icon-run-shortcut")],_M);const HM=e=>{_M.define();const t=(0,n.p)("gds-icon-run-shortcut"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let vM=class extends R.M{};vM._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0711 18.679C20.9464 16.8036 22 14.2601 22 11.6079C22 8.95575 20.9464 6.41221 19.0711 4.53684C17.1957 2.66148 14.6522 1.60791 12 1.60791C9.34784 1.60791 6.8043 2.66148 4.92893 4.53684C3.05357 6.41221 2 8.95575 2 11.6079C2 14.2601 3.05357 16.8036 4.92893 18.679C6.8043 20.5543 9.34784 21.6079 12 21.6079C14.6522 21.6079 17.1957 20.5543 19.0711 18.679ZM11.8542 2.2752C11.8542 2.19443 11.9192 2.1294 12 2.1294C12.0808 2.1294 12.1458 2.19443 12.1458 2.2752V3.9569C12.1458 4.03768 12.0808 4.1027 12 4.1027C11.9192 4.1027 11.8542 4.03768 11.8542 3.9569V2.2752ZM11.0166 2.18981C11.0266 2.18865 11.0365 2.18865 11.0462 2.18969C11.1138 2.19625 11.1694 2.24939 11.1768 2.31969L11.2502 3.02324C11.2586 3.10357 11.2007 3.175 11.1203 3.18338C11.04 3.19177 10.9686 3.13384 10.9602 3.0535L10.8867 2.34995C10.8783 2.26961 10.9362 2.19819 11.0166 2.18981ZM12.8298 2.32032C12.8372 2.25003 12.8929 2.19689 12.9605 2.19038C12.9701 2.18952 12.98 2.18953 12.99 2.19057C13.0704 2.19901 13.1283 2.27044 13.1199 2.35077L13.0459 3.05432C13.0374 3.13465 12.966 3.19253 12.8857 3.18407C12.8053 3.17563 12.7474 3.10414 12.7558 3.02381L12.8298 2.32032ZM10.037 2.33489C10.0468 2.33281 10.0567 2.33185 10.0664 2.33177C10.1343 2.33124 10.1952 2.37819 10.2098 2.44733L10.5581 4.0926C10.5748 4.17162 10.5247 4.24866 10.4457 4.26539C10.3666 4.28212 10.2895 4.23197 10.2728 4.15295L9.92453 2.50774C9.9078 2.42872 9.95796 2.35162 10.037 2.33489ZM13.7967 2.44868C13.8114 2.37955 13.8723 2.33246 13.9402 2.33316C13.9499 2.33316 13.9598 2.33428 13.9696 2.33636C14.0486 2.35314 14.0988 2.43026 14.082 2.50927L13.7325 4.15429C13.7157 4.23329 13.6386 4.28341 13.5596 4.26661C13.4806 4.24983 13.4305 4.17271 13.4473 4.0937L13.7967 2.44868ZM9.07379 2.60214C9.093 2.59577 9.11249 2.59369 9.13137 2.59542C9.18799 2.60023 9.23877 2.63809 9.25747 2.69571L9.47606 3.36849C9.50103 3.44531 9.45932 3.52725 9.3825 3.55223C9.30568 3.57719 9.22374 3.53542 9.19876 3.4586L8.98017 2.78581C8.9552 2.70899 8.99697 2.62711 9.07379 2.60214ZM14.7439 2.69606C14.7626 2.63845 14.8133 2.60058 14.87 2.59577C14.8888 2.59417 14.9084 2.5962 14.9276 2.60244C15.0044 2.62741 15.0461 2.70936 15.0212 2.78617L14.8024 3.45896C14.7775 3.53576 14.6955 3.5775 14.6187 3.55252C14.5419 3.52755 14.5002 3.4456 14.5251 3.36878L14.7439 2.69606ZM8.15014 2.9465C8.16859 2.93829 8.18776 2.93414 8.2067 2.93379C8.26352 2.93269 8.31796 2.96514 8.34255 3.0205L9.02566 4.55723C9.05847 4.63104 9.02537 4.71685 8.9516 4.74965C8.87779 4.78246 8.79198 4.74946 8.75917 4.67565L8.07614 3.13892C8.04333 3.06512 8.07637 2.9793 8.15014 2.9465ZM15.6691 3.02547C15.6938 2.97016 15.7483 2.93791 15.8051 2.93895C15.824 2.93937 15.8432 2.94352 15.8616 2.95173C15.9354 2.98464 15.9683 3.07051 15.9354 3.14428L15.2503 4.68006C15.2174 4.75382 15.1315 4.78671 15.0577 4.7538C14.984 4.72089 14.9511 4.63502 14.984 4.56126L15.6691 3.02547ZM7.26536 3.40724C7.29159 3.39207 7.32043 3.38584 7.34842 3.38791C7.39508 3.39118 7.43926 3.41688 7.46451 3.4606L7.81821 4.07323C7.8586 4.14318 7.8348 4.232 7.76485 4.27238C7.6949 4.31277 7.60609 4.28898 7.5657 4.21902L7.212 3.6064C7.17162 3.53645 7.19541 3.44763 7.26536 3.40724ZM16.5356 3.46059C16.5608 3.41687 16.6049 3.39103 16.6516 3.38791C16.6796 3.38598 16.7085 3.3921 16.7347 3.40723C16.8047 3.44762 16.8285 3.53644 16.7881 3.60639L16.4344 4.21901C16.394 4.28896 16.3052 4.31276 16.2352 4.27237C16.1653 4.23199 16.1414 4.14317 16.1818 4.07322L16.5356 3.46059ZM6.43433 3.93554C6.45885 3.91777 6.48694 3.90877 6.515 3.90773C6.56173 3.90613 6.6083 3.9271 6.63795 3.96796L7.62547 5.32919C7.67292 5.39457 7.65847 5.48539 7.59309 5.53281C7.52771 5.58023 7.43683 5.56578 7.3894 5.50039L6.40194 4.13916C6.35449 4.07378 6.36895 3.98297 6.43433 3.93554ZM17.3724 3.97517C17.4021 3.93436 17.4487 3.91341 17.4955 3.91514C17.5235 3.91614 17.5516 3.92529 17.5761 3.9431C17.6414 3.99061 17.6557 4.08146 17.6082 4.14678L16.6189 5.50669C16.5714 5.57198 16.4806 5.58628 16.4152 5.53877C16.3499 5.49125 16.3356 5.4004 16.3831 5.33508L17.3724 3.97517ZM5.66483 4.56986C5.69485 4.54284 5.73282 4.53041 5.77004 4.53249C5.80726 4.53444 5.84376 4.55064 5.87078 4.58067L6.34403 5.1064C6.39809 5.16643 6.39326 5.25831 6.33322 5.31235C6.27319 5.3664 6.18137 5.36157 6.12734 5.30154L5.65402 4.77575C5.59997 4.71572 5.6048 4.6239 5.66483 4.56986ZM18.1303 4.58172C18.1573 4.55171 18.1938 4.5356 18.231 4.53352C18.2683 4.53157 18.3062 4.5439 18.3362 4.57092C18.3962 4.62496 18.4011 4.71684 18.347 4.77687L17.8736 5.30253C17.8196 5.36254 17.7278 5.36739 17.6678 5.31334C17.6077 5.25929 17.6029 5.16742 17.657 5.10739L18.1303 4.58172ZM4.95536 5.26652C4.98238 5.23651 5.01883 5.2204 5.05604 5.21832C5.09327 5.21636 5.13119 5.2287 5.16122 5.25572L6.41114 6.38085C6.47119 6.4349 6.47596 6.52671 6.42191 6.58674C6.36787 6.64676 6.27606 6.65159 6.21603 6.59755L4.96617 5.47241C4.90615 5.41837 4.90132 5.32656 4.95536 5.26652ZM18.8432 5.26056C18.8733 5.23356 18.9113 5.22116 18.9485 5.22324C18.9857 5.22522 19.0222 5.24147 19.0492 5.2715C19.1032 5.33157 19.0983 5.42339 19.0382 5.47739L17.7875 6.60165C17.7677 6.61949 17.7444 6.63091 17.7201 6.63603L13.1432 12.8051L5.03249 18.2612L5.46379 17.6798L5.15679 17.9558C5.09672 18.0098 5.0049 18.0049 4.9509 17.9449C4.8969 17.8848 4.90178 17.793 4.96185 17.739L6.21252 16.6147C6.23224 16.597 6.25538 16.5856 6.27948 16.5804L10.8568 10.4107L18.9675 4.95464L18.535 5.53768L18.8432 5.26056ZM4.33928 6.04195C4.36895 6.00112 4.41555 5.98006 4.46229 5.98179C4.49034 5.9828 4.51848 5.99187 4.54297 6.00967L5.11526 6.42547C5.18059 6.47295 5.19495 6.56381 5.14747 6.62916C5.1 6.69452 5.0092 6.70885 4.94385 6.66137L4.37156 6.24557C4.3062 6.19809 4.2918 6.10729 4.33928 6.04195ZM19.461 6.0149C19.4855 5.9971 19.5136 5.98813 19.5417 5.98709C19.5884 5.98549 19.635 6.00646 19.6646 6.04732C19.7121 6.1127 19.6977 6.20351 19.6323 6.25094L19.0597 6.66637C18.9943 6.71379 18.9035 6.69939 18.856 6.63402C18.8086 6.56863 18.8231 6.47776 18.8885 6.43033L19.461 6.0149ZM3.7914 6.86884C3.81664 6.82512 3.86078 6.79928 3.90743 6.79617C3.93542 6.79423 3.96433 6.80034 3.99055 6.81548L5.44693 7.65633C5.51688 7.69672 5.54067 7.78554 5.50029 7.85549C5.4599 7.92544 5.37108 7.94923 5.30113 7.90885L3.84476 7.068C3.77481 7.02761 3.75101 6.93879 3.7914 6.86884ZM20.0095 6.81549C20.0357 6.80032 20.0646 6.79409 20.0926 6.79617C20.1392 6.79943 20.1834 6.82514 20.2087 6.86886C20.2491 6.93881 20.2253 7.02762 20.1553 7.06801L18.6989 7.90886C18.6289 7.94925 18.5401 7.92545 18.4997 7.8555C18.4593 7.78555 18.4831 7.69673 18.5531 7.65635L20.0095 6.81549ZM3.35194 7.75065C3.37662 7.69534 3.4311 7.66281 3.48792 7.6642C3.50685 7.66458 3.52606 7.66867 3.54449 7.67691L4.19053 7.9651C4.26429 7.998 4.29724 8.08388 4.26434 8.15765C4.23143 8.23142 4.14556 8.2643 4.07179 8.23139L3.42569 7.9432C3.35192 7.9103 3.31903 7.82442 3.35194 7.75065ZM20.4583 7.6829C20.4767 7.67469 20.496 7.67054 20.5149 7.67019C20.5717 7.66906 20.6261 7.70143 20.6508 7.75677C20.6836 7.83057 20.6507 7.91642 20.5769 7.94926L19.9307 8.23701C19.8569 8.26986 19.771 8.23687 19.7381 8.16307C19.7053 8.08928 19.7383 8.00346 19.8121 7.97059L20.4583 7.6829ZM2.98786 8.67163C3.00663 8.61403 3.0574 8.5762 3.11403 8.57145C3.1329 8.56986 3.15248 8.57191 3.17167 8.57818L4.77062 9.09919C4.84744 9.12422 4.88907 9.2062 4.86406 9.28299C4.83904 9.35977 4.75706 9.40144 4.68026 9.37643L3.0813 8.85543C3.00449 8.8304 2.96285 8.74842 2.98786 8.67163ZM20.8305 8.58441C20.8498 8.57803 20.8692 8.57595 20.8881 8.57769C20.9447 8.58249 20.9955 8.62036 21.0143 8.67798C21.0393 8.75479 20.9975 8.83674 20.9207 8.86171L19.3214 9.38159C19.2446 9.40656 19.1626 9.36484 19.1376 9.28802C19.1127 9.21121 19.1544 9.12926 19.2312 9.10429L20.8305 8.58441ZM2.73755 9.6394C2.75225 9.57027 2.81316 9.52312 2.88108 9.52381C2.89078 9.52381 2.90066 9.525 2.91053 9.52708L3.60244 9.67414C3.68144 9.69093 3.73156 9.76804 3.71476 9.84705C3.69796 9.92605 3.62085 9.97617 3.54184 9.95937L2.84987 9.81232C2.77087 9.79552 2.72075 9.71841 2.73755 9.6394ZM21.0899 9.52832C21.0997 9.52658 21.1095 9.52528 21.1192 9.5252C21.1872 9.52462 21.2481 9.5715 21.2628 9.64063C21.2796 9.71964 21.2294 9.79675 21.1504 9.81355L20.4585 9.96054C20.3795 9.97732 20.3024 9.92717 20.2856 9.84816C20.2688 9.76915 20.3189 9.69211 20.3979 9.67531L21.0899 9.52832ZM2.57408 10.6116C2.5815 10.5413 2.63716 10.4882 2.70477 10.4818C2.71443 10.4808 2.7243 10.4809 2.73434 10.4819L4.40673 10.6587C4.48706 10.6672 4.5449 10.7387 4.53642 10.819C4.52793 10.8994 4.45641 10.9572 4.37609 10.9487L2.7037 10.7719C2.62337 10.7634 2.56559 10.6919 2.57408 10.6116ZM21.2672 10.4945C21.2772 10.4933 21.2871 10.4933 21.2968 10.4943C21.3644 10.5009 21.42 10.554 21.4273 10.6243C21.4357 10.7047 21.3778 10.7761 21.2974 10.7845L19.6249 10.959C19.5445 10.9674 19.4731 10.9095 19.4647 10.8292C19.4563 10.7488 19.5142 10.6774 19.5946 10.669L21.2672 10.4945ZM2.53066 11.6082C2.53066 11.5274 2.59568 11.4624 2.67645 11.4624H3.38384C3.46461 11.4624 3.5297 11.5274 3.5297 11.6082C3.5297 11.6889 3.46461 11.7539 3.38384 11.7539H2.67645C2.59568 11.7539 2.53066 11.6889 2.53066 11.6082ZM20.4704 11.6082C20.4704 11.5274 20.5354 11.4624 20.6162 11.4624H21.3236C21.4043 11.4624 21.4694 11.5274 21.4694 11.6082C21.4694 11.6889 21.4043 11.7539 21.3236 11.7539H20.6162C20.5354 11.7539 20.4704 11.6889 20.4704 11.6082ZM4.3752 12.2573C4.38525 12.2561 4.39512 12.2561 4.40478 12.2572C4.47239 12.2637 4.528 12.3169 4.53534 12.3871C4.54372 12.4675 4.48581 12.5389 4.40547 12.5473L2.73282 12.7218C2.65249 12.7302 2.58107 12.6723 2.57269 12.592C2.56431 12.5116 2.62222 12.4402 2.70256 12.4318L4.3752 12.2573ZM19.4637 12.3973C19.4711 12.327 19.5267 12.274 19.5943 12.2675C19.604 12.2666 19.6139 12.2666 19.624 12.2676L21.2963 12.4444C21.3766 12.4529 21.4345 12.5244 21.426 12.6047C21.4175 12.6851 21.346 12.7429 21.2657 12.7344L19.5933 12.5576C19.513 12.5491 19.4552 12.4776 19.4637 12.3973ZM3.5416 13.2555C3.55147 13.2535 3.56134 13.2525 3.57104 13.2524C3.63896 13.2519 3.69983 13.2988 3.71451 13.3679C3.73129 13.4469 3.6812 13.524 3.6022 13.5408L2.91022 13.6878C2.83121 13.7045 2.75411 13.6545 2.73731 13.5754C2.72053 13.4964 2.77061 13.4193 2.84962 13.4025L3.5416 13.2555ZM20.2853 13.3693C20.3 13.3002 20.3609 13.2531 20.4288 13.2538C20.4385 13.2538 20.4484 13.2549 20.4582 13.257L21.1501 13.4041C21.2291 13.4209 21.2793 13.498 21.2625 13.577C21.2457 13.6561 21.1685 13.7061 21.0895 13.6893L20.3976 13.5423C20.3186 13.5255 20.2685 13.4483 20.2853 13.3693ZM4.67869 13.8348C4.69789 13.8284 4.71738 13.8263 4.73626 13.8281C4.79289 13.8329 4.84369 13.8707 4.86243 13.9283C4.8874 14.0052 4.84562 14.0871 4.7688 14.1121L3.16952 14.632C3.09271 14.6569 3.01076 14.6152 2.98579 14.5384C2.96082 14.4616 3.00254 14.3796 3.07936 14.3546L4.67869 13.8348ZM19.136 13.9334C19.1548 13.8758 19.2055 13.838 19.2622 13.8332C19.281 13.8316 19.3006 13.8337 19.3198 13.8399L20.9188 14.361C20.9956 14.386 21.0373 14.468 21.0122 14.5448C20.9872 14.6215 20.9052 14.6632 20.8284 14.6382L19.2295 14.1172C19.1526 14.0922 19.111 14.0102 19.136 13.9334ZM4.0694 14.9794C4.08784 14.9712 4.10702 14.9671 4.12597 14.9667C4.18278 14.9656 4.23726 14.998 4.26188 15.0533C4.29473 15.1271 4.2618 15.2129 4.18801 15.2458L3.54172 15.5335C3.46793 15.5663 3.3821 15.5334 3.34923 15.4596C3.31638 15.3858 3.34932 15.2999 3.42311 15.2671L4.0694 14.9794ZM19.7357 15.0587C19.7604 15.0034 19.8149 14.9709 19.8717 14.9723C19.8907 14.9726 19.9099 14.9767 19.9283 14.985L20.5743 15.2732C20.6481 15.3061 20.681 15.3919 20.6481 15.4657C20.6152 15.5395 20.5293 15.5724 20.4555 15.5395L19.8095 15.2513C19.7357 15.2184 19.7028 15.1325 19.7357 15.0587ZM5.30113 15.3075C5.32737 15.2924 5.35627 15.2861 5.38425 15.2882C5.43091 15.2915 5.47503 15.3172 5.50029 15.3609C5.54067 15.4308 5.51688 15.5197 5.44693 15.5601L3.99055 16.4009C3.9206 16.4413 3.83179 16.4175 3.7914 16.3475C3.75101 16.2776 3.77481 16.1888 3.84476 16.1484L5.30113 15.3075ZM18.4997 15.3609C18.525 15.3172 18.5692 15.2913 18.6158 15.2882C18.6438 15.2863 18.6727 15.2924 18.6989 15.3075L20.1553 16.1484C20.2253 16.1888 20.2491 16.2776 20.2087 16.3475C20.1683 16.4175 20.0794 16.4413 20.0095 16.4009L18.5531 15.5601C18.4831 15.5197 18.4593 15.4308 18.4997 15.3609ZM4.94032 16.55C4.96484 16.5322 4.99294 16.5232 5.02099 16.5221C5.06773 16.5205 5.11436 16.5416 5.14401 16.5824C5.19143 16.6478 5.17697 16.7386 5.11159 16.786L4.53899 17.2015C4.47361 17.2489 4.3828 17.2344 4.33536 17.1691C4.28794 17.1037 4.3024 17.0129 4.36778 16.9654L4.94032 16.55ZM18.8525 16.5872C18.8822 16.5464 18.9288 16.5253 18.9756 16.5271C19.0036 16.5281 19.0317 16.5372 19.0562 16.555L19.6285 16.9708C19.6938 17.0183 19.7082 17.1091 19.6607 17.1744C19.6133 17.2398 19.5225 17.2542 19.4571 17.2067L18.8848 16.7909C18.8195 16.7434 18.8051 16.6526 18.8525 16.5872ZM17.5781 16.6296C17.6051 16.5996 17.6416 16.5835 17.6788 16.5814C17.716 16.5795 17.7539 16.5918 17.784 16.6188L19.0339 17.7439C19.0939 17.798 19.0987 17.8898 19.0447 17.9498C18.9907 18.0099 18.8988 18.0147 18.8387 17.9606L17.5889 16.8355C17.5289 16.7815 17.524 16.6896 17.5781 16.6296ZM7.38114 17.7095C7.41084 17.6687 7.45749 17.6478 7.50422 17.6495C7.53227 17.6505 7.56034 17.6596 7.58483 17.6774C7.65012 17.7249 7.66442 17.8158 7.6169 17.8811L6.62761 19.241C6.5801 19.3063 6.48924 19.3206 6.42393 19.2731C6.35864 19.2256 6.34434 19.1347 6.39185 19.0694L7.38114 17.7095ZM16.407 17.6834C16.4315 17.6656 16.4596 17.6566 16.4877 17.6556C16.5344 17.654 16.581 17.675 16.6106 17.7158L17.5981 19.077C17.6455 19.1424 17.631 19.2332 17.5657 19.2807C17.5003 19.3281 17.4095 19.3136 17.362 19.2482L16.3746 17.887C16.3272 17.8216 16.3416 17.7308 16.407 17.6834ZM6.12638 17.9138C6.1534 17.8838 6.1899 17.8677 6.22712 17.8656C6.26434 17.8637 6.30226 17.876 6.33229 17.903C6.3923 17.957 6.39715 18.0489 6.3431 18.1089L5.86972 18.6346C5.81568 18.6946 5.72386 18.6995 5.66384 18.6454C5.6038 18.5914 5.59901 18.4995 5.65306 18.4395L6.12638 17.9138ZM17.6669 17.9037C17.6969 17.8767 17.7348 17.8642 17.772 17.8663C17.8092 17.8683 17.8457 17.8845 17.8727 17.9145L18.346 18.4402C18.4 18.5003 18.3952 18.5921 18.3352 18.6462C18.2751 18.7002 18.1833 18.6954 18.1293 18.6354L17.656 18.1096C17.602 18.0495 17.6068 17.9577 17.6669 17.9037ZM8.7498 18.5359C8.77448 18.4806 8.8289 18.4481 8.88572 18.4495C8.90465 18.4499 8.92392 18.454 8.94234 18.4622C9.01611 18.4951 9.049 18.581 9.01609 18.6547L8.33091 20.1905C8.29801 20.2643 8.21213 20.2972 8.13837 20.2643C8.0646 20.2314 8.03171 20.1455 8.06462 20.0717L8.7498 18.5359ZM15.0484 18.4664C15.0669 18.4581 15.0861 18.4541 15.105 18.4537C15.1619 18.4526 15.2163 18.485 15.2409 18.5404L15.9239 20.0771C15.9567 20.1509 15.9237 20.2367 15.8499 20.2695C15.7761 20.3023 15.6903 20.2693 15.6575 20.1955L14.9744 18.6588C14.9416 18.585 14.9746 18.4992 15.0484 18.4664ZM7.5657 18.997C7.59094 18.9533 7.63508 18.9274 7.68173 18.9243C7.70972 18.9224 7.73863 18.9285 7.76485 18.9436C7.8348 18.984 7.8586 19.0728 7.81821 19.1428L7.46451 19.7554C7.42413 19.8254 7.33531 19.8492 7.26536 19.8088C7.19541 19.7684 7.17162 19.6796 7.212 19.6096L7.5657 18.997ZM16.2352 18.9436C16.2615 18.9285 16.2903 18.9222 16.3183 18.9243C16.3649 18.9276 16.4091 18.9533 16.4344 18.997L16.7881 19.6096C16.8285 19.6796 16.8047 19.7684 16.7347 19.8088C16.6648 19.8492 16.5759 19.8254 16.5356 19.7554L16.1819 19.1428C16.1415 19.0729 16.1653 18.984 16.2352 18.9436ZM10.2676 19.0618C10.2823 18.9927 10.3431 18.9456 10.4111 18.9463C10.4207 18.9463 10.4306 18.9474 10.4405 18.9495C10.5195 18.9663 10.5696 19.0434 10.5528 19.1224L10.2033 20.7674C10.1866 20.8464 10.1094 20.8965 10.0304 20.8797C9.95143 20.863 9.90131 20.7858 9.91811 20.7068L10.2676 19.0618ZM13.5544 18.9504C13.5643 18.9484 13.5741 18.9474 13.5838 18.9473C13.6517 18.9468 13.7126 18.9938 13.7272 19.0629L14.0756 20.7081C14.0923 20.7871 14.0421 20.8642 13.9631 20.8809C13.8841 20.8977 13.807 20.8475 13.7903 20.7685L13.442 19.1232C13.4252 19.0442 13.4754 18.9672 13.5544 18.9504ZM11.8542 19.259C11.8542 19.1783 11.9192 19.1133 12 19.1133C12.0808 19.1133 12.1458 19.1783 12.1458 19.259V20.9408C12.1458 21.0215 12.0808 21.0865 12 21.0865C11.9192 21.0865 11.8542 21.0215 11.8542 20.9408V19.259ZM9.19757 19.757C9.21629 19.6994 9.2671 19.6615 9.32373 19.6567C9.3426 19.6551 9.36211 19.6572 9.3813 19.6634C9.4581 19.6884 9.49984 19.7703 9.47487 19.8471L9.25621 20.5199C9.23124 20.5967 9.14929 20.6385 9.07247 20.6135C8.99567 20.5885 8.95393 20.5066 8.9789 20.4297L9.19757 19.757ZM14.6176 19.6637C14.6368 19.6574 14.6563 19.6553 14.6751 19.657C14.7318 19.6618 14.7825 19.6997 14.8013 19.7573L15.0199 20.4301C15.0449 20.5069 15.0031 20.5888 14.9263 20.6138C14.8495 20.6387 14.7675 20.597 14.7425 20.5202L14.5239 19.8474C14.499 19.7706 14.5408 19.6887 14.6176 19.6637ZM10.9541 20.1616C10.9615 20.0913 11.0172 20.0382 11.0848 20.0317C11.0945 20.0308 11.1044 20.0308 11.1144 20.0318C11.1947 20.0403 11.2526 20.1118 11.2442 20.1921L11.1702 20.8956C11.1618 20.9759 11.0903 21.0338 11.01 21.0254C10.9296 21.0169 10.8718 20.9455 10.8802 20.8651L10.9541 20.1616ZM12.8797 20.0325C12.8897 20.0314 12.8996 20.0314 12.9093 20.0324C12.9769 20.039 13.0325 20.0921 13.0399 20.1624L13.1133 20.866C13.1217 20.9463 13.0638 21.0177 12.9834 21.0261C12.9031 21.0345 12.8317 20.9766 12.8233 20.8963L12.7498 20.1927C12.7414 20.1123 12.7993 20.0409 12.8797 20.0325Z" fill="currentColor"/>',vM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0711 18.679C20.9464 16.8036 22 14.2601 22 11.6079C22 8.95575 20.9464 6.41221 19.0711 4.53684C17.1957 2.66148 14.6522 1.60791 12 1.60791C9.34784 1.60791 6.8043 2.66148 4.92893 4.53684C3.05357 6.41221 2 8.95575 2 11.6079C2 14.2601 3.05357 16.8036 4.92893 18.679C6.8043 20.5543 9.34784 21.6079 12 21.6079C14.6522 21.6079 17.1957 20.5543 19.0711 18.679ZM11.8542 2.2752C11.8542 2.19443 11.9192 2.1294 12 2.1294C12.0808 2.1294 12.1458 2.19443 12.1458 2.2752V3.9569C12.1458 4.03768 12.0808 4.1027 12 4.1027C11.9192 4.1027 11.8542 4.03768 11.8542 3.9569V2.2752ZM11.0166 2.18981C11.0266 2.18865 11.0365 2.18865 11.0462 2.18969C11.1138 2.19625 11.1694 2.24939 11.1768 2.31969L11.2502 3.02324C11.2586 3.10357 11.2007 3.175 11.1203 3.18338C11.04 3.19177 10.9686 3.13384 10.9602 3.0535L10.8867 2.34995C10.8783 2.26961 10.9362 2.19819 11.0166 2.18981ZM12.8298 2.32032C12.8372 2.25003 12.8929 2.19689 12.9605 2.19038C12.9701 2.18952 12.98 2.18953 12.99 2.19057C13.0704 2.19901 13.1283 2.27044 13.1199 2.35077L13.0459 3.05432C13.0374 3.13465 12.966 3.19253 12.8857 3.18407C12.8053 3.17563 12.7474 3.10414 12.7558 3.02381L12.8298 2.32032ZM10.037 2.33489C10.0468 2.33281 10.0567 2.33185 10.0664 2.33177C10.1343 2.33124 10.1952 2.37819 10.2098 2.44733L10.5581 4.0926C10.5748 4.17162 10.5247 4.24866 10.4457 4.26539C10.3666 4.28212 10.2895 4.23197 10.2728 4.15295L9.92453 2.50774C9.9078 2.42872 9.95796 2.35162 10.037 2.33489ZM13.7967 2.44868C13.8114 2.37955 13.8723 2.33246 13.9402 2.33316C13.9499 2.33316 13.9598 2.33428 13.9696 2.33636C14.0486 2.35314 14.0988 2.43026 14.082 2.50927L13.7325 4.15429C13.7157 4.23329 13.6386 4.28341 13.5596 4.26661C13.4806 4.24983 13.4305 4.17271 13.4473 4.0937L13.7967 2.44868ZM9.07379 2.60214C9.093 2.59577 9.11249 2.59369 9.13137 2.59542C9.18799 2.60023 9.23877 2.63809 9.25747 2.69571L9.47606 3.36849C9.50103 3.44531 9.45932 3.52725 9.3825 3.55223C9.30568 3.57719 9.22374 3.53542 9.19876 3.4586L8.98017 2.78581C8.9552 2.70899 8.99697 2.62711 9.07379 2.60214ZM14.7439 2.69606C14.7626 2.63845 14.8133 2.60058 14.87 2.59577C14.8888 2.59417 14.9084 2.5962 14.9276 2.60244C15.0044 2.62741 15.0461 2.70936 15.0212 2.78617L14.8024 3.45896C14.7775 3.53576 14.6955 3.5775 14.6187 3.55252C14.5419 3.52755 14.5002 3.4456 14.5251 3.36878L14.7439 2.69606ZM8.15014 2.9465C8.16859 2.93829 8.18776 2.93414 8.2067 2.93379C8.26352 2.93269 8.31796 2.96514 8.34255 3.0205L9.02566 4.55723C9.05847 4.63104 9.02537 4.71685 8.9516 4.74965C8.87779 4.78246 8.79198 4.74946 8.75917 4.67565L8.07614 3.13892C8.04333 3.06512 8.07637 2.9793 8.15014 2.9465ZM15.6691 3.02547C15.6938 2.97016 15.7483 2.93791 15.8051 2.93895C15.824 2.93937 15.8432 2.94352 15.8616 2.95173C15.9354 2.98464 15.9683 3.07051 15.9354 3.14428L15.2503 4.68006C15.2174 4.75382 15.1315 4.78671 15.0577 4.7538C14.984 4.72089 14.9511 4.63502 14.984 4.56126L15.6691 3.02547ZM7.26536 3.40724C7.29159 3.39207 7.32043 3.38584 7.34842 3.38791C7.39508 3.39118 7.43926 3.41688 7.46451 3.4606L7.81821 4.07323C7.8586 4.14318 7.8348 4.232 7.76485 4.27238C7.6949 4.31277 7.60609 4.28898 7.5657 4.21902L7.212 3.6064C7.17162 3.53645 7.19541 3.44763 7.26536 3.40724ZM16.5356 3.46059C16.5608 3.41687 16.6049 3.39103 16.6516 3.38791C16.6796 3.38598 16.7085 3.3921 16.7347 3.40723C16.8047 3.44762 16.8285 3.53644 16.7881 3.60639L16.4344 4.21901C16.394 4.28896 16.3052 4.31276 16.2352 4.27237C16.1653 4.23199 16.1414 4.14317 16.1818 4.07322L16.5356 3.46059ZM6.43433 3.93554C6.45885 3.91777 6.48694 3.90877 6.515 3.90773C6.56173 3.90613 6.6083 3.9271 6.63795 3.96796L7.62547 5.32919C7.67292 5.39457 7.65847 5.48539 7.59309 5.53281C7.52771 5.58023 7.43683 5.56578 7.3894 5.50039L6.40194 4.13916C6.35449 4.07378 6.36895 3.98297 6.43433 3.93554ZM17.3724 3.97517C17.4021 3.93436 17.4487 3.91341 17.4955 3.91514C17.5235 3.91614 17.5516 3.92529 17.5761 3.9431C17.6414 3.99061 17.6557 4.08146 17.6082 4.14678L16.6189 5.50669C16.5714 5.57198 16.4806 5.58628 16.4152 5.53877C16.3499 5.49125 16.3356 5.4004 16.3831 5.33508L17.3724 3.97517ZM5.66483 4.56986C5.69485 4.54284 5.73282 4.53041 5.77004 4.53249C5.80726 4.53444 5.84376 4.55064 5.87078 4.58067L6.34403 5.1064C6.39809 5.16643 6.39326 5.25831 6.33322 5.31235C6.27319 5.3664 6.18137 5.36157 6.12734 5.30154L5.65402 4.77575C5.59997 4.71572 5.6048 4.6239 5.66483 4.56986ZM18.1303 4.58172C18.1573 4.55171 18.1938 4.5356 18.231 4.53352C18.2683 4.53157 18.3062 4.5439 18.3362 4.57092C18.3962 4.62496 18.4011 4.71684 18.347 4.77687L17.8736 5.30253C17.8196 5.36254 17.7278 5.36739 17.6678 5.31334C17.6077 5.25929 17.6029 5.16742 17.657 5.10739L18.1303 4.58172ZM4.95536 5.26652C4.98238 5.23651 5.01883 5.2204 5.05604 5.21832C5.09327 5.21636 5.13119 5.2287 5.16122 5.25572L6.41114 6.38085C6.47119 6.4349 6.47596 6.52671 6.42191 6.58674C6.36787 6.64676 6.27606 6.65159 6.21603 6.59755L4.96617 5.47241C4.90615 5.41837 4.90132 5.32656 4.95536 5.26652ZM18.8432 5.26056C18.8733 5.23356 18.9113 5.22116 18.9485 5.22324C18.9857 5.22522 19.0222 5.24147 19.0492 5.2715C19.1032 5.33157 19.0983 5.42339 19.0382 5.47739L17.7875 6.60165C17.7677 6.61949 17.7444 6.63091 17.7201 6.63603L13.1432 12.8051L5.03249 18.2612L5.46379 17.6798L5.15679 17.9558C5.09672 18.0098 5.0049 18.0049 4.9509 17.9449C4.8969 17.8848 4.90178 17.793 4.96185 17.739L6.21252 16.6147C6.23224 16.597 6.25538 16.5856 6.27948 16.5804L10.8568 10.4107L18.9675 4.95464L18.535 5.53768L18.8432 5.26056ZM4.33928 6.04195C4.36895 6.00112 4.41555 5.98006 4.46229 5.98179C4.49034 5.9828 4.51848 5.99187 4.54297 6.00967L5.11526 6.42547C5.18059 6.47295 5.19495 6.56381 5.14747 6.62916C5.1 6.69452 5.0092 6.70885 4.94385 6.66137L4.37156 6.24557C4.3062 6.19809 4.2918 6.10729 4.33928 6.04195ZM19.461 6.0149C19.4855 5.9971 19.5136 5.98813 19.5417 5.98709C19.5884 5.98549 19.635 6.00646 19.6646 6.04732C19.7121 6.1127 19.6977 6.20351 19.6323 6.25094L19.0597 6.66637C18.9943 6.71379 18.9035 6.69939 18.856 6.63402C18.8086 6.56863 18.8231 6.47776 18.8885 6.43033L19.461 6.0149ZM3.7914 6.86884C3.81664 6.82512 3.86078 6.79928 3.90743 6.79617C3.93542 6.79423 3.96433 6.80034 3.99055 6.81548L5.44693 7.65633C5.51688 7.69672 5.54067 7.78554 5.50029 7.85549C5.4599 7.92544 5.37108 7.94923 5.30113 7.90885L3.84476 7.068C3.77481 7.02761 3.75101 6.93879 3.7914 6.86884ZM20.0095 6.81549C20.0357 6.80032 20.0646 6.79409 20.0926 6.79617C20.1392 6.79943 20.1834 6.82514 20.2087 6.86886C20.2491 6.93881 20.2253 7.02762 20.1553 7.06801L18.6989 7.90886C18.6289 7.94925 18.5401 7.92545 18.4997 7.8555C18.4593 7.78555 18.4831 7.69673 18.5531 7.65635L20.0095 6.81549ZM3.35194 7.75065C3.37662 7.69534 3.4311 7.66281 3.48792 7.6642C3.50685 7.66458 3.52606 7.66867 3.54449 7.67691L4.19053 7.9651C4.26429 7.998 4.29724 8.08388 4.26434 8.15765C4.23143 8.23142 4.14556 8.2643 4.07179 8.23139L3.42569 7.9432C3.35192 7.9103 3.31903 7.82442 3.35194 7.75065ZM20.4583 7.6829C20.4767 7.67469 20.496 7.67054 20.5149 7.67019C20.5717 7.66906 20.6261 7.70143 20.6508 7.75677C20.6836 7.83057 20.6507 7.91642 20.5769 7.94926L19.9307 8.23701C19.8569 8.26986 19.771 8.23687 19.7381 8.16307C19.7053 8.08928 19.7383 8.00346 19.8121 7.97059L20.4583 7.6829ZM2.98786 8.67163C3.00663 8.61403 3.0574 8.5762 3.11403 8.57145C3.1329 8.56986 3.15248 8.57191 3.17167 8.57818L4.77062 9.09919C4.84744 9.12422 4.88907 9.2062 4.86406 9.28299C4.83904 9.35977 4.75706 9.40144 4.68026 9.37643L3.0813 8.85543C3.00449 8.8304 2.96285 8.74842 2.98786 8.67163ZM20.8305 8.58441C20.8498 8.57803 20.8692 8.57595 20.8881 8.57769C20.9447 8.58249 20.9955 8.62036 21.0143 8.67798C21.0393 8.75479 20.9975 8.83674 20.9207 8.86171L19.3214 9.38159C19.2446 9.40656 19.1626 9.36484 19.1376 9.28802C19.1127 9.21121 19.1544 9.12926 19.2312 9.10429L20.8305 8.58441ZM2.73755 9.6394C2.75225 9.57027 2.81316 9.52312 2.88108 9.52381C2.89078 9.52381 2.90066 9.525 2.91053 9.52708L3.60244 9.67414C3.68144 9.69093 3.73156 9.76804 3.71476 9.84705C3.69796 9.92605 3.62085 9.97617 3.54184 9.95937L2.84987 9.81232C2.77087 9.79552 2.72075 9.71841 2.73755 9.6394ZM21.0899 9.52832C21.0997 9.52658 21.1095 9.52528 21.1192 9.5252C21.1872 9.52462 21.2481 9.5715 21.2628 9.64063C21.2796 9.71964 21.2294 9.79675 21.1504 9.81355L20.4585 9.96054C20.3795 9.97732 20.3024 9.92717 20.2856 9.84816C20.2688 9.76915 20.3189 9.69211 20.3979 9.67531L21.0899 9.52832ZM2.57408 10.6116C2.5815 10.5413 2.63716 10.4882 2.70477 10.4818C2.71443 10.4808 2.7243 10.4809 2.73434 10.4819L4.40673 10.6587C4.48706 10.6672 4.5449 10.7387 4.53642 10.819C4.52793 10.8994 4.45641 10.9572 4.37609 10.9487L2.7037 10.7719C2.62337 10.7634 2.56559 10.6919 2.57408 10.6116ZM21.2672 10.4945C21.2772 10.4933 21.2871 10.4933 21.2968 10.4943C21.3644 10.5009 21.42 10.554 21.4273 10.6243C21.4357 10.7047 21.3778 10.7761 21.2974 10.7845L19.6249 10.959C19.5445 10.9674 19.4731 10.9095 19.4647 10.8292C19.4563 10.7488 19.5142 10.6774 19.5946 10.669L21.2672 10.4945ZM2.53066 11.6082C2.53066 11.5274 2.59568 11.4624 2.67645 11.4624H3.38384C3.46461 11.4624 3.5297 11.5274 3.5297 11.6082C3.5297 11.6889 3.46461 11.7539 3.38384 11.7539H2.67645C2.59568 11.7539 2.53066 11.6889 2.53066 11.6082ZM20.4704 11.6082C20.4704 11.5274 20.5354 11.4624 20.6162 11.4624H21.3236C21.4043 11.4624 21.4694 11.5274 21.4694 11.6082C21.4694 11.6889 21.4043 11.7539 21.3236 11.7539H20.6162C20.5354 11.7539 20.4704 11.6889 20.4704 11.6082ZM4.3752 12.2573C4.38525 12.2561 4.39512 12.2561 4.40478 12.2572C4.47239 12.2637 4.528 12.3169 4.53534 12.3871C4.54372 12.4675 4.48581 12.5389 4.40547 12.5473L2.73282 12.7218C2.65249 12.7302 2.58107 12.6723 2.57269 12.592C2.56431 12.5116 2.62222 12.4402 2.70256 12.4318L4.3752 12.2573ZM19.4637 12.3973C19.4711 12.327 19.5267 12.274 19.5943 12.2675C19.604 12.2666 19.6139 12.2666 19.624 12.2676L21.2963 12.4444C21.3766 12.4529 21.4345 12.5244 21.426 12.6047C21.4175 12.6851 21.346 12.7429 21.2657 12.7344L19.5933 12.5576C19.513 12.5491 19.4552 12.4776 19.4637 12.3973ZM3.5416 13.2555C3.55147 13.2535 3.56134 13.2525 3.57104 13.2524C3.63896 13.2519 3.69983 13.2988 3.71451 13.3679C3.73129 13.4469 3.6812 13.524 3.6022 13.5408L2.91022 13.6878C2.83121 13.7045 2.75411 13.6545 2.73731 13.5754C2.72053 13.4964 2.77061 13.4193 2.84962 13.4025L3.5416 13.2555ZM20.2853 13.3693C20.3 13.3002 20.3609 13.2531 20.4288 13.2538C20.4385 13.2538 20.4484 13.2549 20.4582 13.257L21.1501 13.4041C21.2291 13.4209 21.2793 13.498 21.2625 13.577C21.2457 13.6561 21.1685 13.7061 21.0895 13.6893L20.3976 13.5423C20.3186 13.5255 20.2685 13.4483 20.2853 13.3693ZM4.67869 13.8348C4.69789 13.8284 4.71738 13.8263 4.73626 13.8281C4.79289 13.8329 4.84369 13.8707 4.86243 13.9283C4.8874 14.0052 4.84562 14.0871 4.7688 14.1121L3.16952 14.632C3.09271 14.6569 3.01076 14.6152 2.98579 14.5384C2.96082 14.4616 3.00254 14.3796 3.07936 14.3546L4.67869 13.8348ZM19.136 13.9334C19.1548 13.8758 19.2055 13.838 19.2622 13.8332C19.281 13.8316 19.3006 13.8337 19.3198 13.8399L20.9188 14.361C20.9956 14.386 21.0373 14.468 21.0122 14.5448C20.9872 14.6215 20.9052 14.6632 20.8284 14.6382L19.2295 14.1172C19.1526 14.0922 19.111 14.0102 19.136 13.9334ZM4.0694 14.9794C4.08784 14.9712 4.10702 14.9671 4.12597 14.9667C4.18278 14.9656 4.23726 14.998 4.26188 15.0533C4.29473 15.1271 4.2618 15.2129 4.18801 15.2458L3.54172 15.5335C3.46793 15.5663 3.3821 15.5334 3.34923 15.4596C3.31638 15.3858 3.34932 15.2999 3.42311 15.2671L4.0694 14.9794ZM19.7357 15.0587C19.7604 15.0034 19.8149 14.9709 19.8717 14.9723C19.8907 14.9726 19.9099 14.9767 19.9283 14.985L20.5743 15.2732C20.6481 15.3061 20.681 15.3919 20.6481 15.4657C20.6152 15.5395 20.5293 15.5724 20.4555 15.5395L19.8095 15.2513C19.7357 15.2184 19.7028 15.1325 19.7357 15.0587ZM5.30113 15.3075C5.32737 15.2924 5.35627 15.2861 5.38425 15.2882C5.43091 15.2915 5.47503 15.3172 5.50029 15.3609C5.54067 15.4308 5.51688 15.5197 5.44693 15.5601L3.99055 16.4009C3.9206 16.4413 3.83179 16.4175 3.7914 16.3475C3.75101 16.2776 3.77481 16.1888 3.84476 16.1484L5.30113 15.3075ZM18.4997 15.3609C18.525 15.3172 18.5692 15.2913 18.6158 15.2882C18.6438 15.2863 18.6727 15.2924 18.6989 15.3075L20.1553 16.1484C20.2253 16.1888 20.2491 16.2776 20.2087 16.3475C20.1683 16.4175 20.0794 16.4413 20.0095 16.4009L18.5531 15.5601C18.4831 15.5197 18.4593 15.4308 18.4997 15.3609ZM4.94032 16.55C4.96484 16.5322 4.99294 16.5232 5.02099 16.5221C5.06773 16.5205 5.11436 16.5416 5.14401 16.5824C5.19143 16.6478 5.17697 16.7386 5.11159 16.786L4.53899 17.2015C4.47361 17.2489 4.3828 17.2344 4.33536 17.1691C4.28794 17.1037 4.3024 17.0129 4.36778 16.9654L4.94032 16.55ZM18.8525 16.5872C18.8822 16.5464 18.9288 16.5253 18.9756 16.5271C19.0036 16.5281 19.0317 16.5372 19.0562 16.555L19.6285 16.9708C19.6938 17.0183 19.7082 17.1091 19.6607 17.1744C19.6133 17.2398 19.5225 17.2542 19.4571 17.2067L18.8848 16.7909C18.8195 16.7434 18.8051 16.6526 18.8525 16.5872ZM17.5781 16.6296C17.6051 16.5996 17.6416 16.5835 17.6788 16.5814C17.716 16.5795 17.7539 16.5918 17.784 16.6188L19.0339 17.7439C19.0939 17.798 19.0987 17.8898 19.0447 17.9498C18.9907 18.0099 18.8988 18.0147 18.8387 17.9606L17.5889 16.8355C17.5289 16.7815 17.524 16.6896 17.5781 16.6296ZM7.38114 17.7095C7.41084 17.6687 7.45749 17.6478 7.50422 17.6495C7.53227 17.6505 7.56034 17.6596 7.58483 17.6774C7.65012 17.7249 7.66442 17.8158 7.6169 17.8811L6.62761 19.241C6.5801 19.3063 6.48924 19.3206 6.42393 19.2731C6.35864 19.2256 6.34434 19.1347 6.39185 19.0694L7.38114 17.7095ZM16.407 17.6834C16.4315 17.6656 16.4596 17.6566 16.4877 17.6556C16.5344 17.654 16.581 17.675 16.6106 17.7158L17.5981 19.077C17.6455 19.1424 17.631 19.2332 17.5657 19.2807C17.5003 19.3281 17.4095 19.3136 17.362 19.2482L16.3746 17.887C16.3272 17.8216 16.3416 17.7308 16.407 17.6834ZM6.12638 17.9138C6.1534 17.8838 6.1899 17.8677 6.22712 17.8656C6.26434 17.8637 6.30226 17.876 6.33229 17.903C6.3923 17.957 6.39715 18.0489 6.3431 18.1089L5.86972 18.6346C5.81568 18.6946 5.72386 18.6995 5.66384 18.6454C5.6038 18.5914 5.59901 18.4995 5.65306 18.4395L6.12638 17.9138ZM17.6669 17.9037C17.6969 17.8767 17.7348 17.8642 17.772 17.8663C17.8092 17.8683 17.8457 17.8845 17.8727 17.9145L18.346 18.4402C18.4 18.5003 18.3952 18.5921 18.3352 18.6462C18.2751 18.7002 18.1833 18.6954 18.1293 18.6354L17.656 18.1096C17.602 18.0495 17.6068 17.9577 17.6669 17.9037ZM8.7498 18.5359C8.77448 18.4806 8.8289 18.4481 8.88572 18.4495C8.90465 18.4499 8.92392 18.454 8.94234 18.4622C9.01611 18.4951 9.049 18.581 9.01609 18.6547L8.33091 20.1905C8.29801 20.2643 8.21213 20.2972 8.13837 20.2643C8.0646 20.2314 8.03171 20.1455 8.06462 20.0717L8.7498 18.5359ZM15.0484 18.4664C15.0669 18.4581 15.0861 18.4541 15.105 18.4537C15.1619 18.4526 15.2163 18.485 15.2409 18.5404L15.9239 20.0771C15.9567 20.1509 15.9237 20.2367 15.8499 20.2695C15.7761 20.3023 15.6903 20.2693 15.6575 20.1955L14.9744 18.6588C14.9416 18.585 14.9746 18.4992 15.0484 18.4664ZM7.5657 18.997C7.59094 18.9533 7.63508 18.9274 7.68173 18.9243C7.70972 18.9224 7.73863 18.9285 7.76485 18.9436C7.8348 18.984 7.8586 19.0728 7.81821 19.1428L7.46451 19.7554C7.42413 19.8254 7.33531 19.8492 7.26536 19.8088C7.19541 19.7684 7.17162 19.6796 7.212 19.6096L7.5657 18.997ZM16.2352 18.9436C16.2615 18.9285 16.2903 18.9222 16.3183 18.9243C16.3649 18.9276 16.4091 18.9533 16.4344 18.997L16.7881 19.6096C16.8285 19.6796 16.8047 19.7684 16.7347 19.8088C16.6648 19.8492 16.5759 19.8254 16.5356 19.7554L16.1819 19.1428C16.1415 19.0729 16.1653 18.984 16.2352 18.9436ZM10.2676 19.0618C10.2823 18.9927 10.3431 18.9456 10.4111 18.9463C10.4207 18.9463 10.4306 18.9474 10.4405 18.9495C10.5195 18.9663 10.5696 19.0434 10.5528 19.1224L10.2033 20.7674C10.1866 20.8464 10.1094 20.8965 10.0304 20.8797C9.95143 20.863 9.90131 20.7858 9.91811 20.7068L10.2676 19.0618ZM13.5544 18.9504C13.5643 18.9484 13.5741 18.9474 13.5838 18.9473C13.6517 18.9468 13.7126 18.9938 13.7272 19.0629L14.0756 20.7081C14.0923 20.7871 14.0421 20.8642 13.9631 20.8809C13.8841 20.8977 13.807 20.8475 13.7903 20.7685L13.442 19.1232C13.4252 19.0442 13.4754 18.9672 13.5544 18.9504ZM11.8542 19.259C11.8542 19.1783 11.9192 19.1133 12 19.1133C12.0808 19.1133 12.1458 19.1783 12.1458 19.259V20.9408C12.1458 21.0215 12.0808 21.0865 12 21.0865C11.9192 21.0865 11.8542 21.0215 11.8542 20.9408V19.259ZM9.19757 19.757C9.21629 19.6994 9.2671 19.6615 9.32373 19.6567C9.3426 19.6551 9.36211 19.6572 9.3813 19.6634C9.4581 19.6884 9.49984 19.7703 9.47487 19.8471L9.25621 20.5199C9.23124 20.5967 9.14929 20.6385 9.07247 20.6135C8.99567 20.5885 8.95393 20.5066 8.9789 20.4297L9.19757 19.757ZM14.6176 19.6637C14.6368 19.6574 14.6563 19.6553 14.6751 19.657C14.7318 19.6618 14.7825 19.6997 14.8013 19.7573L15.0199 20.4301C15.0449 20.5069 15.0031 20.5888 14.9263 20.6138C14.8495 20.6387 14.7675 20.597 14.7425 20.5202L14.5239 19.8474C14.499 19.7706 14.5408 19.6887 14.6176 19.6637ZM10.9541 20.1616C10.9615 20.0913 11.0172 20.0382 11.0848 20.0317C11.0945 20.0308 11.1044 20.0308 11.1144 20.0318C11.1947 20.0403 11.2526 20.1118 11.2442 20.1921L11.1702 20.8956C11.1618 20.9759 11.0903 21.0338 11.01 21.0254C10.9296 21.0169 10.8718 20.9455 10.8802 20.8651L10.9541 20.1616ZM12.8797 20.0325C12.8897 20.0314 12.8996 20.0314 12.9093 20.0324C12.9769 20.039 13.0325 20.0921 13.0399 20.1624L13.1133 20.866C13.1217 20.9463 13.0638 21.0177 12.9834 21.0261C12.9031 21.0345 12.8317 20.9766 12.8233 20.8963L12.7498 20.1927C12.7414 20.1123 12.7993 20.0409 12.8797 20.0325Z" fill="currentColor"/>',vM._name="safari",vM._width=24,vM._height=24,vM._viewBox="0 0 24 24",vM=(0,s.Cc)([(0,C.Y$)("gds-icon-safari")],vM);const kM=e=>{vM.define();const t=(0,n.p)("gds-icon-safari"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let wM=class extends R.M{};wM._regularSVG='<path d="M1.75 19.25H2.75M22.25 19.25H21.25M21.25 19.25V8.75H17.25M21.25 19.25H17.25M17.25 8.75V19.25M17.25 8.75V4.75H6.75V8.75M17.25 19.25H14.25M6.75 19.25V8.75M6.75 19.25H2.75M6.75 19.25H9.75M6.75 8.75H2.75V19.25M9.75 19.25V14.75H14.25V19.25M9.75 19.25H14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',wM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.75C6 4.33579 6.33579 4 6.75 4H17.25C17.6642 4 18 4.33579 18 4.75V8H21.25C21.6642 8 22 8.33579 22 8.75V18.5H22.25C22.6642 18.5 23 18.8358 23 19.25C23 19.6642 22.6642 20 22.25 20H1.75C1.33579 20 1 19.6642 1 19.25C1 18.8358 1.33579 18.5 1.75 18.5H2V8.75C2 8.33579 2.33579 8 2.75 8H6V4.75ZM6 9.5H3.5V18.5H6V9.5ZM18 18.5H20.5V9.5H18V18.5ZM14 18.5V15H10V18.5H14Z" fill="currentColor"/>',wM._name="school",wM._width=24,wM._height=24,wM._viewBox="0 0 24 24",wM=(0,s.Cc)([(0,C.Y$)("gds-icon-school")],wM);const bM=e=>{wM.define();const t=(0,n.p)("gds-icon-school"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ZM=class extends R.M{};ZM._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C3.79086 3 2 4.79086 2 7C2 9.20914 3.79086 11 6 11C7.11278 11 8.11943 10.5456 8.84453 9.81224L11.8831 12L8.84453 14.1878C8.11943 13.4544 7.11278 13 6 13C3.79086 13 2 14.7909 2 17C2 19.2091 3.79086 21 6 21C8.20914 21 10 19.2091 10 17C10 16.444 9.88657 15.9145 9.68159 15.4334L22.5469 6.17042L21 5.43582L13.1667 11.0758L9.68159 8.56657C9.88657 8.08546 10 7.55598 10 7C10 4.79086 8.20914 3 6 3ZM3.5 7C3.5 5.61929 4.61929 4.5 6 4.5C7.38071 4.5 8.5 5.61929 8.5 7C8.5 8.38071 7.38071 9.5 6 9.5C4.61929 9.5 3.5 8.38071 3.5 7ZM3.5 17C3.5 15.6193 4.61929 14.5 6 14.5C7.38071 14.5 8.5 15.6193 8.5 17C8.5 18.3807 7.38071 19.5 6 19.5C4.61929 19.5 3.5 18.3807 3.5 17Z" fill="currentColor"/><path d="M21 18.5642L14.4502 13.8483L15.7338 12.9242L22.5469 17.8296L21 18.5642Z" fill="currentColor"/>',ZM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C3.79086 3 2 4.79086 2 7C2 9.20914 3.79086 11 6 11C7.11278 11 8.11943 10.5456 8.84453 9.81224L11.8831 12L8.84453 14.1878C8.11943 13.4544 7.11278 13 6 13C3.79086 13 2 14.7909 2 17C2 19.2091 3.79086 21 6 21C8.20914 21 10 19.2091 10 17C10 16.444 9.88657 15.9145 9.68159 15.4334L22.5469 6.17042L22.0675 5.94277C21.409 5.63006 20.6325 5.70039 20.041 6.12633L13.1667 11.0758L9.68159 8.56657C9.88657 8.08546 10 7.55598 10 7C10 4.79086 8.20914 3 6 3ZM3.5 7C3.5 5.61929 4.61929 4.5 6 4.5C7.38071 4.5 8.5 5.61929 8.5 7C8.5 8.38071 7.38071 9.5 6 9.5C4.61929 9.5 3.5 8.38071 3.5 7ZM3.5 17C3.5 15.6193 4.61929 14.5 6 14.5C7.38071 14.5 8.5 15.6193 8.5 17C8.5 18.3807 7.38071 19.5 6 19.5C4.61929 19.5 3.5 18.3807 3.5 17Z" fill="currentColor"/><path d="M22.0675 18.0572C21.409 18.3699 20.6325 18.2996 20.041 17.8737L14.4502 13.8483L15.7338 12.9242L22.5469 17.8296L22.0675 18.0572Z" fill="currentColor"/>',ZM._name="scissors",ZM._width=24,ZM._height=24,ZM._viewBox="0 0 24 24",ZM=(0,s.Cc)([(0,C.Y$)("gds-icon-scissors")],ZM);const yM=e=>{ZM.define();const t=(0,n.p)("gds-icon-scissors"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let xM=class extends R.M{};xM._regularSVG='<path d="M2.75 12H5.25M2.75 6.75H6.25M2.75 17.25H6.25M19.5 16.5L22.25 19.25M21.25 12C21.25 15.4518 18.4518 18.25 15 18.25C11.5482 18.25 8.75 15.4518 8.75 12C8.75 8.54822 11.5482 5.75 15 5.75C18.4518 5.75 21.25 8.54822 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',xM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 8.13401 11.134 5 15 5C18.866 5 22 8.13401 22 12C22 13.6628 21.4202 15.1902 20.4518 16.3911L22.7803 18.7197C23.0732 19.0126 23.0732 19.4874 22.7803 19.7803C22.4874 20.0732 22.0126 20.0732 21.7197 19.7803L19.3911 17.4518C18.1902 18.4202 16.6628 19 15 19C11.134 19 8 15.866 8 12ZM11.25 12C11.25 9.92893 12.9289 8.25 15 8.25C15.4142 8.25 15.75 7.91421 15.75 7.5C15.75 7.08579 15.4142 6.75 15 6.75C12.1005 6.75 9.75 9.1005 9.75 12C9.75 12.4142 10.0858 12.75 10.5 12.75C10.9142 12.75 11.25 12.4142 11.25 12Z" fill="currentColor"/><path d="M2 12C2 11.5858 2.33579 11.25 2.75 11.25H5.25C5.66421 11.25 6 11.5858 6 12C6 12.4142 5.66421 12.75 5.25 12.75H2.75C2.33579 12.75 2 12.4142 2 12Z" fill="currentColor"/><path d="M2.75 6C2.33579 6 2 6.33579 2 6.75C2 7.16421 2.33579 7.5 2.75 7.5H6.25C6.66421 7.5 7 7.16421 7 6.75C7 6.33579 6.66421 6 6.25 6H2.75Z" fill="currentColor"/><path d="M2 17.25C2 16.8358 2.33579 16.5 2.75 16.5H6.25C6.66421 16.5 7 16.8358 7 17.25C7 17.6642 6.66421 18 6.25 18H2.75C2.33579 18 2 17.6642 2 17.25Z" fill="currentColor"/>',xM._name="search-menu",xM._width=24,xM._height=24,xM._viewBox="0 0 24 24",xM=(0,s.Cc)([(0,C.Y$)("gds-icon-search-menu")],xM);const SM=e=>{xM.define();const t=(0,n.p)("gds-icon-search-menu"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let $M=class extends R.M{};$M._regularSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>',$M._solidSVG='<path d="M14.957 6.12105L11.9903 8.31798C10.5943 7.11834 8.78371 6.88708 7.78755 6.88708C6.78411 6.88708 5.72977 7.17615 5.5698 7.8916C5.40984 8.58537 6.06425 9.12737 7.18403 9.43089C8.46378 9.77055 9.61991 10.0741 11.4159 10.5799C14.0772 11.3388 15.9023 12.4806 15.9023 15.1328C15.9023 18.7967 12.6302 20.6902 8.25291 20.6902C3.87559 20.6902 0.894368 18.4282 0 17.3731L3.13392 15.0461C5.33712 16.9539 6.86409 17.2213 8.14384 17.2213C9.61264 17.2213 10.9869 16.9106 11.1614 16.0867C11.3068 15.4219 10.7542 14.8943 9.50357 14.6052C8.09294 14.28 6.89318 14.0199 5.56253 13.673C1.9487 12.7335 0.930724 10.645 0.930724 8.76604C0.930724 6.18609 3.34479 3.53388 7.773 3.53388C12.303 3.53388 14.957 6.11382 14.957 6.12105ZM33.8551 3.79404H20.6359V20.206H34.0951V16.4192H25.275V13.7742H31.3465V10.1536H25.275V7.53749H33.8478V3.79404H33.8551ZM17.2184 23.9928H18.2437V0H17.2184V23.9928ZM35.8329 23.9928H36.8581V0H35.8329V23.9928ZM39.2504 20.206H49.8665C52.7023 20.206 55.0073 18.5077 55.0073 15.7832C55.0073 13.6585 53.6112 12.2493 51.6479 11.6278C51.5825 11.6134 51.5243 11.6061 51.4589 11.6061C51.5243 11.5989 51.5898 11.5917 51.6479 11.57C52.775 11.1292 54.0111 9.95122 54.0111 7.94941C54.0111 5.4056 51.7497 3.78681 48.9576 3.78681H39.2431L39.2504 20.206ZM43.9113 7.20506H47.6196C48.4704 7.20506 49.1612 7.87715 49.1612 8.64318C49.1612 9.40921 48.4704 10.0885 47.6196 10.0885H43.9113V7.20506ZM48.4413 16.5637H43.904V13.5718H48.4413C49.2411 13.5718 49.8956 14.215 49.8956 15.0678C49.8956 15.9133 49.2484 16.5637 48.4413 16.5637Z" fill="currentColor"/>',$M._name="seb",$M._width=55,$M._height=24,$M._viewBox="0 0 55 24",$M=(0,s.Cc)([(0,C.Y$)("gds-icon-seb")],$M);const GM=e=>{$M.define();const t=(0,n.p)("gds-icon-seb"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let jM=class extends R.M{};jM._regularSVG='<path d="M9.225 5.525L6.21875 4.83125L4.83125 6.21875L5.525 9.225L2.75 11.075V12.925L5.525 14.775L4.83125 17.7812L6.21875 19.1687L9.225 18.475L11.075 21.25H12.925L14.775 18.475L17.7812 19.1687L19.1687 17.7812L18.475 14.775L21.25 12.925V11.075L18.475 9.225L19.1687 6.21875L17.7812 4.83125L14.775 5.525L12.925 2.75H11.075L9.225 5.525Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',jM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M10.451 2.33397C10.5901 2.12533 10.8242 2 11.075 2H12.925C13.1758 2 13.4099 2.12533 13.549 2.33397L15.1115 4.67764L17.6126 4.10046C17.8646 4.04231 18.1287 4.11807 18.3116 4.30092L19.6991 5.68842C19.8819 5.87127 19.9577 6.13542 19.8995 6.38739L19.3224 8.88852L21.666 10.451C21.8747 10.5901 22 10.8242 22 11.075V12.925C22 13.1758 21.8747 13.4099 21.666 13.549L19.3224 15.1115L19.8995 17.6126C19.9577 17.8646 19.8819 18.1287 19.6991 18.3116L18.3116 19.6991C18.1287 19.8819 17.8646 19.9577 17.6126 19.8995L15.1115 19.3224L13.549 21.666C13.4099 21.8747 13.1758 22 12.925 22H11.075C10.8242 22 10.5901 21.8747 10.451 21.666L8.88852 19.3224L6.38739 19.8995C6.13542 19.9577 5.87127 19.8819 5.68842 19.6991L4.30092 18.3116C4.11807 18.1287 4.04231 17.8646 4.10046 17.6126L4.67764 15.1115L2.33397 13.549C2.12533 13.4099 2 13.1758 2 12.925V11.075C2 10.8242 2.12533 10.5901 2.33397 10.451L4.67764 8.88852L4.10046 6.38739C4.04231 6.13542 4.11807 5.87127 4.30092 5.68842L5.68842 4.30092C5.87127 4.11807 6.13542 4.04231 6.38739 4.10046L8.88852 4.67764L10.451 2.33397ZM8.875 12C8.875 10.2741 10.2741 8.875 12 8.875C13.7259 8.875 15.125 10.2741 15.125 12C15.125 13.7259 13.7259 15.125 12 15.125C10.2741 15.125 8.875 13.7259 8.875 12Z" fill="currentColor"/>',jM._name="settings-gear",jM._width=24,jM._height=24,jM._viewBox="0 0 24 24",jM=(0,s.Cc)([(0,C.Y$)("gds-icon-settings-gear")],jM);const EM=e=>{jM.define();const t=(0,n.p)("gds-icon-settings-gear"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let BM=class extends R.M{};BM._regularSVG='<path d="M13.75 7H3.75M13.75 7C13.75 5.20437 15.2044 3.75 17 3.75C18.7956 3.75 20.25 5.20437 20.25 7C20.25 8.79563 18.7956 10.25 17 10.25C15.2044 10.25 13.75 8.79563 13.75 7ZM20.25 17H12.25M12.25 17C12.25 18.7956 10.7956 20.25 9 20.25C7.20438 20.25 5.75 18.7956 5.75 17M12.25 17C12.25 15.2044 10.7956 13.75 9 13.75C7.20438 13.75 5.75 15.2044 5.75 17M5.75 17H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',BM._solidSVG='<path d="M17 3C15.0465 3 13.421 4.3989 13.0701 6.25H3.75C3.33579 6.25 3 6.58579 3 7C3 7.41421 3.33579 7.75 3.75 7.75H13.0701C13.421 9.6011 15.0465 11 17 11C19.2098 11 21 9.20984 21 7C21 4.79016 19.2098 3 17 3Z" fill="currentColor"/><path d="M9 13C7.04652 13 5.421 14.3989 5.07014 16.25H3.75C3.33579 16.25 3 16.5858 3 17C3 17.4142 3.33579 17.75 3.75 17.75H5.07014C5.421 19.6011 7.04652 21 9 21C10.9535 21 12.579 19.6011 12.9299 17.75H20.25C20.6642 17.75 21 17.4142 21 17C21 16.5858 20.6642 16.25 20.25 16.25H12.9299C12.579 14.3989 10.9535 13 9 13Z" fill="currentColor"/>',BM._name="settings-slider-hor",BM._width=24,BM._height=24,BM._viewBox="0 0 24 24",BM=(0,s.Cc)([(0,C.Y$)("gds-icon-settings-slider-hor")],BM);const qM=e=>{BM.define();const t=(0,n.p)("gds-icon-settings-slider-hor"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let NM=class extends R.M{};NM._regularSVG='<path d="M5.70142 20.254V14.0015M5.70142 10.25V3.74707M12 20.0038V12.7505M12 8.99915V3.99707M18.2986 20.2536V16.002M18.2986 12.2508V3.74707M3.74628 13.7515H7.75M10 9.24902H14M16.25 15.752H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',NM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M5.70148 2.99707C6.11569 2.99707 6.45148 3.33286 6.45148 3.74707V10.25C6.45148 10.6642 6.11569 11 5.70148 11C5.28726 11 4.95148 10.6642 4.95148 10.25V3.74707C4.95148 3.33286 5.28726 2.99707 5.70148 2.99707ZM18.2986 2.99707C18.7129 2.99707 19.0486 3.33286 19.0486 3.74707V12.2508C19.0486 12.665 18.7129 13.0008 18.2986 13.0008C17.8844 13.0008 17.5486 12.665 17.5486 12.2508V3.74707C17.5486 3.33286 17.8844 2.99707 18.2986 2.99707ZM12.0001 3.24707C12.4143 3.24707 12.7501 3.58286 12.7501 3.99707V8.49902H14.0001C14.4143 8.49902 14.7501 8.83481 14.7501 9.24902C14.7501 9.66324 14.4143 9.99902 14.0001 9.99902H10.0001C9.58585 9.99902 9.25006 9.66324 9.25006 9.24902C9.25006 8.83481 9.58585 8.49902 10.0001 8.49902H11.2501V3.99707C11.2501 3.58286 11.5859 3.24707 12.0001 3.24707ZM12.0001 12.0005C12.4143 12.0005 12.7501 12.3363 12.7501 12.7505V20.0038C12.7501 20.418 12.4143 20.7538 12.0001 20.7538C11.5858 20.7538 11.2501 20.418 11.2501 20.0038V12.7505C11.2501 12.3363 11.5858 12.0005 12.0001 12.0005ZM2.99634 13.7515C2.99634 13.3373 3.33212 13.0015 3.74634 13.0015H7.75006C8.16427 13.0015 8.50006 13.3373 8.50006 13.7515C8.50006 14.1657 8.16427 14.5015 7.75006 14.5015H6.45148V20.254C6.45148 20.6682 6.11569 21.004 5.70148 21.004C5.28726 21.004 4.95148 20.6682 4.95148 20.254V14.5015H3.74634C3.33212 14.5015 2.99634 14.1657 2.99634 13.7515ZM15.5001 15.752C15.5001 15.3377 15.8358 15.002 16.2501 15.002H20.2501C20.6643 15.002 21.0001 15.3377 21.0001 15.752C21.0001 16.1662 20.6643 16.502 20.2501 16.502H19.0487V20.2536C19.0487 20.6678 18.7129 21.0036 18.2987 21.0036C17.8845 21.0036 17.5487 20.6678 17.5487 20.2536V16.502H16.2501C15.8358 16.502 15.5001 16.1662 15.5001 15.752Z" fill="currentColor"/>',NM._name="settings-slider-three",NM._width=24,NM._height=24,NM._viewBox="0 0 24 24",NM=(0,s.Cc)([(0,C.Y$)("gds-icon-settings-slider-three")],NM);const IM=e=>{NM.define();const t=(0,n.p)("gds-icon-settings-slider-three"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let YM=class extends R.M{};YM._regularSVG='<path d="M17 13.75V3.75M17 13.75C18.7956 13.75 20.25 15.2044 20.25 17C20.25 18.7956 18.7956 20.25 17 20.25C15.2044 20.25 13.75 18.7956 13.75 17C13.75 15.2044 15.2044 13.75 17 13.75ZM7 20.25V12.25M7 12.25C5.20438 12.25 3.75 10.7956 3.75 9C3.75 7.20438 5.20438 5.75 7 5.75M7 12.25C8.79562 12.25 10.25 10.7956 10.25 9C10.25 7.20438 8.79562 5.75 7 5.75M7 5.75V3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',YM._solidSVG='<path d="M17.75 13.0701C19.6011 13.421 21 15.0465 21 17C21 19.2098 19.2098 21 17 21C14.7902 21 13 19.2098 13 17C13 15.0465 14.3989 13.421 16.25 13.0701V3.75C16.25 3.33579 16.5858 3 17 3C17.4142 3 17.75 3.33579 17.75 3.75V13.0701Z" fill="currentColor"/><path d="M7 21C6.58579 21 6.25 20.6642 6.25 20.25V12.9299C4.3989 12.579 3 10.9535 3 9C3 7.04652 4.3989 5.421 6.25 5.07014V3.75C6.25 3.33579 6.58579 3 7 3C7.41421 3 7.75 3.33579 7.75 3.75V5.07014C9.6011 5.421 11 7.04652 11 9C11 10.9535 9.6011 12.579 7.75 12.9299V20.25C7.75 20.6642 7.41421 21 7 21Z" fill="currentColor"/>',YM._name="settings-slider-ver",YM._width=24,YM._height=24,YM._viewBox="0 0 24 24",YM=(0,s.Cc)([(0,C.Y$)("gds-icon-settings-slider-ver")],YM);const zM=e=>{YM.define();const t=(0,n.p)("gds-icon-settings-slider-ver"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let AM=class extends R.M{};AM._regularSVG='<path d="M17.1073 17.1577C17.1073 18.8655 15.7213 20.25 14.0116 20.25C12.3019 20.25 10.9159 18.8655 10.9159 17.1577C10.9159 15.4499 12.3019 14.0654 14.0116 14.0654C15.7213 14.0654 17.1073 15.4499 17.1073 17.1577Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M4.99145 6.98598L10.4681 11.5764L3.75 14.0189L4.99145 6.98598Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14.2695 3.5L20.25 5.1007L18.6475 11.0746L12.6671 9.47388L14.2695 3.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',AM._solidSVG='<path d="M14.4635 2.77544C14.0635 2.66839 13.6524 2.90571 13.5452 3.30563L11.9427 9.27951C11.8912 9.4717 11.9181 9.6765 12.0176 9.84882C12.1171 10.0211 12.281 10.1469 12.4732 10.1983L18.4536 11.799C18.8536 11.9061 19.2647 11.6687 19.3719 11.2688L20.9744 5.29495C21.026 5.10276 20.999 4.89796 20.8995 4.72564C20.8 4.55331 20.6362 4.42759 20.4439 4.37614L14.4635 2.77544Z" fill="currentColor"/><path d="M5.47325 6.41113C5.26797 6.23907 4.98651 6.18954 4.73483 6.2812C4.48315 6.37285 4.29945 6.59177 4.25289 6.85554L3.01144 13.8884C2.96486 14.1523 3.06257 14.4209 3.26777 14.5932C3.47297 14.7655 3.75448 14.8152 4.00628 14.7237L10.7244 12.2812C10.9763 12.1896 11.1602 11.9705 11.2067 11.7065C11.2533 11.4425 11.1553 11.1737 10.9499 11.0015L5.47325 6.41113Z" fill="currentColor"/><path d="M14.0116 13.3153C11.8884 13.3153 10.1659 15.0348 10.1659 17.1576C10.1659 19.2805 11.8884 20.9999 14.0116 20.9999C16.1347 20.9999 17.8573 19.2805 17.8573 17.1576C17.8573 15.0348 16.1347 13.3153 14.0116 13.3153Z" fill="currentColor"/>',AM._name="shapes",AM._width=24,AM._height=24,AM._viewBox="0 0 24 24",AM=(0,s.Cc)([(0,C.Y$)("gds-icon-shapes")],AM);const TM=e=>{AM.define();const t=(0,n.p)("gds-icon-shapes"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let RM=class extends R.M{};RM._regularSVG='<path d="M9.00003 10.4286L14 7.57141M9.00003 13.5714L14 16.4286M20.25 6C20.25 7.79493 18.7949 9.25 17 9.25C15.2051 9.25 13.75 7.79493 13.75 6C13.75 4.20507 15.2051 2.75 17 2.75C18.7949 2.75 20.25 4.20507 20.25 6ZM20.25 18C20.25 19.7949 18.7949 21.25 17 21.25C15.2051 21.25 13.75 19.7949 13.75 18C13.75 16.2051 15.2051 14.75 17 14.75C18.7949 14.75 20.25 16.2051 20.25 18ZM9.25 12C9.25 13.7949 7.79493 15.25 6 15.25C4.20507 15.25 2.75 13.7949 2.75 12C2.75 10.2051 4.20507 8.75 6 8.75C7.79493 8.75 9.25 10.2051 9.25 12Z" stroke="currentColor" stroke-width="1.5"/>',RM._solidSVG='<path d="M17 2C14.7909 2 13 3.79086 13 6C13 6.41005 13.0617 6.80569 13.1763 7.17815L9.11967 9.49624C8.38653 8.58393 7.26146 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16C7.26154 16 8.38667 15.416 9.1198 14.5036L13.1764 16.8216C13.0617 17.1942 13 17.5899 13 18C13 20.2091 14.7909 22 17 22C19.2091 22 21 20.2091 21 18C21 15.7909 19.2091 14 17 14C15.7385 14 14.6134 14.5839 13.8803 15.4963L9.82366 13.1782C9.9383 12.8057 10 12.4101 10 12C10 11.5899 9.93827 11.1941 9.8236 10.8216L13.8802 8.50357C14.6133 9.41599 15.7385 10 17 10C19.2091 10 21 8.20914 21 6C21 3.79086 19.2091 2 17 2Z" fill="currentColor"/>',RM._name="share",RM._width=24,RM._height=24,RM._viewBox="0 0 24 24",RM=(0,s.Cc)([(0,C.Y$)("gds-icon-share")],RM);const OM=e=>{RM.define();const t=(0,n.p)("gds-icon-share"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let WM=class extends R.M{};WM._regularSVG='<path d="M9.25 11.5L11 13.25L14.75 9.5M12 2.75L20.25 5.5V11.9123C20.25 16.8848 16 19.25 12 21.4079C8 19.25 3.75 16.8848 3.75 11.9123V5.5L12 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',WM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7628 2.03849C11.9168 1.98717 12.0832 1.98717 12.2372 2.03849L20.4872 4.78849C20.7934 4.89057 21 5.17718 21 5.5V11.9123C21 14.6497 19.8165 16.6701 18.1412 18.2596C16.4942 19.8225 14.3404 20.9975 12.3561 22.068C12.1338 22.1879 11.8662 22.1879 11.6439 22.068C9.65956 20.9975 7.5058 19.8225 5.85876 18.2596C4.18351 16.6701 3 14.6497 3 11.9123V5.5C3 5.17718 3.20657 4.89057 3.51283 4.78849L11.7628 2.03849ZM15.2803 10.0303C15.5732 9.73744 15.5732 9.26256 15.2803 8.96967C14.9874 8.67678 14.5126 8.67678 14.2197 8.96967L11 12.1893L9.78033 10.9697C9.48744 10.6768 9.01256 10.6768 8.71967 10.9697C8.42678 11.2626 8.42678 11.7374 8.71967 12.0303L10.4697 13.7803C10.6103 13.921 10.8011 14 11 14C11.1989 14 11.3897 13.921 11.5303 13.7803L15.2803 10.0303Z" fill="currentColor"/>',WM._name="shield-checked",WM._width=24,WM._height=24,WM._viewBox="0 0 24 24",WM=(0,s.Cc)([(0,C.Y$)("gds-icon-shield-checked")],WM);const PM=e=>{WM.define();const t=(0,n.p)("gds-icon-shield-checked"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let FM=class extends R.M{};FM._regularSVG='<path d="M14.2258 13.7495L11.9882 11.5002M11.9882 11.5002L9.75 9.2503M11.9882 11.5002L14.2258 9.25052M11.9882 11.5002L9.75 13.7503M12 2.75L20.25 5.5V11.9123C20.25 16.8848 16 19.25 12 21.4079C8 19.25 3.75 16.8848 3.75 11.9123V5.5L12 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',FM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7628 2.03849C11.9168 1.98717 12.0832 1.98717 12.2372 2.03849L20.4872 4.78849C20.7934 4.89057 21 5.17718 21 5.5V11.9123C21 14.6497 19.8165 16.6701 18.1412 18.2596C16.4942 19.8225 14.3404 20.9975 12.3561 22.068C12.1338 22.1879 11.8662 22.1879 11.6439 22.068C9.65956 20.9975 7.5058 19.8225 5.85876 18.2596C4.18351 16.6701 3 14.6497 3 11.9123V5.5C3 5.17718 3.20657 4.89057 3.51283 4.78849L11.7628 2.03849ZM13.6941 14.2785C13.9863 14.5721 14.4611 14.5734 14.7548 14.2812C15.0484 13.9891 15.0497 13.5142 14.7575 13.2206L13.046 11.5001L14.7576 9.77943C15.0497 9.48576 15.0484 9.01089 14.7548 8.71878C14.4611 8.42666 13.9862 8.42793 13.6941 8.7216L11.9881 10.4367L10.2817 8.72135C9.98958 8.42769 9.51471 8.42646 9.22105 8.71859C8.9274 9.01071 8.92616 9.48559 9.21829 9.77924L10.9303 11.5002L9.21826 13.2214C8.92615 13.5151 8.92741 13.9899 9.22109 14.282C9.51476 14.5742 9.98963 14.5729 10.2817 14.2792L11.9882 12.5636L13.6941 14.2785Z" fill="currentColor"/>',FM._name="shield-crossed",FM._width=24,FM._height=24,FM._viewBox="0 0 24 24",FM=(0,s.Cc)([(0,C.Y$)("gds-icon-shield-crossed")],FM);const DM=e=>{FM.define();const t=(0,n.p)("gds-icon-shield-crossed"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let KM=class extends R.M{};KM._regularSVG='<path d="M20.25 5.5L12 2.75L3.75 5.5V11.9123C3.75 16.8848 8 19.25 12 21.4079C16 19.25 20.25 16.8848 20.25 11.9123V5.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',KM._solidSVG='<path d="M12.2372 2.03849C12.0832 1.98717 11.9168 1.98717 11.7628 2.03849L3.51283 4.78849C3.20657 4.89057 3 5.17718 3 5.5V11.9123C3 14.6497 4.18351 16.6701 5.85876 18.2596C7.5058 19.8225 9.65956 20.9975 11.6439 22.068C11.8662 22.1879 12.1338 22.1879 12.3561 22.068C14.3404 20.9975 16.4942 19.8225 18.1412 18.2596C19.8165 16.6701 21 14.6497 21 11.9123V5.5C21 5.17718 20.7934 4.89057 20.4872 4.78849L12.2372 2.03849Z" fill="currentColor"/>',KM._name="shield",KM._width=24,KM._height=24,KM._viewBox="0 0 24 24",KM=(0,s.Cc)([(0,C.Y$)("gds-icon-shield")],KM);const UM=e=>{KM.define();const t=(0,n.p)("gds-icon-shield"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let JM=class extends R.M{};JM._regularSVG='<path d="M15.25 7.75V6C15.25 4.20507 13.7949 2.75 12 2.75C10.2051 2.75 8.75 4.20507 8.75 6V7.75M6.25 7.75H17.75L19.75 21.25H4.25L6.25 7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',JM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V7H17.75C18.1218 7 18.4374 7.27234 18.4919 7.64009L20.4919 21.1401C20.5239 21.3558 20.4603 21.5748 20.3179 21.7399C20.1754 21.9051 19.9681 22 19.75 22H4.25001C4.03191 22 3.82461 21.9051 3.68214 21.7399C3.53967 21.5748 3.47614 21.3558 3.5081 21.1401L5.5081 7.64009C5.56258 7.27234 5.87824 7 6.25001 7H8V6ZM9.5 7H14.5V6C14.5 4.61929 13.3807 3.5 12 3.5C10.6193 3.5 9.5 4.61929 9.5 6V7Z" fill="currentColor"/>',JM._name="shopping-bag",JM._width=24,JM._height=24,JM._viewBox="0 0 24 24",JM=(0,s.Cc)([(0,C.Y$)("gds-icon-shopping-bag")],JM);const QM=e=>{JM.define();const t=(0,n.p)("gds-icon-shopping-bag"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let XM=class extends R.M{};XM._regularSVG='<path d="M1.75 16C1.33579 16 1 16.3358 1 16.75C1 17.1642 1.33579 17.5 1.75 17.5V16.75V16ZM22.25 17.5C22.6642 17.5 23 17.1642 23 16.75C23 16.3358 22.6642 16 22.25 16V16.75V17.5ZM16.9439 13.9919L16.249 14.2743L16.9439 13.9919ZM19.8388 11.418L19.4856 12.0796L19.8388 11.418ZM22.25 15C22.6642 15 23 14.6642 23 14.25C23 13.8358 22.6642 13.5 22.25 13.5V14.25V15ZM13.5664 7.81456L14.2973 7.64631V7.64631L13.5664 7.81456ZM10.189 20.1692L10.0412 19.4339L10.189 20.1692ZM10.7396 14.6179C11.0853 14.846 11.5506 14.7507 11.7787 14.405C12.0069 14.0593 11.9116 13.5941 11.5659 13.3659L11.1528 13.9919L10.7396 14.6179ZM8.25902 4.21112L7.83776 3.59061L8.25902 4.21112ZM9.224 13.9919L8.63988 13.5215L9.224 13.9919ZM2.28033 10.2197C1.98744 9.92678 1.51256 9.92678 1.21967 10.2197C0.926777 10.5126 0.926777 10.9874 1.21967 11.2803L1.75 10.75L2.28033 10.2197ZM4.71967 14.7803C5.01256 15.0732 5.48744 15.0732 5.78033 14.7803C6.07322 14.4874 6.07322 14.0126 5.78033 13.7197L5.25 14.25L4.71967 14.7803ZM5.78033 11.2803C6.07322 10.9874 6.07322 10.5126 5.78033 10.2197C5.48744 9.92678 5.01256 9.92678 4.71967 10.2197L5.25 10.75L5.78033 11.2803ZM1.21967 13.7197C0.926777 14.0126 0.926777 14.4874 1.21967 14.7803C1.51256 15.0732 1.98744 15.0732 2.28033 14.7803L1.75 14.25L1.21967 13.7197ZM1.75 16.75V17.5H22.25V16.75V16H1.75V16.75ZM16.9439 13.9919L16.249 14.2743C16.3661 14.5622 16.5605 14.9313 16.9266 15.1194C17.4036 15.3643 17.8384 15.1648 18.0774 14.9771C18.2993 14.8028 18.4749 14.5582 18.6071 14.3498C18.7478 14.1282 18.884 13.8742 19.0105 13.6292C19.2798 13.1075 19.5014 12.6407 19.7224 12.3078C19.7735 12.2308 19.8172 12.1728 19.8531 12.1312C19.8904 12.0879 19.9083 12.0754 19.905 12.0777C19.8816 12.0943 19.6952 12.1915 19.4856 12.0796L19.8388 11.418L20.192 10.7564C19.7413 10.5158 19.3099 10.6614 19.0389 10.853C18.7986 11.023 18.6114 11.2692 18.4727 11.4782C18.1914 11.9019 17.9067 12.4973 17.6776 12.9412C17.5548 13.179 17.4437 13.3836 17.3406 13.5461C17.2897 13.6264 17.2458 13.6882 17.209 13.7337C17.1707 13.7811 17.1509 13.7975 17.1509 13.7975C17.1545 13.7946 17.359 13.6552 17.612 13.7851C17.7542 13.8581 17.7312 13.9371 17.6387 13.7095L16.9439 13.9919ZM19.8388 11.418L19.4856 12.0796C19.3984 12.0331 19.4396 11.9727 19.4711 12.1785C19.5028 12.385 19.4933 12.6406 19.4853 12.9991C19.4788 13.294 19.4684 13.735 19.5866 14.1043C19.6516 14.3075 19.7721 14.5471 20.0033 14.7329C20.243 14.9254 20.5266 15 20.8038 15V14.25V13.5C20.7967 13.5 20.8652 13.5012 20.9428 13.5635C21.0118 13.619 21.023 13.6714 21.0152 13.647C20.9876 13.5609 20.9772 13.3848 20.985 13.0322C20.9914 12.7433 21.0105 12.3211 20.9538 11.9513C20.897 11.5806 20.7329 11.0451 20.192 10.7564L19.8388 11.418ZM20.8038 14.25V15H22.25V14.25V13.5H20.8038V14.25ZM13.5664 7.81456L12.8355 7.98282C13.0105 8.74297 13.1363 9.76649 13.1725 10.9046L13.9221 10.8807L14.6718 10.8569C14.6333 9.64773 14.4993 8.52381 14.2973 7.64631L13.5664 7.81456ZM13.9221 10.8807L13.1725 10.9046C13.2316 12.7605 13.05 14.8384 12.512 16.4984C11.9621 18.1949 11.1274 19.2156 10.0412 19.4339L10.189 20.1692L10.3368 20.9045C12.2489 20.5202 13.3414 18.8042 13.9389 16.9609C14.5482 15.081 14.7341 12.8161 14.6718 10.8569L13.9221 10.8807ZM11.1528 13.9919L11.5659 13.3659C11.2607 13.1645 10.9069 12.8799 10.5342 12.5261L10.0179 13.0701L9.50154 13.614C9.92202 14.0132 10.3445 14.3571 10.7396 14.6179L11.1528 13.9919ZM10.0179 13.0701L10.5342 12.5261C9.41477 11.4635 8.25132 9.89978 7.751 8.3926C7.50273 7.64472 7.43398 6.96017 7.56575 6.3753C7.69282 5.8113 8.0185 5.28092 8.68029 4.83163L8.25902 4.21112L7.83776 3.59061C6.87726 4.24269 6.31748 5.09111 6.10243 6.04561C5.89208 6.97925 6.02455 7.9529 6.32739 8.86518C6.92927 10.6783 8.26753 12.4427 9.50154 13.614L10.0179 13.0701ZM8.25902 4.21112L8.68029 4.83163C9.10456 4.54359 9.50336 4.46673 9.87534 4.51213C10.2619 4.55931 10.6724 4.74616 11.0784 5.07197C11.9017 5.7327 12.5782 6.86509 12.8355 7.98282L13.5664 7.81456L14.2973 7.64631C13.9734 6.23948 13.1336 4.79801 12.0172 3.90209C11.4533 3.44957 10.7881 3.11241 10.0571 3.02318C9.31147 2.93217 8.55082 3.10651 7.83776 3.59061L8.25902 4.21112ZM10.189 20.1692L10.0412 19.4339C9.19924 19.6032 8.86575 19.4143 8.72501 19.2684C8.54929 19.0863 8.41625 18.7138 8.44524 18.0866C8.47316 17.4825 8.64781 16.7754 8.91071 16.1017C9.17406 15.4268 9.50522 14.8384 9.80813 14.4623L9.224 13.9919L8.63988 13.5215C8.21596 14.0479 7.81588 14.7811 7.51333 15.5564C7.21032 16.3329 6.98441 17.2046 6.94684 18.0174C6.91034 18.8071 7.04689 19.6895 7.64557 20.31C8.27924 20.9667 9.22496 21.128 10.3368 20.9045L10.189 20.1692ZM9.224 13.9919L9.80813 14.4623C10.068 14.1397 10.3212 13.8459 10.5678 13.5801L10.0179 13.0701L9.46802 12.56C9.19522 12.8541 8.91917 13.1747 8.63988 13.5215L9.224 13.9919ZM10.0179 13.0701L10.5678 13.5801C11.9988 12.0373 13.089 11.5576 13.8537 11.6276L13.9221 10.8807L13.9906 10.1339C12.4934 9.99672 10.9695 10.9413 9.46802 12.56L10.0179 13.0701ZM13.9221 10.8807L13.8537 11.6276C14.6289 11.6986 15.4844 12.393 16.249 14.2743L16.9439 13.9919L17.6387 13.7095C16.826 11.7099 15.6529 10.2862 13.9906 10.1339L13.9221 10.8807ZM1.75 10.75L1.21967 11.2803L2.96967 13.0303L3.5 12.5L4.03033 11.9697L2.28033 10.2197L1.75 10.75ZM3.5 12.5L2.96967 13.0303L4.71967 14.7803L5.25 14.25L5.78033 13.7197L4.03033 11.9697L3.5 12.5ZM5.25 10.75L4.71967 10.2197L2.96967 11.9697L3.5 12.5L4.03033 13.0303L5.78033 11.2803L5.25 10.75ZM3.5 12.5L2.96967 11.9697L1.21967 13.7197L1.75 14.25L2.28033 14.7803L4.03033 13.0303L3.5 12.5Z" fill="currentColor"/>',XM._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M9.87534 4.51214C9.50336 4.46674 9.10456 4.54361 8.68029 4.83164C8.0185 5.28093 7.69282 5.81131 7.56575 6.37531C7.43398 6.96018 7.50273 7.64473 7.751 8.39261C8.17418 9.66741 9.07177 10.9827 10.0159 12.0009C11.0534 11.0028 12.0988 10.348 13.1359 10.1698C13.0784 9.3278 12.9719 8.57532 12.8355 7.98283C12.5782 6.8651 11.9017 5.73271 11.0784 5.07198C10.6724 4.74617 10.2619 4.55932 9.87534 4.51214ZM14.645 10.2658C14.5872 9.28339 14.466 8.37897 14.2973 7.64632C13.9734 6.23949 13.1336 4.79802 12.0172 3.90211C11.4533 3.44959 10.7881 3.11242 10.0571 3.02319C9.31147 2.93218 8.55082 3.10652 7.83776 3.59062C6.87726 4.2427 6.31748 5.09112 6.10243 6.04563C5.89208 6.97926 6.02455 7.95292 6.32739 8.86519C6.84661 10.4293 7.91381 11.9571 8.98936 13.0993C8.87344 13.2354 8.75694 13.3761 8.63988 13.5215C8.21596 14.0479 7.81588 14.7811 7.51333 15.5564C7.45679 15.7013 7.40294 15.8495 7.35249 16H1.75C1.33579 16 1 16.3358 1 16.75C1 17.1642 1.33579 17.5 1.75 17.5H6.99425C6.97086 17.6741 6.95471 17.847 6.94684 18.0174C6.91034 18.8071 7.04689 19.6895 7.64557 20.31C8.27924 20.9667 9.22496 21.128 10.3368 20.9045C12.0608 20.558 13.1186 19.1289 13.7479 17.5H22.25C22.6642 17.5 23 17.1642 23 16.75C23 16.3358 22.6642 16 22.25 16H14.2072C14.517 14.7009 14.6583 13.2862 14.6802 11.9486C15.2101 12.3213 15.749 13.044 16.249 14.2743C16.3661 14.5622 16.5605 14.9313 16.9266 15.1194C17.4035 15.3644 17.8384 15.1648 18.0774 14.9771C18.2993 14.8029 18.4749 14.5582 18.6071 14.3499C18.7478 14.1282 18.884 13.8742 19.0105 13.6292C19.0717 13.5105 19.1306 13.3946 19.1875 13.2825C19.2945 13.0717 19.3947 12.8742 19.4919 12.6962C19.4908 12.7614 19.4892 12.8306 19.4875 12.9044C19.4868 12.9352 19.4861 12.9667 19.4853 12.9991L19.4852 13.0038C19.4787 13.2987 19.469 13.737 19.5866 14.1043C19.6516 14.3075 19.7721 14.5471 20.0033 14.7329C20.243 14.9255 20.5266 15 20.8038 15H22.25C22.6642 15 23 14.6642 23 14.25C23 13.8358 22.6642 13.5 22.25 13.5H20.9908C20.9823 13.3967 20.9802 13.2473 20.985 13.0323C20.9857 13.0001 20.9866 12.9663 20.9875 12.9311C20.9947 12.65 21.0042 12.28 20.9538 11.9513C20.897 11.5806 20.7329 11.0451 20.192 10.7564C19.7413 10.5158 19.3099 10.6614 19.0389 10.8531C18.7986 11.023 18.6114 11.2692 18.4727 11.4782C18.2483 11.8162 18.0218 12.2634 17.823 12.6558C17.7726 12.7553 17.7239 12.8514 17.6776 12.9412C17.6058 13.0802 17.538 13.2079 17.4735 13.3225C16.7871 11.7906 15.8661 10.654 14.645 10.2658ZM19.4333 12.0339C19.4334 12.0337 19.4347 12.0354 19.4368 12.0398C19.4342 12.0363 19.4332 12.0341 19.4333 12.0339ZM13.1829 11.6957C12.6142 11.8502 11.9242 12.2569 11.1093 13.0306C11.2701 13.1596 11.4233 13.2718 11.5659 13.3659C11.9116 13.5941 12.0069 14.0593 11.7787 14.405C11.5506 14.7507 11.0853 14.846 10.7396 14.6179C10.5271 14.4776 10.3066 14.3132 10.0827 14.1291C9.99204 14.2366 9.9005 14.3476 9.80813 14.4623C9.52053 14.8194 9.20748 15.3679 8.95117 16H12.6597C13.0175 14.6772 13.1748 13.148 13.1829 11.6957ZM12.117 17.5H8.51163C8.47659 17.7027 8.45388 17.8996 8.44524 18.0866C8.41625 18.7138 8.54929 19.0863 8.72501 19.2685C8.86575 19.4143 9.19924 19.6032 10.0412 19.4339C10.8933 19.2627 11.5906 18.5976 12.117 17.5ZM1.21967 10.2197C1.51256 9.92679 1.98744 9.92679 2.28033 10.2197L3.5 11.4394L4.71967 10.2197C5.01256 9.92679 5.48744 9.92679 5.78033 10.2197C6.07322 10.5126 6.07322 10.9874 5.78033 11.2803L4.56066 12.5L5.78033 13.7197C6.07322 14.0126 6.07322 14.4874 5.78033 14.7803C5.48744 15.0732 5.01256 15.0732 4.71967 14.7803L3.5 13.5607L2.28033 14.7803C1.98744 15.0732 1.51256 15.0732 1.21967 14.7803C0.926777 14.4874 0.926777 14.0126 1.21967 13.7197L2.43934 12.5L1.21967 11.2803C0.926777 10.9874 0.926777 10.5126 1.21967 10.2197Z" fill="currentColor"/>',XM._name="signature",XM._width=24,XM._height=24,XM._viewBox="0 0 24 24",XM=(0,s.Cc)([(0,C.Y$)("gds-icon-signature")],XM);const em=e=>{XM.define();const t=(0,n.p)("gds-icon-signature"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let tm=class extends R.M{};tm._regularSVG='<path d="M12 8.75V12L13.5 13.5M4.75 4.75H19.25V19.25H4.75V4.75ZM7 4.75L8 1.75H16L17 4.75H7ZM7 19.25L8 22.25H16L17 19.25H7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',tm._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.28849 1.51283C7.39058 1.20657 7.67718 1 8.00001 1H16C16.3228 1 16.6094 1.20657 16.7115 1.51283L17.5406 4H19.25C19.6642 4 20 4.33579 20 4.75V19.25C20 19.6642 19.6642 20 19.25 20H17.5406L16.7115 22.4872C16.6094 22.7934 16.3228 23 16 23H8.00001C7.67718 23 7.39058 22.7934 7.28849 22.4872L6.45944 20H4.75C4.33579 20 4 19.6642 4 19.25V4.75C4 4.33579 4.33579 4 4.75 4H6.45944L7.28849 1.51283ZM8.04058 4H15.9594L15.4594 2.5H8.54058L8.04058 4ZM8.04058 20L8.54058 21.5H15.4594L15.9594 20H8.04058ZM12 8C12.4142 8 12.75 8.33579 12.75 8.75V11.6893L14.0303 12.9697C14.3232 13.2626 14.3232 13.7374 14.0303 14.0303C13.7374 14.3232 13.2626 14.3232 12.9697 14.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8.75C11.25 8.33579 11.5858 8 12 8Z" fill="currentColor"/>',tm._name="smartwatch",tm._width=24,tm._height=24,tm._viewBox="0 0 24 24",tm=(0,s.Cc)([(0,C.Y$)("gds-icon-smartwatch")],tm);const rm=e=>{tm.define();const t=(0,n.p)("gds-icon-smartwatch"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let om=class extends R.M{};om._regularSVG='<path d="M4.75 20.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.75 3.75H18.25L20.25 14.25H3.75L5.75 3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.25 9H4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',om._solidSVG='<path d="M12.75 15H20.25C20.4735 15 20.6853 14.9003 20.8278 14.7281C20.9703 14.556 21.0286 14.3292 20.9868 14.1097L20.1563 9.75H12.75V15Z" fill="currentColor"/><path d="M11.25 15V19.5H4.75C4.33579 19.5 4 19.8358 4 20.25C4 20.6642 4.33579 21 4.75 21H19.25C19.6642 21 20 20.6642 20 20.25C20 19.8358 19.6642 19.5 19.25 19.5H12.75V15H11.25Z" fill="currentColor"/><path d="M11.25 15V9.75H3.84366L3.01325 14.1097C2.97143 14.3292 3.02971 14.556 3.17219 14.7281C3.31467 14.9003 3.52652 15 3.75001 15H11.25Z" fill="currentColor"/><path d="M12.75 8.25H19.8706L18.9868 3.60967C18.9194 3.25593 18.6101 3 18.25 3H12.75V8.25Z" fill="currentColor"/><path d="M11.25 3V8.25H4.12938L5.01325 3.60967C5.08063 3.25593 5.38991 3 5.75001 3H11.25Z" fill="currentColor"/>',om._name="solar-panel",om._width=24,om._height=24,om._viewBox="0 0 24 24",om=(0,s.Cc)([(0,C.Y$)("gds-icon-solar-panel")],om);const sm=e=>{om.define();const t=(0,n.p)("gds-icon-solar-panel"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let nm=class extends R.M{};nm._regularSVG='<path d="M12 15.75H19.1944L21.25 20.25H12M12 15.75H4.80556L2.75 20.25H12M12 15.75V20.25M12 9.75V11.25M18.75 3.75H20.25M3.75 3.75H5.25M7.5 8L6.5 9M16.5 8L17.5 9M8.83697 3.75C9.17555 5.18335 10.4632 6.25 12 6.25C13.5368 6.25 14.8245 5.18335 15.163 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nm._solidSVG='<path d="M15.3355 3.02009H8.66455C8.26143 3.11531 8.01183 3.5193 8.10706 3.92242C8.52378 5.68657 10.1076 7 12 7C13.8924 7 15.4762 5.68657 15.8929 3.92242C15.9882 3.5193 15.7386 3.11531 15.3355 3.02009Z" fill="currentColor"/><path d="M3.75 3C3.33579 3 3 3.33579 3 3.75C3 4.16421 3.33579 4.5 3.75 4.5H5.25C5.66422 4.5 6 4.16421 6 3.75C6 3.33579 5.66422 3 5.25 3H3.75Z" fill="currentColor"/><path d="M18.75 3C18.3358 3 18 3.33579 18 3.75C18 4.16421 18.3358 4.5 18.75 4.5H20.25C20.6642 4.5 21 4.16421 21 3.75C21 3.33579 20.6642 3 20.25 3H18.75Z" fill="currentColor"/><path d="M8.03033 8.53033C8.32323 8.23744 8.32323 7.76256 8.03033 7.46967C7.73744 7.17678 7.26257 7.17678 6.96967 7.46967L5.96967 8.46967C5.67678 8.76256 5.67678 9.23744 5.96967 9.53033C6.26257 9.82322 6.73744 9.82322 7.03033 9.53033L8.03033 8.53033Z" fill="currentColor"/><path d="M17.0303 7.46967C16.7374 7.17678 16.2626 7.17678 15.9697 7.46967C15.6768 7.76256 15.6768 8.23744 15.9697 8.53033L16.9697 9.53033C17.2626 9.82322 17.7374 9.82322 18.0303 9.53033C18.3232 9.23744 18.3232 8.76256 18.0303 8.46967L17.0303 7.46967Z" fill="currentColor"/><path d="M12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75V11.25C11.25 11.6642 11.5858 12 12 12C12.4142 12 12.75 11.6642 12.75 11.25V9.75Z" fill="currentColor"/><path d="M4.80556 15C4.51195 15 4.24535 15.1713 4.12336 15.4384L2.06781 19.9384C1.96175 20.1705 1.98106 20.4407 2.11904 20.6555C2.25703 20.8702 2.49476 21 2.75 21H10.75C11.0261 21 11.25 20.7761 11.25 20.5V15.5C11.25 15.2239 11.0261 15 10.75 15H4.80556Z" fill="currentColor"/><path d="M13.25 15C12.9739 15 12.75 15.2239 12.75 15.5V20.5C12.75 20.7761 12.9739 21 13.25 21H21.25C21.5052 21 21.743 20.8702 21.881 20.6555C22.0189 20.4407 22.0383 20.1705 21.9322 19.9384L19.8766 15.4384C19.7547 15.1713 19.488 15 19.1944 15H13.25Z" fill="currentColor"/>',nm._name="solar",nm._width=24,nm._height=24,nm._viewBox="0 0 24 24",nm=(0,s.Cc)([(0,C.Y$)("gds-icon-solar")],nm);const lm=e=>{nm.define();const t=(0,n.p)("gds-icon-solar"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let im=class extends R.M{};im._regularSVG='<path d="M14.3482 10.25L15.5606 7.75M15.5606 7.75L17.5005 3.75L19.4338 7.75M15.5606 7.75H19.4338M19.4338 7.75L20.6421 10.25M14.75 13.75H20.25L14.75 20.25H20.25M7 3.75V20.25M7 20.25L4 17.25M7 20.25L10 17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',im._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5005 3C17.788 3.00019 18.0501 3.16475 18.1753 3.42363L20.1018 7.40968C20.1067 7.41918 20.1113 7.42881 20.1158 7.43854L21.3169 9.92363C21.4971 10.2966 21.3409 10.745 20.968 10.9253C20.5951 11.1055 20.1466 10.9493 19.9664 10.5764L18.9628 8.5H16.0299L15.0225 10.5773C14.8417 10.95 14.3931 11.1056 14.0204 10.9248C13.6477 10.7441 13.4921 10.2954 13.6728 9.92273L14.8781 7.4376C14.8825 7.42789 14.8872 7.4183 14.892 7.40883L16.8252 3.42273C16.9506 3.16402 17.213 2.99981 17.5005 3ZM16.7574 7H18.2378L17.4989 5.47111L16.7574 7Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 13.75C14 13.3358 14.3358 13 14.75 13H20.25C20.542 13 20.8075 13.1695 20.9304 13.4344C21.0533 13.6994 21.0112 14.0115 20.8225 14.2345L16.3671 19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H14.75C14.458 21 14.1925 20.8305 14.0696 20.5656C13.9467 20.3006 13.9888 19.9885 14.1775 19.7655L18.6329 14.5H14.75C14.3358 14.5 14 14.1642 14 13.75Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C7.41421 3 7.75 3.33579 7.75 3.75V18.4393L9.46967 16.7197C9.76256 16.4268 10.2374 16.4268 10.5303 16.7197C10.8232 17.0126 10.8232 17.4874 10.5303 17.7803L7.53033 20.7803C7.23744 21.0732 6.76256 21.0732 6.46967 20.7803L3.46967 17.7803C3.17678 17.4874 3.17678 17.0126 3.46967 16.7197C3.76256 16.4268 4.23744 16.4268 4.53033 16.7197L6.25 18.4393V3.75C6.25 3.33579 6.58579 3 7 3Z" fill="currentColor"/>',im._name="sort-ascending",im._width=24,im._height=24,im._viewBox="0 0 24 24",im=(0,s.Cc)([(0,C.Y$)("gds-icon-sort-ascending")],im);const am=e=>{im.define();const t=(0,n.p)("gds-icon-sort-ascending"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let cm=class extends R.M{};cm._regularSVG='<path d="M14.3477 20.25L15.5601 17.75M15.5601 17.75L17.5 13.75L19.4333 17.75M15.5601 17.75H19.4333M19.4333 17.75L20.6416 20.25M14.75 3.75H20.25L14.75 10.25H20.25M7 3.75V20.25M7 20.25L4 17.25M7 20.25L10 17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',cm._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5005 13C17.788 13.0002 18.0501 13.1647 18.1753 13.4236L20.1018 17.4097C20.1067 17.4192 20.1113 17.4288 20.1158 17.4385L21.3169 19.9236C21.4971 20.2966 21.3409 20.745 20.968 20.9253C20.5951 21.1055 20.1466 20.9493 19.9664 20.5764L18.9628 18.5H16.0299L15.0225 20.5773C14.8417 20.95 14.3931 21.1056 14.0204 20.9248C13.6477 20.7441 13.4921 20.2954 13.6728 19.9227L14.8781 17.4376C14.8825 17.4279 14.8872 17.4183 14.892 17.4088L16.8252 13.4227C16.9506 13.164 17.213 12.9998 17.5005 13ZM16.7574 17H18.2378L17.4989 15.4711L16.7574 17Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 3.75C14 3.33579 14.3358 3 14.75 3H20.25C20.542 3 20.8075 3.16951 20.9304 3.43444C21.0533 3.69936 21.0112 4.01152 20.8225 4.23446L16.3671 9.5H20.25C20.6642 9.5 21 9.83579 21 10.25C21 10.6642 20.6642 11 20.25 11H14.75C14.458 11 14.1925 10.8305 14.0696 10.5656C13.9467 10.3006 13.9888 9.98848 14.1775 9.76554L18.6329 4.5H14.75C14.3358 4.5 14 4.16421 14 3.75Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C7.41421 3 7.75 3.33579 7.75 3.75V18.4393L9.46967 16.7197C9.76256 16.4268 10.2374 16.4268 10.5303 16.7197C10.8232 17.0126 10.8232 17.4874 10.5303 17.7803L7.53033 20.7803C7.23744 21.0732 6.76256 21.0732 6.46967 20.7803L3.46967 17.7803C3.17678 17.4874 3.17678 17.0126 3.46967 16.7197C3.76256 16.4268 4.23744 16.4268 4.53033 16.7197L6.25 18.4393V3.75C6.25 3.33579 6.58579 3 7 3Z" fill="currentColor"/>',cm._name="sort-descending",cm._width=24,cm._height=24,cm._viewBox="0 0 24 24",cm=(0,s.Cc)([(0,C.Y$)("gds-icon-sort-descending")],cm);const Cm=e=>{cm.define();const t=(0,n.p)("gds-icon-sort-descending"),r={...e,class:e.className};return(0,i.createElement)(t,r)},dm=e=>{Ms.define();const t=(0,n.p)("gds-icon-sort-down"),r={...e,class:e.className};return(0,i.createElement)(t,r)},hm=e=>{ms.define();const t=(0,n.p)("gds-icon-sort-up"),r={...e,class:e.className};return(0,i.createElement)(t,r)},um=e=>{Vs.define();const t=(0,n.p)("gds-icon-sort"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let pm=class extends R.M{};pm._regularSVG='<path d="M9.25 3.75H3.75V20.25H20.25V14.75M13.75 3.75H20.25M20.25 3.75V10.25M20.25 3.75L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',pm._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H9.25C9.66421 3 10 3.33579 10 3.75C10 4.16421 9.66421 4.5 9.25 4.5H4.5V19.5H19.5V14.75C19.5 14.3358 19.8358 14 20.25 14C20.6642 14 21 14.3358 21 14.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM13 3.75C13 3.33579 13.3358 3 13.75 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11C19.8358 11 19.5 10.6642 19.5 10.25V5.56066L11.5303 13.5303C11.2374 13.8232 10.7626 13.8232 10.4697 13.5303C10.1768 13.2374 10.1768 12.7626 10.4697 12.4697L18.4393 4.5H13.75C13.3358 4.5 13 4.16421 13 3.75Z" fill="currentColor"/>',pm._name="square-arrow-top-right",pm._width=24,pm._height=24,pm._viewBox="0 0 24 24",pm=(0,s.Cc)([(0,C.Y$)("gds-icon-square-arrow-top-right")],pm);const gm=e=>{pm.define();const t=(0,n.p)("gds-icon-square-arrow-top-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Mm=class extends R.M{};Mm._regularSVG='<path d="M7.75 7.75V3.75H20.25V16.26H16.25M16.25 7.75V20.25H3.75V7.75H16.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Mm._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7 3.75C7 3.33579 7.33579 3 7.75 3H20.25C20.6642 3 21 3.33579 21 3.75V16.26C21 16.6742 20.6642 17.01 20.25 17.01H17V20.25C17 20.6642 16.6642 21 16.25 21H3.75C3.33579 21 3 20.6642 3 20.25V7.75C3 7.33579 3.33579 7 3.75 7H7V3.75ZM17 15.51V7.75C17 7.33579 16.6642 7 16.25 7H8.5V4.5H19.5V15.51H17Z" fill="currentColor"/>',Mm._name="square-behind-square",Mm._width=24,Mm._height=24,Mm._viewBox="0 0 24 24",Mm=(0,s.Cc)([(0,C.Y$)("gds-icon-square-behind-square")],Mm);const mm=e=>{Mm.define();const t=(0,n.p)("gds-icon-square-behind-square"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Vm=class extends R.M{};Vm._regularSVG='<path d="M20.25 3.75H21C21 3.33579 20.6642 3 20.25 3V3.75ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM3.75 3.75V3C3.33579 3 3 3.33579 3 3.75H3.75ZM10.9968 14.4142L10.4664 14.9445C10.6071 15.0852 10.7979 15.1642 10.9968 15.1642C11.1957 15.1642 11.3865 15.0852 11.5271 14.9445L10.9968 14.4142ZM16.0271 10.4445C16.32 10.1516 16.32 9.67676 16.0271 9.38386C15.7342 9.09097 15.2593 9.09097 14.9664 9.38386L16.0271 10.4445ZM9.52711 11.8839C9.23421 11.591 8.75934 11.591 8.46645 11.8839C8.17355 12.1768 8.17355 12.6516 8.46645 12.9445L9.52711 11.8839ZM19.5 3.75V20.25H21V3.75H19.5ZM20.25 19.5H3.75V21H20.25V19.5ZM4.5 20.25V3.75H3V20.25H4.5ZM3.75 4.5H20.25V3H3.75V4.5ZM11.5271 14.9445L16.0271 10.4445L14.9664 9.38386L10.4664 13.8839L11.5271 14.9445ZM8.46645 12.9445L10.4664 14.9445L11.5271 13.8839L9.52711 11.8839L8.46645 12.9445Z" fill="currentColor"/>',Vm._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM16.0271 10.4445C16.32 10.1516 16.32 9.67676 16.0271 9.38386C15.7342 9.09097 15.2593 9.09097 14.9664 9.38386L10.9968 13.3535L9.52711 11.8839C9.23421 11.591 8.75934 11.591 8.46645 11.8839C8.17355 12.1768 8.17355 12.6516 8.46645 12.9445L10.4664 14.9445C10.7593 15.2374 11.2342 15.2374 11.5271 14.9445L16.0271 10.4445Z" fill="currentColor"/>',Vm._name="square-check",Vm._width=24,Vm._height=24,Vm._viewBox="0 0 24 24",Vm=(0,s.Cc)([(0,C.Y$)("gds-icon-square-check")],Vm);const fm=e=>{Vm.define();const t=(0,n.p)("gds-icon-square-check"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Lm=class extends R.M{};Lm._regularSVG='<path d="M3.75 3.75H10.25V10.25H3.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 13.75H10.25V20.25H3.75V13.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.75 17C13.75 15.2051 15.2051 13.75 17 13.75C18.7949 13.75 20.25 15.2051 20.25 17C20.25 18.7949 18.7949 20.25 17 20.25C15.2051 20.25 13.75 18.7949 13.75 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.75 3.75H20.25V10.25H13.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Lm._solidSVG='<path d="M3 3.75C3 3.33579 3.33579 3 3.75 3H10.25C10.6642 3 11 3.33579 11 3.75V10.25C11 10.6642 10.6642 11 10.25 11H3.75C3.33579 11 3 10.6642 3 10.25V3.75Z" fill="currentColor"/><path d="M3 13.75C3 13.3358 3.33579 13 3.75 13H10.25C10.6642 13 11 13.3358 11 13.75V20.25C11 20.6642 10.6642 21 10.25 21H3.75C3.33579 21 3 20.6642 3 20.25V13.75Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 13C14.7909 13 13 14.7909 13 17C13 19.2091 14.7909 21 17 21C19.2091 21 21 19.2091 21 17C21 14.7909 19.2091 13 17 13ZM14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C18.3807 14.5 19.5 15.6193 19.5 17C19.5 18.3807 18.3807 19.5 17 19.5C15.6193 19.5 14.5 18.3807 14.5 17Z" fill="currentColor"/><path d="M13.75 3C13.3358 3 13 3.33579 13 3.75V10.25C13 10.6642 13.3358 11 13.75 11H20.25C20.6642 11 21 10.6642 21 10.25V3.75C21 3.33579 20.6642 3 20.25 3H13.75Z" fill="currentColor"/>',Lm._name="square-grid-circle",Lm._width=24,Lm._height=24,Lm._viewBox="0 0 24 24",Lm=(0,s.Cc)([(0,C.Y$)("gds-icon-square-grid-circle")],Lm);const _m=e=>{Lm.define();const t=(0,n.p)("gds-icon-square-grid-circle"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Hm=class extends R.M{};Hm._regularSVG='<path d="M20.25 3.75H21C21 3.33579 20.6642 3 20.25 3V3.75ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM3.75 3.75V3C3.33579 3 3 3.33579 3 3.75H3.75ZM10.75 10.25C10.3358 10.25 10 10.5858 10 11C10 11.4142 10.3358 11.75 10.75 11.75V10.25ZM12 11L12.75 11C12.75 10.5858 12.4142 10.25 12 10.25V11ZM11.25 16.25C11.25 16.6642 11.5858 17 12 17C12.4142 17 12.75 16.6642 12.75 16.25L11.25 16.25ZM19.5 3.75V20.25H21V3.75H19.5ZM20.25 19.5H3.75V21H20.25V19.5ZM4.5 20.25V3.75H3V20.25H4.5ZM3.75 4.5H20.25V3H3.75V4.5ZM10.75 11.75H12V10.25H10.75V11.75ZM11.25 11L11.25 16.25L12.75 16.25L12.75 11L11.25 11Z" fill="currentColor"/><path d="M11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375C11.6548 7.375 11.375 7.65482 11.375 8Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>',Hm._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25V3.75C21 3.33579 20.6642 3 20.25 3H3.75ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>',Hm._name="square-info",Hm._width=24,Hm._height=24,Hm._viewBox="0 0 24 24",Hm=(0,s.Cc)([(0,C.Y$)("gds-icon-square-info")],Hm);const vm=e=>{Hm.define();const t=(0,n.p)("gds-icon-square-info"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let km=class extends R.M{};km._regularSVG='<path d="M20.25 3.75H21C21 3.33579 20.6642 3 20.25 3V3.75ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM3.75 3.75V3C3.33579 3 3 3.33579 3 3.75H3.75ZM15.25 12.7502C15.6642 12.7502 16 12.4144 16 12.0002C16 11.586 15.6642 11.2502 15.25 11.2502V12.7502ZM8.75736 11.2502C8.34314 11.2502 8.00736 11.586 8.00736 12.0002C8.00736 12.4144 8.34314 12.7502 8.75736 12.7502V11.2502ZM19.5 3.75V20.25H21V3.75H19.5ZM20.25 19.5H3.75V21H20.25V19.5ZM4.5 20.25V3.75H3V20.25H4.5ZM3.75 4.5H20.25V3H3.75V4.5ZM15.25 11.2502H8.75736V12.7502H15.25V11.2502Z" fill="currentColor"/>',km._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM15.25 12.7502C15.6642 12.7502 16 12.4144 16 12.0002C16 11.586 15.6642 11.2502 15.25 11.2502H8.75736C8.34314 11.2502 8.00736 11.586 8.00736 12.0002C8.00736 12.4144 8.34314 12.7502 8.75736 12.7502H15.25Z" fill="currentColor"/>',km._name="square-minus",km._width=24,km._height=24,km._viewBox="0 0 24 24",km=(0,s.Cc)([(0,C.Y$)("gds-icon-square-minus")],km);const wm=e=>{km.define();const t=(0,n.p)("gds-icon-square-minus"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let bm=class extends R.M{};bm._regularSVG='<path d="M20.25 20.25V3.75H3.75V20.25H20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',bm._solidSVG='<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25V3.75C21 3.33579 20.6642 3 20.25 3H3.75Z" fill="currentColor"/>',bm._name="square-placeholder",bm._width=24,bm._height=24,bm._viewBox="0 0 24 24",bm=(0,s.Cc)([(0,C.Y$)("gds-icon-square-placeholder")],bm);const Zm=e=>{bm.define();const t=(0,n.p)("gds-icon-square-placeholder"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let ym=class extends R.M{};ym._regularSVG='<path d="M20.25 3.75H21C21 3.33579 20.6642 3 20.25 3V3.75ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM3.75 3.75V3C3.33579 3 3 3.33579 3 3.75H3.75ZM15.25 12.7502C15.6642 12.7502 16 12.4144 16 12.0002C16 11.586 15.6642 11.2502 15.25 11.2502V12.7502ZM8.75736 11.2502C8.34314 11.2502 8.00736 11.586 8.00736 12.0002C8.00736 12.4144 8.34314 12.7502 8.75736 12.7502V11.2502ZM11.25 15.2429C11.25 15.6571 11.5858 15.9929 12 15.9929C12.4142 15.9929 12.75 15.6571 12.75 15.2429H11.25ZM12.75 8.75759C12.75 8.34337 12.4142 8.00759 12 8.00759C11.5858 8.00759 11.25 8.34337 11.25 8.75759H12.75ZM19.5 3.75V20.25H21V3.75H19.5ZM20.25 19.5H3.75V21H20.25V19.5ZM4.5 20.25V3.75H3V20.25H4.5ZM3.75 4.5H20.25V3H3.75V4.5ZM15.25 11.2502H8.75736V12.7502H15.25V11.2502ZM12.75 15.2429V8.75759H11.25V15.2429H12.75Z" fill="currentColor"/>',ym._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM15.25 12.7502C15.6642 12.7502 16 12.4144 16 12.0002C16 11.586 15.6642 11.2502 15.25 11.2502H12.75L12.75 8.75759C12.75 8.34337 12.4142 8.00759 12 8.00759C11.5858 8.00759 11.25 8.34337 11.25 8.75759L11.25 11.2502H8.75736C8.34314 11.2502 8.00736 11.586 8.00736 12.0002C8.00736 12.4144 8.34314 12.7502 8.75736 12.7502H11.25V15.2429C11.25 15.6571 11.5858 15.9929 12 15.9929C12.4142 15.9929 12.75 15.6571 12.75 15.2429V12.7502H15.25Z" fill="currentColor"/>',ym._name="square-plus",ym._width=24,ym._height=24,ym._viewBox="0 0 24 24",ym=(0,s.Cc)([(0,C.Y$)("gds-icon-square-plus")],ym);const xm=e=>{ym.define();const t=(0,n.p)("gds-icon-square-plus"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Sm=class extends R.M{};Sm._regularSVG='<path d="M20.25 3.75H21C21 3.33579 20.6642 3 20.25 3V3.75ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM3.75 3.75V3C3.33579 3 3 3.33579 3 3.75H3.75ZM15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L15.5303 9.53033ZM8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L8.46967 14.4697ZM14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM9.53033 8.46967C9.23744 8.17678 8.76256 8.17678 8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033L9.53033 8.46967ZM19.5 3.75V20.25H21V3.75H19.5ZM20.25 19.5H3.75V21H20.25V19.5ZM4.5 20.25V3.75H3V20.25H4.5ZM3.75 4.5H20.25V3H3.75V4.5ZM14.4697 8.46967L8.46967 14.4697L9.53033 15.5303L15.5303 9.53033L14.4697 8.46967ZM15.5303 14.4697L9.53033 8.46967L8.46967 9.53033L14.4697 15.5303L15.5303 14.4697Z" fill="currentColor"/>',Sm._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM9.53033 8.46967C9.23744 8.17678 8.76256 8.17678 8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033L10.9393 12L8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L12 13.0607L14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L13.0607 12L15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L12 10.9393L9.53033 8.46967Z" fill="currentColor"/>',Sm._name="square-x",Sm._width=24,Sm._height=24,Sm._viewBox="0 0 24 24",Sm=(0,s.Cc)([(0,C.Y$)("gds-icon-square-x")],Sm);const $m=e=>{Sm.define();const t=(0,n.p)("gds-icon-square-x"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Gm=class extends R.M{};Gm._regularSVG='<path d="M12 1.75L14.9527 7.92256L21.75 8.81637L16.7775 13.525L18.0258 20.25L12 16.9876L5.97417 20.25L7.2225 13.525L2.25 8.81637L9.04734 7.92256L12 1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Gm._solidSVG='<path d="M12.6766 1.42636C12.552 1.16583 12.2888 1 12 1C11.7112 1 11.4481 1.16583 11.3234 1.42636L8.54631 7.23199L2.15224 8.07277C1.86544 8.11049 1.62589 8.30978 1.53663 8.58493C1.44736 8.86009 1.52429 9.16205 1.73434 9.36095L6.41068 13.7892L5.23679 20.1131C5.18405 20.3972 5.29924 20.6864 5.53291 20.8564C5.76657 21.0265 6.07715 21.0471 6.33127 20.9095L12 17.8404L17.6688 20.9095C17.9229 21.0471 18.2335 21.0265 18.4671 20.8564C18.7008 20.6864 18.816 20.3972 18.7633 20.1131L17.5894 13.7892L22.2657 9.36095C22.4758 9.16205 22.5527 8.86009 22.4634 8.58493C22.3742 8.30978 22.1346 8.11049 21.8478 8.07277L15.4537 7.23199L12.6766 1.42636Z" fill="currentColor"/>',Gm._name="star",Gm._width=24,Gm._height=24,Gm._viewBox="0 0 24 24",Gm=(0,s.Cc)([(0,C.Y$)("gds-icon-star")],Gm);const jm=e=>{Gm.define();const t=(0,n.p)("gds-icon-star"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Em=class extends R.M{};Em._regularSVG='<path d="M20.25 12V20.25H3.75002V12M9.50002 3.75H14.5001M9.50002 3.75L8.90899 8.77398C8.69131 10.6243 10.137 12.25 12.0001 12.25C13.8631 12.25 15.3088 10.6243 15.0911 8.77397L14.5001 3.75M9.50002 3.75H4.41668L2.97236 8.35377C2.36638 10.2853 3.8091 12.25 5.83349 12.25C7.35405 12.25 8.63391 11.1119 8.81158 9.60174L9.50002 3.75ZM14.5001 3.75H19.5833L21.0277 8.35377C21.6337 10.2853 20.1909 12.25 18.1665 12.25C16.646 12.25 15.3661 11.1119 15.1885 9.60174L14.5001 3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Em._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.70108 3.52549C3.79918 3.21279 4.08896 3 4.41669 3H19.5834C19.9111 3 20.2009 3.21279 20.299 3.52549L21.7433 8.12926C22.1626 9.4657 21.7973 10.8148 20.9585 11.7532C20.9854 11.8305 21 11.9135 21 12V20.25C21 20.6642 20.6642 21 20.25 21H3.75002C3.33581 21 3.00002 20.6642 3.00002 20.25V12C3.00002 11.9135 3.01466 11.8305 3.04158 11.7532C2.20273 10.8148 1.83749 9.4657 2.25676 8.12926L3.70108 3.52549ZM10.167 4.5L9.65386 8.86161C9.48864 10.266 10.586 11.5 12.0001 11.5C13.4097 11.5 14.5046 10.2738 14.3478 8.87488L13.8331 4.5H10.167ZM15.8379 8.70317C15.8373 8.69756 15.8366 8.69195 15.836 8.68634L15.3435 4.5H19.0326L20.3121 8.57827C20.7665 10.0267 19.6846 11.5 18.1665 11.5C17.0263 11.5 16.0666 10.6465 15.9333 9.51411L15.8379 8.70317ZM8.65662 4.5L8.06672 9.51411C7.93349 10.6465 6.97374 11.5 5.8335 11.5C4.31543 11.5 3.23356 10.0267 3.68798 8.57827L4.96744 4.5H8.65662Z" fill="currentColor"/>',Em._name="store",Em._width=24,Em._height=24,Em._viewBox="0 0 24 24",Em=(0,s.Cc)([(0,C.Y$)("gds-icon-store")],Em);const Bm=e=>{Em.define();const t=(0,n.p)("gds-icon-store"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let qm=class extends R.M{};qm._regularSVG='<path d="M7.75 6.75H2.75V20.25H21.25V6.75H16.25M7.75 6.75V2.75H16.25V6.75M7.75 6.75H16.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',qm._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.75C7 2.33579 7.33579 2 7.75 2H16.25C16.6642 2 17 2.33579 17 2.75V6H21.25C21.6642 6 22 6.33579 22 6.75V20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25V6.75C2 6.33579 2.33579 6 2.75 6H7V2.75ZM8.5 6H15.5V3.5H8.5V6Z" fill="currentColor"/>',qm._name="suitcase-work",qm._width=24,qm._height=24,qm._viewBox="0 0 24 24",qm=(0,s.Cc)([(0,C.Y$)("gds-icon-suitcase-work")],qm);const Nm=e=>{qm.define();const t=(0,n.p)("gds-icon-suitcase-work"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Im=class extends R.M{};Im._regularSVG='<path d="M12.0002 3.29083V1.76758M5.8418 18.1586L4.7647 19.2357M12.0002 22.2327V20.7094M19.2353 4.76468L18.1582 5.84179M20.709 12.0001H22.2322M18.1582 18.1586L19.2353 19.2357M1.76758 12.0001H3.29083M4.76462 4.76462L5.84173 5.84173M15.7123 8.28781C17.7626 10.3381 17.7626 13.6622 15.7123 15.7124C13.6621 17.7627 10.3379 17.7627 8.28769 15.7124C6.23744 13.6622 6.23744 10.3381 8.28769 8.28781C10.3379 6.23756 13.6621 6.23756 15.7123 8.28781Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Im._solidSVG='<path d="M12.7502 1.76758C12.7502 1.35336 12.4144 1.01758 12.0002 1.01758C11.5859 1.01758 11.2502 1.35336 11.2502 1.76758V3.29083C11.2502 3.70505 11.5859 4.04083 12.0002 4.04083C12.4144 4.04083 12.7502 3.70505 12.7502 3.29083V1.76758Z" fill="currentColor"/><path d="M4.23437 18.7054C3.94148 18.9983 3.94148 19.4732 4.23437 19.7661C4.52726 20.059 5.00214 20.059 5.29503 19.7661L6.37213 18.689C6.66503 18.3961 6.66503 17.9212 6.37213 17.6283C6.07924 17.3354 5.60437 17.3354 5.31147 17.6283L4.23437 18.7054Z" fill="currentColor"/><path d="M12.0002 19.9594C12.4144 19.9594 12.7502 20.2952 12.7502 20.7094V22.2327C12.7502 22.6469 12.4144 22.9827 12.0002 22.9827C11.5859 22.9827 11.2502 22.6469 11.2502 22.2327V20.7094C11.2502 20.2952 11.5859 19.9594 12.0002 19.9594Z" fill="currentColor"/><path d="M17.6279 5.31146C17.335 5.60435 17.335 6.07922 17.6279 6.37212C17.9208 6.66501 18.3956 6.66501 18.6885 6.37212L19.7656 5.29501C20.0585 5.00212 20.0585 4.52724 19.7656 4.23435C19.4727 3.94146 18.9979 3.94146 18.705 4.23435L17.6279 5.31146Z" fill="currentColor"/><path d="M19.959 12.0001C19.959 11.5859 20.2948 11.2501 20.709 11.2501H22.2322C22.6465 11.2501 22.9822 11.5859 22.9822 12.0001C22.9822 12.4144 22.6465 12.7501 22.2322 12.7501H20.709C20.2948 12.7501 19.959 12.4144 19.959 12.0001Z" fill="currentColor"/><path d="M18.6885 17.6282C18.3956 17.3353 17.9208 17.3353 17.6279 17.6282C17.335 17.9211 17.335 18.396 17.6279 18.6889L18.705 19.766C18.9979 20.0589 19.4727 20.0589 19.7656 19.766C20.0585 19.4731 20.0585 18.9982 19.7656 18.7053L18.6885 17.6282Z" fill="currentColor"/><path d="M1.01758 12.0001C1.01758 11.5859 1.35336 11.2501 1.76758 11.2501H3.29083C3.70505 11.2501 4.04083 11.5859 4.04083 12.0001C4.04083 12.4143 3.70505 12.7501 3.29083 12.7501H1.76758C1.35336 12.7501 1.01758 12.4143 1.01758 12.0001Z" fill="currentColor"/><path d="M5.29495 4.23429C5.00206 3.9414 4.52718 3.9414 4.23429 4.23429C3.9414 4.52718 3.9414 5.00206 4.23429 5.29495L5.3114 6.37206C5.60429 6.66495 6.07916 6.66495 6.37206 6.37206C6.66495 6.07916 6.66495 5.60429 6.37206 5.3114L5.29495 4.23429Z" fill="currentColor"/><path d="M7.75736 7.75736C10.1005 5.41421 13.8995 5.41421 16.2426 7.75736C18.5858 10.1005 18.5858 13.8995 16.2426 16.2426C13.8995 18.5858 10.1005 18.5858 7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75736Z" fill="currentColor"/>',Im._name="sun",Im._width=24,Im._height=24,Im._viewBox="0 0 24 24",Im=(0,s.Cc)([(0,C.Y$)("gds-icon-sun")],Im);const Ym=e=>{Im.define();const t=(0,n.p)("gds-icon-sun"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let zm=class extends R.M{};zm._regularSVG='<path d="M2.75391 20.25H21.2539M12 8V2.75M2.75 16.25H4.25M19.75 16.25H21.25M17.9375 11.0184L19.0866 10.0542M4.91406 10.0542L6.06313 11.0184M9.5 6L12 8.5L14.5 6M7.75 16.25V16C7.75 13.6528 9.65279 11.75 12 11.75C14.3472 11.75 16.25 13.6528 16.25 16V16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',zm._solidSVG='<path d="M12 2C12.4142 2 12.75 2.33579 12.75 2.75V6.68934L13.9697 5.46967C14.2626 5.17678 14.7374 5.17678 15.0303 5.46967C15.3232 5.76256 15.3232 6.23744 15.0303 6.53033L12.5303 9.03033C12.2374 9.32322 11.7626 9.32322 11.4697 9.03033L8.96967 6.53033C8.67678 6.23744 8.67678 5.76256 8.96967 5.46967C9.26256 5.17678 9.73744 5.17678 10.0303 5.46967L11.25 6.68934V2.75C11.25 2.33579 11.5858 2 12 2Z" fill="currentColor"/><path d="M2.00391 20.25C2.00391 19.8358 2.33969 19.5 2.75391 19.5H21.2539C21.6681 19.5 22.0039 19.8358 22.0039 20.25C22.0039 20.6642 21.6681 21 21.2539 21H2.75391C2.33969 21 2.00391 20.6642 2.00391 20.25Z" fill="currentColor"/><path d="M2.75 15.5C2.33579 15.5 2 15.8358 2 16.25C2 16.6642 2.33579 17 2.75 17H4.25C4.66421 17 5 16.6642 5 16.25C5 15.8358 4.66421 15.5 4.25 15.5H2.75Z" fill="currentColor"/><path d="M19.75 15.5C19.3358 15.5 19 15.8358 19 16.25C19 16.6642 19.3358 17 19.75 17H21.25C21.6642 17 22 16.6642 22 16.25C22 15.8358 21.6642 15.5 21.25 15.5H19.75Z" fill="currentColor"/><path d="M17.3649 11.5005C17.0987 11.1832 17.14 10.7101 17.4573 10.4439L18.6064 9.47969C18.9237 9.21344 19.3968 9.25483 19.663 9.57213C19.9293 9.88944 19.8879 10.3625 19.5706 10.6288L18.4215 11.5929C18.1042 11.8592 17.6312 11.8178 17.3649 11.5005Z" fill="currentColor"/><path d="M5.39485 9.47968C5.07754 9.21343 4.60447 9.25482 4.33822 9.57212C4.07197 9.88943 4.11336 10.3625 4.43066 10.6287L5.57973 11.5929C5.89704 11.8592 6.3701 11.8178 6.63635 11.5005C6.90261 11.1832 6.86122 10.7101 6.54391 10.4439L5.39485 9.47968Z" fill="currentColor"/><path d="M16.25 17C16.6642 17 17 16.6642 17 16.25V16C17 13.2386 14.7614 11 12 11C9.23858 11 7 13.2386 7 16V16.25C7 16.6642 7.33579 17 7.75 17C9.42513 17 14.5749 17 16.25 17Z" fill="currentColor"/>',zm._name="sunset-arrow-down",zm._width=24,zm._height=24,zm._viewBox="0 0 24 24",zm=(0,s.Cc)([(0,C.Y$)("gds-icon-sunset-arrow-down")],zm);const Am=e=>{zm.define();const t=(0,n.p)("gds-icon-sunset-arrow-down"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Tm=class extends R.M{};Tm._regularSVG='<path d="M8.25 7.5C8.25 7.91421 7.91421 8.25 7.5 8.25C7.08579 8.25 6.75 7.91421 6.75 7.5C6.75 7.08579 7.08579 6.75 7.5 6.75C7.91421 6.75 8.25 7.08579 8.25 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M2.75 12V2.75H12L21.25 12L12 21.25L2.75 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>',Tm._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.75C2 2.33579 2.33579 2 2.75 2H12C12.1989 2 12.3897 2.07902 12.5303 2.21967L21.7803 11.4697C22.0732 11.7626 22.0732 12.2374 21.7803 12.5303L12.5303 21.7803C12.2374 22.0732 11.7626 22.0732 11.4697 21.7803L2.21967 12.5303C2.07902 12.3897 2 12.1989 2 12V2.75ZM7.5 9C8.32843 9 9 8.32843 9 7.5C9 6.67157 8.32843 6 7.5 6C6.67157 6 6 6.67157 6 7.5C6 8.32843 6.67157 9 7.5 9Z" fill="currentColor"/>',Tm._name="tag",Tm._width=24,Tm._height=24,Tm._viewBox="0 0 24 24",Tm=(0,s.Cc)([(0,C.Y$)("gds-icon-tag")],Tm);const Rm=e=>{Tm.define();const t=(0,n.p)("gds-icon-tag"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Om=class extends R.M{};Om._regularSVG='<path d="M17.75 2L18.4668 1.77944C18.3884 1.52448 18.1804 1.33038 17.9207 1.26968C17.6609 1.20898 17.3885 1.29081 17.2051 1.4846L17.75 2ZM18.75 5.25L18.0332 5.47056C18.1062 5.70796 18.292 5.89379 18.5294 5.96683L18.75 5.25ZM22 6.25L22.5154 6.79485C22.7092 6.61154 22.791 6.33909 22.7303 6.07934C22.6696 5.81958 22.4755 5.61161 22.2206 5.53317L22 6.25ZM18.3 9.75V10.5C18.4917 10.5 18.6761 10.4266 18.8154 10.2949L18.3 9.75ZM14.25 5.7L13.7051 5.1846C13.5734 5.32387 13.5 5.5083 13.5 5.7H14.25ZM11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L12 12L11.4697 11.4697ZM11.1435 7.55755C11.5501 7.47828 11.8154 7.08444 11.7361 6.67789C11.6569 6.27133 11.263 6.00601 10.8565 6.08528L11 6.82141L11.1435 7.55755ZM17.9147 13.1437C17.994 12.7371 17.7287 12.3433 17.3221 12.264C16.9156 12.1847 16.5217 12.45 16.4425 12.8566L17.1786 13.0001L17.9147 13.1437ZM12.4601 3.51222C12.8737 3.53425 13.2269 3.2168 13.2489 2.80318C13.271 2.38955 12.9535 2.03638 12.5399 2.01435L12.5 2.76328L12.4601 3.51222ZM21.9857 11.4601C21.9636 11.0465 21.6105 10.729 21.1968 10.7511C20.7832 10.7731 20.4657 11.1263 20.4878 11.5399L21.2367 11.5L21.9857 11.4601ZM17.75 2L17.0332 2.22056L18.0332 5.47056L18.75 5.25L19.4668 5.02944L18.4668 1.77944L17.75 2ZM18.75 5.25L18.5294 5.96683L21.7794 6.96683L22 6.25L22.2206 5.53317L18.9706 4.53317L18.75 5.25ZM22 6.25L21.4846 5.70515L17.7846 9.20515L18.3 9.75L18.8154 10.2949L22.5154 6.79485L22 6.25ZM18.3 9.75V9H14.25V9.75V10.5H18.3V9.75ZM14.25 9.75H15V5.7H14.25H13.5V9.75H14.25ZM14.25 5.7L14.7949 6.2154L18.2949 2.5154L17.75 2L17.2051 1.4846L13.7051 5.1846L14.25 5.7ZM14.25 9.75L13.7197 9.21967L11.4697 11.4697L12 12L12.5303 12.5303L14.7803 10.2803L14.25 9.75ZM12.013 17.25V16.5C9.52054 16.5 7.5 14.4795 7.5 11.987H6.75H6C6 15.3079 8.69211 18 12.013 18V17.25ZM6.75 11.987H7.5C7.5 9.79253 9.06706 7.96241 11.1435 7.55755L11 6.82141L10.8565 6.08528C8.08896 6.62487 6 9.06117 6 11.987H6.75ZM17.1786 13.0001L16.4425 12.8566C16.0376 14.933 14.2075 16.5 12.013 16.5V17.25V18C14.9388 18 17.3751 15.9111 17.9147 13.1437L17.1786 13.0001ZM21.25 12H20.5C20.5 16.6944 16.6944 20.5 12 20.5V21.25V22C17.5228 22 22 17.5228 22 12H21.25ZM12 21.25V20.5C7.30558 20.5 3.5 16.6944 3.5 12H2.75H2C2 17.5228 6.47715 22 12 22V21.25ZM2.75 12H3.5C3.5 7.30558 7.30558 3.5 12 3.5V2.75V2C6.47715 2 2 6.47715 2 12H2.75ZM12 2.75V3.5C12.1544 3.5 12.3078 3.50411 12.4601 3.51222L12.5 2.76328L12.5399 2.01435C12.3611 2.00482 12.1811 2 12 2V2.75ZM21.2367 11.5L20.4878 11.5399C20.4959 11.6922 20.5 11.8456 20.5 12H21.25H22C22 11.8189 21.9952 11.6389 21.9857 11.4601L21.2367 11.5Z" fill="currentColor"/>',Om._solidSVG='<path d="M18.4668 1.77945C18.3884 1.5245 18.1804 1.33039 17.9207 1.26969C17.6609 1.20899 17.3885 1.29083 17.2051 1.48462L13.7051 5.18462C13.5734 5.32388 13.5 5.50831 13.5 5.70002V9.43936L11.4697 11.4697C11.1768 11.7626 11.1768 12.2375 11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L14.5607 10.5H18.3C18.4917 10.5 18.6761 10.4266 18.8154 10.2949L22.5154 6.79487C22.7092 6.61156 22.791 6.33911 22.7303 6.07935C22.6696 5.8196 22.4755 5.61163 22.2206 5.53318L19.3501 4.64995L18.4668 1.77945Z" fill="currentColor"/><path d="M11.7361 6.67693C11.8154 7.08348 11.5501 7.47732 11.1435 7.55659C9.06706 7.96145 7.5 9.79157 7.5 11.9861C7.5 14.4785 9.52054 16.4991 12.013 16.4991C14.2075 16.4991 16.0376 14.932 16.4425 12.8556C16.5217 12.4491 16.9156 12.1838 17.3221 12.263C17.7287 12.3423 17.994 12.7361 17.9147 13.1427C17.3751 15.9102 14.9388 17.9991 12.013 17.9991C8.69211 17.9991 6 15.307 6 11.9861C6 9.06021 8.08896 6.62391 10.8565 6.08431C11.263 6.00505 11.6569 6.27037 11.7361 6.67693Z" fill="currentColor"/><path d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C12.1544 3.5 12.3078 3.50411 12.4601 3.51222C12.8737 3.53425 13.2269 3.2168 13.2489 2.80318C13.271 2.38955 12.9535 2.03638 12.5399 2.01434C12.3611 2.00482 12.1811 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.8189 21.9952 11.6389 21.9857 11.4601C21.9636 11.0465 21.6105 10.729 21.1968 10.7511C20.7832 10.7731 20.4657 11.1263 20.4878 11.5399C20.4959 11.6922 20.5 11.8456 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z" fill="currentColor"/>',Om._name="target-arrow",Om._width=24,Om._height=24,Om._viewBox="0 0 24 24",Om=(0,s.Cc)([(0,C.Y$)("gds-icon-target-arrow")],Om);const Wm=e=>{Om.define();const t=(0,n.p)("gds-icon-target-arrow"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Pm=class extends R.M{};Pm._regularSVG='<path d="M18 20.25C16.114 19.6013 14.0967 19.25 12 19.25C9.90334 19.25 7.88601 19.6013 6 20.25M2.75 3.75H21.25V16.25H2.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Pm._solidSVG='<path d="M2 3.75C2 3.33579 2.33579 3 2.75 3H21.25C21.6642 3 22 3.33579 22 3.75V16.25C22 16.6642 21.6642 17 21.25 17H2.75C2.33579 17 2 16.6642 2 16.25V3.75Z" fill="currentColor"/><path d="M6.24416 20.9592C8.05294 20.337 9.9879 20 12.0002 20C14.0125 20 15.9475 20.337 17.7563 20.9592C18.1479 21.0939 18.5747 20.8856 18.7094 20.494C18.8442 20.1023 18.6358 19.6755 18.2442 19.5408C16.2809 18.8655 14.1812 18.5 12.0002 18.5C9.8192 18.5 7.71949 18.8655 5.75625 19.5408C5.36456 19.6755 5.15626 20.1023 5.29099 20.494C5.42572 20.8856 5.85247 21.0939 6.24416 20.9592Z" fill="currentColor"/>',Pm._name="television",Pm._width=24,Pm._height=24,Pm._viewBox="0 0 24 24",Pm=(0,s.Cc)([(0,C.Y$)("gds-icon-television")],Pm);const Fm=e=>{Pm.define();const t=(0,n.p)("gds-icon-television"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Dm=class extends R.M{};Dm._regularSVG='<path d="M6 4.9597C7.98887 6.65632 9.25 9.18088 9.25 12C9.25 14.8191 7.98887 17.3437 6 19.0403M6 4.9597C4.01113 6.65632 2.75 9.18088 2.75 12C2.75 14.8191 4.01113 17.3437 6 19.0403M6 4.9597C7.61524 3.58181 9.71048 2.75 12 2.75C14.2895 2.75 16.3848 3.58181 18 4.9597M6 19.0403C7.61524 20.4182 9.71048 21.25 12 21.25C14.2895 21.25 16.3848 20.4182 18 19.0403M18 4.9597C16.0111 6.65632 14.75 9.18088 14.75 12C14.75 14.8191 16.0111 17.3437 18 19.0403M18 4.9597C19.9889 6.65632 21.25 9.18088 21.25 12C21.25 14.8191 19.9889 17.3437 18 19.0403" stroke="currentColor" stroke-width="1.5"/>',Dm._solidSVG='<path d="M2 12C2 9.28189 3.08445 6.81707 4.84428 5.0146C7.05362 6.54963 8.5 9.10591 8.5 12C8.5 14.8941 7.05362 17.4504 4.84428 18.9854C3.08445 17.1829 2 14.7181 2 12Z" fill="currentColor"/><path d="M10 12C10 8.72836 8.42889 5.82368 6 3.99927C7.67132 2.74389 9.74879 2 12 2C14.2512 2 16.3287 2.74389 18 3.99927C15.5711 5.82368 14 8.72837 14 12C14 15.2716 15.5711 18.1763 18 20.0007C16.3287 21.2561 14.2512 22 12 22C9.74879 22 7.67132 21.2561 6 20.0007C8.42889 18.1763 10 15.2716 10 12Z" fill="currentColor"/><path d="M19.1557 5.0146C20.9156 6.81707 22 9.28189 22 12C22 14.7181 20.9156 17.1829 19.1557 18.9854C16.9464 17.4504 15.5 14.8941 15.5 12C15.5 9.10591 16.9464 6.54963 19.1557 5.0146Z" fill="currentColor"/>',Dm._name="tennis",Dm._width=24,Dm._height=24,Dm._viewBox="0 0 24 24",Dm=(0,s.Cc)([(0,C.Y$)("gds-icon-tennis")],Dm);const Km=e=>{Dm.define();const t=(0,n.p)("gds-icon-tennis"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Um=class extends R.M{};Um._regularSVG='<path d="M1.75 5.75H9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.75 9.75H6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.75 8.38793L18.6121 4.25L7.75 15.1121V19.25H11.8879L22.75 8.38793Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Um._solidSVG='<path d="M1.75 5.75H9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.75 9.75H6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.1424 3.71967C18.8495 3.42678 18.3746 3.42678 18.0817 3.71967L7.21967 14.5817C7.07902 14.7224 7 14.9132 7 15.1121V19.25C7 19.6642 7.33579 20 7.75 20H11.8879C12.0868 20 12.2776 19.921 12.4183 19.7803L23.2803 8.91826C23.5732 8.62537 23.5732 8.15049 23.2803 7.8576L19.1424 3.71967Z" fill="currentColor"/>',Um._name="text-edit",Um._width=24,Um._height=24,Um._viewBox="0 0 24 24",Um=(0,s.Cc)([(0,C.Y$)("gds-icon-text-edit")],Um);const Jm=e=>{Um.define();const t=(0,n.p)("gds-icon-text-edit"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let Qm=class extends R.M{};Qm._regularSVG='<path d="M15.75 4.25H19.25M15.75 8.25H19.25M15.75 12.25H19.25M13.25 17C13.25 19.3472 11.3472 21.25 9 21.25C6.65279 21.25 4.75 19.3472 4.75 17C4.75 15.4791 5.54892 14.1447 6.75 13.3938V2.75H11.25V13.3938C12.4511 14.1447 13.25 15.4791 13.25 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',Qm._solidSVG='<path d="M7.25 2C6.83579 2 6.5 2.33579 6.5 2.75V12.6689C5.0055 13.5334 4 15.1493 4 17C4 19.7614 6.23858 22 9 22C11.7614 22 14 19.7614 14 17C14 15.1493 12.9945 13.5334 11.5 12.6689V2.75C11.5 2.33579 11.1642 2 10.75 2H7.25Z" fill="currentColor"/><path d="M15.75 3.5C15.3358 3.5 15 3.83579 15 4.25C15 4.66421 15.3358 5 15.75 5H19.25C19.6642 5 20 4.66421 20 4.25C20 3.83579 19.6642 3.5 19.25 3.5H15.75Z" fill="currentColor"/><path d="M15.75 7.5C15.3358 7.5 15 7.83579 15 8.25C15 8.66421 15.3358 9 15.75 9H19.25C19.6642 9 20 8.66421 20 8.25C20 7.83579 19.6642 7.5 19.25 7.5H15.75Z" fill="currentColor"/><path d="M15 12.25C15 11.8358 15.3358 11.5 15.75 11.5H19.25C19.6642 11.5 20 11.8358 20 12.25C20 12.6642 19.6642 13 19.25 13H15.75C15.3358 13 15 12.6642 15 12.25Z" fill="currentColor"/>',Qm._name="thermostat",Qm._width=24,Qm._height=24,Qm._viewBox="0 0 24 24",Qm=(0,s.Cc)([(0,C.Y$)("gds-icon-thermostat")],Qm);const Xm=e=>{Qm.define();const t=(0,n.p)("gds-icon-thermostat"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let eV=class extends R.M{};eV._regularSVG='<path d="M17.2521 13.25H21.25V3.75H17.2521M17.2521 3.75V13L13.0043 21.25H12.389C11.1622 21.25 10.2249 20.1546 10.4139 18.9419L10.9892 15.25H5.74908C3.91335 15.25 2.50859 13.6144 2.78476 11.7987L3.62128 6.29867C3.84421 4.83298 5.1038 3.75 6.5856 3.75H17.2521Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',eV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0021 4.5V12.5H20.5V4.5H18.0021ZM17.5808 14H21.25C21.6642 14 22 13.6642 22 13.25V3.75C22 3.33579 21.6642 3 21.25 3H6.58563C4.73288 3 3.15846 4.35403 2.87984 6.1859L2.04331 11.6859C1.69817 13.9552 3.45378 16 5.74911 16H10.1133L9.67283 18.8264C9.41305 20.4935 10.7015 22 12.389 22H13.0043C13.2852 22 13.5425 21.8431 13.6711 21.5933L17.5808 14Z" fill="currentColor"/>',eV._name="thumbs-down",eV._width=24,eV._height=24,eV._viewBox="0 0 24 24",eV=(0,s.Cc)([(0,C.Y$)("gds-icon-thumbs-down")],eV);const tV=e=>{eV.define();const t=(0,n.p)("gds-icon-thumbs-down"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let rV=class extends R.M{};rV._regularSVG='<path d="M6.75 10.75H2.75V20.25H6.75M6.75 20.25V11L11 2.75H11.6156C12.843 2.75 13.7808 3.84535 13.5917 5.0581L13.0161 8.75H18.2589C20.0956 8.75 21.5011 10.3856 21.2248 12.2013L20.3878 17.7013C20.1648 19.167 18.9046 20.25 17.422 20.25H6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',rV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C10.7192 2 10.4619 2.15688 10.3333 2.40653L6.42148 10H2.75C2.33579 10 2 10.3358 2 10.75V20.25C2 20.6642 2.33579 21 2.75 21H17.422C19.2752 21 20.8505 19.6463 21.1293 17.8142L21.9663 12.3142C22.3117 10.0444 20.5548 8 18.2589 8H13.8921L14.3328 5.17364C14.5928 3.50611 13.3033 2 11.6156 2H11ZM6 11.5V19.5H3.5V11.5H6Z" fill="currentColor"/>',rV._name="thumbs-up",rV._width=24,rV._height=24,rV._viewBox="0 0 24 24",rV=(0,s.Cc)([(0,C.Y$)("gds-icon-thumbs-up")],rV);const oV=e=>{rV.define();const t=(0,n.p)("gds-icon-thumbs-up"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let sV=class extends R.M{};sV._regularSVG='<path d="M15.25 7.75V8.25M15.25 11.75V12.25M15.25 15.75V16.25M2.75 4.75H21.25V9.25C18.5 10 18.5 14 21.25 14.75V19.25H2.75V14.75C5.5 14 5.5 10 2.75 9.25V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',sV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H21.25C21.6642 4 22 4.33579 22 4.75V9.25C22 9.58821 21.7736 9.88458 21.4473 9.97357C19.4342 10.5226 19.4342 13.4774 21.4473 14.0264C21.7736 14.1154 22 14.4118 22 14.75V19.25C22 19.6642 21.6642 20 21.25 20H2.75C2.33579 20 2 19.6642 2 19.25V14.75C2 14.4118 2.22637 14.1154 2.55266 14.0264C4.56578 13.4774 4.56578 10.5226 2.55266 9.97357C2.22637 9.88458 2 9.58821 2 9.25V4.75ZM15.25 7C15.6642 7 16 7.33579 16 7.75V8.25C16 8.66421 15.6642 9 15.25 9C14.8358 9 14.5 8.66421 14.5 8.25V7.75C14.5 7.33579 14.8358 7 15.25 7ZM15.25 11C15.6642 11 16 11.3358 16 11.75V12.25C16 12.6642 15.6642 13 15.25 13C14.8358 13 14.5 12.6642 14.5 12.25V11.75C14.5 11.3358 14.8358 11 15.25 11ZM15.25 15C15.6642 15 16 15.3358 16 15.75V16.25C16 16.6642 15.6642 17 15.25 17C14.8358 17 14.5 16.6642 14.5 16.25V15.75C14.5 15.3358 14.8358 15 15.25 15Z" fill="currentColor"/>',sV._name="ticket",sV._width=24,sV._height=24,sV._viewBox="0 0 24 24",sV=(0,s.Cc)([(0,C.Y$)("gds-icon-ticket")],sV);const nV=e=>{sV.define();const t=(0,n.p)("gds-icon-ticket"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let lV=class extends R.M{};lV._regularSVG='<path d="M15.75 20.25H20.25V3.75H3.75V20.25H8.25M9 13.0929L11.2327 15.0599L15.14 9.43994" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',lV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 3C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H15.5C15.2239 21 15 20.7761 15 20.5C15 20.2239 14.7761 20 14.5 20H9.5C9.22386 20 9 20.2239 9 20.5C9 20.7761 8.77614 21 8.5 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75C3 3.33579 3.33579 3 3.75 3H20.25ZM15.7558 9.61807C15.9922 9.27798 15.9082 8.81059 15.5681 8.57414C15.228 8.3377 14.7607 8.42172 14.5242 8.76181L11.0972 13.691L9.49578 12.2802C9.18498 12.0064 8.71105 12.0364 8.43724 12.3472C8.16343 12.658 8.19341 13.1319 8.50422 13.4057L10.7369 15.3727C10.8974 15.5141 11.1106 15.5802 11.3229 15.5545C11.5352 15.5288 11.7264 15.4137 11.8485 15.2381L15.7558 9.61807Z" fill="currentColor"/>',lV._name="todos",lV._width=24,lV._height=24,lV._viewBox="0 0 24 24",lV=(0,s.Cc)([(0,C.Y$)("gds-icon-todos")],lV);const iV=e=>{lV.define();const t=(0,n.p)("gds-icon-todos"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let aV=class extends R.M{};aV._regularSVG='<path d="M5.83333 2.29175V8.95842M5.83333 8.95842H3.125V15.2084H5.83333M5.83333 8.95842H8.54167V15.2084H5.83333M5.83333 15.2084V17.7084M14.1667 2.29176V4.79175M14.1667 4.79175H11.4583V15.2084H14.1667M14.1667 4.79175H16.875V15.2084H14.1667M14.1667 15.2084V17.7084" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',aV._solidSVG='<path d="M6.45833 2.29175C6.45833 1.94657 6.17851 1.66675 5.83333 1.66675C5.48816 1.66675 5.20833 1.94657 5.20833 2.29175V8.33342H3.125C2.77982 8.33342 2.5 8.61324 2.5 8.95842V15.2084C2.5 15.5536 2.77982 15.8334 3.125 15.8334H5.20833V17.7084C5.20833 18.0536 5.48816 18.3334 5.83333 18.3334C6.17851 18.3334 6.45833 18.0536 6.45833 17.7084V15.8334H8.54167C8.88684 15.8334 9.16667 15.5536 9.16667 15.2084V8.95842C9.16667 8.61324 8.88684 8.33342 8.54167 8.33342H6.45833V2.29175Z" fill="currentColor"/><path d="M14.7917 2.29176C14.7917 1.94658 14.5118 1.66676 14.1667 1.66676C13.8215 1.66676 13.5417 1.94658 13.5417 2.29176V4.16675H11.4583C11.1132 4.16675 10.8333 4.44657 10.8333 4.79175V15.2084C10.8333 15.5536 11.1132 15.8334 11.4583 15.8334H13.5417V17.7084C13.5417 18.0536 13.8215 18.3334 14.1667 18.3334C14.5118 18.3334 14.7917 18.0536 14.7917 17.7084V15.8334H16.875C17.2202 15.8334 17.5 15.5536 17.5 15.2084V4.79175C17.5 4.44657 17.2202 4.16675 16.875 4.16675H14.7917V2.29176Z" fill="currentColor"/>',aV._name="trading-view-candles",aV._width=20,aV._height=20,aV._viewBox="0 0 20 20",aV=(0,s.Cc)([(0,C.Y$)("gds-icon-trading-view-candles")],aV);const cV=e=>{aV.define();const t=(0,n.p)("gds-icon-trading-view-candles"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let CV=class extends R.M{};CV._regularSVG='<path d="M5.75 5.75V21.25H18.25V5.75M5.75 5.75H18.25M5.75 5.75H3.75M18.25 5.75H20.25M14 10.75V16.25M10 10.75V16.25M9 5.75C9 4.09315 10.3431 2.75 12 2.75C13.6569 2.75 15 4.09315 15 5.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',CV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.32501 5C8.67247 3.28832 10.1858 2 12 2C13.8142 2 15.3275 3.28832 15.675 5H20.25C20.6642 5 21 5.33579 21 5.75C21 6.16421 20.6642 6.5 20.25 6.5H19V21.25C19 21.6642 18.6642 22 18.25 22H5.75C5.33579 22 5 21.6642 5 21.25V6.5H3.75C3.33579 6.5 3 6.16421 3 5.75C3 5.33579 3.33579 5 3.75 5H8.32501ZM9.87803 5C10.1869 4.12611 11.0203 3.5 12 3.5C12.9797 3.5 13.8131 4.12611 14.122 5H9.87803ZM10 10C10.4142 10 10.75 10.3358 10.75 10.75V16.25C10.75 16.6642 10.4142 17 10 17C9.58579 17 9.25 16.6642 9.25 16.25V10.75C9.25 10.3358 9.58579 10 10 10ZM14 10C14.4142 10 14.75 10.3358 14.75 10.75V16.25C14.75 16.6642 14.4142 17 14 17C13.5858 17 13.25 16.6642 13.25 16.25V10.75C13.25 10.3358 13.5858 10 14 10Z" fill="currentColor"/>',CV._name="trash-can",CV._width=24,CV._height=24,CV._viewBox="0 0 24 24",CV=(0,s.Cc)([(0,C.Y$)("gds-icon-trash-can")],CV);const dV=e=>{CV.define();const t=(0,n.p)("gds-icon-trash-can"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let hV=class extends R.M{};hV._regularSVG='<path d="M12 21.25V15M12 15L9.75 12.75M12 15L15.25 11.75M20.25 11C20.25 15.5563 16.5563 19.25 12 19.25C7.44365 19.25 3.75 15.5563 3.75 11C3.75 6.44365 7.44365 2.75 12 2.75C16.5563 2.75 20.25 6.44365 20.25 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',hV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 19.9692V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V19.9692C6.63035 19.5881 3 15.718 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11C21 15.718 17.3696 19.5881 12.75 19.9692ZM11.25 18.463V15.3107L9.21967 13.2803C8.92678 12.9874 8.92678 12.5126 9.21967 12.2197C9.51256 11.9268 9.98744 11.9268 10.2803 12.2197L12 13.9393L14.7197 11.2197C15.0126 10.9268 15.4874 10.9268 15.7803 11.2197C16.0732 11.5126 16.0732 11.9874 15.7803 12.2803L12.75 15.3107V18.463C12.5033 18.4875 12.2531 18.5 12 18.5C11.7469 18.5 11.4967 18.4875 11.25 18.463Z" fill="currentColor"/>',hV._name="tree",hV._width=24,hV._height=24,hV._viewBox="0 0 24 24",hV=(0,s.Cc)([(0,C.Y$)("gds-icon-tree")],hV);const uV=e=>{hV.define();const t=(0,n.p)("gds-icon-tree"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let pV=class extends R.M{};pV._regularSVG='<path d="M15.75 6.75H21.25V12.25M20.7361 7.275L13 15L9 11L2.75 17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',pV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15 6.75C15 6.33579 15.3358 6 15.75 6H21.25C21.6642 6 22 6.33579 22 6.75V12.25C22 12.6642 21.6642 13 21.25 13C20.8358 13 20.5 12.6642 20.5 12.25V8.57067L13.5299 15.5307C13.237 15.8232 12.7624 15.8231 12.4697 15.5303L9 12.0607L3.28033 17.7803C2.98744 18.0732 2.51256 18.0732 2.21967 17.7803C1.92678 17.4874 1.92678 17.0126 2.21967 16.7197L8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L13.0004 13.9397L19.4494 7.5H15.75C15.3358 7.5 15 7.16421 15 6.75Z" fill="currentColor"/>',pV._name="trending-four",pV._width=24,pV._height=24,pV._viewBox="0 0 24 24",pV=(0,s.Cc)([(0,C.Y$)("gds-icon-trending-four")],pV);const gV=e=>{pV.define();const t=(0,n.p)("gds-icon-trending-four"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let MV=class extends R.M{};MV._regularSVG='<path d="M2.75 4.75V19.25H21.25M6.75 15.25L11 11L13 13L18.754 7.246M14.75 6.75H19.25V11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',MV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V18.5H21.25C21.6642 18.5 22 18.8358 22 19.25C22 19.6642 21.6642 20 21.25 20H2.75C2.33579 20 2 19.6642 2 19.25V4.75C2 4.33579 2.33579 4 2.75 4ZM14 6.75C14 6.33579 14.3358 6 14.75 6H19.25C19.6642 6 20 6.33579 20 6.75V11.25C20 11.6642 19.6642 12 19.25 12C18.8358 12 18.5 11.6642 18.5 11.25V8.56066L13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L11 12.0607L7.28033 15.7803C6.98744 16.0732 6.51256 16.0732 6.21967 15.7803C5.92678 15.4874 5.92678 15.0126 6.21967 14.7197L10.4697 10.4697C10.7626 10.1768 11.2374 10.1768 11.5303 10.4697L13 11.9393L17.4393 7.5H14.75C14.3358 7.5 14 7.16421 14 6.75Z" fill="currentColor"/>',MV._name="trending-one",MV._width=24,MV._height=24,MV._viewBox="0 0 24 24",MV=(0,s.Cc)([(0,C.Y$)("gds-icon-trending-one")],MV);const mV=e=>{MV.define();const t=(0,n.p)("gds-icon-trending-one"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let VV=class extends R.M{};VV._regularSVG='<path d="M2.75 13.0312L5 10L8 15L13 3.75L18 20.25L21.25 14.0625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',VV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0465 3.00145C13.3592 3.02086 13.6269 3.23264 13.7178 3.5325L18.187 18.2811L20.586 13.7138C20.7786 13.347 21.2321 13.2059 21.5988 13.3985C21.9655 13.5911 22.1066 14.0446 21.914 14.4113L18.664 20.5988C18.5224 20.8682 18.2321 21.0254 17.9291 20.9966C17.6261 20.9679 17.3705 20.7588 17.2822 20.4675L12.8668 5.89646L8.68536 15.3046C8.5717 15.5603 8.32512 15.7315 8.0458 15.7486C7.76647 15.7657 7.50086 15.6258 7.35688 15.3859L4.93384 11.3475L3.35223 13.4783C3.10535 13.8109 2.63559 13.8804 2.30299 13.6335C1.97039 13.3866 1.90089 12.9168 2.14777 12.5842L4.39777 9.55299C4.547 9.35195 4.78671 9.23863 5.03678 9.25091C5.28685 9.26319 5.5143 9.39944 5.64312 9.61414L7.9007 13.3768L12.3146 3.4454C12.4419 3.15908 12.7337 2.98204 13.0465 3.00145Z" fill="currentColor"/>',VV._name="trending-three",VV._width=24,VV._height=24,VV._viewBox="0 0 24 24",VV=(0,s.Cc)([(0,C.Y$)("gds-icon-trending-three")],VV);const fV=e=>{VV.define();const t=(0,n.p)("gds-icon-trending-three"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let LV=class extends R.M{};LV._regularSVG='<path d="M19.2188 10.9688L17.1562 8.90625L12 14.0625L9.42188 11.4844L3.75 17.1562M3.75 3.75V17.1562M20.25 20.25H3.75V17.1562" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',LV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V15.3456L8.89154 10.954C9.18444 10.6612 9.65931 10.6612 9.95221 10.954L12 13.0018L16.6259 8.37592C16.9188 8.08303 17.3937 8.08303 17.6866 8.37592L19.7491 10.4384C20.042 10.7313 20.042 11.2062 19.7491 11.4991C19.4562 11.792 18.9813 11.792 18.6884 11.4991L17.1562 9.96691L12.5303 14.5928C12.2374 14.8857 11.7626 14.8857 11.4697 14.5928L9.42188 12.545L4.5 17.4669V19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75C3 3.33579 3.33579 3 3.75 3Z" fill="currentColor"/>',LV._name="trending-two",LV._width=24,LV._height=24,LV._viewBox="0 0 24 24",LV=(0,s.Cc)([(0,C.Y$)("gds-icon-trending-two")],LV);const _V=e=>{LV.define();const t=(0,n.p)("gds-icon-trending-two"),r={...e,class:e.className};return(0,i.createElement)(t,r)};var HV=r(8745);const vV=e=>{HV.f.define();const t=(0,n.p)("gds-icon-triangle-exclamation"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let kV=class extends R.M{};kV._regularSVG='<path d="M10 16.25H14.5M4.71429 16.25H2.75V10L5 6.75H8.75V15M19.3561 16.25H21.25V4.75H8.75V6.84091M9.75 16.75C9.75 18.1307 8.63071 19.25 7.25 19.25C5.86929 19.25 4.75 18.1307 4.75 16.75C4.75 15.3693 5.86929 14.25 7.25 14.25C8.63071 14.25 9.75 15.3693 9.75 16.75ZM19.25 16.75C19.25 18.1307 18.1307 19.25 16.75 19.25C15.3693 19.25 14.25 18.1307 14.25 16.75C14.25 15.3693 15.3693 14.25 16.75 14.25C18.1307 14.25 19.25 15.3693 19.25 16.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',kV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 4C8.33579 4 8 4.33579 8 4.75V6H5C4.75389 6 4.52344 6.12074 4.38336 6.32309L2.13336 9.57309C2.04652 9.69852 2 9.84745 2 10V16.25C2 16.6642 2.33579 17 2.75 17H4.00947C4.13713 18.6781 5.53919 20 7.25 20C8.96081 20 10.3629 18.6781 10.4905 17H13.5095C13.6371 18.6781 15.0392 20 16.75 20C18.4608 20 19.8629 18.6781 19.9905 17H21.25C21.6642 17 22 16.6642 22 16.25V4.75C22 4.33579 21.6642 4 21.25 4H8.75ZM8 7.5H5.39296L3.5 10.2343V15.5H4.24908C4.73886 14.3255 5.89803 13.5 7.25 13.5C7.50813 13.5 7.75924 13.5301 8 13.587V7.5ZM18.1057 15.6433C18.178 15.8563 18.2852 16.0531 18.4205 16.227C18.4722 16.3922 18.5 16.5678 18.5 16.75C18.5 17.7165 17.7165 18.5 16.75 18.5C15.7835 18.5 15 17.7165 15 16.75C15 15.7835 15.7835 15 16.75 15C17.2967 15 17.7848 15.2507 18.1057 15.6433ZM7.25 15C6.2835 15 5.5 15.7835 5.5 16.75C5.5 17.7165 6.2835 18.5 7.25 18.5C8.2165 18.5 9 17.7165 9 16.75C9 15.7835 8.2165 15 7.25 15Z" fill="currentColor"/>',kV._name="truck",kV._width=24,kV._height=24,kV._viewBox="0 0 24 24",kV=(0,s.Cc)([(0,C.Y$)("gds-icon-truck")],kV);const wV=e=>{kV.define();const t=(0,n.p)("gds-icon-truck"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let bV=class extends R.M{};bV._regularSVG='<path d="M12 15.25V19.3267C12 20.3889 11.1389 21.25 10.0767 21.25C9.15988 21.25 8.37054 20.6029 8.19074 19.7039L7.99996 18.75M12 2.75V4.75M12 4.75C7.43826 4.75 3.62751 7.96518 2.71021 12.253H21.2897C20.3724 7.96518 16.5617 4.75 12 4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',bV._solidSVG='<path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V4.02707C6.66452 4.35893 2.91655 7.70682 1.97754 12.0961C1.93017 12.3176 1.98538 12.5486 2.12777 12.7246C2.27017 12.9007 2.48449 13.003 2.71094 13.003H21.2904C21.5169 13.003 21.7312 12.9007 21.8736 12.7246C22.016 12.5486 22.0712 12.3176 22.0239 12.0961C21.0847 7.70638 17.3361 4.35825 12.75 4.02697V2.75Z" fill="currentColor"/><path d="M12.7501 15.25C12.7501 14.8358 12.4144 14.5 12.0001 14.5C11.5859 14.5 11.2501 14.8358 11.2501 15.25V19.3267C11.2501 19.9747 10.7248 20.5 10.0769 20.5C9.51758 20.5 9.03605 20.1052 8.92636 19.5568L8.73558 18.6029C8.65435 18.1967 8.25923 17.9333 7.85306 18.0146C7.44689 18.0958 7.18348 18.4909 7.26471 18.8971L7.45549 19.851C7.7054 21.1005 8.80256 22 10.0769 22C11.5533 22 12.7501 20.8031 12.7501 19.3267V15.25Z" fill="currentColor"/>',bV._name="umbrella-security",bV._width=24,bV._height=24,bV._viewBox="0 0 24 24",bV=(0,s.Cc)([(0,C.Y$)("gds-icon-umbrella-security")],bV);const ZV=e=>{bV.define();const t=(0,n.p)("gds-icon-umbrella-security"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let yV=class extends R.M{};yV._regularSVG='<path d="M12 14V17M7.75 9.75V7C7.75 4.65279 9.65279 2.75 12 2.75C14.0926 2.75 15.832 4.26237 16.1847 6.25371M4.75 9.75H19.25V21.25H4.75V9.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',yV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C9.23858 2 7 4.23858 7 7V9H4.75C4.33579 9 4 9.33579 4 9.75V21.25C4 21.6642 4.33579 22 4.75 22H19.25C19.6642 22 20 21.6642 20 21.25V9.75C20 9.33579 19.6642 9 19.25 9H8.5V7C8.5 5.067 10.067 3.5 12 3.5C13.7225 3.5 15.1558 4.7451 15.4462 6.38452C15.5184 6.79239 15.9076 7.06446 16.3155 6.99222C16.7234 6.91997 16.9954 6.53076 16.9232 6.1229C16.5081 3.77964 14.4627 2 12 2ZM12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V14C11.25 13.5858 11.5858 13.25 12 13.25Z" fill="currentColor"/>',yV._name="unlocked",yV._width=24,yV._height=24,yV._viewBox="0 0 24 24",yV=(0,s.Cc)([(0,C.Y$)("gds-icon-unlocked")],yV);const xV=e=>{yV.define();const t=(0,n.p)("gds-icon-unlocked"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let SV=class extends R.M{};SV._regularSVG='<path d="M20.25 3.75V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 6.75H3.75V10.25H17.25V6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 13.75H7.75V17.25H17.25V13.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',SV._solidSVG='<path d="M21 3.75C21 3.33579 20.6642 3 20.25 3C19.8358 3 19.5 3.33579 19.5 3.75V20.25C19.5 20.6642 19.8358 21 20.25 21C20.6642 21 21 20.6642 21 20.25V3.75Z" fill="currentColor"/><path d="M3.75 6C3.33579 6 3 6.33579 3 6.75V10.25C3 10.6642 3.33579 11 3.75 11H17.25C17.6642 11 18 10.6642 18 10.25V6.75C18 6.33579 17.6642 6 17.25 6H3.75Z" fill="currentColor"/><path d="M7.75 13C7.33579 13 7 13.3358 7 13.75V17.25C7 17.6642 7.33579 18 7.75 18H17.25C17.6642 18 18 17.6642 18 17.25V13.75C18 13.3358 17.6642 13 17.25 13H7.75Z" fill="currentColor"/>',SV._name="vertical-alignment-right",SV._width=24,SV._height=24,SV._viewBox="0 0 24 24",SV=(0,s.Cc)([(0,C.Y$)("gds-icon-vertical-alignment-right")],SV);const $V=e=>{SV.define();const t=(0,n.p)("gds-icon-vertical-alignment-right"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let GV=class extends R.M{};GV._regularSVG='<path d="M19.2478 4.75195C21.1027 6.60684 22.25 9.16934 22.25 11.9998C22.25 14.8303 21.1027 17.3928 19.2478 19.2476M15.8891 8.11133C16.8844 9.10663 17.5 10.4816 17.5 12.0004C17.5 13.5192 16.8844 14.8942 15.8891 15.8895M1.75 7.75H6L12.25 3.75V20.25L6 16.25H1.75V7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',GV._solidSVG='<path d="M13 3.75C13 3.47592 12.8505 3.22366 12.6101 3.09208C12.3696 2.9605 12.0766 2.97055 11.8457 3.1183L5.78055 7H1.75C1.33579 7 1 7.33579 1 7.75V16.25C1 16.6642 1.33579 17 1.75 17H5.78055L11.8457 20.8817C12.0766 21.0294 12.3696 21.0395 12.6101 20.9079C12.8505 20.7763 13 20.5241 13 20.25V3.75Z" fill="currentColor"/><path d="M18.7175 4.22162C19.0104 3.92873 19.4852 3.92873 19.7781 4.22162C21.7679 6.21141 23 8.96244 23 11.9998C23 15.0372 21.7679 17.7882 19.7781 19.778C19.4852 20.0709 19.0104 20.0709 18.7175 19.778C18.4246 19.4851 18.4246 19.0102 18.7175 18.7173C20.4375 16.9973 21.5 14.6234 21.5 11.9998C21.5 9.37624 20.4375 7.00227 18.7175 5.28228C18.4246 4.98939 18.4246 4.51452 18.7175 4.22162Z" fill="currentColor"/><path d="M16.4194 7.581C16.1265 7.28811 15.6516 7.28811 15.3587 7.581C15.0658 7.87389 15.0658 8.34876 15.3587 8.64166C16.2191 9.50206 16.75 10.6885 16.75 12.0004C16.75 13.3123 16.2191 14.4988 15.3587 15.3592C15.0658 15.6521 15.0658 16.1269 15.3587 16.4198C15.6516 16.7127 16.1265 16.7127 16.4194 16.4198C17.5496 15.2896 18.25 13.7261 18.25 12.0004C18.25 10.2747 17.5496 8.7112 16.4194 7.581Z" fill="currentColor"/>',GV._name="volume-full",GV._width=24,GV._height=24,GV._viewBox="0 0 24 24",GV=(0,s.Cc)([(0,C.Y$)("gds-icon-volume-full")],GV);const jV=e=>{GV.define();const t=(0,n.p)("gds-icon-volume-full"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let EV=class extends R.M{};EV._regularSVG='<path d="M15.8891 8.11133C16.8844 9.10663 17.5 10.4816 17.5 12.0004C17.5 13.5192 16.8844 14.8942 15.8891 15.8895M1.75 7.75H6L12.25 3.75V20.25L6 16.25H1.75V7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',EV._solidSVG='<path d="M12.6101 3.09208C12.8505 3.22366 13 3.47592 13 3.75V20.25C13 20.5241 12.8505 20.7763 12.6101 20.9079C12.3696 21.0395 12.0766 21.0294 11.8457 20.8817L5.78055 17H1.75C1.33579 17 1 16.6642 1 16.25V7.75C1 7.33579 1.33579 7 1.75 7H5.78055L11.8457 3.1183C12.0766 2.97055 12.3696 2.9605 12.6101 3.09208Z" fill="currentColor"/><path d="M16.4194 7.581C16.1265 7.28811 15.6516 7.28811 15.3587 7.581C15.0658 7.87389 15.0658 8.34876 15.3587 8.64166C16.2191 9.50206 16.75 10.6885 16.75 12.0004C16.75 13.3123 16.2191 14.4988 15.3587 15.3592C15.0658 15.6521 15.0658 16.1269 15.3587 16.4198C15.6516 16.7127 16.1265 16.7127 16.4194 16.4198C17.5496 15.2896 18.25 13.7261 18.25 12.0004C18.25 10.2747 17.5496 8.7112 16.4194 7.581Z" fill="currentColor"/>',EV._name="volume-half",EV._width=24,EV._height=24,EV._viewBox="0 0 24 24",EV=(0,s.Cc)([(0,C.Y$)("gds-icon-volume-half")],EV);const BV=e=>{EV.define();const t=(0,n.p)("gds-icon-volume-half"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let qV=class extends R.M{};qV._regularSVG='<path d="M1.75 7.75V7C1.33579 7 1 7.33579 1 7.75H1.75ZM6 7.75V8.5C6.1433 8.5 6.2836 8.45895 6.40429 8.3817L6 7.75ZM12.25 3.75H13C13 3.47592 12.8505 3.22366 12.6101 3.09208C12.3696 2.9605 12.0766 2.97055 11.8457 3.1183L12.25 3.75ZM12.25 20.25L11.8457 20.8817C12.0766 21.0294 12.3696 21.0395 12.6101 20.9079C12.8505 20.7763 13 20.5241 13 20.25H12.25ZM6 16.25L6.40429 15.6183C6.2836 15.5411 6.1433 15.5 6 15.5V16.25ZM1.75 16.25H1C1 16.6642 1.33579 17 1.75 17L1.75 16.25ZM22.0303 10.5303C22.3232 10.2374 22.3232 9.76256 22.0303 9.46967C21.7374 9.17678 21.2626 9.17678 20.9697 9.46967L22.0303 10.5303ZM16.727 13.7123C16.4341 14.0052 16.4341 14.4801 16.727 14.773C17.0199 15.0659 17.4948 15.0659 17.7877 14.773L16.727 13.7123ZM17.7877 9.46967C17.4948 9.17678 17.0199 9.17678 16.727 9.46967C16.4341 9.76256 16.4341 10.2374 16.727 10.5303L17.7877 9.46967ZM20.9697 14.773C21.2626 15.0659 21.7374 15.0659 22.0303 14.773C22.3232 14.4801 22.3232 14.0052 22.0303 13.7123L20.9697 14.773ZM1.75 7.75V8.5H6V7.75V7H1.75V7.75ZM6 7.75L6.40429 8.3817L12.6543 4.3817L12.25 3.75L11.8457 3.1183L5.59571 7.1183L6 7.75ZM12.25 3.75H11.5V20.25H12.25H13V3.75H12.25ZM12.25 20.25L12.6543 19.6183L6.40429 15.6183L6 16.25L5.59571 16.8817L11.8457 20.8817L12.25 20.25ZM6 16.25V15.5H1.75V16.25V17H6V16.25ZM1.75 16.25H2.5V7.75H1.75H1V16.25H1.75ZM21.5 10L20.9697 9.46967L18.8483 11.591L19.3787 12.1213L19.909 12.6517L22.0303 10.5303L21.5 10ZM19.3787 12.1213L18.8483 11.591L16.727 13.7123L17.2574 14.2426L17.7877 14.773L19.909 12.6517L19.3787 12.1213ZM17.2574 10L16.727 10.5303L18.8483 12.6517L19.3787 12.1213L19.909 11.591L17.7877 9.46967L17.2574 10ZM19.3787 12.1213L18.8483 12.6517L20.9697 14.773L21.5 14.2426L22.0303 13.7123L19.909 11.591L19.3787 12.1213Z" fill="currentColor"/>',qV._solidSVG='<path d="M12.6101 3.09208C12.8505 3.22366 13 3.47592 13 3.75V20.25C13 20.5241 12.8505 20.7763 12.6101 20.9079C12.3696 21.0395 12.0766 21.0294 11.8457 20.8817L5.78055 17H1.75C1.33579 17 1 16.6642 1 16.25V7.75C1 7.33579 1.33579 7 1.75 7H5.78055L11.8457 3.1183C12.0766 2.97055 12.3696 2.9605 12.6101 3.09208Z" fill="currentColor"/><path d="M22.0303 10.5304C22.3232 10.2375 22.3232 9.76266 22.0303 9.46977C21.7374 9.17687 21.2625 9.17687 20.9697 9.46977L19.3787 11.0608L17.7877 9.46977C17.4948 9.17687 17.0199 9.17687 16.727 9.46977C16.4341 9.76266 16.4341 10.2375 16.727 10.5304L18.318 12.1214L16.727 13.7124C16.4341 14.0053 16.4341 14.4802 16.727 14.7731C17.0199 15.066 17.4948 15.066 17.7877 14.7731L19.3787 13.1821L20.9697 14.7731C21.2625 15.066 21.7374 15.066 22.0303 14.7731C22.3232 14.4802 22.3232 14.0053 22.0303 13.7124L20.4393 12.1214L22.0303 10.5304Z" fill="currentColor"/>',qV._name="volume-off",qV._width=24,qV._height=24,qV._viewBox="0 0 24 24",qV=(0,s.Cc)([(0,C.Y$)("gds-icon-volume-off")],qV);const NV=e=>{qV.define();const t=(0,n.p)("gds-icon-volume-off"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let IV=class extends R.M{};IV._regularSVG='<path d="M3.75 6.5V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H20.25V8.75H16.25M3.75 6.5C3.75 7.74264 4.75736 8.75 6 8.75H16.25M3.75 6.5C3.75 4.98122 4.98122 3.75 6.5 3.75H16.25V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M15.5 13.75C15.9142 13.75 16.25 14.0858 16.25 14.5C16.25 14.9142 15.9142 15.25 15.5 15.25C15.0858 15.25 14.75 14.9142 14.75 14.5C14.75 14.0858 15.0858 13.75 15.5 13.75Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linejoin="round"/>',IV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3C4.567 3 3 4.567 3 6.5V17.25C3 19.3211 4.67893 21 6.75 21H20.25C20.6642 21 21 20.6642 21 20.25V8.75C21 8.33579 20.6642 8 20.25 8H17V3.75C17 3.33579 16.6642 3 16.25 3H6.5ZM15.5 8V4.5H6.5C5.39543 4.5 4.5 5.39543 4.5 6.5C4.5 7.32843 5.17157 8 6 8H15.5ZM15.5 15.5C16.0523 15.5 16.5 15.0523 16.5 14.5C16.5 13.9477 16.0523 13.5 15.5 13.5C14.9477 13.5 14.5 13.9477 14.5 14.5C14.5 15.0523 14.9477 15.5 15.5 15.5Z" fill="currentColor"/>',IV._name="wallet",IV._width=24,IV._height=24,IV._viewBox="0 0 24 24",IV=(0,s.Cc)([(0,C.Y$)("gds-icon-wallet")],IV);const YV=e=>{IV.define();const t=(0,n.p)("gds-icon-wallet"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let zV=class extends R.M{};zV._regularSVG='<path d="M2.75 20.25L6.75 3.75H17.25M17.25 3.75L21.25 20.25M17.25 3.75L13.25 20.25M4 16.75H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',zV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6.0211 3.5733C6.10266 3.23689 6.40384 3 6.74999 3H17.25C17.5961 3 17.8973 3.23689 17.9789 3.5733L21.9789 20.0733C22.0765 20.4759 21.8292 20.8813 21.4267 20.9789C21.0241 21.0765 20.6187 20.8293 20.5211 20.4267L19.8116 17.5H14.6884L13.9789 20.4267C13.8813 20.8293 13.4758 21.0765 13.0733 20.9789C12.6707 20.8813 12.4235 20.4759 12.5211 20.0733L13.1449 17.5H4.18838L3.47888 20.4267C3.38129 20.8293 2.97584 21.0765 2.57329 20.9789C2.17074 20.8813 1.92351 20.4759 2.0211 20.0733L6.0211 3.5733ZM17.25 6.93336L15.052 16H19.448L17.25 6.93336Z" fill="currentColor"/>',zV._name="warning-sign",zV._width=24,zV._height=24,zV._viewBox="0 0 24 24",zV=(0,s.Cc)([(0,C.Y$)("gds-icon-warning-sign")],zV);const AV=e=>{zV.define();const t=(0,n.p)("gds-icon-warning-sign"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let TV=class extends R.M{};TV._regularSVG='<path d="M21 7.82177C15.751 3.72477 8.249 3.72477 3 7.82177M6.75098 13.3144C9.81298 10.9264 14.188 10.9264 17.25 13.3144" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18.25C12.4142 18.25 12.75 18.5858 12.75 19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19C11.25 18.5858 11.5858 18.25 12 18.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>',TV._solidSVG='<path d="M2.53857 7.23055C8.05879 2.92185 15.9413 2.92185 21.4615 7.23055C21.788 7.48541 21.8461 7.95672 21.5913 8.28324C21.3364 8.60977 20.8651 8.66786 20.5386 8.413C15.5608 4.5277 8.43928 4.5277 3.4615 8.413C3.13498 8.66786 2.66367 8.60977 2.40881 8.28324C2.15395 7.95672 2.21204 7.48541 2.53857 7.23055Z" fill="currentColor"/><path d="M16.7888 13.9058C13.9979 11.7293 10.0031 11.7293 7.21224 13.9058C6.88561 14.1606 6.41433 14.1023 6.1596 13.7757C5.90487 13.449 5.96315 12.9778 6.28978 12.723C9.62291 10.1236 14.3781 10.1236 17.7112 12.723C18.0379 12.9778 18.0962 13.449 17.8414 13.7757C17.5867 14.1023 17.1154 14.1606 16.7888 13.9058Z" fill="currentColor"/><path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor"/>',TV._name="wifi-full",TV._width=25,TV._height=24,TV._viewBox="0 0 25 24",TV=(0,s.Cc)([(0,C.Y$)("gds-icon-wifi-full")],TV);const RV=e=>{TV.define();const t=(0,n.p)("gds-icon-wifi-full"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let OV=class extends R.M{};OV._regularSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2043 4.00776C21.1084 4.28763 21.8189 5.10925 22.0609 6.15475C22.4982 8.04786 22.5 12 22.5 12C22.5 12 22.5 15.9522 22.0609 17.8453C21.8189 18.8908 21.1084 19.7124 20.2043 19.9922C18.5673 20.5 12 20.5 12 20.5C12 20.5 5.43274 20.5 3.79568 19.9922C2.89159 19.7124 2.1811 18.8908 1.93908 17.8453C1.5 15.9522 1.5 12 1.5 12C1.5 12 1.5 8.04786 1.93908 6.15475C2.1811 5.10925 2.89159 4.28763 3.79568 4.00776C5.43274 3.5 12 3.5 12 3.5C12 3.5 18.5673 3.5 20.2043 4.00776ZM15.5134 12.0003L9.79785 15.2999V8.70065L15.5134 12.0003Z" fill="currentColor"/>',OV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2043 4.00776C21.1084 4.28763 21.8189 5.10925 22.0609 6.15475C22.4982 8.04786 22.5 12 22.5 12C22.5 12 22.5 15.9522 22.0609 17.8453C21.8189 18.8908 21.1084 19.7124 20.2043 19.9922C18.5673 20.5 12 20.5 12 20.5C12 20.5 5.43274 20.5 3.79568 19.9922C2.89159 19.7124 2.1811 18.8908 1.93908 17.8453C1.5 15.9522 1.5 12 1.5 12C1.5 12 1.5 8.04786 1.93908 6.15475C2.1811 5.10925 2.89159 4.28763 3.79568 4.00776C5.43274 3.5 12 3.5 12 3.5C12 3.5 18.5673 3.5 20.2043 4.00776ZM15.5134 12.0003L9.79785 15.2999V8.70065L15.5134 12.0003Z" fill="currentColor"/>',OV._name="youtube",OV._width=24,OV._height=24,OV._viewBox="0 0 24 24",OV=(0,s.Cc)([(0,C.Y$)("gds-icon-youtube")],OV);const WV=e=>{OV.define();const t=(0,n.p)("gds-icon-youtube"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let PV=class extends R.M{};PV._regularSVG='<path d="M20.25 8.75H13.25V1.75L3.75 15.0473H10.75V22.25L20.25 8.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',PV._solidSVG='<path d="M14 1.75005C14 1.42403 13.7894 1.13535 13.4789 1.03584C13.1685 0.936333 12.8293 1.04879 12.6397 1.31407L3.13974 14.6114C2.97642 14.84 2.95456 15.1407 3.08311 15.3905C3.21166 15.6403 3.46905 15.7973 3.75 15.7973H10V22.2501C10 22.5771 10.2119 22.8664 10.5236 22.9651C10.8354 23.0638 11.1752 22.9491 11.3634 22.6817L20.8634 9.18167C21.0245 8.95269 21.0447 8.65303 20.9157 8.40452C20.7867 8.15601 20.53 8.00005 20.25 8.00005H14V1.75005Z" fill="currentColor"/>',PV._name="zap",PV._width=24,PV._height=24,PV._viewBox="0 0 24 24",PV=(0,s.Cc)([(0,C.Y$)("gds-icon-zap")],PV);const FV=e=>{PV.define();const t=(0,n.p)("gds-icon-zap"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let DV=class extends R.M{};DV._regularSVG='<path d="M20 20L16.1265 16.1265M16.1265 16.1265C17.4385 14.8145 18.25 13.002 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C13.002 18.25 14.8145 17.4385 16.1265 16.1265ZM11 7.75V14.25M14.25 11L7.75 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',DV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.9388 18.3096 14.7174 17.1624 16.1017L20.5307 19.4701C20.8236 19.763 20.8236 20.2379 20.5307 20.5307C20.2379 20.8236 19.763 20.8236 19.4701 20.5307L16.1017 17.1624C14.7174 18.3096 12.9388 19 11 19C6.58172 19 3 15.4183 3 11ZM11.75 7.75C11.75 7.33579 11.4142 7 11 7C10.5858 7 10.25 7.33579 10.25 7.75V10.25H7.75C7.33579 10.25 7 10.5858 7 11C7 11.4142 7.33579 11.75 7.75 11.75H10.25V14.25C10.25 14.6642 10.5858 15 11 15C11.4142 15 11.75 14.6642 11.75 14.25V11.75H14.25C14.6642 11.75 15 11.4142 15 11C15 10.5858 14.6642 10.25 14.25 10.25H11.75V7.75Z" fill="currentColor"/>',DV._name="zoom-in",DV._width=24,DV._height=24,DV._viewBox="0 0 24 24",DV=(0,s.Cc)([(0,C.Y$)("gds-icon-zoom-in")],DV);const KV=e=>{DV.define();const t=(0,n.p)("gds-icon-zoom-in"),r={...e,class:e.className};return(0,i.createElement)(t,r)};let UV=class extends R.M{};UV._regularSVG='<path d="M20 20L16.1265 16.1265M16.1265 16.1265C17.4385 14.8145 18.25 13.002 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C13.002 18.25 14.8145 17.4385 16.1265 16.1265ZM14.25 11L7.75 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',UV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C12.9388 19 14.7174 18.3096 16.1017 17.1624L19.4701 20.5307C19.763 20.8236 20.2379 20.8236 20.5307 20.5307C20.8236 20.2379 20.8236 19.763 20.5307 19.4701L17.1624 16.1017C18.3096 14.7174 19 12.9388 19 11C19 6.58172 15.4183 3 11 3ZM15 11C15 11.4142 14.6642 11.75 14.25 11.75H7.75C7.33579 11.75 7 11.4142 7 11C7 10.5858 7.33579 10.25 7.75 10.25L14.25 10.25C14.6642 10.25 15 10.5858 15 11Z" fill="currentColor"/>',UV._name="zoom-out",UV._width=24,UV._height=24,UV._viewBox="0 0 24 24",UV=(0,s.Cc)([(0,C.Y$)("gds-icon-zoom-out")],UV);const JV=e=>{UV.define();const t=(0,n.p)("gds-icon-zoom-out"),r={...e,class:e.className};return(0,i.createElement)(t,r)}},4324:(e,t,r)=>{function o(){return(e,t,r)=>{const o=e.connectedCallback,s=e.disconnectedCallback;e.connectedCallback=function(){o?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{r.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){s?.call(this),this.__resizeObservers[t].disconnect()}}}r.d(t,{b:()=>o}),r(6861)},5424:(e,t,r)=>{r.d(t,{i:()=>l});var o=r(6861),s=r(7526),n=r(3832);let l=class extends n.M{};l._regularSVG='<path d="M15 9.5L10.5 15L8.5 13M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',l._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.5805 9.97493C15.8428 9.65434 15.7955 9.18183 15.4749 8.91953C15.1543 8.65724 14.6818 8.70449 14.4195 9.02507L10.4443 13.8837L9.03033 12.4697C8.73744 12.1768 8.26256 12.1768 7.96967 12.4697C7.67678 12.7626 7.67678 13.2374 7.96967 13.5303L9.96967 15.5303C10.1195 15.6802 10.3257 15.7596 10.5374 15.7491C10.749 15.7385 10.9463 15.6389 11.0805 15.4749L15.5805 9.97493Z" fill="currentColor"/>',l._name="circle-check",l._width=24,l._height=24,l._viewBox="0 0 24 24",l=(0,o.Cc)([(0,s.Y$)("gds-icon-circle-check")],l)},6900:(e,t,r)=>{r.d(t,{d:()=>h});var o=r(6861),s=r(4367),n=r(505),l=r(8641),i=r(4457),a=r(7526),c=r(5073),C=r(1686),d=r(9443).AH`
  .gds-list-heading {
    padding: var(--gds-sys-space-xs) var(--gds-sys-space-m);
    background: var(--gds-sys-color-l3-neutral-02);
    border-radius: var(--gds-sys-radius-s);
  }

  ::slotted([gds-element='gds-list-item']) {
    padding: var(--gds-sys-space-xs) var(--gds-sys-space-m);
    border-bottom-color: var(--gds-sys-color-border-subtle-02);
    border-bottom-width: var(--gds-sys-space-5xs);
    border-bottom-style: solid;
    display: flex;
    justify-content: space-between;
    gap: var(--gds-sys-space-3xs);
  }
`;let h=class extends l.j{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),i.n.instance.apply(this,"gds-grouped-list")}render(){return a.qy`${(0,n.z)(this.label,()=>a.qy`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};h.styles=[c.LU,d],(0,o.Cc)([(0,s.MZ)()],h.prototype,"label",2),h=(0,o.Cc)([(0,a.Y$)("gds-grouped-list",{dependsOn:[C.s]})],h)},7247:(e,t,r)=>{r.d(t,{G:()=>M});var o=r(6861),s=r(9633),n=r(9443),l=r(4367),i=r(8641),a=r(7526),c=r(1959),C=r(7477),d=r(5073),h=r(4457),u=r(1374);let p=class extends i.j{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2023"}connectedCallback(){super.connectedCallback(),h.n.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",(0,n.iz)(`:host {${c.A}}`))}render(){return a.qy`<slot></slot>`}_onColorSchemeChange(){switch(this.colorScheme){case"dark":this._dynamicStylesController.inject("color-scheme",(0,n.iz)(`:host { ${c.A}}`));break;case"light":default:this._dynamicStylesController.inject("color-scheme",(0,n.iz)(`:host { ${C.A}}`));break;case"auto":this._dynamicStylesController.inject("color-scheme",(0,n.iz)(`:host { ${C.A}} @media (prefers-color-scheme: dark) { :host { ${c.A} } }`))}this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};p.styles=[d.LU,n.AH`
      :host {
        display: contents;
        color: var(--gds-sys-color-content-neutral-01);
        font-family: var(--gds-sys-text-family);
      }
    `],(0,o.Cc)([(0,l.MZ)({reflect:!0,attribute:"color-scheme"})],p.prototype,"colorScheme",2),(0,o.Cc)([(0,l.MZ)({reflect:!0,attribute:"design-version"})],p.prototype,"designVersion",2),(0,o.Cc)([(0,u.w)("colorScheme")],p.prototype,"_onColorSchemeChange",1),(0,o.Cc)([(0,u.w)("designVersion")],p.prototype,"_onDesignVersionChange",1),p=(0,o.Cc)([(0,a.Y$)("gds-theme")],p);var g=r(6506);const M=e=>{p.define();const t=(0,s.p)("gds-theme"),r={...e,class:e.className};return(0,g.createElement)(t,r)}},8157:(e,t,r)=>{r.d(t,{z:()=>l});var o=r(6861),s=r(7526),n=r(3832);let l=class extends n.M{};l._regularSVG='<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" fill="currentColor"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',l._solidSVG='<path d="M3.75 10.25C2.7835 10.25 2 11.0335 2 12C2 12.9665 2.7835 13.75 3.75 13.75C4.7165 13.75 5.5 12.9665 5.5 12C5.5 11.0335 4.7165 10.25 3.75 10.25Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M20.25 10.25C19.2835 10.25 18.5 11.0335 18.5 12C18.5 12.9665 19.2835 13.75 20.25 13.75C21.2165 13.75 22 12.9665 22 12C22 11.0335 21.2165 10.25 20.25 10.25Z" fill="currentColor"/>',l._name="dot-grid-one-horizontal",l._width=24,l._height=24,l._viewBox="0 0 24 24",l=(0,o.Cc)([(0,s.Y$)("gds-icon-dot-grid-one-horizontal")],l)},9633:(e,t,r)=>{r.d(t,{p:()=>s}),r(6861);var o=r(7526);function s(e){return(0,o.Eq)(e)}},9830:(e,t,r)=>{r.d(t,{A:()=>f});var o,s,n,l,i,a,c=r(6861),C=r(4367),d=r(3578),h=r(4324),u=r(1374),p=r(6472),g=r(7526),M=r(8558),m=r(1912),V=r(9443).AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
      max-width: 100%;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .collapse {
      overflow: auto;
      scroll-snap-type: both mandatory;
      overscroll-behavior-x: contain;
      flex-wrap: nowrap;
      padding-bottom: 0.5rem;
      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
      scrollbar-width: thin;
    }

    ::slotted(*) {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
`;let f=class extends M.S{constructor(){super(...arguments),(0,c.VK)(this,l),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,(0,c.VK)(this,o,e=>{const t=this.chips.find(t=>t===e.target||t.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(e=>e!==t.value):this.value=[...this.value,t.value]:this.value=t.value===this.value?void 0:t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),(0,c.VK)(this,s,3),(0,c.VK)(this,n,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return g.qy`<div
      class="chips ${(0,d.H)(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${(0,c.S7)(this,o)}
        @slotchange=${(0,c.jq)(this,l,a)}
        role="none"
      ></slot>
    </div>`}focus(e){this.chips[0]?.focus(e)}_getValidityAnchor(){return this.shadowRoot?.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=(0,c.jq)(this,l,i).call(this),t=this.offsetHeight,r=this.offsetWidth;t>=e*(0,c.S7)(this,s)&&(this._collapsed=!0,(0,c.OV)(this,n,r)),r>(0,c.S7)(this,n)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})})}};o=new WeakMap,s=new WeakMap,n=new WeakMap,l=new WeakSet,i=function(){return this.chips[0]?.offsetHeight||0},a=function(){if(void 0===this.value)if(this.multiple){const e=this.chips.filter(e=>e.selected).map(e=>e.value);e.length&&(this.value=e)}else{const e=this.chips.find(e=>e.selected)?.value;e&&(this.value=e)}else this._updateSelectedFromValue()},f.styles=[V],(0,c.Cc)([(0,C.MZ)({converter:p.xj})],f.prototype,"value",1),(0,c.Cc)([(0,C.MZ)({type:Boolean})],f.prototype,"multiple",2),(0,c.Cc)([(0,C.MZ)()],f.prototype,"label",2),(0,c.Cc)([(0,C.MZ)({type:Boolean,attribute:"row-collapse"})],f.prototype,"rowCollapse",2),(0,c.Cc)([(0,C.wk)()],f.prototype,"_collapsed",2),(0,c.Cc)([(0,C.P)("slot")],f.prototype,"_elSlot",2),(0,c.Cc)([(0,h.b)()],f.prototype,"_handleResize",1),(0,c.Cc)([(0,u.w)("value")],f.prototype,"_updateSelectedFromValue",1),f=(0,c.Cc)([(0,g.Y$)("gds-filter-chips",{dependsOn:[m.x]})],f)}}]);
//# sourceMappingURL=4309.fd9e6e20.iframe.bundle.js.map