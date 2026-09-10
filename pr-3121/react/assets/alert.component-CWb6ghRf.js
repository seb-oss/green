import{i as P,w as V,b as l,c as i,d as e,e as a,A as p,h as m,G as j,a as C,t as U,_ as o,n as d,r as A,g as Y}from"./declarative-layout-mixins-qhlmn3Eh.js";import{m as M,l as H}from"./runtime-Cgryh99k.js";import{e as E}from"./class-map-CWftihNH.js";import{n as K,e as q}from"./ref-Diqe9DeX.js";import{s as I,u as J,G as Q}from"./button.component-CQcepbFA.js";import{a as X}from"./watch-rsnQmdjn.js";import{G as Z}from"./card.component-BKgIAeaZ.js";import{I as tt}from"./circle-check.component-CABcLmbu.js";import{I as st}from"./chevron-bottom.component-sZw8SXiD.js";import{I as et}from"./cross-small.component-CLPBvSQK.js";import{I as it}from"./triangle-exclamation.component-C0N8A3rw.js";const rt=P`
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
`;var ot=rt,v,u,w,c,n,f,x,t,k,b,G,S,T,g,_,R,$,B,D,h,W,L,O,z,N,F;const at={positive:{icon:"circle-check",button:"positive",border:"positive-01",background:"positive-01",color:"positive-01"},warning:{icon:"circle-info",button:"warning",border:"warning-01",background:"warning-01",color:"warning-01"},negative:{icon:"triangle-exclamation",button:"negative",border:"negative-01",background:"negative-01",color:"negative-01"},information:{icon:"circle-info",button:"neutral",border:"information-01",background:"information-01",color:"information-01"},notice:{icon:"circle-info",button:"notice",border:"notice-01",background:"notice-01",color:"notice-01"}},nt=300,lt=100;let r=class extends V(j){constructor(){super(),l(this,t),this.variant="information",this.label="",this.role="alert",this.closed=!1,this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,l(this,v),l(this,u),l(this,w,q()),l(this,c),l(this,n,0),l(this,f,0),l(this,x,{hostConnected:()=>{!this.closed&&this.timeout>0&&e(this,t,k).call(this)},hostDisconnected:()=>{e(this,t,b).call(this),e(this,t,g).call(this)}}),this.addController(i(this,x))}connectedCallback(){super.connectedCallback(),e(this,t,$).call(this)}updated(s){this.hasAttribute("role")&&e(this,t,$).call(this),s.has("closed")&&this.closed&&(e(this,t,b).call(this),e(this,t,g).call(this)),(s.has("timeout")||s.has("closed")&&!this.closed)&&(e(this,t,b).call(this),e(this,t,g).call(this),a(this,n,Math.max(0,this.timeout)),this._progress=100,!this.closed&&this.timeout>0&&e(this,t,k).call(this))}render(){const s={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return m`
      <div
        id="alert-region"
        role=${i(this,t,W)}
        aria-label=${!this.closed||this._isClosing?this.label||p:p}
      >
        ${!this.closed||this._isClosing?m`
              <gds-card
                ${K(i(this,w))}
                border=${`5xs solid ${i(this,t,h).border}`}
                background=${i(this,t,h).background}
                color=${i(this,t,h).color}
                class=${E(s)}
                @keydown=${e(this,t,D)}
                id="alert-message"
                padding="m"
              >
                <div class="wrapper">
                  ${e(this,t,L).call(this)} ${e(this,t,O).call(this)}
                </div>
                ${!this.timeout&&this.buttonLabel?e(this,t,z).call(this,this.buttonLabel):p}
                ${e(this,t,N).call(this)} ${e(this,t,F).call(this)}
              </gds-card>
            `:p}
      </div>
    `}};v=new WeakMap;u=new WeakMap;w=new WeakMap;c=new WeakMap;n=new WeakMap;f=new WeakMap;x=new WeakMap;t=new WeakSet;k=function(){i(this,c)||(i(this,n)||a(this,n,Math.max(0,this.timeout)),a(this,c,new IntersectionObserver(s=>{(s[0]?.intersectionRatio??0)>=.1?e(this,t,S).call(this):e(this,t,T).call(this)},{root:null,threshold:[0,.1,1]})),i(this,c).observe(this))};b=function(){i(this,c)&&(i(this,c).disconnect(),a(this,c,void 0))};G=function(){a(this,f,Date.now()),a(this,u,window.setInterval(()=>{const s=Date.now(),y=s-i(this,f);a(this,f,s),a(this,n,Math.max(0,i(this,n)-y)),this._progress=this.timeout>0?Math.max(0,i(this,n)/this.timeout*100):0,i(this,n)<=0&&e(this,t,_).call(this,"timeout")},lt))};S=function(){i(this,n)<=0||i(this,v)||i(this,u)||e(this,t,G).call(this)};T=function(){e(this,t,g).call(this)};g=function(){clearTimeout(i(this,v)),clearInterval(i(this,u)),a(this,v,a(this,u,void 0))};_=async function(s){this.closed||this._isClosing||(this._isClosing=!0,this.closed=!0,e(this,t,R).call(this,s),e(this,t,b).call(this),e(this,t,g).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:s},bubbles:!0,composed:!0}),await new Promise(y=>setTimeout(y,nt)),this._isClosing=!1)};R=function(s){this.dispatchCustomEvent("gds-ui-state",{detail:{closed:this.closed,open:!this.closed,reason:s},bubbles:!1,composed:!1})};$=function(){const s=this.getAttribute("role");(s==="alert"||s==="status")&&(this.removeAttribute("role"),this.role=s)};B=function(s){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:s},bubbles:!0,composed:!0})};D=function(s){s.key==="Escape"&&this.dismissible&&(s.preventDefault(),e(this,t,_).call(this,"escape"))};h=function(){return at[this.variant]};W=function(){return this.alertRole??this.role??"alert"};L=function(){const s=`gds-icon-${i(this,t,h).icon}`;return m`${J`<${I(C(s))} class="icon" solid aria-hidden="true" size="24px"></${I(C(s))}>`}`};O=function(){return m`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};z=function(s){return m`
      <gds-button
        class="action"
        .variant=${i(this,t,h).button}
        rank="secondary"
        @click=${e(this,t,B)}
        aria-describedby="alert-message"
      >
        ${s.trim()}
      </gds-button>
    `};N=function(){return this.dismissible?m`
          <gds-button
            class="close"
            .variant=${i(this,t,h).button}
            rank="secondary"
            size="small"
            aria-label=${M("Dismiss alert")}
            @click=${()=>e(this,t,_).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:p};F=function(){return this.timeout>0?m`
          <div
            class=${E({"progress-container":!0,[this.variant]:!0})}
            role="timer"
            aria-label=${M("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:p};r.styles=[U,ot];r.styleExpressionBaseSelector="#alert-message";o([d({type:String,reflect:!0})],r.prototype,"variant",2);o([d({type:String})],r.prototype,"label",2);o([d({attribute:"alert-role"})],r.prototype,"alertRole",2);o([d({type:String})],r.prototype,"role",2);o([d({type:Boolean,reflect:!0})],r.prototype,"closed",2);o([d({type:Boolean})],r.prototype,"dismissible",2);o([d({type:Number})],r.prototype,"timeout",2);o([d({type:String,attribute:"button-label"})],r.prototype,"buttonLabel",2);o([A()],r.prototype,"_progress",2);o([A()],r.prototype,"_isClosing",2);r=o([Y("gds-alert",{dependsOn:[Q,Z,tt,it,st,et]}),X({labelledBy:"#alert-region",describedBy:"#alert-region"}),H()],r);export{r as G};
