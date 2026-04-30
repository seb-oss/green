import{i as J,E as U,n as v,H as E,I as q,A as x,a as G,h as b,J as S,K as D,L as Q,N as W,g as X,O as Z}from"./iframe-CsT9moiw.js";import{l as j}from"./localized-decorator-CHDsyZqF.js";import{n as ss,e as ts}from"./ref-BG6XKrPf.js";import{G as es}from"./card.component-l6leA0Xm.js";import{I as is}from"./circle-check.component-CBJ4-Qqx.js";import{I as rs,a as as}from"./triangle-exclamation.component-CswFTZZr.js";import{I as os}from"./cross-small.component-CQJ2s4d-.js";const ns=J`
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
`;var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,L=s=>{throw TypeError(s)},c=(s,e,a,h)=>{for(var g=h>1?void 0:h?cs(e,a):e,C=s.length-1,I;C>=0;C--)(I=s[C])&&(g=(h?I(e,a,g):I(g))||g);return h&&g&&ls(e,a,g),g},O=(s,e,a)=>e.has(s)||L("Cannot "+a),i=(s,e,a)=>(O(s,e,"read from private field"),a?a.call(s):e.get(s)),d=(s,e,a)=>e.has(s)?L("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,a),o=(s,e,a,h)=>(O(s,e,"write to private field"),e.set(s,a),a),r=(s,e,a)=>(O(s,e,"access private method"),a),y,f,M,p,m,l,_,T,t,A,k,N,P,R,w,$,z,B,u,H,V,F,K,Y;const ds={positive:{icon:"circle-check",button:"positive",border:"positive-01",background:"positive-01",color:"positive-01"},warning:{icon:"circle-info",button:"warning",border:"warning-01",background:"warning-01",color:"warning-01"},negative:{icon:"triangle-exclamation",button:"negative",border:"negative-01",background:"negative-01",color:"negative-01"},information:{icon:"circle-info",button:"neutral",border:"information-01",background:"information-01",color:"information-01"},notice:{icon:"circle-info",button:"notice",border:"notice-01",background:"notice-01",color:"notice-01"}},hs=300,ps=100;let n=class extends q{constructor(){super(),d(this,t),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,d(this,y),d(this,f),d(this,M,ts()),d(this,p),d(this,m,!1),d(this,l,0),d(this,_,0),d(this,T,{hostConnected:()=>{this.timeout>0&&r(this,t,A).call(this)},hostDisconnected:()=>{r(this,t,k).call(this),r(this,t,w).call(this)}}),this.addController(i(this,T))}updated(s){s.has("timeout")&&(r(this,t,k).call(this),r(this,t,w).call(this),o(this,l,Math.max(0,this.timeout)),this._progress=100,this.timeout>0&&r(this,t,A).call(this))}render(){if(this._cardHidden)return x;const s={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return b`
      <gds-card
        ${ss(i(this,M))}
        role=${this.role}
        aria-label=${this.label}
        border=${`5xs solid ${i(this,t,u).border}`}
        background=${i(this,t,u).background}
        color=${i(this,t,u).color}
        class=${G(s)}
        @keydown=${r(this,t,B)}
        id="alert-message"
        padding="m"
      >
        <div class="wrapper">
          ${r(this,t,H).call(this)} ${r(this,t,V).call(this)}
        </div>
        ${!this.timeout&&this.buttonLabel?r(this,t,F).call(this,this.buttonLabel):x}
        ${r(this,t,K).call(this)} ${r(this,t,Y).call(this)}
      </gds-card>
    `}};y=new WeakMap;f=new WeakMap;M=new WeakMap;p=new WeakMap;m=new WeakMap;l=new WeakMap;_=new WeakMap;T=new WeakMap;t=new WeakSet;A=function(){i(this,p)||(i(this,l)||o(this,l,Math.max(0,this.timeout)),o(this,p,new IntersectionObserver(s=>{const e=s[0],h=((e==null?void 0:e.intersectionRatio)??0)>=.1;h&&!i(this,m)?(o(this,m,!0),r(this,t,P).call(this)):!h&&i(this,m)&&(o(this,m,!1),r(this,t,R).call(this))},{root:null,threshold:[0,.1,1]})),i(this,p).observe(this))};k=function(){i(this,p)&&(i(this,p).disconnect(),o(this,p,void 0)),o(this,m,!1)};N=function(){o(this,_,Date.now()),o(this,f,window.setInterval(()=>{const s=Date.now(),e=s-i(this,_);o(this,_,s),o(this,l,Math.max(0,i(this,l)-e)),this._progress=this.timeout>0?Math.max(0,i(this,l)/this.timeout*100):0,i(this,l)<=0&&r(this,t,$).call(this,"timeout")},ps))};P=function(){i(this,l)<=0||i(this,y)||i(this,f)||r(this,t,N).call(this)};R=function(){r(this,t,w).call(this)};w=function(){clearTimeout(i(this,y)),clearInterval(i(this,f)),o(this,y,o(this,f,void 0))};$=async function(s){this._isClosing=!0,r(this,t,k).call(this),r(this,t,w).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:s},bubbles:!0,composed:!0}),await new Promise(e=>setTimeout(e,hs)),this._cardHidden=!0};z=function(s){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:s},bubbles:!0,composed:!0})};B=function(s){s.key==="Escape"&&this.dismissible&&(s.preventDefault(),r(this,t,$).call(this,"escape"))};u=function(){return ds[this.variant]};H=function(){const s=`gds-icon-${i(this,t,u).icon}`;return b`${Q`<${S(D(s))} class="icon" solid aria-hidden="true" size="24px"></${S(D(s))}>`}`};V=function(){return b`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};F=function(s){return b`
      <gds-button
        class="action"
        .variant=${i(this,t,u).button}
        rank="secondary"
        @click=${r(this,t,z)}
        aria-describedby="alert-message"
      >
        ${s.trim()}
      </gds-button>
    `};K=function(){return this.dismissible?b`
          <gds-button
            class="close"
            .variant=${i(this,t,u).button}
            rank="secondary"
            size="small"
            aria-label=${W("Dismiss alert")}
            @click=${()=>r(this,t,$).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:x};Y=function(){return this.timeout>0?b`
          <div
            class=${G({"progress-container":!0,[this.variant]:!0})}
            role="timer"
            aria-label=${W("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:x};n.styles=[U,ns];c([v({type:String,reflect:!0})],n.prototype,"variant",2);c([v({type:String})],n.prototype,"label",2);c([v({type:String,reflect:!0})],n.prototype,"role",2);c([v({type:Boolean})],n.prototype,"dismissible",2);c([v({type:Number})],n.prototype,"timeout",2);c([v({type:String,attribute:"button-label"})],n.prototype,"buttonLabel",2);c([E()],n.prototype,"_progress",2);c([E()],n.prototype,"_isClosing",2);c([E()],n.prototype,"_cardHidden",2);n=c([X("gds-alert",{dependsOn:[Z,es,is,rs,as,os]}),j()],n);export{n as G};
