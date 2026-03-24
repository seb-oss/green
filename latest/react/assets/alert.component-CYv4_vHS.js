import{i as ts,G as es,b as s,c as t,d as i,e as a,E as y,h as p,a as H,t as is,_ as n,n as g,r as G,g as as}from"./tokens.style-DdV6ipms.js";import{m as V,l as rs}from"./runtime-nRyYmvPb.js";import{e as F}from"./class-map-DX7GvrIr.js";import{e as os,n as ns}from"./unwrap-slots-Bc9cWLw4.js";import{s as P,u as ls,G as cs}from"./button.component-dABcb4XE.js";import{b as ds}from"./dropdown.component-CKQoTkn1.js";import{I as hs}from"./circle-check.component-DcXnXR7x.js";import{I as ms}from"./chevron-bottom.component-BKb7a6HV.js";import{I as ps}from"./cross-small.component-FmgQJDe9.js";import{I as gs}from"./triangle-exclamation.component-aE9kpZQ2.js";const us=ts`
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
`;var fs=us,v,m,S,l,d,o,u,I,w,W,f,k,D,j,O,K,L,Y,h,_,b,$,R,U,C,q,x,z,M,J,T,Q,A,X,B,Z,E,ss;const vs={positive:{icon:"circle-check",card:"positive"},warning:{icon:"circle-info",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}},_s=300,bs=100;let r=class extends es{constructor(){super(),s(this,w),s(this,f),s(this,D),s(this,O),s(this,L),s(this,h),s(this,b),s(this,R),s(this,C),s(this,x),s(this,M),s(this,T),s(this,A),s(this,B),s(this,E),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,s(this,v,void 0),s(this,m,void 0),s(this,S,os()),s(this,l,void 0),s(this,d,!1),s(this,o,0),s(this,u,0),s(this,I,{hostConnected:()=>{this.timeout>0&&t(this,w,W).call(this)},hostDisconnected:()=>{t(this,f,k).call(this),t(this,h,_).call(this)}}),this.addController(i(this,I))}updated(e){e.has("timeout")&&(t(this,f,k).call(this),t(this,h,_).call(this),a(this,o,Math.max(0,this.timeout)),this._progress=100,this.timeout>0&&t(this,w,W).call(this))}render(){if(this._cardHidden)return y;const e={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return p`
      <gds-card
        ${ns(i(this,S))}
        role=${this.role}
        aria-label=${this.label}
        variant=${i(this,x,z).card}
        class=${F(e)}
        @keydown=${t(this,C,q)}
        id="alert-message"
        padding="m"
      >
        <div class="wrapper">
          ${t(this,M,J).call(this)} ${t(this,T,Q).call(this)}
        </div>
        ${!this.timeout&&this.buttonLabel?t(this,A,X).call(this,this.buttonLabel):y}
        ${t(this,B,Z).call(this)} ${t(this,E,ss).call(this)}
      </gds-card>
    `}};v=new WeakMap;m=new WeakMap;S=new WeakMap;l=new WeakMap;d=new WeakMap;o=new WeakMap;u=new WeakMap;I=new WeakMap;w=new WeakSet;W=function(){i(this,l)||(i(this,o)||a(this,o,Math.max(0,this.timeout)),a(this,l,new IntersectionObserver(e=>{const c=e[0],N=((c==null?void 0:c.intersectionRatio)??0)>=.1;N&&!i(this,d)?(a(this,d,!0),t(this,O,K).call(this)):!N&&i(this,d)&&(a(this,d,!1),t(this,L,Y).call(this))},{root:null,threshold:[0,.1,1]})),i(this,l).observe(this))};f=new WeakSet;k=function(){i(this,l)&&(i(this,l).disconnect(),a(this,l,void 0)),a(this,d,!1)};D=new WeakSet;j=function(){a(this,u,Date.now()),a(this,m,window.setInterval(()=>{const e=Date.now(),c=e-i(this,u);a(this,u,e),a(this,o,Math.max(0,i(this,o)-c)),this._progress=this.timeout>0?Math.max(0,i(this,o)/this.timeout*100):0,i(this,o)<=0&&t(this,b,$).call(this,"timeout")},bs))};O=new WeakSet;K=function(){i(this,o)<=0||i(this,v)||i(this,m)||t(this,D,j).call(this)};L=new WeakSet;Y=function(){t(this,h,_).call(this)};h=new WeakSet;_=function(){clearTimeout(i(this,v)),clearInterval(i(this,m)),a(this,v,a(this,m,void 0))};b=new WeakSet;$=async function(e){this._isClosing=!0,t(this,f,k).call(this),t(this,h,_).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:e},bubbles:!0,composed:!0}),await new Promise(c=>setTimeout(c,_s)),this._cardHidden=!0};R=new WeakSet;U=function(e){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:e},bubbles:!0,composed:!0})};C=new WeakSet;q=function(e){e.key==="Escape"&&this.dismissible&&(e.preventDefault(),t(this,b,$).call(this,"escape"))};x=new WeakSet;z=function(){return vs[this.variant]};M=new WeakSet;J=function(){const e=`gds-icon-${i(this,x,z).icon}`;return p`${ls`<${P(H(e))} class="icon" solid aria-hidden="true" size="24px"></${P(H(e))}>`}`};T=new WeakSet;Q=function(){return p`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};A=new WeakSet;X=function(e){return p`
      <gds-button
        class="action"
        .variant=${this.variant}
        rank="secondary"
        @click=${t(this,R,U)}
        aria-describedby="alert-message"
      >
        ${e.trim()}
      </gds-button>
    `};B=new WeakSet;Z=function(){return this.dismissible?p`
          <gds-button
            class="close"
            .variant=${this.variant}
            rank="secondary"
            size="small"
            aria-label=${V("Dismiss alert")}
            @click=${()=>t(this,b,$).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:y};E=new WeakSet;ss=function(){return this.timeout>0?p`
          <div
            class=${F({"progress-container":!0,[this.variant]:!0})}
            role="timer"
            aria-label=${V("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:y};r.styles=[is,fs];n([g({type:String,reflect:!0})],r.prototype,"variant",2);n([g({type:String})],r.prototype,"label",2);n([g({type:String,reflect:!0})],r.prototype,"role",2);n([g({type:Boolean})],r.prototype,"dismissible",2);n([g({type:Number})],r.prototype,"timeout",2);n([g({type:String,attribute:"button-label"})],r.prototype,"buttonLabel",2);n([G()],r.prototype,"_progress",2);n([G()],r.prototype,"_isClosing",2);n([G()],r.prototype,"_cardHidden",2);r=n([as("gds-alert",{dependsOn:[cs,ds,hs,gs,ms,ps]}),rs()],r);export{r as G};
