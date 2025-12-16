import{i as H,t as V,_ as n,n as p,r as k,g as F,G as P,b as l,c as t,d as i,e as a,E as b,h as g,a as M}from"./tokens.style-CHPgHy6M.js";import{l as j,m as A}from"./runtime-nRyYmvPb.js";import{e as G}from"./class-map-BcqLdOcD.js";import{e as Y,n as K}from"./unwrap-slots-f09DNN1U.js";import{G as U,s as T,u as q}from"./button.component-BvazLcWR.js";import{b as J}from"./dropdown.component-DRkDizcS.js";import{I as Q}from"./circle-check.component-CeuizPZ3.js";import{I as X}from"./chevron-bottom.component-iS7rj8B4.js";import{I as Z}from"./cross-small.component-DnDv8bGP.js";import{I as ss}from"./triangle-exclamation.component-BdWVh20Z.js";const ts=H`
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
`;var es=ts,f,m,w,c,h,o,u,x,s,$,_,E,S,W,v,y,D,L,I,O,R,z,B,N;const is={positive:{icon:"circle-check",card:"positive"},warning:{icon:"circle-info",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}},as=300,rs=100;let r=class extends P{constructor(){super(),l(this,s),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,l(this,f),l(this,m),l(this,w,Y()),l(this,c),l(this,h,!1),l(this,o,0),l(this,u,0),l(this,x,{hostConnected:()=>{this.timeout>0&&t(this,s,$).call(this)},hostDisconnected:()=>{t(this,s,_).call(this),t(this,s,v).call(this)}}),this.addController(i(this,x))}updated(e){e.has("timeout")&&(t(this,s,_).call(this),t(this,s,v).call(this),a(this,o,Math.max(0,this.timeout)),this._progress=100,this.timeout>0&&t(this,s,$).call(this))}render(){if(this._cardHidden)return b;const e={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return g`
      <gds-card
        ${K(i(this,w))}
        role=${this.role}
        aria-label=${this.label}
        variant=${i(this,s,I).card}
        class=${G(e)}
        @keydown=${t(this,s,L)}
        id="alert-message"
        padding="m"
      >
        <div class="wrapper">
          ${t(this,s,O).call(this)} ${t(this,s,R).call(this)}
        </div>
        ${!this.timeout&&this.buttonLabel?t(this,s,z).call(this,this.buttonLabel):b}
        ${t(this,s,B).call(this)} ${t(this,s,N).call(this)}
      </gds-card>
    `}};f=new WeakMap;m=new WeakMap;w=new WeakMap;c=new WeakMap;h=new WeakMap;o=new WeakMap;u=new WeakMap;x=new WeakMap;s=new WeakSet;$=function(){i(this,c)||(i(this,o)||a(this,o,Math.max(0,this.timeout)),a(this,c,new IntersectionObserver(e=>{const d=e[0],C=((d==null?void 0:d.intersectionRatio)??0)>=.1;C&&!i(this,h)?(a(this,h,!0),t(this,s,S).call(this)):!C&&i(this,h)&&(a(this,h,!1),t(this,s,W).call(this))},{root:null,threshold:[0,.1,1]})),i(this,c).observe(this))};_=function(){i(this,c)&&(i(this,c).disconnect(),a(this,c,void 0)),a(this,h,!1)};E=function(){a(this,u,Date.now()),a(this,m,window.setInterval(()=>{const e=Date.now(),d=e-i(this,u);a(this,u,e),a(this,o,Math.max(0,i(this,o)-d)),this._progress=this.timeout>0?Math.max(0,i(this,o)/this.timeout*100):0,i(this,o)<=0&&t(this,s,y).call(this,"timeout")},rs))};S=function(){i(this,o)<=0||i(this,f)||i(this,m)||t(this,s,E).call(this)};W=function(){t(this,s,v).call(this)};v=function(){clearTimeout(i(this,f)),clearInterval(i(this,m)),a(this,f,a(this,m,void 0))};y=async function(e){this._isClosing=!0,t(this,s,_).call(this),t(this,s,v).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:e},bubbles:!0,composed:!0}),await new Promise(d=>setTimeout(d,as)),this._cardHidden=!0};D=function(e){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:e},bubbles:!0,composed:!0})};L=function(e){e.key==="Escape"&&this.dismissible&&(e.preventDefault(),t(this,s,y).call(this,"escape"))};I=function(){return is[this.variant]};O=function(){const e=`gds-icon-${i(this,s,I).icon}`;return g`${q`<${T(M(e))} class="icon" solid aria-hidden="true" size="24px"></${T(M(e))}>`}`};R=function(){return g`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};z=function(e){return g`
      <gds-button
        class="action"
        .variant=${this.variant}
        rank="secondary"
        @click=${t(this,s,D)}
        aria-describedby="alert-message"
      >
        ${e.trim()}
      </gds-button>
    `};B=function(){return this.dismissible?g`
          <gds-button
            class="close"
            .variant=${this.variant}
            rank="secondary"
            size="small"
            aria-label=${A("Dismiss alert")}
            @click=${()=>t(this,s,y).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:b};N=function(){return this.timeout>0?g`
          <div
            class=${G({"progress-container":!0,[this.variant]:!0})}
            role="timer"
            aria-label=${A("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:b};r.styles=[V,es];n([p({type:String,reflect:!0})],r.prototype,"variant",2);n([p({type:String})],r.prototype,"label",2);n([p({type:String,reflect:!0})],r.prototype,"role",2);n([p({type:Boolean})],r.prototype,"dismissible",2);n([p({type:Number})],r.prototype,"timeout",2);n([p({type:String,attribute:"button-label"})],r.prototype,"buttonLabel",2);n([k()],r.prototype,"_progress",2);n([k()],r.prototype,"_isClosing",2);n([k()],r.prototype,"_cardHidden",2);r=n([F("gds-alert",{dependsOn:[U,J,Q,ss,X,Z]}),j()],r);export{r as G};
