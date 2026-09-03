import{i as at,w as ot,b as s,c as i,d as e,e as o,A as g,h as p,G as nt,a as F,t as lt,_ as a,n as d,r as U,g as ct}from"./declarative-layout-mixins-RRaBVSCZ.js";import{m as j,l as dt}from"./runtime-Cgryh99k.js";import{e as K}from"./class-map-Dw-lskpk.js";import{n as ht,e as mt}from"./ref-CVopERTs.js";import{s as V,u as pt,G as gt}from"./button.component-D88qyTuS.js";import{a as ut}from"./watch-rsnQmdjn.js";import{G as ft}from"./card.component-BN5UcPN4.js";import{I as bt}from"./circle-check.component-yCxTwzhq.js";import{I as vt}from"./chevron-bottom.component-24Qu__em.js";import{I as _t}from"./cross-small.component-BlXpaMRd.js";import{I as wt}from"./triangle-exclamation.component-C715bgSQ.js";const yt=at`
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
`;var kt=yt,w,b,C,c,n,v,W,x,I,u,_,O,Y,L,H,z,q,h,f,y,S,N,J,$,A,P,Q,M,X,l,m,T,Z,B,tt,E,et,R,st,D,it,G,rt;const xt={positive:{icon:"circle-check",button:"positive",border:"positive-01",background:"positive-01",color:"positive-01"},warning:{icon:"circle-info",button:"warning",border:"warning-01",background:"warning-01",color:"warning-01"},negative:{icon:"triangle-exclamation",button:"negative",border:"negative-01",background:"negative-01",color:"negative-01"},information:{icon:"circle-info",button:"neutral",border:"information-01",background:"information-01",color:"information-01"},notice:{icon:"circle-info",button:"notice",border:"notice-01",background:"notice-01",color:"notice-01"}},$t=300,St=100;let r=class extends ot(nt){constructor(){super(),s(this,x),s(this,u),s(this,O),s(this,L),s(this,z),s(this,h),s(this,y),s(this,N),s(this,$),s(this,P),s(this,M),s(this,l),s(this,T),s(this,B),s(this,E),s(this,R),s(this,D),s(this,G),this.variant="information",this.label="",this.role="alert",this.closed=!1,this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,s(this,w,void 0),s(this,b,void 0),s(this,C,mt()),s(this,c,void 0),s(this,n,0),s(this,v,0),s(this,W,{hostConnected:()=>{!this.closed&&this.timeout>0&&e(this,x,I).call(this)},hostDisconnected:()=>{e(this,u,_).call(this),e(this,h,f).call(this)}}),this.addController(i(this,W))}connectedCallback(){super.connectedCallback(),e(this,$,A).call(this)}updated(t){this.hasAttribute("role")&&e(this,$,A).call(this),t.has("closed")&&this.closed&&(e(this,u,_).call(this),e(this,h,f).call(this)),(t.has("timeout")||t.has("closed")&&!this.closed)&&(e(this,u,_).call(this),e(this,h,f).call(this),o(this,n,Math.max(0,this.timeout)),this._progress=100,!this.closed&&this.timeout>0&&e(this,x,I).call(this))}render(){const t={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return p`
      <div
        id="alert-region"
        role=${i(this,T,Z)}
        aria-label=${!this.closed||this._isClosing?this.label||g:g}
      >
        ${!this.closed||this._isClosing?p`
              <gds-card
                ${ht(i(this,C))}
                border=${`5xs solid ${i(this,l,m).border}`}
                background=${i(this,l,m).background}
                color=${i(this,l,m).color}
                class=${K(t)}
                @keydown=${e(this,M,X)}
                id="alert-message"
                padding="m"
              >
                <div class="wrapper">
                  ${e(this,B,tt).call(this)} ${e(this,E,et).call(this)}
                </div>
                ${!this.timeout&&this.buttonLabel?e(this,R,st).call(this,this.buttonLabel):g}
                ${e(this,D,it).call(this)} ${e(this,G,rt).call(this)}
              </gds-card>
            `:g}
      </div>
    `}};w=new WeakMap;b=new WeakMap;C=new WeakMap;c=new WeakMap;n=new WeakMap;v=new WeakMap;W=new WeakMap;x=new WeakSet;I=function(){i(this,c)||(i(this,n)||o(this,n,Math.max(0,this.timeout)),o(this,c,new IntersectionObserver(t=>{(t[0]?.intersectionRatio??0)>=.1?e(this,L,H).call(this):e(this,z,q).call(this)},{root:null,threshold:[0,.1,1]})),i(this,c).observe(this))};u=new WeakSet;_=function(){i(this,c)&&(i(this,c).disconnect(),o(this,c,void 0))};O=new WeakSet;Y=function(){o(this,v,Date.now()),o(this,b,window.setInterval(()=>{const t=Date.now(),k=t-i(this,v);o(this,v,t),o(this,n,Math.max(0,i(this,n)-k)),this._progress=this.timeout>0?Math.max(0,i(this,n)/this.timeout*100):0,i(this,n)<=0&&e(this,y,S).call(this,"timeout")},St))};L=new WeakSet;H=function(){i(this,n)<=0||i(this,w)||i(this,b)||e(this,O,Y).call(this)};z=new WeakSet;q=function(){e(this,h,f).call(this)};h=new WeakSet;f=function(){clearTimeout(i(this,w)),clearInterval(i(this,b)),o(this,w,o(this,b,void 0))};y=new WeakSet;S=async function(t){this.closed||this._isClosing||(this._isClosing=!0,this.closed=!0,e(this,N,J).call(this,t),e(this,u,_).call(this),e(this,h,f).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:t},bubbles:!0,composed:!0}),await new Promise(k=>setTimeout(k,$t)),this._isClosing=!1)};N=new WeakSet;J=function(t){this.dispatchCustomEvent("gds-ui-state",{detail:{closed:this.closed,open:!this.closed,reason:t},bubbles:!1,composed:!1})};$=new WeakSet;A=function(){const t=this.getAttribute("role");(t==="alert"||t==="status")&&(this.removeAttribute("role"),this.role=t)};P=new WeakSet;Q=function(t){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:t},bubbles:!0,composed:!0})};M=new WeakSet;X=function(t){t.key==="Escape"&&this.dismissible&&(t.preventDefault(),e(this,y,S).call(this,"escape"))};l=new WeakSet;m=function(){return xt[this.variant]};T=new WeakSet;Z=function(){return this.alertRole??this.role??"alert"};B=new WeakSet;tt=function(){const t=`gds-icon-${i(this,l,m).icon}`;return p`${pt`<${V(F(t))} class="icon" solid aria-hidden="true" size="24px"></${V(F(t))}>`}`};E=new WeakSet;et=function(){return p`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};R=new WeakSet;st=function(t){return p`
      <gds-button
        class="action"
        .variant=${i(this,l,m).button}
        rank="secondary"
        @click=${e(this,P,Q)}
        aria-describedby="alert-message"
      >
        ${t.trim()}
      </gds-button>
    `};D=new WeakSet;it=function(){return this.dismissible?p`
          <gds-button
            class="close"
            .variant=${i(this,l,m).button}
            rank="secondary"
            size="small"
            aria-label=${j("Dismiss alert")}
            @click=${()=>e(this,y,S).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:g};G=new WeakSet;rt=function(){return this.timeout>0?p`
          <div
            class=${K({"progress-container":!0,[this.variant]:!0})}
            role="timer"
            aria-label=${j("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:g};r.styles=[lt,kt];r.styleExpressionBaseSelector="#alert-message";a([d({type:String,reflect:!0})],r.prototype,"variant",2);a([d({type:String})],r.prototype,"label",2);a([d({attribute:"alert-role"})],r.prototype,"alertRole",2);a([d({type:String})],r.prototype,"role",2);a([d({type:Boolean,reflect:!0})],r.prototype,"closed",2);a([d({type:Boolean})],r.prototype,"dismissible",2);a([d({type:Number})],r.prototype,"timeout",2);a([d({type:String,attribute:"button-label"})],r.prototype,"buttonLabel",2);a([U()],r.prototype,"_progress",2);a([U()],r.prototype,"_isClosing",2);r=a([ct("gds-alert",{dependsOn:[gt,ft,bt,wt,vt,_t]}),ut({labelledBy:"#alert-region",describedBy:"#alert-region"}),dt()],r);export{r as G};
