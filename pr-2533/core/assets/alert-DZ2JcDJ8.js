import{i as K,t as q,n as f,O as E,I as J,E as w,a as W,h as v,a3 as S,a4 as D,a5 as Q,U as G,g as X,P as Z,V as j}from"./iframe-C_jDVgJS.js";import{n as ss,e as ts}from"./ref-CR21ZVJK.js";import{G as es}from"./card.component-DpJCZ5vf.js";import{I as is}from"./circle-check.component-C_M5wlqc.js";import{I as as,a as rs}from"./triangle-exclamation.component-CERPX-5C.js";import{I as os}from"./cross-small.component-9me4fMOe.js";const ns=K`
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
`;var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,P=s=>{throw TypeError(s)},c=(s,t,r,h)=>{for(var m=h>1?void 0:h?cs(t,r):t,k=s.length-1,C;k>=0;k--)(C=s[k])&&(m=(h?C(t,r,m):C(m))||m);return h&&m&&ls(t,r,m),m},O=(s,t,r)=>t.has(s)||P("Cannot "+r),a=(s,t,r)=>(O(s,t,"read from private field"),r?r.call(s):t.get(s)),d=(s,t,r)=>t.has(s)?P("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,r),o=(s,t,r,h)=>(O(s,t,"write to private field"),t.set(s,r),r),i=(s,t,r)=>(O(s,t,"access private method"),r),y,u,I,p,g,l,_,M,e,T,x,L,R,z,b,$,B,N,A,H,V,F,U,Y;const ds={positive:{icon:"circle-check",card:"positive"},warning:{icon:"circle-info",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}},hs=300,ps=100;let n=class extends J{constructor(){super(),d(this,e),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,d(this,y),d(this,u),d(this,I,ts()),d(this,p),d(this,g,!1),d(this,l,0),d(this,_,0),d(this,M,{hostConnected:()=>{this.timeout>0&&i(this,e,T).call(this)},hostDisconnected:()=>{i(this,e,x).call(this),i(this,e,b).call(this)}}),this.addController(a(this,M))}updated(s){s.has("timeout")&&(i(this,e,x).call(this),i(this,e,b).call(this),o(this,l,Math.max(0,this.timeout)),this._progress=100,this.timeout>0&&i(this,e,T).call(this))}render(){if(this._cardHidden)return w;const s={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return v`
      <gds-card
        ${ss(a(this,I))}
        role=${this.role}
        aria-label=${this.label}
        variant=${a(this,e,A).card}
        class=${W(s)}
        @keydown=${i(this,e,N)}
        id="alert-message"
        padding="m"
      >
        <div class="wrapper">
          ${i(this,e,H).call(this)} ${i(this,e,V).call(this)}
        </div>
        ${!this.timeout&&this.buttonLabel?i(this,e,F).call(this,this.buttonLabel):w}
        ${i(this,e,U).call(this)} ${i(this,e,Y).call(this)}
      </gds-card>
    `}};y=new WeakMap;u=new WeakMap;I=new WeakMap;p=new WeakMap;g=new WeakMap;l=new WeakMap;_=new WeakMap;M=new WeakMap;e=new WeakSet;T=function(){a(this,p)||(a(this,l)||o(this,l,Math.max(0,this.timeout)),o(this,p,new IntersectionObserver(s=>{const t=s[0],h=((t==null?void 0:t.intersectionRatio)??0)>=.1;h&&!a(this,g)?(o(this,g,!0),i(this,e,R).call(this)):!h&&a(this,g)&&(o(this,g,!1),i(this,e,z).call(this))},{root:null,threshold:[0,.1,1]})),a(this,p).observe(this))};x=function(){a(this,p)&&(a(this,p).disconnect(),o(this,p,void 0)),o(this,g,!1)};L=function(){o(this,_,Date.now()),o(this,u,window.setInterval(()=>{const s=Date.now(),t=s-a(this,_);o(this,_,s),o(this,l,Math.max(0,a(this,l)-t)),this._progress=this.timeout>0?Math.max(0,a(this,l)/this.timeout*100):0,a(this,l)<=0&&i(this,e,$).call(this,"timeout")},ps))};R=function(){a(this,l)<=0||a(this,y)||a(this,u)||i(this,e,L).call(this)};z=function(){i(this,e,b).call(this)};b=function(){clearTimeout(a(this,y)),clearInterval(a(this,u)),o(this,y,o(this,u,void 0))};$=async function(s){this._isClosing=!0,i(this,e,x).call(this),i(this,e,b).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:s},bubbles:!0,composed:!0}),await new Promise(t=>setTimeout(t,hs)),this._cardHidden=!0};B=function(s){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:s},bubbles:!0,composed:!0})};N=function(s){s.key==="Escape"&&this.dismissible&&(s.preventDefault(),i(this,e,$).call(this,"escape"))};A=function(){return ds[this.variant]};H=function(){const s=`gds-icon-${a(this,e,A).icon}`;return v`${Q`<${S(D(s))} class="icon" solid aria-hidden="true" size="24px"></${S(D(s))}>`}`};V=function(){return v`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};F=function(s){return v`
      <gds-button
        class="action"
        .variant=${this.variant}
        rank="secondary"
        @click=${i(this,e,B)}
        aria-describedby="alert-message"
      >
        ${s.trim()}
      </gds-button>
    `};U=function(){return this.dismissible?v`
          <gds-button
            class="close"
            .variant=${this.variant}
            rank="secondary"
            size="small"
            aria-label=${G("Dismiss alert")}
            @click=${()=>i(this,e,$).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:w};Y=function(){return this.timeout>0?v`
          <div
            class=${W({"progress-container":!0,[this.variant]:!0})}
            role="timer"
            aria-label=${G("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:w};n.styles=[q,ns];c([f({type:String,reflect:!0})],n.prototype,"variant",2);c([f({type:String})],n.prototype,"label",2);c([f({type:String,reflect:!0})],n.prototype,"role",2);c([f({type:Boolean})],n.prototype,"dismissible",2);c([f({type:Number})],n.prototype,"timeout",2);c([f({type:String,attribute:"button-label"})],n.prototype,"buttonLabel",2);c([E()],n.prototype,"_progress",2);c([E()],n.prototype,"_isClosing",2);c([E()],n.prototype,"_cardHidden",2);n=c([X("gds-alert",{dependsOn:[j,es,is,as,rs,os]}),Z()],n);n.define();
