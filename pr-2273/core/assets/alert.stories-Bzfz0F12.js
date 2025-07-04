import{n as m,r as L,G as bt,h as c,g as wt,a as S}from"./gds-element-DKcDvDP5.js";import{m as ct}from"./runtime-BL31MtW8.js";import{l as _t}from"./localized-decorator-DtmrKsyB.js";import{i as xt,E as _}from"./lit-element-Bx14lxc-.js";import{e as dt}from"./class-map-CXsQwv0r.js";import{n as At,e as kt}from"./ref-R0wBYijq.js";import{u as Ct,s as E}from"./static-B8S6DEnV.js";import{t as It}from"./tokens.style-CmYXY4s9.js";import{G as Dt}from"./button.component-Bf_l-UmP.js";import{G as Tt}from"./card.component-Dlj0rtu_.js";import{I as $t}from"./circle-check.component-C0o-HlXM.js";import{a as Lt,I as Mt}from"./triangle-exclamation.component-CcEVKe9P.js";import{I as Pt}from"./cross-small.component-Bb4K2Xut.js";import"./card-DJqi3S0f.js";import"./button-WTCrVmy0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DHDn_G-P.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Bw_LIblW.js";import"./watch-tFciLXSI.js";import"./div.component-BEF0gJXA.js";import"./icon-CvL6FCpz.js";const St=xt`
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
    gap: var(--gds-sys-space-s);

    .message {
      max-width: 80ch;
    }
  }

  .dismissible .wrapper {
    margin-top: var(--gds-sys-space-2xs);
  }

  .has-action {
    padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
  }

  .has-action .wrapper {
    margin-top: var(--gds-sys-space-xs);
  }

  .has-action.dismissible .close {
    margin-top: var(--gds-sys-space-2xs);
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
      grid-template-columns: 1fr auto auto;

      .close {
        margin-left: var(--gds-sys-space-xs);
      }

      .icon {
        margin-inline-start: auto;
      }
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .icon {
      forced-color-adjust: none;
    }
  }
`;var Et=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,mt=t=>{throw TypeError(t)},n=(t,e,r,g)=>{for(var l=g>1?void 0:g?Ht(e,r):e,C=t.length-1,I;C>=0;C--)(I=t[C])&&(l=(g?I(e,r,l):I(l))||l);return g&&l&&Et(e,r,l),l},M=(t,e,r)=>e.has(t)||mt("Cannot "+r),d=(t,e,r)=>(M(t,e,"read from private field"),r?r.call(t):e.get(t)),p=(t,e,r)=>e.has(t)?mt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),x=(t,e,r,g)=>(M(t,e,"write to private field"),e.set(t,r),r),a=(t,e,r)=>(M(t,e,"access private method"),r),b,w,D,T,s,$,A,k,gt,pt,P,ut,ht,ft,vt,yt;const Bt={positive:{icon:"circle-check",card:"positive"},warning:{icon:"triangle-exclamation",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}},Gt=300,Nt=100;let i=class extends bt{constructor(){super(),p(this,s),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,p(this,b),p(this,w),p(this,D,kt()),p(this,T,{hostConnected:()=>{this.timeout>0&&a(this,s,$).call(this)},hostDisconnected:()=>a(this,s,A).call(this)}),this.addController(d(this,T))}updated(t){t.has("timeout")&&(a(this,s,A).call(this),this.timeout>0&&a(this,s,$).call(this))}render(){if(this._cardHidden)return _;const t={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return c`
      <gds-card
        ${At(d(this,D))}
        role=${this.role}
        aria-label=${this.label}
        variant=${d(this,s,P).card}
        class=${dt(t)}
        @keydown=${a(this,s,pt)}
        id="alert-message"
        padding="m"
      >
        <div class="wrapper">
          ${a(this,s,ut).call(this)} ${a(this,s,ht).call(this)}
        </div>
        ${!this.timeout&&this.buttonLabel?a(this,s,ft).call(this,this.buttonLabel):_}
        ${a(this,s,vt).call(this)} ${a(this,s,yt).call(this)}
      </gds-card>
    `}};b=new WeakMap;w=new WeakMap;D=new WeakMap;T=new WeakMap;s=new WeakSet;$=function(){const t=Date.now();this._progress=100,x(this,w,window.setInterval(()=>{const e=Date.now()-t;this._progress=Math.max(0,(this.timeout-e)/this.timeout*100)},Nt)),x(this,b,window.setTimeout(()=>a(this,s,k).call(this,"timeout"),this.timeout))};A=function(){clearTimeout(d(this,b)),clearInterval(d(this,w)),x(this,b,x(this,w,void 0))};k=async function(t){this._isClosing=!0,a(this,s,A).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:t},bubbles:!0,composed:!0}),await new Promise(e=>setTimeout(e,Gt)),this._cardHidden=!0};gt=function(t){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:t},bubbles:!0,composed:!0})};pt=function(t){t.key==="Escape"&&this.dismissible&&(t.preventDefault(),a(this,s,k).call(this,"escape"))};P=function(){return Bt[this.variant]};ut=function(){const t=`gds-icon-${d(this,s,P).icon}`;return c`${Ct`<${E(S(t))} class="icon" solid aria-hidden="true" size="24px"></${E(S(t))}>`}`};ht=function(){return c`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};ft=function(t){return c`
      <gds-button
        class="action"
        .variant=${this.variant}
        rank="secondary"
        @click=${a(this,s,gt)}
        aria-describedby="alert-message"
      >
        ${t.trim()}
      </gds-button>
    `};vt=function(){return this.dismissible?c`
          <gds-button
            class="close"
            .variant=${this.variant}
            rank="secondary"
            size="small"
            aria-label=${ct("Dismiss alert")}
            @click=${()=>a(this,s,k).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:_};yt=function(){return this.timeout>0?c`
          <div
            class=${dt({"progress-container":!0,[this.variant]:!0})}
            role="timer"
            aria-label=${ct("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:_};i.styles=[It,St];n([m({type:String,reflect:!0})],i.prototype,"variant",2);n([m({type:String})],i.prototype,"label",2);n([m({type:String,reflect:!0})],i.prototype,"role",2);n([m({type:Boolean})],i.prototype,"dismissible",2);n([m({type:Number})],i.prototype,"timeout",2);n([m({type:String,attribute:"button-label"})],i.prototype,"buttonLabel",2);n([L()],i.prototype,"_progress",2);n([L()],i.prototype,"_isClosing",2);n([L()],i.prototype,"_cardHidden",2);i=n([wt("gds-alert",{dependsOn:[Dt,Tt,$t,Lt,Mt,Pt]}),_t()],i);i.define();const ge={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{variant:{control:"select",options:["information","notice","positive","warning","negative"]},role:{control:"select",options:["alert","status"]}},parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{variant:"information",role:"alert",dismissible:!0,timeout:0,buttonLabel:"",innerHTML:`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.`}},u={args:{},render:()=>c`
    <gds-flex flex-direction="column" gap="m">
      <gds-alert variant="information" role="alert">
        <strong>Information</strong> Body text starts on the same row as
        heading. A link (optional) always ends the message.
      </gds-alert>
      <gds-alert variant="notice" role="alert">
        <strong>Notice</strong> Body text with link or additional context.
      </gds-alert>
      <gds-alert variant="positive" role="alert">
        <strong>Positive</strong> Feedback message with optional CTA.
      </gds-alert>
      <gds-alert variant="warning" role="alert">
        <strong>Warning</strong> Important information to consider.
      </gds-alert>
      <gds-alert variant="negative" role="alert">
        <strong>Negative</strong> Error message requiring user attention.
      </gds-alert>
    </gds-flex>
  `},h={...o,args:{...o.parameters.args,variant:"information",dismissible:!0,buttonLabel:"Take Action",innerHTML:"<strong>Actionable</strong> Alert with a button for quick user interaction."}},f={...o,args:{...o.parameters.args,variant:"information",dismissible:!0,innerHTML:"<strong>Dismissible</strong> User can dismiss this alert."}},v={...o,args:{...o.parameters.args,variant:"positive",timeout:15e3,innerHTML:"<strong>Auto Dismiss</strong> This alert disappears automatically after a delay."}},y={...o,args:{...o.parameters.args,variant:"information",role:"alert",dismissible:!0,buttonLabel:"Learn More",innerHTML:'<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'}};var H,B,G;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: true,
        type: 'dynamic'
      }
    },
    controls: {
      expanded: true
    }
  },
  args: {
    variant: 'information',
    role: 'alert',
    dismissible: true,
    timeout: 0,
    buttonLabel: '',
    innerHTML: \`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.\`
  }
}`,...(G=(B=o.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var N,R,W,O,z;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-alert variant="information" role="alert">
        <strong>Information</strong> Body text starts on the same row as
        heading. A link (optional) always ends the message.
      </gds-alert>
      <gds-alert variant="notice" role="alert">
        <strong>Notice</strong> Body text with link or additional context.
      </gds-alert>
      <gds-alert variant="positive" role="alert">
        <strong>Positive</strong> Feedback message with optional CTA.
      </gds-alert>
      <gds-alert variant="warning" role="alert">
        <strong>Warning</strong> Important information to consider.
      </gds-alert>
      <gds-alert variant="negative" role="alert">
        <strong>Negative</strong> Error message requiring user attention.
      </gds-alert>
    </gds-flex>
  \`
}`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source},description:{story:`Alert is avaliable in multiple variants to indicate different types of messages.
Each variant has a specific color and icon to convey the message type.`,...(z=(O=u.parameters)==null?void 0:O.docs)==null?void 0:z.description}}};var F,q,V,U,Y;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    buttonLabel: 'Take Action',
    innerHTML: \`<strong>Actionable</strong> Alert with a button for quick user interaction.\`
  }
}`,...(V=(q=h.parameters)==null?void 0:q.docs)==null?void 0:V.source},description:{story:"Alerts can have a action button to allow users to take an immediate action.",...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};var K,J,Q,X,Z;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    innerHTML: \`<strong>Dismissible</strong> User can dismiss this alert.\`
  }
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.",...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var j,tt,et,st,rt;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'positive',
    timeout: 15000,
    innerHTML: \`<strong>Auto Dismiss</strong> This alert disappears automatically after a delay.\`
  }
}`,...(et=(tt=v.parameters)==null?void 0:tt.docs)==null?void 0:et.source},description:{story:"Alerts can automatically dismiss themselves after a specified timeout.",...(rt=(st=v.parameters)==null?void 0:st.docs)==null?void 0:rt.description}}};var at,it,ot,nt,lt;y.parameters={...y.parameters,docs:{...(at=y.parameters)==null?void 0:at.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    role: 'alert',
    dismissible: true,
    buttonLabel: 'Learn More',
    innerHTML: \`<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>\`
  }
}`,...(ot=(it=y.parameters)==null?void 0:it.docs)==null?void 0:ot.source},description:{story:"Alerts can contain rich content in the main slot.",...(lt=(nt=y.parameters)==null?void 0:nt.docs)==null?void 0:lt.description}}};const pe=["DefaultParams","Variants","WithAction","Dismissible","AutoDismiss","RichContent"];export{v as AutoDismiss,o as DefaultParams,f as Dismissible,y as RichContent,u as Variants,h as WithAction,pe as __namedExportsOrder,ge as default};
