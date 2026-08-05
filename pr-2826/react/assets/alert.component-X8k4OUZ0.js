import{i as et,t as st,_ as n,n as p,r as E,g as it,G as rt,b as e,c as s,d as t,e as r,A as x,h as u,a as H}from"./declarative-layout-mixins-DM3vtrCn.js";import{l as at,m as P}from"./runtime-Cgryh99k.js";import{e as V}from"./class-map-Bgqo_Jir.js";import{e as ot,n as nt}from"./ref-Cy-2qq4U.js";import{s as F,u as lt,G as ct}from"./button.component-C_RJ8bSl.js";import{a as dt}from"./watch-QkQzTQuG.js";import{G as ht}from"./card.component-D9k5p0XJ.js";import{I as mt}from"./circle-check.component-DmzKadHM.js";import{I as gt}from"./chevron-bottom.component-lKGd0pSm.js";import{I as pt}from"./cross-small.component-BfSzrzJ7.js";import{I as ut}from"./triangle-exclamation.component-Bl3LMz4G.js";const ft=et`
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
    font: var(--gds-sys-text-body-m-regular);
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
    --_fill-color: var(--gds-sys-color-border-neutral-04);
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
`;var bt=ft,v,g,I,c,d,o,f,W,k,C,b,$,O,j,L,K,R,Y,m,_,w,S,z,U,M,q,l,h,T,J,A,Q,B,X,G,Z,D,tt;const vt={positive:{icon:"circle-check",button:"positive",border:"positive-01",background:"positive-01",color:"positive-01"},warning:{icon:"circle-info",button:"warning",border:"warning-01",background:"warning-01",color:"warning-01"},negative:{icon:"triangle-exclamation",button:"negative",border:"negative-01",background:"negative-01",color:"negative-01"},information:{icon:"circle-info",button:"neutral",border:"information-01",background:"information-01",color:"information-01"},notice:{icon:"circle-info",button:"notice",border:"notice-01",background:"notice-01",color:"notice-01"}},_t=300,wt=100;let a=class extends rt{constructor(){super(),e(this,k),e(this,b),e(this,O),e(this,L),e(this,R),e(this,m),e(this,w),e(this,z),e(this,M),e(this,l),e(this,T),e(this,A),e(this,B),e(this,G),e(this,D),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,e(this,v,void 0),e(this,g,void 0),e(this,I,ot()),e(this,c,void 0),e(this,d,!1),e(this,o,0),e(this,f,0),e(this,W,{hostConnected:()=>{this.timeout>0&&s(this,k,C).call(this)},hostDisconnected:()=>{s(this,b,$).call(this),s(this,m,_).call(this)}}),this.addController(t(this,W))}updated(i){i.has("timeout")&&(s(this,b,$).call(this),s(this,m,_).call(this),r(this,o,Math.max(0,this.timeout)),this._progress=100,this.timeout>0&&s(this,k,C).call(this))}render(){if(this._cardHidden)return x;const i={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return u`
      <gds-card
        ${nt(t(this,I))}
        role=${this.role}
        aria-label=${this.label}
        border=${`5xs solid ${t(this,l,h).border}`}
        background=${t(this,l,h).background}
        color=${t(this,l,h).color}
        class=${V(i)}
        @keydown=${s(this,M,q)}
        id="alert-message"
        padding="m"
      >
        <div class="wrapper">
          ${s(this,T,J).call(this)} ${s(this,A,Q).call(this)}
        </div>
        ${!this.timeout&&this.buttonLabel?s(this,B,X).call(this,this.buttonLabel):x}
        ${s(this,G,Z).call(this)} ${s(this,D,tt).call(this)}
      </gds-card>
    `}};v=new WeakMap;g=new WeakMap;I=new WeakMap;c=new WeakMap;d=new WeakMap;o=new WeakMap;f=new WeakMap;W=new WeakMap;k=new WeakSet;C=function(){t(this,c)||(t(this,o)||r(this,o,Math.max(0,this.timeout)),r(this,c,new IntersectionObserver(i=>{const N=(i[0]?.intersectionRatio??0)>=.1;N&&!t(this,d)?(r(this,d,!0),s(this,L,K).call(this)):!N&&t(this,d)&&(r(this,d,!1),s(this,R,Y).call(this))},{root:null,threshold:[0,.1,1]})),t(this,c).observe(this))};b=new WeakSet;$=function(){t(this,c)&&(t(this,c).disconnect(),r(this,c,void 0)),r(this,d,!1)};O=new WeakSet;j=function(){r(this,f,Date.now()),r(this,g,window.setInterval(()=>{const i=Date.now(),y=i-t(this,f);r(this,f,i),r(this,o,Math.max(0,t(this,o)-y)),this._progress=this.timeout>0?Math.max(0,t(this,o)/this.timeout*100):0,t(this,o)<=0&&s(this,w,S).call(this,"timeout")},wt))};L=new WeakSet;K=function(){t(this,o)<=0||t(this,v)||t(this,g)||s(this,O,j).call(this)};R=new WeakSet;Y=function(){s(this,m,_).call(this)};m=new WeakSet;_=function(){clearTimeout(t(this,v)),clearInterval(t(this,g)),r(this,v,r(this,g,void 0))};w=new WeakSet;S=async function(i){this._isClosing=!0,s(this,b,$).call(this),s(this,m,_).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:i},bubbles:!0,composed:!0}),await new Promise(y=>setTimeout(y,_t)),this._cardHidden=!0};z=new WeakSet;U=function(i){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:i},bubbles:!0,composed:!0})};M=new WeakSet;q=function(i){i.key==="Escape"&&this.dismissible&&(i.preventDefault(),s(this,w,S).call(this,"escape"))};l=new WeakSet;h=function(){return vt[this.variant]};T=new WeakSet;J=function(){const i=`gds-icon-${t(this,l,h).icon}`;return u`${lt`<${F(H(i))} class="icon" solid aria-hidden="true" size="24px"></${F(H(i))}>`}`};A=new WeakSet;Q=function(){return u`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};B=new WeakSet;X=function(i){return u`
      <gds-button
        class="action"
        .variant=${t(this,l,h).button}
        rank="secondary"
        @click=${s(this,z,U)}
        aria-describedby="alert-message"
      >
        ${i.trim()}
      </gds-button>
    `};G=new WeakSet;Z=function(){return this.dismissible?u`
          <gds-button
            class="close"
            .variant=${t(this,l,h).button}
            rank="secondary"
            size="small"
            aria-label=${P("Dismiss alert")}
            @click=${()=>s(this,w,S).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:x};D=new WeakSet;tt=function(){return this.timeout>0?u`
          <div
            class=${V({"progress-container":!0,[this.variant]:!0})}
            role="timer"
            aria-label=${P("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:x};a.styles=[st,bt];n([p({type:String,reflect:!0})],a.prototype,"variant",2);n([p({type:String})],a.prototype,"label",2);n([p({type:String,reflect:!0})],a.prototype,"role",2);n([p({type:Boolean})],a.prototype,"dismissible",2);n([p({type:Number})],a.prototype,"timeout",2);n([p({type:String,attribute:"button-label"})],a.prototype,"buttonLabel",2);n([E()],a.prototype,"_progress",2);n([E()],a.prototype,"_isClosing",2);n([E()],a.prototype,"_cardHidden",2);a=n([it("gds-alert",{dependsOn:[ct,ht,mt,ut,gt,pt]}),dt({labelledBy:'[role="alert"]',describedBy:'[role="alert"]'}),at()],a);export{a as G};
