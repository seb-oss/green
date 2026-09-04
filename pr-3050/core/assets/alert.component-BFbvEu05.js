import{i as q,C as Q,D as X,A as v,e as B,h as u,B as Z,n as p,E as O,a as j,F as tt,H as T,g as D,I as st,J as R,K as et}from"./iframe-cJ-G3WTm.js";import{l as it}from"./localized-decorator-BP913zUc.js";import{n as rt,e as at}from"./ref-BqOfXwAt.js";import{G as ot}from"./card.component-hM90oKNY.js";import{I as nt}from"./circle-check.component-D8tjDPp0.js";import{I as lt}from"./circle-info.component-g33zb0pX.js";import{I as ct}from"./cross-small.component-YzoDTAAL.js";import{I as dt}from"./triangle-exclamation.component-BFS1g8Wy.js";const ht=q`
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
`;var pt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,G=t=>{throw TypeError(t)},n=(t,i,a,f)=>{for(var g=f>1?void 0:f?gt(i,a):i,C=t.length-1,$;C>=0;C--)($=t[C])&&(g=(f?$(i,a,g):$(g))||g);return f&&g&&pt(i,a,g),g},S=(t,i,a)=>i.has(t)||G("Cannot "+a),r=(t,i,a)=>(S(t,i,"read from private field"),a?a.call(t):i.get(t)),d=(t,i,a)=>i.has(t)?G("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,a),l=(t,i,a,f)=>(S(t,i,"write to private field"),i.set(t,a),a),e=(t,i,a)=>(S(t,i,"access private method"),a),x,_,I,h,c,y,A,s,E,w,W,P,L,b,k,z,M,N,F,m,V,H,K,U,Y,J;const mt={positive:{icon:"circle-check",button:"positive",border:"positive-01",background:"positive-01",color:"positive-01"},warning:{icon:"circle-info",button:"warning",border:"warning-01",background:"warning-01",color:"warning-01"},negative:{icon:"triangle-exclamation",button:"negative",border:"negative-01",background:"negative-01",color:"negative-01"},information:{icon:"circle-info",button:"neutral",border:"information-01",background:"information-01",color:"information-01"},notice:{icon:"circle-info",button:"notice",border:"notice-01",background:"notice-01",color:"notice-01"}},ut=300,ft=100;let o=class extends Q(X){constructor(){super(),d(this,s),this.variant="information",this.label="",this.role="alert",this.closed=!1,this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,d(this,x),d(this,_),d(this,I,at()),d(this,h),d(this,c,0),d(this,y,0),d(this,A,{hostConnected:()=>{!this.closed&&this.timeout>0&&e(this,s,E).call(this)},hostDisconnected:()=>{e(this,s,w).call(this),e(this,s,b).call(this)}}),this.addController(r(this,A))}connectedCallback(){super.connectedCallback(),e(this,s,M).call(this)}updated(t){this.hasAttribute("role")&&e(this,s,M).call(this),t.has("closed")&&this.closed&&(e(this,s,w).call(this),e(this,s,b).call(this)),(t.has("timeout")||t.has("closed")&&!this.closed)&&(e(this,s,w).call(this),e(this,s,b).call(this),l(this,c,Math.max(0,this.timeout)),this._progress=100,!this.closed&&this.timeout>0&&e(this,s,E).call(this))}render(){const t={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return u`
      <div
        id="alert-region"
        role=${r(this,s,V)}
        aria-label=${!this.closed||this._isClosing?this.label||v:v}
      >
        ${!this.closed||this._isClosing?u`
              <gds-card
                ${rt(r(this,I))}
                border=${`5xs solid ${r(this,s,m).border}`}
                background=${r(this,s,m).background}
                color=${r(this,s,m).color}
                class=${B(t)}
                @keydown=${e(this,s,F)}
                id="alert-message"
                padding="m"
              >
                <div class="wrapper">
                  ${e(this,s,H).call(this)} ${e(this,s,K).call(this)}
                </div>
                ${!this.timeout&&this.buttonLabel?e(this,s,U).call(this,this.buttonLabel):v}
                ${e(this,s,Y).call(this)} ${e(this,s,J).call(this)}
              </gds-card>
            `:v}
      </div>
    `}};x=new WeakMap;_=new WeakMap;I=new WeakMap;h=new WeakMap;c=new WeakMap;y=new WeakMap;A=new WeakMap;s=new WeakSet;E=function(){r(this,h)||(r(this,c)||l(this,c,Math.max(0,this.timeout)),l(this,h,new IntersectionObserver(t=>{(t[0]?.intersectionRatio??0)>=.1?e(this,s,P).call(this):e(this,s,L).call(this)},{root:null,threshold:[0,.1,1]})),r(this,h).observe(this))};w=function(){r(this,h)&&(r(this,h).disconnect(),l(this,h,void 0))};W=function(){l(this,y,Date.now()),l(this,_,window.setInterval(()=>{const t=Date.now(),i=t-r(this,y);l(this,y,t),l(this,c,Math.max(0,r(this,c)-i)),this._progress=this.timeout>0?Math.max(0,r(this,c)/this.timeout*100):0,r(this,c)<=0&&e(this,s,k).call(this,"timeout")},ft))};P=function(){r(this,c)<=0||r(this,x)||r(this,_)||e(this,s,W).call(this)};L=function(){e(this,s,b).call(this)};b=function(){clearTimeout(r(this,x)),clearInterval(r(this,_)),l(this,x,l(this,_,void 0))};k=async function(t){this.closed||this._isClosing||(this._isClosing=!0,this.closed=!0,e(this,s,z).call(this,t),e(this,s,w).call(this),e(this,s,b).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:t},bubbles:!0,composed:!0}),await new Promise(i=>setTimeout(i,ut)),this._isClosing=!1)};z=function(t){this.dispatchCustomEvent("gds-ui-state",{detail:{closed:this.closed,open:!this.closed,reason:t},bubbles:!1,composed:!1})};M=function(){const t=this.getAttribute("role");(t==="alert"||t==="status")&&(this.removeAttribute("role"),this.role=t)};N=function(t){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:t},bubbles:!0,composed:!0})};F=function(t){t.key==="Escape"&&this.dismissible&&(t.preventDefault(),e(this,s,k).call(this,"escape"))};m=function(){return mt[this.variant]};V=function(){return this.alertRole??this.role??"alert"};H=function(){const t=`gds-icon-${r(this,s,m).icon}`;return u`${st`<${T(D(t))} class="icon" solid aria-hidden="true" size="24px"></${T(D(t))}>`}`};K=function(){return u`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};U=function(t){return u`
      <gds-button
        class="action"
        .variant=${r(this,s,m).button}
        rank="secondary"
        @click=${e(this,s,N)}
        aria-describedby="alert-message"
      >
        ${t.trim()}
      </gds-button>
    `};Y=function(){return this.dismissible?u`
          <gds-button
            class="close"
            .variant=${r(this,s,m).button}
            rank="secondary"
            size="small"
            aria-label=${R("Dismiss alert")}
            @click=${()=>e(this,s,k).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:v};J=function(){return this.timeout>0?u`
          <div
            class=${B({"progress-container":!0,[this.variant]:!0})}
            role="timer"
            aria-label=${R("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:v};o.styles=[Z,ht];o.styleExpressionBaseSelector="#alert-message";n([p({type:String,reflect:!0})],o.prototype,"variant",2);n([p({type:String})],o.prototype,"label",2);n([p({attribute:"alert-role"})],o.prototype,"alertRole",2);n([p({type:String})],o.prototype,"role",2);n([p({type:Boolean,reflect:!0})],o.prototype,"closed",2);n([p({type:Boolean})],o.prototype,"dismissible",2);n([p({type:Number})],o.prototype,"timeout",2);n([p({type:String,attribute:"button-label"})],o.prototype,"buttonLabel",2);n([O()],o.prototype,"_progress",2);n([O()],o.prototype,"_isClosing",2);o=n([j("gds-alert",{dependsOn:[et,ot,nt,dt,lt,ct]}),tt({labelledBy:"#alert-region",describedBy:"#alert-region"}),it()],o);export{o as G};
